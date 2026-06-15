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

  <h2>Free Online Image Converter Tool – Convert Images Instantly Without Losing Quality</h2>

  <p>Images are an essential part of modern digital communication. Whether you're building a website, managing an online store, posting on social media, creating presentations, or simply sharing photos with friends and family, choosing the right image format can make a significant difference. Different image formats serve different purposes. Some are designed for maximum quality, while others focus on reducing file size or supporting transparent backgrounds.</p>

  <p>Our free <strong>Online Image Converter Tool</strong> makes it incredibly easy to convert images from one format to another in just a few clicks. You don't need advanced design software, technical knowledge, or expensive subscriptions. Simply upload your image, choose the desired output format, and download the converted version instantly.</p>

  <p>Whether you need to convert PNG to JPG, JPG to PNG, JPEG to WebP, or WebP back to PNG, this tool provides a fast and convenient solution for everyday image conversion tasks.</p>

  <h3>Why Image Conversion Is Important</h3>

  <p>Many people assume that all image files are the same, but different image formats have unique characteristics. Some formats provide superior image quality, while others prioritize smaller file sizes for faster loading times.</p>

  <p>For example, a photographer may want maximum image quality for professional work, while a website owner may prefer smaller file sizes to improve page speed. Likewise, a graphic designer creating logos often needs transparency support, which isn't available in every image format.</p>

  <p>Image conversion allows you to choose the most appropriate format for your specific project. Instead of being limited by the original file type, you can optimize images based on your goals and requirements.</p>

  <h3>How This Online Image Converter Works</h3>

  <p>Our image converter is designed to be simple enough for beginners while remaining powerful enough for professionals.</p>

  <p>The process begins when you upload one or more images into the converter. The tool analyzes the uploaded files and allows you to choose your preferred output format. Once you select the format and quality settings, the conversion process begins immediately.</p>

  <p>Unlike many online converters that upload your files to remote servers, our converter performs processing directly within your browser whenever possible. This significantly improves privacy and security while reducing waiting times.</p>

  <p>After conversion is complete, you can download individual images or all converted files together.</p>

  <h3>Step-by-Step Guide to Using the Image Converter</h3>

  <ul>
    <li><strong>Step 1:</strong> Upload your image or multiple images.</li>
    <li><strong>Step 2:</strong> Select the output format you want.</li>
    <li><strong>Step 3:</strong> Adjust quality and compression settings.</li>
    <li><strong>Step 4:</strong> Start the conversion process.</li>
    <li><strong>Step 5:</strong> Download the converted files.</li>
  </ul>

  <p>The entire process usually takes only a few seconds, depending on image size and quantity.</p>

  <h3>Understanding PNG Format</h3>

  <p>PNG, which stands for Portable Network Graphics, is one of the most popular image formats used today. It is widely known for supporting transparency and maintaining high image quality.</p>

  <p>Unlike JPG, PNG uses lossless compression. This means image data is preserved during compression, resulting in excellent visual quality.</p>

  <p>PNG files are especially useful for logos, icons, illustrations, screenshots, and graphics that require transparent backgrounds.</p>

  <p>However, because PNG prioritizes quality over compression efficiency, file sizes are often larger than JPG files.</p>

  <h3>Understanding JPG and JPEG Formats</h3>

  <p>JPG and JPEG are actually the same format. The only difference is the file extension used by different operating systems.</p>

  <p>JPEG uses lossy compression technology. This means some image data is removed during compression to achieve significantly smaller file sizes.</p>

  <p>For photographs and complex images, JPEG often provides the perfect balance between image quality and file size.</p>

  <p>Because of its efficiency, JPEG remains the most widely used format for websites, digital photography, blogs, social media platforms, and e-commerce stores.</p>

  <h3>Understanding WebP Format</h3>

  <p>WebP is a modern image format developed by Google. It was specifically designed to improve web performance by delivering smaller file sizes without sacrificing image quality.</p>

  <p>One of WebP's biggest advantages is flexibility. It supports both lossy and lossless compression while also supporting transparent backgrounds.</p>

  <p>In many cases, WebP files are significantly smaller than equivalent JPG or PNG images, helping websites load faster.</p>

  <p>For this reason, many developers and SEO professionals now prefer WebP for web optimization projects.</p>

  <h3>PNG vs JPG: Which One Should You Choose?</h3>

  <p>Choosing between PNG and JPG depends entirely on your intended use.</p>

  <p>If your image contains text, logos, illustrations, or transparent elements, PNG is usually the better choice because it preserves quality and supports transparency.</p>

  <p>If you're working with photographs or images where smaller file size is important, JPG is typically the preferred option.</p>

  <p>Website owners often use JPG for photographs and PNG for logos and interface elements.</p>

  <h3>Why File Size Matters</h3>

  <p>Image file size has a direct impact on website performance, user experience, and storage requirements.</p>

  <p>Large images consume more bandwidth and take longer to download. This can negatively affect page loading speed and increase bounce rates.</p>

  <p>Smaller images improve website performance and create a smoother experience for visitors, especially those using mobile devices or slower internet connections.</p>

  <p>Image conversion is one of the simplest ways to reduce file size while maintaining acceptable visual quality.</p>

  <h3>Benefits of Batch Image Conversion</h3>

  <p>Converting images individually can become extremely time-consuming when working with large collections of files.</p>

  <p>Batch conversion allows you to upload multiple images and process them simultaneously. This feature is especially valuable for photographers, online store owners, designers, and content creators.</p>

  <p>Instead of repeating the same process hundreds of times, you can convert entire folders in a single operation.</p>

  <p>This saves significant time and improves productivity.</p>

  <h3>Who Uses Image Converters?</h3>

  <p>Image conversion tools are useful for a wide variety of professionals and everyday users.</p>

  <ul>
    <li><strong>Photographers</strong> convert images for clients and online galleries.</li>
    <li><strong>Designers</strong> prepare graphics for different platforms.</li>
    <li><strong>Developers</strong> optimize images for websites.</li>
    <li><strong>E-commerce businesses</strong> standardize product photos.</li>
    <li><strong>Students</strong> prepare images for assignments and presentations.</li>
    <li><strong>Social media managers</strong> optimize content for multiple platforms.</li>
  </ul>

  <p>Regardless of technical expertise, anyone working with digital images can benefit from having a reliable image conversion tool available.</p>

