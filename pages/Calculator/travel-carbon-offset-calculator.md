---
layout: default
title: "Travel Carbon Offset Calculator – Reduce Travel Emissions"
permalink: /travel-carbon-offset-calculator/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Travel Carbon Offset Calculator – Reduce Travel Emissions</title>

<meta name="description" content="Free travel carbon offset calculator to estimate CO2 from flights and car trips. Get quick offset tips for cleaner, climate-friendly, and sustainable travel.">

<meta name="keywords" content="travel carbon footprint calculator, carbon offset calculator, flight carbon calculator, car CO2 calculator, travel emissions calculator, CO2 travel calculator, eco friendly travel calculator, climate neutral travel">

<meta name="author" content="ToolEsy">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://toolesy.com/travel-carbon-offset-calculator/">

<!-- ✅ Open Graph Tags -->
<meta property="og:title" content="Travel Carbon Footprint Calculator - Reduce Your Travel Emissions">
<meta property="og:description" content="Instant CO2 emission calculation for flights, car travel, and daily commuting — plus offset suggestions.">
<meta property="og:url" content="https://toolesy.com/travel-carbon-offset-calculator/">
<meta property="og:type" content="website">

<!-- ✅ Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Travel Carbon Offset Calculator">
<meta name="twitter:description" content="Calculate your travel CO2 emissions and offset them with sustainable projects. Fast & Free!">


