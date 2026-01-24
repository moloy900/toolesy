---
layout: default
title: "Robots.txt Generator - Create Robots.txt File Instantly"
permalink: /robotstxt-generator-create-robotstxt-file-instantly/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Robots.txt Generator - Create Robots.txt File Instantly</title>
<meta name="description"
  content="Free online robots.txt generator tool. Create optimized robots.txt files for your website to control search engine crawling and indexing behavior instantly.">
<meta name="keywords"
  content="robots.txt generator, robots.txt file, search engine optimization, seo tool, web crawler control, robots exclusion protocol, google bot, bing bot">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Robots.txt Generator Styles */
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
    min-height: 80px;
    resize: vertical;
  }

  .checkbox-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 12px;
    margin-top: 15px;
  }

  .checkbox-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px;
    background: #f8f9fa;
    border-radius: 6px;
    transition: background-color 0.3s;
  }

  .checkbox-item:hover {
    background: #e9ecef;
  }

  .checkbox-item input {
    width: auto;
  }

  .checkbox-item label {
    margin-bottom: 0;
    font-weight: normal;
    cursor: pointer;
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

  .robots-preview {
    background: #34495e;
    padding: 20px;
    border-radius: 6px;
    font-family: 'Courier New', monospace;
    white-space: pre-wrap;
    word-wrap: break-word;
    max-height: 400px;
    overflow-y: auto;
    line-height: 1.6;
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

    .checkbox-grid {
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
  }
</style>

<div class="generator-container">
  <h1>Free Robots.txt Generator</h1>
  <p class="welcome-message">Create optimized robots.txt files for your website instantly. Control how search engines crawl and index your site with proper robots exclusion protocol directives.</p>

  <div class="generator-section">
    <h2>Robots.txt Generator</h2>

    <div class="settings-grid">
      <!-- Basic Settings -->
      <div class="settings-group">
        <h3>Basic Settings</h3>
        
        <div class="form-group">
          <label>Default - All Robots are:</label>
          <div class="radio-group">
            <div class="radio-option">
              <input type="radio" id="robotsAllowed" name="robotsDefault" value="allowed" checked>
              <label for="robotsAllowed">Allowed</label>
            </div>
            <div class="radio-option">
              <input type="radio" id="robotsDisallowed" name="robotsDefault" value="disallowed">
              <label for="robotsDisallowed">Disallowed</label>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="crawlDelay">Crawl-Delay:</label>
          <select id="crawlDelay" class="form-control">
            <option value="">Default - No Delay</option>
            <option value="1">1 second</option>
            <option value="2">2 seconds</option>
            <option value="5">5 seconds</option>
            <option value="10">10 seconds</option>
            <option value="15">15 seconds</option>
            <option value="30">30 seconds</option>
          </select>
        </div>

        <div class="form-group">
          <label for="sitemapUrl">Sitemap:</label>
          <input type="text" id="sitemapUrl" placeholder="http://example.com/sitemap.xml" class="form-control">
        </div>
      </div>

      <!-- Search Engine Bots -->
      <div class="settings-group">
        <h3>Search Engine Bots</h3>
        <div class="checkbox-grid">
          <div class="checkbox-item">
            <input type="checkbox" id="googleBot" checked>
            <label for="googleBot">Google</label>
          </div>
          <div class="checkbox-item">
            <input type="checkbox" id="googleImage" checked>
            <label for="googleImage">Google Image</label>
          </div>
          <div class="checkbox-item">
            <input type="checkbox" id="googleMobile" checked>
            <label for="googleMobile">Google Mobile</label>
          </div>
          <div class="checkbox-item">
            <input type="checkbox" id="bingBot" checked>
            <label for="bingBot">Bing (MSN Search)</label>
          </div>
          <div class="checkbox-item">
            <input type="checkbox" id="yahooBot" checked>
            <label for="yahooBot">Yahoo</label>
          </div>
          <div class="checkbox-item">
            <input type="checkbox" id="yahooMM" checked>
            <label for="yahooMM">Yahoo MM</label>
          </div>
          <div class="checkbox-item">
            <input type="checkbox" id="yahooBlogs" checked>
            <label for="yahooBlogs">Yahoo Blogs</label>
          </div>
          <div class="checkbox-item">
            <input type="checkbox" id="askBot" checked>
            <label for="askBot">Ask/Teoma</label>
          </div>
          <div class="checkbox-item">
            <input type="checkbox" id="gigablast" checked>
            <label for="gigablast">GigaBlast</label>
          </div>
          <div class="checkbox-item">
            <input type="checkbox" id="dmoz" checked>
            <label for="dmoz">DMOZ Checker</label>
          </div>
          <div class="checkbox-item">
            <input type="checkbox" id="nutch" checked>
            <label for="nutch">Nutch</label>
          </div>
          <div class="checkbox-item">
            <input type="checkbox" id="alexa" checked>
            <label for="alexa">Alexa/Wayback</label>
          </div>
          <div class="checkbox-item">
            <input type="checkbox" id="baidu" checked>
            <label for="baidu">Baidu</label>
          </div>
          <div class="checkbox-item">
            <input type="checkbox" id="naver" checked>
            <label for="naver">Naver</label>
          </div>
          <div class="checkbox-item">
            <input type="checkbox" id="msnPicsearch" checked>
            <label for="msnPicsearch">MSN PicSearch</label>
          </div>
        </div>
      </div>

      <!-- Restricted Directories -->
      <div class="settings-group">
        <h3>Restricted Directories & Files</h3>
        <div class="form-group">
          <label for="disallowedPaths">Disallowed Paths (one per line):</label>
          <textarea id="disallowedPaths" placeholder="/admin/&#10;/cgi-bin/&#10;/private/&#10;/tmp/" class="form-control"></textarea>
          <small style="color: #666; margin-top: 5px; display: block;">The path is relative to root and must contain a trailing slash "/"</small>
        </div>

        <div class="form-group">
          <label for="allowedPaths">Allowed Paths (one per line):</label>
          <textarea id="allowedPaths" placeholder="/public/&#10;/images/&#10;/css/" class="form-control"></textarea>
        </div>

        <div class="form-group">
          <label for="customRules">Custom Rules:</label>
          <textarea id="customRules" placeholder="User-agent: SpecialBot&#10;Disallow: /special/&#10;&#10;User-agent: *&#10;Allow: /public/files/" class="form-control"></textarea>
          <small style="color: #666; margin-top: 5px; display: block;">Add custom user-agent specific rules here</small>
        </div>
      </div>
    </div>

    <div class="preview-section">
      <h3>Your Generated Robots.txt File</h3>
      <div class="robots-preview" id="robotsPreview">
        # Generated by Free Robots.txt Generator
        # https://example.com/robots-txt-generator/

        User-agent: *
        Disallow: /admin/
        Disallow: /cgi-bin/
        
        Sitemap: https://example.com/sitemap.xml
      </div>
    </div>

    <div class="button-section">
      <button class="action-button" data-action="generate">Generate Robots.txt</button>
      <button class="action-button success" data-action="copy">Copy to Clipboard</button>
      <button class="action-button" data-action="download">Download Robots.txt</button>
      <button class="action-button secondary" data-action="clear">Clear All</button>
      <button class="action-button" data-action="validate">Validate Syntax</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Robots.txt Examples</h2>

      <h3>Basic Example - Allow All:</h3>
      <div class="example-text">User-agent: *
Allow: /

Sitemap: https://www.example.com/sitemap.xml</div>

      <h3>Advanced Example - Restrict Specific Areas:</h3>
      <div class="example-text">User-agent: *
Allow: /
Disallow: /admin/
Disallow: /cgi-bin/
Disallow: /private/
Disallow: /tmp/

# Google Image Bot
User-agent: Googlebot-Image
Allow: /public/images/
Disallow: /private/images/

# Crawl delay for all bots
Crawl-delay: 5

Sitemap: https://www.example.com/sitemap.xml
Sitemap: https://www.example.com/image-sitemap.xml</div>

      <h3>E-commerce Site Example:</h3>
      <div class="example-text">User-agent: *
Allow: /
Disallow: /checkout/
Disallow: /cart/
Disallow: /account/
Disallow: /admin/
Disallow: /private/

# Allow product pages and categories
Allow: /products/
Allow: /categories/

# Special rules for search engine bots
User-agent: Googlebot
Allow: /reviews/
Crawl-delay: 2

User-agent: Bingbot
Crawl-delay: 3

Sitemap: https://www.example.com/sitemap.xml
Sitemap: https://www.example.com/product-sitemap.xml</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Robots.txt Generator - Control Search Engine Crawling</h2>

    <p>Our free <strong>Robots.txt Generator</strong> helps you create perfectly optimized robots.txt files for your website in seconds. The robots.txt file is a critical component of SEO that tells search engine crawlers which pages or sections of your website should not be accessed or indexed. With this tool, you can easily configure crawling rules for different search engine bots without any technical knowledge required.</p>

    <h3>How to Use This Robots.txt Generator (Step-by-Step):</h3>
    <ul>
      <li><strong>Configure Basic Settings:</strong> Set default robot access (allowed or disallowed) and crawl delay preferences.</li>
      <li><strong>Select Search Engines:</strong> Choose which search engine bots should follow your rules (Google, Bing, Yahoo, etc.).</li>
      <li><strong>Define Restricted Areas:</strong> Add directories and files you want to block from search engine crawling.</li>
      <li><strong>Add Sitemap Location:</strong> Specify your sitemap URL to help search engines discover your content.</li>
      <li><strong>Generate & Download:</strong> Click "Generate Robots.txt" and then copy or download the file to your website's root directory.</li>
    </ul>

    <h3>Why Robots.txt Files Are Important for SEO:</h3>
    <p>Robots.txt files play a vital role in search engine optimization by controlling how search engine crawlers access your website. They help you:</p>
    <ul>
      <li><strong>Prevent Indexing of Private Areas:</strong> Keep admin pages, temporary files, and private directories out of search results</li>
      <li><strong>Conserve Crawl Budget:</strong> Direct search engines to focus on important pages rather than wasting resources on irrelevant content</li>
      <li><strong>Prevent Duplicate Content:</strong> Block search engines from indexing multiple versions of the same page</li>
      <li><strong>Improve Site Performance:</strong> Reduce server load by controlling crawl frequency with crawl-delay directives</li>
      <li><strong>Enhance Security:</strong> Hide sensitive directories and files from public search results</li>
    </ul>

    <h3>Best Practices for Robots.txt Files:</h3>
    <ul>
      <li><strong>File Location:</strong> Always place robots.txt in your website's root directory (example.com/robots.txt)</li>
      <li><strong>Syntax Accuracy:</strong> Use correct syntax with proper spacing and line breaks</li>
      <li><strong>Specificity:</strong> Be specific about which user-agents your rules apply to</li>
      <li><strong>Testing:</strong> Always test your robots.txt file using Google Search Console</li>
      <li><strong>Regular Updates:</strong> Review and update your robots.txt file as your website structure changes</li>
      <li><strong>Sitemap Inclusion:</strong> Always include your sitemap URL to help search engines discover content</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>Can robots.txt completely block search engines from indexing my site?</strong><br>
      No, robots.txt is a request, not a enforcement. Malicious bots may ignore it. For complete blocking, use password protection or noindex meta tags.</p>

    <p><strong>What's the difference between Disallow and Noindex?</strong><br>
      Disallow prevents crawling, while Noindex prevents indexing. A page can be crawled but not indexed, or vice versa.</p>

    <p><strong>How long does it take for robots.txt changes to take effect?</strong><br>
      It depends on when search engines recrawl your site. Google typically recrawls robots.txt within a few days.</p>

    <p><strong>Can I have multiple sitemaps in my robots.txt file?</strong><br>
      Yes, you can include multiple sitemap directives, each on a separate line.</p>

    <p><strong>Is robots.txt case-sensitive?</strong><br>
      Yes, paths in robots.txt are case-sensitive. "/Admin/" and "/admin/" would be treated as different directories.</p>

    <h3>Common Robots.txt Mistakes to Avoid:</h3>
    <ul>
      <li><strong>Blocking CSS/JS Files:</strong> Preventing search engines from accessing resources needed to render your pages properly</li>
      <li><strong>Incorrect Syntax:</strong> Using wrong spacing, missing colons, or improper line breaks</li>
      <strong>Over-blocking:</strong> Accidentally blocking important content from search engines</li>
      <li><strong>No Sitemap Reference:</strong> Forgetting to include your sitemap location</li>
      <li><strong>Outdated Rules:</strong> Keeping old rules that no longer apply to your current site structure</li>
    </ul>

    <h3>Advanced Robots.txt Directives:</h3>
    <p>Beyond basic Allow and Disallow directives, you can use advanced features like:</p>
    <ul>
      <li><strong>Crawl-delay:</strong> Specify how many seconds crawlers should wait between requests</li>
      <li><strong>User-agent Specific Rules:</strong> Create different rules for different search engine bots</li>
      <li><strong>Wildcard Patterns:</strong> Use * to match any sequence of characters in paths</li>
      <li><strong>Comment Lines:</strong> Add comments starting with # for documentation</li>
      <li><strong>Multiple Sitemaps:</strong> Include references to multiple sitemap files</li>
    </ul>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // Form elements
    const robotsDefault = document.querySelectorAll('input[name="robotsDefault"]');
    const crawlDelay = document.getElementById('crawlDelay');
    const sitemapUrl = document.getElementById('sitemapUrl');
    const disallowedPaths = document.getElementById('disallowedPaths');
    const allowedPaths = document.getElementById('allowedPaths');
    const customRules = document.getElementById('customRules');
    
    // Search engine checkboxes
    const searchEngineCheckboxes = [
      'googleBot', 'googleImage', 'googleMobile', 'bingBot', 'yahooBot',
      'yahooMM', 'yahooBlogs', 'askBot', 'gigablast', 'dmoz', 'nutch',
      'alexa', 'baidu', 'naver', 'msnPicsearch'
    ];

    // Preview and buttons
    const robotsPreview = document.getElementById('robotsPreview');
    const actionButtons = document.querySelectorAll('.action-button');
    const alertContainer = document.getElementById('alertContainer');

    // Event listeners
    actionButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleAction(action);
      });
    });

    // Initialize with default content
    generateRobotsTxt();

    // Auto-generate on form changes
    const formElements = [crawlDelay, sitemapUrl, disallowedPaths, allowedPaths, customRules];
    formElements.forEach(element => {
      element.addEventListener('input', generateRobotsTxt);
      element.addEventListener('change', generateRobotsTxt);
    });

    searchEngineCheckboxes.forEach(id => {
      const checkbox = document.getElementById(id);
      if (checkbox) {
        checkbox.addEventListener('change', generateRobotsTxt);
      }
    });

    robotsDefault.forEach(radio => {
      radio.addEventListener('change', generateRobotsTxt);
    });

    function handleAction(action) {
      switch (action) {
        case 'generate':
          generateRobotsTxt();
          showAlert('Robots.txt generated successfully!', 'success');
          break;

        case 'copy':
          copyRobotsTxt();
          break;

        case 'download':
          downloadRobotsTxt();
          break;

        case 'clear':
          clearForm();
          break;

        case 'validate':
          validateRobotsTxt();
          break;
      }
    }

    function generateRobotsTxt() {
      let robotsContent = '# Generated by Free Robots.txt Generator\n';
      robotsContent += '# https://example.com/robots-txt-generator/\n\n';

      // Get default robot setting
      let defaultSetting = 'allowed';
      robotsDefault.forEach(radio => {
        if (radio.checked) defaultSetting = radio.value;
      });

      // Add user-agent directives for selected search engines
      const userAgents = getUserAgents();
      
      if (userAgents.length > 0) {
        userAgents.forEach(agent => {
          robotsContent += `User-agent: ${agent.name}\n`;
          
          if (defaultSetting === 'disallowed') {
            robotsContent += 'Disallow: /\n';
          } else {
            robotsContent += 'Allow: /\n';
          }
          
          // Add specific rules for this user-agent
          const specificRules = getSpecificRules(agent.id);
          if (specificRules) {
            robotsContent += specificRules + '\n';
          }
          
          robotsContent += '\n';
        });
      }

      // Add general rules for all user-agents
      robotsContent += 'User-agent: *\n';
      
      if (defaultSetting === 'disallowed') {
        robotsContent += 'Disallow: /\n';
      } else {
        robotsContent += 'Allow: /\n';
      }

      // Add disallowed paths
      const disallowed = disallowedPaths.value.trim();
      if (disallowed) {
        const paths = disallowed.split('\n').filter(path => path.trim());
        paths.forEach(path => {
          if (path.trim()) {
            robotsContent += `Disallow: ${path.trim()}\n`;
          }
        });
      }

      // Add allowed paths
      const allowed = allowedPaths.value.trim();
      if (allowed) {
        const paths = allowed.split('\n').filter(path => path.trim());
        paths.forEach(path => {
          if (path.trim()) {
            robotsContent += `Allow: ${path.trim()}\n`;
          }
        });
      }

      robotsContent += '\n';

      // Add crawl delay
      const delay = crawlDelay.value;
      if (delay) {
        robotsContent += `Crawl-delay: ${delay}\n\n`;
      }

      // Add custom rules
      const custom = customRules.value.trim();
      if (custom) {
        robotsContent += `${custom}\n\n`;
      }

      // Add sitemap
      const sitemap = sitemapUrl.value.trim();
      if (sitemap) {
        robotsContent += `Sitemap: ${sitemap}\n`;
      }

      // Set preview
      robotsPreview.textContent = robotsContent;
    }

    function getUserAgents() {
      const agents = [];
      const agentMap = {
        googleBot: { name: 'Googlebot', id: 'google' },
        googleImage: { name: 'Googlebot-Image', id: 'google-image' },
        googleMobile: { name: 'Googlebot-Mobile', id: 'google-mobile' },
        bingBot: { name: 'Bingbot', id: 'bing' },
        yahooBot: { name: 'Slurp', id: 'yahoo' },
        yahooMM: { name: 'Yahoo-MMCrawler', id: 'yahoo-mmcrawler' },
        yahooBlogs: { name: 'Yahoo-Blogs', id: 'yahoo-blogs' },
        askBot: { name: 'Teoma', id: 'ask' },
        gigablast: { name: 'Gigabot', id: 'gigablast' },
        dmoz: { name: 'DMOZbot', id: 'dmoz' },
        nutch: { name: 'Nutch', id: 'nutch' },
        alexa: { name: 'ia_archiver', id: 'alexa' },
        baidu: { name: 'Baiduspider', id: 'baidu' },
        naver: { name: 'NaverBot', id: 'naver' },
        msnPicsearch: { name: 'MSNBot', id: 'msn-picsearch' }
      };

      searchEngineCheckboxes.forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox && checkbox.checked && agentMap[id]) {
          agents.push(agentMap[id]);
        }
      });

      return agents;
    }

    function getSpecificRules(agentId) {
      // Add agent-specific rules here if needed
      switch (agentId) {
        case 'google-image':
          return 'Allow: /images/\nDisallow: /private-images/';
        case 'google-mobile':
          return 'Crawl-delay: 2';
        default:
          return '';
      }
    }

    function copyRobotsTxt() {
      const robotsContent = robotsPreview.textContent;
      
      if (!robotsContent || robotsContent.includes('Generated by Free Robots.txt Generator') && robotsContent.split('\n').length <= 5) {
        showAlert('Please generate robots.txt content first.', 'error');
        return;
      }

      navigator.clipboard.writeText(robotsContent).then(() => {
        showAlert('Robots.txt copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy robots.txt: ' + err, 'error');
      });
    }

    function downloadRobotsTxt() {
      const robotsContent = robotsPreview.textContent;
      
      if (!robotsContent || robotsContent.includes('Generated by Free Robots.txt Generator') && robotsContent.split('\n').length <= 5) {
        showAlert('Please generate robots.txt content first.', 'error');
        return;
      }

      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(robotsContent));
      element.setAttribute('download', 'robots.txt');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      
      showAlert('Robots.txt downloaded successfully!', 'success');
    }

    function validateRobotsTxt() {
      const content = robotsPreview.textContent;
      let isValid = true;
      let errors = [];

      // Basic validation checks
      if (!content.includes('User-agent:')) {
        isValid = false;
        errors.push('Missing User-agent directive');
      }

      if (content.includes('Disallow:') && !content.includes('User-agent:')) {
        isValid = false;
        errors.push('Disallow directive found without User-agent');
      }

      // Check for common syntax errors
      const lines = content.split('\n');
      lines.forEach((line, index) => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#') && trimmed.includes(':')) {
          const parts = trimmed.split(':');
          if (parts.length < 2 || !parts[1].trim()) {
            isValid = false;
            errors.push(`Invalid syntax at line ${index + 1}: "${line}"`);
          }
        }
      });

      if (isValid) {
        showAlert('Robots.txt syntax is valid!', 'success');
      } else {
        showAlert('Robots.txt validation failed: ' + errors.join(', '), 'error');
      }
    }

    function clearForm() {
      // Reset to default values
      document.getElementById('robotsAllowed').checked = true;
      crawlDelay.value = '';
      sitemapUrl.value = '';
      disallowedPaths.value = '';
      allowedPaths.value = '';
      customRules.value = '';
      
      // Check all search engine boxes
      searchEngineCheckboxes.forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox) checkbox.checked = true;
      });
      
      generateRobotsTxt();
      showAlert('Form cleared successfully!', 'success');
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