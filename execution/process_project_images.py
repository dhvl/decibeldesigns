import os
from PIL import Image, ImageEnhance, ImageOps

# Source and destination paths
src_dir = "/Users/apple/Documents/gemini/antigravity/scratch/decibeldesigns/web/public/media/project-updates"
dst_dir = "/Users/apple/Documents/gemini/antigravity/scratch/decibeldesigns/web/public/media/project-updates-clean"

os.makedirs(dst_dir, exist_ok=True)

# Image classification & SEO Renaming Map
# We select the highest quality photos and name them descriptively.
image_mappings = {
    # --- Completed Auditorium / Multipurpose Acoustic Hall (High Res 4000x3000) ---
    "WhatsApp Image 2026-06-01 at 13.16.59.jpeg": "decibel-designs-acoustic-auditorium-stage-curtains.jpg",
    "WhatsApp Image 2026-06-01 at 13.17.00.jpeg": "decibel-designs-auditorium-acoustic-wood-panels-lights.jpg",
    "WhatsApp Image 2026-06-01 at 13.17.00 (1).jpeg": "decibel-designs-completed-acoustic-hall-rear-view.jpg",
    "WhatsApp Image 2026-06-01 at 13.17.00 (2).jpeg": "decibel-designs-completed-acoustic-hall-ceiling-view.jpg",
    "WhatsApp Image 2026-06-01 at 13.17.01.jpeg": "decibel-designs-auditorium-acoustic-wall-cladding-led-strips.jpg",
    "WhatsApp Image 2026-06-01 at 13.17.01 (1).jpeg": "decibel-designs-completed-multipurpose-hall-wooden-flooring.jpg",
    "WhatsApp Image 2026-06-01 at 13.17.01 (2).jpeg": "decibel-designs-acoustic-auditorium-balcony-view.jpg",
    "WhatsApp Image 2026-06-01 at 13.17.01 (3).jpeg": "decibel-designs-acoustic-auditorium-stage-lighting.jpg",
    "WhatsApp Image 2026-06-01 at 13.17.02.jpeg": "decibel-designs-auditorium-acoustic-design-delhi.jpg",
    
    # --- Under Construction / Acoustic Framing, Rockwool & Paneling (Oppo Watermarked 1280x960/720/etc) ---
    "WhatsApp Image 2026-06-01 at 13.14.34.jpeg": "decibel-designs-acoustic-framing-insulation-process-01.jpg",
    "WhatsApp Image 2026-06-01 at 13.14.34 (1).jpeg": "decibel-designs-acoustic-fiberwool-installation-02.jpg",
    "WhatsApp Image 2026-06-01 at 13.14.34 (2).jpeg": "decibel-designs-acoustic-metal-framing-grid-03.jpg",
    
    "WhatsApp Image 2026-06-01 at 13.14.35.jpeg": "decibel-designs-acoustic-insulation-materials-04.jpg",
    "WhatsApp Image 2026-06-01 at 13.14.35 (1).jpeg": "decibel-designs-acoustic-insulation-wall-framing-05.jpg",
    "WhatsApp Image 2026-06-01 at 13.14.35 (2).jpeg": "decibel-designs-acoustic-insulation-rockwool-panels-06.jpg",
    
    "WhatsApp Image 2026-06-01 at 13.14.36.jpeg": "decibel-designs-acoustic-insulation-ceiling-grid-07.jpg",
    "WhatsApp Image 2026-06-01 at 13.14.36 (1).jpeg": "decibel-designs-acoustic-ceiling-framing-work-08.jpg",
    "WhatsApp Image 2026-06-01 at 13.14.36 (2).jpeg": "decibel-designs-acoustic-materials-under-construction-09.jpg",
    
    "WhatsApp Image 2026-06-01 at 13.14.37.jpeg": "decibel-designs-acoustic-framing-vertical-profile-10.jpg",
    "WhatsApp Image 2026-06-01 at 13.14.37 (1).jpeg": "decibel-designs-acoustic-wood-slats-installation-11.jpg",
    "WhatsApp Image 2026-06-01 at 13.14.37 (2).jpeg": "decibel-designs-acoustic-wood-slats-finish-12.jpg",
    "WhatsApp Image 2026-06-01 at 13.14.37 (3).jpeg": "decibel-designs-acoustic-wall-framing-details-13.jpg",
    
    "WhatsApp Image 2026-06-01 at 13.14.38.jpeg": "decibel-designs-acoustic-insulation-backing-14.jpg",
    "WhatsApp Image 2026-06-01 at 13.14.38 (1).jpeg": "decibel-designs-acoustic-insulation-wall-assembly-15.jpg",
    "WhatsApp Image 2026-06-01 at 13.14.38 (2).jpeg": "decibel-designs-acoustic-insulation-wool-density-16.jpg",
    
    "WhatsApp Image 2026-06-01 at 13.15.53.jpeg": "decibel-designs-acoustic-paneling-fabric-wrap-17.jpg",
    "WhatsApp Image 2026-06-01 at 13.15.53 (1).jpeg": "decibel-designs-acoustic-fabric-panels-installation-18.jpg",
    "WhatsApp Image 2026-06-01 at 13.15.53 (2).jpeg": "decibel-designs-acoustic-fabric-panels-completed-19.jpg",
    
    "WhatsApp Image 2026-06-01 at 13.15.54.jpeg": "decibel-designs-acoustic-wood-paneling-workplace-20.jpg",
    "WhatsApp Image 2026-06-01 at 13.15.54 (1).jpeg": "decibel-designs-acoustic-fabric-panels-corner-detail-21.jpg",
    
    "WhatsApp Image 2026-06-01 at 13.16.24.jpeg": "decibel-designs-acoustic-ceiling-channels-grid-22.jpg",
    "WhatsApp Image 2026-06-01 at 13.16.24 (1).jpeg": "decibel-designs-acoustic-ceiling-baffles-grid-23.jpg",
    "WhatsApp Image 2026-06-01 at 13.16.24 (2).jpeg": "decibel-designs-acoustic-ceiling-framing-details-24.jpg",
    
    "WhatsApp Image 2026-06-01 at 13.16.25.jpeg": "decibel-designs-acoustic-ceiling-panels-mounting-25.jpg",
    "WhatsApp Image 2026-06-01 at 13.16.25 (1).jpeg": "decibel-designs-acoustic-insulation-grid-channels-26.jpg",
    "WhatsApp Image 2026-06-01 at 13.16.25 (2).jpeg": "decibel-designs-acoustic-insulation-panels-details-27.jpg",
    
    "WhatsApp Image 2026-06-01 at 13.16.26.jpeg": "decibel-designs-acoustic-insulation-ceiling-complete-28.jpg",
    "WhatsApp Image 2026-06-01 at 13.16.26 (1).jpeg": "decibel-designs-acoustic-paneling-side-profile-29.jpg",
    "WhatsApp Image 2026-06-01 at 13.16.26 (2).jpeg": "decibel-designs-acoustic-paneling-fabric-surface-30.jpg"
}

