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
    Convert videos to high-quality animated GIFs instantly using FFmpeg.wasm in your browser. 
    No uploads, no server processing – 100% client-side and private. Convert MP4, WebM, MOV to GIF in seconds.
  </p>

  <div class="converter-section">
    <h2>Video To GIF Converter</h2>

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
        <span>Conversion Time:</span>
        <span id="conversionTime">0s</span>
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
        Supported formats: MP4, WebM, MOV, AVI (Max 50MB for better performance)
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
        <label class="option-label">Quality</label>
        <select id="quality" class="option-select">
          <option value="high">High Quality</option>
          <option value="medium" selected>Medium Quality</option>
          <option value="low">Low Quality (Smaller file)</option>
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
        <i class="fas fa-sync-alt"></i> Convert to GIF
      </button>
      <button class="case-button success" id="downloadBtn" disabled>
        <i class="fas fa-download"></i> Download GIF
      </button>
      <button class="case-button secondary" id="clearBtn">
        <i class="fas fa-redo"></i> Clear All
      </button>
    </div>

    <!-- Alert Container -->
    <div id="alertContainer" class="alert-container"></div>

    <!-- Share Buttons -->
    <div class="share-section">
      <button class="share-button facebook" onclick="shareOnFacebook()">
        <i class="fab fa-facebook-f"></i> Share on Facebook
      </button>
      <button class="share-button twitter" onclick="shareOnTwitter()">
        <i class="fab fa-twitter"></i> Share on Twitter
      </button>
      <button class="share-button pinterest" onclick="shareOnPinterest()">
        <i class="fab fa-pinterest-p"></i> Share on Pinterest
      </button>
      <button class="share-button reddit" onclick="shareOnReddit()">
        <i class="fab fa-reddit-alien"></i> Share on Reddit
      </button>
    </div>

    <!-- GIF Preview -->
    <div class="preview-section">
      <h3>GIF Preview</h3>
      <div class="preview-container">
        <img id="gifPreview" alt="Converted GIF Preview">
        <div id="gifPlaceholder">
          <i class="fas fa-image"></i>
          <p>Converted GIF will appear here</p>
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
4. Convert: Click "Convert to GIF" - processing happens in your browser
5. Download: Once converted, click "Download GIF" to save your animated GIF
      </div>

      <h3>Recommended Settings for Different Use Cases:</h3>
      <div class="example-text">
