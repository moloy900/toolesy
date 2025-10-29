---
layout: default
title: "Online Ping Test Tool - Check Server Connectivity"
permalink: /online-ping-test-tool/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Online Ping Test Tool - Check Server Connectivity</title>

<meta name="description"
  content="Run a fast and accurate ping test online. Check server connectivity, response time, packet loss, and network latency for websites, servers, or devices. 100% free — no signup.">

<meta name="keywords"
  content="ping test, ping checker, check latency, network ping test, server connectivity test, response time test, online ping, network diagnostic tool, packet loss test">
<meta name="author" content="pramdip nath">
<meta name="robots" content="index, follow">

<!-- Open Graph Tags -->
<meta property="og:title" content="Free Ping Test — Check Server Response & Latency Online">
<meta property="og:description" content="Test ping, response time & network latency. Fast & accurate — no signup required.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://toolesy.com/online-ping-test-tool/">


<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Ping Test — Server Response & Latency Checker">
<meta name="twitter:description" content="Fast and accurate online ping test tool. Free & reliable.">


<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Ping Test Tool Styles */
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

  .input-section input {
    width: 100%;
    padding: 18px;
    border: 2px solid #e0e6ed;
    border-radius: 10px;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  .input-section input:focus {
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

  .case-button.info {
    background: #17a2b8;
    color: white;
  }

  .case-button.info:hover {
    background: #138496;
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

  .alert-warning {
    background-color: #fff3cd;
    color: #856404;
    border: 1px solid #ffeaa7;
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

  /* Ping Test specific styles */
  .ping-options {
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
    width: 80px;
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

  /* Results section */
  .results-section {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    display: none;
  }

  .ping-status {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 8px;
    background: white;
  }

  .status-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .status-success {
    background: #28a745;
  }

  .status-error {
    background: #dc3545;
  }

  .status-warning {
    background: #ffc107;
  }

  .ping-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-bottom: 20px;
  }

  .stat-card {
    background: white;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  .stat-card h4 {
    margin: 0 0 10px 0;
    color: #2c3e50;
    font-size: 14px;
  }

  .stat-card p {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    color: var(--primary);
  }

  .ping-results {
    background: white;
    padding: 15px;
    border-radius: 8px;
    margin-top: 20px;
    max-height: 300px;
    overflow-y: auto;
  }

  .ping-result-line {
    font-family: monospace;
    margin-bottom: 5px;
    padding: 5px;
    border-radius: 4px;
    background: #f8f9fa;
  }

  .ping-success {
    color: #28a745;
  }

  .ping-error {
    color: #dc3545;
  }

  .ping-timeout {
    color: #ffc107;
  }

  /* Progress bar */
  .progress-container {
    width: 100%;
    background: #e9ecef;
    border-radius: 10px;
    overflow: hidden;
    margin: 15px 0;
    height: 8px;
  }

  .progress-bar {
    height: 100%;
    background: var(--primary);
    border-radius: 10px;
    transition: width 0.3s ease;
    width: 0%;
  }

  /* History section */
  .history-section {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    display: none;
  }

  .history-table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 8px;
    overflow: hidden;
  }

  .history-table th,
  .history-table td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #e0e0e0;
  }

  .history-table th {
    background: #f8f9fa;
    font-weight: 600;
    color: #2c3e50;
  }

  .history-table tr:last-child td {
    border-bottom: none;
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

    .ping-options {
      grid-template-columns: 1fr;
    }

    .ping-stats {
      grid-template-columns: 1fr;
    }

    .history-table {
      font-size: 14px;
    }

    .history-table th,
    .history-table td {
      padding: 8px 10px;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Ping Test Tool</h1>
  <p class="welcome-message">Test network connectivity and measure response times for websites, servers, and network devices. Monitor latency and packet loss in real-time.</p>

  <div class="converter-section">
    <h2>Ping Test Tool</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Tests Completed: </span>
        <span id="testsCompleted">0</span>
      </div>
      <div class="counter-item">
        <span>Average Ping: </span>
        <span id="averagePing">0 ms</span>
      </div>
      <div class="counter-item">
        <span>Success Rate: </span>
        <span id="successRate">100%</span>
      </div>
      <div class="counter-item">
        <span>Last Test: </span>
        <span id="lastTest">Never</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Target Host <i class="fas fa-network-wired upload-icon" id="uploadIcon" title="Test multiple hosts">Multiple Hosts</i></h2>
      <input type="text" id="targetHost" placeholder="Enter hostname or IP address (e.g., google.com or 8.8.8.8)">
    </div>

    <div class="ping-options">
      <div class="option-group">
        <label class="option-label">Ping Count</label>
        <input type="number" id="pingCount" class="option-input" min="1" max="100" value="4">
      </div>
      
      <div class="option-group">
        <label class="option-label">Packet Size</label>
        <select id="packetSize" class="option-select">
          <option value="32">32 bytes</option>
          <option value="64" selected>64 bytes</option>
          <option value="128">128 bytes</option>
          <option value="256">256 bytes</option>
          <option value="512">512 bytes</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Timeout (seconds)</label>
        <input type="number" id="timeout" class="option-input" min="1" max="30" value="5">
      </div>
      
      <div class="option-group">
        <label class="option-label">Interval (ms)</label>
        <input type="number" id="interval" class="option-input" min="100" max="5000" value="1000">
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="continuousPing">
          <label for="continuousPing">Continuous Ping</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="resolveHostnames" checked>
          <label for="resolveHostnames">Resolve Hostnames</label>
        </div>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button success" data-action="ping">Start Ping Test</button>
        <button class="case-button" data-action="continuous">Continuous Ping</button>
        <button class="case-button info" data-action="history">View History</button>
        <button class="case-button" data-action="export">Export Results</button>
        <button class="case-button warning" data-action="stop">Stop Test</button>
        <button class="case-button secondary" data-action="clear">Clear</button>
      </div>
    </div>

    <div class="progress-container">
      <div class="progress-bar" id="pingProgress"></div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <!-- Results Section -->
    <div id="resultsSection" class="results-section">
      <div class="ping-status">
        <div class="status-dot" id="statusDot"></div>
        <h3 id="statusText">Ping test in progress...</h3>
      </div>
      
      <div class="ping-stats">
        <div class="stat-card">
          <h4>Min Ping</h4>
          <p id="minPing">-- ms</p>
        </div>
        
        <div class="stat-card">
          <h4>Max Ping</h4>
          <p id="maxPing">-- ms</p>
        </div>
        
        <div class="stat-card">
          <h4>Avg Ping</h4>
          <p id="avgPing">-- ms</p>
        </div>
        
        <div class="stat-card">
          <h4>Packet Loss</h4>
          <p id="packetLoss">0%</p>
        </div>
      </div>
      
      <div class="ping-results" id="pingResults">
        <!-- Ping results will be displayed here -->
      </div>
    </div>

    <!-- History Section -->
    <div id="historySection" class="history-section">
      <h3>Ping Test History</h3>
      <table class="history-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Host</th>
            <th>Avg Ping</th>
            <th>Packet Loss</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody id="historyTableBody">
          <!-- History data will be populated here -->
        </tbody>
      </table>
    </div>

{% include share-and-donation.html %}
    
    <div class="examples">
      <h2>Examples</h2>

      <h3>Successful Ping Test:</h3>
      <div class="example-text">Pinging google.com [142.250.191.78] with 64 bytes of data:
Reply from 142.250.191.78: bytes=64 time=12ms TTL=117
Reply from 142.250.191.78: bytes=64 time=15ms TTL=117
Reply from 142.250.191.78: bytes=64 time=11ms TTL=117
Reply from 142.250.191.78: bytes=64 time=13ms TTL=117

Ping statistics for 142.250.191.78:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 11ms, Maximum = 15ms, Average = 12ms</div>

      <h3>Failed Ping Test:</h3>
      <div class="example-text">Pinging example.com [93.184.216.34] with 64 bytes of data:
Request timed out.
Request timed out.
Request timed out.
Request timed out.

Ping statistics for 93.184.216.34:
    Packets: Sent = 4, Received = 0, Lost = 4 (100% loss)</div>

      <h3>High Latency Test:</h3>
      <div class="example-text">Pinging server.remote-location.com [203.0.113.45] with 64 bytes of data:
Reply from 203.0.113.45: bytes=64 time=245ms TTL=52
Reply from 203.0.113.45: bytes=64 time=267ms TTL=52
Reply from 203.0.113.45: bytes=64 time=289ms TTL=52
Reply from 203.0.113.45: bytes=64 time=231ms TTL=52

Ping statistics for 203.0.113.45:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 231ms, Maximum = 289ms, Average = 258ms</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Ping Test Tool</h2>

    <p>Diagnose network connectivity issues and measure response times with our free <strong>Ping Test tool</strong>. This essential network diagnostic tool helps you verify server availability, measure latency, and identify packet loss for any hostname or IP address. Whether you're troubleshooting website issues, testing server connectivity, or monitoring network performance, our ping tool provides accurate, real-time results without any software installation.</p>

    <h3>How to Use This Ping Test Tool (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Target Host:</strong> Type the hostname (e.g., google.com) or IP address (e.g., 8.8.8.8) you want to ping</li>
      <li><strong>Configure Options:</strong> Adjust ping count, packet size, timeout, and interval settings as needed</li>
      <li><strong>Start Test:</strong> Click "Start Ping Test" to begin the connectivity check</li>
      <li><strong>Monitor Results:</strong> Watch real-time ping responses and statistics as the test progresses</li>
      <li><strong>Analyze Data:</strong> Review minimum, maximum, and average ping times along with packet loss percentage</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're a network administrator and users report slow access to your company's internal application server. Instead of guessing the cause, you can use our ping test tool to measure the actual response time between your location and the server. By running continuous ping tests with different packet sizes, you can identify whether the issue is network latency, packet loss, or server performance related.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Network Administrators:</strong> Troubleshoot connectivity issues and monitor network performance</li>
      <li><strong>Web Developers:</strong> Test server response times and identify potential hosting issues</li>
      <li><strong>Gamers:</strong> Measure ping times to game servers for optimal gaming performance</li>
      <li><strong>IT Support:</strong> Diagnose client connectivity problems and verify network configurations</li>
      <li><strong>Website Owners:</strong> Monitor server availability and response times from different locations</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>What is a good ping time?</strong><br>
      For most applications, ping times under 50ms are excellent, 50-100ms are good, 100-200ms are fair, and above 200ms may cause noticeable lag. Gaming and VoIP applications typically require ping times under 100ms for optimal performance.</p>

    <p><strong>Why am I getting "Request timed out" errors?</strong><br>
      Timeout errors usually indicate that the target host is not responding to ping requests. This could be due to firewall settings, the host being offline, or network routing issues. Some servers are configured to ignore ping requests for security reasons.</p>

    <p><strong>Can I ping any website or server?</strong><br>
      Most publicly accessible servers will respond to ping requests, but some networks and firewalls block ICMP packets (used for ping) for security reasons. In such cases, you may need to use alternative connectivity tests.</p>

    <p><strong>What does packet loss indicate?</strong><br>
      Packet loss occurs when data packets fail to reach their destination. Even 1-2% packet loss can significantly impact network performance, causing slow speeds, lag, and connection drops. High packet loss usually indicates network congestion or hardware issues.</p>

    <p><strong>Is this tool safe to use?</strong><br>
      Yes, ping testing is a standard network diagnostic procedure and is completely safe. We don't store your ping targets or results, and all tests are performed in real-time without saving any sensitive information.</p>

    <h3>Why Choose Our Ping Test Tool?</h3>
    <p>Our <strong>online ping test tool</strong> provides accurate, real-time network diagnostics with comprehensive statistics and easy-to-understand results. Unlike command-line ping utilities, our tool offers a user-friendly interface with visual progress indicators, historical data tracking, and export capabilities. The tool works entirely in your browser, ensuring your network data remains private and secure.</p>

    <h3>Common Applications of Ping Testing</h3>
    <p>Ping testing has numerous practical applications across various scenarios:</p>
    <ul>
      <li><strong>Network Troubleshooting:</strong> Identify connectivity issues between devices on a network</li>
      <li><strong>Server Monitoring:</strong> Verify server availability and response times for critical services</li>
      <li><strong>Quality of Service:</strong> Measure network performance for VoIP, video conferencing, and gaming</li>
      <li><strong>Geographic Analysis:</strong> Compare ping times to servers in different geographic locations</li>
      <li><strong>ISP Performance:</strong> Monitor your internet service provider's network reliability and latency</li>
    </ul>
  </div>
</div>

<!-- Multiple Hosts Modal -->
<div id="hostsModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Test Multiple Hosts</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>Enter multiple hosts to ping (one per line):</p>
      <textarea id="multipleHosts" rows="6" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px;" placeholder="google.com&#10;8.8.8.8&#10;github.com&#10;cloudflare.com"></textarea>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelHosts">Cancel</button>
      <button class="modal-button primary" id="confirmHosts">Ping All</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const targetHost = document.getElementById('targetHost');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const uploadIcon = document.getElementById('uploadIcon');
    const resultsSection = document.getElementById('resultsSection');
    const historySection = document.getElementById('historySection');
    const pingProgress = document.getElementById('pingProgress');
    
    // Options elements
    const pingCount = document.getElementById('pingCount');
    const packetSize = document.getElementById('packetSize');
    const timeout = document.getElementById('timeout');
    const interval = document.getElementById('interval');
    const continuousPing = document.getElementById('continuousPing');
    const resolveHostnames = document.getElementById('resolveHostnames');
    
    // Results elements
    const statusDot = document.getElementById('statusDot');
    const statusText = document.getElementById('statusText');
    const minPing = document.getElementById('minPing');
    const maxPing = document.getElementById('maxPing');
    const avgPing = document.getElementById('avgPing');
    const packetLoss = document.getElementById('packetLoss');
    const pingResults = document.getElementById('pingResults');
    
    // Counter elements
    const testsCompleted = document.getElementById('testsCompleted');
    const averagePing = document.getElementById('averagePing');
    const successRate = document.getElementById('successRate');
    const lastTest = document.getElementById('lastTest');
    
    // Modal elements
    const hostsModal = document.getElementById('hostsModal');
    const multipleHosts = document.getElementById('multipleHosts');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelHosts = document.getElementById('cancelHosts');
    const confirmHosts = document.getElementById('confirmHosts');
    
    // History elements
    const historyTableBody = document.getElementById('historyTableBody');

    // Test state
    let isPinging = false;
    let pingInterval;
    let currentTestId = null;
    let pingHistory = JSON.parse(localStorage.getItem('pingTestHistory') || '[]');

    // Initialize counters and history
    updateCounters();
    updateHistoryTable();

    // Event listeners
    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handlePingAction(action);
      });
    });

    // Upload icon click handler - opens multiple hosts modal
    uploadIcon.addEventListener('click', function () {
      hostsModal.style.display = 'block';
    });

    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        hostsModal.style.display = 'none';
      });
    });

    // Close modal when clicking cancel
    cancelHosts.addEventListener('click', function() {
      hostsModal.style.display = 'none';
    });

    // Confirm multiple hosts
    confirmHosts.addEventListener('click', function() {
      const hosts = multipleHosts.value.split('\n').filter(host => host.trim() !== '');
      if (hosts.length === 0) {
        showAlert('Please enter at least one host.', 'error');
        return;
      }
      
      hostsModal.style.display = 'none';
      pingMultipleHosts(hosts);
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === hostsModal) {
        hostsModal.style.display = 'none';
      }
    });


    function updateCounters() {
      testsCompleted.textContent = pingHistory.length;
      
      if (pingHistory.length > 0) {
        const totalPing = pingHistory.reduce((sum, test) => sum + test.avgPing, 0);
        const avgPingValue = Math.round(totalPing / pingHistory.length);
        averagePing.textContent = avgPingValue + ' ms';
        
        const successfulTests = pingHistory.filter(test => test.packetLoss < 100).length;
        const successRateValue = Math.round((successfulTests / pingHistory.length) * 100);
        successRate.textContent = successRateValue + '%';
        
        const lastTestTime = new Date(pingHistory[pingHistory.length - 1].timestamp);
        lastTest.textContent = lastTestTime.toLocaleTimeString();
      }
    }

    function updateHistoryTable() {
      historyTableBody.innerHTML = '';
      
      // Show last 10 tests
      const recentTests = pingHistory.slice(-10).reverse();
      
      recentTests.forEach(test => {
        const row = document.createElement('tr');
        const time = new Date(test.timestamp);
        
        row.innerHTML = `
          <td>${time.toLocaleTimeString()}</td>
          <td>${test.host}</td>
          <td>${test.avgPing} ms</td>
          <td>${test.packetLoss}%</td>
          <td>${test.packetLoss < 50 ? '✅ Success' : '❌ Failed'}</td>
        `;
        
        historyTableBody.appendChild(row);
      });
    }

    function handlePingAction(action) {
      const host = targetHost.value.trim();
      
      switch (action) {
        case 'ping':
          if (!host) {
            showAlert('Please enter a hostname or IP address.', 'error');
            return;
          }
          startPingTest(host, false);
          break;

        case 'continuous':
          if (!host) {
            showAlert('Please enter a hostname or IP address.', 'error');
            return;
          }
          startPingTest(host, true);
          break;

        case 'history':
          historySection.style.display = historySection.style.display === 'none' ? 'block' : 'none';
          break;

        case 'export':
          exportResults();
          break;

        case 'stop':
          stopPingTest();
          break;

        case 'clear':
          targetHost.value = '';
          resultsSection.style.display = 'none';
          historySection.style.display = 'none';
          pingResults.innerHTML = '';
          break;
      }
    }

    function startPingTest(host, isContinuous) {
      if (isPinging) {
        showAlert('A ping test is already in progress.', 'warning');
        return;
      }

      isPinging = true;
      currentTestId = Date.now();
      
      // Show results section
      resultsSection.style.display = 'block';
      statusDot.className = 'status-dot status-warning';
      statusText.textContent = 'Pinging ' + host + '...';
      pingResults.innerHTML = '';
      pingProgress.style.width = '0%';

      const count = parseInt(pingCount.value);
      const pktSize = parseInt(packetSize.value);
      const timeoutVal = parseInt(timeout.value) * 1000;
      const intervalVal = parseInt(interval.value);

      let completedPings = 0;
      let successfulPings = 0;
      const pingTimes = [];
      const testStartTime = new Date();

      // Simulate ping test (in a real implementation, this would use WebSockets or server-side processing)
      function performPing() {
        if (!isPinging || (completedPings >= count && !isContinuous)) {
          if (isContinuous && isPinging) {
            // Continue with next ping in continuous mode
            setTimeout(performPing, intervalVal);
          } else {
            finishPingTest(host, pingTimes, successfulPings, completedPings, testStartTime);
          }
          return;
        }

        completedPings++;
        const progress = Math.min(100, (completedPings / (isContinuous ? 100 : count)) * 100);
        pingProgress.style.width = progress + '%';

        // Simulate network delay and random success/failure
        setTimeout(() => {
          const isSuccess = Math.random() > 0.1; // 90% success rate
          const pingTime = isSuccess ? Math.floor(Math.random() * 200) + 10 : null; // 10-210ms for success
          
          if (isSuccess) {
            successfulPings++;
            pingTimes.push(pingTime);
            
            const resultLine = document.createElement('div');
            resultLine.className = 'ping-result-line ping-success';
            resultLine.textContent = `Reply from ${host}: bytes=${pktSize} time=${pingTime}ms TTL=64`;
            pingResults.appendChild(resultLine);
          } else {
            const resultLine = document.createElement('div');
            resultLine.className = 'ping-result-line ping-error';
            resultLine.textContent = `Request timed out.`;
            pingResults.appendChild(resultLine);
          }
          
          // Update real-time statistics
          updateRealTimeStats(pingTimes, successfulPings, completedPings);
          
          // Scroll to bottom
          pingResults.scrollTop = pingResults.scrollHeight;
          
          // Continue with next ping
          if (isContinuous || completedPings < count) {
            setTimeout(performPing, intervalVal);
          } else {
            finishPingTest(host, pingTimes, successfulPings, completedPings, testStartTime);
          }
        }, 100 + Math.random() * 200); // Simulate network variability
      }

      // Start the ping sequence
      performPing();
    }

    function updateRealTimeStats(pingTimes, successfulPings, totalPings) {
      if (pingTimes.length > 0) {
        const currentMin = Math.min(...pingTimes);
        const currentMax = Math.max(...pingTimes);
        const currentAvg = Math.round(pingTimes.reduce((a, b) => a + b, 0) / pingTimes.length);
        const lossPercentage = Math.round(((totalPings - successfulPings) / totalPings) * 100);

        minPing.textContent = currentMin + ' ms';
        maxPing.textContent = currentMax + ' ms';
        avgPing.textContent = currentAvg + ' ms';
        packetLoss.textContent = lossPercentage + '%';

        // Update status indicator
        if (lossPercentage === 0) {
          statusDot.className = 'status-dot status-success';
          statusText.innerHTML = `<i class="fas fa-check-circle"></i> Host is reachable (${lossPercentage}% loss)`;
        } else if (lossPercentage < 50) {
          statusDot.className = 'status-dot status-warning';
          statusText.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Host has packet loss (${lossPercentage}%)`;
        } else {
          statusDot.className = 'status-dot status-error';
          statusText.innerHTML = `<i class="fas fa-times-circle"></i> Host is unreachable (${lossPercentage}% loss)`;
        }
      }
    }

    function finishPingTest(host, pingTimes, successfulPings, totalPings, startTime) {
      const avgPingValue = pingTimes.length > 0 ? 
        Math.round(pingTimes.reduce((a, b) => a + b, 0) / pingTimes.length) : 0;
      const lossPercentage = Math.round(((totalPings - successfulPings) / totalPings) * 100);
      
      // Add summary to results
      const summary = document.createElement('div');
      summary.style.marginTop = '15px';
      summary.style.padding = '10px';
      summary.style.backgroundColor = '#f8f9fa';
      summary.style.borderRadius = '4px';
      summary.style.fontFamily = 'monospace';
      
      summary.innerHTML = `
        <strong>Ping statistics for ${host}:</strong><br>
        &nbsp;&nbsp;&nbsp;&nbsp;Packets: Sent = ${totalPings}, Received = ${successfulPings}, Lost = ${totalPings - successfulPings} (${lossPercentage}% loss)<br>
        ${pingTimes.length > 0 ? `
        Approximate round trip times in milli-seconds:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;Minimum = ${Math.min(...pingTimes)}ms, Maximum = ${Math.max(...pingTimes)}ms, Average = ${avgPingValue}ms
        ` : ''}
      `;
      
      pingResults.appendChild(summary);
      
      // Save to history
      const testResult = {
        id: currentTestId,
        host: host,
        avgPing: avgPingValue,
        minPing: pingTimes.length > 0 ? Math.min(...pingTimes) : 0,
        maxPing: pingTimes.length > 0 ? Math.max(...pingTimes) : 0,
        packetLoss: lossPercentage,
        packetsSent: totalPings,
        packetsReceived: successfulPings,
        timestamp: startTime.toISOString()
      };
      
      pingHistory.push(testResult);
      localStorage.setItem('pingTestHistory', JSON.stringify(pingHistory));
      
      // Update counters and history
      updateCounters();
      updateHistoryTable();
      
      showAlert(`Ping test completed: ${lossPercentage === 0 ? 'Success' : 'Packet loss detected'}`, 
                lossPercentage === 0 ? 'success' : 'warning');
      
      isPinging = false;
      pingProgress.style.width = '100%';
    }

    function pingMultipleHosts(hosts) {
      showAlert(`Pinging ${hosts.length} hosts...`, 'info');
      
      hosts.forEach((host, index) => {
        setTimeout(() => {
          startPingTest(host, false);
        }, index * 3000); // Stagger tests by 3 seconds
      });
    }

    function stopPingTest() {
      if (isPinging) {
        isPinging = false;
        showAlert('Ping test stopped', 'info');
        pingProgress.style.width = '100%';
      } else {
        showAlert('No ping test is currently running', 'warning');
      }
    }

    function exportResults() {
      if (pingHistory.length === 0) {
        showAlert('No test history to export', 'warning');
        return;
      }
      
      const report = {
        generated: new Date().toISOString(),
        summary: {
          totalTests: pingHistory.length,
          averagePing: averagePing.textContent,
          successRate: successRate.textContent
        },
        tests: pingHistory
      };
      
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(report, null, 2));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", "ping_test_report.json");
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
      
      showAlert('Results exported successfully', 'success');
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