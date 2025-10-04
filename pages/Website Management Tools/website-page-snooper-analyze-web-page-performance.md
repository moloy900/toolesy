---
layout: default
title: "Website Page Snooper - Analyze Web Page Performance"
permalink: /website-page-snooper-analyze-web-page-performance/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Website Page Snooper - Analyze Web Page Performance & SEO</title>
<meta name="description"
  content="Free online website page snooper tool. Analyze web page performance, SEO metrics, and technical details using Google PageSpeed Insights API.">
<meta name="keywords"
  content="page snooper, website analyzer, page speed test, performance analysis, SEO checker, web page insights, google pagespeed, website audit">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Page Snooper Styles */
  .snooper-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .snooper-container h1 {
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

  .snooper-section {
    margin-bottom: 40px;
    padding: 25px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .snooper-section h2 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .input-section {
    margin: 20px 0;
  }

  .url-input-group {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }

  .url-input-group input {
    flex: 1;
    padding: 15px;
    border: 2px solid #e0e6ed;
    border-radius: 10px;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  .url-input-group input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .analyze-button {
    padding: 15px 30px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .analyze-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .analyze-button:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
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
    animation: spin 2s linear infinite;
    margin: 0 auto;
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
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border-top: 5px solid var(--primary);
  }

  .score-value {
    font-size: 3rem;
    font-weight: bold;
    margin: 15px 0;
  }

  .score-good {
    color: #27ae60;
  }

  .score-average {
    color: #f39c12;
  }

  .score-poor {
    color: #e74c3c;
  }

  .score-label {
    font-size: 1.1rem;
    color: #7f8c8d;
    font-weight: 600;
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
  }

  .metric-card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  }

  .metric-card h3 {
    color: #2c3e50;
    margin-bottom: 15px;
    font-size: 1.2rem;
    border-bottom: 1px solid #ecf0f1;
    padding-bottom: 10px;
  }

  .metric-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #f8f9fa;
  }

  .metric-item:last-child {
    border-bottom: none;
  }

  .metric-name {
    color: #34495e;
    font-weight: 500;
  }

  .metric-value {
    color: #2c3e50;
    font-weight: 600;
  }

  .suggestions-section {
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    margin-bottom: 30px;
  }

  .suggestion-item {
    padding: 15px;
    margin: 10px 0;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid #e74c3c;
  }

  .suggestion-item.good {
    border-left-color: #27ae60;
  }

  .suggestion-item.warning {
    border-left-color: #f39c12;
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

  .share-section {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 30px 0;
    flex-wrap: wrap;
  }

  .share-button {
    padding: 12px 20px;
    border-radius: 8px;
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

  .facebook {
    background: #3b5998;
  }

  .twitter {
    background: #1da1f2;
  }

  .linkedin {
    background: #0077b5;
  }

  .share-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
    .snooper-container {
      padding: 15px;
    }

    .snooper-container h1 {
      font-size: 2rem;
    }

    .snooper-section {
      padding: 20px;
      margin-bottom: 30px;
    }

    .url-input-group {
      flex-direction: column;
    }

    .analyze-button {
      width: 100%;
      justify-content: center;
    }

    .score-cards {
      grid-template-columns: 1fr;
    }

    .metrics-grid {
      grid-template-columns: 1fr;
    }

    .score-value {
      font-size: 2.5rem;
    }
  }
</style>

<div class="snooper-container">
  <h1>Free Website Page Snooper</h1>
  <p class="welcome-message">Analyze web page performance, SEO metrics, and technical details using Google PageSpeed Insights API. Get comprehensive insights to optimize your website.</p>

  <div class="snooper-section">
    <h2>Page Performance Analyzer</h2>

    <div class="input-section">
      <div class="url-input-group">
        <input type="url" id="pageUrl" placeholder="Enter website URL (e.g., https://example.com)" required>
        <button class="analyze-button" id="analyzeBtn">
          <i class="fas fa-search"></i> Analyze Page
        </button>
      </div>
    </div>

    <div class="loading-spinner" id="loadingSpinner">
      <div class="spinner"></div>
      <p>Analyzing page performance... This may take a few seconds.</p>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="results-section" id="resultsSection">
      <div class="score-cards">
        <div class="score-card">
          <div class="score-label">Performance Score</div>
          <div class="score-value" id="performanceScore">0</div>
          <div class="score-rating" id="performanceRating">Loading...</div>
        </div>
        <div class="score-card">
          <div class="score-label">Accessibility</div>
          <div class="score-value" id="accessibilityScore">0</div>
          <div class="score-rating" id="accessibilityRating">Loading...</div>
        </div>
        <div class="score-card">
          <div class="score-label">Best Practices</div>
          <div class="score-value" id="bestPracticesScore">0</div>
          <div class="score-rating" id="bestPracticesRating">Loading...</div>
        </div>
        <div class="score-card">
          <div class="score-label">SEO Score</div>
          <div class="score-value" id="seoScore">0</div>
          <div class="score-rating" id="seoRating">Loading...</div>
        </div>
      </div>

      <div class="metrics-grid">
        <div class="metric-card">
          <h3>Core Web Vitals</h3>
          <div class="metric-item">
            <span class="metric-name">Largest Contentful Paint</span>
            <span class="metric-value" id="lcpMetric">-</span>
          </div>
          <div class="metric-item">
            <span class="metric-name">First Input Delay</span>
            <span class="metric-value" id="fidMetric">-</span>
          </div>
          <div class="metric-item">
            <span class="metric-name">Cumulative Layout Shift</span>
            <span class="metric-value" id="clsMetric">-</span>
          </div>
          <div class="metric-item">
            <span class="metric-name">First Contentful Paint</span>
            <span class="metric-value" id="fcpMetric">-</span>
          </div>
        </div>

        <div class="metric-card">
          <h3>Page Statistics</h3>
          <div class="metric-item">
            <span class="metric-name">Total Blocking Time</span>
            <span class="metric-value" id="tbtMetric">-</span>
          </div>
          <div class="metric-item">
            <span class="metric-name">Speed Index</span>
            <span class="metric-value" id="speedIndexMetric">-</span>
          </div>
          <div class="metric-item">
            <span class="metric-name">Time to Interactive</span>
            <span class="metric-value" id="ttiMetric">-</span>
          </div>
          <div class="metric-item">
            <span class="metric-name">Server Response Time</span>
            <span class="metric-value" id="serverResponseMetric">-</span>
          </div>
        </div>

        <div class="metric-card">
          <h3>Resource Analysis</h3>
          <div class="metric-item">
            <span class="metric-name">Total Byte Weight</span>
            <span class="metric-value" id="totalBytesMetric">-</span>
          </div>
          <div class="metric-item">
            <span class="metric-name">Image Optimization</span>
            <span class="metric-value" id="imageOptimizationMetric">-</span>
          </div>
          <div class="metric-item">
            <span class="metric-name">CSS Delivery</span>
            <span class="metric-value" id="cssDeliveryMetric">-</span>
          </div>
          <div class="metric-item">
            <span class="metric-name">JavaScript Execution</span>
            <span class="metric-value" id="jsExecutionMetric">-</span>
          </div>
        </div>
      </div>

      <div class="suggestions-section">
        <h3>Optimization Suggestions</h3>
        <div id="suggestionsList">
          <div class="suggestion-item">
            <strong>Analyze a website to get personalized optimization suggestions</strong>
            <p>Enter a URL above and click "Analyze Page" to receive specific recommendations for improving performance, accessibility, and SEO.</p>
          </div>
        </div>
      </div>

      <div class="share-section">
        <button class="share-button twitter" id="shareTwitter">
          <i class="fab fa-twitter"></i> Share on Twitter
        </button>
        <button class="share-button linkedin" id="shareLinkedIn">
          <i class="fab fa-linkedin"></i> Share on LinkedIn
        </button>
        <button class="share-button facebook" id="shareFacebook">
          <i class="fab fa-facebook"></i> Share on Facebook
        </button>
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Website Page Snooper & Performance Analyzer</h2>

    <p>Our <strong>Website Page Snooper tool</strong> provides comprehensive analysis of web page performance using Google's PageSpeed Insights API. Get detailed metrics on loading speed, Core Web Vitals, accessibility, SEO, and best practices. This powerful tool helps developers, website owners, and SEO specialists identify performance bottlenecks and optimization opportunities.</p>

    <h3>How to Use This Page Snooper (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter URL:</strong> Type or paste the complete website URL (including https://) in the input field above</li>
      <li><strong>Analyze:</strong> Click the "Analyze Page" button to start the performance analysis</li>
      <li><strong>Review Scores:</strong> Check the performance, accessibility, best practices, and SEO scores</li>
      <li><strong>Analyze Metrics:</strong> Examine detailed Core Web Vitals and performance metrics</li>
      <li><strong>Implement Suggestions:</strong> Follow the optimization recommendations to improve your website</li>
    </ul>

    <h3>Key Metrics Explained:</h3>
    <ul>
      <li><strong>Performance Score:</strong> Overall loading performance (0-100 scale)</li>
      <li><strong>Largest Contentful Paint (LCP):</strong> Measures loading performance (should be under 2.5 seconds)</li>
      <li><strong>First Input Delay (FID):</strong> Measures interactivity (should be under 100 milliseconds)</li>
      <li><strong>Cumulative Layout Shift (CLS):</strong> Measures visual stability (should be under 0.1)</li>
      <li><strong>Accessibility Score:</strong> How accessible the website is for users with disabilities</li>
      <li><strong>SEO Score:</strong> How well the page is optimized for search engines</li>
    </ul>

    <h3>Who Should Use This Tool?</h3>
    <ul>
      <li><strong>Web Developers:</strong> Identify and fix performance issues in web applications</li>
      <li><strong>SEO Specialists:</strong> Optimize page speed for better search engine rankings</li>
      <li><strong>Website Owners:</strong> Monitor and improve user experience on your site</li>
      <li><strong>Digital Marketers:</strong> Ensure landing pages load quickly for better conversion rates</li>
      <li><strong>UX Designers:</strong> Create faster, more responsive user experiences</li>
    </ul>

    <h3>Why Page Speed Matters:</h3>
    <p>Page loading speed directly impacts user experience, conversion rates, and search engine rankings. According to Google research, as page load time goes from 1 second to 3 seconds, the probability of bounce increases by 32%. Our Page Snooper tool helps you identify exactly what's slowing down your website and provides actionable recommendations for improvement.</p>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: How accurate are the performance scores?</strong><br>
      A: The scores are generated by Google's PageSpeed Insights API, which uses real-world data and lab data to provide comprehensive performance analysis.</p>

    <p><strong>Q: Is there a limit to how many pages I can analyze?</strong><br>
      A: You can analyze multiple pages, but please be reasonable with usage to ensure the tool remains free for everyone.</p>

    <p><strong>Q: Do I need to install anything to use this tool?</strong><br>
      A: No, this is a completely web-based tool. Just visit the page and start analyzing websites.</p>

    <p><strong>Q: Can I analyze password-protected pages?</strong><br>
      A: No, the tool can only analyze publicly accessible web pages.</p>

    <p><strong>Q: How often should I check my website's performance?</strong><br>
      A: We recommend monthly checks for most websites, or after making significant changes to your site.</p>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const pageUrlInput = document.getElementById('pageUrl');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const resultsSection = document.getElementById('resultsSection');
    const alertContainer = document.getElementById('alertContainer');
    
    // API Configuration
    const apiKey = 'AIzaSyAh1Za8vzs18bYYbWB1WMBSw-hhWnBIw7U';
    const apiUrl = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

    // Event listeners
    analyzeBtn.addEventListener('click', analyzePage);
    pageUrlInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        analyzePage();
      }
    });

    // Share buttons
    document.getElementById('shareTwitter').addEventListener('click', shareOnTwitter);
    document.getElementById('shareLinkedIn').addEventListener('click', shareOnLinkedIn);
    document.getElementById('shareFacebook').addEventListener('click', shareOnFacebook);

    async function analyzePage() {
      const url = pageUrlInput.value.trim();
      
      if (!url) {
        showAlert('Please enter a valid URL', 'error');
        return;
      }

      // Validate URL format
      if (!isValidUrl(url)) {
        showAlert('Please enter a valid URL including http:// or https://', 'error');
        return;
      }

      // Show loading state
      analyzeBtn.disabled = true;
      analyzeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing...';
      loadingSpinner.style.display = 'block';
      resultsSection.style.display = 'none';

      try {
        const analysisResult = await fetchPageSpeedData(url);
        displayResults(analysisResult);
        showAlert('Page analysis completed successfully!', 'success');
      } catch (error) {
        console.error('Analysis error:', error);
        showAlert('Failed to analyze page: ' + error.message, 'error');
      } finally {
        // Reset loading state
        analyzeBtn.disabled = false;
        analyzeBtn.innerHTML = '<i class="fas fa-search"></i> Analyze Page';
        loadingSpinner.style.display = 'none';
      }
    }

    async function fetchPageSpeedData(url) {
      const apiUrlWithParams = `${apiUrl}?url=${encodeURIComponent(url)}&key=${apiKey}`;
      
      const response = await fetch(apiUrlWithParams);
      
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      
      return await response.json();
    }

    function displayResults(data) {
      if (!data.lighthouseResult) {
        throw new Error('No lighthouse results found in API response');
      }

      const categories = data.lighthouseResult.categories;
      const audits = data.lighthouseResult.audits;

      // Update scores
      updateScore('performance', categories.performance);
      updateScore('accessibility', categories.accessibility);
      updateScore('bestPractices', categories['best-practices']);
      updateScore('seo', categories.seo);

      // Update Core Web Vitals
      updateMetric('lcp', audits['largest-contentful-paint']);
      updateMetric('fid', audits['max-potential-fid']);
      updateMetric('cls', audits['cumulative-layout-shift']);
      updateMetric('fcp', audits['first-contentful-paint']);
      updateMetric('tbt', audits['total-blocking-time']);
      updateMetric('speedIndex', audits['speed-index']);
      updateMetric('tti', audits['interactive']);
      updateMetric('serverResponse', audits['server-response-time']);

      // Update resource metrics
      updateResourceMetrics(audits);

      // Generate suggestions
      generateSuggestions(audits, categories);

      // Show results section
      resultsSection.style.display = 'block';
    }

    function updateScore(type, category) {
      if (!category) return;

      const score = Math.round(category.score * 100);
      const scoreElement = document.getElementById(`${type}Score`);
      const ratingElement = document.getElementById(`${type}Rating`);

      scoreElement.textContent = score;
      scoreElement.className = 'score-value ' + getScoreClass(score);

      ratingElement.textContent = getScoreRating(score);
    }

    function updateMetric(metricId, audit) {
      if (!audit) return;

      const metricElement = document.getElementById(`${metricId}Metric`);
      if (audit.displayValue) {
        metricElement.textContent = audit.displayValue;
      } else if (audit.numericValue) {
        metricElement.textContent = formatNumericValue(audit.numericValue, metricId);
      } else {
        metricElement.textContent = 'N/A';
      }
    }

    function updateResourceMetrics(audits) {
      // Total byte weight
      const totalBytes = audits['total-byte-weight'];
      if (totalBytes && totalBytes.numericValue) {
        document.getElementById('totalBytesMetric').textContent = formatBytes(totalBytes.numericValue);
      }

      // Image optimization
      const imageAudit = audits['uses-optimized-images'];
      document.getElementById('imageOptimizationMetric').textContent = 
        imageAudit && imageAudit.score === 1 ? 'Optimized' : 'Needs Optimization';

      // CSS delivery
      const cssAudit = audits['unused-css-rules'];
      document.getElementById('cssDeliveryMetric').textContent = 
        cssAudit && cssAudit.score === 1 ? 'Efficient' : 'Could Improve';

      // JavaScript execution
      const jsAudit = audits['unused-javascript'];
      document.getElementById('jsExecutionMetric').textContent = 
        jsAudit && jsAudit.score === 1 ? 'Efficient' : 'Could Improve';
    }

    function generateSuggestions(audits, categories) {
      const suggestionsList = document.getElementById('suggestionsList');
      suggestionsList.innerHTML = '';

      const suggestions = [];

      // Performance suggestions
      if (categories.performance && categories.performance.score < 0.9) {
        suggestions.push({
          title: 'Improve Performance Score',
          description: 'Your performance score could be improved. Focus on optimizing images, reducing JavaScript execution time, and minimizing render-blocking resources.',
          type: 'warning'
        });
      }

      // Specific audit-based suggestions
      const criticalAudits = [
        { id: 'largest-contentful-paint', title: 'Optimize Largest Contentful Paint' },
        { id: 'cumulative-layout-shift', title: 'Reduce Layout Shifts' },
        { id: 'first-contentful-paint', title: 'Improve First Contentful Paint' },
        { id: 'total-blocking-time', title: 'Reduce Total Blocking Time' }
      ];

      criticalAudits.forEach(audit => {
        if (audits[audit.id] && audits[audit.id].score < 0.9) {
          suggestions.push({
            title: audit.title,
            description: audits[audit.id].description,
            type: 'warning'
          });
        }
      });

      // Good practices
      if (categories['best-practices'] && categories['best-practices'].score >= 0.9) {
        suggestions.push({
          title: 'Excellent Best Practices',
          description: 'Your website follows most modern web development best practices. Keep up the good work!',
          type: 'good'
        });
      }

      // Display suggestions
      if (suggestions.length === 0) {
        suggestions.push({
          title: 'No Major Issues Found',
          description: 'Your website appears to be well-optimized. Continue monitoring performance regularly.',
          type: 'good'
        });
      }

      suggestions.forEach(suggestion => {
        const suggestionElement = document.createElement('div');
        suggestionElement.className = `suggestion-item ${suggestion.type}`;
        suggestionElement.innerHTML = `
          <strong>${suggestion.title}</strong>
          <p>${suggestion.description}</p>
        `;
        suggestionsList.appendChild(suggestionElement);
      });
    }

    function getScoreClass(score) {
      if (score >= 90) return 'score-good';
      if (score >= 50) return 'score-average';
      return 'score-poor';
    }

    function getScoreRating(score) {
      if (score >= 90) return 'Excellent';
      if (score >= 80) return 'Good';
      if (score >= 60) return 'Needs Improvement';
      return 'Poor';
    }

    function formatNumericValue(value, metricId) {
      switch (metricId) {
        case 'lcp':
        case 'fcp':
        case 'tti':
          return `${(value / 1000).toFixed(1)}s`;
        case 'fid':
        case 'tbt':
          return `${value.toFixed(0)}ms`;
        case 'cls':
          return value.toFixed(3);
        default:
          return value.toFixed(1);
      }
    }

    function formatBytes(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    function isValidUrl(string) {
      try {
        new URL(string);
        return true;
      } catch (_) {
        return false;
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

    function shareOnTwitter() {
      const url = encodeURIComponent(pageUrlInput.value || window.location.href);
      const text = encodeURIComponent('Check out this website analysis from Page Snooper!');
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    }

    function shareOnLinkedIn() {
      const url = encodeURIComponent(pageUrlInput.value || window.location.href);
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    }

    function shareOnFacebook() {
      const url = encodeURIComponent(pageUrlInput.value || window.location.href);
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    }
  });
</script>