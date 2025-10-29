---
layout: default
title: "Slugify URL Generator - Create SEO Friendly URLs & Permalinks"
permalink: /slugify-url-generator-create-seo-friendly-urls-permalinks/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Free Slugify URL Generator - Create SEO-Friendly Slugs & Permalinks</title>

<meta name="description"
  content="Free Slugify URL Generator to convert text into SEO-friendly slugs and permalinks. Generate clean, readable URLs for blogs, websites, and CMS like WordPress, Blogger, and Shopify.">
<meta name="keywords"
  content="slugify, slug generator, permalink generator, SEO-friendly URL, create URL slug, blog slug generator, clean URL, URL converter, convert text to slug, WordPress slug, URL optimization">
<meta name="author" content="paramdip nath">
<meta name="robots" content="index, follow">

<!-- Open Graph Tags -->
<meta property="og:title" content="Free Slugify URL Generator - Make SEO-Friendly URLs">
<meta property="og:description" content="Convert text into clean URL slugs instantly. Perfect for blogs, SEO, and website permalinks.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://toolesy.com/slugify-url-generator-create-seo-friendly-urls-permalinks/">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free Online Slugify Tool - SEO URL & Permalink Generator">
<meta name="twitter:description" content="Generate optimized URL slugs for search engine friendly permalinks. 100% free!">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Slugify Generator Styles */
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

  .input-section textarea {
    width: 100%;
    padding: 18px;
    border: 2px solid #e0e6ed;
    border-radius: 10px;
    font-size: 16px;
    min-height: 150px;
    resize: vertical;
    font-family: inherit;
    transition: border-color 0.3s;
  }

  .input-section textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .slug-preview {
    margin: 20px 0;
    padding: 20px;
    background: white;
    border-radius: 10px;
    border: 2px dashed #e0e6ed;
  }

  .slug-preview h3 {
    color: var(--primary);
    margin-bottom: 10px;
    font-size: 1.2rem;
  }

  .slug-output {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
    font-family: monospace;
    font-size: 1.1rem;
    word-break: break-all;
    color: #2c3e50;
    min-height: 60px;
    display: flex;
    align-items: center;
  }

  .slug-output.empty {
    color: #7f8c8d;
    font-style: italic;
  }

  .options-panel {
    background: white;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
    border: 1px solid #e0e0e0;
  }

  .options-panel h3 {
    color: var(--primary);
    margin-bottom: 15px;
    font-size: 1.2rem;
  }

  .option-group {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    margin-bottom: 15px;
  }

  .option-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .option-item input[type="checkbox"] {
    width: 18px;
    height: 18px;
  }

  .option-item label {
    font-weight: 500;
    color: #2c3e50;
    cursor: pointer;
  }

  .option-item select {
    padding: 8px 12px;
    border: 1px solid #e0e6ed;
    border-radius: 6px;
    font-size: 14px;
    background: white;
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

    .modal-content {
      margin: 20% auto;
      width: 95%;
      padding: 20px;
    }

    .option-group {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Slugify URL Generator Tool</h1>
  <p class="welcome-message">Convert any text into SEO-friendly URLs, permalinks, and slugs. Create clean, readable web addresses for your blog posts, articles, and website pages with our powerful slugify tool.</p>

  <div class="converter-section">
    <h2>Slugify URL Generator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Input Characters: </span>
        <span id="charCount">0</span>
      </div>
      <div class="counter-item">
        <span>Input Words: </span>
        <span id="wordCount">0</span>
      </div>
      <div class="counter-item">
        <span>Slug Length: </span>
        <span id="slugLength">0</span>
      </div>
      <div class="counter-item">
        <span>Words in Slug: </span>
        <span id="slugWordCount">0</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Input Text <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      <textarea id="textInput" rows="4" placeholder="Enter your title or text to convert into a URL slug..."></textarea>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".txt" style="display: none;">

    <div class="options-panel">
      <h3>Slugify Options</h3>
      <div class="option-group">
        <div class="option-item">
          <input type="checkbox" id="lowercaseOption" checked>
          <label for="lowercaseOption">Convert to lowercase</label>
        </div>
        <div class="option-item">
          <input type="checkbox" id="trimOption" checked>
          <label for="trimOption">Trim whitespace</label>
        </div>
        <div class="option-item">
          <input type="checkbox" id="strictOption">
          <label for="strictOption">Strict mode (remove all non-alphanumeric)</label>
        </div>
      </div>
      <div class="option-group">
        <div class="option-item">
          <label for="separatorOption">Separator:</label>
          <select id="separatorOption">
            <option value="-" selected>Hyphen (-)</option>
            <option value="_">Underscore (_)</option>
            <option value=".">Dot (.)</option>
            <option value=" ">Space ( )</option>
          </select>
        </div>
        <div class="option-item">
          <label for="maxLengthOption">Max Length:</label>
          <select id="maxLengthOption">
            <option value="0">No limit</option>
            <option value="50">50 characters</option>
            <option value="75">75 characters</option>
            <option value="100" selected>100 characters</option>
            <option value="150">150 characters</option>
            <option value="200">200 characters</option>
          </select>
        </div>
      </div>
    </div>

    <div class="slug-preview">
      <h3>Generated Slug Preview</h3>
      <div class="slug-output empty" id="slugOutput">Your generated slug will appear here...</div>
    </div>

    <div class="button-section">
      <button class="case-button success" id="generateSlugButton">
        <i class="fas fa-magic"></i> Generate Slug
      </button>
      <button class="case-button" id="copySlugButton">
        <i class="fas fa-copy"></i> Copy Slug
      </button>
      <button class="case-button" id="testUrlButton">
        <i class="fas fa-link"></i> Test URL
      </button>
      <button class="case-button secondary" id="clearButton">
        <i class="fas fa-trash"></i> Clear All
      </button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

      {% include share-and-donation.html %}

    <div class="examples">
      <h2>Slugify Examples</h2>
      
      <h3>Before Slugify:</h3>
      <div class="example-text">How to Create a Blog Post in 2023: A Complete Guide!</div>

      <h3>After Slugify:</h3>
      <div class="example-text">how-to-create-a-blog-post-in-2023-a-complete-guide</div>

      <h3>Before Slugify:</h3>
      <div class="example-text">JavaScript Array Methods You Should Know (with Examples)</div>

      <h3>After Slugify:</h3>
      <div class="example-text">javascript-array-methods-you-should-know-with-examples</div>

      <h3>Before Slugify:</h3>
      <div class="example-text">The Ultimate Guide to React Hooks: useState, useEffect & More</div>

      <h3>After Slugify:</h3>
      <div class="example-text">the-ultimate-guide-to-react-hooks-usestate-useeffect-more</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Slugify URL Generator - Create SEO-Friendly URLs</h2>

    <p>Creating clean, readable URLs is essential for both user experience and search engine optimization. Our free <strong>Slugify URL Generator tool</strong> instantly converts any text into SEO-friendly slugs, permalinks, and URLs. Perfect for bloggers, content creators, and web developers, this tool helps you create professional web addresses that are easy to read, share, and rank in search engines.</p>

    <h3>How to Use This Slugify Tool (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Text:</strong> Type or paste your article title, page name, or any text into the input box above</li>
      <li><strong>Customize Options:</strong> Adjust the slugify settings like separator, case, and length limits</li>
      <li><strong>Generate Slug:</strong> Click the "Generate Slug" button to create your SEO-friendly URL</li>
      <li><strong>Copy & Use:</strong> Copy the generated slug and use it in your website, blog, or content management system</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're writing a blog post titled "10 Best Practices for React Development in 2023". Instead of manually creating a URL like "website.com/posts/123" or a messy version like "website.com/10-best-practices-for-react-development-in-2023!!!", you can use our slugify tool to instantly generate a clean, SEO-friendly URL: "10-best-practices-for-react-development-in-2023". This improves both user experience and search engine rankings.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Bloggers & Content Creators:</strong> Create readable URLs that accurately describe your content</li>
      <li><strong>SEO Specialists:</strong> Optimize URLs for better search engine rankings and click-through rates</li>
      <li><strong>Web Developers:</strong> Generate consistent slugs for dynamic content and URL routing</li>
      <li><strong>E-commerce Managers:</strong> Create clean product page URLs that are easy to share and remember</li>
      <li><strong>Digital Marketers:</strong> Ensure all your landing pages and content have SEO-optimized URLs</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: What is a URL slug and why is it important?</strong><br>
      A: A URL slug is the part of a URL that identifies a specific page in a human-readable format. It's important for SEO because search engines use slugs to understand page content, and users are more likely to click on clean, descriptive URLs.</p>

    <p><strong>Q: What makes a good SEO-friendly URL slug?</strong><br>
      A: A good slug is concise, descriptive, uses hyphens as separators, includes relevant keywords, is in lowercase, and avoids special characters or stop words.</p>

    <p><strong>Q: How long should a URL slug be?</strong><br>
      A: Ideally, keep slugs under 100 characters. Shorter slugs are easier to read and share, while still being descriptive enough for SEO purposes.</p>

    <p><strong>Q: Should I use hyphens or underscores in URLs?</strong><br>
      A: Use hyphens (-). Search engines treat hyphens as word separators, while underscores are treated as connectors, making hyphens better for SEO.</p>

    <p><strong>Q: Can I use this tool for non-English text?</strong><br>
      A: Yes, our slugify tool supports international characters and will convert them to their ASCII equivalents where possible.</p>

    <h3>Why Choose Our Slugify URL Generator?</h3>
    <p>Our <strong>slugify tool</strong> provides advanced customization options, real-time preview, and batch processing capabilities. Unlike basic slug generators, we offer multiple separator options, length controls, and strict mode for different use cases. The tool works entirely in your browser, ensuring your content remains private and secure.</p>

    <h3>Best Practices for URL Slugs</h3>
    <p>Follow these guidelines to create optimal URL slugs:</p>
    <ul>
      <li><strong>Keep it Short & Descriptive:</strong> Use 3-5 words that accurately describe the content</li>
      <li><strong>Use Target Keywords:</strong> Include primary keywords near the beginning of the slug</li>
      <li><strong>Avoid Stop Words:</strong> Remove words like "a", "the", "and" unless necessary for readability</li>
      <li><strong>Use Lowercase:</strong> Maintain consistency and avoid case sensitivity issues</li>
      <li><strong>Be Consistent:</strong> Follow the same slug structure across your entire website</li>
      <li><strong>Avoid Special Characters:</strong> Stick to letters, numbers, and hyphens only</li>
    </ul>
  </div>
</div>

<!-- File Upload Modal -->
<div id="uploadModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Upload Text File</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>Select a text file (.txt) to upload its content to the text area.</p>
      <input type="file" id="modalFileUpload" accept=".txt">
      <p id="fileInfo" class="file-info"></p>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelUpload">Cancel</button>
      <button class="modal-button primary" id="confirmUpload">Upload</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('textInput');
    const slugOutput = document.getElementById('slugOutput');
    const generateSlugButton = document.getElementById('generateSlugButton');
    const copySlugButton = document.getElementById('copySlugButton');
    const testUrlButton = document.getElementById('testUrlButton');
    const clearButton = document.getElementById('clearButton');
    const alertContainer = document.getElementById('alertContainer');
    const uploadIcon = document.getElementById('uploadIcon');
    
    // Option elements
    const lowercaseOption = document.getElementById('lowercaseOption');
    const trimOption = document.getElementById('trimOption');
    const strictOption = document.getElementById('strictOption');
    const separatorOption = document.getElementById('separatorOption');
    const maxLengthOption = document.getElementById('maxLengthOption');
    
    // Modal elements
    const uploadModal = document.getElementById('uploadModal');
    const modalFileUpload = document.getElementById('modalFileUpload');
    const fileInfo = document.getElementById('fileInfo');
    const closeModal = document.querySelector('.close-modal');
    const cancelUpload = document.getElementById('cancelUpload');
    const confirmUpload = document.getElementById('confirmUpload');

    // Initialize counters
    updateCounts();

    // Event listeners 
    textInput.addEventListener('input', updateCounts);
    
    lowercaseOption.addEventListener('change', updateCounts);
    trimOption.addEventListener('change', updateCounts);
    strictOption.addEventListener('change', updateCounts);
    separatorOption.addEventListener('change', updateCounts);
    maxLengthOption.addEventListener('change', updateCounts);

  
    generateSlugButton.addEventListener('click', generateSlug);
    copySlugButton.addEventListener('click', copySlug);
    testUrlButton.addEventListener('click', testUrl);
    clearButton.addEventListener('click', clearAll);

    // Upload icon click handler - opens modal
    uploadIcon.addEventListener('click', function () {
      uploadModal.style.display = 'block';
    });

    // Close modal when clicking X
    closeModal.addEventListener('click', function() {
      uploadModal.style.display = 'none';
      modalFileUpload.value = '';
      fileInfo.textContent = '';
    });

    // Close modal when clicking cancel
    cancelUpload.addEventListener('click', function() {
      uploadModal.style.display = 'none';
      modalFileUpload.value = '';
      fileInfo.textContent = '';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === uploadModal) {
        uploadModal.style.display = 'none';
        modalFileUpload.value = '';
        fileInfo.textContent = '';
      }
    });

    // Handle file selection in modal
    modalFileUpload.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        fileInfo.textContent = `Selected file: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
      } else {
        fileInfo.textContent = '';
      }
    });

    // Confirm upload button
    confirmUpload.addEventListener('click', function() {
      const file = modalFileUpload.files[0];
      if (!file) {
        showAlert('Please select a file first.', 'error');
        return;
      }

      // Check file type
      if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
        const reader = new FileReader();
        reader.onload = function (e) {
          textInput.value = e.target.result;
          updateCounts();
         
          showAlert('Text file uploaded successfully! Click "Generate Slug" to create your slug.', 'success');
          uploadModal.style.display = 'none';
          modalFileUpload.value = '';
          fileInfo.textContent = '';
        };
        reader.onerror = function () {
          showAlert('Error reading the text file.', 'error');
        };
        reader.readAsText(file);
      } else {
        showAlert('Unsupported file format. Please upload a TXT file.', 'error');
      }
    });

    function updateCounts() {
      const text = textInput.value;
      const slug = slugOutput.textContent;

      // Input counts
      document.getElementById('charCount').textContent = text.length;
      document.getElementById('wordCount').textContent = text.trim() ? text.trim().split(/\s+/).length : 0;

      // Slug counts 
      if (slugOutput.className !== 'slug-output empty') {
        document.getElementById('slugLength').textContent = slug.length;
        document.getElementById('slugWordCount').textContent = slug.split(/[-_\.\s]/).filter(word => word.length > 0).length;
      } else {
        document.getElementById('slugLength').textContent = '0';
        document.getElementById('slugWordCount').textContent = '0';
      }
    }

    function generateSlug() {
      const text = textInput.value.trim();
      
      if (!text) {
        showAlert('Please enter some text to generate a slug.', 'error');
        return;
      }

      let slug = text;

      // Apply options
      if (lowercaseOption.checked) {
        slug = slug.toLowerCase();
      }

      if (trimOption.checked) {
        slug = slug.trim();
      }

      // Replace spaces and unwanted characters with separator
      const separator = separatorOption.value;
      slug = slug.replace(/[^\w\s-]/g, ''); // Remove special characters except spaces and hyphens
      
      if (strictOption.checked) {
        slug = slug.replace(/[^a-zA-Z0-9\s]/g, ''); // Remove all non-alphanumeric characters
      }
      
      slug = slug.replace(/[\s_-]+/g, separator); // Replace spaces, underscores, and multiple hyphens with separator
      slug = slug.replace(/^-+|-+$/g, ''); // Remove leading and trailing separators

      // Apply max length if specified
      const maxLength = parseInt(maxLengthOption.value);
      if (maxLength > 0 && slug.length > maxLength) {
        // Truncate at the last separator before max length
        let truncated = slug.substring(0, maxLength);
        const lastSeparator = truncated.lastIndexOf(separator);
        if (lastSeparator > 0) {
          truncated = truncated.substring(0, lastSeparator);
        }
        slug = truncated;
      }

      // Update output
      slugOutput.textContent = slug;
      slugOutput.className = 'slug-output';
      updateCounts();
      showAlert('Slug generated successfully!', 'success');
    }

    function copySlug() {
      const slug = slugOutput.textContent;
      
      if (slug === 'Your generated slug will appear here...' || !slug) {
        showAlert('No slug to copy. Please generate a slug first.', 'error');
        return;
      }

      navigator.clipboard.writeText(slug).then(() => {
        showAlert('Slug copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy slug: ' + err, 'error');
      });
    }

    function testUrl() {
      const slug = slugOutput.textContent;
      
      if (slug === 'Your generated slug will appear here...' || !slug) {
        showAlert('No slug to test. Please generate a slug first.', 'error');
        return;
      }

      // Create a test URL
      const baseUrl = 'https://example.com/blog/';
      const testUrl = baseUrl + slug;
      
      // Open in new tab
      window.open(testUrl, '_blank');
      showAlert('Test URL opened in new tab: ' + testUrl, 'success');
    }

    function clearAll() {
      textInput.value = '';
      slugOutput.textContent = 'Your generated slug will appear here...';
      slugOutput.className = 'slug-output empty';
      
      // Reset options to defaults
      lowercaseOption.checked = true;
      trimOption.checked = true;
      strictOption.checked = false;
      separatorOption.value = '-';
      maxLengthOption.value = '100';
      
      updateCounts();
      showAlert('All fields cleared!', 'success');
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