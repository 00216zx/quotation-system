$imagesPath = "d:\吹膜机外贸\报价单\images"

# 确保images文件夹存在
if (!(Test-Path $imagesPath)) {
    New-Item -ItemType Directory -Path $imagesPath -Force
}

# 型号列表
$models = @(
    "ABA-900", "ABA-1100", "ABA-1300",
    "ABA-CO-900", "ABA-CO-1100", "ABA-CO-1300",
    "ABC-1300", "ABC-1600", "ABC-2100",
    "ABC-1400", "ABC-1700", "ABC-2200",
    "5FFS-IBC",
    "AB-1100", "AB-1600", "AB-2000",
    "PP-600", "PP-800", "PP-1000",
    "MONO-45", "MONO-50", "MONO-55", "MONO-60", "MONO-65",
    "MONO-75", "MONO-100",
    "MONO-PRO-45", "MONO-PRO-50", "MONO-PRO-55", "MONO-PRO-60", "MONO-PRO-65",
    "SJ-60", "SJ-70",
    "SJ-P45", "SJ-P50", "SJ-P55", "SJ-P60", "SJ-P65",
    "S-40Dx2x700",
    "MINI-45", "MINI-45-PRO",
    "DFL-500", "DFL-600", "DFL-700", "DFL-800", "DFL-1000",
    "SHXJ-A-500", "SHXJ-A-600", "SHXJ-A-700", "SHXJ-A-800",
    "ZXCS-800", "ZXCS-1000",
    "ZXF-500",
    "ZX-400×2",
    "ZX-1300TF",
    "ZB-FFS800",
    "GFQ-600", "GFQ-800", "GFQ-1000", "GFQ-1200", "GFQ-1000TF",
    "CY-HB",
    "CY-500C", "CY-500x2",
    "CY-800ZD",
    "CY-SH-6LINES", "CY-SH-8LINES", "CY-SH-4LINES",
    "CY-430×2", "CY-500×2",
    "CY-600/700/800"
)

# 创建文件夹
$count = 0
foreach ($model in $models) {
    $folderPath = Join-Path $imagesPath $model
    if (!(Test-Path $folderPath)) {
        New-Item -ItemType Directory -Path $folderPath -Force
        Write-Host "Created: $model"
        $count++
    } else {
        Write-Host "Exists: $model"
    }
}

Write-Host "\nTotal folders created: $count"
Write-Host "Total models: $($models.Count)"
