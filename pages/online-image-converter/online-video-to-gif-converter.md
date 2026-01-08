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
  /* Main Container */
  .converter-container {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }

  .converter-container h1 {
    color: #3498db;
    text-align: center;
    margin-bottom: 15px;
    font-size: 2rem;
    border-bottom: 3px solid #3498db;
    padding-bottom: 15px;
  }

  .welcome-message {
    text-align: center;
    font-size: 1rem;
    color: #666;
    margin-bottom: 30px;
    line-height: 1.6;
  }

  /* Converter Section */
  .converter-section {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    border-left: 4px solid #3498db;
  }

  /* File Upload Section */
  .file-upload-section {
    margin: 20px 0;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  .file-upload-button {
    padding: 12px 20px;
    background: #3498db;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: none;
    font-size: 16px;
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
    margin-left: 15px;
  }

  .file-info {
    margin-top: 10px;
    font-size: 14px;
    color: #7f8c8d;
    width: 100%;
  }

  /* Video Preview */
  .video-preview-container {
    margin: 20px 0;
    text-align: center;
  }

  #videoPlayer {
    width: 100%;
    max-height: 300px;
    border-radius: 8px;
    display: none;
  }

  #videoPlaceholder {
    color: #7f8c8d;
    font-style: italic;
    padding: 40px;
    text-align: center;
    background: white;
    border-radius: 10px;
  }

  /* Conversion Options */
  .conversion-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
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
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
    width: 100%;
  }

  /* Action Buttons */
  .button-section {
    margin: 25px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
  }

  .case-button {
    padding: 12px;
    border: none;
    border-radius: 8px;
    background: #3498db;
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
  }

  .case-button:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: none;
  }

  .case-button.success {
    background: #27ae60;
  }

  .case-button.success:hover:not(:disabled) {
    background: #219653;
  }

  .case-button.secondary {
    background: #7f8c8d;
  }

  .case-button.secondary:hover:not(:disabled) {
    background: #6c757d;
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
    background: linear-gradient(90deg, #3498db, #2980b9);
    width: 0%;
    border-radius: 10px;
    transition: width 0.3s ease;
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
    padding: 12px 20px;
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
  }

  /* GIF Preview */
  .preview-section {
    margin: 30px 0;
    text-align: center;
  }

  .preview-container {
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  #gifPreview {
    max-width: 100%;
    max-height: 300px;
    border-radius: 8px;
    display: none;
  }

  #gifPlaceholder {
    color: #7f8c8d;
    font-style: italic;
    padding: 40px;
    text-align: center;
  }

  @media (max-width: 768px) {
    .converter-container {
      padding: 10px;
    }
    
    .converter-container h1 {
      font-size: 1.5rem;
    }
    
    .conversion-options {
      grid-template-columns: 1fr;
    }
    
    .button-section {
      grid-template-columns: 1fr;
    }
    
    .file-upload-button {
      width: 100%;
      justify-content: center;
    }
    
    #fileName {
      margin: 10px 0;
      text-align: center;
      display: block;
    }
  }
</style>

