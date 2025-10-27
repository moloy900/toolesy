---
layout: default
title: "Online PDF Cropper - Crop PDF Pages Precisely"
permalink: /free-online-pdf-cropper-crop-pdf-pages-precisely/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Crop PDF Online Free - Precise PDF Page Cropping Tool</title>
<meta name="description"
  content="Free PDF cropper tool to crop PDF pages with precision. Select custom crop areas and apply to all pages instantly. No signup & no watermark.">
<meta name="keywords"
  content="crop pdf online free, pdf cropper tool, crop pdf pages, trim pdf online, pdf margin remover, pdf page cropper, free pdf editor no watermark">
<meta name="author" content="paramdip nath">
<meta name="robots" content="index, follow">

<!-- ✅ Open Graph Tags -->
<meta property="og:title" content="Crop PDF Online Free - Precise PDF Page Cropping Tool">
<meta property="og:description" content="Crop PDF pages easily — custom crop areas & apply to all pages. Free, secure & no watermark.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://toolesy.com/free-online-pdf-cropper-crop-pdf-pages-precisely">

<!-- ✅ Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free Online PDF Cropper - No Watermark">
<meta name="twitter:description" content="Crop and trim PDF pages online free. No signup. No watermark.">

<!-- ✅ WebPage Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "PDF Cropper Tool",
  "description": "Crop and trim PDF pages online free with precise selection & no quality loss.",
  "url": "https://toolesy.com/free-online-pdf-cropper-crop-pdf-pages-precisely",
  "publisher": {
    "@type": "Organization",
    "name": "ToolEsy",
    "logo": {
      "@type": "ImageObject"
    }
  }
}
</script>

<!-- ✅ FAQ Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is this PDF cropper free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our PDF cropper is 100% free to use without any registration or watermark."
      }
    },
    {
      "@type": "Question",
      "name": "Can I crop all pages in a PDF at once?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can apply the same crop selection to multiple or all pages in your PDF file."
      }
    },
    {
      "@type": "Question",
      "name": "Will cropping affect PDF quality?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, the cropping process does not reduce quality. It only trims selected areas."
      }
    }
  ]
}
</script>


<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<!-- PDF Libraries -->
<script src="https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>
<script src="https://unpkg.com/downloadjs@1.4.7"></script>
<!-- PDF.js for rendering -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js"></script>

