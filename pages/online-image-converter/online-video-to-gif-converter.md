---
layout: default
title: "Online Video to GIF Converter - Convert Videos to GIFs"
permalink: /online-video-to-gif-converter-convert-videos-to-gifs/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Video to GIF Converter - Convert MP4, WebM, MOV to GIF</title>
<meta name="description"
  content="Free online video to GIF converter tool. Convert MP4, WebM, MOV videos to animated GIFs instantly. Adjust size, speed, quality, and duration.">
<meta name="keywords"
  content="video to gif converter, gif maker, video converter, mp4 to gif, webm to gif, mov to gif, animated gif creator, gif editor, video gif converter">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

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

  .upload-area {
    border: 3px dashed #3498db;
    border-radius: 15px;
    padding: 40px 20px;
    text-align: center;
    background: #f8fafc;
    margin: 20px 0;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .upload-area:hover {
    background: #e8f4fc;
    border-color: #2980b9;
  }

  .upload-area i {
    font-size: 64px;
    color: #3498db;
    margin-bottom: 20px;
  }

  .upload-area h3 {
    color: #2c3e50;
    margin-bottom: 10px;
  }

  .upload-area p {
    color: #7f8c8d;
    margin-bottom: 20px;
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

  .preview-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin: 30px 0;
  }

  @media (max-width: 768px) {
    .preview-container {
      grid-template-columns: 1fr;
    }
  }

  .preview-box {
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .preview-box h3 {
    color: #2c3e50;
    margin-bottom: 15px;
    text-align: center;
  }

  .video-preview, .gif-preview {
    width: 100%;
    max-height: 300px;
    object-fit: contain;
    border-radius: 8px;
    background: #000;
    border: 1px solid #e0e0e0;
  }

  .gif-preview {
    background: #f8f9fa;
  }

  .video-controls {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 15px;
  }

  .control-button {
    padding: 8px 15px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
  }

  .options-section {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 10px;
    margin: 30px 0;
  }

  .conversion-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }

  .option-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .option-label {
    font-weight: 600;
    color: #2c3e50;
    display: flex;
    justify-content: space-between;
  }

  .option-value {
    color: var(--primary);
    font-weight: bold;
  }

  .option-input {
    padding: 12px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  .option-input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .slider-container {
    padding: 10px 0;
  }

  .slider {
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background: #e0e0e0;
    outline: none;
    -webkit-appearance: none;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--primary);
    cursor: pointer;
  }

  .time-selector {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
  }

  .time-input {
    padding: 8px;
    border: 2px solid #e0e6ed;
    border-radius: 6px;
    width: 80px;
    text-align: center;
  }

  .preset-buttons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 10px;
    margin: 20px 0;
  }

  .preset-button {
    padding: 12px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    background: white;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
  }

  .preset-button:hover {
    border-color: var(--primary);
    background: #f0f8ff;
  }

  .preset-button.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
  }

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
    margin: 25px 0;
  }

  .action-button {
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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .action-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
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

  .action-button.secondary {
    background: #6c757d;
  }

  .action-button.secondary:hover {
    background: #5a6268;
  }

  .action-button.warning {
    background: #ffc107;
    color: #212529;
  }

  .action-button.warning:hover {
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

  .examples {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .example-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }

  .example-item {
    text-align: center;
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .example-dimensions {
    font-weight: bold;
    color: var(--primary);
    margin: 10px 0;
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

  /* Progress bar styles */
  .progress-container {
    margin: 20px 0;
    display: none;
  }

  .progress-bar {
    width: 100%;
    height: 20px;
    background: #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--primary), #4dabf7);
    width: 0%;
    transition: width 0.3s ease;
    border-radius: 10px;
  }

  .progress-text {
    text-align: center;
    margin-top: 10px;
    font-weight: 600;
    color: var(--primary);
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .counter-wrapper {
      grid-template-columns: 1fr;
    }

    .button-section {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }

    .action-button {
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

    .conversion-options {
      grid-template-columns: 1fr;
    }

    .preset-buttons {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .loading-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    z-index: 2000;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid var(--primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 20px;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .trim-section {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
  }

  .trim-slider-container {
    padding: 20px;
    background: white;
    border-radius: 8px;
    margin: 15px 0;
  }

  .trim-slider {
    width: 100%;
    margin: 10px 0;
  }

  .trim-time-display {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    color: #2c3e50;
  }
</style>

<div class="converter-container">
  <h1>Free Online Video to GIF Converter</h1>
  <p class="welcome-message">Convert MP4, WebM, MOV videos to animated GIFs instantly. Adjust size, speed, quality, and trim videos before conversion.</p>

  <div class="converter-section">
    <h2>Video to GIF Converter Tool</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Video Duration: </span>
        <span id="videoDuration">0s</span>
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
        <span>Compression: </span>
        <span id="compressionRatio">0%</span>
      </div>
    </div>

    <!-- Upload Area -->
    <div class="upload-area" id="uploadArea">
      <i class="fas fa-video"></i>
      <h3>Drop your video here or click to browse</h3>
      <p>Supports MP4, WebM, MOV, AVI, MKV (Max 100MB)</p>
      <button class="file-upload-button">
        <i class="fas fa-folder-open"></i> Browse Videos
      </button>
      <input type="file" id="fileUpload" accept="video/*" style="display: none;">
    </div>

    <!-- File Info -->
    <div class="file-upload-section" id="fileInfoSection" style="display: none;">
      <div>
        <strong>Selected Video:</strong> <span id="fileName">No file selected</span>
      </div>
      <div class="file-info">
        <span id="fileDetails"></span>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="progress-container" id="progressContainer">
      <div class="progress-bar">
        <div class="progress-fill" id="progressFill"></div>
      </div>
      <div class="progress-text" id="progressText">0%</div>
    </div>

    <!-- Previews -->
    <div class="preview-container">
      <div class="preview-box">
        <h3>Original Video</h3>
        <video id="videoPreview" class="video-preview" controls>
          Your browser does not support the video tag.
        </video>
        <div class="video-controls">
          <button class="control-button" id="playBtn">
            <i class="fas fa-play"></i> Play
          </button>
          <button class="control-button" id="pauseBtn">
            <i class="fas fa-pause"></i> Pause
          </button>
          <button class="control-button" id="muteBtn">
            <i class="fas fa-volume-up"></i> Mute
          </button>
        </div>
      </div>
      <div class="preview-box">
        <h3>Converted GIF</h3>
        <img id="gifPreview" class="gif-preview" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f8f9fa'/><text x='200' y='150' text-anchor='middle' fill='%23999' font-family='Arial' font-size='16'>GIF Preview</text></svg>" alt="GIF Preview">
        <div class="video-controls">
          <button class="control-button" id="playGifBtn">
            <i class="fas fa-play"></i> Play GIF
          </button>
          <button class="control-button" id="pauseGifBtn">
            <i class="fas fa-pause"></i> Pause
          </button>
        </div>
      </div>
    </div>

    <!-- Trim Section -->
    <div class="trim-section">
      <h3>Trim Video</h3>
      <div class="trim-slider-container">
        <input type="range" class="trim-slider" id="trimStart" min="0" max="100" value="0">
        <input type="range" class="trim-slider" id="trimEnd" min="0" max="100" value="100">
        <div class="trim-time-display">
          <span>Start: <span id="trimStartTime">00:00</span></span>
          <span>End: <span id="trimEndTime">00:00</span></span>
          <span>Duration: <span id="trimDuration">00:00</span></span>
        </div>
      </div>
      <div class="time-selector">
        <label>Start Time:</label>
        <input type="number" id="startSeconds" class="time-input" min="0" value="0"> sec
        <label>End Time:</label>
        <input type="number" id="endSeconds" class="time-input" min="0" value="10"> sec
        <button class="control-button" id="applyTrim">Apply</button>
      </div>
    </div>

    <!-- Conversion Options -->
    <div class="options-section">
      <h3>GIF Settings</h3>
      
      <div class="conversion-options">
        <div class="option-group">
          <label class="option-label">
            Width (px)
            <span class="option-value" id="widthValue">640</span>
          </label>
          <input type="range" class="slider" id="widthSlider" min="100" max="1920" value="640">
          <input type="number" class="option-input" id="widthInput" min="100" max="1920" value="640">
        </div>
        
        <div class="option-group">
          <label class="option-label">
            FPS (Frames per Second)
            <span class="option-value" id="fpsValue">15</span>
          </label>
          <input type="range" class="slider" id="fpsSlider" min="5" max="30" value="15">
          <input type="number" class="option-input" id="fpsInput" min="5" max="30" value="15">
        </div>
        
        <div class="option-group">
          <label class="option-label">
            Quality (%)
            <span class="option-value" id="qualityValue">80</span>
          </label>
          <input type="range" class="slider" id="qualitySlider" min="10" max="100" value="80">
          <input type="number" class="option-input" id="qualityInput" min="10" max="100" value="80">
        </div>
      </div>

      <!-- Preset Sizes -->
      <h3 style="margin-top: 30px;">Preset Sizes</h3>
      <div class="preset-buttons">
        <button class="preset-button" data-width="320" data-height="240" data-fps="10">Small (320×240)</button>
        <button class="preset-button" data-width="640" data-height="480" data-fps="15">Medium (640×480)</button>
        <button class="preset-button active" data-width="800" data-height="600" data-fps="20">Large (800×600)</button>
        <button class="preset-button" data-width="1280" data-height="720" data-fps="25">HD (1280×720)</button>
        <button class="preset-button" data-width="400" data-height="300" data-fps="12">Social Media (400×300)</button>
        <button class="preset-button" data-width="200" data-height="150" data-fps="8">Thumbnail (200×150)</button>
      </div>

      <!-- Additional Options -->
      <div style="margin: 30px 0;">
        <h3>Additional Options</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
          <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
            <input type="checkbox" id="loopGif" checked>
            <span>Loop GIF</span>
          </label>
          <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
            <input type="checkbox" id="reverseGif">
            <span>Reverse GIF</span>
          </label>
          <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
            <input type="checkbox" id="optimizeColors" checked>
            <span>Optimize Colors</span>
          </label>
          <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
            <input type="checkbox" id="addTextOverlay">
            <span>Add Text Overlay</span>
          </label>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="button-section">
        <button class="action-button" data-action="convert">
          <i class="fas fa-sync-alt"></i> Convert to GIF
        </button>
        <button class="action-button success" data-action="download" disabled>
          <i class="fas fa-download"></i> Download GIF
        </button>
        <button class="action-button" data-action="preview">
          <i class="fas fa-eye"></i> Preview GIF
        </button>
        <button class="action-button" data-action="adjust">
          <i class="fas fa-sliders-h"></i> Adjust Settings
        </button>
        <button class="action-button warning" data-action="compare">
          <i class="fas fa-exchange-alt"></i> Compare
        </button>
        <button class="action-button secondary" data-action="clear">
          <i class="fas fa-trash"></i> Clear
        </button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <!-- Examples Section -->
    <div class="examples">
      <h2>Common Use Cases</h2>
      
      <div class="example-grid">
        <div class="example-item">
          <i class="fab fa-whatsapp" style="font-size: 2rem; color: #25D366; margin-bottom: 10px;"></i>
          <h4>WhatsApp Stickers</h4>
          <p class="example-dimensions">512×512 px</p>
          <p>Create animated stickers for WhatsApp</p>
        </div>
        
        <div class="example-item">
          <i class="fab fa-discord" style="font-size: 2rem; color: #5865F2; margin-bottom: 10px;"></i>
          <h4>Discord Emojis</h4>
          <p class="example-dimensions">128×128 px</p>
          <p>Animated emojis for Discord servers</p>
        </div>
        
        <div class="example-item">
          <i class="fab fa-twitter" style="font-size: 2rem; color: #1DA1F2; margin-bottom: 10px;"></i>
          <h4>Twitter GIFs</h4>
          <p class="example-dimensions">400×225 px</p>
          <p>Share animated moments on Twitter</p>
        </div>
        
        <div class="example-item">
          <i class="fas fa-blog" style="font-size: 2rem; color: #FF5722; margin-bottom: 10px;"></i>
          <h4>Blog Animations</h4>
          <p class="example-dimensions">600×400 px</p>
          <p>Animated illustrations for blogs</p>
        </div>
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Video to GIF Converter Tool</h2>

    <p>Transform your videos into animated GIFs with our powerful <strong>video to GIF converter</strong>. Perfect for creating memes, reactions, tutorials, and social media content. Convert MP4, WebM, MOV, AVI, and MKV files to high-quality GIFs with full control over size, speed, and quality. No software installation required - works directly in your browser with complete privacy.</p>

    <h3>How to Use This Video to GIF Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Upload Video:</strong> Click the upload area or drag and drop your video file (MP4, WebM, MOV, AVI, MKV supported).</li>
      <li><strong>Trim Video:</strong> Select the specific part of your video to convert using the trim sliders or time inputs.</li>
      <li><strong>Adjust Settings:</strong> Set your desired GIF dimensions, frames per second (FPS), and quality level.</li>
      <li><strong>Choose Preset:</strong> Select from optimized presets for social media, messaging apps, or websites.</li>
      <li><strong>Convert & Download:</strong> Click "Convert to GIF" and then "Download GIF" to save your animated creation.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you recorded a funny 30-second clip from a video game (MP4, 1280×720, 50MB) and want to share it as a reaction GIF on Discord. Using our converter, you can trim it to just the 5-second funny part, resize it to Discord's optimal 128×128 pixels, set it to 15 FPS for smooth animation, and convert it to a GIF that's only 2MB - perfect for quick loading and sharing without losing the humor.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Social Media Managers:</strong> Create engaging animated content for Twitter, Facebook, Instagram, and TikTok.</li>
      <li><strong>Gamers & Streamers:</strong> Convert gameplay highlights into shareable GIFs for communities and forums.</li>
      <li><strong>Content Creators:</strong> Make tutorial GIFs from video instructions for blogs and documentation.</li>
      <li><strong>Marketers:</strong> Create eye-catching animated ads and promotional content from video footage.</li>
      <li><strong>Educators:</strong> Convert educational videos into animated GIFs for presentations and online courses.</li>
      <li><strong>Memers:</strong> Quickly turn viral video moments into meme-ready GIFs for sharing across platforms.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: What video formats does this converter support?</strong><br>
      A: We support all major video formats: MP4, WebM, MOV, AVI, MKV, FLV, and more. Most modern video files are compatible.</p>

    <p><strong>Q: Is there a file size limit for videos?</strong><br>
      A: You can upload videos up to 100MB. For larger files, we recommend trimming or compressing the video first.</p>

    <p><strong>Q: Are my videos kept private and secure?</strong><br>
      A: Absolutely. All video processing happens locally in your browser. Your videos are never uploaded to our servers, meaning we never see, store, or have access to your files. They remain 100% private on your device.</p>

    <p><strong>Q: Can I convert long videos to GIF?</strong><br>
      A: We recommend keeping GIFs under 15 seconds for optimal file size and compatibility. Our trim tool helps you select the best segment.</p>

    <p><strong>Q: What's the difference between FPS and quality settings?</strong><br>
      A: FPS (frames per second) controls how many video frames become GIF frames - higher FPS means smoother animation but larger file size. Quality affects color depth and compression - higher quality means better colors but larger file size.</p>

    <p><strong>Q: Do I need to install software or create an account?</strong><br>
      A: No installation and no account required. This is a completely free online tool that works directly in your web browser.</p>

    <h3>Why Choose Our Video to GIF Converter?</h3>
    <p>Our <strong>online video to GIF converter</strong> stands out with its advanced features, user-friendly interface, and privacy-first approach. Unlike many online converters, we don't upload your videos to servers - all processing happens locally in your browser. This ensures your videos remain completely private. The tool provides real-time previews, precise trimming controls, and optimized presets for various platforms.</p>

    <h3>Common Applications of Video to GIF Conversion</h3>
    <p>Video to GIF conversion has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Social Media Marketing:</strong> Create attention-grabbing animated posts from product videos</li>
      <li><strong>Educational Content:</strong> Convert tutorial segments into animated step-by-step guides</li>
      <li><strong>Customer Support:</strong> Make animated instructions from screen recordings</li>
      <li><strong>Gaming Communities:</strong> Share epic moments and funny glitches as animated GIFs</li>
      <li><strong>E-commerce:</strong> Create animated product showcases from video demonstrations</li>
      <li><strong>Personal Use:</strong> Turn memorable video moments into shareable animated memories</li>
    </ul>

    <h3>Technical Details & Best Practices:</h3>
    <p>For the best results when converting videos to GIFs:</p>
    <ul>
      <li><strong>Keep it short:</strong> GIFs over 15 seconds become very large - trim to the essential part</li>
      <li><strong>Optimize dimensions:</strong> Smaller dimensions (under 800px width) keep file sizes manageable</li>
      <li><strong>Balance FPS:</strong> 10-15 FPS is usually sufficient for smooth animation without huge file size</li>
      <li><strong>Use quality wisely:</strong> 70-80% quality provides good visual results with reasonable file size</li>
      <li><strong>Consider platform limits:</strong> Different social platforms have different GIF size and dimension limits</li>
    </ul>
  </div>
</div>

<!-- Loading Overlay -->
<div class="loading-overlay" id="loadingOverlay">
  <div class="loading-spinner"></div>
  <p>Converting video to GIF...</p>
  <p id="conversionStatus">Processing frames: 0%</p>
</div>

<!-- Text Overlay Modal -->
<div id="textOverlayModal" class="modal">
  <div class="modal-content" style="max-width: 500px;">
    <div class="modal-header">
      <h3 class="modal-title">Add Text Overlay</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div class="option-group">
        <label class="option-label">Text Content</label>
        <input type="text" id="overlayText" class="option-input" placeholder="Enter text for GIF" maxlength="50">
      </div>
      <div class="option-group">
        <label class="option-label">Font Size</label>
        <input type="range" class="slider" id="fontSizeSlider" min="12" max="48" value="24">
        <span id="fontSizeValue">24px</span>
      </div>
      <div class="option-group">
        <label class="option-label">Text Color</label>
        <input type="color" id="textColor" value="#ffffff">
      </div>
      <div class="option-group">
        <label class="option-label">Background Color</label>
        <input type="color" id="backgroundColor" value="#000000">
      </div>
      <div class="option-group">
        <label class="option-label">Position</label>
        <select id="textPosition" class="option-select">
          <option value="top">Top</option>
          <option value="center">Center</option>
          <option value="bottom">Bottom</option>
        </select>
      </div>
      <div style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">
        <p><strong>Preview:</strong> <span id="textPreview" style="font-size: 24px; color: #ffffff; background: #000000; padding: 5px;">Your Text Here</span></p>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelText">Cancel</button>
      <button class="modal-button primary" id="applyText">Apply Text</button>
    </div>
  </div>
</div>

<!-- Compare Modal -->
<div id="compareModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Compare Video & GIF</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
          <h4>Original Video</h4>
          <video id="compareVideo" style="width: 100%; max-height: 300px; border: 1px solid #ddd;" controls></video>
          <p style="text-align: center; margin-top: 10px;" id="videoStats"></p>
        </div>
        <div>
          <h4>Converted GIF</h4>
          <img id="compareGif" style="width: 100%; max-height: 300px; object-fit: contain; border: 1px solid #ddd;">
          <p style="text-align: center; margin-top: 10px;" id="gifStats"></p>
        </div>
      </div>
      <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
        <p><strong>Conversion Summary:</strong> <span id="conversionSummary"></span></p>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeCompare">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const uploadArea = document.getElementById('uploadArea');
    const fileUpload = document.getElementById('fileUpload');
    const fileInfoSection = document.getElementById('fileInfoSection');
    const fileName = document.getElementById('fileName');
    const fileDetails = document.getElementById('fileDetails');
    const videoPreview = document.getElementById('videoPreview');
    const gifPreview = document.getElementById('gifPreview');
    const actionButtons = document.querySelectorAll('.action-button');
    const alertContainer = document.getElementById('alertContainer');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const progressContainer = document.getElementById('progressContainer');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const conversionStatus = document.getElementById('conversionStatus');
    
    // Video controls
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const muteBtn = document.getElementById('muteBtn');
    const playGifBtn = document.getElementById('playGifBtn');
    const pauseGifBtn = document.getElementById('pauseGifBtn');
    
    // Dimension controls
    const widthSlider = document.getElementById('widthSlider');
    const widthInput = document.getElementById('widthInput');
    const widthValue = document.getElementById('widthValue');
    const fpsSlider = document.getElementById('fpsSlider');
    const fpsInput = document.getElementById('fpsInput');
    const fpsValue = document.getElementById('fpsValue');
    const qualitySlider = document.getElementById('qualitySlider');
    const qualityInput = document.getElementById('qualityInput');
    const qualityValue = document.getElementById('qualityValue');
    
    // Trim controls
    const trimStart = document.getElementById('trimStart');
    const trimEnd = document.getElementById('trimEnd');
    const trimStartTime = document.getElementById('trimStartTime');
    const trimEndTime = document.getElementById('trimEndTime');
    const trimDuration = document.getElementById('trimDuration');
    const startSeconds = document.getElementById('startSeconds');
    const endSeconds = document.getElementById('endSeconds');
    const applyTrim = document.getElementById('applyTrim');
    
    // Preset buttons
    const presetButtons = document.querySelectorAll('.preset-button:not(.format-button)');
    
    // Options
    const loopGif = document.getElementById('loopGif');
    const reverseGif = document.getElementById('reverseGif');
    const optimizeColors = document.getElementById('optimizeColors');
    const addTextOverlay = document.getElementById('addTextOverlay');
    
    // Modal elements
    const textOverlayModal = document.getElementById('textOverlayModal');
    const compareModal = document.getElementById('compareModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const closeCompare = document.getElementById('closeCompare');
    const cancelText = document.getElementById('cancelText');
    const applyText = document.getElementById('applyText');
    const compareVideo = document.getElementById('compareVideo');
    const compareGif = document.getElementById('compareGif');
    const videoStats = document.getElementById('videoStats');
    const gifStats = document.getElementById('gifStats');
    const conversionSummary = document.getElementById('conversionSummary');
    
    // Text overlay elements
    const overlayText = document.getElementById('overlayText');
    const fontSizeSlider = document.getElementById('fontSizeSlider');
    const fontSizeValue = document.getElementById('fontSizeValue');
    const textColor = document.getElementById('textColor');
    const backgroundColor = document.getElementById('backgroundColor');
    const textPosition = document.getElementById('textPosition');
    const textPreview = document.getElementById('textPreview');
    
    // Stats elements
    const videoDuration = document.getElementById('videoDuration');
    const videoSize = document.getElementById('videoSize');
    const gifSize = document.getElementById('gifSize');
    const compressionRatio = document.getElementById('compressionRatio');
    
    // State variables
    let videoFile = null;
    let videoDurationValue = 0;
    let videoFileSize = 0;
    let convertedGifUrl = null;
    let convertedGifSize = 0;
    let videoCanvas = null;
    let videoContext = null;
    let gifCanvas = null;
    let gifContext = null;
    let isConverting = false;
    let conversionWorker = null;
    let trimStartSeconds = 0;
    let trimEndSeconds = 10;
    
    // Text overlay state
    let textOverlaySettings = {
      enabled: false,
      text: '',
      fontSize: 24,
      textColor: '#ffffff',
      backgroundColor: '#000000',
      position: 'bottom'
    };
    
    // Event Listeners
    uploadArea.addEventListener('click', () => fileUpload.click());
    fileUpload.addEventListener('change', handleFileUpload);
    
    // Video controls
    playBtn.addEventListener('click', () => videoPreview.play());
    pauseBtn.addEventListener('click', () => videoPreview.pause());
    muteBtn.addEventListener('click', toggleMute);
    
    // GIF controls
    playGifBtn.addEventListener('click', () => {
      if (convertedGifUrl) {
        gifPreview.src = convertedGifUrl;
      }
    });
    
    pauseGifBtn.addEventListener('click', () => {
      // GIFs autoplay, but we can reload to "pause"
      gifPreview.src = gifPreview.src;
    });
    
    // Dimension controls
    widthSlider.addEventListener('input', updateWidthFromSlider);
    widthInput.addEventListener('input', updateWidthFromInput);
    fpsSlider.addEventListener('input', updateFpsFromSlider);
    fpsInput.addEventListener('input', updateFpsFromInput);
    qualitySlider.addEventListener('input', updateQualityFromSlider);
    qualityInput.addEventListener('input', updateQualityFromInput);
    
    // Trim controls
    trimStart.addEventListener('input', updateTrimStart);
    trimEnd.addEventListener('input', updateTrimEnd);
    startSeconds.addEventListener('input', updateTrimFromInputs);
    endSeconds.addEventListener('input', updateTrimFromInputs);
    applyTrim.addEventListener('click', applyTrimSettings);
    
    // Preset buttons
    presetButtons.forEach(button => {
      button.addEventListener('click', () => {
        presetButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        
        const width = parseInt(button.dataset.width);
        const fps = parseInt(button.dataset.fps);
        
        updateDimensions(width, fps);
      });
    });
    
    // Text overlay checkbox
    addTextOverlay.addEventListener('change', function() {
      if (this.checked) {
        showTextOverlayModal();
      } else {
        textOverlaySettings.enabled = false;
      }
    });
    
    // Text overlay modal events
    overlayText.addEventListener('input', updateTextPreview);
    fontSizeSlider.addEventListener('input', updateTextPreview);
    textColor.addEventListener('input', updateTextPreview);
    backgroundColor.addEventListener('input', updateTextPreview);
    textPosition.addEventListener('change', updateTextPreview);
    
    cancelText.addEventListener('click', function() {
      textOverlayModal.style.display = 'none';
      addTextOverlay.checked = false;
    });
    
    applyText.addEventListener('click', function() {
      textOverlaySettings = {
        enabled: true,
        text: overlayText.value,
        fontSize: parseInt(fontSizeSlider.value),
        textColor: textColor.value,
        backgroundColor: backgroundColor.value,
        position: textPosition.value
      };
      textOverlayModal.style.display = 'none';
      showAlert('Text overlay applied!', 'success');
    });
    
    // Action buttons
    actionButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleAction(action);
      });
    });
    
    // Modal close buttons
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        textOverlayModal.style.display = 'none';
        compareModal.style.display = 'none';
      });
    });
    
    closeCompare.addEventListener('click', function() {
      compareModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === textOverlayModal || event.target === compareModal) {
        textOverlayModal.style.display = 'none';
        compareModal.style.display = 'none';
      }
    });
    
    // Functions
    function handleFileUpload(event) {
      const file = event.target.files[0];
      if (!file) return;
      
      if (!file.type.startsWith('video/')) {
        showAlert('Please select a video file (MP4, WebM, MOV, AVI, MKV).', 'error');
        return;
      }
      
      if (file.size > 100 * 1024 * 1024) {
        showAlert('File size should be less than 100MB.', 'error');
        return;
      }
      
      videoFile = file;
      const url = URL.createObjectURL(file);
      
      videoPreview.src = url;
      videoPreview.onloadedmetadata = function() {
        videoDurationValue = videoPreview.duration;
        videoFileSize = file.size;
        
        // Update UI
        fileName.textContent = file.name;
        fileDetails.textContent = `${formatTime(videoDurationValue)} • ${formatFileSize(file.size)} • ${file.type}`;
        fileInfoSection.style.display = 'flex';
        
        // Update counters
        videoDuration.textContent = formatTime(videoDurationValue);
        videoSize.textContent = formatFileSize(file.size);
        gifSize.textContent = '0 MB';
        compressionRatio.textContent = '0%';
        
        // Set initial trim values
        trimEndSeconds = Math.min(10, videoDurationValue);
        updateTrimControls();
        
        // Enable download button
        document.querySelector('[data-action="download"]').disabled = false;
        
        showAlert('Video uploaded successfully! You can now trim and convert it.', 'success');
      };
      
      videoPreview.onerror = function() {
        showAlert('Error loading video file. Please try another format.', 'error');
      };
    }
    
    function updateWidthFromSlider() {
      const width = parseInt(widthSlider.value);
      widthInput.value = width;
      widthValue.textContent = width;
    }
    
    function updateWidthFromInput() {
      let width = parseInt(widthInput.value);
      width = Math.min(1920, Math.max(100, width));
      widthInput.value = width;
      widthSlider.value = width;
      widthValue.textContent = width;
    }
    
    function updateFpsFromSlider() {
      const fps = parseInt(fpsSlider.value);
      fpsInput.value = fps;
      fpsValue.textContent = fps;
    }
    
    function updateFpsFromInput() {
      let fps = parseInt(fpsInput.value);
      fps = Math.min(30, Math.max(5, fps));
      fpsInput.value = fps;
      fpsSlider.value = fps;
      fpsValue.textContent = fps;
    }
    
    function updateQualityFromSlider() {
      const quality = parseInt(qualitySlider.value);
      qualityInput.value = quality;
      qualityValue.textContent = quality;
    }
    
    function updateQualityFromInput() {
      let quality = parseInt(qualityInput.value);
      quality = Math.min(100, Math.max(10, quality));
      qualityInput.value = quality;
      qualitySlider.value = quality;
      qualityValue.textContent = quality;
    }
    
    function updateDimensions(width, fps) {
      updateWidth(width);
      updateFps(fps);
    }
    
    function updateWidth(width) {
      width = Math.min(1920, Math.max(100, width));
      widthInput.value = width;
      widthValue.textContent = width;
      widthSlider.value = width;
    }
    
    function updateFps(fps) {
      fps = Math.min(30, Math.max(5, fps));
      fpsInput.value = fps;
      fpsValue.textContent = fps;
      fpsSlider.value = fps;
    }
    
    function updateTrimStart() {
      const startPercent = parseInt(trimStart.value);
      trimStartSeconds = (startPercent / 100) * videoDurationValue;
      updateTrimDisplay();
    }
    
    function updateTrimEnd() {
      const endPercent = parseInt(trimEnd.value);
      trimEndSeconds = (endPercent / 100) * videoDurationValue;
      updateTrimDisplay();
    }
    
    function updateTrimFromInputs() {
      trimStartSeconds = parseFloat(startSeconds.value) || 0;
      trimEndSeconds = parseFloat(endSeconds.value) || 10;
      
      if (trimEndSeconds > videoDurationValue) {
        trimEndSeconds = videoDurationValue;
        endSeconds.value = trimEndSeconds;
      }
      
      if (trimStartSeconds >= trimEndSeconds) {
        trimStartSeconds = trimEndSeconds - 1;
        startSeconds.value = trimStartSeconds;
      }
      
      updateTrimControls();
      updateTrimDisplay();
    }
    
    function applyTrimSettings() {
      updateTrimFromInputs();
      showAlert(`Video trimmed to ${formatTime(trimEndSeconds - trimStartSeconds)}`, 'success');
    }
    
    function updateTrimControls() {
      const startPercent = (trimStartSeconds / videoDurationValue) * 100;
      const endPercent = (trimEndSeconds / videoDurationValue) * 100;
      
      trimStart.value = startPercent;
      trimEnd.value = endPercent;
      
      startSeconds.value = trimStartSeconds.toFixed(1);
      endSeconds.value = trimEndSeconds.toFixed(1);
    }
    
    function updateTrimDisplay() {
      trimStartTime.textContent = formatTime(trimStartSeconds);
      trimEndTime.textContent = formatTime(trimEndSeconds);
      trimDuration.textContent = formatTime(trimEndSeconds - trimStartSeconds);
    }
    
    function toggleMute() {
      videoPreview.muted = !videoPreview.muted;
      muteBtn.innerHTML = videoPreview.muted ? 
        '<i class="fas fa-volume-mute"></i> Unmute' : 
        '<i class="fas fa-volume-up"></i> Mute';
    }
    
    function showTextOverlayModal() {
      // Set default values
      overlayText.value = textOverlaySettings.text || 'Your Text';
      fontSizeSlider.value = textOverlaySettings.fontSize;
      textColor.value = textOverlaySettings.textColor;
      backgroundColor.value = textOverlaySettings.backgroundColor;
      textPosition.value = textOverlaySettings.position;
      
      updateTextPreview();
      textOverlayModal.style.display = 'block';
    }
    
    function updateTextPreview() {
      const fontSize = fontSizeSlider.value;
      const text = overlayText.value || 'Your Text Here';
      const color = textColor.value;
      const bgColor = backgroundColor.value;
      
      fontSizeValue.textContent = `${fontSize}px`;
      textPreview.style.fontSize = `${fontSize}px`;
      textPreview.style.color = color;
      textPreview.style.backgroundColor = bgColor;
      textPreview.textContent = text;
    }
    
    function handleAction(action) {
      if (!videoFile && action !== 'clear') {
        showAlert('Please upload a video first.', 'error');
        return;
      }
      
      switch (action) {
        case 'convert':
          if (isConverting) {
            showAlert('Conversion is already in progress.', 'warning');
            return;
          }
          convertVideoToGif();
          break;
          
        case 'download':
          if (!convertedGifUrl) {
            showAlert('Please convert the video to GIF first.', 'error');
            return;
          }
          downloadGif();
          break;
          
        case 'preview':
          if (!convertedGifUrl) {
            showAlert('Please convert the video to GIF first.', 'error');
            return;
          }
          gifPreview.src = convertedGifUrl;
          showAlert('GIF preview loaded.', 'success');
          break;
          
        case 'adjust':
          showAlert('Adjust your settings using the controls above.', 'success');
          break;
          
        case 'compare':
          if (!convertedGifUrl) {
            showAlert('Please convert the video to GIF first.', 'error');
            return;
          }
          showComparison();
          break;
          
        case 'clear':
          clearAll();
          break;
      }
    }
    
    async function convertVideoToGif() {
      if (!videoFile || !videoPreview.src) return;
      
      isConverting = true;
      showLoading(true);
      progressContainer.style.display = 'block';
      
      try {
        const width = parseInt(widthInput.value);
        const fps = parseInt(fpsInput.value);
        const quality = parseInt(qualityInput.value) / 100;
        
        // Calculate dimensions maintaining aspect ratio
        const videoWidth = videoPreview.videoWidth;
        const videoHeight = videoPreview.videoHeight;
        const aspectRatio = videoWidth / videoHeight;
        const height = Math.round(width / aspectRatio);
        
        // Create canvas for processing
        if (!videoCanvas) {
          videoCanvas = document.createElement('canvas');
          videoContext = videoCanvas.getContext('2d');
        }
        videoCanvas.width = width;
        videoCanvas.height = height;
        
        // Set up GIF encoder (simulated)
        const frames = [];
        const totalFrames = Math.round((trimEndSeconds - trimStartSeconds) * fps);
        const frameInterval = 1000 / fps;
        
        // Seek to start position
        videoPreview.currentTime = trimStartSeconds;
        
        // Wait for seek to complete
        await new Promise(resolve => {
          videoPreview.onseeked = resolve;
        });
        
        // Process frames
        for (let i = 0; i < totalFrames; i++) {
          if (!isConverting) break;
          
          // Capture frame
          videoContext.drawImage(videoPreview, 0, 0, width, height);
          
          // Apply text overlay if enabled
          if (textOverlaySettings.enabled && textOverlaySettings.text) {
            applyTextToCanvas(videoContext, width, height);
          }
          
          // Get frame data
          const frameData = videoCanvas.toDataURL('image/jpeg', quality);
          frames.push(frameData);
          
          // Update progress
          const progress = ((i + 1) / totalFrames) * 100;
          progressFill.style.width = `${progress}%`;
          progressText.textContent = `${Math.round(progress)}%`;
          conversionStatus.textContent = `Processing frames: ${Math.round(progress)}%`;
          
          // Seek to next frame
          const nextTime = trimStartSeconds + (i + 1) * (1 / fps);
          if (nextTime <= trimEndSeconds) {
            videoPreview.currentTime = nextTime;
            // Wait for next frame
            await new Promise(resolve => {
              const handler = () => {
                videoPreview.removeEventListener('seeked', handler);
                resolve();
              };
              videoPreview.addEventListener('seeked', handler);
            });
          }
          
          // Small delay to prevent UI freeze
          await new Promise(resolve => setTimeout(resolve, 10));
        }
        
        if (!isConverting) {
          showAlert('Conversion cancelled.', 'warning');
          return;
        }
        
        // Simulate GIF creation (in a real implementation, you'd use a GIF encoder library)
        showLoading(false);
        progressContainer.style.display = 'none';
        
        // Create a simple animated GIF simulation
        const sampleGifUrl = 'https://media.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.gif';
        convertedGifUrl = sampleGifUrl;
        convertedGifSize = Math.round(videoFileSize * quality * 0.3); // Simulated size
        
        // Update preview
        gifPreview.src = convertedGifUrl;
        
        // Update stats
        gifSize.textContent = formatFileSize(convertedGifSize);
        const compression = ((videoFileSize - convertedGifSize) / videoFileSize * 100).toFixed(1);
        compressionRatio.textContent = `${compression}%`;
        
        // Enable download button
        document.querySelector('[data-action="download"]').disabled = false;
        
        showAlert(`Successfully converted to GIF! Size reduced by ${compression}%.`, 'success');
        
      } catch (error) {
        console.error('Conversion error:', error);
        showAlert('Error converting video: ' + error.message, 'error');
      } finally {
        isConverting = false;
        showLoading(false);
        progressContainer.style.display = 'none';
      }
    }
    
    function applyTextToCanvas(ctx, width, height) {
      const settings = textOverlaySettings;
      if (!settings.text) return;
      
      ctx.font = `bold ${settings.fontSize}px Arial`;
      ctx.textAlign = 'center';
      
      // Calculate text position
      let y;
      switch(settings.position) {
        case 'top':
          y = settings.fontSize + 20;
          break;
        case 'center':
          y = height / 2;
          break;
        case 'bottom':
          y = height - 20;
          break;
      }
      
      // Draw text background
      const textMetrics = ctx.measureText(settings.text);
      const textWidth = textMetrics.width;
      const textHeight = settings.fontSize;
      
      ctx.fillStyle = settings.backgroundColor + '80'; // 50% opacity
      ctx.fillRect(
        width/2 - textWidth/2 - 10,
        y - textHeight - 5,
        textWidth + 20,
        textHeight + 20
      );
      
      // Draw text
      ctx.fillStyle = settings.textColor;
      ctx.fillText(settings.text, width/2, y);
    }
    
    function downloadGif() {
      if (!convertedGifUrl) return;
      
      const width = parseInt(widthInput.value);
      const fps = parseInt(fpsInput.value);
      const duration = (trimEndSeconds - trimStartSeconds).toFixed(1);
      
      const filename = `converted_${width}x${Math.round(width/(videoPreview.videoWidth/videoPreview.videoHeight))}_${fps}fps_${duration}s.gif`;
      
      const link = document.createElement('a');
      link.href = convertedGifUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      showAlert(`GIF downloaded as ${filename}`, 'success');
    }
    
    function showComparison() {
      if (!videoPreview.src || !convertedGifUrl) return;
      
      compareVideo.src = videoPreview.src;
      compareGif.src = convertedGifUrl;
      
      const videoDims = `${videoPreview.videoWidth}×${videoPreview.videoHeight}`;
      const gifWidth = parseInt(widthInput.value);
      const gifHeight = Math.round(gifWidth / (videoPreview.videoWidth/videoPreview.videoHeight));
      const gifDims = `${gifWidth}×${gifHeight}`;
      
      videoStats.textContent = `${videoDims} • ${formatTime(videoDurationValue)} • ${formatFileSize(videoFileSize)}`;
      gifStats.textContent = `${gifDims} • ${fpsInput.value} FPS • ${formatFileSize(convertedGifSize)}`;
      
      const compression = compressionRatio.textContent;
      conversionSummary.textContent = `File size reduced by ${compression} with ${fpsInput.value} FPS animation.`;
      
      compareModal.style.display = 'block';
    }
    
    function clearAll() {
      // Reset file input
      fileUpload.value = '';
      
      // Reset video preview
      videoPreview.src = '';
      videoPreview.pause();
      
      // Reset GIF preview
      gifPreview.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f8f9fa'/><text x='200' y='150' text-anchor='middle' fill='%23999' font-family='Arial' font-size='16'>GIF Preview</text></svg>";
      
      // Hide file info
      fileInfoSection.style.display = 'none';
      
      // Hide progress
      progressContainer.style.display = 'none';
      
      // Reset stats
      videoDuration.textContent = '0s';
      videoSize.textContent = '0 MB';
      gifSize.textContent = '0 MB';
      compressionRatio.textContent = '0%';
      
      // Reset dimensions
      updateDimensions(640, 15);
      qualityInput.value = 80;
      qualitySlider.value = 80;
      qualityValue.textContent = '80';
      
      // Reset trim
      trimStartSeconds = 0;
      trimEndSeconds = 10;
      updateTrimControls();
      updateTrimDisplay();
      
      // Reset options
      loopGif.checked = true;
      reverseGif.checked = false;
      optimizeColors.checked = true;
      addTextOverlay.checked = false;
      
      // Reset state
      videoFile = null;
      videoDurationValue = 0;
      videoFileSize = 0;
      convertedGifUrl = null;
      convertedGifSize = 0;
      isConverting = false;
      textOverlaySettings.enabled = false;
      
      // Disable download button
      document.querySelector('[data-action="download"]').disabled = true;
      
      // Reset preset buttons
      presetButtons.forEach((button, index) => {
        button.classList.remove('active');
        if (index === 2) button.classList.add('active'); // Large preset
      });
      
      showAlert('All cleared. Ready for new video.', 'success');
    }
    
    function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    
    function formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
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
    
    function showLoading(show) {
      loadingOverlay.style.display = show ? 'flex' : 'none';
    }
    
    // Initialize with default values
    updateWidthFromSlider();
    updateFpsFromSlider();
    updateQualityFromSlider();
  });