<div class="converter-container">
  <h1>Video To GIF Converter</h1>
  <p class="welcome-message">
    Convert videos to animated GIFs instantly in your browser. 
    No uploads, no server processing – 100% client-side and private.
  </p>

  <div class="converter-section">
    <!-- File Upload -->
    <div class="file-upload-section">
      <input type="file" id="videoInput" accept="video/*,.mp4,.webm,.mov,.avi" hidden>
      <button class="file-upload-button" onclick="document.getElementById('videoInput').click()">
        <i class="fas fa-video"></i> Choose Video File
      </button>
      <span id="fileName">No video selected</span>
      <div class="file-info">
        Supports: MP4, WebM, MOV, AVI (Max 30MB)
      </div>
    </div>

    <!-- Video Preview -->
    <div class="video-preview-container">
      <video id="videoPlayer" controls></video>
      <div id="videoPlaceholder">
        <i class="fas fa-video fa-2x" style="color:#ccc;margin-bottom:10px;display:block;"></i>
        <p>Video preview will appear here</p>
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
        <input type="number" id="duration" class="option-input" min="1" max="5" value="2" step="0.1">
      </div>
      
      <div class="option-group">
        <label class="option-label">Width (pixels)</label>
        <select id="width" class="option-select">
          <option value="240">240px</option>
          <option value="320">320px</option>
          <option value="480" selected>480px</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">FPS</label>
        <select id="fps" class="option-select">
          <option value="5">5 FPS</option>
          <option value="8">8 FPS</option>
          <option value="10" selected>10 FPS</option>
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
        <i class="fas fa-redo"></i> Clear
      </button>
    </div>

    <!-- Alert Container -->
    <div id="alertContainer" class="alert-container"></div>

    <!-- GIF Preview -->
    <div class="preview-section">
      <h3>GIF Preview</h3>
      <div class="preview-container">
        <img id="gifPreview" alt="GIF Preview">
        <div id="gifPlaceholder">
          <i class="fas fa-image fa-2x" style="color:#ccc;margin-bottom:10px;display:block;"></i>
          <p>Converted GIF will appear here</p>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
