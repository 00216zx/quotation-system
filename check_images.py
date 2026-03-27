import os
import re
import json

def extract_models_from_js():
    """从product_database.js文件中提取所有机型名称"""
    js_file = "d:\\吹膜机外贸\\报价单\\product_database.js"
    
    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 匹配机型名称的正则表达式
    # 匹配类似 'ABA-900': { 这样的模式
    model_pattern = r"'([A-Z0-9\-×x]+)':\s*\{"
    models = re.findall(model_pattern, content)
    
    # 去重并排序
    models = sorted(list(set(models)))
    
    print("在product_database.js中找到", len(models), "个机型:")
    for i, model in enumerate(models, 1):
        print(f"{i}. {model}")
    
    # 检查YT-1000是否在列表中
    if 'YT-1000' in models:
        print("\n[DEBUG] YT-1000 在机型列表中")
    else:
        print("\n[DEBUG] YT-1000 不在机型列表中")
    
    return models

def check_images_for_models(models):
    """检查每个机型是否有对应的图片文件夹和图片"""
    images_dir = "d:\\吹膜机外贸\\报价单\\images"
    
    print("\n" + "="*80)
    print("检查图片存在性")
    print("="*80)
    
    missing_images = []
    existing_images = []
    
    # 专门检查YT-1000
    print("\n[DEBUG] 专门检查YT-1000:")
    yt1000_folder = os.path.join(images_dir, 'YT-1000')
    if os.path.exists(yt1000_folder):
        print(f"[DEBUG] YT-1000文件夹存在: {yt1000_folder}")
        # 检查文件夹中的文件
        files = os.listdir(yt1000_folder)
        print(f"[DEBUG] YT-1000文件夹中的文件: {files}")
    else:
        print(f"[DEBUG] YT-1000文件夹不存在: {yt1000_folder}")
    
    for model in models:
        # 处理特殊字符：× 替换为 x
        folder_name = model.replace('×', 'x')
        folder_path = os.path.join(images_dir, folder_name)
        
        if os.path.exists(folder_path):
            # 检查文件夹中是否有图片
            image_files = []
            for ext in ['.png', '.jpg', '.jpeg', '.gif']:
                image_path = os.path.join(folder_path, folder_name + ext)
                if os.path.exists(image_path):
                    image_files.append(image_path)
            
            if image_files:
                existing_images.append({
                    'model': model,
                    'folder': folder_name,
                    'images': image_files
                })
                print(f"[OK] {model}: 找到 {len(image_files)} 张图片")
            else:
                missing_images.append({
                    'model': model,
                    'folder': folder_name,
                    'reason': '文件夹存在但没有图片'
                })
                print(f"[FAIL] {model}: 文件夹存在但没有图片")
        else:
            # 检查是否有其他变体（比如 x 和 × 的区别）
            found = False
            # 尝试其他变体
            if '×' in model:
                # 尝试使用 x 的变体
                alt_folder_name = model.replace('×', 'x')
                alt_folder_path = os.path.join(images_dir, alt_folder_name)
                if os.path.exists(alt_folder_path):
                    # 检查文件夹中是否有图片
                    image_files = []
                    for ext in ['.png', '.jpg', '.jpeg', '.gif']:
                        image_path = os.path.join(alt_folder_path, alt_folder_name + ext)
                        if os.path.exists(image_path):
                            image_files.append(image_path)
                    
                    if image_files:
                        existing_images.append({
                            'model': model,
                            'folder': alt_folder_name,
                            'images': image_files,
                            'note': '使用了变体文件夹名称'
                        })
                        print(f"[OK] {model}: 找到 {len(image_files)} 张图片 (使用变体 {alt_folder_name})")
                        found = True
            
            if not found:
                missing_images.append({
                    'model': model,
                    'folder': folder_name,
                    'reason': '文件夹不存在'
                })
                print(f"[FAIL] {model}: 文件夹不存在")
    
    # 生成报告
    print("\n" + "="*80)
    print("检查结果汇总")
    print("="*80)
    print(f"总机型数: {len(models)}")
    print(f"有图片的机型: {len(existing_images)}")
    print(f"缺失图片的机型: {len(missing_images)}")
    
    if missing_images:
        print("\n" + "="*80)
        print("缺失图片的机型详情:")
        print("="*80)
        for item in missing_images:
            print(f"- {item['model']}: {item['reason']}")
    
    # 保存结果到JSON文件
    result = {
        'total_models': len(models),
        'existing_images': existing_images,
        'missing_images': missing_images
    }
    
    with open('image_check_result.json', 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=2)
    
    print("\n检查结果已保存到 image_check_result.json")
    
    return result

def main():
    print("开始检查所有机型的图片存在性...")
    print("="*80)
    
    # 提取机型
    models = extract_models_from_js()
    
    # 检查图片
    result = check_images_for_models(models)
    
    print("\n检查完成!")

if __name__ == "__main__":
    main()