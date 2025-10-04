---
layout: default
title: "Web Page Size Checker - Analyze Website File Size"
permalink: /web-page-size-checker-analyze-website-file-size/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Web Page Size Checker - Analyze Website File Size & Performance</title>
<meta name="description"
  content="Free online web page size checker tool. Analyze your website file size, get detailed insights about resources and optimize for better performance.">
<meta name="keywords"
  content="page size checker, website size analyzer, file size checker, web page size, website performance, page weight, resource size, optimization tool">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Page Size Checker Styles */
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

  .loading-spinner {
    display: none;
    text-align: center;
    padding: 30px;
  }

  .spinner {
    border: 5px solid #f3f3f3;
    border-top: 5px solid var(--primary);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    margin: 0 auto 15px;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .results-section {
    margin-top: 30px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: none;
  }

  .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
  }

  .result-card {
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
    text-align: center;
    border-left: 4px solid var(--primary);
  }

  .result-card h4 {
    margin: 0 0 10px 0;
    color: #2c3e50;
    font-size: 1rem;
  }

  .result-card .value {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary);
  }

  .result-card .description {
    font-size: 0.9rem;
    color: #7f8c8d;
    margin-top: 5px;
  }

  .resources-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  .resources-table th,
  .resources-table td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #e0e0e0;
  }

  .resources-table th {
    background-color: #f8f9fa;
    font-weight: 600;
    color: #2c3e50;
  }

  .resources-table tr:hover {
    background-color: #f5f5f5;
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

    .results-grid {
      grid-template-columns: 1fr;
    }

    .resources-table {
      font-size: 0.9rem;
    }

    .resources-table th,
    .resources-table td {
      padding: 8px 10px;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Page Size Checker</h1>
  <p class="welcome-message">Analyze website file size, loading speed, and performance metrics. Get detailed insights about your web page resources and optimize for better performance.</p>

  <div class="converter-section">
    <h2>Page Size Analyzer</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Total Size: </span>
        <span id="totalSize">0 KB</span>
      </div>
      <div class="counter-item">
        <span>Load Time: </span>
        <span id="loadTime">0s</span>
      </div>
      <div class="counter-item">
        <span>Resources: </span>
        <span id="resourceCount">0</span>
      </div>
      <div class="counter-item">
        <span>Performance Score: </span>
        <span id="performanceScore">0/100</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Enter Website URL</h2>
      <input type="url" id="urlInput" placeholder="https://example.com">
    </div>

    <div class="button-section">
      <button class="case-button" id="checkButton">Check Page Size</button>
      <button class="case-button success" id="analyzeButton">Detailed Analysis</button>
      <button class="case-button secondary" id="clearButton">Clear</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="loading-spinner" id="loadingSpinner">
      <div class="spinner"></div>
      <p>Analyzing page size and performance...</p>
    </div>

    <div class="results-section" id="resultsSection">
      <h3>Analysis Results</h3>
      
      <div class="results-grid">
        <div class="result-card">
          <h4>Total Page Size</h4>
          <div class="value" id="resultTotalSize">0 KB</div>
          <div class="description">Combined size of all resources</div>
        </div>
        <div class="result-card">
          <h4>Performance Score</h4>
          <div class="value" id="resultPerformanceScore">0/100</div>
          <div class="description">Overall performance rating</div>
        </div>
        <div class="result-card">
          <h4>First Contentful Paint</h4>
          <div class="value" id="resultFCP">0s</div>
          <div class="description">When content first appears</div>
        </div>
        <div class="result-card">
          <h4>Largest Contentful Paint</h4>
          <div class="value" id="resultLCP">0s</div>
          <div class="description">When main content loads</div>
        </div>
      </div>

      <h4>Resource Breakdown</h4>
      <table class="resources-table">
        <thead>
          <tr>
            <th>Resource Type</th>
            <th>Count</th>
            <th>Total Size</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody id="resourcesTableBody">
          <!-- Will be populated by JavaScript -->
        </tbody>
      </table>

      <h4>Performance Recommendations</h4>
      <div id="recommendations">
        <!-- Will be populated by JavaScript -->
      </div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Example Results</h2>

      <h3>Small Website (Optimized)</h3>
      <div class="example-text">
Total Page Size: 450 KB
Load Time: 1.2 seconds
Performance Score: 92/100

Resource Breakdown:
- HTML: 15 KB
- CSS: 40 KB
- JavaScript: 85 KB
- Images: 300 KB
- Fonts: 10 KB
      </div>

      <h3>Large Website (Needs Optimization)</h3>
      <div class="example-text">
Total Page Size: 3.2 MB
Load Time: 5.8 seconds
Performance Score: 45/100

Resource Breakdown:
- HTML: 25 KB
- CSS: 150 KB
- JavaScript: 800 KB
- Images: 2.1 MB
- Fonts: 125 KB
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Page Size Checker Tool</h2>

    <p>Is your website loading too slowly? Our free <strong>Page Size Checker tool</strong> helps you analyze your website's file size and performance metrics. Get detailed insights about all resources on your web page including HTML, CSS, JavaScript, images, and fonts. Identify performance bottlenecks and optimize your website for faster loading times. There's no download required, no registration needed, and your website data is processed securely through Cloudflare Workers.</p>

    <h3>How to Use This Page Size Checker (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter URL:</strong> Type or paste the complete URL of the webpage you want to analyze in the input field above.</li>
      <li><strong>Check Page Size:</strong> Click the "Check Page Size" button to get a quick overview of your page's total size and loading metrics.</li>
      <li><strong>Detailed Analysis:</strong> For more comprehensive insights, click "Detailed Analysis" to see a breakdown of all resources and performance recommendations.</li>
      <li><strong>Optimize:</strong> Use the recommendations provided to optimize your website's performance by reducing file sizes and improving loading speed.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're a web developer working on an e-commerce site that's experiencing slow loading times. By using our Page Size Checker, you discover that the product images account for 70% of the total page size. The tool recommends optimizing these images, which could reduce the page size by 50% and cut loading time in half. This simple analysis could significantly improve user experience and conversion rates.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Web Developers:</strong> Identify performance bottlenecks and optimize website loading speed.</li>
      <li><strong>SEO Specialists:</strong> Improve page speed for better search engine rankings.</li>
      <li><strong>Website Owners:</strong> Understand why your site might be loading slowly and how to fix it.</li>
      <li><strong>Digital Marketers:</strong> Ensure landing pages load quickly to maximize conversions.</li>
      <li><strong>UX Designers:</strong> Create faster, more responsive user experiences.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: What is considered a good page size?</strong><br>
      A: Ideally, web pages should be under 1-2 MB for optimal performance. Pages under 500 KB load very quickly, while pages over 3 MB may have performance issues, especially on mobile networks.</p>

    <p><strong>Q: How does page size affect loading speed?</strong><br>
      A: Larger page sizes generally take longer to download, especially on slower internet connections. Each additional resource (images, scripts, stylesheets) requires separate HTTP requests, which can significantly impact loading time.</p>

    <p><strong>Q: Is my website data kept private when I use this tool?</strong><br>
      A: Yes, we respect your privacy. The analysis is performed through secure Cloudflare Workers, and we don't store your website URLs or analysis results.</p>

    <p><strong>Q: Can I use this tool for any website?</strong><br>
      A: Yes, you can analyze any publicly accessible website. Some sites with strict security policies might not be fully analyzable, but most standard websites will work perfectly.</p>

    <p><strong>Q: Do I need to create an account or pay to use this?</strong><br>
      A: No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees.</p>

    <h3>Why Choose Our Page Size Checker?</h3>
    <p>Our <strong>online page size checker</strong> provides comprehensive analysis with actionable recommendations. Unlike many similar tools, we break down resources by type and provide specific optimization suggestions. The tool uses Cloudflare Workers for secure, fast processing while keeping your API keys completely hidden from frontend exposure.</p>

    <h3>Common Performance Optimization Strategies</h3>
    <p>Based on our analysis, here are the most effective ways to improve your website's performance:</p>
    <ul>
      <li><strong>Image Optimization:</strong> Compress images without losing quality, use modern formats like WebP, and implement lazy loading.</li>
      <li><strong>Code Minification:</strong> Remove unnecessary characters from CSS, JavaScript, and HTML files.</li>
      <li><strong>Browser Caching:</strong> Configure caching headers to allow returning visitors to load your site faster.</li>
      <li><strong>Content Delivery Network (CDN):</strong> Use a CDN to serve your content from servers closer to your visitors.</li>
      <li><strong>Reduce HTTP Requests:</strong> Combine CSS and JavaScript files where possible to minimize the number of requests.</li>
    </ul>
  </div>
</div>

<script>
const CLOUDFLARE_WORKER_URL = 'https://page-size-checker.bleads2.workers.dev/';

document.addEventListener('DOMContentLoaded', function() {
  const checkButton = document.getElementById('checkButton');
  const analyzeButton = document.getElementById('analyzeButton');
  const clearButton = document.getElementById('clearButton');
  const urlInput = document.getElementById('urlInput');
  const loadingSpinner = document.getElementById('loadingSpinner');
  const resultsSection = document.getElementById('resultsSection');
  const alertContainer = document.getElementById('alertContainer');
  const resourcesTableBody = document.getElementById('resourcesTableBody');
  const recommendations = document.getElementById('recommendations');

  checkButton.addEventListener('click', function() {
    const url = urlInput.value.trim();
    if (!url) {
      showAlert('Please enter a valid URL.', 'error');
      return;
    }
    checkPageSize(url, false);
  });

  analyzeButton.addEventListener('click', function() {
    const url = urlInput.value.trim();
    if (!url) {
      showAlert('Please enter a valid URL.', 'error');
      return;
    }
    checkPageSize(url, true);
  });

  clearButton.addEventListener('click', function() {
    urlInput.value = '';
    resultsSection.style.display = 'none';
    showAlert('Cleared!', 'success');
  });

  async function checkPageSize(url, detailed = false) {
    if (!isValidUrl(url)) {
      showAlert('Please enter a valid URL (e.g., https://example.com).', 'error');
      return;
    }

    loadingSpinner.style.display = 'block';
    resultsSection.style.display = 'none';

    try {
      const response = await fetch(CLOUDFLARE_WORKER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Server error');
      }

      if (!result.success) {
        throw new Error(result.error || 'Analysis failed');
      }

      loadingSpinner.style.display = 'none';
      
      if (detailed) {
        displayDetailedResults(result.data);
      } else {
        displayQuickResults(result.data);
      }
      
    } catch (error) {
      loadingSpinner.style.display = 'none';
      console.error('Error:', error);
      showAlert(error.message || 'Failed to analyze website. Please try again.', 'error');
    }
  }

  function displayQuickResults(data) {
    const lighthouse = data.lighthouseResult;
    const audits = lighthouse.audits;
    
    // Update counters
    document.getElementById('totalSize').textContent = formatBytes(audits['total-byte-weight'].numericValue);
    document.getElementById('loadTime').textContent = `${(audits['largest-contentful-paint'].numericValue / 1000).toFixed(2)}s`;
    document.getElementById('resourceCount').textContent = Object.keys(audits['network-requests'].details?.items || {}).length;
    document.getElementById('performanceScore').textContent = `${Math.round(lighthouse.categories.performance.score * 100)}/100`;

    showAlert('Page analysis completed successfully!', 'success');
  }

  function displayDetailedResults(data) {
    const lighthouse = data.lighthouseResult;
    const audits = lighthouse.audits;
    
    // Update detailed results
    document.getElementById('resultTotalSize').textContent = formatBytes(audits['total-byte-weight'].numericValue);
    document.getElementById('resultPerformanceScore').textContent = `${Math.round(lighthouse.categories.performance.score * 100)}/100`;
    document.getElementById('resultFCP').textContent = `${(audits['first-contentful-paint'].numericValue / 1000).toFixed(2)}s`;
    document.getElementById('resultLCP').textContent = `${(audits['largest-contentful-paint'].numericValue / 1000).toFixed(2)}s`;

    // Update resources table
    updateResourcesTable(audits, audits['total-byte-weight'].numericValue);
    
    // Generate recommendations
    generateRecommendations(audits, Math.round(lighthouse.categories.performance.score * 100));

    resultsSection.style.display = 'block';
    showAlert('Detailed analysis completed!', 'success');
  }

  function updateResourcesTable(audits, totalBytes) {
    const networkRequests = audits['network-requests'].details?.items || [];
    
    // Group by resource type
    const resourceTypes = {};
    networkRequests.forEach(item => {
      const type = item.resourceType || 'other';
      if (!resourceTypes[type]) {
        resourceTypes[type] = {
          count: 0,
          size: 0
        };
      }
      resourceTypes[type].count++;
      resourceTypes[type].size += item.resourceSize || 0;
    });
    
    // Clear table
    resourcesTableBody.innerHTML = '';
    
    // Add rows for each resource type
    Object.keys(resourceTypes).forEach(type => {
      const row = document.createElement('tr');
      const size = resourceTypes[type].size;
      const percentage = totalBytes > 0 ? Math.round((size / totalBytes) * 100) : 0;
      
      row.innerHTML = `
        <td>${type.toUpperCase()}</td>
        <td>${resourceTypes[type].count}</td>
        <td>${formatBytes(size)}</td>
        <td>${percentage}%</td>
      `;
      
      resourcesTableBody.appendChild(row);
    });
  }

  function generateRecommendations(audits, performanceScore) {
    let recommendationsHTML = '<ul>';
    
    // Performance score recommendation
    if (performanceScore < 50) {
      recommendationsHTML += '<li>Your website has significant performance issues that need immediate attention.</li>';
    } else if (performanceScore < 80) {
      recommendationsHTML += '<li>Your website performance is average. There are several optimization opportunities.</li>';
    } else {
      recommendationsHTML += '<li>Your website performance is good! Keep up the good work.</li>';
    }
    
    // Image optimization
    const imageBytes = calculateResourceSize(audits, 'image');
    const totalBytes = audits['total-byte-weight'].numericValue;
    const imagePercentage = totalBytes > 0 ? Math.round((imageBytes / totalBytes) * 100) : 0;
    
    if (imagePercentage > 50) {
      recommendationsHTML += '<li>Images account for more than 50% of your page size. Consider optimizing images by compressing them or using modern formats like WebP.</li>';
    }
    
    // JavaScript optimization
    const jsBytes = calculateResourceSize(audits, 'script');
    const jsPercentage = totalBytes > 0 ? Math.round((jsBytes / totalBytes) * 100) : 0;
    
    if (jsPercentage > 30) {
      recommendationsHTML += '<li>JavaScript files are taking up a significant portion of your page. Consider minifying, bundling, or deferring non-critical JavaScript.</li>';
    }
    
    // CSS optimization
    const cssBytes = calculateResourceSize(audits, 'stylesheet');
    const cssPercentage = totalBytes > 0 ? Math.round((cssBytes / totalBytes) * 100) : 0;
    
    if (cssPercentage > 20) {
      recommendationsHTML += '<li>CSS files could be optimized. Consider minifying CSS and removing unused styles.</li>';
    }
    
    // General recommendations
    recommendationsHTML += '<li>Enable browser caching to improve loading times for returning visitors.</li>';
    recommendationsHTML += '<li>Consider using a Content Delivery Network (CDN) to serve your assets.</li>';
    
    recommendationsHTML += '</ul>';
    recommendations.innerHTML = recommendationsHTML;
  }

  function calculateResourceSize(audits, resourceType) {
    const networkRequests = audits['network-requests'].details?.items || [];
    return networkRequests
      .filter(item => item.resourceType === resourceType)
      .reduce((total, item) => total + (item.resourceSize || 0), 0);
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
      const url = new URL(string);
      return url.protocol === 'http:' || url.protocol === 'https:';
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
    
    alertDiv.querySelector('.close').addEventListener('click', function() {
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