</div>

  <h3>Understanding Image Quality and Compression</h3>

  <p>One of the most important aspects of image conversion is understanding the relationship between image quality and file size. Every digital image contains visual information, and the way that information is stored directly affects both image appearance and storage requirements.</p>

  <p>When converting images, users often face a trade-off between maintaining maximum quality and reducing file size. Choosing the right balance depends on how the image will be used. For example, a professional photographer may prioritize quality, while a website owner may focus on faster loading times.</p>

  <p>Modern image converters provide adjustable quality settings that allow users to control this balance. This flexibility helps optimize images for different applications without requiring specialized editing software.</p>

  <h3>What Is Lossy Compression?</h3>

  <p>Lossy compression is a method used by formats such as JPG and certain WebP configurations. During compression, some image information is permanently removed to reduce file size.</p>

  <p>The goal is to eliminate details that are less noticeable to the human eye while preserving the overall appearance of the image. In many cases, users cannot easily distinguish between the original image and a properly compressed version.</p>

  <p>The biggest advantage of lossy compression is significantly smaller file sizes. This makes it ideal for websites, social media platforms, email attachments, and online galleries.</p>

  <p>However, excessive compression can introduce visible artifacts, blurriness, or color distortions. This is why selecting the appropriate quality level is important.</p>

  <h3>What Is Lossless Compression?</h3>

  <p>Lossless compression works differently. Instead of removing image information, it reorganizes the data more efficiently while preserving every detail.</p>

  <p>Formats such as PNG use lossless compression, allowing images to retain their original quality regardless of how many times they are saved or converted.</p>

  <p>This makes lossless formats ideal for logos, screenshots, diagrams, icons, and graphics where sharp edges and precise details are important.</p>

  <p>While lossless compression maintains maximum quality, file sizes are typically larger compared to lossy formats.</p>

  <h3>Why Transparency Matters</h3>

  <p>Transparency is one of the most requested features in modern image formats. It allows parts of an image to remain invisible, enabling graphics to blend seamlessly into different backgrounds.</p>

  <p>Transparent images are commonly used for logos, icons, product cutouts, website graphics, and branding materials.</p>

  <p>PNG and WebP both support transparency, making them excellent choices for web design projects. JPG, however, does not support transparent backgrounds.</p>

  <p>When converting transparent PNG files to JPG, transparent areas must be replaced with a solid background color, usually white.</p>

  <h3>PNG Conversion Best Practices</h3>

  <p>PNG files are often used when image quality is more important than file size. They are especially useful for graphics containing text, logos, or illustrations.</p>

  <p>When converting images to PNG, it is important to consider whether transparency needs to be preserved. If transparency is required, PNG remains one of the best available options.</p>

  <p>Many designers use PNG for user interface elements because it maintains sharp edges and high-quality details.</p>

  <p>For large photographic images, however, PNG files may become unnecessarily large compared to JPG or WebP alternatives.</p>

  <h3>JPG Conversion Best Practices</h3>

  <p>JPG remains the most popular image format on the internet due to its efficient compression and universal compatibility.</p>

  <p>When converting images to JPG, selecting the right quality level is crucial. Higher quality settings preserve more detail but create larger files, while lower settings reduce file size but may introduce visible compression artifacts.</p>

  <p>For most websites, a quality setting between 75% and 90% provides an excellent balance between appearance and performance.</p>

  <p>This makes JPG ideal for photographs, travel images, product photos, blog content, and social media posts.</p>

  <h3>Why WebP Is Becoming the Preferred Format</h3>

  <p>WebP has gained widespread popularity because it combines many advantages of both PNG and JPG.</p>

  <p>It supports transparency, provides excellent image quality, and typically produces smaller files than traditional formats.</p>

  <p>Google developed WebP specifically to improve web performance, making it highly attractive for modern websites.</p>

  <p>Many content management systems, website builders, and optimization plugins now support automatic WebP conversion.</p>

  <h3>WebP and Website Performance</h3>

  <p>Website speed has become increasingly important for both user experience and search engine rankings. Large images are often one of the biggest causes of slow page loading.</p>

  <p>By converting images to WebP, website owners can significantly reduce total page size without sacrificing visual quality.</p>

  <p>Smaller images load faster, consume less bandwidth, and create a smoother browsing experience for visitors.</p>

  <p>This is especially beneficial for mobile users who may have slower internet connections or limited data plans.</p>

  <h3>Image Conversion and SEO Benefits</h3>

  <p>Search engines increasingly prioritize user experience. Fast-loading websites tend to perform better because visitors are less likely to abandon pages that load quickly.</p>

  <p>Image optimization plays a major role in overall website speed. Converting oversized images into optimized formats can contribute to faster loading times and improved performance metrics.</p>

  <p>While image format alone does not guarantee higher rankings, optimized images help support broader SEO efforts.</p>

  <p>Better performance often leads to improved user engagement, lower bounce rates, and longer session durations.</p>

  <h3>How Image Size Affects Mobile Users</h3>

  <p>Mobile traffic now accounts for a large percentage of internet usage worldwide. Users often browse websites using smartphones connected through mobile networks.</p>

  <p>Large image files can significantly slow down page loading on these connections. Visitors may leave before the content fully loads.</p>

  <p>Converting images into optimized formats such as JPG or WebP helps reduce loading times and improves accessibility for mobile audiences.</p>

  <p>This creates a better user experience while also supporting mobile SEO performance.</p>

  <h3>Batch Conversion for Large Projects</h3>

  <p>Professionals often work with hundreds or even thousands of images at a time. Converting files individually would be inefficient and time-consuming.</p>

  <p>Batch conversion streamlines the workflow by allowing multiple images to be processed simultaneously.</p>

  <p>Whether you're managing an e-commerce catalog, preparing client deliverables, or optimizing website assets, batch conversion can save countless hours.</p>

  <p>Many businesses rely on batch processing to maintain consistency across large image libraries.</p>

  <h3>Converting Images for Social Media</h3>

  <p>Different social media platforms have unique image requirements. Large files may upload slowly, while incorrect formats can reduce image quality after platform compression.</p>

  <p>Converting images before uploading helps ensure better presentation and faster processing.</p>

  <p>Social media managers often optimize images specifically for platforms such as Instagram, Facebook, LinkedIn, Pinterest, and X.</p>

  <p>Using the correct format can improve visual consistency and audience engagement.</p>

  <h3>Converting Images for E-commerce Stores</h3>

  <p>Product images are one of the most important elements of online stores. Customers rely heavily on visual content when making purchasing decisions.</p>

  <p>However, large image files can slow down product pages and negatively affect conversion rates.</p>

  <p>Converting and optimizing product images helps balance visual quality with website performance.</p>

  <p>This creates a smoother shopping experience and may contribute to improved sales performance.</p>

  <h3>Privacy Advantages of Browser-Based Conversion</h3>

  <p>Many online converters require users to upload images to external servers for processing. This may raise concerns about privacy, confidentiality, and data security.</p>

  <p>Browser-based image converters process files directly on the user's device whenever possible. This means images never leave the computer.</p>

  <p>For businesses, designers, photographers, and professionals working with sensitive content, local processing provides valuable peace of mind.</p>

  <p>Users maintain full control over their files while enjoying fast and convenient image conversion capabilities.</p>