<!-- ✅ Webpage Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Travel Carbon Footprint Calculator",
  "url": "https://toolesy.com/travel-carbon-offset-calculator/",
  "description": "Free online CO2 calculator for all types of travel to measure and offset emissions."
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How accurate are the carbon emission calculations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our calculations use emission factors from reputable sources including the EPA, DEFRA, and ICAO. While individual results may vary based on specific circumstances, the estimates provide a reliable benchmark for understanding travel impacts."
      }
    },
    {
      "@type": "Question",
      "name": "What does carbon offsetting actually mean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Carbon offsetting involves investing in environmental projects that reduce or remove greenhouse gas emissions equivalent to those you've produced. These projects are verified by third-party standards to ensure they deliver real, additional climate benefits."
      }
    },
    {
      "@type": "Question",
      "name": "Are offset projects actually effective?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Verified carbon offset projects undergo rigorous certification processes to ensure they deliver genuine emission reductions. Look for projects certified under standards like Gold Standard, Verified Carbon Standard (VCS), or Climate Action Reserve."
      }
    },
    {
      "@type": "Question",
      "name": "Should I reduce my travel or just offset it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most effective approach is to first reduce emissions where possible and then offset the remaining unavoidable emissions."
      }
    },
    {
      "@type": "Question",
      "name": "How much does carbon offsetting typically cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Offset costs range from $10-50 per ton of CO₂ depending on project type and certification standard. Our calculator uses $25/ton as a default, representing the average cost of high-quality offset projects."
      }
    }
  ]
}
</script>

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Travel Carbon Calculator Styles */
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

  .input-section {
    margin: 20px 0;
  }

  .input-section label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #2c3e50;
  }

  .input-section input,
  .input-section select {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
    box-sizing: border-box;
  }

  .input-section input:focus,
  .input-section select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 25px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  .transport-section {
    margin: 20px 0;
  }

  .transport-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 15px;
    margin-bottom: 20px;
  }

  .transport-item {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    border-left: 4px solid #e0e0e0;
  }

  .transport-header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .transport-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    color: white;
    font-size: 1.5rem;
  }

  .flight-bg { background: #3498db; }
  .car-bg { background: #e74c3c; }
  .train-bg { background: #2ecc71; }
  .bus-bg { background: #f39c12; }
  .cruise-bg { background: #9b59b6; }

  .transport-name {
    font-weight: 600;
    color: #2c3e50;
    font-size: 1.1rem;
  }

  .distance-input {
    width: 100%;
    padding: 10px;
    border: 2px solid #e0e6ed;
    border-radius: 6px;
    font-size: 14px;
    transition: border-color 0.3s;
  }

  .distance-input:focus {
    outline: none;
    border-color: var(--primary);
  }

  .distance-options {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }

  .distance-option {
    flex: 1;
    padding: 8px;
    text-align: center;
    background: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    transition: all 0.3s ease;
  }

  .distance-option:hover {
    background: #e9ecef;
  }

  .distance-option.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
  }

  .calculation-options {
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

  .calc-button.eco {
    background: #27ae60;
    color: white;
  }

  .calc-button.eco:hover {
    background: #219653;
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

  .alert-info {
    background-color: #d1ecf1;
    color: #0c5460;
    border: 1px solid #bee5eb;
  }

  .alert .close {
    cursor: pointer;
    font-weight: bold;
  }

  .results-section {
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
    display: none;
  }

  .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 25px;
  }

  .result-item {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    border-left: 4px solid var(--primary);
  }

  .result-item.warning {
    border-left-color: #ffc107;
  }

  .result-item.success {
    border-left-color: var(--success);
  }

  .result-item.eco {
    border-left-color: #27ae60;
  }

  .result-item h3 {
    margin-top: 0;
    color: #2c3e50;
    font-size: 1rem;
  }

  .result-value {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--primary);
    margin: 10px 0;
  }

  .result-item.warning .result-value {
    color: #ffc107;
  }

  .result-item.success .result-value {
    color: var(--success);
  }

  .result-item.eco .result-value {
    color: #27ae60;
  }

  .result-description {
    font-size: 0.9rem;
    color: #7f8c8d;
  }

  .emissions-breakdown {
    margin-top: 30px;
  }

  .breakdown-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-top: 15px;
  }

  .breakdown-item {
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    text-align: center;
  }

  .breakdown-value {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary);
    margin: 5px 0;
  }

  .breakdown-label {
    font-size: 0.9rem;
    color: #7f8c8d;
  }

  .offset-section {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .offset-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .offset-option {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .offset-option:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .offset-option.selected {
    border-color: #27ae60;
    background: rgba(39, 174, 96, 0.05);
  }

  .offset-icon {
    font-size: 2.5rem;
    color: #27ae60;
    margin-bottom: 15px;
  }

  .offset-name {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 10px;
  }

  .offset-cost {
    font-size: 1.2rem;
    font-weight: bold;
    color: #27ae60;
    margin: 10px 0;
  }

  .offset-description {
    font-size: 0.9rem;
    color: #7f8c8d;
    line-height: 1.5;
  }

  .chart-container {
    margin-top: 30px;
    height: 300px;
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .sustainability-tips {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .sustainability-tips h3 {
    color: var(--primary);
    margin-bottom: 15px;
  }

  .sustainability-tips ul {
    margin: 15px 0;
    padding-left: 30px;
  }

  .sustainability-tips li {
    margin-bottom: 10px;
    line-height: 1.6;
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

  .modal-button.eco {
    background: #27ae60;
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

    .transport-grid {
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

    .modal-content {
      margin: 20% auto;
      width: 95%;
      padding: 20px;
    }

    .calculation-options {
      grid-template-columns: 1fr;
    }

    .results-grid {
      grid-template-columns: 1fr;
    }

    .breakdown-grid {
      grid-template-columns: 1fr;
    }

    .offset-options {
      grid-template-columns: 1fr;
    }

    .chart-container {
      height: 250px;
    }
  }
</style>

<div class="calculator-container">
  <h1>Travel Carbon Offset Calculator</h1>
  <p class="welcome-message">Calculate your travel carbon footprint and discover how to offset it through verified environmental projects. Make your travels more sustainable and climate-friendly.</p>

  <div class="calculator-section">
    <h2>Carbon Footprint Calculator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Total CO₂ Emissions: </span>
        <span id="totalEmissions">0 kg</span>
      </div>
      <div class="counter-item">
        <span>Offset Cost: </span>
        <span id="offsetCost">$0</span>
      </div>
      <div class="counter-item">
        <span>Equivalent Trees: </span>
        <span id="equivalentTrees">0</span>
      </div>
      <div class="counter-item">
        <span>Carbon Intensity: </span>
        <span id="carbonIntensity">Low</span>
      </div>
    </div>

    <div class="transport-section">
      <h2>Transportation Methods</h2>
      <p>Enter your travel distances for each transportation method used:</p>
      
      <div class="transport-grid">
        <!-- Flight -->
        <div class="transport-item">
          <div class="transport-header">
            <div class="transport-icon flight-bg">
              <i class="fas fa-plane"></i>
            </div>
            <div>
              <div class="transport-name">Flights</div>
              <small>Round trip or one-way</small>
            </div>
          </div>
          <input type="number" class="distance-input" id="flightDistance" min="0" placeholder="Distance in km">
          <div class="distance-options">
            <div class="distance-option" data-distance="500">Short (500km)</div>
            <div class="distance-option" data-distance="1500">Medium (1,500km)</div>
            <div class="distance-option" data-distance="5000">Long (5,000km)</div>
          </div>
          <div class="form-group" style="margin-top: 10px;">
            <select id="flightClass" class="option-select">
              <option value="1.0">Economy Class</option>
              <option value="1.5">Premium Economy</option>
              <option value="2.0">Business Class</option>
              <option value="3.0">First Class</option>
            </select>
          </div>
        </div>

        <!-- Car -->
        <div class="transport-item">
          <div class="transport-header">
            <div class="transport-icon car-bg">
              <i class="fas fa-car"></i>
            </div>
            <div>
              <div class="transport-name">Car Travel</div>
              <small>Personal vehicle</small>
            </div>
          </div>
          <input type="number" class="distance-input" id="carDistance" min="0" placeholder="Distance in km">
          <div class="distance-options">
            <div class="distance-option" data-distance="100">Short (100km)</div>
            <div class="distance-option" data-distance="300">Medium (300km)</div>
            <div class="distance-option" data-distance="800">Long (800km)</div>
          </div>
          <div class="form-group" style="margin-top: 10px;">
            <select id="carType" class="option-select">
              <option value="0.12">Small Car (Petrol)</option>
              <option value="0.15">Medium Car (Petrol)</option>
              <option value="0.18">Large Car (Petrol)</option>
              <option value="0.20">SUV (Petrol)</option>
              <option value="0.10">Small Car (Diesel)</option>
              <option value="0.13">Medium Car (Diesel)</option>
              <option value="0.08">Hybrid Vehicle</option>
              <option value="0.00">Electric Vehicle</option>
            </select>
          </div>
        </div>

        <!-- Train -->
        <div class="transport-item">
          <div class="transport-header">
            <div class="transport-icon train-bg">
              <i class="fas fa-train"></i>
            </div>
            <div>
              <div class="transport-name">Train Travel</div>
              <small>Rail journeys</small>
            </div>
          </div>
          <input type="number" class="distance-input" id="trainDistance" min="0" placeholder="Distance in km">
          <div class="distance-options">
            <div class="distance-option" data-distance="50">Short (50km)</div>
            <div class="distance-option" data-distance="200">Medium (200km)</div>
            <div class="distance-option" data-distance="500">Long (500km)</div>
          </div>
          <div class="form-group" style="margin-top: 10px;">
            <select id="trainType" class="option-select">
              <option value="0.035">Regional Train</option>
              <option value="0.025">High-Speed Train</option>
              <option value="0.015">Electric Commuter</option>
            </select>
          </div>
        </div>

        <!-- Bus -->
        <div class="transport-item">
          <div class="transport-header">
            <div class="transport-icon bus-bg">
              <i class="fas fa-bus"></i>
            </div>
            <div>
              <div class="transport-name">Bus Travel</div>
              <small>Coach or local bus</small>
            </div>
          </div>
          <input type="number" class="distance-input" id="busDistance" min="0" placeholder="Distance in km">
          <div class="distance-options">
            <div class="distance-option" data-distance="50">Short (50km)</div>
            <div class="distance-option" data-distance="200">Medium (200km)</div>
            <div class="distance-option" data-distance="500">Long (500km)</div>
          </div>
          <div class="form-group" style="margin-top: 10px;">
            <select id="busType" class="option-select">
              <option value="0.08">Local Bus</option>
              <option value="0.03">Coach/Long Distance</option>
            </select>
          </div>
        </div>

        <!-- Cruise -->
        <div class="transport-item">
          <div class="transport-header">
            <div class="transport-icon cruise-bg">
              <i class="fas fa-ship"></i>
            </div>
            <div>
              <div class="transport-name">Cruise Ship</div>
              <small>Cruise journeys</small>
            </div>
          </div>
          <input type="number" class="distance-input" id="cruiseDistance" min="0" placeholder="Distance in km">
          <div class="distance-options">
            <div class="distance-option" data-distance="500">Short (500km)</div>
            <div class="distance-option" data-distance="2000">Medium (2,000km)</div>
            <div class="distance-option" data-distance="5000">Long (5,000km)</div>
          </div>
          <div class="form-group" style="margin-top: 10px;">
            <select id="cruiseType" class="option-select">
              <option value="0.25">Standard Cruise</option>
              <option value="0.40">Luxury Cruise</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="calculation-options">
      <div class="option-group">
        <label class="option-label">Carbon Price</label>
        <select id="carbonPrice" class="option-select">
          <option value="15">$15/ton (Basic)</option>
          <option value="25" selected>$25/ton (Standard)</option>
          <option value="50">$50/ton (Premium)</option>
          <option value="100">$100/ton (Climate Leader)</option>
        </select>
        <small>Cost per ton of CO₂ to offset</small>
      </div>
      
      <div class="option-group">
        <label class="option-label">Travel Period</label>
        <select id="travelPeriod" class="option-select">
          <option value="1">Single Trip</option>
          <option value="4" selected>Monthly Travel</option>
          <option value="12">Annual Travel</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Include Accommodation</label>
        <div class="option-checkbox">
          <input type="checkbox" id="includeAccommodation" checked>
          <label for="includeAccommodation">Calculate hotel emissions</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="includeMeals">
          <label for="includeMeals">Include food carbon footprint</label>
        </div>
      </div>
    </div>

    <div class="button-section">
      <button class="calc-button" data-action="calculate">Calculate Emissions</button>
      <button class="calc-button success" data-action="save">Save Calculation</button>
      <button class="calc-button warning" data-action="compare">Compare Methods</button>
      <button class="calc-button eco" data-action="offset">Offset Now</button>
      <button class="calc-button secondary" data-action="clear">Clear All</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="results-section" id="resultsSection">
      <h2>Carbon Emissions Analysis</h2>
      
      <div class="results-grid">
        <div class="result-item">
          <h3>Total CO₂ Emissions</h3>
          <div class="result-value" id="resultEmissions">0 kg</div>
          <div class="result-description" id="emissionsPeriod">For this trip</div>
        </div>
        
        <div class="result-item warning">
          <h3>Carbon Offset Cost</h3>
          <div class="result-value" id="resultOffsetCost">$0</div>
          <div class="result-description">To neutralize your impact</div>
        </div>
        
        <div class="result-item success">
          <h3>Equivalent Trees</h3>
          <div class="result-value" id="resultTrees">0</div>
          <div class="result-description">Trees needed to absorb CO₂</div>
        </div>
        
        <div class="result-item eco">
          <h3>Environmental Impact</h3>
          <div class="result-value" id="environmentalImpact">Low</div>
          <div class="result-description">Compared to average</div>
        </div>
      </div>

      <div class="emissions-breakdown">
        <h3>Emissions Breakdown by Transportation</h3>
        <div class="breakdown-grid" id="transportBreakdown">
          <!-- Transport breakdown will be inserted here by JavaScript -->
        </div>
      </div>
      
      <div class="chart-container">
        <canvas id="emissionsChart"></canvas>
      </div>

      <div class="offset-section">
        <h3>Carbon Offset Projects</h3>
        <p>Choose how you'd like to offset your carbon emissions through verified environmental projects:</p>
        
        <div class="offset-options">
          <div class="offset-option" data-project="reforestation">
            <div class="offset-icon">🌳</div>
            <div class="offset-name">Reforestation</div>
            <div class="offset-cost" id="reforestationCost">$0</div>
            <div class="offset-description">Plant trees to absorb CO₂ and restore ecosystems</div>
          </div>
          
          <div class="offset-option" data-project="renewable">
            <div class="offset-icon">☀️</div>
            <div class="offset-name">Renewable Energy</div>
            <div class="offset-cost" id="renewableCost">$0</div>
            <div class="offset-description">Support solar and wind projects to replace fossil fuels</div>
          </div>
          
          <div class="offset-option" data-project="cookstoves">
            <div class="offset-icon">🔥</div>
            <div class="offset-name">Clean Cookstoves</div>
            <div class="offset-cost" id="cookstovesCost">$0</div>
            <div class="offset-description">Provide efficient cookstoves to reduce deforestation</div>
          </div>
        </div>
      </div>

      <div class="sustainability-tips">
        <h3>Sustainable Travel Tips</h3>
        <div id="travelTips">
          <p>Based on your travel patterns, here are personalized tips to reduce your carbon footprint:</p>
          <ul>
            <li>Choose direct flights when possible to reduce takeoff/landing emissions</li>
            <li>Consider train travel for shorter distances instead of flying</li>
            <li>Use public transportation or walk when exploring destinations</li>
            <li>Pack light to reduce weight-related fuel consumption</li>
          </ul>
        </div>
      </div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Real-Life Travel Examples</h2>

      <h3>Weekend City Break:</h3>
      <div class="example-text">
• Flight: 500km round trip (Economy)
• Local transport: 50km by train + 20km by bus
• 2-night hotel stay
• Total Emissions: ~180 kg CO₂
• Offset Cost: $4.50
• Equivalent: 9 tree seedlings
• Impact: Moderate - Consider train alternative
      </div>

      <h3>Family Road Trip:</h3>
      <div class="example-text">
• Car travel: 800km (Medium petrol car)
• 5-night accommodation
• Local activities: 100km
• Total Emissions: ~240 kg CO₂
• Offset Cost: $6.00
• Equivalent: 12 tree seedlings
• Impact: High - Consider carpooling or electric vehicle
      </div>

      <h3>International Vacation:</h3>
      <div class="example-text">
• Flight: 8,000km round trip (Economy)
• Local transport: 200km by rental car
• 10-night hotel stay
• Total Emissions: ~1,800 kg CO₂
• Offset Cost: $45.00
• Equivalent: 90 tree seedlings
• Impact: Very High - Consider carbon offset program
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Travel Carbon Offset Calculator - Make Your Travels Climate Positive</h2>

    <p>Travel opens our minds and connects us with the world, but it also contributes to climate change through carbon emissions. Our <strong>Travel Carbon Offset Calculator</strong> helps you understand the environmental impact of your journeys and take meaningful action. Calculate your travel carbon footprint across all transportation methods and discover how to offset your emissions through verified environmental projects that make a real difference.</p>

    <h3>How to Use This Carbon Offset Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Travel Distances:</strong> Input distances for flights, car trips, train journeys, bus travel, and cruises using our intuitive interface.</li>
      <li><strong>Select Vehicle Types:</strong> Choose specific vehicle types and classes for accurate emission calculations.</li>
      <li><strong>Set Calculation Parameters:</strong> Adjust carbon pricing and travel period to match your preferences.</li>
      <li><strong>Calculate:</strong> Click "Calculate Emissions" to see your total carbon footprint and offset cost.</li>
      <li><strong>Choose Offset Projects:</strong> Select from verified environmental projects like reforestation, renewable energy, or clean cookstoves.</li>
      <li><strong>Take Action:</strong> Use the "Offset Now" feature to contribute to climate solutions.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>The Johnson family is planning a vacation from New York to Paris. They use our calculator to understand their environmental impact: a round-trip flight (11,000km total) in economy class generates approximately 1.2 tons of CO₂ per person. For their family of four, this totals 4.8 tons of CO₂. The calculator shows this is equivalent to the annual emissions of an average car, and would require 120 tree seedlings growing for 10 years to absorb. For $120 (at $25/ton), they can fully offset their emissions by supporting a renewable energy project in India that replaces coal power with solar energy, making their vacation carbon neutral.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Eco-Conscious Travelers:</strong> Understand and mitigate your travel environmental impact</li>
      <strong>Business Travelers:</strong> Calculate and offset corporate travel emissions for CSR reporting</li>
      <li><strong>Tour Operators:</strong> Provide carbon offset options to clients for sustainable tourism</li>
      <li><strong>Event Planners:</strong> Calculate and offset emissions for conferences and meetings</li>
      <li><strong>Students & Educators:</strong> Learn about carbon footprints and climate solutions</li>
      <li><strong>Climate Advocates:</strong> Raise awareness about travel emissions and offsetting</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: How accurate are the carbon emission calculations?</strong><br>
      A: Our calculations use emission factors from reputable sources including the EPA, DEFRA, and ICAO. While individual results may vary based on specific circumstances, the estimates provide a reliable benchmark for understanding travel impacts.</p>

    <p><strong>Q: What does "carbon offsetting" actually mean?</strong><br>
      A: Carbon offsetting involves investing in environmental projects that reduce or remove greenhouse gas emissions equivalent to those you've produced. These projects are verified by third-party standards to ensure they deliver real, additional climate benefits.</p>

    <p><strong>Q: Are offset projects actually effective?</strong><br>
      A: Verified carbon offset projects undergo rigorous certification processes to ensure they deliver genuine emission reductions. Look for projects certified under standards like Gold Standard, Verified Carbon Standard (VCS), or Climate Action Reserve.</p>

    <p><strong>Q: Should I reduce my travel or just offset it?</strong><br>
      A: The most effective approach is to first reduce emissions where possible (choosing trains over short flights, packing light, selecting efficient vehicles) and then offset the remaining unavoidable emissions.</p>

    <p><strong>Q: How much does carbon offsetting typically cost?</strong><br>
      A: Offset costs range from $10-50 per ton of CO₂ depending on project type and certification standard. Our calculator uses $25/ton as a default, representing the average cost of high-quality offset projects.</p>

    <h3>The Science Behind Carbon Calculations</h3>
    <p>Our calculator uses established emission factors and methodologies:</p>
    <ul>
      <li><strong>Aviation:</strong> Accounts for CO₂ emissions plus radiative forcing impact (multiplier of 1.9 for high-altitude effects)</li>
      <li><strong>Road Transport:</strong> Differentiates between vehicle types, fuel efficiency, and occupancy rates</li>
      <li><strong>Rail Travel:</strong> Considers electricity source mix for electric trains and fuel type for diesel</li>
      <li><strong>Accommodation:</strong> Estimates emissions based on energy use per night in different hotel categories</li>
      <li><strong>Carbon Sequestration:</strong> Uses average tree growth rates of 22 kg CO₂ per year per tree</li>
    </ul>

    <h3>Types of Carbon Offset Projects</h3>
    <p>High-quality carbon offset projects deliver multiple benefits beyond emission reduction:</p>
    <ul>
      <li><strong>Reforestation & Afforestation:</strong> Planting trees that absorb CO₂ while restoring habitats and preventing soil erosion</li>
      <li><strong>Renewable Energy:</strong> Funding wind, solar, and hydro projects that displace fossil fuel electricity</li>
      <li><strong>Energy Efficiency:</strong> Distributing efficient cookstoves or LED lights to reduce fuel consumption</li>
      <li><strong>Methane Capture:</strong> Capturing landfill gas or agricultural methane for energy production</li>
      <li><strong>Forest Conservation:</strong> Protecting existing forests from deforestation through community programs</li>
    </ul>

    <h3>Sustainable Travel Strategies</h3>
    <p>Beyond offsetting, consider these approaches to reduce your travel footprint:</p>
    <ul>
      <li><strong>Trip Consolidation:</strong> Combine multiple trips into one longer journey</li>
      <li><strong>Transport Choice:</strong> Prefer trains over planes for distances under 800km</li>
      <li><strong>Eco-Accommodation:</strong> Choose hotels with sustainability certifications</li>
      <li><strong>Local Experiences:</strong> Support local economies and reduce transport needs</li>
      <li><strong>Digital Alternatives:</strong> Consider virtual meetings when travel isn't essential</li>
      <li><strong>Slow Travel:</strong> Stay longer in fewer places for deeper cultural immersion</li>
    </ul>
  </div>
</div>

<!-- Offset Confirmation Modal -->
<div id="offsetModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Offset Your Carbon Emissions</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div id="offsetConfirmationContent">
        <p>You're about to offset <strong id="confirmEmissions">0 kg</strong> of CO₂ emissions through <strong id="confirmProject">reforestation</strong>.</p>
        <p>Total offset cost: <strong id="confirmCost">$0</strong></p>
        <p>This will support verified environmental projects that:</p>
        <ul id="projectBenefits">
          <li>Remove CO₂ from the atmosphere</li>
          <li>Support sustainable development</li>
          <li>Create environmental co-benefits</li>
        </ul>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelOffset">Cancel</button>
      <button class="modal-button eco" id="confirmOffset">Confirm Offset</button>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    // DOM elements
    const distanceInputs = document.querySelectorAll('.distance-input');
    const distanceOptions = document.querySelectorAll('.distance-option');
    const transportSelects = document.querySelectorAll('.option-select');
    const calcButtons = document.querySelectorAll('.calc-button');
    const alertContainer = document.getElementById('alertContainer');
    const resultsSection = document.getElementById('resultsSection');
    const offsetOptions = document.querySelectorAll('.offset-option');
    
    // Calculation options
    const carbonPrice = document.getElementById('carbonPrice');
    const travelPeriod = document.getElementById('travelPeriod');
    const includeAccommodation = document.getElementById('includeAccommodation');
    const includeMeals = document.getElementById('includeMeals');
    
    // Result elements
    const totalEmissionsElement = document.getElementById('totalEmissions');
    const offsetCostElement = document.getElementById('offsetCost');
    const equivalentTreesElement = document.getElementById('equivalentTrees');
    const carbonIntensityElement = document.getElementById('carbonIntensity');
    const resultEmissionsElement = document.getElementById('resultEmissions');
    const resultOffsetCostElement = document.getElementById('resultOffsetCost');
    const resultTreesElement = document.getElementById('resultTrees');
    const environmentalImpactElement = document.getElementById('environmentalImpact');
    const emissionsPeriodElement = document.getElementById('emissionsPeriod');
    const transportBreakdownElement = document.getElementById('transportBreakdown');
    const travelTipsElement = document.getElementById('travelTips');
    
    // Offset project elements
    const reforestationCostElement = document.getElementById('reforestationCost');
    const renewableCostElement = document.getElementById('renewableCost');
    const cookstovesCostElement = document.getElementById('cookstovesCost');
    
    // Modal elements
    const offsetModal = document.getElementById('offsetModal');
    const confirmEmissionsElement = document.getElementById('confirmEmissions');
    const confirmProjectElement = document.getElementById('confirmProject');
    const confirmCostElement = document.getElementById('confirmCost');
    const projectBenefitsElement = document.getElementById('projectBenefits');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelOffset = document.getElementById('cancelOffset');
    const confirmOffset = document.getElementById('confirmOffset');
    
    // Chart variable
    let emissionsChart = null;

    // Selected offset project
    let selectedProject = 'reforestation';

    // Emission factors (kg CO₂ per passenger km)
    const emissionFactors = {
      flight: 0.15, // Base for economy class, adjusted by class multiplier
      car: 0.15, // Base for medium petrol car
      train: 0.035, // Base for regional train
      bus: 0.08, // Base for local bus
      cruise: 0.25 // Base for standard cruise
    };

    // Event listeners
    distanceInputs.forEach(input => {
      input.addEventListener('input', updateCalculations);
    });

    distanceOptions.forEach(option => {
      option.addEventListener('click', function() {
        const distance = this.getAttribute('data-distance');
        const transportItem = this.closest('.transport-item');
        const input = transportItem.querySelector('.distance-input');
        input.value = distance;
        
        // Update active state
        const siblings = this.parentElement.querySelectorAll('.distance-option');
        siblings.forEach(sib => sib.classList.remove('active'));
        this.classList.add('active');
        
        updateCalculations();
      });
    });

    transportSelects.forEach(select => {
      select.addEventListener('change', updateCalculations);
    });

    carbonPrice.addEventListener('change', updateCalculations);
    travelPeriod.addEventListener('change', updateCalculations);

    calcButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleCalculation(action);
      });
    });

    offsetOptions.forEach(option => {
      option.addEventListener('click', function() {
        const project = this.getAttribute('data-project');
        selectOffsetProject(project);
      });
    });

    // Modal event listeners
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        offsetModal.style.display = 'none';
      });
    });

    cancelOffset.addEventListener('click', function() {
      offsetModal.style.display = 'none';
    });

    confirmOffset.addEventListener('click', function() {
      // In a real application, this would process the offset payment
      showAlert(`Thank you! Your carbon offset of ${confirmEmissionsElement.textContent} has been confirmed.`, 'success');
      offsetModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === offsetModal) {
        offsetModal.style.display = 'none';
      }
    });

    function updateCalculations() {
      const totalEmissions = calculateTotalEmissions();
      const offsetPrice = parseFloat(carbonPrice.value);
      const periodMultiplier = parseFloat(travelPeriod.value);
      
      // Calculate results
      const periodEmissions = totalEmissions * periodMultiplier;
      const offsetCost = (periodEmissions / 1000) * offsetPrice; // Convert kg to tons
      const equivalentTrees = Math.ceil(periodEmissions / 22); // Average tree absorbs 22kg CO₂ per year
      const carbonIntensity = getCarbonIntensity(periodEmissions);
      
      // Update counter displays
      totalEmissionsElement.textContent = `${formatNumber(periodEmissions)} kg`;
      offsetCostElement.textContent = `$${offsetCost.toFixed(2)}`;
      equivalentTreesElement.textContent = equivalentTrees;
      carbonIntensityElement.textContent = carbonIntensity;
      
      // Update offset project costs
      updateOffsetCosts(offsetCost);
    }

    function calculateTotalEmissions() {
      let total = 0;
      
      // Flight emissions
      const flightDistance = parseFloat(document.getElementById('flightDistance').value) || 0;
      const flightClass = parseFloat(document.getElementById('flightClass').value);
      total += flightDistance * emissionFactors.flight * flightClass * 1.9; // Include radiative forcing
      
      // Car emissions
      const carDistance = parseFloat(document.getElementById('carDistance').value) || 0;
      const carType = parseFloat(document.getElementById('carType').value);
      total += carDistance * carType;
      
      // Train emissions
      const trainDistance = parseFloat(document.getElementById('trainDistance').value) || 0;
      const trainType = parseFloat(document.getElementById('trainType').value);
      total += trainDistance * trainType;
      
      // Bus emissions
      const busDistance = parseFloat(document.getElementById('busDistance').value) || 0;
      const busType = parseFloat(document.getElementById('busType').value);
      total += busDistance * busType;
      
      // Cruise emissions
      const cruiseDistance = parseFloat(document.getElementById('cruiseDistance').value) || 0;
      const cruiseType = parseFloat(document.getElementById('cruiseType').value);
      total += cruiseDistance * cruiseType;
      
      // Accommodation emissions (if included)
      if (includeAccommodation.checked) {
        // Estimate based on travel distances and types
        const accommodationEmissions = (flightDistance + carDistance + trainDistance + busDistance + cruiseDistance) * 0.05;
        total += accommodationEmissions;
      }
      
      // Meal emissions (if included)
      if (includeMeals.checked) {
        const mealEmissions = (flightDistance + carDistance + trainDistance + busDistance + cruiseDistance) * 0.02;
        total += mealEmissions;
      }
      
      return total;
    }
    
    function getCarbonIntensity(emissions) {
      if (emissions < 100) return 'Very Low';
      if (emissions < 500) return 'Low';
      if (emissions < 2000) return 'Moderate';
      if (emissions < 5000) return 'High';
      return 'Very High';
    }
    
    function updateOffsetCosts(baseCost) {
      // Different offset projects have different cost structures
      reforestationCostElement.textContent = `$${baseCost.toFixed(2)}`;
      renewableCostElement.textContent = `$${(baseCost * 0.9).toFixed(2)}`;
      cookstovesCostElement.textContent = `$${(baseCost * 0.8).toFixed(2)}`;
    }
    
    function handleCalculation(action) {
      const totalEmissions = calculateTotalEmissions();
      
      if (action === 'calculate' && totalEmissions === 0) {
        showAlert('Please enter travel distances first.', 'error');
        return;
      }
      
      switch(action) {
        case 'calculate':
          calculateEmissions(totalEmissions);
          break;
          
        case 'save':
          saveCalculation();
          break;
          
        case 'compare':
          compareTransportMethods();
          break;
          
        case 'offset':
          showOffsetConfirmation(totalEmissions);
          break;
          
        case 'clear':
          clearAllData();
          return;
      }
    }
    
    function calculateEmissions(totalEmissions) {
      const offsetPrice = parseFloat(carbonPrice.value);
      const periodMultiplier = parseFloat(travelPeriod.value);
      const periodLabel = getPeriodLabel(periodMultiplier);
      
      // Calculate results
      const periodEmissions = totalEmissions * periodMultiplier;
      const offsetCost = (periodEmissions / 1000) * offsetPrice;
      const equivalentTrees = Math.ceil(periodEmissions / 22);
      const carbonIntensity = getCarbonIntensity(periodEmissions);
      
      // Update UI with results
      resultEmissionsElement.textContent = `${formatNumber(periodEmissions)} kg`;
      resultOffsetCostElement.textContent = `$${offsetCost.toFixed(2)}`;
      resultTreesElement.textContent = equivalentTrees;
      environmentalImpactElement.textContent = carbonIntensity;
      emissionsPeriodElement.textContent = periodLabel;
      
      // Update transport breakdown
      updateTransportBreakdown(periodMultiplier);
      
      // Update chart
      updateChart(periodMultiplier);
      
      // Generate travel tips
      generateTravelTips(totalEmissions, periodMultiplier);
      
      // Show results section
      resultsSection.style.display = 'block';
      
      // Scroll to results
      resultsSection.scrollIntoView({ behavior: 'smooth' });
      
      showAlert('Carbon emissions calculation completed!', 'success');
    }
    
    function getPeriodLabel(multiplier) {
      switch(multiplier) {
        case 1: return 'For this trip';
        case 4: return 'Per month';
        case 12: return 'Per year';
        default: return 'For this period';
      }
    }
    
    function updateTransportBreakdown(periodMultiplier) {
      let breakdownHTML = '';
      
      const transports = [
        { id: 'flightDistance', name: 'Flights', icon: '✈️' },
        { id: 'carDistance', name: 'Car', icon: '🚗' },
        { id: 'trainDistance', name: 'Train', icon: '🚆' },
        { id: 'busDistance', name: 'Bus', icon: '🚌' },
        { id: 'cruiseDistance', name: 'Cruise', icon: '🚢' }
      ];
      
      transports.forEach(transport => {
        const input = document.getElementById(transport.id);
        const distance = parseFloat(input.value) || 0;
        
        if (distance > 0) {
          let emissions = 0;
          
          // Calculate emissions for this transport type
          switch(transport.id) {
            case 'flightDistance':
              const flightClass = parseFloat(document.getElementById('flightClass').value);
              emissions = distance * emissionFactors.flight * flightClass * 1.9 * periodMultiplier;
              break;
            case 'carDistance':
              const carType = parseFloat(document.getElementById('carType').value);
              emissions = distance * carType * periodMultiplier;
              break;
            case 'trainDistance':
              const trainType = parseFloat(document.getElementById('trainType').value);
              emissions = distance * trainType * periodMultiplier;
              break;
            case 'busDistance':
              const busType = parseFloat(document.getElementById('busType').value);
              emissions = distance * busType * periodMultiplier;
              break;
            case 'cruiseDistance':
              const cruiseType = parseFloat(document.getElementById('cruiseType').value);
              emissions = distance * cruiseType * periodMultiplier;
              break;
          }
          
          breakdownHTML += `
            <div class="breakdown-item">
              <div class="breakdown-value">${formatNumber(emissions)} kg</div>
              <div class="breakdown-label">${transport.icon} ${transport.name}</div>
            </div>
          `;
        }
      });
      
      transportBreakdownElement.innerHTML = breakdownHTML || '<p>No transportation data entered.</p>';
    }
    
    function updateChart(periodMultiplier) {
      const ctx = document.getElementById('emissionsChart').getContext('2d');
      
      // Destroy previous chart if it exists
      if (emissionsChart) {
        emissionsChart.destroy();
      }
      
      // Prepare data for chart
      const labels = [];
      const data = [];
      const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
      
      const transports = [
        { id: 'flightDistance', name: 'Flights' },
        { id: 'carDistance', name: 'Car' },
        { id: 'trainDistance', name: 'Train' },
        { id: 'busDistance', name: 'Bus' },
        { id: 'cruiseDistance', name: 'Cruise' }
      ];
      
      transports.forEach((transport, index) => {
        const input = document.getElementById(transport.id);
        const distance = parseFloat(input.value) || 0;
        
        if (distance > 0) {
          labels.push(transport.name);
          
          let emissions = 0;
          switch(transport.id) {
            case 'flightDistance':
              const flightClass = parseFloat(document.getElementById('flightClass').value);
              emissions = distance * emissionFactors.flight * flightClass * 1.9 * periodMultiplier;
              break;
            case 'carDistance':
              const carType = parseFloat(document.getElementById('carType').value);
              emissions = distance * carType * periodMultiplier;
              break;
            case 'trainDistance':
              const trainType = parseFloat(document.getElementById('trainType').value);
              emissions = distance * trainType * periodMultiplier;
              break;
            case 'busDistance':
              const busType = parseFloat(document.getElementById('busType').value);
              emissions = distance * busType * periodMultiplier;
              break;
            case 'cruiseDistance':
              const cruiseType = parseFloat(document.getElementById('cruiseType').value);
              emissions = distance * cruiseType * periodMultiplier;
              break;
          }
          
          data.push(emissions);
        }
      });
      
      // Create new chart
      emissionsChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [{
            data: data,
            backgroundColor: colors,
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom'
            },
            title: {
              display: true,
              text: 'Emissions by Transportation Type'
            }
          }
        }
      });
    }
    
    function generateTravelTips(totalEmissions, periodMultiplier) {
      const periodEmissions = totalEmissions * periodMultiplier;
      let tips = '';
      
      if (periodEmissions > 5000) {
        tips = `
          <p><strong>High Impact Travel Detected</strong> - Consider these significant changes:</p>
          <ul>
            <li>Explore virtual alternatives for some business trips</li>
            <li>Combine multiple trips into longer, less frequent journeys</li>
            <li>Choose destinations closer to home for some vacations</li>
            <li>Invest in high-quality carbon offsets for unavoidable travel</li>
            <li>Advocate for sustainable travel policies in your organization</li>
          </ul>
        `;
      } else if (periodEmissions > 1000) {
        tips = `
          <p><strong>Moderate Impact Travel</strong> - These adjustments can help:</p>
          <ul>
            <li>Choose trains over planes for journeys under 800km</li>
            <li>Select non-stop flights to reduce takeoff/landing emissions</li>
            <li>Consider electric or hybrid rental cars</li>
            <li>Pack light to reduce weight-related fuel consumption</li>
            <li>Offset your remaining emissions through verified projects</li>
          </ul>
        `;
      } else {
        tips = `
          <p><strong>Low Impact Travel</strong> - Great job! Consider these enhancements:</p>
          <ul>
            <li>Continue choosing sustainable transportation options</li>
            <li>Share your sustainable travel practices with others</li>
            <li>Consider offsetting your emissions to become carbon neutral</li>
            <li>Support eco-friendly accommodations and tour operators</li>
            <li>Advocate for better public transportation infrastructure</li>
          </ul>
        `;
      }
      
      travelTipsElement.innerHTML = tips;
    }
    
    function selectOffsetProject(project) {
      selectedProject = project;
      
      // Update active state
      offsetOptions.forEach(option => {
        option.classList.remove('selected');
        if (option.getAttribute('data-project') === project) {
          option.classList.add('selected');
        }
      });
      
      // Update project benefits
      updateProjectBenefits(project);
      
      showAlert(`Selected offset project: ${getProjectName(project)}`, 'success');
    }
    
    function getProjectName(project) {
      const names = {
        reforestation: 'Reforestation',
        renewable: 'Renewable Energy',
        cookstoves: 'Clean Cookstoves'
      };
      return names[project] || 'Environmental Project';
    }
    
    function updateProjectBenefits(project) {
      let benefits = '';
      
      switch(project) {
        case 'reforestation':
          benefits = `
            <li>Plants trees that absorb CO₂ from the atmosphere</li>
            <li>Restores natural habitats and biodiversity</li>
            <li>Prevents soil erosion and improves water quality</li>
            <li>Provides sustainable livelihoods for local communities</li>
          `;
          break;
        case 'renewable':
          benefits = `
            <li>Funds solar and wind projects that replace fossil fuels</li>
            <li>Reduces air pollution and improves public health</li>
            <li>Creates green jobs in renewable energy sectors</li>
            <li>Accelerates the transition to clean energy</li>
          `;
          break;
        case 'cookstoves':
          benefits = `
            <li>Provides efficient cookstoves to families in need</li>
            <li>Reduces deforestation from fuelwood collection</li>
            <li>Improves indoor air quality and respiratory health</li>
            <li>Saves families time and money on fuel</li>
          `;
          break;
      }
      
      projectBenefitsElement.innerHTML = benefits;
    }
    
    function showOffsetConfirmation(totalEmissions) {
      if (totalEmissions === 0) {
        showAlert('Please calculate your emissions first.', 'error');
        return;
      }
      
      const offsetPrice = parseFloat(carbonPrice.value);
      const periodMultiplier = parseFloat(travelPeriod.value);
      const periodEmissions = totalEmissions * periodMultiplier;
      const offsetCost = (periodEmissions / 1000) * offsetPrice;
      
      // Apply project-specific discounts
      let finalCost = offsetCost;
      switch(selectedProject) {
        case 'renewable':
          finalCost = offsetCost * 0.9;
          break;
        case 'cookstoves':
          finalCost = offsetCost * 0.8;
          break;
      }
      
      confirmEmissionsElement.textContent = `${formatNumber(periodEmissions)} kg`;
      confirmProjectElement.textContent = getProjectName(selectedProject);
      confirmCostElement.textContent = `$${finalCost.toFixed(2)}`;
      
      updateProjectBenefits(selectedProject);
      
      offsetModal.style.display = 'block';
    }
    
    function saveCalculation() {
      const calculationData = {
        timestamp: new Date().toISOString(),
        totalEmissions: calculateTotalEmissions(),
        transport: {
          flight: parseFloat(document.getElementById('flightDistance').value) || 0,
          car: parseFloat(document.getElementById('carDistance').value) || 0,
          train: parseFloat(document.getElementById('trainDistance').value) || 0,
          bus: parseFloat(document.getElementById('busDistance').value) || 0,
          cruise: parseFloat(document.getElementById('cruiseDistance').value) || 0
        },
        carbonPrice: parseFloat(carbonPrice.value)
      };
      
      // In a real application, this would save to local storage or a database
      localStorage.setItem('carbonCalculationData', JSON.stringify(calculationData));
      showAlert('Your carbon calculation has been saved locally!', 'success');
    }
    
    function compareTransportMethods() {
      const distance = 500; // Compare for 500km journey
      
      const comparisons = [
        { name: 'Flight (Economy)', emissions: distance * emissionFactors.flight * 1 * 1.9 },
        { name: 'Car (Medium Petrol)', emissions: distance * 0.15 },
        { name: 'High-Speed Train', emissions: distance * 0.025 },
        { name: 'Coach Bus', emissions: distance * 0.03 },
        { name: 'Electric Car', emissions: distance * 0.00 }
      ];
      
      let comparisonHTML = '<p><strong>Emissions for 500km Journey:</strong></p><ul>';
      
      comparisons.forEach(method => {
        comparisonHTML += `<li><strong>${method.name}:</strong> ${formatNumber(method.emissions)} kg CO₂</li>`;
      });
      
      comparisonHTML += '</ul><p><em>Train and bus are the most climate-friendly options for medium distances.</em></p>';
      
      showAlert(comparisonHTML, 'info');
    }
    
    function clearAllData() {
      // Reset form values
      distanceInputs.forEach(input => {
        input.value = '';
      });
      
      // Clear active distance options
      document.querySelectorAll('.distance-option.active').forEach(option => {
        option.classList.remove('active');
      });
      
      // Reset selects to defaults
      document.getElementById('flightClass').value = '1.0';
      document.getElementById('carType').value = '0.15';
      document.getElementById('trainType').value = '0.035';
      document.getElementById('busType').value = '0.08';
      document.getElementById('cruiseType').value = '0.25';
      carbonPrice.value = '25';
      travelPeriod.value = '4';
      includeAccommodation.checked = true;
      includeMeals.checked = false;
      
      // Reset offset selection
      offsetOptions.forEach(option => {
        option.classList.remove('selected');
      });
      document.querySelector('.offset-option[data-project="reforestation"]').classList.add('selected');
      selectedProject = 'reforestation';
      
      // Reset results
      resultsSection.style.display = 'none';
      updateCalculations();
      
      showAlert('All data cleared successfully!', 'success');
    }

    function formatNumber(num) {
      return new Intl.NumberFormat('en-US').format(Math.round(num));
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
    
    // Initialize the calculator
    updateCalculations();
  });
</script>