<style>
  /* PDF Cropper Styles */
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

  .crop-options {
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

  /* Preview and Crop Area Styles */
  .preview-section {
    margin: 30px 0;
    display: none;
  }

  .preview-container {
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .preview-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
  }

  .preview-title {
    font-size: 1.3rem;
    color: var(--primary);
    margin: 0;
  }

  .preview-controls {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .page-navigation {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .page-btn {
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 4px;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .page-btn:hover {
    background: #2980b9;
  }

  .page-btn:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }

  .page-indicator {
    font-weight: 600;
    color: #2c3e50;
  }

  .preview-area {
    position: relative;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    background: #f8f9fa;
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .canvas-container {
    position: relative;
    display: inline-block;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  #pdfCanvas {
    display: block;
    max-width: 100%;
    max-height: 70vh;
  }

  .crop-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: crosshair;
  }

  .crop-selection {
    position: absolute;
    border: 2px dashed var(--primary);
    background-color: rgba(52, 152, 219, 0.2);
    pointer-events: none;
  }

  .crop-handle {
    position: absolute;
    width: 10px;
    height: 10px;
    background: white;
    border: 2px solid var(--primary);
    border-radius: 50%;
    pointer-events: all;
  }

  .crop-handle.top-left {
    top: -5px;
    left: -5px;
    cursor: nw-resize;
  }

  .crop-handle.top-right {
    top: -5px;
    right: -5px;
    cursor: ne-resize;
  }

  .crop-handle.bottom-left {
    bottom: -5px;
    left: -5px;
    cursor: sw-resize;
  }

  .crop-handle.bottom-right {
    bottom: -5px;
    right: -5px;
    cursor: se-resize;
  }

  .crop-coordinates {
    display: flex;
    gap: 15px;
    margin-top: 15px;
    flex-wrap: wrap;
  }

  .coordinate-input {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .coordinate-input label {
    font-weight: 600;
    color: #2c3e50;
    font-size: 0.9rem;
  }

  .coordinate-input input {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100px;
    font-size: 0.9rem;
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

    .crop-options {
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

    .preview-controls {
      flex-direction: column;
      gap: 15px;
    }

    .crop-coordinates {
      justify-content: center;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online PDF Cropper</h1>
  <p class="welcome-message">Crop PDF files with precision using our interactive crop tool. Apply the same crop selection to all pages and download your cropped PDF. No registration required - 100% free!</p>

  <div class="converter-section">
    <h2>PDF Cropper</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Selected File: </span>
        <span id="fileName">None</span>
      </div>
      <div class="counter-item">
        <span>Total Pages: </span>
        <span id="pageCount">0</span>
      </div>
      <div class="counter-item">
        <span>File Size: </span>
        <span id="fileSize">0 MB</span>
      </div>
      <div class="counter-item">
        <span>Estimated Time: </span>
        <span id="estimatedTime">0 seconds</span>
      </div>
    </div>

    <div class="upload-section" id="dropArea">
      <i class="fas fa-crop-alt"></i>
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

    <div class="preview-section" id="previewSection">
      <div class="preview-container">
        <div class="preview-header">
          <h3 class="preview-title">PDF Preview & Crop Tool</h3>
          <div class="preview-controls">
            <div class="page-navigation">
              <button class="page-btn" id="prevPage" disabled>
                <i class="fas fa-chevron-left"></i>
              </button>
              <span class="page-indicator">Page <span id="currentPage">1</span> of <span id="totalPages">1</span></span>
              <button class="page-btn" id="nextPage" disabled>
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div class="preview-area">
          <div class="canvas-container">
            <canvas id="pdfCanvas"></canvas>
            <div class="crop-overlay" id="cropOverlay"></div>
          </div>
        </div>
        
        <div class="crop-coordinates">
          <div class="coordinate-input">
            <label for="cropX">X Position</label>
            <input type="number" id="cropX" min="0" value="0">
          </div>
          <div class="coordinate-input">
            <label for="cropY">Y Position</label>
            <input type="number" id="cropY" min="0" value="0">
          </div>
          <div class="coordinate-input">
            <label for="cropWidth">Width</label>
            <input type="number" id="cropWidth" min="0" value="0">
          </div>
          <div class="coordinate-input">
            <label for="cropHeight">Height</label>
            <input type="number" id="cropHeight" min="0" value="0">
          </div>
        </div>
      </div>
    </div>

    <div class="options-section">
      <h3>Crop Options</h3>
      <div class="crop-options">
        <div class="option-group">
          <label class="option-label">Output Filename</label>
          <input type="text" id="outputFilename" class="option-input" value="cropped-document" placeholder="Enter filename">
        </div>
        
        <div class="option-group">
          <label class="option-label">Apply Crop To</label>
          <select id="cropScope" class="option-select">
            <option value="all">All Pages</option>
            <option value="current">Current Page Only</option>
            <option value="range">Page Range</option>
          </select>
        </div>
        
        <div class="option-group" id="pageRangeGroup" style="display: none;">
          <label class="option-label">Page Range</label>
          <input type="text" id="pageRange" class="option-input" placeholder="e.g., 1-5, 7, 9-12">
        </div>
        
        <div class="option-group">
          <div class="option-checkbox">
            <input type="checkbox" id="preserveAspectRatio" checked>
            <label for="preserveAspectRatio">Preserve Aspect Ratio</label>
          </div>
          <div class="option-checkbox">
            <input type="checkbox" id="showCropMarks">
            <label for="showCropMarks">Show Crop Marks</label>
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
      <button class="case-button" data-action="crop" id="cropBtn" disabled>Crop PDF</button>
      <button class="case-button success" data-action="download" id="downloadBtn" disabled>Download Cropped PDF</button>
      <button class="case-button warning" data-action="resetCrop" id="resetCropBtn">Reset Crop</button>
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

      <h3>Step 2: Preview & Select Crop Area</h3>
      <div class="example-text">• Use the interactive crop tool to select the area you want to keep
• Drag from top-left to bottom-right to create a selection
• Adjust the selection using the handles or coordinate inputs</div>

      <h3>Step 3: Apply Crop & Download</h3>
      <div class="example-text">• Choose whether to apply the crop to all pages or specific pages
• Click "Crop PDF" to process your file
• Download your cropped PDF document</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online PDF Cropper - Crop PDF Files with Precision</h2>

    <p>Need to remove unwanted margins or focus on specific content in your PDF? Our free <strong>online PDF Cropper tool</strong> makes it incredibly easy to crop PDF files with precision. Whether you're removing white space, focusing on specific content, or preparing documents for presentation, this tool handles everything seamlessly. There's no software to install, no watermarks, and your files remain completely private - all processing happens securely in your browser.</p>

    <h3>How to Crop PDF Files (Step-by-Step):</h3>
    <ul>
      <li><strong>Select File:</strong> Click the "Select PDF File" button or simply drag and drop your PDF file into the upload area.</li>
      <li><strong>Preview & Select Area:</strong> Use the interactive crop tool to select the exact area you want to keep. Drag from top-left to bottom-right to create your selection.</li>
      <li><strong>Adjust Selection:</strong> Fine-tune your crop area using the drag handles or by entering precise coordinates in the input fields.</li>
      <li><strong>Apply Crop:</strong> Choose whether to apply the crop to all pages or specific pages, then click "Crop PDF" to process your file.</li>
      <li><strong>Download:</strong> Download your perfectly cropped PDF with a single click.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you've scanned a document but ended up with large white borders around the content. Instead of printing and physically cutting the paper, you can use our PDF Cropper to digitally remove those borders. Or perhaps you have a multi-page report but only need specific sections from each page - our tool allows you to consistently crop the same area from all pages, saving you time and effort.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Students & Educators:</strong> Crop scanned textbook pages to focus on specific content or remove unnecessary margins.</li>
      <li><strong>Professionals:</strong> Prepare documents for presentations by removing headers, footers, or sidebars.</li>
      <li><strong>Designers:</strong> Extract specific elements from PDF documents for use in other projects.</li>
      <li><strong>Researchers:</strong> Focus on specific data or sections in research papers and reports.</li>
      <li><strong>Administrative Staff:</strong> Clean up scanned documents by removing scanner artifacts or unwanted borders.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: Can I crop multiple PDF files at once?</strong><br>
      A: Currently, our tool processes one PDF file at a time. For multiple files, you'll need to crop them individually.</p>

    <p><strong>Q: Will cropping affect the quality of my PDF?</strong><br>
      A: No, cropping preserves the original quality of your PDF content. Text remains sharp and images maintain their resolution.</p>

    <p><strong>Q: Is my data secure when using this PDF cropper?</strong><br>
      A: Absolutely. Your PDF file is processed entirely in your browser and never uploaded to any server. This means your documents remain completely private and secure.</p>

    <p><strong>Q: Can I apply different crop areas to different pages?</strong><br>
      A: The tool is designed to apply the same crop area consistently across all selected pages. For different crop areas on different pages, you would need to process them separately.</p>

    <p><strong>Q: Do I need to create an account or pay to use this tool?</strong><br>
      A: No, this is a completely free tool with no registration required. There are no hidden fees or watermarks.</p>

    <h3>Why Choose Our PDF Cropper?</h3>
    <p>Our <strong>online PDF Cropper</strong> stands out for its precision, ease of use, and privacy. Unlike many online tools, we don't upload your files to external servers - all processing happens locally in your browser. This ensures maximum security for your sensitive documents. The interactive crop tool gives you pixel-perfect control over your selection, and the ability to apply the same crop to multiple pages saves you time on repetitive tasks.</p>

    <h3>Common Applications of PDF Cropping</h3>
    <p>PDF cropping has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Document Preparation:</strong> Remove scanner borders or unwanted margins from scanned documents</li>
      <li><strong>Content Extraction:</strong> Focus on specific sections, tables, or images within a PDF</li>
      <li><strong>Presentation Ready:</strong> Prepare PDFs for slideshows or displays by removing headers and footers</li>
      <li><strong>Print Optimization:</strong> Eliminate unnecessary white space to save ink and paper when printing</li>
      <li><strong>Mobile Viewing:</strong> Crop documents to fit better on mobile device screens</li>
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
        <p>In a full implementation, this would display a preview of your cropped PDF document.</p>
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
  let pdfDoc = null;
  let currentPage = 1;
  let totalPages = 0;
  let croppedPdfUrl = null;
  let croppedPdfBytes = null;
  
  // Crop selection variables
  let isSelecting = false;
  let startX, startY, endX, endY;
  let cropSelection = null;
  let cropHandles = [];

  // Set up PDF.js worker
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';

  document.addEventListener('DOMContentLoaded', function () {
    const fileUpload = document.getElementById('fileUpload');
    const selectFileBtn = document.getElementById('selectFileBtn');
    const dropArea = document.getElementById('dropArea');
    const fileList = document.getElementById('fileList');
    const alertContainer = document.getElementById('alertContainer');
    const cropBtn = document.getElementById('cropBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const resetCropBtn = document.getElementById('resetCropBtn');
    const progressSection = document.getElementById('progressSection');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const previewSection = document.getElementById('previewSection');
    const pdfCanvas = document.getElementById('pdfCanvas');
    const cropOverlay = document.getElementById('cropOverlay');
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');
    const currentPageSpan = document.getElementById('currentPage');
    const totalPagesSpan = document.getElementById('totalPages');
    
    // Coordinate inputs
    const cropX = document.getElementById('cropX');
    const cropY = document.getElementById('cropY');
    const cropWidth = document.getElementById('cropWidth');
    const cropHeight = document.getElementById('cropHeight');
    
    // Crop options
    const cropScope = document.getElementById('cropScope');
    const pageRangeGroup = document.getElementById('pageRangeGroup');
    const pageRange = document.getElementById('pageRange');
    
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
      if (croppedPdfUrl) {
        downloadCroppedPdf();
        previewModal.style.display = 'none';
      }
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === previewModal) {
        previewModal.style.display = 'none';
      }
    });

    // Page navigation
    prevPageBtn.addEventListener('click', function() {
      if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
        updatePageNavigation();
      }
    });

    nextPageBtn.addEventListener('click', function() {
      if (currentPage < totalPages) {
        currentPage++;
        renderPage(currentPage);
        updatePageNavigation();
      }
    });

    // Crop scope change
    cropScope.addEventListener('change', function() {
      if (this.value === 'range') {
        pageRangeGroup.style.display = 'flex';
      } else {
        pageRangeGroup.style.display = 'none';
      }
    });

    // Coordinate input changes
    [cropX, cropY, cropWidth, cropHeight].forEach(input => {
      input.addEventListener('change', updateCropFromCoordinates);
    });

    // Action buttons
    document.querySelectorAll('.case-button').forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handlePdfAction(action);
      });
    });

    // Crop overlay events
    cropOverlay.addEventListener('mousedown', startSelection);
    document.addEventListener('mousemove', updateSelection);
    document.addEventListener('mouseup', endSelection);

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
        URL.revokeObjectURL(croppedPdfUrl);
        croppedPdfUrl = null;
        croppedPdfBytes = null;
      }
      
      pdfFile = file;
      renderFileList();
      loadPdf(file);
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

    async function loadPdf(file) {
      try {
        showAlert('Loading PDF...', 'info');
        
        const arrayBuffer = await readFileAsArrayBuffer(file);
        pdfDoc = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        
        totalPages = pdfDoc.numPages;
        currentPage = 1;
        
        // Show preview section
        previewSection.style.display = 'block';
        
        // Render first page
        await renderPage(currentPage);
        updatePageNavigation();
        
        // Update counters
        updateUI();
        
        // Enable crop button
        cropBtn.disabled = false;
        
        showAlert('PDF loaded successfully!', 'success');
        
      } catch (error) {
        console.error('Error loading PDF:', error);
        showAlert('Failed to load PDF. Please try another file.', 'error');
      }
    }

    async function renderPage(pageNum) {
      try {
        const page = await pdfDoc.getPage(pageNum);
        const viewport = page.getViewport({ scale: 1.5 });
        
        // Set canvas dimensions
        const canvas = pdfCanvas;
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        // Set overlay dimensions to match canvas
        cropOverlay.style.width = canvas.width + 'px';
        cropOverlay.style.height = canvas.height + 'px';
        
        // Render PDF page
        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        
        await page.render(renderContext).promise;
        
        // Update page indicator
        currentPageSpan.textContent = pageNum;
        totalPagesSpan.textContent = totalPages;
        
      } catch (error) {
        console.error('Error rendering page:', error);
        showAlert('Error rendering PDF page.', 'error');
      }
    }

    function updatePageNavigation() {
      prevPageBtn.disabled = currentPage <= 1;
      nextPageBtn.disabled = currentPage >= totalPages;
    }

    function updateUI() {
      // Update counters
      document.getElementById('fileName').textContent = pdfFile ? pdfFile.name : 'None';
      document.getElementById('pageCount').textContent = totalPages;
      document.getElementById('fileSize').textContent = pdfFile ? formatFileSize(pdfFile.size) : '0 MB';
      document.getElementById('fileListCount').textContent = pdfFile ? '(1 file)' : '(0 files)';
      
      // Estimate processing time
      document.getElementById('estimatedTime').textContent = Math.ceil(totalPages / 10) + ' seconds';
      
      // Enable/disable buttons
      downloadBtn.disabled = !croppedPdfUrl;
    }

    function formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    function handlePdfAction(action) {
      switch (action) {
        case 'crop':
          cropPdf();
          break;

        case 'download':
          downloadCroppedPdf();
          break;

        case 'resetCrop':
          resetCrop();
          break;

        case 'clear':
          clearAll();
          break;
      }
    }

    // Crop selection functions
    function startSelection(e) {
      if (!pdfDoc) return;
      
      const rect = pdfCanvas.getBoundingClientRect();
      startX = e.clientX - rect.left;
      startY = e.clientY - rect.top;
      
      isSelecting = true;
      
      // Remove existing selection
      if (cropSelection) {
        cropSelection.remove();
        cropHandles.forEach(handle => handle.remove());
        cropSelection = null;
        cropHandles = [];
      }
      
      // Create new selection element
      cropSelection = document.createElement('div');
      cropSelection.className = 'crop-selection';
      cropOverlay.appendChild(cropSelection);
      
      updateSelection(e);
    }

    function updateSelection(e) {
      if (!isSelecting) return;
      
      const rect = pdfCanvas.getBoundingClientRect();
      endX = e.clientX - rect.left;
      endY = e.clientY - rect.top;
      
      // Calculate selection dimensions
      const x = Math.min(startX, endX);
      const y = Math.min(startY, endY);
      const width = Math.abs(endX - startX);
      const height = Math.abs(endY - startY);
      
      // Update selection element
      cropSelection.style.left = x + 'px';
      cropSelection.style.top = y + 'px';
      cropSelection.style.width = width + 'px';
      cropSelection.style.height = height + 'px';
      
      // Update coordinate inputs
      updateCoordinateInputs(x, y, width, height);
    }

    function endSelection() {
      if (!isSelecting) return;
      
      isSelecting = false;
      
      // Add resize handles
      addResizeHandles();
    }

    function addResizeHandles() {
      if (!cropSelection) return;
      
      // Remove existing handles
      cropHandles.forEach(handle => handle.remove());
      cropHandles = [];
      
      // Create handles
      const handlePositions = [
        { class: 'top-left', x: -5, y: -5 },
        { class: 'top-right', x: -5, y: -5 },
        { class: 'bottom-left', x: -5, y: -5 },
        { class: 'bottom-right', x: -5, y: -5 }
      ];
      
      handlePositions.forEach(pos => {
        const handle = document.createElement('div');
        handle.className = `crop-handle ${pos.class}`;
        cropOverlay.appendChild(handle);
        cropHandles.push(handle);
        
        // Position handle
        const rect = cropSelection.getBoundingClientRect();
        const canvasRect = pdfCanvas.getBoundingClientRect();
        
        let left, top;
        
        switch (pos.class) {
          case 'top-left':
            left = rect.left - canvasRect.left - 5;
            top = rect.top - canvasRect.top - 5;
            break;
          case 'top-right':
            left = rect.right - canvasRect.left - 5;
            top = rect.top - canvasRect.top - 5;
            break;
          case 'bottom-left':
            left = rect.left - canvasRect.left - 5;
            top = rect.bottom - canvasRect.top - 5;
            break;
          case 'bottom-right':
            left = rect.right - canvasRect.left - 5;
            top = rect.bottom - canvasRect.top - 5;
            break;
        }
        
        handle.style.left = left + 'px';
        handle.style.top = top + 'px';
        
        // Add drag functionality to handles
        makeHandleDraggable(handle, pos.class);
      });
    }

    function makeHandleDraggable(handle, position) {
      let isDragging = false;
      let startX, startY;
      
      handle.addEventListener('mousedown', function(e) {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        e.stopPropagation();
      });
      
      document.addEventListener('mousemove', function(e) {
        if (!isDragging || !cropSelection) return;
        
        const rect = pdfCanvas.getBoundingClientRect();
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        
        const selectionRect = cropSelection.getBoundingClientRect();
        let newLeft = selectionRect.left - rect.left;
        let newTop = selectionRect.top - rect.top;
        let newWidth = selectionRect.width;
        let newHeight = selectionRect.height;
        
        switch (position) {
          case 'top-left':
            newLeft += deltaX;
            newTop += deltaY;
            newWidth -= deltaX;
            newHeight -= deltaY;
            break;
          case 'top-right':
            newTop += deltaY;
            newWidth += deltaX;
            newHeight -= deltaY;
            break;
          case 'bottom-left':
            newLeft += deltaX;
            newWidth -= deltaX;
            newHeight += deltaY;
            break;
          case 'bottom-right':
            newWidth += deltaX;
            newHeight += deltaY;
            break;
        }
        
        // Ensure minimum size
        if (newWidth < 10) newWidth = 10;
        if (newHeight < 10) newHeight = 10;
        
        // Ensure within canvas bounds
        if (newLeft < 0) {
          newWidth += newLeft;
          newLeft = 0;
        }
        if (newTop < 0) {
          newHeight += newTop;
          newTop = 0;
        }
        if (newLeft + newWidth > pdfCanvas.width) {
          newWidth = pdfCanvas.width - newLeft;
        }
        if (newTop + newHeight > pdfCanvas.height) {
          newHeight = pdfCanvas.height - newTop;
        }
        
        // Update selection
        cropSelection.style.left = newLeft + 'px';
        cropSelection.style.top = newTop + 'px';
        cropSelection.style.width = newWidth + 'px';
        cropSelection.style.height = newHeight + 'px';
        
        // Update coordinate inputs
        updateCoordinateInputs(newLeft, newTop, newWidth, newHeight);
        
        // Update handles
        addResizeHandles();
        
        startX = e.clientX;
        startY = e.clientY;
      });
      
      document.addEventListener('mouseup', function() {
        isDragging = false;
      });
    }

    function updateCoordinateInputs(x, y, width, height) {
      cropX.value = Math.round(x);
      cropY.value = Math.round(y);
      cropWidth.value = Math.round(width);
      cropHeight.value = Math.round(height);
    }

    function updateCropFromCoordinates() {
      if (!cropSelection) return;
      
      const x = parseInt(cropX.value) || 0;
      const y = parseInt(cropY.value) || 0;
      const width = parseInt(cropWidth.value) || 0;
      const height = parseInt(cropHeight.value) || 0;
      
      // Ensure within canvas bounds
      const maxX = pdfCanvas.width - width;
      const maxY = pdfCanvas.height - height;
      const clampedX = Math.max(0, Math.min(x, maxX));
      const clampedY = Math.max(0, Math.min(y, maxY));
      const clampedWidth = Math.max(10, Math.min(width, pdfCanvas.width - clampedX));
      const clampedHeight = Math.max(10, Math.min(height, pdfCanvas.height - clampedY));
      
      // Update selection
      cropSelection.style.left = clampedX + 'px';
      cropSelection.style.top = clampedY + 'px';
      cropSelection.style.width = clampedWidth + 'px';
      cropSelection.style.height = clampedHeight + 'px';
      
      // Update inputs with clamped values
      if (clampedX !== x || clampedY !== y || clampedWidth !== width || clampedHeight !== height) {
        updateCoordinateInputs(clampedX, clampedY, clampedWidth, clampedHeight);
      }
      
      // Update handles
      addResizeHandles();
    }

    function resetCrop() {
      if (cropSelection) {
        cropSelection.remove();
        cropHandles.forEach(handle => handle.remove());
        cropSelection = null;
        cropHandles = [];
      }
      
      // Reset coordinate inputs
      cropX.value = 0;
      cropY.value = 0;
      cropWidth.value = 0;
      cropHeight.value = 0;
    }

    async function cropPdf() {
      if (!pdfDoc || !cropSelection) {
        showAlert('Please select a crop area first.', 'error');
        return;
      }

      try {
        // Show progress
        progressSection.style.display = 'block';
        progressFill.style.width = '0%';
        progressText.textContent = 'Initializing PDF cropper...';

        const { PDFDocument, degrees } = PDFLib;
        const croppedPdf = await PDFDocument.create();

        // Get crop coordinates from selection
        const rect = cropSelection.getBoundingClientRect();
        const canvasRect = pdfCanvas.getBoundingClientRect();
        
        // Calculate crop area in PDF coordinates (normalized)
        const scale = pdfCanvas.width / canvasRect.width;
        const x = (rect.left - canvasRect.left) * scale;
        const y = (rect.top - canvasRect.top) * scale;
        const width = rect.width * scale;
        const height = rect.height * scale;
        
        // Determine which pages to crop
        let pagesToCrop = [];
        const scope = cropScope.value;
        
        if (scope === 'all') {
          pagesToCrop = Array.from({ length: totalPages }, (_, i) => i + 1);
        } else if (scope === 'current') {
          pagesToCrop = [currentPage];
        } else if (scope === 'range') {
          pagesToCrop = parsePageRange(pageRange.value, totalPages);
          if (pagesToCrop.length === 0) {
            showAlert('Invalid page range. Please enter valid page numbers.', 'error');
            progressSection.style.display = 'none';
            return;
          }
        }

        // Load the original PDF into PDF-lib
        const originalPdfBytes = await pdfDoc.getData();
        const originalPdfDoc = await PDFDocument.load(originalPdfBytes);

        for (let i = 0; i < pagesToCrop.length; i++) {
          const pageNum = pagesToCrop[i];
          
          try {
            // Update progress
            const progress = Math.floor((i / pagesToCrop.length) * 80);
            progressFill.style.width = progress + '%';
            progressText.textContent = `Cropping page ${pageNum} of ${totalPages}...`;

            // Get the original PDF page from PDF-lib
            const originalPage = originalPdfDoc.getPages()[pageNum - 1];
            
            // Get page dimensions
            const { width: pageWidth, height: pageHeight } = originalPage.getSize();
            
            // Calculate crop box in PDF coordinates (PDF coordinates are from bottom-left)
            const cropX = (x / pdfCanvas.width) * pageWidth;
            const cropY = pageHeight - ((y + height) / pdfCanvas.height) * pageHeight; // Convert to PDF coordinate system
            const cropWidth = (width / pdfCanvas.width) * pageWidth;
            const cropHeight = (height / pdfCanvas.height) * pageHeight;
            
            // Create a new page with the exact crop dimensions
            const newPage = croppedPdf.addPage([cropWidth, cropHeight]);
            
            // Embed the original page as a form XObject
            const embeddedPage = await croppedPdf.embedPage(originalPage, {
              left: cropX,
              bottom: cropY,
              right: cropX + cropWidth,
              top: cropY + cropHeight
            });
            
            // Draw the embedded page (cropped portion) onto the new page
            newPage.drawPage(embeddedPage);

          } catch (error) {
            console.error(`Error cropping page ${pageNum}:`, error);
            throw new Error(`Failed to crop page ${pageNum}: ${error.message}`);
          }
        }

        // Finalize PDF
        progressFill.style.width = '90%';
        progressText.textContent = 'Finalizing cropped PDF...';

        // Save the cropped PDF
        croppedPdfBytes = await croppedPdf.save();
        
        // Create blob URL for download
        const blob = new Blob([croppedPdfBytes], { type: 'application/pdf' });
        croppedPdfUrl = URL.createObjectURL(blob);

        // Complete progress
        progressFill.style.width = '100%';
        progressText.textContent = 'Cropping completed successfully!';
        
        showAlert(`Successfully cropped ${pagesToCrop.length} pages!`, 'success');
        
        // Enable download button
        downloadBtn.disabled = false;
        
        // Hide progress after a delay
        setTimeout(() => {
          progressSection.style.display = 'none';
        }, 2000);

      } catch (error) {
        console.error('Crop error:', error);
        progressSection.style.display = 'none';
        showAlert(`Cropping failed: ${error.message}`, 'error');
      }
    }

    function parsePageRange(rangeStr, maxPages) {
      if (!rangeStr.trim()) return [];
      
      const pages = new Set();
      const parts = rangeStr.split(',');
      
      for (const part of parts) {
        const trimmed = part.trim();
        if (trimmed.includes('-')) {
          const [start, end] = trimmed.split('-').map(num => parseInt(num.trim()));
          if (isNaN(start) || isNaN(end) || start < 1 || end > maxPages || start > end) {
            return [];
          }
          for (let i = start; i <= end; i++) {
            pages.add(i);
          }
        } else {
          const pageNum = parseInt(trimmed);
          if (isNaN(pageNum) || pageNum < 1 || pageNum > maxPages) {
            return [];
          }
          pages.add(pageNum);
        }
      }
      
      return Array.from(pages).sort((a, b) => a - b);
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

    function downloadCroppedPdf() {
      if (!croppedPdfUrl || !croppedPdfBytes) {
        showAlert('No cropped PDF available. Please crop a file first.', 'error');
        return;
      }

      try {
        const outputFilename = document.getElementById('outputFilename').value || 'cropped-document';
        const filename = outputFilename.endsWith('.pdf') ? outputFilename : outputFilename + '.pdf';
        
        showAlert(`Downloading "${filename}"...`, 'info');
        
        // Use downloadjs for reliable file download
        download(croppedPdfBytes, filename, "application/pdf");
        
        showAlert('PDF download completed!', 'success');
        
      } catch (error) {
        console.error('Download error:', error);
        
        // Fallback download method
        try {
          const outputFilename = document.getElementById('outputFilename').value || 'cropped-document';
          const filename = outputFilename.endsWith('.pdf') ? outputFilename : outputFilename + '.pdf';
          
          const blob = new Blob([croppedPdfBytes], { type: 'application/pdf' });
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

    function clearAll() {
      // Clean up blob URLs
      if (croppedPdfUrl) {
        URL.revokeObjectURL(croppedPdfUrl);
      }
      
      pdfFile = null;
      pdfDoc = null;
      currentPage = 1;
      totalPages = 0;
      croppedPdfUrl = null;
      croppedPdfBytes = null;
      fileUpload.value = '';
      
      // Reset crop selection
      resetCrop();
      
      // Hide preview section
      previewSection.style.display = 'none';
      
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
    updateUI();
  });
</script>