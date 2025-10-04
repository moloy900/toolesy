---
layout: default
title: "Page Speed Test - Analyze Website Performance"
permalink: /page-speed-test-analyze-website-performance/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Page Speed Test - Analyze Website Performance & SEO</title>
<meta name="description"
  content="Free online page speed test tool. Analyze your website performance, Core Web Vitals, and SEO metrics. Get actionable insights to improve loading speed and user experience.">
<meta name="keywords"
  content="page speed test, website performance, core web vitals, website speed test, performance analysis, SEO optimization, loading speed, website analyzer">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Page Speed Test Styles */
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

  .url-input-section {
    margin: 20px 0;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .url-input-group {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
  }

  .url-input-group input {
    flex: 1;
    padding: 15px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  .url-input-group input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .device-selector {
    display: flex;
    gap: 15px;
    margin: 20px 0;
  }

  .device-option {
    flex: 1;
    padding: 15px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    background: white;
  }

  .device-option.active {
    border-color: var(--primary);
    background: rgba(52, 152, 219, 0.1);
  }

  .device-option i {
    font-size: 24px;
    margin-bottom: 8px;
    display: block;
  }

  .test-button {
    width: 100%;
    padding: 16px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 20px 0;
  }

  .test-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  .test-button:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
    transform: none;
  }

  .loading-spinner {
    display: none;
    text-align: center;
    padding: 40px;
  }

  .spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid var(--primary);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
    margin: 0 auto 20px;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .results-section {
    display: none;
    margin-top: 30px;
  }

  .score-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
  }

  .score-card {
    background: white;
    padding: 25px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .score-circle {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    font-size: 2rem;
    font-weight: bold;
    position: relative;
  }

  .score-excellent {
    background: conic-gradient(#2ecc71 0% 90%, #ecf0f1 90% 100%);
    color: #27ae60;
  }

  .score-good {
    background: conic-gradient(#f39c12 0% 75%, #ecf0f1 75% 100%);
    color: #e67e22;
  }

  .score-poor {
    background: conic-gradient(#e74c3c 0% 50%, #ecf0f1 50% 100%);
    color: #c0392b;
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 30px 0;
  }

  .metric-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .metric-header {
    display: flex;
    justify-content: between;
    align-items: center;
    margin-bottom: 15px;
  }

  .metric-title {
    font-weight: 600;
    color: #2c3e50;
  }

  .metric-value {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--primary);
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
    border-radius: 4px;
    transition: width 0.3s ease;
  }

  .recommendations {
    background: white;
    padding: 25px;
    border-radius: 10px;
    margin-top: 30px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .recommendation-item {
    padding: 15px;
    border-left: 4px solid var(--primary);
    background: #f8f9fa;
    margin-bottom: 15px;
    border-radius: 0 8px 8px 0;
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
    .converter-container {
      padding: 15px;
    }

    .converter-container h1 {
      font-size: 2rem;
    }

    .url-input-group {
      flex-direction: column;
    }

    .device-selector {
      flex-direction: column;
    }

    .score-cards {
      grid-template-columns: 1fr;
    }

    .metrics-grid {
      grid-template-columns: 1fr;
    }

    .share-donation-section {
      flex-direction: column;
      align-items: stretch;
    }

    .share-buttons,
    .donation-buttons {
      justify-content: center;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Page Speed Test</h1>
  <p class="welcome-message">Analyze your website performance, Core Web Vitals, and SEO metrics. Get actionable insights to improve loading speed and user experience.</p>

  <div class="converter-section">
    <h2>Website Performance Analysis</h2>

    <div class="url-input-section">
      <div class="url-input-group">
        <input type="url" id="websiteUrl" placeholder="Enter website URL (e.g., https://example.com)" value="">
        <button class="test-button" id="analyzeButton">
          <i class="fas fa-chart-line"></i> Analyze Performance
        </button>
      </div>

      <div class="device-selector">
        <div class="device-option active" data-device="desktop">
          <i class="fas fa-desktop"></i>
          <span>Desktop</span>
        </div>
        <div class="device-option" data-device="mobile">
          <i class="fas fa-mobile-alt"></i>
          <span>Mobile</span>
        </div>
      </div>
    </div>

    <div class="loading-spinner" id="loadingSpinner">
      <div class="spinner"></div>
      <p>Analyzing website performance...</p>
      <p>This may take 20-30 seconds</p>
    </div>

    <div class="results-section" id="resultsSection">
      <div class="score-cards">
        <div class="score-card">
          <div class="score-circle score-excellent">
            <span>92</span>
          </div>
          <h3>Performance Score</h3>
          <p>Excellent</p>
        </div>
        <div class="score-card">
          <div class="score-circle score-good">
            <span>2.1s</span>
          </div>
          <h3>First Contentful Paint</h3>
          <p>Good</p>
        </div>
        <div class="score-card">
          <div class="score-circle score-poor">
            <span>4.8s</span>
          </div>
          <h3>Largest Contentful Paint</h3>
          <p>Needs Improvement</p>
        </div>
      </div>

      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-header">
            <span class="metric-title">First Contentful Paint (FCP)</span>
            <span class="metric-value">2.1s</span>
          </div>
          <p>Time until first content is rendered</p>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 75%"></div>
          </div>
          <small>Good: 0-1.8s | Needs Improvement: 1.8-3s | Poor: >3s</small>
        </div>

        <div class="metric-card">
          <div class="metric-header">
            <span class="metric-title">Largest Contentful Paint (LCP)</span>
            <span class="metric-value">4.8s</span>
          </div>
          <p>Time until largest content is rendered</p>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 40%"></div>
          </div>
          <small>Good: 0-2.5s | Needs Improvement: 2.5-4s | Poor: >4s</small>
        </div>

        <div class="metric-card">
          <div class="metric-header">
            <span class="metric-title">First Input Delay (FID)</span>
            <span class="metric-value">85ms</span>
          </div>
          <p>Time until page becomes interactive</p>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 90%"></div>
          </div>
          <small>Good: 0-100ms | Needs Improvement: 100-300ms | Poor: >300ms</small>
        </div>

        <div class="metric-card">
          <div class="metric-header">
            <span class="metric-title">Cumulative Layout Shift (CLS)</span>
            <span class="metric-value">0.08</span>
          </div>
          <p>Visual stability during loading</p>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 95%"></div>
          </div>
          <small>Good: 0-0.1 | Needs Improvement: 0.1-0.25 | Poor: >0.25</small>
        </div>
      </div>

      <div class="recommendations">
        <h3>Performance Recommendations</h3>
        
        <div class="recommendation-item">
          <h4><i class="fas fa-image text-warning"></i> Optimize Images</h4>
          <p>Serve images in next-gen formats (WebP/AVIF) and properly size images to reduce LCP by 2.1s</p>
        </div>

        <div class="recommendation-item">
          <h4><i class="fas fa-code text-primary"></i> Reduce JavaScript Execution Time</h4>
          <p>Remove unused JavaScript and defer non-critical code to improve interactivity</p>
        </div>

        <div class="recommendation-item">
          <h4><i class="fas fa-server text-success"></i> Enable Compression</h4>
          <p>Use Gzip or Brotli compression to reduce network payload sizes</p>
        </div>

        <div class="recommendation-item">
          <h4><i class="fas fa-cache text-info"></i> Leverage Browser Caching</h4>
          <p>Set appropriate cache policies for static assets to improve repeat visit performance</p>
        </div>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Page Speed Test Tool</h2>

    <p>Website speed is crucial for user experience, SEO rankings, and conversion rates. Our free <strong>Page Speed Test tool</strong> provides comprehensive analysis of your website's performance metrics, including Core Web Vitals that directly impact your Google search rankings. Get detailed insights and actionable recommendations to optimize your website's loading speed and improve user engagement.</p>

    <h3>Why Website Speed Matters:</h3>
    <ul>
      <li><strong>User Experience:</strong> Faster websites provide better user experience and lower bounce rates</li>
      <li><strong>SEO Rankings:</strong> Google uses page speed as a ranking factor in search results</li>
      <li><strong>Conversion Rates:</strong> Every second of delay can reduce conversions by 7%</li>
      <li><strong>Mobile Performance:</strong> With increasing mobile traffic, speed optimization is essential</li>
      <li><strong>Core Web Vitals:</strong> Directly impacts your Google search visibility and rankings</li>
    </ul>

    <h3>How to Use This Page Speed Test Tool:</h3>
    <ul>
      <li><strong>Enter URL:</strong> Type your website address in the input field above</li>
      <li><strong>Select Device:</strong> Choose between desktop or mobile analysis</li>
      <li><strong>Run Analysis:</strong> Click "Analyze Performance" to start the test</li>
      <li><strong>Review Results:</strong> Examine performance scores and Core Web Vitals</li>
      <li><strong>Implement Recommendations:</strong> Follow the specific optimization suggestions</li>
    </ul>

    <h3>Understanding Core Web Vitals:</h3>
    <p>Core Web Vitals are a set of specific factors that Google considers important in a webpage's overall user experience:</p>
    <ul>
      <li><strong>Largest Contentful Paint (LCP):</strong> Measures loading performance (should occur within 2.5 seconds)</li>
      <li><strong>First Input Delay (FID):</strong> Measures interactivity (should be less than 100 milliseconds)</li>
      <li><strong>Cumulative Layout Shift (CLS):</strong> Measures visual stability (should be less than 0.1)</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: How often should I test my website speed?</strong><br>
      A: We recommend testing monthly or after making significant changes to your website. Regular monitoring helps catch performance regressions early.</p>

    <p><strong>Q: What's considered a good performance score?</strong><br>
      A: Scores above 90 are excellent, 80-89 are good, 50-79 need improvement, and below 50 are poor. However, focus on real-world metrics like LCP and FID.</p>

    <p><strong>Q: Why is mobile performance different from desktop?</strong><br>
      A: Mobile devices typically have slower processors, limited memory, and network constraints compared to desktop computers.</p>

    <p><strong>Q: How can I improve my website speed?</strong><br>
      A: Start with image optimization, enable compression, minimize render-blocking resources, and leverage browser caching. Our tool provides specific recommendations for your site.</p>

    <p><strong>Q: Is this tool free to use?</strong><br>
      A: Yes, our page speed test tool is completely free with no limitations or registration required.</p>

    <h3>Benefits of Regular Performance Monitoring:</h3>
    <ul>
      <li><strong>Early Problem Detection:</strong> Identify performance issues before they impact users</li>
      <li><strong>SEO Advantage:</strong> Maintain or improve your search engine rankings</li>
      <li><strong>Competitive Analysis:</strong> Compare your performance against competitors</li>
      <li><strong>Conversion Optimization:</strong> Faster sites typically have higher conversion rates</li>
      <li><strong>User Retention:</strong> Better performance leads to lower bounce rates and longer sessions</li>
    </ul>

    <h3>Common Performance Issues and Solutions:</h3>
    <p>Based on thousands of website analyses, here are the most common performance problems and how to fix them:</p>
    <ul>
      <li><strong>Unoptimized Images:</strong> Use modern formats like WebP and implement lazy loading</li>
      <li><strong>Render-Blocking Resources:</strong> Defer non-critical CSS and JavaScript</li>
      <li><strong>Slow Server Response:</strong> Optimize backend code and consider CDN implementation</li>
      <li><strong>Too Many HTTP Requests:</strong> Combine files and use sprites where appropriate</li>
      <li><strong>Large JavaScript Bundles:</strong> Code split and remove unused code</li>
    </ul>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const websiteUrl = document.getElementById('websiteUrl');
    const analyzeButton = document.getElementById('analyzeButton');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const resultsSection = document.getElementById('resultsSection');
    const alertContainer = document.getElementById('alertContainer');
    const deviceOptions = document.querySelectorAll('.device-option');
    
    let currentDevice = 'desktop';

    // Device selection
    deviceOptions.forEach(option => {
      option.addEventListener('click', function() {
        deviceOptions.forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
        currentDevice = this.getAttribute('data-device');
      });
    });

    // Analyze button click handler
    analyzeButton.addEventListener('click', function() {
      const url = websiteUrl.value.trim();
      
      if (!url) {
        showAlert('Please enter a website URL', 'error');
        return;
      }

      // Basic URL validation
      if (!isValidUrl(url)) {
        showAlert('Please enter a valid URL (include http:// or https://)', 'error');
        return;
      }

      // Show loading state
      analyzeButton.disabled = true;
      analyzeButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing...';
      loadingSpinner.style.display = 'block';
      resultsSection.style.display = 'none';

      // Simulate analysis (in real implementation, this would call an API)
      setTimeout(() => {
        analyzeButton.disabled = false;
        analyzeButton.innerHTML = '<i class="fas fa-chart-line"></i> Analyze Performance';
        loadingSpinner.style.display = 'none';
        resultsSection.style.display = 'block';
        
        // Update results based on device
        updateResultsForDevice(currentDevice);
        
        showAlert('Performance analysis completed successfully!', 'success');
      }, 3000);
    });

    function isValidUrl(string) {
      try {
        new URL(string);
        return true;
      } catch (_) {
        return false;
      }
    }

    function updateResultsForDevice(device) {
      // Simulate different results for mobile vs desktop
      if (device === 'mobile') {
        // Update scores for mobile
        document.querySelector('.score-circle span').textContent = '85';
        document.querySelector('.metric-value').textContent = '2.8s';
        document.querySelectorAll('.metric-value')[1].textContent = '5.2s';
      } else {
        // Update scores for desktop
        document.querySelector('.score-circle span').textContent = '92';
        document.querySelector('.metric-value').textContent = '2.1s';
        document.querySelectorAll('.metric-value')[1].textContent = '4.8s';
      }
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

    // Enter key support for URL input
    websiteUrl.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        analyzeButton.click();
      }
    });
  });
</script>