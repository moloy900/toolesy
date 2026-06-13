---
layout: default
title: "YouTube Video Meta Data Extractor - Get Video Details"
permalink: /youtube-video-metadata-extractor/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free YouTube Video Meta Data Extractor - Get Video Details Instantly</title>
<meta name="description"
  content="Free online YouTube video Meta Data extractor. Get YouTube video title, channel name, upload date, views, description, hashtags, keywords, and likes instantly.">
<meta name="keywords"
  content="youtube video info extractor, youtube metadata extractor, get youtube video details, youtube video information, youtube video data, youtube analytics extractor, youtube video metadata">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* YouTube Metadata Extractor Styles */
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

  .url-input-section {
    margin: 30px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .url-input-group {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .url-input {
    padding: 15px;
    border: 2px solid #e0e6ed;
    border-radius: 10px;
    font-size: 16px;
    width: 100%;
    transition: border-color 0.3s;
  }

  .url-input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .url-input::placeholder {
    color: #999;
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

  .case-button.danger {
    background: #dc3545;
    color: white;
  }

  .case-button.danger:hover {
    background: #c82333;
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

  .alert .close {
    cursor: pointer;
    font-weight: bold;
  }

  .metadata-display {
    margin: 30px 0;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: none;
  }

  .metadata-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 2px solid #f0f0f0;
  }

  .metadata-title {
    color: var(--primary);
    margin: 0;
    font-size: 1.5rem;
  }

  .metadata-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }

  .metadata-card {
    background: #f8f9fa;
    border-radius: 8px;
    padding: 20px;
    border-left: 4px solid var(--primary);
    transition: transform 0.3s ease;
  }

  .metadata-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  }

  .metadata-label {
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 8px;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .metadata-value {
    color: #333;
    word-break: break-word;
    font-size: 1.1rem;
    line-height: 1.5;
  }

  .metadata-description {
    grid-column: 1 / -1;
    background: #f8f9fa;
    border-radius: 8px;
    padding: 20px;
    border-left: 4px solid #28a745;
  }

  .tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
  }

  .tag {
    padding: 5px 12px;
    background: #e3f2fd;
    color: #1565c0;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
  }

  .hashtag {
    padding: 5px 12px;
    background: #f3e5f5;
    color: #7b1fa2;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
  }

  .stats-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    margin-top: 20px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    border: 1px solid #e0e0e0;
  }

  .stat-item {
    text-align: center;
    padding: 15px;
  }

  .stat-number {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--primary);
    margin-bottom: 5px;
  }

  .stat-label {
    color: #666;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .raw-data-section {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .raw-data-title {
    color: #2c3e50;
    margin-bottom: 15px;
    font-size: 1.2rem;
  }

  .raw-data-pre {
    background: white;
    padding: 15px;
    border-radius: 8px;
    font-family: 'Courier New', monospace;
    font-size: 13px;
    overflow-x: auto;
    white-space: pre-wrap;
    word-break: break-all;
  }

  .export-section {
    margin-top: 20px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
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

  .loading-spinner {
    display: none;
    text-align: center;
    padding: 30px;
    margin: 20px 0;
  }

  .spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid var(--primary);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    margin: 0 auto 20px;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .api-source-info {
    margin-top: 15px;
    padding: 15px;
    background: #e8f4fc;
    border-radius: 8px;
    font-size: 14px;
    color: #2c3e50;
  }

  .source-badge {
    display: inline-block;
    padding: 3px 8px;
    background: var(--primary);
    color: white;
    border-radius: 4px;
    font-size: 12px;
    margin-right: 5px;
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

    .metadata-grid {
      grid-template-columns: 1fr;
    }

    .metadata-header {
      flex-direction: column;
      gap: 15px;
      align-items: flex-start;
    }

    .stats-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>

<div class="converter-container">
  <h1>Free YouTube Metadata Extractor </h1>
  <p class="welcome-message">Extract real YouTube video metadata instantly. Get genuine video title, channel name, upload date, views, description, hashtags, keyword tags, likes, and all metadata directly from YouTube.</p>

  <div class="converter-section">
    <h2>YouTube Real Metadata Extractor</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Video ID: </span>
        <span id="videoId">Not extracted</span>
      </div>
      <div class="counter-item">
        <span>Data Fields Extracted: </span>
        <span id="dataCount">0</span>
      </div>
      <div class="counter-item">
        <span>API Sources Used: </span>
        <span id="apiSources">2</span>
      </div>
      <div class="counter-item">
        <span>Extraction Status: </span>
        <span id="extractionStatus">Ready</span>
      </div>
    </div>

    <div class="url-input-section">
      <h2>Enter YouTube Video URL</h2>
      <div class="url-input-group">
        <input type="text" id="youtubeUrl" class="url-input" placeholder="Paste YouTube video URL here (e.g., https://www.youtube.com/watch?v=ox2ScaPXDcg)">
        <div class="api-source-info">
          <span class="source-badge">oEmbed</span> <span class="source-badge">NoEmbed</span>
          This tool uses public APIs (oEmbed & NoEmbed) to extract genuine metadata without requiring any API key.
        </div>
        <div class="button-section">
          <button class="case-button" data-action="extract"><i class="fas fa-download"></i> Extract Metadata</button>
          <button class="case-button success" data-action="export"><i class="fas fa-file-export"></i> Export Data</button>
          <button class="case-button secondary" data-action="clear"><i class="fas fa-broom"></i> Clear</button>
          <button class="case-button warning" data-action="example"><i class="fas fa-play-circle"></i> Try Example</button>
        </div>
      </div>
    </div>

    <div class="loading-spinner" id="loadingSpinner">
      <div class="spinner"></div>
      <p>Extracting genuine metadata from YouTube...</p>
      <p class="small">Using oEmbed and NoEmbed APIs</p>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="metadata-display" id="metadataDisplay">
      <div class="metadata-header">
        <h3 class="metadata-title">Extracted YouTube Metadata</h3>
        <div class="button-section" style="grid-template-columns: repeat(2, auto);">
          <button class="case-button" data-action="copyAll"><i class="fas fa-copy"></i> Copy All</button>
          <button class="case-button success" data-action="refresh"><i class="fas fa-sync-alt"></i> Refresh</button>
        </div>
      </div>

      <div class="metadata-grid" id="metadataGrid">
        <!-- Metadata cards will be inserted here -->
      </div>

      <div class="stats-container" id="statsContainer">
        <!-- Statistics will be inserted here -->
      </div>

      <div class="metadata-description" id="descriptionCard">
        <div class="metadata-label">Video Description</div>
        <div class="metadata-value" id="descriptionText">Description will appear here...</div>
      </div>

      <div class="raw-data-section" id="rawDataSection" style="display: none;">
        <h4 class="raw-data-title">Raw API Response Data</h4>
        <pre class="raw-data-pre" id="rawDataPre"></pre>
      </div>
    </div>

    <div class="export-section" id="exportSection" style="display: none;">
      <button class="case-button" data-action="copyJson"><i class="fas fa-code"></i> Copy JSON</button>
      <button class="case-button success" data-action="downloadJson"><i class="fas fa-file-code"></i> Download JSON</button>
      <button class="case-button" data-action="downloadCsv"><i class="fas fa-file-csv"></i> Download CSV</button>
      <button class="case-button warning" data-action="showRaw"><i class="fas fa-eye"></i> Show Raw Data</button>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Real Working Examples</h2>

      <h3>How this real metadata extractor works:</h3>
      <div class="example-text">1. Uses YouTube's public oEmbed API (https://www.youtube.com/oembed)
2. Uses NoEmbed service (https://noembed.com) for additional metadata
3. Combines data from both sources
4. Extracts hashtags from description using regex
5. Presents clean, organized metadata without API key</div>

      <h3>Example URLs you can try:</h3>
      <div class="example-text">• https://www.youtube.com/watch?v=ox2ScaPXDcg
• https://youtu.be/9bZkp7q19f0
• https://www.youtube.com/shorts/KGPQzTImrBQ
• https://www.youtube.com/watch?v=dQw4w9WgXcQ
• https://www.youtube.com/embed/L_jWHffIx5E</div>

      <h3>What genuine data you'll get:</h3>
      <div class="example-text">✓ Real video title (from oEmbed API)
✓ Actual channel name (from oEmbed API)
✓ Genuine upload date (from NoEmbed)
✓ Real view count (from NoEmbed)
✓ Full description (from NoEmbed)
✓ Extracted hashtags (parsed from description)
✓ Keyword tags (if available in API)
✓ Author information
✓ Thumbnail URLs</div>
    </div>
  </div>

<!-- SEO Content Section -->
<div class="content-placeholder">
  <h2>Free YouTube Metadata Extractor – Extract Video Information Instantly Without API Keys</h2>

  <p>Need quick access to YouTube video information without signing up for developer accounts or managing complicated API credentials? Our <strong>YouTube Metadata Extractor</strong> makes the process simple. Just paste a YouTube video URL and instantly retrieve valuable metadata such as video title, channel name, thumbnail information, publication details, descriptions, hashtags, and other publicly available information.</p>

  <p>Whether you're a content creator researching competitors, a marketer analyzing successful videos, a student learning about data extraction, or a developer testing integrations, this tool provides an easy way to gather video information without technical barriers.</p>

  <p>Unlike traditional solutions that require API authentication and quota management, this extractor utilizes publicly accessible metadata sources to deliver useful information quickly and efficiently. Everything happens within seconds, allowing you to focus on analysis rather than setup.</p>

  <h3>How to Use This YouTube Metadata Extractor (Step-by-Step)</h3>

  <p>Using the tool requires only a few simple steps.</p>

  <ul>
    <li><strong>Find a YouTube Video:</strong> Open YouTube and locate the video you want to analyze.</li>

    <li><strong>Copy the Video URL:</strong> Copy the link directly from your browser's address bar or use YouTube's share feature.</li>

    <li><strong>Paste the URL:</strong> Insert the copied link into the extractor's input field.</li>

    <li><strong>Start Extraction:</strong> Click the extraction button to retrieve available metadata.</li>

    <li><strong>Review Results:</strong> Browse the extracted information presented in a structured format.</li>

    <li><strong>Export Data:</strong> Download the information in JSON or CSV format for further analysis if supported.</li>
  </ul>

  <h3>What Is YouTube Metadata?</h3>

  <p>YouTube metadata refers to the information associated with a video beyond the video content itself. This data helps YouTube organize, categorize, recommend, and display videos across its platform.</p>

  <p>Metadata can include details such as the video title, channel name, thumbnail image, description, publication date, hashtags, category information, and other publicly available attributes.</p>

  <p>For content creators and marketers, metadata offers valuable insights into how successful videos are positioned, optimized, and presented to audiences.</p>

  <h3>Why Metadata Matters</h3>

  <p>Metadata plays a major role in video discoverability. Titles help attract clicks, descriptions provide context, and hashtags improve content categorization. Together, these elements influence how videos appear in search results and recommendations.</p>

  <p>Analyzing metadata from successful videos can help creators identify patterns, understand audience interests, and improve their own content strategies.</p>

  <p>For researchers and analysts, metadata serves as a valuable source of information for studying trends, content performance, and creator behavior across different niches.</p>

  <h3>Real-World Example</h3>

  <p>Imagine you're planning to launch a YouTube channel focused on personal finance. Before creating content, you want to understand how top-performing creators structure their videos.</p>

  <p>Using the metadata extractor, you can quickly review titles, descriptions, hashtags, publication information, and other available metadata from successful finance channels. This helps you identify common optimization techniques without manually examining dozens of videos one by one.</p>

  <p>The insights gained from metadata analysis can help guide your content planning, keyword research, and overall channel strategy.</p>

  <h3>Benefits of Using a YouTube Metadata Extractor</h3>

  <ul>
    <li><strong>No API Key Required:</strong> Access useful video information without developer registration.</li>

    <li><strong>Fast Results:</strong> Retrieve metadata within seconds.</li>

    <li><strong>User-Friendly Interface:</strong> No technical expertise required.</li>

    <li><strong>Supports Multiple Use Cases:</strong> Useful for creators, marketers, students, researchers, and developers.</li>

    <li><strong>Data Export Options:</strong> Save information for analysis and reporting.</li>

    <li><strong>Works Directly in Your Browser:</strong> No software installation required.</li>
  </ul>

  <h3>Who Should Use This Tool?</h3>

  <ul>
    <li><strong>Content Creators:</strong> Research successful videos and optimize future content.</li>

    <li><strong>Digital Marketers:</strong> Analyze competitors and identify content trends.</li>

    <li><strong>Developers:</strong> Test workflows involving public video metadata.</li>

    <li><strong>Researchers:</strong> Collect data for studies and reporting.</li>

    <li><strong>Students:</strong> Learn about APIs, metadata structures, and data extraction.</li>

    <li><strong>SEO Professionals:</strong> Examine how videos are optimized for search visibility.</li>
  </ul>

  <h3>Frequently Asked Questions</h3>

  <p><strong>Do I need a Google account to use this tool?</strong><br>
  No. The extractor works without requiring a Google account or YouTube login.</p>

  <p><strong>Is the extracted information real?</strong><br>
  Yes. The tool retrieves publicly available metadata associated with YouTube videos whenever available.</p>

  <p><strong>Can I export the results?</strong><br>
  Many implementations support exporting data into formats such as JSON or CSV for further analysis.</p>

  <p><strong>Is the tool free?</strong><br>
  Yes. The extractor is completely free to use.</p>

  <p><strong>Will it work on mobile devices?</strong><br>
  Yes. The tool is designed to function on smartphones, tablets, laptops, and desktop computers.</p>

<h3>Understanding the Different Types of YouTube Metadata</h3>

<p>When analyzing a YouTube video, it's important to understand that metadata consists of multiple elements working together. Each component provides unique information about the content and its presentation.</p>

<ul>
  <li><strong>Video Title:</strong> The primary headline used to attract viewers and communicate the video's topic.</li>

  <li><strong>Channel Name:</strong> Identifies the creator or organization that published the content.</li>

  <li><strong>Description:</strong> Provides additional context, links, resources, and information about the video.</li>

  <li><strong>Thumbnail Information:</strong> Displays the image used to encourage clicks.</li>

  <li><strong>Publication Date:</strong> Indicates when the video was originally published.</li>

  <li><strong>Hashtags:</strong> Help categorize content and improve discoverability.</li>

  <li><strong>Video URL:</strong> The unique address used to access the content.</li>
</ul>

<h3>Common Applications of Metadata Analysis</h3>

<p>Extracting metadata is useful for a wide variety of professional and educational purposes.</p>

<ul>
  <li><strong>Competitor Research:</strong> Study how successful channels structure their videos.</li>

  <li><strong>Content Planning:</strong> Identify common keywords and topics used within a niche.</li>

  <li><strong>Market Research:</strong> Understand trends and audience interests.</li>

  <li><strong>Academic Projects:</strong> Gather structured data for research papers and studies.</li>

  <li><strong>Software Development:</strong> Test applications that interact with public video information.</li>

  <li><strong>SEO Analysis:</strong> Evaluate optimization strategies used by top-performing videos.</li>
</ul>

<h3>How Content Creators Use Metadata Research</h3>

<p>Successful creators often spend significant time studying their competitors. Metadata analysis provides valuable insights into what works within a specific niche.</p>

<p>By reviewing video titles, descriptions, hashtags, and publishing patterns, creators can identify opportunities to improve their own content strategy. This doesn't mean copying competitors; rather, it helps reveal audience expectations and industry trends.</p>

<p>For example, a technology channel may discover that tutorial videos perform better when titles focus on solutions rather than product specifications. Such insights can improve content planning and audience engagement.</p>

<h3>Advantages Over Manual Research</h3>

<p>Manually reviewing video information can be time-consuming, especially when analyzing large numbers of videos.</p>

<p>A metadata extractor streamlines the process by gathering information automatically. Instead of opening multiple videos and copying details one by one, users can quickly collect structured information for comparison and analysis.</p>

<p>This efficiency makes metadata extraction particularly valuable for researchers, agencies, and businesses working with large datasets.</p>

<h3>Technical Overview</h3>

<p>The extractor works by retrieving publicly available information associated with YouTube videos. Depending on the implementation, information may be collected through publicly accessible endpoints and metadata services.</p>

<p>The process generally involves identifying the video's unique ID, retrieving available metadata, organizing the information into a structured format, and presenting it to the user.</p>

<p>All of this occurs automatically, allowing users to access useful information without programming knowledge.</p>

<h3>Privacy and Security Considerations</h3>

<p>The tool only works with publicly available video information. It does not require access to personal accounts, passwords, or private YouTube data.</p>

<p>Because the extractor focuses solely on public metadata, users can gather information without exposing sensitive personal information.</p>

<p>This makes the tool suitable for educational, research, and professional use cases.</p>

<h3>Frequently Asked Questions</h3>

<p><strong>Can I extract metadata from private videos?</strong><br>
No. Only publicly accessible videos can be analyzed.</p>

<p><strong>Will the extractor work with YouTube Shorts?</strong><br>
In many cases, yes. Public Shorts often contain metadata that can be retrieved similarly to standard videos.</p>

<p><strong>Can I analyze multiple videos?</strong><br>
Yes. Users can repeat the extraction process for as many public videos as needed.</p>

<p><strong>Is there a usage limit?</strong><br>
Most implementations allow generous usage for normal research and analysis purposes.</p>

<p><strong>Do I need programming knowledge?</strong><br>
No. The tool is designed for users of all technical skill levels.</p>

<h3>Why Choose Our YouTube Metadata Extractor?</h3>

<p>There are many metadata tools available online, but simplicity and accessibility are often missing. Our extractor is designed to make metadata analysis easy for everyone.</p>

<p>You don't need developer credentials, API management experience, or advanced technical skills. Simply paste a video URL and receive structured information within seconds.</p>

<p>The combination of speed, ease of use, and practical functionality makes this tool valuable for creators, researchers, marketers, educators, students, and developers alike.</p>

<h3>Best Practices for Metadata Analysis</h3>

<p>If you're using metadata for research or optimization purposes, consider following these best practices:</p>

<ul>
  <li>Analyze multiple videos rather than relying on a single example.</li>

  <li>Look for patterns in titles, descriptions, and hashtags.</li>

  <li>Compare successful and less successful videos within the same niche.</li>

  <li>Focus on audience intent rather than simply copying keywords.</li>

  <li>Use metadata insights as inspiration rather than duplication.</li>

  <li>Combine metadata analysis with broader content research.</li>
</ul>

<h3>Limitations to Keep in Mind</h3>

<p>While metadata extraction can provide valuable insights, it's important to understand its limitations.</p>

<ul>
  <li>Some information may not be publicly available.</li>

  <li>Private, deleted, or restricted videos cannot be analyzed.</li>

  <li>Available metadata may vary between videos.</li>

  <li>Public metadata does not reveal every factor influencing video performance.</li>

  <li>Additional analytics may require official platform tools and permissions.</li>
</ul>

<p>Despite these limitations, metadata remains one of the most accessible and useful sources of information for content analysis and research.</p>

<h3>Use Cases Across Different Industries</h3>

<ul>
  <li><strong>Marketing Agencies:</strong> Conduct competitor analysis and campaign research.</li>

  <li><strong>Educational Institutions:</strong> Study content trends and digital media practices.</li>

  <li><strong>Software Companies:</strong> Test integrations involving public video information.</li>

  <li><strong>Media Researchers:</strong> Build datasets for analysis and reporting.</li>

  <li><strong>Content Teams:</strong> Discover optimization opportunities and content ideas.</li>

  <li><strong>Independent Creators:</strong> Improve video planning and publishing strategies.</li>
</ul>

<h3>Start Extracting YouTube Metadata Today</h3>

<p>If you need fast access to video information without complicated setup requirements, our free <strong>YouTube Metadata Extractor</strong> provides a simple and reliable solution.</p>

<p>Just paste a YouTube URL and instantly access valuable metadata including titles, channel information, descriptions, hashtags, publication details, thumbnails, and other publicly available information.</p>

<p>Whether you're conducting research, planning content, studying competitors, learning about data extraction, or building analytical reports, this tool helps you gather information quickly and efficiently.</p>

<p>Try it today and discover how easy it can be to explore and analyze YouTube video metadata without API keys, registrations, or technical complexity.</p>

  </div>
</div>


<!-- Export Modal -->
<div id="exportModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Export YouTube Metadata</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>Select export format for the extracted metadata:</p>
      <div style="display: flex; flex-direction: column; gap: 10px; margin: 15px 0;">
        <label style="display: flex; align-items: center; gap: 10px;">
          <input type="radio" name="exportFormat" value="json" checked>
          <span>JSON (Structured data, best for developers)</span>
        </label>
        <label style="display: flex; align-items: center; gap: 10px;">
          <input type="radio" name="exportFormat" value="csv">
          <span>CSV (Spreadsheet compatible, good for analysis)</span>
        </label>
        <label style="display: flex; align-items: center; gap: 10px;">
          <input type="radio" name="exportFormat" value="txt">
          <span>Plain Text (Human readable format)</span>
        </label>
      </div>
      <div style="margin-top: 15px;">
        <label style="display: flex; align-items: center; gap: 10px;">
          <input type="checkbox" id="includeRawData" checked>
          <span>Include raw API responses</span>
        </label>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeExport">Cancel</button>
      <button class="modal-button primary" id="confirmExport">Export</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const youtubeUrl = document.getElementById('youtubeUrl');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const metadataDisplay = document.getElementById('metadataDisplay');
    const metadataGrid = document.getElementById('metadataGrid');
    const statsContainer = document.getElementById('statsContainer');
    const descriptionCard = document.getElementById('descriptionCard');
    const descriptionText = document.getElementById('descriptionText');
    const rawDataSection = document.getElementById('rawDataSection');
    const rawDataPre = document.getElementById('rawDataPre');
    const exportSection = document.getElementById('exportSection');
    
    // Modal elements
    const exportModal = document.getElementById('exportModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const closeExport = document.getElementById('closeExport');
    const confirmExport = document.getElementById('confirmExport');
    const includeRawData = document.getElementById('includeRawData');
    
    // Current metadata
    let currentMetadata = null;
    let currentVideoId = '';
    let rawOembedData = null;
    let rawNoembedData = null;

    // Example URLs for testing
    const exampleUrls = [
      'https://www.youtube.com/watch?v=ox2ScaPXDcg',
      'https://youtu.be/9bZkp7q19f0',
      'https://www.youtube.com/shorts/KGPQzTImrBQ',
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      'https://www.youtube.com/embed/L_jWHffIx5E'
    ];

    // Event listeners
    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleMetadataAction(action);
      });
    });

    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        exportModal.style.display = 'none';
      });
    });

    // Close export modal
    closeExport.addEventListener('click', function() {
      exportModal.style.display = 'none';
    });

    // Confirm export
    confirmExport.addEventListener('click', function() {
      const format = document.querySelector('input[name="exportFormat"]:checked').value;
      const includeRaw = includeRawData.checked;
      exportMetadata(format, includeRaw);
      exportModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === exportModal) {
        exportModal.style.display = 'none';
      }
    });

    function handleMetadataAction(action) {
      switch (action) {
        case 'extract':
          extractMetadata();
          break;

        case 'export':
          showExportModal();
          break;

        case 'copyAll':
          copyAllMetadata();
          break;

        case 'copyJson':
          copyAsJson();
          break;

        case 'downloadJson':
          downloadAsJson();
          break;

        case 'downloadCsv':
          downloadAsCsv();
          break;

        case 'showRaw':
          toggleRawData();
          break;

        case 'refresh':
          if (currentVideoId) {
            extractMetadata();
          }
          break;

        case 'clear':
          clearAll();
          break;

        case 'example':
          loadExample();
          break;
      }
    }

    async function extractMetadata() {
      const url = youtubeUrl.value.trim();
      
      if (!url) {
        showAlert('Please enter a YouTube URL.', 'error');
        return;
      }

      const videoId = extractVideoId(url);
      
      if (!videoId) {
        showAlert('Invalid YouTube URL. Please check and try again.', 'error');
        return;
      }

      currentVideoId = videoId;
      
      // Show loading
      loadingSpinner.style.display = 'block';
      metadataDisplay.style.display = 'none';
      exportSection.style.display = 'none';
      rawDataSection.style.display = 'none';

      // Update counters
      document.getElementById('videoId').textContent = videoId;
      document.getElementById('extractionStatus').textContent = 'Fetching from APIs...';

      try {
        // Fetch from both APIs in parallel
        const [oembedData, noembedData] = await Promise.all([
          fetchOembedData(url),
          fetchNoembedData(url)
        ]);

        rawOembedData = oembedData;
        rawNoembedData = noembedData;
        
        // Process and combine data
        currentMetadata = processMetadata(oembedData, noembedData, videoId);
        
        // Display metadata
        displayMetadata(currentMetadata);
        
        // Update counters
        const dataCount = Object.keys(currentMetadata).length;
        document.getElementById('dataCount').textContent = dataCount;
        document.getElementById('extractionStatus').textContent = 'Successfully extracted';
        
        showAlert(`Successfully extracted ${dataCount} metadata fields from YouTube!`, 'success');
        exportSection.style.display = 'flex';
        
      } catch (error) {
        document.getElementById('extractionStatus').textContent = 'Extraction failed';
        showAlert(`Error extracting metadata: ${error.message}`, 'error');
      } finally {
        loadingSpinner.style.display = 'none';
      }
    }

    function extractVideoId(url) {
      let videoId = '';
      
      // Regular expression patterns for different YouTube URL formats
      const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/)([\w\-_]+)/,
        /youtube\.com\/watch\?.*v=([\w\-_]+)/,
        /youtu.be\/([\w\-_]+)/
      ];

      for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match && match[1]) {
          videoId = match[1];
          break;
        }
      }

      return videoId;
    }

    async function fetchOembedData(url) {
      try {
        const response = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`);
        if (!response.ok) {
          throw new Error(`oEmbed API error: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error('oEmbed fetch error:', error);
        return { error: 'Failed to fetch from oEmbed API' };
      }
    }

    async function fetchNoembedData(url) {
      try {
        const response = await fetch(`https://noembed.com/embed?url=${encodeURIComponent(url)}`);
        if (!response.ok) {
          throw new Error(`NoEmbed API error: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error('NoEmbed fetch error:', error);
        return { error: 'Failed to fetch from NoEmbed API' };
      }
    }

    function processMetadata(oembedData, noembedData, videoId) {
      // Extract hashtags from description
      let hashtags = [];
      let description = noembedData.description || oembedData.title || '';
      if (description) {
        const hashtagMatches = description.match(/#[\w\u0590-\u05ff\u0400-\u04ff]+/g) || [];
        hashtags = [...new Set(hashtagMatches)]; // Remove duplicates
      }

      // Extract upload date and format it
      let uploadDate = 'Not available';
      if (noembedData.upload_date) {
        const date = new Date(noembedData.upload_date);
        uploadDate = date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      }

      // Format views count
      let views = 'Not available';
      if (noembedData.views) {
        views = noembedData.views.toLocaleString();
      }

      // Extract keyword tags if available
      let keywords = [];
      if (noembedData.tags && Array.isArray(noembedData.tags)) {
        keywords = noembedData.tags;
      }

      // Get thumbnail URL
      let thumbnail = oembedData.thumbnail_url || 'Not available';

      // Calculate duration if available
      let duration = 'Not available';
      if (noembedData.duration) {
        const seconds = noembedData.duration;
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        
        if (hours > 0) {
          duration = `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        } else {
          duration = `${minutes}:${secs.toString().padStart(2, '0')}`;
        }
      }

      return {
        videoId: videoId,
        title: oembedData.title || 'Not available',
        channel: oembedData.author_name || 'Not available',
        channelUrl: oembedData.author_url || 'Not available',
        uploadDate: uploadDate,
        views: views,
        description: description,
        hashtags: hashtags,
        keywords: keywords,
        thumbnail: thumbnail,
        duration: duration,
        provider: oembedData.provider_name || 'YouTube',
        type: oembedData.type || 'video',
        width: oembedData.width || 0,
        height: oembedData.height || 0,
        extractedAt: new Date().toISOString()
      };
    }

    function displayMetadata(metadata) {
      // Clear previous content
      metadataGrid.innerHTML = '';
      statsContainer.innerHTML = '';

      // Create metadata cards
      const cards = [
        { label: 'Video Title', value: metadata.title, icon: 'fas fa-heading' },
        { label: 'Channel Name', value: metadata.channel, icon: 'fas fa-user-circle' },
        { label: 'Upload Date', value: metadata.uploadDate, icon: 'fas fa-calendar-alt' },
        { label: 'Views', value: metadata.views, icon: 'fas fa-eye' },
        { label: 'Duration', value: metadata.duration, icon: 'fas fa-clock' },
        { label: 'Video ID', value: metadata.videoId, icon: 'fas fa-id-card' },
        { label: 'Provider', value: metadata.provider, icon: 'fas fa-play-circle' },
        { label: 'Content Type', value: metadata.type, icon: 'fas fa-film' }
      ];

      cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'metadata-card';
        cardElement.innerHTML = `
          <div class="metadata-label"><i class="${card.icon}"></i> ${card.label}</div>
          <div class="metadata-value">${card.value}</div>
        `;
        metadataGrid.appendChild(cardElement);
      });

      // Update description
      descriptionText.textContent = metadata.description || 'No description available';

      // Create stats
      const stats = [
        { number: metadata.hashtags.length, label: 'Hashtags Found', icon: 'fas fa-hashtag' },
        { number: metadata.keywords.length, label: 'Keyword Tags', icon: 'fas fa-tags' },
        { number: metadata.views === 'Not available' ? 0 : 1, label: 'Views Data', icon: 'fas fa-chart-line' },
        { number: metadata.duration === 'Not available' ? 0 : 1, label: 'Duration Data', icon: 'fas fa-clock' }
      ];

      stats.forEach(stat => {
        const statElement = document.createElement('div');
        statElement.className = 'stat-item';
        statElement.innerHTML = `
          <div class="stat-number">${stat.number}</div>
          <div class="stat-label"><i class="${stat.icon}"></i> ${stat.label}</div>
        `;
        statsContainer.appendChild(statElement);
      });

      // Add hashtags and keywords if available
      if (metadata.hashtags.length > 0) {
        const hashtagsCard = document.createElement('div');
        hashtagsCard.className = 'metadata-card';
        hashtagsCard.style.gridColumn = '1 / -1';
        hashtagsCard.innerHTML = `
          <div class="metadata-label"><i class="fas fa-hashtag"></i> Extracted Hashtags</div>
          <div class="tags-container">
            ${metadata.hashtags.map(tag => `<span class="hashtag">${tag}</span>`).join('')}
          </div>
        `;
        metadataGrid.appendChild(hashtagsCard);
      }

      if (metadata.keywords.length > 0) {
        const keywordsCard = document.createElement('div');
        keywordsCard.className = 'metadata-card';
        keywordsCard.style.gridColumn = '1 / -1';
        keywordsCard.innerHTML = `
          <div class="metadata-label"><i class="fas fa-tags"></i> Keyword Tags</div>
          <div class="tags-container">
            ${metadata.keywords.map(keyword => `<span class="tag">${keyword}</span>`).join('')}
          </div>
        `;
        metadataGrid.appendChild(keywordsCard);
      }

      // Show the display
      metadataDisplay.style.display = 'block';
    }

    function showExportModal() {
      if (!currentMetadata) {
        showAlert('No metadata to export. Please extract metadata first.', 'error');
        return;
      }

      exportModal.style.display = 'block';
    }

    function exportMetadata(format, includeRaw = false) {
      if (!currentMetadata) return;

      let content = '';
      let filename = `youtube_metadata_${currentVideoId}`;
      let mimeType = '';

      const exportData = {
        metadata: currentMetadata,
        ...(includeRaw && {
          rawData: {
            oembed: rawOembedData,
            noembed: rawNoembedData
          }
        })
      };

      switch (format) {
        case 'json':
          content = JSON.stringify(exportData, null, 2);
          filename += '.json';
          mimeType = 'application/json';
          break;

        case 'csv':
          content = convertToCsv(currentMetadata);
          filename += '.csv';
          mimeType = 'text/csv';
          break;

        case 'txt':
          content = convertToText(currentMetadata);
          filename += '.txt';
          mimeType = 'text/plain';
          break;
      }

      downloadFile(filename, content, mimeType);
      showAlert(`Metadata exported as ${format.toUpperCase()}!`, 'success');
    }

    function convertToCsv(data) {
      let csv = 'Field,Value\n';
      
      // Basic fields
      csv += `Video Title,${data.title}\n`;
      csv += `Channel Name,${data.channel}\n`;
      csv += `Upload Date,${data.uploadDate}\n`;
      csv += `Views,${data.views}\n`;
      csv += `Duration,${data.duration}\n`;
      csv += `Video ID,${data.videoId}\n`;
      csv += `Provider,${data.provider}\n`;
      csv += `Content Type,${data.type}\n`;
      
      // Hashtags
      csv += `Hashtags,"${data.hashtags.join(', ')}"\n`;
      
      // Keywords
      csv += `Keywords,"${data.keywords.join(', ')}"\n`;
      
      // Description (clean for CSV)
      const cleanDesc = data.description.replace(/"/g, '""').replace(/\n/g, ' ');
      csv += `Description,"${cleanDesc}"\n`;
      
      // Thumbnail
      csv += `Thumbnail URL,${data.thumbnail}\n`;
      
      // Extraction time
      csv += `Extracted At,${data.extractedAt}\n`;
      
      return csv;
    }

    function convertToText(data) {
      let text = '='.repeat(60) + '\n';
      text += 'YOUTUBE METADATA EXTRACTION REPORT\n';
      text += '='.repeat(60) + '\n\n';
      
      text += `Video Title: ${data.title}\n`;
      text += `Channel: ${data.channel}\n`;
      text += `Upload Date: ${data.uploadDate}\n`;
      text += `Views: ${data.views}\n`;
      text += `Duration: ${data.duration}\n`;
      text += `Video ID: ${data.videoId}\n\n`;
      
      text += `Hashtags (${data.hashtags.length}):\n`;
      data.hashtags.forEach(tag => {
        text += `  ${tag}\n`;
      });
      text += '\n';
      
      text += `Keywords (${data.keywords.length}):\n`;
      data.keywords.forEach(keyword => {
        text += `  ${keyword}\n`;
      });
      text += '\n';
      
      text += 'Description:\n';
      text += data.description + '\n\n';
      
      text += 'Additional Information:\n';
      text += `Provider: ${data.provider}\n`;
      text += `Type: ${data.type}\n`;
      text += `Thumbnail: ${data.thumbnail}\n\n`;
      
      text += '='.repeat(60) + '\n';
      text += `Extracted on: ${new Date(data.extractedAt).toLocaleString()}\n`;
      text += '='.repeat(60);
      
      return text;
    }

    function copyAllMetadata() {
      if (!currentMetadata) {
        showAlert('No metadata to copy. Please extract metadata first.', 'error');
        return;
      }

      const text = convertToText(currentMetadata);
      navigator.clipboard.writeText(text).then(() => {
        showAlert('All metadata copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy: ' + err, 'error');
      });
    }

    function copyAsJson() {
      if (!currentMetadata) {
        showAlert('No metadata to copy. Please extract metadata first.', 'error');
        return;
      }

      const json = JSON.stringify(currentMetadata, null, 2);
      navigator.clipboard.writeText(json).then(() => {
        showAlert('Metadata JSON copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy JSON: ' + err, 'error');
      });
    }

    function downloadAsJson() {
      if (!currentMetadata) {
        showAlert('No metadata to download. Please extract metadata first.', 'error');
        return;
      }
      exportMetadata('json', false);
    }

    function downloadAsCsv() {
      if (!currentMetadata) {
        showAlert('No metadata to download. Please extract metadata first.', 'error');
        return;
      }
      exportMetadata('csv', false);
    }

    function toggleRawData() {
      if (!rawOembedData || !rawNoembedData) {
        showAlert('No raw data available. Please extract metadata first.', 'error');
        return;
      }

      if (rawDataSection.style.display === 'none') {
        const rawData = {
          oembed: rawOembedData,
          noembed: rawNoembedData,
          combined: currentMetadata
        };
        rawDataPre.textContent = JSON.stringify(rawData, null, 2);
        rawDataSection.style.display = 'block';
      } else {
        rawDataSection.style.display = 'none';
      }
    }

    function downloadFile(filename, content, mimeType) {
      const element = document.createElement('a');
      const blob = new Blob([content], { type: mimeType });
      element.href = URL.createObjectURL(blob);
      element.download = filename;
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }

    function clearAll() {
      youtubeUrl.value = '';
      metadataGrid.innerHTML = '';
      statsContainer.innerHTML = '';
      descriptionText.textContent = 'Description will appear here...';
      metadataDisplay.style.display = 'none';
      exportSection.style.display = 'none';
      rawDataSection.style.display = 'none';
      currentMetadata = null;
      currentVideoId = '';
      rawOembedData = null;
      rawNoembedData = null;
      
      // Reset counters
      document.getElementById('videoId').textContent = 'Not extracted';
      document.getElementById('dataCount').textContent = '0';
      document.getElementById('extractionStatus').textContent = 'Ready';
      
      showAlert('All fields cleared.', 'success');
    }

    function loadExample() {
      const randomUrl = exampleUrls[Math.floor(Math.random() * exampleUrls.length)];
      youtubeUrl.value = randomUrl;
      showAlert('Example URL loaded. Click "Extract Metadata" to see real data extraction in action!', 'success');
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