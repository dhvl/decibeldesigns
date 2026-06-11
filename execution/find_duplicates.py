import os
from PIL import Image

def get_hash(image_path):
    try:
        with Image.open(image_path) as img:
            # Resize and convert to grayscale
            img = img.resize((10, 10), Image.Resampling.LANCZOS).convert('L')
            pixels = list(img.getdata())
            avg = sum(pixels) / len(pixels)
            # Binary hash based on whether pixel is above average
            return "".join(["1" if p > avg else "0" for p in pixels])
    except Exception as e:
        return None

def find_duplicates():
    dir_path = "/Users/apple/Documents/gemini/antigravity/scratch/decibeldesigns/web/public/media/project-updates"
    files = sorted([f for f in os.listdir(dir_path) if f.lower().endswith(('.jpeg', '.jpg', '.png'))])
    
    hashes = {}
    duplicates = []
    
    for f in files:
        path = os.path.join(dir_path, f)
        h = get_hash(path)
        if h is not None:
            hashes[f] = h
            
    # Find pairs with low hamming distance
    threshold = 5 # 5% difference max
    visited = set()
    clusters = []
    
    for f1 in files:
        if f1 in visited:
            continue
        h1 = hashes.get(f1)
        if not h1:
            continue
        current_cluster = [f1]
        visited.add(f1)
        
        for f2 in files:
            if f2 in visited:
                continue
            h2 = hashes.get(f2)
            if not h2:
                continue
            
            # Hamming distance
            dist = sum(c1 != c2 for c1, c2 in zip(h1, h2))
            if dist <= threshold:
                current_cluster.append(f2)
                visited.add(f2)
        
        if len(current_cluster) > 1:
            clusters.append(current_cluster)
            
    print(f"Found {len(clusters)} clusters of similar images:")
    for i, cluster in enumerate(clusters):
        print(f"Cluster {i+1}:")
        for f in cluster:
            size_kb = os.path.getsize(os.path.join(dir_path, f)) / 1024
            print(f"  - {f} ({size_kb:.1f} KB)")
            
if __name__ == "__main__":
    find_duplicates()
