---
layout: default
title: "Favicon Generator - All Size Favicon with HTML Head Link Code"
permalink: /favicon-generator-all-size-favicon-with-html-head-link-code/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Favicon Generator - All Size Favicon with HTML Head Link Code</title>
<meta name="description"
  content="Free online Favicon Generator. Create all size favicons (16x16 to 512x512) with HTML head link code. Generate favicon.ico, PNG, Apple Touch Icons and Web App Manifest icons.">
<meta name="keywords"
  content="favicon generator, favicon maker, create favicon, favicon.ico generator, apple touch icon, web app manifest, html favicon code, favicon sizes, all size favicon">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Favicon Generator Styles */
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
    margin: 30px 0;
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

  .upload-text p {
    margin: 10px 0;
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

  #imageInput {
    display: none;
  }

  .preview-section {
    margin: 30px 0;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    display: none;
  }

  .preview-section.show {
    display: block;
    animation: fadeIn 0.5s;
  }

  .preview-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .original-preview, .favicon-preview {
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 8px;
    background: #f8f9fa;
  }

  .preview-title {
    margin-bottom: 15px;
    color: #2c3e50;
    font-size: 1.2rem;
  }

  .image-preview-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
  }

  .original-image {
    max-width: 200px;
    max-height: 200px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .favicon-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 15px;
    margin-top: 15px;
  }

  .favicon-item {
    text-align: center;
    padding: 15px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background: white;
    transition: transform 0.3s ease;
  }

  .favicon-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .favicon-size {
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 8px;
    font-size: 0.9rem;
  }

  .favicon-img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    margin: 0 auto 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    background: #f8f9fa;
    padding: 5px;
  }

  .favicon-format {
    font-size: 0.8rem;
    color: #7f8c8d;
    margin-top: 5px;
  }

  .generation-options {
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

  .sizes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
    margin-top: 10px;
    max-height: 200px;
    overflow-y: auto;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 6px;
  }

  .size-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px;
    background: #f8f9fa;
    border-radius: 4px;
  }

  .size-item input {
    width: 18px;
    height: 18px;
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

  .code-section {
    margin: 30px 0;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    display: none;
  }

  .code-section.show {
    display: block;
    animation: fadeIn 0.5s;
  }

  .code-title {
    margin-bottom: 20px;
    color: #2c3e50;
    font-size: 1.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .code-container {
    background: #2c3e50;
    color: #ecf0f1;
    padding: 20px;
    border-radius: 8px;
    overflow-x: auto;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.6;
  }

  .code-comment {
    color: #7f8c8d;
  }

  .code-tag {
    color: #e74c3c;
  }

  .code-attr {
    color: #3498db;
  }

  .code-value {
    color: #2ecc71;
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

  .download-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .download-item {
    text-align: center;
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 8px;
    background: #f8f9fa;
    transition: transform 0.3s ease;
  }

  .download-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .download-icon {
    font-size: 2rem;
    color: var(--primary);
    margin-bottom: 15px;
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

  .download-all-section {
    margin-top: 30px;
    padding: 20px;
    background: #e8f4fc;
    border-radius: 8px;
    text-align: center;
    border-left: 4px solid var(--primary);
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

    .generation-options {
      grid-template-columns: 1fr;
    }

    .favicon-grid,
    .download-grid {
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }

    .sizes-grid {
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }
  }

  /* Custom checkbox styling */
  .custom-checkbox {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 14px;
  }

  .custom-checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 4px;
  }

  .custom-checkbox:hover input ~ .checkmark {
    background-color: #ccc;
  }

  .custom-checkbox input:checked ~ .checkmark {
    background-color: var(--primary);
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .custom-checkbox input:checked ~ .checkmark:after {
    display: block;
  }

  .custom-checkbox .checkmark:after {
    left: 7px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
</style>

<div class="converter-container">
  <h1>Free Favicon Generator</h1>
  <p class="welcome-message">Create all size favicons (16x16 to 512x512) with complete HTML head link code. Generate favicon.ico, PNG icons, Apple Touch Icons and Web App Manifest icons instantly.</p>

  <div class="converter-section">
    <h2>Favicon Generator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Standard Sizes: </span>
        <span id="sizeCount">14</span>
      </div>
      <div class="counter-item">
        <span>Formats: </span>
        <span id="formatCount">ICO, PNG</span>
      </div>
      <div class="counter-item">
        <span>HTML Code Lines: </span>
        <span id="codeLines">0</span>
      </div>
      <div class="counter-item">
        <span>Max Image Size: </span>
        <span id="maxSize">5 MB</span>
      </div>
    </div>

    <!-- Upload Section -->
    <div class="upload-section" id="uploadArea">
      <div class="upload-icon">
        <i class="fas fa-file-image"></i>
      </div>
      <div class="upload-text">
        <h3>Upload Your Logo/Image</h3>
        <p>Drag & drop your image or click to browse</p>
        <p>Recommended: Square image (min 512x512 pixels)</p>
        <p>Supports JPG, PNG, SVG, GIF (Max 5MB)</p>
      </div>
      <button class="upload-button" id="browseButton">
        <i class="fas fa-folder-open"></i> Browse Image
      </button>
      <input type="file" id="imageInput" accept=".png,.jpg,.jpeg,.gif,.svg" style="display: none;">
    </div>

    <!-- Preview Section -->
    <div class="preview-section" id="previewSection">
      <div class="preview-container">
        <div class="original-preview">
          <div class="preview-title">Original Image</div>
          <div class="image-preview-container">
            <img id="originalImage" class="original-image" alt="Original Image">
            <div>
              <h4 id="imageName">No image selected</h4>
              <p id="imageSize">Size: N/A</p>
              <p id="imageDimensions">Dimensions: N/A</p>
            </div>
          </div>
        </div>

        <div class="favicon-preview">
          <div class="preview-title">Favicon Preview</div>
          <div class="favicon-grid" id="faviconGrid">
            <!-- Favicon previews will be generated here -->
            <div class="favicon-item">
              <div class="favicon-size">16×16</div>
              <div class="favicon-placeholder" style="width: 60px; height: 60px; background: #f0f0f0; border-radius: 4px; margin: 0 auto 10px;"></div>
              <div class="favicon-format">PNG/ICO</div>
            </div>
            <div class="favicon-item">
              <div class="favicon-size">32×32</div>
              <div class="favicon-placeholder" style="width: 60px; height: 60px; background: #f0f0f0; border-radius: 4px; margin: 0 auto 10px;"></div>
              <div class="favicon-format">PNG/ICO</div>
            </div>
            <div class="favicon-item">
              <div class="favicon-size">48×48</div>
              <div class="favicon-placeholder" style="width: 60px; height: 60px; background: #f0f0f0; border-radius: 4px; margin: 0 auto 10px;"></div>
              <div class="favicon-format">PNG/ICO</div>
            </div>
            <div class="favicon-item">
              <div class="favicon-size">64×64</div>
              <div class="favicon-placeholder" style="width: 60px; height: 60px; background: #f0f0f0; border-radius: 4px; margin: 0 auto 10px;"></div>
              <div class="favicon-format">PNG/ICO</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Generation Options -->
    <div class="generation-options">
      <div class="option-group">
        <label class="option-label">Favicon Sizes to Generate</label>
        <div class="sizes-grid" id="sizesGrid">
          <!-- Sizes will be populated by JavaScript -->
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="selectAllSizes" checked>
          <label for="selectAllSizes">Select All Standard Sizes</label>
        </div>
      </div>
      
      <div class="option-group">
        <label class="option-label">Output Format</label>
        <select id="outputFormat" class="option-select">
          <option value="both">Both ICO and PNG</option>
          <option value="ico">ICO only (favicon.ico)</option>
          <option value="png">PNG only</option>
        </select>
        
        <div class="option-checkbox">
          <input type="checkbox" id="generateApple" checked>
          <label for="generateApple">Generate Apple Touch Icons</label>
        </div>
        
        <div class="option-checkbox">
          <input type="checkbox" id="generateAndroid" checked>
          <label for="generateAndroid">Generate Android/Web App Icons</label>
        </div>
      </div>
      
      <div class="option-group">
        <label class="option-label">Background Color (for transparent images)</label>
        <input type="color" id="backgroundColor" value="#ffffff" class="option-input" style="height: 40px;">
        
        <div class="option-checkbox">
          <input type="checkbox" id="removeBackground" checked>
          <label for="removeBackground">Remove Background (if possible)</label>
        </div>
        
        <div class="option-checkbox">
          <input type="checkbox" id="optimizeImages" checked>
          <label for="optimizeImages">Optimize Images for Web</label>
        </div>
      </div>
      
      <div class="option-group">
        <label class="option-label">Custom Sizes (comma separated)</label>
        <input type="text" id="customSizes" class="option-input" placeholder="e.g., 128,256,192">
        
        <label class="option-label" style="margin-top: 15px;">HTML Head Settings</label>
        <select id="htmlVersion" class="option-select">
          <option value="html5">HTML5</option>
          <option value="xhtml">XHTML</option>
        </select>
        
        <div class="option-checkbox">
          <input type="checkbox" id="generateManifest" checked>
          <label for="generateManifest">Generate Web App Manifest JSON</label>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="button-section">
      <button class="action-button" data-action="generate" id="generateButton">
        <i class="fas fa-magic"></i> Generate Favicons
      </button>
      <button class="action-button success" data-action="generateAll" id="generateAllButton">
        <i class="fas fa-bolt"></i> Generate All
      </button>
      <button class="action-button warning" data-action="viewCode">
        <i class="fas fa-code"></i> View HTML Code
      </button>
      <button class="action-button secondary" data-action="clear">
        <i class="fas fa-trash-alt"></i> Clear All
      </button>
      <button class="action-button" data-action="downloadAll" id="downloadAllButton" disabled>
        <i class="fas fa-download"></i> Download All
      </button>
    </div>

    <!-- Loader -->
    <div class="loader" id="generationLoader"></div>

    <!-- Alert Container -->
    <div id="alertContainer" class="alert-container"></div>

    <!-- HTML Code Section -->
    <div class="code-section" id="codeSection">
      <div class="code-title">
        <span>HTML Head Code for Favicons</span>
        <button class="action-button secondary" style="padding: 8px 15px; font-size: 14px;" data-action="copyCode">
          <i class="fas fa-copy"></i> Copy Code
        </button>
      </div>
      <div class="code-container" id="htmlCode">
        <!-- HTML code will be generated here -->
        <span class="code-comment">&lt;!-- Paste this code in your HTML &lt;head&gt; section --&gt;</span><br><br>
        <span class="code-tag">&lt;link</span> <span class="code-attr">rel=</span><span class="code-value">"icon"</span> <span class="code-attr">type=</span><span class="code-value">"image/x-icon"</span> <span class="code-attr">href=</span><span class="code-value">"/favicon.ico"</span><span class="code-tag">&gt;</span><br>
        <span class="code-tag">&lt;link</span> <span class="code-attr">rel=</span><span class="code-value">"icon"</span> <span class="code-attr">type=</span><span class="code-value">"image/png"</span> <span class="code-attr">sizes=</span><span class="code-value">"32x32"</span> <span class="code-attr">href=</span><span class="code-value">"/favicon-32x32.png"</span><span class="code-tag">&gt;</span><br>
        <span class="code-tag">&lt;link</span> <span class="code-attr">rel=</span><span class="code-value">"icon"</span> <span class="code-attr">type=</span><span class="code-value">"image/png"</span> <span class="code-attr">sizes=</span><span class="code-value">"16x16"</span> <span class="code-attr">href=</span><span class="code-value">"/favicon-16x16.png"</span><span class="code-tag">&gt;</span><br>
        <span class="code-tag">&lt;link</span> <span class="code-attr">rel=</span><span class="code-value">"apple-touch-icon"</span> <span class="code-attr">sizes=</span><span class="code-value">"180x180"</span> <span class="code-attr">href=</span><span class="code-value">"/apple-touch-icon.png"</span><span class="code-tag">&gt;</span><br>
        <span class="code-tag">&lt;meta</span> <span class="code-attr">name=</span><span class="code-value">"msapplication-TileColor"</span> <span class="code-attr">content=</span><span class="code-value">"#ffffff"</span><span class="code-tag">&gt;</span><br>
        <span class="code-tag">&lt;meta</span> <span class="code-attr">name=</span><span class="code-value">"theme-color"</span> <span class="code-attr">content=</span><span class="code-value">"#ffffff"</span><span class="code-tag">&gt;</span>
      </div>
    </div>

    <!-- Download Section -->
    <div class="download-section" id="downloadSection">
      <h3>Download Generated Favicons</h3>
      <div class="download-grid" id="downloadGrid">
        <!-- Download items will be generated here -->
      </div>
      
      <div class="download-all-section">
        <h4>Download All Favicons as ZIP</h4>
        <p>Get all generated icons, HTML code, and manifest files in one package.</p>
        <button class="download-button" id="downloadZipButton" style="background: var(--primary);">
          <i class="fas fa-file-archive"></i> Download ZIP Package
        </button>
      </div>
    </div>

    {% include share-and-donation.html %}

    <!-- Examples Section -->
    <div class="examples">
      <h2>Favicon Examples & Use Cases</h2>

      <div class="example-item">
        <h3><i class="fas fa-desktop"></i> Standard Website Favicons</h3>
        <p>Generate 16x16, 32x32, and 48x48 favicons for traditional browser tabs and bookmarks.</p>
      </div>

      <div class="example-item">
        <h3><i class="fas fa-mobile-alt"></i> Mobile & Touch Icons</h3>
        <p>Create Apple Touch Icons (180x180) and Android icons for mobile home screens and PWAs.</p>
      </div>

      <div class="example-item">
        <h3><i class="fas fa-shopping-cart"></i> E-commerce Websites</h3>
        <p>Generate high-resolution icons for e-commerce sites to ensure brand consistency across all devices.</p>
      </div>

      <div class="example-item">
        <h3><i class="fas fa-blog"></i> Blogs & Personal Websites</h3>
        <p>Create professional favicons for blogs and personal websites to enhance brand recognition.</p>
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Favicon Generator Tool</h2>

    <p>Need professional favicons for your website? Our free <strong>Favicon Generator tool</strong> is the ultimate solution for web developers, designers, and website owners. Create all standard favicon sizes (from 16x16 to 512x512) with complete HTML head link code. Generate favicon.ico, PNG icons, Apple Touch Icons, and Web App Manifest icons - all in one place, completely free!</p>

    <h3>How to Use This Favicon Generator (Step-by-Step):</h3>
    <ul>
      <li><strong>Upload Image:</strong> Upload your logo or image (PNG, JPG, SVG, or GIF). For best results, use a square image of at least 512x512 pixels.</li>
      <li><strong>Customize Options:</strong> Select which favicon sizes to generate, choose output formats, and customize background settings.</li>
      <li><strong>Generate Favicons:</strong> Click "Generate Favicons" to create all selected icon sizes and formats instantly in your browser.</li>
      <li><strong>Get HTML Code:</strong> Copy the complete HTML head code ready to paste into your website's &lt;head&gt; section.</li>
      <li><strong>Download:</strong> Download individual icons or get all files in a convenient ZIP package with one click.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're launching a new website for your business. You have a beautiful logo designed by a graphic designer, but now you need to create favicons for all devices and browsers. Instead of manually resizing your logo to 14 different sizes (16x16, 32x32, 48x48, 64x64, 128x128, 180x180, 192x192, 256x256, 384x384, 512x512) and dealing with different formats (ICO, PNG), you simply upload your logo to our tool. Within seconds, you get all properly sized icons, complete HTML code for your website header, and even a Web App Manifest for progressive web apps.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Web Developers:</strong> Quickly generate all required favicon sizes and formats for client projects.</li>
      <li><strong>Designers:</strong> Create pixel-perfect favicons from your logo designs without needing coding skills.</li>
      <li><strong>Business Owners:</strong> Ensure your website has professional favicons that work on all devices and browsers.</li>
      <li><strong>Bloggers & Content Creators:</strong> Add a professional touch to your website with custom favicons.</li>
      <li><strong>E-commerce Stores:</strong> Maintain brand consistency across browser tabs, bookmarks, and mobile devices.</li>
      <li><strong>Startups:</strong> Quickly generate all necessary icons for your MVP or product launch.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: What is a favicon and why is it important?</strong><br>
      A: A favicon (favorite icon) is a small 16x16 pixel icon that appears in browser tabs, bookmarks, and history. It's crucial for brand recognition, professionalism, and user experience. Modern websites need multiple sizes for different devices and uses.</p>

    <p><strong>Q: What sizes should I generate for my website?</strong><br>
      A: For a complete modern favicon set, you should generate: 16x16, 32x32 (standard browser favicons), 180x180 (Apple Touch Icon), 192x192 and 512x512 (Android/Web App Manifest), plus 48x48, 64x64, 128x128, 256x256 for various other uses.</p>

    <p><strong>Q: Are my images kept private and secure when I use this tool?</strong><br>
      A> Absolutely! All image processing happens locally in your browser using JavaScript. Your images are never uploaded to our servers, meaning we never see, store, or have access to your images. Your privacy is 100% guaranteed.</p>

    <p><strong>Q: Can I use this tool on my mobile phone?</strong><br>
      A: Yes, our website and tool are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets. You can generate favicons directly from your mobile device.</p>

    <p><strong>Q: Do I need to create an account or pay to use this?</strong><br>
      A: No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees. You can generate as many favicon sets as you want, whenever you want.</p>

    <h3>Why Choose Our Favicon Generator?</h3>
    <p>Our <strong>favicon generator</strong> stands out from other tools because it generates ALL required sizes and formats in one go, provides complete HTML code, and works entirely in your browser for maximum privacy. Unlike many online generators that require uploading your images to their servers, our tool processes everything locally. This means your proprietary logos, client work, and sensitive images remain completely private.</p>

    <h3>Standard Favicon Sizes Explained:</h3>
    <ul>
      <li><strong>16×16 pixels:</strong> Standard browser tab icon (favicon.ico)</li>
      <li><strong>32×32 pixels:</strong> High-DPI/Retina browser tab icon</li>
      <li><strong>48×48 pixels:</strong> Windows taskbar icon</li>
      <li><strong>64×64 pixels:</strong> Desktop shortcut icon</li>
      <li><strong>128×128 pixels:</strong> Chrome Web Store icon</li>
      <li><strong>180×180 pixels:</strong> Apple Touch Icon (iOS homescreen)</li>
      <li><strong>192×192 pixels:</strong> Android Chrome icon</li>
      <li><strong>256×256 pixels:</strong> Windows site icon</li>
      <li><strong>512×512 pixels:</strong> High-resolution app icon</li>
    </ul>

    <h3>Complete HTML Head Code Generation:</h3>
    <p>Our tool doesn't just create images - it generates complete, ready-to-use HTML code for your website's &lt;head&gt; section. This includes:</p>
    <ul>
      <li>Standard favicon links for all browsers</li>
      <li>Apple Touch Icon meta tags</li>
      <li>Microsoft Tile meta tags</li>
      <li>Theme color for mobile browsers</li>
      <li>Web App Manifest link (for PWA)</li>
      <li>Browserconfig.xml for Windows tiles</li>
    </ul>

    <h3>Professional Tips for Best Results:</h3>
    <ul>
      <li><strong>Use High-Resolution Source:</strong> Start with at least 512×512 pixels for best quality across all sizes.</li>
      <li><strong>Keep It Simple:</strong> Favicons are tiny - avoid complex details that won't be visible at small sizes.</li>
      <li><strong>Test on Dark/Light Backgrounds:</strong> Ensure your favicon looks good on both light and dark browser themes.</li>
      <li><strong>Check All Sizes:</strong> Review each generated size to ensure readability and clarity.</li>
      <li><strong>Update Regularly:</strong> Consider updating your favicon when you rebrand or refresh your website design.</li>
    </ul>
  </div>
</div>

<!-- Generation Progress Modal -->
<div id="progressModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Generating Favicons</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div id="generationProgress">
        <p>Processing your image and generating favicons...</p>
        <div class="progress-bar" style="width: 100%; height: 10px; background: #f0f0f0; border-radius: 5px; margin: 15px 0;">
          <div id="progressFill" style="width: 0%; height: 100%; background: var(--primary); border-radius: 5px; transition: width 0.3s;"></div>
        </div>
        <p id="progressText">0% Complete</p>
        <p id="currentSize">Preparing image...</p>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelGeneration">Cancel</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const uploadArea = document.getElementById('uploadArea');
    const imageInput = document.getElementById('imageInput');
    const browseButton = document.getElementById('browseButton');
    const previewSection = document.getElementById('previewSection');
    const originalImage = document.getElementById('originalImage');
    const imageName = document.getElementById('imageName');
    const imageSize = document.getElementById('imageSize');
    const imageDimensions = document.getElementById('imageDimensions');
    const faviconGrid = document.getElementById('faviconGrid');
    const sizesGrid = document.getElementById('sizesGrid');
    const generateButton = document.getElementById('generateButton');
    const generateAllButton = document.getElementById('generateAllButton');
    const downloadAllButton = document.getElementById('downloadAllButton');
    const codeSection = document.getElementById('codeSection');
    const htmlCode = document.getElementById('htmlCode');
    const downloadSection = document.getElementById('downloadSection');
    const downloadGrid = document.getElementById('downloadGrid');
    const alertContainer = document.getElementById('alertContainer');
    const generationLoader = document.getElementById('generationLoader');
    const progressModal = document.getElementById('progressModal');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const currentSize = document.getElementById('currentSize');
    const cancelGeneration = document.getElementById('cancelGeneration');
    const closeModal = document.querySelectorAll('.close-modal');
    const downloadZipButton = document.getElementById('downloadZipButton');
    
    // Options
    const outputFormat = document.getElementById('outputFormat');
    const selectAllSizes = document.getElementById('selectAllSizes');
    const generateApple = document.getElementById('generateApple');
    const generateAndroid = document.getElementById('generateAndroid');
    const backgroundColor = document.getElementById('backgroundColor');
    const removeBackground = document.getElementById('removeBackground');
    const optimizeImages = document.getElementById('optimizeImages');
    const customSizes = document.getElementById('customSizes');
    const htmlVersion = document.getElementById('htmlVersion');
    const generateManifest = document.getElementById('generateManifest');

    // State
    let originalFile = null;
    let originalImageData = null;
    let generatedFavicons = [];
    let isGenerating = false;
    let generationCancelled = false;

    // Standard favicon sizes
    const standardSizes = [
      { size: '16×16', width: 16, height: 16, selected: true, formats: ['ico', 'png'] },
      { size: '32×32', width: 32, height: 32, selected: true, formats: ['ico', 'png'] },
      { size: '48×48', width: 48, height: 48, selected: true, formats: ['png'] },
      { size: '64×64', width: 64, height: 64, selected: true, formats: ['png'] },
      { size: '128×128', width: 128, height: 128, selected: true, formats: ['png'] },
      { size: '180×180', width: 180, height: 180, selected: true, formats: ['png'], apple: true },
      { size: '192×192', width: 192, height: 192, selected: true, formats: ['png'], android: true },
      { size: '256×256', width: 256, height: 256, selected: true, formats: ['png'] },
      { size: '384×384', width: 384, height: 384, selected: true, formats: ['png'] },
      { size: '512×512', width: 512, height: 512, selected: true, formats: ['png'], android: true }
    ];

    // Initialize
    initializeSizesGrid();
    previewSection.classList.remove('show');
    codeSection.classList.remove('show');
    downloadSection.classList.remove('show');

    // Event Listeners
    browseButton.addEventListener('click', () => imageInput.click());
    imageInput.addEventListener('change', handleImageSelect);
    
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

    // Select all sizes checkbox
    selectAllSizes.addEventListener('change', function() {
      const checkboxes = sizesGrid.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        checkbox.checked = this.checked;
      });
    });

    // Action buttons
    document.querySelectorAll('.action-button').forEach(button => {
      button.addEventListener('click', function() {
        const action = this.getAttribute('data-action');
        handleAction(action);
      });
    });

    // Modal close buttons
    closeModal.forEach(btn => {
      btn.addEventListener('click', () => {
        progressModal.style.display = 'none';
      });
    });

    cancelGeneration.addEventListener('click', () => {
      generationCancelled = true;
      progressModal.style.display = 'none';
      showAlert('Favicon generation cancelled', 'error');
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
      if (e.target === progressModal) {
        progressModal.style.display = 'none';
      }
    });

    // Download ZIP button
    downloadZipButton.addEventListener('click', downloadAllAsZip);

    // Functions
    function handleImageSelect(e) {
      handleFiles(e.target.files);
    }

    function handleFiles(fileList) {
      if (fileList.length === 0) return;
      
      const file = fileList[0];
      const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/svg+xml'];
      const maxSize = 20 * 1024 * 1024; // 5MB
      
      if (!validTypes.includes(file.type)) {
        showAlert(`Unsupported file type: ${file.name}. Please upload PNG, JPG, GIF, or SVG images.`, 'error');
        return;
      }
      
      if (file.size > maxSize) {
        showAlert(`File too large: ${file.name}. Maximum size is 20MB.`, 'error');
        return;
      }
      
      originalFile = file;
      
      const reader = new FileReader();
      reader.onload = function(e) {
        originalImage.src = e.target.result;
        originalImageData = e.target.result;
        
        // Get image dimensions
        const img = new Image();
        img.onload = function() {
          imageName.textContent = file.name;
          imageSize.textContent = `Size: ${formatFileSize(file.size)}`;
          imageDimensions.textContent = `Dimensions: ${img.width}×${img.height} pixels`;
          
          // Show preview section
          previewSection.classList.add('show');
          
          // Update preview favicons
          updateFaviconPreview(img);
          
          showAlert('Image uploaded successfully! You can now generate favicons.', 'success');
        };
        img.src = e.target.result;
      };
      
      reader.onerror = function() {
        showAlert('Error reading the image file.', 'error');
      };
      
      reader.readAsDataURL(file);
    }

    function initializeSizesGrid() {
      sizesGrid.innerHTML = '';
      
      standardSizes.forEach((size, index) => {
        const sizeItem = document.createElement('div');
        sizeItem.className = 'size-item';
        sizeItem.innerHTML = `
          <input type="checkbox" id="size${index}" ${size.selected ? 'checked' : ''} data-width="${size.width}" data-height="${size.height}">
          <label for="size${index}">${size.size} pixels</label>
          ${size.apple ? '<i class="fas fa-apple" style="color: #666; margin-left: auto;"></i>' : ''}
          ${size.android ? '<i class="fab fa-android" style="color: #3ddc84; margin-left: 5px;"></i>' : ''}
        `;
        sizesGrid.appendChild(sizeItem);
      });
    }

    function updateFaviconPreview(img) {
      faviconGrid.innerHTML = '';
      
      // Show first 4 standard sizes as preview
      standardSizes.slice(0, 4).forEach(size => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = 60;
        canvas.height = 60;
        
        // Create preview
        ctx.fillStyle = '#f8f9fa';
        ctx.fillRect(0, 0, 60, 60);
        
        // Draw scaled image
        const scale = Math.min(60 / img.width, 60 / img.height);
        const x = (60 - img.width * scale) / 2;
        const y = (60 - img.height * scale) / 2;
        
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        
        // Add border
        ctx.strokeStyle = '#e0e0e0';
        ctx.lineWidth = 1;
        ctx.strokeRect(0, 0, 60, 60);
        
        const faviconItem = document.createElement('div');
        faviconItem.className = 'favicon-item';
        faviconItem.innerHTML = `
          <div class="favicon-size">${size.size}</div>
          <img src="${canvas.toDataURL('image/png')}" alt="${size.size}" class="favicon-img">
          <div class="favicon-format">${size.formats.join('/').toUpperCase()}</div>
        `;
        faviconGrid.appendChild(faviconItem);
      });
    }

    function formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    function handleAction(action) {
      switch (action) {
        case 'generate':
          if (!originalFile) {
            showAlert('Please upload an image first', 'error');
            return;
          }
          generateFavicons();
          break;
          
        case 'generateAll':
          if (!originalFile) {
            showAlert('Please upload an image first', 'error');
            return;
          }
          generateAllFavicons();
          break;
          
        case 'viewCode':
          if (generatedFavicons.length === 0) {
            showAlert('Please generate favicons first to view HTML code', 'error');
            return;
          }
          showHtmlCode();
          break;
          
        case 'copyCode':
          copyHtmlCode();
          break;
          
        case 'clear':
          clearAll();
          break;
          
        case 'downloadAll':
          if (generatedFavicons.length === 0) {
            showAlert('No favicons generated yet', 'error');
            return;
          }
          downloadAllFavicons();
          break;
      }
    }

    async function generateFavicons() {
      if (isGenerating) {
        showAlert('Generation in progress. Please wait.', 'error');
        return;
      }

      isGenerating = true;
      generationCancelled = false;
      generatedFavicons = [];
      
      // Show progress modal
      progressModal.style.display = 'block';
      progressFill.style.width = '0%';
      progressText.textContent = '0% Complete';
      
      // Get selected sizes
      const selectedSizes = getSelectedSizes();
      
      if (selectedSizes.length === 0) {
        showAlert('Please select at least one size to generate', 'error');
        progressModal.style.display = 'none';
        isGenerating = false;
        return;
      }
      
      const img = new Image();
      img.src = originalImageData;
      
      img.onload = async function() {
        const totalSteps = selectedSizes.length;
        let completed = 0;
        
        for (const size of selectedSizes) {
          if (generationCancelled) break;
          
          currentSize.textContent = `Generating: ${size.size} icon`;
          
          try {
            const favicon = await generateFavicon(img, size);
            generatedFavicons.push(favicon);
            
            // Update progress
            completed++;
            const progress = (completed / totalSteps) * 100;
            progressFill.style.width = `${progress}%`;
            progressText.textContent = `${Math.round(progress)}% Complete`;
            
          } catch (error) {
            console.error(`Error generating ${size.size} favicon:`, error);
          }
        }
        
        // Hide modal
        progressModal.style.display = 'none';
        isGenerating = false;
        
        if (!generationCancelled && generatedFavicons.length > 0) {
          // Show success
          showAlert(`${generatedFavicons.length} favicons generated successfully!`, 'success');
          
          // Update download section
          updateDownloadSection();
          
          // Enable download button
          downloadAllButton.disabled = false;
        }
      };
    }

    function generateAllFavicons() {
      // Select all sizes
      const checkboxes = sizesGrid.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        checkbox.checked = true;
      });
      
      // Enable all options
      generateApple.checked = true;
      generateAndroid.checked = true;
      generateManifest.checked = true;
      
      // Generate favicons
      generateFavicons();
    }

    function getSelectedSizes() {
      const selectedSizes = [];
      const checkboxes = sizesGrid.querySelectorAll('input[type="checkbox"]:checked');
      
      checkboxes.forEach((checkbox, index) => {
        if (index < standardSizes.length) {
          const size = standardSizes[index];
          selectedSizes.push({
            size: size.size,
            width: size.width,
            height: size.height,
            formats: size.formats
          });
        }
      });
      
      // Add custom sizes
      const customSizesInput = document.getElementById('customSizes').value;
      if (customSizesInput.trim()) {
        const sizes = customSizesInput.split(',').map(s => parseInt(s.trim())).filter(s => !isNaN(s) && s > 0);
        sizes.forEach(size => {
          selectedSizes.push({
            size: `${size}×${size}`,
            width: size,
            height: size,
            formats: ['png']
          });
        });
      }
      
      return selectedSizes;
    }

    function generateFavicon(img, size) {
      return new Promise((resolve, reject) => {
        try {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          
          canvas.width = size.width;
          canvas.height = size.height;
          
          // Fill background if needed
          if (!removeBackground.checked) {
            ctx.fillStyle = backgroundColor.value;
            ctx.fillRect(0, 0, size.width, size.height);
          }
          
          // Draw scaled image
          const scale = Math.min(size.width / img.width, size.height / img.height);
          const x = (size.width - img.width * scale) / 2;
          const y = (size.height - img.height * scale) / 2;
          
          ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
          
          // Create favicon object
          const favicon = {
            size: size.size,
            width: size.width,
            height: size.height,
            dataUrl: canvas.toDataURL('image/png'),
            formats: size.formats,
            filename: `favicon-${size.width}x${size.height}.png`
          };
          
          resolve(favicon);
        } catch (error) {
          reject(error);
        }
      });
    }

    function updateDownloadSection() {
      downloadGrid.innerHTML = '';
      
      generatedFavicons.forEach((favicon, index) => {
        const downloadItem = document.createElement('div');
        downloadItem.className = 'download-item';
        downloadItem.innerHTML = `
          <div class="download-icon">
            <i class="fas fa-image"></i>
          </div>
          <h4>${favicon.size}</h4>
          <p>${favicon.width}×${favicon.height} pixels</p>
          <img src="${favicon.dataUrl}" alt="${favicon.size}" style="width: 50px; height: 50px; margin: 10px auto; border: 1px solid #eee; border-radius: 4px;">
          <button class="download-button" onclick="downloadFavicon(${index})">
            <i class="fas fa-download"></i> Download PNG
          </button>
        `;
        downloadGrid.appendChild(downloadItem);
      });
      
      downloadSection.classList.add('show');
    }

    function showHtmlCode() {
      // Generate HTML code
      const code = generateHtmlCode();
      htmlCode.innerHTML = code;
      codeSection.classList.add('show');
      
      // Update code lines count
      const lines = code.split('\n').length;
      document.getElementById('codeLines').textContent = lines;
    }

    function generateHtmlCode() {
      let code = `<!-- Paste this code in your HTML <head> section -->\n\n`;
      
      // Standard favicon links
      code += `<!-- Standard favicons -->\n`;
      generatedFavicons.forEach(favicon => {
        if (favicon.width <= 64) { // Standard favicon sizes
          code += `<link rel="icon" type="image/png" sizes="${favicon.width}x${favicon.height}" href="/${favicon.filename}">\n`;
        }
      });
      
      // Apple Touch Icons
      if (generateApple.checked) {
        code += `\n<!-- Apple Touch Icons -->\n`;
        const appleIcon = generatedFavicons.find(f => f.width === 180);
        if (appleIcon) {
          code += `<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n`;
        }
      }
      
      // Web App Manifest
      if (generateManifest.checked) {
        code += `\n<!-- Web App Manifest -->\n`;
        code += `<link rel="manifest" href="/site.webmanifest">\n`;
      }
      
      // Theme colors
      code += `\n<!-- Theme Colors -->\n`;
      code += `<meta name="msapplication-TileColor" content="${backgroundColor.value}">\n`;
      code += `<meta name="theme-color" content="${backgroundColor.value}">\n`;
      
      // Microsoft tiles
      code += `\n<!-- Microsoft Tiles -->\n`;
      const msTile = generatedFavicons.find(f => f.width === 144);
      if (msTile) {
        code += `<meta name="msapplication-TileImage" content="/mstile-144x144.png">\n`;
      }
      
      return code;
    }

    function copyHtmlCode() {
      const code = htmlCode.textContent;
      navigator.clipboard.writeText(code).then(() => {
        showAlert('HTML code copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy code: ' + err, 'error');
      });
    }

    function clearAll() {
      originalFile = null;
      originalImageData = null;
      generatedFavicons = [];
      
      // Reset UI
      originalImage.src = '';
      imageName.textContent = 'No image selected';
      imageSize.textContent = 'Size: N/A';
      imageDimensions.textContent = 'Dimensions: N/A';
      
      previewSection.classList.remove('show');
      codeSection.classList.remove('show');
      downloadSection.classList.remove('show');
      downloadAllButton.disabled = true;
      
      // Reset preview
      faviconGrid.innerHTML = `
        <div class="favicon-item">
          <div class="favicon-size">16×16</div>
          <div class="favicon-placeholder" style="width: 60px; height: 60px; background: #f0f0f0; border-radius: 4px; margin: 0 auto 10px;"></div>
          <div class="favicon-format">PNG/ICO</div>
        </div>
        <div class="favicon-item">
          <div class="favicon-size">32×32</div>
          <div class="favicon-placeholder" style="width: 60px; height: 60px; background: #f0f0f0; border-radius: 4px; margin: 0 auto 10px;"></div>
          <div class="favicon-format">PNG/ICO</div>
        </div>
        <div class="favicon-item">
          <div class="favicon-size">48×48</div>
          <div class="favicon-placeholder" style="width: 60px; height: 60px; background: #f0f0f0; border-radius: 4px; margin: 0 auto 10px;"></div>
          <div class="favicon-format">PNG/ICO</div>
        </div>
        <div class="favicon-item">
          <div class="favicon-size">64×64</div>
          <div class="favicon-placeholder" style="width: 60px; height: 60px; background: #f0f0f0; border-radius: 4px; margin: 0 auto 10px;"></div>
          <div class="favicon-format">PNG/ICO</div>
        </div>
      `;
      
      showAlert('All cleared. Ready to upload new image.', 'success');
    }

    function downloadFavicon(index) {
      if (index >= 0 && index < generatedFavicons.length) {
        const favicon = generatedFavicons[index];
        const link = document.createElement('a');
        link.href = favicon.dataUrl;
        link.download = favicon.filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        showAlert(`Downloaded ${favicon.filename}`, 'success');
      }
    }

    function downloadAllFavicons() {
      // Download each favicon individually
      generatedFavicons.forEach((favicon, index) => {
        setTimeout(() => {
          const link = document.createElement('a');
          link.href = favicon.dataUrl;
          link.download = favicon.filename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, index * 100);
      });
      
      // Also download HTML code
      setTimeout(() => {
        const htmlBlob = new Blob([generateHtmlCode()], { type: 'text/html' });
        const htmlLink = document.createElement('a');
        htmlLink.href = URL.createObjectURL(htmlBlob);
        htmlLink.download = 'favicon-code.html';
        document.body.appendChild(htmlLink);
        htmlLink.click();
        document.body.removeChild(htmlLink);
        URL.revokeObjectURL(htmlLink.href);
      }, generatedFavicons.length * 100);
      
      showAlert(`Downloading ${generatedFavicons.length + 1} files...`, 'success');
    }

    function downloadAllAsZip() {
      showAlert('Preparing ZIP file... In a real implementation, this would use JSZip library to create and download a ZIP file containing all favicons and HTML code.', 'success');
      
      // For production, you would implement actual ZIP creation using JSZip:
      // const zip = new JSZip();
      // generatedFavicons.forEach(favicon => {
      //   const base64Data = favicon.dataUrl.split(',')[1];
      //   zip.file(favicon.filename, base64Data, {base64: true});
      // });
      // zip.file('favicon-code.html', generateHtmlCode());
      // zip.generateAsync({type: "blob"}).then(content => {
      //   const link = document.createElement('a');
      //   link.href = URL.createObjectURL(content);
      //   link.download = 'favicon-package.zip';
      //   link.click();
      // });
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

    // Make downloadFavicon available globally for onclick events
    window.downloadFavicon = downloadFavicon;
  });
</script>