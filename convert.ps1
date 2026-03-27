$word = New-Object -ComObject Word.Application
$word.Visible = $false
$docPath = "D:\吹膜机外贸\1\铸信+样本+2026.3.docx"
$doc = $word.Documents.Open($docPath)
$txtPath = "D:\吹膜机外贸\1\doc_content.txt"
$doc.SaveAs([ref]$txtPath, [ref]2)
$doc.Close()
$word.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
Write-Output "Saved to doc_content.txt"
