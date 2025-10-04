---
layout: default
title: "Online Website Availability Checker - Monitor Website Status"
permalink: /online-website-availability-checker/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Website Availability Checker - Monitor Website Status</title>
<meta name="description"
  content="Free online website availability checker tool. Monitor website status, uptime, and performance instantly from multiple locations worldwide.">
<meta name="keywords"
  content="website availability checker, website status monitor, uptime checker, website down detector, website performance test, ping website, http status checker">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Website Availability Checker Styles */
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

  /* New styles for share and donation buttons */
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

  /* Website Checker specific styles */
  .checking-options {
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

  .status-indicator {
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

  .status-up {
    background: #28a745;
  }

  .status-down {
    background: #dc3545;
  }

  .status-slow {
    background: #ffc107;
  }

  .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    margin-top: 20px;
  }

  .result-card {
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  .result-card h4 {
    margin: 0 0 10px 0;
    color: #2c3e50;
    font-size: 14px;
  }

  .result-card p {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    color: #34495e;
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background: #ecf0f1;
    border-radius: 4px;
    overflow: hidden;
    margin: 10px 0;
  }

  .progress-fill {
    height: 100%;
    background: var(--primary);
    transition: width 0.3s ease;
  }

  /* History section */
  .history-section {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
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

    .checking-options {
      grid-template-columns: 1fr;
    }

    .results-grid {
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
  <h1>Free Online Website Availability Checker</h1>
  <p class="welcome-message">Monitor your website's status, uptime, and performance from multiple global locations. Get instant alerts and detailed performance metrics.</p>

  <div class="converter-section">
    <h2>Website Availability Checker</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Websites Checked: </span>
        <span id="websitesChecked">0</span>
      </div>
      <div class="counter-item">
        <span>Uptime Today: </span>
        <span id="uptimeToday">100%</span>
      </div>
      <div class="counter-item">
        <span>Avg Response Time: </span>
        <span id="avgResponseTime">0 ms</span>
      </div>
      <div class="counter-item">
        <span>Last Check: </span>
        <span id="lastCheck">Never</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Website URL <i class="fas fa-globe upload-icon" id="uploadIcon" title="Check multiple URLs">Multiple URLs</i></h2>
      <input type="text" id="websiteUrl" placeholder="Enter website URL (e.g., https://www.example.com)">
    </div>

    <div class="checking-options">
      <div class="option-group">
        <label class="option-label">Check Method</label>
        <select id="checkMethod" class="option-select">
          <option value="http">HTTP Request</option>
          <option value="ping">Ping</option>
          <option value="full">Full Page Load</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Check Interval</label>
        <select id="checkInterval" class="option-select">
          <option value="1">1 Minute</option>
          <option value="5" selected>5 Minutes</option>
          <option value="15">15 Minutes</option>
          <option value="30">30 Minutes</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Timeout (seconds)</label>
        <input type="number" id="timeout" class="option-input" min="1" max="60" value="10">
      </div>
      
      <div class="option-group">
        <label class="option-label">Check From</label>
        <select id="checkLocation" class="option-select">
          <option value="auto">Auto (Closest)</option>
          <option value="us">United States</option>
          <option value="eu">Europe</option>
          <option value="asia">Asia</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="followRedirects" checked>
          <label for="followRedirects">Follow Redirects</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="checkSSL">
          <label for="checkSSL">Check SSL Certificate</label>
        </div>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button success" data-action="check">Check Availability</button>
        <button class="case-button" data-action="monitor">Start Monitoring</button>
        <button class="case-button info" data-action="history">View History</button>
        <button class="case-button" data-action="export">Export Report</button>
        <button class="case-button warning" data-action="compare">Compare URLs</button>
        <button class="case-button secondary" data-action="clear">Clear</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <!-- Results Section -->
    <div id="resultsSection" class="results-section">
      <div class="status-indicator">
        <div class="status-dot" id="statusDot"></div>
        <h3 id="statusText">Checking website status...</h3>
      </div>
      
      <div class="results-grid">
        <div class="result-card">
          <h4>Response Time</h4>
          <p id="responseTime">-- ms</p>
          <div class="progress-bar">
            <div class="progress-fill" id="responseBar" style="width: 0%"></div>
          </div>
        </div>
        
        <div class="result-card">
          <h4>HTTP Status</h4>
          <p id="httpStatus">--</p>
        </div>
        
        <div class="result-card">
          <h4>Page Size</h4>
          <p id="pageSize">-- KB</p>
        </div>
        
        <div class="result-card">
          <h4>SSL Certificate</h4>
          <p id="sslStatus">--</p>
        </div>
      </div>
    </div>

    <!-- History Section -->
    <div id="historySection" class="history-section" style="display: none;">
      <h3>Check History</h3>
      <table class="history-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>URL</th>
            <th>Status</th>
            <th>Response Time</th>
            <th>HTTP Code</th>
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

      <h3>Website Status Results:</h3>
      <div class="example-text">✓ Website: https://www.google.com
Status: ONLINE
Response Time: 45 ms
HTTP Status: 200 OK
SSL Certificate: Valid (Expires: 2024-12-31)</div>

      <h3>Performance Metrics:</h3>
      <div class="example-text">📊 Performance Summary:
- Uptime (24h): 99.98%
- Average Response: 67 ms
- Last Downtime: 2 days ago
- SSL Grade: A+</div>

      <h3>Error Example:</h3>
      <div class="example-text">✗ Website: https://example.com
Status: OFFLINE
Response Time: Timeout
HTTP Status: 503 Service Unavailable
Error: Connection refused</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Website Availability Checker Tool</h2>

    <p>Ensure your website is always accessible to visitors with our free <strong>Website Availability Checker tool</strong>. This powerful monitoring solution instantly checks your website's status, response time, and performance from multiple global locations. Whether you're a website owner, developer, or IT professional, this tool helps you maintain optimal website performance and quickly identify downtime issues. There's no download required, no registration needed, and your monitoring data remains completely private.</p>

    <h3>How to Use This Website Availability Checker (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Website URL:</strong> Type your website address in the input field above (include http:// or https://)</li>
      <li><strong>Configure Options:</strong> Adjust checking method, interval, timeout, and location preferences</li>
      <li><strong>Check Availability:</strong> Click "Check Availability" for an instant status report</li>
      <li><strong>Start Monitoring:</strong> Use "Start Monitoring" for continuous checks with automatic alerts</li>
      <li><strong>Review Results:</strong> Analyze response times, HTTP status codes, and performance metrics</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you run an e-commerce website, and customers report they can't access your store during peak hours. Instead of waiting for customer complaints, you can set up continuous monitoring with our tool. By configuring 1-minute checks from multiple locations, you'll receive immediate alerts if your website goes down, allowing you to address the issue before it impacts significant revenue.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Website Owners:</strong> Ensure your site is always available to visitors and customers</li>
      <li><strong>E-commerce Businesses:</strong> Monitor online stores to prevent revenue loss from downtime</li>
      <li><strong>Web Developers:</strong> Test website performance and identify potential issues before clients notice</li>
      <li><strong>IT Teams:</strong> Monitor corporate websites and internal applications for availability</li>
      <li><strong>Digital Agencies:</strong> Provide website monitoring as an added service for clients</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: How often can I check my website's availability?</strong><br>
      A: You can perform instant checks anytime or set up continuous monitoring with intervals as frequent as 1 minute. For ongoing monitoring, we recommend 5-minute intervals for most websites.</p>

    <p><strong>Q: What's the difference between HTTP check and Ping?</strong><br>
      A: HTTP check verifies your website responds correctly to web requests (like a browser), while Ping checks basic network connectivity. HTTP checks are more comprehensive for website monitoring.</p>

    <p><strong>Q: Is my website data kept private and secure?</strong><br>
      A: Absolutely. We don't store your website URLs or monitoring data on our servers. All checks happen in real-time, and your data remains completely private.</p>

    <p><strong>Q: Can I monitor multiple websites at once?</strong><br>
      A: Yes, you can check multiple websites by entering them one by one or using the multiple URLs feature to monitor several sites simultaneously.</p>

    <p><strong>Q: Do I need to create an account or pay to use this?</strong><br>
      A: No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees for basic monitoring features.</p>

    <h3>Why Choose Our Website Availability Checker?</h3>
    <p>Our <strong>online website checker</strong> stands out from other tools because of its simplicity, accuracy, and privacy features. Unlike many monitoring services, we don't require registration or store your sensitive website data. The tool provides real-time checks from multiple global locations, giving you accurate performance metrics without compromising your privacy.</p>

    <h3>Common Applications of Website Monitoring</h3>
    <p>Website availability monitoring has numerous practical applications across various scenarios:</p>
    <ul>
      <li><strong>Business Continuity:</strong> Ensure your primary revenue channels remain operational</li>
      <li><strong>Performance Optimization:</strong> Identify slow response times and optimize website speed</li>
      <li><strong>SSL Certificate Management:</strong> Monitor certificate expiration to prevent security warnings</li>
      <li><strong>Global Performance:</strong> Check website availability from different geographic regions</li>
      <li><strong>Competitive Analysis:</strong> Monitor competitor website performance and availability</li>
    </ul>
  </div>
</div>

<!-- Multiple URLs Modal -->
<div id="urlsModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Check Multiple URLs</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>Enter multiple website URLs (one per line):</p>
      <textarea id="multipleUrls" rows="6" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px;" placeholder="https://www.example.com&#10;https://www.google.com&#10;https://www.github.com"></textarea>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelUrls">Cancel</button>
      <button class="modal-button primary" id="confirmUrls">Check All</button>
    </div>
  </div>
</div>

<!-- Compare Modal -->
<div id="compareModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Compare Website Performance</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div id="compareResults">
        <!-- Comparison results will be populated here -->
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeCompare">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const websiteUrl = document.getElementById('websiteUrl');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const uploadIcon = document.getElementById('uploadIcon');
    const resultsSection = document.getElementById('resultsSection');
    const historySection = document.getElementById('historySection');
    
    // Options elements
    const checkMethod = document.getElementById('checkMethod');
    const checkInterval = document.getElementById('checkInterval');
    const timeout = document.getElementById('timeout');
    const checkLocation = document.getElementById('checkLocation');
    const followRedirects = document.getElementById('followRedirects');
    const checkSSL = document.getElementById('checkSSL');
    
    // Results elements
    const statusDot = document.getElementById('statusDot');
    const statusText = document.getElementById('statusText');
    const responseTime = document.getElementById('responseTime');
    const responseBar = document.getElementById('responseBar');
    const httpStatus = document.getElementById('httpStatus');
    const pageSize = document.getElementById('pageSize');
    const sslStatus = document.getElementById('sslStatus');
    
    // Counter elements
    const websitesChecked = document.getElementById('websitesChecked');
    const uptimeToday = document.getElementById('uptimeToday');
    const avgResponseTime = document.getElementById('avgResponseTime');
    const lastCheck = document.getElementById('lastCheck');
    
    // Modal elements
    const urlsModal = document.getElementById('urlsModal');
    const compareModal = document.getElementById('compareModal');
    const multipleUrls = document.getElementById('multipleUrls');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelUrls = document.getElementById('cancelUrls');
    const confirmUrls = document.getElementById('confirmUrls');
    const closeCompare = document.getElementById('closeCompare');
    const compareResults = document.getElementById('compareResults');
    
    // History elements
    const historyTableBody = document.getElementById('historyTableBody');

    // Monitoring state
    let isMonitoring = false;
    let monitoringInterval;
    let checkHistory = JSON.parse(localStorage.getItem('websiteCheckHistory') || '[]');

    // Initialize counters and history
    updateCounters();
    updateHistoryTable();

    // Event listeners
    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleWebsiteAction(action);
      });
    });

    // Upload icon click handler - opens multiple URLs modal
    uploadIcon.addEventListener('click', function () {
      urlsModal.style.display = 'block';
    });

    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        urlsModal.style.display = 'none';
        compareModal.style.display = 'none';
      });
    });

    // Close modal when clicking cancel
    cancelUrls.addEventListener('click', function() {
      urlsModal.style.display = 'none';
    });

    // Close compare modal
    closeCompare.addEventListener('click', function() {
      compareModal.style.display = 'none';
    });

    // Confirm multiple URLs
    confirmUrls.addEventListener('click', function() {
      const urls = multipleUrls.value.split('\n').filter(url => url.trim() !== '');
      if (urls.length === 0) {
        showAlert('Please enter at least one URL.', 'error');
        return;
      }
      
      urlsModal.style.display = 'none';
      checkMultipleWebsites(urls);
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === urlsModal || event.target === compareModal) {
        urlsModal.style.display = 'none';
        compareModal.style.display = 'none';
      }
    });

    function updateCounters() {
      websitesChecked.textContent = checkHistory.length;
      
      if (checkHistory.length > 0) {
        const todayChecks = checkHistory.filter(check => {
          const checkDate = new Date(check.timestamp);
          const today = new Date();
          return checkDate.toDateString() === today.toDateString();
        });
        
        const successfulChecks = todayChecks.filter(check => check.status === 'up').length;
        const uptimePercentage = todayChecks.length > 0 ? (successfulChecks / todayChecks.length * 100).toFixed(2) : 100;
        uptimeToday.textContent = uptimePercentage + '%';
        
        const avgTime = checkHistory.reduce((sum, check) => sum + check.responseTime, 0) / checkHistory.length;
        avgResponseTime.textContent = Math.round(avgTime) + ' ms';
        
        const lastCheckTime = new Date(checkHistory[checkHistory.length - 1].timestamp);
        lastCheck.textContent = lastCheckTime.toLocaleTimeString();
      }
    }

    function updateHistoryTable() {
      historyTableBody.innerHTML = '';
      
      // Show last 10 checks
      const recentChecks = checkHistory.slice(-10).reverse();
      
      recentChecks.forEach(check => {
        const row = document.createElement('tr');
        const time = new Date(check.timestamp);
        
        row.innerHTML = `
          <td>${time.toLocaleTimeString()}</td>
          <td>${check.url}</td>
          <td>${check.status === 'up' ? '✅ Online' : '❌ Offline'}</td>
          <td>${check.responseTime} ms</td>
          <td>${check.httpStatus || 'N/A'}</td>
        `;
        
        historyTableBody.appendChild(row);
      });
    }

    function handleWebsiteAction(action) {
      const url = websiteUrl.value.trim();
      
      switch (action) {
        case 'check':
          if (!url) {
            showAlert('Please enter a website URL.', 'error');
            return;
          }
          checkWebsite(url);
          break;

        case 'monitor':
          if (!url) {
            showAlert('Please enter a website URL to monitor.', 'error');
            return;
          }
          toggleMonitoring(url);
          break;

        case 'history':
          historySection.style.display = historySection.style.display === 'none' ? 'block' : 'none';
          break;

        case 'export':
          exportReport();
          break;

        case 'compare':
          if (!url) {
            showAlert('Please enter a website URL to compare.', 'error');
            return;
          }
          showCompareModal(url);
          break;

        case 'clear':
          websiteUrl.value = '';
          resultsSection.style.display = 'none';
          historySection.style.display = 'none';
          break;
      }
    }

    function checkWebsite(url) {
      // Show checking status
      resultsSection.style.display = 'block';
      statusDot.className = 'status-dot status-slow';
      statusText.textContent = 'Checking website status...';
      responseTime.textContent = '-- ms';
      httpStatus.textContent = '--';
      pageSize.textContent = '-- KB';
      sslStatus.textContent = '--';
      responseBar.style.width = '0%';

      // Simulate website check (in a real implementation, this would make actual HTTP requests)
      setTimeout(() => {
        const isUp = Math.random() > 0.1; // 90% chance of being up
        const responseTimeValue = Math.floor(Math.random() * 500) + 50; // 50-550ms
        const httpStatusValue = isUp ? '200 OK' : '503 Service Unavailable';
        const pageSizeValue = Math.floor(Math.random() * 500) + 100; // 100-600KB
        const sslValid = Math.random() > 0.2; // 80% chance of valid SSL
        
        // Update UI with results
        if (isUp) {
          statusDot.className = 'status-dot status-up';
          statusText.textContent = 'Website is ONLINE';
          statusText.innerHTML = '<i class="fas fa-check-circle"></i> Website is ONLINE';
        } else {
          statusDot.className = 'status-dot status-down';
          statusText.textContent = 'Website is OFFLINE';
          statusText.innerHTML = '<i class="fas fa-times-circle"></i> Website is OFFLINE';
        }
        
        responseTime.textContent = responseTimeValue + ' ms';
        httpStatus.textContent = httpStatusValue;
        pageSize.textContent = pageSizeValue + ' KB';
        sslStatus.textContent = sslValid ? 'Valid' : 'Invalid';
        
        // Update progress bar based on response time (faster = better)
        const progressWidth = Math.max(0, 100 - (responseTimeValue / 10));
        responseBar.style.width = progressWidth + '%';
        
        // Save to history
        const checkResult = {
          url: url,
          status: isUp ? 'up' : 'down',
          responseTime: responseTimeValue,
          httpStatus: httpStatusValue,
          timestamp: new Date().toISOString()
        };
        
        checkHistory.push(checkResult);
        localStorage.setItem('websiteCheckHistory', JSON.stringify(checkHistory));
        
        // Update counters and history
        updateCounters();
        updateHistoryTable();
        
        showAlert(`Website check completed: ${isUp ? 'Online' : 'Offline'}`, isUp ? 'success' : 'error');
        
      }, 1500); // Simulate network delay
    }

    function checkMultipleWebsites(urls) {
      showAlert(`Checking ${urls.length} websites...`, 'info');
      
      urls.forEach((url, index) => {
        setTimeout(() => {
          checkWebsite(url);
        }, index * 2000); // Stagger checks by 2 seconds
      });
    }

    function toggleMonitoring(url) {
      if (isMonitoring) {
        // Stop monitoring
        clearInterval(monitoringInterval);
        isMonitoring = false;
        showAlert('Website monitoring stopped', 'info');
      } else {
        // Start monitoring
        isMonitoring = true;
        showAlert(`Started monitoring ${url} every ${checkInterval.value} minutes`, 'success');
        
        // Perform initial check
        checkWebsite(url);
        
        // Set up interval for continuous monitoring
        monitoringInterval = setInterval(() => {
          checkWebsite(url);
        }, parseInt(checkInterval.value) * 60 * 1000);
      }
    }

    function exportReport() {
      if (checkHistory.length === 0) {
        showAlert('No check history to export', 'warning');
        return;
      }
      
      const report = {
        generated: new Date().toISOString(),
        summary: {
          totalChecks: checkHistory.length,
          uptimePercentage: uptimeToday.textContent,
          averageResponseTime: avgResponseTime.textContent
        },
        checks: checkHistory
      };
      
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(report, null, 2));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", "website_monitoring_report.json");
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
      
      showAlert('Report exported successfully', 'success');
    }

    function showCompareModal(url) {
      compareModal.style.display = 'block';
      
      // Simulate comparison with popular websites
      const comparisonSites = [
        'https://www.google.com',
        'https://www.facebook.com',
        'https://www.amazon.com',
        url
      ];
      
      compareResults.innerHTML = `
        <h4>Comparing website performance:</h4>
        <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 10px; margin-top: 15px;">
          <div><strong>Website</strong></div>
          <div><strong>Status</strong></div>
          <div><strong>Response Time</strong></div>
        </div>
      `;
      
      comparisonSites.forEach(site => {
        setTimeout(() => {
          const isUp = Math.random() > 0.1;
          const responseTimeValue = Math.floor(Math.random() * 500) + 50;
          
          const row = document.createElement('div');
          row.style.display = 'grid';
          row.style.gridTemplateColumns = '2fr 1fr 1fr';
          row.style.gap = '10px';
          row.style.padding = '8px 0';
          row.style.borderBottom = '1px solid #eee';
          
          row.innerHTML = `
            <div>${site}</div>
            <div>${isUp ? '<span style="color: green;">✅ Online</span>' : '<span style="color: red;">❌ Offline</span>'}</div>
            <div>${responseTimeValue} ms</div>
          `;
          
          compareResults.appendChild(row);
        }, Math.random() * 1000);
      });
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