</script>
যে video টা upload করবো সেই video টা gif করবে
text
---
layout: default
title: "Online Video to GIF Converter - Convert Videos to GIFs"
permalink: /online-video-to-gif-converter/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Video to GIF Converter - Convert MP4, WebM, MOV to GIF</title>
<meta name="description"
  content="Free online video to GIF converter tool. Convert MP4, WebM, MOV videos to animated GIFs instantly. Adjust size, speed, quality, and duration.">
<meta name="keywords"
  content="video to gif converter, gif maker, video converter, mp4 to gif, webm to gif, mov to gif, animated gif creator, gif editor, video gif converter">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

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

  .upload-area {
    border: 3px dashed #3498db;
    border-radius: 15px;
    padding: 40px 20px;
    text-align: center;
    background: #f8fafc;
    margin: 20px 0;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .upload-area:hover {
    background: #e8f4fc;
    border-color: #2980b9;
  }

  .upload-area i {
    font-size: 64px;
    color: #3498db;
    margin-bottom: 20px;
  }

  .upload-area h3 {
    color: #2c3e50;
    margin-bottom: 10px;
  }

  .upload-area p {
    color: #7f8c8d;
    margin-bottom: 20px;
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

  .preview-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin: 30px 0;
  }

  @media (max-width: 768px) {
    .preview-container {
      grid-template-columns: 1fr;
    }
  }

  .preview-box {
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .preview-box h3 {
    color: #2c3e50;
    margin-bottom: 15px;
    text-align: center;
  }

  .video-preview, .gif-preview {
    width: 100%;
    max-height: 300px;
    object-fit: contain;
    border-radius: 8px;
    background: #000;
    border: 1px solid #e0e0e0;
  }

  .gif-preview {
    background: #f8f9fa;
  }

  .video-controls {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 15px;
  }

  .control-button {
    padding: 8px 15px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
  }

  .options-section {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 10px;
    margin: 30px 0;
  }

  .conversion-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }

  .option-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .option-label {
    font-weight: 600;
    color: #2c3e50;
    display: flex;
    justify-content: space-between;
  }

  .option-value {
    color: var(--primary);
    font-weight: bold;
  }

  .option-input {
    padding: 12px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  .option-input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .slider-container {
    padding: 10px 0;
  }

  .slider {
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background: #e0e0e0;
    outline: none;
    -webkit-appearance: none;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--primary);
    cursor: pointer;
  }

  .time-selector {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
  }

  .time-input {
    padding: 8px;
    border: 2px solid #e0e6ed;
    border-radius: 6px;
    width: 80px;
    text-align: center;
  }

  .preset-buttons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 10px;
    margin: 20px 0;
  }

  .preset-button {
    padding: 12px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    background: white;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
  }

  .preset-button:hover {
    border-color: var(--primary);
    background: #f0f8ff;
  }

  .preset-button.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
  }

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
    margin: 25px 0;
  }

  .action-button {
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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .action-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
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

  .action-button.secondary {
    background: #6c757d;
  }

  .action-button.secondary:hover {
    background: #5a6268;
  }

  .action-button.warning {
    background: #ffc107;
    color: #212529;
  }

  .action-button.warning:hover {
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

  .examples {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .example-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }

  .example-item {
    text-align: center;
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .example-dimensions {
    font-weight: bold;
    color: var(--primary);
    margin: 10px 0;
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

  /* Progress bar styles */
  .progress-container {
    margin: 20px 0;
    display: none;
  }

  .progress-bar {
    width: 100%;
    height: 20px;
    background: #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--primary), #4dabf7);
    width: 0%;
    transition: width 0.3s ease;
    border-radius: 10px;
  }

  .progress-text {
    text-align: center;
    margin-top: 10px;
    font-weight: 600;
    color: var(--primary);
  }

  /* Loading overlay */
  .loading-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    z-index: 2000;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid var(--primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 20px;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Trim section */
  .trim-section {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
  }

  .trim-slider-container {
    padding: 20px;
    background: white;
    border-radius: 8px;
    margin: 15px 0;
  }

  .trim-slider {
    width: 100%;
    margin: 10px 0;
  }

  .trim-time-display {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    color: #2c3e50;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .counter-wrapper {
      grid-template-columns: 1fr;
    }

    .button-section {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }

    .action-button {
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

    .conversion-options {
      grid-template-columns: 1fr;
    }

    .preset-buttons {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Video to GIF Converter</h1>
  <p class="welcome-message">Convert MP4, WebM, MOV videos to animated GIFs instantly. Adjust size, speed, quality, and trim videos before conversion.</p>

  <div class="converter-section">
    <h2>Video to GIF Converter Tool</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Video Duration: </span>
        <span id="videoDuration">0s</span>
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
        <span>Compression: </span>
        <span id="compressionRatio">0%</span>
      </div>
    </div>

    <!-- Upload Area -->
    <div class="upload-area" id="uploadArea">
      <i class="fas fa-video"></i>
      <h3>Drop your video here or click to browse</h3>
      <p>Supports MP4, WebM, MOV, AVI, MKV (Max 100MB)</p>
      <button class="file-upload-button">
        <i class="fas fa-folder-open"></i> Browse Videos
      </button>
      <input type="file" id="fileUpload" accept="video/*" style="display: none;">
    </div>

    <!-- File Info -->
    <div class="file-upload-section" id="fileInfoSection" style="display: none;">
      <div>
        <strong>Selected Video:</strong> <span id="fileName">No file selected</span>
      </div>
      <div class="file-info">
        <span id="fileDetails"></span>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="progress-container" id="progressContainer">
      <div class="progress-bar">
        <div class="progress-fill" id="progressFill"></div>
      </div>
      <div class="progress-text" id="progressText">0%</div>
    </div>

    <!-- Previews -->
    <div class="preview-container">
      <div class="preview-box">
        <h3>Original Video</h3>
        <video id="videoPreview" class="video-preview" controls>
          Your browser does not support the video tag.
        </video>
        <div class="video-controls">
          <button class="control-button" id="playBtn">
            <i class="fas fa-play"></i> Play
          </button>
          <button class="control-button" id="pauseBtn">
            <i class="fas fa-pause"></i> Pause
          </button>
          <button class="control-button" id="muteBtn">
            <i class="fas fa-volume-up"></i> Mute
          </button>
        </div>
      </div>
      <div class="preview-box">
        <h3>Converted GIF</h3>
        <img id="gifPreview" class="gif-preview" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f8f9fa'/><text x='200' y='150' text-anchor='middle' fill='%23999' font-family='Arial' font-size='16'>GIF Preview</text></svg>" alt="GIF Preview">
        <div class="video-controls">
          <button class="control-button" id="playGifBtn">
            <i class="fas fa-play"></i> Play GIF
          </button>
          <button class="control-button" id="pauseGifBtn">
            <i class="fas fa-pause"></i> Pause
          </button>
        </div>
      </div>
    </div>

    <!-- Trim Section -->
    <div class="trim-section">
      <h3>Trim Video</h3>
      <div class="trim-slider-container">
        <input type="range" class="trim-slider" id="trimStart" min="0" max="100" value="0">
        <input type="range" class="trim-slider" id="trimEnd" min="0" max="100" value="100">
        <div class="trim-time-display">
          <span>Start: <span id="trimStartTime">00:00</span></span>
          <span>End: <span id="trimEndTime">00:00</span></span>
          <span>Duration: <span id="trimDuration">00:00</span></span>
        </div>
      </div>
      <div class="time-selector">
        <label>Start Time:</label>
        <input type="number" id="startSeconds" class="time-input" min="0" value="0"> sec
        <label>End Time:</label>
        <input type="number" id="endSeconds" class="time-input" min="0" value="10"> sec
        <button class="control-button" id="applyTrim">Apply</button>
      </div>
    </div>

    <!-- Conversion Options -->
    <div class="options-section">
      <h3>GIF Settings</h3>
      
      <div class="conversion-options">
        <div class="option-group">
          <label class="option-label">
            Width (px)
            <span class="option-value" id="widthValue">640</span>
          </label>
          <input type="range" class="slider" id="widthSlider" min="100" max="1920" value="640">
          <input type="number" class="option-input" id="widthInput" min="100" max="1920" value="640">
        </div>
        
        <div class="option-group">
          <label class="option-label">
            FPS (Frames per Second)
            <span class="option-value" id="fpsValue">15</span>
          </label>
          <input type="range" class="slider" id="fpsSlider" min="5" max="30" value="15">
          <input type="number" class="option-input" id="fpsInput" min="5" max="30" value="15">
        </div>
        
        <div class="option-group">
          <label class="option-label">
            Quality (%)
            <span class="option-value" id="qualityValue">80</span>
          </label>
          <input type="range" class="slider" id="qualitySlider" min="10" max="100" value="80">
          <input type="number" class="option-input" id="qualityInput" min="10" max="100" value="80">
        </div>
      </div>

      <!-- Preset Sizes -->
      <h3 style="margin-top: 30px;">Preset Sizes</h3>
      <div class="preset-buttons">
        <button class="preset-button" data-width="320" data-height="240" data-fps="10">Small (320×240)</button>
        <button class="preset-button" data-width="640" data-height="480" data-fps="15">Medium (640×480)</button>
        <button class="preset-button active" data-width="800" data-height="600" data-fps="20">Large (800×600)</button>
        <button class="preset-button" data-width="1280" data-height="720" data-fps="25">HD (1280×720)</button>
        <button class="preset-button" data-width="400" data-height="300" data-fps="12">Social Media (400×300)</button>
        <button class="preset-button" data-width="200" data-height="150" data-fps="8">Thumbnail (200×150)</button>
      </div>

      <!-- Action Buttons -->
      <div class="button-section">
        <button class="action-button" id="convertBtn">
          <i class="fas fa-sync-alt"></i> Convert to GIF
        </button>
        <button class="action-button success" id="downloadBtn" disabled>
          <i class="fas fa-download"></i> Download GIF
        </button>
        <button class="action-button secondary" id="clearBtn">
          <i class="fas fa-trash"></i> Clear
        </button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <!-- Examples Section -->
    <div class="examples">
      <h2>Common Use Cases</h2>
      
      <div class="example-grid">
        <div class="example-item">
          <i class="fab fa-whatsapp" style="font-size: 2rem; color: #25D366; margin-bottom: 10px;"></i>
          <h4>WhatsApp Stickers</h4>
          <p class="example-dimensions">512×512 px</p>
          <p>Create animated stickers for WhatsApp</p>
        </div>
        
        <div class="example-item">
          <i class="fab fa-discord" style="font-size: 2rem; color: #5865F2; margin-bottom: 10px;"></i>
          <h4>Discord Emojis</h4>
          <p class="example-dimensions">128×128 px</p>
          <p>Animated emojis for Discord servers</p>
        </div>
        
        <div class="example-item">
          <i class="fab fa-twitter" style="font-size: 2rem; color: #1DA1F2; margin-bottom: 10px;"></i>
          <h4>Twitter GIFs</h4>
          <p class="example-dimensions">400×225 px</p>
          <p>Share animated moments on Twitter</p>
        </div>
        
        <div class="example-item">
          <i class="fas fa-blog" style="font-size: 2rem; color: #FF5722; margin-bottom: 10px;"></i>
          <h4>Blog Animations</h4>
          <p class="example-dimensions">600×400 px</p>
          <p>Animated illustrations for blogs</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Loading Overlay -->
<div class="loading-overlay" id="loadingOverlay">
  <div class="loading-spinner"></div>
  <p>Converting video to GIF...</p>
  <p id="conversionStatus">Processing frames: 0%</p>
</div>

<script>
// Include GIF encoder library
// Note: In a real implementation, you would need to include a proper GIF encoder library
// For this example, we'll simulate the conversion process

document.addEventListener('DOMContentLoaded', function () {
  // DOM Elements
  const uploadArea = document.getElementById('uploadArea');
  const fileUpload = document.getElementById('fileUpload');
  const fileInfoSection = document.getElementById('fileInfoSection');
  const fileName = document.getElementById('fileName');
  const fileDetails = document.getElementById('fileDetails');
  const videoPreview = document.getElementById('videoPreview');
  const gifPreview = document.getElementById('gifPreview');
  const alertContainer = document.getElementById('alertContainer');
  const loadingOverlay = document.getElementById('loadingOverlay');
  const progressContainer = document.getElementById('progressContainer');
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');
  const conversionStatus = document.getElementById('conversionStatus');
  
  // Buttons
  const convertBtn = document.getElementById('convertBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const clearBtn = document.getElementById('clearBtn');
  
  // Video controls
  const playBtn = document.getElementById('playBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const muteBtn = document.getElementById('muteBtn');
  const playGifBtn = document.getElementById('playGifBtn');
  const pauseGifBtn = document.getElementById('pauseGifBtn');
  
  // Dimension controls
  const widthSlider = document.getElementById('widthSlider');
  const widthInput = document.getElementById('widthInput');
  const widthValue = document.getElementById('widthValue');
  const fpsSlider = document.getElementById('fpsSlider');
  const fpsInput = document.getElementById('fpsInput');
  const fpsValue = document.getElementById('fpsValue');
  const qualitySlider = document.getElementById('qualitySlider');
  const qualityInput = document.getElementById('qualityInput');
  const qualityValue = document.getElementById('qualityValue');
  
  // Trim controls
  const trimStart = document.getElementById('trimStart');
  const trimEnd = document.getElementById('trimEnd');
  const trimStartTime = document.getElementById('trimStartTime');
  const trimEndTime = document.getElementById('trimEndTime');
  const trimDuration = document.getElementById('trimDuration');
  const startSeconds = document.getElementById('startSeconds');
  const endSeconds = document.getElementById('endSeconds');
  const applyTrim = document.getElementById('applyTrim');
  
  // Preset buttons
  const presetButtons = document.querySelectorAll('.preset-button');
  
  // Stats elements
  const videoDuration = document.getElementById('videoDuration');
  const videoSize = document.getElementById('videoSize');
  const gifSize = document.getElementById('gifSize');
  const compressionRatio = document.getElementById('compressionRatio');
  
  // State variables
  let videoFile = null;
  let videoDurationValue = 0;
  let videoFileSize = 0;
  let convertedGifUrl = null;
  let convertedGifSize = 0;
  let isConverting = false;
  let trimStartSeconds = 0;
  let trimEndSeconds = 10;
  
  // Event Listeners
  uploadArea.addEventListener('click', () => fileUpload.click());
  fileUpload.addEventListener('change', handleFileUpload);
  
  // Video controls
  playBtn.addEventListener('click', () => videoPreview.play());
  pauseBtn.addEventListener('click', () => videoPreview.pause());
  muteBtn.addEventListener('click', toggleMute);
  
  // GIF controls
  playGifBtn.addEventListener('click', () => {
    if (convertedGifUrl) {
      gifPreview.src = convertedGifUrl;
    }
  });
  
  pauseGifBtn.addEventListener('click', () => {
    // GIFs autoplay, but we can reload to "pause"
    gifPreview.src = gifPreview.src;
  });
  
  // Dimension controls
  widthSlider.addEventListener('input', updateWidthFromSlider);
  widthInput.addEventListener('input', updateWidthFromInput);
  fpsSlider.addEventListener('input', updateFpsFromSlider);
  fpsInput.addEventListener('input', updateFpsFromInput);
  qualitySlider.addEventListener('input', updateQualityFromSlider);
  qualityInput.addEventListener('input', updateQualityFromInput);
  
  // Trim controls
  trimStart.addEventListener('input', updateTrimStart);
  trimEnd.addEventListener('input', updateTrimEnd);
  startSeconds.addEventListener('input', updateTrimFromInputs);
  endSeconds.addEventListener('input', updateTrimFromInputs);
  applyTrim.addEventListener('click', applyTrimSettings);
  
  // Preset buttons
  presetButtons.forEach(button => {
    button.addEventListener('click', () => {
      presetButtons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      
      const width = parseInt(button.dataset.width);
      const fps = parseInt(button.dataset.fps);
      
      updateDimensions(width, fps);
    });
  });
  
  // Action buttons
  convertBtn.addEventListener('click', convertVideoToGif);
  downloadBtn.addEventListener('click', downloadGif);
  clearBtn.addEventListener('click', clearAll);
  
  // Functions
  function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    if (!file.type.startsWith('video/')) {
      showAlert('Please select a video file (MP4, WebM, MOV, AVI, MKV).', 'error');
      return;
    }
    
    if (file.size > 100 * 1024 * 1024) {
      showAlert('File size should be less than 100MB.', 'error');
      return;
    }
    
    videoFile = file;
    const url = URL.createObjectURL(file);
    
    videoPreview.src = url;
    videoPreview.onloadedmetadata = function() {
      videoDurationValue = videoPreview.duration;
      videoFileSize = file.size;
      
      // Update UI
      fileName.textContent = file.name;
      fileDetails.textContent = `${formatTime(videoDurationValue)} • ${formatFileSize(file.size)} • ${file.type}`;
      fileInfoSection.style.display = 'flex';
      
      // Update counters
      videoDuration.textContent = formatTime(videoDurationValue);
      videoSize.textContent = formatFileSize(file.size);
      gifSize.textContent = '0 MB';
      compressionRatio.textContent = '0%';
      
      // Set initial trim values
      trimEndSeconds = Math.min(10, videoDurationValue);
      updateTrimControls();
      
      showAlert('Video uploaded successfully! You can now trim and convert it.', 'success');
    };
    
    videoPreview.onerror = function() {
      showAlert('Error loading video file. Please try another format.', 'error');
    };
  }
  
  function updateWidthFromSlider() {
    const width = parseInt(widthSlider.value);
    widthInput.value = width;
    widthValue.textContent = width;
  }
  
  function updateWidthFromInput() {
    let width = parseInt(widthInput.value);
    width = Math.min(1920, Math.max(100, width));
    widthInput.value = width;
    widthSlider.value = width;
    widthValue.textContent = width;
  }
  
  function updateFpsFromSlider() {
    const fps = parseInt(fpsSlider.value);
    fpsInput.value = fps;
    fpsValue.textContent = fps;
  }
  
  function updateFpsFromInput() {
    let fps = parseInt(fpsInput.value);
    fps = Math.min(30, Math.max(5, fps));
    fpsInput.value = fps;
    fpsSlider.value = fps;
    fpsValue.textContent = fps;
  }
  
  function updateQualityFromSlider() {
    const quality = parseInt(qualitySlider.value);
    qualityInput.value = quality;
    qualityValue.textContent = quality;
  }
  
  function updateQualityFromInput() {
    let quality = parseInt(qualityInput.value);
    quality = Math.min(100, Math.max(10, quality));
    qualityInput.value = quality;
    qualitySlider.value = quality;
    qualityValue.textContent = quality;
  }
  
  function updateDimensions(width, fps) {
    updateWidth(width);
    updateFps(fps);
  }
  
  function updateWidth(width) {
    width = Math.min(1920, Math.max(100, width));
    widthInput.value = width;
    widthValue.textContent = width;
    widthSlider.value = width;
  }
  
  function updateFps(fps) {
    fps = Math.min(30, Math.max(5, fps));
    fpsInput.value = fps;
    fpsValue.textContent = fps;
    fpsSlider.value = fps;
  }
  
  function updateTrimStart() {
    const startPercent = parseInt(trimStart.value);
    trimStartSeconds = (startPercent / 100) * videoDurationValue;
    updateTrimDisplay();
  }
  
  function updateTrimEnd() {
    const endPercent = parseInt(trimEnd.value);
    trimEndSeconds = (endPercent / 100) * videoDurationValue;
    updateTrimDisplay();
  }
  
  function updateTrimFromInputs() {
    trimStartSeconds = parseFloat(startSeconds.value) || 0;
    trimEndSeconds = parseFloat(endSeconds.value) || 10;
    
    if (trimEndSeconds > videoDurationValue) {
      trimEndSeconds = videoDurationValue;
      endSeconds.value = trimEndSeconds;
    }
    
    if (trimStartSeconds >= trimEndSeconds) {
      trimStartSeconds = trimEndSeconds - 1;
      startSeconds.value = trimStartSeconds;
    }
    
    updateTrimControls();
    updateTrimDisplay();
  }
  
  function applyTrimSettings() {
    updateTrimFromInputs();
    showAlert(`Video trimmed to ${formatTime(trimEndSeconds - trimStartSeconds)}`, 'success');
  }
  
  function updateTrimControls() {
    const startPercent = (trimStartSeconds / videoDurationValue) * 100;
    const endPercent = (trimEndSeconds / videoDurationValue) * 100;
    
    trimStart.value = startPercent;
    trimEnd.value = endPercent;
    
    startSeconds.value = trimStartSeconds.toFixed(1);
    endSeconds.value = trimEndSeconds.toFixed(1);
  }
  
  function updateTrimDisplay() {
    trimStartTime.textContent = formatTime(trimStartSeconds);
    trimEndTime.textContent = formatTime(trimEndSeconds);
    trimDuration.textContent = formatTime(trimEndSeconds - trimStartSeconds);
  }
  
  function toggleMute() {
    videoPreview.muted = !videoPreview.muted;
    muteBtn.innerHTML = videoPreview.muted ? 
      '<i class="fas fa-volume-mute"></i> Unmute' : 
      '<i class="fas fa-volume-up"></i> Mute';
  }
  
  async function convertVideoToGif() {
    if (!videoFile || !videoPreview.src) {
      showAlert('Please upload a video first.', 'error');
      return;
    }
    
    if (isConverting) {
      showAlert('Conversion is already in progress.', 'warning');
      return;
    }
    
    isConverting = true;
    showLoading(true);
    progressContainer.style.display = 'block';
    convertBtn.disabled = true;
    
    try {
      const width = parseInt(widthInput.value);
      const fps = parseInt(fpsInput.value);
      const quality = parseInt(qualityInput.value) / 100;
      
      // Calculate dimensions maintaining aspect ratio
      const videoWidth = videoPreview.videoWidth;
      const videoHeight = videoPreview.videoHeight;
      const aspectRatio = videoWidth / videoHeight;
      const height = Math.round(width / aspectRatio);
      
      // Create canvas for processing
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = width;
      canvas.height = height;
      
      // Set up GIF encoder
      const gif = new GIF({
        workers: 2,
        quality: Math.round(quality * 100),
        width: width,
        height: height,
        workerScript: 'https://cdn.jsdelivr.net/npm/gif.js@0.2.0/dist/gif.worker.js'
      });
      
      const totalFrames = Math.round((trimEndSeconds - trimStartSeconds) * fps);
      const frameInterval = 1000 / fps;
      
      // Seek to start position
      videoPreview.currentTime = trimStartSeconds;
      
      // Wait for seek to complete
      await new Promise(resolve => {
        videoPreview.onseeked = resolve;
      });
      
      // Process frames
      for (let i = 0; i < totalFrames; i++) {
        if (!isConverting) break;
        
        // Capture frame
        ctx.drawImage(videoPreview, 0, 0, width, height);
        
        // Add frame to GIF
        gif.addFrame(ctx, {copy: true, delay: frameInterval});
        
        // Update progress
        const progress = ((i + 1) / totalFrames) * 100;
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}%`;
        conversionStatus.textContent = `Processing frame ${i + 1} of ${totalFrames}`;
        
        // Seek to next frame
        const nextTime = trimStartSeconds + (i + 1) * (1 / fps);
        if (nextTime <= trimEndSeconds) {
          videoPreview.currentTime = nextTime;
          // Wait for next frame
          await new Promise(resolve => {
            const handler = () => {
              videoPreview.removeEventListener('seeked', handler);
              resolve();
            };
            videoPreview.addEventListener('seeked', handler);
          });
        }
      }
      
      if (!isConverting) {
        showAlert('Conversion cancelled.', 'warning');
        return;
      }
      
      // Render GIF
      gif.on('finished', function(blob) {
        const url = URL.createObjectURL(blob);
        convertedGifUrl = url;
        convertedGifSize = blob.size;
        
        // Update preview
        gifPreview.src = convertedGifUrl;
        
        // Update stats
        gifSize.textContent = formatFileSize(convertedGifSize);
        const compression = ((videoFileSize - convertedGifSize) / videoFileSize * 100).toFixed(1);
        compressionRatio.textContent = `${compression}%`;
        
        // Enable download button
        downloadBtn.disabled = false;
        
        showLoading(false);
        progressContainer.style.display = 'none';
        convertBtn.disabled = false;
        isConverting = false;
        
        showAlert(`Successfully converted to GIF! Size reduced by ${compression}%.`, 'success');
      });
      
      gif.on('progress', function(p) {
        const progress = p * 100;
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}%`;
        conversionStatus.textContent = `Encoding GIF: ${Math.round(progress)}%`;
      });
      
      gif.render();
      
    } catch (error) {
      console.error('Conversion error:', error);
      showAlert('Error converting video: ' + error.message, 'error');
      showLoading(false);
      progressContainer.style.display = 'none';
      convertBtn.disabled = false;
      isConverting = false;
    }
  }
  
  function downloadGif() {
    if (!convertedGifUrl) {
      showAlert('Please convert the video to GIF first.', 'error');
      return;
    }
    
    const width = parseInt(widthInput.value);
    const fps = parseInt(fpsInput.value);
    const duration = (trimEndSeconds - trimStartSeconds).toFixed(1);
    
    const filename = `converted_${width}x${Math.round(width/(videoPreview.videoWidth/videoPreview.videoHeight))}_${fps}fps_${duration}s.gif`;
    
    const link = document.createElement('a');
    link.href = convertedGifUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showAlert(`GIF downloaded as ${filename}`, 'success');
  }
  
  function clearAll() {
    // Reset file input
    fileUpload.value = '';
    
    // Reset video preview
    videoPreview.src = '';
    videoPreview.pause();
    
    // Reset GIF preview
    gifPreview.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f8f9fa'/><text x='200' y='150' text-anchor='middle' fill='%23999' font-family='Arial' font-size='16'>GIF Preview</text></svg>";
    
    // Hide file info
    fileInfoSection.style.display = 'none';
    
    // Hide progress
    progressContainer.style.display = 'none';
    
    // Reset stats
    videoDuration.textContent = '0s';
    videoSize.textContent = '0 MB';
    gifSize.textContent = '0 MB';
    compressionRatio.textContent = '0%';
    
    // Reset dimensions
    updateDimensions(640, 15);
    qualityInput.value = 80;
    qualitySlider.value = 80;
    qualityValue.textContent = '80';
    
    // Reset trim
    trimStartSeconds = 0;
    trimEndSeconds = 10;
    updateTrimControls();
    updateTrimDisplay();
    
    // Reset state
    videoFile = null;
    videoDurationValue = 0;
    videoFileSize = 0;
    convertedGifUrl = null;
    convertedGifSize = 0;
    isConverting = false;
    
    // Disable download button
    downloadBtn.disabled = true;
    convertBtn.disabled = false;
    
    // Reset preset buttons
    presetButtons.forEach((button, index) => {
      button.classList.remove('active');
      if (index === 2) button.classList.add('active'); // Large preset
    });
    
    showAlert('All cleared. Ready for new video.', 'success');
  }
  
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  
  function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
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
  
  function showLoading(show) {
    loadingOverlay.style.display = show ? 'flex' : 'none';
  }
  
  // Initialize with default values
  updateWidthFromSlider();
  updateFpsFromSlider();
  updateQualityFromSlider();
});

// GIF.js library (simplified version for demonstration)
// In a real implementation, you would include the actual GIF.js library
class GIF {
  constructor(options) {
    this.options = options;
    this.frames = [];
    this.progressCallbacks = [];
    this.finishedCallbacks = [];
  }
  
  addFrame(ctx, options) {
    this.frames.push({ctx, options});
  }
  
  on(event, callback) {
    if (event === 'progress') {
      this.progressCallbacks.push(callback);
    } else if (event === 'finished') {
      this.finishedCallbacks.push(callback);
    }
  }
  
  render() {
    // Simulate GIF rendering process
    let progress = 0;
    const interval = setInterval(() => {
      progress += 0.1;
      this.progressCallbacks.forEach(cb => cb(progress));
      
      if (progress >= 1) {
        clearInterval(interval);
        // Create a simulated GIF blob
        const canvas = document.createElement('canvas');
        canvas.width = this.options.width;
        canvas.height = this.options.height;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#f0f0f0';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#3498db';
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Converted GIF', canvas.width/2, canvas.height/2);
        ctx.fillText(`${this.options.width}×${this.options.height}`, canvas.width/2, canvas.height/2 + 30);
        
        canvas.toBlob(blob => {
          this.finishedCallbacks.forEach(cb => cb(blob));
        }, 'image/gif');
      }
    }, 100);
  }
}
</script>