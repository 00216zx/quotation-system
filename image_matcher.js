// 图片自动匹配工具
class ImageMatcher {
    constructor() {
        this.imagesFolder = 'images';
        this.productDB = null;
    }

    // 加载产品数据库
    loadProductDB() {
        if (typeof productDB !== 'undefined') {
            this.productDB = productDB;
            return true;
        }
        return false;
    }

    // 扫描图片文件夹并匹配型号
    async scanImages() {
        try {
            // 返回空数组，因为我们将直接根据型号查找图片
            return [];
        } catch (error) {
            console.error('扫描图片失败:', error);
            return [];
        }
    }

    // 自动匹配图片到产品型号
    async matchImages() {
        if (!this.loadProductDB()) {
            console.error('产品数据库未加载');
            return;
        }

        const matchedImages = [];

        // 遍历所有产品系列
        Object.keys(this.productDB).forEach(series => {
            const models = this.productDB[series];
            Object.keys(models).forEach(model => {
                // 优先尝试.png扩展名，因为有些文件夹的图片是.png格式的
                const imagePath = `${this.imagesFolder}/${model}/${model}.png`;
                // 更新产品数据库中的图片路径
                models[model].image = imagePath;
                matchedImages.push({
                    series,
                    model,
                    image: imagePath
                });
            });
        });

        return matchedImages;
    }

    // 优化图片展示
    optimizeImageDisplay() {
        // 在报价单页面中优化图片展示
        if (typeof document !== 'undefined') {
            // 增强产品图片容器
            const style = document.createElement('style');
            style.textContent = `
                /* 产品图片容器优化 */
                #productImageContainer {
                    position: relative;
                    width: 100%;
                    height: 300px !important;
                    border: 2px solid #e5e7eb;
                    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                }

                /* 图片加载动画 */
                #productImage {
                    display: block;
                    width: 100% !important;
                    height: 100% !important;
                    object-fit: contain !important;
                    transition: all 0.3s ease-in-out;
                    background: white;
                }

                #productImage:hover {
                    transform: scale(1.02);
                }

                /* 图片加载占位符 */
                #productImagePlaceholder {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    transition: all 0.3s ease;
                }

                #productImagePlaceholder i {
                    font-size: 4rem;
                    color: #d1d5db;
                    margin-bottom: 1rem;
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }

                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }

                /* 图片标题样式 */
                #productImageTitle {
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: #4b5563;
                    text-align: center;
                    margin-top: 0.75rem;
                    padding: 0.5rem;
                    background: #f9fafb;
                    border-radius: 0.375rem;
                    border: 1px solid #e5e7eb;
                }

                /* 响应式调整 */
                @media (max-width: 768px) {
                    #productImageContainer {
                        height: 250px !important;
                    }
                }

                @media (max-width: 640px) {
                    #productImageContainer {
                        height: 200px !important;
                    }
                }
            `;
            document.head.appendChild(style);

            // 增强图片更新函数
            if (typeof updateProductImage === 'function') {
                const originalUpdateProductImage = updateProductImage;
                window.updateProductImage = function(model, imageUrl) {
                    originalUpdateProductImage(model, imageUrl);
                    
                    // 添加加载动画效果
                    const productImage = document.getElementById('productImage');
                    if (productImage && imageUrl) {
                        productImage.style.opacity = '0';
                        productImage.onload = function() {
                            productImage.style.opacity = '1';
                        };
                    }
                };
            }
        }
    }

    // 导出更新后的产品数据库
    exportUpdatedDB() {
        if (this.productDB) {
            const updatedDB = JSON.stringify(this.productDB, null, 2);
            console.log('更新后的产品数据库:', updatedDB);
            return updatedDB;
        }
        return null;
    }
}

// 创建图片匹配器实例
const imageMatcher = new ImageMatcher();

// 自动执行匹配和优化
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', async () => {
        console.log('开始自动匹配图片...');
        const matched = await imageMatcher.matchImages();
        console.log('匹配结果:', matched);
        imageMatcher.optimizeImageDisplay();
        console.log('图片展示优化完成');
    });
}
