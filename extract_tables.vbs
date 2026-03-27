' 提取表格数据
On Error Resume Next

Set objFSO = CreateObject("Scripting.FileSystemObject")
Set objWord = CreateObject("Word.Application")
objWord.Visible = False

For Each objFile In objFSO.GetFolder(".").Files
    If LCase(objFSO.GetExtensionName(objFile.Name)) = "docx" Then
        Set objDoc = objWord.Documents.Open(objFile.Path, False, True, False)
        
        If Err.Number = 0 Then
            WScript.Echo "Tables found: " & objDoc.Tables.Count
            
            ' 提取表格数据
            Set outFile = objFSO.CreateTextFile("tables_data.txt", True, False)
            
            For t = 1 To objDoc.Tables.Count
                Set table = objDoc.Tables(t)
                outFile.WriteLine "=== TABLE " & t & " ==="
                
                For r = 1 To table.Rows.Count
                    rowData = ""
                    For c = 1 To table.Columns.Count
                        On Error Resume Next
                        cellText = table.Cell(r, c).Range.Text
                        cellText = Replace(cellText, Chr(7), "") ' 去除特殊字符
                        cellText = Trim(cellText)
                        If c > 1 Then rowData = rowData & "|||"
                        rowData = rowData & cellText
                    Next
                    outFile.WriteLine rowData
                Next
                outFile.WriteLine ""
            Next
            
            outFile.Close
            WScript.Echo "Tables saved to tables_data.txt"
            
            objDoc.Close
        End If
        Exit For
    End If
Next

objWord.Quit