- Social Media (Twitter, Facebook): 640px width, 10 FPS, 3-5 seconds duration
- WhatsApp/Telegram: 480px width, 8 FPS, 2-3 seconds duration
- Website Loading: 240px width, 15 FPS, 1-2 seconds duration
- Presentation/Demo: 800px width, 12 FPS, 5-10 seconds duration
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Video To GIF Converter – Complete Guide</h2>

    <p>Looking for a reliable way to convert videos to GIFs without compromising your privacy? Our <strong>Video to GIF Converter</strong> is the perfect solution. Using cutting-edge FFmpeg.wasm technology, this tool processes your videos entirely in your browser – no uploads to servers, no data collection, complete privacy guaranteed.</p>

    <h3>Why Choose Our Video to GIF Converter?</h3>
    <ul>
      <li><strong>100% Client-Side Processing:</strong> Your videos never leave your computer. All conversion happens locally using WebAssembly.</li>
      <li><strong>No Registration Required:</strong> Use immediately without creating accounts or providing personal information.</li>
      <li><strong>Multiple Format Support:</strong> Convert MP4, WebM, MOV, AVI, and most common video formats to GIF.</li>
      <li><strong>Advanced Controls:</strong> Fine-tune start time, duration, frame rate, resolution, and quality settings.</li>
      <li><strong>High-Quality Output:</strong> Get professional-looking GIFs with smooth animations and optimal file sizes.</li>
      <li><strong>Completely Free:</strong> No watermarks, no limitations, no hidden costs.</li>
    </ul>

    <h3>Step-by-Step Conversion Process</h3>
    <ol>
      <li><strong>Upload Your Video:</strong> Click the upload button and select your video file. The tool supports files up to 50MB for optimal performance.</li>
      <li><strong>Preview & Select Segment:</strong> Use the video player to preview your video and identify the perfect clip for conversion.</li>
      <li><strong>Customize Settings:</strong> Adjust start time, duration (up to 10 seconds), resolution, frame rate, and quality.</li>
      <li><strong>Convert to GIF:</strong> Click the convert button. FFmpeg.wasm will process your video locally in the browser.</li>
      <li><strong>Download & Share:</strong> Once conversion is complete, download your GIF and share it on social media, messaging apps, or websites.</li>
    </ol>

    <h3>Technical Details: How It Works</h3>
    <p>This converter uses <strong>FFmpeg compiled to WebAssembly (FFmpeg.wasm)</strong>, which brings the power of the industry-standard FFmpeg multimedia framework directly to your web browser. The process involves:</p>
    <ul>
      <li><strong>Video Loading:</strong> Your video file is read directly from your device</li>
      <li><strong>Frame Extraction:</strong> FFmpeg extracts frames based on your specified frame rate</li>
      <li><strong>Processing:</strong> Frames are resized, optimized, and converted to GIF format</li>
      <li><strong>GIF Encoding:</strong> Processed frames are encoded into an animated GIF</li>
      <li><strong>Local Output:</strong> The final GIF is created and made available for download</li>
    </ul>
    <p>The entire process happens in your browser's memory – no data is transmitted over the internet, ensuring maximum privacy and security.</p>

    <h3>Common Use Cases & Applications</h3>
    <ul>
      <li><strong>Social Media Content:</strong> Create engaging GIFs from video clips for Twitter, Facebook, Instagram, and Reddit</li>
      <li><strong>Reaction GIFs:</strong> Make custom reaction GIFs from movies, TV shows, or personal videos</li>
      <li><strong>Tutorials & Demos:</strong> Convert how-to video segments into GIFs for step-by-step instructions</li>
      <li><strong>Website Elements:</strong> Create animated banners, loading animations, or product demos for websites</li>
      <li><strong>Email Marketing:</strong> Use GIFs in email campaigns to demonstrate products or showcase features</li>
      <li><strong>Presentations:</strong> Embed animated GIFs in PowerPoint, Google Slides, or Keynote presentations</li>
      <li><strong>Gaming Highlights:</strong> Convert gameplay moments to GIFs for sharing with gaming communities</li>
      <li><strong>Educational Materials:</strong> Create animated illustrations from educational videos</li>
    </ul>

    <h3>Optimization Tips for Best Results</h3>
    <ul>
      <li><strong>Shorter Duration:</strong> Keep GIFs under 5 seconds for optimal file size and loading speed</li>
      <li><strong>Lower Frame Rates:</strong> 10 FPS is usually sufficient for most GIFs and creates smaller files</li>
      <li><strong>Resize When Possible:</strong> Reducing dimensions significantly decreases file size</li>
      <li><strong>Simple Backgrounds:</strong> GIFs with less detail and motion compress better</li>
      <li><strong>Medium Quality:</strong> The "Medium Quality" setting provides the best balance of visual quality and file size</li>
      <li><strong>Use Infinite Loop:</strong> For most use cases, infinite looping creates a better user experience</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    
    <p><strong>Is there a file size limit for videos?</strong><br>
    Yes, the tool supports videos up to 50MB for optimal performance. For larger videos, we recommend trimming them first using video editing software.</p>
    
    <p><strong>What video formats are supported?</strong><br>
    The converter supports MP4, WebM, MOV, and AVI formats. Most videos from smartphones, cameras, and screen recorders work perfectly.</p>
    
    <p><strong>Is my video kept private and secure?</strong><br>
    Absolutely! This is the most important feature. All processing happens locally in your browser using WebAssembly. Your video is never uploaded to any server – we never see, store, or have access to your content.</p>
    
    <p><strong>What's the maximum duration for a GIF?</strong><br>
    You can create GIFs up to 10 seconds long. For practical use and optimal performance, we recommend keeping GIFs under 5 seconds.</p>
    
    <p><strong>Do I need to install any software?</strong><br>
    No installation required! The converter works directly in your web browser. Just visit the page and start converting.</p>
    
    <p><strong>Does it work on mobile devices?</strong><br>
    Yes, the converter is fully responsive and works on smartphones, tablets, and desktop computers.</p>
    
    <p><strong>Can I use this tool for commercial purposes?</strong><br>
    Yes, you can use the converter for both personal and commercial projects without any restrictions.</p>
    
    <p><strong>How does FFmpeg.wasm work?</strong><br>
    FFmpeg.wasm is FFmpeg compiled to WebAssembly, allowing the powerful video processing capabilities of FFmpeg to run directly in web browsers.</p>

    <h3>Comparison with Other Tools</h3>
    <p>Unlike many online video to GIF converters that require uploading your videos to their servers, our tool keeps everything local. This means:</p>
    <ul>
      <li><strong>Faster Processing:</strong> No waiting for uploads and downloads</li>
      <li><strong>Better Privacy:</strong> Your videos remain on your device</li>
      <li><strong>No Internet Required:</strong> Once loaded, the tool works offline</li>
      <li><strong>No Data Caps:</strong> Doesn't consume your internet bandwidth for uploads</li>
      <li><strong>Unlimited Use:</strong> No daily limits or subscription requirements</li>
    </ul>

    <h3>Technical Requirements</h3>
    <ul>
      <li>Modern web browser (Chrome 57+, Firefox 52+, Safari 11+, Edge 16+)</li>
      <li>JavaScript enabled</li>
      <li>WebAssembly support (available in all modern browsers)</li>
      <li>Minimum 100MB free memory for processing</li>
    </ul>

    <h3>About FFmpeg.wasm</h3>
    <p>FFmpeg.wasm is a WebAssembly port of FFmpeg, the leading multimedia framework. It allows complex video and audio processing to run directly in web browsers with near-native performance. This technology enables our converter to process videos entirely client-side without compromising on features or quality.</p>

    <p>Start converting your videos to GIFs today – quickly, privately, and completely free!</p>
  </div>
