---
layout: default
title: "Meta Tag Generator - Create SEO Meta Tags Instantly"
permalink: /meta-tag-generator-create-seo-meta-tags-instantly/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Meta Tag Generator - Create SEO Meta Tags Instantly</title>
<meta name="description"
  content="Free online meta tag generator tool. Create optimized SEO meta tags for your website including title, description, keywords, and robots directives instantly.">
<meta name="keywords"
  content="meta tag generator, seo meta tags, meta tags creator, html meta tags, meta description generator, meta keywords generator, robots meta tag, seo tool">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Meta Tag Generator Styles */
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
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .generator-section p {
    margin-bottom: 15px;
    line-height: 1.8;
    color: #333;
  }

  .form-group {
    margin-bottom: 25px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #2c3e50;
  }

  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e6ed;
    border-radius: 6px;
    font-size: 16px;
    transition: border-color 0.3s;
    font-family: inherit;
  }

  .form-group input:focus,
  .form-group textarea:focus,
  .form-group select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .form-group textarea {
    min-height: 100px;
    resize: vertical;
  }

  .character-count {
    text-align: right;
    font-size: 14px;
    color: #7f8c8d;
    margin-top: 5px;
  }

  .character-count.warning {
    color: #e74c3c;
    font-weight: bold;
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

  .meta-tags-preview {
    background: #34495e;
    padding: 20px;
    border-radius: 6px;
    font-family: 'Courier New', monospace;
    white-space: pre-wrap;
    word-wrap: break-word;
    max-height: 400px;
    overflow-y: auto;
  }

  .meta-tags-preview pre {
  margin: 0;
  font-family: 'Courier New', monospace;
  white-space: pre-wrap;
  word-wrap: break-word;
  color: #ecf0f1;
  background: transparent;
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
  <h1>Free Meta Tag Generator</h1>
  <p class="welcome-message">Create optimized SEO meta tags for your website instantly. Generate title, description, keywords, and robots meta tags for better search engine visibility.</p>

  <div class="generator-section">
    <h2>Meta Tag Generator</h2>

    <div class="form-group">
      <label for="siteTitle">Site Title <span style="color: #e74c3c;">*</span></label>
      <input type="text" id="siteTitle" placeholder="Enter your website title (max 70 characters)" maxlength="70">
      <div class="character-count" id="titleCount">0/70 characters</div>
    </div>

    <div class="form-group">
      <label for="siteDescription">Site Description <span style="color: #e74c3c;">*</span></label>
      <textarea id="siteDescription" placeholder="Enter your website description (max 150 characters)" maxlength="150"></textarea>
      <div class="character-count" id="descriptionCount">0/150 characters</div>
    </div>

    <div class="form-group">
      <label for="siteKeywords">Site Keywords (Separate with commas)</label>
      <input type="text" id="siteKeywords" placeholder="keyword1, keyword2, keyword3">
      <div class="character-count" id="keywordsCount">0 keywords</div>
    </div>

    <div class="form-group">
      <label>Allow robots to index your website?</label>
      <div class="radio-group">
        <div class="radio-option">
          <input type="radio" id="robotsIndexYes" name="robotsIndex" value="index" checked>
          <label for="robotsIndexYes">Yes</label>
        </div>
        <div class="radio-option">
          <input type="radio" id="robotsIndexNo" name="robotsIndex" value="noindex">
          <label for="robotsIndexNo">No</label>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label>Allow robots to follow all links?</label>
      <div class="radio-group">
        <div class="radio-option">
          <input type="radio" id="robotsFollowYes" name="robotsFollow" value="follow" checked>
          <label for="robotsFollowYes">Yes</label>
        </div>
        <div class="radio-option">
          <input type="radio" id="robotsFollowNo" name="robotsFollow" value="nofollow">
          <label for="robotsFollowNo">No</label>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label for="contentType">What type of content will your site display?</label>
      <select id="contentType">
        <option value="UTF-8" selected>UTF-8</option>
        <option value="ISO-8859-1">ISO-8859-1</option>
        <option value="windows-1252">Windows-1252</option>
      </select>
    </div>

    <div class="form-group">
      <label for="siteLanguage">What is your site primary language?</label>
      <select id="siteLanguage">
        <option value="en" selected>English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="it">Italian</option>
        <option value="pt">Portuguese</option>
        <option value="ru">Russian</option>
        <option value="zh">Chinese</option>
        <option value="ja">Japanese</option>
        <option value="ar">Arabic</option>
      </select>
    </div>

    <div class="form-group">
      <label for="revisitAfter">Search engines should revisit this page after (days)</label>
      <input type="number" id="revisitAfter" placeholder="7" min="1" max="365" value="7">
    </div>

    <div class="form-group">
      <label for="authorName">Author</label>
      <input type="text" id="authorName" placeholder="Your Name or Company Name">
    </div>

    <div class="preview-section">
      <h3>Generated Meta Tags Preview</h3>
      <div class="meta-tags-preview" id="metaTagsPreview">
        <!-- Generated meta tags will appear here -->
        Your generated meta tags will appear here...
      </div>
    </div>

    <div class="button-section">
      <button class="action-button" data-action="generate">Generate Meta Tags</button>
      <button class="action-button success" data-action="copy">Copy to Clipboard</button>
      <button class="action-button" data-action="download">Download as HTML</button>
      <button class="action-button secondary" data-action="clear">Clear All</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Meta Tag Examples</h2>

      <h3>Basic Meta Tags Example:</h3>
      <div class="example-text">&lt;title&gt;Web Design Services - Professional Website Development&lt;/title&gt;
&lt;meta name="description" content="Professional web design and development services. We create responsive, SEO-friendly websites that drive results for your business."&gt;
&lt;meta name="keywords" content="web design, website development, responsive design, SEO, web development"&gt;
&lt;meta name="author" content="Your Company Name"&gt;
&lt;meta name="robots" content="index, follow"&gt;
&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</div>

      <h3>Advanced Meta Tags Example:</h3>
      <div class="example-text">&lt;title&gt;Best Coffee Shop in Downtown | Artisan Coffee & Bakery&lt;/title&gt;
&lt;meta name="description" content="Visit the best artisan coffee shop in downtown. We serve premium coffee, fresh pastries, and provide a cozy atmosphere for coffee lovers."&gt;
&lt;meta name="keywords" content="coffee shop, artisan coffee, bakery, espresso, cappuccino, pastries, downtown cafe"&gt;
&lt;meta name="author" content="Downtown Coffee Co."&gt;
&lt;meta name="robots" content="index, follow"&gt;
&lt;meta name="revisit-after" content="7 days"&gt;
&lt;meta http-equiv="Content-Language" content="en"&gt;
&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Meta Tag Generator - Create SEO-Optimized Meta Tags</h2>

    <p>Our free <strong>Meta Tag Generator</strong> helps you create perfectly optimized meta tags for your website in seconds. Meta tags are crucial for SEO as they provide search engines with important information about your web pages. With this tool, you can generate all essential meta tags including title, description, keywords, and robots directives without any technical knowledge required.</p>

    <h3>How to Use This Meta Tag Generator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Site Title:</strong> Write a compelling title for your webpage (maximum 70 characters for optimal display in search results).</li>
      <li><strong>Write Description:</strong> Create an engaging meta description that summarizes your page content (maximum 150 characters).</li>
      <li><strong>Add Keywords:</strong> Include relevant keywords separated by commas to help search engines understand your content.</li>
      <li><strong>Configure Robots:</strong> Choose whether search engines should index your page and follow links.</li>
      <li><strong>Set Language & Encoding:</strong> Select your primary language and character encoding (UTF-8 recommended).</li>
      <li><strong>Generate & Copy:</strong> Click "Generate Meta Tags" and then copy the code to your website's HTML head section.</li>
    </ul>

    <h3>Why Meta Tags Are Important for SEO:</h3>
    <p>Meta tags play a vital role in search engine optimization. The <strong>title tag</strong> is one of the most important ranking factors and appears as the clickable headline in search results. The <strong>meta description</strong> doesn't directly affect rankings but influences click-through rates by providing a compelling summary. <strong>Robots meta tags</strong> control how search engines crawl and index your pages, while <strong>charset and viewport tags</strong> ensure proper display across all devices.</p>

    <h3>Best Practices for Meta Tags:</h3>
    <ul>
      <li><strong>Title Tags:</strong> Keep under 60 characters, include primary keywords, make it compelling</li>
      <li><strong>Meta Descriptions:</strong> Stay under 155 characters, include call-to-action, contain relevant keywords</li>
      <li><strong>Keywords:</strong> Use 3-5 relevant keywords, avoid keyword stuffing, be specific</li>
      <li><strong>Robots Directives:</strong> Use "index, follow" for public pages, "noindex" for private pages</li>
      <li><strong>Viewport Tag:</strong> Always include for mobile responsiveness</li>
      <li><strong>Charset:</strong> Use UTF-8 for broad character support</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>What is the ideal length for meta titles and descriptions?</strong><br>
      Meta titles should be under 60 characters and descriptions under 155 characters to display properly in search results without truncation.</p>

    <p><strong>Are meta keywords still important for SEO?</strong><br>
      Most major search engines no longer use meta keywords for ranking, but some smaller search engines still consider them. It's good practice to include them but don't spend too much time optimizing them.</p>

    <p><strong>What's the difference between index/follow and noindex/nofollow?</strong><br>
      "index" allows search engines to include the page in their index, "follow" allows them to follow links on the page. "noindex" prevents indexing, "nofollow" prevents link following.</p>

    <p><strong>Do I need to add meta tags to every page on my website?</strong><br>
      Yes, each page should have unique meta tags tailored to its specific content for optimal SEO performance.</p>

    <p><strong>Can I use this tool for commercial websites?</strong><br>
      Absolutely! This tool is completely free for personal and commercial use. There are no limitations or hidden costs.</p>

    <h3>Common Meta Tag Mistakes to Avoid:</h3>
    <ul>
      <li><strong>Duplicate Meta Tags:</strong> Using the same title and description across multiple pages</li>
      <li><strong>Keyword Stuffing:</strong> Overusing keywords in titles and descriptions</li>
      <li><strong>Missing Viewport Tag:</strong> Forgetting to include responsive design meta tag</li>
      <li><strong>Too Long Titles:</strong> Creating titles that get cut off in search results</li>
      <li><strong>Vague Descriptions:</strong> Writing descriptions that don't accurately describe page content</li>
    </ul>

    <h3>Advanced Meta Tags for Specific Needs:</h3>
    <p>Beyond the basic meta tags, you can also add specialized meta tags for social media (Open Graph for Facebook, Twitter Cards for Twitter), verification tags for Google Search Console, and structured data markup for rich snippets. While this generator focuses on essential SEO meta tags, these additional tags can further enhance your website's visibility and performance across different platforms.</p>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // Form elements
    const siteTitle = document.getElementById('siteTitle');
    const siteDescription = document.getElementById('siteDescription');
    const siteKeywords = document.getElementById('siteKeywords');
    const robotsIndex = document.querySelectorAll('input[name="robotsIndex"]');
    const robotsFollow = document.querySelectorAll('input[name="robotsFollow"]');
    const contentType = document.getElementById('contentType');
    const siteLanguage = document.getElementById('siteLanguage');
    const revisitAfter = document.getElementById('revisitAfter');
    const authorName = document.getElementById('authorName');
    
    // Counters
    const titleCount = document.getElementById('titleCount');
    const descriptionCount = document.getElementById('descriptionCount');
    const keywordsCount = document.getElementById('keywordsCount');
    
    // Preview and buttons
    const metaTagsPreview = document.getElementById('metaTagsPreview');
    const actionButtons = document.querySelectorAll('.action-button');
    const alertContainer = document.getElementById('alertContainer');

    // Initialize character counters
    updateCharacterCounts();

    // Event listeners
    siteTitle.addEventListener('input', updateCharacterCounts);
    siteDescription.addEventListener('input', updateCharacterCounts);
    siteKeywords.addEventListener('input', updateCharacterCounts);

    actionButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleAction(action);
      });
    });

    function updateCharacterCounts() {
      // Title count
      const titleLength = siteTitle.value.length;
      titleCount.textContent = `${titleLength}/70 characters`;
      if (titleLength > 70) {
        titleCount.classList.add('warning');
      } else {
        titleCount.classList.remove('warning');
      }

      // Description count
      const descriptionLength = siteDescription.value.length;
      descriptionCount.textContent = `${descriptionLength}/150 characters`;
      if (descriptionLength > 150) {
        descriptionCount.classList.add('warning');
      } else {
        descriptionCount.classList.remove('warning');
      }

      // Keywords count
      const keywords = siteKeywords.value.split(',').filter(k => k.trim() !== '');
      keywordsCount.textContent = `${keywords.length} keywords`;
    }

    function handleAction(action) {
      switch (action) {
        case 'generate':
          generateMetaTags();
          break;

        case 'copy':
          copyMetaTags();
          break;

        case 'download':
          downloadMetaTags();
          break;

        case 'clear':
          clearForm();
          break;
      }
    }