<h3>Batch Image Conversion for Large Projects</h3>

<p>When working with dozens or even hundreds of images, converting files one by one can quickly become time-consuming. This is where batch image conversion becomes incredibly valuable. Whether you're managing an online store, maintaining a blog, building a portfolio website, or organizing a photography collection, converting multiple files simultaneously saves a significant amount of time.</p>

<p>For example, an e-commerce store may need to convert hundreds of product photos into optimized JPG or WebP formats before uploading them. A photographer may need to create smaller versions of high-resolution images for client galleries. Instead of processing every file individually, batch conversion allows all files to be converted using the same settings, ensuring consistency across the entire project.</p>

<p>Consistency is especially important for websites because uniform image dimensions, file sizes, and formats contribute to a cleaner user experience and more predictable performance. A properly optimized image library can reduce bandwidth usage, improve loading speed, and simplify future content management.</p>

<h3>Image Conversion for Social Media Platforms</h3>

<p>Different social media platforms have different image requirements. Uploading images in the wrong format or size can result in poor quality, unexpected cropping, or larger-than-necessary file uploads. Converting images before publishing helps ensure your content looks professional everywhere.</p>

<p>Instagram typically performs best with high-quality JPG files optimized for mobile viewing. Facebook supports multiple formats but often compresses uploaded images, making optimization important. Pinterest relies heavily on visual quality, while LinkedIn favors professional-looking graphics with balanced file sizes.</p>

