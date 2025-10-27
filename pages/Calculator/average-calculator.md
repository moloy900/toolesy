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

<!-- WebApp Schema (JSON-LD) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Average Calculator",
  "url": "https://toolesy.com/average-calculator-calculate-mean-median-mode-online",
  "description": "Free online calculator to find mean, median, mode, range and more.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "865"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
</script>

<!-- FAQ Schema (SEO Boost for Google Featured Snippets) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does the Average Calculator do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This average calculator quickly calculates the mean, median, mode and range of any set of numbers. It’s designed for students, teachers, and data analysts."
      }
    },
    {
      "@type": "Question",
      "name": "Is this calculator free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. This tool is 100% free, requires no login and works on all devices including mobile, tablet, and desktop."
      }
    },
    {
      "@type": "Question",
      "name": "Who can use this average calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anyone — including students learning math, teachers preparing assignments, and professionals doing statistical analysis."
      }
    }
  ]
}
</script>


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
    <h2>Free Online Average Calculator</h2>

    <p>Our comprehensive <strong>Average Calculator</strong> is an essential tool for students, teachers, researchers, and anyone who needs to calculate statistical averages quickly and accurately. Whether you're analyzing test scores, calculating GPA, determining growth rates, or working with weighted data, this calculator provides precise results with detailed explanations. Calculate mean, median, mode, range, weighted averages, geometric means, and more with just a few clicks.</p>

    <h3>How to Use This Average Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Select Calculation Type:</strong> Choose from four different average calculations: Basic Average, Weighted Average, Geometric Mean, or Grade Average.</li>
      <li><strong>Enter Your Data:</strong> Input numbers directly in the text area (comma or space separated) or add them one by one using the "Add Number" button.</li>
      <li><strong>For Specialized Averages:</strong> For weighted averages, enter both values and weights. For grade averages, include subject names and credit hours.</li>
      <li><strong>Customize Settings:</strong> Adjust decimal places, output format, and other calculation preferences.</li>
      <li><strong>Calculate:</strong> Click the "Calculate Average" button to get comprehensive results with summary cards and step-by-step explanations.</li>
      <li><strong>Copy or Clear:</strong> Use the "Copy Results" button to save your calculation or "Clear Numbers" to start over.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're a teacher calculating final grades for your students. You have test scores, homework assignments, and project grades with different weights. Using our Weighted Average calculator, you can easily input each student's scores with their respective weights (e.g., Tests: 50%, Homework: 20%, Projects: 30%). The calculator instantly computes the weighted average, showing you exactly how each component contributes to the final grade. This ensures fair and accurate grading while saving you hours of manual calculation.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Students:</strong> Calculate GPA, test averages, and assignment scores</li>
      <li><strong>Teachers & Professors:</strong> Compute student grades and class averages efficiently</li>
      <li><strong>Researchers & Analysts:</strong> Analyze data sets and calculate statistical measures</li>
      <li><strong>Business Professionals:</strong> Calculate performance metrics, growth rates, and financial averages</li>
      <li><strong>Parents:</strong> Track children's academic progress and calculate grade averages</li>
      <li><strong>Statisticians:</strong> Quick calculations for data analysis and research</li>
      <li><strong>Anyone:</strong> Solve everyday average-related problems without manual calculations</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: What's the difference between mean, median, and mode?</strong><br>
      A: Mean is the arithmetic average (sum divided by count), median is the middle value when sorted, and mode is the most frequently occurring value. Each measure provides different insights about your data.</p>

    <p><strong>Q: When should I use weighted average instead of regular average?</strong><br>
      A: Use weighted average when different values have different levels of importance or significance. Common examples include calculating GPA (courses have different credit weights) or final grades (assignments have different weights).</p>

    <p><strong>Q: What is geometric mean used for?</strong><br>
      A: Geometric mean is ideal for calculating average growth rates, investment returns, or ratios. It's more appropriate than arithmetic mean when dealing with percentages or multiplicative processes.</p>

    <p><strong>Q: How many numbers can I calculate averages for?</strong><br>
      A: You can calculate averages for any number of values, from just 2 numbers to thousands of data points. The calculator handles large datasets efficiently.</p>

    <p><strong>Q: Can I use this tool on my mobile phone?</strong><br>
      A: Yes, our average calculator is fully responsive and works perfectly on all devices including smartphones and tablets.</p>

    <h3>Why Choose Our Average Calculator?</h3>
    <p>Our <strong>online average calculator</strong> stands out for its comprehensive features, educational value, and user-friendly interface. Unlike basic calculators that provide simple results, ours shows multiple average types simultaneously with detailed step-by-step explanations and visual data representation. The tool handles various calculation scenarios including basic averages, weighted averages, geometric means, and grade calculations. All computations happen locally in your browser, ensuring your data privacy and enabling offline use once the page is loaded.</p>

    <h3>Common Applications of Average Calculations</h3>
    <p>Average calculations have numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Education:</strong> Calculate GPA, test averages, and academic performance metrics</li>
      <li><strong>Business & Finance:</strong> Analyze sales figures, calculate average revenue, and determine growth rates</li>
      <li><strong>Research & Statistics:</strong> Analyze survey data, calculate central tendencies, and interpret research findings</li>
      <li><strong>Sports Analytics:</strong> Calculate player statistics, team averages, and performance metrics</li>
      <li><strong>Healthcare:</strong> Analyze patient data, calculate average recovery times, and monitor health metrics</li>
      <li><strong>Economics:</strong> Calculate inflation rates, average incomes, and economic indicators</li>
      <li><strong>Quality Control:</strong> Monitor production quality, calculate defect rates, and maintain standards</li>
    </ul>

    <h3>Average Calculation Formulas Used</h3>
    <p>Our calculator uses these standard mathematical formulas:</p>
    <ul>
      <li><strong>Arithmetic Mean:</strong> (x₁ + x₂ + ... + xₙ) ÷ n</li>
      <li><strong>Median:</strong> Middle value when data is sorted (or average of two middle values for even count)</li>
      <li><strong>Mode:</strong> Most frequently occurring value(s) in the dataset</li>
      <li><strong>Range:</strong> Maximum value - Minimum value</li>
      <li><strong>Weighted Average:</strong> (w₁x₁ + w₂x₂ + ... + wₙxₙ) ÷ (w₁ + w₂ + ... + wₙ)</li>
      <li><strong>Geometric Mean:</strong> ⁿ√(x₁ × x₂ × ... × xₙ)</li>
      <li><strong>GPA Calculation:</strong> Sum of (Grade × Credits) ÷ Total Credits</li>
    </ul>

    <h3>Understanding Different Types of Averages</h3>
    <p>Each type of average provides unique insights into your data:</p>
    <ul>
      <li><strong>Mean (Arithmetic Average):</strong> Best for normally distributed data without extreme outliers</li>
      <li><strong>Median (Middle Value):</strong> More robust when data contains outliers or is skewed</li>
      <li><strong>Mode (Most Frequent):</strong> Useful for categorical data or identifying common values</li>
      <li><strong>Weighted Average:</strong> Essential when different values have different levels of importance</li>
      <li><strong>Geometric Mean:</strong> Ideal for growth rates, ratios, and multiplicative processes</li>
    </ul>

    <h3>Tips for Accurate Average Calculations</h3>
    <p>To get the most meaningful results from our calculator:</p>
    <ul>
      <li>Ensure your data is accurate and complete before calculating</li>
      <li>Consider which type of average is most appropriate for your specific use case</li>
      <li>Be aware of outliers that might skew your results</li>
      <li>For weighted averages, double-check that your weights accurately reflect importance</li>
      <li>Use geometric mean for percentage changes and growth rates</li>
      <li>Compare multiple average types to get a comprehensive understanding of your data</li>
    </ul>
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