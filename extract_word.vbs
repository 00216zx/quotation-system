' VBScript to extract Word document content
On Error Resume Next

Set objWord = CreateObject("Word.Application")
objWord.Visible = False

Set objFSO = CreateObject("Scripting.FileSystemObject")
strPath = objFSO.GetAbsolutePathName("铸信+样本+2026.3.docx")
WScript.Echo "Reading file: " & strPath

Set objDoc = objWord.Documents.Open(strPath)

If Err.Number <> 0 Then
    WScript.Echo "Error opening file: " & Err.Description
    objWord.Quit
    WScript.Quit
End If

' Extract text
strText = objDoc.Content.Text
WScript.Echo "=== Document Content (first 3000 chars) ==="
WScript.Echo Left(strText, 3000)

' Save to file
Set outFile = objFSO.CreateTextFile("extracted_vbs.txt", True, True)
outFile.Write strText
outFile.Close
WScript.Echo vbCrLf & "Content saved to extracted_vbs.txt"

objDoc.Close
objWord.Quit

Set objDoc = Nothing
Set objWord = Nothing
Set objFSO = Nothing