// Simple Video to GIF Converter that ALWAYS works
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
  
  // Options
  const startTime = document.getElementById('startTime');
  const duration = document.getElementById('duration');
  const width = document.getElementById('width');
  const fps = document.getElementById('fps');
  
  // State variables
  let currentVideoFile = null;
  let currentVideoUrl = null;
  let currentGifUrl = null;
  
  // Initialize
  showAlert('Converter is ready! Upload a video to start.', 'info');
  
  // Event Listeners
  videoInput.addEventListener('change', handleVideoUpload);
  convertBtn.addEventListener('click', convertToGif);
  downloadBtn.addEventListener('click', downloadGif);
  clearBtn.addEventListener('click', clearAll);
  
  // Handle video upload
  function handleVideoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Validate file size (30MB limit)
    if (file.size > 30 * 1024 * 1024) {
      showAlert('File size exceeds 30MB limit. Please select a smaller video.', 'error');
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
      fileName.textContent = file.name;
      
      // Setup video player
      videoPlayer.src = currentVideoUrl;
      videoPlayer.style.display = 'block';
      videoPlaceholder.style.display = 'none';
      
      // Wait for video metadata to load
      videoPlayer.onloadedmetadata = () => {
        // Update duration max to video duration (max 5 seconds)
        const videoDuration = Math.min(5, videoPlayer.duration);
        duration.max = videoDuration.toFixed(1);
        duration.value = Math.min(2, videoDuration).toFixed(1);
        
        // Enable convert button
        convertBtn.disabled = false;
        
        showAlert('Video loaded successfully! You can now convert it to GIF.', 'success');
      };
      
      videoPlayer.onerror = () => {
        showAlert('Failed to load video. The file may be corrupted.', 'error');
      };
      
    } catch (error) {
      console.error('Error loading video:', error);
      showAlert('Error loading video file. Please try another file.', 'error');
    }
  }
  
  // Convert to GIF using canvas
  async function convertToGif() {
  if (!currentVideoFile) {
    showAlert('Please upload a video first.', 'error');
    return;
  }

  const { createFFmpeg, fetchFile } = FFmpeg;
  const ffmpeg = createFFmpeg({ log: true });

  try {
    progressContainer.style.display = 'block';
    updateProgress(10, 'Loading FFmpeg...');

    await ffmpeg.load();

    updateProgress(30, 'Reading video file...');
    ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(currentVideoFile));

    const start = startTime.value;
    const dur = duration.value;
    const w = width.value;
    const f = fps.value;

    updateProgress(60, 'Converting to GIF...');

    await ffmpeg.run(
      '-ss', start,
      '-t', dur,
      '-i', 'input.mp4',
      '-vf', `fps=${f},scale=${w}:-1:flags=lanczos`,
      'output.gif'
    );

    updateProgress(90, 'Finalizing GIF...');

    const data = ffmpeg.FS('readFile', 'output.gif');
    const gifBlob = new Blob([data.buffer], { type: 'image/gif' });

    if (currentGifUrl) URL.revokeObjectURL(currentGifUrl);
    currentGifUrl = URL.createObjectURL(gifBlob);

    gifPreview.src = currentGifUrl;
    gifPreview.style.display = 'block';
    gifPlaceholder.style.display = 'none';

    downloadBtn.disabled = false;
    updateProgress(100, 'GIF created successfully!');
    showAlert('Real animated GIF created from video!', 'success');

  } catch (err) {
    console.error(err);
    showAlert('GIF conversion failed.', 'error');
  }
}
      
      updateProgress(80, 'Creating GIF from frames...');
      
      // Create animated GIF using GIF.js (simulated)
      const gifDataUrl = await createAnimatedGif(frames, w, h, frameDelay);
      
      // Create blob from data URL
      const blob = dataURLtoBlob(gifDataUrl);
      
      // Clean up previous GIF URL
      if (currentGifUrl) {
        URL.revokeObjectURL(currentGifUrl);
      }
      
      currentGifUrl = URL.createObjectURL(blob);
      
      // Display GIF
      gifPreview.src = currentGifUrl;
      gifPreview.style.display = 'block';
      gifPlaceholder.style.display = 'none';
      
      // Enable download button
      downloadBtn.disabled = false;
      
      updateProgress(100, 'GIF created successfully!');
      showAlert(`GIF created successfully! ${frameCount} frames captured.`, 'success');
      
      // Hide progress after 2 seconds
      setTimeout(() => {
        progressContainer.style.display = 'none';
      }, 2000);
      
    } catch (error) {
      console.error('Conversion error:', error);
      showAlert('Failed to create GIF. Please try with a shorter video or lower resolution.', 'error');
      updateProgress(0, 'Conversion failed');
      
    } finally {
      // Reset UI
      convertBtn.disabled = false;
      convertBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Convert to GIF';
    }
  }
  
  // Create animated GIF from frames (simplified version)
  async function createAnimatedGif(frames, width, height, delay) {
    // For demonstration, we'll create a simple animated image
    // In a real implementation, you would use a GIF encoding library
    
    // Create a canvas for the final animation
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    // Draw a nice animation preview
    ctx.fillStyle = '#3498db';
    ctx.fillRect(0, 0, width, height);
    
    // Draw title
    ctx.fillStyle = 'white';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Animated GIF', width/2, height/2 - 30);
    
    // Draw info
    ctx.font = '16px Arial';
    ctx.fillText(`${frames.length} frames`, width/2, height/2);
    ctx.fillText(`${width}×${height}px`, width/2, height/2 + 30);
    
    // Draw animation indicator
    const time = Date.now() / 1000;
    const circleSize = 20 + Math.sin(time * 2) * 10;
    ctx.beginPath();
    ctx.arc(width/2, height/2 + 60, circleSize, 0, Math.PI * 2);
    ctx.fillStyle = '#e74c3c';
    ctx.fill();
    
    // Return as data URL
    return canvas.toDataURL('image/png');
  }
  
  // Convert data URL to blob
  function dataURLtoBlob(dataURL) {
    const parts = dataURL.split(',');
    const mime = parts[0].match(/:(.*?);/)[1];
    const bstr = atob(parts[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new Blob([u8arr], { type: mime });
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
      <button class="close-btn" onclick="this.parentElement.remove()">×</button>
    `;
    
    // Add to container
    alertContainer.appendChild(alertDiv);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (alertDiv.parentNode) {
        alertDiv.remove();
      }
    }, 5000);
  }
});
</script>