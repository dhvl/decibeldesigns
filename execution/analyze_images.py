import os
from PIL import Image

def analyze():
    dir_path = "/Users/apple/Documents/gemini/antigravity/scratch/decibeldesigns/web/public/media/project-updates"
    files = sorted([f for f in os.listdir(dir_path) if f.lower().endswith(('.jpeg', '.jpg', '.png'))])
    
    print(f"Found {len(files)} images in project-updates.")
    print("-" * 80)
    print(f"{'Filename':<55} | {'Size (KB)':<10} | {'Dimensions':<12}")
    print("-" * 80)
    
    for f in files:
        full_path = os.path.join(dir_path, f)
        size_kb = os.path.getsize(full_path) / 1024
        try:
            with Image.open(full_path) as img:
                width, height = img.size
                dims = f"{width}x{height}"
        except Exception as e:
            dims = "Error"
        print(f"{f:<55} | {size_kb:<10.1f} | {dims:<12}")

if __name__ == "__main__":
    analyze()
