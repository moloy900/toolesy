---
layout: default
title: "Confidence Interval Calculator – Stats & Research Tool"
permalink: /confidence-interval-calculator-calculate-statistical-intervals-online/
---

<!-- Basic SEO Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Confidence Interval Calculator – Stats & Research Tool</title>

<meta name="description"
  content="Calculate confidence intervals for means, proportions and datasets with our free online tool. Fast, accurate and ideal for statistics, research and data analysis.">

<meta name="keywords"
  content="confidence interval calculator, online statistics calculator, mean confidence interval, proportion confidence interval, margin of error calculator, standard error tool, z-score calculator, t-score calculator, data analysis calculator">

<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Canonical URL -->
<link rel="canonical" href="https://toolesy.com/confidence-interval-calculator-calculate-statistical-intervals-online" />

<!-- Open Graph Tags (Facebook / LinkedIn) -->
<meta property="og:title" content="Confidence Interval Calculator - Free Online Statistics Tool">
<meta property="og:description" content="Free online tool to calculate confidence intervals for means, proportions, and other statistics. Ideal for research and data analysis.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://toolesy.com/confidence-interval-calculator-calculate-statistical-intervals-online">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Confidence Interval Calculator | Online Statistics Tool">
<meta name="twitter:description" content="Free online confidence interval calculator for means, proportions, and statistical analysis. Easy, fast, and accurate.">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Confidence Interval Calculator Styles */
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

  .calculator-types {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }

  .calculator-type {
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    cursor: pointer;
    border: 2px solid transparent;
  }

  .calculator-type:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
    border-color: var(--primary);
  }

  .calculator-type.active {
    border-color: var(--primary);
    background: #f0f8ff;
  }

  .calculator-type h3 {
    color: var(--primary);
    margin-bottom: 10px;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .calculator-type p {
    font-size: 0.95rem;
    color: #555;
    margin: 0;
  }

  .input-section {
    margin: 20px 0;
  }

  .input-group {
    margin-bottom: 20px;
  }

  .input-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #2c3e50;
  }

  .input-group input, .input-group select, .input-group textarea {
    width: 100%;
    padding: 14px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  .input-group input:focus, .input-group select:focus, .input-group textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .data-inputs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
  }

  .data-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .data-table th {
    background: var(--primary);
    color: white;
    padding: 15px;
    text-align: left;
    font-weight: 600;
  }

  .data-table td {
    padding: 12px 15px;
    border-bottom: 1px solid #e0e0e0;
  }

  .data-table tr:last-child td {
    border-bottom: none;
  }

  .data-table tr:hover {
    background: #f8f9fa;
  }

  .add-data-button {
    background: var(--success);
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 10px 0;
  }

  .add-data-button:hover {
    background: #218838;
    transform: translateY(-2px);
  }

  .remove-data {
    color: #dc3545;
    cursor: pointer;
    font-size: 1.2rem;
    transition: color 0.3s;
  }

  .remove-data:hover {
    color: #c82333;
  }

  .formula-display {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    margin: 20px 0;
    border-left: 4px solid var(--primary);
    font-family: 'Courier New', monospace;
    font-size: 1rem;
  }

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
    margin: 25px 0;
  }

  .calc-button {
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

  .calc-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .calc-button:active {
    transform: translateY(0);
  }

  .calc-button.success {
    background: var(--success);
  }

  .calc-button.success:hover {
    background: #218838;
  }

  .calc-button.secondary {
    background: #6c757d;
  }

  .calc-button.secondary:hover {
    background: #5a6268;
  }

  .calc-button.warning {
    background: #ffc107;
    color: #212529;
  }

  .calc-button.warning:hover {
    background: #e0a800;
  }

  .result-section {
    margin-top: 30px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    display: none;
  }

  .result-section.active {
    display: block;
    animation: fadeIn 0.5s;
  }

  .result-title {
    color: var(--primary);
    font-size: 1.3rem;
    margin-bottom: 15px;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 10px;
  }

  .result-value {
    font-size: 1.8rem;
    font-weight: bold;
    color: #2c3e50;
    margin: 15px 0;
    text-align: center;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .calculation-steps {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    margin-top: 20px;
    font-size: 0.95rem;
  }

  .calculation-steps h4 {
    margin-bottom: 10px;
    color: var(--primary);
  }

  .calculation-steps ol {
    margin-left: 20px;
  }

  .calculation-steps li {
    margin-bottom: 8px;
    line-height: 1.5;
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

  .example-item {
    background: white;
    padding: 15px;
    border-radius: 6px;
    border-left: 4px solid var(--primary);
    margin: 10px 0;
  }

  .example-question {
    font-weight: 600;
    margin-bottom: 5px;
    color: #2c3e50;
  }

  .example-answer {
    color: #555;
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

  /* New styles for share and donation buttons */
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

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* Confidence Interval specific styles */
  .ci-options {
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
    width: 100%;
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

  /* Summary cards */
  .summary-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
  }

  .summary-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    border-left: 4px solid var(--primary);
  }

  .summary-card h4 {
    color: #2c3e50;
    margin-bottom: 10px;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .summary-card .value {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--primary);
  }

  .summary-card .subtext {
    font-size: 0.8rem;
    color: #666;
    margin-top: 5px;
  }

  /* Confidence interval visualization */
  .ci-visualization {
    background: white;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .ci-visualization h4 {
    color: var(--primary);
    margin-bottom: 15px;
    text-align: center;
  }

  .ci-scale {
    height: 60px;
    background: linear-gradient(90deg, #e74c3c, #f39c12, #2ecc71, #f39c12, #e74c3c);
    border-radius: 30px;
    position: relative;
    margin: 20px 0;
  }

  .ci-interval {
    position: absolute;
    height: 80px;
    background: rgba(52, 152, 219, 0.3);
    border: 2px solid var(--primary);
    border-radius: 5px;
    top: -10px;
  }

  .ci-point {
    position: absolute;
    width: 4px;
    height: 80px;
    background: #2c3e50;
    top: -10px;
  }

  .ci-labels {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 0.8rem;
    color: #666;
  }

  /* Statistical symbols */
  .stat-symbol {
    font-family: 'Times New Roman', serif;
    font-style: italic;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .counter-wrapper {
      grid-template-columns: 1fr;
    }

    .calculator-types {
      grid-template-columns: 1fr;
    }

    .button-section {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }

    .calc-button {
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

    .result-value {
      font-size: 1.5rem;
    }

    .data-inputs-grid {
      grid-template-columns: 1fr;
    }

    .ci-options {
      grid-template-columns: 1fr;
    }

    .summary-cards {
      grid-template-columns: 1fr;
    }

    .data-table {
      font-size: 0.8rem;
    }

    .data-table th,
    .data-table td {
      padding: 8px 10px;
    }
  }

  /* Calculator type icons */
  .calculator-type i {
    font-size: 1.5rem;
    color: var(--primary);
  }
</style>

<div class="calculator-container">
  <h1>Free Online Confidence Interval Calculator</h1>
  <p class="welcome-message">Calculate confidence intervals for means, proportions, and statistical data. Perfect for research, data analysis, and academic studies.</p>

  <div class="calculator-section">
    <h2>Confidence Interval Calculator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Common Confidence Levels: </span>
        <span>90%, 95%, 99%</span>
      </div>
      <div class="counter-item">
        <span>Z-score (95%): </span>
        <span>1.96</span>
      </div>
      <div class="counter-item">
        <span>T-score (df=30): </span>
        <span>2.042</span>
      </div>
      <div class="counter-item">
        <span>Standard Normal: </span>
        <span>μ=0, σ=1</span>
      </div>
    </div>

    <div class="calculator-types">
      <div class="calculator-type active" data-type="mean-ci">
        <h3><i class="fas fa-chart-bar"></i> Mean CI</h3>
        <p>Confidence interval for population mean</p>
      </div>
      <div class="calculator-type" data-type="proportion-ci">
        <h3><i class="fas fa-percentage"></i> Proportion CI</h3>
        <p>Confidence interval for population proportion</p>
      </div>
      <div class="calculator-type" data-type="variance-ci">
        <h3><i class="fas fa-expand-arrows-alt"></i> Variance CI</h3>
        <p>Confidence interval for population variance</p>
      </div>
      <div class="calculator-type" data-type="data-input">
        <h3><i class="fas fa-table"></i> Data Input</h3>
        <p>Calculate from raw data values</p>
      </div>
    </div>

    <div class="input-section">
      <!-- Mean Confidence Interval -->
      <div id="mean-ci-inputs" class="calculator-inputs">
        <div class="data-inputs-grid">
          <div class="input-group">
            <label for="sample-mean">Sample Mean (<span class="stat-symbol">x̄</span>)</label>
            <input type="number" id="sample-mean" step="any" value="50" placeholder="Enter sample mean">
          </div>
          <div class="input-group">
            <label for="std-dev">Standard Deviation (σ or s)</label>
            <input type="number" id="std-dev" step="any" value="10" placeholder="Enter standard deviation">
          </div>
          <div class="input-group">
            <label for="sample-size-mean">Sample Size (n)</label>
            <input type="number" id="sample-size-mean" min="1" value="30" placeholder="Enter sample size">
          </div>
        </div>
        <div class="formula-display">
          Formula: CI = x̄ ± Z*(σ/√n) or x̄ ± t*(s/√n) for unknown population standard deviation
        </div>
      </div>

      <!-- Proportion Confidence Interval -->
      <div id="proportion-ci-inputs" class="calculator-inputs" style="display: none;">
        <div class="data-inputs-grid">
          <div class="input-group">
            <label for="sample-proportion">Sample Proportion (<span class="stat-symbol">p̂</span>)</label>
            <input type="number" id="sample-proportion" min="0" max="1" step="0.01" value="0.5" placeholder="Enter proportion (0-1)">
          </div>
          <div class="input-group">
            <label for="sample-size-prop">Sample Size (n)</label>
            <input type="number" id="sample-size-prop" min="1" value="100" placeholder="Enter sample size">
          </div>
          <div class="input-group">
            <label for="success-count">Success Count (x)</label>
            <input type="number" id="success-count" min="0" value="50" placeholder="Optional: success count">
          </div>
        </div>
        <div class="formula-display">
          Formula: CI = p̂ ± Z*√(p̂(1-p̂)/n)
        </div>
      </div>

      <!-- Variance Confidence Interval -->
      <div id="variance-ci-inputs" class="calculator-inputs" style="display: none;">
        <div class="data-inputs-grid">
          <div class="input-group">
            <label for="sample-variance">Sample Variance (s²)</label>
            <input type="number" id="sample-variance" step="any" value="25" placeholder="Enter sample variance">
          </div>
          <div class="input-group">
            <label for="sample-size-var">Sample Size (n)</label>
            <input type="number" id="sample-size-var" min="2" value="30" placeholder="Enter sample size">
          </div>
          <div class="input-group">
            <label for="std-dev-var">Standard Deviation (s)</label>
            <input type="number" id="std-dev-var" step="any" value="5" placeholder="Optional: standard deviation">
          </div>
        </div>
        <div class="formula-display">
          Formula: CI = [(n-1)s²/χ²_upper, (n-1)s²/χ²_lower] using Chi-square distribution
        </div>
      </div>

      <!-- Data Input Confidence Interval -->
      <div id="data-input-inputs" class="calculator-inputs" style="display: none;">
        <div class="input-group">
          <label>Enter Data Values (comma or space separated)</label>
          <textarea id="raw-data" rows="4" placeholder="Enter numbers: 45, 52, 48, 55, 50, 49, 53, 47, 51, 54">45, 52, 48, 55, 50, 49, 53, 47, 51, 54</textarea>
        </div>
        <div class="input-group">
          <button class="add-data-button" id="add-sample-data">
            <i class="fas fa-plus"></i> Add Sample Data
          </button>
        </div>
        <div class="formula-display">
          The calculator will compute mean, standard deviation, and sample size from your data
        </div>
      </div>
    </div>

    <div class="ci-options">
      <div class="option-group">
        <label class="option-label">Confidence Level</label>
        <select id="confidence-level" class="option-select">
          <option value="0.90">90%</option>
          <option value="0.95" selected>95%</option>
          <option value="0.99">99%</option>
          <option value="custom">Custom</option>
        </select>
      </div>
      
      <div class="option-group" id="custom-confidence-group" style="display: none;">
        <label class="option-label">Custom Confidence Level</label>
        <input type="number" id="custom-confidence" class="option-input" min="0.50" max="0.999" step="0.001" value="0.95" placeholder="0.95">
      </div>
      
      <div class="option-group">
        <label class="option-label">Population SD Known</label>
        <div class="option-checkbox">
          <input type="checkbox" id="pop-sd-known">
          <label for="pop-sd-known">Use Z-distribution (σ known)</label>
        </div>
      </div>

      <div class="option-group">
        <label class="option-label">Display Format</label>
        <select id="display-format" class="option-select">
          <option value="decimal">Decimal</option>
          <option value="fraction">Fraction</option>
          <option value="scientific">Scientific</option>
        </select>
      </div>
    </div>

    <div class="button-section">
      <button class="calc-button" id="calculate-button">Calculate</button>
      <button class="calc-button success" id="example-button">Load Example</button>
      <button class="calc-button secondary" id="clear-button">Clear All</button>
      <button class="calc-button warning" id="copy-button">Copy Result</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="result-section" id="result-section">
      <h3 class="result-title">Confidence Interval Result</h3>
      <div class="result-value" id="result-value"></div>
      
      <div class="summary-cards" id="summary-cards">
        <!-- Summary cards will be dynamically inserted here -->
      </div>

      <div class="ci-visualization" id="ci-visualization">
        <h4>Confidence Interval Visualization</h4>
        <div class="ci-scale" id="ci-scale">
          <div class="ci-interval" id="ci-interval"></div>
          <div class="ci-point" id="ci-point"></div>
        </div>
        <div class="ci-labels">
          <span id="lower-bound-label">Lower Bound</span>
          <span id="point-estimate-label">Point Estimate</span>
          <span id="upper-bound-label">Upper Bound</span>
        </div>
      </div>
      
      <div class="calculation-steps" id="calculation-steps"></div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <div class="example-item">
        <div class="example-question">A sample of 50 students has a mean test score of 75 with a standard deviation of 10. What is the 95% confidence interval for the population mean?</div>
        <div class="example-answer">CI = 75 ± 1.96*(10/√50) = 75 ± 2.77 = [72.23, 77.77]</div>
      </div>

      <div class="example-item">
        <div class="example-question">In a survey of 400 people, 220 support a policy. What is the 90% confidence interval for the population proportion?</div>
        <div class="example-answer">p̂ = 220/400 = 0.55, CI = 0.55 ± 1.645*√(0.55*0.45/400) = 0.55 ± 0.041 = [0.509, 0.591]</div>
      </div>

      <div class="example-item">
        <div class="example-question">A sample of 25 measurements has a variance of 16. What is the 99% confidence interval for the population variance?</div>
        <div class="example-answer">Using Chi-square: CI = [24*16/45.56, 24*16/9.886] = [8.42, 38.83]</div>
      </div>

      <div class="example-item">
        <div class="example-question">Given data: 12, 15, 18, 14, 16, 19, 13, 17. What is the 95% CI for the mean?</div>
        <div class="example-answer">Mean = 15.5, SD = 2.45, n = 8, CI = 15.5 ± 2.365*(2.45/√8) = 15.5 ± 2.05 = [13.45, 17.55]</div>
      </div>
    </div>
  </div>

  ```html
<!-- SEO Content Section -->
<div class="content-placeholder">

  <h2>Confidence Interval Calculator – Estimate Population Parameters with Confidence</h2>

  <p>A <strong>Confidence Interval Calculator</strong> is one of the most valuable statistical tools for researchers, students, analysts, and professionals who work with data. Rather than relying solely on a single sample estimate, confidence intervals provide a realistic range within which the true population value is likely to fall. This approach helps account for natural sampling variation and allows decision-makers to understand the reliability of their findings.</p>

  <p>Whether you are conducting academic research, analyzing customer satisfaction surveys, evaluating business performance, performing medical studies, or learning statistics for the first time, confidence intervals help transform raw data into meaningful insights. Instead of saying a population average is exactly 50, a confidence interval allows you to state that the true value is likely between 47 and 53 with a specified level of confidence.</p>

  <p>Our free <strong>Confidence Interval Calculator</strong> simplifies complex statistical calculations and provides accurate results within seconds. It supports confidence intervals for means, proportions, variances, and raw datasets while also explaining each step involved in the calculation process. This makes it useful for both professional analysis and educational purposes.</p>

  <h3>How to Use This Confidence Interval Calculator (Step-by-Step)</h3>

  <p>The calculator is designed to make advanced statistical calculations accessible to everyone. Follow these simple steps:</p>

  <ul>
    <li><strong>Select the Type of Calculation:</strong> Choose whether you want to calculate a confidence interval for a mean, proportion, variance, or directly from raw data.</li>

    <li><strong>Enter Sample Information:</strong> Input the sample size, sample mean, standard deviation, proportion, or other required values depending on the calculation type.</li>

    <li><strong>Choose a Confidence Level:</strong> Select a common confidence level such as 90%, 95%, or 99%, or enter a custom value.</li>

    <li><strong>Specify Distribution Type:</strong> Indicate whether population standard deviation is known to determine if a Z-distribution or T-distribution should be used.</li>

    <li><strong>Run the Calculation:</strong> Click the calculate button to instantly generate the confidence interval.</li>

    <li><strong>Review Detailed Results:</strong> Examine the margin of error, critical value, standard error, and interval limits.</li>

    <li><strong>Interpret the Findings:</strong> Use the interval range to make informed decisions based on your data.</li>
  </ul>

  <h3>Real-Life Example & Use Case</h3>

  <p>Suppose a company wants to understand customer satisfaction levels for a recently launched product. The research team surveys 500 customers and finds that 72% report being satisfied. While 72% is the sample result, the company knows that not every customer was surveyed.</p>

  <p>Using a 95% confidence interval, the calculator may show that the true customer satisfaction rate lies between 68% and 76%. This interval provides a more realistic picture of customer sentiment because it accounts for uncertainty associated with sampling.</p>

  <p>Instead of relying solely on a single percentage, business leaders can make decisions while understanding the possible range of actual satisfaction levels within the broader customer population.</p>

  <h3>What Is a Confidence Interval?</h3>

  <p>A confidence interval is a statistical range calculated from sample data that is likely to contain the true value of a population parameter. Population parameters may include:</p>

  <ul>
    <li><strong>Population Mean:</strong> The average value within an entire population.</li>

    <li><strong>Population Proportion:</strong> The percentage of individuals with a specific characteristic.</li>

    <li><strong>Population Variance:</strong> The amount of variability within a population.</li>

    <li><strong>Population Difference:</strong> The difference between groups or treatments.</li>
  </ul>

  <p>Because collecting information from an entire population is often impractical or impossible, researchers use samples. Confidence intervals help estimate the true population value while acknowledging uncertainty.</p>

  <h3>Why Confidence Intervals Matter</h3>

  <p>Many people focus only on point estimates such as averages or percentages. However, every sample contains some degree of sampling error. Confidence intervals provide additional context by showing how precise an estimate is.</p>

  <ul>
    <li><strong>Improved Decision-Making:</strong> Understand the reliability of estimates.</li>

    <li><strong>Quantified Uncertainty:</strong> Measure the possible range of true values.</li>

    <li><strong>Research Transparency:</strong> Present results with appropriate statistical context.</li>

    <li><strong>Better Comparisons:</strong> Compare groups while considering variability.</li>

    <li><strong>Professional Reporting:</strong> Widely accepted in scientific and business research.</li>
  </ul>

  <h3>Understanding Confidence Levels</h3>

  <p>The confidence level represents how often the interval would capture the true population parameter if the sampling process were repeated many times.</p>

  <ul>
    <li><strong>90% Confidence Level:</strong> Provides narrower intervals but less certainty.</li>

    <li><strong>95% Confidence Level:</strong> The most commonly used standard in research.</li>

    <li><strong>99% Confidence Level:</strong> Offers greater certainty but produces wider intervals.</li>
  </ul>

  <p>Higher confidence levels require larger intervals because more uncertainty must be accounted for. Researchers often choose 95% confidence because it provides a balance between precision and reliability.</p>

  <h3>Benefits & Who Should Use This Tool?</h3>

  <ul>
    <li><strong>Researchers:</strong> Estimate population parameters accurately.</li>

    <li><strong>Students:</strong> Learn statistical concepts and verify coursework.</li>

    <li><strong>Professors & Teachers:</strong> Demonstrate practical applications of inferential statistics.</li>

    <li><strong>Business Analysts:</strong> Evaluate customer behavior and market trends.</li>

    <li><strong>Healthcare Professionals:</strong> Analyze treatment outcomes and patient data.</li>

    <li><strong>Quality Control Teams:</strong> Monitor production processes and consistency.</li>

    <li><strong>Government Agencies:</strong> Analyze surveys and public policy data.</li>
  </ul>

  <h3>Frequently Asked Questions</h3>

  <p><strong>What does a 95% confidence interval mean?</strong><br>
  It means that if the same study were repeated many times, approximately 95% of the calculated intervals would contain the true population parameter.</p>

  <p><strong>Does a wider confidence interval mean better results?</strong><br>
  Not necessarily. Wider intervals indicate greater uncertainty, while narrower intervals suggest more precise estimates.</p>

  <p><strong>How can I reduce the width of a confidence interval?</strong><br>
  Increasing sample size is one of the most effective ways to obtain narrower and more precise confidence intervals.</p>

  <p><strong>What affects confidence interval accuracy?</strong><br>
  Sample size, variability, confidence level, and data quality all influence interval accuracy.</p>

  <p><strong>Can confidence intervals replace hypothesis testing?</strong><br>
  Confidence intervals often provide more information because they show both the estimate and its precision rather than a simple pass/fail significance result.</p>

  <h3>The Mathematics Behind Confidence Intervals</h3>

  <p>Confidence intervals are built using three core statistical components:</p>

  <ul>
    <li><strong>Point Estimate:</strong> The statistic calculated from the sample.</li>

    <li><strong>Standard Error:</strong> Measures sampling variability.</li>

    <li><strong>Critical Value:</strong> Determined by the selected confidence level.</li>
  </ul>

  <p>The general confidence interval structure is:</p>

  <p><strong>Estimate ± Margin of Error</strong></p>

  <p>The margin of error is calculated by multiplying the critical value by the standard error.</p>

  <h3>Confidence Interval Formulas Used</h3>

  <ul>
    <li><strong>Mean (Known σ):</strong> x̄ ± Z × (σ / √n)</li>

    <li><strong>Mean (Unknown σ):</strong> x̄ ± t × (s / √n)</li>

    <li><strong>Proportion:</strong> p̂ ± Z × √[p̂(1-p̂)/n]</li>

    <li><strong>Variance:</strong> [(n−1)s²/χ²upper , (n−1)s²/χ²lower]</li>

    <li><strong>Margin of Error:</strong> Critical Value × Standard Error</li>
  </ul>

  <h3>Common Applications of Confidence Intervals</h3>

  <p>Confidence intervals are widely used across many industries and academic disciplines:</p>

  <ul>
    <li><strong>Market Research:</strong> Customer satisfaction surveys and product feedback.</li>

    <li><strong>Medical Studies:</strong> Drug effectiveness and treatment comparisons.</li>

    <li><strong>Education:</strong> Student performance and learning outcome evaluation.</li>

    <li><strong>Economics:</strong> Employment rates, inflation estimates, and forecasting.</li>

    <li><strong>Manufacturing:</strong> Quality assurance and process monitoring.</li>

    <li><strong>Environmental Science:</strong> Pollution measurements and ecological studies.</li>

    <li><strong>Public Opinion Research:</strong> Election polling and social surveys.</li>
  </ul>

  <h3>Understanding Statistical Assumptions</h3>

  <p>For confidence intervals to provide reliable results, several assumptions should generally be satisfied:</p>

  <ul>
    <li><strong>Random Sampling:</strong> Data should be collected randomly.</li>

    <li><strong>Independent Observations:</strong> Measurements should not influence one another.</li>

    <li><strong>Appropriate Sample Size:</strong> Larger samples generally improve reliability.</li>

    <li><strong>Normal Distribution:</strong> Especially important for small-sample mean intervals.</li>

    <li><strong>Accurate Measurements:</strong> Poor-quality data can produce misleading intervals.</li>
  </ul>

  <h3>Why Choose Our Confidence Interval Calculator?</h3>

  <p>Our <strong>Confidence Interval Calculator</strong> is designed for both beginners and experienced statisticians. Instead of displaying only the final interval, it provides detailed calculations, margin of error information, confidence level explanations, and educational insights that help users understand the underlying statistical concepts.</p>

  <p>Whether you are preparing a research paper, analyzing business data, conducting scientific studies, or learning statistics for the first time, this calculator offers a fast, accurate, and easy-to-use solution. All calculations are performed directly in your browser, ensuring privacy, speed, and convenience while delivering reliable statistical results whenever you need them.</p>

</div>
</div>
```


<script>
  document.addEventListener('DOMContentLoaded', function () {
    const calculatorTypes = document.querySelectorAll('.calculator-type');
    const calculatorInputs = document.querySelectorAll('.calculator-inputs');
    const calculateButton = document.getElementById('calculate-button');
    const exampleButton = document.getElementById('example-button');
    const clearButton = document.getElementById('clear-button');
    const copyButton = document.getElementById('copy-button');
    const resultSection = document.getElementById('result-section');
    const resultValue = document.getElementById('result-value');
    const summaryCards = document.getElementById('summary-cards');
    const calculationSteps = document.getElementById('calculation-steps');
    const alertContainer = document.getElementById('alertContainer');
    const confidenceLevel = document.getElementById('confidence-level');
    const customConfidenceGroup = document.getElementById('custom-confidence-group');
    const customConfidence = document.getElementById('custom-confidence');
    const ciScale = document.getElementById('ci-scale');
    const ciInterval = document.getElementById('ci-interval');
    const ciPoint = document.getElementById('ci-point');
    const lowerBoundLabel = document.getElementById('lower-bound-label');
    const pointEstimateLabel = document.getElementById('point-estimate-label');
    const upperBoundLabel = document.getElementById('upper-bound-label');
    const rawData = document.getElementById('raw-data');
    const addSampleData = document.getElementById('add-sample-data');

    let currentCalculatorType = 'mean-ci';

    // Set default values
    setDefaultValues();

    // Event listeners for calculator type selection
    calculatorTypes.forEach(type => {
      type.addEventListener('click', function () {
        // Remove active class from all types
        calculatorTypes.forEach(t => t.classList.remove('active'));
        // Add active class to clicked type
        this.classList.add('active');
        
        // Update current calculator type
        currentCalculatorType = this.getAttribute('data-type');
        
        // Hide all input sections
        calculatorInputs.forEach(input => {
          input.style.display = 'none';
        });
        
        // Show the selected input section
        document.getElementById(`${currentCalculatorType}-inputs`).style.display = 'block';
        
        // Hide result section
        resultSection.classList.remove('active');
      });
    });

    // Confidence level change handler
    confidenceLevel.addEventListener('change', function() {
      if (this.value === 'custom') {
        customConfidenceGroup.style.display = 'flex';
      } else {
        customConfidenceGroup.style.display = 'none';
      }
    });

    // Add sample data button
    addSampleData.addEventListener('click', function() {
      const sampleData = {
        'mean-ci': '50, 10, 30',
        'proportion-ci': '0.5, 100, 50',
        'variance-ci': '25, 30, 5',
        'data-input': '45, 52, 48, 55, 50, 49, 53, 47, 51, 54'
      };
      
      if (currentCalculatorType === 'data-input') {
        rawData.value = sampleData['data-input'];
      } else {
        showAlert('Sample data loaded! Adjust values as needed.', 'success');
      }
    });

    // Calculate button event listener
    calculateButton.addEventListener('click', function () {
      calculateConfidenceInterval();
    });

    // Example button event listener
    exampleButton.addEventListener('click', function () {
      loadExample();
    });

    // Clear button event listener
    clearButton.addEventListener('click', function () {
      clearAllInputs();
    });

    // Copy button event listener
    copyButton.addEventListener('click', function () {
      copyResult();
    });

    // Update proportion when success count changes
    document.getElementById('success-count').addEventListener('input', function() {
      const successCount = parseFloat(this.value);
      const sampleSize = parseFloat(document.getElementById('sample-size-prop').value);
      
      if (!isNaN(successCount) && !isNaN(sampleSize) && sampleSize > 0) {
        const proportion = successCount / sampleSize;
        document.getElementById('sample-proportion').value = proportion.toFixed(4);
      }
    });

    // Update variance when standard deviation changes
    document.getElementById('std-dev-var').addEventListener('input', function() {
      const stdDev = parseFloat(this.value);
      
      if (!isNaN(stdDev) && stdDev >= 0) {
        const variance = stdDev * stdDev;
        document.getElementById('sample-variance').value = variance.toFixed(4);
      }
    });

    function setDefaultValues() {
      // Set default values for mean calculator
      document.getElementById('sample-mean').value = '50';
      document.getElementById('std-dev').value = '10';
      document.getElementById('sample-size-mean').value = '30';
      
      // Set default values for proportion calculator
      document.getElementById('sample-proportion').value = '0.5';
      document.getElementById('sample-size-prop').value = '100';
      document.getElementById('success-count').value = '50';
      
      // Set default values for variance calculator
      document.getElementById('sample-variance').value = '25';
      document.getElementById('sample-size-var').value = '30';
      document.getElementById('std-dev-var').value = '5';
      
      // Set default values for data input
      rawData.value = '45, 52, 48, 55, 50, 49, 53, 47, 51, 54';
      
      // Set default confidence level
      confidenceLevel.value = '0.95';
      customConfidenceGroup.style.display = 'none';
    }

    function getConfidenceLevel() {
      if (confidenceLevel.value === 'custom') {
        return parseFloat(customConfidence.value);
      }
      return parseFloat(confidenceLevel.value);
    }

    function getCriticalValue(confidenceLevel, df = null) {
      // Z-values for common confidence levels
      const zValues = {
        0.80: 1.282,
        0.85: 1.440,
        0.90: 1.645,
        0.95: 1.960,
        0.99: 2.576,
        0.995: 2.807,
        0.999: 3.291
      };
      
      // For known population SD or large samples, use Z-distribution
      const popSDKnown = document.getElementById('pop-sd-known').checked;
      
      if (popSDKnown || (df && df > 30)) {
        // Use Z-distribution
        return zValues[confidenceLevel] || 1.96;
      } else {
        // Use T-distribution - simplified values for common cases
        const tValues = {
          10: {0.90: 1.812, 0.95: 2.228, 0.99: 3.169},
          20: {0.90: 1.725, 0.95: 2.086, 0.99: 2.845},
          30: {0.90: 1.697, 0.95: 2.042, 0.99: 2.750},
          40: {0.90: 1.684, 0.95: 2.021, 0.99: 2.704},
          50: {0.90: 1.676, 0.95: 2.009, 0.99: 2.678},
          100: {0.90: 1.660, 0.95: 1.984, 0.99: 2.626}
        };
        
        const closestDF = Object.keys(tValues).reduce((prev, curr) => {
          return Math.abs(curr - df) < Math.abs(prev - df) ? curr : prev;
        });
        
        return tValues[closestDF]?.[confidenceLevel] || 1.96;
      }
    }

    function getChiSquareValues(confidenceLevel, df) {
      // Simplified chi-square values for common cases
      const chiSquareValues = {
        10: {0.90: [3.940, 18.307], 0.95: [3.247, 20.483], 0.99: [2.156, 25.188]},
        20: {0.90: [10.851, 31.410], 0.95: [9.591, 34.170], 0.99: [7.433, 40.000]},
        30: {0.90: [18.493, 43.773], 0.95: [16.791, 46.979], 0.99: [13.787, 53.672]},
        40: {0.90: [26.509, 55.758], 0.95: [24.433, 59.342], 0.99: [20.707, 66.766]},
        50: {0.90: [34.764, 67.505], 0.95: [32.357, 71.420], 0.99: [28.336, 79.490]}
      };
      
      const closestDF = Object.keys(chiSquareValues).reduce((prev, curr) => {
        return Math.abs(curr - df) < Math.abs(prev - df) ? curr : prev;
      });
      
      return chiSquareValues[closestDF]?.[confidenceLevel] || [16.791, 46.979];
    }

    function calculateConfidenceInterval() {
      let result, steps, summary;
      
      try {
        const confidenceLevel = getConfidenceLevel();
        
        switch (currentCalculatorType) {
          case 'mean-ci':
            result = calculateMeanCI(confidenceLevel);
            break;
          case 'proportion-ci':
            result = calculateProportionCI(confidenceLevel);
            break;
          case 'variance-ci':
            result = calculateVarianceCI(confidenceLevel);
            break;
          case 'data-input':
            result = calculateDataInputCI(confidenceLevel);
            break;
          default:
            throw new Error('Unknown calculator type');
        }
        
        if (result) {
          displayResult(result, steps, summary);
          updateVisualization(result);
        }
      } catch (error) {
        showAlert(error.message, 'error');
      }
    }

    function calculateMeanCI(confidenceLevel) {
      const sampleMean = parseFloat(document.getElementById('sample-mean').value);
      const stdDev = parseFloat(document.getElementById('std-dev').value);
      const sampleSize = parseInt(document.getElementById('sample-size-mean').value);
      
      if (isNaN(sampleMean) || isNaN(stdDev) || isNaN(sampleSize)) {
        throw new Error('Please enter valid values for sample mean, standard deviation, and sample size');
      }
      
      if (sampleSize <= 0) {
        throw new Error('Sample size must be greater than 0');
      }
      
      if (stdDev < 0) {
        throw new Error('Standard deviation cannot be negative');
      }
      
      const df = sampleSize - 1;
      const criticalValue = getCriticalValue(confidenceLevel, df);
      const standardError = stdDev / Math.sqrt(sampleSize);
      const marginOfError = criticalValue * standardError;
      
      const lowerBound = sampleMean - marginOfError;
      const upperBound = sampleMean + marginOfError;
      
      const popSDKnown = document.getElementById('pop-sd-known').checked;
      const distribution = popSDKnown ? 'Z' : 't';
      
      const result = {
        type: 'mean',
        pointEstimate: sampleMean,
        lowerBound: lowerBound,
        upperBound: upperBound,
        marginOfError: marginOfError,
        standardError: standardError,
        criticalValue: criticalValue,
        confidenceLevel: confidenceLevel,
        sampleSize: sampleSize,
        distribution: distribution,
        degreesOfFreedom: df
      };
      
      const steps = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Sample Mean (x̄) = ${sampleMean.toFixed(4)}</li>
          <li>Standard Deviation = ${stdDev.toFixed(4)}</li>
          <li>Sample Size (n) = ${sampleSize}</li>
          <li>Standard Error = ${stdDev.toFixed(4)} / √${sampleSize} = ${standardError.toFixed(4)}</li>
          <li>Critical Value (${distribution}, ${confidenceLevel*100}%) = ${criticalValue.toFixed(4)}</li>
          <li>Margin of Error = ${criticalValue.toFixed(4)} × ${standardError.toFixed(4)} = ${marginOfError.toFixed(4)}</li>
          <li>Confidence Interval = ${sampleMean.toFixed(4)} ± ${marginOfError.toFixed(4)}</li>
          <li>Lower Bound = ${sampleMean.toFixed(4)} - ${marginOfError.toFixed(4)} = ${lowerBound.toFixed(4)}</li>
          <li>Upper Bound = ${sampleMean.toFixed(4)} + ${marginOfError.toFixed(4)} = ${upperBound.toFixed(4)}</li>
        </ol>
      `;
      
      summary = `
        <div class="summary-card">
          <h4>Point Estimate</h4>
          <div class="value">${sampleMean.toFixed(4)}</div>
          <div class="subtext">Sample Mean</div>
        </div>
        <div class="summary-card">
          <h4>Margin of Error</h4>
          <div class="value">±${marginOfError.toFixed(4)}</div>
          <div class="subtext">Precision</div>
        </div>
        <div class="summary-card">
          <h4>Standard Error</h4>
          <div class="value">${standardError.toFixed(4)}</div>
          <div class="subtext">SE = σ/√n</div>
        </div>
      `;
      
      return { 
        value: result, 
        text: `Mean CI: [${lowerBound.toFixed(4)}, ${upperBound.toFixed(4)}] at ${(confidenceLevel*100).toFixed(1)}% confidence`, 
        steps,
        summary
      };
    }

    function calculateProportionCI(confidenceLevel) {
      let sampleProportion = parseFloat(document.getElementById('sample-proportion').value);
      const sampleSize = parseInt(document.getElementById('sample-size-prop').value);
      const successCount = parseInt(document.getElementById('success-count').value);
      
      // Use success count if provided and valid
      if (!isNaN(successCount) && successCount >= 0 && sampleSize > 0) {
        sampleProportion = successCount / sampleSize;
        document.getElementById('sample-proportion').value = sampleProportion.toFixed(4);
      }
      
      if (isNaN(sampleProportion) || isNaN(sampleSize)) {
        throw new Error('Please enter valid values for sample proportion and sample size');
      }
      
      if (sampleSize <= 0) {
        throw new Error('Sample size must be greater than 0');
      }
      
      if (sampleProportion < 0 || sampleProportion > 1) {
        throw new Error('Sample proportion must be between 0 and 1');
      }
      
      // Check sample size requirements
      if (sampleSize * sampleProportion < 5 || sampleSize * (1 - sampleProportion) < 5) {
        showAlert('Warning: Sample size may be too small for accurate normal approximation', 'error');
      }
      
      const criticalValue = getCriticalValue(confidenceLevel); // Use Z for proportions
      const standardError = Math.sqrt((sampleProportion * (1 - sampleProportion)) / sampleSize);
      const marginOfError = criticalValue * standardError;
      
      const lowerBound = Math.max(0, sampleProportion - marginOfError);
      const upperBound = Math.min(1, sampleProportion + marginOfError);
      
      const result = {
        type: 'proportion',
        pointEstimate: sampleProportion,
        lowerBound: lowerBound,
        upperBound: upperBound,
        marginOfError: marginOfError,
        standardError: standardError,
        criticalValue: criticalValue,
        confidenceLevel: confidenceLevel,
        sampleSize: sampleSize,
        successCount: successCount
      };
      
      const steps = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Sample Proportion (p̂) = ${sampleProportion.toFixed(4)}</li>
          <li>Sample Size (n) = ${sampleSize}</li>
          <li>Standard Error = √[${sampleProportion.toFixed(4)} × (1 - ${sampleProportion.toFixed(4)}) / ${sampleSize}] = ${standardError.toFixed(4)}</li>
          <li>Critical Value (Z, ${confidenceLevel*100}%) = ${criticalValue.toFixed(4)}</li>
          <li>Margin of Error = ${criticalValue.toFixed(4)} × ${standardError.toFixed(4)} = ${marginOfError.toFixed(4)}</li>
          <li>Confidence Interval = ${sampleProportion.toFixed(4)} ± ${marginOfError.toFixed(4)}</li>
          <li>Lower Bound = ${sampleProportion.toFixed(4)} - ${marginOfError.toFixed(4)} = ${lowerBound.toFixed(4)}</li>
          <li>Upper Bound = ${sampleProportion.toFixed(4)} + ${marginOfError.toFixed(4)} = ${upperBound.toFixed(4)}</li>
        </ol>
      `;
      
      summary = `
        <div class="summary-card">
          <h4>Point Estimate</h4>
          <div class="value">${(sampleProportion*100).toFixed(2)}%</div>
          <div class="subtext">Sample Proportion</div>
        </div>
        <div class="summary-card">
          <h4>Margin of Error</h4>
          <div class="value">±${(marginOfError*100).toFixed(2)}%</div>
          <div class="subtext">Precision</div>
        </div>
        <div class="summary-card">
          <h4>Standard Error</h4>
          <div class="value">${standardError.toFixed(4)}</div>
          <div class="subtext">SE = √[p̂(1-p̂)/n]</div>
        </div>
      `;
      
      return { 
        value: result, 
        text: `Proportion CI: [${(lowerBound*100).toFixed(2)}%, ${(upperBound*100).toFixed(2)}%] at ${(confidenceLevel*100).toFixed(1)}% confidence`, 
        steps,
        summary
      };
    }

    function calculateVarianceCI(confidenceLevel) {
      let sampleVariance = parseFloat(document.getElementById('sample-variance').value);
      const sampleSize = parseInt(document.getElementById('sample-size-var').value);
      const stdDev = parseFloat(document.getElementById('std-dev-var').value);
      
      // Use standard deviation if provided and valid
      if (!isNaN(stdDev) && stdDev >= 0) {
        sampleVariance = stdDev * stdDev;
        document.getElementById('sample-variance').value = sampleVariance.toFixed(4);
      }
      
      if (isNaN(sampleVariance) || isNaN(sampleSize)) {
        throw new Error('Please enter valid values for sample variance and sample size');
      }
      
      if (sampleSize < 2) {
        throw new Error('Sample size must be at least 2 for variance calculation');
      }
      
      if (sampleVariance < 0) {
        throw new Error('Variance cannot be negative');
      }
      
      const df = sampleSize - 1;
      const [chiSquareLower, chiSquareUpper] = getChiSquareValues(confidenceLevel, df);
      
      const lowerBound = (df * sampleVariance) / chiSquareUpper;
      const upperBound = (df * sampleVariance) / chiSquareLower;
      
      const result = {
        type: 'variance',
        pointEstimate: sampleVariance,
        lowerBound: lowerBound,
        upperBound: upperBound,
        confidenceLevel: confidenceLevel,
        sampleSize: sampleSize,
        degreesOfFreedom: df,
        chiSquareLower: chiSquareLower,
        chiSquareUpper: chiSquareUpper
      };
      
      const steps = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Sample Variance (s²) = ${sampleVariance.toFixed(4)}</li>
          <li>Sample Size (n) = ${sampleSize}</li>
          <li>Degrees of Freedom (df) = ${sampleSize} - 1 = ${df}</li>
          <li>Chi-square values (${confidenceLevel*100}%): χ²_lower = ${chiSquareLower.toFixed(4)}, χ²_upper = ${chiSquareUpper.toFixed(4)}</li>
          <li>Lower Bound = (${df} × ${sampleVariance.toFixed(4)}) / ${chiSquareUpper.toFixed(4)} = ${lowerBound.toFixed(4)}</li>
          <li>Upper Bound = (${df} × ${sampleVariance.toFixed(4)}) / ${chiSquareLower.toFixed(4)} = ${upperBound.toFixed(4)}</li>
        </ol>
      `;
      
      summary = `
        <div class="summary-card">
          <h4>Point Estimate</h4>
          <div class="value">${sampleVariance.toFixed(4)}</div>
          <div class="subtext">Sample Variance</div>
        </div>
        <div class="summary-card">
          <h4>Standard Deviation</h4>
          <div class="value">${Math.sqrt(sampleVariance).toFixed(4)}</div>
          <div class="subtext">Sample SD</div>
        </div>
        <div class="summary-card">
          <h4>Degrees of Freedom</h4>
          <div class="value">${df}</div>
          <div class="subtext">df = n - 1</div>
        </div>
      `;
      
      return { 
        value: result, 
        text: `Variance CI: [${lowerBound.toFixed(4)}, ${upperBound.toFixed(4)}] at ${(confidenceLevel*100).toFixed(1)}% confidence`, 
        steps,
        summary
      };
    }

    function calculateDataInputCI(confidenceLevel) {
      const dataString = rawData.value;
      const dataArray = dataString.split(/[\s,]+/).filter(val => val.trim() !== '').map(Number);
      
      if (dataArray.length === 0) {
        throw new Error('Please enter valid numerical data');
      }
      
      if (dataArray.some(isNaN)) {
        throw new Error('Please enter only numerical values in the data');
      }
      
      // Calculate statistics from data
      const sampleSize = dataArray.length;
      const sampleMean = dataArray.reduce((sum, val) => sum + val, 0) / sampleSize;
      const sampleVariance = dataArray.reduce((sum, val) => sum + Math.pow(val - sampleMean, 2), 0) / (sampleSize - 1);
      const stdDev = Math.sqrt(sampleVariance);
      
      // Calculate confidence interval for mean
      const df = sampleSize - 1;
      const criticalValue = getCriticalValue(confidenceLevel, df);
      const standardError = stdDev / Math.sqrt(sampleSize);
      const marginOfError = criticalValue * standardError;
      
      const lowerBound = sampleMean - marginOfError;
      const upperBound = sampleMean + marginOfError;
      
      const result = {
        type: 'data-mean',
        pointEstimate: sampleMean,
        lowerBound: lowerBound,
        upperBound: upperBound,
        marginOfError: marginOfError,
        standardError: standardError,
        criticalValue: criticalValue,
        confidenceLevel: confidenceLevel,
        sampleSize: sampleSize,
        sampleData: dataArray,
        sampleStdDev: stdDev,
        sampleVariance: sampleVariance
      };
      
      const steps = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Sample Size (n) = ${sampleSize}</li>
          <li>Sample Mean (x̄) = ${dataArray.join(' + ')} / ${sampleSize} = ${sampleMean.toFixed(4)}</li>
          <li>Sample Standard Deviation (s) = ${stdDev.toFixed(4)}</li>
          <li>Standard Error = ${stdDev.toFixed(4)} / √${sampleSize} = ${standardError.toFixed(4)}</li>
          <li>Critical Value (t, ${confidenceLevel*100}%) = ${criticalValue.toFixed(4)}</li>
          <li>Margin of Error = ${criticalValue.toFixed(4)} × ${standardError.toFixed(4)} = ${marginOfError.toFixed(4)}</li>
          <li>Confidence Interval = ${sampleMean.toFixed(4)} ± ${marginOfError.toFixed(4)}</li>
          <li>Lower Bound = ${sampleMean.toFixed(4)} - ${marginOfError.toFixed(4)} = ${lowerBound.toFixed(4)}</li>
          <li>Upper Bound = ${sampleMean.toFixed(4)} + ${marginOfError.toFixed(4)} = ${upperBound.toFixed(4)}</li>
        </ol>
      `;
      
      summary = `
        <div class="summary-card">
          <h4>Data Points</h4>
          <div class="value">${sampleSize}</div>
          <div class="subtext">Sample Size</div>
        </div>
        <div class="summary-card">
          <h4>Sample Mean</h4>
          <div class="value">${sampleMean.toFixed(4)}</div>
          <div class="subtext">Point Estimate</div>
        </div>
        <div class="summary-card">
          <h4>Sample SD</h4>
          <div class="value">${stdDev.toFixed(4)}</div>
          <div class="subtext">Standard Deviation</div>
        </div>
      `;
      
      return { 
        value: result, 
        text: `Mean CI from Data: [${lowerBound.toFixed(4)}, ${upperBound.toFixed(4)}] at ${(confidenceLevel*100).toFixed(1)}% confidence`, 
        steps,
        summary
      };
    }

    function updateVisualization(result) {
      const { pointEstimate, lowerBound, upperBound } = result;
      
      // Calculate positions for visualization
      const range = upperBound - lowerBound;
      const scaleMin = lowerBound - range * 0.2;
      const scaleMax = upperBound + range * 0.2;
      const totalRange = scaleMax - scaleMin;
      
      // Position interval
      const intervalLeft = ((lowerBound - scaleMin) / totalRange) * 100;
      const intervalWidth = ((upperBound - lowerBound) / totalRange) * 100;
      
      // Position point estimate
      const pointLeft = ((pointEstimate - scaleMin) / totalRange) * 100;
      
      // Update visualization elements
      ciInterval.style.left = `${intervalLeft}%`;
      ciInterval.style.width = `${intervalWidth}%`;
      ciPoint.style.left = `${pointLeft}%`;
      
      // Update labels
      lowerBoundLabel.textContent = lowerBound.toFixed(2);
      pointEstimateLabel.textContent = pointEstimate.toFixed(2);
      upperBoundLabel.textContent = upperBound.toFixed(2);
    }

    function displayResult(result, steps, summary) {
      resultValue.textContent = result.text;
      calculationSteps.innerHTML = result.steps || '';
      summaryCards.innerHTML = result.summary || '';
      resultSection.classList.add('active');
      showAlert('Confidence interval calculated successfully!', 'success');
    }

    function loadExample() {
      const examples = {
        'mean-ci': {
          mean: '75',
          stdDev: '10',
          size: '50'
        },
        'proportion-ci': {
          proportion: '0.55',
          size: '400',
          success: '220'
        },
        'variance-ci': {
          variance: '16',
          size: '25',
          stdDev: '4'
        },
        'data-input': {
          data: '12, 15, 18, 14, 16, 19, 13, 17'
        }
      };
      
      const example = examples[currentCalculatorType];
      
      if (example) {
        if (currentCalculatorType === 'mean-ci') {
          document.getElementById('sample-mean').value = example.mean;
          document.getElementById('std-dev').value = example.stdDev;
          document.getElementById('sample-size-mean').value = example.size;
        } else if (currentCalculatorType === 'proportion-ci') {
          document.getElementById('sample-proportion').value = example.proportion;
          document.getElementById('sample-size-prop').value = example.size;
          document.getElementById('success-count').value = example.success;
        } else if (currentCalculatorType === 'variance-ci') {
          document.getElementById('sample-variance').value = example.variance;
          document.getElementById('sample-size-var').value = example.size;
          document.getElementById('std-dev-var').value = example.stdDev;
        } else if (currentCalculatorType === 'data-input') {
          rawData.value = example.data;
        }
        
        showAlert('Example data loaded! Click Calculate to see results.', 'success');
      }
    }

    function clearAllInputs() {
      // Clear all input fields
      document.querySelectorAll('input').forEach(input => {
        if (input.type !== 'checkbox') {
          input.value = '';
        }
      });
      
      // Clear textarea
      rawData.value = '';
      
      // Reset checkboxes to default
      document.getElementById('pop-sd-known').checked = false;
      
      // Reset dropdowns to default values
      confidenceLevel.value = '0.95';
      customConfidenceGroup.style.display = 'none';
      document.getElementById('display-format').value = 'decimal';
      
      // Hide result section
      resultSection.classList.remove('active');
      
      showAlert('All inputs cleared!', 'success');
    }

    function copyResult() {
      if (!resultSection.classList.contains('active')) {
        showAlert('No result to copy. Please calculate first.', 'error');
        return;
      }
      
      const textToCopy = resultValue.textContent;
      navigator.clipboard.writeText(textToCopy).then(() => {
        showAlert('Result copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy result: ' + err, 'error');
      });
    }

    function showAlert(message, type) {
      // Remove any existing alerts
      const existingAlert = document.querySelector('.alert');
      if (existingAlert) {
        existingAlert.remove();
      }
      
      const alertDiv = document.createElement('div');
      alertDiv.className = `alert alert-${type}`;
      alertDiv.innerHTML = `
        ${message}
        <span class="close">&times;</span>
      `;

      alertContainer.appendChild(alertDiv);

      // Add close functionality
      alertDiv.querySelector('.close').addEventListener('click', function () {
        alertDiv.remove();
      });

      // Auto remove after 5 seconds
      setTimeout(() => {
        if (alertDiv.parentNode) {
          alertDiv.remove();
        }
      }, 5000);
    }
  });
</script>