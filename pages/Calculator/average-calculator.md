---
layout: default
title: "Average Calculator - Calculate Mean, Median, Mode Online"
permalink: /average-calculator-calculate-mean-median-mode-online/
---

<!-- Basic SEO Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Free Online Average Calculator | Mean, Median, Mode & Range Tool</title>

<meta name="description" content="Calculate mean, median, mode, range and more with our free online average calculator tool. Fast, accurate results for students, teachers & data analysis. No login required.">
<meta name="keywords" content="average calculator, online mean calculator, median calculator, mode calculator, range calculator, statistics calculator, math average tool, data analysis calculator, free calculator">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Canonical URL -->
<link rel="canonical" href="https://toolesy.com/average-calculator-calculate-mean-median-mode-online" />

<!-- Open Graph Tags (Facebook / LinkedIn / WhatsApp) -->
<meta property="og:title" content="Free Online Average Calculator | Calculate Mean, Median, Mode & Range">
<meta property="og:description" content="Free online average calculator tool. Perfect for math, statistics & data analysis. Calculate mean, median, mode & range instantly.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://toolesy.com/average-calculator-calculate-mean-median-mode-online">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Instant Average Calculator Online | Mean, Median, Mode Tool">
<meta name="twitter:description" content="Fast & accurate online average calculator for math & data analysis. 100% free — no signup needed.">


