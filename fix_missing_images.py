import os
import shutil
import json

def fix_missing_images():
    """修复缺失的图片"""
    images_dir = "d:\\吹膜机外贸\\报价单\\images"
    
    # 读取检查结果
    with open('image_check_result.json', 'r', encoding='utf-8') as f:
        result = json.load(f)
    
    missing_images = result['missing_images']
    
    print("开始修复缺失的图片...")
    print("="*80)
    
    # 定义相似机型的映射
    similar_models = {
        'RQL-600': 'DFL-600',
        'RQL-800': 'DFL-800',
        'RQL-1000': 'DFL-1000',
        'SHXJ-600': 'SHXJ-A-600',
        'SHXJ-800': 'SHXJ-A-800',
        'SHXJ-1000': 'SHXJ-A-800',
        'SHXJ-1200': 'SHXJ-A-800',
        'SHXJ-6LINES': 'CY-SH-6LINES',
        'ZXCS-800': 'ZX-1300TF',
        'ZXCS-1000': 'ZX-1300TF'
    }
    
    fixed_count = 0
    
    for item in missing_images:
        model = item['model']
        folder_name = item['folder']
        folder_path = os.path.join(images_dir, folder_name)
        
        print(f"\n处理机型: {model}")
        
        # 创建文件夹（如果不存在）
        if not os.path.exists(folder_path):
            os.makedirs(folder_path)
            print(f"  创建文件夹: {folder_name}")
        
        # 查找相似机型的图片
        similar_model = similar_models.get(model)
        if similar_model:
            similar_folder = similar_model.replace('×', 'x')
            similar_folder_path = os.path.join(images_dir, similar_folder)
            
            # 查找相似机型的图片
            similar_image = None
            for ext in ['.png', '.jpg', '.jpeg', '.gif']:
                similar_image_path = os.path.join(similar_folder_path, similar_folder + ext)
                if os.path.exists(similar_image_path):
                    similar_image = similar_image_path
                    break
            
            if similar_image:
                # 复制图片到新文件夹
                ext = os.path.splitext(similar_image)[1]
                new_image_path = os.path.join(folder_path, folder_name + ext)
                
                shutil.copy2(similar_image, new_image_path)
                print(f"  复制图片: {similar_image} -> {new_image_path}")
                fixed_count += 1
            else:
                print(f"  警告: 未找到相似机型 {similar_model} 的图片")
        else:
            print(f"  警告: 未定义相似机型映射")
    
    print("\n" + "="*80)
    print(f"修复完成! 共修复 {fixed_count} 个机型的图片")
    print("="*80)

if __name__ == "__main__":
    fix_missing_images()