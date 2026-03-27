# 遍历images文件夹下的所有子文件夹
Get-ChildItem "d:\吹膜机外贸\报价单\images" -Directory | ForEach-Object {
    $folderName = $_.Name
    Write-Host "Processing folder: $folderName"
    
    # 获取文件夹内的所有图片文件
    $imageFiles = Get-ChildItem $_.FullName -File | Where-Object {
        $_.Extension -match '\.(jpg|jpeg|png|gif)$'
    }
    
    foreach ($file in $imageFiles) {
        $extension = $file.Extension
        $newName = "$folderName$extension"
        $newPath = Join-Path $file.Directory.FullName $newName
        
        # 如果新文件名已存在，先删除
        if (Test-Path $newPath) {
            Remove-Item $newPath -Force
        }
        
        Write-Host "Renaming $($file.Name) to $newName"
        Rename-Item $file.FullName $newPath -Force
    }
}

Write-Host "All images have been renamed successfully!"
