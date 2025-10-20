---
layout: default
title: "Online Image to PDF Converter - Convert JPG, PNG, TIFF to PDF"
permalink: /online-image-to-pdf-converter-convert-jpg-png-tiff-to-pdf/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Image to PDF Converter - Convert JPG, PNG, TIFF to PDF</title>
<meta name="description"
  content="Free online image to PDF converter tool. Convert JPG, PNG, TIFF images to PDF documents. Combine multiple images into one PDF. No registration required.">
<meta name="keywords"
  content="image to pdf, jpg to pdf, png to pdf, tiff to pdf, convert images to pdf, image converter, pdf tools">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<!-- PDF Libraries -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

<style>
  /* Image to PDF Converter Styles */
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
    margin-right: 15px;
  }

  .file-icon.jpg {
    color: #e74c3c;
  }

  .file-icon.png {
    color: #3498db;
  }

  .file-icon.tiff {
    color: #9b59b6;
  }

  .file-icon.other {
    color: #95a5a6;
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

  .move-up {
    color: var(--primary);
  }

  .move-down {
    color: var(--primary);
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

  .options-section {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
  }

  .conversion-options {
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

  .case-button:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
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

  .output-container {
    margin: 20px 0;
    padding: 20px;
    background: white;
    border-radius: 10px;
    border: 1px solid #e0e0e0;
    display: none;
  }

  .output-container h3 {
    color: var(--primary);
    margin-bottom: 15px;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 10px;
  }

  .output-item {
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #f0f0f0;
    gap: 15px;
  }

  .output-item:last-child {
    border-bottom: none;
  }

  .output-preview {
    max-width: 200px;
    max-height: 200px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    object-fit: contain;
  }

  .download-btn {
    padding: 8px 15px;
    background: var(--success);
    color: white;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
  }

  .download-btn:hover {
    background: #218838;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

    .conversion-options {
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

    .output-item {
      flex-direction: column;
      align-items: flex-start;
    }

    .output-preview {
      max-width: 100%;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Image to PDF Converter</h1>
  <p class="welcome-message">Convert JPG, PNG, TIFF images to PDF documents. Combine multiple images into one PDF. No registration required - 100% free!</p>

  <div class="converter-section">
    <h2>Image to PDF Converter</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Selected Images: </span>
        <span id="imageCount">0</span>
      </div>
      <div class="counter-item">
        <span>Total Size: </span>
        <span id="totalSize">0 MB</span>
      </div>
      <div class="counter-item">
        <span>Pages in PDF: </span>
        <span id="pageCount">0</span>
      </div>
      <div class="counter-item">
        <span>Estimated Time: </span>
        <span id="estimatedTime">0 seconds</span>
      </div>
    </div>

    <div class="upload-section" id="dropArea">
      <i class="fas fa-file-image"></i>
      <h3>Drag & Drop Images Here</h3>
      <p>or click the button below to select images</p>
      <button class="file-upload-button" id="selectFilesBtn">
        <i class="fas fa-plus"></i> Select Images
      </button>
      <p class="file-info">Supported formats: JPG, PNG, TIFF | Maximum file size: 10 MB each</p>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".jpg,.jpeg,.png,.tiff,.tif" multiple style="display: none;">

    <div class="file-list-section">
      <h3>Selected Images <span id="fileListCount">(0 images)</span></h3>
      <div class="file-list" id="fileList">
        <div class="empty-state">
          <i class="fas fa-folder-open"></i>
          <p>No images selected yet</p>
          <p>Drag and drop images or click the select button above</p>
        </div>
      </div>
    </div>

    <div class="options-section">
      <h3>Conversion Options</h3>
      <div class="conversion-options">
        <div class="option-group">
          <label class="option-label">Page Size</label>
          <select id="pageSize" class="option-select">
            <option value="auto">Auto (Fit to Image)</option>
            <option value="a4">A4</option>
            <option value="letter">Letter</option>
            <option value="legal">Legal</option>
          </select>
        </div>
        
        <div class="option-group">
          <label class="option-label">Page Orientation</label>
          <select id="pageOrientation" class="option-select">
            <option value="auto">Auto</option>
            <option value="portrait">Portrait</option>
            <option value="landscape">Landscape</option>
          </select>
        </div>
        
        <div class="option-group">
          <label class="option-label">Output Filename</label>
          <input type="text" id="outputFilename" class="option-input" value="converted" placeholder="Enter filename">
        </div>
        
        <div class="option-group">
          <div class="option-checkbox">
            <input type="checkbox" id="compressImages" checked>
            <label for="compressImages">Compress Images</label>
          </div>
          <div class="option-checkbox">
            <input type="checkbox" id="addPageNumbers">
            <label for="addPageNumbers">Add Page Numbers</label>
          </div>
          <div class="option-checkbox">
            <input type="checkbox" id="maintainQuality">
            <label for="maintainQuality">Maintain Original Quality</label>
          </div>
        </div>
      </div>
    </div>

    <div class="progress-section" id="progressSection">
      <div class="progress-bar">
        <div class="progress-fill" id="progressFill"></div>
      </div>
      <div class="progress-text" id="progressText">Processing...</div>
    </div>

    <div class="button-section">
      <button class="case-button" data-action="convert" id="convert-btn" disabled>Convert to PDF</button>
      <button class="case-button secondary" data-action="clear">Clear All</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="output-container" id="output-container">
      <h3>Conversion Results</h3>
      <div id="output-content"></div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>How It Works</h2>

      <h3>Step 1: Select Images</h3>
      <div class="example-text">• Click "Select Images" or drag and drop files
• You can select multiple images at once
• Supported formats: JPG, PNG, TIFF</div>

      <h3>Step 2: Arrange Images (Optional)</h3>
      <div class="example-text">• Use the up/down arrows to reorder images
• Images will be converted to PDF in the order shown
• Remove any images you don't need</div>

      <h3>Step 3: Convert & Download</h3>
      <div class="example-text">• Click "Convert to PDF" to create your PDF document
• Wait for processing to complete
• Download your PDF file</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Image to PDF Converter - Convert JPG, PNG, TIFF to PDF</h2>

    <p>Need to convert images to PDF format? Our free <strong>online Image to PDF Converter tool</strong> makes it incredibly easy to transform JPG, PNG, and TIFF images into professional PDF documents. Whether you're converting photos, screenshots, scanned documents, or digital artwork, this tool handles everything seamlessly. There's no software to install, no watermarks, and your files remain completely private - all processing happens securely in your browser.</p>

    <h3>How to Convert Images to PDF (Step-by-Step):</h3>
    <ul>
      <li><strong>Select Images:</strong> Click the "Select Images" button or simply drag and drop your image files into the upload area. You can select multiple images at once.</li>
      <li><strong>Arrange Order:</strong> Use the up and down arrows to arrange your images in the desired order. The images will be converted to PDF pages in the sequence shown.</li>
      <li><strong>Customize Options:</strong> Choose your page size, orientation, output filename, and other conversion preferences.</li>
      <li><strong>Convert & Download:</strong> Click the "Convert to PDF" button to create your PDF document, then download it with a single click.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you've taken multiple photos of important documents with your smartphone - maybe receipts for expense reporting or pages from a textbook. Instead of keeping them as separate image files that are difficult to organize and share, you can use our Image to PDF Converter to combine them into a single, professional PDF document. This makes it easier to email, print, or archive your documents.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Students:</strong> Convert lecture slides, textbook pages, or assignment photos into organized PDF documents.</li>
      <li><strong>Professionals:</strong> Transform scanned documents, receipts, or presentation screenshots into shareable PDF files.</li>
      <li><strong>Photographers:</strong> Create PDF portfolios from your best JPG images for client presentations.</li>
      <li><strong>Administrative Staff:</strong> Convert multiple scanned documents or forms into organized PDF files for efficient filing.</li>
      <li><strong>Researchers:</strong> Combine research photos, charts, and graphs into comprehensive PDF reports.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: What image formats can I convert to PDF?</strong><br>
      A: You can convert JPG, JPEG, PNG, and TIFF images to PDF format. The tool supports all common image file types.</p>

    <p><strong>Q: Will the quality of my images be affected by conversion?</strong><br>
      A: No, the converter preserves the original quality of your images. You can also choose to enable compression to reduce file size if needed.</p>

    <p><strong>Q: Is my data secure when using this image converter?</strong><br>
      A: Absolutely. Your image files are processed entirely in your browser and never uploaded to any server. This means your documents remain completely private and secure.</p>

    <p><strong>Q: Can I rearrange the order of pages after conversion?</strong><br>
      A: Yes, you can easily rearrange the order of your images before conversion using the up and down arrows in the file list.</p>

    <p><strong>Q: Do I need to create an account or pay to use this tool?</strong><br>
      A: No, this is a completely free tool with no registration required. There are no hidden fees or watermarks.</p>

    <h3>Why Choose Our Image to PDF Converter?</h3>
    <p>Our <strong>online Image to PDF Converter</strong> stands out for its simplicity, speed, and privacy. Unlike many online tools, we don't upload your files to external servers - all processing happens locally in your browser. This ensures maximum security for your sensitive documents. The tool also works on any device with a modern web browser, making it accessible whenever you need it.</p>

    <h3>Common Applications of Image to PDF Conversion</h3>
    <p>Image to PDF conversion has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Document Archiving:</strong> Convert scanned documents and photos into searchable, organized PDF files</li>
      <li><strong>Portfolio Creation:</strong> Transform your best JPG images into professional PDF portfolios</li>
      <li><strong>Receipt Management:</strong> Combine multiple receipt photos into a single PDF for expense reporting</li>
      <li><strong>Educational Materials:</strong> Convert textbook photos, lecture slides, or whiteboard images into study PDFs</li>
      <li><strong>Business Presentations:</strong> Transform presentation screenshots or charts into shareable PDF documents</li>
    </ul>
  </div>
</div>

<script>
  // Global variables
  let imageFiles = [];
  let convertedPdfUrl = null;
  let convertedPdfBlob = null;

  document.addEventListener('DOMContentLoaded', function () {
    const fileUpload = document.getElementById('fileUpload');
    const selectFilesBtn = document.getElementById('selectFilesBtn');
    const dropArea = document.getElementById('dropArea');
    const fileList = document.getElementById('fileList');
    const alertContainer = document.getElementById('alertContainer');
    const convertBtn = document.getElementById('convert-btn');
    const progressSection = document.getElementById('progressSection');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const outputContainer = document.getElementById('output-container');
    const outputContent = document.getElementById('output-content');
    
    // Event listeners
    selectFilesBtn.addEventListener('click', function () {
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
      handleFiles(files);
    }

    // Action buttons
    document.querySelectorAll('.case-button').forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleConversionAction(action);
      });
    });

    function handleFileSelect(e) {
      const files = e.target.files;
      handleFiles(files);
    }

    function handleFiles(files) {
      const validFiles = Array.from(files).filter(file => {
        // Check if file is an image
        const isImage = file.type.startsWith('image/') || 
                       ['.jpg', '.jpeg', '.png', '.tiff', '.tif'].some(ext => 
                         file.name.toLowerCase().endsWith(ext));
        
        if (!isImage) {
          showAlert(`"${file.name}" is not a supported image file. Please select JPG, PNG, or TIFF files.`, 'error');
          return false;
        }
        
        // Check file size (max 10MB per file)
        if (file.size > 10 * 1024 * 1024) {
          showAlert(`"${file.name}" is too large. Maximum file size is 10MB.`, 'error');
          return false;
        }
        
        return true;
      });

      // Add files to the list
      validFiles.forEach(file => {
        addFileToList(file);
      });

      updateUI();
    }

    function addFileToList(file) {
      const fileId = Date.now() + Math.random();
      const fileItem = {
        id: fileId,
        file: file,
        name: file.name,
        size: formatFileSize(file.size),
        type: getFileType(file)
      };

      imageFiles.push(fileItem);
      renderFileList();
    }

    function getFileType(file) {
      if (file.type.includes('jpeg') || file.name.toLowerCase().endsWith('.jpg') || file.name.toLowerCase().endsWith('.jpeg')) {
        return 'jpg';
      } else if (file.type.includes('png') || file.name.toLowerCase().endsWith('.png')) {
        return 'png';
      } else if (file.type.includes('tiff') || file.name.toLowerCase().endsWith('.tiff') || file.name.toLowerCase().endsWith('.tif')) {
        return 'tiff';
      } else {
        return 'other';
      }
    }

    function getFileIcon(type) {
      switch (type) {
        case 'jpg': return 'fas fa-file-image jpg';
        case 'png': return 'fas fa-file-image png';
        case 'tiff': return 'fas fa-file-image tiff';
        default: return 'fas fa-file-image other';
      }
    }

   // Fix the renderFileList function - remove the fileItem parameter from the onclick handlers
function renderFileList() {
  if (imageFiles.length === 0) {
    fileList.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-folder-open"></i>
        <p>No images selected yet</p>
        <p>Drag and drop images or click the select button above</p>
      </div>
    `;
    return;
  }

  fileList.innerHTML = imageFiles.map((fileItem, index) => `
    <div class="file-item" data-id="${fileItem.id}">
      <i class="${getFileIcon(fileItem.type)} file-icon"></i>
      <div class="file-info">
        <div class="file-name">${fileItem.name}</div>
        <div class="file-size">${fileItem.size} • ${fileItem.type.toUpperCase()}</div>
      </div>
      <div class="file-actions">
        <button class="file-action-btn move-up" ${index === 0 ? 'disabled' : ''} data-id="${fileItem.id}" data-action="move-up">
          <i class="fas fa-arrow-up"></i>
        </button>
        <button class="file-action-btn move-down" ${index === imageFiles.length - 1 ? 'disabled' : ''} data-id="${fileItem.id}" data-action="move-down">
          <i class="fas fa-arrow-down"></i>
        </button>
        <button class="file-action-btn remove-file" data-id="${fileItem.id}" data-action="remove">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  `).join('');

  // Add event listeners to the buttons
  fileList.querySelectorAll('.file-action-btn').forEach(button => {
    button.addEventListener('click', function() {
      const fileId = this.getAttribute('data-id');
      const action = this.getAttribute('data-action');
      
      switch(action) {
        case 'move-up':
          moveFileUp(fileId);
          break;
        case 'move-down':
          moveFileDown(fileId);
          break;
        case 'remove':
          removeFile(fileId);
          break;
      }
    });
  });
}

// Update the move and remove functions to work with fileId
function moveFileUp(fileId) {
  const index = imageFiles.findIndex(item => item.id == fileId);
  if (index > 0) {
    [imageFiles[index - 1], imageFiles[index]] = [imageFiles[index], imageFiles[index - 1]];
    renderFileList();
    updateUI();
  }
}

function moveFileDown(fileId) {
  const index = imageFiles.findIndex(item => item.id == fileId);
  if (index < imageFiles.length - 1) {
    [imageFiles[index], imageFiles[index + 1]] = [imageFiles[index + 1], imageFiles[index]];
    renderFileList();
    updateUI();
  }
}

function removeFile(fileId) {
  imageFiles = imageFiles.filter(item => item.id != fileId);
  renderFileList();
  updateUI();
  showAlert('File removed.', 'info');
}
    function updateUI() {
      // Update counters
      document.getElementById('imageCount').textContent = imageFiles.length;
      document.getElementById('fileListCount').textContent = `(${imageFiles.length} images)`;
      
      // Calculate total size
      const totalSize = imageFiles.reduce((sum, file) => sum + file.file.size, 0);
      document.getElementById('totalSize').textContent = formatFileSize(totalSize);
      
      // Update page count
      document.getElementById('pageCount').textContent = imageFiles.length;
      document.getElementById('estimatedTime').textContent = Math.ceil(imageFiles.length / 5) + ' seconds';
      
      // Enable/disable convert button
      convertBtn.disabled = imageFiles.length === 0;
      
      // Hide output container
      outputContainer.style.display = 'none';
    }

    function formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    function handleConversionAction(action) {
      switch (action) {
        case 'convert':
          convertToPdf();
          break;

        case 'clear':
          clearAll();
          break;
      }
    }

    async function convertToPdf() {
      if (imageFiles.length === 0) {
        showAlert('Please select at least one image to convert.', 'error');
        return;
      }

      try {
        // Show progress
        progressSection.style.display = 'block';
        progressFill.style.width = '0%';
        progressText.textContent = 'Initializing PDF creation...';

        // Initialize jsPDF
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();
        
        // Hide output container initially
        outputContainer.style.display = 'none';
        outputContent.innerHTML = '';

        for (let i = 0; i < imageFiles.length; i++) {
          // Update progress
          const progress = Math.floor((i / imageFiles.length) * 90);
          progressFill.style.width = progress + '%';
          progressText.textContent = `Processing ${imageFiles[i].name} (${i + 1}/${imageFiles.length})...`;

          const file = imageFiles[i].file;
          
          // Read file as data URL
          const dataUrl = await readFileAsDataURL(file);
          
          // Get page dimensions
          const pageSize = document.getElementById('pageSize').value;
          const orientation = document.getElementById('pageOrientation').value;
          
          // Get image dimensions to determine orientation
          const img = new Image();
          await new Promise((resolve) => {
            img.onload = resolve;
            img.src = dataUrl;
          });
          
          // Determine page dimensions
          let pageWidth, pageHeight;
          if (pageSize === 'auto') {
            // Use image dimensions
            pageWidth = img.width;
            pageHeight = img.height;
          } else {
            // Use standard page sizes (in mm)
            const pageSizes = {
              'a4': [210, 297],
              'letter': [216, 279],
              'legal': [216, 356]
            };
            [pageWidth, pageHeight] = pageSizes[pageSize] || [210, 297];
          }
          
          // Handle orientation
          let finalOrientation = orientation;
          if (orientation === 'auto') {
            finalOrientation = img.width > img.height ? 'landscape' : 'portrait';
          }
          
          // Swap dimensions for landscape
          if (finalOrientation === 'landscape' && pageSize !== 'auto') {
            [pageWidth, pageHeight] = [pageHeight, pageWidth];
          }
          
          // Add new page for all images except the first
          if (i > 0) {
            pdf.addPage([pageWidth, pageHeight], finalOrientation);
          } else {
            // Set dimensions for first page
            pdf.setPage(1);
          }
          
          // Add image to PDF
          const imgProps = pdf.getImageProperties(dataUrl);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
          
          // Calculate dimensions to fit image to page
          const ratio = Math.min(pdfWidth / imgProps.width, pdfHeight / imgProps.height);
          const width = imgProps.width * ratio;
          const height = imgProps.height * ratio;
          const x = (pdfWidth - width) / 2;
          const y = (pdfHeight - height) / 2;
          
          pdf.addImage(dataUrl, 'JPEG', x, y, width, height);
          
          // Add page numbers if enabled
          if (document.getElementById('addPageNumbers').checked) {
            pdf.setFontSize(10);
            pdf.setTextColor(128, 128, 128);
            pdf.text(`Page ${i + 1} of ${imageFiles.length}`, pdfWidth / 2, pdfHeight - 10, { align: 'center' });
          }
        }

        // Finalize PDF
        progressFill.style.width = '95%';
        progressText.textContent = 'Finalizing PDF document...';

        // Generate PDF blob
        const pdfBlob = pdf.output('blob');
        convertedPdfBlob = pdfBlob;
        convertedPdfUrl = URL.createObjectURL(pdfBlob);
        
        // Create download link
        const outputFilename = document.getElementById('outputFilename').value || 'converted';
        const filename = outputFilename.endsWith('.pdf') ? outputFilename : outputFilename + '.pdf';
        
        outputContent.innerHTML = `
          <div class="output-item">
            <i class="fas fa-file-pdf" style="font-size: 3rem; color: #e74c3c;"></i>
            <div>
              <p><strong>PDF Document</strong></p>
              <p>Successfully converted ${imageFiles.length} images to PDF format.</p>
              <a href="${convertedPdfUrl}" download="${filename}" class="download-btn">
                <i class="fas fa-download"></i> Download PDF
              </a>
            </div>
          </div>
          
          <div class="output-item">
            <h4>Image Previews</h4>
          </div>
        `;
        
        // Add image previews
        for (let i = 0; i < Math.min(imageFiles.length, 5); i++) {
          const file = imageFiles[i].file;
          const dataUrl = await readFileAsDataURL(file);
          
          const previewItem = document.createElement('div');
          previewItem.className = 'output-item';
          previewItem.innerHTML = `
            <img src="${dataUrl}" alt="${file.name}" class="output-preview">
            <div>
              <p><strong>${file.name}</strong></p>
              <p>Page ${i + 1} in PDF</p>
            </div>
          `;
          outputContent.appendChild(previewItem);
        }
        
        if (imageFiles.length > 5) {
          const moreItem = document.createElement('div');
          moreItem.className = 'output-item';
          moreItem.innerHTML = `
            <i class="fas fa-ellipsis-h" style="font-size: 2rem; color: #95a5a6;"></i>
            <div>
              <p>... and ${imageFiles.length - 5} more images</p>
            </div>
          `;
          outputContent.appendChild(moreItem);
        }
        
        outputContainer.style.display = 'block';

        // Complete progress
        progressFill.style.width = '100%';
        progressText.textContent = 'Conversion completed successfully!';
        
        showAlert(`Successfully converted ${imageFiles.length} images to PDF!`, 'success');
        
        // Hide progress after a delay
        setTimeout(() => {
          progressSection.style.display = 'none';
        }, 2000);

      } catch (error) {
        console.error('Conversion error:', error);
        progressSection.style.display = 'none';
        showAlert(`Conversion failed: ${error.message}`, 'error');
      }
    }

    // File reader helper functions
    function readFileAsDataURL(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }

    function clearAll() {
      // Clean up blob URLs
      if (convertedPdfUrl) {
        URL.revokeObjectURL(convertedPdfUrl);
      }
      
      imageFiles = [];
      convertedPdfUrl = null;
      convertedPdfBlob = null;
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

    // Initialize UI
    updateUI();

    // Make functions available globally for onclick handlers
    window.moveFileUp = function(fileId) {
      const index = imageFiles.findIndex(item => item.id === fileId);
      if (index > 0) {
        // Swap with previous item
        [imageFiles[index - 1], imageFiles[index]] = [imageFiles[index], imageFiles[index - 1]];
        renderFileList();
        updateUI();
      }
    };

    window.moveFileDown = function(fileId) {
      const index = imageFiles.findIndex(item => item.id === fileId);
      if (index < imageFiles.length - 1) {
        // Swap with next item
        [imageFiles[index], imageFiles[index + 1]] = [imageFiles[index + 1], imageFiles[index]];
        renderFileList();
        updateUI();
      }
    };

    window.removeFile = function(fileId) {
      imageFiles = imageFiles.filter(item => item.id !== fileId);
      renderFileList();
      updateUI();
      showAlert('File removed.', 'info');
    };
  });
</script>