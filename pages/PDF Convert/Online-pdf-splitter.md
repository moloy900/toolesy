---
layout: default
title: "Online PDF Splitter - Split PDF Files into Multiple Documents"
permalink: /free-online-pdf-splitter-split-pdf-files-into-multiple-documents/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Free Online PDF Splitter - Split PDF Files into Multiple Documents</title>

<meta name="description"
  content="Easily split PDF files online for free. Separate PDF pages, extract page ranges, or divide large PDFs into multiple smaller documents with high quality. No signup or watermark.">

<meta name="keywords"
  content="pdf splitter, split pdf, divide pdf, extract pdf pages, pdf page splitter, split pdf online free, separate pdf pages, split pdf without watermark, pdf tools">

<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Open Graph Tags -->
<meta property="og:title" content="Free Online PDF Splitter - Split PDF Files in Seconds">
<meta property="og:description" content="Split PDF files by pages or page ranges instantly. 100% free - No signup needed.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://toolesy.com/free-online-pdf-splitter-split-pdf-files-into-multiple-documents/">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free Online PDF Splitter Tool">
<meta name="twitter:description" content="Split PDF files into multiple documents online without losing quality.">

<!-- FAQ Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I split a PDF file online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Upload your PDF, select the pages or range you want to split, then download your new PDF files instantly."
      }
    },
    {
      "@type": "Question",
      "name": "Is this PDF splitter free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, it is 100% free to use with no registration or watermark applied."
      }
    },
    {
      "@type": "Question",
      "name": "Will the quality of the PDF reduce after splitting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, your PDF documents retain the original quality when splitting pages."
      }
    }
  ]
}
</script>

<!-- WebSite + Tool Schema -->
<script type="application/ld+json">
{
 "@context": "https://schema.org",
 "@type": "WebApplication",
 "name": "PDF Splitter",
 "url": "https://toolesy.com/free-online-pdf-splitter-split-pdf-files-into-multiple-documents/",
 "applicationCategory": "BusinessApplication",
 "operatingSystem": "Web Browser",
 "description": "Free online PDF splitter tool to separate pages or extract specific page ranges.",
 "offers": {
   "@type": "Offer",
   "price": "0",
   "priceCurrency": "USD"
 }
}
</script>


<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<!-- PDF Libraries -->
<script src="https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>
<script src="https://unpkg.com/downloadjs@1.4.7"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>

