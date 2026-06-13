---
layout: default
title: "XML Sitemap Generator - Create Sitemap for Your Website"
permalink: /xml-sitemap-generator-create-sitemap-for-your-website/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>XML Sitemap Generator - Create Sitemap for Your Website</title>
<meta name="description"
  content="Free online XML sitemap generator tool. Create optimized XML sitemaps for your website to improve search engine visibility and crawling efficiency instantly.">
<meta name="keywords"
  content="xml sitemap generator, sitemap creator, xml sitemap, google sitemap, search engine optimization, seo tool, website sitemap, xml file generator">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Sitemap Generator Styles */
  .generator-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .generator-container h1 {
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

  .generator-section {
    margin-bottom: 40px;
    padding: 25px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .generator-section h2 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
  }

  .generator-section p {
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

  .settings-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin: 30px 0;
  }

  .settings-group {
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    border-left: 4px solid var(--primary);
  }

  .settings-group h3 {
    color: #2c3e50;
    margin-bottom: 20px;
    font-size: 1.3rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #2c3e50;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e6ed;
    border-radius: 6px;
    font-size: 16px;
    transition: border-color 0.3s;
    font-family: inherit;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .form-group textarea {
    min-height: 120px;
    resize: vertical;
    font-family: 'Courier New', monospace;
  }

  .url-list {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 6px;
    margin-top: 10px;
  }

  .url-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px;
    margin-bottom: 5px;
    background: white;
    border-radius: 4px;
  }

  .url-item input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .url-actions {
    display: flex;
    gap: 5px;
  }

  .url-action-btn {
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 12px;
  }

  .url-action-btn.remove {
    background: #e74c3c;
  }

  .url-action-btn.add {
    background: var(--success);
  }

  .checkbox-group {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
  }

  .checkbox-group input {
    width: auto;
  }

  .checkbox-group label {
    margin-bottom: 0;
    font-weight: normal;
  }

  .radio-group {
    display: flex;
    gap: 20px;
    margin-top: 10px;
  }

  .radio-option {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .radio-option input {
    width: auto;
  }

  .preview-section {
    margin: 30px 0;
    padding: 25px;
    background: #2c3e50;
    border-radius: 8px;
    color: white;
  }

  .preview-section h3 {
    color: #ecf0f1;
    margin-bottom: 15px;
    border-bottom: 1px solid #34495e;
    padding-bottom: 10px;
  }

  .sitemap-preview {
    background: #34495e;
    padding: 20px;
    border-radius: 6px;
    font-family: 'Courier New', monospace;
    white-space: pre-wrap;
    word-wrap: break-word;
    max-height: 400px;
    overflow-y: auto;
    line-height: 1.6;
    font-size: 14px;
  }

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
    margin: 25px 0;
  }

  .action-button {
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

  .action-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .action-button:active {
    transform: translateY(0);
  }

  .action-button.success {
    background: var(--success);
  }

  .action-button.success:hover {
    background: #218838;
  }

  .action-button.secondary {
    background: #6c757d;
  }

  .action-button.secondary:hover {
    background: #5a6268;
  }

  .action-button.warning {
    background: #ffc107;
    color: #212529;
  }

  .action-button.warning:hover {
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
    line-height: 1.6;
    font-size: 14px;
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

  /* Share and donation buttons */
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

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .settings-grid {
      grid-template-columns: 1fr;
    }

    .counter-wrapper {
      grid-template-columns: 1fr;
    }

    .button-section {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }

    .action-button {
      font-size: 13px;
      padding: 12px 8px;
    }

    .generator-container {
      padding: 15px;
    }

    .generator-section {
      padding: 20px;
      margin-bottom: 30px;
    }

    .generator-container h1 {
      font-size: 2rem;
    }

    .generator-section h2 {
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

    .radio-group {
      flex-direction: column;
      gap: 10px;
    }

    .url-item {
      flex-direction: column;
      align-items: stretch;
    }

    .url-actions {
      justify-content: flex-end;
      margin-top: 5px;
    }
  }
</style>

<div class="generator-container">
  <h1>Free XML Sitemap Generator</h1>
  <p class="welcome-message">Create optimized XML sitemaps for your website instantly. Improve search engine visibility and crawling efficiency with properly structured sitemap files.</p>

  <div class="generator-section">
    <h2>XML Sitemap Generator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Total URLs: </span>
        <span id="urlCount">0</span>
      </div>
      <div class="counter-item">
        <span>Sitemap Size: </span>
        <span id="sitemapSize">0 KB</span>
      </div>
      <div class="counter-item">
        <span>Last Modified: </span>
        <span id="lastModified">-</span>
      </div>
      <div class="counter-item">
        <span>Estimated Crawl Time: </span>
        <span id="crawlTime">-</span>
      </div>
    </div>

    <div class="settings-grid">
      <!-- Basic Settings -->
      <div class="settings-group">
        <h3>Basic Settings</h3>
        
        <div class="form-group">
          <label for="domainName">Enter a domain name <span style="color: #e74c3c;">*</span></label>
          <input type="text" id="domainName" placeholder="https://www.example.com" class="form-control">
        </div>

        <div class="form-group">
          <label for="modifiedDate">Modified date</label>
          <div class="radio-group">
            <div class="radio-option">
              <input type="radio" id="noModifiedDate" name="modifiedDate" value="none" checked>
              <label for="noModifiedDate">Do not include</label>
            </div>
            <div class="radio-option">
              <input type="radio" id="useModifiedDate" name="modifiedDate" value="include">
              <label for="useModifiedDate">Include current date</label>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="dateFormat">Date Format</label>
          <select id="dateFormat" class="form-control">
            <option value="YYYY-MM-DD">YYYY-MM-DD (ISO)</option>
            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
          </select>
        </div>
      </div>

      <!-- Change Frequency & Priority -->
      <div class="settings-group">
        <h3>Change Frequency & Priority</h3>
        
        <div class="form-group">
          <label for="changeFrequency">Change frequency</label>
          <select id="changeFrequency" class="form-control">
            <option value="none">None</option>
            <option value="always">Always</option>
            <option value="hourly">Hourly</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="never">Never</option>
          </select>
        </div>

        <div class="form-group">
          <label for="defaultPriority">Default priority</label>
          <select id="defaultPriority" class="form-control">
            <option value="none">None</option>
            <option value="1.0">1.0 (Highest)</option>
            <option value="0.9">0.9</option>
            <option value="0.8" selected>0.8 (Default)</option>
            <option value="0.7">0.7</option>
            <option value="0.6">0.6</option>
            <option value="0.5">0.5 (Medium)</option>
            <option value="0.4">0.4</option>
            <option value="0.3">0.3</option>
            <option value="0.2">0.2</option>
            <option value="0.1">0.1 (Lowest)</option>
            <option value="0.0">0.0</option>
          </select>
        </div>

        <div class="form-group">
          <label for="maxUrls">How many pages do I need to crawl?</label>
          <input type="number" id="maxUrls" min="1" max="50000" value="50" class="form-control">
          <small style="color: #666; margin-top: 5px; display: block;">Maximum number of URLs to include in sitemap</small>
        </div>
      </div>

      <!-- URL Management -->
      <div class="settings-group">
        <h3>URL Management</h3>
        
        <div class="form-group">
          <label>Add URLs to Sitemap</label>
          <div class="url-list" id="urlList">
            <div class="url-item">
              <input type="text" class="url-input" placeholder="/" value="/">
              <div class="url-actions">
                <button class="url-action-btn remove" onclick="removeUrl(this)">×</button>
              </div>
            </div>
          </div>
          <button class="url-action-btn add" onclick="addUrl()" style="margin-top: 10px; width: 100%;">+ Add URL</button>
        </div>

        <div class="form-group">
          <label for="bulkUrls">Or paste URLs (one per line):</label>
          <textarea id="bulkUrls" placeholder="/about&#10;/contact&#10;/products&#10;/blog" class="form-control"></textarea>
        </div>

        <div class="checkbox-group">
          <input type="checkbox" id="includeImages" checked>
          <label for="includeImages">Include image URLs in sitemap</label>
        </div>

        <div class="checkbox-group">
          <input type="checkbox" id="autoGenerate" checked>
          <label for="autoGenerate">Auto-generate common URLs (home, about, contact, etc.)</label>
        </div>
      </div>
    </div>

    <div class="preview-section">
      <h3>Your Generated XML Sitemap</h3>
      <div class="sitemap-preview" id="sitemapPreview">
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"&gt;
  &lt;url&gt;
    &lt;loc&gt;https://www.example.com/&lt;/loc&gt;
    &lt;lastmod&gt;2024-01-15&lt;/lastmod&gt;
    &lt;changefreq&gt;weekly&lt;/changefreq&gt;
    &lt;priority&gt;0.8&lt;/priority&gt;
  &lt;/url&gt;
&lt;/urlset&gt;
      </div>
    </div>

    <div class="button-section">
      <button class="action-button" data-action="generate">Generate Sitemap</button>
      <button class="action-button success" data-action="copy">Copy to Clipboard</button>
      <button class="action-button" data-action="download">Download Sitemap</button>
      <button class="action-button warning" data-action="validate">Validate XML</button>
      <button class="action-button secondary" data-action="clear">Clear All</button>
      <button class="action-button" data-action="test">Test in Browser</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Sitemap Examples</h2>

      <h3>Basic Sitemap Example:</h3>
      <div class="example-text">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"&gt;
  &lt;url&gt;
    &lt;loc&gt;https://www.example.com/&lt;/loc&gt;
    &lt;lastmod&gt;2024-01-15&lt;/lastmod&gt;
    &lt;changefreq&gt;weekly&lt;/changefreq&gt;
    &lt;priority&gt;1.0&lt;/priority&gt;
  &lt;/url&gt;
  &lt;url&gt;
    &lt;loc&gt;https://www.example.com/about&lt;/loc&gt;
    &lt;lastmod&gt;2024-01-10&lt;/lastmod&gt;
    &lt;changefreq&gt;monthly&lt;/changefreq&gt;
    &lt;priority&gt;0.8&lt;/priority&gt;
  &lt;/url&gt;
&lt;/urlset&gt;</div>

      <h3>Advanced Sitemap with Images:</h3>
      <div class="example-text">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"&gt;
  &lt;url&gt;
    &lt;loc&gt;https://www.example.com/products&lt;/loc&gt;
    &lt;lastmod&gt;2024-01-15&lt;/lastmod&gt;
    &lt;changefreq&gt;weekly&lt;/changefreq&gt;
    &lt;priority&gt;0.9&lt;/priority&gt;
    &lt;image:image&gt;
      &lt;image:loc&gt;https://www.example.com/images/product1.jpg&lt;/image:loc&gt;
      &lt;image:title&gt;Amazing Product One&lt;/image:title&gt;
    &lt;/image:image&gt;
  &lt;/url&gt;
&lt;/urlset&gt;</div>

      <h3>Large E-commerce Sitemap:</h3>
      <div class="example-text">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"&gt;
  &lt;url&gt;
    &lt;loc&gt;https://www.example.com/&lt;/loc&gt;
    &lt;lastmod&gt;2024-01-15&lt;/lastmod&gt;
    &lt;changefreq&gt;daily&lt;/changefreq&gt;
    &lt;priority&gt;1.0&lt;/priority&gt;
  &lt;/url&gt;
  &lt;url&gt;
    &lt;loc&gt;https://www.example.com/categories&lt;/loc&gt;
    &lt;lastmod&gt;2024-01-14&lt;/lastmod&gt;
    &lt;changefreq&gt;weekly&lt;/changefreq&gt;
    &lt;priority&gt;0.9&lt;/priority&gt;
  &lt;/url&gt;
  &lt;url&gt;
    &lt;loc&gt;https://www.example.com/products/123&lt;/loc&gt;
    &lt;lastmod&gt;2024-01-13&lt;/lastmod&gt;
    &lt;changefreq&gt;monthly&lt;/changefreq&gt;
    &lt;priority&gt;0.7&lt;/priority&gt;
  &lt;/url&gt;
&lt;/urlset&gt;</div>
    </div>
  </div>


<!-- SEO Content Section -->
<div class="content-placeholder">

  <h2>Free XML Sitemap Generator – Create SEO-Friendly Sitemaps in Seconds</h2>

  <p>
    An XML sitemap is one of the most important technical SEO assets for any website. It acts as a roadmap that helps search engines understand the structure of your website and discover important pages more efficiently. Our free <strong>XML Sitemap Generator</strong> allows you to create professional, search-engine-friendly sitemaps quickly and easily, without requiring any coding skills or technical expertise.
  </p>

  <p>
    Whether you run a personal blog, an e-commerce store, a business website, a news portal, or a large content platform, having a properly structured XML sitemap can improve crawling efficiency and help search engines find your valuable content faster. This tool generates clean XML sitemap files that follow industry standards and are compatible with major search engines such as Google, Bing, Yahoo, and others.
  </p>

  <p>
    Instead of manually creating sitemap files and worrying about formatting errors, you can simply enter your website information, configure your preferences, and generate a ready-to-use sitemap within seconds.
  </p>

  <h3>How to Use This XML Sitemap Generator (Step-by-Step):</h3>

  <ul>
    <li>
      <strong>Enter Your Website Address:</strong>
      Begin by entering your website's full URL, including https:// or http://.
    </li>

    <li>
      <strong>Choose Sitemap Settings:</strong>
      Configure options such as update frequency, page priority, and last modified dates.
    </li>

    <li>
      <strong>Add Website URLs:</strong>
      Enter individual page URLs or import multiple URLs at once for larger websites.
    </li>

    <li>
      <strong>Generate Your Sitemap:</strong>
      Click the "Generate Sitemap" button to create a properly formatted XML sitemap file.
    </li>

    <li>
      <strong>Download or Copy:</strong>
      Save the generated XML file or copy the sitemap code directly.
    </li>

    <li>
      <strong>Upload and Submit:</strong>
      Upload the sitemap to your website's root directory and submit it to search engines through their webmaster tools.
    </li>
  </ul>

  <h3>Why XML Sitemaps Are Important for SEO:</h3>

  <p>
    Search engines use crawlers to discover and index web pages. While they can often find content through internal and external links, an XML sitemap provides additional guidance and ensures that important pages are not overlooked.
  </p>

  <ul>
    <li>
      <strong>Faster Content Discovery:</strong>
      Helps search engines locate newly published pages more quickly.
    </li>

    <li>
      <strong>Better Crawl Efficiency:</strong>
      Makes it easier for search engine bots to understand your website structure.
    </li>

    <li>
      <strong>Improved Index Coverage:</strong>
      Increases the likelihood that important pages will be indexed properly.
    </li>

    <li>
      <strong>Useful Metadata:</strong>
      Provides information such as update dates and page importance.
    </li>

    <li>
      <strong>Supports Large Websites:</strong>
      Especially beneficial for websites with hundreds or thousands of pages.
    </li>

    <li>
      <strong>Helps New Websites:</strong>
      Assists search engines in discovering pages before strong backlink profiles are established.
    </li>
  </ul>

  <h3>What Information Does an XML Sitemap Contain?</h3>

  <p>
    A sitemap is more than just a list of URLs. It can include valuable information that helps search engines better understand your content.
  </p>

  <ul>
    <li><strong>Page URL:</strong> The exact address of each webpage.</li>
    <li><strong>Last Modified Date:</strong> Indicates when content was last updated.</li>
    <li><strong>Change Frequency:</strong> Suggests how often content typically changes.</li>
    <li><strong>Priority Value:</strong> Indicates relative importance compared to other pages.</li>
    <li><strong>Media Information:</strong> Optional data for images, videos, and news content.</li>
  </ul>

  <h3>Best Practices for XML Sitemaps:</h3>

  <ul>
    <li>
      <strong>Place It in the Root Directory:</strong>
      Store your sitemap at example.com/sitemap.xml whenever possible.
    </li>

    <li>
      <strong>Keep It Updated:</strong>
      Update your sitemap whenever you publish, remove, or significantly modify content.
    </li>

    <li>
      <strong>Use Accurate Dates:</strong>
      Ensure last modified dates reflect actual content updates.
    </li>

    <li>
      <strong>Include Only Important URLs:</strong>
      Focus on pages that provide value and should appear in search results.
    </li>

    <li>
      <strong>Remove Broken Links:</strong>
      Avoid listing deleted, redirected, or error pages.
    </li>

    <li>
      <strong>Validate Your Sitemap:</strong>
      Check for formatting and XML syntax errors before submission.
    </li>
  </ul>

  <h3>Frequently Asked Questions:</h3>

  <p>
    <strong>What is the difference between an XML sitemap and an HTML sitemap?</strong><br>
    XML sitemaps are designed primarily for search engines, while HTML sitemaps are intended for website visitors to help them navigate content.
  </p>

  <p>
    <strong>Do small websites need a sitemap?</strong><br>
    Yes. Although small websites may be crawled efficiently through internal links, a sitemap can still improve content discovery and indexing.
  </p>

  <p>
    <strong>How often should I update my sitemap?</strong><br>
    Ideally, every time you add, remove, or significantly update content. Dynamic websites may update their sitemaps automatically.
  </p>

  <p>
    <strong>Can I have multiple sitemaps?</strong><br>
    Absolutely. Large websites commonly use multiple sitemap files and connect them through a sitemap index file.
  </p>

  <p>
    <strong>Does submitting a sitemap guarantee indexing?</strong><br>
    No. A sitemap helps search engines discover content, but indexing decisions are ultimately made by the search engine.
  </p>

  <h3>XML Sitemap Size Limits:</h3>

  <p>
    Search engines impose certain limitations on sitemap files to ensure efficient processing.
  </p>

  <ul>
    <li><strong>Maximum URLs:</strong> 50,000 URLs per sitemap file.</li>
    <li><strong>Maximum File Size:</strong> 50 MB uncompressed.</li>
    <li><strong>Sitemap Index Files:</strong> Used when managing multiple sitemap files.</li>
    <li><strong>Compression Support:</strong> Large sitemaps can be compressed using GZIP.</li>
  </ul>

  <h3>Advanced Sitemap Features:</h3>

  <p>
    Modern websites often require more than a simple list of pages. XML sitemap protocols support specialized content types that can provide additional information to search engines.
  </p>

  <ul>
    <li>
      <strong>Image Sitemaps:</strong>
      Help search engines discover and index images more effectively.
    </li>

    <li>
      <strong>Video Sitemaps:</strong>
      Provide metadata about video content including duration and descriptions.
    </li>

    <li>
      <strong>News Sitemaps:</strong>
      Improve visibility of news articles in Google News and other news platforms.
    </li>

    <li>
      <strong>Multi-Language Sitemaps:</strong>
      Support websites serving content in multiple languages.
    </li>

    <li>
      <strong>Mobile Content Support:</strong>
      Helps identify mobile-friendly versions of webpages.
    </li>
  </ul>

  <h3>Common Sitemap Mistakes to Avoid:</h3>

  <ul>
    <li>
      <strong>Including Noindex Pages:</strong>
      Pages marked as noindex generally should not be included.
    </li>

    <li>
      <strong>Adding Redirect URLs:</strong>
      Only final destination URLs should appear in the sitemap.
    </li>

    <li>
      <strong>Using Incorrect Dates:</strong>
      Fake update dates can reduce trust and usefulness.
    </li>

    <li>
      <strong>Forgetting New Content:</strong>
      New pages should be added promptly.
    </li>

    <li>
      <strong>Ignoring Validation Errors:</strong>
      XML syntax mistakes may prevent search engines from reading the sitemap.
    </li>

    <li>
      <strong>Listing Duplicate URLs:</strong>
      Duplicate entries can create unnecessary confusion.
    </li>
  </ul>

  <h3>How to Submit Your Sitemap to Search Engines:</h3>

  <p>
    After generating and uploading your sitemap, the next step is to notify search engines about its location.
  </p>

  <ol>
    <li>Upload sitemap.xml to your website's root directory.</li>
    <li>Add the sitemap location to your robots.txt file.</li>
    <li>Open Google Search Console.</li>
    <li>Navigate to the Sitemaps section.</li>
    <li>Enter your sitemap URL and submit it.</li>
    <li>Repeat the process in Bing Webmaster Tools.</li>
  </ol>

  <h3>Who Should Use This XML Sitemap Generator?</h3>

  <ul>
    <li><strong>Website Owners:</strong> Improve website discoverability and SEO performance.</li>
    <li><strong>Bloggers:</strong> Help search engines find new articles quickly.</li>
    <li><strong>E-commerce Businesses:</strong> Ensure product pages are crawled efficiently.</li>
    <li><strong>SEO Professionals:</strong> Manage indexing strategies more effectively.</li>
    <li><strong>Web Developers:</strong> Create standards-compliant sitemap files with ease.</li>
    <li><strong>Digital Agencies:</strong> Generate sitemaps for multiple client websites.</li>
  </ul>

  <h3>Benefits of Using Our XML Sitemap Generator:</h3>

  <ul>
    <li>Fast and user-friendly interface.</li>
    <li>No coding knowledge required.</li>
    <li>Standards-compliant XML output.</li>
    <li>Suitable for websites of all sizes.</li>
    <li>Supports SEO best practices.</li>
    <li>Free to use with no registration required.</li>
  </ul>

  <h3>Final Thoughts:</h3>

  <p>
    An XML sitemap is one of the simplest yet most effective technical SEO tools available. It helps search engines understand your website structure, discover new content faster, and crawl important pages more efficiently. Whether your site contains ten pages or ten thousand, maintaining a clean and updated sitemap can contribute significantly to long-term SEO success.
  </p>

  <p>
    Use our free XML Sitemap Generator to create accurate, search-engine-friendly sitemaps in seconds and ensure your valuable content is easily discoverable across major search engines.
  </p>

</div>


<script>
  document.addEventListener('DOMContentLoaded', function () {
    // Form elements
    const domainName = document.getElementById('domainName');
    const modifiedDate = document.querySelectorAll('input[name="modifiedDate"]');
    const dateFormat = document.getElementById('dateFormat');
    const changeFrequency = document.getElementById('changeFrequency');
    const defaultPriority = document.getElementById('defaultPriority');
    const maxUrls = document.getElementById('maxUrls');
    const bulkUrls = document.getElementById('bulkUrls');
    const includeImages = document.getElementById('includeImages');
    const autoGenerate = document.getElementById('autoGenerate');
    
    // Counters
    const urlCount = document.getElementById('urlCount');
    const sitemapSize = document.getElementById('sitemapSize');
    const lastModified = document.getElementById('lastModified');
    const crawlTime = document.getElementById('crawlTime');
    
    // Preview and buttons
    const sitemapPreview = document.getElementById('sitemapPreview');
    const actionButtons = document.querySelectorAll('.action-button');
    const alertContainer = document.getElementById('alertContainer');

    // Event listeners
    actionButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleAction(action);
      });
    });

    // Auto-generate on form changes
    const formElements = [domainName, dateFormat, changeFrequency, defaultPriority, maxUrls, bulkUrls, includeImages, autoGenerate];
    formElements.forEach(element => {
      element.addEventListener('input', generateSitemap);
      element.addEventListener('change', generateSitemap);
    });

    modifiedDate.forEach(radio => {
      radio.addEventListener('change', generateSitemap);
    });

    // Initialize with default content
    updateCounters();
    generateSitemap();

    function handleAction(action) {
      switch (action) {
        case 'generate':
          generateSitemap();
          showAlert('XML Sitemap generated successfully!', 'success');
          break;

        case 'copy':
          copySitemap();
          break;

        case 'download':
          downloadSitemap();
          break;

        case 'validate':
          validateSitemap();
          break;

        case 'clear':
          clearForm();
          break;

        case 'test':
          testSitemap();
          break;
      }
    }

    function generateSitemap() {
      const domain = domainName.value.trim();
      if (!domain) {
        sitemapPreview.textContent = 'Please enter a domain name to generate sitemap.';
        return;
      }

      // Get settings
      const includeModifiedDate = document.querySelector('input[name="modifiedDate"]:checked').value === 'include';
      const freq = changeFrequency.value;
      const priority = defaultPriority.value;
      const format = dateFormat.value;
      const includeImg = includeImages.checked;

      // Get URLs
      const urls = getUrls();
      if (urls.length === 0) {
        sitemapPreview.textContent = 'Please add at least one URL to generate sitemap.';
        return;
      }

      // Generate XML
      let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
      
      if (includeImg) {
        xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
        xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';
      } else {
        xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
      }

      // Add URLs
      urls.forEach(url => {
        xml += '  <url>\n';
        xml += `    <loc>${domain}${url}</loc>\n`;
        
        if (includeModifiedDate) {
          const currentDate = getFormattedDate(format);
          xml += `    <lastmod>${currentDate}</lastmod>\n`;
        }
        
        if (freq !== 'none') {
          xml += `    <changefreq>${freq}</changefreq>\n`;
        }
        
        if (priority !== 'none') {
          xml += `    <priority>${priority}</priority>\n`;
        }

        // Add image entries if enabled
        if (includeImg && shouldIncludeImages(url)) {
          xml += `    <image:image>\n`;
          xml += `      <image:loc>${domain}/images${url}.jpg</image:loc>\n`;
          xml += `      <image:title>Image for ${url}</image:title>\n`;
          xml += `    </image:image>\n`;
        }

        xml += '  </url>\n';
      });

      xml += '</urlset>';

      // Set preview
      sitemapPreview.textContent = xml;
      updateCounters();
    }

    function getUrls() {
      const urls = [];
      
      // Get URLs from URL list
      const urlInputs = document.querySelectorAll('.url-input');
      urlInputs.forEach(input => {
        if (input.value.trim()) {
          urls.push(input.value.trim());
        }
      });

      // Get URLs from bulk textarea
      const bulkUrlsText = bulkUrls.value.trim();
      if (bulkUrlsText) {
        const bulkUrlsArray = bulkUrlsText.split('\n').filter(url => url.trim());
        bulkUrlsArray.forEach(url => {
          if (!urls.includes(url.trim())) {
            urls.push(url.trim());
          }
        });
      }

      // Auto-generate common URLs if enabled
      if (autoGenerate.checked) {
        const commonUrls = ['/', '/about', '/contact', '/services', '/products', '/blog', '/faq', '/privacy'];
        commonUrls.forEach(url => {
          if (!urls.includes(url)) {
            urls.push(url);
          }
        });
      }

      // Limit URLs based on maxUrls setting
      const max = parseInt(maxUrls.value) || 50;
      return urls.slice(0, max);
    }

    function getFormattedDate(format) {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');

      switch (format) {
        case 'DD/MM/YYYY':
          return `${day}/${month}/${year}`;
        case 'MM/DD/YYYY':
          return `${month}/${day}/${year}`;
        default: // YYYY-MM-DD
          return `${year}-${month}-${day}`;
      }
    }

    function shouldIncludeImages(url) {
      // Only include images for certain URL patterns
      const imageUrls = ['/products/', '/gallery/', '/portfolio/', '/images/'];
      return imageUrls.some(pattern => url.includes(pattern));
    }

    function updateCounters() {
      const urls = getUrls();
      const xmlContent = sitemapPreview.textContent;
      
      // URL count
      urlCount.textContent = urls.length;

      // Sitemap size
      const sizeInBytes = new Blob([xmlContent]).size;
      const sizeInKB = (sizeInBytes / 1024).toFixed(2);
      sitemapSize.textContent = `${sizeInKB} KB`;

      // Last modified
      lastModified.textContent = getFormattedDate('YYYY-MM-DD');

      // Estimated crawl time (rough calculation)
      const estimatedTime = Math.ceil(urls.length * 0.5); // 0.5 seconds per URL
      crawlTime.textContent = `${estimatedTime} seconds`;
    }

    function copySitemap() {
      const sitemapContent = sitemapPreview.textContent;
      
      if (!sitemapContent || sitemapContent.includes('Please enter')) {
        showAlert('Please generate sitemap content first.', 'error');
        return;
      }

      navigator.clipboard.writeText(sitemapContent).then(() => {
        showAlert('XML Sitemap copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy sitemap: ' + err, 'error');
      });
    }

    function downloadSitemap() {
      const sitemapContent = sitemapPreview.textContent;
      
      if (!sitemapContent || sitemapContent.includes('Please enter')) {
        showAlert('Please generate sitemap content first.', 'error');
        return;
      }

      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(sitemapContent));
      element.setAttribute('download', 'sitemap.xml');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      
      showAlert('XML Sitemap downloaded successfully!', 'success');
    }

    function validateSitemap() {
      const content = sitemapPreview.textContent;
      let isValid = true;
      let errors = [];

      // Basic XML validation
      if (!content.includes('<?xml')) {
        isValid = false;
        errors.push('Missing XML declaration');
      }

      if (!content.includes('<urlset')) {
        isValid = false;
        errors.push('Missing urlset element');
      }

      if (!content.includes('</urlset>')) {
        isValid = false;
        errors.push('Missing closing urlset tag');
      }

      // Check for well-formed XML
      try {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(content, "text/xml");
        const parseError = xmlDoc.getElementsByTagName("parsererror")[0];
        if (parseError) {
          isValid = false;
          errors.push('XML parsing error: ' + parseError.textContent);
        }
      } catch (e) {
        isValid = false;
        errors.push('Invalid XML structure');
      }

      if (isValid) {
        showAlert('XML Sitemap validation passed!', 'success');
      } else {
        showAlert('Sitemap validation failed: ' + errors.join(', '), 'error');
      }
    }

    function testSitemap() {
      const content = sitemapPreview.textContent;
      
      if (!content || content.includes('Please enter')) {
        showAlert('Please generate sitemap content first.', 'error');
        return;
      }

      // Create a new window with the XML content
      const newWindow = window.open('', '_blank');
      newWindow.document.write('<pre>' + content + '</pre>');
      newWindow.document.title = 'XML Sitemap Preview';
      showAlert('Sitemap opened in new window for testing.', 'success');
    }

    function clearForm() {
      // Reset to default values
      domainName.value = '';
      document.getElementById('noModifiedDate').checked = true;
      dateFormat.value = 'YYYY-MM-DD';
      changeFrequency.value = 'none';
      defaultPriority.value = '0.8';
      maxUrls.value = '50';
      bulkUrls.value = '';
      includeImages.checked = true;
      autoGenerate.checked = true;
      
      // Clear URL list
      const urlList = document.getElementById('urlList');
      urlList.innerHTML = '<div class="url-item"><input type="text" class="url-input" placeholder="/" value="/"><div class="url-actions"><button class="url-action-btn remove" onclick="removeUrl(this)">×</button></div></div>';
      
      generateSitemap();
      showAlert('Form cleared successfully!', 'success');
    }

    // URL management functions (global scope for onclick handlers)
    window.addUrl = function() {
      const urlList = document.getElementById('urlList');
      const newUrlItem = document.createElement('div');
      newUrlItem.className = 'url-item';
      newUrlItem.innerHTML = `
        <input type="text" class="url-input" placeholder="/new-page" value="/new-page">
        <div class="url-actions">
          <button class="url-action-btn remove" onclick="removeUrl(this)">×</button>
        </div>
      `;
      urlList.appendChild(newUrlItem);
      generateSitemap();
    };

    window.removeUrl = function(button) {
      const urlItem = button.closest('.url-item');
      if (document.querySelectorAll('.url-item').length > 1) {
        urlItem.remove();
        generateSitemap();
      } else {
        showAlert('Cannot remove the last URL. Add another URL first.', 'error');
      }
    };

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