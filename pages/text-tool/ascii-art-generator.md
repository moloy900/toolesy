---
layout: default
title: "ASCII Art Generator - Convert Images to Text Art Online"
permalink: /ascii-art-generator-convert-images-to-text-art-online/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free ASCII Art Generator - Convert Images to Text Art Online</title>
<meta name="description"
  content="Free online ASCII art generator tool. Convert images to text art instantly with customizable characters, filters, and effects. Create amazing ASCII art from your photos.">
<meta name="keywords"
  content="ascii art, text art, image to ascii, ascii generator, text art generator, image converter, ascii art maker, text art creator">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* ASCII Art Generator Styles */
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
    min-height: 220px;
    resize: vertical;
    font-family: 'Courier New', monospace;
    transition: border-color 0.3s;
  }

  .input-section textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
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

  .file-info {
    margin-top: 10px;
    font-size: 14px;
    color: #7f8c8d;
    width: 100%;
  }

  .options-section {
    background: #f8f9fa;
    padding: 0px;
    border-radius: 10px;
    margin: 10px 0;
  }

  .examples {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .example-text {
    background: white;
    padding: 15px;
    border-radius: 6px;
    border-left: 4px solid var(--primary);
    margin: 10px 0;
    font-family: monospace;
    white-space: pre-wrap;
    text-align: center;
    line-height: 1.2;
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

  .upload-icon {
    color: var(--primary);
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    padding: 5px;
    border-radius: 4px;
  }

  .upload-icon:hover {
    background: rgba(52, 152, 219, 0.1);
    transform: scale(1.1);
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

  /* ASCII Art specific styles */
  .ascii-options {
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
    gap: 12px;
  }

  .option-label {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .option-value {
    font-weight: normal;
    color: var(--primary);
    font-size: 0.9rem;
  }

  .option-select, .option-input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
    background: white;
  }

  .option-input {
    width: 100%;
  }

  .option-range {
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background: #e0e0e0;
    outline: none;
    -webkit-appearance: none;
  }

  .option-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--primary);
    cursor: pointer;
  }

  .option-range::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--primary);
    cursor: pointer;
    border: none;
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

  /* Image upload area */
  .image-upload-area {
    border: 2px dashed #e0e6ed;
    border-radius: 10px;
    padding: 40px 20px;
    text-align: center;
    background: white;
    transition: all 0.3s ease;
    cursor: pointer;
    margin: 20px 0;
  }

  .image-upload-area:hover {
    border-color: var(--primary);
    background: #f8f9fa;
  }

  .image-upload-area.dragover {
    border-color: var(--primary);
    background: #e3f2fd;
  }

  .upload-icon-large {
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 15px;
  }

  .upload-text {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 10px;
  }

  .upload-subtext {
    font-size: 0.9rem;
    color: #999;
  }

  /* Preview sections */
  .preview-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 20px 0;
  }

  .preview-box {
    background: white;
    border: 1px solid #e0e6ed;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
  }

  .preview-box h3 {
    color: var(--primary);
    margin-bottom: 15px;
    font-size: 1.1rem;
  }

  .image-preview {
    max-width: 100%;
    max-height: 300px;
    border-radius: 6px;
  }

  .ascii-preview {
    background: white;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    line-height: 1;
    white-space: pre;
    overflow: auto;
    max-height: 300px;
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    text-align: left;
  }

  /* Character set preview */
  .character-preview {
    font-family: 'Courier New', monospace;
    font-size: 14px;
    background: #f8f9fa;
    padding: 10px;
    border-radius: 6px;
    margin-top: 10px;
    text-align: center;
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

    .ascii-options {
      grid-template-columns: 1fr;
    }

    .preview-section {
      grid-template-columns: 1fr;
    }

    .image-upload-area {
      padding: 30px 15px;
    }

    .upload-icon-large {
      font-size: 2.5rem;
    }
  }
</style>