function generateMetaTags() {
  // Get form values
  const title = siteTitle.value.trim();
  const description = siteDescription.value.trim();
  const keywords = siteKeywords.value.trim();
  
  // Get selected robots values
  let robotsIndexValue = 'index';
  let robotsFollowValue = 'follow';
  
  robotsIndex.forEach(radio => {
    if (radio.checked) robotsIndexValue = radio.value;
  });
  
  robotsFollow.forEach(radio => {
    if (radio.checked) robotsFollowValue = radio.value;
  });
  
  const charset = contentType.value;
  const language = siteLanguage.value;
  const revisit = revisitAfter.value;
  const author = authorName.value.trim();

  // Validate required fields
  if (!title) {
    showAlert('Please enter a site title.', 'error');
    return;
  }

  if (!description) {
    showAlert('Please enter a site description.', 'error');
    return;
  }

  // Generate meta tags
  let metaTags = '';

  // Title tag
  metaTags += `<title>${escapeHtml(title)}</title>\n`;

  // Description meta tag
  metaTags += `<meta name="description" content="${escapeHtml(description)}">\n`;

  // Keywords meta tag (if provided)
  if (keywords) {
    metaTags += `<meta name="keywords" content="${escapeHtml(keywords)}">\n`;
  }

  // Author meta tag (if provided)
  if (author) {
    metaTags += `<meta name="author" content="${escapeHtml(author)}">\n`;
  }

  // Robots meta tag
  const robotsContent = robotsIndexValue === 'noindex' || robotsFollowValue === 'nofollow' 
    ? `${robotsIndexValue}, ${robotsFollowValue}` 
    : 'index, follow';
  metaTags += `<meta name="robots" content="${robotsContent}">\n`;

  // Charset meta tag
  metaTags += `<meta charset="${charset}">\n`;

  // Viewport meta tag (always included for responsiveness)
  metaTags += `<meta name="viewport" content="width=device-width, initial-scale=1.0">\n`;

  // Revisit-after meta tag (if provided and valid)
  if (revisit && revisit > 0) {
    metaTags += `<meta name="revisit-after" content="${revisit} days">\n`;
  }

  // Content language meta tag
  metaTags += `<meta http-equiv="Content-Language" content="${language}">`;

  // Set preview - use innerHTML instead of textContent to render actual HTML
  metaTagsPreview.innerHTML = `<pre>${metaTags}</pre>`;

  showAlert('Meta tags generated successfully!', 'success');
}

    function downloadMetaTags() {
      const metaTags = metaTagsPreview.textContent;
      
      if (metaTags === 'Your generated meta tags will appear here...') {
        showAlert('Please generate meta tags first.', 'error');
        return;
      }

      const htmlContent = `<!DOCTYPE html>
<html lang="${siteLanguage.value}">
<head>
${metaTags}
</head>
<body>
<!-- Your website content goes here -->
</body>
</html>`;

      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(htmlContent));
      element.setAttribute('download', 'meta-tags.html');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      
      showAlert('Meta tags downloaded successfully!', 'success');
    }

    function clearForm() {
      siteTitle.value = '';
      siteDescription.value = '';
      siteKeywords.value = '';
      
      // Reset radio buttons to default
      document.getElementById('robotsIndexYes').checked = true;
      document.getElementById('robotsFollowYes').checked = true;
      
      // Reset selects to default
      contentType.value = 'UTF-8';
      siteLanguage.value = 'en';
      revisitAfter.value = '7';
      authorName.value = '';
      
      // Reset preview
      metaTagsPreview.textContent = 'Your generated meta tags will appear here...';
      
      updateCharacterCounts();
      showAlert('Form cleared successfully!', 'success');
    }

    function escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
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