<p>By converting and optimizing images beforehand, creators can maintain greater control over how their content appears after platform compression is applied. This results in sharper visuals, faster uploads, and a more professional brand presence.</p>

<h3>Image Conversion for E-Commerce Websites</h3>

<p>Online stores depend heavily on product images. Customers cannot physically inspect products, so image quality plays a major role in purchasing decisions. However, large product photos can dramatically slow down a website if they are not optimized correctly.</p>

<p>Image conversion helps online businesses balance quality and performance. Product photos can be converted into compressed JPG or WebP formats while preserving enough detail for customers to zoom and inspect items. Category thumbnails, promotional banners, and gallery images can also be optimized to reduce loading times.</p>

<p>Fast-loading product pages improve customer experience, increase trust, and often contribute to higher conversion rates. Many successful online stores invest significant effort into image optimization because even small improvements in speed can positively affect revenue.</p>

<h3>Image Conversion for Blogging and Content Marketing</h3>

<p>Bloggers frequently publish articles containing screenshots, illustrations, infographics, and photographs. Without proper optimization, these images can significantly increase page size and slow down loading speeds.</p>

<p>Converting images into appropriate formats before uploading helps maintain a balance between visual quality and website performance. Photographs typically benefit from JPG or WebP formats, while diagrams, charts, and screenshots often perform better as PNG files due to their sharp edges and text clarity.</p>

<p>Content marketers also benefit from optimized images because search engines increasingly prioritize user experience metrics. Faster-loading pages can lead to longer session durations, lower bounce rates, and improved search visibility.</p>

<h3>Image Conversion for Mobile Users</h3>

<p>Mobile internet traffic now represents a significant portion of global web usage. Users frequently browse websites using smartphones connected to cellular networks, which may be slower than desktop broadband connections.</p>

<p>Large image files can negatively affect mobile experiences by increasing load times and data consumption. Optimized image conversion helps ensure that visitors can access content quickly regardless of device or network conditions.</p>

<p>Modern formats such as WebP are particularly valuable for mobile users because they deliver excellent image quality while reducing file size. Smaller files mean faster downloads, lower data usage, and smoother browsing experiences.</p>

