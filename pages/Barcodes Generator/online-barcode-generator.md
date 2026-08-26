---
layout: default
title: "Online Barcode Generator - Create 1D Linear Barcodes"
permalink: /online-barcode-generator-create-1d-linear-barcodes/
---


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Online Barcode Generator - Create 1D Linear Barcodes</title>
<meta name="description"
  content="Free online barcode generator tool. Create various 1D linear barcode types including UPC-A, EAN-13, Code 128, Code 39, and more for retail, inventory, and logistics.">
<meta name="keywords"
  content="barcode generator, 1d barcode, linear barcode, UPC-A, EAN-13, Code 128, Code 39, barcode creator, inventory barcode, retail barcode">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsbarcode/3.12.1/JsBarcode.all.min.js" integrity="sha512-fLmJPYDfCIAZ0gpG/iiIzPw113KquhzI1bxG0XhiLYyqm8Ax2lEiq1h1qv2vafH9tLzkjm4HYRWSeKoGFH4xIw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Barcode Generator Styles */
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

  .input-section {
    margin: 20px 0;
  }

  .input-section textarea {
    width: 100%;
    padding: 18px;
    border: 2px solid #e0e6ed;
    border-radius: 10px;
    font-size: 16px;
    min-height: 120px;
    resize: vertical;
    font-family: 'Courier New', monospace;
    transition: border-color 0.3s;
  }

  .input-section textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .barcode-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
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
  }

  .option-input {
    width: 100%;
  }

  .barcode-types-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 15px;
    margin: 20px 0;
  }

  .barcode-type-card {
    background: white;
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .barcode-type-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .barcode-type-card.active {
    background: #e3f2fd;
    border-left: 4px solid #2196f3;
  }

  .barcode-type-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .barcode-type-name {
    font-weight: 600;
    color: var(--primary);
    font-size: 1.1rem;
  }

  .barcode-type-example {
    font-family: 'Courier New', monospace;
    color: #666;
    font-size: 0.9rem;
  }

  .barcode-type-details {
    font-size: 0.85rem;
    color: #555;
    line-height: 1.4;
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

  .barcode-preview {
    margin: 30px 0;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .barcode-image {
    max-width: 100%;
    height: auto;
    margin: 20px 0;
    border: 1px solid #e0e0e0;
    padding: 15px;
    background: white;
  }

  .barcode-data {
    font-family: 'Courier New', monospace;
    background: #f8f9fa;
    padding: 15px;
    border-radius: 6px;
    margin: 15px 0;
    word-break: break-all;
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

  /* Responsive adjustments */
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

    .barcode-types-grid {
      grid-template-columns: 1fr;
    }

    .barcode-options {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Barcode Generator</h1>
  <p class="welcome-message">Create professional 1D linear barcodes for retail, inventory, logistics, and more. Generate UPC-A, EAN-13, Code 128, Code 39, and other barcode types instantly.</p>

  <div class="converter-section">
    <h2>1D / Linear Barcode Generator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Character Count: </span>
        <span id="charCount">0</span>
      </div>
      <div class="counter-item">
        <span>Barcode Type: </span>
        <span id="barcodeType">CODE128</span>
      </div>
      <div class="counter-item">
        <span>Data Length: </span>
        <span id="dataLength">0</span>
      </div>
      <div class="counter-item">
        <span>Status: </span>
        <span id="barcodeStatus">Ready</span>
      </div>
    </div>

    <div class="barcode-types-grid">
      <div class="barcode-type-card active" data-type="CODE128" data-example="Code128ABC123">
        <div class="barcode-type-header">
          <span class="barcode-type-name">Code 128</span>
          <span class="barcode-type-example">Code128ABC123</span>
        </div>
        <div class="barcode-type-details">High-density alphanumeric barcode — widely used in logistics, shipping, and warehouse labels.</div>
      </div>

      <div class="barcode-type-card" data-type="CODE128A" data-example="CODE128A123">
        <div class="barcode-type-header">
          <span class="barcode-type-name">Code 128A</span>
          <span class="barcode-type-example">CODE128A123</span>
        </div>
        <div class="barcode-type-details">Subset for uppercase letters, digits, and control chars.</div>
      </div>

      <div class="barcode-type-card" data-type="CODE128B" data-example="Code128Babc">
        <div class="barcode-type-header">
          <span class="barcode-type-name">Code 128B</span>
          <span class="barcode-type-example">Code128Babc</span>
        </div>
        <div class="barcode-type-details">Subset for upper/lowercase letters and digits.</div>
      </div>

      <div class="barcode-type-card" data-type="CODE128C" data-example="123456789012">
        <div class="barcode-type-header">
          <span class="barcode-type-name">Code 128C</span>
          <span class="barcode-type-example">123456789012</span>
        </div>
        <div class="barcode-type-details">Subset optimized for numeric pairs (00–99).</div>
      </div>

      <div class="barcode-type-card" data-type="EAN13" data-example="5901234123457">
        <div class="barcode-type-header">
          <span class="barcode-type-name">EAN-13</span>
          <span class="barcode-type-example">5901234123457</span>
        </div>
        <div class="barcode-type-details">13-digit retail barcode standard (international).</div>
      </div>

      <div class="barcode-type-card" data-type="EAN8" data-example="96385074">
        <div class="barcode-type-header">
          <span class="barcode-type-name">EAN-8</span>
          <span class="barcode-type-example">96385074</span>
        </div>
        <div class="barcode-type-details">Shorter 8-digit retail barcode used for small items.</div>
      </div>

      <div class="barcode-type-card" data-type="UPC" data-example="12345678905">
        <div class="barcode-type-header">
          <span class="barcode-type-name">UPC-A</span>
          <span class="barcode-type-example">12345678905</span>
        </div>
        <div class="barcode-type-details">12-digit numeric barcode used in USA/Canada retail.</div>
      </div>

      <div class="barcode-type-card" data-type="CODE39" data-example="CODE39EXAMPLE">
        <div class="barcode-type-header">
          <span class="barcode-type-name">CODE39</span>
          <span class="barcode-type-example">CODE39EXAMPLE</span>
        </div>
        <div class="barcode-type-details">Simple alphanumeric barcode (A–Z, 0–9, - . $ / + % space). Common in industry and inventory.</div>
      </div>

      <div class="barcode-type-card" data-type="ITF14" data-example="12345678901234">
        <div class="barcode-type-header">
          <span class="barcode-type-name">ITF-14</span>
          <span class="barcode-type-example">12345678901234</span>
        </div>
        <div class="barcode-type-details">Numeric-only barcode for outer cartons and packaging.</div>
      </div>

      <div class="barcode-type-card" data-type="MSI" data-example="123456">
        <div class="barcode-type-header">
          <span class="barcode-type-name">MSI (Modified Plessey)</span>
          <span class="barcode-type-example">123456</span>
        </div>
        <div class="barcode-type-details">Numeric barcode for inventory, retail shelf labels.</div>
      </div>

      <div class="barcode-type-card" data-type="codabar" data-example="A123456A">
        <div class="barcode-type-header">
          <span class="barcode-type-name">Codabar</span>
          <span class="barcode-type-example">A123456A</span>
        </div>
        <div class="barcode-type-details">Used in logistics, blood banks, libraries. Supports 0–9 and A–D.</div>
      </div>

      <div class="barcode-type-card" data-type="pharmacode" data-example="12345">
        <div class="barcode-type-header">
          <span class="barcode-type-name">Pharmacode</span>
          <span class="barcode-type-example">12345</span>
        </div>
        <div class="barcode-type-details">Binary barcode used on pharmaceutical packaging.</div>
      </div>
    </div>

    <div class="input-section">
      <h2>Barcode Data</h2>
      <textarea id="barcodeInput" rows="3" placeholder="Enter barcode data...">Code128ABC123</textarea>
      <div class="example-text" style="font-size: 0.9rem; color: #666; margin-top: 5px;">Example: <span id="currentExample">Code128ABC123</span></div>
    </div>

    <div class="barcode-options">
      <div class="option-group">
        <label class="option-label">Barcode Size</label>
        <select id="barcodeSize" class="option-select">
          <option value="1">Small</option>
          <option value="2" selected>Medium</option>
          <option value="3">Large</option>
          <option value="4">Extra Large</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Output Format</label>
        <select id="outputFormat" class="option-select">
          <option value="png" selected>PNG</option>
          <option value="svg">SVG</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Show Text</label>
        <select id="showText" class="option-select">
          <option value="true" selected>Yes</option>
          <option value="false">No</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Background Color</label>
        <input type="color" id="bgColor" class="option-input" value="#ffffff">
      </div>

      <div class="option-group">
        <label class="option-label">Foreground Color</label>
        <input type="color" id="fgColor" class="option-input" value="#000000">
      </div>
    </div>

    <div class="button-section">
      <button class="case-button success" data-action="generate">Generate Barcode</button>
      <button class="case-button" data-action="validate">Validate Data</button>
      <button class="case-button" data-action="copy">Copy Data</button>
      <button class="case-button warning" data-action="download">Download Barcode</button>
      <button class="case-button secondary" data-action="clear">Clear</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="barcode-preview">
      <h2>Barcode Preview</h2>
      <div id="barcodeOutput" class="barcode-data">Barcode will appear here after generation</div>
      <div id="barcodeImageContainer">
        <svg id="barcodeImage"></svg>
      </div>
      <div class="barcode-info">
        <div id="barcodeInfo">No barcode generated yet</div>
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
<div class="content-placeholder">
  <h2>Free Online Barcode Generator</h2>

  <p>A barcode is really just a number or a short string of text translated into a pattern a scanner can read faster than a human could type it. That's the whole idea, and it's why barcodes ended up everywhere — a library checking a book back in, a hospital confirming the right medication for the right patient, a warehouse worker scanning a pallet instead of reading a label by eye. This tool generates the common 1D barcode formats — Code 128, Code 39, UPC-A, EAN-13, ITF-14, Codabar, MSI Plessey, and Pharmacode — directly in your browser.</p>

  <h3>Picking the Right Format for the Job</h3>

  <p>The formats aren't interchangeable, and the right one depends on what you're actually encoding and where it needs to be scanned:</p>

  <ul>
    <li>Encoding only numbers, and need to pack in a fair amount of data? <strong>Code 128</strong> handles both letters and numbers efficiently and is the default choice for shipping labels and logistics.</li>
    <li>Need letters, numbers, and a few symbols, in an environment with older or simpler scanning equipment? <strong>Code 39</strong> is less space-efficient but extremely widely supported, which is why manufacturing and asset-tracking systems still lean on it.</li>
    <li>Labeling a retail product for supermarket checkout in North America? <strong>UPC-A</strong>. Selling internationally? <strong>EAN-13</strong>.</li>
    <li>Labeling shipping cartons or bulk packaging rather than individual retail units? <strong>ITF-14</strong> is built specifically for that.</li>
    <li>Working in a library, blood bank, or similar setting with legacy scanning systems? <strong>Codabar</strong> is the long-standing standard there.</li>
    <li>Managing warehouse shelving or basic inventory control? <strong>MSI Plessey</strong> still shows up in older inventory systems.</li>
    <li>Marking pharmaceutical packaging where space is extremely tight? <strong>Pharmacode</strong> was designed for exactly that constraint.</li>
  </ul>

  <p>If you're integrating with an existing scanner or system rather than starting from scratch, check what format that system already expects before generating anything — retrofitting the wrong barcode format is more work than choosing correctly up front.</p>

  <h3>Generating One</h3>

  <ol>
    <li>Pick the format from the list above based on your use case.</li>
    <li>Enter the data — numeric-only formats will reject letters, so match your input to what the format actually supports.</li>
    <li>Adjust bar width, height, and colors if you have specific printing requirements.</li>
    <li>Generate and download as PNG for standard use or SVG if the barcode needs to scale up for larger packaging.</li>
  </ol>

  <h3>Getting a Barcode That Actually Scans</h3>

  <p>A barcode that looks fine on a screen can still fail at the scanner, usually for one of a few avoidable reasons:</p>

  <ul>
    <li><strong>Quiet zone matters.</strong> Barcodes need clear empty space on either side — cropping too tight or placing other text right up against the edges is one of the most common causes of scan failures.</li>
    <li><strong>Don't shrink it past readability.</strong> Every format has a practical minimum size before the bars become too fine for a scanner (or a worn-out scanner, which is common in real warehouses) to resolve reliably.</li>
    <li><strong>Print resolution matters more than it seems.</strong> A barcode that looks crisp on a high-DPI screen can blur at low print resolution. If labels are being mass-printed, test one physical copy before committing to a full run.</li>
    <li><strong>Match the format to the scanner, not just the data.</strong> Some older handheld scanners are configured to read only specific formats. A perfectly valid Code 128 barcode won't scan on a reader that's only been set up for Code 39.</li>
  </ul>

  <h3>A Few Places These Actually Show Up</h3>

  <p>A handmade-goods seller scaling past a few dozen orders a month usually hits a point where tracking stock by memory stops working — generating Code 128 or UPC-A labels for each product line and scanning them at receiving and shipping solves that without buying inventory software. A hospital pharmacy uses barcodes on medication packaging as a final check against dispensing errors, usually paired with an electronic record rather than a public product catalog. A small publisher's warehouse might use ITF-14 on shipping cartons while the individual books inside carry their own separate ISBN barcodes — two different formats doing two different jobs on the same shipment.</p>

  <h3>Questions People Usually Have</h3>

  <p><strong>What's actually different between a 1D barcode and a QR code?</strong><br>
  A 1D barcode like the ones here stores data in a single line of varying-width bars, which limits how much it can hold. A QR code stores data in a two-dimensional grid, so it can hold far more — a full URL, for instance — in a smaller physical footprint.</p>

  <p><strong>Can I use these barcodes for a real commercial product?</strong><br>
  Yes, though for UPC-A and EAN-13 specifically, retailers and marketplaces that check product identifiers usually expect the underlying number to come from a registered GS1 company prefix, not just any number that happens to be the right length.</p>

  <p><strong>Why did my barcode scanner fail to read a code that looks correct?</strong><br>
  Almost always one of: the format doesn't match what the scanner is configured to read, the quiet zone around the barcode got cropped or covered, or the print size dropped below what that format needs to stay legible.</p>

  <p><strong>Is there a limit on how many barcodes I can generate?</strong><br>
  No — generate as many as the job requires, whether that's one label or several hundred for a full product catalog.</p>

  <p><strong>Does this tool store the data I enter?</strong><br>
  No. Barcode generation happens locally in your browser, so nothing you type is uploaded or retained anywhere.</p>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const barcodeInput = document.getElementById('barcodeInput');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const barcodeTypeCards = document.querySelectorAll('.barcode-type-card');
    const barcodeOutput = document.getElementById('barcodeOutput');
    const barcodeImage = document.getElementById('barcodeImage');
    const barcodeInfo = document.getElementById('barcodeInfo');
    const currentExample = document.getElementById('currentExample');
    
    // Barcode options
    const barcodeSize = document.getElementById('barcodeSize');
    const outputFormat = document.getElementById('outputFormat');
    const showText = document.getElementById('showText');
    const bgColor = document.getElementById('bgColor');
    const fgColor = document.getElementById('fgColor');
    
    // Current barcode type
    let currentBarcodeType = 'CODE128';
    let currentBarcodeExample = 'Code128ABC123';
    let generatedBarcodeData = '';

    // Initialize counters
    updateCounts();

    // Event listeners
    barcodeInput.addEventListener('input', updateCounts);

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleBarcodeAction(action);
      });
    });

    // Barcode type selection
    barcodeTypeCards.forEach(card => {
      card.addEventListener('click', function() {
        // Remove active class from all cards
        barcodeTypeCards.forEach(c => c.classList.remove('active'));
        // Add active class to clicked card
        this.classList.add('active');
        // Update current barcode type
        currentBarcodeType = this.getAttribute('data-type');
        currentBarcodeExample = this.getAttribute('data-example');
        // Update example text
        currentExample.textContent = currentBarcodeExample;
        // Update input with example if empty
        if (!barcodeInput.value.trim()) {
          barcodeInput.value = currentBarcodeExample;
        }
        updateCounts();
        validateBarcodeData();
      });
    });

    function updateCounts() {
      const data = barcodeInput.value;

      // Character count
      document.getElementById('charCount').textContent = data.length;

      // Barcode type
      document.getElementById('barcodeType').textContent = getBarcodeTypeName(currentBarcodeType);

      // Data length
      document.getElementById('dataLength').textContent = data.length;

      // Validate data for current barcode type
      validateBarcodeData();
    }

    function getBarcodeTypeName(type) {
      const typeNames = {
        'CODE128': 'Code 128',
        'CODE128A': 'Code 128A',
        'CODE128B': 'Code 128B',
        'CODE128C': 'Code 128C',
        'EAN13': 'EAN-13',
        'EAN8': 'EAN-8',
        'UPC': 'UPC-A',
        'CODE39': 'CODE39',
        'ITF14': 'ITF-14',
        'MSI': 'MSI Plessey',
        'codabar': 'Codabar',
        'pharmacode': 'Pharmacode'
      };
      return typeNames[type] || type;
    }

    function validateBarcodeData() {
      const data = barcodeInput.value;
      let isValid = true;
      let message = 'Data is valid for ' + getBarcodeTypeName(currentBarcodeType);

      // Validation rules for different barcode types
      switch(currentBarcodeType) {
        case 'UPC':
          if (data.length !== 12 || !/^\d+$/.test(data)) {
            isValid = false;
            message = 'UPC-A requires exactly 12 numeric digits';
          }
          break;
        case 'EAN13':
          if (data.length !== 13 || !/^\d+$/.test(data)) {
            isValid = false;
            message = 'EAN-13 requires exactly 13 numeric digits';
          }
          break;
        case 'EAN8':
          if (data.length !== 8 || !/^\d+$/.test(data)) {
            isValid = false;
            message = 'EAN-8 requires exactly 8 numeric digits';
          }
          break;
        case 'CODE39':
          if (!/^[A-Z0-9\-\.\$\+\/%\s]+$/.test(data.toUpperCase())) {
            isValid = false;
            message = 'CODE39 supports A-Z, 0-9, and symbols: - . $ + / % space';
          }
          break;
        case 'ITF14':
          if (!/^\d+$/.test(data) || (data.length < 12 || data.length > 14)) {
            isValid = false;
            message = 'ITF-14 requires 12-14 numeric digits';
          }
          break;
        case 'MSI':
          if (!/^\d+$/.test(data)) {
            isValid = false;
            message = 'MSI requires numeric digits only';
          }
          break;
        case 'codabar':
          if (!/^[A-D]?[0-9\-:\$\/\.\+]*[A-D]?$/.test(data)) {
            isValid = false;
            message = 'Codabar supports numbers and start/stop characters A, B, C, D';
          }
          break;
        case 'pharmacode':
          if (!/^\d+$/.test(data) || parseInt(data) < 3 || parseInt(data) > 131070) {
            isValid = false;
            message = 'Pharmacode requires numeric value between 3 and 131070';
          }
          break;
        // Code 128 variants have minimal validation as they support wide character sets
      }

      document.getElementById('barcodeStatus').textContent = isValid ? 'Valid' : 'Invalid';
      document.getElementById('barcodeStatus').style.color = isValid ? 'green' : 'red';

      return { isValid, message };
    }

    function handleBarcodeAction(action) {
      const data = barcodeInput.value;
      
      switch (action) {
        case 'generate':
          generateBarcode();
          break;

        case 'validate':
          const validation = validateBarcodeData();
          if (validation.isValid) {
            showAlert(validation.message, 'success');
          } else {
            showAlert(validation.message, 'error');
          }
          break;

        case 'copy':
          copyToClipboard(data);
          break;

        case 'download':
          if (!generatedBarcodeData) {
            showAlert('Please generate a barcode first.', 'error');
            return;
          }
          downloadBarcode();
          break;

        case 'clear':
          barcodeInput.value = '';
          barcodeOutput.textContent = 'Barcode will appear here after generation';
          barcodeImage.innerHTML = '';
          barcodeInfo.textContent = 'No barcode generated yet';
          generatedBarcodeData = '';
          updateCounts();
          break;
      }
    }

    function generateBarcode() {
      const data = barcodeInput.value;
      const validation = validateBarcodeData();

      if (!validation.isValid) {
        showAlert(validation.message, 'error');
        return;
      }

      try {
        // Clear previous barcode
        barcodeImage.innerHTML = '';
        
        // Generate new barcode using JsBarcode
        JsBarcode("#barcodeImage", data, {
          format: currentBarcodeType,
          width: parseFloat(barcodeSize.value),
          height: 60,
          displayValue: showText.value === 'true',
          lineColor: fgColor.value,
          background: bgColor.value,
          margin: 10
        });

        generatedBarcodeData = data;
        barcodeOutput.textContent = data;
        barcodeInfo.textContent = `Type: ${getBarcodeTypeName(currentBarcodeType)} | Data: ${data} | Size: ${barcodeSize.options[barcodeSize.selectedIndex].text}`;
        
        showAlert('Barcode generated successfully!', 'success');
      } catch (error) {
        showAlert('Error generating barcode: ' + error.message, 'error');
      }
    }

    function downloadBarcode() {
      const format = outputFormat.value;
      const svgElement = document.getElementById('barcodeImage');
      
      if (!svgElement || !svgElement.innerHTML) {
        showAlert('No barcode generated to download.', 'error');
        return;
      }

      try {
        if (format === 'svg') {
          // Download as SVG
          const svgData = new XMLSerializer().serializeToString(svgElement);
          const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
          const url = URL.createObjectURL(blob);
          downloadFile(url, `barcode_${currentBarcodeType}.svg`);
        } else if (format === 'png') {
          // Convert SVG to PNG for download
          const svgData = new XMLSerializer().serializeToString(svgElement);
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          const img = new Image();
          
          img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            
            const pngUrl = canvas.toDataURL('image/png');
            downloadFile(pngUrl, `barcode_${currentBarcodeType}.png`);
          };
          
          img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
        }
      } catch (error) {
        showAlert('Error downloading barcode: ' + error.message, 'error');
      }
    }

    function downloadFile(url, filename) {
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showAlert(`Barcode downloaded as ${filename}`, 'success');
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showAlert('Barcode data copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy data: ' + err, 'error');
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

      setTimeout(() => {
        if (alertDiv.parentNode) {
          alertDiv.remove();
        }
      }, 5000);
    }
  });
</script>