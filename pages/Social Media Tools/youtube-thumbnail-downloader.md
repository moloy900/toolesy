---
layout: default
title: "YouTube Thumbnail Downloader - Download HD Thumbnails"
permalink: /youtube-thumbnail-downloader/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free YouTube Thumbnail Downloader - Get HD Thumbnails Instantly</title>
<meta name="description"
  content="Free YouTube thumbnail downloader tool. Download high-quality thumbnails from any YouTube video in HD, SD, and other available sizes instantly.">
<meta name="keywords"
  content="youtube thumbnail downloader, download youtube thumbnail, youtube thumbnail grabber, get youtube thumbnail, youtube thumbnail extractor, youtube thumbnail saver, youtube thumbnail download hd">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* YouTube Thumbnail Downloader Styles */
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
    min-height: 100px;
    resize: vertical;
    font-family: 'Courier New', monospace;
    transition: border-color 0.3s;
  }

  .input-section textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .url-input-section {
    margin: 30px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .url-input-group {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .url-input {
    padding: 15px;
    border: 2px solid #e0e6ed;
    border-radius: 10px;
    font-size: 16px;
    width: 100%;
    transition: border-color 0.3s;
  }

  .url-input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .url-input::placeholder {
    color: #999;
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

  .thumbnail-preview {
    margin: 30px 0;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .thumbnail-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .thumbnail-card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease;
  }

  .thumbnail-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .thumbnail-image {
    width: 100%;
    height: 140px;
    object-fit: cover;
    background: #f0f0f0;
  }

  .thumbnail-info {
    padding: 15px;
    background: white;
  }

  .thumbnail-size {
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 5px;
  }

  .thumbnail-resolution {
    color: #666;
    font-size: 14px;
    margin-bottom: 10px;
  }

  .download-btn {
    width: 100%;
    padding: 10px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.3s;
  }

  .download-btn:hover {
    background: #2980b9;
  }

  .video-info {
    margin: 20px 0;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-top: 15px;
  }

  .info-item {
    padding: 10px;
    background: #f8f9fa;
    border-radius: 6px;
  }

  .info-label {
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 5px;
  }

  .info-value {
    color: #333;
    word-break: break-word;
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

  .loading-spinner {
    display: none;
    text-align: center;
    padding: 20px;
  }

  .spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid var(--primary);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 0 auto;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
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

    .modal-content {
      margin: 20% auto;
      width: 95%;
      padding: 20px;
    }

    .thumbnail-grid {
      grid-template-columns: 1fr;
    }

    .info-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>Free YouTube Thumbnail Downloader</h1>
  <p class="welcome-message">Download high-quality thumbnails from any YouTube video instantly. Get thumbnails in HD, SD, and other available resolutions with just one click.</p>

  <div class="converter-section">
    <h2>YouTube Thumbnail Downloader</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Video ID: </span>
        <span id="videoId">Not extracted</span>
      </div>
      <div class="counter-item">
        <span>Available Qualities: </span>
        <span id="qualityCount">0</span>
      </div>
      <div class="counter-item">
        <span>Thumbnail Status: </span>
        <span id="thumbnailStatus">Not loaded</span>
      </div>
      <div class="counter-item">
        <span>Last Updated: </span>
        <span id="lastUpdated">-</span>
      </div>
    </div>

    <div class="url-input-section">
      <h2>Enter YouTube Video URL</h2>
      <div class="url-input-group">
        <input type="text" id="youtubeUrl" class="url-input" placeholder="Paste YouTube video URL here (e.g., https://www.youtube.com/watch?v=VIDEO_ID)">
        <div class="button-section">
          <button class="case-button" data-action="extract">Extract Thumbnails</button>
          <button class="case-button success" data-action="downloadAll">Download All</button>
          <button class="case-button secondary" data-action="clear">Clear</button>
          <button class="case-button warning" data-action="example">Load Example</button>
        </div>
      </div>
    </div>

    <div class="loading-spinner" id="loadingSpinner">
      <div class="spinner"></div>
      <p>Extracting thumbnails...</p>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="video-info" id="videoInfo" style="display: none;">
      <h3>Video Information</h3>
      <div class="info-grid">
        <div class="info-item">
          <div class="info-label">Video ID</div>
          <div class="info-value" id="infoVideoId">-</div>
        </div>
        <div class="info-item">
          <div class="info-label">Title</div>
          <div class="info-value" id="infoTitle">-</div>
        </div>
        <div class="info-item">
          <div class="info-label">Duration</div>
          <div class="info-value" id="infoDuration">-</div>
        </div>
        <div class="info-item">
          <div class="info-label">Channel</div>
          <div class="info-value" id="infoChannel">-</div>
        </div>
      </div>
    </div>

    <div class="thumbnail-preview" id="thumbnailPreview" style="display: none;">
      <h3>Available Thumbnail Qualities</h3>
      <p>Click on any quality to preview and download the thumbnail</p>
      <div class="thumbnail-grid" id="thumbnailGrid">
        <!-- Thumbnail cards will be inserted here -->
      </div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples & How It Works</h2>

      <h3>How to get YouTube Thumbnail:</h3>
      <div class="example-text">1. Copy YouTube video URL from address bar
2. Paste URL into the input box above
3. Click "Extract Thumbnails"
4. Choose quality and click "Download"</div>

      <h3>Supported URL Formats:</h3>
      <div class="example-text">• https://www.youtube.com/watch?v=dQw4w9WgXcQ
• https://youtu.be/dQw4w9WgXcQ
• https://youtube.com/shorts/VIDEO_ID
• https://www.youtube.com/embed/dQw4w9WgXcQ
• https://m.youtube.com/watch?v=dQw4w9WgXcQ</div>

      <h3>Available Thumbnail Qualities:</h3>
      <div class="example-text">• maxresdefault (Highest quality - 1280x720 or higher)
• sddefault (Standard quality - 640x480)
• hqdefault (High quality - 480x360)
• mqdefault (Medium quality - 320x180)
• default (Lowest quality - 120x90)</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free YouTube Thumbnail Downloader - Get HD Thumbnails Instantly</h2>

    <p>Want to download YouTube thumbnails in high quality? Our free <strong>YouTube Thumbnail Downloader tool</strong> is the perfect solution for content creators, marketers, and video enthusiasts. This powerful tool instantly extracts all available thumbnail qualities from any YouTube video with just the video URL. You can download thumbnails in HD, SD, and other resolutions with a single click. There's no download required, no registration needed, and your privacy is guaranteed as all processing happens securely.</p>

    <h3>How to Use This YouTube Thumbnail Downloader (Step-by-Step):</h3>
    <ul>
      <li><strong>Copy URL:</strong> Go to YouTube and copy the video URL from the address bar or share button.</li>
      <li><strong>Paste URL:</strong> Paste the YouTube video URL into the input box above.</li>
      <li><strong>Extract Thumbnails:</strong> Click the "Extract Thumbnails" button to get all available qualities.</li>
      <li><strong>Preview & Download:</strong> Select your preferred quality and click "Download" to save the thumbnail to your device.</li>
      <li><strong>Batch Download:</strong> Use "Download All" to get all available thumbnail qualities at once.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're a content creator and you found a YouTube video with an excellent thumbnail design that you'd like to study or get inspiration from. Instead of taking screenshots (which would be low quality), you can simply copy the video URL, paste it into our tool, and instantly download the original HD thumbnail in multiple resolutions. This is perfect for analyzing successful thumbnail designs, creating compilations, or saving thumbnails for reference.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Content Creators:</strong> Study successful thumbnail designs and get inspiration for your own videos.</li>
      <li><strong>Marketers:</strong> Download thumbnails for presentations, reports, or competitive analysis.</li>
      <li><strong>Designers:</strong> Get high-quality thumbnails for mockups, templates, and design projects.</li>
      <li><strong>Researchers:</strong> Collect thumbnails for academic studies or data analysis projects.</li>
      <li><strong>Video Editors:</strong> Download thumbnails for editing, modification, or creating compilations.</li>
      <li><strong>Educators:</strong> Use thumbnails in teaching materials, presentations, or online courses.</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>Is it legal to download YouTube thumbnails?</strong><br>
      Downloading thumbnails for personal use, analysis, or inspiration is generally acceptable under fair use. However, you should not use downloaded thumbnails for commercial purposes without permission from the copyright holder.</p>

    <p><strong>What thumbnail qualities are available?</strong><br>
      YouTube provides thumbnails in multiple qualities: maxresdefault (HD), sddefault (SD), hqdefault (High Quality), mqdefault (Medium Quality), and default (Low Quality). Our tool extracts all available qualities.</p>

    <p><strong>Do I need to install any software?</strong><br>
      No installation required! Our tool works directly in your web browser - just visit the page and start downloading thumbnails instantly.</p>

    <p><strong>Will this work on all YouTube videos?</strong><br>
      Yes, our tool works with all public YouTube videos including regular videos, shorts, live streams, and embedded videos.</p>

    <p><strong>Is there a limit to how many thumbnails I can download?</strong><br>
      No, you can download as many thumbnails as you want. Our tool is completely free with no usage limits.</p>

    <h3>Why Choose Our YouTube Thumbnail Downloader?</h3>
    <p>Our <strong>YouTube thumbnail downloader</strong> stands out from other tools because of its simplicity, speed, and comprehensive features. Unlike many online tools, we extract ALL available thumbnail qualities, not just one. The tool also provides video information and works with all YouTube URL formats. It's completely free, requires no registration, and works on all devices including mobile phones and tablets.</p>

    <h3>Common Applications of Thumbnail Downloading</h3>
    <p>YouTube thumbnail downloading has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Content Analysis:</strong> Study successful thumbnails to understand what works for your niche</li>
      <li><strong>Design Inspiration:</strong> Create mood boards and collect design ideas for your own thumbnails</li>
      <li><strong>Competitive Research:</strong> Analyze competitors' thumbnail strategies and trends</li>
      <li><strong>Educational Purposes:</strong> Use thumbnails in presentations, research papers, or teaching materials</li>
      <li><strong>Video Compilations:</strong> Create thumbnail galleries for showcases or portfolio presentations</li>
      <li><strong>SEO Analysis:</strong> Study how thumbnails impact click-through rates and viewer engagement</li>
    </ul>

    <h3>Technical Details:</h3>
    <p>Our tool uses YouTube's thumbnail system to extract images. YouTube stores thumbnails at different resolutions, and we access all available versions. The tool automatically detects video IDs from various URL formats and constructs the proper thumbnail URLs. All processing happens client-side, ensuring fast performance and privacy protection.</p>
  </div>
</div>

<!-- Preview Modal -->
<div id="previewModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Thumbnail Preview</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="text-align: center;">
        <img id="modalThumbnail" src="" alt="Thumbnail Preview" style="max-width: 100%; max-height: 300px; border-radius: 8px; margin-bottom: 20px;">
        <p id="modalQualityInfo"></p>
        <p id="modalResolutionInfo"></p>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closePreview">Close</button>
      <button class="modal-button primary" id="downloadFromModal">Download</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const youtubeUrl = document.getElementById('youtubeUrl');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const thumbnailPreview = document.getElementById('thumbnailPreview');
    const thumbnailGrid = document.getElementById('thumbnailGrid');
    const videoInfo = document.getElementById('videoInfo');
    
    // Modal elements
    const previewModal = document.getElementById('previewModal');
    const modalThumbnail = document.getElementById('modalThumbnail');
    const modalQualityInfo = document.getElementById('modalQualityInfo');
    const modalResolutionInfo = document.getElementById('modalResolutionInfo');
    const closeModal = document.querySelectorAll('.close-modal');
    const closePreview = document.getElementById('closePreview');
    const downloadFromModal = document.getElementById('downloadFromModal');
    
    // Current thumbnail data
    let currentThumbnails = [];
    let currentVideoId = '';
    let currentQualityToDownload = '';

    // Event listeners
    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleThumbnailAction(action);
      });
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

    // Download from modal
    downloadFromModal.addEventListener('click', function() {
      if (currentQualityToDownload) {
        downloadThumbnail(currentQualityToDownload);
        previewModal.style.display = 'none';
      }
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === previewModal) {
        previewModal.style.display = 'none';
      }
    });

    // Example URLs for testing
    const exampleUrls = [
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      'https://youtu.be/9bZkp7q19f0',
      'https://www.youtube.com/shorts/KGPQzTImrBQ',
      'https://www.youtube.com/embed/L_jWHffIx5E'
    ];

    function handleThumbnailAction(action) {
      switch (action) {
        case 'extract':
          extractThumbnails();
          break;

        case 'downloadAll':
          downloadAllThumbnails();
          break;

        case 'clear':
          clearAll();
          break;

        case 'example':
          loadExample();
          break;
      }
    }

    function extractThumbnails() {
      const url = youtubeUrl.value.trim();
      
      if (!url) {
        showAlert('Please enter a YouTube URL.', 'error');
        return;
      }

      const videoId = extractVideoId(url);
      
      if (!videoId) {
        showAlert('Invalid YouTube URL. Please check and try again.', 'error');
        return;
      }

      currentVideoId = videoId;
      
      // Show loading
      loadingSpinner.style.display = 'block';
      thumbnailPreview.style.display = 'none';
      videoInfo.style.display = 'none';

      // Update counters
      document.getElementById('videoId').textContent = videoId;
      document.getElementById('thumbnailStatus').textContent = 'Extracting...';
      document.getElementById('lastUpdated').textContent = new Date().toLocaleTimeString();

      // Simulate API call (in real implementation, this would be an actual API call)
      setTimeout(() => {
        generateThumbnails(videoId);
        loadingSpinner.style.display = 'none';
      }, 1000);
    }

    function extractVideoId(url) {
      let videoId = '';
      
      // Regular expression patterns for different YouTube URL formats
      const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/)([\w\-_]+)/,
        /youtube\.com\/watch\?.*v=([\w\-_]+)/,
        /youtu.be\/([\w\-_]+)/
      ];

      for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match && match[1]) {
          videoId = match[1];
          break;
        }
      }

      return videoId;
    }

    function generateThumbnails(videoId) {
      // YouTube thumbnail URLs pattern
      const thumbnailQualities = [
        { quality: 'maxresdefault', label: 'Maximum Resolution', resolution: '1280x720+', desc: 'Highest quality available' },
        { quality: 'sddefault', label: 'Standard Definition', resolution: '640x480', desc: 'Good quality for most uses' },
        { quality: 'hqdefault', label: 'High Quality', resolution: '480x360', desc: 'High quality thumbnail' },
        { quality: 'mqdefault', label: 'Medium Quality', resolution: '320x180', desc: 'Medium quality thumbnail' },
        { quality: 'default', label: 'Default Quality', resolution: '120x90', desc: 'Lowest quality thumbnail' }
      ];

      currentThumbnails = thumbnailQualities.map(q => ({
        ...q,
        url: `https://img.youtube.com/vi/${videoId}/${q.quality}.jpg`
      }));

      // Display thumbnails
      displayThumbnails(currentThumbnails);
      
      // Update video info
      updateVideoInfo(videoId);
      
      // Update counters
      document.getElementById('qualityCount').textContent = currentThumbnails.length;
      document.getElementById('thumbnailStatus').textContent = 'Loaded';
      document.getElementById('lastUpdated').textContent = new Date().toLocaleTimeString();
      
      showAlert(`Successfully extracted ${currentThumbnails.length} thumbnail qualities!`, 'success');
    }

    function displayThumbnails(thumbnails) {
      thumbnailGrid.innerHTML = '';
      
      thumbnails.forEach(thumb => {
        const card = document.createElement('div');
        card.className = 'thumbnail-card';
        card.innerHTML = `
          <img src="${thumb.url}" alt="${thumb.label}" class="thumbnail-image" 
               onerror="this.src='https://via.placeholder.com/250x140/cccccc/969696?text=Thumbnail+Not+Available'">
          <div class="thumbnail-info">
            <div class="thumbnail-size">${thumb.label}</div>
            <div class="thumbnail-resolution">${thumb.resolution}</div>
            <div style="font-size: 12px; color: #888; margin-bottom: 10px;">${thumb.desc}</div>
            <button class="download-btn" data-quality="${thumb.quality}">Download</button>
          </div>
        `;
        
        thumbnailGrid.appendChild(card);
        
        // Add event listener to download button
        const downloadBtn = card.querySelector('.download-btn');
        downloadBtn.addEventListener('click', function() {
          downloadThumbnail(this.getAttribute('data-quality'));
        });
        
        // Add click event to image for preview
        const img = card.querySelector('.thumbnail-image');
        img.addEventListener('click', function() {
          previewThumbnail(thumb);
        });
      });
      
      thumbnailPreview.style.display = 'block';
    }

    function previewThumbnail(thumbnail) {
      modalThumbnail.src = thumbnail.url;
      modalQualityInfo.textContent = `Quality: ${thumbnail.label}`;
      modalResolutionInfo.textContent = `Resolution: ${thumbnail.resolution}`;
      currentQualityToDownload = thumbnail.quality;
      previewModal.style.display = 'block';
    }

    function updateVideoInfo(videoId) {
      // In a real implementation, you would fetch actual video info from YouTube API
      document.getElementById('infoVideoId').textContent = videoId;
      document.getElementById('infoTitle').textContent = `Video Title for ${videoId}`;
      document.getElementById('infoDuration').textContent = '3:45'; // Example duration
      document.getElementById('infoChannel').textContent = 'Example Channel';
      
      videoInfo.style.display = 'block';
    }

    function downloadThumbnail(quality) {
      const thumbnail = currentThumbnails.find(t => t.quality === quality);
      if (!thumbnail || !currentVideoId) {
        showAlert('Thumbnail not available for download.', 'error');
        return;
      }

      const link = document.createElement('a');
      link.href = thumbnail.url;
      link.download = `youtube-thumbnail-${currentVideoId}-${quality}.jpg`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      showAlert(`Downloading ${thumbnail.label} thumbnail...`, 'success');
    }

    function downloadAllThumbnails() {
      if (!currentThumbnails.length) {
        showAlert('No thumbnails to download. Please extract thumbnails first.', 'error');
        return;
      }

      showAlert(`Downloading all ${currentThumbnails.length} thumbnails...`, 'success');
      
      // Download each thumbnail with a small delay to avoid blocking
      currentThumbnails.forEach((thumb, index) => {
        setTimeout(() => {
          const link = document.createElement('a');
          link.href = thumb.url;
          link.download = `youtube-thumbnail-${currentVideoId}-${thumb.quality}.jpg`;
          link.target = '_blank';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, index * 300);
      });
    }

    function clearAll() {
      youtubeUrl.value = '';
      thumbnailGrid.innerHTML = '';
      thumbnailPreview.style.display = 'none';
      videoInfo.style.display = 'none';
      currentThumbnails = [];
      currentVideoId = '';
      
      // Reset counters
      document.getElementById('videoId').textContent = 'Not extracted';
      document.getElementById('qualityCount').textContent = '0';
      document.getElementById('thumbnailStatus').textContent = 'Not loaded';
      document.getElementById('lastUpdated').textContent = '-';
      
      showAlert('All fields cleared.', 'success');
    }

    function loadExample() {
      const randomUrl = exampleUrls[Math.floor(Math.random() * exampleUrls.length)];
      youtubeUrl.value = randomUrl;
      showAlert('Example URL loaded. Click "Extract Thumbnails" to see it in action.', 'success');
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