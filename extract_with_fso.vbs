' 使用VBScript和FSO提取Word文档内容
On Error Resume Next

Set objFSO = CreateObject("Scripting.FileSystemObject")
Set objFolder = objFSO.GetFolder(".")

' 查找docx文件
For Each objFile In objFolder.Files
    If LCase(objFSO.GetExtensionName(objFile.Name)) = "docx" Then
        WScript.Echo "Found file: " & objFile.Name
        WScript.Echo "Full path: " & objFile.Path
        
        ' 尝试打开Word文档
        Set objWord = CreateObject("Word.Application")
        objWord.Visible = False
        
        Set objDoc = objWord.Documents.Open(objFile.Path)
        
        If Err.Number <> 0 Then
            WScript.Echo "Error: " & Err.Number & " - " & Err.Description
            Err.Clear
        Else
            ' 提取文本
            WScript.Echo vbCrLf & "=== 文档内容预览 ==="
            WScript.Echo Left(objDoc.Content.Text, 5000)
            
            ' 保存到文件
            Set outFile = objFSO.CreateTextFile("document_content.txt", True, True)
            outFile.Write objDoc.Content.Text
            outFile.Close
            WScript.Echo vbCrLf & "内容已保存到 document_content.txt"
            
            ' 提取表格
            WScript.Echo vbCrLf & "=== 表格内容 ==="
            For i = 1 To objDoc.Tables.Count
                WScript.Echo vbCrLf & "--- 表格 " & i & " ---"
                Set table = objDoc.Tables(i)
                For r = 1 To table.Rows.Count
                    rowText = ""
                    For c = 1 To table.Columns.Count
                        If c > 1 Then rowText = rowText & " | "
                        rowText = rowText & table.Cell(r, c).Range.Text
                    Next
                    WScript.Echo rowText
                    If r >= 10 Then
                        WScript.Echo "... (更多行)"
                        Exit For
                    End If
                Next
            Next
            
            objDoc.Close
        End If
        
        objWord.Quit
        Set objWord = Nothing
        Exit For
    End If
Next

Set objFSO = Nothing
