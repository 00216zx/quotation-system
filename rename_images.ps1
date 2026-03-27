# 遍历images文件夹下的所有子文件夹
Get-ChildItem "d:\吹膜机外贸\报价单\images" -Directory | ForEach-Object {
    $folderName = $_.Name
    Write-Host "Processing folder: $folderName"
    
    # 获取文件夹内的所有图片文件
    Get-ChildItem $_.FullName -File | Where-Object {
        $_.Extension -match '\.(jpg|jpeg|png|gif)$'
    } | ForEach-Object {
        $extension = $_.Extension
        $newName = "$folderName$extension"
        $newPath = Join-Path $_.Directory.FullName $newName
        
        Write-Host "Renaming $($_.Name) to $newName"
        Rename-Item $_.FullName $newPath -Force
    }
}

Write-Host "All images have been renamed successfully!"