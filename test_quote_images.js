// 测试报价单HTML中的图片加载逻辑
// 可以在浏览器控制台中运行此脚本

console.log('🔍 开始测试报价单图片加载逻辑...');

// 测试机型列表
const testModels = [
    'YT-600', 'YT-800', 'YT-1000',  // 印刷机
    'DFL-600', 'DFL-800', 'DFL-1000',  // 制袋机
    'SHXJ-A-600', 'SHXJ-600',  // 制袋机
    'ZXCS-800', 'ZXCS-1000',  // 制袋机
    'MONO-45', 'ABA-900'  // 吹膜机
];

// 模拟报价单HTML中的图片加载函数
function getLocalImageForModel(modelName) {
    const extensions = ['.png', '.jpg', '.jpeg', '.gif'];
    
    // 处理特殊字符：Windows文件系统不支持 × 和 / 等字符
    // 尝试多种可能的文件夹名称变体
    let folderNames = [modelName];
    
    // 替换 × 为 x 或 2
    if (modelName.includes('×')) {
        folderNames.push(modelName.replace(/×/g, 'x'));
        folderNames.push(modelName.replace(/×/g, '2'));
    }
    
    // 替换 / 为 -
    if (modelName.includes('/')) {
        folderNames.push(modelName.replace(/\//g, '-'));
    }
    
    const possibleImages = [];
    folderNames.forEach(folderName => {
        extensions.forEach(ext => {
            possibleImages.push(`./images/${folderName}/${folderName}${ext}`);
        });
    });
    
    return possibleImages;
}

// 测试单个机型的图片加载
function testModelImage(modelName) {
    console.log(`\n📱 测试机型: ${modelName}`);
    
    const possibleImages = getLocalImageForModel(modelName);
    console.log(`📋 生成的图片路径:`, possibleImages);
    
    // 尝试加载第一张图片
    const img = new Image();
    img.onload = function() {
        console.log(`✅ 图片加载成功: ${possibleImages[0]}`);
    };
    img.onerror = function() {
        console.log(`❌ 图片加载失败: ${possibleImages[0]}`);
        // 尝试其他路径
        if (possibleImages.length > 1) {
            console.log(`🔄 尝试其他路径...`);
            for (let i = 1; i < possibleImages.length; i++) {
                const altImg = new Image();
                altImg.onload = function() {
                    console.log(`✅ 图片加载成功 (备用路径): ${possibleImages[i]}`);
                };
                altImg.onerror = function() {
                    console.log(`❌ 图片加载失败 (备用路径): ${possibleImages[i]}`);
                };
                altImg.src = possibleImages[i];
            }
        }
    };
    img.src = possibleImages[0];
}

// 批量测试所有机型
function testAllModels() {
    console.log(`🚀 开始批量测试 ${testModels.length} 个机型...`);
    
    testModels.forEach((model, index) => {
        setTimeout(() => {
            testModelImage(model);
            if (index === testModels.length - 1) {
                console.log('\n🏁 测试完成！');
            }
        }, index * 1000);
    });
}

// 运行测试
testAllModels();

// 导出测试函数到全局作用域
window.testQuoteImages = {
    testModel: testModelImage,
    testAll: testAllModels,
    getImagePaths: getLocalImageForModel
};

console.log('\n💡 提示: 可以在控制台中运行以下命令进行测试:');
console.log('- testQuoteImages.testModel("YT-600") - 测试单个机型');
console.log('- testQuoteImages.testAll() - 测试所有机型');
console.log('- testQuoteImages.getImagePaths("YT-600") - 获取机型的图片路径');