<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Average Calculator Styles */
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

  .numbers-input-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
  }

  .numbers-list {
    background: white;
    border-radius: 8px;
    padding: 15px;
    border: 2px solid #e0e6ed;
    min-height: 150px;
    max-height: 300px;
    overflow-y: auto;
  }

  .number-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    margin-bottom: 8px;
    background: #f8f9fa;
    border-radius: 6px;
    border-left: 3px solid var(--primary);
  }

  .number-item:last-child {
    margin-bottom: 0;
  }

  .number-value {
    font-weight: 600;
    color: #2c3e50;
  }

  .remove-number {
    color: #dc3545;
    cursor: pointer;
    font-size: 1.1rem;
    transition: color 0.3s;
  }

  .remove-number:hover {
    color: #c82333;
  }

  .add-number-section {
    display: flex;
    gap: 10px;
    margin: 15px 0;
  }

  .add-number-input {
    flex: 1;
  }

  .add-number-button {
    background: var(--success);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .add-number-button:hover {
    background: #218838;
    transform: translateY(-2px);
  }

  .numbers-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
    margin: 15px 0;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .stat-item {
    text-align: center;
    padding: 10px;
  }

  .stat-value {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary);
  }

  .stat-label {
    font-size: 0.8rem;
    color: #666;
    margin-top: 5px;
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

  /* Average calculator specific styles */
  .average-options {
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

  /* Data visualization */
  .data-visualization {
    margin: 20px 0;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .visualization-title {
    color: var(--primary);
    margin-bottom: 15px;
    font-size: 1.1rem;
  }

  .number-line {
    position: relative;
    height: 60px;
    background: #f8f9fa;
    border-radius: 4px;
    margin: 20px 0;
    border: 1px solid #e0e0e0;
  }

  .number-point {
    position: absolute;
    width: 12px;
    height: 12px;
    background: var(--primary);
    border-radius: 50%;
    transform: translateX(-50%);
    top: 50%;
    margin-top: -6px;
  }

  .number-label {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.8rem;
    color: #666;
  }

  .mean-line {
    position: absolute;
    width: 2px;
    height: 100%;
    background: #e74c3c;
    transform: translateX(-50%);
  }

  .mean-label {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.8rem;
    color: #e74c3c;
    font-weight: bold;
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

    .numbers-input-grid {
      grid-template-columns: 1fr;
    }

    .average-options {
      grid-template-columns: 1fr;
    }

    .summary-cards {
      grid-template-columns: 1fr;
    }

    .add-number-section {
      flex-direction: column;
    }
  }

  /* Calculator type icons */
  .calculator-type i {
    font-size: 1.5rem;
    color: var(--primary);
  }
</style>

<div class="calculator-container">
  <h1>Free Online Average Calculator</h1>
  <p class="welcome-message">Calculate mean, median, mode, range, and other statistical averages instantly. Perfect for students, teachers, researchers, and data analysis.</p>

  <div class="calculator-section">
    <h2>Average Calculator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Numbers Count: </span>
        <span id="numbersCount">0</span>
      </div>
      <div class="counter-item">
        <span>Data Sum: </span>
        <span id="dataSum">0</span>
      </div>
      <div class="counter-item">
        <span>Smallest Value: </span>
        <span id="minValue">-</span>
      </div>
      <div class="counter-item">
        <span>Largest Value: </span>
        <span id="maxValue">-</span>
      </div>
    </div>

    <div class="calculator-types">
      <div class="calculator-type active" data-type="basic-average">
        <h3><i class="fas fa-calculator"></i> Basic Average</h3>
        <p>Calculate mean, median, mode and range</p>
      </div>
      <div class="calculator-type" data-type="weighted-average">
        <h3><i class="fas fa-balance-scale"></i> Weighted Average</h3>
        <p>Calculate average with different weights</p>
      </div>
      <div class="calculator-type" data-type="geometric-average">
        <h3><i class="fas fa-chart-line"></i> Geometric Mean</h3>
        <p>Calculate geometric mean for growth rates</p>
      </div>
      <div class="calculator-type" data-type="grade-average">
        <h3><i class="fas fa-graduation-cap"></i> Grade Average</h3>
        <p>Calculate GPA and grade averages</p>
      </div>
    </div>

    <div class="input-section">
      <!-- Basic Average Calculator -->
      <div id="basic-average-inputs" class="calculator-inputs">
        <div class="input-group">
          <label for="numbers-input">Enter Numbers (comma or space separated)</label>
          <textarea id="numbers-input" rows="3" placeholder="e.g., 85, 92, 78, 90, 88 or 85 92 78 90 88">85, 92, 78, 90, 88</textarea>
        </div>
        
        <div class="add-number-section">
          <input type="number" id="single-number-input" class="add-number-input" placeholder="Or add numbers one by one">
          <button class="add-number-button" id="add-number-btn">
            <i class="fas fa-plus"></i> Add Number
          </button>
        </div>

        <div class="numbers-stats">
          <div class="stat-item">
            <div class="stat-value" id="count-display">5</div>
            <div class="stat-label">Numbers</div>
          </div>
          <div class="stat-item">
            <div class="stat-value" id="sum-display">433</div>
            <div class="stat-label">Sum</div>
          </div>
          <div class="stat-item">
            <div class="stat-value" id="min-display">78</div>
            <div class="stat-label">Min</div>
          </div>
          <div class="stat-item">
            <div class="stat-value" id="max-display">92</div>
            <div class="stat-label">Max</div>
          </div>
        </div>

        <div class="numbers-list" id="numbers-list">
          <div class="number-item">
            <span class="number-value">85</span>
            <i class="fas fa-times remove-number"></i>
          </div>
          <div class="number-item">
            <span class="number-value">92</span>
            <i class="fas fa-times remove-number"></i>
          </div>
          <div class="number-item">
            <span class="number-value">78</span>
            <i class="fas fa-times remove-number"></i>
          </div>
          <div class="number-item">
            <span class="number-value">90</span>
            <i class="fas fa-times remove-number"></i>
          </div>
          <div class="number-item">
            <span class="number-value">88</span>
            <i class="fas fa-times remove-number"></i>
          </div>
        </div>

        <div class="formula-display">
          Mean = Sum of all numbers ÷ Count of numbers | Median = Middle value when sorted | Mode = Most frequent value
        </div>
      </div>

      <!-- Weighted Average Calculator -->
      <div id="weighted-average-inputs" class="calculator-inputs" style="display: none;">
        <div class="input-group">
          <label>Weighted Average Data</label>
          <div class="numbers-list" id="weighted-numbers-list">
            <div class="number-item">
              <span>Value: 85, Weight: 3</span>
              <i class="fas fa-times remove-number"></i>
            </div>
            <div class="number-item">
              <span>Value: 92, Weight: 2</span>
              <i class="fas fa-times remove-number"></i>
            </div>
            <div class="number-item">
              <span>Value: 78, Weight: 1</span>
              <i class="fas fa-times remove-number"></i>
            </div>
          </div>
        </div>

        <div class="add-number-section">
          <input type="number" id="weighted-value-input" placeholder="Value" style="flex: 1;">
          <input type="number" id="weight-input" placeholder="Weight" style="flex: 1;">
          <button class="add-number-button" id="add-weighted-btn">
            <i class="fas fa-plus"></i> Add
          </button>
        </div>

        <div class="formula-display">
          Weighted Average = (Value₁ × Weight₁ + Value₂ × Weight₂ + ...) ÷ (Weight₁ + Weight₂ + ...)
        </div>
      </div>

      <!-- Geometric Mean Calculator -->
      <div id="geometric-average-inputs" class="calculator-inputs" style="display: none;">
        <div class="input-group">
          <label for="geometric-numbers-input">Enter Numbers (for growth rates, percentages, ratios)</label>
          <textarea id="geometric-numbers-input" rows="3" placeholder="e.g., 1.05, 1.08, 0.95, 1.12 (representing 5%, 8%, -5%, 12% growth)">1.05, 1.08, 0.95, 1.12</textarea>
        </div>

        <div class="add-number-section">
          <input type="number" id="geometric-number-input" class="add-number-input" placeholder="Add number (e.g., 1.05 for 5% growth)" step="0.01">
          <button class="add-number-button" id="add-geometric-btn">
            <i class="fas fa-plus"></i> Add Number
          </button>
        </div>

        <div class="numbers-list" id="geometric-numbers-list">
          <div class="number-item">
            <span class="number-value">1.05</span>
            <i class="fas fa-times remove-number"></i>
          </div>
          <div class="number-item">
            <span class="number-value">1.08</span>
            <i class="fas fa-times remove-number"></i>
          </div>
          <div class="number-item">
            <span class="number-value">0.95</span>
            <i class="fas fa-times remove-number"></i>
          </div>
          <div class="number-item">
            <span class="number-value">1.12</span>
            <i class="fas fa-times remove-number"></i>
          </div>
        </div>

        <div class="formula-display">
          Geometric Mean = ⁿ√(Value₁ × Value₂ × ... × Valueₙ) | For growth rates, use: ⁿ√(Product of all growth factors)
        </div>
      </div>

      <!-- Grade Average Calculator -->
      <div id="grade-average-inputs" class="calculator-inputs" style="display: none;">
        <div class="input-group">
          <label>Grade Data</label>
          <div class="numbers-list" id="grade-numbers-list">
            <div class="number-item">
              <span>Math: 85 (Credit: 3)</span>
              <i class="fas fa-times remove-number"></i>
            </div>
            <div class="number-item">
              <span>Science: 92 (Credit: 4)</span>
              <i class="fas fa-times remove-number"></i>
            </div>
            <div class="number-item">
              <span>History: 78 (Credit: 3)</span>
              <i class="fas fa-times remove-number"></i>
            </div>
          </div>
        </div>

        <div class="add-number-section">
          <input type="text" id="subject-input" placeholder="Subject" style="flex: 1;">
          <input type="number" id="grade-input" placeholder="Grade" style="flex: 1;">
          <input type="number" id="credit-input" placeholder="Credits" style="flex: 1;">
          <button class="add-number-button" id="add-grade-btn">
            <i class="fas fa-plus"></i> Add
          </button>
        </div>

        <div class="formula-display">
          GPA = Sum of (Grade × Credits) ÷ Total Credits | Grade Average = Sum of Grades ÷ Number of Grades
        </div>
      </div>
    </div>

    <div class="average-options">
      <div class="option-group">
        <label class="option-label">Decimal Places</label>
        <select id="decimal-places" class="option-select">
          <option value="0">0 decimals</option>
          <option value="1">1 decimal</option>
          <option value="2" selected>2 decimals</option>
          <option value="3">3 decimals</option>
          <option value="4">4 decimals</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Output Format</label>
        <select id="output-format" class="option-select">
          <option value="decimal">Decimal</option>
          <option value="fraction">Fraction</option>
          <option value="percentage">Percentage</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="show-steps" checked>
          <label for="show-steps">Show calculation steps</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="sort-data" checked>
          <label for="sort-data">Sort data automatically</label>
        </div>
      </div>
    </div>

    <div class="button-section">
      <button class="calc-button" id="calculate-button">Calculate Average</button>
      <button class="calc-button success" id="clear-numbers-button">Clear Numbers</button>
      <button class="calc-button secondary" id="generate-sample-button">Generate Sample</button>
      <button class="calc-button warning" id="copy-results-button">Copy Results</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="result-section" id="result-section">
      <h3 class="result-title">Calculation Results</h3>
      <div class="result-value" id="result-value">Mean: 86.60</div>
      
      <div class="summary-cards" id="summary-cards">
        <div class="summary-card">
          <h4>Mean</h4>
          <div class="value">86.60</div>
          <div class="subtext">Arithmetic Average</div>
        </div>
        <div class="summary-card">
          <h4>Median</h4>
          <div class="value">88.00</div>
          <div class="subtext">Middle Value</div>
        </div>
        <div class="summary-card">
          <h4>Mode</h4>
          <div class="value">-</div>
          <div class="subtext">Most Frequent</div>
        </div>
        <div class="summary-card">
          <h4>Range</h4>
          <div class="value">14.00</div>
          <div class="subtext">Max - Min</div>
        </div>
      </div>

      <div class="data-visualization">
        <div class="visualization-title">Data Distribution</div>
        <div class="number-line" id="number-line">
          <!-- Number points will be dynamically inserted here -->
        </div>
      </div>
      
      <div class="calculation-steps" id="calculation-steps">
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Data: 78, 85, 88, 90, 92 (sorted)</li>
          <li>Count: 5 numbers</li>
          <li>Sum: 78 + 85 + 88 + 90 + 92 = 433</li>
          <li>Mean: 433 ÷ 5 = 86.60</li>
          <li>Median: Middle value = 88 (3rd position)</li>
          <li>Range: 92 - 78 = 14</li>
          <li>Mode: No repeated values</li>
        </ol>
      </div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <div class="example-item">
        <div class="example-question">What is the average of test scores: 85, 92, 78, 90, 88?</div>
        <div class="example-answer">Mean: 86.6, Median: 88, Mode: None, Range: 14</div>
      </div>

      <div class="example-item">
        <div class="example-question">Calculate weighted average: Exam (weight 3) = 85%, Homework (weight 1) = 95%, Quiz (weight 2) = 80%</div>
        <div class="example-answer">Weighted Average: (85×3 + 95×1 + 80×2) ÷ (3+1+2) = 85%</div>
      </div>

      <div class="example-item">
        <div class="example-question">Find geometric mean of growth rates: 5%, 8%, -5%, 12%</div>
        <div class="example-answer">Convert to factors: 1.05, 1.08, 0.95, 1.12 | Geometric Mean: 4.74% average growth</div>
      </div>

      <div class="example-item">
        <div class="example-question">Calculate GPA: Math (3 credits) = 3.5, Science (4 credits) = 4.0, History (3 credits) = 3.0</div>
        <div class="example-answer">GPA: (3.5×3 + 4.0×4 + 3.0×3) ÷ (3+4+3) = 3.55</div>
      </div>
    </div>
  </div>

<!-- SEO Content Section -->
<div class="content-placeholder">
    <h2>Free Online Age Calculator – Find Your Exact Age in Seconds</h2>

    <p>Have you ever wondered exactly how old you are—not just in years, but in months, weeks, days, or even hours? While most of us know our age in years, there are many situations where a more precise calculation becomes useful. Whether you're filling out official paperwork, tracking a child's development, planning a milestone birthday, or simply satisfying your curiosity, our free <strong>Age Calculator</strong> makes the process quick and effortless.</p>

    <p>Instead of manually counting years and months or trying to work everything out on a calendar, you can enter your date of birth and instantly receive a detailed breakdown of your age. The tool calculates your age accurately using the current date or any custom date you choose. Within seconds, you'll know exactly how many years, months, weeks, and days you've been alive.</p>

    <p>What makes this calculator especially useful is its simplicity. There are no complicated settings, no registration requirements, and no software downloads. Everything runs directly inside your browser, making it both fast and secure. Your information stays on your device, and no personal data is stored or shared.</p>

    <p>Whether you're a parent, teacher, researcher, HR professional, student, or simply someone who enjoys learning interesting facts about themselves, this age calculator provides reliable results whenever you need them.</p>

    <h3>How to Use This Age Calculator (Step-by-Step):</h3>

    <p>Using the calculator is straightforward, even if you've never used an online age tool before. Follow these simple steps to get accurate results.</p>

    <ul>
        <li><strong>Enter Your Birth Date:</strong> Select your date of birth using the calendar picker or manually type the date in the provided field. Make sure the date is entered correctly for the most accurate calculation.</li>

        <li><strong>Choose a Calculation Date (Optional):</strong> By default, the calculator uses today's date. However, if you want to know your age on a specific day in the past or future, simply enter that date as the reference point.</li>

        <li><strong>Click the Calculate Button:</strong> Once your information is entered, press the "Calculate Age" button. The system will instantly process the dates and display your exact age.</li>

        <li><strong>Review Detailed Results:</strong> You'll receive a complete age breakdown, including years, months, weeks, days, hours, minutes, and seconds.</li>

        <li><strong>Explore Additional Features:</strong> Use extra functions such as age difference calculations, birthday countdowns, and zodiac sign information for even more insights.</li>
    </ul>

    <h3>Why People Use an Age Calculator</h3>

    <p>At first glance, calculating age may seem simple. Most people can subtract their birth year from the current year. However, that method often produces inaccurate results because it ignores months, days, leap years, and other important factors.</p>

    <p>For example, if someone was born in December and today's date is in June, subtracting years alone would overstate their age by nearly six months. This is why precise calculations matter, especially when age requirements are involved.</p>

    <p>Many organizations, institutions, and government agencies require exact age calculations rather than rough estimates. In these situations, accuracy is essential. Our calculator removes the guesswork and provides dependable results instantly.</p>

    <h3>Real-Life Example</h3>

    <p>Imagine you're organizing a surprise birthday celebration for a close friend. You know their birth date, but you want to determine exactly how many days remain before their next birthday. Instead of opening multiple calendar apps and manually counting dates, you simply enter their birth information into the calculator.</p>

    <p>Within seconds, you'll know the exact number of days left until the big day. This makes it easier to schedule invitations, order decorations, arrange gifts, and coordinate celebrations without worrying about timing mistakes.</p>

    <p>The same convenience applies to anniversaries, retirement parties, graduation milestones, and many other important life events.</p>

    <h3>Benefits of Using Our Age Calculator</h3>

    <p>There are many age calculators available online, but not all of them provide the same level of detail, accuracy, and convenience. Our tool is designed to offer a better experience while keeping things simple.</p>

    <ul>
        <li><strong>Fast Results:</strong> Get detailed age calculations instantly without performing any manual calculations.</li>

        <li><strong>Easy to Use:</strong> A clean and beginner-friendly interface makes the tool accessible to everyone.</li>

        <li><strong>Highly Accurate:</strong> Automatically accounts for leap years, month lengths, and calendar variations.</li>

        <li><strong>No Registration Required:</strong> Use the calculator whenever you need it without creating an account.</li>

        <li><strong>Mobile Friendly:</strong> Works smoothly on smartphones, tablets, laptops, and desktop computers.</li>

        <li><strong>Completely Free:</strong> Enjoy unlimited calculations without subscriptions or hidden charges.</li>

        <li><strong>Privacy Focused:</strong> Your personal dates remain private because calculations occur directly in your browser.</li>
    </ul>

    <h3>Who Can Benefit from This Tool?</h3>

    <p>Age calculations are useful in more situations than most people realize. Individuals from many different professions and backgrounds rely on accurate age information every day.</p>

    <ul>
        <li><strong>Parents:</strong> Monitor children's growth milestones and track developmental progress during infancy and early childhood.</li>

        <li><strong>Teachers:</strong> Verify student age requirements for programs, competitions, and educational activities.</li>

        <li><strong>Human Resource Professionals:</strong> Confirm eligibility for employment benefits, retirement plans, and workplace policies.</li>

        <li><strong>Healthcare Providers:</strong> Determine age-specific medical recommendations and treatment guidelines.</li>

        <li><strong>Researchers:</strong> Analyze age-related demographic information for studies and surveys.</li>

        <li><strong>Event Organizers:</strong> Plan birthdays, anniversaries, and special celebrations with accurate age information.</li>

        <li><strong>Students:</strong> Use age calculations for educational projects, assignments, and historical research.</li>

        <li><strong>Genealogy Enthusiasts:</strong> Calculate the ages of family members and ancestors while building family trees.</li>
    </ul>

    <h3>Understanding Your Age Breakdown</h3>

    <p>Most people think about age in years, but your age can be expressed in many different ways. A detailed breakdown provides interesting insights into the amount of time you've experienced throughout your life.</p>

    <p>For example, someone who is 25 years old has also lived approximately 300 months, over 1,300 weeks, and more than 9,000 days. Looking at age from different perspectives can be both informative and fascinating.</p>

    <p>Our calculator automatically converts your lifespan into multiple time units, giving you a complete picture of your age rather than a simple number.</p>

    <h3>Frequently Asked Questions</h3>

    <p><strong>How accurate is this age calculator?</strong><br>
    Accuracy is one of the most important features of any age calculation tool. Our calculator uses standard calendar calculations and automatically considers leap years, varying month lengths, and date differences. This ensures that the results are as precise as possible. Whether you are calculating an age that spans a few months or several decades, the tool provides dependable results that you can trust.</p>

    <p><strong>Can I calculate my age on a future date?</strong><br>
    Yes. In addition to calculating your current age, the tool allows you to select any future date. This can be useful if you want to know how old you will be on a specific birthday, anniversary, graduation date, retirement date, or other important milestone.</p>

    <p><strong>Can I calculate age for past dates?</strong><br>
    Absolutely. You can enter any date in the past to determine how old someone was at a particular moment in history. This feature is especially useful for researchers, genealogists, historians, and anyone working with historical records.</p>

    <p><strong>What is an age difference calculator?</strong><br>
    An age difference calculator compares two birth dates and determines the exact gap between them. It can show the difference in years, months, and days. Many people use this feature to compare ages between siblings, friends, partners, colleagues, or historical figures.</p>

    <p><strong>Does the calculator work on mobile devices?</strong><br>
    Yes. The calculator is fully responsive and designed to work smoothly on smartphones, tablets, laptops, and desktop computers. You can calculate ages from virtually any device with a modern web browser.</p>

    <p><strong>Do I need to install any software?</strong><br>
    No installation is required. Everything runs directly in your browser. Simply open the page, enter the required dates, and get your results instantly.</p>

    <p><strong>Is there a limit to how many calculations I can perform?</strong><br>
    No. You can use the tool as many times as you like. Whether you need one calculation or hundreds, there are no restrictions or usage limits.</p>

    <p><strong>Will my birth date be stored anywhere?</strong><br>
    No. Privacy is a priority. All calculations take place locally within your browser. Your birth date and other entered information are not transmitted to external servers for processing.</p>

    <h3>Interesting Facts About Age and Time</h3>

    <p>Age is one of the most fundamental ways we measure life. Yet many people rarely think about what their age represents beyond birthdays. When broken down into smaller units, age becomes surprisingly fascinating.</p>

    <p>For example, a person who is 30 years old has lived for more than 10,000 days. They have experienced thousands of sunrises and sunsets, celebrated dozens of holidays, and witnessed countless personal milestones. Looking at age in terms of days, weeks, or hours provides a completely different perspective on the passage of time.</p>

    <p>Many people are surprised to discover how many weeks or days they have been alive. Others enjoy calculating milestone achievements such as reaching 5,000 days, 10,000 days, or even 20,000 days of life.</p>

    <p>Our calculator makes these discoveries simple by automatically converting age into multiple units, allowing you to explore your personal timeline in greater detail.</p>

    <h3>Common Situations Where Exact Age Matters</h3>

    <p>While approximate age is sufficient for casual conversations, there are many situations where exact age calculations are important.</p>

    <ul>
        <li><strong>School Admissions:</strong> Educational institutions often have strict age requirements for enrollment and eligibility.</li>

        <li><strong>Sports Competitions:</strong> Youth sports leagues frequently use age categories that require precise verification.</li>

        <li><strong>Government Documentation:</strong> Official applications may require exact age information.</li>

        <li><strong>Retirement Planning:</strong> Eligibility for retirement programs often depends on reaching a specific age.</li>

        <li><strong>Insurance Policies:</strong> Premium calculations and policy eligibility can vary based on exact age.</li>

        <li><strong>Medical Assessments:</strong> Certain treatments, screenings, and recommendations depend on age-specific guidelines.</li>

        <li><strong>Employment Requirements:</strong> Some jobs have minimum or maximum age criteria.</li>

        <li><strong>Legal Compliance:</strong> Many regulations involve age thresholds that must be verified accurately.</li>
    </ul>

    <h3>Calculating Age for Children and Infants</h3>

    <p>For parents, age calculations often require more detail than simply counting years. During infancy and early childhood, development is typically measured in months, weeks, and sometimes even days.</p>

    <p>A pediatrician may ask for a child's age in months rather than years because developmental milestones occur rapidly during the first stages of life. Knowing the precise age helps parents and healthcare providers track growth patterns more accurately.</p>

    <p>Our calculator makes this process easy by automatically displaying age in multiple formats, eliminating the need for manual conversions.</p>

    <h3>How Leap Years Affect Age Calculations</h3>

    <p>Leap years can complicate age calculations if they are not handled correctly. Every four years, an additional day is added to the calendar in February. Over the course of several decades, these extra days can significantly affect precise calculations.</p>

    <p>People born on February 29 have unique birthdays that occur only during leap years. Even for individuals born on other dates, leap years influence the total number of days they have lived.</p>

    <p>Our calculator automatically accounts for leap years, ensuring that all results remain accurate regardless of birth date or calculation period.</p>

    <h3>Planning Future Milestones</h3>

    <p>Many people use age calculators to look ahead rather than backward. Whether you're planning retirement, celebrating a major birthday, or setting long-term goals, knowing your future age can be helpful.</p>

    <p>For example, you might want to know exactly how old you'll be when your child graduates, when a mortgage is paid off, or when you reach a specific personal milestone. By selecting a future date, you can instantly see your projected age and plan accordingly.</p>

    <p>This feature is especially useful for financial planning, career development, and personal goal setting.</p>

    <h3>Why Choose Our Age Calculator?</h3>

    <p>There are countless age calculators available online, but many offer only basic functionality. Some simply subtract years without considering calendar details, while others require registration or collect unnecessary personal information.</p>

    <p>Our calculator is designed differently. It focuses on accuracy, convenience, privacy, and ease of use. Whether you're performing a quick calculation or conducting detailed age analysis, the tool provides comprehensive information without unnecessary complexity.</p>

    <p>Because all calculations occur directly within your browser, you remain in complete control of your data. There is no need to worry about sensitive personal information being stored or shared.</p>

    <p>The interface is intentionally simple so that anyone can use it regardless of technical experience. From students and parents to professionals and researchers, the calculator is accessible to everyone.</p>

    <h3>Additional Features You May Find Useful</h3>

    <p>Beyond basic age calculations, the tool includes several helpful features designed to answer common questions about dates and birthdays.</p>

    <ul>
        <li><strong>Birthday Countdown:</strong> Find out exactly how many days remain until your next birthday.</li>

        <li><strong>Age Difference Calculation:</strong> Compare two dates and determine the precise difference between them.</li>

        <li><strong>Custom Date Analysis:</strong> Calculate age on any selected date in the past or future.</li>

        <li><strong>Detailed Time Breakdown:</strong> View age in years, months, weeks, days, hours, minutes, and seconds.</li>

        <li><strong>Zodiac Information:</strong> Discover your zodiac sign based on your birth date.</li>

        <li><strong>Instant Results:</strong> Receive calculations immediately without delays.</li>
    </ul>

    <h3>Educational Value of Age Calculations</h3>

    <p>Age calculations are not only practical but also educational. Teachers often use date-based calculations to help students understand concepts such as calendars, leap years, time measurement, and mathematical reasoning.</p>

    <p>Students can explore how different calendar systems work and learn how dates interact over long periods. Historical projects frequently require determining the ages of important figures at significant moments in history.</p>

    <p>By providing instant and accurate calculations, the tool helps learners focus on understanding concepts rather than spending excessive time on manual arithmetic.</p>

    <h3>Genealogy and Family History Research</h3>

    <p>Family historians and genealogy enthusiasts often work with large collections of birth, marriage, and death records. Determining exact ages can reveal valuable insights into family timelines and relationships.</p>

    <p>An age calculator can simplify this research by instantly calculating ages at important life events. This helps researchers verify records, identify possible matches, and build more accurate family trees.</p>

    <p>Even small details can become important when tracing family history across multiple generations.</p>

    <h3>The Importance of Privacy</h3>

    <p>Many online services request personal information unnecessarily. When working with birth dates and personal details, privacy becomes especially important.</p>

    <p>Our age calculator is built with privacy in mind. The calculations happen directly on your device using your browser's processing capabilities. Your information remains under your control and is not stored for analysis or marketing purposes.</p>

    <p>This approach provides both convenience and peace of mind, allowing you to use the tool confidently whenever you need it.</p>

    <h3>Understanding Calendar Complexity</h3>

    <p>Calculating age accurately is more complicated than many people realize. Different months contain different numbers of days, leap years add extra days to the calendar, and date transitions can create unexpected calculation challenges.</p>

    <p>Professional-grade age calculations must account for all of these factors. Fortunately, modern algorithms can process these complexities instantly, delivering accurate results without requiring users to perform any manual calculations.</p>

    <p>Our calculator handles these details automatically so you can focus on the information you need rather than the mathematics behind it.</p>

    <h3>Final Thoughts</h3>

    <p>Whether you're checking your exact age, counting down to your next birthday, comparing ages between two people, or planning for future milestones, an accurate age calculator can save time and eliminate confusion.</p>

    <p>Our free online Age Calculator combines precision, speed, privacy, and ease of use in a single convenient tool. With support for detailed age breakdowns, birthday calculations, age comparisons, and custom date analysis, it serves a wide variety of personal, educational, professional, and research needs.</p>

    <p>Best of all, it's completely free and available whenever you need it. Simply enter your dates, click calculate, and receive accurate results in seconds. Whether you're curious about how many days you've been alive or need precise age information for an important task, this tool is ready to help.</p>

    <p>Try it today and discover just how much information can be hidden within a simple birth date.</p>
</div>
</div>



<script>
  document.addEventListener('DOMContentLoaded', function () {
    const calculatorTypes = document.querySelectorAll('.calculator-type');
    const calculatorInputs = document.querySelectorAll('.calculator-inputs');
    const calculateButton = document.getElementById('calculate-button');
    const clearNumbersButton = document.getElementById('clear-numbers-button');
    const generateSampleButton = document.getElementById('generate-sample-button');
    const copyResultsButton = document.getElementById('copy-results-button');
    const resultSection = document.getElementById('result-section');
    const resultValue = document.getElementById('result-value');
    const summaryCards = document.getElementById('summary-cards');
    const calculationSteps = document.getElementById('calculation-steps');
    const numberLine = document.getElementById('number-line');
    const alertContainer = document.getElementById('alertContainer');
    
    // Number management elements
    const numbersInput = document.getElementById('numbers-input');
    const singleNumberInput = document.getElementById('single-number-input');
    const addNumberBtn = document.getElementById('add-number-btn');
    const numbersList = document.getElementById('numbers-list');
    
    // Counter elements
    const numbersCountEl = document.getElementById('numbersCount');
    const dataSumEl = document.getElementById('dataSum');
    const minValueEl = document.getElementById('minValue');
    const maxValueEl = document.getElementById('maxValue');
    
    // Display elements
    const countDisplay = document.getElementById('count-display');
    const sumDisplay = document.getElementById('sum-display');
    const minDisplay = document.getElementById('min-display');
    const maxDisplay = document.getElementById('max-display');

    let currentCalculatorType = 'basic-average';
    let numbers = [85, 92, 78, 90, 88];
    let weightedData = [
      { value: 85, weight: 3 },
      { value: 92, weight: 2 },
      { value: 78, weight: 1 }
    ];
    let geometricNumbers = [1.05, 1.08, 0.95, 1.12];
    let gradeData = [
      { subject: 'Math', grade: 85, credit: 3 },
      { subject: 'Science', grade: 92, credit: 4 },
      { subject: 'History', grade: 78, credit: 3 }
    ];

    // Initialize the calculator
    updateNumberList();
    updateCounters();

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

    // Add number from single input
    addNumberBtn.addEventListener('click', function () {
      addSingleNumber();
    });

    // Add number on Enter key in single number input
    singleNumberInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        addSingleNumber();
      }
    });

    // Parse numbers from text area when it changes
    numbersInput.addEventListener('input', function () {
      parseNumbersFromText();
    });

    // Remove number from list
    numbersList.addEventListener('click', function (e) {
      if (e.target.classList.contains('remove-number')) {
        const numberItem = e.target.closest('.number-item');
        const index = Array.from(numbersList.children).indexOf(numberItem);
        if (index !== -1) {
          numbers.splice(index, 1);
          updateNumberList();
          updateCounters();
        }
      }
    });

    // Calculate button event listener
    calculateButton.addEventListener('click', function () {
      calculateAverage();
    });

    // Clear numbers button event listener
    clearNumbersButton.addEventListener('click', function () {
      clearNumbers();
    });

    // Generate sample button event listener
    generateSampleButton.addEventListener('click', function () {
      generateSampleData();
    });

    // Copy results button event listener
    copyResultsButton.addEventListener('click', function () {
      copyResults();
    });

    function parseNumbersFromText() {
      const text = numbersInput.value;
      // Parse numbers separated by commas, spaces, or newlines
      const parsedNumbers = text.split(/[\s,]+/).filter(val => val.trim() !== '').map(val => parseFloat(val));
      
      // Filter out NaN values
      numbers = parsedNumbers.filter(num => !isNaN(num));
      updateNumberList();
      updateCounters();
    }

    function addSingleNumber() {
      const value = parseFloat(singleNumberInput.value);
      if (!isNaN(value)) {
        numbers.push(value);
        updateNumberList();
        updateCounters();
        singleNumberInput.value = '';
        showAlert(`Number ${value} added successfully!`, 'success');
      } else {
        showAlert('Please enter a valid number.', 'error');
      }
    }

    function updateNumberList() {
      numbersList.innerHTML = '';
      
      // Sort numbers if option is checked
      const sortData = document.getElementById('sort-data').checked;
      const displayNumbers = sortData ? [...numbers].sort((a, b) => a - b) : numbers;
      
      displayNumbers.forEach(num => {
        const numberItem = document.createElement('div');
        numberItem.className = 'number-item';
        numberItem.innerHTML = `
          <span class="number-value">${num}</span>
          <i class="fas fa-times remove-number"></i>
        `;
        numbersList.appendChild(numberItem);
      });
      
      // Update numbers input text area
      numbersInput.value = numbers.join(', ');
    }

    function updateCounters() {
      const count = numbers.length;
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      const min = count > 0 ? Math.min(...numbers) : null;
      const max = count > 0 ? Math.max(...numbers) : null;
      
      numbersCountEl.textContent = count;
      dataSumEl.textContent = sum.toFixed(2);
      minValueEl.textContent = min !== null ? min.toFixed(2) : '-';
      maxValueEl.textContent = max !== null ? max.toFixed(2) : '-';
      
      // Update display stats
      countDisplay.textContent = count;
      sumDisplay.textContent = sum.toFixed(2);
      minDisplay.textContent = min !== null ? min.toFixed(2) : '-';
      maxDisplay.textContent = max !== null ? max.toFixed(2) : '-';
    }

    function calculateAverage() {
      let result, steps, summary;
      
      try {
        switch (currentCalculatorType) {
          case 'basic-average':
            result = calculateBasicAverage();
            break;
          case 'weighted-average':
            result = calculateWeightedAverage();
            break;
          case 'geometric-average':
            result = calculateGeometricAverage();
            break;
          case 'grade-average':
            result = calculateGradeAverage();
            break;
          default:
            throw new Error('Unknown calculator type');
        }
        
        if (result) {
          displayResult(result, steps, summary);
        }
      } catch (error) {
        showAlert(error.message, 'error');
      }
    }

    function calculateBasicAverage() {
      if (numbers.length < 1) {
        throw new Error('Please enter at least one number');
      }
      
      const sortedNumbers = [...numbers].sort((a, b) => a - b);
      const count = numbers.length;
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      const mean = sum / count;
      
      // Calculate median
      let median;
      if (count % 2 === 0) {
        median = (sortedNumbers[count/2 - 1] + sortedNumbers[count/2]) / 2;
      } else {
        median = sortedNumbers[Math.floor(count/2)];
      }
      
      // Calculate mode
      const frequency = {};
      numbers.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
      });
      
      let maxFrequency = 0;
      let modes = [];
      for (const num in frequency) {
        if (frequency[num] > maxFrequency) {
          maxFrequency = frequency[num];
          modes = [parseFloat(num)];
        } else if (frequency[num] === maxFrequency) {
          modes.push(parseFloat(num));
        }
      }
      
      const mode = maxFrequency > 1 ? modes : null;
      const range = Math.max(...numbers) - Math.min(...numbers);
      
      const decimalPlaces = parseInt(document.getElementById('decimal-places').value);
      
      const result = {
        mean: mean,
        median: median,
        mode: mode,
        range: range,
        count: count,
        sum: sum,
        min: Math.min(...numbers),
        max: Math.max(...numbers),
        sortedNumbers: sortedNumbers
      };
      
      let stepsHtml = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Data: ${sortedNumbers.join(', ')} ${sortedNumbers.length !== numbers.length ? '(sorted)' : ''}</li>
          <li>Count: ${count} numbers</li>
          <li>Sum: ${numbers.join(' + ')} = ${sum.toFixed(decimalPlaces)}</li>
          <li>Mean: ${sum.toFixed(decimalPlaces)} ÷ ${count} = ${mean.toFixed(decimalPlaces)}</li>
          <li>Median: ${count % 2 === 0 ? 
            `(${sortedNumbers[count/2 - 1]} + ${sortedNumbers[count/2]}) ÷ 2 = ${median.toFixed(decimalPlaces)}` : 
            `Middle value = ${median.toFixed(decimalPlaces)} (position ${Math.floor(count/2) + 1})`}</li>
          <li>Range: ${Math.max(...numbers).toFixed(decimalPlaces)} - ${Math.min(...numbers).toFixed(decimalPlaces)} = ${range.toFixed(decimalPlaces)}</li>
          <li>Mode: ${mode ? `Most frequent value(s): ${mode.join(', ')} (appears ${maxFrequency} time${maxFrequency > 1 ? 's' : ''})` : 'No repeated values'}</li>
        </ol>
      `;
      
      summary = `
        <div class="summary-card">
          <h4>Mean</h4>
          <div class="value">${mean.toFixed(decimalPlaces)}</div>
          <div class="subtext">Arithmetic Average</div>
        </div>
        <div class="summary-card">
          <h4>Median</h4>
          <div class="value">${median.toFixed(decimalPlaces)}</div>
          <div class="subtext">Middle Value</div>
        </div>
        <div class="summary-card">
          <h4>Mode</h4>
          <div class="value">${mode ? mode.join(', ') : '-'}</div>
          <div class="subtext">Most Frequent</div>
        </div>
        <div class="summary-card">
          <h4>Range</h4>
          <div class="value">${range.toFixed(decimalPlaces)}</div>
          <div class="subtext">Max - Min</div>
        </div>
      `;
      
      createNumberLineVisualization(sortedNumbers, mean);
      
      return { 
        value: result, 
        text: `Mean: ${mean.toFixed(decimalPlaces)} | Median: ${median.toFixed(decimalPlaces)} | Mode: ${mode ? mode.join(', ') : 'None'} | Range: ${range.toFixed(decimalPlaces)}`, 
        steps: stepsHtml,
        summary
      };
    }

    function calculateWeightedAverage() {
      if (weightedData.length < 1) {
        throw new Error('Please enter at least one value with weight');
      }
      
      let weightedSum = 0;
      let totalWeight = 0;
      
      weightedData.forEach(item => {
        weightedSum += item.value * item.weight;
        totalWeight += item.weight;
      });
      
      const weightedAverage = weightedSum / totalWeight;
      const decimalPlaces = parseInt(document.getElementById('decimal-places').value);
      
      const result = {
        weightedAverage: weightedAverage,
        weightedSum: weightedSum,
        totalWeight: totalWeight,
        data: weightedData
      };
      
      let stepsHtml = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Weighted Sum: ${weightedData.map(item => `(${item.value} × ${item.weight})`).join(' + ')} = ${weightedSum.toFixed(decimalPlaces)}</li>
          <li>Total Weight: ${weightedData.map(item => item.weight).join(' + ')} = ${totalWeight}</li>
          <li>Weighted Average: ${weightedSum.toFixed(decimalPlaces)} ÷ ${totalWeight} = ${weightedAverage.toFixed(decimalPlaces)}</li>
        </ol>
      `;
      
      summary = `
        <div class="summary-card">
          <h4>Weighted Average</h4>
          <div class="value">${weightedAverage.toFixed(decimalPlaces)}</div>
          <div class="subtext">Overall Average</div>
        </div>
        <div class="summary-card">
          <h4>Weighted Sum</h4>
          <div class="value">${weightedSum.toFixed(decimalPlaces)}</div>
          <div class="subtext">Sum of (Value × Weight)</div>
        </div>
        <div class="summary-card">
          <h4>Total Weight</h4>
          <div class="value">${totalWeight}</div>
          <div class="subtext">Sum of Weights</div>
        </div>
        <div class="summary-card">
          <h4>Data Points</h4>
          <div class="value">${weightedData.length}</div>
          <div class="subtext">Values with Weights</div>
        </div>
      `;
      
      return { 
        value: result, 
        text: `Weighted Average: ${weightedAverage.toFixed(decimalPlaces)} (based on ${weightedData.length} values)`, 
        steps: stepsHtml,
        summary
      };
    }

    function calculateGeometricAverage() {
      if (geometricNumbers.length < 1) {
        throw new Error('Please enter at least one number');
      }
      
      // Check for negative numbers (geometric mean requires positive numbers)
      if (geometricNumbers.some(num => num <= 0)) {
        throw new Error('Geometric mean requires all positive numbers');
      }
      
      const product = geometricNumbers.reduce((acc, num) => acc * num, 1);
      const geometricMean = Math.pow(product, 1 / geometricNumbers.length);
      const decimalPlaces = parseInt(document.getElementById('decimal-places').value);
      
      const result = {
        geometricMean: geometricMean,
        product: product,
        count: geometricNumbers.length,
        numbers: geometricNumbers
      };
      
      let stepsHtml = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Data: ${geometricNumbers.join(', ')}</li>
          <li>Product: ${geometricNumbers.join(' × ')} = ${product.toFixed(decimalPlaces)}</li>
          <li>Count: ${geometricNumbers.length} numbers</li>
          <li>Geometric Mean: ${geometricNumbers.length}√${product.toFixed(decimalPlaces)} = ${geometricMean.toFixed(decimalPlaces)}</li>
          ${geometricNumbers.every(num => num > 1) ? `<li>As Percentage: (${geometricMean.toFixed(decimalPlaces)} - 1) × 100 = ${((geometricMean - 1) * 100).toFixed(decimalPlaces)}% average growth</li>` : ''}
        </ol>
      `;
      
      summary = `
        <div class="summary-card">
          <h4>Geometric Mean</h4>
          <div class="value">${geometricMean.toFixed(decimalPlaces)}</div>
          <div class="subtext">Multiplicative Average</div>
        </div>
        <div class="summary-card">
          <h4>Product</h4>
          <div class="value">${product.toFixed(decimalPlaces)}</div>
          <div class="subtext">Of All Values</div>
        </div>
        <div class="summary-card">
          <h4>Count</h4>
          <div class="value">${geometricNumbers.length}</div>
          <div class="subtext">Numbers</div>
        </div>
        <div class="summary-card">
          <h4>Growth Rate</h4>
          <div class="value">${geometricNumbers.every(num => num > 1) ? ((geometricMean - 1) * 100).toFixed(decimalPlaces) + '%' : '-'}</div>
          <div class="subtext">Average</div>
        </div>
      `;
      
      return { 
        value: result, 
        text: `Geometric Mean: ${geometricMean.toFixed(decimalPlaces)} ${geometricNumbers.every(num => num > 1) ? `(${((geometricMean - 1) * 100).toFixed(decimalPlaces)}% average growth)` : ''}`, 
        steps: stepsHtml,
        summary
      };
    }

    function calculateGradeAverage() {
      if (gradeData.length < 1) {
        throw new Error('Please enter at least one grade with credit hours');
      }
      
      let weightedSum = 0;
      let totalCredits = 0;
      
      gradeData.forEach(item => {
        weightedSum += item.grade * item.credit;
        totalCredits += item.credit;
      });
      
      const gpa = weightedSum / totalCredits;
      const simpleAverage = gradeData.reduce((acc, item) => acc + item.grade, 0) / gradeData.length;
      const decimalPlaces = parseInt(document.getElementById('decimal-places').value);
      
      const result = {
        gpa: gpa,
        simpleAverage: simpleAverage,
        weightedSum: weightedSum,
        totalCredits: totalCredits,
        data: gradeData
      };
      
      let stepsHtml = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Weighted Sum: ${gradeData.map(item => `(${item.grade} × ${item.credit})`).join(' + ')} = ${weightedSum.toFixed(decimalPlaces)}</li>
          <li>Total Credits: ${gradeData.map(item => item.credit).join(' + ')} = ${totalCredits}</li>
          <li>GPA: ${weightedSum.toFixed(decimalPlaces)} ÷ ${totalCredits} = ${gpa.toFixed(decimalPlaces)}</li>
          <li>Simple Average: ${gradeData.map(item => item.grade).join(' + ')} ÷ ${gradeData.length} = ${simpleAverage.toFixed(decimalPlaces)}</li>
        </ol>
      `;
      
      summary = `
        <div class="summary-card">
          <h4>GPA</h4>
          <div class="value">${gpa.toFixed(decimalPlaces)}</div>
          <div class="subtext">Weighted Average</div>
        </div>
        <div class="summary-card">
          <h4>Simple Average</h4>
          <div class="value">${simpleAverage.toFixed(decimalPlaces)}</div>
          <div class="subtext">Unweighted</div>
        </div>
        <div class="summary-card">
          <h4>Total Credits</h4>
          <div class="value">${totalCredits}</div>
          <div class="subtext">Credit Hours</div>
        </div>
        <div class="summary-card">
          <h4>Courses</h4>
          <div class="value">${gradeData.length}</div>
          <div class="subtext">Number of Courses</div>
        </div>
      `;
      
      return { 
        value: result, 
        text: `GPA: ${gpa.toFixed(decimalPlaces)} | Simple Average: ${simpleAverage.toFixed(decimalPlaces)} (${gradeData.length} courses, ${totalCredits} credits)`, 
        steps: stepsHtml,
        summary
      };
    }

    function createNumberLineVisualization(numbers, mean) {
      numberLine.innerHTML = '';
      
      if (numbers.length === 0) return;
      
      const min = Math.min(...numbers);
      const max = Math.max(...numbers);
      const range = max - min;
      
      // Add some padding to the visualization
      const padding = range * 0.1;
      const displayMin = min - padding;
      const displayMax = max + padding;
      const displayRange = displayMax - displayMin;
      
      // Create number points
      numbers.forEach(num => {
        const position = ((num - displayMin) / displayRange) * 100;
        const point = document.createElement('div');
        point.className = 'number-point';
        point.style.left = `${position}%`;
        point.title = `Value: ${num}`;
        numberLine.appendChild(point);
        
        // Add label for significant points
        if (num === min || num === max) {
          const label = document.createElement('div');
          label.className = 'number-label';
          label.textContent = num;
          label.style.left = `${position}%`;
          numberLine.appendChild(label);
        }
      });
      
      // Add mean line
      const meanPosition = ((mean - displayMin) / displayRange) * 100;
      const meanLine = document.createElement('div');
      meanLine.className = 'mean-line';
      meanLine.style.left = `${meanPosition}%`;
      numberLine.appendChild(meanLine);
      
      const meanLabel = document.createElement('div');
      meanLabel.className = 'mean-label';
      meanLabel.textContent = `Mean: ${mean.toFixed(2)}`;
      meanLabel.style.left = `${meanPosition}%`;
      numberLine.appendChild(meanLabel);
    }

    function displayResult(result, steps, summary) {
      resultValue.textContent = result.text;
      calculationSteps.innerHTML = steps || '';
      summaryCards.innerHTML = summary || '';
      resultSection.classList.add('active');
      showAlert('Calculation completed successfully!', 'success');
    }

    function clearNumbers() {
      numbers = [];
      updateNumberList();
      updateCounters();
      showAlert('All numbers cleared!', 'success');
    }

    function generateSampleData() {
      // Generate random sample data
      const sampleSize = Math.floor(Math.random() * 8) + 3; // 3 to 10 numbers
      numbers = [];
      
      for (let i = 0; i < sampleSize; i++) {
        numbers.push(Math.floor(Math.random() * 40) + 60); // Numbers between 60 and 100
      }
      
      updateNumberList();
      updateCounters();
      showAlert(`Generated ${sampleSize} random sample numbers!`, 'success');
    }

    function copyResults() {
      if (!resultSection.classList.contains('active')) {
        showAlert('No results to copy. Please calculate first.', 'error');
        return;
      }
      
      const textToCopy = resultValue.textContent;
      navigator.clipboard.writeText(textToCopy).then(() => {
        showAlert('Results copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy results: ' + err, 'error');
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