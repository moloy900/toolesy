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

    <p>Let me ask you something real quick. Do you ever get to 2 PM and feel that familiar fog in your brain? Or maybe you wake up tired even after a full night's sleep, or you get random headaches that seem to come out of nowhere. Here's a guess: you're probably dehydrated. Not in the dramatic, "I haven't had a drop of water in three days" way. Just in the quiet, chronic, everyday way that most people don't even notice. The way that slowly drags down your energy, your focus, your mood, and even your skin. Here's the thing—most of us have no idea how much water we actually need. The old "8 glasses a day" advice is a decent starting point, but it's like telling everyone to wear the same shoe size. It doesn't work. A 50 kg office worker in a cool climate needs way less than a 90 kg athlete training in the summer heat. That's where our <strong>Water Intake Calculator</strong> comes in. It takes your weight, your activity level, your climate, and any special conditions (pregnancy, breastfeeding, etc.) and gives you a personalized daily hydration target. Not a random guess. Not a one-size-fits-all number. A target designed for your actual body and your actual life. Drink that amount, and you'll feel the difference—not overnight, but over weeks. Better energy, clearer thinking, healthier skin, smoother digestion. And yes, it's completely free, no sign-ups, no data collection. Just science-based hydration advice in your pocket.</p>

    <h3>How to Use This Water Intake Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Your Weight (Be Honest, It's Just Math):</strong> Your weight is the foundation of the calculation. You can enter in kilograms or pounds—the calculator handles both. If you're not sure, step on a scale. Don't guess, because every 5 kg changes your water needs by about 150-200 ml per day. That's a full glass of water. Weight matters.</li>
      <li><strong>Select Your Activity Level (Don't Cheat):</strong> This is where most people go wrong. They think "I went to the gym twice this week, so I'm active." But activity level in hydration science means how much you sweat on a typical day. Options range from Sedentary (little or no exercise, desk job) to Very Active (hard physical work or intense exercise daily) to Athlete (multiple workouts per day, endurance training). Be honest. If you overestimate, you'll be chugging water you don't need. If you underestimate, you'll be dehydrated. The calculator has a "plus" for each level: moderate activity adds about 500 ml to your baseline; heavy activity adds 1 liter or more.</li>
      <li><strong>Consider Climate Factors (Where Do You Live and Work?):</strong> Hot climates make you sweat even when you're not exercising. Humid climates prevent sweat from evaporating, so your body sweats even more to cool down. Dry climates (deserts, high altitudes) cause water loss through breathing. Select your climate: Cool/Temperate (indoor or mild weather), Hot Dry (desert, summer heat), Hot Humid (tropics, summer in humid regions), or Cold (cold climates actually reduce thirst sensation, but you still need water). The calculator adjusts your target by 10-30% depending on climate. This matters more than most people realize.</li>
      <li><strong>Account for Special Circumstances (Life Changes Your Needs):</strong> If you're pregnant, your body needs extra water to support increased blood volume, amniotic fluid, and the baby's development. The calculator adds about 300-500 ml per day. If you're breastfeeding, add even more—700-800 ml per day, because breast milk is mostly water and you're losing fluid constantly. If neither applies, skip this step. But don't skip it if it does apply—dehydration during pregnancy or breastfeeding is dangerous for both you and the baby.</li>
      <li><strong>Calculate & Implement (Now You Have a Goal):</strong> Click "Calculate Water Needs" and get your personalized hydration target in liters, ounces, and "glasses" (using 250 ml / 8 oz as a standard glass). The calculator also gives you a schedule: "Drink X glasses before lunch, Y glasses after lunch, Z glasses in the evening." This is key—most people know they should drink water, but without a schedule, they forget. Now you have a plan.</li>
    </ul>

    <h3>Real-Life Example & Use Case (Meet Amit):</h3>
    <p>Amit is a 32-year-old software developer in Bangalore. He weighs 75 kg (165 lbs), works from home, and exercises moderately—he runs 5 km three times a week and does yoga on other days. Bangalore has a mild climate (not too hot, not too humid). No pregnancy or breastfeeding (obviously). He uses the calculator.</p>
    <p>Baseline: 75 kg × 0.033 (the standard 33 ml per kg) = 2.48 liters. Activity adjustment: moderate exercise adds 500 ml → 2.98 liters. Climate: mild, no adjustment. Total: about 3 liters per day. That's 12 standard glasses (250 ml each).</p>
    <p>The calculator suggests a schedule: 4 glasses in the morning (before noon), 4 glasses in the afternoon, 4 glasses in the evening. Amit sets a reminder on his phone for every 90 minutes. Within a week, he notices he's less groggy at 3 PM. His recurrent headaches (which he thought were from screen time) disappear. His skin looks clearer. He's not running to the bathroom constantly—because he spread his intake out rather than chugging a liter at once. This is the difference between knowing a number and actually implementing a plan.</p>
    <p><strong>Contrast example:</strong> Priya is a 65 kg marathon runner in Chennai, where it's hot and humid almost year-round. She trains 10-12 hours per week. Her baseline is 65 × 0.033 = 2.15 liters. Activity level (athlete) adds 1.5 liters → 3.65 liters. Hot, humid climate adds another 20% → 4.4 liters. That's nearly double Amit's intake. She needs to drink constantly throughout her long runs, often with electrolytes. If she followed the "8 glasses a day" rule, she'd be dangerously dehydrated. Personalized targets save lives—literally, for endurance athletes.</p>

    <h3>Understanding Hydration Science (Why This Isn't Just Guesswork):</h3>
    <ul>
      <li><strong>Baseline Calculation (The 30-35 ml/kg Rule):</strong> This comes from decades of research on water turnover in the human body. Your body loses water constantly through urine, sweat, breathing, and digestion. The minimum to replace these losses is about 30 ml per kg of body weight. For a 70 kg person, that's 2.1 liters. For most people, 33 ml/kg is a safe, slightly generous baseline. The calculator uses 33 ml/kg as the default, but if you're sedentary and in a cool climate, you can be fine at 30. If you're active, you'll need 35 or more.</li>
      <li><strong>Exercise Impact (Sweat Loss Is Real):</strong> During one hour of moderate exercise, the average person loses 0.5 to 1.0 liters of water through sweat. In intense exercise (like running or HIIT), that can reach 1.5 to 2.0 liters per hour. The calculator adds 500 ml for moderate exercise, 1 liter for heavy exercise, and 1.5 liters for athlete-level training. But these are averages. If you sweat heavily (some people just do), you may need more. Pay attention to your body and your urine color (pale yellow = good, dark yellow = dehydrated, clear = possibly overhydrated).</li>
      <li><strong>Climate Adjustments (More Than Just "Feeling Hot"):</strong> In hot climates, your body sweats more to cool down, even at rest. Add 0.5 to 1 liter per day. In dry climates (deserts, high altitudes), you lose water through breathing because the air is dry and your lungs humidify it. Add 0.5 to 1 liter. In humid climates, sweat doesn't evaporate efficiently, so your body sweats even more to achieve the same cooling effect. Add 0.3 to 0.5 liters. The calculator's climate adjustments are based on physiological research, not guesses.</li>
      <li><strong>Special Conditions (Pregnancy & Breastfeeding):</strong> During pregnancy, blood volume increases by 40-50%, and amniotic fluid surrounds the baby. Both require water. The Institute of Medicine recommends an additional 300 ml per day during pregnancy and 700-800 ml per day during breastfeeding. These are not optional. Dehydration during pregnancy increases risks of low amniotic fluid, preterm labor, and neural tube defects. Breastfeeding dehydration reduces milk supply and can cause fatigue in the mother. The calculator adds these amounts automatically when you select the condition.</li>
      <li><strong>Other Fluid Sources (You Don't Have to Drink All Your Water):</strong> About 20-30% of daily hydration typically comes from food, especially fruits and vegetables (cucumbers, watermelon, oranges, lettuce are mostly water). Another 5-10% comes from other beverages (tea, coffee, milk, juice). So your "water to drink" target is about 70% of your total hydration need. The calculator accounts for this—it doesn't expect you to drink 4 liters of plain water if your total need is 4 liters. It subtracts the food and other beverage contribution automatically. That's why the number it gives you feels reasonable, not impossible.</li>
    </ul>

    <h3>Benefits & Who Should Use This Calculator (Pretty Much Everyone):</h3>
    <ul>
      <li><strong>Athletes & Fitness Enthusiasts:</strong> You lose massive amounts of water through sweat, and even 2% dehydration (which is barely noticeable) can reduce performance by 10-20%. That's the difference between a personal best and a disappointing workout. The calculator gives you a target for everyday hydration, plus you can add extra during workouts. Pro tip: weigh yourself before and after a workout. The difference (in kg) is how many liters of water you lost. Drink 1.5x that amount to rehydrate fully (because you'll also lose water through urine as you rehydrate).</li>
      <li><strong>Office Workers (You'd Be Surprised):</strong> Air conditioning and heating both dry out the air, increasing water loss through breathing. Plus, office workers tend to drink less because they're focused on tasks. Chronic mild dehydration in office settings is linked to reduced concentration, increased headaches, and lower productivity. The calculator's schedule feature is perfect for you—set reminders on your computer or phone. Drink one glass per hour. Your brain will thank you by 3 PM.</li>
      <li><strong>Pregnant & Breastfeeding Women:</strong> You're hydrating for two (or more). The stakes are higher. Dehydration during pregnancy can cause dizziness, contractions, and even hospitalization. Breastfeeding dehydration reduces milk supply and makes you exhausted. The calculator's special conditions adjustment is based on medical guidelines from the American College of Obstetricians and Gynecologists (ACOG). Use it. Show it to your doctor if you're unsure.</li>
      <li><strong>People Trying to Lose Weight:</strong> Water is a natural appetite suppressant. Drinking a glass of water 30 minutes before meals reduces calorie intake by about 75-100 calories per meal, on average. Over a week, that's 1,500-2,000 calories—nearly half a pound of fat loss without any other change. Plus, water boosts metabolism slightly (by about 25-30% for an hour after drinking). The calculator gives you a target, but for weight loss, try to front-load your water: drink more in the morning and before meals, less late at night so you don't wake up to pee.</li>
      <li><strong>Seniors (This One Is Important):</strong> As you age, your thirst sensation dulls. Many older adults are chronically dehydrated without feeling thirsty. They drink less, their urine becomes concentrated, and they're at higher risk for urinary tract infections, kidney stones, constipation, and falls (dehydration causes dizziness). The calculator is especially useful for seniors because it provides an objective target, not a subjective "feeling." If you're a senior or caring for one, use the calculator. Set a schedule. Stick to it.</li>
      <li><strong>Anyone With Skin Issues:</strong> Your skin is 64% water. Dehydrated skin looks dull, feels tight, and shows wrinkles more prominently. While drinking water isn't a magic cure for all skin problems, adequate hydration improves skin thickness, elasticity, and barrier function. The calculator's target, maintained for 2-4 weeks, will noticeably improve your skin's appearance. Combine with a humidifier if you live in a dry climate.</li>
    </ul>

    <h3>Frequently Asked Questions (Real Answers, Not Fluff):</h3>
    <p><strong>Can I drink too much water? Is overhydration real?</strong><br>
      Yes, but it's rare for healthy people. Overhydration (hyponatremia) happens when you drink so much water that you dilute the sodium in your blood to dangerous levels. Symptoms include nausea, headache, confusion, and in severe cases, seizures or coma. Who's at risk? Endurance athletes drinking excessive water without electrolytes (that's why marathoners drink sports drinks, not just water). Also people with certain kidney or hormonal conditions. For a healthy person drinking 3-4 liters spread throughout the day, overhydration is nearly impossible. Your kidneys can process about 1 liter per hour. Stick to the calculator's target and don't chug massive amounts at once. You'll be fine.</p>

    <p><strong>Do other beverages count toward my daily water intake? What about coffee, tea, soda?</strong><br>
      Yes, most non-alcoholic beverages contribute to hydration. Coffee and tea: the caffeine has a mild diuretic effect, but studies show that moderate consumption (3-4 cups daily) still counts toward hydration—the water in the drink outweighs the fluid loss from the diuretic effect. Soda, juice, milk: all count, but watch the sugar and calories. Sports drinks: useful during intense exercise lasting over an hour, but unnecessary for everyday hydration (they add sugar and calories). Alcohol: does NOT count. Alcohol is a diuretic and actually dehydrates you. For every alcoholic drink, drink an extra glass of water. The calculator's target is for "total fluid intake," but it assumes at least 60-70% comes from plain water. That's best for health and calorie control.</p>

    <p><strong>How does caffeine affect hydration? Do I need to drink extra water because of my morning coffee?</strong><br>
      For moderate caffeine intake (up to about 400 mg daily, roughly 4 cups of coffee), studies show no significant net fluid loss. Your body adjusts to regular caffeine intake. So no, you don't need to drink extra water to "offset" your coffee. However, if you drink a very large amount of caffeine (energy drinks, caffeine pills, many cups), the diuretic effect becomes noticeable. And if you don't consume caffeine regularly (once a week or less), it will have a stronger diuretic effect. But for most people, coffee and tea count as fluid, not a deficit. So feel free to count that morning mug toward your daily target.</p>

    <p><strong>Should I drink water even when I'm not thirsty? Isn't thirst enough?</strong><br>
      Thirst is a late indicator of dehydration. By the time you feel thirsty, you're already about 1-2% dehydrated—enough to impair cognitive and physical performance. For athletes, that's too late. For seniors, thirst sensation is blunted, so they never feel thirsty even when significantly dehydrated. For everyone else, relying on thirst means you're always playing catch-up. That's why the calculator gives you a target and a schedule. Drink proactively, not reactively. Spread your intake throughout the day. By the time you feel thirsty, you've already lost performance. Don't wait.</p>

    <p><strong>How do I know if I'm properly hydrated? What signs should I look for?</strong><br>
      The best real-time indicator is urine color. Pale yellow (like lemonade) = well hydrated. Dark yellow (like apple juice) = dehydrated. Clear = possibly overhydrated (or just drinking too fast). Aim for pale yellow. Other signs of good hydration: urinating 5-7 times per day, moist mouth and lips, good energy levels (not crashing at 2 PM), normal skin elasticity (pinch the skin on the back of your hand—it should snap back quickly). Signs of dehydration: dry mouth, dark urine, infrequent urination (less than 4 times daily), headache, fatigue, dizziness when standing up. If you have multiple signs, drink a liter of water slowly over the next hour and see how you feel. Usually, improvement is noticeable within 30 minutes.</p>

    <p><strong>Does drinking water really help with weight loss? Or is that a myth?</strong><br>
      It helps, but not magically. Water itself doesn't burn fat. But it helps in three ways. First, drinking water before meals fills your stomach, so you eat less. Studies show 75-100 fewer calories per meal, which adds up over weeks. Second, replacing sugary drinks (soda, juice, sweetened coffee) with water cuts hundreds of calories daily. Third, cold water slightly boosts metabolism because your body has to heat it to body temperature—about 25-30 calories per liter. That's not much, but over a year, it adds up to a few pounds. So no, water isn't a miracle weight loss pill. But combined with diet and exercise, it's a helpful, zero-calorie tool. The calculator's target is a good starting point for weight management.</p>

    <h3>The Science Behind Hydration (Why This Is Deeper Than "Drink More"):</h3>
    <p>Water makes up about 60% of the adult human body—but that percentage varies by age, sex, and body composition. Muscle is about 75% water; fat is about 10% water. So muscular people need more water than people with higher body fat, even at the same weight. The calculator's weight-based formula accounts for this indirectly (muscle weighs more than fat, so heavier muscular people get higher targets). Here's what water does inside you:</p>
    <ul>
      <li><strong>Regulates Body Temperature:</strong> When you're hot, your body sweats. Sweat evaporates, cooling your skin and blood. Without enough water, you can't sweat effectively, and you overheat. That's why dehydration during exercise is dangerous—it can lead to heat exhaustion or heat stroke.</li>
      <li><strong>Supports Cognitive Function (Brain Power):</strong> Your brain is 73% water. Even 1-2% dehydration impairs attention, short-term memory, and motor skills. Studies show that dehydrated drivers make as many errors as drivers with a blood alcohol level of 0.08% (legally drunk in many places). That's not a metaphor—it's a measured effect. Drink water for your brain as much as your body.</li>
      <li><strong>Aids Digestion (From Mouth to... You Know):</strong> Water helps break down food in the stomach, dissolves nutrients so they can be absorbed in the small intestine, and keeps things moving in the large intestine. Chronic dehydration is a leading cause of constipation. Increasing water intake is often the first line of treatment before laxatives.</li>
      <li><strong>Lubricates Joints:</strong> Your joints contain synovial fluid, which is mostly water. This fluid reduces friction between cartilage surfaces. Dehydration reduces synovial fluid volume and quality, potentially worsening joint pain, especially in people with arthritis.</li>
      <li><strong>Transports Nutrients (The Body's Delivery System):</strong> Your blood is 92% water. It carries oxygen to your cells, glucose to your brain, amino acids to your muscles, and hormones to your organs. Without adequate water, your blood thickens, your heart works harder, and delivery slows down. That's why dehydration makes you feel tired and weak—your cells aren't getting what they need.</li>
      <li><strong>Flushes Toxins (Kidney Function):</strong> Your kidneys filter waste from your blood and excrete it in urine. Without enough water, urine becomes concentrated, increasing the risk of kidney stones and urinary tract infections. Drinking adequate water is one of the best things you can do for long-term kidney health.</li>
    </ul>

    <h3>Advanced Hydration Tracking Features (For People Who Want to Go Deeper):</h3>
    <p>Our water intake calculator isn't just a one-time number generator. It's a hydration management system:</p>
    <ul>
      <li><strong>Personalized Scheduling (When to Drink):</strong> The calculator creates a schedule based on your waking hours. If you wake at 7 AM and sleep at 11 PM (16 hours), and need 3 liters, that's 188 ml per hour. The calculator suggests specific "drink times" and amounts. You can adjust based on your routine (more in morning, less before bed).</li>
      <li><strong>Progress Visualization (See Your Intake):</strong> The calculator includes a visual water level display that fills as you log your intake. It's surprisingly satisfying to watch the level rise. Gamification works for hydration too. You can set daily goals and watch your streak grow.</li>
      <li><strong>Multiple Container Sizes (Because Not Everyone Uses a Standard Glass):</strong> You can set your preferred container—water bottle (500 ml, 750 ml, 1 liter), coffee mug (300 ml), large glass (400 ml), small glass (200 ml). The calculator converts your target into "containers per day." For example, if your target is 3 liters and your water bottle is 750 ml, you need 4 bottles per day. Easy to track.</li>
      <li><strong>Reminder System (Because You'll Forget):</strong> The calculator can send gentle reminders (browser notifications, if you allow them) every 60-90 minutes. "Time to drink your next glass of water." Most people ignore their body's thirst cues, but a notification is hard to ignore. Use it for a week, and you'll build the habit.</li>
      <li><strong>Special Scenario Calculations (Exercise, Climate, Health):</strong> The calculator has presets for common scenarios: "I just finished a workout" (add 500 ml), "I'm traveling in a hot climate" (add 20%), "I have a fever" (add 500 ml per day, because fevers increase water loss), "I'm hungover" (dehydration is the main cause of hangover symptoms—drink 1 liter before bed and 1 liter when you wake up). These are practical, real-world adjustments.</li>
      <li><strong>Long-term Tracking (Build the Habit):</strong> The calculator stores your daily intake data locally (on your device, not our servers) so you can track your consistency over weeks and months. Are you hitting your target most days? If not, what's the barrier? The data helps you identify patterns (e.g., "I always forget to drink between 2-4 PM"). Then you can fix it.</li>
    </ul>

    <h3>One Final Thought (Hydration Is Boring But Powerful):</h3>
    <p>Let's be real: water is not exciting. It doesn't give you a caffeine buzz or a sugar rush. It's just... there. But that's exactly why it's so easy to neglect. You don't feel the effects of mild dehydration because they're gradual—a little less energy, a little less focus, a little more headache. You adjust to your new normal and forget that you used to feel better. The calculator is your wake-up call. Try it for two weeks. Drink exactly the target amount, spread across your day. At the end of two weeks, ask yourself: do I have more energy? Do I think more clearly? Are my headaches less frequent? For most people, the answer is yes. Not because water is magic, but because you've been running at 90% of your potential without realizing it. Hydration won't change your life overnight. But small, consistent improvements in energy and focus add up to a much better quality of life. So use the calculator. Set the reminders. Drink the water. Your future self—the one who isn't tired at 3 PM—will thank you.</p>
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