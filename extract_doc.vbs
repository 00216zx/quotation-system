Option Explicit

' 创建Word应用程序对象
Dim objWord, objDoc, objRange
Set objWord = CreateObject("Word.Application")
objWord.Visible = False

' 打开文档
Dim strDocPath
strDocPath = "D:\吹膜机外贸\1\铸信+样本+2026.3.docx"

On Error Resume Next
Set objDoc = objWord.Documents.Open(strDocPath)
If Err.Number <> 0 Then
    WScript.Echo "无法打开文档: " & Err.Description
    objWord.Quit
    WScript.Quit
End If
On Error GoTo 0

' 读取文档内容
Set objRange = objDoc.Content
Dim strContent
strContent = objRange.Text

' 保存内容到文本文件
Dim objFSO, objFile
Set objFSO = CreateObject("Scripting.FileSystemObject")
Set objFile = objFSO.CreateTextFile("D:\吹膜机外贸\1\doc_content_new.txt", True, True)
objFile.Write strContent
objFile.Close

' 关闭文档和Word
objDoc.Close False
objWord.Quit

' 释放对象
Set objFile = Nothing
Set objFSO = Nothing
Set objRange = Nothing
Set objDoc = Nothing
Set objWord = Nothing

WScript.Echo "文档内容已提取到 doc_content_new.txt"
