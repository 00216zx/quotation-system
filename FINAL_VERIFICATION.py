import os
import re

def final_verification():
    """最终验证所有机型的图片配置"""
    images_dir = "d:\\吹膜机外贸\\报价单\\images"
    js_file = "d:\\吹膜机外贸\\报价单\\product_database.js"
    html_file = "d:\\吹膜机外贸\\报价单\\报价单.html"
    
    print("="*80)
    print("最终验证 - 所有机型图片配置")
    print("="*80)
    
    # 1. 读取product_database.js文件，提取所有机型
    print("\n[1/4] 读取product_database.js文件...")
    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    model_pattern = r"'([A-Z0-9\-×x]+)':\s*\{"
    models = re.findall(model_pattern, content)
    models = sorted(list(set(models)))
    
    print(f"   [OK] 找到 {len(models)} 个机型")
    
    # 2. 验证图片文件夹和文件
    print("\n[2/4] 验证图片文件夹和文件...")
    missing_folders = []
    missing_images = []
    existing_images = []
    
    for model in models:
        folder_name = model.replace('×', 'x')
        folder_path = os.path.join(images_dir, folder_name)
        
        if not os.path.exists(folder_path):
            missing_folders.append(model)
            continue
        
        # 检查图片文件
        image_extensions = ['.png', '.jpg', '.jpeg', '.gif']
        has_image = False
        
        for ext in image_extensions:
            image_path = os.path.join(folder_path, folder_name + ext)
            if os.path.exists(image_path):
                has_image = True
                existing_images.append({
                    'model': model,
                    'folder': folder_name,
                    'image': folder_name + ext
                })
                break
        
        if not has_image:
            # 尝试变体
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
                                'folder': alt_folder_name,
                                'image': alt_folder_name + ext,
                                'note': '使用变体'
                            })
                            break
            
            if not has_image:
                missing_images.append(model)
    
    print(f"   [OK] 文件夹存在: {len(models) - len(missing_folders)}/{len(models)}")
    print(f"   [OK] 图片存在: {len(existing_images)}/{len(models)}")
    
    if missing_folders:
        print(f"   [FAIL] 缺失文件夹: {len(missing_folders)}")
        for folder in missing_folders:
            print(f"      - {folder}")
    
    if missing_images:
        print(f"   [FAIL] 缺失图片: {len(missing_images)}")
        for image in missing_images:
            print(f"      - {image}")
    
    # 3. 验证HTML文件中的图片加载逻辑
    print("\n[3/4] 验证HTML文件中的图片加载逻辑...")
    with open(html_file, 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    # 检查关键函数
    functions_to_check = [
        'getLocalImageForModel',
        'loadProductImage',
        'getImageForSeries'
    ]
    
    functions_found = []
    for func in functions_to_check:
        if func in html_content:
            functions_found.append(func)
    
    print(f"   [OK] 找到 {len(functions_found)}/{len(functions_to_check)} 个关键函数")
    for func in functions_found:
        print(f"      - {func}")
    
    # 4. 生成最终报告
    print("\n[4/4] 生成最终验证报告...")
    
    success = len(missing_folders) == 0 and len(missing_images) == 0 and len(functions_found) == len(functions_to_check)
    
    print("\n" + "="*80)
    print("验证结果汇总")
    print("="*80)
    print(f"总机型数: {len(models)}")
    print(f"文件夹完整: {'[OK] 全部存在' if len(missing_folders) == 0 else f'[FAIL] 缺失{len(missing_folders)}个'}")
    print(f"图片完整: {'[OK] 全部存在' if len(missing_images) == 0 else f'[FAIL] 缺失{len(missing_images)}个'}")
    print(f"函数完整: {'[OK] 全部存在' if len(functions_found) == len(functions_to_check) else f'[FAIL] 缺失{len(functions_to_check) - len(functions_found)}个'}")
    print("="*80)
    
    if success:
        print("\n[SUCCESS] 验证成功！所有机型图片配置完整，可以正常使用。")
    else:
        print("\n[WARNING] 验证失败！请检查上述问题并修复。")
    
    # 保存验证报告
    report = {
        'total_models': len(models),
        'missing_folders': missing_folders,
        'missing_images': missing_images,
        'functions_found': functions_found,
        'success': success,
        'timestamp': '2026-03-27'
    }
    
    import json
    with open('final_verification_report.json', 'w', encoding='utf-8') as f:
        json.dump(report, f, ensure_ascii=False, indent=2)
    
    print("\n验证报告已保存到 final_verification_report.json")
    
    return success

if __name__ == "__main__":
    final_verification()