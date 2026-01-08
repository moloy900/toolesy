---
layout: default
title: "Online Video to GIF Converter - Convert Videos to GIFs"
permalink: /online-video-to-gif-converter-convert-videos-to-gifs/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Video to GIF Converter - Convert MP4, WebM, MOV to GIF</title>
<meta name="description"
  content="Free online Video to GIF converter tool. Convert MP4, WebM, MOV, AVI videos to animated GIFs instantly. No software installation required, works directly in your browser.">
<meta name="keywords"
  content="video to gif converter, mp4 to gif, webm to gif, video converter, gif maker, animated gif creator, online video converter, free gif maker, video editor">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- FFmpeg.wasm -->
<script src="https://unpkg.com/@ffmpeg/ffmpeg@0.12.6/dist/ffmpeg.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.js"></script>

<style>
  /* Video to GIF Converter Styles */
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

  .file-upload-button:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: none;
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

  .case-button:hover:not(:disabled) {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .case-button:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: none;
  }

  .case-button:active:not(:disabled) {
    transform: translateY(0);
  }

  .case-button.success {
    background: var(--success);
  }

  .case-button.success:hover:not(:disabled) {
    background: #218838;
  }

  .case-button.secondary {
    background: #6c757d;
  }

  .case-button.secondary:hover:not(:disabled) {
    background: #5a6268;
  }

  .case-button.warning {
    background: #ffc107;
    color: #212529;
  }

  .case-button.warning:hover:not(:disabled) {
    background: #e0a800;
  }

  .case-button.danger {
    background: #dc3545;
    color: white;
  }

  .case-button.danger:hover:not(:disabled) {
    background: #c82333;
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

  .file-info {
    margin-top: 10px;
    font-size: 14px;
    color: #7f8c8d;
    width: 100%;
  }

  .options-section {
    background: #f8f9fa;
    padding: 20px;
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

  /* Preview Section */
  .preview-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 20px 0;
  }

  @media (max-width: 768px) {
    .preview-section {
      grid-template-columns: 1fr;
    }
  }

  .preview-box {
    padding: 15px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .preview-box h3 {
    margin-bottom: 15px;
    color: #2c3e50;
    text-align: center;
  }

  .video-preview, .gif-preview {
    width: 100%;
    max-height: 300px;
    border-radius: 6px;
    background: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .video-preview video, .gif-preview img {
    max-width: 100%;
    max-height: 280px;
    border-radius: 4px;
  }

  .placeholder-text {
    color: #7f8c8d;
    font-style: italic;
    padding: 40px;
    text-align: center;
  }

  /* Progress Bar */
  .progress-container {
    margin: 20px 0;
  }

  .progress-bar {
    width: 100%;
    height: 20px;
    background-color: #e9ecef;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .progress-fill {
    height: 100%;
    background-color: var(--primary);
    width: 0%;
    transition: width 0.3s ease;
    border-radius: 10px;
  }

  .progress-text {
    text-align: center;
    font-weight: 600;
    color: #2c3e50;
  }

  /* Formatting options for GIF converter */
  .formatting-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
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

  .option-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .option-checkbox input {
    width: 18px;
    height: 18px;
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

    .formatting-options {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Video to GIF Converter</h1>
  <p class="welcome-message">Convert your MP4, WebM, MOV, AVI videos to animated GIFs instantly. No software installation required - works directly in your browser with complete privacy.</p>

  <div class="converter-section">
    <h2>Video to GIF Converter</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Video Duration: </span>
        <span id="videoDuration">0 seconds</span>
      </div>
      <div class="counter-item">
        <span>Video Size: </span>
        <span id="videoSize">0 MB</span>
      </div>
      <div class="counter-item">
        <span>GIF Size: </span>
        <span id="gifSize">0 MB</span>
      </div>
      <div class="counter-item">
        <span>Conversion Time: </span>
        <span id="conversionTime">0 seconds</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Upload Video <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      
      <div class="file-upload-section">
        <button class="file-upload-button" id="selectVideoBtn">
          <i class="fas fa-video"></i> Select Video File
        </button>
        <span id="fileName">No file selected</span>
        
        <div class="file-info">
          Supported formats: MP4, WebM, MOV, AVI (Max 100MB)
        </div>
      </div>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="videoFileUpload" accept="video/*,.mp4,.webm,.mov,.avi" style="display: none;">

    <!-- Video and GIF Preview -->
    <div class="preview-section">
      <div class="preview-box">
        <h3>Video Preview</h3>
        <div class="video-preview">
          <div class="placeholder-text" id="videoPlaceholder">
            <i class="fas fa-video fa-3x" style="margin-bottom: 10px;"></i>
            <p>Video will appear here</p>
          </div>
          <video id="videoPlayer" controls style="display: none;"></video>
        </div>
      </div>
      
      <div class="preview-box">
        <h3>GIF Preview</h3>
        <div class="gif-preview">
          <div class="placeholder-text" id="gifPlaceholder">
            <i class="fas fa-image fa-3x" style="margin-bottom: 10px;"></i>
            <p>Converted GIF will appear here</p>
          </div>
          <img id="gifPreview" style="display: none;" alt="Converted GIF">
        </div>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="progress-container" style="display: none;" id="progressContainer">
      <div class="progress-bar">
        <div class="progress-fill" id="progressFill"></div>
      </div>
      <div class="progress-text" id="progressText">Initializing converter...</div>
    </div>

    <!-- GIF Conversion Options -->
    <div class="formatting-options">
      <div class="option-group">
        <label class="option-label">Start Time (seconds)</label>
        <input type="number" id="startTime" class="option-input" min="0" value="0" step="0.1">
      </div>
      
      <div class="option-group">
        <label class="option-label">Duration (seconds)</label>
        <input type="number" id="gifDuration" class="option-input" min="0.1" max="30" value="5" step="0.1">
      </div>
      
      <div class="option-group">
        <label class="option-label">Frame Rate (FPS)</label>
        <select id="frameRate" class="option-select">
          <option value="5">5 FPS (Smaller file)</option>
          <option value="10" selected>10 FPS (Recommended)</option>
          <option value="15">15 FPS (Smoother)</option>
          <option value="24">24 FPS (High quality)</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">GIF Width (pixels)</label>
        <select id="gifWidth" class="option-select">
          <option value="320">320px (Small)</option>
          <option value="480">480px (Medium)</option>
          <option value="640" selected>640px (Recommended)</option>
          <option value="800">800px (Large)</option>
          <option value="original">Original Size</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="optimizeGif" checked>
          <label for="optimizeGif">Optimize GIF size</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="loopGif" checked>
          <label for="loopGif">Loop GIF infinitely</label>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="options-section">
      <div class="button-section">
        <button class="case-button" id="convertBtn" data-action="convert">
          <i class="fas fa-sync-alt"></i> Convert to GIF
        </button>
        <button class="case-button success" id="downloadGifBtn" data-action="download" disabled>
          <i class="fas fa-download"></i> Download GIF
        </button>
        <button class="case-button secondary" id="previewBtn" data-action="preview" disabled>
          <i class="fas fa-eye"></i> Preview GIF
        </button>
        <button class="case-button warning" id="adjustBtn" data-action="adjust">
          <i class="fas fa-sliders-h"></i> Adjust Settings
        </button>
        <button class="case-button danger" id="resetBtn" data-action="reset">
          <i class="fas fa-redo"></i> Reset
        </button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>How It Works</h2>

      <h3>Step 1: Upload Video</h3>
      <div class="example-text">Click "Select Video File" button and choose your video file (MP4, WebM, MOV, or AVI). The video will load and preview automatically.</div>

      <h3>Step 2: Adjust Settings</h3>
      <div class="example-text">Set the start time, duration, frame rate, and size for your GIF. You can preview the video to choose the perfect segment.</div>

      <h3>Step 3: Convert to GIF</h3>
      <div class="example-text">Click "Convert to GIF" button. The conversion happens in your browser using WebAssembly technology - no data is sent to any server.</div>

      <h3>Step 4: Download GIF</h3>
      <div class="example-text">Once conversion is complete, click "Download GIF" to save your animated GIF to your device.</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Video to GIF Converter Tool</h2>

    <p>Need to convert a video to an animated GIF quickly and easily? Our free <strong>Video to GIF Converter</strong> is the perfect solution. Convert MP4, WebM, MOV, and AVI videos to high-quality animated GIFs directly in your browser with no software installation required. Your videos never leave your computer - all processing happens locally, ensuring complete privacy and security.</p>

    <h3>How to Use This Video to GIF Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Upload Video:</strong> Click the "Select Video File" button and choose your video file. Supported formats include MP4, WebM, MOV, and AVI up to 100MB.</li>
      <li><strong>Preview Video:</strong> Use the video player to preview your video and identify the segment you want to convert to GIF.</li>
      <li><strong>Adjust Settings:</strong> Set the start time, duration (up to 30 seconds), frame rate, and dimensions for your GIF. Lower frame rates and smaller dimensions create smaller files.</li>
      <li><strong>Convert to GIF:</strong> Click the "Convert to GIF" button. The conversion happens in your browser using WebAssembly technology - no data is uploaded to any server.</li>
      <li><strong>Download & Share:</strong> Once conversion is complete, click "Download GIF" to save your animated GIF to your device.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you recorded a funny 10-second moment in a video and want to share it as a GIF on social media. Instead of using complicated video editing software, you can simply upload your video to this tool, select the exact 5-second segment you want, adjust the settings for optimal file size, and convert it to a GIF in seconds. The result is a shareable animated GIF that's perfect for Twitter, Discord, WhatsApp, or any platform that supports GIFs.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Social Media Users:</strong> Create GIFs from videos to share funny moments, reactions, or highlights on platforms like Twitter, Facebook, and Reddit.</li>
      <li><strong>Content Creators:</strong> Convert video clips to GIFs for use in blogs, articles, or tutorials to demonstrate concepts without requiring video playback.</li>
      <li><strong>Developers & Designers:</strong> Create animated GIFs for website loading animations, product demonstrations, or UI/UX prototypes.</li>
      <li><strong>Gamers:</strong> Convert gameplay highlights to GIFs to share epic moments with friends or on gaming communities.</li>
      <li><strong>Educators:</strong> Create animated GIFs from educational videos to illustrate concepts in presentations or learning materials.</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What video formats are supported?</strong><br>
      We support MP4, WebM, MOV, and AVI video formats. Most common video files from phones, cameras, and screen recordings work perfectly.</p>

    <p><strong>Is there a file size limit for videos?</strong><br>
      You can convert videos up to 100MB. For larger videos, we recommend trimming them first using video editing software or online tools before conversion.</p>

    <p><strong>Is my video kept private and secure when I use this tool?</strong><br>
      Absolutely. This is the most important feature of our tool. The entire conversion process happens locally in your browser using WebAssembly. Your video is never uploaded to any server - we never see, store, or have access to your video. It is 100% secure and private.</p>

    <p><strong>What's the maximum duration for a GIF?</strong><br>
      We recommend keeping GIFs under 30 seconds for optimal file size and performance. Very long GIFs can become very large files.</p>

    <p><strong>Do I need to create an account or pay to use this?</strong><br>
      No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees. You can use it as much as you want.</p>

    <h3>Why Choose Our Video to GIF Converter?</h3>
    <p>Our <strong>online Video to GIF converter</strong> stands out from other tools because of its privacy, ease of use, and advanced features. Unlike many online converters that upload your videos to their servers, our tool processes everything locally in your browser. This means your personal videos, sensitive content, and copyrighted material remain completely private. The tool also works with ffmpeg.wasm, a WebAssembly port of the powerful FFmpeg multimedia framework, ensuring high-quality conversions.</p>

    <h3>Common Applications of Video to GIF Conversion</h3>
    <p>Converting videos to GIFs has numerous practical applications:</p>
    <ul>
      <li><strong>Social Media Content:</strong> Create engaging GIFs for Twitter, Facebook, Instagram, and Reddit</li>
      <li><strong>Tutorials & Demos:</strong> Convert how-to video segments into GIFs for step-by-step tutorials</li>
      <li><strong>Reaction GIFs:</strong> Create custom reaction GIFs from movies, TV shows, or personal videos</li>
      <li><strong>Website Elements:</strong> Convert short video clips to GIFs for website banners, hero sections, or loading animations</li>
      <li><strong>Email Marketing:</strong> Use GIFs in email campaigns to demonstrate products or showcase features</li>
      <li><strong>Presentation Materials:</strong> Embed animated GIFs in PowerPoint or Google Slides presentations</li>
    </ul>
    
    <h3>Tips for Creating High-Quality GIFs</h3>
    <ul>
      <li><strong>Keep it short:</strong> GIFs under 5 seconds load faster and have smaller file sizes</li>
      <li><strong>Lower frame rates:</strong> 10 FPS is usually sufficient for most GIFs and creates smaller files</li>
      <li><strong>Resize when possible:</strong> Reducing dimensions significantly decreases file size</li>
      <li><strong>Use simple backgrounds:</strong> GIFs with less detail and motion compress better</li>
      <li><strong>Enable optimization:</strong> Always check "Optimize GIF size" for the best balance of quality and file size</li>
    </ul>
  </div>
</div>

<!-- File Upload Modal -->
<div id="uploadModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Upload Video File</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>Select a video file (MP4, WebM, MOV, AVI) to convert to GIF. Maximum file size: 100MB.</p>
      <input type="file" id="modalVideoUpload" accept="video/*,.mp4,.webm,.mov,.avi">
      <p id="fileInfo" class="file-info"></p>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelUpload">Cancel</button>
      <button class="modal-button primary" id="confirmUpload">Upload</button>
    </div>
  </div>
</div>

<!-- Settings Modal -->
<div id="settingsModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Advanced GIF Settings</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div class="option-group">
        <label class="option-label">Quality (1-30, lower is better)</label>
        <input type="range" id="gifQuality" min="1" max="30" value="10" class="option-input">
        <span id="qualityValue">10</span>
      </div>
      
      <div class="option-group">
        <label class="option-label">Colors (2-256)</label>
        <input type="range" id="gifColors" min="2" max="256" value="256" class="option-input">
        <span id="colorsValue">256 colors</span>
      </div>
      
      <div class="option-group">
        <label class="option-label">Dithering</label>
        <select id="gifDither" class="option-select">
          <option value="none">None</option>
          <option value="floyd_steinberg" selected>Floyd-Steinberg</option>
          <option value="bayer">Bayer</option>
        </select>
      </div>
      
      <div class="option-checkbox">
        <input type="checkbox" id="reverseGif">
        <label for="reverseGif">Reverse GIF</label>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelSettings">Cancel</button>
      <button class="modal-button primary" id="saveSettings">Save Settings</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const videoFileUpload = document.getElementById('videoFileUpload');
    const selectVideoBtn = document.getElementById('selectVideoBtn');
    const fileName = document.getElementById('fileName');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoPlaceholder = document.getElementById('videoPlaceholder');
    const gifPreview = document.getElementById('gifPreview');
    const gifPlaceholder = document.getElementById('gifPlaceholder');
    const convertBtn = document.getElementById('convertBtn');
    const downloadGifBtn = document.getElementById('downloadGifBtn');
    const previewBtn = document.getElementById('previewBtn');
    const adjustBtn = document.getElementById('adjustBtn');
    const resetBtn = document.getElementById('resetBtn');
    const alertContainer = document.getElementById('alertContainer');
    const progressContainer = document.getElementById('progressContainer');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    // Modal elements
    const uploadModal = document.getElementById('uploadModal');
    const settingsModal = document.getElementById('settingsModal');
    const modalVideoUpload = document.getElementById('modalVideoUpload');
    const fileInfo = document.getElementById('fileInfo');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelUpload = document.getElementById('cancelUpload');
    const confirmUpload = document.getElementById('confirmUpload');
    const cancelSettings = document.getElementById('cancelSettings');
    const saveSettings = document.getElementById('saveSettings');
    
    // Settings elements
    const startTime = document.getElementById('startTime');
    const gifDuration = document.getElementById('gifDuration');
    const frameRate = document.getElementById('frameRate');
    const gifWidth = document.getElementById('gifWidth');
    const optimizeGif = document.getElementById('optimizeGif');
    const loopGif = document.getElementById('loopGif');
    
    // Advanced settings
    const gifQuality = document.getElementById('gifQuality');
    const qualityValue = document.getElementById('qualityValue');
    const gifColors = document.getElementById('gifColors');
    const colorsValue = document.getElementById('colorsValue');
    const gifDither = document.getElementById('gifDither');
    const reverseGif = document.getElementById('reverseGif');
    
    // State variables
    let videoFile = null;
    let videoUrl = null;
    let gifUrl = null;
    let ffmpeg = null;
    let isConverting = false;
    let conversionStartTime = null;
    
    // Initialize FFmpeg
    async function initFFmpeg() {
      try {
        if (!ffmpeg) {
          ffmpeg = new FFmpeg();
          
          // Load FFmpeg
          await ffmpeg.load({
            coreURL: "https://unpkg.com/@ffmpeg/core-st@0.12.2/dist/ffmpeg-core.js",
            wasmURL: "https://unpkg.com/@ffmpeg/core-st@0.12.2/dist/ffmpeg-core.wasm",
          });
          
          console.log("FFmpeg loaded successfully");
        }
      } catch (error) {
        console.error("Failed to load FFmpeg:", error);
        showAlert("Failed to initialize video converter. Please refresh the page and try again.", "error");
      }
    }
    
    // Call initialization
    initFFmpeg();
    
    // Event listeners
    selectVideoBtn.addEventListener('click', function () {
      uploadModal.style.display = 'block';
    });
    
    // Upload icon click handler
    document.getElementById('uploadIcon').addEventListener('click', function () {
      uploadModal.style.display = 'block';
    });
    
    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        uploadModal.style.display = 'none';
        settingsModal.style.display = 'none';
        modalVideoUpload.value = '';
        fileInfo.textContent = '';
      });
    });
    
    // Close modal when clicking cancel
    cancelUpload.addEventListener('click', function() {
      uploadModal.style.display = 'none';
      modalVideoUpload.value = '';
      fileInfo.textContent = '';
    });
    
    cancelSettings.addEventListener('click', function() {
      settingsModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === uploadModal || event.target === settingsModal) {
        uploadModal.style.display = 'none';
        settingsModal.style.display = 'none';
        modalVideoUpload.value = '';
        fileInfo.textContent = '';
      }
    });
    
    // Handle file selection in modal
    modalVideoUpload.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        fileInfo.textContent = `Selected file: ${file.name} (${(file.size / (1024 * 1024)).toFixed(2)} MB)`;
      } else {
        fileInfo.textContent = '';
      }
    });
    
    // Confirm upload button
    confirmUpload.addEventListener('click', async function() {
      const file = modalVideoUpload.files[0];
      if (!file) {
        showAlert('Please select a video file first.', 'error');
        return;
      }
      
      // Check file size (max 100MB)
      if (file.size > 100 * 1024 * 1024) {
        showAlert('File size exceeds 100MB limit. Please select a smaller video.', 'error');
        return;
      }
      
      // Check file type
      const validTypes = ['video/mp4', 'video/webm', 'video/quicktime', 'video/x-msvideo', 'video/avi'];
      const validExtensions = ['.mp4', '.webm', '.mov', '.avi'];
      const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
      
      if (!validTypes.includes(file.type) && !validExtensions.includes(fileExtension)) {
        showAlert('Unsupported file format. Please upload MP4, WebM, MOV, or AVI video.', 'error');
        return;
      }
      
      // Process the file
      await handleVideoUpload(file);
      uploadModal.style.display = 'none';
      modalVideoUpload.value = '';
      fileInfo.textContent = '';
    });
    
    // Save settings button
    saveSettings.addEventListener('click', function() {
      // Update quality display
      qualityValue.textContent = gifQuality.value;
      
      // Update colors display
      const colors = gifColors.value;
      colorsValue.textContent = colors === '256' ? '256 colors' : `${colors} colors`;
      
      settingsModal.style.display = 'none';
      showAlert('Advanced settings saved.', 'success');
    });
    
    // Settings slider events
    gifQuality.addEventListener('input', function() {
      qualityValue.textContent = this.value;
    });
    
    gifColors.addEventListener('input', function() {
      const colors = this.value;
      colorsValue.textContent = colors === '256' ? '256 colors' : `${colors} colors`;
    });
    
    // Adjust button click
    adjustBtn.addEventListener('click', function() {
      settingsModal.style.display = 'block';
    });
    
    // Convert button click
    convertBtn.addEventListener('click', async function() {
      if (!videoFile) {
        showAlert('Please upload a video file first.', 'error');
        return;
      }
      
      if (isConverting) {
        showAlert('Conversion is already in progress.', 'info');
        return;
      }
      
      await convertVideoToGif();
    });
    
    // Download button click
    downloadGifBtn.addEventListener('click', function() {
      if (!gifUrl) {
        showAlert('No GIF available to download. Please convert a video first.', 'error');
        return;
      }
      
      downloadGif('converted.gif', gifUrl);
    });
    
    // Preview button click
    previewBtn.addEventListener('click', function() {
      if (!gifUrl) {
        showAlert('No GIF available to preview.', 'error');
        return;
      }
      
      // GIF is already previewed, just ensure it's visible
      gifPreview.style.display = 'block';
      gifPlaceholder.style.display = 'none';
    });
    
    // Reset button click
    resetBtn.addEventListener('click', function() {
      resetConverter();
    });
    
    // Handle video upload
    async function handleVideoUpload(file) {
      try {
        // Clean up previous video URL if exists
        if (videoUrl) {
          URL.revokeObjectURL(videoUrl);
        }
        
        videoFile = file;
        videoUrl = URL.createObjectURL(file);
        
        // Update UI
        fileName.textContent = file.name;
        
        // Show video player
        videoPlayer.src = videoUrl;
        videoPlayer.style.display = 'block';
        videoPlaceholder.style.display = 'none';
        
        // Wait for video metadata to load
        await new Promise((resolve) => {
          videoPlayer.onloadedmetadata = () => {
            // Update duration input max value
            const duration = Math.floor(videoPlayer.duration);
            gifDuration.max = Math.min(30, duration);
            
            // Update counters
            updateCounters(file, duration);
            
            // Enable convert button
            convertBtn.disabled = false;
            
            resolve();
          };
          
          videoPlayer.onerror = () => {
            showAlert('Failed to load video. The file may be corrupted or in an unsupported format.', 'error');
            resolve();
          };
        });
        
        showAlert('Video uploaded successfully! Adjust settings and click "Convert to GIF".', 'success');
        
      } catch (error) {
        console.error('Error handling video upload:', error);
        showAlert('Failed to process video file. Please try again with a different video.', 'error');
      }
    }
    
    // Update counters
    function updateCounters(file, duration) {
      // Video duration
      document.getElementById('videoDuration').textContent = `${duration.toFixed(1)} seconds`;
      
      // Video size
      const videoSizeMB = (file.size / (1024 * 1024)).toFixed(2);
      document.getElementById('videoSize').textContent = `${videoSizeMB} MB`;
      
      // Reset other counters
      document.getElementById('gifSize').textContent = `0 MB`;
      document.getElementById('conversionTime').textContent = `0 seconds`;
    }
    
    // Convert video to GIF
    async function convertWithGifJS() {
  if (!videoFile || !videoPlayer) {
    showAlert('Please upload a video first.', 'error');
    return;
  }
  
  try {
    isConverting = true;
    conversionStartTime = Date.now();
    
    // Disable buttons during conversion
    convertBtn.disabled = true;
    convertBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Converting...';
    
    // Show progress bar
    progressContainer.style.display = 'block';
    updateProgress(10, 'Initializing GIF encoder...');
    
    // Get parameters
    const params = getConversionParams();
    
    // Create canvas for frame extraction
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set dimensions
    let width = params.width > 0 ? params.width : 640;
    let height = Math.round(width * (videoPlayer.videoHeight / videoPlayer.videoWidth));
    
    canvas.width = width;
    canvas.height = height;
    
    // Create GIF instance
    const gif = new GIF({
      workers: 2,
      quality: params.quality || 10,
      width: width,
      height: height,
      workerScript: 'https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.worker.js'
    });
    
    // Set up GIF events
    gif.on('progress', function(p) {
      const percent = 30 + Math.round(p * 50);
      updateProgress(percent, `Encoding GIF: ${Math.round(p * 100)}%`);
    });
    
    // Seek to start time
    videoPlayer.currentTime = params.start;
    
    // Wait for seek
    await new Promise(resolve => {
      videoPlayer.onseeked = resolve;
    });
    
    updateProgress(20, 'Capturing video frames...');
    
    // Capture frames
    const frameInterval = 1 / params.fps;
    const totalFrames = Math.floor(params.duration * params.fps);
    
    for (let i = 0; i < totalFrames; i++) {
      // Draw frame to canvas
      ctx.drawImage(videoPlayer, 0, 0, width, height);
      
      // Add frame to GIF
      gif.addFrame(canvas, { delay: 1000 / params.fps, copy: true });
      
      // Update progress
      const progress = 20 + (i / totalFrames) * 10;
      updateProgress(progress, `Capturing frame ${i + 1} of ${totalFrames}`);
      
      // Seek to next frame
      videoPlayer.currentTime = params.start + (i * frameInterval);
      
      // Small delay for seek
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    updateProgress(80, 'Rendering GIF...');
    
    // Render GIF
    await new Promise((resolve, reject) => {
      gif.on('finished', function(blob) {
        resolve(blob);
      });
      
      gif.on('error', function(error) {
        reject(error);
      });
      
      gif.render();
    }).then(async function(blob) {
      // Create URL for the GIF
      if (gifUrl) {
        URL.revokeObjectURL(gifUrl);
      }
      
      gifUrl = URL.createObjectURL(blob);
      
      // Display the GIF
      gifPreview.src = gifUrl;
      gifPreview.style.display = 'block';
      gifPlaceholder.style.display = 'none';
      
      // Update counters
      const gifSizeMB = (blob.size / (1024 * 1024)).toFixed(2);
      document.getElementById('gifSize').textContent = `${gifSizeMB} MB`;
      
      const conversionTime = ((Date.now() - conversionStartTime) / 1000).toFixed(1);
      document.getElementById('conversionTime').textContent = `${conversionTime} seconds`;
      
      // Enable download and preview buttons
      downloadGifBtn.disabled = false;
      previewBtn.disabled = false;
      
      updateProgress(100, 'Conversion complete!');
      showAlert(`Video converted to GIF successfully! File size: ${gifSizeMB} MB`, 'success');
    });
    
  } catch (error) {
    console.error('GIF.js conversion error:', error);
    showAlert('Failed to convert video to GIF. Please try with shorter duration.', 'error');
    updateProgress(0, 'Conversion failed');
  } finally {
    setTimeout(() => {
      progressContainer.style.display = 'none';
    }, 2000);
    
    convertBtn.disabled = false;
    convertBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Convert to GIF';
    isConverting = false;
  }
    }
    // Get conversion parameters from UI
    function getConversionParams() {
      const duration = parseFloat(gifDuration.value);
      const fps = parseInt(frameRate.value);
      const width = gifWidth.value === 'original' ? -1 : parseInt(gifWidth.value);
      const start = parseFloat(startTime.value);
      const quality = parseInt(gifQuality.value);
      const colors = parseInt(gifColors.value);
      const dither = gifDither.value;
      const reverse = reverseGif.checked;
      const optimize = optimizeGif.checked;
      const loop = loopGif.checked ? 0 : 1; // 0 = infinite loop, 1 = play once
      
      return {
        start,
        duration,
        fps,
        width,
        quality,
        colors,
        dither,
        reverse,
        optimize,
        loop
      };
    }
    
    // Build FFmpeg command from parameters
    function buildFFmpegCommand(params) {
      let command = `-ss ${params.start} -t ${params.duration} -i input.mp4`;
      
      // Apply reverse if needed
      if (params.reverse) {
        command += ' -vf reverse';
      }
      
      // Add filters for GIF conversion
      let filters = [];
      
      // Scale filter if width is specified
      if (params.width > 0) {
        filters.push(`scale=${params.width}:-1:flags=lanczos`);
      }
      
      // FPS filter
      filters.push(`fps=${params.fps}`);
      
      // Split and palette generation for better quality
      if (params.optimize) {
        command += ` -filter_complex "[0:v]${filters.join(',')},split[a][b];[a]palettegen=${params.colors}:dither=${params.dither}[p];[b][p]paletteuse=dither=${params.dither}"`;
      } else {
        command += ` -vf "${filters.join(',')}"`;
      }
      
      // Output options
      command += ` -loop ${params.loop} -gifflags -offsetting`;
      
      // Quality setting (lower is better for GIF)
      if (params.quality) {
        command += ` -quality ${params.quality}`;
      }
      
      command += ' output.gif';
      
      return command;
    }
    
    // Update progress bar
    function updateProgress(percent, message) {
      progressFill.style.width = `${percent}%`;
      progressText.textContent = message;
    }
    
    // Download GIF
    function downloadGif(filename, url) {
      const element = document.createElement('a');
      element.setAttribute('href', url);
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showAlert('GIF downloaded successfully!', 'success');
    }
    
    // Reset converter
    function resetConverter() {
      // Clean up URLs
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
        videoUrl = null;
      }
      
      if (gifUrl) {
        URL.revokeObjectURL(gifUrl);
        gifUrl = null;
      }
      
      // Reset video player
      videoPlayer.src = '';
      videoPlayer.style.display = 'none';
      videoPlaceholder.style.display = 'block';
      
      // Reset GIF preview
      gifPreview.src = '';
      gifPreview.style.display = 'none';
      gifPlaceholder.style.display = 'block';
      
      // Reset file info
      fileName.textContent = 'No file selected';
      videoFile = null;
      
      // Reset counters
      document.getElementById('videoDuration').textContent = '0 seconds';
      document.getElementById('videoSize').textContent = '0 MB';
      document.getElementById('gifSize').textContent = '0 MB';
      document.getElementById('conversionTime').textContent = '0 seconds';
      
      // Disable buttons
      convertBtn.disabled = true;
      downloadGifBtn.disabled = true;
      previewBtn.disabled = true;
      
      // Reset progress bar
      progressContainer.style.display = 'none';
      
      showAlert('Converter has been reset. You can upload a new video.', 'info');
    }
    
    // Show alert
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
    
    // Initialize UI state
    convertBtn.disabled = true;
    downloadGifBtn.disabled = true;
    previewBtn.disabled = true;
  });
</script>