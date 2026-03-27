import win32com.client as win32
import os

try:
    word = win32.Dispatch("Word.Application")
    word.Visible = False
    
    doc_path = os.path.abspath("铸信+样本+2026.3.docx")
    print(f"尝试打开文件: {doc_path}")
    
    doc = word.Documents.Open(doc_path)
    
    print("\n=== 文档内容 ===\n")
    full_text = doc.Content.Text
    print(full_text[:10000])  # 打印前10000字符
    
    print("\n=== 表格内容 ===\n")
    for i, table in enumerate(doc.Tables):
        print(f"\n--- 表格 {i+1} ---\n")
        for row in range(1, table.Rows.Count + 1):
            row_text = []
            for col in range(1, table.Columns.Count + 1):
                try:
                    cell_text = table.Cell(row, col).Range.Text.strip()
                    row_text.append(cell_text)
                except:
                    pass
            print(" | ".join(row_text))
            if i == 0 and row > 20:  # 限制第一个表格的输出行数
                print("... (表格内容过长，已截断)")
                break
    
    doc.Close()
    word.Quit()
    
except Exception as e:
    print(f"错误: {e}")
    try:
        word.Quit()
    except:
        pass