<style>
  /* PDF Splitter Styles */
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

  .split-options-section {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
  }

  .split-methods {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 15px;
  }

  .method-tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 10px;
    flex-wrap: wrap;
  }

  .method-tab {
    padding: 10px 20px;
    background: #f8f9fa;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
  }

  .method-tab.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
  }

  .method-content {
    display: none;
  }

  .method-content.active {
    display: block;
  }

  .option-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 15px;
  }

  .option-label {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .option-select, .option-input, .option-textarea {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
    background: white;
  }

  .option-textarea {
    min-height: 80px;
    resize: vertical;
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

  .page-preview {
    margin-top: 20px;
    padding: 15px;
    background: white;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
  }

  .page-thumbnails {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    gap: 10px;
    margin-top: 10px;
    max-height: 200px;
    overflow-y: auto;
  }

  .page-thumbnail {
    width: 80px;
    height: 100px;
    background: #f8f9fa;
    border: 2px solid #e0e0e0;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
  }

  .page-thumbnail:hover {
    border-color: var(--primary);
  }

  .page-thumbnail.selected {
    border-color: var(--primary);
    background: #e3f2fd;
  }

  .page-number {
    font-size: 12px;
    font-weight: 600;
    color: #666;
  }

  .page-thumbnail.selected .page-number {
    color: var(--primary);
  }

  .range-examples {
    font-size: 12px;
    color: #666;
    margin-top: 5px;
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

  .output-options {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
  }

  .output-format {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-top: 10px;
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
    margin: 5% auto;
    padding: 30px;
    border-radius: 12px;
    width: 90%;
    max-width: 800px;
    max-height: 90vh;
    overflow-y: auto;
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

  .preview-document {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 15px;
    background: #f8f9fa;
  }

  .preview-document-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .preview-document-title {
    font-weight: 600;
    color: var(--primary);
  }

  .preview-document-pages {
    color: #666;
    font-size: 0.9rem;
  }

  .preview-page-list {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 10px;
  }

  .preview-page {
    background: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 0.8rem;
    color: #666;
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
      margin: 10% auto;
      width: 95%;
      padding: 20px;
    }

    .split-methods {
      grid-template-columns: 1fr;
    }

    .method-tabs {
      flex-direction: column;
    }

    .file-item {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }

    .file-actions {
      align-self: flex-end;
    }

    .page-thumbnails {
      grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    }

    .page-thumbnail {
      width: 60px;
      height: 80px;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online PDF Splitter</h1>
  <p class="welcome-message">Split PDF files by pages, ranges, or extract specific pages. Divide large PDFs into multiple documents without losing quality. No registration required - 100% free!</p>

  <div class="converter-section">
    <h2>PDF Splitter</h2>

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
        <span>Output Files: </span>
        <span id="outputCount">0</span>
      </div>
    </div>

    <div class="upload-section" id="dropArea">
      <i class="fas fa-file-pdf"></i>
      <h3>Drag & Drop PDF File Here</h3>
      <p>or click the button below to select a file</p>
      <button class="file-upload-button" id="selectFileBtn">
        <i class="fas fa-plus"></i> Select PDF File
      </button>
      <p class="file-info">Maximum file size: 100 MB</p>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".pdf" style="display: none;">

    <div class="file-list-section">
      <h3>Selected File</h3>
      <div class="file-list" id="fileList">
        <div class="empty-state">
          <i class="fas fa-folder-open"></i>
          <p>No PDF file selected yet</p>
          <p>Drag and drop a file or click the select button above</p>
        </div>
      </div>
    </div>

    <div class="split-options-section">
      <h3>Split Options</h3>
      <div class="method-tabs">
        <div class="method-tab active" data-method="range">Split by Range</div>
        <div class="method-tab" data-method="pages">Extract Pages</div>
        <div class="method-tab" data-method="every">Split Every N Pages</div>
        <div class="method-tab" data-method="bookmarks">Split by Bookmarks</div>
      </div>

      <div class="split-methods">
        <!-- Split by Range Method -->
        <div class="method-content active" id="range-method">
          <div class="option-group">
            <label class="option-label">Page Ranges</label>
            <textarea id="pageRanges" class="option-textarea" placeholder="Example: 1-5, 8, 11-15&#10;This will create three documents: pages 1-5, page 8, and pages 11-15"></textarea>
            <div class="range-examples">
              Examples: "1-5" (pages 1 to 5), "1,3,5" (pages 1, 3, and 5), "1-5, 10-15" (two ranges)
            </div>
          </div>
        </div>

        <!-- Extract Pages Method -->
        <div class="method-content" id="pages-method">
          <div class="option-group">
            <label class="option-label">Pages to Extract</label>
            <input type="text" id="extractPages" class="option-input" placeholder="Example: 1,3,5,7-10">
            <div class="range-examples">
              Enter page numbers separated by commas. Use hyphens for ranges.
            </div>
          </div>
          <div class="page-preview">
            <label class="option-label">Page Selection</label>
            <div class="page-thumbnails" id="pageThumbnails">
              <!-- Page thumbnails will be generated here -->
            </div>
          </div>
        </div>

        <!-- Split Every N Pages Method -->
        <div class="method-content" id="every-method">
          <div class="option-group">
            <label class="option-label">Split Every</label>
            <input type="number" id="pagesPerSplit" class="option-input" value="1" min="1">
            <span>page(s) per document</span>
          </div>
          <div class="option-group">
            <label class="option-label">Output Preview</label>
            <div id="splitPreview">Will create 0 documents</div>
          </div>
        </div>

        <!-- Split by Bookmarks Method -->
        <div class="method-content" id="bookmarks-method">
          <div class="option-group">
            <label class="option-label">Bookmark Level</label>
            <select id="bookmarkLevel" class="option-select">
              <option value="all">All Bookmarks</option>
              <option value="1">Level 1 Only</option>
              <option value="2">Level 2 Only</option>
              <option value="3">Level 3 Only</option>
            </select>
          </div>
          <div class="option-checkbox">
            <input type="checkbox" id="includeBookmarks" checked>
            <label for="includeBookmarks">Include bookmarks in output files</label>
          </div>
        </div>
      </div>
    </div>

    <div class="output-options">
      <h3>Output Options</h3>
      <div class="output-format">
        <div class="option-group">
          <label class="option-label">File Naming</label>
          <select id="namingPattern" class="option-select">
            <option value="original">Original Name + Part</option>
            <option value="sequential">Sequential Numbering</option>
            <option value="custom">Custom Pattern</option>
          </select>
        </div>
        <div class="option-group" id="customNameGroup" style="display: none;">
          <label class="option-label">Custom Name</label>
          <input type="text" id="customName" class="option-input" placeholder="document_{part}" value="document_{part}">
          <div class="range-examples">
            Use {part} for part number, {page} for start page
          </div>
        </div>
        <div class="option-group">
          <div class="option-checkbox">
            <input type="checkbox" id="zipOutput" checked>
            <label for="zipOutput">Download as ZIP file</label>
          </div>
          <div class="option-checkbox">
            <input type="checkbox" id="optimizeOutput">
            <label for="optimizeOutput">Optimize file size</label>
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
      <button class="case-button" data-action="split" id="splitBtn" disabled>Split PDF</button>
      <button class="case-button success" data-action="download" id="downloadBtn" disabled>Download All</button>
      <button class="case-button warning" data-action="preview" id="previewBtn">Preview Split</button>
      <button class="case-button secondary" data-action="clear">Clear All</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>How It Works</h2>

      <h3>Step 1: Select PDF File</h3>
      <div class="example-text">• Click "Select PDF File" or drag and drop a file
• Only one PDF file can be processed at a time
• Maximum file size: 100 MB</div>

      <h3>Step 2: Choose Split Method</h3>
      <div class="example-text">• Split by Range: Define custom page ranges
• Extract Pages: Select specific pages to extract
• Split Every N Pages: Divide into equal parts
• Split by Bookmarks: Use document structure</div>

      <h3>Step 3: Split & Download</h3>
      <div class="example-text">• Click "Split PDF" to process your file
• Wait for processing to complete
• Download individual files or ZIP archive</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online PDF Splitter - Split PDF Files into Multiple Documents</h2>

    <p>Need to divide a large PDF document into smaller files? Our free <strong>online PDF Splitter tool</strong> makes it incredibly easy to split PDF files by pages, ranges, or extract specific pages. Whether you're separating chapters from a book, extracting specific pages from a report, or dividing a large document for easier sharing, this tool handles everything seamlessly. There's no software to install, no watermarks, and your files remain completely private - all processing happens securely in your browser.</p>

    <h3>How to Split PDF Files (Step-by-Step):</h3>
    <ul>
      <li><strong>Select File:</strong> Click the "Select PDF File" button or simply drag and drop your PDF file into the upload area.</li>
      <li><strong>Choose Split Method:</strong> Select from four different splitting methods: by page ranges, extract specific pages, split every N pages, or by bookmarks.</li>
      <li><strong>Configure Options:</strong> Set your preferred splitting parameters and output file naming conventions.</li>
      <li><strong>Split & Download:</strong> Click the "Split PDF" button to process your file, then download the results as individual files or a ZIP archive.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you have a 100-page business report that contains separate sections for executive summary, market analysis, financial data, and appendices. Instead of sending the entire document to different departments, you can use our PDF Splitter to extract only the relevant sections for each team. The marketing team receives just the market analysis, finance gets the financial data, and executives get the summary - each as a separate, focused PDF file.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Students:</strong> Extract specific chapters from textbooks or separate assignments from compiled documents.</li>
      <li><strong>Professionals:</strong> Divide large reports, proposals, or presentations into manageable sections for different stakeholders.</li>
      <li><strong>Researchers:</strong> Split research papers or articles from compiled journals and publications.</li>
      <li><strong>Administrative Staff:</strong> Separate scanned documents, forms, and records from combined files.</li>
      <li><strong>Publishers:</strong> Extract sample chapters or specific sections from books and publications.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: What is the maximum file size I can split?</strong><br>
      A: You can split PDF files up to 100 MB in size. For larger files, consider using desktop software or compress the PDF first.</p>

    <p><strong>Q: Will the quality of my PDF be affected by splitting?</strong><br>
      A: No, the splitter preserves the original quality of your PDF file. Text remains sharp and images maintain their resolution.</p>

    <p><strong>Q: Is my data secure when using this PDF splitter?</strong><br>
      A: Absolutely. Your PDF files are processed entirely in your browser and never uploaded to any server. This means your documents remain completely private and secure.</p>

    <p><strong>Q: Can I split a PDF into individual pages?</strong><br>
      A: Yes, you can use the "Split Every N Pages" method and set N to 1, or use the "Extract Pages" method to select all pages individually.</p>

    <p><strong>Q: Do I need to create an account or pay to use this tool?</strong><br>
      A: No, this is a completely free tool with no registration required. There are no hidden fees or watermarks.</p>

    <h3>Why Choose Our PDF Splitter?</h3>
    <p>Our <strong>online PDF Splitter</strong> stands out for its flexibility, speed, and privacy. Unlike many online tools, we don't upload your files to external servers - all processing happens locally in your browser. This ensures maximum security for your sensitive documents. The tool offers multiple splitting methods to accommodate various use cases and works on any device with a modern web browser.</p>

    <h3>Common Applications of PDF Splitting</h3>
    <p>PDF splitting has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Academic Use:</strong> Extract specific chapters from textbooks or separate research papers from compilations</li>
      <li><strong>Business Use:</strong> Divide large reports into sections for different departments or extract specific pages from contracts</li>
      <li><strong>Personal Use:</strong> Separate scanned family documents, receipts, or important pages from combined files</li>
      <li><strong>Legal Use:</strong> Extract specific exhibits, affidavits, or sections from large case files</li>
      <li><strong>Real Estate:</strong> Separate different property documents, contracts, and disclosure statements from combined files</li>
    </ul>
  </div>
</div>

<!-- Preview Modal -->
<div id="previewModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Split Preview</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div id="previewContent">
        <div style="text-align: center; padding: 20px;">
          <i class="fas fa-file-pdf" style="font-size: 4rem; color: #e74c3c; margin-bottom: 20px;"></i>
          <h4>Split Preview</h4>
          <p>Preview how your PDF will be split based on your current settings.</p>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closePreview">Close</button>
      <button class="modal-button primary" id="splitFromPreview">Split PDF</button>
    </div>
  </div>
</div>

<script>
  // Global variables
  let currentPdfFile = null;
  let pdfDoc = null;
  let totalPages = 0;
  let splitResults = [];
  let selectedPages = new Set();

  document.addEventListener('DOMContentLoaded', function () {
    const fileUpload = document.getElementById('fileUpload');
    const selectFileBtn = document.getElementById('selectFileBtn');
    const dropArea = document.getElementById('dropArea');
    const fileList = document.getElementById('fileList');
    const alertContainer = document.getElementById('alertContainer');
    const splitBtn = document.getElementById('splitBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const previewBtn = document.getElementById('previewBtn');
    const progressSection = document.getElementById('progressSection');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    // Method tabs
    const methodTabs = document.querySelectorAll('.method-tab');
    const methodContents = document.querySelectorAll('.method-content');
    
    // Modal elements
    const previewModal = document.getElementById('previewModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const closePreview = document.getElementById('closePreview');
    const splitFromPreview = document.getElementById('splitFromPreview');
    
    // Output options
    const namingPattern = document.getElementById('namingPattern');
    const customNameGroup = document.getElementById('customNameGroup');
    const customName = document.getElementById('customName');
    
    // Split options
    const pagesPerSplit = document.getElementById('pagesPerSplit');
    const splitPreview = document.getElementById('splitPreview');
    const pageRanges = document.getElementById('pageRanges');
    const extractPages = document.getElementById('extractPages');
    
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
        handleFiles(files);
      }
    }

    // Method tab switching
    methodTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const method = this.getAttribute('data-method');
        
        // Update active tab
        methodTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // Show corresponding content
        methodContents.forEach(content => {
          content.classList.remove('active');
          if (content.id === `${method}-method`) {
            content.classList.add('active');
          }
        });
        
        // Update UI based on method
        updateSplitPreview();
      });
    });

    // Output naming pattern change
    namingPattern.addEventListener('change', function() {
      if (this.value === 'custom') {
        customNameGroup.style.display = 'flex';
      } else {
        customNameGroup.style.display = 'none';
      }
    });

    // Pages per split change
    pagesPerSplit.addEventListener('input', updateSplitPreview);

    // Page ranges and extract pages input changes
    pageRanges.addEventListener('input', updateSplitPreview);
    extractPages.addEventListener('input', function() {
      // Update selected pages from input
      updateSelectedPagesFromInput();
      updateSplitPreview();
    });

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

    // Split from preview
    splitFromPreview.addEventListener('click', function() {
      previewModal.style.display = 'none';
      splitPdf();
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === previewModal) {
        previewModal.style.display = 'none';
      }
    });

    // Action buttons
    document.querySelectorAll('.case-button').forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handlePdfAction(action);
      });
    });

    function handleFileSelect(e) {
      const files = e.target.files;
      handleFiles(files);
    }

    function handleFiles(files) {
      if (files.length === 0) return;

      const file = files[0];
      
      // Check if file is PDF
      if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
        showAlert(`"${file.name}" is not a PDF file. Please select a PDF file.`, 'error');
        return;
      }
      
      // Check file size (max 100MB)
      if (file.size > 100 * 1024 * 1024) {
        showAlert(`"${file.name}" is too large. Maximum file size is 100MB.`, 'error');
        return;
      }
      
      // Clear previous file
      clearFile();
      
      // Set current file
      currentPdfFile = file;
      loadPdfFile(file);
    }

    async function loadPdfFile(file) {
      try {
        showAlert('Loading PDF file...', 'info');
        
        const arrayBuffer = await readFileAsArrayBuffer(file);
        const { PDFDocument } = PDFLib;
        pdfDoc = await PDFDocument.load(arrayBuffer);
        totalPages = pdfDoc.getPageCount();
        
        // Update UI
        updateFileInfo(file);
        renderFileList();
        generatePageThumbnails();
        updateSplitPreview();
        updateUI();
        
        showAlert(`PDF loaded successfully! ${totalPages} pages detected.`, 'success');
        
      } catch (error) {
        console.error('Error loading PDF:', error);
        showAlert(`Failed to load PDF: ${error.message}`, 'error');
        clearFile();
      }
    }

    function updateFileInfo(file) {
      document.getElementById('fileName').textContent = file.name;
      document.getElementById('pageCount').textContent = totalPages;
      document.getElementById('fileSize').textContent = formatFileSize(file.size);
    }

    function renderFileList() {
      if (!currentPdfFile) {
        fileList.innerHTML = `
          <div class="empty-state">
            <i class="fas fa-folder-open"></i>
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
            <div class="file-name">${currentPdfFile.name}</div>
            <div class="file-size">${formatFileSize(currentPdfFile.size)} • ${totalPages} pages</div>
          </div>
          <div class="file-actions">
            <button class="file-action-btn remove-file" onclick="removeFile()">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      `;
    }

    function generatePageThumbnails() {
      const thumbnailsContainer = document.getElementById('pageThumbnails');
      thumbnailsContainer.innerHTML = '';
      
      for (let i = 1; i <= totalPages; i++) {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'page-thumbnail';
        thumbnail.setAttribute('data-page', i);
        
        const pageNumber = document.createElement('div');
        pageNumber.className = 'page-number';
        pageNumber.textContent = i;
        
        thumbnail.appendChild(pageNumber);
        
        thumbnail.addEventListener('click', function() {
          this.classList.toggle('selected');
          const pageNum = parseInt(this.getAttribute('data-page'));
          
          if (this.classList.contains('selected')) {
            selectedPages.add(pageNum);
          } else {
            selectedPages.delete(pageNum);
          }
          
          // Update extract pages input
          updateExtractPagesInput();
          updateSplitPreview();
        });
        
        thumbnailsContainer.appendChild(thumbnail);
      }
    }

    function updateExtractPagesInput() {
      const pagesArray = Array.from(selectedPages).sort((a, b) => a - b);
      document.getElementById('extractPages').value = pagesArray.join(', ');
    }

    function updateSelectedPagesFromInput() {
      const pagesText = document.getElementById('extractPages').value.trim();
      if (!pagesText) {
        selectedPages.clear();
        updateThumbnailSelection();
        return;
      }

      const newSelectedPages = new Set();
      const parts = pagesText.split(',');
      
      parts.forEach(part => {
        part = part.trim();
        if (!part) return;
        
        if (part.includes('-')) {
          const rangeParts = part.split('-');
          const start = parseInt(rangeParts[0].trim());
          const end = parseInt(rangeParts[1].trim());
          
          if (!isNaN(start) && !isNaN(end)) {
            for (let i = start; i <= end; i++) {
              if (i >= 1 && i <= totalPages) {
                newSelectedPages.add(i);
              }
            }
          }
        } else {
          const page = parseInt(part);
          if (!isNaN(page) && page >= 1 && page <= totalPages) {
            newSelectedPages.add(page);
          }
        }
      });
      
      selectedPages = newSelectedPages;
      updateThumbnailSelection();
    }

    function updateThumbnailSelection() {
      const thumbnails = document.querySelectorAll('.page-thumbnail');
      thumbnails.forEach(thumbnail => {
        const pageNum = parseInt(thumbnail.getAttribute('data-page'));
        if (selectedPages.has(pageNum)) {
          thumbnail.classList.add('selected');
        } else {
          thumbnail.classList.remove('selected');
        }
      });
    }

    function updateSplitPreview() {
      if (!totalPages) return;
      
      const activeMethod = document.querySelector('.method-tab.active').getAttribute('data-method');
      let outputCount = 0;
      
      switch (activeMethod) {
        case 'every':
          const n = parseInt(pagesPerSplit.value) || 1;
          outputCount = Math.ceil(totalPages / n);
          splitPreview.textContent = `Will create ${outputCount} documents`;
          break;
          
        case 'pages':
          if (selectedPages.size > 0) {
            outputCount = selectedPages.size;
          } else {
            const pagesText = document.getElementById('extractPages').value.trim();
            if (pagesText) {
              const pagesArray = pagesText.split(',').filter(p => p.trim());
              outputCount = pagesArray.length;
            } else {
              outputCount = 1;
            }
          }
          break;
          
        case 'range':
          const rangeText = document.getElementById('pageRanges').value.trim();
          if (rangeText) {
            const ranges = rangeText.split(',').filter(r => r.trim());
            outputCount = ranges.length;
          } else {
            outputCount = 1;
          }
          break;
          
        case 'bookmarks':
          outputCount = totalPages; // Default to one per page for bookmarks
          break;
      }
      
      document.getElementById('outputCount').textContent = outputCount || 1;
    }

    function updateUI() {
      splitBtn.disabled = !currentPdfFile;
      downloadBtn.disabled = splitResults.length === 0;
      // Preview button is always enabled if we have a file
      previewBtn.disabled = !currentPdfFile;
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
        case 'split':
          splitPdf();
          break;

        case 'download':
          downloadSplitPdfs();
          break;

        case 'preview':
          previewSplit();
          break;

        case 'clear':
          clearAll();
          break;
      }
    }

    function previewSplit() {
      if (!currentPdfFile) {
        showAlert('Please select a PDF file first.', 'error');
        return;
      }

      try {
        const activeMethod = document.querySelector('.method-tab.active').getAttribute('data-method');
        let previewHTML = '';
        
        switch (activeMethod) {
          case 'range':
            previewHTML = generateRangePreview();
            break;
          case 'pages':
            previewHTML = generatePagesPreview();
            break;
          case 'every':
            previewHTML = generateEveryPreview();
            break;
          case 'bookmarks':
            previewHTML = generateBookmarksPreview();
            break;
        }
        
        document.getElementById('previewContent').innerHTML = previewHTML;
        previewModal.style.display = 'block';
        
      } catch (error) {
        console.error('Preview error:', error);
        showAlert('Failed to generate preview. Please check your input.', 'error');
      }
    }

    function generateRangePreview() {
      const rangeText = document.getElementById('pageRanges').value.trim();
      if (!rangeText) {
        return '<div style="text-align: center; padding: 20px; color: #666;">Please enter page ranges to see preview</div>';
      }
      
      let html = '<h4 style="margin-bottom: 20px; color: var(--primary);">Split by Range Preview</h4>';
      const ranges = rangeText.split(',').filter(r => r.trim());
      
      if (ranges.length === 0) {
        return '<div style="text-align: center; padding: 20px; color: #666;">Please enter valid page ranges</div>';
      }
      
      html += `<p style="margin-bottom: 15px; color: #666;">Your PDF will be split into <strong>${ranges.length}</strong> document(s):</p>`;
      html += '<div style="max-height: 400px; overflow-y: auto;">';
      
      ranges.forEach((range, index) => {
        range = range.trim();
        if (!range) return;
        
        let pages = [];
        
        if (range.includes('-')) {
          const parts = range.split('-');
          const start = parseInt(parts[0].trim());
          const end = parseInt(parts[1].trim());
          
          if (!isNaN(start) && !isNaN(end)) {
            for (let i = start; i <= end; i++) {
              if (i >= 1 && i <= totalPages) {
                pages.push(i);
              }
            }
          }
        } else {
          const page = parseInt(range);
          if (!isNaN(page) && page >= 1 && page <= totalPages) {
            pages.push(page);
          }
        }
        
        if (pages.length > 0) {
          const filename = generateFilename(`range_${index + 1}`, index + 1, pages[0]);
          
          html += `
            <div class="preview-document">
              <div class="preview-document-header">
                <span class="preview-document-title">${filename}</span>
                <span class="preview-document-pages">${pages.length} page(s)</span>
              </div>
              <div>Pages: ${range}</div>
              <div class="preview-page-list">
                ${pages.map(page => `<span class="preview-page">${page}</span>`).join('')}
              </div>
            </div>
          `;
        }
      });
      
      html += '</div>';
      return html;
    }

    function generatePagesPreview() {
      let pagesText = document.getElementById('extractPages').value.trim();
      let pagesArray = [];
      
      if (pagesText) {
        // Parse from input
        const parts = pagesText.split(',');
        parts.forEach(part => {
          part = part.trim();
          if (!part) return;
          
          if (part.includes('-')) {
            const rangeParts = part.split('-');
            const start = parseInt(rangeParts[0].trim());
            const end = parseInt(rangeParts[1].trim());
            
            if (!isNaN(start) && !isNaN(end)) {
              for (let i = start; i <= end; i++) {
                if (i >= 1 && i <= totalPages) {
                  pagesArray.push(i);
                }
              }
            }
          } else {
            const page = parseInt(part);
            if (!isNaN(page) && page >= 1 && page <= totalPages) {
              pagesArray.push(page);
            }
          }
        });
      } else if (selectedPages.size > 0) {
        // Use selected thumbnails
        pagesArray = Array.from(selectedPages).sort((a, b) => a - b);
      } else {
        return '<div style="text-align: center; padding: 20px; color: #666;">Please select pages to extract</div>';
      }
      
      if (pagesArray.length === 0) {
        return '<div style="text-align: center; padding: 20px; color: #666;">No valid pages selected</div>';
      }
      
      let html = '<h4 style="margin-bottom: 20px; color: var(--primary);">Extract Pages Preview</h4>';
      html += `<p style="margin-bottom: 15px; color: #666;">Your PDF will be split into <strong>${pagesArray.length}</strong> individual page(s):</p>`;
      html += '<div style="max-height: 400px; overflow-y: auto;">';
      
      pagesArray.forEach((page, index) => {
        const filename = generateFilename(`page_${page}`, index + 1, page);
        
        html += `
          <div class="preview-document">
            <div class="preview-document-header">
              <span class="preview-document-title">${filename}</span>
              <span class="preview-document-pages">1 page</span>
            </div>
            <div>Page: ${page}</div>
            <div class="preview-page-list">
              <span class="preview-page">${page}</span>
            </div>
          </div>
        `;
      });
      
      html += '</div>';
      return html;
    }

    function generateEveryPreview() {
      const n = parseInt(pagesPerSplit.value) || 1;
      const numDocuments = Math.ceil(totalPages / n);
      
      if (numDocuments === 0) {
        return '<div style="text-align: center; padding: 20px; color: #666;">Invalid split configuration</div>';
      }
      
      let html = '<h4 style="margin-bottom: 20px; color: var(--primary);">Split Every N Pages Preview</h4>';
      html += `<p style="margin-bottom: 15px; color: #666;">Your PDF will be split into <strong>${numDocuments}</strong> document(s), each containing <strong>${n}</strong> page(s):</p>`;
      html += '<div style="max-height: 400px; overflow-y: auto;">';
      
      for (let i = 0; i < numDocuments; i++) {
        const startPage = i * n + 1;
        const endPage = Math.min((i + 1) * n, totalPages);
        const pagesInDoc = endPage - startPage + 1;
        const pages = [];
        
        for (let j = startPage; j <= endPage; j++) {
          pages.push(j);
        }
        
        const filename = generateFilename(`part_${i + 1}`, i + 1, startPage);
        
        html += `
          <div class="preview-document">
            <div class="preview-document-header">
              <span class="preview-document-title">${filename}</span>
              <span class="preview-document-pages">${pagesInDoc} page(s)</span>
            </div>
            <div>Pages: ${startPage}-${endPage}</div>
            <div class="preview-page-list">
              ${pages.map(page => `<span class="preview-page">${page}</span>`).join('')}
            </div>
          </div>
        `;
      }
      
      html += '</div>';
      return html;
    }

    function generateBookmarksPreview() {
      let html = '<h4 style="margin-bottom: 20px; color: var(--primary);">Split by Bookmarks Preview</h4>';
      html += `
        <div style="text-align: center; padding: 20px;">
          <i class="fas fa-bookmark" style="font-size: 3rem; color: var(--primary); margin-bottom: 20px;"></i>
          <p>This feature will split your PDF based on its bookmark structure.</p>
          <p>Each major section defined by bookmarks will become a separate document.</p>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-top: 15px;">
            <strong>Note:</strong> The exact number of output files depends on your PDF's bookmark structure.
            Since we cannot extract bookmarks in the browser, this will split into individual pages as a fallback.
          </div>
        </div>
      `;
      return html;
    }

    function generateFilename(baseName, partNumber, startPage) {
      const pattern = namingPattern.value;
      let filename = '';
      
      switch (pattern) {
        case 'original':
          const originalName = currentPdfFile.name.replace('.pdf', '');
          filename = `${originalName}_part${partNumber}.pdf`;
          break;
          
        case 'sequential':
          filename = `document_${partNumber}.pdf`;
          break;
          
        case 'custom':
          let custom = customName.value || 'document_{part}';
          custom = custom.replace(/{part}/g, partNumber);
          custom = custom.replace(/{page}/g, startPage);
          filename = `${custom}.pdf`;
          break;
          
        default:
          filename = `${baseName}.pdf`;
      }
      
      return filename;
    }

    async function splitPdf() {
      if (!currentPdfFile || !pdfDoc) {
        showAlert('Please select a PDF file first.', 'error');
        return;
      }

      try {
        // Show progress
        progressSection.style.display = 'block';
        progressFill.style.width = '0%';
        progressText.textContent = 'Initializing PDF splitter...';

        const { PDFDocument } = PDFLib;
        const activeMethod = document.querySelector('.method-tab.active').getAttribute('data-method');
        
        splitResults = [];
        let splitConfigs = [];

        // Parse split configuration based on active method
        switch (activeMethod) {
          case 'range':
            splitConfigs = parseRangeInput();
            break;
            
          case 'pages':
            splitConfigs = parsePagesInput();
            break;
            
          case 'every':
            splitConfigs = parseEveryInput();
            break;
            
          case 'bookmarks':
            splitConfigs = await parseBookmarksInput();
            break;
        }

        if (splitConfigs.length === 0) {
          throw new Error('No valid split configuration found. Please check your input.');
        }

        // Process each split configuration
        for (let i = 0; i < splitConfigs.length; i++) {
          const config = splitConfigs[i];
          
          // Update progress
          const progress = Math.floor((i / splitConfigs.length) * 80);
          progressFill.style.width = progress + '%';
          progressText.textContent = `Creating document ${i + 1}/${splitConfigs.length}...`;

          try {
            const newPdf = await PDFDocument.create();
            
            // Copy pages from original PDF
            const pages = await newPdf.copyPages(pdfDoc, config.pages);
            pages.forEach(page => {
              newPdf.addPage(page);
            });

            // Save the new PDF
            const pdfBytes = await newPdf.save();
            
            // Generate filename
            const filename = generateFilename(config.name || `part_${i + 1}`, i + 1, config.pages[0] + 1);
            
            splitResults.push({
              bytes: pdfBytes,
              filename: filename,
              pages: config.pages.map(p => p + 1), // Convert to 1-based for display
              size: pdfBytes.length
            });

          } catch (error) {
            console.error(`Error creating document ${i + 1}:`, error);
            throw new Error(`Failed to create document ${i + 1}: ${error.message}`);
          }
        }

        // Complete progress
        progressFill.style.width = '100%';
        progressText.textContent = `Split completed! Created ${splitResults.length} documents.`;
        
        showAlert(`Successfully split PDF into ${splitResults.length} documents!`, 'success');
        
        // Update output count
        document.getElementById('outputCount').textContent = splitResults.length;
        
        // Enable download button
        downloadBtn.disabled = false;
        
        // Hide progress after a delay
        setTimeout(() => {
          progressSection.style.display = 'none';
        }, 2000);

      } catch (error) {
        console.error('Split error:', error);
        progressSection.style.display = 'none';
        showAlert(`Split failed: ${error.message}`, 'error');
      }
    }

    function parseRangeInput() {
      const rangeText = document.getElementById('pageRanges').value.trim();
      if (!rangeText) {
        throw new Error('Please enter page ranges');
      }

      const configs = [];
      const ranges = rangeText.split(',').filter(r => r.trim());
      
      ranges.forEach((range, index) => {
        range = range.trim();
        if (!range) return;
        
        let start, end;
        
        if (range.includes('-')) {
          // Range like "1-5"
          const parts = range.split('-');
          start = parseInt(parts[0].trim()) - 1; // Convert to 0-based
          end = parseInt(parts[1].trim()) - 1;
          
          if (isNaN(start) || isNaN(end) || start < 0 || end >= totalPages || start > end) {
            throw new Error(`Invalid range: ${range}. Please use valid page numbers.`);
          }
        } else {
          // Single page like "3"
          start = end = parseInt(range.trim()) - 1;
          
          if (isNaN(start) || start < 0 || start >= totalPages) {
            throw new Error(`Invalid page: ${range}. Please use valid page numbers.`);
          }
        }
        
        const pages = [];
        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
        
        configs.push({
          pages: pages,
          name: `range_${index + 1}`
        });
      });
      
      return configs;
    }

    function parsePagesInput() {
      let pagesText = document.getElementById('extractPages').value.trim();
      let pagesArray = [];
      
      // Parse from input or use selected pages
      if (pagesText) {
        const parts = pagesText.split(',');
        parts.forEach(part => {
          part = part.trim();
          if (!part) return;
          
          if (part.includes('-')) {
            const rangeParts = part.split('-');
            const start = parseInt(rangeParts[0].trim());
            const end = parseInt(rangeParts[1].trim());
            
            if (!isNaN(start) && !isNaN(end)) {
              for (let i = start; i <= end; i++) {
                if (i >= 1 && i <= totalPages) {
                  pagesArray.push(i - 1); // Convert to 0-based
                }
              }
            }
          } else {
            const page = parseInt(part);
            if (!isNaN(page) && page >= 1 && page <= totalPages) {
              pagesArray.push(page - 1); // Convert to 0-based
            }
          }
        });
      } else if (selectedPages.size > 0) {
        pagesArray = Array.from(selectedPages).map(p => p - 1); // Convert to 0-based
      } else {
        throw new Error('Please select pages to extract');
      }
      
      // Create individual configs for each page
      const configs = [];
      pagesArray.sort((a, b) => a - b).forEach((page, index) => {
        configs.push({
          pages: [page],
          name: `page_${page + 1}`
        });
      });
      
      return configs;
    }

    function parseEveryInput() {
      const n = parseInt(pagesPerSplit.value) || 1;
      
      if (n < 1 || n > totalPages) {
        throw new Error(`Invalid pages per split: ${n}. Must be between 1 and ${totalPages}.`);
      }

      const configs = [];
      
      for (let i = 0; i < totalPages; i += n) {
        const end = Math.min(i + n, totalPages);
        const pages = [];
        
        for (let j = i; j < end; j++) {
          pages.push(j);
        }
        
        configs.push({
          pages: pages,
          name: `part_${Math.floor(i / n) + 1}`
        });
      }
      
      return configs;
    }

    async function parseBookmarksInput() {
      // Fallback: split into individual pages since we can't extract bookmarks in browser
      showAlert('Using page-based splitting as fallback (bookmark extraction requires server-side processing).', 'info');
      
      const configs = [];
      for (let i = 0; i < totalPages; i++) {
        configs.push({
          pages: [i],
          name: `page_${i + 1}`
        });
      }
      
      return configs;
    }

    function downloadSplitPdfs() {
      if (splitResults.length === 0) {
        showAlert('No split results available. Please split a PDF first.', 'error');
        return;
      }

      try {
        const zipOutput = document.getElementById('zipOutput').checked;
        
        if (zipOutput && splitResults.length > 1) {
          // Download as ZIP
          downloadAsZip();
        } else {
          // Download individual files
          if (splitResults.length === 1) {
            // Single file - download directly
            const result = splitResults[0];
            download(result.bytes, result.filename, "application/pdf");
          } else {
            // Multiple files - download one by one
            splitResults.forEach((result, index) => {
              setTimeout(() => {
                download(result.bytes, result.filename, "application/pdf");
              }, index * 100);
            });
          }
        }
        
        showAlert(`Downloading ${splitResults.length} file(s)...`, 'info');
        
      } catch (error) {
        console.error('Download error:', error);
        showAlert('Failed to download files. Please try again.', 'error');
      }
    }

    function downloadAsZip() {
      const zip = new JSZip();
      
      splitResults.forEach(result => {
        zip.file(result.filename, result.bytes);
      });
      
      zip.generateAsync({ type: "blob" }).then(function(content) {
        const originalName = currentPdfFile.name.replace('.pdf', '');
        download(content, `${originalName}_split.zip`, "application/zip");
      });
    }

    function clearFile() {
      currentPdfFile = null;
      pdfDoc = null;
      totalPages = 0;
      selectedPages.clear();
      renderFileList();
      updateUI();
      
      document.getElementById('fileName').textContent = 'None';
      document.getElementById('pageCount').textContent = '0';
      document.getElementById('fileSize').textContent = '0 MB';
      document.getElementById('outputCount').textContent = '0';
    }

    function clearAll() {
      // Clean up blob URLs
      splitResults = [];
      
      clearFile();
      document.getElementById('pageRanges').value = '';
      document.getElementById('extractPages').value = '';
      document.getElementById('pagesPerSplit').value = '1';
      document.getElementById('pageThumbnails').innerHTML = '';
      
      showAlert('All cleared.', 'info');
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

    // File reader helper function
    function readFileAsArrayBuffer(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
      });
    }

    // Make functions available globally for onclick handlers
    window.removeFile = function() {
      clearFile();
      showAlert('File removed.', 'info');
    };

    // Initialize UI
    updateUI();
  });
</script>