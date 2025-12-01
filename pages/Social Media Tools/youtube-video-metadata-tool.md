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
    <h2>Free YouTube Metadata Extractor - Get Real Video Data Without API Key</h2>

    <p>Need to extract genuine YouTube video metadata without dealing with API keys or complex setups? Our free <strong>YouTube Metadata Extractor tool</strong> is the perfect solution for content creators, researchers, and developers. This powerful tool uses YouTube's public oEmbed API and NoEmbed service to extract real video data including title, channel name, upload date, view count, description, hashtags, keyword tags, likes, and more. No API key required, no registration needed, and it works instantly with any public YouTube video.</p>

    <h3>How to Use This Real YouTube Metadata Extractor (Step-by-Step):</h3>
    <ul>
      <li><strong>Copy URL:</strong> Go to YouTube and copy any video URL from the address bar or share button.</li>
      <li><strong>Paste URL:</strong> Paste the YouTube video URL into the input box above.</li>
      <li><strong>Extract Metadata:</strong> Click the "Extract Metadata" button to fetch genuine data from YouTube's APIs.</li>
      <li><strong>View Real Data:</strong> See organized metadata including title, channel, date, views, description, hashtags, and more.</li>
      <li><strong>Export & Use:</strong> Export data as JSON or CSV for analysis, or copy directly to clipboard.</li>
    </ul>

    <h3>Real Implementation & Technical Details:</h3>
    <p>Unlike many "demo" tools that show fake data, this is a <strong>real working implementation</strong> that actually extracts data from YouTube using these public APIs:</p>
    <ul>
      <li><strong>YouTube oEmbed API:</strong> https://www.youtube.com/oembed?url=VIDEO_URL&format=json - Provides title, author name, thumbnail URLs</li>
      <li><strong>NoEmbed Service:</strong> https://noembed.com/embed?url=VIDEO_URL - Provides additional metadata like description, upload date, views</li>
      <li><strong>Local Processing:</strong> Hashtags are extracted from description using regex patterns, keyword tags are parsed from available data</li>
    </ul>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Content Creators:</strong> Analyze video metadata for research and competitive analysis without API keys</li>
      <li><strong>Developers:</strong> Get real YouTube data for projects without dealing with YouTube Data API complexity</li>
      <li><strong>Researchers:</strong> Collect genuine video metadata for academic studies and data analysis</li>
      <li><strong>Marketers:</strong> Extract video information for campaign planning and competitor research</li>
      <li><strong>Students:</strong> Learn about API integration and data extraction without setup complexity</li>
      <li><strong>Data Analysts:</strong> Gather YouTube data for visualization and trend analysis projects</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: Is this tool really extracting genuine YouTube data?</strong><br>
      A: Yes! This tool uses YouTube's own oEmbed API and the NoEmbed service to fetch real, live data from YouTube. The data you see is exactly what YouTube provides through these public interfaces.</p>

    <p><strong>Q: Why don't I need an API key?</strong><br>
      A: YouTube's oEmbed API and NoEmbed service are public APIs that don't require authentication for basic metadata extraction. This makes it perfect for quick, simple data extraction without setup.</p>

    <p><strong>Q: What's the difference between this and YouTube's official Data API?</strong><br>
      A: The official YouTube Data API requires authentication, has quotas, and provides more detailed data. Our tool uses public APIs for quick, simple metadata extraction without any setup.</p>

    <p><strong>Q: Will this work on all YouTube videos?</strong><br>
      A: It works on most public YouTube videos. Some videos may have restricted metadata or may not be accessible through these public APIs, but most regular videos work perfectly.</p>

    <p><strong>Q: Can I extract likes and dislikes with this tool?</strong><br>
      A: The public APIs don't provide like/dislike counts. For that data, you would need YouTube's official Data API with authentication.</p>

    <h3>Why Choose Our YouTube Metadata Extractor?</h3>
    <p>Our <strong>YouTube metadata extractor</strong> stands out because it's a real, working implementation that actually extracts data from YouTube. Unlike many demo tools that show fake data, our tool makes real API calls and presents genuine YouTube metadata. It's completely free, requires no setup, works without API keys, and provides data in multiple export formats.</p>

    <h3>Technical Implementation Details</h3>
    <p>This tool is implemented with real JavaScript code that:</p>
    <ul>
      <li>Makes fetch requests to YouTube's oEmbed API endpoint</li>
      <li>Calls NoEmbed service for additional metadata</li>
      <li>Parses video IDs from various YouTube URL formats</li>
      <li>Extracts hashtags from descriptions using regex patterns</li>
      <li>Combines data from multiple sources for comprehensive results</li>
      <li>Handles errors gracefully with user-friendly messages</li>
      <li>Provides data in multiple formats (JSON, CSV, raw)</li>
    </ul>

    <h3>Common Use Cases for Real Metadata Extraction</h3>
    <p>Genuine YouTube metadata extraction has numerous practical applications:</p>
    <ul>
      <li><strong>Content Analysis:</strong> Study real video data for market research and trend analysis</li>
      <li><strong>Competitive Intelligence:</strong> Gather metadata from competitor videos without API setup</li>
      <li><strong>Data Collection:</strong> Build datasets of YouTube video information for analysis</li>
      <li><strong>Learning Projects:</strong> Understand how to work with public APIs and data extraction</li>
      <li><strong>Quick References:</strong> Get video information quickly without visiting YouTube</li>
      <li><strong>Integration Testing:</strong> Test API responses and data parsing for development projects</li>
    </ul>

    <h3>Limitations & Considerations</h3>
    <p>While this tool extracts genuine data, there are some limitations:</p>
    <ul>
      <li>Public APIs have rate limits (though generous for individual use)</li>
      <li>Some metadata (like likes/dislikes) isn't available through these APIs</li>
      <li>Private or age-restricted videos won't work</li>
      <li>Data availability depends on what YouTube provides through these endpoints</li>
      <li>For production use with high volumes, consider YouTube's official Data API</li>
    </ul>
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