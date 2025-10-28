---
layout: default
title: "Online PDF Compressor - Reduce PDF File Size"
permalink: /online-pdf-compressor-reduce-pdf-file-size/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Free Online PDF Compressor - Reduce PDF File Size Instantly</title>

<meta name="description"
  content="Compress PDF files online for free. Reduce PDF size without losing quality. Fast, secure PDF compression with adjustable compression levels. No signup, no watermark.">

<meta name="keywords"
  content="pdf compressor, compress pdf, reduce pdf size, shrink pdf file, optimize pdf, compress pdf online free, minimize pdf size, pdf size reducer, pdf tools">

<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Open Graph Tags -->
<meta property="og:title" content="Free Online PDF Compressor - Reduce PDF File Size">
<meta property="og:description" content="Shrink PDF files online with fast and high-quality compression. No registration needed.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://toolesy.com/online-pdf-compressor-reduce-pdf-file-size/">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free PDF Compressor Tool">
<meta name="twitter:description" content="Reduce PDF file size online without losing quality. Free & Easy.">


<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<!-- PDF Libraries -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="https://unpkg.com/downloadjs@1.4.7"></script>

<style>
  /* PDF Compressor Styles */
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
    padding: 30px;
    background: white;
    border: 3px dashed #e0e6ed;
    border-radius: 15px;
    text-align: center;
    transition: all 0.3s ease;
  }

  .upload-section:hover {
    border-color: var(--primary);
    background: #f8f9fa;
  }

  .upload-section i {
    font-size: 4rem;
    color: var(--primary);
    margin-bottom: 20px;
  }

  .upload-section h3 {
    color: var(--primary);
    margin-bottom: 15px;
    font-size: 1.5rem;
  }

  .upload-section p {
    color: #666;
    margin-bottom: 20px;
  }

  .file-upload-button {
    padding: 12px 30px;
    background: var(--primary);
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
    border: none;
    font-size: 1rem;
  }

  .file-upload-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  .file-list-section {
    margin: 30px 0;
  }

  .file-list {
    max-height: 400px;
    overflow-y: auto;
    border: 1px solid #e0e6ed;
    border-radius: 10px;
    background: white;
  }

  .file-item {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid #f0f0f0;
    transition: background 0.3s ease;
  }

  .file-item:hover {
    background: #f8f9fa;
  }

  .file-item:last-child {
    border-bottom: none;
  }

  .file-icon {
    font-size: 1.5rem;
    color: #e74c3c;
    margin-right: 15px;
  }

  .file-info {
    flex: 1;
  }

  .file-name {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .file-size {
    font-size: 0.9rem;
    color: #7f8c8d;
  }

  .file-actions {
    display: flex;
    gap: 10px;
  }

  .file-action-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    padding: 5px;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  .file-action-btn:hover {
    background: #f0f0f0;
  }

  .remove-file {
    color: #e74c3c;
  }

  .empty-state {
    text-align: center;
    padding: 40px 20px;
    color: #7f8c8d;
  }

  .empty-state i {
    font-size: 3rem;
    margin-bottom: 15px;
    color: #bdc3c7;
  }

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
    margin: 25px 0;
  }

  .case-button {
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
  }

  .case-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .case-button:active {
    transform: translateY(0);
  }

  .case-button.success {
    background: var(--success);
  }

  .case-button.success:hover {
    background: #218838;
  }

  .case-button.secondary {
    background: #6c757d;
  }

  .case-button.secondary:hover {
    background: #5a6268;
  }

  .case-button.warning {
    background: #ffc107;
    color: #212529;
  }

  .case-button.warning:hover {
    background: #e0a800;
  }

  .case-button:disabled {
    background: #bdc3c7;
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

  .alert-info {
    background-color: #d1ecf1;
    color: #0c5460;
    border: 1px solid #bee5eb;
  }

  .alert .close {
    cursor: pointer;
    font-weight: bold;
  }

  .options-section {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
  }

  .compress-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 15px;
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
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
    background: white;
  }

  .option-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .option-checkbox input {
    width: 18px;
    height: 18px;
  }

  .slider-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .slider-value {
    font-weight: 600;
    color: var(--primary);
    text-align: center;
  }

  .quality-slider {
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background: #ddd;
    outline: none;
    -webkit-appearance: none;
  }

  .quality-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--primary);
    cursor: pointer;
  }

  .quality-slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--primary);
    cursor: pointer;
    border: none;
  }

  .compression-info {
    background: #e8f4fd;
    border-left: 4px solid var(--primary);
    padding: 15px;
    border-radius: 6px;
    margin-top: 10px;
  }

  .compression-info h4 {
    margin: 0 0 8px 0;
    color: var(--primary);
    font-size: 1rem;
  }

  .compression-info p {
    margin: 0;
    font-size: 0.9rem;
    color: #555;
  }

  .progress-section {
    margin: 20px 0;
    display: none;
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .progress-fill {
    height: 100%;
    background: var(--primary);
    border-radius: 4px;
    transition: width 0.3s ease;
    width: 0%;
  }

  .progress-text {
    text-align: center;
    color: #666;
    font-size: 0.9rem;
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

  @media (max-width: 768px) {
    .counter-wrapper {
      grid-template-columns: 1fr;
    }

    .button-section {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }

    .case-button {
      font-size: 13px;
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

    .compress-options {
      grid-template-columns: 1fr;
    }

    .file-item {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }

    .file-actions {
      align-self: flex-end;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online PDF Compressor</h1>
  <p class="welcome-message">Reduce PDF file size by optimizing images and adjusting quality settings. Compress PDFs for email, web, or storage without significant quality loss. No registration required - 100% free!</p>

  <div class="converter-section">
    <h2>PDF Compressor</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Selected File: </span>
        <span id="fileName">None</span>
      </div>
      <div class="counter-item">
        <span>Original Size: </span>
        <span id="originalSize">0 MB</span>
      </div>
      <div class="counter-item">
        <span>Compressed Size: </span>
        <span id="compressedSize">0 MB</span>
      </div>
      <div class="counter-item">
        <span>Reduction: </span>
        <span id="reductionPercent">0%</span>
      </div>
    </div>

    <div class="upload-section" id="dropArea">
      <i class="fas fa-compress-alt"></i>
      <h3>Drag & Drop PDF File Here</h3>
      <p>or click the button below to select a file</p>
      <button class="file-upload-button" id="selectFileBtn">
        <i class="fas fa-plus"></i> Select PDF File
      </button>
      <p class="file-info">Maximum file size: 50 MB</p>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".pdf" style="display: none;">

    <div class="file-list-section">
      <h3>Selected File <span id="fileListCount">(0 files)</span></h3>
      <div class="file-list" id="fileList">
        <div class="empty-state">
          <i class="fas fa-file-pdf"></i>
          <p>No PDF file selected yet</p>
          <p>Drag and drop a file or click the select button above</p>
        </div>
      </div>
    </div>

    <div class="options-section">
      <h3>Compression Options</h3>
      <div class="compress-options">
        <div class="option-group">
          <label class="option-label">Output Filename</label>
          <input type="text" id="outputFilename" class="option-input" value="compressed-document" placeholder="Enter filename">
        </div>
        
        <div class="option-group">
          <label class="option-label">Compression Level</label>
          <select id="compressionLevel" class="option-select">
            <option value="low">Low Compression (Best Quality)</option>
            <option value="medium" selected>Medium Compression (Recommended)</option>
            <option value="high">High Compression (Smaller Size)</option>
            <option value="custom">Custom Settings</option>
          </select>
        </div>
        
        <div class="option-group" id="customSettingsGroup">
          <label class="option-label">Image Quality</label>
          <div class="slider-container">
            <input type="range" id="imageQuality" class="quality-slider" min="10" max="100" value="75">
            <div class="slider-value" id="qualityValue">75%</div>
          </div>
        </div>
        
        <div class="option-group">
          <label class="option-label">DPI Resolution</label>
          <select id="dpiResolution" class="option-select">
            <option value="72">72 DPI (Low - Fastest)</option>
            <option value="144" selected>144 DPI (Medium - Recommended)</option>
            <option value="200">200 DPI (High)</option>
            <option value="300">300 DPI (Very High)</option>
          </select>
        </div>
        
        <div class="option-group">
          <label class="option-label">Color Mode</label>
          <select id="colorMode" class="option-select">
            <option value="color" selected>Color</option>
            <option value="grayscale">Grayscale</option>
            <option value="blackwhite">Black & White</option>
          </select>
        </div>
        
        <div class="option-group">
          <div class="option-checkbox">
            <input type="checkbox" id="removeMetadata" checked>
            <label for="removeMetadata">Remove Metadata</label>
          </div>
          <div class="option-checkbox">
            <input type="checkbox" id="optimizeFonts">
            <label for="optimizeFonts">Optimize Fonts</label>
          </div>
          <div class="option-checkbox">
            <input type="checkbox" id="downsampleImages" checked>
            <label for="downsampleImages">Downsample Images</label>
          </div>
        </div>
      </div>
      
      <div class="compression-info" id="compressionInfo">
        <h4>Medium Compression</h4>
        <p>Balanced compression with good quality and reasonable file size reduction. Suitable for most documents.</p>
      </div>
    </div>

    <div class="progress-section" id="progressSection">
      <div class="progress-bar">
        <div class="progress-fill" id="progressFill"></div>
      </div>
      <div class="progress-text" id="progressText">Processing...</div>
    </div>

    <div class="button-section">
      <button class="case-button" data-action="compress" id="compressBtn" disabled>Compress PDF</button>
      <button class="case-button success" data-action="download" id="downloadBtn" disabled>Download Compressed PDF</button>
      <button class="case-button warning" data-action="preview" id="previewBtn" disabled>Preview</button>
      <button class="case-button secondary" data-action="clear">Clear All</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>How It Works</h2>

      <h3>Step 1: Select PDF File</h3>
      <div class="example-text">• Click "Select PDF File" or drag and drop a file
• Only one PDF file can be processed at a time
• Maximum file size: 50 MB</div>

      <h3>Step 2: Adjust Compression Settings</h3>
      <div class="example-text">• Choose from preset compression levels or use custom settings
• Adjust image quality and DPI resolution
• Select color mode and optimization options</div>

      <h3>Step 3: Compress & Download</h3>
      <div class="example-text">• Click "Compress PDF" to optimize your file
• Wait for processing to complete
• Download your compressed PDF with reduced file size</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online PDF Compressor - Reduce PDF File Size</h2>

    <p>Need to reduce the size of your PDF files for email attachments, web uploads, or storage? Our free <strong>online PDF Compressor tool</strong> makes it incredibly easy to shrink PDF files while maintaining acceptable quality. Whether you're dealing with image-heavy documents, scanned files, or large reports, this tool handles everything seamlessly. There's no software to install, no watermarks, and your files remain completely private - all processing happens securely in your browser.</p>

    <h3>How to Compress PDF Files (Step-by-Step):</h3>
    <ul>
      <li><strong>Select File:</strong> Click the "Select PDF File" button or simply drag and drop your PDF file into the upload area.</li>
      <li><strong>Adjust Settings:</strong> Choose from preset compression levels or customize image quality, DPI resolution, and color mode to suit your needs.</li>
      <li><strong>Optimize Options:</strong> Enable additional optimization features like metadata removal, font optimization, and image downsampling for maximum compression.</li>
      <li><strong>Compress & Download:</strong> Click the "Compress PDF" button to optimize your file, then download the compressed PDF with significantly reduced file size.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you need to email a 25MB PDF portfolio to a client, but their email system has a 10MB attachment limit. Instead of splitting the file or using external file-sharing services, you can use our PDF Compressor to reduce the file size to under 10MB while maintaining the visual quality needed for your portfolio presentation.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Students & Educators:</strong> Compress large research papers and assignments for easier submission and sharing.</li>
      <li><strong>Professionals:</strong> Reduce file sizes for email attachments, client deliverables, and cloud storage.</li>
      <li><strong>Photographers & Designers:</strong> Optimize portfolio files for web presentation and client review.</li>
      <li><strong>Administrative Staff:</strong> Compress scanned documents and forms for efficient digital archiving.</li>
      <li><strong>Business Users:</strong> Reduce storage costs by compressing business documents and reports.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: How much can I reduce my PDF file size?</strong><br>
      A: Compression results vary depending on your PDF content. Image-heavy documents can often be reduced by 50-80%, while text-based documents may see 10-30% reduction.</p>

    <p><strong>Q: Will compression affect the quality of my PDF?</strong><br>
      A: Our compressor uses intelligent algorithms to minimize quality loss. You can adjust settings to balance between file size and quality according to your needs.</p>

    <p><strong>Q: Is my data secure when using this PDF compressor?</strong><br>
      A: Absolutely. Your PDF file is processed entirely in your browser and never uploaded to any server. This means your documents remain completely private and secure.</p>

    <p><strong>Q: What compression methods do you use?</strong><br>
      A: We use multiple optimization techniques including image compression, DPI reduction, color space conversion, metadata removal, and font optimization.</p>

    <p><strong>Q: Do I need to create an account or pay to use this tool?</strong><br>
      A: No, this is a completely free tool with no registration required. There are no hidden fees or watermarks.</p>

    <h3>Why Choose Our PDF Compressor?</h3>
    <p>Our <strong>online PDF Compressor</strong> stands out for its advanced compression algorithms, flexible settings, and privacy protection. Unlike many online tools, we don't upload your files to external servers - all processing happens locally in your browser. This ensures maximum security for your sensitive documents. The tool offers multiple compression presets and customizable options, giving you complete control over the compression process.</p>

    <h3>Compression Techniques Used</h3>
    <p>Our PDF compressor employs several advanced techniques to reduce file size:</p>
    <ul>
      <li><strong>Image Optimization:</strong> Compresses embedded images using adjustable quality settings</li>
      <li><strong>DPI Reduction:</strong> Lowers image resolution for display purposes while maintaining readability</li>
      <li><strong>Color Space Conversion:</strong> Converts color images to grayscale or black & white when appropriate</li>
      <li><strong>Metadata Removal:</strong> Strips unnecessary metadata, comments, and editing history</li>
      <li><strong>Font Optimization:</strong> Optimizes font embedding and subsetting</li>
      <li><strong>Image Downsampling:</strong> Reduces image dimensions for large images</li>
    </ul>

    <h3>Recommended Settings for Common Use Cases</h3>
    <ul>
      <li><strong>Email Attachments:</strong> Medium compression, 144 DPI, 75% quality</li>
      <li><strong>Web Publishing:</strong> High compression, 72 DPI, 60% quality</li>
      <li><strong>Archival Storage:</strong> Low compression, 200 DPI, 85% quality</li>
      <li><strong>Text Documents:</strong> High compression, grayscale mode, 144 DPI</li>
      <li><strong>Image-Heavy Documents:</strong> Custom settings with focus on image quality balance</li>
    </ul>
  </div>
</div>

<!-- Preview Modal -->
<div id="previewModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">PDF Preview</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="text-align: center; padding: 20px;">
        <i class="fas fa-file-pdf" style="font-size: 4rem; color: #e74c3c; margin-bottom: 20px;"></i>
        <h4>PDF Preview Feature</h4>
        <p>In a full implementation, this would display a preview of your compressed PDF document.</p>
        <p>For security reasons, actual PDF rendering requires server-side processing in a production environment.</p>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closePreview">Close</button>
      <button class="modal-button primary" id="downloadFromPreview">Download</button>
    </div>
  </div>
</div>

<script>
  // Global variables
  let pdfFile = null;
  let compressedPdfUrl = null;
  let compressedPdfBytes = null;
  let originalFileSize = 0;

  // Set up PDF.js worker
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js';

  document.addEventListener('DOMContentLoaded', function () {
    const fileUpload = document.getElementById('fileUpload');
    const selectFileBtn = document.getElementById('selectFileBtn');
    const dropArea = document.getElementById('dropArea');
    const fileList = document.getElementById('fileList');
    const alertContainer = document.getElementById('alertContainer');
    const compressBtn = document.getElementById('compressBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const previewBtn = document.getElementById('previewBtn');
    const progressSection = document.getElementById('progressSection');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    // Option elements
    const compressionLevel = document.getElementById('compressionLevel');
    const customSettingsGroup = document.getElementById('customSettingsGroup');
    const imageQuality = document.getElementById('imageQuality');
    const qualityValue = document.getElementById('qualityValue');
    const dpiResolution = document.getElementById('dpiResolution');
    const colorMode = document.getElementById('colorMode');
    const compressionInfo = document.getElementById('compressionInfo');
    
    // Modal elements
    const previewModal = document.getElementById('previewModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const closePreview = document.getElementById('closePreview');
    const downloadFromPreview = document.getElementById('downloadFromPreview');
    
    // Event listeners
    selectFileBtn.addEventListener('click', function () {
      fileUpload.click();
    });

    fileUpload.addEventListener('change', handleFileSelect);

    // Drag and drop functionality
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      dropArea.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
      dropArea.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropArea.addEventListener(eventName, unhighlight, false);
    });

    function highlight() {
      dropArea.style.borderColor = 'var(--primary)';
      dropArea.style.backgroundColor = '#e3f2fd';
    }

    function unhighlight() {
      dropArea.style.borderColor = '#e0e6ed';
      dropArea.style.backgroundColor = 'white';
    }

    dropArea.addEventListener('drop', handleDrop, false);

    function handleDrop(e) {
      const dt = e.dataTransfer;
      const files = dt.files;
      if (files.length > 0) {
        handleFiles(files[0]);
      }
    }

    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        previewModal.style.display = 'none';
      });
    });

    // Close preview modal
    closePreview.addEventListener('click', function() {
      previewModal.style.display = 'none';
    });

    // Download from preview
    downloadFromPreview.addEventListener('click', function() {
      if (compressedPdfUrl) {
        downloadCompressedPdf();
        previewModal.style.display = 'none';
      }
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === previewModal) {
        previewModal.style.display = 'none';
      }
    });

    // Compression level change
    compressionLevel.addEventListener('change', updateCompressionSettings);

    // Image quality slider
    imageQuality.addEventListener('input', function() {
      qualityValue.textContent = this.value + '%';
    });

    // Action buttons
    document.querySelectorAll('.case-button').forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handlePdfAction(action);
      });
    });

    function handleFileSelect(e) {
      const file = e.target.files[0];
      if (file) {
        handleFiles(file);
      }
    }

    function handleFiles(file) {
      // Check if file is PDF
      if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
        showAlert(`"${file.name}" is not a PDF file. Please select a PDF file.`, 'error');
        return;
      }
      
      // Check file size (max 50MB)
      if (file.size > 50 * 1024 * 1024) {
        showAlert(`"${file.name}" is too large. Maximum file size is 50MB.`, 'error');
        return;
      }
      
      // Clear previous file
      if (pdfFile) {
        URL.revokeObjectURL(compressedPdfUrl);
        compressedPdfUrl = null;
        compressedPdfBytes = null;
      }
      
      pdfFile = file;
      originalFileSize = file.size;
      renderFileList();
      updateUI();
      
      // Enable compress button
      compressBtn.disabled = false;
      
      showAlert('PDF file selected successfully!', 'success');
    }

    function renderFileList() {
      if (!pdfFile) {
        fileList.innerHTML = `
          <div class="empty-state">
            <i class="fas fa-file-pdf"></i>
            <p>No PDF file selected yet</p>
            <p>Drag and drop a file or click the select button above</p>
          </div>
        `;
        return;
      }

      fileList.innerHTML = `
        <div class="file-item">
          <i class="fas fa-file-pdf file-icon"></i>
          <div class="file-info">
            <div class="file-name">${pdfFile.name}</div>
            <div class="file-size">${formatFileSize(pdfFile.size)}</div>
          </div>
          <div class="file-actions">
            <button class="file-action-btn remove-file" onclick="removeFile()">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      `;
    }

    function updateUI() {
      // Update counters
      document.getElementById('fileName').textContent = pdfFile ? pdfFile.name : 'None';
      document.getElementById('originalSize').textContent = pdfFile ? formatFileSize(originalFileSize) : '0 MB';
      document.getElementById('fileListCount').textContent = pdfFile ? '(1 file)' : '(0 files)';
      
      // Update compression stats if available
      if (compressedPdfBytes) {
        const compressedSize = compressedPdfBytes.byteLength;
        const reduction = ((originalFileSize - compressedSize) / originalFileSize * 100).toFixed(1);
        
        document.getElementById('compressedSize').textContent = formatFileSize(compressedSize);
        document.getElementById('reductionPercent').textContent = reduction + '%';
        document.getElementById('reductionPercent').style.color = reduction > 0 ? 'var(--success)' : '#e74c3c';
      } else {
        document.getElementById('compressedSize').textContent = '0 MB';
        document.getElementById('reductionPercent').textContent = '0%';
      }
      
      // Enable/disable buttons
      downloadBtn.disabled = !compressedPdfUrl;
      previewBtn.disabled = !compressedPdfUrl;
    }

    function formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    function updateCompressionSettings() {
      const level = compressionLevel.value;
      
      switch(level) {
        case 'low':
          imageQuality.value = 90;
          qualityValue.textContent = '90%';
          dpiResolution.value = '200';
          colorMode.value = 'color';
          compressionInfo.innerHTML = `
            <h4>Low Compression (Best Quality)</h4>
            <p>Minimal compression with maximum quality preservation. File size reduction will be modest.</p>
          `;
          customSettingsGroup.style.display = 'none';
          break;
          
        case 'medium':
          imageQuality.value = 75;
          qualityValue.textContent = '75%';
          dpiResolution.value = '144';
          colorMode.value = 'color';
          compressionInfo.innerHTML = `
            <h4>Medium Compression (Recommended)</h4>
            <p>Balanced compression with good quality and reasonable file size reduction. Suitable for most documents.</p>
          `;
          customSettingsGroup.style.display = 'none';
          break;
          
        case 'high':
          imageQuality.value = 50;
          qualityValue.textContent = '50%';
          dpiResolution.value = '72';
          colorMode.value = 'grayscale';
          compressionInfo.innerHTML = `
            <h4>High Compression (Smaller Size)</h4>
            <p>Aggressive compression for maximum file size reduction. Some quality loss may be noticeable.</p>
          `;
          customSettingsGroup.style.display = 'none';
          break;
          
        case 'custom':
          compressionInfo.innerHTML = `
            <h4>Custom Settings</h4>
            <p>Adjust the settings below to fine-tune the compression according to your specific needs.</p>
          `;
          customSettingsGroup.style.display = 'flex';
          break;
      }
    }

    function handlePdfAction(action) {
      switch (action) {
        case 'compress':
          compressPDF();
          break;

        case 'download':
          downloadCompressedPdf();
          break;

        case 'preview':
          previewPdf();
          break;

        case 'clear':
          clearAll();
          break;
      }
    }

    async function compressPDF() {
      if (!pdfFile) {
        showAlert('Please select a PDF file first.', 'error');
        return;
      }

      try {
        // Show progress
        progressSection.style.display = 'block';
        progressFill.style.width = '0%';
        progressText.textContent = 'Initializing PDF compressor...';

        const arrayBuffer = await readFileAsArrayBuffer(pdfFile);
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

        // Get compression settings
        const dpi = parseInt(dpiResolution.value) || 144;
        const quality = parseFloat(imageQuality.value) / 100 || 0.75;
        const colorOption = colorMode.value;
        const removeMetadataFlag = document.getElementById('removeMetadata').checked;

        const totalPages = pdf.numPages;

        for (let i = 1; i <= totalPages; i++) {
          try {
            // Update progress
            const progress = Math.floor((i / totalPages) * 80);
            progressFill.style.width = progress + '%';
            progressText.textContent = `Compressing page ${i} of ${totalPages}...`;

            const page = await pdf.getPage(i);
            
            // Scale for DPI (72*scale = target DPI)
            const scale = dpi / 72;
            const viewport = page.getViewport({ scale });

            const canvas = document.createElement("canvas");
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            const context = canvas.getContext("2d");

            await page.render({ canvasContext: context, viewport }).promise;

            // Apply color transformations if selected
            if (colorOption !== 'color') {
              const imgData = context.getImageData(0, 0, canvas.width, canvas.height);
              const data = imgData.data;
              
              for (let j = 0; j < data.length; j += 4) {
                if (colorOption === 'grayscale') {
                  // Convert to grayscale
                  const gray = 0.299 * data[j] + 0.587 * data[j+1] + 0.114 * data[j+2];
                  data[j] = data[j+1] = data[j+2] = gray;
                } else if (colorOption === 'blackwhite') {
                  // Convert to black & white (threshold)
                  const brightness = (data[j] + data[j+1] + data[j+2]) / 3;
                  const bw = brightness > 128 ? 255 : 0;
                  data[j] = data[j+1] = data[j+2] = bw;
                }
              }
              context.putImageData(imgData, 0, 0);
            }

            const imgDataURL = canvas.toDataURL("image/jpeg", quality);

            if (i > 1) doc.addPage();
            doc.addImage(imgDataURL, "JPEG", 0, 0, 210, 297); // A4 page size

          } catch (error) {
            console.error(`Error compressing page ${i}:`, error);
            throw new Error(`Failed to compress page ${i}: ${error.message}`);
          }
        }

        // Finalize PDF
        progressFill.style.width = '90%';
        progressText.textContent = 'Finalizing compressed PDF...';

        // Save the compressed PDF
        compressedPdfBytes = doc.output('arraybuffer');
        
        // Create blob URL for download
        const blob = new Blob([compressedPdfBytes], { type: 'application/pdf' });
        compressedPdfUrl = URL.createObjectURL(blob);

        // Complete progress
        progressFill.style.width = '100%';
        progressText.textContent = 'Compression completed successfully!';
        
        showAlert(`Successfully compressed ${totalPages} pages!`, 'success');
        
        // Enable download and preview buttons
        downloadBtn.disabled = false;
        previewBtn.disabled = false;
        
        // Update UI with compression stats
        updateUI();
        
        // Hide progress after a delay
        setTimeout(() => {
          progressSection.style.display = 'none';
        }, 2000);

      } catch (error) {
        console.error('Compression error:', error);
        progressSection.style.display = 'none';
        showAlert(`Compression failed: ${error.message}`, 'error');
      }
    }

    // File reader helper function
    function readFileAsArrayBuffer(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
      });
    }

    function downloadCompressedPdf() {
      if (!compressedPdfUrl || !compressedPdfBytes) {
        showAlert('No compressed PDF available. Please compress a file first.', 'error');
        return;
      }

      try {
        const outputFilename = document.getElementById('outputFilename').value || 'compressed-document';
        const filename = outputFilename.endsWith('.pdf') ? outputFilename : outputFilename + '.pdf';
        
        showAlert(`Downloading "${filename}"...`, 'info');
        
        // Use downloadjs for reliable file download
        download(compressedPdfBytes, filename, "application/pdf");
        
        showAlert('PDF download completed!', 'success');
        
      } catch (error) {
        console.error('Download error:', error);
        
        // Fallback download method
        try {
          const outputFilename = document.getElementById('outputFilename').value || 'compressed-document';
          const filename = outputFilename.endsWith('.pdf') ? outputFilename : outputFilename + '.pdf';
          
          const blob = new Blob([compressedPdfBytes], { type: 'application/pdf' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          
          showAlert('PDF downloaded successfully!', 'success');
        } catch (fallbackError) {
          showAlert('Failed to download PDF. Please try again.', 'error');
        }
      }
    }

    function previewPdf() {
      if (!compressedPdfUrl) {
        showAlert('No compressed PDF available. Please compress a file first.', 'error');
        return;
      }

      try {
        // Open PDF in new tab
        const newTab = window.open(compressedPdfUrl, '_blank');
        if (!newTab) {
          showAlert('Popup blocked. Please allow popups for this site to preview PDF.', 'error');
          
          // Fallback: Show modal with download option
          previewModal.style.display = 'block';
          const modalBody = previewModal.querySelector('.modal-body');
          modalBody.innerHTML = `
            <div style="text-align: center; padding: 20px;">
              <i class="fas fa-file-pdf" style="font-size: 4rem; color: #e74c3c; margin-bottom: 20px;"></i>
              <h4>PDF Preview</h4>
              <p>Your compressed PDF is ready for download.</p>
              <p>To preview, please allow popups or download the file to view it.</p>
              <div style="margin-top: 20px;">
                <button class="modal-button primary" onclick="downloadCompressedPdf()">
                  <i class="fas fa-download"></i> Download PDF
                </button>
              </div>
            </div>
          `;
        }
      } catch (error) {
        console.error('Preview error:', error);
        showAlert('Failed to preview PDF. Please download the file instead.', 'error');
      }
    }

    function clearAll() {
      // Clean up blob URLs
      if (compressedPdfUrl) {
        URL.revokeObjectURL(compressedPdfUrl);
      }
      
      pdfFile = null;
      originalFileSize = 0;
      compressedPdfUrl = null;
      compressedPdfBytes = null;
      fileUpload.value = '';
      
      renderFileList();
      updateUI();
      showAlert('All files cleared.', 'info');
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

      setTimeout(() => {
        if (alertDiv.parentNode) {
          alertDiv.remove();
        }
      }, 5000);
    }

    // Make functions available globally for onclick handlers
    window.removeFile = function() {
      clearAll();
    };

    // Initialize UI
    updateCompressionSettings();
    updateUI();
  });
</script>