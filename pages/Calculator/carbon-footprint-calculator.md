---
layout: default
title: "Carbon Footprint Calculator - Calculate Your CO₂ Emissions"
permalink: /carbon-footprint-calculator-calculate-your-co-emissions/
---

<!-- Basic SEO Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Carbon Footprint Calculator | Free Online CO₂ Emissions Tool</title>

<meta name="description"
  content="Calculate your carbon footprint online for free. Estimate CO₂ emissions from travel, electricity, diet, and lifestyle.">

<meta name="keywords"
  content="carbon footprint calculator, CO2 emissions calculator, carbon calculator, environmental impact tool, climate change calculator, sustainability calculator, eco footprint, online carbon calculator">

<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Canonical URL -->
<link rel="canonical" href="https://toolesy.com/carbon-footprint-calculator-calculate-your-co-emissions" />

<!-- Open Graph Tags (Facebook / LinkedIn) -->
<meta property="og:title" content="Carbon Footprint Calculator - Free Online CO₂ Emissions Tool">
<meta property="og:description" content="Estimate your carbon footprint online. Track CO₂ emissions from travel, electricity, diet, and lifestyle. Get tips to live sustainably.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://toolesy.com/carbon-footprint-calculator-calculate-your-co-emissions">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Carbon Footprint Calculator | Online CO₂ Emissions Tool">
<meta name="twitter:description" content="Free online carbon footprint calculator. Estimate your CO₂ emissions and learn how to reduce your environmental impact.">


