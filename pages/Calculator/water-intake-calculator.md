---
layout: default
title: "Water Intake Calculator – Daily Hydration Requirement"
permalink: /water-intake-calculator-calculate-your-daily-hydration-needs/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Water Intake Calculator – Daily Hydration Requirement</title>

<meta name="description" content="Free water intake calculator to find how much water you need daily based on weight, age, activity, and climate. Stay hydrated and boost overall health.">

<meta name="keywords" content="water intake calculator, daily water intake calculator, how much water should I drink, hydration calculator, water consumption calculator, health calculator hydration, fitness water calculator">

<meta name="author" content="ToolEsy">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://toolesy.com/water-intake-calculator-calculate-your-daily-hydration-needs/">

<!-- ✅ Open Graph Tags -->
<meta property="og:title" content="Daily Water Intake Calculator - Personalized Hydration Guide">
<meta property="og:description" content="Calculate your ideal daily water consumption based on your body needs. Stay hydrated & healthy!">
<meta property="og:url" content="https://toolesy.com/water-intake-calculator-calculate-your-daily-hydration-needs/">
<meta property="og:type" content="website">

<!-- ✅ Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Water Intake Calculator - How Much Water Do You Need Daily?">
<meta name="twitter:description" content="Instantly calculate your hydration needs based on weight, activity & more. Free & easy to use!">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Water Intake Calculator Styles */
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

  .hydration-stats-wrapper {
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

  .hydration-input-section {
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

  .hydration-results {
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

  .hydration-timeline {
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

  .water-intake-marker {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(0, 0, 0, 0.3);
  }

  .intake-label {
    position: absolute;
    top: -25px;
    font-size: 12px;
    color: #666;
    transform: translateX(-50%);
  }

  .water-fill {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: linear-gradient(to top, #4fc3f7, #29b6f6);
    transition: width 2s ease;
    border-radius: 8px;
  }

  .intake-schedule {
    margin: 30px 0;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .schedule-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
  }

  .schedule-table th,
  .schedule-table td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  .schedule-table th {
    background-color: #f8f9fa;
    font-weight: 600;
    color: var(--primary);
  }

  .schedule-table tr:hover {
    background-color: #f5f5f5;
  }

  .intake-completed {
    color: var(--success);
    font-weight: bold;
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

  /* Water glass visualization */
  .water-visualization {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 200px;
    margin: 20px 0;
    position: relative;
  }

  .water-glass {
    width: 100px;
    height: 180px;
    background: rgba(255, 255, 255, 0.8);
    border: 3px solid #4fc3f7;
    border-radius: 0 0 20px 20px;
    position: relative;
    overflow: hidden;
  }

  .water-level {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background: linear-gradient(to top, #4fc3f7, #29b6f6);
    transition: height 2s ease;
    border-radius: 0 0 17px 17px;
  }

  .water-markers {
    position: absolute;
    right: -30px;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .water-marker {
    font-size: 12px;
    color: #666;
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

  /* Water calculator specific styles */
  .hydration-options {
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

  /* Glass size selection */
  .glass-sizes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;
    margin: 15px 0;
  }

  .glass-size {
    padding: 10px;
    background: white;
    border: 2px solid #ddd;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .glass-size:hover {
    border-color: var(--primary);
  }

  .glass-size.selected {
    border-color: var(--primary);
    background: #e3f2fd;
  }

  .glass-amount {
    font-weight: bold;
    color: var(--primary);
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .hydration-stats-wrapper {
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

    .hydration-options {
      grid-template-columns: 1fr;
    }

    .hydration-input-section {
      grid-template-columns: 1fr;
    }

    .results-grid {
      grid-template-columns: 1fr;
    }

    .schedule-table {
      font-size: 14px;
    }

    .schedule-table th,
    .schedule-table td {
      padding: 8px;
    }

    .glass-sizes {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>

<div class="calculator-container">
  <h1>Water Intake Calculator</h1>
  <p class="welcome-message">Calculate your optimal daily water intake based on your weight, activity level, climate, and health factors. Stay properly hydrated for better health and performance.</p>

  <div class="calculator-section">
    <h2>Water Intake Calculator</h2>

    <div class="hydration-stats-wrapper">
      <div class="stat-item">
        <span>Recommended Intake: </span>
        <span id="recommendedIntake">0 ml</span>
      </div>
      <div class="stat-item">
        <span>Glasses per Day: </span>
        <span id="glassesPerDay">0</span>
      </div>
      <div class="stat-item">
        <span>Hydration Level: </span>
        <span id="hydrationLevel">Optimal</span>
      </div>
      <div class="stat-item">
        <span>Next Reminder: </span>
        <span id="nextReminder">--:--</span>
      </div>
    </div>

    <div class="hydration-input-section">
      <div class="input-group">
        <label class="input-label">Your Weight</label>
        <input type="number" id="weight" class="input-field" min="1" max="500" value="70" placeholder="Enter your weight">
        <select id="weightUnit" class="input-field">
          <option value="kg">kg</option>
          <option value="lbs">lbs</option>
        </select>
      </div>
      
      <div class="input-group">
        <label class="input-label">Activity Level</label>
        <select id="activityLevel" class="input-field">
          <option value="sedentary">Sedentary (little exercise)</option>
          <option value="light" selected>Light (1-3 days/week)</option>
          <option value="moderate">Moderate (3-5 days/week)</option>
          <option value="active">Active (6-7 days/week)</option>
          <option value="very-active">Very Active (twice/day)</option>
        </select>
      </div>
      
      <div class="input-group">
        <label class="input-label">Climate</label>
        <select id="climate" class="input-field">
          <option value="temperate">Temperate</option>
          <option value="hot" selected>Hot/Dry</option>
          <option value="humid">Hot/Humid</option>
          <option value="cold">Cold</option>
        </select>
      </div>

      <div class="input-group">
        <label class="input-label">Pregnancy/Breastfeeding</label>
        <select id="pregnancy" class="input-field">
          <option value="none" selected>None</option>
          <option value="pregnant">Pregnant</option>
          <option value="breastfeeding">Breastfeeding</option>
        </select>
      </div>
    </div>

    <div class="hydration-options">
      <div class="option-group">
        <label class="option-label">Water Intake Goal</label>
        <select id="waterGoal" class="option-select">
          <option value="maintenance">Maintenance</option>
          <option value="weight-loss" selected>Weight Loss</option>
          <option value="athletic-performance">Athletic Performance</option>
          <option value="detox">Detox/Cleanse</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Preferred Glass Size</label>
        <div class="glass-sizes">
          <div class="glass-size selected" data-size="250">
            <div class="glass-amount">250ml</div>
            <div class="result-label">Small</div>
          </div>
          <div class="glass-size" data-size="350">
            <div class="glass-amount">350ml</div>
            <div class="result-label">Medium</div>
          </div>
          <div class="glass-size" data-size="500">
            <div class="glass-amount">500ml</div>
            <div class="result-label">Large</div>
          </div>
        </div>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="includeOtherFluids" checked>
          <label for="includeOtherFluids">Include other fluids (tea, coffee, etc.)</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="showReminders" checked>
          <label for="showReminders">Show hydration reminders</label>
        </div>
      </div>
    </div>

    <div class="button-section">
      <button class="action-button" data-action="calculate">Calculate Water Needs</button>
      <button class="action-button" data-action="track">Track Today's Intake</button>
      <button class="action-button" data-action="reset">Reset</button>
      <button class="action-button success" data-action="save">Save Preferences</button>
      <button class="action-button warning" data-action="schedule">Create Schedule</button>
      <button class="action-button secondary" data-action="share">Share Results</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="hydration-results" id="hydrationResults" style="display: none;">
      <h3>Your Hydration Plan</h3>
      <div class="results-grid">
        <div class="result-card">
          <div class="result-label">Daily Water Intake</div>
          <div class="result-value" id="dailyIntake">0 ml</div>
          <div class="result-label" id="glassesCount">(0 glasses)</div>
        </div>
        <div class="result-card">
          <div class="result-label">Hourly Target</div>
          <div class="result-value" id="hourlyTarget">0 ml</div>
          <div class="result-label">per waking hour</div>
        </div>
        <div class="result-card">
          <div class="result-label">With Exercise</div>
          <div class="result-value" id="exerciseIntake">0 ml</div>
          <div class="result-label">on workout days</div>
        </div>
        <div class="result-card">
          <div class="result-label">Weekly Total</div>
          <div class="result-value" id="weeklyTotal">0 L</div>
          <div class="result-label">approximately</div>
        </div>
      </div>
    </div>

    <div class="water-visualization" id="waterVisualization" style="display: none;">
      <div class="water-glass">
        <div class="water-level" id="waterLevel"></div>
      </div>
      <div class="water-markers">
        <div class="water-marker">100%</div>
        <div class="water-marker">75%</div>
        <div class="water-marker">50%</div>
        <div class="water-marker">25%</div>
        <div class="water-marker">0%</div>
      </div>
    </div>

    <div class="hydration-timeline" id="hydrationTimeline" style="display: none;">
      <h3>Daily Hydration Progress</h3>
      <div class="progress-container">
        <div class="progress-label">
          <span>Today's Intake</span>
          <span id="progressPercentage">0%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" id="progressFill" style="width: 0%"></div>
        </div>
      </div>
      <div class="timeline">
        <div class="water-fill" id="waterFill"></div>
        <div class="water-intake-marker" style="left: 25%">
          <div class="intake-label">Morning</div>
        </div>
        <div class="water-intake-marker" style="left: 50%">
          <div class="intake-label">Afternoon</div>
        </div>
        <div class="water-intake-marker" style="left: 75%">
          <div class="intake-label">Evening</div>
        </div>
      </div>
    </div>

    <div class="intake-schedule" id="intakeSchedule" style="display: none;">
      <h3>Recommended Drinking Schedule</h3>
      <table class="schedule-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody id="scheduleBody">
          <!-- Schedule will be populated here -->
        </tbody>
      </table>
    </div>

   {% include share-and-donation.html %}

    <div class="recommendations">
      <h2>Hydration Tips & Recommendations</h2>
      
      <div class="recommendation-card">
        <h4>Start Your Day Right</h4>
        <p>Drink 1-2 glasses of water first thing in the morning to rehydrate after sleep and kickstart your metabolism.</p>
      </div>
      
      <div class="recommendation-card">
        <h4>Listen to Your Body</h4>
        <p>Thirst is a late indicator of dehydration. Drink water regularly throughout the day, not just when you feel thirsty.</p>
      </div>
      
      <div class="recommendation-card">
        <h4>Monitor Your Urine</h4>
        <p>Pale yellow urine usually indicates proper hydration. Dark yellow or amber-colored urine suggests you need more fluids.</p>
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Water Intake Calculator - Optimize Your Daily Hydration</h2>

    <p>Are you drinking enough water to support your health, energy levels, and overall wellbeing? Our free <strong>Water Intake Calculator</strong> helps you determine your ideal daily hydration needs based on scientific principles. Proper hydration is essential for maintaining bodily functions, supporting metabolism, improving cognitive performance, and promoting healthy skin. This comprehensive tool considers your unique factors including weight, activity level, climate conditions, and special circumstances like pregnancy or athletic training.</p>

    <h3>How to Use This Water Intake Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Your Weight:</strong> Start by entering your current weight in kilograms or pounds. Weight is the primary factor in determining baseline hydration needs.</li>
      <li><strong>Select Activity Level:</strong> Choose your typical activity level, as exercise significantly increases fluid requirements through sweat loss.</li>
      <li><strong>Consider Climate Factors:</strong> Select your climate conditions - hot, humid, or dry environments increase water needs, while cold climates may slightly reduce them.</li>
      <li><strong>Account for Special Circumstances:</strong> Indicate if you're pregnant or breastfeeding, as these conditions substantially increase hydration requirements.</li>
      <li><strong>Calculate & Implement:</strong> Click "Calculate Water Needs" to get your personalized hydration plan, then use the tracking features to monitor your daily intake.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're a 70kg (154 lbs) office worker who exercises moderately 3-5 times per week and lives in a hot climate. Our calculator would determine that you need approximately 2.8-3.2 liters of water daily. This breaks down to about 12-14 glasses of water (using 250ml glasses) spread throughout your waking hours. If you were training for a marathon in these conditions, your needs might increase to 4+ liters daily to compensate for significant sweat losses during intense workouts.</p>

    <h3>Understanding Hydration Science:</h3>
    <ul>
      <li><strong>Baseline Calculation:</strong> The standard recommendation is 30-35ml of water per kilogram of body weight, adjusted for individual factors.</li>
      <li><strong>Exercise Impact:</strong> Add 500-1000ml for moderate to intense exercise, depending on duration and intensity.</li>
      <li><strong>Climate Adjustments:</strong> Hot or dry climates can increase needs by 20-30%, while humid conditions might add 10-15%.</li>
      <li><strong>Special Conditions:</strong> Pregnancy increases needs by 300-500ml daily, while breastfeeding requires an additional 700-800ml.</li>
      <li><strong>Other Fluid Sources:</strong> About 20-30% of daily hydration typically comes from food and other beverages like tea, coffee, and milk.</li>
    </ul>

    <h3>Benefits & Who Should Use This Calculator:</h3>
    <ul>
      <li><strong>Athletes & Fitness Enthusiasts:</strong> Optimize performance and recovery by meeting increased hydration demands during training.</li>
      <li><strong>Office Workers:</strong> Combat dehydration from air-conditioned environments and long hours of mental focus.</li>
      <li><strong>Pregnant & Breastfeeding Women:</strong> Ensure adequate hydration for both maternal health and fetal development or milk production.</li>
      <li><strong>Weight Management:</strong> Use water as a natural appetite suppressant and metabolism booster in weight loss programs.</li>
      <li><strong>Health-Conscious Individuals:</strong> Maintain optimal hydration for skin health, digestion, and overall wellness.</li>
      <li><strong>Seniors:</strong> Address age-related changes in thirst perception that can lead to chronic dehydration.</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>Can I drink too much water?</strong><br>
      While rare, overhydration (hyponatremia) is possible, especially during endurance events. Stick to your calculated needs and increase gradually during extreme conditions.</p>

    <p><strong>Do other beverages count toward my daily water intake?</strong><br>
      Yes, most non-alcoholic beverages contribute to hydration. However, water should be your primary source as it's calorie-free and most effective.</p>

    <p><strong>How does caffeine affect hydration?</strong><br>
      While caffeine has mild diuretic effects, moderate consumption (3-4 cups daily) doesn't significantly impact overall hydration status.</p>

    <p><strong>Should I drink water even when I'm not thirsty?</strong><br>
      Yes, thirst is a late indicator of dehydration. It's better to drink regularly throughout the day rather than waiting until you feel thirsty.</p>

    <p><strong>How do I know if I'm properly hydrated?</strong><br>
      Signs of good hydration include pale yellow urine, regular urination (4-7 times daily), moist mouth and skin, and good energy levels.</p>

    <h3>The Science Behind Hydration</h3>
    <p>Water comprises about 60% of the adult human body and is involved in nearly every bodily function. Proper hydration:</p>
    <ul>
      <li><strong>Regulates Body Temperature:</strong> Through sweating and respiration</li>
      <li><strong>Supports Cognitive Function:</strong> Even mild dehydration can impair concentration and memory</li>
      <li><strong>Aids Digestion:</strong> Helps break down food and prevent constipation</li>
      <li><strong>Lubricates Joints:</strong> Water is a key component of synovial fluid</li>
      <li><strong>Transports Nutrients:</strong> Delivers essential compounds throughout the body</li>
      <li><strong>Flushes Toxins:</strong> Supports kidney function and waste elimination</li>
    </ul>

    <h3>Advanced Hydration Tracking Features</h3>
    <p>Our water intake calculator goes beyond basic calculations to provide comprehensive hydration management:</p>
    <ul>
      <li><strong>Personalized Scheduling:</strong> Creates optimal drinking schedules based on your daily routine</li>
      <li><strong>Progress Visualization:</strong> Tracks your daily intake with interactive progress bars and water level displays</li>
      <li><strong>Multiple Container Sizes:</strong> Accommodates different glass, bottle, and container sizes</li>
      <li><strong>Reminder System:</strong> Helps you maintain consistent hydration throughout the day</li>
      <li><strong>Special Scenario Calculations:</strong> Adjusts for exercise, climate, and health conditions</li>
      <li><strong>Long-term Tracking:</strong> Monitors your hydration patterns over time for better habit formation</li>
    </ul>
  </div>
</div>

<!-- Water Tracking Modal -->
<div id="trackingModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Track Water Intake</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div class="input-group">
        <label class="input-label">Amount Consumed</label>
        <input type="number" id="trackedAmount" class="input-field" min="1" max="1000" value="250">
        <select id="trackedUnit" class="input-field">
          <option value="ml">ml</option>
          <option value="oz">oz</option>
          <option value="cups">cups</option>
          <option value="glasses">glasses</option>
        </select>
      </div>
      <div class="input-group">
        <label class="input-label">Time of Consumption</label>
        <input type="time" id="trackedTime" class="input-field" value="">
      </div>
      <div class="input-group">
        <label class="input-label">Beverage Type</label>
        <select id="beverageType" class="input-field">
          <option value="water" selected>Water</option>
          <option value="herbal-tea">Herbal Tea</option>
          <option value="coffee">Coffee</option>
          <option value="tea">Tea</option>
          <option value="milk">Milk</option>
          <option value="juice">Juice</option>
          <option value="sports-drink">Sports Drink</option>
        </select>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelTracking">Cancel</button>
      <button class="modal-button primary" id="saveTracking">Save Entry</button>
    </div>
  </div>
</div>

<!-- Schedule Modal -->
<div id="scheduleModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Create Hydration Schedule</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div class="input-group">
        <label class="input-label">Wake-up Time</label>
        <input type="time" id="wakeupTime" class="input-field" value="07:00">
      </div>
      <div class="input-group">
        <label class="input-label">Bedtime</label>
        <input type="time" id="bedtime" class="input-field" value="23:00">
      </div>
      <div class="input-group">
        <label class="input-label">Reminder Frequency</label>
        <select id="reminderFrequency" class="input-field">
          <option value="60">Every hour</option>
          <option value="90" selected>Every 1.5 hours</option>
          <option value="120">Every 2 hours</option>
          <option value="180">Every 3 hours</option>
        </select>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelSchedule">Cancel</button>
      <button class="modal-button primary" id="generateSchedule">Generate Schedule</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const weightInput = document.getElementById('weight');
    const weightUnitSelect = document.getElementById('weightUnit');
    const activityLevelSelect = document.getElementById('activityLevel');
    const climateSelect = document.getElementById('climate');
    const pregnancySelect = document.getElementById('pregnancy');
    const waterGoalSelect = document.getElementById('waterGoal');
    const includeOtherFluidsCheckbox = document.getElementById('includeOtherFluids');
    const showRemindersCheckbox = document.getElementById('showReminders');
    
    const actionButtons = document.querySelectorAll('.action-button');
    const alertContainer = document.getElementById('alertContainer');
    const hydrationResults = document.getElementById('hydrationResults');
    const waterVisualization = document.getElementById('waterVisualization');
    const hydrationTimeline = document.getElementById('hydrationTimeline');
    const intakeSchedule = document.getElementById('intakeSchedule');
    
    // Glass size selection
    const glassSizes = document.querySelectorAll('.glass-size');
    
    // Modal elements
    const trackingModal = document.getElementById('trackingModal');
    const scheduleModal = document.getElementById('scheduleModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelTracking = document.getElementById('cancelTracking');
    const saveTracking = document.getElementById('saveTracking');
    const cancelSchedule = document.getElementById('cancelSchedule');
    const generateSchedule = document.getElementById('generateSchedule');

    // Water tracking data
    let waterData = JSON.parse(localStorage.getItem('waterData')) || {
      dailyIntake: 0,
      entries: [],
      preferences: {}
    };

    let selectedGlassSize = 250; // Default glass size

    // Initialize calculator
    initializeCalculator();

    // Event listeners
    weightInput.addEventListener('input', updateRecommendations);
    weightUnitSelect.addEventListener('change', updateRecommendations);
    
    actionButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleWaterAction(action);
      });
    });

    // Glass size selection
    glassSizes.forEach(glass => {
      glass.addEventListener('click', function() {
        glassSizes.forEach(g => g.classList.remove('selected'));
        this.classList.add('selected');
        selectedGlassSize = parseInt(this.getAttribute('data-size'));
        updateGlassCalculations();
      });
    });

    // Modal event listeners
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        trackingModal.style.display = 'none';
        scheduleModal.style.display = 'none';
      });
    });

    cancelTracking.addEventListener('click', function() {
      trackingModal.style.display = 'none';
    });

    saveTracking.addEventListener('click', function() {
      saveTrackingHandler();
    });

    cancelSchedule.addEventListener('click', function() {
      scheduleModal.style.display = 'none';
    });

    generateSchedule.addEventListener('click', function() {
      generateScheduleHandler();
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === trackingModal || event.target === scheduleModal) {
        trackingModal.style.display = 'none';
        scheduleModal.style.display = 'none';
      }
    });

    // Set current time for tracking
    document.getElementById('trackedTime').value = getCurrentTime();

    function initializeCalculator() {
      // Load saved preferences
      if (waterData.preferences.weight) {
        weightInput.value = waterData.preferences.weight;
      }
      if (waterData.preferences.weightUnit) {
        weightUnitSelect.value = waterData.preferences.weightUnit;
      }
      if (waterData.preferences.glassSize) {
        selectedGlassSize = waterData.preferences.glassSize;
        glassSizes.forEach(glass => {
          if (parseInt(glass.getAttribute('data-size')) === selectedGlassSize) {
            glass.classList.add('selected');
          } else {
            glass.classList.remove('selected');
          }
        });
      }
      
      updateRecommendations();
      updateDailyProgress();
    }

    function updateRecommendations() {
      // This function can be used to update real-time recommendations as user inputs change
      // For now, we'll just update the display when calculate is clicked
    }

    function updateGlassCalculations() {
      if (hydrationResults.style.display !== 'none') {
        const dailyIntake = parseFloat(document.getElementById('dailyIntake').textContent);
        const glasses = Math.ceil(dailyIntake / selectedGlassSize);
        document.getElementById('glassesCount').textContent = `(${glasses} glasses)`;
        document.getElementById('glassesPerDay').textContent = glasses;
      }
    }

    function handleWaterAction(action) {
      switch (action) {
        case 'calculate':
          calculateWaterNeeds();
          break;

        case 'track':
          trackingModal.style.display = 'block';
          break;

        case 'reset':
          if (confirm('Are you sure you want to reset all inputs?')) {
            weightInput.value = 70;
            weightUnitSelect.value = "kg";
            activityLevelSelect.value = "light";
            climateSelect.value = "hot";
            pregnancySelect.value = "none";
            waterGoalSelect.value = "weight-loss";
            updateRecommendations();
            hideAllResults();
            showAlert('Calculator reset successfully!', 'success');
          }
          break;

        case 'save':
          savePreferences();
          break;

        case 'schedule':
          scheduleModal.style.display = 'block';
          break;

        case 'share':
          shareResults();
          break;
      }
    }

    function calculateWaterNeeds() {
      const weight = parseFloat(weightInput.value);
      const weightUnit = weightUnitSelect.value;
      const activityLevel = activityLevelSelect.value;
      const climate = climateSelect.value;
      const pregnancy = pregnancySelect.value;
      const waterGoal = waterGoalSelect.value;
      
      if (!weight || weight <= 0) {
        showAlert('Please enter a valid weight.', 'error');
        return;
      }
      
      // Convert weight to kg if in lbs
      let weightKg = weight;
      if (weightUnit === 'lbs') {
        weightKg = weight * 0.453592;
      }
      
      // Base calculation: 30-35ml per kg of body weight
      let baseWater = weightKg * 33; // Average of 30-35ml
      
      // Adjust for activity level
      let activityMultiplier = 1.0;
      switch(activityLevel) {
        case 'sedentary':
          activityMultiplier = 0.9;
          break;
        case 'light':
          activityMultiplier = 1.0;
          break;
        case 'moderate':
          activityMultiplier = 1.2;
          break;
        case 'active':
          activityMultiplier = 1.4;
          break;
        case 'very-active':
          activityMultiplier = 1.6;
          break;
      }
      
      // Adjust for climate
      let climateMultiplier = 1.0;
      switch(climate) {
        case 'temperate':
          climateMultiplier = 1.0;
          break;
        case 'hot':
          climateMultiplier = 1.3;
          break;
        case 'humid':
          climateMultiplier = 1.2;
          break;
        case 'cold':
          climateMultiplier = 0.9;
          break;
      }
      
      // Adjust for pregnancy/breastfeeding
      let pregnancyAdjustment = 0;
      switch(pregnancy) {
        case 'pregnant':
          pregnancyAdjustment = 300; // ml
          break;
        case 'breastfeeding':
          pregnancyAdjustment = 700; // ml
          break;
      }
      
      // Adjust for water goal
      let goalMultiplier = 1.0;
      switch(waterGoal) {
        case 'maintenance':
          goalMultiplier = 1.0;
          break;
        case 'weight-loss':
          goalMultiplier = 1.1;
          break;
        case 'athletic-performance':
          goalMultiplier = 1.2;
          break;
        case 'detox':
          goalMultiplier = 1.15;
          break;
      }
      
      // Calculate final water needs
      let dailyWater = (baseWater * activityMultiplier * climateMultiplier * goalMultiplier) + pregnancyAdjustment;
      
      // Round to nearest 50ml
      dailyWater = Math.round(dailyWater / 50) * 50;
      
      // Calculate other metrics
      const hourlyTarget = Math.round(dailyWater / 16); // Assuming 16 waking hours
      const exerciseIntake = Math.round(dailyWater * 1.2); // 20% more on workout days
      const weeklyTotal = (dailyWater * 7 / 1000).toFixed(1);
      const glasses = Math.ceil(dailyWater / selectedGlassSize);
      
      // Update results
      document.getElementById('dailyIntake').textContent = `${dailyWater} ml`;
      document.getElementById('hourlyTarget').textContent = `${hourlyTarget} ml`;
      document.getElementById('exerciseIntake').textContent = `${exerciseIntake} ml`;
      document.getElementById('weeklyTotal').textContent = `${weeklyTotal} L`;
      document.getElementById('glassesCount').textContent = `(${glasses} glasses)`;
      
      // Update stats
      document.getElementById('recommendedIntake').textContent = `${dailyWater} ml`;
      document.getElementById('glassesPerDay').textContent = glasses;
      document.getElementById('hydrationLevel').textContent = getHydrationLevel(dailyWater, weightKg);
      
      // Show results
      hydrationResults.style.display = 'block';
      waterVisualization.style.display = 'flex';
      hydrationTimeline.style.display = 'block';
      
      // Update visualization
      updateWaterVisualization();
      
      showAlert('Water needs calculated successfully!', 'success');
    }

    function updateWaterVisualization() {
      const dailyIntake = parseFloat(document.getElementById('dailyIntake').textContent);
      const progressPercentage = Math.min(100, (waterData.dailyIntake / dailyIntake) * 100);
      
      // Update progress bar
      document.getElementById('progressFill').style.width = `${progressPercentage}%`;
      document.getElementById('progressPercentage').textContent = `${Math.round(progressPercentage)}%`;
      
      // Update water level in glass
      document.getElementById('waterLevel').style.height = `${progressPercentage}%`;
      
      // Update timeline fill
      document.getElementById('waterFill').style.width = `${progressPercentage}%`;
    }

    function updateDailyProgress() {
      // Reset daily intake if it's a new day
      const today = new Date().toDateString();
      if (waterData.lastUpdated !== today) {
        waterData.dailyIntake = 0;
        waterData.entries = [];
        waterData.lastUpdated = today;
        localStorage.setItem('waterData', JSON.stringify(waterData));
      }
      
      updateWaterVisualization();
      updateNextReminder();
    }

    function updateNextReminder() {
      if (showRemindersCheckbox.checked) {
        const now = new Date();
        const nextHour = new Date(now.getTime() + 60 * 60 * 1000);
        document.getElementById('nextReminder').textContent = nextHour.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
      } else {
        document.getElementById('nextReminder').textContent = 'Disabled';
      }
    }

    function getHydrationLevel(dailyWater, weightKg) {
      const mlPerKg = dailyWater / weightKg;
      if (mlPerKg >= 35) return 'Optimal';
      if (mlPerKg >= 25) return 'Good';
      if (mlPerKg >= 20) return 'Fair';
      return 'Needs Improvement';
    }

    function saveTrackingHandler() {
      const amount = parseFloat(document.getElementById('trackedAmount').value);
      const unit = document.getElementById('trackedUnit').value;
      const time = document.getElementById('trackedTime').value;
      const beverage = document.getElementById('beverageType').value;
      
      if (!amount || amount <= 0) {
        showAlert('Please enter a valid amount.', 'error');
        return;
      }
      
      // Convert to ml for consistent tracking
      let amountMl = amount;
      switch(unit) {
        case 'oz':
          amountMl = amount * 29.5735;
          break;
        case 'cups':
          amountMl = amount * 236.588;
          break;
        case 'glasses':
          amountMl = amount * selectedGlassSize;
          break;
      }
      
      // Add to daily intake
      waterData.dailyIntake += amountMl;
      waterData.entries.push({
        amount: amountMl,
        time: time,
        beverage: beverage,
        timestamp: new Date().toISOString()
      });
      
      // Save to localStorage
      localStorage.setItem('waterData', JSON.stringify(waterData));
      
      // Update UI
      updateWaterVisualization();
      
      trackingModal.style.display = 'none';
      showAlert(`Added ${Math.round(amountMl)}ml to your daily intake!`, 'success');
    }

    function generateScheduleHandler() {
      const wakeupTime = document.getElementById('wakeupTime').value;
      const bedtime = document.getElementById('bedtime').value;
      const frequency = parseInt(document.getElementById('reminderFrequency').value);
      
      const dailyIntake = parseFloat(document.getElementById('dailyIntake').textContent);
      const scheduleBody = document.getElementById('scheduleBody');
      scheduleBody.innerHTML = '';
      
      // Parse times
      const [wakeupHours, wakeupMinutes] = wakeupTime.split(':').map(Number);
      const [bedtimeHours, bedtimeMinutes] = bedtime.split(':').map(Number);
      
      let currentTime = new Date();
      currentTime.setHours(wakeupHours, wakeupMinutes, 0, 0);
      
      const endTime = new Date();
      endTime.setHours(bedtimeHours, bedtimeMinutes, 0, 0);
      
      const intervalMinutes = frequency;
      const amountPerInterval = Math.round(dailyIntake / (16 * 60 / frequency)); // Distribute over 16 waking hours
      
      while (currentTime < endTime) {
        const row = document.createElement('tr');
        const timeString = currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        row.innerHTML = `
          <td>${timeString}</td>
          <td>${amountPerInterval} ml</td>
          <td>Pending</td>
        `;
        
        scheduleBody.appendChild(row);
        
        // Add interval minutes
        currentTime.setMinutes(currentTime.getMinutes() + intervalMinutes);
      }
      
      intakeSchedule.style.display = 'block';
      scheduleModal.style.display = 'none';
      showAlert('Hydration schedule created successfully!', 'success');
    }

    function savePreferences() {
      waterData.preferences = {
        weight: weightInput.value,
        weightUnit: weightUnitSelect.value,
        activityLevel: activityLevelSelect.value,
        climate: climateSelect.value,
        pregnancy: pregnancySelect.value,
        waterGoal: waterGoalSelect.value,
        glassSize: selectedGlassSize,
        includeOtherFluids: includeOtherFluidsCheckbox.checked,
        showReminders: showRemindersCheckbox.checked
      };
      
      localStorage.setItem('waterData', JSON.stringify(waterData));
      showAlert('Preferences saved successfully!', 'success');
    }

    function shareResults() {
      const dailyIntake = document.getElementById('dailyIntake').textContent;
      const glasses = document.getElementById('glassesPerDay').textContent;
      
      const resultsText = `My daily water intake goal: ${dailyIntake} (${glasses} glasses)\nCalculated using Water Intake Calculator`;
      
      if (navigator.share) {
        navigator.share({
          title: 'My Water Intake Goal',
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
      hydrationResults.style.display = 'none';
      waterVisualization.style.display = 'none';
      hydrationTimeline.style.display = 'none';
      intakeSchedule.style.display = 'none';
    }

    // Utility functions
    function getCurrentTime() {
      const now = new Date();
      return now.toTimeString().slice(0, 5);
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