# The remaining files (including raw concrete shell at 13.19.36, etc.) will be discarded as requested.

def enhance_image(img, needs_crop=False):
    # 1. Crop watermark if it is an Oppo image
    if needs_crop:
        w, h = img.size
        # Crop the bottom 11% to remove watermark completely
        crop_h = int(h * 0.89)
        img = img.crop((0, 0, w, crop_h))
    
    # 2. Enhance color
    enhancer = ImageEnhance.Color(img)
    img = enhancer.enhance(1.1)  # 10% saturation boost
    
    # 3. Enhance contrast
    enhancer = ImageEnhance.Contrast(img)
    img = enhancer.enhance(1.05) # 5% contrast boost
    
    # 4. Enhance sharpness
    enhancer = ImageEnhance.Sharpness(img)
    img = enhancer.enhance(1.1)  # 10% sharpness boost
    
    # 5. Auto levels
    img = ImageOps.autocontrast(img, cutoff=0.5)
    
    return img

print("Processing images...")
processed_count = 0

for src_name, dst_name in image_mappings.items():
    src_path = os.path.join(src_dir, src_name)
    dst_path = os.path.join(dst_dir, dst_name)
    
    if not os.path.exists(src_path):
        print(f"Warning: {src_name} not found in source directory.")
        continue
        
    try:
        with Image.open(src_path) as img:
            # Check if it is watermarked (we check if size is around 1280 width or similar Oppo dimensions)
            is_oppo = img.size[0] < 2000
            
            enhanced = enhance_image(img, needs_crop=is_oppo)
            
            # Save enhanced image as JPEG with high quality
            enhanced.save(dst_path, "JPEG", quality=90, optimize=True)
            processed_count += 1
            
    except Exception as e:
        print(f"Error processing {src_name}: {e}")

print(f"Successfully processed {processed_count} images.")