<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Carbon Footprint Calculator Styles */
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

  .emissions-stats-wrapper {
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

  .emissions-input-section {
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

  .emissions-results {
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

  .emissions-breakdown {
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

  .comparison-section {
    margin: 30px 0;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .comparison-bars {
    margin: 20px 0;
  }

  .comparison-item {
    display: flex;
    align-items: center;
    margin: 15px 0;
  }

  .comparison-label {
    width: 120px;
    font-weight: 600;
    color: #2c3e50;
  }

  .comparison-bar {
    flex: 1;
    height: 20px;
    background: #e9ecef;
    border-radius: 10px;
    overflow: hidden;
    margin: 0 15px;
    position: relative;
  }

  .comparison-fill {
    height: 100%;
    background: var(--primary);
    border-radius: 10px;
    transition: width 1s ease;
  }

  .comparison-value {
    width: 80px;
    text-align: right;
    font-weight: bold;
    color: #2c3e50;
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

  /* Emissions visualization */
  .emissions-visualization {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    margin: 20px 0;
    position: relative;
  }

  .earth-visual {
    width: 150px;
    height: 150px;
    background: linear-gradient(45deg, #4fc3f7, #29b6f6, #0288d1);
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .emissions-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(220, 53, 69, 0.3);
    border-radius: 50%;
    transition: all 1s ease;
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

  /* Carbon calculator specific styles */
  .emissions-options {
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

  /* Category tabs */
  .category-tabs {
    display: flex;
    gap: 10px;
    margin: 20px 0;
    flex-wrap: wrap;
  }

  .category-tab {
    padding: 12px 20px;
    background: white;
    border: 2px solid #ddd;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
    text-align: center;
    flex: 1;
    min-width: 120px;
  }

  .category-tab:hover {
    border-color: var(--primary);
  }

  .category-tab.active {
    border-color: var(--primary);
    background: var(--primary);
    color: white;
  }

  .category-content {
    display: none;
    padding: 20px;
    background: white;
    border-radius: 8px;
    margin-top: 10px;
  }

  .category-content.active {
    display: block;
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
    .emissions-stats-wrapper {
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

    .emissions-options {
      grid-template-columns: 1fr;
    }

    .emissions-input-section {
      grid-template-columns: 1fr;
    }

    .results-grid {
      grid-template-columns: 1fr;
    }

    .category-tabs {
      flex-direction: column;
    }

    .category-tab {
      min-width: auto;
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
  <h1>Carbon Footprint Calculator</h1>
  <p class="welcome-message">Calculate your carbon footprint from daily activities including travel, electricity usage, diet, and lifestyle choices. Get personalized recommendations to reduce your environmental impact.</p>

  <div class="calculator-section">
    <h2>Carbon Footprint Calculator</h2>

    <div class="emissions-stats-wrapper">
      <div class="stat-item">
        <span>Total CO₂ Emissions: </span>
        <span id="totalEmissions">0 kg</span>
      </div>
      <div class="stat-item">
        <span>Annual Equivalent: </span>
        <span id="annualEquivalent">0 tons</span>
      </div>
      <div class="stat-item">
        <span>Footprint Rating: </span>
        <span id="footprintRating">Low</span>
      </div>
      <div class="stat-item">
        <span>Global Average: </span>
        <span id="globalAverage">4.8 tons</span>
      </div>
    </div>

    <div class="category-tabs">
      <div class="category-tab active" data-category="transport">Transport</div>
      <div class="category-tab" data-category="energy">Home Energy</div>
      <div class="category-tab" data-category="diet">Diet</div>
      <div class="category-tab" data-category="lifestyle">Lifestyle</div>
    </div>

    <!-- Transport Category -->
    <div class="category-content active" id="transport-content">
      <div class="emissions-input-section">
        <div class="input-group">
          <label class="input-label">Car Travel (km/week)</label>
          <input type="number" id="carTravel" class="input-field" min="0" value="100" placeholder="km per week">
          <select id="carType" class="input-field">
            <option value="small">Small Car</option>
            <option value="medium" selected>Medium Car</option>
            <option value="large">Large Car</option>
            <option value="electric">Electric Vehicle</option>
          </select>
        </div>
        
        <div class="input-group">
          <label class="input-label">Public Transport (km/week)</label>
          <input type="number" id="publicTransport" class="input-field" min="0" value="50" placeholder="km per week">
        </div>
        
        <div class="input-group">
          <label class="input-label">Flights (hours/year)</label>
          <input type="number" id="flightHours" class="input-field" min="0" value="5" placeholder="hours per year">
          <select id="flightType" class="input-field">
            <option value="short" selected>Short-haul</option>
            <option value="medium">Medium-haul</option>
            <option value="long">Long-haul</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Energy Category -->
    <div class="category-content" id="energy-content">
      <div class="emissions-input-section">
        <div class="input-group">
          <label class="input-label">Electricity Usage (kWh/month)</label>
          <input type="number" id="electricityUsage" class="input-field" min="0" value="300" placeholder="kWh per month">
          <select id="energySource" class="input-field">
            <option value="grid" selected>Grid Average</option>
            <option value="renewable">Renewable</option>
            <option value="coal">Coal-heavy</option>
            <option value="gas">Natural Gas</option>
          </select>
        </div>
        
        <div class="input-group">
          <label class="input-label">Heating Type</label>
          <select id="heatingType" class="input-field">
            <option value="natural-gas" selected>Natural Gas</option>
            <option value="electric">Electric</option>
            <option value="oil">Heating Oil</option>
            <option value="propane">Propane</option>
            <option value="none">None</option>
          </select>
        </div>
        
        <div class="input-group">
          <label class="input-label">Household Size</label>
          <input type="number" id="householdSize" class="input-field" min="1" max="10" value="3" placeholder="people">
        </div>
      </div>
    </div>

    <!-- Diet Category -->
    <div class="category-content" id="diet-content">
      <div class="emissions-input-section">
        <div class="input-group">
          <label class="input-label">Diet Type</label>
          <select id="dietType" class="input-field">
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="pescatarian">Pescatarian</option>
            <option value="meat-occasional">Meat - Occasional</option>
            <option value="meat-regular" selected>Meat - Regular</option>
            <option value="meat-heavy">Meat - Heavy</option>
          </select>
        </div>
        
        <div class="input-group">
          <label class="input-label">Food Waste</label>
          <select id="foodWaste" class="input-field">
            <option value="minimal">Minimal</option>
            <option value="moderate" selected>Moderate</option>
            <option value="significant">Significant</option>
          </select>
        </div>
        
        <div class="input-group">
          <label class="input-label">Local Food %</label>
          <select id="localFood" class="input-field">
            <option value="low">0-25%</option>
            <option value="medium" selected>26-50%</option>
            <option value="high">51-75%</option>
            <option value="very-high">76-100%</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Lifestyle Category -->
    <div class="category-content" id="lifestyle-content">
      <div class="emissions-input-section">
        <div class="input-group">
          <label class="input-label">Shopping Habits</label>
          <select id="shoppingHabits" class="input-field">
            <option value="minimal">Minimal</option>
            <option value="moderate" selected>Moderate</option>
            <option value="frequent">Frequent</option>
          </select>
        </div>
        
        <div class="input-group">
          <label class="input-label">Waste Production</label>
          <select id="wasteProduction" class="input-field">
            <option value="low">Low</option>
            <option value="medium" selected>Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        
        <div class="input-group">
          <label class="input-label">Recycling Rate</label>
          <select id="recyclingRate" class="input-field">
            <option value="none">0%</option>
            <option value="low">1-25%</option>
            <option value="medium" selected>26-50%</option>
            <option value="high">51-75%</option>
            <option value="very-high">76-100%</option>
          </select>
        </div>
      </div>
    </div>

    <div class="emissions-options">
      <div class="option-group">
        <label class="option-label">Calculation Scope</label>
        <select id="calculationScope" class="option-select">
          <option value="personal" selected>Personal Only</option>
          <option value="household">Entire Household</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Country/Region</label>
        <select id="countryRegion" class="option-select">
          <option value="global" selected>Global Average</option>
          <option value="us">United States</option>
          <option value="eu">European Union</option>
          <option value="asia">Asia</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="includeIndirect" checked>
          <label for="includeIndirect">Include indirect emissions</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="showComparisons" checked>
          <label for="showComparisons">Show comparisons</label>
        </div>
      </div>
    </div>

    <div class="button-section">
      <button class="action-button" data-action="calculate">Calculate Footprint</button>
      <button class="action-button" data-action="save">Save Scenario</button>
      <button class="action-button" data-action="reset">Reset</button>
      <button class="action-button success" data-action="offset">Carbon Offset</button>
      <button class="action-button warning" data-action="compare">Compare</button>
      <button class="action-button secondary" data-action="share">Share Results</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="emissions-results" id="emissionsResults" style="display: none;">
      <h3>Your Carbon Footprint Analysis</h3>
      <div class="results-grid">
        <div class="result-card">
          <div class="result-label">Daily CO₂ Emissions</div>
          <div class="result-value" id="dailyEmissions">0 kg</div>
          <div class="result-label">per person</div>
        </div>
        <div class="result-card">
          <div class="result-label">Annual Footprint</div>
          <div class="result-value" id="annualFootprint">0 tons</div>
          <div class="result-label">CO₂ equivalent</div>
        </div>
        <div class="result-card">
          <div class="result-label">Compared to Average</div>
          <div class="result-value" id="comparisonPercent">0%</div>
          <div class="result-label" id="comparisonText">of global average</div>
        </div>
        <div class="result-card">
          <div class="result-label">Offset Cost</div>
          <div class="result-value" id="offsetCost">$0</div>
          <div class="result-label">per year</div>
        </div>
      </div>
    </div>

    <div class="emissions-visualization" id="emissionsVisualization" style="display: none;">
      <div class="earth-visual">
        <div class="emissions-overlay" id="emissionsOverlay"></div>
      </div>
    </div>

    <div class="emissions-breakdown" id="emissionsBreakdown" style="display: none;">
      <h3>Emissions Breakdown</h3>
      <div class="breakdown-chart" id="breakdownChart">
        <!-- Chart bars will be populated here -->
      </div>
    </div>

    <div class="comparison-section" id="comparisonSection" style="display: none;">
      <h3>How You Compare</h3>
      <div class="comparison-bars">
        <div class="comparison-item">
          <div class="comparison-label">Your Footprint</div>
          <div class="comparison-bar">
            <div class="comparison-fill" id="yourFootprintBar" style="width: 0%"></div>
          </div>
          <div class="comparison-value" id="yourFootprintValue">0 tons</div>
        </div>
        <div class="comparison-item">
          <div class="comparison-label">Country Average</div>
          <div class="comparison-bar">
            <div class="comparison-fill" id="countryAverageBar" style="width: 0%"></div>
          </div>
          <div class="comparison-value" id="countryAverageValue">0 tons</div>
        </div>
        <div class="comparison-item">
          <div class="comparison-label">Global Average</div>
          <div class="comparison-bar">
            <div class="comparison-fill" id="globalAverageBar" style="width: 0%"></div>
          </div>
          <div class="comparison-value">4.8 tons</div>
        </div>
        <div class="comparison-item">
          <div class="comparison-label">Climate Target</div>
          <div class="comparison-bar">
            <div class="comparison-fill" id="climateTargetBar" style="width: 0%"></div>
          </div>
          <div class="comparison-value">2.0 tons</div>
        </div>
      </div>
    </div>

   {% include share-and-donation.html %}

    <div class="recommendations">
      <h2>Reduction Recommendations</h2>
      
      <div class="recommendation-card">
        <h4>Transportation</h4>
        <p>Consider switching to public transport, cycling, or walking for short trips. If you drive, carpooling and maintaining proper tire pressure can reduce emissions by 5-10%.</p>
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
        <h4>Home Energy</h4>
        <p>Switch to LED bulbs, use smart thermostats, and unplug electronics when not in use. Consider renewable energy options like solar panels if available in your area.</p>
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
        <h4>Diet & Food</h4>
        <p>Reducing meat consumption, especially beef and lamb, can significantly lower your food-related emissions. Buy local and seasonal produce to reduce transportation emissions.</p>
        <div class="impact-rating">
          <span>Impact:</span>
          <div class="impact-dot impact-high"></div>
          <div class="impact-dot impact-high"></div>
          <div class="impact-dot impact-high"></div>
          <div class="impact-dot impact-medium"></div>
          <div class="impact-dot impact-low"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
<div class="content-placeholder">

  <h2>Carbon Footprint Calculator – Understand and Reduce Your Environmental Impact</h2>

  <p>Every choice we make has an impact on the environment, from the way we travel and heat our homes to the food we eat and the products we purchase. A <strong>Carbon Footprint Calculator</strong> helps you measure that impact in a simple and understandable way. By estimating the amount of greenhouse gases produced through your daily activities, this calculator provides a clearer picture of how your lifestyle contributes to climate change and environmental sustainability.</p>

  <p>Many people want to live a more environmentally responsible life but are unsure where to begin. The first step is understanding your current impact. Once you know which activities generate the highest emissions, it becomes easier to identify practical changes that can significantly reduce your carbon footprint. Whether you are an individual, family, student, business professional, or sustainability enthusiast, this calculator offers valuable insights that can help guide your decisions.</p>

  <p>Our free <strong>Carbon Footprint Calculator</strong> evaluates emissions from major areas of everyday life, including transportation, household energy consumption, dietary habits, shopping behavior, and general lifestyle choices. The results are presented in a straightforward format, helping you understand where your emissions come from and what actions can make the biggest difference.</p>

  <h3>How to Use This Carbon Footprint Calculator (Step-by-Step)</h3>

  <p>The calculator is designed to be user-friendly and accessible even if you have no prior knowledge of carbon accounting. Follow these simple steps to estimate your environmental impact:</p>

  <ul>
    <li><strong>Choose a Category:</strong> Navigate through sections such as Transportation, Home Energy, Diet, and Lifestyle.</li>

    <li><strong>Provide Accurate Information:</strong> Enter details about your travel habits, household energy usage, food preferences, and consumption patterns.</li>

    <li><strong>Review Additional Settings:</strong> Some calculators allow regional adjustments and optional factors for improved accuracy.</li>

    <li><strong>Calculate Your Results:</strong> Click the calculate button to generate your estimated annual carbon footprint.</li>

    <li><strong>Analyze the Breakdown:</strong> View emissions by category to identify which activities contribute the most.</li>

    <li><strong>Explore Recommendations:</strong> Use personalized suggestions to reduce your environmental impact.</li>

    <li><strong>Track Progress Over Time:</strong> Recalculate periodically after making lifestyle changes to monitor improvements.</li>
  </ul>

  <h3>Real-Life Example & Use Case</h3>

  <p>Consider a professional who drives 25 kilometers to work each day, lives in an apartment with two family members, uses air conditioning during summer, eats meat several times per week, and frequently shops online. After entering this information into the calculator, their estimated annual carbon footprint might fall between 8 and 10 tons of CO₂ equivalent.</p>

  <p>The results may reveal that transportation accounts for nearly half of total emissions, while household electricity usage and dietary choices contribute most of the remaining amount. Armed with this information, the individual can focus on the changes that will have the greatest effect, such as carpooling, using public transportation, improving home energy efficiency, or reducing meat consumption.</p>

  <p>Without a carbon footprint assessment, many people assume that small actions like recycling alone will dramatically reduce emissions. While recycling is beneficial, the calculator often shows that transportation and energy use have a much larger influence on overall environmental impact.</p>

  <h3>What Is a Carbon Footprint?</h3>

  <p>A carbon footprint is the total amount of greenhouse gases released into the atmosphere as a result of human activities. These gases include:</p>

  <ul>
    <li><strong>Carbon Dioxide (CO₂):</strong> Produced primarily from burning fossil fuels.</li>

    <li><strong>Methane (CH₄):</strong> Released from agriculture, livestock, and waste decomposition.</li>

    <li><strong>Nitrous Oxide (N₂O):</strong> Generated from agricultural activities and industrial processes.</li>

    <li><strong>Fluorinated Gases:</strong> Used in refrigeration and certain industrial applications.</li>
  </ul>

  <p>To simplify comparisons, these gases are converted into a common unit called <strong>CO₂ equivalent (CO₂e)</strong>, which reflects their relative impact on global warming.</p>

  <h3>Major Sources of Personal Carbon Emissions</h3>

  <p>Most individual carbon footprints come from a combination of four major categories:</p>

  <ul>
    <li><strong>Transportation:</strong> Cars, motorcycles, buses, trains, rideshares, and air travel.</li>

    <li><strong>Home Energy:</strong> Electricity, natural gas, heating systems, cooling systems, and appliances.</li>

    <li><strong>Food & Diet:</strong> Production, transportation, storage, and disposal of food.</li>

    <li><strong>Consumer Goods & Services:</strong> Clothing, electronics, furniture, entertainment, and online shopping.</li>
  </ul>

  <p>Understanding the contribution of each category helps prioritize the most effective reduction strategies.</p>

  <h3>Transportation Emissions Explained</h3>

  <p>Transportation is often the largest source of emissions for many households. Fuel-powered vehicles release carbon dioxide whenever gasoline or diesel is burned. Longer commutes and frequent travel increase annual emissions significantly.</p>

  <p>Common transportation factors include:</p>

  <ul>
    <li><strong>Private Cars:</strong> One of the largest contributors to personal emissions.</li>

    <li><strong>Motorcycles:</strong> Generally lower emissions than cars but still contribute.</li>

    <li><strong>Public Transport:</strong> Usually results in lower emissions per passenger.</li>

    <li><strong>Air Travel:</strong> Among the most carbon-intensive activities on a per-trip basis.</li>

    <li><strong>Electric Vehicles:</strong> Lower emissions depending on electricity sources.</li>
  </ul>

  <p>The calculator estimates transportation emissions based on distance traveled, fuel type, and transportation methods used throughout the year.</p>

  <h3>Home Energy and Household Emissions</h3>

  <p>Every household consumes energy for lighting, cooking, heating, cooling, and operating appliances. The environmental impact depends largely on how that energy is generated.</p>

  <ul>
    <li><strong>Electricity Usage:</strong> Varies depending on the energy mix in your region.</li>

    <li><strong>Air Conditioning:</strong> Can significantly increase energy consumption.</li>

    <li><strong>Heating Systems:</strong> Gas and oil heating often produce substantial emissions.</li>

    <li><strong>Appliance Efficiency:</strong> Modern appliances generally consume less energy.</li>

    <li><strong>Renewable Energy:</strong> Solar and wind power reduce household carbon emissions.</li>
  </ul>

  <p>Even simple efficiency improvements can produce measurable reductions in annual emissions and energy bills.</p>

  <h3>The Environmental Impact of Food Choices</h3>

  <p>Food production requires land, water, transportation, packaging, and energy. Different foods have vastly different carbon footprints.</p>

  <ul>
    <li><strong>Red Meat:</strong> Generally has one of the highest environmental impacts.</li>

    <li><strong>Dairy Products:</strong> Contribute significant emissions due to livestock production.</li>

    <li><strong>Poultry & Fish:</strong> Typically lower than red meat but still impactful.</li>

    <li><strong>Plant-Based Foods:</strong> Usually produce fewer emissions per serving.</li>

    <li><strong>Local Foods:</strong> Can reduce transportation-related emissions.</li>
  </ul>

  <p>The calculator helps users understand how dietary choices influence overall environmental impact and identifies opportunities for improvement.</p>

  <h3>Lifestyle and Consumption Habits</h3>

  <p>Many emissions are hidden within the products and services we consume every day. Manufacturing, packaging, shipping, and disposal all contribute to a product's environmental footprint.</p>

  <ul>
    <li><strong>Clothing Purchases:</strong> Fast fashion generates substantial emissions and waste.</li>

    <li><strong>Electronics:</strong> Manufacturing electronic devices requires significant resources.</li>

    <li><strong>Furniture & Home Goods:</strong> Production and transportation add to emissions.</li>

    <li><strong>Online Shopping:</strong> Frequent deliveries increase transportation impacts.</li>

    <li><strong>Waste Generation:</strong> Landfills produce methane emissions over time.</li>
  </ul>

  <h3>Benefits & Who Should Use This Tool?</h3>

  <ul>
    <li><strong>Environmentally Conscious Individuals:</strong> Understand and reduce personal emissions.</li>

    <li><strong>Families:</strong> Measure household impact and create sustainability goals.</li>

    <li><strong>Students:</strong> Learn practical applications of environmental science.</li>

    <li><strong>Teachers:</strong> Demonstrate sustainability concepts using real-world examples.</li>

    <li><strong>Businesses:</strong> Encourage employee awareness and environmental responsibility.</li>

    <li><strong>Researchers:</strong> Explore behavioral factors that influence emissions.</li>

    <li><strong>Community Organizations:</strong> Promote sustainable living initiatives.</li>
  </ul>

  <h3>Frequently Asked Questions</h3>

  <p><strong>What is considered a low carbon footprint?</strong><br>
  A lower carbon footprint depends on regional conditions, but many climate experts suggest that long-term sustainability goals require emissions of approximately 2 tons of CO₂e per person annually.</p>

  <p><strong>How accurate is a carbon footprint calculator?</strong><br>
  Carbon footprint calculators provide estimates based on recognized emission factors and average consumption data. Results offer useful guidance even though exact emissions may vary.</p>

  <p><strong>Can one person really make a difference?</strong><br>
  Yes. Individual actions collectively influence demand, energy consumption, transportation systems, and environmental policies.</p>

  <p><strong>Do renewable energy sources eliminate emissions completely?</strong><br>
  Renewable energy dramatically reduces operational emissions, although manufacturing and infrastructure still have some environmental impact.</p>

  <p><strong>How often should I calculate my carbon footprint?</strong><br>
  Many people review their footprint annually or after making significant lifestyle changes to track progress.</p>

  <h3>The Science Behind Carbon Footprint Calculations</h3>

  <p>Carbon footprint assessments rely on environmental data collected from scientific studies, government agencies, and international organizations. These datasets provide standardized emission factors that estimate greenhouse gas emissions associated with various activities.</p>

  <ul>
    <li><strong>Fuel Emission Factors:</strong> Estimate emissions per liter of fuel consumed.</li>

    <li><strong>Electricity Factors:</strong> Reflect emissions generated per unit of electricity used.</li>

    <li><strong>Food Production Data:</strong> Measure emissions associated with agricultural processes.</li>

    <li><strong>Manufacturing Assessments:</strong> Evaluate environmental costs of producing goods.</li>

    <li><strong>Transportation Models:</strong> Estimate emissions based on travel distance and vehicle type.</li>
  </ul>

  <h3>Practical Ways to Reduce Your Carbon Footprint</h3>

  <p>Once you understand your emissions profile, you can take targeted actions to lower it:</p>

  <ul>
    <li><strong>Drive Less:</strong> Use public transportation, cycling, or walking whenever possible.</li>

    <li><strong>Improve Home Efficiency:</strong> Upgrade insulation, lighting, and appliances.</li>

    <li><strong>Reduce Energy Waste:</strong> Turn off unused electronics and optimize heating and cooling.</li>

    <li><strong>Choose Sustainable Foods:</strong> Increase plant-based meals and reduce food waste.</li>

    <li><strong>Buy Less, Buy Better:</strong> Invest in durable products instead of disposable alternatives.</li>

    <li><strong>Support Renewable Energy:</strong> Consider green electricity plans or solar installations.</li>

    <li><strong>Recycle Responsibly:</strong> Proper waste management reduces landfill emissions.</li>
  </ul>

  <h3>Why Choose Our Carbon Footprint Calculator?</h3>

  <p>Our <strong>Carbon Footprint Calculator</strong> is designed to make environmental awareness practical and actionable. Instead of providing a single number without context, it breaks emissions into meaningful categories so users can clearly identify where changes will have the greatest effect.</p>

  <p>The calculator is suitable for beginners and experienced sustainability advocates alike. Results are easy to understand, calculations are completed instantly, and all processing occurs directly within your browser for privacy and convenience. Whether your goal is reducing household emissions, supporting corporate sustainability initiatives, or simply learning more about environmental responsibility, this tool provides a valuable starting point.</p>

  <p>Measuring your carbon footprint is not about perfection. It is about awareness, informed decision-making, and continuous improvement. Small actions performed consistently by millions of people can create meaningful environmental benefits. By understanding your emissions today, you can make smarter choices tomorrow and contribute to a more sustainable future for generations to come.</p>

</div>
</div>

<!-- Save Scenario Modal -->
<div id="saveModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Save Carbon Footprint Scenario</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div class="input-group">
        <label class="input-label">Scenario Name</label>
        <input type="text" id="scenarioName" class="input-field" placeholder="e.g., Current Footprint">
      </div>
      <div class="input-group">
        <label class="input-label">Description (Optional)</label>
        <textarea id="scenarioDescription" class="input-field" rows="3" placeholder="Notes about this scenario"></textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelSave">Cancel</button>
      <button class="modal-button primary" id="confirmSave">Save Scenario</button>
    </div>
  </div>
</div>

<!-- Carbon Offset Modal -->
<div id="offsetModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Carbon Offset Options</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div class="result-card">
        <div class="result-label">Your Annual Emissions</div>
        <div class="result-value" id="offsetEmissions">0 tons</div>
      </div>
      
      <div class="input-group">
        <label class="input-label">Offset Project Type</label>
        <select id="offsetProject" class="input-field">
          <option value="reforestation">Reforestation</option>
          <option value="renewable">Renewable Energy</option>
          <option value="efficiency">Energy Efficiency</option>
          <option value="methane">Methane Capture</option>
        </select>
      </div>
      
      <div class="input-group">
        <label class="input-label">Offset Percentage</label>
        <select id="offsetPercentage" class="input-field">
          <option value="25">25%</option>
          <option value="50">50%</option>
          <option value="75">75%</option>
          <option value="100" selected>100%</option>
        </select>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelOffset">Cancel</button>
      <button class="modal-button primary" id="confirmOffset">Calculate Offset</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const categoryTabs = document.querySelectorAll('.category-tab');
    const categoryContents = document.querySelectorAll('.category-content');
    
    // Transport inputs
    const carTravelInput = document.getElementById('carTravel');
    const carTypeSelect = document.getElementById('carType');
    const publicTransportInput = document.getElementById('publicTransport');
    const flightHoursInput = document.getElementById('flightHours');
    const flightTypeSelect = document.getElementById('flightType');
    
    // Energy inputs
    const electricityUsageInput = document.getElementById('electricityUsage');
    const energySourceSelect = document.getElementById('energySource');
    const heatingTypeSelect = document.getElementById('heatingType');
    const householdSizeInput = document.getElementById('householdSize');
    
    // Diet inputs
    const dietTypeSelect = document.getElementById('dietType');
    const foodWasteSelect = document.getElementById('foodWaste');
    const localFoodSelect = document.getElementById('localFood');
    
    // Lifestyle inputs
    const shoppingHabitsSelect = document.getElementById('shoppingHabits');
    const wasteProductionSelect = document.getElementById('wasteProduction');
    const recyclingRateSelect = document.getElementById('recyclingRate');
    
    // Options
    const calculationScopeSelect = document.getElementById('calculationScope');
    const countryRegionSelect = document.getElementById('countryRegion');
    const includeIndirectCheckbox = document.getElementById('includeIndirect');
    const showComparisonsCheckbox = document.getElementById('showComparisons');
    
    const actionButtons = document.querySelectorAll('.action-button');
    const alertContainer = document.getElementById('alertContainer');
    const emissionsResults = document.getElementById('emissionsResults');
    const emissionsVisualization = document.getElementById('emissionsVisualization');
    const emissionsBreakdown = document.getElementById('emissionsBreakdown');
    const comparisonSection = document.getElementById('comparisonSection');
    
    // Modal elements
    const saveModal = document.getElementById('saveModal');
    const offsetModal = document.getElementById('offsetModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelSave = document.getElementById('cancelSave');
    const confirmSave = document.getElementById('confirmSave');
    const cancelOffset = document.getElementById('cancelOffset');
    const confirmOffset = document.getElementById('confirmOffset');

    // Carbon data storage
    let carbonData = JSON.parse(localStorage.getItem('carbonData')) || {
      scenarios: [],
      preferences: {}
    };

    // Initialize calculator
    initializeCalculator();

    // Event listeners
    categoryTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        switchCategory(category);
      });
    });
    
    actionButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleCarbonAction(action);
      });
    });

    // Modal event listeners
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        saveModal.style.display = 'none';
        offsetModal.style.display = 'none';
      });
    });

    cancelSave.addEventListener('click', function() {
      saveModal.style.display = 'none';
    });

    confirmSave.addEventListener('click', function() {
      saveScenarioHandler();
    });

    cancelOffset.addEventListener('click', function() {
      offsetModal.style.display = 'none';
    });

    confirmOffset.addEventListener('click', function() {
      calculateOffsetHandler();
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === saveModal || event.target === offsetModal) {
        saveModal.style.display = 'none';
        offsetModal.style.display = 'none';
      }
    });

    function initializeCalculator() {
      // Load saved preferences
      if (carbonData.preferences.countryRegion) {
        countryRegionSelect.value = carbonData.preferences.countryRegion;
      }
      
      updateGlobalAverage();
    }

    function switchCategory(category) {
      // Update active tab
      categoryTabs.forEach(tab => {
        if (tab.getAttribute('data-category') === category) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });
      
      // Update active content
      categoryContents.forEach(content => {
        if (content.id === `${category}-content`) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
    }

    function updateGlobalAverage() {
      // Set global average based on country selection
      const country = countryRegionSelect.value;
      let average = 4.8; // Global average in tons
      
      switch(country) {
        case 'us':
          average = 16.0;
          break;
        case 'eu':
          average = 6.4;
          break;
        case 'asia':
          average = 4.2;
          break;
        case 'global':
        default:
          average = 4.8;
      }
      
      document.getElementById('globalAverage').textContent = `${average.toFixed(1)} tons`;
    }

    function handleCarbonAction(action) {
      switch (action) {
        case 'calculate':
          calculateCarbonFootprint();
          break;

        case 'save':
          saveModal.style.display = 'block';
          break;

        case 'reset':
          if (confirm('Are you sure you want to reset all inputs?')) {
            resetAllInputs();
            hideAllResults();
            showAlert('Calculator reset successfully!', 'success');
          }
          break;

        case 'offset':
          offsetModal.style.display = 'block';
          break;

        case 'compare':
          // Already shown in calculate
          break;

        case 'share':
          shareResults();
          break;
      }
    }

    function calculateCarbonFootprint() {
      // Calculate emissions from each category
      const transportEmissions = calculateTransportEmissions();
      const energyEmissions = calculateEnergyEmissions();
      const dietEmissions = calculateDietEmissions();
      const lifestyleEmissions = calculateLifestyleEmissions();
      
      // Calculate total emissions
      let totalEmissions = transportEmissions + energyEmissions + dietEmissions + lifestyleEmissions;
      
      // Adjust for household size if calculating per person
      if (calculationScopeSelect.value === 'household') {
        const householdSize = parseInt(householdSizeInput.value) || 1;
        totalEmissions = totalEmissions / householdSize;
      }
      
      // Convert to annual (from daily/weekly/monthly calculations)
      const annualEmissions = totalEmissions * 365;
      const dailyEmissions = totalEmissions;
      
      // Convert kg to tons
      const annualTons = annualEmissions / 1000;
      const dailyKg = dailyEmissions;
      
      // Get comparison data
      const country = countryRegionSelect.value;
      let countryAverage = 4.8; // tons
      switch(country) {
        case 'us': countryAverage = 16.0; break;
        case 'eu': countryAverage = 6.4; break;
        case 'asia': countryAverage = 4.2; break;
      }
      
      const comparisonPercent = (annualTons / countryAverage) * 100;
      const footprintRating = getFootprintRating(annualTons);
      const offsetCost = calculateOffsetCost(annualTons);
      
      // Update results
      document.getElementById('totalEmissions').textContent = `${dailyKg.toFixed(1)} kg`;
      document.getElementById('annualEquivalent').textContent = `${annualTons.toFixed(1)} tons`;
      document.getElementById('footprintRating').textContent = footprintRating;
      
      document.getElementById('dailyEmissions').textContent = `${dailyKg.toFixed(1)} kg`;
      document.getElementById('annualFootprint').textContent = `${annualTons.toFixed(1)} tons`;
      document.getElementById('comparisonPercent').textContent = `${comparisonPercent.toFixed(0)}%`;
      document.getElementById('comparisonText').textContent = `of ${country.toUpperCase()} average`;
      document.getElementById('offsetCost').textContent = `$${offsetCost.toFixed(2)}`;
      
      // Update visualization
      updateEmissionsVisualization(annualTons);
      
      // Update breakdown chart
      updateBreakdownChart(transportEmissions, energyEmissions, dietEmissions, lifestyleEmissions);
      
      // Update comparisons
      updateComparisons(annualTons, countryAverage);
      
      // Show results
      emissionsResults.style.display = 'block';
      emissionsVisualization.style.display = 'flex';
      emissionsBreakdown.style.display = 'block';
      comparisonSection.style.display = 'block';
      
      showAlert('Carbon footprint calculated successfully!', 'success');
    }

    function calculateTransportEmissions() {
      let total = 0;
      
      // Car emissions (kg CO₂ per km)
      const carTravel = parseFloat(carTravelInput.value) || 0;
      const carType = carTypeSelect.value;
      let carEmissionFactor = 0.2; // kg CO₂ per km
      
      switch(carType) {
        case 'small': carEmissionFactor = 0.15; break;
        case 'medium': carEmissionFactor = 0.2; break;
        case 'large': carEmissionFactor = 0.3; break;
        case 'electric': carEmissionFactor = 0.05; break;
      }
      
      total += carTravel * carEmissionFactor;
      
      // Public transport emissions (kg CO₂ per km)
      const publicTransport = parseFloat(publicTransportInput.value) || 0;
      const publicTransportFactor = 0.05; // kg CO₂ per km
      total += publicTransport * publicTransportFactor;
      
      // Flight emissions (kg CO₂ per hour)
      const flightHours = parseFloat(flightHoursInput.value) || 0;
      const flightType = flightTypeSelect.value;
      let flightEmissionFactor = 90; // kg CO₂ per hour
      
      switch(flightType) {
        case 'short': flightEmissionFactor = 90; break;
        case 'medium': flightEmissionFactor = 150; break;
        case 'long': flightEmissionFactor = 250; break;
      }
      
      // Convert annual flight hours to daily equivalent
      total += (flightHours * flightEmissionFactor) / 365;
      
      return total;
    }

    function calculateEnergyEmissions() {
      let total = 0;
      
      // Electricity emissions (kg CO₂ per kWh)
      const electricityUsage = parseFloat(electricityUsageInput.value) || 0;
      const energySource = energySourceSelect.value;
      let electricityFactor = 0.5; // kg CO₂ per kWh
      
      switch(energySource) {
        case 'grid': electricityFactor = 0.5; break;
        case 'renewable': electricityFactor = 0.05; break;
        case 'coal': electricityFactor = 1.0; break;
        case 'gas': electricityFactor = 0.4; break;
      }
      
      // Convert monthly to daily
      total += (electricityUsage * electricityFactor) / 30;
      
      // Heating emissions (kg CO₂ per day)
      const heatingType = heatingTypeSelect.value;
      let heatingEmissions = 5; // kg CO₂ per day
      
      switch(heatingType) {
        case 'natural-gas': heatingEmissions = 5; break;
        case 'electric': heatingEmissions = 8; break;
        case 'oil': heatingEmissions = 7; break;
        case 'propane': heatingEmissions = 6; break;
        case 'none': heatingEmissions = 0; break;
      }
      
      total += heatingEmissions;
      
      return total;
    }

    function calculateDietEmissions() {
      const dietType = dietTypeSelect.value;
      let baseEmissions = 5; // kg CO₂ per day
      
      switch(dietType) {
        case 'vegan': baseEmissions = 2.5; break;
        case 'vegetarian': baseEmissions = 3.5; break;
        case 'pescatarian': baseEmissions = 4.0; break;
        case 'meat-occasional': baseEmissions = 4.5; break;
        case 'meat-regular': baseEmissions = 5.0; break;
        case 'meat-heavy': baseEmissions = 7.5; break;
      }
      
      // Food waste adjustment
      const foodWaste = foodWasteSelect.value;
      let wasteMultiplier = 1.0;
      switch(foodWaste) {
        case 'minimal': wasteMultiplier = 0.8; break;
        case 'moderate': wasteMultiplier = 1.0; break;
        case 'significant': wasteMultiplier = 1.3; break;
      }
      
      // Local food adjustment
      const localFood = localFoodSelect.value;
      let localMultiplier = 1.0;
      switch(localFood) {
        case 'low': localMultiplier = 1.1; break;
        case 'medium': localMultiplier = 1.0; break;
        case 'high': localMultiplier = 0.9; break;
        case 'very-high': localMultiplier = 0.8; break;
      }
      
      return baseEmissions * wasteMultiplier * localMultiplier;
    }

    function calculateLifestyleEmissions() {
      let total = 0;
      
      // Shopping habits
      const shoppingHabits = shoppingHabitsSelect.value;
      let shoppingEmissions = 2; // kg CO₂ per day
      switch(shoppingHabits) {
        case 'minimal': shoppingEmissions = 1; break;
        case 'moderate': shoppingEmissions = 2; break;
        case 'frequent': shoppingEmissions = 4; break;
      }
      
      total += shoppingEmissions;
      
      // Waste production
      const wasteProduction = wasteProductionSelect.value;
      let wasteEmissions = 1; // kg CO₂ per day
      switch(wasteProduction) {
        case 'low': wasteEmissions = 0.5; break;
        case 'medium': wasteEmissions = 1; break;
        case 'high': wasteEmissions = 2; break;
      }
      
      // Recycling adjustment
      const recyclingRate = recyclingRateSelect.value;
      let recyclingMultiplier = 1.0;
      switch(recyclingRate) {
        case 'none': recyclingMultiplier = 1.0; break;
        case 'low': recyclingMultiplier = 0.9; break;
        case 'medium': recyclingMultiplier = 0.8; break;
        case 'high': recyclingMultiplier = 0.7; break;
        case 'very-high': recyclingMultiplier = 0.6; break;
      }
      
      total += wasteEmissions * recyclingMultiplier;
      
      return total;
    }

    function getFootprintRating(annualTons) {
      if (annualTons < 3) return 'Excellent';
      if (annualTons < 6) return 'Good';
      if (annualTons < 10) return 'Average';
      if (annualTons < 15) return 'High';
      return 'Very High';
    }

    function calculateOffsetCost(annualTons) {
      // Average cost of carbon offsets: $10-20 per ton
      return annualTons * 15;
    }

    function updateEmissionsVisualization(annualTons) {
      const emissionsOverlay = document.getElementById('emissionsOverlay');
      
      // Scale overlay based on emissions (max at 20 tons)
      const maxEmissions = 20;
      const overlayIntensity = Math.min(annualTons / maxEmissions, 1);
      
      emissionsOverlay.style.opacity = overlayIntensity;
      emissionsOverlay.style.background = `rgba(220, 53, 69, ${overlayIntensity * 0.7})`;
    }

    function updateBreakdownChart(transport, energy, diet, lifestyle) {
      const breakdownChart = document.getElementById('breakdownChart');
      breakdownChart.innerHTML = '';
      
      const categories = [
        { name: 'Transport', value: transport, color: '#e74c3c' },
        { name: 'Energy', value: energy, color: '#3498db' },
        { name: 'Diet', value: diet, color: '#2ecc71' },
        { name: 'Lifestyle', value: lifestyle, color: '#f39c12' }
      ];
      
      const total = transport + energy + diet + lifestyle;
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

    function updateComparisons(yourTons, countryAverage) {
      const maxTons = 20; // For scaling the bars
      
      // Your footprint
      const yourPercentage = (yourTons / maxTons) * 100;
      document.getElementById('yourFootprintBar').style.width = `${yourPercentage}%`;
      document.getElementById('yourFootprintValue').textContent = `${yourTons.toFixed(1)} tons`;
      
      // Country average
      const countryPercentage = (countryAverage / maxTons) * 100;
      document.getElementById('countryAverageBar').style.width = `${countryPercentage}%`;
      document.getElementById('countryAverageValue').textContent = `${countryAverage.toFixed(1)} tons`;
      
      // Global average (fixed at 4.8 tons)
      const globalPercentage = (4.8 / maxTons) * 100;
      document.getElementById('globalAverageBar').style.width = `${globalPercentage}%`;
      
      // Climate target (fixed at 2.0 tons)
      const targetPercentage = (2.0 / maxTons) * 100;
      document.getElementById('climateTargetBar').style.width = `${targetPercentage}%`;
    }

    function saveScenarioHandler() {
      const scenarioName = document.getElementById('scenarioName').value;
      const scenarioDescription = document.getElementById('scenarioDescription').value;
      
      if (!scenarioName) {
        showAlert('Please enter a scenario name.', 'error');
        return;
      }
      
      // Create scenario object
      const scenario = {
        name: scenarioName,
        description: scenarioDescription,
        timestamp: new Date().toISOString(),
        data: getCurrentInputs()
      };
      
      carbonData.scenarios.push(scenario);
      localStorage.setItem('carbonData', JSON.stringify(carbonData));
      
      saveModal.style.display = 'none';
      showAlert('Scenario saved successfully!', 'success');
    }

    function calculateOffsetHandler() {
      const annualTons = parseFloat(document.getElementById('annualFootprint').textContent);
      const offsetPercentage = parseInt(document.getElementById('offsetPercentage').value);
      const projectType = document.getElementById('offsetProject').value;
      
      const offsetTons = annualTons * (offsetPercentage / 100);
      const offsetCost = offsetTons * 15; // $15 per ton
      
      document.getElementById('offsetEmissions').textContent = `${offsetTons.toFixed(1)} tons`;
      
      showAlert(`Offsetting ${offsetPercentage}% would cost approximately $${offsetCost.toFixed(2)} annually.`, 'success');
      offsetModal.style.display = 'none';
    }

    function getCurrentInputs() {
      return {
        transport: {
          carTravel: carTravelInput.value,
          carType: carTypeSelect.value,
          publicTransport: publicTransportInput.value,
          flightHours: flightHoursInput.value,
          flightType: flightTypeSelect.value
        },
        energy: {
          electricityUsage: electricityUsageInput.value,
          energySource: energySourceSelect.value,
          heatingType: heatingTypeSelect.value,
          householdSize: householdSizeInput.value
        },
        diet: {
          dietType: dietTypeSelect.value,
          foodWaste: foodWasteSelect.value,
          localFood: localFoodSelect.value
        },
        lifestyle: {
          shoppingHabits: shoppingHabitsSelect.value,
          wasteProduction: wasteProductionSelect.value,
          recyclingRate: recyclingRateSelect.value
        },
        options: {
          calculationScope: calculationScopeSelect.value,
          countryRegion: countryRegionSelect.value,
          includeIndirect: includeIndirectCheckbox.checked,
          showComparisons: showComparisonsCheckbox.checked
        }
      };
    }

    function resetAllInputs() {
      // Reset transport
      carTravelInput.value = 100;
      carTypeSelect.value = 'medium';
      publicTransportInput.value = 50;
      flightHoursInput.value = 5;
      flightTypeSelect.value = 'short';
      
      // Reset energy
      electricityUsageInput.value = 300;
      energySourceSelect.value = 'grid';
      heatingTypeSelect.value = 'natural-gas';
      householdSizeInput.value = 3;
      
      // Reset diet
      dietTypeSelect.value = 'meat-regular';
      foodWasteSelect.value = 'moderate';
      localFoodSelect.value = 'medium';
      
      // Reset lifestyle
      shoppingHabitsSelect.value = 'moderate';
      wasteProductionSelect.value = 'medium';
      recyclingRateSelect.value = 'medium';
      
      // Reset options
      calculationScopeSelect.value = 'personal';
      countryRegionSelect.value = 'global';
      includeIndirectCheckbox.checked = true;
      showComparisonsCheckbox.checked = true;
    }

    function shareResults() {
      const annualFootprint = document.getElementById('annualFootprint').textContent;
      const footprintRating = document.getElementById('footprintRating').textContent;
      const comparisonPercent = document.getElementById('comparisonPercent').textContent;
      
      const resultsText = `My carbon footprint: ${annualFootprint} annually (${footprintRating} impact)\n${comparisonPercent} of average - calculated with Carbon Footprint Calculator`;
      
      if (navigator.share) {
        navigator.share({
          title: 'My Carbon Footprint',
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
      emissionsResults.style.display = 'none';
      emissionsVisualization.style.display = 'none';
      emissionsBreakdown.style.display = 'none';
      comparisonSection.style.display = 'none';
    }

    // Utility functions
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