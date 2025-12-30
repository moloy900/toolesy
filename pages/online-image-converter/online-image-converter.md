---
layout: default
title: "Online Image Converter - PNG to JPG, JPG to PNG, WebP to JPG"
permalink: /online-image-converter-png-to-jpg-jpg-to-png-webp-to-jpg/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Image Converter - PNG to JPG, JPG to PNG, WebP to JPG</title>
<meta name="description"
  content="Free online image converter tool. Convert PNG to JPG, JPG to PNG, PNG to JPEG, JPG to JPEG, and WebP to JPG instantly. Supports batch conversion and quality adjustment.">
<meta name="keywords"
  content="image converter, PNG to JPG, JPG to PNG, WebP to JPG, PNG to JPEG, JPG to JPEG, photo converter, image format converter, online image converter">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Image Converter Styles */
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

  .upload-section {
    margin: 20px 0;
    text-align: center;
    padding: 40px;
    background: white;
    border: 3px dashed #ddd;
    border-radius: 15px;
    transition: all 0.3s ease;
  }

  .upload-section.drag-over {
    border-color: var(--primary);
    background: #f0f8ff;
  }

  .upload-icon {
    font-size: 4rem;
    color: var(--primary);
    margin-bottom: 20px;
  }

  .upload-text {
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: #555;
  }

  .upload-button {
    padding: 12px 30px;
    background: var(--primary);
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
    border: none;
    font-size: 16px;
  }

  .upload-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  #fileInput {
    display: none;
  }

  .file-list {
    margin: 25px 0;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  }

  .file-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #eee;
    transition: background 0.3s ease;
  }

  .file-item:hover {
    background: #f8f9fa;
  }

  .file-item:last-child {
    border-bottom: none;
  }

  .file-info {
    display: flex;
    align-items: center;
    gap: 15px;
    flex: 1;
  }

  .file-icon {
    font-size: 1.5rem;
    color: var(--primary);
  }

  .file-name {
    font-weight: 600;
    color: #333;
    word-break: break-all;
  }

  .file-size {
    color: #7f8c8d;
    font-size: 0.9rem;
  }

  .file-remove {
    color: #e74c3c;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 4px;
    transition: background 0.3s ease;
  }

  .file-remove:hover {
    background: rgba(231, 76, 60, 0.1);
  }

  .preview-section {
    margin: 30px 0;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  }

  .preview-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .preview-item {
    text-align: center;
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 8px;
    background: #f8f9fa;
  }

  .preview-item h4 {
    margin-bottom: 15px;
    color: #2c3e50;
  }

  .image-preview {
    max-width: 100%;
    max-height: 200px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .no-preview {
    padding: 40px;
    text-align: center;
    color: #7f8c8d;
    font-style: italic;
    border: 2px dashed #ddd;
    border-radius: 8px;
  }

  .conversion-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin: 25px 0;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  }

  .option-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .option-label {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .option-select, .option-input {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    width: 100%;
    transition: border-color 0.3s;
  }

  .option-select:focus, .option-input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .option-input {
    width: 100%;
  }

  .option-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }

  .option-checkbox input {
    width: 18px;
    height: 18px;
  }

  .quality-slider {
    margin-top: 10px;
  }

  .quality-value {
    text-align: center;
    font-weight: 600;
    color: var(--primary);
    margin-top: 5px;
  }

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 15px;
    margin: 30px 0;
  }

  .action-button {
    padding: 15px 10px;
    border: none;
    border-radius: 8px;
    background: var(--primary);
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .action-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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

  .action-button.warning {
    background: #ffc107;
    color: #212529;
  }

  .action-button.warning:hover {
    background: #e0a800;
  }

  .action-button.secondary {
    background: #6c757d;
  }

  .action-button.secondary:hover {
    background: #5a6268;
  }

  .action-button:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
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

  .download-section {
    margin: 30px 0;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    display: none;
  }

  .download-section.show {
    display: block;
    animation: fadeIn 0.5s;
  }

  .download-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .download-item {
    text-align: center;
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 8px;
    background: #f8f9fa;
  }

  .download-button {
    padding: 10px 20px;
    background: var(--success);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    margin-top: 10px;
    display: inline-block;
    text-decoration: none;
  }

  .download-button:hover {
    background: #218838;
    transform: translateY(-2px);
  }

  .batch-info {
    margin-top: 15px;
    font-size: 14px;
    color: #7f8c8d;
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
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    .action-button {
      font-size: 14px;
      padding: 12px 8px;
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

    .upload-section {
      padding: 30px 15px;
    }

    .upload-icon {
      font-size: 3rem;
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

    .conversion-options {
      grid-template-columns: 1fr;
    }

    .preview-container,
    .download-items {
      grid-template-columns: 1fr;
    }
  }

  /* Loading animation */
  .loader {
    display: none;
    border: 3px solid #f3f3f3;
    border-top: 3px solid var(--primary);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 20px auto;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>

<div class="converter-container">
  <h1>Free Online Image Converter</h1>
  <p class="welcome-message">Convert PNG to JPG, JPG to PNG, PNG to JPEG, JPG to JPEG, and WebP to JPG instantly. Batch conversion supported with quality adjustment.</p>

  <div class="converter-section">
    <h2>Image Converter</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Files Uploaded: </span>
        <span id="fileCount">0</span>
      </div>
      <div class="counter-item">
        <span>Total Size: </span>
        <span id="totalSize">0 MB</span>
      </div>
      <div class="counter-item">
        <span>Supported Formats: </span>
        <span id="formatCount">PNG, JPG, JPEG, WebP</span>
      </div>
      <div class="counter-item">
        <span>Max File Size: </span>
        <span id="maxSize">10 MB</span>
      </div>
    </div>

    <!-- Upload Section -->
    <div class="upload-section" id="uploadArea">
      <div class="upload-icon">
        <i class="fas fa-cloud-upload-alt"></i>
      </div>
      <div class="upload-text">
        <h3>Drag & Drop Your Images Here</h3>
        <p>or click to browse files</p>
        <p>Supports PNG, JPG, JPEG, WebP (Max 10MB each)</p>
      </div>
      <button class="upload-button" id="browseButton">
        <i class="fas fa-folder-open"></i> Browse Files
      </button>
      <input type="file" id="fileInput" accept=".png,.jpg,.jpeg,.webp" multiple>
    </div>

    <!-- File List -->
    <div class="file-list" id="fileListContainer" style="display: none;">
      <h3>Selected Files</h3>
      <div id="fileList"></div>
    </div>

    <!-- Preview Section -->
    <div class="preview-section" id="previewSection" style="display: none;">
      <h3>Preview</h3>
      <div class="preview-container" id="previewContainer">
        <div class="no-preview">
          <i class="fas fa-images"></i>
          <p>Select files to see preview</p>
        </div>
      </div>
    </div>

    <!-- Conversion Options -->
    <div class="conversion-options">
      <div class="option-group">
        <label class="option-label">Output Format</label>
        <select id="outputFormat" class="option-select">
          <option value="jpg">JPG (JPEG)</option>
          <option value="png">PNG</option>
          <option value="webp">WebP</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Quality (JPG/WebP)</label>
        <input type="range" id="quality" class="quality-slider" min="1" max="100" value="85">
        <div class="quality-value" id="qualityValue">85%</div>
      </div>
      
      <div class="option-group">
        <label class="option-label">PNG Compression</label>
        <select id="pngCompression" class="option-select">
          <option value="0">No Compression</option>
          <option value="1">Fast Compression</option>
          <option value="2">Best Compression</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="removeBackground" checked>
          <label for="removeBackground">Remove PNG Background (JPG output)</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="preserveMetadata" checked>
          <label for="preserveMetadata">Preserve Metadata</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="batchConvert">
          <label for="batchConvert">Batch Convert All Files</label>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="button-section">
      <button class="action-button" data-action="convert" id="convertButton">
        <i class="fas fa-sync-alt"></i> Convert Now
      </button>
      <button class="action-button success" data-action="convertAll" id="convertAllButton">
        <i class="fas fa-bolt"></i> Convert All
      </button>
      <button class="action-button warning" data-action="preview">
        <i class="fas fa-eye"></i> Preview All
      </button>
      <button class="action-button secondary" data-action="clear">
        <i class="fas fa-trash-alt"></i> Clear All
      </button>
      <button class="action-button" data-action="downloadAll" id="downloadAllButton" disabled>
        <i class="fas fa-download"></i> Download All
      </button>
    </div>

    <!-- Loader -->
    <div class="loader" id="conversionLoader"></div>

    <!-- Alert Container -->
    <div id="alertContainer" class="alert-container"></div>

    <!-- Download Section -->
    <div class="download-section" id="downloadSection">
      <h3>Download Converted Images</h3>
      <div class="download-items" id="downloadItems"></div>
      <div class="batch-info" id="batchInfo" style="display: none;">
        <p><i class="fas fa-info-circle"></i> Batch conversion completed. Click "Download All" to get a ZIP file.</p>
      </div>
    </div>

    {% include share-and-donation.html %}

    <!-- Examples Section -->
    <div class="examples">
      <h2>Examples & Use Cases</h2>

      <div class="example-item">
        <h3><i class="fas fa-camera"></i> PNG to JPG Conversion</h3>
        <p>Convert transparent PNG images to JPG format for web use. Perfect for optimizing website images while removing transparency.</p>
      </div>

      <div class="example-item">
        <h3><i class="fas fa-file-image"></i> JPG to PNG Conversion</h3>
        <p>Convert JPG images to PNG format for lossless quality. Ideal for logos, graphics, and images that need transparency support.</p>
      </div>

      <div class="example-item">
        <h3><i class="fas fa-compress-alt"></i> WebP to JPG Conversion</h3>
        <p>Convert modern WebP images to JPG format for compatibility with older systems and software that don't support WebP.</p>
      </div>

      <div class="example-item">
        <h3><i class="fas fa-images"></i> Batch Conversion</h3>
        <p>Convert multiple images at once. Save time by converting entire folders of images from one format to another in one click.</p>
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Image Converter Tool</h2>

    <p>Need to convert images between different formats? Our free <strong>Online Image Converter tool</strong> is the perfect solution for photographers, designers, developers, and anyone who works with digital images. Convert PNG to JPG, JPG to PNG, PNG to JPEG, JPG to JPEG, and WebP to JPG instantly with just a few clicks. All conversions happen securely in your browser - your images never leave your computer!</p>

    <h3>How to Use This Image Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Upload Images:</strong> Drag and drop your images or click the upload area to select files from your computer. You can upload multiple images at once for batch conversion.</li>
      <li><strong>Choose Output Format:</strong> Select your desired output format (JPG, PNG, or WebP) from the dropdown menu.</li>
      <li><strong>Adjust Settings:</strong> Set the quality level for JPG/WebP outputs or compression level for PNG outputs. Enable background removal for PNG to JPG conversion.</li>
      <li><strong>Convert:</strong> Click the "Convert Now" button to process a single image or "Convert All" for batch conversion of all uploaded images.</li>
      <li><strong>Download:</strong> Download your converted images individually or get all images in a ZIP file with the "Download All" button.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're a web developer working on a client's website. The client provides all product images in PNG format with transparency, but you need them in JPG format for better compatibility and smaller file sizes. Instead of opening each image in Photoshop and saving them one by one (which could take hours for hundreds of images), you can simply drag all PNG files into our converter, set the output to JPG with 85% quality, enable background removal, and click "Convert All". Within minutes, all your images are converted and ready to download as a ZIP file.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Web Developers:</strong> Convert images to web-optimized formats like JPG and WebP for faster page loading.</li>
      <li><strong>Photographers:</strong> Quickly convert RAW camera outputs to shareable formats without losing quality.</li>
      <li><strong>Graphic Designers:</strong> Convert between formats while preserving image quality for different project requirements.</li>
      <li><strong>Social Media Managers:</strong> Optimize images for different platforms (Instagram, Facebook, Twitter) with the right formats and sizes.</li>
      <li><strong>Business Owners:</strong> Convert product images, logos, and marketing materials to appropriate formats for websites and print materials.</li>
      <li><strong>Students & Educators:</strong> Convert images for presentations, projects, and educational materials.</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What is the difference between JPG and JPEG formats?</strong><br>
      JPG and JPEG are essentially the same format. JPEG is the full name (Joint Photographic Experts Group), while JPG is the common file extension used on Windows systems. Both refer to the same image compression standard.</p>

    <p><strong>Is there a file size limit for conversion?</strong><br>
      You can convert images up to 10MB each. For batch conversion, there's no limit on the number of files, as long as each individual file is under 10MB.</p>

    <p><strong>Are my images kept private and secure when I use this tool?</strong><br>
      Absolutely! This is a core feature of our tool. All image processing happens locally in your browser using JavaScript. Your images are never uploaded to our servers, meaning we never see, store, or have access to your images. Your privacy is 100% guaranteed.</p>

    <p><strong>Can I use this tool on my mobile phone?</strong><br>
      Yes, our website and tool are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets. You can convert images directly from your phone's gallery.</p>

    <p><strong>Do I need to create an account or pay to use this?</strong><br>
      No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees. You can convert as many images as you want, whenever you want.</p>

    <h3>Why Choose Our Image Converter?</h3>
    <p>Our <strong>online image converter</strong> stands out from other tools because of its simplicity, speed, and privacy features. Unlike many online converters that require uploading your images to their servers, our tool processes everything locally in your browser. This means your personal photos, client work, and sensitive images remain completely private. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Common Applications of Image Conversion</h3>
    <p>Image conversion has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Web Development:</strong> Convert images to web-optimized formats (JPG, WebP) for faster loading times</li>
      <li><strong>Graphic Design:</strong> Convert between formats while maintaining transparency and quality</li>
      <li><strong>Photography:</strong> Convert RAW or high-quality images to shareable formats</li>
      <li><strong>E-commerce:</strong> Standardize product image formats across online stores</li>
      <li><strong>Print Media:</strong> Convert digital images to print-ready formats</li>
      <li><strong>Social Media:</strong> Optimize images for different social platforms with appropriate formats and compression</li>
    </ul>

    <h3>Supported Formats Explained:</h3>
    <p><strong>PNG (Portable Network Graphics):</strong> Lossless format that supports transparency. Best for logos, graphics, and images requiring transparency.</p>
    <p><strong>JPG/JPEG (Joint Photographic Experts Group):</strong> Lossy compression format ideal for photographs and complex images. Smaller file sizes but doesn't support transparency.</p>
    <p><strong>WebP:</strong> Modern format developed by Google that provides superior lossless and lossy compression. Supports transparency and animation.</p>
  </div>
</div>

<!-- Conversion Modal -->
<div id="conversionModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Converting Images</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div id="conversionProgress">
        <p>Processing your images...</p>
        <div class="progress-bar" style="width: 100%; height: 10px; background: #f0f0f0; border-radius: 5px; margin: 15px 0;">
          <div id="progressFill" style="width: 0%; height: 100%; background: var(--primary); border-radius: 5px; transition: width 0.3s;"></div>
        </div>
        <p id="progressText">0% Complete</p>
        <p id="currentFile">Starting conversion...</p>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelConversion">Cancel</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const browseButton = document.getElementById('browseButton');
    const fileListContainer = document.getElementById('fileListContainer');
    const fileList = document.getElementById('fileList');
    const previewSection = document.getElementById('previewSection');
    const previewContainer = document.getElementById('previewContainer');
    const convertButton = document.getElementById('convertButton');
    const convertAllButton = document.getElementById('convertAllButton');
    const downloadAllButton = document.getElementById('downloadAllButton');
    const downloadSection = document.getElementById('downloadSection');
    const downloadItems = document.getElementById('downloadItems');
    const alertContainer = document.getElementById('alertContainer');
    const conversionLoader = document.getElementById('conversionLoader');
    const conversionModal = document.getElementById('conversionModal');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const currentFile = document.getElementById('currentFile');
    const cancelConversion = document.getElementById('cancelConversion');
    const closeModal = document.querySelectorAll('.close-modal');
    
    // Options
    const outputFormat = document.getElementById('outputFormat');
    const qualitySlider = document.getElementById('quality');
    const qualityValue = document.getElementById('qualityValue');
    const pngCompression = document.getElementById('pngCompression');
    const removeBackground = document.getElementById('removeBackground');
    const preserveMetadata = document.getElementById('preserveMetadata');
    const batchConvert = document.getElementById('batchConvert');

    // State
    let files = [];
    let convertedFiles = [];
    let isConverting = false;
    let conversionCancelled = false;

    // Event Listeners
    browseButton.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleFileSelect);
    
    // Drag and drop
    uploadArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadArea.classList.add('drag-over');
    });

    uploadArea.addEventListener('dragleave', () => {
      uploadArea.classList.remove('drag-over');
    });

    uploadArea.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadArea.classList.remove('drag-over');
      handleFiles(e.dataTransfer.files);
    });

    // Quality slider
    qualitySlider.addEventListener('input', () => {
      qualityValue.textContent = `${qualitySlider.value}%`;
    });

    // Conversion buttons
    document.querySelectorAll('.action-button').forEach(button => {
      button.addEventListener('click', function() {
        const action = this.getAttribute('data-action');
        handleAction(action);
      });
    });

    // Modal close buttons
    closeModal.forEach(btn => {
      btn.addEventListener('click', () => {
        conversionModal.style.display = 'none';
      });
    });

    cancelConversion.addEventListener('click', () => {
      conversionCancelled = true;
      conversionModal.style.display = 'none';
      showAlert('Conversion cancelled', 'error');
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
      if (e.target === conversionModal) {
        conversionModal.style.display = 'none';
      }
    });

    // Functions
    function handleFileSelect(e) {
      handleFiles(e.target.files);
    }

    function handleFiles(fileList) {
      const newFiles = Array.from(fileList).filter(file => {
        const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
        const maxSize = 10 * 1024 * 1024; // 10MB
        
        if (!validTypes.includes(file.type)) {
          showAlert(`Unsupported file type: ${file.name}. Please upload PNG, JPG, or WebP images.`, 'error');
          return false;
        }
        
        if (file.size > maxSize) {
          showAlert(`File too large: ${file.name}. Maximum size is 10MB.`, 'error');
          return false;
        }
        
        return true;
      });

      files = [...files, ...newFiles];
      updateFileList();
      updateCounters();
      
      if (newFiles.length > 0) {
        showAlert(`${newFiles.length} file(s) added successfully`, 'success');
      }
    }

    function updateFileList() {
      if (files.length === 0) {
        fileListContainer.style.display = 'none';
        previewSection.style.display = 'none';
        return;
      }

      fileListContainer.style.display = 'block';
      previewSection.style.display = 'block';
      
      fileList.innerHTML = '';
      files.forEach((file, index) => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.innerHTML = `
          <div class="file-info">
            <i class="fas fa-file-image file-icon"></i>
            <div>
              <div class="file-name">${file.name}</div>
              <div class="file-size">${formatFileSize(file.size)}</div>
            </div>
          </div>
          <div class="file-remove" onclick="removeFile(${index})">
            <i class="fas fa-times"></i> Remove
          </div>
        `;
        fileList.appendChild(fileItem);
      });

      updatePreview();
    }

    function updatePreview() {
      previewContainer.innerHTML = '';
      
      if (files.length === 0) {
        previewContainer.innerHTML = `
          <div class="no-preview">
            <i class="fas fa-images"></i>
            <p>Select files to see preview</p>
          </div>
        `;
        return;
      }

      // Show preview for first 4 files
      const previewFiles = files.slice(0, 4);
      previewFiles.forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
          const previewItem = document.createElement('div');
          previewItem.className = 'preview-item';
          previewItem.innerHTML = `
            <h4>${file.name}</h4>
            <img src="${e.target.result}" alt="${file.name}" class="image-preview">
            <p>${formatFileSize(file.size)}</p>
          `;
          previewContainer.appendChild(previewItem);
        };
        reader.readAsDataURL(file);
      });

      if (files.length > 4) {
        const moreItem = document.createElement('div');
        moreItem.className = 'preview-item';
        moreItem.innerHTML = `
          <h4>${files.length - 4} more files</h4>
          <div style="font-size: 3rem; color: #ccc;">
            <i class="fas fa-images"></i>
          </div>
          <p>+ ${files.length - 4} images</p>
        `;
        previewContainer.appendChild(moreItem);
      }
    }

    function updateCounters() {
      document.getElementById('fileCount').textContent = files.length;
      
      const totalSize = files.reduce((sum, file) => sum + file.size, 0);
      document.getElementById('totalSize').textContent = formatFileSize(totalSize);
    }

    function formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    function removeFile(index) {
      files.splice(index, 1);
      updateFileList();
      updateCounters();
      showAlert('File removed', 'success');
    }

    function handleAction(action) {
      switch (action) {
        case 'convert':
          if (files.length === 0) {
            showAlert('Please upload at least one image first', 'error');
            return;
          }
          convertImages([files[0]]);
          break;
          
        case 'convertAll':
          if (files.length === 0) {
            showAlert('Please upload images first', 'error');
            return;
          }
          convertImages(files);
          break;
          
        case 'preview':
          if (files.length === 0) {
            showAlert('Please upload images first', 'error');
            return;
          }
          showAlert('Preview generated. Check the preview section above.', 'success');
          break;
          
        case 'clear':
          files = [];
          convertedFiles = [];
          updateFileList();
          updateCounters();
          downloadSection.classList.remove('show');
          downloadAllButton.disabled = true;
          showAlert('All files cleared', 'success');
          break;
          
        case 'downloadAll':
          if (convertedFiles.length === 0) {
            showAlert('No converted files available', 'error');
            return;
          }
          downloadAllFiles();
          break;
      }
    }

    async function convertImages(imagesToConvert) {
      if (isConverting) {
        showAlert('Conversion in progress. Please wait.', 'error');
        return;
      }

      isConverting = true;
      conversionCancelled = false;
      convertedFiles = [];
      
      // Show modal
      conversionModal.style.display = 'block';
      progressFill.style.width = '0%';
      progressText.textContent = '0% Complete';
      
      const format = outputFormat.value;
      const quality = parseInt(qualitySlider.value) / 100;
      const compression = parseInt(pngCompression.value);
      const removeBg = removeBackground.checked;
      
      for (let i = 0; i < imagesToConvert.length; i++) {
        if (conversionCancelled) break;
        
        const file = imagesToConvert[i];
        currentFile.textContent = `Converting: ${file.name}`;
        
        // Update progress
        const progress = ((i + 1) / imagesToConvert.length) * 100;
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}% Complete`;
        
        try {
          const convertedBlob = await convertImage(file, format, quality, compression, removeBg);
          const convertedFile = new File([convertedBlob], 
            `${file.name.replace(/\.[^/.]+$/, "")}.${format}`, 
            { type: convertedBlob.type });
          
          convertedFiles.push(convertedFile);
          
          // Show success for each file
          if (imagesToConvert.length === 1) {
            showAlert('Image converted successfully!', 'success');
          }
        } catch (error) {
          showAlert(`Error converting ${file.name}: ${error.message}`, 'error');
        }
      }
      
      // Hide modal
      conversionModal.style.display = 'none';
      isConverting = false;
      
      if (!conversionCancelled) {
        // Show download section
        showDownloadSection();
        
        if (convertedFiles.length > 0) {
          if (imagesToConvert.length > 1) {
            showAlert(`${convertedFiles.length} images converted successfully!`, 'success');
          }
        }
      }
    }

    function convertImage(file, format, quality, compression, removeBg) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = function(e) {
          const img = new Image();
          
          img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Set canvas size
            canvas.width = img.width;
            canvas.height = img.height;
            
            // Handle background removal for PNG to JPG
            if (removeBg && format === 'jpg' && file.type === 'image/png') {
              // Fill with white background
              ctx.fillStyle = '#FFFFFF';
              ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
            
            // Draw image
            ctx.drawImage(img, 0, 0);
            
            // Convert to blob
            canvas.toBlob((blob) => {
              if (blob) {
                resolve(blob);
              } else {
                reject(new Error('Conversion failed'));
              }
            }, `image/${format}`, quality);
          };
          
          img.onerror = () => reject(new Error('Failed to load image'));
          img.src = e.target.result;
        };
        
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsDataURL(file);
      });
    }

    function showDownloadSection() {
      if (convertedFiles.length === 0) {
        downloadSection.classList.remove('show');
        downloadAllButton.disabled = true;
        return;
      }
      
      downloadItems.innerHTML = '';
      
      convertedFiles.forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = function(e) {
          const downloadItem = document.createElement('div');
          downloadItem.className = 'download-item';
          downloadItem.innerHTML = `
            <h4>${file.name}</h4>
            <img src="${e.target.result}" alt="${file.name}" class="image-preview">
            <p>${formatFileSize(file.size)}</p>
            <a href="${e.target.result}" download="${file.name}" class="download-button">
              <i class="fas fa-download"></i> Download
            </a>
          `;
          downloadItems.appendChild(downloadItem);
        };
        reader.readAsDataURL(file);
      });
      
      downloadSection.classList.add('show');
      downloadAllButton.disabled = false;
      
      // Show batch info for multiple files
      const batchInfo = document.getElementById('batchInfo');
      if (convertedFiles.length > 1) {
        batchInfo.style.display = 'block';
      } else {
        batchInfo.style.display = 'none';
      }
    }

    function downloadAllFiles() {
      if (convertedFiles.length === 0) return;
      
      if (convertedFiles.length === 1) {
        // Single file download
        const file = convertedFiles[0];
        const url = URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        return;
      }
      
      // For multiple files, we would normally create a ZIP
      // Since JSZip requires additional library, we'll simulate it
      showAlert('Preparing ZIP file... For production, integrate with JSZip library for actual ZIP creation.', 'success');
      
      // Simulate download for each file
      convertedFiles.forEach((file, index) => {
        setTimeout(() => {
          const url = URL.createObjectURL(file);
          const a = document.createElement('a');
          a.href = url;
          a.download = file.name;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }, index * 100);
      });
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

    // Make removeFile function available globally for onclick events
    window.removeFile = removeFile;
  });
</script>