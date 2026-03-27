$word = New-Object -ComObject Word.Application
$word.Visible = $false
$docPath = (Resolve-Path "铸信+样本+2026.3.docx").Path
$doc = $word.Documents.Open($docPath)
Write-Output "=== 文档内容 ==="
Write-Output $doc.Content.Text
$doc.Close()
$word.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
