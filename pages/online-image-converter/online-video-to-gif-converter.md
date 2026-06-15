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

  <p>Animated GIFs have become one of the most popular ways to share short moments online. Whether it's a funny reaction, a memorable movie scene, a product demonstration, or a quick tutorial, GIFs make communication more engaging and entertaining. Instead of sending large video files, you can convert the most important few seconds into a lightweight animated GIF that works almost everywhere.</p>

  <p>Our free <strong>Video to GIF Converter Tool</strong> makes this process incredibly simple. You can upload a video, select the exact section you want, customize the output settings, and generate a high-quality animated GIF within minutes. There is no software to download, no complicated setup process, and no technical knowledge required.</p>

  <p>The tool is designed for everyday users as well as professionals. Whether you're a social media creator, marketer, teacher, student, blogger, website owner, or simply someone who wants to share a funny moment with friends, this converter provides an easy and reliable solution.</p>

  <p>Best of all, your privacy remains protected. Unlike many online converters that upload files to remote servers, our tool processes everything locally in your browser whenever possible. Your videos remain under your control from start to finish.</p>

  <h3>How to Convert Video to GIF (Step-by-Step)</h3>

  <ul>
    <li><strong>Upload Your Video:</strong> Click the upload button and select a video from your computer, tablet, or smartphone.</li>

    <li><strong>Preview the Video:</strong> Watch the uploaded video and identify the exact moment you want to turn into a GIF.</li>

    <li><strong>Select the Start Time:</strong> Choose where the GIF should begin within the video timeline.</li>

    <li><strong>Choose the Duration:</strong> Decide how many seconds should be included in the final GIF.</li>

    <li><strong>Adjust Size and Frame Rate:</strong> Customize the GIF dimensions and frames per second for the perfect balance between quality and file size.</li>

    <li><strong>Start Conversion:</strong> Click the convert button and allow the tool to process your video.</li>

    <li><strong>Preview the Result:</strong> Review the generated GIF to ensure it looks exactly the way you want.</li>

    <li><strong>Download Instantly:</strong> Save the finished GIF to your device and use it anywhere.</li>
  </ul>

  <h3>Why GIFs Are Still Popular Today</h3>

  <p>Even though modern video formats offer excellent quality, GIFs continue to dominate online communication. One reason is their simplicity. GIFs play automatically without requiring users to press a play button. This makes them ideal for capturing attention on websites, social media platforms, discussion forums, and messaging applications.</p>

  <p>Another reason for their popularity is universal compatibility. Nearly every browser, operating system, messaging platform, and social network supports GIF files. This means you can create a GIF once and use it almost anywhere without worrying about compatibility issues.</p>

  <p>GIFs also provide a perfect balance between images and videos. They deliver motion and emotion while remaining easy to share and quick to load.</p>

  <h3>Real-Life Example & Use Case</h3>

  <p>Imagine you attended a birthday party and captured a 45-second video of a surprise cake reveal. The most exciting moment lasts only four or five seconds when everyone starts cheering.</p>

  <p>Instead of sending the entire video file, you can use this converter to isolate those few memorable seconds and create a GIF. The result is smaller, easier to share, and immediately communicates the excitement of the moment.</p>

  <p>Similarly, content creators often transform highlights from longer videos into GIFs to promote their content on social media. A short, eye-catching GIF can encourage viewers to watch the full video or visit a website.</p>

  <h3>Key Features of Our Video to GIF Converter</h3>

  <ul>
    <li><strong>Simple Interface:</strong> Designed for beginners and experienced users alike.</li>

    <li><strong>No Installation Needed:</strong> Works directly in modern web browsers.</li>

    <li><strong>Fast Conversion Speed:</strong> Generate GIFs quickly using advanced browser-based processing.</li>

    <li><strong>Custom Start and End Times:</strong> Convert only the portion of the video you need.</li>

    <li><strong>Flexible Resolution Settings:</strong> Create GIFs suitable for social media, websites, blogs, or presentations.</li>

    <li><strong>Frame Rate Control:</strong> Adjust animation smoothness and file size.</li>

    <li><strong>Privacy Protection:</strong> Your video remains private during the conversion process.</li>

    <li><strong>Cross-Platform Compatibility:</strong> Works on Windows, macOS, Linux, Android, and iOS devices.</li>

    <li><strong>Multiple Video Format Support:</strong> Compatible with most commonly used video formats.</li>

    <li><strong>Completely Free:</strong> No subscriptions, hidden costs, or watermarks.</li>
  </ul>

  <h3>Understanding GIF Quality Settings</h3>

  <p>When creating a GIF, several settings affect the final result. Understanding these options can help you produce better animations while keeping file sizes manageable.</p>

  <p><strong>Resolution:</strong> Higher resolutions provide sharper visuals but increase file size. For social media posts, medium resolutions often work best.</p>

  <p><strong>Frame Rate:</strong> Frame rate determines how many images appear each second. Higher frame rates create smoother animations but also generate larger files.</p>

  <p><strong>Duration:</strong> Shorter GIFs generally load faster and are more engaging. Most popular GIFs last between two and ten seconds.</p>

  <p><strong>Color Optimization:</strong> GIF files use a limited color palette. Proper optimization helps maintain visual quality while reducing file size.</p>

  <h3>Frequently Asked Questions</h3>

  <p><strong>What video formats can I upload?</strong><br>
  The converter supports many popular formats including MP4, MOV, AVI, MKV, WebM, WMV, FLV, and several others commonly used today.</p>

  <p><strong>Can I convert videos from my smartphone?</strong><br>
  Yes. The tool works on most modern smartphones and tablets. Simply upload a video from your gallery and begin the conversion process.</p>

  <p><strong>Will my video be uploaded to a server?</strong><br>
  Privacy is one of our top priorities. The tool is designed to process videos locally whenever possible, helping ensure your personal files remain secure.</p>

  <p><strong>Do I need special software?</strong><br>
  No. Everything works directly inside your browser, eliminating the need for downloads or installations.</p>

  <p><strong>Can I create GIFs for commercial use?</strong><br>
  Yes, provided you own the original content or have permission to use it. Always respect copyright laws and licensing requirements.</p>

  <p><strong>Is there a limit to the number of GIFs I can create?</strong><br>
  No. You can use the converter as often as you like without registration or subscription fees.</p>

  <h3>Why Choose Our Video to GIF Converter?</h3>

  <p>Many online GIF makers focus on simplicity but sacrifice quality, while others provide advanced settings that overwhelm beginners. Our converter strikes the perfect balance between ease of use and powerful functionality.</p>

  <p>The clean interface allows users to complete conversions quickly, while customizable options provide enough flexibility for creators who want more control over the final result.</p>

  <p>Privacy is another major advantage. Instead of uploading personal videos to external servers, processing occurs directly within your browser whenever possible. This gives users greater confidence when converting personal memories, business content, educational materials, or confidential demonstrations.</p>

  <p>Performance is equally important. The converter is optimized for modern browsers, helping deliver fast conversion times while maintaining excellent GIF quality.</p>

  <h3>Common Applications of Video to GIF Conversion</h3>

  <ul>
    <li><strong>Social Media Marketing:</strong> Create attention-grabbing content that increases engagement.</li>

    <li><strong>Reaction GIFs:</strong> Share emotions and responses in a fun visual format.</li>

    <li><strong>Website Design:</strong> Add lightweight animations without embedding large videos.</li>

    <li><strong>Product Demonstrations:</strong> Showcase features and functionality in a quick visual format.</li>

    <li><strong>Customer Support:</strong> Create visual guides that demonstrate specific actions or procedures.</li>

    <li><strong>Educational Content:</strong> Explain concepts through short animated examples.</li>

    <li><strong>Blog Articles:</strong> Improve reader engagement with animated illustrations.</li>

    <li><strong>Email Marketing:</strong> Use animated visuals to increase click-through rates.</li>

    <li><strong>Online Communities:</strong> Share memorable moments in forums and discussion groups.</li>

    <li><strong>Gaming Highlights:</strong> Capture and share exciting gameplay moments.</li>
  </ul>

  <h3>Tips for Creating Better GIFs</h3>

  <p>Choose moments that immediately capture attention. The first second is often the most important part of a GIF because viewers decide very quickly whether to continue watching.</p>

  <p>Keep animations relatively short. Short GIFs usually perform better on social media and are easier to share.</p>

  <p>Use appropriate dimensions for your intended platform. Large GIFs may look impressive but can increase loading times significantly.</p>

  <p>Focus on a single action or message whenever possible. Clear and concise animations tend to be more effective than lengthy clips.</p>

  <h3>Technical Details & Browser Support</h3>

  <p>The converter utilizes modern browser technologies and advanced processing techniques to deliver reliable performance across different devices and operating systems.</p>

  <p>It supports the latest versions of major browsers including Chrome, Firefox, Safari, Edge, and other Chromium-based browsers. Regular updates help ensure compatibility with evolving web standards and video formats.</p>

  <p>For the best experience, we recommend using an updated browser version and allowing sufficient device memory when processing larger videos.</p>

  <h3>Final Thoughts</h3>

  <p>Animated GIFs remain one of the most effective ways to communicate visually online. They are easy to create, easy to share, and instantly recognizable across virtually every platform.</p>

  <p>Our free Video to GIF Converter gives you complete control over the conversion process while keeping things simple and user-friendly. Whether you're creating content for social media, websites, presentations, education, marketing, or personal communication, the tool helps you transform ordinary videos into engaging animated GIFs within minutes.</p>

  <p>Upload your video, customize your settings, and create professional-looking GIFs without installing software or paying subscription fees. It's fast, secure, and completely free to use.</p>

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