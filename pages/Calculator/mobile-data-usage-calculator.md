---
layout: default
title: "Mobile Data Usage Calculator – Estimate Monthly Data Needs"
permalink: /mobile-data-usage-calculator-calculate-your-monthly-data-needs/
---

<!-- Basic SEO Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Mobile Data Usage Calculator – Estimate Monthly Data Needs</title>

<meta name="description"
  content="Free mobile data usage calculator to estimate your monthly data for streaming, browsing, social media, and calls. Choose the right plan and avoid extra charges.">

<meta name="keywords"
  content="mobile data usage calculator, mobile data calculator, data consumption calculator, phone data usage, internet data calculator, data usage estimator, streaming data calculator, cellular data usage calculator">

<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Canonical URL -->
<link rel="canonical" href="https://toolesy.com/mobile-data-usage-calculator-calculate-your-monthly-data-needs" />

<!-- Open Graph Tags -->
<meta property="og:title" content="Mobile Data Usage Calculator - Calculate Your Monthly Data Needs">
<meta property="og:description"
  content="Estimate your monthly phone data usage based on video streaming, social apps, browsing & more. Avoid data limit overcharges!">
<meta property="og:type" content="website">
<meta property="og:url" content="https://toolesy.com/mobile-data-usage-calculator-calculate-your-monthly-data-needs">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Mobile Data Usage Calculator - Plan Your Data Smartly">
<meta name="twitter:description"
  content="Free mobile data usage estimator. Find out how much internet data you need based on your phone activity.">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Mobile Data Calculator Styles */
  .calculator-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .calculator-container h1 {
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

  .calculator-section {
    margin-bottom: 40px;
    padding: 25px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .calculator-section h2 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .calculator-section p {
    margin-bottom: 15px;
    line-height: 1.8;
    color: #333;
  }

  .data-stats-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    border-left: 4px solid var(--primary);
  }

  .stat-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background: white;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .stat-item span:first-child {
    font-weight: 600;
    color: var(--primary);
  }

  .stat-item span:last-child {
    font-weight: bold;
    color: #2c3e50;
  }

  .input-section {
    margin: 20px 0;
  }

  .data-input-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 25px 0;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .input-label {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .input-field {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  .input-field:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
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

  .data-results {
    margin-top: 30px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .result-card {
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
    text-align: center;
  }

  .result-value {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary);
    margin: 10px 0;
  }

  .result-label {
    font-size: 0.9rem;
    color: #666;
  }

  .data-breakdown {
    margin: 30px 0;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .breakdown-chart {
    height: 200px;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    margin: 20px 0;
    gap: 10px;
  }

  .chart-bar {
    flex: 1;
    background: linear-gradient(to top, #4fc3f7, #29b6f6);
    border-radius: 4px 4px 0 0;
    position: relative;
    transition: height 1s ease;
  }

  .chart-label {
    position: absolute;
    bottom: -25px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 12px;
    color: #666;
  }

  .chart-value {
    position: absolute;
    top: -25px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    color: #2c3e50;
  }

  .plan-recommendation {
    margin: 30px 0;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .plan-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-top: 20px;
  }

  .plan-card {
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    border: 2px solid #ddd;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .plan-card:hover {
    border-color: var(--primary);
    transform: translateY(-2px);
  }

  .plan-card.recommended {
    border-color: var(--success);
    background: #f8fff9;
  }

  .plan-data {
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--primary);
    margin: 10px 0;
  }

  .plan-price {
    font-size: 1.1rem;
    font-weight: 600;
    color: #2c3e50;
  }

  .recommendation-badge {
    background: var(--success);
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 0.8rem;
    margin-top: 10px;
    display: inline-block;
  }

  .usage-timeline {
    margin: 30px 0;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .timeline {
    position: relative;
    height: 80px;
    background: linear-gradient(90deg, #e3f2fd, #bbdefb);
    border-radius: 8px;
    margin: 20px 0;
    overflow: hidden;
  }

  .data-usage-fill {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: linear-gradient(to top, #4fc3f7, #29b6f6);
    transition: width 2s ease;
    border-radius: 8px;
  }

  .usage-marker {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(0, 0, 0, 0.3);
  }

  .usage-label {
    position: absolute;
    top: -25px;
    font-size: 12px;
    color: #666;
    transform: translateX(-50%);
  }

  .recommendations {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .recommendation-card {
    background: white;
    padding: 15px;
    border-radius: 6px;
    border-left: 4px solid var(--primary);
    margin: 10px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .recommendation-card h4 {
    color: var(--primary);
    margin-bottom: 8px;
  }

  .impact-rating {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 8px;
  }

  .impact-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .impact-low { background: #28a745; }
  .impact-medium { background: #ffc107; }
  .impact-high { background: #dc3545; }

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

  /* Data usage visualization */
  .data-visualization {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    margin: 20px 0;
    position: relative;
  }

  .data-meter {
    width: 180px;
    height: 180px;
    background: conic-gradient(#4fc3f7 0%, #29b6f6 25%, #0288d1 50%, #01579b 75%, #00264d 100%);
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .data-needle {
    position: absolute;
    top: 10px;
    left: 50%;
    width: 4px;
    height: 80px;
    background: #dc3545;
    transform-origin: bottom center;
    transform: translateX(-50%) rotate(0deg);
    transition: transform 1s ease;
    z-index: 2;
  }

  .data-labels {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    padding-right: 30px;
  }

  .data-label {
    font-size: 12px;
    color: #666;
    transform: rotate(-45deg);
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

  /* Data calculator specific styles */
  .data-options {
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

  /* App usage categories */
  .usage-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
  }

  .category-card {
    padding: 15px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .category-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .category-name {
    font-weight: 600;
    color: var(--primary);
  }

  .category-usage {
    font-weight: bold;
    color: #2c3e50;
  }

  .category-slider {
    width: 100%;
    margin: 10px 0;
  }

  /* Progress bars */
  .progress-container {
    margin: 15px 0;
  }

  .progress-label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  .progress-bar {
    height: 10px;
    background: #e9ecef;
    border-radius: 5px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: var(--primary);
    transition: width 0.5s ease;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .data-stats-wrapper {
      grid-template-columns: 1fr;
    }

    .button-section {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }

    .action-button {
      font-size: 13px;
      padding: 12px 8px;
    }

    .calculator-container {
      padding: 15px;
    }

    .calculator-section {
      padding: 20px;
      margin-bottom: 30px;
    }

    .calculator-container h1 {
      font-size: 2rem;
    }

    .calculator-section h2 {
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

    .data-options {
      grid-template-columns: 1fr;
    }

    .data-input-section {
      grid-template-columns: 1fr;
    }

    .results-grid {
      grid-template-columns: 1fr;
    }

    .plan-cards {
      grid-template-columns: 1fr;
    }

    .usage-categories {
      grid-template-columns: 1fr;
    }

    .breakdown-chart {
      height: 150px;
      flex-direction: column;
      align-items: stretch;
    }

    .chart-bar {
      height: 40px !important;
      width: 100% !important;
    }

    .chart-label {
      position: static;
      text-align: left;
      padding-left: 10px;
    }

    .chart-value {
      position: static;
      text-align: right;
      padding-right: 10px;
    }
  }
</style>

<div class="calculator-container">
  <h1>Mobile Data Usage Calculator</h1>
  <p class="welcome-message">Calculate your monthly mobile data consumption based on your app usage, streaming habits, browsing patterns, and daily activities. Optimize your data plan and avoid unexpected charges.</p>

  <div class="calculator-section">
    <h2>Mobile Data Usage Calculator</h2>

    <div class="data-stats-wrapper">
      <div class="stat-item">
        <span>Estimated Monthly Usage: </span>
        <span id="estimatedUsage">0 GB</span>
      </div>
      <div class="stat-item">
        <span>Daily Average: </span>
        <span id="dailyAverage">0 MB</span>
      </div>
      <div class="stat-item">
        <span>Usage Rating: </span>
        <span id="usageRating">Light</span>
      </div>
      <div class="stat-item">
        <span>Recommended Plan: </span>
        <span id="recommendedPlan">2-5 GB</span>
      </div>
    </div>

    <div class="data-input-section">
      <div class="input-group">
        <label class="input-label">Streaming Quality</label>
        <select id="streamingQuality" class="input-field">
          <option value="low">Low (480p)</option>
          <option value="medium" selected>Medium (720p)</option>
          <option value="high">High (1080p)</option>
          <option value="ultra">Ultra HD (4K)</option>
        </select>
      </div>
      
      <div class="input-group">
        <label class="input-label">Wi-Fi Availability</label>
        <select id="wifiAvailability" class="input-field">
          <option value="high">High (80-100%)</option>
          <option value="medium" selected>Medium (50-80%)</option>
          <option value="low">Low (20-50%)</option>
          <option value="minimal">Minimal (0-20%)</option>
        </select>
      </div>
      
      <div class="input-group">
        <label class="input-label">Network Type</label>
        <select id="networkType" class="input-field">
          <option value="4g" selected>4G/LTE</option>
          <option value="5g">5G</option>
          <option value="3g">3G</option>
        </select>
      </div>

      <div class="input-group">
        <label class="input-label">Billing Cycle (Days)</label>
        <input type="number" id="billingCycle" class="input-field" min="1" max="31" value="30" placeholder="Days">
      </div>
    </div>

    <div class="usage-categories">
      <div class="category-card">
        <div class="category-header">
          <span class="category-name">Video Streaming</span>
          <span class="category-usage" id="videoUsage">0 GB</span>
        </div>
        <div class="input-group">
          <label class="input-label">Hours per day</label>
          <input type="range" id="videoHours" class="category-slider" min="0" max="5" step="0.5" value="1">
          <div class="progress-label">
            <span>0h</span>
            <span id="videoHoursValue">1h</span>
            <span>5h</span>
          </div>
        </div>
      </div>

      <div class="category-card">
        <div class="category-header">
          <span class="category-name">Music Streaming</span>
          <span class="category-usage" id="musicUsage">0 GB</span>
        </div>
        <div class="input-group">
          <label class="input-label">Hours per day</label>
          <input type="range" id="musicHours" class="category-slider" min="0" max="8" step="0.5" value="2">
          <div class="progress-label">
            <span>0h</span>
            <span id="musicHoursValue">2h</span>
            <span>8h</span>
          </div>
        </div>
      </div>

      <div class="category-card">
        <div class="category-header">
          <span class="category-name">Social Media</span>
          <span class="category-usage" id="socialUsage">0 GB</span>
        </div>
        <div class="input-group">
          <label class="input-label">Hours per day</label>
          <input type="range" id="socialHours" class="category-slider" min="0" max="6" step="0.5" value="1.5">
          <div class="progress-label">
            <span>0h</span>
            <span id="socialHoursValue">1.5h</span>
            <span>6h</span>
          </div>
        </div>
      </div>

      <div class="category-card">
        <div class="category-header">
          <span class="category-name">Web Browsing</span>
          <span class="category-usage" id="browsingUsage">0 GB</span>
        </div>
        <div class="input-group">
          <label class="input-label">Hours per day</label>
          <input type="range" id="browsingHours" class="category-slider" min="0" max="5" step="0.5" value="1">
          <div class="progress-label">
            <span>0h</span>
            <span id="browsingHoursValue">1h</span>
            <span>5h</span>
          </div>
        </div>
      </div>
    </div>

    <div class="data-options">
      <div class="option-group">
        <label class="option-label">Additional Usage</label>
        <select id="additionalUsage" class="option-select">
          <option value="minimal">Minimal (Emails, Messaging)</option>
          <option value="light" selected>Light (Some apps, occasional downloads)</option>
          <option value="moderate">Moderate (Regular app updates, cloud sync)</option>
          <option value="heavy">Heavy (Frequent downloads, gaming, video calls)</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Data Saving Mode</label>
        <select id="dataSaving" class="option-select">
          <option value="none">None</option>
          <option value="light" selected>Light</option>
          <option value="moderate">Moderate</option>
          <option value="aggressive">Aggressive</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="backgroundData" checked>
          <label for="backgroundData">Allow background data</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="autoUpdates" checked>
          <label for="autoUpdates">Auto app updates on mobile data</label>
        </div>
      </div>
    </div>

    <div class="button-section">
      <button class="action-button" data-action="calculate">Calculate Data Usage</button>
      <button class="action-button" data-action="track">Track Daily Usage</button>
      <button class="action-button" data-action="reset">Reset</button>
      <button class="action-button success" data-action="save">Save Profile</button>
      <button class="action-button warning" data-action="compare">Compare Plans</button>
      <button class="action-button secondary" data-action="share">Share Results</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="data-results" id="dataResults" style="display: none;">
      <h3>Your Data Usage Analysis</h3>
      <div class="results-grid">
        <div class="result-card">
          <div class="result-label">Monthly Data Need</div>
          <div class="result-value" id="monthlyNeed">0 GB</div>
          <div class="result-label">estimated</div>
        </div>
        <div class="result-card">
          <div class="result-label">Daily Usage</div>
          <div class="result-value" id="dailyUsage">0 MB</div>
          <div class="result-label">average</div>
        </div>
        <div class="result-card">
          <div class="result-label">Peak Day Usage</div>
          <div class="result-value" id="peakUsage">0 MB</div>
          <div class="result-label">maximum</div>
        </div>
        <div class="result-card">
          <div class="result-label">Buffer Recommended</div>
          <div class="result-value" id="bufferAmount">0 GB</div>
          <div class="result-label">safety margin</div>
        </div>
      </div>
    </div>

    <div class="data-visualization" id="dataVisualization" style="display: none;">
      <div class="data-meter">
        <div class="data-needle" id="dataNeedle"></div>
        <div class="data-labels">
          <div class="data-label">2GB</div>
          <div class="data-label">5GB</div>
          <div class="data-label">10GB</div>
          <div class="data-label">20GB</div>
          <div class="data-label">50GB+</div>
        </div>
      </div>
    </div>

    <div class="data-breakdown" id="dataBreakdown" style="display: none;">
      <h3>Data Usage Breakdown</h3>
      <div class="breakdown-chart" id="breakdownChart">
        <!-- Chart bars will be populated here -->
      </div>
    </div>

    <div class="plan-recommendation" id="planRecommendation" style="display: none;">
      <h3>Recommended Data Plans</h3>
      <div class="plan-cards">
        <div class="plan-card">
          <div class="result-label">Basic Plan</div>
          <div class="plan-data">2-5 GB</div>
          <div class="plan-price">$15-25/month</div>
          <div class="result-label">Light users</div>
        </div>
        <div class="plan-card recommended">
          <div class="result-label">Standard Plan</div>
          <div class="plan-data" id="recommendedData">5-10 GB</div>
          <div class="plan-price">$25-40/month</div>
          <div class="recommendation-badge">Recommended</div>
        </div>
        <div class="plan-card">
          <div class="result-label">Premium Plan</div>
          <div class="plan-data">10-20 GB</div>
          <div class="plan-price">$40-60/month</div>
          <div class="result-label">Heavy users</div>
        </div>
        <div class="plan-card">
          <div class="result-label">Unlimited Plan</div>
          <div class="plan-data">50 GB+</div>
          <div class="plan-price">$60+/month</div>
          <div class="result-label">Power users</div>
        </div>
      </div>
    </div>

    <div class="usage-timeline" id="usageTimeline" style="display: none;">
      <h3>Monthly Usage Projection</h3>
      <div class="progress-container">
        <div class="progress-label">
          <span>Monthly Progress</span>
          <span id="progressPercentage">0%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" id="progressFill" style="width: 0%"></div>
        </div>
      </div>
      <div class="timeline">
        <div class="data-usage-fill" id="dataUsageFill"></div>
        <div class="usage-marker" style="left: 25%">
          <div class="usage-label">Week 1</div>
        </div>
        <div class="usage-marker" style="left: 50%">
          <div class="usage-label">Week 2</div>
        </div>
        <div class="usage-marker" style="left: 75%">
          <div class="usage-label">Week 3</div>
        </div>
      </div>
    </div>

   {% include share-and-donation.html %}

    <div class="recommendations">
      <h2>Data Saving Tips & Recommendations</h2>
      
      <div class="recommendation-card">
        <h4>Streaming Optimization</h4>
        <p>Switch to lower video quality (480p instead of 1080p) when on mobile data. Download content on Wi-Fi for offline viewing. Use audio-only mode for music when possible.</p>
        <div class="impact-rating">
          <span>Impact:</span>
          <div class="impact-dot impact-high"></div>
          <div class="impact-dot impact-high"></div>
          <div class="impact-dot impact-high"></div>
          <div class="impact-dot impact-medium"></div>
          <div class="impact-dot impact-medium"></div>
        </div>
      </div>
      
      <div class="recommendation-card">
        <h4>App Management</h4>
        <p>Restrict background data for non-essential apps. Disable auto-play videos in social media apps. Set app updates to Wi-Fi only and manually update when needed.</p>
        <div class="impact-rating">
          <span>Impact:</span>
          <div class="impact-dot impact-high"></div>
          <div class="impact-dot impact-high"></div>
          <div class="impact-dot impact-medium"></div>
          <div class="impact-dot impact-medium"></div>
          <div class="impact-dot impact-low"></div>
        </div>
      </div>
      
      <div class="recommendation-card">
        <h4>Browser & System Settings</h4>
        <p>Enable data saver mode in your browser. Use ad blockers to reduce unnecessary data loading. Limit cloud backups and sync to Wi-Fi only when possible.</p>
        <div class="impact-rating">
          <span>Impact:</span>
          <div class="impact-dot impact-high"></div>
          <div class="impact-dot impact-medium"></div>
          <div class="impact-dot impact-medium"></div>
          <div class="impact-dot impact-low"></div>
          <div class="impact-dot impact-low"></div>
        </div>
      </div>
    </div>
  </div>

  
<div class="content-placeholder">
  <h2>Mobile Data Usage Calculator – Estimate, Manage, and Optimize Your Data Consumption</h2>

  <p>Mobile internet has become an essential part of everyday life. From streaming videos and attending online meetings to browsing websites and using social media, nearly every digital activity depends on mobile data when Wi‑Fi is unavailable. Despite this reliance, many people are unsure how much data they actually use each month. Some regularly exceed their limits and face extra charges, while others pay for large plans that they never fully utilize. Our <strong>Mobile Data Usage Calculator</strong> helps solve this problem by providing a realistic estimate of your monthly data requirements.</p>

  <p>This calculator is designed for students, professionals, travelers, families, gamers, and everyday smartphone users. By entering your usage habits, you can estimate how much data you need, identify your biggest sources of consumption, and select a mobile plan that fits both your needs and your budget.</p>

  <p>Instead of guessing, you can make informed decisions based on actual usage patterns. Understanding your data consumption can help reduce monthly expenses, prevent unexpected charges, and improve your overall mobile experience.</p>

  <h3>How to Use This Mobile Data Calculator (Step-by-Step)</h3>
  <ul>
    <li><strong>Select Streaming Preferences:</strong> Choose your preferred video and music quality settings.</li>
    <li><strong>Enter Daily Usage:</strong> Estimate how many hours you spend streaming, browsing, gaming, and using social media.</li>
    <li><strong>Add Additional Activities:</strong> Include video calls, cloud backups, app updates, and downloads.</li>
    <li><strong>Specify Wi‑Fi Availability:</strong> Indicate how often you use Wi‑Fi instead of mobile data.</li>
    <li><strong>Calculate Results:</strong> Generate your estimated monthly data consumption.</li>
    <li><strong>Review Recommendations:</strong> Compare your usage against available mobile data plans.</li>
  </ul>

  <p>The process takes only a few minutes and provides valuable insights that can help you optimize your connectivity expenses.</p>

  <h3>Real-Life Example &amp; Use Case</h3>

  <p>Consider a remote worker who streams one hour of video each day, listens to music during commutes, spends time on social media, attends occasional video meetings, and browses websites throughout the day. Without tracking usage, selecting a data plan can be difficult.</p>

  <p>After entering these activities into the calculator, the user may discover that their monthly usage averages between 6 and 8 GB. This information helps them choose an appropriate plan instead of paying for unlimited data they rarely need or risking overage charges with a smaller package.</p>

  <p>Over time, the calculator can also help monitor changes in behavior and determine whether upgrading or downgrading a plan makes financial sense.</p>

  <h3>Understanding Data Consumption Patterns</h3>

  <ul>
    <li><strong>Video Streaming:</strong> Usually the largest source of mobile data consumption.</li>
    <li><strong>Music Streaming:</strong> Lower than video but significant for frequent listeners.</li>
    <li><strong>Social Media:</strong> Usage depends heavily on videos, stories, reels, and image content.</li>
    <li><strong>Web Browsing:</strong> Generally light but varies based on website complexity.</li>
    <li><strong>Video Calls:</strong> Can consume substantial amounts of data during long meetings.</li>
    <li><strong>Cloud Backups:</strong> Automatic uploads may use significant bandwidth.</li>
    <li><strong>App Downloads:</strong> Games and large applications can quickly consume gigabytes.</li>
    <li><strong>Background Services:</strong> Synchronization and updates continue even when apps are not actively used.</li>
  </ul>

  <p>Recognizing which activities consume the most data is often the first step toward better management.</p>

  <h3>Benefits &amp; Who Should Use This Calculator</h3>

  <ul>
    <li><strong>Budget-Conscious Users:</strong> Avoid paying for unnecessary data allowances.</li>
    <li><strong>Students:</strong> Manage limited monthly budgets effectively.</li>
    <li><strong>Remote Workers:</strong> Balance professional and personal data usage.</li>
    <li><strong>Families:</strong> Estimate combined household mobile data needs.</li>
    <li><strong>Travelers:</strong> Plan roaming packages and temporary data plans.</li>
    <li><strong>Gamers:</strong> Understand the impact of downloads and updates.</li>
    <li><strong>Content Consumers:</strong> Evaluate streaming habits and their costs.</li>
    <li><strong>New Smartphone Users:</strong> Learn how different activities affect monthly usage.</li>
  </ul>

  <h3>Frequently Asked Questions</h3>

  <p><strong>How accurate are the estimates?</strong><br>
  The estimates are based on common industry benchmarks and average consumption patterns. Actual usage may vary depending on device settings, applications, and network conditions.</p>

  <p><strong>Does 5G automatically increase data consumption?</strong><br>
  Not directly. However, faster speeds often encourage higher-quality streaming and larger downloads, which can increase overall usage.</p>

  <p><strong>How much data does video streaming use?</strong><br>
  Consumption varies greatly based on quality settings. Higher resolutions generally require significantly more data.</p>

  <p><strong>Is unlimited data always the best choice?</strong><br>
  Not necessarily. Many users consume far less data than expected and can save money with a properly sized plan.</p>

  <p><strong>How can I monitor real usage?</strong><br>
  Most smartphones include built-in data tracking features, and carriers often provide usage statistics through their apps.</p>

  <p><strong>Do app updates consume a lot of data?</strong><br>
  Some updates are small, but large applications and games can require hundreds of megabytes or even multiple gigabytes.</p>

  <p><strong>Can Wi‑Fi reduce mobile data costs?</strong><br>
  Yes. Using Wi‑Fi whenever possible is one of the most effective ways to reduce mobile data consumption.</p>

  <h3>The Science Behind Data Calculation</h3>

  <p>Estimating data usage requires analyzing the average amount of information transferred during different activities. Streaming services, websites, social platforms, and applications all consume data at different rates.</p>

  <ul>
    <li><strong>Streaming Bitrates:</strong> Video and audio quality directly affect consumption.</li>
    <li><strong>Compression Technologies:</strong> Modern codecs reduce bandwidth requirements.</li>
    <li><strong>Content Type:</strong> Text uses far less data than images and video.</li>
    <li><strong>Application Behavior:</strong> Background synchronization influences total usage.</li>
    <li><strong>Network Efficiency:</strong> Device and network optimization affect data transfer.</li>
  </ul>

  <p>These factors combine to create unique usage patterns for every individual user.</p>

  <h3>Advanced Data Management Features</h3>

  <ul>
    <li><strong>Detailed Usage Breakdown:</strong> Understand where your data is being spent.</li>
    <li><strong>Personalized Recommendations:</strong> Receive suggestions based on your habits.</li>
    <li><strong>Quality Comparisons:</strong> See how streaming quality affects consumption.</li>
    <li><strong>Wi‑Fi Impact Analysis:</strong> Measure potential savings from Wi‑Fi usage.</li>
    <li><strong>Plan Matching:</strong> Compare estimated usage against plan allowances.</li>
    <li><strong>Scenario Testing:</strong> Explore how behavior changes influence data requirements.</li>
  </ul>

  <h3>Practical Data Saving Strategies</h3>

  <p>Reducing mobile data consumption does not necessarily mean sacrificing convenience. Small adjustments can make a noticeable difference.</p>

  <ul>
    <li>Download content over Wi‑Fi whenever possible.</li>
    <li>Reduce streaming quality on mobile networks.</li>
    <li>Disable unnecessary background app refresh.</li>
    <li>Limit automatic cloud backups on cellular connections.</li>
    <li>Use offline playlists and downloaded media.</li>
    <li>Monitor high-consumption applications regularly.</li>
    <li>Enable built-in data saver modes.</li>
  </ul>

  <h3>Why Data Planning Matters</h3>

  <p>Choosing the right data plan is about more than avoiding extra charges. A properly sized plan ensures reliable access to important online services while preventing unnecessary spending. Businesses, students, travelers, and families all benefit from understanding their usage patterns.</p>

  <p>As mobile technology continues to evolve, data demands are likely to increase. High-definition streaming, cloud services, online gaming, and remote work tools require more bandwidth than ever before. Regularly reviewing your consumption helps ensure that your mobile plan remains aligned with your actual needs.</p>

  <h3>Final Thoughts</h3>

  <p>Our Mobile Data Usage Calculator is designed to remove the guesswork from mobile plan selection. By analyzing your habits and estimating monthly consumption, it helps you make informed decisions, control costs, and avoid unpleasant surprises.</p>

  <p>Whether you are a light user who primarily browses the web or a heavy consumer who streams content daily, understanding your data usage is the first step toward smarter mobile connectivity. Use the calculator regularly, track changes in your habits, and choose plans that deliver the best balance of performance and value.</p>
</div>


<!-- Track Usage Modal -->
<div id="trackModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Track Daily Data Usage</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div class="input-group">
        <label class="input-label">Date</label>
        <input type="date" id="trackDate" class="input-field" value="">
      </div>
      <div class="input-group">
        <label class="input-label">Data Used (MB)</label>
        <input type="number" id="trackedData" class="input-field" min="1" max="10000" value="100">
      </div>
      <div class="input-group">
        <label class="input-label">Usage Type</label>
        <select id="usageType" class="input-field">
          <option value="streaming" selected>Video/Music Streaming</option>
          <option value="social">Social Media</option>
          <option value="browsing">Web Browsing</option>
          <option value="gaming">Gaming</option>
          <option value="work">Work/Productivity</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelTrack">Cancel</button>
      <button class="modal-button primary" id="saveTrack">Save Entry</button>
    </div>
  </div>
</div>

<!-- Compare Plans Modal -->
<div id="compareModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Compare Data Plans</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div class="plan-cards">
        <div class="plan-card">
          <div class="result-label">Carrier A Basic</div>
          <div class="plan-data">5 GB</div>
          <div class="plan-price">$25/month</div>
          <div class="result-label">Overage: $10/GB</div>
        </div>
        <div class="plan-card">
          <div class="result-label">Carrier B Standard</div>
          <div class="plan-data">10 GB</div>
          <div class="plan-price">$35/month</div>
          <div class="result-label">Overage: $8/GB</div>
        </div>
        <div class="plan-card">
          <div class="result-label">Carrier C Premium</div>
          <div class="plan-data">15 GB</div>
          <div class="plan-price">$45/month</div>
          <div class="result-label">Overage: $5/GB</div>
        </div>
        <div class="plan-card">
          <div class="result-label">Carrier D Unlimited</div>
          <div class="plan-data">50 GB</div>
          <div class="plan-price">$60/month</div>
          <div class="result-label">Then slowed</div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeCompare">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const streamingQualitySelect = document.getElementById('streamingQuality');
    const wifiAvailabilitySelect = document.getElementById('wifiAvailability');
    const networkTypeSelect = document.getElementById('networkType');
    const billingCycleInput = document.getElementById('billingCycle');
    
    // Usage sliders
    const videoHoursSlider = document.getElementById('videoHours');
    const musicHoursSlider = document.getElementById('musicHours');
    const socialHoursSlider = document.getElementById('socialHours');
    const browsingHoursSlider = document.getElementById('browsingHours');
    
    // Usage value displays
    const videoHoursValue = document.getElementById('videoHoursValue');
    const musicHoursValue = document.getElementById('musicHoursValue');
    const socialHoursValue = document.getElementById('socialHoursValue');
    const browsingHoursValue = document.getElementById('browsingHoursValue');
    
    // Usage displays
    const videoUsage = document.getElementById('videoUsage');
    const musicUsage = document.getElementById('musicUsage');
    const socialUsage = document.getElementById('socialUsage');
    const browsingUsage = document.getElementById('browsingUsage');
    
    // Additional options
    const additionalUsageSelect = document.getElementById('additionalUsage');
    const dataSavingSelect = document.getElementById('dataSaving');
    const backgroundDataCheckbox = document.getElementById('backgroundData');
    const autoUpdatesCheckbox = document.getElementById('autoUpdates');
    
    const actionButtons = document.querySelectorAll('.action-button');
    const alertContainer = document.getElementById('alertContainer');
    const dataResults = document.getElementById('dataResults');
    const dataVisualization = document.getElementById('dataVisualization');
    const dataBreakdown = document.getElementById('dataBreakdown');
    const planRecommendation = document.getElementById('planRecommendation');
    const usageTimeline = document.getElementById('usageTimeline');
    
    // Modal elements
    const trackModal = document.getElementById('trackModal');
    const compareModal = document.getElementById('compareModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelTrack = document.getElementById('cancelTrack');
    const saveTrack = document.getElementById('saveTrack');
    const closeCompare = document.getElementById('closeCompare');

    // Data tracking storage
    let dataHistory = JSON.parse(localStorage.getItem('dataHistory')) || {
      entries: [],
      profiles: []
    };

    // Initialize calculator
    initializeCalculator();

    // Event listeners
    // Update slider value displays
    videoHoursSlider.addEventListener('input', function() {
      videoHoursValue.textContent = `${this.value}h`;
      updateCategoryUsage('video', this.value);
    });
    
    musicHoursSlider.addEventListener('input', function() {
      musicHoursValue.textContent = `${this.value}h`;
      updateCategoryUsage('music', this.value);
    });
    
    socialHoursSlider.addEventListener('input', function() {
      socialHoursValue.textContent = `${this.value}h`;
      updateCategoryUsage('social', this.value);
    });
    
    browsingHoursSlider.addEventListener('input', function() {
      browsingHoursValue.textContent = `${this.value}h`;
      updateCategoryUsage('browsing', this.value);
    });
    
    actionButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleDataAction(action);
      });
    });

    // Modal event listeners
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        trackModal.style.display = 'none';
        compareModal.style.display = 'none';
      });
    });

    cancelTrack.addEventListener('click', function() {
      trackModal.style.display = 'none';
    });

    saveTrack.addEventListener('click', function() {
      saveTrackHandler();
    });

    closeCompare.addEventListener('click', function() {
      compareModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === trackModal || event.target === compareModal) {
        trackModal.style.display = 'none';
        compareModal.style.display = 'none';
      }
    });

    // Set current date for tracking
    document.getElementById('trackDate').value = getCurrentDate();

    function initializeCalculator() {
      // Load saved preferences if any
      updateAllCategoryUsage();
    }

    function updateCategoryUsage(category, hours) {
      const streamingQuality = streamingQualitySelect.value;
      const wifiMultiplier = getWifiMultiplier();
      
      // Data consumption rates (MB per hour)
      let rate = 0;
      switch(category) {
        case 'video':
          switch(streamingQuality) {
            case 'low': rate = 700; break;
            case 'medium': rate = 1500; break;
            case 'high': rate = 3000; break;
            case 'ultra': rate = 7000; break;
          }
          break;
        case 'music':
          rate = 100; // MB per hour
          break;
        case 'social':
          rate = 200; // MB per hour
          break;
        case 'browsing':
          rate = 100; // MB per hour
          break;
      }
      
      // Adjust for Wi-Fi availability
      const adjustedRate = rate * (1 - wifiMultiplier);
      const dailyUsage = hours * adjustedRate;
      const monthlyUsage = (dailyUsage * 30) / 1024; // Convert to GB
      
      // Update display
      document.getElementById(`${category}Usage`).textContent = `${monthlyUsage.toFixed(1)} GB`;
    }

    function updateAllCategoryUsage() {
      updateCategoryUsage('video', videoHoursSlider.value);
      updateCategoryUsage('music', musicHoursSlider.value);
      updateCategoryUsage('social', socialHoursSlider.value);
      updateCategoryUsage('browsing', browsingHoursSlider.value);
    }

    function getWifiMultiplier() {
      const wifiAvailability = wifiAvailabilitySelect.value;
      switch(wifiAvailability) {
        case 'high': return 0.8;
        case 'medium': return 0.5;
        case 'low': return 0.2;
        case 'minimal': return 0;
        default: return 0.5;
      }
    }

    function handleDataAction(action) {
      switch (action) {
        case 'calculate':
          calculateDataUsage();
          break;

        case 'track':
          trackModal.style.display = 'block';
          break;

        case 'reset':
          if (confirm('Are you sure you want to reset all inputs?')) {
            resetAllInputs();
            hideAllResults();
            showAlert('Calculator reset successfully!', 'success');
          }
          break;

        case 'save':
          saveProfile();
          break;

        case 'compare':
          compareModal.style.display = 'block';
          break;

        case 'share':
          shareResults();
          break;
      }
    }

    function calculateDataUsage() {
      // Get usage from each category
      const videoUsage = parseFloat(document.getElementById('videoUsage').textContent);
      const musicUsage = parseFloat(document.getElementById('musicUsage').textContent);
      const socialUsage = parseFloat(document.getElementById('socialUsage').textContent);
      const browsingUsage = parseFloat(document.getElementById('browsingUsage').textContent);
      
      // Calculate base monthly usage
      let totalMonthly = videoUsage + musicUsage + socialUsage + browsingUsage;
      
      // Add additional usage
      const additionalUsage = additionalUsageSelect.value;
      let additionalGB = 0;
      switch(additionalUsage) {
        case 'minimal': additionalGB = 0.5; break;
        case 'light': additionalGB = 1; break;
        case 'moderate': additionalGB = 2; break;
        case 'heavy': additionalGB = 5; break;
      }
      totalMonthly += additionalGB;
      
      // Apply data saving adjustments
      const dataSaving = dataSavingSelect.value;
      let savingMultiplier = 1.0;
      switch(dataSaving) {
        case 'light': savingMultiplier = 0.9; break;
        case 'moderate': savingMultiplier = 0.8; break;
        case 'aggressive': savingMultiplier = 0.7; break;
      }
      totalMonthly *= savingMultiplier;
      
      // Adjust for background data and auto-updates
      if (!backgroundDataCheckbox.checked) {
        totalMonthly *= 0.95; // 5% reduction
      }
      if (!autoUpdatesCheckbox.checked) {
        totalMonthly *= 0.98; // 2% reduction
      }
      
      // Calculate daily average
      const billingCycle = parseInt(billingCycleInput.value) || 30;
      const dailyAverage = (totalMonthly * 1024) / billingCycle; // Convert to MB
      
      // Calculate peak usage (25% higher than average)
      const peakUsage = dailyAverage * 1.25;
      
      // Calculate buffer (20% safety margin)
      const bufferAmount = totalMonthly * 0.2;
      const totalWithBuffer = totalMonthly + bufferAmount;
      
      // Get usage rating
      const usageRating = getUsageRating(totalMonthly);
      const recommendedPlan = getRecommendedPlan(totalWithBuffer);
      
      // Update results
      document.getElementById('estimatedUsage').textContent = `${totalMonthly.toFixed(1)} GB`;
      document.getElementById('dailyAverage').textContent = `${dailyAverage.toFixed(0)} MB`;
      document.getElementById('usageRating').textContent = usageRating;
      document.getElementById('recommendedPlan').textContent = recommendedPlan;
      
      document.getElementById('monthlyNeed').textContent = `${totalWithBuffer.toFixed(1)} GB`;
      document.getElementById('dailyUsage').textContent = `${dailyAverage.toFixed(0)} MB`;
      document.getElementById('peakUsage').textContent = `${peakUsage.toFixed(0)} MB`;
      document.getElementById('bufferAmount').textContent = `${bufferAmount.toFixed(1)} GB`;
      
      // Update recommended plan
      document.getElementById('recommendedData').textContent = recommendedPlan;
      
      // Update visualization
      updateDataVisualization(totalWithBuffer);
      
      // Update breakdown chart
      updateBreakdownChart(videoUsage, musicUsage, socialUsage, browsingUsage, additionalGB);
      
      // Update timeline
      updateUsageTimeline(totalWithBuffer);
      
      // Show results
      dataResults.style.display = 'block';
      dataVisualization.style.display = 'flex';
      dataBreakdown.style.display = 'block';
      planRecommendation.style.display = 'block';
      usageTimeline.style.display = 'block';
      
      showAlert('Data usage calculated successfully!', 'success');
    }

    function getUsageRating(totalGB) {
      if (totalGB < 3) return 'Light';
      if (totalGB < 7) return 'Moderate';
      if (totalGB < 15) return 'Heavy';
      return 'Power User';
    }

    function getRecommendedPlan(totalGB) {
      if (totalGB < 3) return '2-3 GB';
      if (totalGB < 5) return '3-5 GB';
      if (totalGB < 8) return '5-10 GB';
      if (totalGB < 15) return '10-15 GB';
      if (totalGB < 25) return '15-25 GB';
      return '25+ GB';
    }

    function updateDataVisualization(totalGB) {
      const dataNeedle = document.getElementById('dataNeedle');
      
      // Calculate needle position (0-180 degrees)
      let angle = 0;
      if (totalGB <= 2) {
        angle = (totalGB / 2) * 45; // 0-45 degrees for 0-2GB
      } else if (totalGB <= 5) {
        angle = 45 + ((totalGB - 2) / 3) * 45; // 45-90 degrees for 2-5GB
      } else if (totalGB <= 10) {
        angle = 90 + ((totalGB - 5) / 5) * 45; // 90-135 degrees for 5-10GB
      } else if (totalGB <= 20) {
        angle = 135 + ((totalGB - 10) / 10) * 30; // 135-165 degrees for 10-20GB
      } else {
        angle = 165 + Math.min(((totalGB - 20) / 30) * 15, 15); // 165-180 degrees for 20-50GB
      }
      
      dataNeedle.style.transform = `translateX(-50%) rotate(${angle}deg)`;
    }

    function updateBreakdownChart(video, music, social, browsing, additional) {
      const breakdownChart = document.getElementById('breakdownChart');
      breakdownChart.innerHTML = '';
      
      const categories = [
        { name: 'Video', value: video, color: '#e74c3c' },
        { name: 'Music', value: music, color: '#3498db' },
        { name: 'Social', value: social, color: '#2ecc71' },
        { name: 'Browsing', value: browsing, color: '#f39c12' },
        { name: 'Other', value: additional, color: '#9b59b6' }
      ];
      
      const total = video + music + social + browsing + additional;
      const maxValue = Math.max(...categories.map(c => c.value));
      
      categories.forEach(category => {
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        bar.style.height = `${(category.value / maxValue) * 100}%`;
        bar.style.background = category.color;
        
        const label = document.createElement('div');
        label.className = 'chart-label';
        label.textContent = category.name;
        
        const value = document.createElement('div');
        value.className = 'chart-value';
        value.textContent = `${((category.value / total) * 100).toFixed(0)}%`;
        
        bar.appendChild(value);
        bar.appendChild(label);
        breakdownChart.appendChild(bar);
      });
    }

    function updateUsageTimeline(totalGB) {
      // For demonstration, show 60% usage
      const progressPercentage = 60;
      
      document.getElementById('progressFill').style.width = `${progressPercentage}%`;
      document.getElementById('progressPercentage').textContent = `${progressPercentage}%`;
      
      document.getElementById('dataUsageFill').style.width = `${progressPercentage}%`;
    }

    function saveTrackHandler() {
      const date = document.getElementById('trackDate').value;
      const dataUsed = parseFloat(document.getElementById('trackedData').value);
      const usageType = document.getElementById('usageType').value;
      
      if (!date || !dataUsed || dataUsed <= 0) {
        showAlert('Please enter valid tracking data.', 'error');
        return;
      }
      
      // Add to tracking history
      dataHistory.entries.push({
        date: date,
        dataUsed: dataUsed,
        usageType: usageType,
        timestamp: new Date().toISOString()
      });
      
      // Save to localStorage
      localStorage.setItem('dataHistory', JSON.stringify(dataHistory));
      
      trackModal.style.display = 'none';
      showAlert(`Tracked ${dataUsed} MB of ${usageType} usage!`, 'success');
    }

    function saveProfile() {
      const profile = {
        name: `Data Profile ${new Date().toLocaleDateString()}`,
        timestamp: new Date().toISOString(),
        settings: getCurrentSettings()
      };
      
      dataHistory.profiles.push(profile);
      localStorage.setItem('dataHistory', JSON.stringify(dataHistory));
      
      showAlert('Profile saved successfully!', 'success');
    }

    function getCurrentSettings() {
      return {
        streamingQuality: streamingQualitySelect.value,
        wifiAvailability: wifiAvailabilitySelect.value,
        networkType: networkTypeSelect.value,
        billingCycle: billingCycleInput.value,
        videoHours: videoHoursSlider.value,
        musicHours: musicHoursSlider.value,
        socialHours: socialHoursSlider.value,
        browsingHours: browsingHoursSlider.value,
        additionalUsage: additionalUsageSelect.value,
        dataSaving: dataSavingSelect.value,
        backgroundData: backgroundDataCheckbox.checked,
        autoUpdates: autoUpdatesCheckbox.checked
      };
    }

    function resetAllInputs() {
      // Reset basic settings
      streamingQualitySelect.value = 'medium';
      wifiAvailabilitySelect.value = 'medium';
      networkTypeSelect.value = '4g';
      billingCycleInput.value = '30';
      
      // Reset sliders
      videoHoursSlider.value = '1';
      musicHoursSlider.value = '2';
      socialHoursSlider.value = '1.5';
      browsingHoursSlider.value = '1';
      
      // Reset additional options
      additionalUsageSelect.value = 'light';
      dataSavingSelect.value = 'light';
      backgroundDataCheckbox.checked = true;
      autoUpdatesCheckbox.checked = true;
      
      // Update displays
      updateAllCategoryUsage();
      videoHoursValue.textContent = '1h';
      musicHoursValue.textContent = '2h';
      socialHoursValue.textContent = '1.5h';
      browsingHoursValue.textContent = '1h';
    }

    function shareResults() {
      const monthlyNeed = document.getElementById('monthlyNeed').textContent;
      const usageRating = document.getElementById('usageRating').textContent;
      const recommendedPlan = document.getElementById('recommendedPlan').textContent;
      
      const resultsText = `My mobile data need: ${monthlyNeed} monthly (${usageRating} user)\nRecommended plan: ${recommendedPlan} - calculated with Mobile Data Usage Calculator`;
      
      if (navigator.share) {
        navigator.share({
          title: 'My Mobile Data Analysis',
          text: resultsText,
          url: window.location.href
        }).catch(err => {
          console.log('Error sharing:', err);
          copyToClipboard(resultsText);
        });
      } else {
        copyToClipboard(resultsText);
      }
    }

    function hideAllResults() {
      dataResults.style.display = 'none';
      dataVisualization.style.display = 'none';
      dataBreakdown.style.display = 'none';
      planRecommendation.style.display = 'none';
      usageTimeline.style.display = 'none';
    }

    // Utility functions
    function getCurrentDate() {
      return new Date().toISOString().split('T')[0];
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showAlert('Results copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy results: ' + err, 'error');
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