import os

def check_yt1000():
    """专门检查YT-1000的图片"""
    images_dir = "d:\\吹膜机外贸\\报价单\\images"
    
    print("检查YT-1000的图片:")
    print("="*80)
    
    # 检查YT-1000文件夹
    yt1000_folder = os.path.join(images_dir, 'YT-1000')
    
    if os.path.exists(yt1000_folder):
        print(f"YT-1000文件夹存在: {yt1000_folder}")
        
        # 列出文件夹中的所有文件
        files = os.listdir(yt1000_folder)
        print(f"文件夹中的文件: {files}")
        
        # 检查是否有图片文件
        image_extensions = ['.png', '.jpg', '.jpeg', '.gif']
        image_files = []
        
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in image_extensions:
                image_files.append(file)
        
        if image_files:
            print(f"找到 {len(image_files)} 张图片:")
            for img in image_files:
                img_path = os.path.join(yt1000_folder, img)
                file_size = os.path.getsize(img_path)
                print(f"  - {img} ({file_size} bytes)")
        else:
            print("未找到图片文件")
        
        # 检查是否有YT-1000.png
        yt1000_png = os.path.join(yt1000_folder, 'YT-1000.png')
        if os.path.exists(yt1000_png):
            print(f"\nYT-1000.png存在: {yt1000_png}")
            file_size = os.path.getsize(yt1000_png)
            print(f"文件大小: {file_size} bytes")
        else:
            print(f"\nYT-1000.png不存在: {yt1000_png}")
    else:
        print(f"YT-1000文件夹不存在: {yt1000_folder}")
    
    print("="*80)

if __name__ == "__main__":
    check_yt1000()