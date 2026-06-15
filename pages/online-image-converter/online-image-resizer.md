---
layout: default
title: "Online Image Resizer - Resize, Compress & Convert Images"
permalink: /online-image-resizer-resize-compress-convert-images/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Image Resizer - Resize, Compress & Convert Images</title>
<meta name="description"
  content="Free online image resizer tool. Resize, compress, and convert images instantly. Adjust dimensions, quality, and format for web, social media, or documents.">
<meta name="keywords"
  content="image resizer, image compressor, photo resizer, resize image online, image converter, compress image, reduce image size, photo compressor, image optimizer">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Image Resizer Styles */
  .converter-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .converter-container h1 {
    color: var(--primary);
    text-align: center;
    margin-bottom: 15px;
    font-size: 2.5rem;
    border-bottom: 3px solid var(--primary);
    padding-bottom: 15px;
  }

  .welcome-message {
    text-align: center;
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 40px;
    line-height: 1.8;
  }

  .converter-section {
    margin-bottom: 40px;
    padding: 25px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .converter-section h2 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .converter-section p {
    margin-bottom: 15px;
    line-height: 1.8;
    color: #333;
  }

  .counter-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    border-left: 4px solid var(--primary);
  }

  .counter-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background: white;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .counter-item span:first-child {
    font-weight: 600;
    color: var(--primary);
  }

  .counter-item span:last-child {
    font-weight: bold;
    color: #2c3e50;
  }

  .upload-area {
    border: 3px dashed #3498db;
    border-radius: 15px;
    padding: 40px 20px;
    text-align: center;
    background: #f8fafc;
    margin: 20px 0;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .upload-area:hover {
    background: #e8f4fc;
    border-color: #2980b9;
  }

  .upload-area i {
    font-size: 64px;
    color: #3498db;
    margin-bottom: 20px;
  }

  .upload-area h3 {
    color: #2c3e50;
    margin-bottom: 10px;
  }

  .upload-area p {
    color: #7f8c8d;
    margin-bottom: 20px;
  }

  .file-upload-section {
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .file-upload-button {
    padding: 12px 20px;
    background: var(--primary);
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
    border: none;
  }

  .file-upload-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
  }

  #fileName {
    font-style: italic;
    color: #7f8c8d;
  }

  .preview-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin: 30px 0;
  }

  @media (max-width: 768px) {
    .preview-container {
      grid-template-columns: 1fr;
    }
  }

  .preview-box {
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .preview-box h3 {
    color: #2c3e50;
    margin-bottom: 15px;
    text-align: center;
  }

  .image-preview {
    width: 100%;
    max-height: 300px;
    object-fit: contain;
    border-radius: 8px;
    background: #f8f9fa;
    border: 1px solid #e0e0e0;
  }

  .options-section {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 10px;
    margin: 30px 0;
  }

  .resize-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }

  .option-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .option-label {
    font-weight: 600;
    color: #2c3e50;
    display: flex;
    justify-content: space-between;
  }

  .option-value {
    color: var(--primary);
    font-weight: bold;
  }

  .option-input {
    padding: 12px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  .option-input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .slider-container {
    padding: 10px 0;
  }

  .slider {
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background: #e0e0e0;
    outline: none;
    -webkit-appearance: none;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--primary);
    cursor: pointer;
  }

  .preset-buttons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 10px;
    margin: 20px 0;
  }

  .preset-button {
    padding: 12px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    background: white;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
  }

  .preset-button:hover {
    border-color: var(--primary);
    background: #f0f8ff;
  }

  .preset-button.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
  }

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
    margin: 25px 0;
  }

  .action-button {
    padding: 14px 10px;
    border: none;
    border-radius: 8px;
    background: var(--primary);
    color: white;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .action-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .action-button:active {
    transform: translateY(0);
  }

  .action-button.success {
    background: var(--success);
  }

  .action-button.success:hover {
    background: #218838;
  }

  .action-button.secondary {
    background: #6c757d;
  }

  .action-button.secondary:hover {
    background: #5a6268;
  }

  .action-button.warning {
    background: #ffc107;
    color: #212529;
  }

  .action-button.warning:hover {
    background: #e0a800;
  }

  .alert-container {
    margin-top: 20px;
    min-height: 50px;
  }

  .alert {
    padding: 14px 20px;
    border-radius: 8px;
    margin-bottom: 10px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .alert-success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  .alert-error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }

  .alert .close {
    cursor: pointer;
    font-weight: bold;
  }

  .file-info {
    margin-top: 10px;
    font-size: 14px;
    color: #7f8c8d;
    width: 100%;
  }

  .examples {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .example-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }

  .example-item {
    text-align: center;
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .example-dimensions {
    font-weight: bold;
    color: var(--primary);
    margin: 10px 0;
  }

  .content-placeholder {
    padding: 25px;
    background: white;
    border-radius: 12px;
    margin-top: 30px;
  }

  .content-placeholder ul {
    margin: 15px 0;
    padding-left: 30px;
  }

  .content-placeholder li {
    margin-bottom: 10px;
    line-height: 1.6;
    color: #555;
  }

  .content-placeholder h2 {
    color: #2c3e50;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 15px;
    margin-bottom: 25px;
  }

  /* Share and donation buttons */
  .share-donation-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    flex-wrap: wrap;
    gap: 15px;
  }

  .share-buttons,
  .donation-buttons {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .share-button,
  .donation-button {
    padding: 10px 15px;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    border: none;
  }

  .share-button:hover,
  .donation-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .facebook {
    background: #3b5998;
    color: white;
  }

  .twitter {
    background: #1da1f2;
    color: white;
  }

  .linkedin {
    background: #0077b5;
    color: white;
  }

  .pinterest {
    background: #bd081c;
    color: white;
  }

  .reddit {
    background: #FF4500;
    color: white;
  }

  .paypal {
    background: #0070ba;
    color: white;
  }

  .coffee {
    background: #ff813f;
    color: white;
  }

  /* Modal styles */
  .modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    animation: fadeIn 0.3s;
  }

  .modal-content {
    background-color: #fefefe;
    margin: 10% auto;
    padding: 30px;
    border-radius: 12px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    animation: slideIn 0.3s;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
  }

  .modal-title {
    font-size: 1.5rem;
    color: var(--primary);
    margin: 0;
  }

  .close-modal {
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s;
  }

  .close-modal:hover {
    color: #000;
  }

  .modal-body {
    margin-bottom: 20px;
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  .modal-button {
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
  }

  .modal-button.primary {
    background: var(--primary);
    color: white;
  }

  .modal-button.secondary {
    background: #6c757d;
    color: white;
  }

  .modal-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideIn {
    from { transform: translateY(-50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .counter-wrapper {
      grid-template-columns: 1fr;
    }

    .button-section {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }

    .action-button {
      font-size: 13px;
      padding: 12px 8px;
    }

    .file-upload-section {
      flex-direction: column;
      align-items: flex-start;
    }

    .converter-container {
      padding: 15px;
    }

    .converter-section {
      padding: 20px;
      margin-bottom: 30px;
    }

    .converter-container h1 {
      font-size: 2rem;
    }

    .converter-section h2 {
      font-size: 1.3rem;
    }

    .share-donation-section {
      flex-direction: column;
      align-items: stretch;
    }

    .share-buttons,
    .donation-buttons {
      justify-content: center;
    }

    .modal-content {
      margin: 20% auto;
      width: 95%;
      padding: 20px;
    }

    .resize-options {
      grid-template-columns: 1fr;
    }

    .preset-buttons {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .loading-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    z-index: 2000;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid var(--primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 20px;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>

<div class="converter-container">
  <h1>Free Online Image Resizer & Compressor</h1>
  <p class="welcome-message">Resize, compress, and convert images instantly. Adjust dimensions, quality, and format for web, social media, or documents.</p>

  <div class="converter-section">
    <h2>Image Resizer Tool</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Original Size: </span>
        <span id="originalSize">0 KB</span>
      </div>
      <div class="counter-item">
        <span>New Size: </span>
        <span id="newSize">0 KB</span>
      </div>
      <div class="counter-item">
        <span>Reduction: </span>
        <span id="reductionPercent">0%</span>
      </div>
      <div class="counter-item">
        <span>Dimensions: </span>
        <span id="dimensions">0×0</span>
      </div>
    </div>

    <!-- Upload Area -->
    <div class="upload-area" id="uploadArea">
      <i class="fas fa-cloud-upload-alt"></i>
      <h3>Drop your image here or click to browse</h3>
      <p>Supports JPG, PNG, GIF, WebP, BMP (Max 10MB)</p>
      <button class="file-upload-button">
        <i class="fas fa-folder-open"></i> Browse Files
      </button>
      <input type="file" id="fileUpload" accept="image/*" style="display: none;">
    </div>

    <!-- File Info -->
    <div class="file-upload-section" id="fileInfoSection" style="display: none;">
      <div>
        <strong>Selected File:</strong> <span id="fileName">No file selected</span>
      </div>
      <div class="file-info">
        <span id="fileDetails"></span>
      </div>
    </div>

    <!-- Image Previews -->
    <div class="preview-container">
      <div class="preview-box">
        <h3>Original Image</h3>
        <img id="originalPreview" class="image-preview" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f0f0f0'/><text x='200' y='150' text-anchor='middle' fill='%23999' font-family='Arial' font-size='16'>Original Preview</text></svg>" alt="Original Preview">
      </div>
      <div class="preview-box">
        <h3>Resized Image</h3>
        <img id="resizedPreview" class="image-preview" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f0f0f0'/><text x='200' y='150' text-anchor='middle' fill='%23999' font-family='Arial' font-size='16'>Resized Preview</text></svg>" alt="Resized Preview">
      </div>
    </div>

    <!-- Resize Options -->
    <div class="options-section">
      <h3>Resize Settings</h3>
      
      <div class="resize-options">
        <div class="option-group">
          <label class="option-label">
            Width (px)
            <span class="option-value" id="widthValue">800</span>
          </label>
          <input type="range" class="slider" id="widthSlider" min="50" max="4000" value="800">
          <input type="number" class="option-input" id="widthInput" min="50" max="4000" value="800">
        </div>
        
        <div class="option-group">
          <label class="option-label">
            Height (px)
            <span class="option-value" id="heightValue">600</span>
          </label>
          <input type="range" class="slider" id="heightSlider" min="50" max="4000" value="600">
          <input type="number" class="option-input" id="heightInput" min="50" max="4000" value="600">
        </div>
        
        <div class="option-group">
          <label class="option-label">
            Quality (%)
            <span class="option-value" id="qualityValue">85</span>
          </label>
          <input type="range" class="slider" id="qualitySlider" min="10" max="100" value="85">
          <input type="number" class="option-input" id="qualityInput" min="10" max="100" value="85">
        </div>
      </div>

      <!-- Aspect Ratio Lock -->
      <div style="margin: 20px 0;">
        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
          <input type="checkbox" id="lockAspectRatio" checked>
          <span>Lock Aspect Ratio</span>
        </label>
      </div>

      <!-- Preset Sizes -->
      <h3 style="margin-top: 30px;">Preset Sizes</h3>
      <div class="preset-buttons">
        <button class="preset-button" data-width="1920" data-height="1080">HD (1920×1080)</button>
        <button class="preset-button" data-width="1280" data-height="720">720p (1280×720)</button>
        <button class="preset-button" data-width="800" data-height="600">Web (800×600)</button>
        <button class="preset-button" data-width="1080" data-height="1080">Instagram (1080×1080)</button>
        <button class="preset-button" data-width="1200" data-height="630">Facebook (1200×630)</button>
        <button class="preset-button" data-width="150" data-height="150">Thumbnail (150×150)</button>
      </div>

      <!-- Format Selection -->
      <div style="margin: 30px 0;">
        <h3>Output Format</h3>
        <div class="preset-buttons">
          <button class="preset-button format-button active" data-format="original">Original</button>
          <button class="preset-button format-button" data-format="jpeg">JPEG</button>
          <button class="preset-button format-button" data-format="png">PNG</button>
          <button class="preset-button format-button" data-format="webp">WebP</button>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="button-section">
        <button class="action-button" data-action="resize">
          <i class="fas fa-expand-alt"></i> Resize Image
        </button>
        <button class="action-button success" data-action="download">
          <i class="fas fa-download"></i> Download
        </button>
        <button class="action-button" data-action="compress">
          <i class="fas fa-compress-alt"></i> Compress
        </button>
        <button class="action-button" data-action="crop">
          <i class="fas fa-crop"></i> Crop
        </button>
        <button class="action-button warning" data-action="compare">
          <i class="fas fa-exchange-alt"></i> Compare
        </button>
        <button class="action-button secondary" data-action="clear">
          <i class="fas fa-trash"></i> Clear
        </button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <!-- Examples Section -->
    <div class="examples">
      <h2>Common Use Cases</h2>
      
      <div class="example-grid">
        <div class="example-item">
          <i class="fas fa-globe" style="font-size: 2rem; color: var(--primary); margin-bottom: 10px;"></i>
          <h4>Website Optimization</h4>
          <p class="example-dimensions">800×600 px</p>
          <p>Reduce image size for faster website loading</p>
        </div>
        
        <div class="example-item">
          <i class="fab fa-instagram" style="font-size: 2rem; color: #E1306C; margin-bottom: 10px;"></i>
          <h4>Social Media</h4>
          <p class="example-dimensions">1080×1080 px</p>
          <p>Perfect square images for Instagram posts</p>
        </div>
        
        <div class="example-item">
          <i class="fas fa-envelope" style="font-size: 2rem; color: #EA4335; margin-bottom: 10px;"></i>
          <h4>Email Attachments</h4>
          <p class="example-dimensions">600×400 px</p>
          <p>Smaller images for email compatibility</p>
        </div>
        
        <div class="example-item">
          <i class="fas fa-print" style="font-size: 2rem; color: #555; margin-bottom: 10px;"></i>
          <h4>Print Documents</h4>
          <p class="example-dimensions">300 DPI</p>
          <p>High quality for printing and documents</p>
        </div>
      </div>
    </div>
  </div>

<!-- SEO Content Section -->
<div class="content-placeholder">

  <h2>Free Online Image Resizer, Compressor & Converter Tool</h2>

  <p>Working with images has become a part of everyday life. Whether you're running a website, posting on social media, creating marketing materials, selling products online, or simply sharing photos with friends and family, image size and quality matter. Large image files can slow down websites, take longer to upload, and consume unnecessary storage space. That's where our free online Image Resizer, Compressor & Converter Tool comes in.</p>

  <p>This easy-to-use tool helps you resize images, reduce file size, and convert image formats directly from your browser. There is no software to install, no complicated settings to learn, and no account registration required. Everything is designed to be fast, simple, and secure.</p>

  <p>Unlike many online image tools, all image processing takes place locally in your browser whenever possible. This means your files remain private and under your control. Whether you're working with JPG, PNG, GIF, WebP, or BMP images, our tool makes optimization quick and effortless.</p>

  <h3>How to Use This Image Resizer (Step-by-Step)</h3>

  <ul>
    <li><strong>Upload Your Image:</strong> Click the upload area or simply drag and drop your image file into the tool. Most popular image formats are supported.</li>

    <li><strong>Choose Your Desired Dimensions:</strong> Enter a custom width and height or use one of the built-in presets. You can also keep the aspect ratio locked to avoid stretching or distortion.</li>

    <li><strong>Adjust Image Quality:</strong> Use the quality slider to balance image clarity and file size. Lower quality generally creates smaller files.</li>

    <li><strong>Select Output Format:</strong> Convert your image to JPEG, PNG, WebP, or keep the original format depending on your needs.</li>

    <li><strong>Preview and Download:</strong> Review the optimized image and download it instantly to your device.</li>
  </ul>

  <h3>Why Image Optimization Is Important</h3>

  <p>Many people underestimate how much impact image size can have on website performance and user experience. Modern smartphones and digital cameras capture incredibly detailed photos, often producing images that are several thousand pixels wide and several megabytes in size.</p>

  <p>While these high-resolution photos look fantastic, they are usually much larger than necessary for websites, blogs, social media posts, or email attachments. Uploading oversized images can result in slower loading pages, higher bandwidth usage, and a poor experience for visitors.</p>

  <p>Optimizing images before publishing them online helps improve website speed, search engine rankings, and overall usability. Faster websites often achieve better engagement because visitors do not have to wait for pages to load.</p>

  <h3>Real-Life Example</h3>

  <p>Imagine you are a travel blogger who has just returned from an amazing vacation. You captured stunning landscape photos using a professional camera. One of your photos measures 6000 × 4000 pixels and has a file size of 8MB.</p>

  <p>If you upload that image directly to your website, it may significantly slow down page loading times. Most website visitors will never view the image at its full resolution anyway.</p>

  <p>Using this tool, you can resize the image to 1200 × 800 pixels, reduce quality slightly, and convert it to WebP format. The file size may drop from 8MB to less than 150KB while still looking excellent on screens. Your readers enjoy faster loading pages, and your website performs better overall.</p>

  <h3>Who Can Benefit From This Tool?</h3>

  <ul>
    <li><strong>Website Owners:</strong> Improve website speed, user experience, and SEO performance.</li>

    <li><strong>Bloggers:</strong> Optimize article images without sacrificing visual quality.</li>

    <li><strong>Social Media Managers:</strong> Create perfectly sized images for Instagram, Facebook, X, LinkedIn, Pinterest, and other platforms.</li>

    <li><strong>Photographers:</strong> Prepare online galleries and client previews quickly and efficiently.</li>

    <li><strong>E-commerce Sellers:</strong> Maintain consistent product image dimensions across online stores.</li>

    <li><strong>Students:</strong> Reduce image file sizes for assignments, presentations, and project submissions.</li>

    <li><strong>Teachers:</strong> Prepare educational content that can be easily shared with students.</li>

    <li><strong>Graphic Designers:</strong> Generate web-ready versions of large design files.</li>

    <li><strong>Real Estate Professionals:</strong> Optimize property photos for listing websites and marketing materials.</li>

    <li><strong>Small Business Owners:</strong> Create professional-looking images for websites, advertisements, and social media campaigns.</li>
  </ul>

  <h3>Understanding Image Resizing</h3>

  <p>Image resizing refers to changing the dimensions of an image. Dimensions are measured in pixels and determine how large an image appears on a screen.</p>

  <p>For example, an image that is 4000 × 3000 pixels contains far more visual data than an image that is 800 × 600 pixels. Reducing the dimensions often results in a significantly smaller file size.</p>

  <p>Resizing is particularly useful when preparing images for websites, mobile applications, social media platforms, presentations, and online marketplaces.</p>

  <h3>Understanding Image Compression</h3>

  <p>Compression focuses on reducing file size without necessarily changing image dimensions. This process removes unnecessary data or uses more efficient encoding methods to make files smaller.</p>

  <p>There are two main types of compression:</p>

  <ul>
    <li><strong>Lossless Compression:</strong> Reduces file size without affecting image quality.</li>

    <li><strong>Lossy Compression:</strong> Achieves greater size reduction by removing some image information that is less noticeable to the human eye.</li>
  </ul>

  <p>Choosing the right compression level helps balance quality and performance. For most websites, moderate compression provides excellent results.</p>

  <h3>Understanding Image Conversion</h3>

  <p>Different image formats serve different purposes. Converting between formats allows you to choose the most suitable option for your project.</p>

  <ul>
    <li><strong>JPEG:</strong> Ideal for photographs and complex images.</li>

    <li><strong>PNG:</strong> Best for graphics, logos, and transparent backgrounds.</li>

    <li><strong>WebP:</strong> Offers excellent compression while maintaining high quality.</li>

    <li><strong>GIF:</strong> Commonly used for simple animations.</li>

    <li><strong>BMP:</strong> Uncompressed format often used in specific applications.</li>
  </ul>

  <h3>Frequently Asked Questions</h3>

  <p><strong>What image formats are supported?</strong><br>
  Our tool supports JPEG, PNG, GIF, WebP, and BMP image formats. You can also convert between these formats during the optimization process.</p>

  <p><strong>Do I need to create an account?</strong><br>
  No. The tool is completely free and can be used without registration.</p>

  <p><strong>Are my files secure?</strong><br>
  Yes. Privacy is a priority. Images are processed locally in your browser whenever possible, helping keep your files private and secure.</p>

  <p><strong>Can I use this tool on mobile devices?</strong><br>
  Absolutely. The tool works on desktops, laptops, tablets, and smartphones using modern web browsers.</p>

  <p><strong>Will resizing reduce image quality?</strong><br>
  Resizing can reduce detail if dimensions become significantly smaller. However, our tool helps maintain the best possible quality for your chosen settings.</p>

  <h3>Why Choose Our Image Resizer?</h3>

  <p>There are many image optimization tools available online, but not all provide the same combination of speed, simplicity, privacy, and flexibility. Our tool is designed with everyday users in mind.</p>

  <p>You don't need technical knowledge to resize, compress, or convert images. The interface is intuitive, processing is fast, and results are available instantly.</p>

  <p>Whether you're optimizing a single photo for a blog post or preparing images for a business project, this tool provides a reliable solution without unnecessary complexity.</p>

  <h3>Common Applications of Image Resizing</h3>

  <ul>
    <li><strong>Website Optimization:</strong> Improve page loading speed and user experience.</li>

    <li><strong>SEO Improvements:</strong> Faster images can contribute to better search engine performance.</li>

    <li><strong>Email Marketing:</strong> Reduce attachment sizes and improve email loading speed.</li>

    <li><strong>Social Media Publishing:</strong> Match recommended dimensions for each platform.</li>

    <li><strong>Online Stores:</strong> Maintain consistent product image presentation.</li>

    <li><strong>Portfolio Websites:</strong> Display professional images without slowing down pages.</li>

    <li><strong>Mobile Applications:</strong> Generate optimized assets for different screen sizes.</li>

    <li><strong>Digital Documents:</strong> Meet file size requirements for uploads and submissions.</li>

    <li><strong>Business Presentations:</strong> Keep presentation files lightweight and responsive.</li>

    <li><strong>Cloud Storage Management:</strong> Save valuable storage space by reducing file sizes.</li>
  </ul>

  <h3>Final Thoughts</h3>

  <p>Efficient image management is essential in today's digital world. Large, unoptimized images can affect website performance, increase storage usage, and create unnecessary delays when sharing files.</p>

  <p>Our free Online Image Resizer, Compressor & Converter Tool provides a simple solution for optimizing images while preserving quality. Whether you're a blogger, business owner, student, photographer, designer, or casual user, you can resize, compress, and convert images in just a few clicks.</p>

  <p>Try the tool today and experience a faster, smarter, and more efficient way to manage your images online.</p>

</div>

 
<!-- Loading Overlay -->
<div class="loading-overlay" id="loadingOverlay">
  <div class="loading-spinner"></div>
  <p>Processing your image...</p>
</div>

<!-- Compare Modal -->
<div id="compareModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Compare Images</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
          <h4>Original Image</h4>
          <img id="compareOriginal" style="width: 100%; max-height: 300px; object-fit: contain; border: 1px solid #ddd;">
          <p style="text-align: center; margin-top: 10px;" id="originalStats"></p>
        </div>
        <div>
          <h4>Resized Image</h4>
          <img id="compareResized" style="width: 100%; max-height: 300px; object-fit: contain; border: 1px solid #ddd;">
          <p style="text-align: center; margin-top: 10px;" id="resizedStats"></p>
        </div>
      </div>
      <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
        <p><strong>Summary:</strong> <span id="comparisonSummary"></span></p>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeCompare">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const uploadArea = document.getElementById('uploadArea');
    const fileUpload = document.getElementById('fileUpload');
    const fileInfoSection = document.getElementById('fileInfoSection');
    const fileName = document.getElementById('fileName');
    const fileDetails = document.getElementById('fileDetails');
    const originalPreview = document.getElementById('originalPreview');
    const resizedPreview = document.getElementById('resizedPreview');
    const actionButtons = document.querySelectorAll('.action-button');
    const alertContainer = document.getElementById('alertContainer');
    const loadingOverlay = document.getElementById('loadingOverlay');
    
    // Dimension controls
    const widthSlider = document.getElementById('widthSlider');
    const widthInput = document.getElementById('widthInput');
    const widthValue = document.getElementById('widthValue');
    const heightSlider = document.getElementById('heightSlider');
    const heightInput = document.getElementById('heightInput');
    const heightValue = document.getElementById('heightValue');
    const qualitySlider = document.getElementById('qualitySlider');
    const qualityInput = document.getElementById('qualityInput');
    const qualityValue = document.getElementById('qualityValue');
    const lockAspectRatio = document.getElementById('lockAspectRatio');
    
    // Preset buttons
    const presetButtons = document.querySelectorAll('.preset-button:not(.format-button)');
    const formatButtons = document.querySelectorAll('.format-button');
    
    // Stats elements
    const originalSize = document.getElementById('originalSize');
    const newSize = document.getElementById('newSize');
    const reductionPercent = document.getElementById('reductionPercent');
    const dimensions = document.getElementById('dimensions');
    
    // Modal elements
    const compareModal = document.getElementById('compareModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const closeCompare = document.getElementById('closeCompare');
    const compareOriginal = document.getElementById('compareOriginal');
    const compareResized = document.getElementById('compareResized');
    const originalStats = document.getElementById('originalStats');
    const resizedStats = document.getElementById('resizedStats');
    const comparisonSummary = document.getElementById('comparisonSummary');
    
    // State variables
    let originalImage = null;
    let resizedImage = null;
    let originalImageData = null;
    let originalAspectRatio = 1;
    let originalWidth = 0;
    let originalHeight = 0;
    let originalFileSize = 0;
    let currentFormat = 'original';
    
    // Event Listeners
    uploadArea.addEventListener('click', () => fileUpload.click());
    fileUpload.addEventListener('change', handleFileUpload);
    
    // Dimension controls
    widthSlider.addEventListener('input', updateWidthFromSlider);
    widthInput.addEventListener('input', updateWidthFromInput);
    heightSlider.addEventListener('input', updateHeightFromSlider);
    heightInput.addEventListener('input', updateHeightFromInput);
    qualitySlider.addEventListener('input', updateQualityFromSlider);
    qualityInput.addEventListener('input', updateQualityFromInput);
    
    // Preset buttons
    presetButtons.forEach(button => {
      button.addEventListener('click', () => {
        presetButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        
        const width = parseInt(button.dataset.width);
        const height = parseInt(button.dataset.height);
        
        updateDimensions(width, height);
      });
    });
    
    // Format buttons
    formatButtons.forEach(button => {
      button.addEventListener('click', () => {
        formatButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        currentFormat = button.dataset.format;
        if (resizedImage) {
          processResize();
        }
      });
    });
    
    // Action buttons
    actionButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleAction(action);
      });
    });
    
    // Modal close buttons
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        compareModal.style.display = 'none';
      });
    });
    
    closeCompare.addEventListener('click', function() {
      compareModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === compareModal) {
        compareModal.style.display = 'none';
      }
    });
    
    // Functions
    function handleFileUpload(event) {
      const file = event.target.files[0];
      if (!file) return;
      
      if (!file.type.match('image.*')) {
        showAlert('Please select an image file (JPG, PNG, GIF, WebP, BMP).', 'error');
        return;
      }
      
      if (file.size > 10 * 1024 * 1024) {
        showAlert('File size should be less than 10MB.', 'error');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = function(e) {
        originalImage = new Image();
        originalImage.onload = function() {
          originalWidth = this.width;
          originalHeight = this.height;
          originalAspectRatio = originalWidth / originalHeight;
          originalFileSize = file.size;
          
          // Update UI
          originalPreview.src = e.target.result;
          resizedPreview.src = e.target.result;
          originalImageData = e.target.result;
          
          fileName.textContent = file.name;
          fileDetails.textContent = `${originalWidth}×${originalHeight}px • ${formatFileSize(file.size)} • ${file.type}`;
          fileInfoSection.style.display = 'flex';
          
          // Update counters
          originalSize.textContent = formatFileSize(file.size);
          newSize.textContent = formatFileSize(file.size);
          reductionPercent.textContent = '0%';
          dimensions.textContent = `${originalWidth}×${originalHeight}`;
          
          // Update dimension controls
          updateDimensions(originalWidth, originalHeight);
          
          showAlert('Image uploaded successfully!', 'success');
        };
        originalImage.src = e.target.result;
      };
      reader.onerror = function() {
        showAlert('Error reading the image file.', 'error');
      };
      reader.readAsDataURL(file);
    }
    
    function updateWidthFromSlider() {
      const width = parseInt(widthSlider.value);
      widthInput.value = width;
      widthValue.textContent = width;
      
      if (lockAspectRatio.checked && originalAspectRatio) {
        const height = Math.round(width / originalAspectRatio);
        updateHeight(height, false);
      }
      
      if (originalImage) {
        processResize();
      }
    }
    
    function updateWidthFromInput() {
      let width = parseInt(widthInput.value);
      width = Math.min(4000, Math.max(50, width));
      widthInput.value = width;
      widthSlider.value = width;
      widthValue.textContent = width;
      
      if (lockAspectRatio.checked && originalAspectRatio) {
        const height = Math.round(width / originalAspectRatio);
        updateHeight(height, false);
      }
      
      if (originalImage) {
        processResize();
      }
    }
    
    function updateHeightFromSlider() {
      const height = parseInt(heightSlider.value);
      heightInput.value = height;
      heightValue.textContent = height;
      
      if (lockAspectRatio.checked && originalAspectRatio) {
        const width = Math.round(height * originalAspectRatio);
        updateWidth(width, false);
      }
      
      if (originalImage) {
        processResize();
      }
    }
    
    function updateHeightFromInput() {
      let height = parseInt(heightInput.value);
      height = Math.min(4000, Math.max(50, height));
      heightInput.value = height;
      heightSlider.value = height;
      heightValue.textContent = height;
      
      if (lockAspectRatio.checked && originalAspectRatio) {
        const width = Math.round(height * originalAspectRatio);
        updateWidth(width, false);
      }
      
      if (originalImage) {
        processResize();
      }
    }
    
    function updateQualityFromSlider() {
      const quality = parseInt(qualitySlider.value);
      qualityInput.value = quality;
      qualityValue.textContent = quality;
      
      if (originalImage) {
        processResize();
      }
    }
    
    function updateQualityFromInput() {
      let quality = parseInt(qualityInput.value);
      quality = Math.min(100, Math.max(10, quality));
      qualityInput.value = quality;
      qualitySlider.value = quality;
      qualityValue.textContent = quality;
      
      if (originalImage) {
        processResize();
      }
    }
    
    function updateWidth(width, updateSlider = true) {
      width = Math.min(4000, Math.max(50, width));
      widthInput.value = width;
      widthValue.textContent = width;
      if (updateSlider) widthSlider.value = width;
    }
    
    function updateHeight(height, updateSlider = true) {
      height = Math.min(4000, Math.max(50, height));
      heightInput.value = height;
      heightValue.textContent = height;
      if (updateSlider) heightSlider.value = height;
    }
    
    function updateDimensions(width, height) {
      updateWidth(width);
      updateHeight(height);
      
      if (originalImage) {
        processResize();
      }
    }
    
    function processResize() {
      if (!originalImage) return;
      
      showLoading(true);
      
      // Use setTimeout to allow UI to update
      setTimeout(() => {
        try {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          
          const width = parseInt(widthInput.value);
          const height = parseInt(heightInput.value);
          const quality = parseInt(qualityInput.value) / 100;
          
          canvas.width = width;
          canvas.height = height;
          
          // Draw image with high quality scaling
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(originalImage, 0, 0, width, height);
          
          // Determine output format
          let format = 'image/jpeg';
          if (currentFormat === 'png') format = 'image/png';
          else if (currentFormat === 'webp') format = 'image/webp';
          else if (currentFormat === 'original') {
            // Try to keep original format
            if (originalImage.src.startsWith('data:image/png')) format = 'image/png';
            else if (originalImage.src.startsWith('data:image/webp')) format = 'image/webp';
            else format = 'image/jpeg';
          }
          
          // Quality only applies to JPEG and WebP
          const qualityToUse = (format === 'image/png') ? 1.0 : quality;
          
          canvas.toBlob(function(blob) {
            const reader = new FileReader();
            reader.onload = function(e) {
              resizedImage = e.target.result;
              resizedPreview.src = resizedImage;
              
              // Update stats
              const newSizeBytes = blob.size;
              newSize.textContent = formatFileSize(newSizeBytes);
              
              const reduction = ((originalFileSize - newSizeBytes) / originalFileSize * 100).toFixed(1);
              reductionPercent.textContent = `${reduction}%`;
              dimensions.textContent = `${width}×${height}`;
              
              showLoading(false);
              
              // Update preset button active state
              updateActivePreset(width, height);
            };
            reader.readAsDataURL(blob);
          }, format, qualityToUse);
          
        } catch (error) {
          console.error('Resize error:', error);
          showAlert('Error resizing image: ' + error.message, 'error');
          showLoading(false);
        }
      }, 100);
    }
    
    function updateActivePreset(width, height) {
      presetButtons.forEach(button => {
        const presetWidth = parseInt(button.dataset.width);
        const presetHeight = parseInt(button.dataset.height);
        
        if (width === presetWidth && height === presetHeight) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });
    }
    
    function handleAction(action) {
      if (!originalImage && action !== 'clear') {
        showAlert('Please upload an image first.', 'error');
        return;
      }
      
      switch (action) {
        case 'resize':
          processResize();
          showAlert('Image resized successfully!', 'success');
          break;
          
        case 'download':
          if (!resizedImage) {
            showAlert('Please resize the image first.', 'error');
            return;
          }
          downloadImage();
          break;
          
        case 'compress':
          // Set smaller dimensions for compression
          const currentWidth = parseInt(widthInput.value);
          const currentHeight = parseInt(heightInput.value);
          updateDimensions(
            Math.max(50, Math.round(currentWidth * 0.7)),
            Math.max(50, Math.round(currentHeight * 0.7))
          );
          showAlert('Image compressed for smaller file size.', 'success');
          break;
          
        case 'crop':
          showAlert('Crop feature coming soon!', 'success');
          break;
          
        case 'compare':
          if (!resizedImage) {
            showAlert('Please resize the image first.', 'error');
            return;
          }
          showComparison();
          break;
          
        case 'clear':
          clearAll();
          break;
      }
    }
    
    function downloadImage() {
      if (!resizedImage) return;
      
      const width = parseInt(widthInput.value);
      const height = parseInt(heightInput.value);
      const quality = parseInt(qualityInput.value);
      
      let extension = 'jpg';
      if (currentFormat === 'png') extension = 'png';
      else if (currentFormat === 'webp') extension = 'webp';
      
      const filename = `resized_image_${width}x${height}_q${quality}.${extension}`;
      
      const link = document.createElement('a');
      link.href = resizedImage;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      showAlert(`Image downloaded as ${filename}`, 'success');
    }
    
    function showComparison() {
      if (!originalImage || !resizedImage) return;
      
      compareOriginal.src = originalImageData;
      compareResized.src = resizedImage;
      
      const width = parseInt(widthInput.value);
      const height = parseInt(heightInput.value);
      
      originalStats.textContent = `${originalWidth}×${originalHeight} • ${formatFileSize(originalFileSize)}`;
      resizedStats.textContent = `${width}×${height} • ${newSize.textContent}`;
      
      const reduction = reductionPercent.textContent;
      comparisonSummary.textContent = `File size reduced by ${reduction} while maintaining good visual quality.`;
      
      compareModal.style.display = 'block';
    }
    
    function clearAll() {
      // Reset file input
      fileUpload.value = '';
      
      // Reset previews
      originalPreview.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f0f0f0'/><text x='200' y='150' text-anchor='middle' fill='%23999' font-family='Arial' font-size='16'>Original Preview</text></svg>";
      resizedPreview.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f0f0f0'/><text x='200' y='150' text-anchor='middle' fill='%23999' font-family='Arial' font-size='16'>Resized Preview</text></svg>";
      
      // Hide file info
      fileInfoSection.style.display = 'none';
      
      // Reset stats
      originalSize.textContent = '0 KB';
      newSize.textContent = '0 KB';
      reductionPercent.textContent = '0%';
      dimensions.textContent = '0×0';
      
      // Reset dimensions
      updateDimensions(800, 600);
      qualityInput.value = 85;
      qualitySlider.value = 85;
      qualityValue.textContent = '85';
      
      // Reset state
      originalImage = null;
      resizedImage = null;
      originalImageData = null;
      originalAspectRatio = 1;
      originalWidth = 0;
      originalHeight = 0;
      originalFileSize = 0;
      
      // Reset preset buttons
      presetButtons.forEach(button => button.classList.remove('active'));
      
      showAlert('All cleared. Ready for new image.', 'success');
    }
    
    function formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
    
    function showAlert(message, type) {
      const alertDiv = document.createElement('div');
      alertDiv.className = `alert alert-${type}`;
      alertDiv.innerHTML = `
        ${message}
        <span class="close">&times;</span>
      `;
      
      alertContainer.innerHTML = '';
      alertContainer.appendChild(alertDiv);
      
      // Add close functionality
      alertDiv.querySelector('.close').addEventListener('click', function () {
        alertDiv.remove();
      });
      
      // Auto-remove after 5 seconds
      setTimeout(() => {
        if (alertDiv.parentNode) {
          alertDiv.remove();
        }
      }, 5000);
    }
    
    function showLoading(show) {
      loadingOverlay.style.display = show ? 'flex' : 'none';
    }
    
    // Initialize with default values
    updateWidthFromSlider();
    updateHeightFromSlider();
    updateQualityFromSlider();
  });
</script>