---
layout: default
title: "Free Online Barcode & QR Code Generator"
permalink: /free-online-barcode-qr-code-generator/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Barcode & QR Code Generator - Create Custom Barcodes Instantly</title>
<meta name="description"
  content="Free online barcode and QR code generator. Create custom barcodes, QR codes, Data Matrix, PDF417, and more instantly. No registration required.">
<meta name="keywords"
  content="barcode generator, QR code generator, free barcode maker, online barcode creator, QR code creator, Data Matrix, PDF417, Aztec code, barcode scanner, generate barcode">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<!-- Barcode Library -->
<script src="https://cdn.jsdelivr.net/npm/bwip-js@3.5.1/dist/bwip-js-min.js"></script>

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

  .input-group {
    margin-bottom: 20px;
  }

  .input-group label {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
    color: #2c3e50;
    font-size: 1.1rem;
  }

  .input-group input,
  .input-group select {
    width: 100%;
    padding: 14px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    font-size: 16px;
    transition: all 0.3s ease;
    background: white;
  }

  .input-group input:focus,
  .input-group select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .input-group input[type="number"] {
    width: 150px;
  }

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 30px 0;
  }

  .case-button {
    padding: 16px 10px;
    border: none;
    border-radius: 8px;
    background: var(--primary);
    color: white;
    font-size: 16px;
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

  .barcode-preview {
    background: white;
    border-radius: 10px;
    padding: 25px;
    margin: 30px 0;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    border: 1px solid #e0e6ed;
  }

  .barcode-preview h3 {
    color: #2c3e50;
    margin-bottom: 20px;
    font-size: 1.3rem;
  }

  #barcodeCanvas {
    max-width: 100%;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: white;
    padding: 15px;
    margin: 0 auto;
    display: block;
  }

  .code-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .info-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background: white;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .info-item span:first-child {
    font-weight: 600;
    color: var(--primary);
  }

  .info-item span:last-child {
    font-weight: bold;
    color: #2c3e50;
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

  .barcode-types {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
    margin: 15px 0;
  }

  .type-option {
    padding: 12px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    background: white;
  }

  .type-option:hover {
    border-color: var(--primary);
    background: #f0f8ff;
  }

  .type-option.active {
    border-color: var(--primary);
    background: var(--primary);
    color: white;
    font-weight: bold;
  }

  .type-option i {
    display: block;
    font-size: 24px;
    margin-bottom: 8px;
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

  .content-placeholder h3 {
    color: #34495e;
    margin-top: 25px;
    margin-bottom: 15px;
  }

  .examples {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .example-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .example-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .example-card h4 {
    color: var(--primary);
    margin-bottom: 10px;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .converter-container {
      padding: 15px;
    }

    .converter-container h1 {
      font-size: 2rem;
    }

    .converter-section {
      padding: 20px;
      margin-bottom: 30px;
    }

    .button-section {
      grid-template-columns: 1fr;
    }

    .barcode-types {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }

    .code-info {
      grid-template-columns: 1fr;
    }

    .example-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    .barcode-types {
      grid-template-columns: repeat(2, 1fr);
    }

    .input-group input[type="number"] {
      width: 100%;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Barcode & QR Code Generator</h1>
  <p class="welcome-message">Create custom barcodes and QR codes instantly. Supports 15+ barcode types including QR Code, Data Matrix, PDF417, Aztec Code, and more. No registration required.</p>

  <div class="converter-section">
    <h2>Barcode & QR Code Generator</h2>

    <div class="code-info">
      <div class="info-item">
        <span>Selected Type: </span>
        <span id="currentType">QR Code</span>
      </div>
      <div class="info-item">
        <span>Input Length: </span>
        <span id="inputLength">0</span>
      </div>
      <div class="info-item">
        <span>Scale Factor: </span>
        <span id="scaleValue">4</span>
      </div>
      <div class="info-item">
        <span>Status: </span>
        <span id="generationStatus">Ready</span>
      </div>
    </div>

    <div class="input-group">
      <label for="bcid">Barcode Type</label>
      <select id="bcid">
        <option value="qrcode" selected>QR Code</option>
        <option value="microqrcode">Micro QR Code</option>
        <option value="gs1qrcode">GS1 QR Code</option>
        <option value="datamatrix">Data Matrix</option>
        <option value="gs1datamatrix">GS1 Data Matrix</option>
        <option value="pdf417">PDF417</option>
        <option value="micropdf417">Micro PDF417</option>
        <option value="azteccode">Aztec Code</option>
        <option value="maxicode">MaxiCode</option>
        <option value="dotcode">DotCode</option>
        <option value="hanxin">Han Xin Code</option>
        <option value="codeone">Code One</option>
        <option value="gridmatrix">Grid Matrix Code</option>
        <option value="ultracode">Ultracode</option>
        <option value="vericode">VeriCode</option>
      </select>
    </div>

    <div class="input-group">
      <label for="text">Content / Text / URL <small>(Enter text, numbers, or URL)</small></label>
      <input type="text" id="text" placeholder="Enter text, URL, or data for barcode...">
    </div>

    <div class="input-group">
      <label for="scale">Size / Scale Factor <small>(1-10, higher = larger)</small></label>
      <input type="number" id="scale" min="1" max="10" value="4">
    </div>

    <div class="button-section">
      <button class="case-button" id="generateBtn">Generate Barcode</button>
      <button class="case-button success" id="downloadBtn">Download PNG</button>
      <button class="case-button secondary" id="clearBtn">Clear</button>
      <button class="case-button" id="sampleBtn">Load Sample</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="barcode-preview">
      <h3>Generated Barcode Preview</h3>
      <canvas id="barcodeCanvas"></canvas>
      <p id="previewNote" style="margin-top: 15px; color: #666; font-style: italic;">
        Your barcode will appear here after generation
      </p>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Barcode Type Examples & Use Cases</h2>
      <div class="example-grid">
        <div class="example-card">
          <h4><i class="fas fa-qrcode"></i> QR Code</h4>
          <p>Perfect for URLs, contact info, Wi-Fi credentials, and marketing materials. Scan with any smartphone camera.</p>
        </div>
        <div class="example-card">
          <h4><i class="fas fa-barcode"></i> Data Matrix</h4>
          <p>Used for small item labeling, electronics, healthcare, and logistics. Stores data in a compact matrix.</p>
        </div>
        <div class="example-card">
          <h4><i class="fas fa-file-pdf"></i> PDF417</h4>
          <p>2D barcode used for driver licenses, boarding passes, and shipping labels. Can store up to 1.1KB of data.</p>
        </div>
        <div class="example-card">
          <h4><i class="fas fa-th-large"></i> Aztec Code</h4>
          <p>Used in transportation tickets, airline boarding passes, and government documents. Doesn't require quiet zone.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->

<div class="content-placeholder">

  <h2>Free Online Barcode & QR Code Generator Tool</h2>

  <p>Barcodes and QR codes have become an essential part of everyday life. From shopping at a supermarket and tracking shipments to accessing restaurant menus and making digital payments, these technologies help businesses and individuals share information quickly and accurately. Our Free Online Barcode & QR Code Generator Tool is designed to make barcode creation simple, fast, and accessible to everyone.</p>

  <p>Whether you are a small business owner, marketer, developer, teacher, student, event organizer, warehouse manager, or simply someone who needs a QR code for personal use, this tool provides everything you need in one place. You can generate professional-quality QR Codes, Data Matrix codes, PDF417 barcodes, Aztec codes, Code 128 barcodes, Code 39 barcodes, and many other industry-standard formats without downloading software or creating an account.</p>

  <p>Unlike many online barcode generators that require subscriptions or place restrictions on usage, our tool is completely free. There are no watermarks, no hidden charges, and no limits on the number of barcodes you can create. Everything is processed directly inside your browser, helping protect your privacy and ensuring that your information remains secure.</p>

  <p>Whether you're creating a QR code for a website URL, generating inventory labels for products, producing shipping barcodes, or designing event tickets, our generator offers a reliable solution suitable for both personal and professional applications.</p>

  <h3>How to Generate Barcodes (Step-by-Step):</h3>

  <ul>
    <li><strong>Select Barcode Type:</strong> Start by choosing the barcode format that best matches your requirements. The tool supports more than 15 barcode formats including QR Code, Data Matrix, PDF417, Aztec Code, Code 128, Code 39, and various GS1 standards.</li>

```
<li><strong>Enter Your Data:</strong> Type or paste the information you want to encode. This may include text, numbers, URLs, email addresses, product identifiers, inventory codes, Wi-Fi credentials, or other information.</li>

<li><strong>Adjust Size:</strong> Use the size or scale controls to customize the barcode dimensions according to your needs. Larger sizes are recommended for posters and printed materials, while smaller sizes work well for product labels and packaging.</li>

<li><strong>Generate Instantly:</strong> Click the Generate button and the barcode will be created immediately. The tool processes the information in real time and displays a preview before download.</li>

<li><strong>Download and Use:</strong> Save the generated image as a high-quality PNG file. The barcode can then be added to websites, business cards, marketing materials, shipping labels, documents, packaging, and many other applications.</li>
```

  </ul>

  <h3>Real-Life Example & Use Case:</h3>

  <p>Imagine that you are organizing a large business conference with hundreds of attendees. You need a simple way to provide participants with event schedules, speaker information, venue maps, and registration details. Instead of printing dozens of pages for every attendee, you can generate a QR code that links directly to a dedicated event webpage.</p>

  <p>When attendees arrive, they simply scan the QR code using their smartphones and instantly access all the information they need. If any schedules change, you only need to update the webpage rather than reprinting materials. This saves time, reduces costs, and improves the overall attendee experience.</p>

  <p>Similarly, a retail business can use barcodes to manage inventory efficiently. Products can be assigned unique barcode identifiers, allowing staff to scan items quickly during stock counts, sales transactions, and warehouse operations. This reduces manual data entry and minimizes costly mistakes.</p>

  <p>A restaurant can create QR codes for digital menus, a teacher can create educational QR codes linking to online resources, and a freelancer can add a QR code to a business card that directs clients to a portfolio website. The possibilities are virtually endless.</p>

  <h3>Supported Barcode Types & Their Applications:</h3>

  <ul>
    <li><strong>QR Code:</strong> The world's most popular two-dimensional barcode. Perfect for website links, social media profiles, payment links, digital menus, contact information, app downloads, business cards, and marketing campaigns.</li>

```
<li><strong>Data Matrix:</strong> Frequently used in healthcare, electronics manufacturing, aerospace industries, and industrial tracking applications where small labels need to store a large amount of information.</li>

<li><strong>PDF417:</strong> Commonly found on identification cards, driver's licenses, transportation documents, airline boarding passes, and government-issued credentials.</li>

<li><strong>Aztec Code:</strong> Widely used for transportation systems, railway tickets, event tickets, and airline boarding passes because of its excellent error correction capabilities.</li>

<li><strong>Code 128:</strong> One of the most versatile barcode formats available. Often used in shipping, logistics, warehousing, asset management, and package tracking.</li>

<li><strong>Code 39:</strong> Popular in manufacturing, defense, inventory management, and industrial environments because it supports letters, numbers, and special characters.</li>

<li><strong>GS1 Barcode Formats:</strong> Used by retailers, distributors, and healthcare providers for globally standardized product identification.</li>

<li><strong>EAN and UPC Formats:</strong> Essential for retail products sold through supermarkets, convenience stores, and online marketplaces.</li>
```

  </ul>

  <h3>Benefits & Who Should Use This Tool:</h3>

  <ul>
    <li><strong>Small Business Owners:</strong> Create product labels, inventory tags, and promotional QR codes without paying for expensive software.</li>

```
<li><strong>Online Sellers:</strong> Generate barcodes for inventory management, fulfillment operations, and warehouse organization.</li>

<li><strong>Marketing Professionals:</strong> Build QR codes that connect customers directly to websites, promotions, social media pages, videos, and special offers.</li>

<li><strong>Event Organizers:</strong> Create scannable tickets, registration codes, seating information, schedules, and attendee resources.</li>

<li><strong>Teachers and Educational Institutions:</strong> Share online learning materials, assignment links, educational videos, and classroom resources using QR technology.</li>

<li><strong>Developers:</strong> Test applications, verify barcode scanning functionality, and prototype software projects quickly.</li>

<li><strong>Healthcare Providers:</strong> Support patient identification, equipment tracking, medication management, and document control.</li>

<li><strong>Warehouse Managers:</strong> Improve inventory accuracy and streamline logistics operations.</li>

<li><strong>Freelancers and Professionals:</strong> Add QR codes to business cards, portfolios, resumes, and marketing materials.</li>

<li><strong>Individuals:</strong> Share contact details, Wi-Fi credentials, personal websites, or social media profiles easily.</li>
```

  </ul>

  <h3>Frequently Asked Questions (FAQ):</h3>

  <p><strong>Q: What is a barcode?</strong><br>
  A barcode is a machine-readable representation of information that can be scanned electronically. It helps computers identify products, documents, assets, or other items quickly and accurately.</p>

  <p><strong>Q: What is a QR code?</strong><br>
  A QR code is a two-dimensional barcode capable of storing significantly more information than traditional barcodes. It can contain URLs, text, contact details, payment information, and much more.</p>

  <p><strong>Q: What is the difference between traditional barcodes and QR codes?</strong><br>
  Traditional barcodes store information horizontally using lines and spaces. QR codes store information both horizontally and vertically, allowing them to hold much more data while occupying less physical space.</p>

  <p><strong>Q: Is there a limit to how much information can be stored?</strong><br>
  Yes. Each barcode format has different storage capacities. QR codes can store thousands of characters, while traditional barcode formats are generally designed for shorter data strings.</p>

  <p><strong>Q: Are generated barcodes secure?</strong><br>
  The barcode itself is simply a method of encoding information. Security depends on the information being encoded and how it is used. Our generator processes all data locally within your browser.</p>

  <p><strong>Q: Is my information sent to a server?</strong><br>
  No. The tool operates directly within your browser. Your data remains on your device and is not uploaded or stored externally.</p>

  <p><strong>Q: Can I use generated barcodes for commercial purposes?</strong><br>
  Yes. The generated images can be used for commercial projects. However, certain barcode standards such as GS1 product codes may require official registration through the relevant standards organization.</p>

  <p><strong>Q: Can smartphones scan these codes?</strong><br>
  Most modern smartphones include built-in barcode and QR code scanning functionality through the camera application.</p>

  <p><strong>Q: Do I need special software?</strong><br>
  No. Everything works directly in your web browser. No installation, registration, or technical expertise is required.</p>

  <h3>Why Choose Our Barcode Generator?</h3>

  <p>There are many barcode generators available online, but not all provide the same combination of simplicity, privacy, flexibility, and quality. Our tool is designed to deliver a professional experience without unnecessary complications.</p>

  <p>First, it is completely free. You can generate unlimited barcodes and QR codes without paying subscription fees or encountering hidden restrictions.</p>

  <p>Second, privacy is a major priority. Unlike cloud-based systems that send your information to remote servers, our tool performs processing directly in your browser whenever possible. This approach helps protect sensitive business information and personal data.</p>

  <p>Third, the generator supports multiple barcode standards in a single platform. Instead of switching between different websites for different formats, you can generate everything from QR codes to industrial barcodes in one place.</p>

  <p>Finally, the generated images are suitable for both digital and print applications. Whether you need a barcode for a website, brochure, package, poster, shipping label, product box, or inventory tag, the output quality is designed to meet professional requirements.</p>

  <h3>Technical Specifications & Features</h3>

  <ul>
    <li><strong>Support for 15+ Barcode Types:</strong> Generate QR Codes, Data Matrix, PDF417, Aztec Codes, Code 128, Code 39, and many other formats.</li>

```
<li><strong>Customizable Dimensions:</strong> Adjust barcode size to match your intended use.</li>

<li><strong>High-Quality Output:</strong> Produce sharp PNG images suitable for printing and digital publishing.</li>

<li><strong>Responsive Design:</strong> Works seamlessly on desktop computers, laptops, tablets, and smartphones.</li>

<li><strong>No Registration Required:</strong> Start generating codes immediately without creating an account.</li>

<li><strong>Unlimited Usage:</strong> Create as many barcodes as you need without restrictions.</li>

<li><strong>Fast Processing:</strong> Generate codes instantly with minimal waiting time.</li>

<li><strong>Privacy Focused:</strong> No unnecessary data collection or storage.</li>

<li><strong>Easy to Use:</strong> Suitable for beginners, professionals, students, and businesses alike.</li>

<li><strong>Cross-Platform Compatibility:</strong> Compatible with modern browsers across Windows, macOS, Linux, Android, and iOS devices.</li>
```

  </ul>

  <p>Barcode and QR code technology continues to transform the way information is shared, tracked, and managed. Whether you need a simple QR code for a website, a professional barcode for inventory management, or advanced barcode formats for enterprise applications, our Free Online Barcode & QR Code Generator Tool provides a convenient, secure, and reliable solution that anyone can use.</p>

</div>


<script type="text/javascript" src="https://unpkg.com/bwip-js/dist/bwip-js-min.js"></script>

<script>
document.addEventListener('DOMContentLoaded', function () {
  const bcidSelect = document.getElementById('bcid');
  const textInput = document.getElementById('text');
  const scaleInput = document.getElementById('scale');
  const generateBtn = document.getElementById('generateBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const clearBtn = document.getElementById('clearBtn');
  const sampleBtn = document.getElementById('sampleBtn');
  const barcodeCanvas = document.getElementById('barcodeCanvas');
  const alertContainer = document.getElementById('alertContainer');
  const currentTypeSpan = document.getElementById('currentType');
  const inputLengthSpan = document.getElementById('inputLength');
  const scaleValueSpan = document.getElementById('scaleValue');
  const generationStatusSpan = document.getElementById('generationStatus');
  const previewNote = document.getElementById('previewNote');

  // 🛑 FIX: Corrected GS1 QR Code checksum (GTIN 09503200000108 -> 09503200000108)
  const sampleData = {
    qrcode: "https://www.example.com/product-info",
    datamatrix: "PROD-2023-7890-XYZ",
    pdf417: "SHIP-987654321-US-EXPRESS",
    azteccode: "TICKET-EVENT-2023-001",
    microqrcode: "https://short.url/abc123",
    gs1qrcode: "(01)09503200000108(17)231231(10)ABC123", // Corrected check digit is 8
    gs1datamatrix: "(01)09503200000108(17)231231(10)BATCH123" // Added GS1 Data Matrix sample
  };

  // sensible initial size
  barcodeCanvas.width = 400;
  barcodeCanvas.height = 400;

  updateInfo();
  textInput.addEventListener('input', updateInfo);
  scaleInput.addEventListener('input', updateInfo);
  bcidSelect.addEventListener('change', updateInfo);

  generateBtn.addEventListener('click', generateBarcode);
  downloadBtn.addEventListener('click', downloadBarcode);
  clearBtn.addEventListener('click', clearAll);
  sampleBtn.addEventListener('click', loadSample);

  function updateInfo() {
    currentTypeSpan.textContent = bcidSelect.options[bcidSelect.selectedIndex].text;
    inputLengthSpan.textContent = textInput.value.length;
    scaleValueSpan.textContent = scaleInput.value;
  }

  function generateBarcode() {
    const bcid = bcidSelect.value;
    const text = textInput.value.trim();
    let scale = parseInt(scaleInput.value);
    if (!text) {
      showAlert('Please enter text or data for the barcode!', 'error');
      return;
    }
    if (isNaN(scale) || scale < 1) scale = 4;

    generationStatusSpan.textContent = 'Generating...';
    generationStatusSpan.style.color = '#e67e22';

    // Ensure bwip-js is available. It exposes either window.BWIPJS or window.bwipjs depending on build.
    const bwip = window.BWIPJS || window.bwipjs;
    if (!bwip) {
      generationStatusSpan.textContent = 'Error';
      generationStatusSpan.style.color = '#e74c3c';
      showAlert('bwip-js library not loaded. Make sure the script src for bwip-js is included before this script and returned 200.', 'error');
      console.error('bwip-js not found: window.BWIPJS and window.bwipjs are undefined.');
      return;
    }

    // set canvas size proportional to scale (you can adjust these multipliers)
    // Using scale to determine canvas size is crucial for high-res output
    const base = 150; 
    barcodeCanvas.width = Math.max(200, base * scale);
    barcodeCanvas.height = Math.max(200, base * scale);

    // Build options. Some barcode types may not accept includetext; we'll attempt common set.
    const opts = {
      bcid: bcid,
      text: text,
      scale: scale,
      paddingwidth: 10,
      paddingheight: 10
    };

    // For linear codes allow includetext; for some 2D codes it's ignored.
    try {
      // Use callback form to capture library errors
      bwip.toCanvas(barcodeCanvas, opts, function (err) {
        if (err) {
          generationStatusSpan.textContent = 'Error';
          generationStatusSpan.style.color = '#e74c3c';

          // Show the actual error message from bwip-js if available
          const errMsg = (err && (err.message || err.toString())) || 'Unknown error while generating barcode.';
          showAlert('Failed to generate barcode: ' + errMsg, 'error');
          console.error('bwip-js error:', err);
          previewNote.style.display = 'block'; // Show note on error
          const ctx = barcodeCanvas.getContext('2d');
          ctx.clearRect(0, 0, barcodeCanvas.width, barcodeCanvas.height); // Clear the canvas on error
        } else {
          generationStatusSpan.textContent = 'Generated';
          generationStatusSpan.style.color = '#27ae60';
          previewNote.style.display = 'none';
          showAlert('Barcode generated successfully!', 'success');
        }
      });
    } catch (ex) {
      generationStatusSpan.textContent = 'Error';
      generationStatusSpan.style.color = '#e74c3c';
      showAlert('Exception while generating barcode: ' + (ex.message || ex.toString()), 'error');
      console.error('Exception generating barcode:', ex);
    }
  }

  function downloadBarcode() {
    try {
      const ctx = barcodeCanvas.getContext('2d');
      const w = barcodeCanvas.width, h = barcodeCanvas.height;
      if (w === 0 || h === 0) {
        showAlert('Canvas is empty. Generate a barcode first.', 'error');
        return;
      }
      
      // Simple check to see if the canvas has content (avoids downloading a blank image)
      const imageData = ctx.getImageData(0, 0, 1, 1).data; // Read a single pixel
      if (imageData[3] === 0) { 
        showAlert('Canvas appears empty. Please generate a barcode first.', 'error');
        return;
      }

      const link = document.createElement('a');
      const barcodeType = bcidSelect.options[bcidSelect.selectedIndex].text.replace(/\s+/g, '_');
      const timestamp = new Date().toISOString().slice(0,19).replace(/[:T.]/g, '-');
      link.download = `barcode_${barcodeType}_${timestamp}.png`;
      link.href = barcodeCanvas.toDataURL('image/png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showAlert('Barcode downloaded successfully!', 'success');
    } catch (err) {
      showAlert('Error during download: ' + (err.message || err.toString()), 'error');
      console.error('Download error:', err);
    }
  }

  function clearAll() {
    textInput.value = '';
    scaleInput.value = 4;
    bcidSelect.value = 'qrcode';
    const ctx = barcodeCanvas.getContext('2d');
    ctx.clearRect(0, 0, barcodeCanvas.width, barcodeCanvas.height);
    barcodeCanvas.width = 400; // Resetting to a reasonable default size
    barcodeCanvas.height = 400;
    previewNote.style.display = 'block';
    generationStatusSpan.textContent = 'Ready';
    generationStatusSpan.style.color = '#2c3e50';
    updateInfo();
    showAlert('All fields cleared!', 'success');
  }

  function loadSample() {
    const selectedType = bcidSelect.value;
    if (sampleData[selectedType]) {
      textInput.value = sampleData[selectedType];
    } else {
      // Fallback for types without specific sample data
      textInput.value = `Sample data for ${bcidSelect.options[bcidSelect.selectedIndex].text} - ${new Date().getFullYear()}`;
    }
    updateInfo();
    showAlert('Sample data loaded! Click "Generate Barcode" to create.', 'success');
  }

  function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.innerHTML = `
      ${escapeHtml(message)}
      <span class="close">&times;</span>
    `;
    alertContainer.innerHTML = '';
    alertContainer.appendChild(alertDiv);
    alertDiv.querySelector('.close').addEventListener('click', function () {
      alertDiv.remove();
    });
    setTimeout(() => { if (alertDiv.parentNode) alertDiv.remove(); }, 6000);
  }

  // small helper to avoid injecting raw HTML from errors
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
});
</script>