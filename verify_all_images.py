import os
import re

def verify_all_images():
    """验证所有机型的图片都存在"""
    images_dir = "d:\\吹膜机外贸\\报价单\\images"
    js_file = "d:\\吹膜机外贸\\报价单\\product_database.js"
    
    print("开始验证所有机型的图片...")
    print("="*80)
    
    # 读取product_database.js文件
    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 提取所有机型名称
    model_pattern = r"'([A-Z0-9\-×x]+)':\s*\{"
    models = re.findall(model_pattern, content)
    models = sorted(list(set(models)))
    
    print(f"在product_database.js中找到 {len(models)} 个机型")
    
    # 验证每个机型
    missing_images = []
    existing_images = []
    
    for model in models:
        # 处理特殊字符
        folder_name = model.replace('×', 'x')
        folder_path = os.path.join(images_dir, folder_name)
        
        # 检查文件夹是否存在
        if not os.path.exists(folder_path):
            missing_images.append({
                'model': model,
                'reason': '文件夹不存在'
            })
            continue
        
        # 检查文件夹中是否有图片
        image_extensions = ['.png', '.jpg', '.jpeg', '.gif']
        has_image = False
        
        for ext in image_extensions:
            image_path = os.path.join(folder_path, folder_name + ext)
            if os.path.exists(image_path):
                has_image = True
                existing_images.append({
                    'model': model,
                    'image_path': image_path
                })
                break
        
        if not has_image:
            # 尝试其他变体
            if '×' in model:
                alt_folder_name = model.replace('×', 'x')
                alt_folder_path = os.path.join(images_dir, alt_folder_name)
                if os.path.exists(alt_folder_path):
                    for ext in image_extensions:
                        alt_image_path = os.path.join(alt_folder_path, alt_folder_name + ext)
                        if os.path.exists(alt_image_path):
                            has_image = True
                            existing_images.append({
                                'model': model,
                                'image_path': alt_image_path,
                                'note': '使用变体'
                            })
                            break
            
            if not has_image:
                missing_images.append({
                    'model': model,
                    'reason': '文件夹存在但没有图片'
                })
    
    # 输出结果
    print("\n" + "="*80)
    print("验证结果汇总")
    print("="*80)
    print(f"总机型数: {len(models)}")
    print(f"有图片的机型: {len(existing_images)}")
    print(f"缺失图片的机型: {len(missing_images)}")
    
    if missing_images:
        print("\n" + "="*80)
        print("缺失图片的机型:")
        print("="*80)
        for item in missing_images:
            print(f"- {item['model']}: {item['reason']}")
    else:
        print("\n" + "="*80)
        print("✓ 所有机型都有图片!")
        print("="*80)
    
    # 检查YT-1000
    print("\n" + "="*80)
    print("YT-1000检查:")
    print("="*80)
    yt1000_folder = os.path.join(images_dir, 'YT-1000')
    if os.path.exists(yt1000_folder):
        print("✓ YT-1000文件夹存在")
        yt1000_png = os.path.join(yt1000_folder, 'YT-1000.png')
        if os.path.exists(yt1000_png):
            print("✓ YT-1000.png存在")
            file_size = os.path.getsize(yt1000_png)
            print(f"  文件大小: {file_size} bytes")
        else:
            print("✗ YT-1000.png不存在")
    else:
        print("✗ YT-1000文件夹不存在")
    
    return len(missing_images) == 0

if __name__ == "__main__":
    success = verify_all_images()
    if success:
        print("\n验证成功! 所有机型都有图片。")
    else:
        print("\n验证失败! 部分机型缺少图片。")