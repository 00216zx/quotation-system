' 提取Word内容并保存到文件
On Error Resume Next

Set objFSO = CreateObject("Scripting.FileSystemObject")
Set objWord = CreateObject("Word.Application")
objWord.Visible = False

' 查找docx文件
For Each objFile In objFSO.GetFolder(".").Files
    If LCase(objFSO.GetExtensionName(objFile.Name)) = "docx" Then
        WScript.Echo "Processing: " & objFile.Name
        
        ' 尝试多种方式打开文件
        On Error Resume Next
        Set objDoc = objWord.Documents.Open(objFile.Path, False, True, False)
        
        If Err.Number = 0 Then
            ' 提取所有文本
            fullText = objDoc.Content.Text
            
            ' 保存到文件
            Set outFile = objFSO.CreateTextFile("full_content.txt", True, False)
            outFile.Write fullText
            outFile.Close
            
            WScript.Echo "Content saved to full_content.txt"
            WScript.Echo "Total characters: " & Len(fullText)
            
            ' 显示前2000字符预览
            WScript.Echo vbCrLf & "=== 预览 ==="
            WScript.Echo Left(fullText, 2000)
            
            objDoc.Close
        Else
            WScript.Echo "Failed to open: " & Err.Description
        End If
        
        Exit For
    End If
Next

objWord.Quit
Set objWord = Nothing
Set objFSO = Nothing
