import os
import sys

# 定义图片文件夹路径
images_dir = "d:\\吹膜机外贸\\报价单\\images"

# 遍历所有子文件夹
for folder_name in os.listdir(images_dir):
    folder_path = os.path.join(images_dir, folder_name)
    
    # 确保是文件夹
    if os.path.isdir(folder_path):
        print(f"Processing folder: {folder_name}")
        
        # 遍历文件夹内的所有文件
        for file_name in os.listdir(folder_path):
            file_path = os.path.join(folder_path, file_name)
            
            # 确保是文件
            if os.path.isfile(file_path):
                # 获取文件扩展名
                _, ext = os.path.splitext(file_name)
                
                # 检查是否是图片文件
                if ext.lower() in ['.jpg', '.jpeg', '.png', '.gif']:
                    # 新的文件名
                    new_file_name = f"{folder_name}{ext}"
                    new_file_path = os.path.join(folder_path, new_file_name)
                    
                    # 重命名文件
                    try:
                        os.rename(file_path, new_file_path)
                        print(f"Renamed {file_name} to {new_file_name}")
                    except Exception as e:
                        print(f"Error renaming {file_name}: {e}")

print("All images have been renamed successfully!")