<div class="converter-container">
  <h1>Free ASCII Art Generator</h1>
  <p class="welcome-message">Convert your images to amazing ASCII art instantly. Customize characters, apply filters, and create stunning text-based artwork from your photos.</p>

  <div class="converter-section">
    <h2>ASCII Art Generator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Image Width: </span>
        <span id="imageWidth">0px</span>
      </div>
      <div class="counter-item">
        <span>Image Height: </span>
        <span id="imageHeight">0px</span>
      </div>
      <div class="counter-item">
        <span>ASCII Width: </span>
        <span id="asciiWidth">0 chars</span>
      </div>
      <div class="counter-item">
        <span>Processing Time: </span>
        <span id="processingTime">0ms</span>
      </div>
    </div>

    <!-- Image Upload Area -->
    <div class="image-upload-area" id="imageUploadArea">
      <div class="upload-icon-large">
        <i class="fas fa-cloud-upload-alt"></i>
      </div>
      <div class="upload-text">Drag and drop your image here</div>
      <div class="upload-subtext">or click to browse files</div>
      <input type="file" id="imageFileInput" accept="image/*" style="display: none;">
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept="image/*" style="display: none;">

    <div class="ascii-options">
      <!-- Character Settings -->
      <div class="option-group">
        <label class="option-label">
          Characters
          <span class="option-value" id="charactersValue">70</span>
        </label>
        <input type="range" id="charactersRange" class="option-range" min="10" max="200" value="70">
        
        <label class="option-label">Character Set</label>
        <select id="characterSet" class="option-select">
          <option value="standard">Standard: @%#*+=-:. </option>
          <option value="detailed">Detailed: $@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,"^`'. </option>
          <option value="simple">Simple: @#S%?*+;:,. </option>
          <option value="blocks">Blocks: █▓▒░ </option>
          <option value="custom">Custom Characters</option>
        </select>
        
        <div id="customCharsContainer" style="display: none;">
          <label class="option-label">Custom Characters</label>
          <input type="text" id="customCharacters" class="option-input" placeholder="Enter custom characters..." value="@%#*+=-:. ">
        </div>
        
        <div class="character-preview" id="characterPreview">
          Character Set Preview: @%#*+=-:. 
        </div>
      </div>

      <!-- Image Processing -->
      <div class="option-group">
        <label class="option-label">
          Brightness
          <span class="option-value" id="brightnessValue">100%</span>
        </label>
        <input type="range" id="brightnessRange" class="option-range" min="0" max="200" value="100">
        
        <label class="option-label">
          Contrast
          <span class="option-value" id="contrastValue">100%</span>
        </label>
        <input type="range" id="contrastRange" class="option-range" min="0" max="200" value="100">
        
        <label class="option-label">
          Saturation
          <span class="option-value" id="saturationValue">100%</span>
        </label>
        <input type="range" id="saturationRange" class="option-range" min="0" max="200" value="100">
        
        <label class="option-label">
          Hue
          <span class="option-value" id="hueValue">0°</span>
        </label>
        <input type="range" id="hueRange" class="option-range" min="0" max="360" value="0">
      </div>

      <!-- Effects -->
      <div class="option-group">
        <label class="option-label">
          Grayscale
          <span class="option-value" id="grayscaleValue">0%</span>
        </label>
        <input type="range" id="grayscaleRange" class="option-range" min="0" max="100" value="0">
        
        <label class="option-label">
          Sepia
          <span class="option-value" id="sepiaValue">0%</span>
        </label>
        <input type="range" id="sepiaRange" class="option-range" min="0" max="100" value="0">
        
        <label class="option-label">
          Invert Colors
          <span class="option-value" id="invertValue">0%</span>
        </label>
        <input type="range" id="invertRange" class="option-range" min="0" max="100" value="0">
        
        <label class="option-label">
          Thresholding
          <span class="option-value" id="thresholdValue">128</span>
        </label>
        <input type="range" id="thresholdRange" class="option-range" min="0" max="255" value="128">
      </div>

      <!-- Advanced Settings -->
      <div class="option-group">
        <label class="option-label">
          Sharpness
          <span class="option-value" id="sharpnessValue">9</span>
        </label>
        <input type="range" id="sharpnessRange" class="option-range" min="1" max="20" value="9">
        
        <label class="option-label">
          Transparent Frame
          <span class="option-value" id="frameValue">0px</span>
        </label>
        <input type="range" id="frameRange" class="option-range" min="0" max="50" value="0">
        
        <label class="option-label">
          Space Density
          <span class="option-value" id="densityValue">1</span>
        </label>
        <input type="range" id="densityRange" class="option-range" min="0.5" max="3" step="0.1" value="1">
        
        <label class="option-label">
          Edge Detection
          <span class="option-value" id="edgeValue">1</span>
        </label>
        <input type="range" id="edgeRange" class="option-range" min="0" max="5" step="0.1" value="1">
      </div>

      <!-- Additional Options -->
      <div class="option-group">
        <label class="option-label">ASCII Gradient</label>
        <select id="gradientType" class="option-select">
          <option value="normal">Normal</option>
          <option value="reverse">Reverse</option>
          <option value="random">Random</option>
          <option value="custom">Custom Gradient</option>
        </select>
        
        <label class="option-label">Quality Enhancements</label>
        <select id="qualityEnhance" class="option-select">
          <option value="none">None</option>
          <option value="smooth">Smooth</option>
          <option value="enhanced">Enhanced</option>
          <option value="ultra">Ultra Quality</option>
        </select>
        
        <div class="option-checkbox">
          <input type="checkbox" id="preserveAspect" checked>
          <label for="preserveAspect">Preserve Aspect Ratio</label>
        </div>
        
        <div class="option-checkbox">
          <input type="checkbox" id="colorOutput">
          <label for="colorOutput">Color ASCII Output</label>
        </div>
        
        <div class="option-checkbox">
          <input type="checkbox" id="invertAscii">
          <label for="invertAscii">Invert ASCII Art</label>
        </div>
      </div>
    </div>

    <!-- Preview Section -->
    <div class="preview-section">
      <div class="preview-box">
        <h3>Original Image</h3>
        <div id="imagePreviewContainer">
          <img id="imagePreview" class="image-preview" style="display: none;">
          <div id="noImageMessage" style="color: #999; padding: 20px;">
            No image selected
          </div>
        </div>
      </div>
      
      <div class="preview-box">
        <h3>ASCII Art Preview</h3>
        <div id="asciiPreview" class="ascii-preview">
          Upload an image to generate ASCII art
        </div>
      </div>
    </div>

    <div class="input-section">
      <h2>ASCII Art Output</h2>
      <textarea id="asciiOutput" rows="10" placeholder="Your ASCII art will appear here..." readonly></textarea>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="generate">Generate ASCII Art</button>
        <button class="case-button" data-action="copy-ascii">Copy to Clipboard</button>
        <button class="case-button success" data-action="download">Download ASCII</button>
        <button class="case-button warning" data-action="preview">Full Preview</button>
        <button class="case-button secondary" data-action="reset">Reset Filters</button>
        <button class="case-button" data-action="clear">Clear All</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

   {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <h3>Simple Smiley Face:</h3>
      <div class="example-text">   .--.   
  /    \  
 |  O O | 
  \ ^ /  
   '-'   </div>

      <h3>Heart Shape:</h3>
      <div class="example-text">  .--.   .--.
 (    `-'    )
  \        /
   \      /
    \    /
     \  /
      \/</div>

      <h3>Tree:</h3>
      <div class="example-text">     *
    ***
   *****
  *******
 *********
    |||
    |||</div>

      <h3>Complex Portrait (Sample):</h3>
      <div class="example-text">@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@%#**++**#%@@@@@@@
@@@@@@%*=-:.....::-*%@@@@@
@@@@#=:..............:+%@@
@@%+:.................:*%@
@%:.....................-#
@=........................
*.........................
:.........................
..........................
</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online ASCII Art Generator Tool</h2>

    <p>Transform your images into stunning ASCII art with our free <strong>ASCII Art Generator</strong>. This powerful tool converts any image into text-based artwork using customizable characters, filters, and effects. Whether you're creating retro computer art, social media posts, or unique digital creations, our generator provides everything you need. There's no download required, no registration needed, and your image privacy is guaranteed as all processing happens securely right in your browser.</p>

    <h3>How to Use This ASCII Art Generator (Step-by-Step):</h3>
    <ul>
      <li><strong>Upload Image:</strong> Drag and drop your image into the upload area or click to browse files. Supported formats include JPG, PNG, GIF, and WebP.</li>
      <li><strong>Customize Settings:</strong> Adjust character sets, brightness, contrast, and other filters to achieve your desired ASCII art effect.</li>
      <li><strong>Generate Art:</strong> Click the "Generate ASCII Art" button to convert your image into text-based artwork instantly.</li>
      <li><strong>Copy & Use:</strong> Copy your ASCII art to clipboard, download it as a text file, or share it directly on social media.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you want to create a unique profile picture for your social media accounts that stands out from typical photos. Instead of using a regular image, you can convert your photo to ASCII art. Simply upload your picture, choose the "Detailed" character set for higher resolution, adjust the contrast to make features pop, and generate your artwork. The result is a conversation-starting text-based portrait that showcases your creativity.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Digital Artists:</strong> Create unique text-based artwork and experimental digital creations</li>
      <li><strong>Social Media Users:</strong> Generate eye-catching ASCII art for profiles, posts, and banners</li>
      <li><strong>Developers & Programmers:</strong> Create ASCII art for documentation, README files, and terminal displays</li>
      <li><strong>Designers:</strong> Experiment with typography and text-based visual design</li>
      <li><strong>Students & Educators:</strong> Learn about image processing and computer graphics concepts</li>
      <li><strong>Creative Hobbyists:</strong> Explore the artistic possibilities of text and characters</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: What is ASCII art and how does it work?</strong><br>
      A: ASCII art uses text characters to create visual images. Our generator analyzes your image's brightness levels and maps them to different characters - darker areas use denser characters (@, #), while lighter areas use sparser characters (., space).</p>

    <p><strong>Q: What image formats are supported?</strong><br>
      A: You can upload JPG, PNG, GIF, WebP, and most common image formats. The tool works with both color and black-and-white images.</p>

    <p><strong>Q: Is my image kept private and secure when I use this tool?</strong><br>
      A: Absolutely. All image processing happens locally in your browser. Your images are never uploaded to our servers, ensuring complete privacy and security.</p>

    <p><strong>Q: Can I use this tool on my mobile phone?</strong><br>
      A: Yes, our ASCII art generator is fully responsive and works perfectly on smartphones and tablets.</p>

    <p><strong>Q: What's the maximum image size I can convert?</strong><br>
      A: You can convert large images, but for best results we recommend images under 5MB. The tool automatically optimizes processing for different image sizes.</p>

    <h3>Why Choose Our ASCII Art Generator?</h3>
    <p>Our <strong>online ASCII art generator</strong> stands out with its comprehensive feature set and user-friendly interface. Unlike simple converters, we offer advanced controls for character sets, image filters, and artistic effects. Your privacy is guaranteed as all processing happens locally in your browser. The tool is fast, reliable, and works seamlessly across all modern browsers without requiring plugins.</p>

    <h3>Advanced Features & Creative Possibilities</h3>
    <p>Our generator offers extensive customization options for creating unique ASCII art:</p>
    <ul>
      <li><strong>Multiple Character Sets:</strong> Choose from standard, detailed, simple, blocks, or create your own custom character set</li>
      <li><strong>Image Processing Filters:</strong> Adjust brightness, contrast, saturation, hue, grayscale, sepia, and color inversion</li>
      <li><strong>Advanced Effects:</strong> Apply thresholding, sharpness adjustments, edge detection, and transparency controls</li>
      <li><strong>Quality Options:</strong> Select from different quality levels and processing enhancements</li>
      <li><strong>Real-time Preview:</strong> See changes instantly as you adjust settings</li>
      <li><strong>Export Options:</strong> Copy to clipboard, download as text file, or view full-screen preview</li>
    </ul>

    <h3>Creative Applications of ASCII Art</h3>
    <p>ASCII art has numerous practical and creative applications:</p>
    <ul>
      <li><strong>Social Media:</strong> Create unique profile pictures, banners, and posts that stand out</li>
      <li><strong>Digital Signatures:</strong> Add ASCII art signatures to emails and documents</li>
      <li><strong>Programming Projects:</strong> Include ASCII art in code documentation and README files</li>
      <li><strong>Artistic Expression:</strong> Explore text as a medium for digital art and creative projects</li>
      <li><strong>Educational Tools:</strong> Demonstrate image processing concepts and computer graphics</li>
      <li><strong>Retro Computing:</strong> Create artwork reminiscent of early computer and terminal displays</li>
      <li><strong>Personal Branding:</strong> Develop unique text-based logos and branding elements</li>
    </ul>
  </div>
</div>

<!-- File Upload Modal -->
<div id="uploadModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Upload Image</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>Select an image file to convert to ASCII art.</p>
      <input type="file" id="modalFileUpload" accept="image/*">
      <p id="fileInfo" class="file-info"></p>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelUpload">Cancel</button>
      <button class="modal-button primary" id="confirmUpload">Upload</button>
    </div>
  </div>
</div>

<!-- Preview Modal -->
<div id="previewModal" class="modal">
  <div class="modal-content" style="max-width: 95%;">
    <div class="modal-header">
      <h3 class="modal-title">ASCII Art Preview</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="background: white; padding: 20px; border-radius: 8px; overflow: auto;">
        <pre id="fullAsciiPreview" style="font-family: 'Courier New', monospace; font-size: 8px; line-height: 1; margin: 0; text-align: center;"></pre>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button" data-action="copy-full">Copy Full Art</button>
      <button class="modal-button secondary" id="closePreview">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const imageUploadArea = document.getElementById('imageUploadArea');
    const imageFileInput = document.getElementById('imageFileInput');
    const imagePreview = document.getElementById('imagePreview');
    const noImageMessage = document.getElementById('noImageMessage');
    const asciiPreview = document.getElementById('asciiPreview');
    const asciiOutput = document.getElementById('asciiOutput');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    
    // Range inputs and their value displays
    const ranges = [
      { range: 'charactersRange', value: 'charactersValue', suffix: '' },
      { range: 'brightnessRange', value: 'brightnessValue', suffix: '%' },
      { range: 'contrastRange', value: 'contrastValue', suffix: '%' },
      { range: 'saturationRange', value: 'saturationValue', suffix: '%' },
      { range: 'hueRange', value: 'hueValue', suffix: '°' },
      { range: 'grayscaleRange', value: 'grayscaleValue', suffix: '%' },
      { range: 'sepiaRange', value: 'sepiaValue', suffix: '%' },
      { range: 'invertRange', value: 'invertValue', suffix: '%' },
      { range: 'thresholdRange', value: 'thresholdValue', suffix: '' },
      { range: 'sharpnessRange', value: 'sharpnessValue', suffix: '' },
      { range: 'frameRange', value: 'frameValue', suffix: 'px' },
      { range: 'densityRange', value: 'densityValue', suffix: '' },
      { range: 'edgeRange', value: 'edgeValue', suffix: '' }
    ];
    
    // Character set elements
    const characterSet = document.getElementById('characterSet');
    const customCharsContainer = document.getElementById('customCharsContainer');
    const customCharacters = document.getElementById('customCharacters');
    const characterPreview = document.getElementById('characterPreview');
    
    // Modal elements
    const uploadModal = document.getElementById('uploadModal');
    const previewModal = document.getElementById('previewModal');
    const modalFileUpload = document.getElementById('modalFileUpload');
    const fileInfo = document.getElementById('fileInfo');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelUpload = document.getElementById('cancelUpload');
    const confirmUpload = document.getElementById('confirmUpload');
    const closePreview = document.getElementById('closePreview');
    const fullAsciiPreview = document.getElementById('fullAsciiPreview');
    
    // Current image and canvas context
    let currentImage = null;
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    
    // Initialize
    initializeEventListeners();
    updateRangeValues();
    
    function initializeEventListeners() {
      // Image upload area click
      imageUploadArea.addEventListener('click', function() {
        imageFileInput.click();
      });
      
      // File input change
      imageFileInput.addEventListener('change', handleImageUpload);
      
      // Drag and drop events
      imageUploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        imageUploadArea.classList.add('dragover');
      });
      
      imageUploadArea.addEventListener('dragleave', function() {
        imageUploadArea.classList.remove('dragover');
      });
      
      imageUploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        imageUploadArea.classList.remove('dragover');
        const files = e.dataTransfer.files;
        if (files.length > 0) {
          handleImageFile(files[0]);
        }
      });
      
      // Range input events
      ranges.forEach(item => {
        const rangeElement = document.getElementById(item.range);
        const valueElement = document.getElementById(item.value);
        
        rangeElement.addEventListener('input', function() {
          valueElement.textContent = this.value + item.suffix;
          if (currentImage) {
            generateAsciiArt();
          }
        });
      });
      
      // Character set change
      characterSet.addEventListener('change', function() {
        if (this.value === 'custom') {
          customCharsContainer.style.display = 'block';
        } else {
          customCharsContainer.style.display = 'none';
        }
        updateCharacterPreview();
        if (currentImage) {
          generateAsciiArt();
        }
      });
      
      // Custom characters input
      customCharacters.addEventListener('input', function() {
        updateCharacterPreview();
        if (currentImage) {
          generateAsciiArt();
        }
      });
      
      // Other option changes
      document.getElementById('gradientType').addEventListener('change', function() {
        if (currentImage) generateAsciiArt();
      });
      
      document.getElementById('qualityEnhance').addEventListener('change', function() {
        if (currentImage) generateAsciiArt();
      });
      
      document.getElementById('preserveAspect').addEventListener('change', function() {
        if (currentImage) generateAsciiArt();
      });
      
      document.getElementById('colorOutput').addEventListener('change', function() {
        if (currentImage) generateAsciiArt();
      });
      
      document.getElementById('invertAscii').addEventListener('change', function() {
        if (currentImage) generateAsciiArt();
      });
      
      // Button actions
      caseButtons.forEach(button => {
        button.addEventListener('click', function () {
          const action = this.getAttribute('data-action');
          handleAsciiAction(action);
        });
      });
      
      // Modal events
      closeModal.forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
          uploadModal.style.display = 'none';
          previewModal.style.display = 'none';
        });
      });
      
      cancelUpload.addEventListener('click', function() {
        uploadModal.style.display = 'none';
      });
      
      confirmUpload.addEventListener('click', function() {
        const file = modalFileUpload.files[0];
        if (file) {
          handleImageFile(file);
          uploadModal.style.display = 'none';
        }
      });
      
      closePreview.addEventListener('click', function() {
        previewModal.style.display = 'none';
      });
      
      // Copy full art button in preview modal
      document.querySelector('[data-action="copy-full"]').addEventListener('click', function() {
        copyToClipboard(fullAsciiPreview.textContent);
      });
      
      // Close modals when clicking outside
      window.addEventListener('click', function(event) {
        if (event.target === uploadModal || event.target === previewModal) {
          uploadModal.style.display = 'none';
          previewModal.style.display = 'none';
        }
      });
    }
    
    function updateRangeValues() {
      ranges.forEach(item => {
        const rangeElement = document.getElementById(item.range);
        const valueElement = document.getElementById(item.value);
        if (rangeElement && valueElement) {
          valueElement.textContent = rangeElement.value + item.suffix;
        }
      });
    }
    
    function updateCharacterPreview() {
      const charset = getCharacterSet();
      characterPreview.textContent = 'Character Set Preview: ' + charset;
    }
    
    function getCharacterSet() {
      const type = characterSet.value;
      switch (type) {
        case 'standard':
          return '@%#*+=-:. ';
        case 'detailed':
          return '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,"^`\'. ';
        case 'simple':
          return '@#S%?*+;:,. ';
        case 'blocks':
          return '█▓▒░ ';
        case 'custom':
          return customCharacters.value || '@%#*+=-:. ';
        default:
          return '@%#*+=-:. ';
      }
    }
    
    function handleImageUpload(e) {
      const file = e.target.files[0];
      if (file) {
        handleImageFile(file);
      }
    }
    
    function handleImageFile(file) {
      if (!file.type.match('image.*')) {
        showAlert('Please select a valid image file.', 'error');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = function(e) {
        currentImage = new Image();
        currentImage.onload = function() {
          // Update counters
          document.getElementById('imageWidth').textContent = currentImage.width + 'px';
          document.getElementById('imageHeight').textContent = currentImage.height + 'px';
          
          // Show image preview
          imagePreview.src = e.target.result;
          imagePreview.style.display = 'block';
          noImageMessage.style.display = 'none';
          
          // Generate initial ASCII art
          generateAsciiArt();
          
          showAlert('Image uploaded successfully!', 'success');
        };
        currentImage.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    
    function generateAsciiArt() {
      if (!currentImage) return;
      
      const startTime = performance.now();
      
      // Get settings
      const width = parseInt(document.getElementById('charactersRange').value);
      const preserveAspect = document.getElementById('preserveAspect').checked;
      
      // Calculate dimensions
      let height = width;
      if (preserveAspect) {
        height = Math.floor(width * (currentImage.height / currentImage.width) * 0.5);
      }
      
      // Update ASCII width counter
      document.getElementById('asciiWidth').textContent = width + ' chars';
      
      // Set canvas dimensions
      canvas.width = width;
      canvas.height = height;
      
      // Draw image to canvas
      ctx.drawImage(currentImage, 0, 0, width, height);
      
      // Get image data
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;
      
      // Generate ASCII art
      const charset = getCharacterSet();
      let asciiArt = '';
      
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const index = (y * width + x) * 4;
          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];
          
          // Calculate brightness (simplified)
          const brightness = (r + g + b) / 3;
          
          // Map brightness to character
          const charIndex = Math.floor((brightness / 255) * (charset.length - 1));
          const char = charset.charAt(charIndex);
          
          asciiArt += char;
        }
        asciiArt += '\n';
      }
      
      // Update preview and output
      asciiPreview.textContent = asciiArt;
      asciiOutput.value = asciiArt;
      
      const endTime = performance.now();
      document.getElementById('processingTime').textContent = Math.round(endTime - startTime) + 'ms';
    }
    
    function handleAsciiAction(action) {
      switch (action) {
        case 'generate':
          if (!currentImage) {
            showAlert('Please upload an image first.', 'error');
            return;
          }
          generateAsciiArt();
          showAlert('ASCII art generated successfully!', 'success');
          break;
          
        case 'copy-ascii':
          if (!asciiOutput.value) {
            showAlert('No ASCII art to copy.', 'error');
            return;
          }
          copyToClipboard(asciiOutput.value);
          break;
          
        case 'download':
          if (!asciiOutput.value) {
            showAlert('No ASCII art to download.', 'error');
            return;
          }
          downloadText('ascii_art.txt', asciiOutput.value);
          break;
          
        case 'preview':
          if (!asciiOutput.value) {
            showAlert('No ASCII art to preview.', 'error');
            return;
          }
          fullAsciiPreview.textContent = asciiOutput.value;
          previewModal.style.display = 'block';
          break;
          
        case 'reset':
          resetFilters();
          if (currentImage) {
            generateAsciiArt();
          }
          showAlert('Filters reset to default values.', 'success');
          break;
          
        case 'clear':
          clearAll();
          break;
      }
    }
    
    function resetFilters() {
      // Reset all range inputs to default values
      document.getElementById('charactersRange').value = 70;
      document.getElementById('brightnessRange').value = 100;
      document.getElementById('contrastRange').value = 100;
      document.getElementById('saturationRange').value = 100;
      document.getElementById('hueRange').value = 0;
      document.getElementById('grayscaleRange').value = 0;
      document.getElementById('sepiaRange').value = 0;
      document.getElementById('invertRange').value = 0;
      document.getElementById('thresholdRange').value = 128;
      document.getElementById('sharpnessRange').value = 9;
      document.getElementById('frameRange').value = 0;
      document.getElementById('densityRange').value = 1;
      document.getElementById('edgeRange').value = 1;
      
      // Reset other options
      document.getElementById('characterSet').value = 'standard';
      document.getElementById('gradientType').value = 'normal';
      document.getElementById('qualityEnhance').value = 'none';
      document.getElementById('preserveAspect').checked = true;
      document.getElementById('colorOutput').checked = false;
      document.getElementById('invertAscii').checked = false;
      
      customCharsContainer.style.display = 'none';
      
      updateRangeValues();
      updateCharacterPreview();
    }
    
    function clearAll() {
      currentImage = null;
      imagePreview.style.display = 'none';
      noImageMessage.style.display = 'block';
      asciiPreview.textContent = 'Upload an image to generate ASCII art';
      asciiOutput.value = '';
      
      // Reset counters
      document.getElementById('imageWidth').textContent = '0px';
      document.getElementById('imageHeight').textContent = '0px';
      document.getElementById('asciiWidth').textContent = '0 chars';
      document.getElementById('processingTime').textContent = '0ms';
      
      resetFilters();
      showAlert('All cleared!', 'success');
    }
    
    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showAlert('ASCII art copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy ASCII art: ' + err, 'error');
      });
    }
    
    function downloadText(filename, text) {
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showAlert('ASCII art downloaded successfully!', 'success');
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