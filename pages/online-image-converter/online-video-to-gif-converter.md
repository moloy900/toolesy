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
<script src="https://unpkg.com/@ffmpeg/ffmpeg@0.12.6/dist/ffmpeg.min.js"></script>


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

  .input-group {
    margin: 15px 0;
    padding: 15px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .input-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #2c3e50;
  }

  .input-group input {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e6ed;
    border-radius: 6px;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  .input-group input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .video-preview {
    width: 100%;
    margin: 20px 0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  .gif-preview {
    width: 100%;
    margin: 20px 0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    display: none;
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
    background: #95a5a6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .progress-container {
    margin: 20px 0;
    display: none;
  }

  .progress-bar {
    width: 100%;
    height: 12px;
    background: #e0e6ed;
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 8px;
  }

  .progress-fill {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, var(--primary), #4cd964);
    border-radius: 6px;
    transition: width 0.3s ease;
  }

  .progress-text {
    text-align: center;
    font-size: 14px;
    color: #7f8c8d;
    font-weight: 500;
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

  .conversion-options {
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

  .examples {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .example-item {
    background: white;
    padding: 15px;
    border-radius: 6px;
    border-left: 4px solid var(--primary);
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

    .conversion-options {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>🎬 Free Video to GIF Converter</h1>
  <p class="welcome-message">Convert your videos to animated GIFs instantly. Upload MP4, AVI, MOV, or any video file and create custom GIFs with adjustable settings.</p>

  <div class="converter-section">
    <h2>Video to GIF Converter</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Video Status: </span>
        <span id="videoStatus">No video uploaded</span>
      </div>
      <div class="counter-item">
        <span>GIF Status: </span>
        <span id="gifStatus">Not created yet</span>
      </div>
      <div class="counter-item">
        <span>File Size: </span>
        <span id="fileSize">0 MB</span>
      </div>
      <div class="counter-item">
        <span>Estimated GIF Size: </span>
        <span id="estimatedSize">0 MB</span>
      </div>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="videoInput" accept="video/*" style="display: none;">

    <div class="file-upload-section">
      <button class="file-upload-button" id="uploadButton">
        <i class="fas fa-upload"></i> Upload Video
      </button>
      <span id="fileName">No file selected</span>
    </div>

    <video id="videoPlayer" class="video-preview" controls style="display: none;"></video>

    <div class="conversion-options">
      <div class="option-group">
        <label class="option-label">Start Time (seconds)</label>
        <input type="number" id="startTime" class="option-input" value="0" min="0">
      </div>
      
      <div class="option-group">
        <label class="option-label">Duration (seconds)</label>
        <input type="number" id="duration" class="option-input" value="5" min="1" max="60">
      </div>
      
      <div class="option-group">
        <label class="option-label">GIF Width (pixels)</label>
        <input type="number" id="width" class="option-input" value="480" min="100" max="1920">
      </div>
      
      <div class="option-group">
        <label class="option-label">FPS (Frames per Second)</label>
        <input type="number" id="fps" class="option-input" value="10" min="1" max="30">
      </div>
    </div>

    <div class="button-section">
      <button class="case-button" id="convertBtn">
        <i class="fas fa-sync-alt"></i> Convert to GIF
      </button>
      <button class="case-button success" id="downloadBtn" disabled>
        <i class="fas fa-download"></i> Download GIF
      </button>
      <button class="case-button secondary" id="clearBtn">
        <i class="fas fa-trash"></i> Clear All
      </button>
    </div>

    <div class="progress-container" id="progressContainer">
      <div class="progress-bar">
        <div class="progress-fill" id="progressFill"></div>
      </div>
      <div class="progress-text" id="progressText"></div>
    </div>

    <img id="gifPreview" class="gif-preview" alt="Generated GIF Preview">
    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples & Tips</h2>
      
      <div class="example-item">
        <h3>🎯 Best Practices for Quality GIFs</h3>
        <p>• <strong>Keep duration short:</strong> 3-10 seconds for optimal file size</p>
        <p>• <strong>Lower FPS:</strong> 8-12 FPS for smooth animation with smaller size</p>
        <p>• <strong>Reduce width:</strong> 320-480px for faster loading</p>
        <p>• <strong>Trim precisely:</strong> Select only the essential part of your video</p>
      </div>

      <div class="example-item">
        <h3>📱 Supported Video Formats</h3>
        <p>• MP4 (MPEG-4)</p>
        <p>• AVI (Audio Video Interleave)</p>
        <p>• MOV (QuickTime Movie)</p>
        <p>• WebM (Web Media)</p>
        <p>• 3GP (3GPP)</p>
        <p>• MKV (Matroska)</p>
      </div>

      <div class="example-item">
        <h3>⚡ Recommended Settings</h3>
        <p><strong>For Social Media:</strong> 480px width, 10 FPS, 5 seconds duration</p>
        <p><strong>For Websites:</strong> 320px width, 8 FPS, 3 seconds duration</p>
        <p><strong>For Presentations:</strong> 640px width, 12 FPS, 10 seconds duration</p>
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Video to GIF Converter Tool</h2>

    <p>Transform your videos into animated GIFs instantly with our free <strong>Video to GIF Converter</strong>. This powerful online tool allows you to convert MP4, AVI, MOV, WebM, and other video formats into high-quality animated GIFs without any software installation. Customize your GIFs with precise timing, frame rate, and size controls. Perfect for creating reaction GIFs, social media content, website animations, and more. All processing happens securely in your browser - your videos never leave your device.</p>

    <h3>How to Convert Video to GIF (Step-by-Step):</h3>
    <ul>
      <li><strong>Upload Video:</strong> Click the "Upload Video" button and select any video file from your computer or mobile device.</li>
      <li><strong>Preview Video:</strong> Watch the uploaded video to decide which part you want to convert to GIF.</li>
      <li><strong>Adjust Settings:</strong> Set the start time, duration, width, and frames per second according to your needs.</li>
      <li><strong>Convert:</strong> Click "Convert to GIF" and wait a few moments for the conversion to complete.</li>
      <li><strong>Download:</strong> Once conversion is done, preview your GIF and click "Download GIF" to save it to your device.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you recorded a funny 30-second clip of your pet doing something amusing. You want to share it as a GIF on social media or in a chat. Instead of sharing the entire video, you can use our tool to extract just the best 5 seconds, convert it to an optimized GIF, and share it instantly. The tool preserves the humor while making it easily shareable across all platforms.</p>

    <h3>Key Features of Our Video to GIF Converter:</h3>
    <ul>
      <li><strong>Browser-Based:</strong> No software installation required - works directly in your web browser</li>
      <li><strong>Privacy Guaranteed:</strong> All processing happens locally - your videos never upload to any server</li>
      <li><strong>Customizable Settings:</strong> Adjust duration, start time, resolution, and frame rate</li>
      <li><strong>Fast Processing:</strong> Convert videos to GIFs in seconds using advanced FFmpeg technology</li>
      <li><strong>Multiple Formats:</strong> Supports all popular video formats including MP4, AVI, MOV, WebM, and more</li>
      <li><strong>Free & Unlimited:</strong> No watermarks, no file size limits, completely free to use</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What is the maximum video file size I can convert?</strong><br>
      There's no strict limit! Our tool can handle large video files, though conversion time may increase for very large files. We recommend keeping videos under 500MB for optimal performance.</p>

    <p><strong>Is my video data kept private and secure?</strong><br>
      Absolutely. This is the most important feature of our tool. The entire conversion process happens locally in your browser using WebAssembly technology. Your video never leaves your computer - we never see it, store it, or have access to it.</p>

    <p><strong>Can I convert videos from my mobile phone?</strong><br>
      Yes! Our tool is fully responsive and optimized for mobile devices. You can upload videos directly from your phone's gallery and convert them to GIFs on the go.</p>

    <p><strong>What video formats are supported?</strong><br>
      We support all major video formats including MP4, AVI, MOV, WebM, 3GP, MKV, FLV, and WMV. The tool uses FFmpeg which supports over 100 video formats.</p>

    <p><strong>Do I need to create an account or pay to use this?</strong><br>
      No, this is a completely free tool. No registration, no subscription, no hidden fees. Just upload and convert!</p>

    <h3>Why Choose Our Video to GIF Converter?</h3>
    <p>Our <strong>online Video to GIF Converter</strong> stands out because of its simplicity, speed, and privacy protection. Unlike many online converters that upload your videos to their servers, our tool processes everything locally in your browser using cutting-edge WebAssembly technology. This means your private videos, personal moments, and sensitive content remain completely secure. The tool also works offline once loaded, making it reliable even with poor internet connections.</p>

    <h3>Common Applications of Video to GIF Conversion</h3>
    <p>Converting videos to GIFs has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Social Media Content:</strong> Create engaging GIFs for Twitter, Facebook, Instagram, and Reddit</li>
      <li><strong>Website Animations:</strong> Add lightweight animated elements to your website without video players</li>
      <li><strong>Presentation Materials:</strong> Insert animated GIFs into PowerPoint or Google Slides presentations</li>
      <li><strong>Reaction GIFs:</strong> Create custom reaction GIFs for messaging apps and forums</li>
      <li><strong>Product Demonstrations:</strong> Showcase product features in animated GIF format</li>
      <li><strong>Educational Content:</strong> Create animated tutorials and how-to guides</li>
    </ul>

    <h3>Technical Details & Browser Support</h3>
    <p>Our tool uses FFmpeg compiled to WebAssembly, which allows high-performance video processing directly in your browser. It works on all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using the latest version of your browser. The tool automatically optimizes GIF quality and file size based on your settings.</p>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  // DOM Elements
  const videoInput = document.getElementById('videoInput');
  const uploadButton = document.getElementById('uploadButton');
  const videoPlayer = document.getElementById('videoPlayer');
  const fileName = document.getElementById('fileName');
  const convertBtn = document.getElementById('convertBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const clearBtn = document.getElementById('clearBtn');
  const gifPreview = document.getElementById('gifPreview');
  
  // Settings inputs
  const startTime = document.getElementById('startTime');
  const duration = document.getElementById('duration');
  const width = document.getElementById('width');
  const fps = document.getElementById('fps');
  
  // Progress elements
  const progressContainer = document.getElementById('progressContainer');
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');
  const alertContainer = document.getElementById('alertContainer');
  
  // Counter elements
  const videoStatus = document.getElementById('videoStatus');
  const gifStatus = document.getElementById('gifStatus');
  const fileSize = document.getElementById('fileSize');
  const estimatedSize = document.getElementById('estimatedSize');
  
  let videoFile = null;
  let gifUrl = null;
  let originalFileName = '';

  // Event Listeners
  uploadButton.addEventListener('click', () => {
    videoInput.click();
  });

  videoInput.addEventListener('change', handleVideoUpload);

  convertBtn.addEventListener('click', convertToGif);

  downloadBtn.addEventListener('click', downloadGif);

  clearBtn.addEventListener('click', clearAll);

  // Functions
  function handleVideoUpload() {
    videoFile = videoInput.files[0];
    if (!videoFile) return;

    originalFileName = videoFile.name;
    fileName.textContent = originalFileName;
    
    // Update file size display
    const sizeInMB = (videoFile.size / (1024 * 1024)).toFixed(2);
    fileSize.textContent = `${sizeInMB} MB`;
    
    // Update video status
    videoStatus.textContent = 'Uploaded';
    videoStatus.style.color = '#27ae60';
    
    // Show video preview
    const videoUrl = URL.createObjectURL(videoFile);
    videoPlayer.src = videoUrl;
    videoPlayer.style.display = 'block';
    
    // Calculate estimated GIF size
    calculateEstimatedSize();
    
    showAlert('Video uploaded successfully! You can now adjust settings and convert to GIF.', 'success');
  }

  async function convertToGif() {
    if (!videoFile) {
      showAlert('Please upload a video first.', 'error');
      return;
    }

    const { createFFmpeg, fetchFile } = FFmpeg;
    const ffmpeg = createFFmpeg({ log: true });

    try {
      // Show progress
      progressContainer.style.display = 'block';
      updateProgress(10, 'Initializing FFmpeg...');
      convertBtn.disabled = true;
      convertBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Converting...';

      // Load FFmpeg
      await ffmpeg.load();
      updateProgress(30, 'FFmpeg loaded successfully');

      // Read video file
      updateProgress(40, 'Reading video file...');
      ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(videoFile));
      updateProgress(50, 'Video file processed');

      // Convert to GIF
      updateProgress(60, 'Converting to GIF...');
      await ffmpeg.run(
        '-ss', startTime.value,
        '-t', duration.value,
        '-i', 'input.mp4',
        '-vf', `fps=${fps.value},scale=${width.value}:-1:flags=lanczos`,
        '-gifflags', '+transdiff',
        '-y',
        'output.gif'
      );

      updateProgress(90, 'Finalizing GIF...');
      const data = ffmpeg.FS('readFile', 'output.gif');
      const gifBlob = new Blob([data.buffer], { type: 'image/gif' });

      // Create object URL for the GIF
      if (gifUrl) URL.revokeObjectURL(gifUrl);
      gifUrl = URL.createObjectURL(gifBlob);

      // Show GIF preview
      gifPreview.src = gifUrl;
      gifPreview.style.display = 'block';
      
      // Enable download button
      downloadBtn.disabled = false;
      downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download GIF';
      
      // Update status
      gifStatus.textContent = 'Ready to download';
      gifStatus.style.color = '#27ae60';
      
      updateProgress(100, '🎉 GIF created successfully!');
      showAlert('GIF created successfully! Click "Download GIF" to save it.', 'success');

      // Hide progress after 2 seconds
      setTimeout(() => {
        progressContainer.style.display = 'none';
      }, 2000);

    } catch (err) {
      console.error('Conversion error:', err);
      showAlert('Conversion failed! Please check your settings and try again.', 'error');
      updateProgress(0, 'Conversion failed');
    } finally {
      convertBtn.disabled = false;
      convertBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Convert to GIF';
    }
  }

  function downloadGif() {
    if (!gifUrl) {
      showAlert('No GIF available to download.', 'error');
      return;
    }

    const a = document.createElement('a');
    const timestamp = new Date().toISOString().slice(0, 19).replace(/[:]/g, '-');
    const gifName = originalFileName 
      ? `converted-${originalFileName.split('.')[0]}-${timestamp}.gif`
      : `video-to-gif-${timestamp}.gif`;
    
    a.href = gifUrl;
    a.download = gifName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    showAlert('GIF download started!', 'success');
  }

  function clearAll() {
    // Clear all inputs and previews
    videoInput.value = '';
    videoPlayer.src = '';
    videoPlayer.style.display = 'none';
    gifPreview.src = '';
    gifPreview.style.display = 'none';
    fileName.textContent = 'No file selected';
    progressContainer.style.display = 'none';
    
    // Reset status
    videoStatus.textContent = 'No video uploaded';
    videoStatus.style.color = '#e74c3c';
    gifStatus.textContent = 'Not created yet';
    gifStatus.style.color = '#e74c3c';
    fileSize.textContent = '0 MB';
    estimatedSize.textContent = '0 MB';
    
    // Disable download button
    downloadBtn.disabled = true;
    
    // Clear variables
    videoFile = null;
    if (gifUrl) URL.revokeObjectURL(gifUrl);
    gifUrl = null;
    
    showAlert('All inputs cleared. You can upload a new video.', 'success');
  }

  function updateProgress(percent, text) {
    progressFill.style.width = percent + '%';
    progressText.textContent = text;
  }

  function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.innerHTML = `
      ${message}
      <span class="close">&times;</span>
    `;

    alertContainer.appendChild(alertDiv);

    // Close button functionality
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

  function calculateEstimatedSize() {
    if (!videoFile) return;
    
    // Simple estimation formula
    const durationVal = parseInt(duration.value) || 5;
    const fpsVal = parseInt(fps.value) || 10;
    const widthVal = parseInt(width.value) || 480;
    
    // Estimated size in KB (very rough estimation)
    const estimatedKB = Math.round((durationVal * fpsVal * widthVal * 0.1) / 100) * 100;
    const estimatedMB = (estimatedKB / 1024).toFixed(2);
    
    estimatedSize.textContent = `${estimatedMB} MB (estimated)`;
  }

  // Update estimated size when settings change
  [duration, fps, width].forEach(input => {
    input.addEventListener('input', calculateEstimatedSize);
  });

  // Initialize
  clearAll();
});
</script>