import os

def test_image_paths():
    """测试所有机型的图片路径"""
    images_dir = "d:\\吹膜机外贸\\报价单\\images"
    
    print("="*80)
    print("测试所有机型的图片路径")
    print("="*80)
    
    # 获取所有机型文件夹
    model_folders = [f for f in os.listdir(images_dir) if os.path.isdir(os.path.join(images_dir, f))]
    
    print(f"\n找到 {len(model_folders)} 个机型文件夹\n")
    
    success_count = 0
    error_count = 0
    
    for model in sorted(model_folders):
        folder_path = os.path.join(images_dir, model)
        
        # 检查图片文件
        image_extensions = ['.png', '.jpg', '.jpeg', '.gif']
        found_image = False
        
        for ext in image_extensions:
            image_path = os.path.join(folder_path, model + ext)
            if os.path.exists(image_path):
                found_image = True
                success_count += 1
                print(f"[OK] {model}: {model}{ext}")
                break
        
        if not found_image:
            error_count += 1
            print(f"[FAIL] {model}: 未找到图片文件")
            # 列出文件夹中的文件
            files = os.listdir(folder_path)
            if files:
                print(f"       文件夹中的文件: {', '.join(files)}")
            else:
                print(f"       文件夹为空")
    
    print("\n" + "="*80)
    print("测试结果汇总")
    print("="*80)
    print(f"总机型数: {len(model_folders)}")
    print(f"成功: {success_count}")
    print(f"失败: {error_count}")
    print(f"成功率: {success_count/len(model_folders)*100:.1f}%")
    print("="*80)
    
    return error_count == 0

if __name__ == "__main__":
    test_image_paths()