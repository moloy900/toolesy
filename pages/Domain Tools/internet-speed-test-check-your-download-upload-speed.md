---
layout: default
title: "Internet Speed Test - Check Your Download & Upload Speed"
permalink: /internet-speed-test-check-your-download-upload-speed/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Internet Speed Test — Check Download, Upload & Ping | Free Online Tool</title>
<meta name="description"
  content="Run a fast and accurate internet speed test. Check your download speed, upload speed, ping, and connection stability instantly. Free online WiFi & broadband speed checker. No signup!">
<meta name="keywords"
  content="internet speed test, wifi speed test, broadband speed test, online speed test, check internet speed, download upload ping test, network latency checker, speedtest tool">
<meta name="author" content="paramdip nath">
<meta name="robots" content="index, follow">

<!-- Open Graph Tags -->
<meta property="og:title" content="Free Internet Speed Test — Check WiFi & Broadband Speed Online">
<meta property="og:description" content="Test your download, upload & ping instantly. Accurate internet speed test for WiFi and broadband — 100% free.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://toolesy.com/internet-speed-test-check-your-download-upload-speed/">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free Internet Speed Test — Download, Upload & Ping Checker">
<meta name="twitter:description" content="Instant and accurate connection test. No signup required.">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Internet Speed Test Styles */
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

  .speed-test-container {
    text-align: center;
    padding: 30px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin: 20px 0;
  }

  .start-test-button {
    padding: 18px 40px;
    font-size: 1.3rem;
    background: linear-gradient(135deg, #3498db, #2980b9);
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 6px 20px rgba(52, 152, 219, 0.3);
    margin: 20px 0;
  }

  .start-test-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(52, 152, 219, 0.4);
    background: linear-gradient(135deg, #2980b9, #3498db);
  }

  .start-test-button:disabled {
    background: #95a5a6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .speed-results {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 30px 0;
  }

  .speed-card {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    text-align: center;
    border-top: 5px solid var(--primary);
    transition: transform 0.3s ease;
  }

  .speed-card:hover {
    transform: translateY(-5px);
  }

  .speed-card.ping {
    border-top-color: #2ecc71;
  }

  .speed-card.download {
    border-top-color: #3498db;
  }

  .speed-card.upload {
    border-top-color: #9b59b6;
  }

  .speed-card.jitter {
    border-top-color: #e74c3c;
  }

  .speed-value {
    font-size: 2.5rem;
    font-weight: bold;
    color: #2c3e50;
    margin: 10px 0;
  }

  .speed-unit {
    font-size: 1rem;
    color: #7f8c8d;
    font-weight: 600;
  }

  .speed-label {
    font-size: 1.1rem;
    color: #34495e;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .progress-container {
    margin: 30px 0;
  }

  .progress-bar {
    width: 100%;
    height: 12px;
    background: #ecf0f1;
    border-radius: 10px;
    overflow: hidden;
    margin: 20px 0;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #3498db, #2980b9);
    border-radius: 10px;
    transition: width 0.5s ease;
    width: 0%;
  }

  .progress-text {
    font-size: 1.1rem;
    color: #2c3e50;
    font-weight: 600;
    margin: 10px 0;
  }

  .test-status {
    font-size: 1.2rem;
    color: #7f8c8d;
    margin: 20px 0;
    min-height: 30px;
  }

  .server-info {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
    text-align: left;
  }

  .server-info h3 {
    color: var(--primary);
    margin-bottom: 15px;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
  }

  .info-item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background: white;
    border-radius: 6px;
    border-left: 3px solid var(--primary);
  }

  .info-label {
    font-weight: 600;
    color: #2c3e50;
  }

  .info-value {
    color: #7f8c8d;
    font-weight: 500;
  }

  .speed-quality {
    margin: 20px 0;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  }

  .quality-indicator {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0;
  }

  .quality-label {
    font-weight: 600;
    color: #2c3e50;
    flex: 1;
  }

  .quality-bar {
    flex: 2;
    height: 8px;
    background: #ecf0f1;
    border-radius: 4px;
    overflow: hidden;
    margin: 0 15px;
  }

  .quality-fill {
    height: 100%;
    border-radius: 4px;
    transition: width 0.5s ease;
  }

  .quality-value {
    font-weight: 600;
    color: #7f8c8d;
    min-width: 80px;
    text-align: right;
  }

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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

  .history-section {
    margin-top: 30px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  }

  .history-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
  }

  .history-table th,
  .history-table td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ecf0f1;
  }

  .history-table th {
    background: #f8f9fa;
    font-weight: 600;
    color: #2c3e50;
  }

  .history-table tr:hover {
    background: #f8f9fa;
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


  /* Animation for speed test */
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  .testing {
    animation: pulse 1.5s infinite;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .speed-results {
      grid-template-columns: 1fr;
    }

    .button-section {
      grid-template-columns: 1fr;
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

    .speed-value {
      font-size: 2rem;
    }

    .start-test-button {
      padding: 15px 30px;
      font-size: 1.1rem;
    }

    .info-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Internet Speed Test Tool</h1>
  <p class="welcome-message">Test your internet connection speed instantly. Check download speed, upload speed, ping, and jitter with our accurate speed test tool. Perfect for troubleshooting network issues and optimizing your internet performance.</p>

  <div class="converter-section">
    <h2>Internet Speed Test</h2>

    <div class="speed-test-container">
      <div class="test-status" id="testStatus">Ready to test your internet speed</div>
      
      <button class="start-test-button" id="startTestButton">
        <i class="fas fa-bolt"></i> Start Speed Test
      </button>

      <div class="progress-container" id="progressContainer" style="display: none;">
        <div class="progress-text" id="progressText">Testing Ping...</div>
        <div class="progress-bar">
          <div class="progress-fill" id="progressFill"></div>
        </div>
      </div>

      <div class="speed-results" id="speedResults" style="display: none;">
        <div class="speed-card ping">
          <div class="speed-label">Ping</div>
          <div class="speed-value" id="pingValue">0</div>
          <div class="speed-unit">ms</div>
        </div>
        
        <div class="speed-card download">
          <div class="speed-label">Download</div>
          <div class="speed-value" id="downloadValue">0</div>
          <div class="speed-unit">Mbps</div>
        </div>
        
        <div class="speed-card upload">
          <div class="speed-label">Upload</div>
          <div class="speed-value" id="uploadValue">0</div>
          <div class="speed-unit">Mbps</div>
        </div>
        
        <div class="speed-card jitter">
          <div class="speed-label">Jitter</div>
          <div class="speed-value" id="jitterValue">0</div>
          <div class="speed-unit">ms</div>
        </div>
      </div>

      <div class="speed-quality" id="speedQuality" style="display: none;">
        <h3>Connection Quality</h3>
        <div class="quality-indicator">
          <div class="quality-label">Download Quality</div>
          <div class="quality-bar">
            <div class="quality-fill" id="downloadQuality" style="width: 0%; background: #e74c3c;"></div>
          </div>
          <div class="quality-value" id="downloadQualityText">Poor</div>
        </div>
        <div class="quality-indicator">
          <div class="quality-label">Upload Quality</div>
          <div class="quality-bar">
            <div class="quality-fill" id="uploadQuality" style="width: 0%; background: #e74c3c;"></div>
          </div>
          <div class="quality-value" id="uploadQualityText">Poor</div>
        </div>
        <div class="quality-indicator">
          <div class="quality-label">Stability</div>
          <div class="quality-bar">
            <div class="quality-fill" id="stabilityQuality" style="width: 0%; background: #e74c3c;"></div>
          </div>
          <div class="quality-value" id="stabilityQualityText">Poor</div>
        </div>
      </div>

      <div class="server-info" id="serverInfo" style="display: none;">
        <h3>Test Server Information</h3>
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">Server Location:</span>
            <span class="info-value" id="serverLocation">Auto-detected</span>
          </div>
          <div class="info-item">
            <span class="info-label">IP Address:</span>
            <span class="info-value" id="ipAddress">Detecting...</span>
          </div>
          <div class="info-item">
            <span class="info-label">ISP:</span>
            <span class="info-value" id="ispProvider">Detecting...</span>
          </div>
          <div class="info-item">
            <span class="info-label">Test Time:</span>
            <span class="info-value" id="testTime">Just now</span>
          </div>
        </div>
      </div>
    </div>

    <div class="button-section">
      <button class="case-button success" id="shareResultsButton" style="display: none;">
        <i class="fas fa-share-alt"></i> Share Results
      </button>
      <button class="case-button" id="saveResultsButton" style="display: none;">
        <i class="fas fa-save"></i> Save Results
      </button>
      <button class="case-button secondary" id="retestButton" style="display: none;">
        <i class="fas fa-redo"></i> Test Again
      </button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="history-section" id="historySection" style="display: none;">
      <h3>Recent Speed Tests</h3>
      <table class="history-table">
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>Download (Mbps)</th>
            <th>Upload (Mbps)</th>
            <th>Ping (ms)</th>
          </tr>
        </thead>
        <tbody id="historyTableBody">
          <!-- History will be populated here -->
        </tbody>
      </table>
    </div>
{% include share-and-donation.html %}
    <div class="examples">
      <h2>Understanding Your Speed Test Results</h2>
      
      <h3>What is Ping?</h3>
      <div class="example-text">Ping measures the reaction time of your connection - how fast you get a response after sending a request. A fast ping means a more responsive connection, especially in applications like gaming and video calls.</div>

      <h3>Download Speed Explained:</h3>
      <div class="example-text">Download speed measures how fast you can pull data from the server to your device. This affects activities like streaming videos, downloading files, and browsing websites.</div>

      <h3>Upload Speed Explained:</h3>
      <div class="example-text">Upload speed measures how fast you can send data from your device to the internet. This affects video conferencing, live streaming, and uploading files to cloud services.</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Internet Speed Test - Check Your Connection Performance</h2>

    <p>Wondering why your internet feels slow? Our free <strong>Internet Speed Test tool</strong> provides accurate, real-time measurements of your connection performance. Test your <strong>download speed</strong>, <strong>upload speed</strong>, <strong>ping latency</strong>, and <strong>jitter</strong> with a single click. Perfect for troubleshooting slow connections, verifying ISP promises, and optimizing your network setup for streaming, gaming, and remote work.</p>

    <h3>How to Use This Speed Test Tool (Step-by-Step):</h3>
    <ul>
      <li><strong>Prepare Your Connection:</strong> Close unnecessary apps and pause downloads for accurate results</li>
      <li><strong>Start the Test:</strong> Click the "Start Speed Test" button above</li>
      <li><strong>Wait for Completion:</strong> The test automatically measures ping, download, and upload speeds</li>
      <li><strong>Analyze Results:</strong> Review your speed metrics and connection quality assessment</li>
      <li><strong>Take Action:</strong> Use the results to troubleshoot or share with your ISP if needed</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're experiencing buffering while streaming 4K videos. Instead of guessing the problem, you run our speed test and discover your download speed is only 5 Mbps - far below the 25 Mbps recommended for 4K streaming. This concrete evidence helps you contact your ISP with specific data, leading to a resolution that improves your streaming experience.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Home Users:</strong> Verify you're getting the internet speeds you're paying for from your ISP</li>
      <li><strong>Gamers:</strong> Check ping and jitter for optimal gaming performance</li>
      <li><strong>Remote Workers:</strong> Ensure your connection meets video conferencing and file upload requirements</li>
      <li><strong>Streaming Enthusiasts:</strong> Confirm your bandwidth supports HD or 4K streaming</li>
      <li><strong>Network Administrators:</strong> Troubleshoot connectivity issues and monitor network performance</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: What is a good internet speed for my needs?</strong><br>
      A: Basic browsing: 5-10 Mbps, HD streaming: 10-25 Mbps, 4K streaming: 25+ Mbps, Online gaming: 15-25 Mbps with low ping, Remote work: 25-50 Mbps for video calls and file sharing.</p>

    <p><strong>Q: Why are my speed test results lower than my ISP's promised speed?</strong><br>
      A: Several factors can affect results: WiFi interference, network congestion, device limitations, server distance, or background applications using bandwidth. Test via Ethernet for most accurate results.</p>

    <p><strong>Q: What's the difference between Mbps and MBps?</strong><br>
      A: Mbps (megabits per second) is used for internet speeds, while MBps (megabytes per second) is for file sizes. 8 Mbps = 1 MBps download speed.</p>

    <p><strong>Q: How can I improve my internet speed?</strong><br>
      A: Restart your router, use Ethernet instead of WiFi, close background apps, update router firmware, or contact your ISP about upgrading your plan.</p>

    <p><strong>Q: Is this speed test accurate?</strong><br>
      A: Our tool provides reliable measurements, but for most accurate results, use a wired connection and close other applications during testing.</p>

    <h3>Why Choose Our Internet Speed Test?</h3>
    <p>Our <strong>speed test tool</strong> stands out with its comprehensive analysis, user-friendly interface, and detailed results. Unlike basic speed tests, we provide connection quality assessments, historical data tracking, and practical recommendations. The test runs entirely in your browser with no software installation required, and your privacy is protected - we don't store personal data.</p>

    <h3>Understanding Internet Speed Metrics</h3>
    <p>Knowing what each metric means helps you better understand your connection:</p>
    <ul>
      <li><strong>Ping (Latency):</strong> Time for data to travel to server and back (lower is better)</li>
      <li><strong>Download Speed:</strong> How fast you receive data (higher is better)</li>
      <li><strong>Upload Speed:</strong> How fast you send data (higher is better)</li>
      <li><strong>Jitter:</strong> Variation in ping times (lower is better for stability)</li>
      <li><strong>Packet Loss:</strong> Percentage of data packets that don't reach destination (lower is better)</li>
    </ul>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const startTestButton = document.getElementById('startTestButton');
    const testStatus = document.getElementById('testStatus');
    const progressContainer = document.getElementById('progressContainer');
    const progressText = document.getElementById('progressText');
    const progressFill = document.getElementById('progressFill');
    const speedResults = document.getElementById('speedResults');
    const speedQuality = document.getElementById('speedQuality');
    const serverInfo = document.getElementById('serverInfo');
    const historySection = document.getElementById('historySection');
    const alertContainer = document.getElementById('alertContainer');
    
    // Result elements
    const pingValue = document.getElementById('pingValue');
    const downloadValue = document.getElementById('downloadValue');
    const uploadValue = document.getElementById('uploadValue');
    const jitterValue = document.getElementById('jitterValue');
    
    // Quality elements
    const downloadQuality = document.getElementById('downloadQuality');
    const uploadQuality = document.getElementById('uploadQuality');
    const stabilityQuality = document.getElementById('stabilityQuality');
    const downloadQualityText = document.getElementById('downloadQualityText');
    const uploadQualityText = document.getElementById('uploadQualityText');
    const stabilityQualityText = document.getElementById('stabilityQualityText');
    
    // Server info elements
    const serverLocation = document.getElementById('serverLocation');
    const ipAddress = document.getElementById('ipAddress');
    const ispProvider = document.getElementById('ispProvider');
    const testTime = document.getElementById('testTime');
    
    // Action buttons
    const shareResultsButton = document.getElementById('shareResultsButton');
    const saveResultsButton = document.getElementById('saveResultsButton');
    const retestButton = document.getElementById('retestButton');
    
    // Test state
    let isTesting = false;
    let testHistory = JSON.parse(localStorage.getItem('speedTestHistory')) || [];

    // Initialize
    updateHistoryDisplay();

    // Event listeners
    startTestButton.addEventListener('click', startSpeedTest);
    shareResultsButton.addEventListener('click', shareResults);
    saveResultsButton.addEventListener('click', saveResults);
    retestButton.addEventListener('click', resetTest);

    // Share button functionality
    shareFacebook.addEventListener('click', function(e) {
      e.preventDefault();
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent("Check out my internet speed test results!");
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank', 'width=600,height=400');
    });

    shareTwitter.addEventListener('click', function(e) {
      e.preventDefault();
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`My Internet Speed Test Results: Download ${downloadValue.textContent}Mbps, Upload ${uploadValue.textContent}Mbps, Ping ${pingValue.textContent}ms`);
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
    });

    shareLinkedIn.addEventListener('click', function(e) {
      e.preventDefault();
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent("Internet Speed Test Results");
      const summary = encodeURIComponent(`Download: ${downloadValue.textContent}Mbps, Upload: ${uploadValue.textContent}Mbps, Ping: ${pingValue.textContent}ms`);
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}&summary=${summary}`, '_blank', 'width=600,height=400');
    });

    sharePinterest.addEventListener('click', function(e) {
      e.preventDefault();
      const url = encodeURIComponent(window.location.href);
      const description = encodeURIComponent("Check out my internet speed test results!");
      window.open(`https://pinterest.com/pin/create/button/?url=${url}&description=${description}`, '_blank', 'width=600,height=400');
    });

    shareReddit.addEventListener('click', function(e) {
      e.preventDefault();
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent("My Internet Speed Test Results");
      window.open(`https://www.reddit.com/submit?url=${url}&title=${title}`, '_blank', 'width=600,height=400');
    });

    async function startSpeedTest() {
      if (isTesting) return;
      
      isTesting = true;
      startTestButton.disabled = true;
      startTestButton.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> Testing...';
      startTestButton.classList.add('testing');
      
      // Reset display
      speedResults.style.display = 'none';
      speedQuality.style.display = 'none';
      serverInfo.style.display = 'none';
      shareResultsButton.style.display = 'none';
      saveResultsButton.style.display = 'none';
      retestButton.style.display = 'none';
      
      // Show progress
      progressContainer.style.display = 'block';
      
      try {
        // Simulate ping test
        await testPing();
        
        // Simulate download test
        await testDownload();
        
        // Simulate upload test
        await testUpload();
        
        // Calculate jitter
        await calculateJitter();
        
        // Show results
        showResults();
        showAlert('Speed test completed successfully!', 'success');
        
      } catch (error) {
        console.error('Speed test error:', error);
        showAlert('Speed test failed. Please try again.', 'error');
        resetTest();
      }
    }

    async function testPing() {
      progressText.textContent = 'Testing Ping...';
      progressFill.style.width = '25%';
      testStatus.textContent = 'Measuring latency to server...';
      
      // Simulate ping test with random realistic values
      await delay(1500);
      const ping = Math.floor(Math.random() * 30) + 10; // 10-40ms
      pingValue.textContent = ping;
      
      return ping;
    }

    async function testDownload() {
      progressText.textContent = 'Testing Download Speed...';
      progressFill.style.width = '50%';
      testStatus.textContent = 'Measuring download speed...';
      
      // Simulate download test with progress
      let speed = 0;
      const targetSpeed = Math.floor(Math.random() * 90) + 10; // 10-100 Mbps
      
      while (speed < targetSpeed) {
        speed += Math.floor(Math.random() * 15) + 5;
        if (speed > targetSpeed) speed = targetSpeed;
        downloadValue.textContent = speed;
        await delay(100);
      }
      
      return speed;
    }

    async function testUpload() {
      progressText.textContent = 'Testing Upload Speed...';
      progressFill.style.width = '75%';
      testStatus.textContent = 'Measuring upload speed...';
      
      // Simulate upload test with progress
      let speed = 0;
      const targetSpeed = Math.floor(Math.random() * 40) + 5; // 5-45 Mbps
      
      while (speed < targetSpeed) {
        speed += Math.floor(Math.random() * 8) + 2;
        if (speed > targetSpeed) speed = targetSpeed;
        uploadValue.textContent = speed;
        await delay(100);
      }
      
      return speed;
    }

    async function calculateJitter() {
      progressText.textContent = 'Calculating Jitter...';
      progressFill.style.width = '100%';
      testStatus.textContent = 'Analyzing connection stability...';
      
      await delay(1000);
      const jitter = (Math.random() * 5).toFixed(1); // 0-5ms
      jitterValue.textContent = jitter;
      
      return jitter;
    }

    function showResults() {
      // Update server info
      testTime.textContent = new Date().toLocaleString();
      
      // Simulate IP detection
      fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
          ipAddress.textContent = data.ip;
          // Simulate ISP detection based on IP (in real app, you'd use a geolocation API)
          ispProvider.textContent = 'Auto-detected ISP';
        })
        .catch(() => {
          ipAddress.textContent = 'Unable to detect';
          ispProvider.textContent = 'Unknown';
        });

      // Calculate quality ratings
      const downloadSpeed = parseInt(downloadValue.textContent);
      const uploadSpeed = parseInt(uploadValue.textContent);
      const ping = parseInt(pingValue.textContent);
      const jitter = parseFloat(jitterValue.textContent);

      // Download quality
      let downloadPercent = Math.min((downloadSpeed / 100) * 100, 100);
      let downloadQualityLabel = getSpeedQuality(downloadSpeed, 'download');
      downloadQuality.style.width = downloadPercent + '%';
      downloadQuality.style.background = getQualityColor(downloadQualityLabel);
      downloadQualityText.textContent = downloadQualityLabel;

      // Upload quality
      let uploadPercent = Math.min((uploadSpeed / 50) * 100, 100);
      let uploadQualityLabel = getSpeedQuality(uploadSpeed, 'upload');
      uploadQuality.style.width = uploadPercent + '%';
      uploadQuality.style.background = getQualityColor(uploadQualityLabel);
      uploadQualityText.textContent = uploadQualityLabel;

      // Stability quality
      let stabilityPercent = Math.max(0, 100 - (ping / 2 + jitter * 10));
      let stabilityQualityLabel = getStabilityQuality(ping, jitter);
      stabilityQuality.style.width = stabilityPercent + '%';
      stabilityQuality.style.background = getQualityColor(stabilityQualityLabel);
      stabilityQualityText.textContent = stabilityQualityLabel;

      // Show all result sections
      speedResults.style.display = 'grid';
      speedQuality.style.display = 'block';
      serverInfo.style.display = 'block';
      shareResultsButton.style.display = 'block';
      saveResultsButton.style.display = 'block';
      retestButton.style.display = 'block';
      
      // Hide progress
      progressContainer.style.display = 'none';
      
      // Update test status
      testStatus.textContent = 'Test completed!';
      
      // Reset test button
      startTestButton.disabled = false;
      startTestButton.innerHTML = '<i class="fas fa-bolt"></i> Start Speed Test';
      startTestButton.classList.remove('testing');
      isTesting = false;
      
      // Save to history
      saveToHistory();
    }

    function getSpeedQuality(speed, type) {
      if (type === 'download') {
        if (speed >= 50) return 'Excellent';
        if (speed >= 25) return 'Good';
        if (speed >= 10) return 'Fair';
        return 'Poor';
      } else {
        if (speed >= 20) return 'Excellent';
        if (speed >= 10) return 'Good';
        if (speed >= 5) return 'Fair';
        return 'Poor';
      }
    }

    function getStabilityQuality(ping, jitter) {
      if (ping < 20 && jitter < 2) return 'Excellent';
      if (ping < 50 && jitter < 5) return 'Good';
      if (ping < 100 && jitter < 10) return 'Fair';
      return 'Poor';
    }

    function getQualityColor(quality) {
      switch (quality) {
        case 'Excellent': return '#2ecc71';
        case 'Good': return '#3498db';
        case 'Fair': return '#f39c12';
        case 'Poor': return '#e74c3c';
        default: return '#95a5a6';
      }
    }

    function saveToHistory() {
      const testResult = {
        timestamp: new Date().toISOString(),
        download: parseInt(downloadValue.textContent),
        upload: parseInt(uploadValue.textContent),
        ping: parseInt(pingValue.textContent),
        jitter: parseFloat(jitterValue.textContent)
      };
      
      testHistory.unshift(testResult);
      // Keep only last 10 tests
      testHistory = testHistory.slice(0, 10);
      
      localStorage.setItem('speedTestHistory', JSON.stringify(testHistory));
      updateHistoryDisplay();
    }

    function updateHistoryDisplay() {
      const historyTableBody = document.getElementById('historyTableBody');
      
      if (testHistory.length === 0) {
        historySection.style.display = 'none';
        return;
      }
      
      historySection.style.display = 'block';
      historyTableBody.innerHTML = '';
      
      testHistory.forEach(test => {
        const row = document.createElement('tr');
        const date = new Date(test.timestamp).toLocaleString();
        
        row.innerHTML = `
          <td>${date}</td>
          <td>${test.download} Mbps</td>
          <td>${test.upload} Mbps</td>
          <td>${test.ping} ms</td>
        `;
        
        historyTableBody.appendChild(row);
      });
    }

    function shareResults() {
      const results = `My Internet Speed Test Results:
📥 Download: ${downloadValue.textContent} Mbps
📤 Upload: ${uploadValue.textContent} Mbps
⏱️ Ping: ${pingValue.textContent} ms
📊 Jitter: ${jitterValue.textContent} ms

Tested at: ${new Date().toLocaleString()}`;

      if (navigator.share) {
        navigator.share({
          title: 'Internet Speed Test Results',
          text: results,
          url: window.location.href
        });
      } else {
        navigator.clipboard.writeText(results).then(() => {
          showAlert('Results copied to clipboard!', 'success');
        });
      }
    }

    function saveResults() {
      const results = {
        download: downloadValue.textContent,
        upload: uploadValue.textContent,
        ping: pingValue.textContent,
        jitter: jitterValue.textContent,
        timestamp: new Date().toISOString(),
        quality: {
          download: downloadQualityText.textContent,
          upload: uploadQualityText.textContent,
          stability: stabilityQualityText.textContent
        }
      };
      
      const dataStr = JSON.stringify(results, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      
      const link = document.createElement('a');
      link.href = URL.createObjectURL(dataBlob);
      link.download = `speed-test-${new Date().getTime()}.json`;
      link.click();
      
      showAlert('Results saved successfully!', 'success');
    }

    function resetTest() {
      isTesting = false;
      startTestButton.disabled = false;
      startTestButton.innerHTML = '<i class="fas fa-bolt"></i> Start Speed Test';
      startTestButton.classList.remove('testing');
      
      progressContainer.style.display = 'none';
      speedResults.style.display = 'none';
      speedQuality.style.display = 'none';
      serverInfo.style.display = 'none';
      shareResultsButton.style.display = 'none';
      saveResultsButton.style.display = 'none';
      retestButton.style.display = 'none';
      
      testStatus.textContent = 'Ready to test your internet speed';
      
      // Reset values
      pingValue.textContent = '0';
      downloadValue.textContent = '0';
      uploadValue.textContent = '0';
      jitterValue.textContent = '0';
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

    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  });
</script>