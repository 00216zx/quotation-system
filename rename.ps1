$imagesPath = "d:\吹膜机外贸\报价单\images"

Get-ChildItem $imagesPath -Directory | ForEach-Object {
    $folderName = $_.Name
    $folderPath = $_.FullName
    
    Get-ChildItem $folderPath -File | Where-Object {
        $_.Extension -in ".jpg", ".jpeg", ".png", ".gif"
    } | ForEach-Object {
        $newName = "$folderName$($_.Extension)"
        $newPath = Join-Path $folderPath $newName
        Rename-Item $_.FullName $newPath -Force
    }
}
