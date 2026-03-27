# 创建制袋机和吹膜机型号的图片文件夹
$imagesPath = "d:\吹膜机外贸\报价单\images"

# 确保images文件夹存在
if (-not (Test-Path $imagesPath)) {
    New-Item -ItemType Directory -Path $imagesPath -Force
}

# 吹膜机型号
$filmBlowingModels = @(
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
    "MINI-45", "MINI-45-PRO"
)

# 制袋机型号
$bagMakerModels = @(
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

# 合并所有型号
$allModels = $filmBlowingModels + $bagMakerModels

# 为每个型号创建文件夹
foreach ($model in $allModels) {
    $modelPath = Join-Path $imagesPath $model
    if (-not (Test-Path $modelPath)) {
        New-Item -ItemType Directory -Path $modelPath -Force
        Write-Host "创建文件夹: $model"
    } else {
        Write-Host "文件夹已存在: $model"
    }
}

Write-Host "\n所有文件夹创建完成!"
Write-Host "总共创建了 $($allModels.Count) 个文件夹"
