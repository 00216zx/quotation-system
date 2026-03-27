# PowerShell脚本提取Word文档内容
$ErrorActionPreference = "SilentlyContinue"

try {
    $word = New-Object -ComObject Word.Application
    $word.Visible = $false
    
    $docPath = (Get-Item "铸信+样本+2026.3.docx").FullName
    Write-Host "正在读取文档: $docPath"
    
    $doc = $word.Documents.Open($docPath)
    
    # 提取段落文本
    Write-Host "`n=== 文档内容 ==="
    $content = $doc.Content.Text
    Write-Host $content.Substring(0, [Math]::Min(5000, $content.Length))
    
    # 提取表格
    Write-Host "`n`n=== 表格内容 ==="
    for ($t = 1; $t -le $doc.Tables.Count; $t++) {
        $table = $doc.Tables.Item($t)
        Write-Host "`n--- 表格 $t ---"
        for ($r = 1; $r -le [Math]::Min(10, $table.Rows.Count); $r++) {
            $rowText = @()
            for ($c = 1; $c -le $table.Columns.Count; $c++) {
                $cellText = $table.Cell($r, $c).Range.Text.Trim()
                $rowText += $cellText
            }
            Write-Host ($rowText -join " | ")
        }
        if ($table.Rows.Count -gt 10) {
            Write-Host "... (更多行)"
        }
    }
    
    # 保存到文件
    $outputFile = "word_extracted.txt"
    $doc.Content.Text | Out-File -FilePath $outputFile -Encoding UTF8
    Write-Host "`n`n内容已保存到: $outputFile"
    
    $doc.Close()
    $word.Quit()
    
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($doc) | Out-Null
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
    [System.GC]::Collect()
    [System.GC]::WaitForPendingFinalizers()
}
catch {
    Write-Host "错误: $_"
    try {
        $doc.Close()
        $word.Quit()
    }
    catch {}
}