</div>

<script>
// Enhanced Video to GIF Converter with better error handling
document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const videoInput = document.getElementById('videoInput');
  const fileName = document.getElementById('fileName');
  const videoPlayer = document.getElementById('videoPlayer');
  const videoPlaceholder = document.getElementById('videoPlaceholder');
  const gifPreview = document.getElementById('gifPreview');
  const gifPlaceholder = document.getElementById('gifPlaceholder');
  const convertBtn = document.getElementById('convertBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const clearBtn = document.getElementById('clearBtn');
  const alertContainer = document.getElementById('alertContainer');
  const progressContainer = document.getElementById('progressContainer');
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');
  
  // Stats elements
  const videoDuration = document.getElementById('videoDuration');
  const videoSize = document.getElementById('videoSize');
  const gifSize = document.getElementById('gifSize');
  const conversionTime = document.getElementById('conversionTime');
  
  // Options
  const startTime = document.getElementById('startTime');
  const duration = document.getElementById('duration');
  const width = document.getElementById('width');
  const fps = document.getElementById('fps');
  const quality = document.getElementById('quality');
  const loop = document.getElementById('loop');
  
  // State variables
  let currentVideoFile = null;
  let currentVideoUrl = null;
  let currentGifUrl = null;
  let ffmpeg = null;
  let isConverting = false;
  let isFFmpegLoaded = false;
  
  // Initialize on page load
  initializeApp();
  
  // Event Listeners
  videoInput.addEventListener('change', handleVideoUpload);
  convertBtn.addEventListener('click', convertVideoToGif);
  downloadBtn.addEventListener('click', downloadGif);
  clearBtn.addEventListener('click', clearAll);
  
  // Initialize the application
  async function initializeApp() {
    showAlert('Initializing video converter...', 'info');
    updateProgress(10, 'Loading converter...');
    
    try {
      // Load FFmpeg dynamically
      await loadFFmpeg();
      isFFmpegLoaded = true;
      updateProgress(100, 'Converter ready!');
      showAlert('Video converter is ready to use!', 'success');
      
      // Hide progress after a moment
      setTimeout(() => {
        progressContainer.style.display = 'none';
      }, 1500);
      
    } catch (error) {
      console.error('Failed to initialize FFmpeg:', error);
      showAlert('FFmpeg failed to load. Please refresh the page.', 'error');
    }
  }
  
  // Load FFmpeg with better error handling
  async function loadFFmpeg() {
    return new Promise((resolve, reject) => {
      // Check if FFmpeg is already loaded
      if (window.FFmpeg && window.FFmpeg.createFFmpeg) {
        createFFmpegInstance();
        resolve();
        return;
      }
      
      // Load FFmpeg script
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.6/dist/ffmpeg.min.js';
      script.onload = () => {
        if (window.FFmpeg && window.FFmpeg.createFFmpeg) {
          createFFmpegInstance();
          resolve();
        } else {
          reject(new Error('FFmpeg not found after loading'));
        }
      };
      script.onerror = reject;
      document.head.appendChild(script);
      
      function createFFmpegInstance() {
        try {
          const { createFFmpeg } = window.FFmpeg;
          ffmpeg = createFFmpeg({ 
            log: false,
            corePath: 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/ffmpeg-core.js'
          });
        } catch (error) {
          reject(error);
        }
      }
    });
  }
  
  // Handle video upload
  async function handleVideoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Validate file size (50MB limit for better performance)
    if (file.size > 50 * 1024 * 1024) {
      showAlert('File size exceeds 50MB limit. Please select a smaller video for better performance.', 'error');
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
          
          // Update duration max to video duration (max 10 seconds for GIF)
          const videoDuration = Math.min(10, videoPlayer.duration);
          duration.max = videoDuration.toFixed(1);
          duration.value = Math.min(3, videoDuration).toFixed(1);
          
          // Update stats
          updateStats(file);
          
          // Enable convert button
          convertBtn.disabled = false;
          
          showAlert('Video loaded successfully! You can now convert it to GIF.', 'success');
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
        setTimeout(resolve, 5000);
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
    
    // Reset GIF stats
    gifSize.textContent = '0 MB';
    conversionTime.textContent = '0s';
  }
  
  // Convert video to GIF
  async function convertVideoToGif() {
    if (!currentVideoFile) {
      showAlert('Please upload a video first.', 'error');
      return;
    }
    
    if (isConverting) {
      showAlert('Conversion is already in progress.', 'info');
      return;
    }
    
    // Ensure FFmpeg is loaded
    if (!isFFmpegLoaded || !ffmpeg) {
      showAlert('Converter is still loading. Please wait...', 'info');
      progressContainer.style.display = 'block';
      updateProgress(20, 'Loading converter...');
      
      try {
        await loadFFmpeg();
        isFFmpegLoaded = true;
      } catch (error) {
        showAlert('Failed to load converter. Please refresh the page.', 'error');
        progressContainer.style.display = 'none';
        return;
      }
    }
    
    try {
      isConverting = true;
      convertBtn.disabled = true;
      convertBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Converting...';
      
      // Show progress
      progressContainer.style.display = 'block';
      updateProgress(10, 'Starting conversion...');
      
      // Load FFmpeg if not already loaded
      if (!ffmpeg.isLoaded()) {
        updateProgress(20, 'Loading FFmpeg core...');
        await ffmpeg.load();
      }
      
      // Get parameters
      const start = startTime.value;
      const dur = duration.value;
      const w = width.value;
      const f = fps.value;
      const qual = quality.value;
      const lp = loop.value;
      
      // Validate parameters
      if (dur > 10) {
        showAlert('Duration should be 10 seconds or less for optimal performance.', 'error');
        return;
      }
      
      // Write video file to FFmpeg
      updateProgress(30, 'Processing video file...');
      const videoData = await readFileAsArrayBuffer(currentVideoFile);
      ffmpeg.FS('writeFile', 'input.mp4', new Uint8Array(videoData));
      
      // Run FFmpeg command with progress tracking
      updateProgress(50, 'Converting to GIF...');
      
      // Simple progress simulation
      const progressInterval = setInterval(() => {
        const currentProgress = parseInt(progressFill.style.width) || 50;
        if (currentProgress < 90) {
          updateProgress(currentProgress + 5, 'Converting to GIF...');
        }
      }, 500);
      
      const startTimeStamp = Date.now();
      
      try {
        // Build FFmpeg command based on quality
        let ffmpegCommand = [
          '-ss', start,
          '-t', dur,
          '-i', 'input.mp4',
          '-vf', `fps=${f},scale=${w}:-1:flags=lanczos`,
          '-loop', lp
        ];
        
        // Add quality settings
        if (qual === 'high') {
          ffmpegCommand.push('-b:v', '2M');
        } else if (qual === 'low') {
          ffmpegCommand.push('-b:v', '512k');
        } else {
          ffmpegCommand.push('-b:v', '1M'); // Medium quality
        }
        
        ffmpegCommand.push('output.gif');
        
        await ffmpeg.run(...ffmpegCommand);
      } finally {
        clearInterval(progressInterval);
      }
      
      // Read output GIF
      updateProgress(95, 'Finalizing GIF...');
      const data = ffmpeg.FS('readFile', 'output.gif');
      
      // Check if GIF was created
      if (data.length === 0) {
        throw new Error('Empty GIF file created');
      }
      
      // Create blob and URL
      if (currentGifUrl) {
        URL.revokeObjectURL(currentGifUrl);
      }
      
      currentGifUrl = URL.createObjectURL(new Blob([data.buffer], { type: 'image/gif' }));
      
      // Display GIF
      displayGif(currentGifUrl);
      
      // Update stats
      const gifSizeMB = (data.length / (1024 * 1024)).toFixed(2);
      gifSize.textContent = `${gifSizeMB} MB`;
      
      const conversionTimeSec = ((Date.now() - startTimeStamp) / 1000).toFixed(1);
      conversionTime.textContent = `${conversionTimeSec}s`;
      
      updateProgress(100, 'Conversion complete!');
      showAlert(`GIF created successfully! File size: ${gifSizeMB} MB`, 'success');
      
      // Hide progress after a moment
      setTimeout(() => {
        progressContainer.style.display = 'none';
      }, 2000);
      
    } catch (error) {
      console.error('Conversion error:', error);
      
      // Provide helpful error messages
      let errorMessage = 'Failed to convert video to GIF. ';
      
      if (error.message.includes('memory') || error.message.includes('Cannot enlarge memory')) {
        errorMessage += 'The video might be too large. Try a shorter duration or lower resolution.';
      } else if (error.message.includes('Invalid data') || error.message.includes('format')) {
        errorMessage += 'The video format might not be fully supported. Try converting to MP4 first.';
      } else if (error.message.includes('Empty GIF')) {
        errorMessage += 'No frames were captured. Check your start time and duration settings.';
      } else {
        errorMessage += 'Please try different settings.';
      }
      
      showAlert(errorMessage, 'error');
      updateProgress(0, 'Conversion failed');
      
    } finally {
      // Reset UI
      convertBtn.disabled = false;
      convertBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Convert to GIF';
      isConverting = false;
    }
  }
  
  // Display GIF
  function displayGif(gifUrl) {
    gifPreview.src = gifUrl;
    gifPreview.style.display = 'block';
    gifPlaceholder.style.display = 'none';
    
    // Enable download button
    downloadBtn.disabled = false;
    
    // Scroll to preview
    gifPreview.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  
  // Download GIF
  function downloadGif() {
    if (!currentGifUrl) {
      showAlert('No GIF available to download.', 'error');
      return;
    }
    
    const link = document.createElement('a');
    link.href = currentGifUrl;
    link.download = `video-gif-${Date.now()}.gif`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showAlert('GIF downloaded successfully!', 'success');
  }
  
  // Clear everything
  function clearAll() {
    // Clean up URLs
    if (currentVideoUrl) {
      URL.revokeObjectURL(currentVideoUrl);
      currentVideoUrl = null;
    }
    
    if (currentGifUrl) {
      URL.revokeObjectURL(currentGifUrl);
      currentGifUrl = null;
    }
    
    // Reset video player
    videoPlayer.src = '';
    videoPlayer.style.display = 'none';
    videoPlaceholder.style.display = 'block';
    
    // Reset GIF preview
    gifPreview.src = '';
    gifPreview.style.display = 'none';
    gifPlaceholder.style.display = 'block';
    
    // Reset file input
    videoInput.value = '';
    fileName.textContent = 'No video selected';
    currentVideoFile = null;
    
    // Reset stats
    videoDuration.textContent = '0s';
    videoSize.textContent = '0 MB';
    gifSize.textContent = '0 MB';
    conversionTime.textContent = '0s';
    
    // Disable buttons
    convertBtn.disabled = true;
    downloadBtn.disabled = true;
    
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
    const text = encodeURIComponent('Convert videos to GIFs instantly with this free online tool!');
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };
  
  window.shareOnPinterest = function() {
    const url = encodeURIComponent(window.location.href);
    const description = encodeURIComponent('Free Online Video to GIF Converter');
    window.open(`https://pinterest.com/pin/create/button/?url=${url}&description=${description}`, '_blank');
  };
  
  window.shareOnReddit = function() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Free Online Video to GIF Converter - Client Side');
    window.open(`https://reddit.com/submit?url=${url}&title=${title}`, '_blank');
  };
});
</script>