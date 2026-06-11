import os

def generate_gallery():
    dir_path = "/Users/apple/Documents/gemini/antigravity/scratch/decibeldesigns/web/public/media/project-updates"
    files = sorted([f for f in os.listdir(dir_path) if f.lower().endswith(('.jpeg', '.jpg', '.png'))])
    
    html_content = """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Project Updates Image Gallery</title>
        <style>
            body { font-family: sans-serif; background: #121212; color: #fff; padding: 20px; }
            .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
            .card { background: #1e1e1e; border: 1px solid #333; border-radius: 8px; overflow: hidden; display: flex; flex-direction: column; }
            .img-container { height: 200px; display: flex; align-items: center; justify-content: center; background: #000; }
            img { max-width: 100%; max-height: 100%; object-fit: contain; }
            .info { padding: 10px; font-size: 12px; word-break: break-all; }
        </style>
    </head>
    <body>
        <h1>Project Updates Image Gallery ({count} images)</h1>
        <div class="grid">
    """.replace("{count}", str(len(files)))
    
    for f in files:
        html_content += f"""
            <div class="card">
                <div class="img-container">
                    <img src="{f}" alt="{f}">
                </div>
                <div class="info">
                    <strong>{f}</strong>
                </div>
            </div>
        """
        
    html_content += """
        </div>
    </body>
    </html>
    """
    
    with open(os.path.join(dir_path, "gallery.html"), "w") as html_file:
        html_file.write(html_content)
    print("Gallery generated at:", os.path.join(dir_path, "gallery.html"))

if __name__ == "__main__":
    generate_gallery()