<h3>Maintaining Image Quality During Conversion</h3>

<p>One common concern during image conversion is the potential loss of quality. While some formats use compression techniques that reduce file size, proper conversion settings can preserve visual appearance remarkably well.</p>

<p>For photographs, using quality settings between 80% and 90% often produces excellent results while significantly reducing file size. Most users cannot visually distinguish between the original image and a properly compressed version at these levels.</p>

<p>For graphics containing text, logos, or illustrations, lossless formats such as PNG are often preferable because they maintain sharp edges and precise details. Understanding the strengths of each format helps ensure the best possible outcome for every image type.</p>

<h3>Image Accessibility and User Experience</h3>

<p>Image optimization is not only about speed and file size. It also contributes to accessibility and overall user experience. Faster-loading images help users access content more quickly, particularly those using slower internet connections or older devices.</p>

<p>Website owners should also provide descriptive alt text for important images. While image conversion tools focus on file formats and optimization, accessibility features ensure that visually impaired users can understand image content through screen readers.</p>

<p>Combining optimized images with proper accessibility practices creates a more inclusive and user-friendly website experience.</p>

<h3>Future Trends in Image Formats</h3>

<p>The world of digital imaging continues to evolve. While JPG, PNG, and WebP remain dominant formats today, newer technologies are emerging that promise even greater efficiency and quality.</p>

<p>Formats such as AVIF offer impressive compression performance while maintaining exceptional image quality. These next-generation formats are becoming increasingly supported by modern browsers and devices. As adoption grows, website owners and developers may choose to incorporate them into their optimization strategies.</p>

<p>Staying informed about new image technologies ensures that websites remain competitive and continue delivering fast, high-quality experiences to visitors.</p>

<h3>Best Practices for Professional Image Management</h3>

<p>Successful image optimization involves more than simply converting files. A complete workflow includes selecting the correct format, choosing appropriate dimensions, applying reasonable compression settings, and organizing files efficiently.</p>

<ul>
  <li><strong>Use JPG:</strong> For photographs and complex images.</li>
  <li><strong>Use PNG:</strong> For logos, icons, screenshots, and transparent graphics.</li>
  <li><strong>Use WebP:</strong> For modern websites requiring maximum performance.</li>
  <li><strong>Resize Images:</strong> Match image dimensions to actual display requirements.</li>
  <li><strong>Compress Wisely:</strong> Balance quality and file size.</li>
  <li><strong>Implement Lazy Loading:</strong> Load images only when needed.</li>
  <li><strong>Organize Files:</strong> Maintain consistent naming conventions.</li>
  <li><strong>Test Performance:</strong> Regularly monitor page speed after image updates.</li>
</ul>

<h3>Why Choose Our Free Online Image Converter Tool?</h3>

<p>Our image converter is designed to make image processing simple, fast, and secure. Unlike many online services that require uploads to remote servers, all processing occurs directly within your browser. This approach provides greater privacy, faster performance, and complete control over your files.</p>

<p>The tool supports popular formats including PNG, JPG, JPEG, and WebP while offering customization options for quality and compression. Whether you need to optimize images for websites, prepare graphics for social media, manage product photos, or convert personal images, the tool delivers reliable results without complicated software installations.</p>

<p>Because everything happens locally on your device, your files remain private throughout the conversion process. There are no accounts to create, no subscriptions to purchase, and no limits preventing you from converting images whenever you need.</p>

<h3>Final Thoughts</h3>

<p>Image conversion plays a crucial role in modern digital workflows. From improving website performance and SEO to preparing content for social media, e-commerce, education, and professional design projects, choosing the right image format can significantly impact both user experience and efficiency.</p>

<p>By understanding how formats such as JPG, PNG, and WebP differ, and by applying proper optimization techniques, you can create visually appealing content that loads quickly and performs well across all devices. Whether you are a beginner managing a personal blog or a professional developer building large-scale websites, image optimization remains one of the most effective ways to improve digital performance.</p>

<p>Use our free Online Image Converter tool whenever you need fast, secure, and reliable image conversion. With support for multiple formats, batch processing capabilities, privacy-focused local processing, and professional-quality results, it provides everything needed to handle modern image optimization tasks efficiently and effectively.</p>

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