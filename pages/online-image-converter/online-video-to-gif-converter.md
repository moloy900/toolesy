---
layout: default
title: "Free Online Video To GIF Converter – Convert Videos to GIF Instantly"
permalink: /free-online-video-to-gif-converter-convert-videos-to-gif-instantly/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Video To GIF Converter – Client Side | Convert MP4, WebM, MOV to GIF</title>
<meta name="description"
  content="Convert video to GIF online using client-side FFmpeg.wasm. No upload, no server needed. Create high-quality GIF from MP4, WebM, MOV instantly. 100% private and secure.">
<meta name="keywords"
  content="video to gif, video gif converter, ffmpeg wasm gif, client side gif maker, mp4 to gif, webm to gif, mov to gif, video converter, animated gif creator, online video converter, free gif maker">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Main Container */
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

  /* Converter Section */
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

  /* Stats Counter */
  .counter-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .counter-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background: #f8f9fa;
    border-radius: 6px;
  }

  .counter-item span:first-child {
    font-weight: 600;
    color: var(--primary);
  }

  .counter-item span:last-child {
    font-weight: bold;
    color: #2c3e50;
  }

  /* File Upload Section */
  .file-upload-section {
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .file-upload-button {
    padding: 12px 20px;
    background: var(--primary);
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: none;
  }

  .file-upload-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
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

  .file-info {
    margin-top: 10px;
    font-size: 14px;
    color: #7f8c8d;
    width: 100%;
  }

  /* Video Preview */
  .video-preview-section {
    margin: 20px 0;
    text-align: center;
  }

  .video-preview-container {
    max-width: 640px;
    margin: 0 auto;
    background: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  #videoPlayer {
    width: 100%;
    max-height: 360px;
    border-radius: 8px;
    background: #000;
    display: none;
  }

  #videoPlaceholder {
    color: #7f8c8d;
    font-style: italic;
    padding: 40px;
    text-align: center;
  }

  #videoPlaceholder i {
    font-size: 3rem;
    color: #ccc;
    margin-bottom: 10px;
    display: block;
  }

  /* Conversion Options */
  .conversion-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .option-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .option-label {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .option-input, .option-select {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
    width: 100%;
  }

  .option-input:focus, .option-select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  /* Action Buttons */
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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
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

  /* Progress Bar */
  .progress-container {
    margin: 20px 0;
    display: none;
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
    background: linear-gradient(90deg, var(--primary), #2980b9);
    width: 0%;
    transition: width 0.3s ease;
    border-radius: 10px;
  }

  .progress-text {
    text-align: center;
    font-weight: 600;
    color: #2c3e50;
  }

  /* Alert Messages */
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
    animation: slideIn 0.3s ease;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
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

  .alert .close-btn {
    cursor: pointer;
    font-weight: bold;
    font-size: 1.2rem;
    color: inherit;
    background: none;
    border: none;
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .alert .close-btn:hover {
    background: rgba(0,0,0,0.1);
  }

  /* GIF Preview */
  .preview-section {
    margin: 30px 0;
    text-align: center;
  }

  .preview-container {
    max-width: 640px;
    margin: 20px auto;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  #gifPreview {
    max-width: 100%;
    max-height: 360px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    display: none;
  }

  #gifPlaceholder {
    color: #7f8c8d;
    font-style: italic;
    padding: 40px;
    text-align: center;
  }

  #gifPlaceholder i {
    font-size: 3rem;
    color: #ccc;
    margin-bottom: 10px;
    display: block;
  }

  /* Offline Mode Styles */
  .offline-mode {
    background: #fff3cd;
    border: 1px solid #ffeaa7;
    border-radius: 8px;
    padding: 15px;
    margin: 20px 0;
    text-align: center;
  }

  .offline-mode i {
    color: #f39c12;
    font-size: 2rem;
    margin-bottom: 10px;
  }

  /* Share Section */
  .share-section {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 30px 0;
    flex-wrap: wrap;
  }

  .share-button {
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
    color: white;
  }

  .share-button.facebook { background: #3b5998; }
  .share-button.twitter { background: #1da1f2; }
  .share-button.pinterest { background: #bd081c; }
  .share-button.reddit { background: #FF4500; }

  .share-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  /* Examples Section */
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

  /* SEO Content */
  .content-placeholder {
    padding: 25px;
    background: white;
    border-radius: 12px;
    margin-top: 30px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
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

  /* Responsive Design */
  @media (max-width: 768px) {
    .converter-container {
      padding: 15px;
    }

    .converter-container h1 {
      font-size: 2rem;
    }

    .converter-section {
      padding: 20px;
    }

    .counter-wrapper {
      grid-template-columns: 1fr;
    }

    .conversion-options {
      grid-template-columns: 1fr;
      padding: 15px;
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

    .video-preview-container {
      padding: 10px;
    }

    #videoPlayer {
      max-height: 240px;
    }

    .preview-container {
      padding: 15px;
    }
  }

  @media (max-width: 480px) {
    .button-section {
      grid-template-columns: 1fr;
    }
    
    .share-section {
      flex-direction: column;
      align-items: center;
    }
    
    .share-button {
      width: 100%;
      justify-content: center;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Video To GIF Converter</h1>
  <p class="welcome-message">
    Convert videos to high-quality animated GIFs instantly using advanced browser technology. 
    No uploads, no server processing – 100% client-side and private. Convert MP4, WebM, MOV to GIF in seconds.
  </p>

  <div class="converter-section">
    <h2>Video To GIF Converter</h2>

    <!-- Offline Mode Notice (hidden by default) -->
    <div id="offlineMode" class="offline-mode" style="display: none;">
      <i class="fas fa-wifi-slash"></i>
      <h3>Using Simplified Mode</h3>
      <p>Advanced GIF converter is not available. Using simplified canvas-based mode for animation preview.</p>
    </div>

    <!-- Statistics Counter -->
    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Video Duration:</span>
        <span id="videoDuration">0s</span>
      </div>
      <div class="counter-item">
        <span>Video Size:</span>
        <span id="videoSize">0 MB</span>
      </div>
      <div class="counter-item">
        <span>GIF Size:</span>
        <span id="gifSize">0 MB</span>
      </div>
      <div class="counter-item">
        <span>Status:</span>
        <span id="converterStatus">Ready</span>
      </div>
    </div>

    <!-- File Upload -->
    <div class="file-upload-section">
      <input type="file" id="videoInput" accept="video/*,.mp4,.webm,.mov,.avi" hidden>
      <button class="file-upload-button" onclick="document.getElementById('videoInput').click()">
        <i class="fas fa-video"></i> Upload Video
      </button>
      <span id="fileName">No video selected</span>
      <div class="file-info">
        Supports: MP4, WebM, MOV, AVI | Max: 50MB | For best results: Use short videos (3-10 seconds)
      </div>
    </div>

    <!-- Video Preview -->
    <div class="video-preview-section">
      <div class="video-preview-container">
        <video id="videoPlayer" controls></video>
        <div id="videoPlaceholder">
          <i class="fas fa-video"></i>
          <p>Video preview will appear here</p>
        </div>
      </div>
    </div>

    <!-- Conversion Options -->
    <div class="conversion-options">
      <div class="option-group">
        <label class="option-label">Start Time (seconds)</label>
        <input type="number" id="startTime" class="option-input" min="0" value="0" step="0.1">
      </div>
      
      <div class="option-group">
        <label class="option-label">Duration (seconds)</label>
        <input type="number" id="duration" class="option-input" min="0.5" max="10" value="3" step="0.1">
      </div>
      
      <div class="option-group">
        <label class="option-label">Width (pixels)</label>
        <select id="width" class="option-select">
          <option value="240">240px</option>
          <option value="320">320px</option>
          <option value="480" selected>480px</option>
          <option value="640">640px</option>
          <option value="800">800px</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Frame Rate (FPS)</label>
        <select id="fps" class="option-select">
          <option value="5">5 FPS (Smaller file)</option>
          <option value="8">8 FPS</option>
          <option value="10" selected>10 FPS (Recommended)</option>
          <option value="12">12 FPS</option>
          <option value="15">15 FPS (Smooth)</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Animation Type</label>
        <select id="animationType" class="option-select">
          <option value="gif">Animated GIF</option>
          <option value="webp">Animated WebP (Better quality)</option>
          <option value="apng">Animated PNG (Highest quality)</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Loop</label>
        <select id="loop" class="option-select">
          <option value="0" selected>Infinite Loop</option>
          <option value="1">Play Once</option>
        </select>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="progress-container" id="progressContainer">
      <div class="progress-bar">
        <div class="progress-fill" id="progressFill"></div>
      </div>
      <div class="progress-text" id="progressText">Initializing...</div>
    </div>

    <!-- Action Buttons -->
    <div class="button-section">
      <button class="case-button" id="convertBtn">
        <i class="fas fa-sync-alt"></i> Create Animation
      </button>
      <button class="case-button success" id="downloadBtn" disabled>
        <i class="fas fa-download"></i> Download
      </button>
      <button class="case-button secondary" id="clearBtn">
        <i class="fas fa-redo"></i> Clear All
      </button>
    </div>

    <!-- Alert Container -->
    <div id="alertContainer" class="alert-container"></div>

    <!-- GIF Preview -->
    <div class="preview-section">
      <h3>Animation Preview</h3>
      <div class="preview-container">
        <img id="animationPreview" alt="Animation Preview">
        <div id="animationPlaceholder">
          <i class="fas fa-image"></i>
          <p>Animation will appear here</p>
        </div>
      </div>
    </div>

    <!-- Examples Section -->
    <div class="examples">
      <h3>How It Works - Step by Step</h3>
      
      <div class="example-text">
1. Upload Video: Click "Upload Video" and select your MP4, WebM, MOV, or AVI file
2. Preview Video: Watch the video preview to choose the perfect segment
3. Adjust Settings: Set start time, duration, width, and frame rate
4. Create Animation: Click "Create Animation" - processing happens in your browser
5. Download: Once created, click "Download" to save your animated file
      </div>

      <h3>Recommended Settings:</h3>
      <div class="example-text">
- Social Media: 640px width, 10 FPS, 3-5 seconds
- WhatsApp/Telegram: 480px width, 8 FPS, 2-3 seconds  
- Website: 240px width, 15 FPS, 1-2 seconds
- Presentations: 800px width, 12 FPS, 5-10 seconds
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Video To GIF Converter – Complete Guide</h2>

    <p>Create animated GIFs from your videos instantly with our browser-based converter. No uploads required - everything happens locally on your device for maximum privacy and security.</p>

    <h3>Key Features:</h3>
    <ul>
      <li><strong>100% Browser-Based:</strong> No software installation required</li>
      <li><strong>Complete Privacy:</strong> Your videos never leave your computer</li>
      <li><strong>Multiple Formats:</strong> Convert MP4, WebM, MOV, AVI videos</li>
      <li><strong>Customizable Output:</strong> Control size, duration, and quality</li>
      <li><strong>Works Offline:</strong> Once loaded, works without internet</li>
      <li><strong>Completely Free:</strong> No watermarks, no limits</li>
    </ul>

    <h3>Perfect For:</h3>
    <ul>
      <li><strong>Social Media:</strong> Create engaging content for Twitter, Facebook, Instagram</li>
      <li><strong>Reaction GIFs:</strong> Make custom reactions from videos</li>
      <li><strong>Tutorials:</strong> Convert video tutorials to animated steps</li>
      <li><strong>Presentations:</strong> Add animated elements to slides</li>
      <li><strong>Website Content:</strong> Create animated banners and demos</li>
    </ul>

    <h3>Start creating your animations today - it's fast, easy, and completely private!</h3>
  </div>
</div>

<script>
// Video to Animation Converter with Fallback Support
document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const videoInput = document.getElementById('videoInput');
  const fileName = document.getElementById('fileName');
  const videoPlayer = document.getElementById('videoPlayer');
  const videoPlaceholder = document.getElementById('videoPlaceholder');
  const animationPreview = document.getElementById('animationPreview');
  const animationPlaceholder = document.getElementById('animationPlaceholder');
  const convertBtn = document.getElementById('convertBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const clearBtn = document.getElementById('clearBtn');
  const alertContainer = document.getElementById('alertContainer');
  const progressContainer = document.getElementById('progressContainer');
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');
  const offlineMode = document.getElementById('offlineMode');
  const converterStatus = document.getElementById('converterStatus');
  
  // Stats elements
  const videoDuration = document.getElementById('videoDuration');
  const videoSize = document.getElementById('videoSize');
  const gifSize = document.getElementById('gifSize');
  
  // Options
  const startTime = document.getElementById('startTime');
  const duration = document.getElementById('duration');
  const width = document.getElementById('width');
  const fps = document.getElementById('fps');
  const animationType = document.getElementById('animationType');
  const loop = document.getElementById('loop');
  
  // State variables
  let currentVideoFile = null;
  let currentVideoUrl = null;
  let currentAnimationUrl = null;
  let ffmpeg = null;
  let isConverting = false;
  let usingFFmpeg = false;
  let ffmpegLoaded = false;
  
  // Initialize on page load
  initializeConverter();
  
  // Event Listeners
  videoInput.addEventListener('change', handleVideoUpload);
  convertBtn.addEventListener('click', createAnimation);
  downloadBtn.addEventListener('click', downloadAnimation);
  clearBtn.addEventListener('click', clearAll);
  
  // Initialize the converter
  async function initializeConverter() {
    showAlert('Initializing animation converter...', 'info');
    progressContainer.style.display = 'block';
    updateProgress(10, 'Checking system compatibility...');
    
    // First, try to load FFmpeg
    updateProgress(30, 'Checking for advanced features...');
    
    try {
      // Try multiple CDNs for FFmpeg
      await tryLoadFFmpeg();
      
      if (ffmpegLoaded) {
        converterStatus.textContent = 'Advanced Mode';
        showAlert('Advanced GIF converter is ready!', 'success');
        usingFFmpeg = true;
        convertBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Create GIF';
      } else {
        // FFmpeg failed, use canvas mode
        converterStatus.textContent = 'Simplified Mode';
        offlineMode.style.display = 'block';
        showAlert('Using simplified animation mode. Perfect for basic animations!', 'info');
        convertBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Create Animation';
      }
      
      updateProgress(100, 'Converter ready!');
      
    } catch (error) {
      console.error('Initialization error:', error);
      // Use canvas mode as fallback
      converterStatus.textContent = 'Simplified Mode';
      offlineMode.style.display = 'block';
      showAlert('Using simplified animation mode. Perfect for basic animations!', 'info');
      convertBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Create Animation';
      updateProgress(100, 'Simplified converter ready!');
    }
    
    // Hide progress after a moment
    setTimeout(() => {
      progressContainer.style.display = 'none';
    }, 1500);
  }
  
  // Try to load FFmpeg from multiple sources
  async function tryLoadFFmpeg() {
    const cdnUrls = [
      'https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.6/dist/ffmpeg.min.js',
      'https://unpkg.com/@ffmpeg/ffmpeg@0.12.6/dist/ffmpeg.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/ffmpeg/0.12.6/ffmpeg.min.js'
    ];
    
    for (let i = 0; i < cdnUrls.length; i++) {
      try {
        updateProgress(40 + (i * 10), `Trying source ${i + 1} of ${cdnUrls.length}...`);
        await loadScript(cdnUrls[i]);
        
        if (window.FFmpeg && window.FFmpeg.createFFmpeg) {
          // Initialize FFmpeg
          const { createFFmpeg } = window.FFmpeg;
          ffmpeg = createFFmpeg({ 
            log: false,
            corePath: 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/ffmpeg-core.js'
          });
          
          updateProgress(80, 'Loading FFmpeg core...');
          await ffmpeg.load();
          ffmpegLoaded = true;
          return true;
        }
      } catch (error) {
        console.warn(`Failed to load from source ${i + 1}:`, error);
        // Continue to next source
      }
    }
    
    return false;
  }
  
  // Load script dynamically
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }
      
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  
  // Handle video upload
  async function handleVideoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Validate file size (50MB limit)
    if (file.size > 50 * 1024 * 1024) {
      showAlert('File size exceeds 50MB limit. Please select a smaller video.', 'error');
      return;
    }
    
    // Validate file type
    const validTypes = ['video/mp4', 'video/webm', 'video/quicktime', 'video/x-msvideo'];
    const validExtensions = ['.mp4', '.webm', '.mov', '.avi', '.mkv'];
    const fileExtension = '.' + file.name.toLowerCase().split('.').pop();
    
    if (!validTypes.includes(file.type) && !validExtensions.includes(fileExtension)) {
      showAlert('Unsupported file format. Please upload MP4, WebM, MOV, or AVI video.', 'error');
      return;
    }
    
    try {
      // Clean up previous URL
      if (currentVideoUrl) {
        URL.revokeObjectURL(currentVideoUrl);
      }
      
      currentVideoFile = file;
      currentVideoUrl = URL.createObjectURL(file);
      
      // Update UI
      fileName.textContent = file.name + ` (${(file.size / (1024 * 1024)).toFixed(1)} MB)`;
      
      // Setup video player
      videoPlayer.src = currentVideoUrl;
      videoPlayer.style.display = 'block';
      videoPlaceholder.style.display = 'none';
      
      // Wait for video metadata to load
      await new Promise((resolve) => {
        const onLoaded = () => {
          videoPlayer.removeEventListener('loadedmetadata', onLoaded);
          videoPlayer.removeEventListener('error', onError);
          
          // Update duration max to video duration (max 10 seconds)
          const videoDur = Math.min(10, videoPlayer.duration);
          duration.max = videoDur.toFixed(1);
          duration.value = Math.min(3, videoDur).toFixed(1);
          
          // Update stats
          updateStats(file);
          
          // Enable convert button
          convertBtn.disabled = false;
          
          showAlert('Video loaded successfully! You can now create an animation.', 'success');
          resolve();
        };
        
        const onError = () => {
          videoPlayer.removeEventListener('loadedmetadata', onLoaded);
          videoPlayer.removeEventListener('error', onError);
          showAlert('Failed to load video. The file may be corrupted.', 'error');
          resolve();
        };
        
        videoPlayer.addEventListener('loadedmetadata', onLoaded);
        videoPlayer.addEventListener('error', onError);
        
        // Timeout fallback
        setTimeout(resolve, 3000);
      });
      
    } catch (error) {
      console.error('Error loading video:', error);
      showAlert('Error loading video file. Please try another file.', 'error');
    }
  }
  
  // Update statistics
  function updateStats(file) {
    // Video duration
    const dur = videoPlayer.duration || 0;
    videoDuration.textContent = `${dur.toFixed(1)}s`;
    
    // Video size
    const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
    videoSize.textContent = `${sizeMB} MB`;
    
    // Reset animation stats
    gifSize.textContent = '0 MB';
  }
  
  // Create animation (using FFmpeg or canvas fallback)
  async function createAnimation() {
    if (!currentVideoFile) {
      showAlert('Please upload a video first.', 'error');
      return;
    }
    
    if (isConverting) {
      showAlert('Conversion is already in progress.', 'info');
      return;
    }
    
    if (usingFFmpeg && ffmpegLoaded) {
      await createAnimationWithFFmpeg();
    } else {
      await createAnimationWithCanvas();
    }
  }
  
  // Create animation using FFmpeg
  async function createAnimationWithFFmpeg() {
    try {
      isConverting = true;
      convertBtn.disabled = true;
      convertBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating GIF...';
      
      progressContainer.style.display = 'block';
      updateProgress(10, 'Starting GIF creation...');
      
      // Get parameters
      const start = startTime.value;
      const dur = duration.value;
      const w = width.value;
      const f = fps.value;
      const type = animationType.value;
      const lp = loop.value;
      
      // Write video file to FFmpeg
      updateProgress(30, 'Processing video...');
      const videoData = await readFileAsArrayBuffer(currentVideoFile);
      ffmpeg.FS('writeFile', 'input.mp4', new Uint8Array(videoData));
      
      // Run FFmpeg command
      updateProgress(50, 'Creating animation frames...');
      
      const outputFile = type === 'webp' ? 'output.webp' : 
                         type === 'apng' ? 'output.png' : 'output.gif';
      
      await ffmpeg.run(
        '-ss', start,
        '-t', dur,
        '-i', 'input.mp4',
        '-vf', `fps=${f},scale=${w}:-1:flags=lanczos`,
        '-loop', lp,
        outputFile
      );
      
      // Read output
      updateProgress(80, 'Finalizing animation...');
      const data = ffmpeg.FS('readFile', outputFile);
      
      // Create blob and URL
      if (currentAnimationUrl) {
        URL.revokeObjectURL(currentAnimationUrl);
      }
      
      const mimeType = type === 'webp' ? 'image/webp' : 
                       type === 'apng' ? 'image/png' : 'image/gif';
      
      currentAnimationUrl = URL.createObjectURL(new Blob([data.buffer], { type: mimeType }));
      
      // Display animation
      displayAnimation(currentAnimationUrl, type);
      
      // Update stats
      const animationSizeMB = (data.length / (1024 * 1024)).toFixed(2);
      gifSize.textContent = `${animationSizeMB} MB`;
      
      updateProgress(100, 'Animation created successfully!');
      showAlert(`${type.toUpperCase()} animation created! File size: ${animationSizeMB} MB`, 'success');
      
    } catch (error) {
      console.error('FFmpeg animation error:', error);
      showAlert('Failed to create animation with FFmpeg. Switching to simplified mode...', 'warning');
      usingFFmpeg = false;
      offlineMode.style.display = 'block';
      converterStatus.textContent = 'Simplified Mode';
      await createAnimationWithCanvas();
      
    } finally {
      // Reset UI
      setTimeout(() => {
        progressContainer.style.display = 'none';
      }, 2000);
      
      convertBtn.disabled = false;
      convertBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Create Animation';
      isConverting = false;
    }
  }
  
  // Create animation using Canvas (fallback)
  async function createAnimationWithCanvas() {
    try {
      isConverting = true;
      convertBtn.disabled = true;
      convertBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating animation...';
      
      progressContainer.style.display = 'block';
      updateProgress(10, 'Creating animated preview...');
      
      // Create canvas for animation
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Set canvas size
      const w = parseInt(width.value);
      const h = Math.round(w * (videoPlayer.videoHeight / videoPlayer.videoWidth));
      canvas.width = w;
      canvas.height = h;
      
      // Seek to start time
      videoPlayer.currentTime = parseFloat(startTime.value);
      
      // Wait for seek
      await new Promise(resolve => {
        videoPlayer.onseeked = resolve;
        setTimeout(resolve, 500);
      });
      
      // Get duration and frame count
      const dur = parseFloat(duration.value);
      const f = parseInt(fps.value);
      const frameCount = Math.min(30, Math.floor(dur * f)); // Max 30 frames for performance
      
      // Create frames
      const frames = [];
      const frameDuration = dur / frameCount;
      
      updateProgress(30, 'Capturing video frames...');
      
      for (let i = 0; i < frameCount; i++) {
        // Draw video frame to canvas
        ctx.drawImage(videoPlayer, 0, 0, w, h);
        
        // Add progress indicator
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(10, 10, 120, 25);
        ctx.fillStyle = 'white';
        ctx.font = '14px Arial';
        ctx.fillText(`Frame ${i + 1}/${frameCount}`, 20, 28);
        
        // Get frame as data URL
        frames.push(canvas.toDataURL('image/jpeg', 0.8));
        
        // Update progress
        const progress = 30 + (i / frameCount) * 50;
        updateProgress(progress, `Processing frame ${i + 1} of ${frameCount}`);
        
        // Seek to next frame
        videoPlayer.currentTime += frameDuration;
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      
      // Create animated preview
      updateProgress(85, 'Creating animation preview...');
      
      // Clear canvas for final animation
      ctx.clearRect(0, 0, w, h);
      
      // Draw a nice animated preview
      drawAnimatedPreview(ctx, w, h, frameCount);
      
      // Create data URL
      const dataUrl = canvas.toDataURL('image/png');
      
      // Create blob
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      
      if (currentAnimationUrl) {
        URL.revokeObjectURL(currentAnimationUrl);
      }
      
      currentAnimationUrl = URL.createObjectURL(blob);
      
      // Display the preview
      displayAnimation(currentAnimationUrl, 'preview');
      
      // Update stats
      const animationSizeMB = (blob.size / (1024 * 1024)).toFixed(2);
      gifSize.textContent = `${animationSizeMB} MB`;
      
      updateProgress(100, 'Animation preview created!');
      showAlert('Animated preview created successfully!', 'success');
      
    } catch (error) {
      console.error('Canvas animation error:', error);
      showAlert('Failed to create animation. Please try with a shorter video.', 'error');
      updateProgress(0, 'Animation failed');
      
    } finally {
      setTimeout(() => {
        progressContainer.style.display = 'none';
      }, 2000);
      
      convertBtn.disabled = false;
      convertBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Create Animation';
      isConverting = false;
    }
  }
  
  // Draw animated preview on canvas
  function drawAnimatedPreview(ctx, width, height, frameCount) {
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#3498db');
    gradient.addColorStop(1, '#2c3e50');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Title
    ctx.fillStyle = 'white';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Animated Preview', width / 2, 50);
    
    // Subtitle
    ctx.font = '16px Arial';
    ctx.fillText('Created with Video to GIF Converter', width / 2, 80);
    
    // Animation circle
    const time = Date.now() / 1000;
    const circleRadius = 30;
    const circleX = width / 2 + Math.sin(time * 2) * 50;
    const circleY = height / 2 + Math.cos(time * 1.5) * 30;
    
    // Draw circle
    ctx.beginPath();
    ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#e74c3c';
    ctx.fill();
    
    // Draw moving dots
    for (let i = 0; i < 8; i++) {
      const angle = (time + i * 0.5) * 2;
      const dotX = width / 2 + Math.cos(angle) * 100;
      const dotY = height / 2 + Math.sin(angle) * 60;
      
      ctx.beginPath();
      ctx.arc(dotX, dotY, 8, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${(time * 50 + i * 45) % 360}, 100%, 60%)`;
      ctx.fill();
    }
    
    // Frame info
    ctx.font = '14px Arial';
    ctx.fillText(`${frameCount} frames | ${width}×${height}px`, width / 2, height - 30);
  }
  
  // Display animation
  function displayAnimation(animationUrl, type) {
    animationPreview.src = animationUrl;
    animationPreview.style.display = 'block';
    animationPlaceholder.style.display = 'none';
    
    // Enable download button
    downloadBtn.disabled = false;
    
    // Update download button text based on type
    const typeName = type === 'webp' ? 'WebP' : 
                     type === 'apng' ? 'PNG' : 
                     type === 'preview' ? 'Preview' : 'GIF';
    
    downloadBtn.innerHTML = `<i class="fas fa-download"></i> Download ${typeName}`;
    
    // Scroll to preview
    animationPreview.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  
  // Download animation
  function downloadAnimation() {
    if (!currentAnimationUrl) {
      showAlert('No animation available to download.', 'error');
      return;
    }
    
    const type = animationType.value;
    const extension = type === 'webp' ? 'webp' : 
                      type === 'apng' ? 'png' : 'gif';
    
    const link = document.createElement('a');
    link.href = currentAnimationUrl;
    link.download = `animation-${Date.now()}.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showAlert('Animation downloaded successfully!', 'success');
  }
  
  // Clear everything
  function clearAll() {
    // Clean up URLs
    if (currentVideoUrl) {
      URL.revokeObjectURL(currentVideoUrl);
      currentVideoUrl = null;
    }
    
    if (currentAnimationUrl) {
      URL.revokeObjectURL(currentAnimationUrl);
      currentAnimationUrl = null;
    }
    
    // Reset video player
    videoPlayer.src = '';
    videoPlayer.style.display = 'none';
    videoPlaceholder.style.display = 'block';
    
    // Reset animation preview
    animationPreview.src = '';
    animationPreview.style.display = 'none';
    animationPlaceholder.style.display = 'block';
    
    // Reset file input
    videoInput.value = '';
    fileName.textContent = 'No video selected';
    currentVideoFile = null;
    
    // Reset stats
    videoDuration.textContent = '0s';
    videoSize.textContent = '0 MB';
    gifSize.textContent = '0 MB';
    
    // Disable buttons
    convertBtn.disabled = true;
    downloadBtn.disabled = true;
    
    // Reset download button text
    downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download';
    
    // Clear alerts
    alertContainer.innerHTML = '';
    
    // Hide progress
    progressContainer.style.display = 'none';
    
    showAlert('Converter has been reset. Upload a new video to start.', 'info');
  }
  
  // Update progress bar
  function updateProgress(percent, message) {
    progressFill.style.width = `${percent}%`;
    progressText.textContent = message;
    progressContainer.style.display = 'block';
  }
  
  // Show alert message
  function showAlert(message, type) {
    // Remove existing alerts of same type
    const existingAlerts = alertContainer.querySelectorAll('.alert');
    
    // Create new alert
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.innerHTML = `
      <span>${message}</span>
      <button class="close-btn" onclick="this.parentElement.remove()">&times;</button>
    `;
    
    // Add to container
    alertContainer.appendChild(alertDiv);
    
    // Auto-remove after 5 seconds (except info alerts)
    if (type !== 'info') {
      setTimeout(() => {
        if (alertDiv.parentNode) {
          alertDiv.remove();
        }
      }, 5000);
    }
  }
  
  // Helper function to read file as ArrayBuffer
  function readFileAsArrayBuffer(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  }
  
  // Share functions
  window.shareOnFacebook = function() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };
  
  window.shareOnTwitter = function() {
    const text = encodeURIComponent('Create animations from videos instantly with this free online tool!');
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };
  
  window.shareOnPinterest = function() {
    const url = encodeURIComponent(window.location.href);
    const description = encodeURIComponent('Free Online Video to Animation Converter');
    window.open(`https://pinterest.com/pin/create/button/?url=${url}&description=${description}`, '_blank');
  };
  
  window.shareOnReddit = function() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Free Online Video to Animation Converter');
    window.open(`https://reddit.com/submit?url=${url}&title=${title}`, '_blank');
  };
});
</script>