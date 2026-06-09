---
layout: default
title: "Sleep Cycle Calculator – Find Your Best Bed & Wake Time"
permalink: /sleep-cycle-calculator-calculate-your-optimal-bedtime-wake-up-time/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Sleep Cycle Calculator – Find Your Best Bed & Wake Time</title>

<meta name="description"
  content="Free sleep cycle calculator to find the ideal bedtime and wake-up time for deeper sleep, more REM, and better morning energy. Improve your sleep schedule easily.">

<meta name="keywords"
  content="sleep cycle calculator, bedtime calculator, sleep calculator, wake up time calculator, REM sleep calculator, deep sleep calculator, how to sleep better, circadian rhythm calculator, optimal sleep time">

<meta name="author" content="ToolEsy.com">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://toolesy.com/sleep-cycle-calculator-calculate-your-optimal-bedtime-wake-up-time">

<!-- ✅ Open Graph / Facebook -->
<meta property="og:title" content="Best Sleep Cycle Calculator | Optimal Bedtime & Wake-up Time">
<meta property="og:description" content="Find the best time to sleep & wake up using natural sleep cycles for better energy and focus.">
<meta property="og:url" content="https://toolesy.com/sleep-cycle-calculator-calculate-your-optimal-bedtime-wake-up-time">
<meta property="og:type" content="website">

<!-- ✅ Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Sleep Cycle Calculator | Best Bedtime for Quality Sleep">
<meta name="twitter:description" content="Improve REM sleep, deep sleep & wake up refreshed.">


<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Sleep Cycle Calculator Styles */
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

  .sleep-stats-wrapper {
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

  .sleep-input-section {
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

  .sleep-results {
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

  .sleep-stages {
    margin: 30px 0;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .stage-visualization {
    display: flex;
    height: 80px;
    margin: 20px 0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .stage {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 0.8rem;
    text-align: center;
    transition: all 0.3s ease;
  }

  .stage:hover {
    transform: scale(1.05);
    z-index: 2;
  }

  .stage-n1 { background: #3498db; }
  .stage-n2 { background: #2980b9; }
  .stage-n3 { background: #1f618d; }
  .stage-rem { background: #9b59b6; }

  .stage-labels {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 12px;
    color: #666;
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

  /* Sleep cycle timeline */
  .sleep-timeline {
    margin: 30px 0;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .timeline {
    position: relative;
    height: 100px;
    background: linear-gradient(90deg, #e3f2fd, #bbdefb);
    border-radius: 8px;
    margin: 20px 0;
    overflow: hidden;
  }

  .cycle-marker {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(0, 0, 0, 0.3);
  }

  .cycle-label {
    position: absolute;
    top: -25px;
    font-size: 12px;
    color: #666;
    transform: translateX(-50%);
  }

  .rem-period {
    position: absolute;
    height: 30px;
    background: #9b59b6;
    border-radius: 4px;
    top: 35px;
    opacity: 0.7;
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

  /* Sleep calculator specific styles */
  .sleep-options {
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

  /* Alarm times display */
  .alarm-times {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
  }

  .alarm-time-card {
    padding: 15px;
    background: white;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border: 2px solid transparent;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .alarm-time-card:hover {
    border-color: var(--primary);
    transform: translateY(-2px);
  }

  .alarm-time-card.recommended {
    border-color: var(--success);
    background: #f8fff9;
  }

  .alarm-time {
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--primary);
    margin: 10px 0;
  }

  .cycles-count {
    font-size: 0.9rem;
    color: #666;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .sleep-stats-wrapper {
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

    .sleep-options {
      grid-template-columns: 1fr;
    }

    .sleep-input-section {
      grid-template-columns: 1fr;
    }

    .results-grid {
      grid-template-columns: 1fr;
    }

    .alarm-times {
      grid-template-columns: 1fr;
    }

    .stage-visualization {
      height: 60px;
    }

    .stage {
      font-size: 0.7rem;
    }
  }
</style>

<div class="calculator-container">
  <h1>Sleep Cycle Calculator</h1>
  <p class="welcome-message">Calculate your optimal bedtime and wake-up times based on sleep science. Wake up feeling refreshed by timing your alarm with your sleep cycles.</p>

  <div class="calculator-section">
    <h2>Sleep Cycle Calculator</h2>

    <div class="sleep-stats-wrapper">
      <div class="stat-item">
        <span>Optimal Sleep Duration: </span>
        <span id="optimalSleep">7-9 hours</span>
      </div>
      <div class="stat-item">
        <span>Sleep Cycle Length: </span>
        <span id="cycleLength">90 minutes</span>
      </div>
      <div class="stat-item">
        <span>Recommended Cycles: </span>
        <span id="recommendedCycles">5-6 cycles</span>
      </div>
      <div class="stat-item">
        <span>REM Sleep %: </span>
        <span id="remPercentage">20-25%</span>
      </div>
    </div>

    <div class="sleep-input-section">
      <div class="input-group">
        <label class="input-label">Your Age</label>
        <input type="number" id="age" class="input-field" min="1" max="120" value="30" placeholder="Enter your age">
      </div>
      
      <div class="input-group">
        <label class="input-label">Bedtime or Wake-up Time</label>
        <input type="time" id="sleepTime" class="input-field" value="23:00">
      </div>
      
      <div class="input-group">
        <label class="input-label">Calculate For</label>
        <select id="calculationType" class="input-field">
          <option value="wake-up">Wake-up Times</option>
          <option value="bedtime">Bedtime</option>
        </select>
      </div>

      <div class="input-group">
        <label class="input-label">Sleep Cycle Duration</label>
        <select id="cycleDuration" class="input-field">
          <option value="90">90 minutes (Average)</option>
          <option value="85">85 minutes (Light Sleeper)</option>
          <option value="95">95 minutes (Deep Sleeper)</option>
          <option value="100">100 minutes (Teenager)</option>
        </select>
      </div>
    </div>

    <div class="sleep-options">
      <div class="option-group">
        <label class="option-label">Sleep Goal</label>
        <select id="sleepGoal" class="option-select">
          <option value="balanced">Balanced (5-6 cycles)</option>
          <option value="minimal">Minimal (4 cycles)</option>
          <option value="optimal">Optimal (6 cycles)</option>
          <option value="recovery">Recovery (7+ cycles)</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Include Fall-Asleep Time</label>
        <select id="fallAsleepTime" class="option-select">
          <option value="15">15 minutes</option>
          <option value="20" selected>20 minutes</option>
          <option value="30">30 minutes</option>
          <option value="45">45 minutes</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="adjustAge" checked>
          <label for="adjustAge">Adjust for age-specific needs</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="showStages" checked>
          <label for="showStages">Show sleep stages breakdown</label>
        </div>
      </div>
    </div>

    <div class="button-section">
      <button class="action-button" data-action="calculate">Calculate Sleep Cycles</button>
      <button class="action-button" data-action="setAlarm">Set Alarm Times</button>
      <button class="action-button" data-action="reset">Reset</button>
      <button class="action-button success" data-action="save">Save Preferences</button>
      <button class="action-button warning" data-action="explain">Explain Cycles</button>
      <button class="action-button secondary" data-action="share">Share Results</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="sleep-results" id="sleepResults" style="display: none;">
      <h3>Your Optimal Sleep Times</h3>
      <div class="results-grid">
        <div class="result-card">
          <div class="result-label">Recommended Sleep Duration</div>
          <div class="result-value" id="recommendedDuration">8 hours</div>
          <div class="result-label" id="cycleCount">(6 complete cycles)</div>
        </div>
        <div class="result-card">
          <div class="result-label" id="resultTypeLabel">Bedtime</div>
          <div class="result-value" id="mainResultTime">11:00 PM</div>
          <div class="result-label">for optimal wake-up</div>
        </div>
        <div class="result-card">
          <div class="result-label">Deep Sleep Period</div>
          <div class="result-value" id="deepSleepPeriod">2-3 hours</div>
          <div class="result-label">after falling asleep</div>
        </div>
        <div class="result-card">
          <div class="result-label">REM Sleep Peak</div>
          <div class="result-value" id="remPeak">4-6 hours</div>
          <div class="result-label">into sleep cycle</div>
        </div>
      </div>
    </div>

    <div class="alarm-times" id="alarmTimes" style="display: none;">
      <h3>Recommended Wake-up Times</h3>
      <!-- Alarm times will be populated here -->
    </div>

    <div class="sleep-stages" id="sleepStages" style="display: none;">
      <h3>Sleep Stages Breakdown</h3>
      <div class="stage-visualization" id="stageVisualization">
        <!-- Sleep stages visualization will be populated here -->
      </div>
      <div class="stage-labels">
        <span>N1 (Light Sleep)</span>
        <span>N2 (Light Sleep)</span>
        <span>N3 (Deep Sleep)</span>
        <span>REM Sleep</span>
      </div>
    </div>

    <div class="sleep-timeline" id="sleepTimeline" style="display: none;">
      <h3>Sleep Cycle Timeline</h3>
      <div class="timeline" id="cycleTimeline">
        <!-- Sleep cycle timeline will be populated here -->
      </div>
    </div>

   {% include share-and-donation.html %}

    <div class="recommendations">
      <h2>Sleep Cycle Recommendations</h2>
      
      <div class="recommendation-card">
        <h4>Understanding Sleep Cycles</h4>
        <p>Each sleep cycle lasts about 90 minutes and includes all sleep stages: N1, N2, N3 (deep sleep), and REM sleep. Waking up between cycles (during light sleep) helps you feel more refreshed.</p>
      </div>
      
      <div class="recommendation-card">
        <h4>Optimal Cycle Count</h4>
        <p>Most adults need 5-6 complete sleep cycles per night (7.5-9 hours). Teenagers may need 6-7 cycles, while older adults might feel rested with 4-5 cycles.</p>
      </div>
      
      <div class="recommendation-card">
        <h4>REM Sleep Importance</h4>
        <p>REM sleep occurs more frequently in later cycles and is crucial for memory consolidation and learning. Don't cut your sleep short - you need those later REM-rich cycles.</p>
      </div>
    </div>
  </div>


<!-- SEO Content Section -->
<div class="content-placeholder">
    <h2>Sleep Cycle Calculator – Find the Best Time to Sleep and Wake Up Naturally</h2>

    <p>Have you ever gone to bed early, slept for what seemed like plenty of hours, and still woken up feeling tired? On the other hand, you may have experienced mornings where you slept fewer hours but felt surprisingly refreshed and ready to start the day. The reason often comes down to one important factor: your sleep cycles.</p>

    <p>Most people focus only on the total number of hours they sleep, but sleep quality and timing are just as important. Your body doesn't remain in the same state throughout the night. Instead, it moves through a series of repeating sleep cycles, each consisting of different stages that help your body recover, repair, and prepare for the next day.</p>

    <p>Our free <strong>Sleep Cycle Calculator</strong> is designed to help you understand and work with your natural sleep patterns. By calculating optimal bedtimes and wake-up times based on complete sleep cycles, the tool helps reduce morning grogginess and increases the likelihood of waking up feeling refreshed.</p>

    <p>Whether you're a student trying to improve focus, a professional with an early work schedule, an athlete prioritizing recovery, or simply someone looking for better sleep, understanding sleep cycles can make a significant difference in how you feel every day.</p>

    <p>The calculator is completely free to use, requires no registration, and works directly in your browser. There is nothing to install, and your personal information remains private because all calculations are performed locally on your device.</p>

    <h3>How to Use This Sleep Cycle Calculator (Step-by-Step):</h3>

    <p>The calculator is simple enough for anyone to use, even if you've never learned about sleep cycles before.</p>

    <ul>
        <li><strong>Enter Your Age:</strong> Age influences recommended sleep duration. Younger individuals generally require more sleep than adults.</li>

        <li><strong>Select Your Goal:</strong> Choose whether you want to calculate an ideal bedtime or determine the best time to wake up.</li>

        <li><strong>Adjust Settings:</strong> Customize sleep cycle duration and average time needed to fall asleep for more personalized recommendations.</li>

        <li><strong>Generate Results:</strong> Click the calculate button to see multiple sleep schedule options based on complete sleep cycles.</li>

        <li><strong>Choose Your Preferred Schedule:</strong> Select the bedtime or wake-up time that fits your lifestyle and daily responsibilities.</li>
    </ul>

    <h3>Why Sleep Cycles Matter More Than You Think</h3>

    <p>Many people assume that sleep is simply a period of unconscious rest. In reality, sleep is an active biological process that involves multiple stages, each serving a unique purpose.</p>

    <p>Throughout the night, your brain and body repeatedly cycle through these stages. Some stages focus on physical recovery, while others help with memory formation, learning, emotional regulation, and cognitive performance.</p>

    <p>When your alarm interrupts one of the deeper sleep stages, you may wake up feeling sluggish and disoriented. This phenomenon is commonly known as sleep inertia.</p>

    <p>By timing your sleep around complete cycles, you increase the likelihood of waking during a lighter sleep stage, making mornings feel much easier and more natural.</p>

    <h3>What Exactly Is a Sleep Cycle?</h3>

    <p>A sleep cycle is a sequence of sleep stages that your body passes through approximately every 90 minutes. Most adults complete four to six cycles each night, depending on total sleep duration.</p>

    <p>Each cycle includes light sleep, deeper sleep, and REM (Rapid Eye Movement) sleep. The balance between these stages changes as the night progresses.</p>

    <p>Earlier cycles generally contain more deep sleep, while later cycles contain more REM sleep. This progression is one of the reasons why both sleep quantity and timing are important.</p>

    <p>Missing the final cycles may reduce REM sleep, while insufficient overall sleep can reduce the amount of deep restorative sleep your body receives.</p>

    <h3>Real-Life Example: Planning for an Early Morning</h3>

    <p>Imagine you need to wake up at 6:00 AM for work. Instead of simply counting backward eight hours, a sleep cycle calculator identifies bedtimes that align with complete sleep cycles.</p>

    <p>If your average sleep cycle lasts 90 minutes and you typically need 20 minutes to fall asleep, the calculator might suggest bedtimes that allow for four, five, or six complete cycles before your alarm goes off.</p>

    <p>This approach helps you avoid waking up in the middle of deep sleep, which can make mornings significantly more difficult.</p>

    <p>Many users discover that proper sleep timing can make a noticeable difference in how energetic they feel, even when total sleep duration remains similar.</p>

    <h3>Benefits of Using a Sleep Cycle Calculator</h3>

    <p>Understanding sleep cycles provides practical advantages that extend beyond simply waking up on time.</p>

    <ul>
        <li><strong>Reduce Morning Grogginess:</strong> Wake up closer to the end of a sleep cycle rather than during deep sleep.</li>

        <li><strong>Improve Daily Energy Levels:</strong> Better-aligned sleep schedules often support increased alertness.</li>

        <li><strong>Support Mental Performance:</strong> Quality sleep contributes to concentration, learning, and decision-making.</li>

        <li><strong>Encourage Healthy Sleep Habits:</strong> Following a consistent schedule becomes easier with clear recommendations.</li>

        <li><strong>Increase Productivity:</strong> Better sleep often leads to improved performance at work and school.</li>

        <li><strong>Enhance Recovery:</strong> Proper sleep timing supports physical and mental restoration.</li>
    </ul>

    <h3>Who Can Benefit from This Tool?</h3>

    <p>Sleep affects nearly every aspect of life, making this calculator useful for a wide range of individuals.</p>

    <ul>
        <li><strong>Students:</strong> Improve focus, learning, and memory retention.</li>

        <li><strong>Professionals:</strong> Wake up prepared for demanding work schedules and important meetings.</li>

        <li><strong>Athletes:</strong> Support recovery, performance, and physical restoration.</li>

        <li><strong>Parents:</strong> Establish healthier bedtime routines for themselves and their children.</li>

        <li><strong>Shift Workers:</strong> Adapt sleep schedules around changing work hours.</li>

        <li><strong>Travelers:</strong> Minimize disruptions caused by time-zone changes.</li>

        <li><strong>Anyone Seeking Better Sleep:</strong> Learn how sleep timing influences daily well-being.</li>
    </ul>

    <h3>How Sleep Needs Change With Age</h3>

    <p>Sleep requirements are not the same throughout life. Infants may need more than fourteen hours of sleep each day, while teenagers often require eight to ten hours for healthy development.</p>

    <p>Most adults function best with seven to nine hours of sleep, although individual needs can vary. Older adults generally require a similar amount of sleep but may experience changes in sleep quality and sleep architecture.</p>

    <p>Because age influences recommended sleep duration, including age in sleep calculations can provide more personalized recommendations.</p>

    <h3>Why Simply Sleeping Longer Isn't Always Better</h3>

    <p>Many people believe that more sleep automatically equals better sleep. While getting enough sleep is important, sleeping longer without considering sleep cycles does not guarantee you'll wake up feeling rested.</p>

    <p>For example, someone who sleeps seven and a half hours and completes five full sleep cycles may feel more refreshed than someone who sleeps eight hours but wakes up in the middle of deep sleep.</p>

    <p>This is why sleep quality and timing often matter just as much as total sleep duration.</p>

    <p>The Sleep Cycle Calculator helps bridge this gap by identifying sleep schedules that align with the body's natural rhythms rather than relying solely on total hours slept.</p>


    <h3>Understanding the Different Stages of Sleep</h3>

    <p>To understand why sleep cycles matter, it's important to know what actually happens while you're sleeping. Sleep isn't one continuous state. Instead, your brain and body move through several distinct stages that repeat throughout the night.</p>

    <p>Each stage has a unique purpose, and together they help support physical recovery, brain function, emotional well-being, and overall health.</p>

    <h3>Stage N1: The Beginning of Sleep</h3>

    <p>Stage N1 is the lightest stage of sleep and serves as the transition between being awake and falling asleep. During this period, your body begins to relax, your breathing slows slightly, and your muscles start releasing tension.</p>

    <p>This stage usually lasts only a few minutes. If someone wakes you during N1 sleep, you may feel as though you never fell asleep at all.</p>

    <p>Many people experience sudden muscle twitches or the sensation of falling while entering this stage. These harmless movements are common and occur as the body transitions into sleep.</p>

    <h3>Stage N2: Stable Light Sleep</h3>

    <p>After Stage N1, the body moves into Stage N2. Although still considered light sleep, this stage is deeper and more stable.</p>

    <p>Your heart rate slows further, body temperature decreases, and brain activity begins to change. In fact, most adults spend nearly half of their total sleep time in Stage N2.</p>

    <p>This stage plays an important role in processing information, supporting memory, and preparing the body for deeper sleep stages.</p>

    <h3>Stage N3: Deep Restorative Sleep</h3>

    <p>Stage N3 is often referred to as deep sleep or slow-wave sleep. This is the most physically restorative stage of the sleep cycle.</p>

    <p>During deep sleep, your body focuses on repairing tissues, strengthening the immune system, restoring energy reserves, and releasing growth hormones.</p>

    <p>This stage is particularly important for athletes, active individuals, and anyone recovering from physical or mental stress.</p>

    <p>Waking up during Stage N3 can leave you feeling extremely groggy. This is one of the main reasons sleep cycle timing can make such a noticeable difference in how you feel each morning.</p>

    <h3>REM Sleep: The Dream Stage</h3>

    <p>REM stands for Rapid Eye Movement. During this stage, brain activity becomes much more active, and most vivid dreams occur.</p>

    <p>REM sleep plays a vital role in learning, memory formation, emotional processing, creativity, and problem-solving.</p>

    <p>Interestingly, while your brain becomes highly active, most voluntary muscles remain temporarily relaxed. This natural mechanism helps prevent the body from physically acting out dreams.</p>

    <p>REM periods become longer during later sleep cycles, which is why cutting sleep short can reduce the amount of REM sleep you receive.</p>

    <h3>What Is Sleep Inertia?</h3>

    <p>Sleep inertia is the groggy feeling many people experience immediately after waking up. It can affect concentration, reaction time, memory, and decision-making.</p>

    <p>When an alarm interrupts deep sleep, the brain may still be transitioning toward full wakefulness. This can create feelings of confusion, sluggishness, and low energy.</p>

    <p>One of the primary goals of a Sleep Cycle Calculator is to reduce sleep inertia by helping you wake up closer to the end of a complete cycle when your body is naturally preparing for wakefulness.</p>

    <h3>The Connection Between Sleep Cycles and Productivity</h3>

    <p>Sleep quality has a direct impact on daily performance. Whether you're studying for an exam, preparing for an important presentation, or making critical business decisions, adequate sleep is essential.</p>

    <p>Research consistently shows that poor sleep can affect attention span, memory, learning ability, and emotional regulation.</p>

    <p>By aligning your sleep schedule with complete cycles, you may experience improved focus, faster thinking, and better overall productivity throughout the day.</p>

    <h3>The Role of Circadian Rhythm</h3>

    <p>Sleep cycles work alongside another important biological system known as the circadian rhythm. Often referred to as the body's internal clock, the circadian rhythm helps regulate when you naturally feel sleepy and when you feel alert.</p>

    <p>Exposure to sunlight, meal timing, exercise, and daily habits all influence this internal clock.</p>

    <p>When sleep cycles and circadian rhythms work together, falling asleep and waking up becomes easier and more natural.</p>

    <p>Maintaining consistent bedtimes and wake-up times can strengthen this rhythm and improve overall sleep quality.</p>

    <h3>Sleep Cycles for Students</h3>

    <p>Students often sacrifice sleep in favor of studying, especially during exams. However, sleep is one of the most important factors in learning and memory retention.</p>

    <p>During sleep, the brain processes information gathered throughout the day and strengthens important memories.</p>

    <p>Students who maintain healthy sleep schedules often experience better concentration, improved recall, and stronger academic performance compared to those who frequently stay up late.</p>

    <p>Using a sleep cycle calculator can help students balance study time with adequate rest.</p>

    <h3>Sleep Cycles for Athletes</h3>

    <p>Athletes depend on sleep for recovery and performance. During deep sleep, the body repairs muscle tissue, replenishes energy stores, and supports physical adaptation to training.</p>

    <p>Insufficient sleep may slow recovery, reduce athletic performance, and increase the likelihood of fatigue.</p>

    <p>Many professional athletes prioritize sleep as carefully as they manage nutrition and training because of its impact on recovery and overall performance.</p>


    <h3>Advanced Features of a Sleep Cycle Calculator</h3>

    <p>Modern sleep calculators do much more than count hours. They use sleep science principles to provide personalized recommendations based on complete sleep cycles.</p>

    <p>By considering factors such as age, cycle duration, and average time needed to fall asleep, the calculator can generate more practical bedtime and wake-up suggestions.</p>

    <ul>
        <li><strong>Age-Based Recommendations:</strong> Different age groups have different sleep needs.</li>

        <li><strong>Fall-Asleep Time Adjustments:</strong> Accounts for the time it typically takes to drift off to sleep.</li>

        <li><strong>Multiple Sleep Duration Options:</strong> Provides several cycle-based schedules to fit different lifestyles.</li>

        <li><strong>Cycle Breakdown:</strong> Helps users understand how many complete cycles they will receive.</li>

        <li><strong>Flexible Scheduling:</strong> Useful for both bedtime planning and wake-up planning.</li>
    </ul>

    <h3>Common Sleep Mistakes People Make</h3>

    <p>Many sleep problems are caused by habits that people don't even realize are affecting their rest.</p>

    <ul>
        <li><strong>Inconsistent Sleep Schedules:</strong> Going to bed and waking up at different times every day can disrupt natural rhythms.</li>

        <li><strong>Excessive Screen Time:</strong> Blue light exposure before bed may interfere with natural sleep signals.</li>

        <li><strong>Too Much Caffeine:</strong> Late-day caffeine consumption can make falling asleep more difficult.</li>

        <li><strong>Ignoring Sleep Debt:</strong> Consistently sleeping less than needed can accumulate fatigue over time.</li>

        <li><strong>Poor Sleep Environment:</strong> Noise, light, and uncomfortable temperatures can reduce sleep quality.</li>
    </ul>

    <h3>Sleep Cycle Myths and Misconceptions</h3>

    <p>There are many misconceptions about sleep that continue to circulate online and through word of mouth.</p>

    <p><strong>Myth:</strong> Everyone needs exactly eight hours of sleep.<br>
    <strong>Reality:</strong> Sleep needs vary between individuals. Most adults require seven to nine hours, but personal requirements can differ.</p>

    <p><strong>Myth:</strong> You can train yourself to need less sleep.<br>
    <strong>Reality:</strong> While sleep timing can improve quality, it doesn't eliminate your body's biological need for adequate rest.</p>

    <p><strong>Myth:</strong> Sleeping longer always means better sleep.<br>
    <strong>Reality:</strong> Sleep quality and cycle timing are often just as important as duration.</p>

    <h3>Sleep Tips for Better Rest</h3>

    <p>Using a sleep cycle calculator is a great starting point, but combining it with healthy sleep habits can produce even better results.</p>

    <ul>
        <li><strong>Maintain Consistency:</strong> Try to keep similar sleep and wake times throughout the week.</li>

        <li><strong>Create a Bedtime Routine:</strong> Relaxing activities before bed can help signal your body that it's time to sleep.</li>

        <li><strong>Keep Your Bedroom Comfortable:</strong> A cool, quiet, and dark room often supports better sleep.</li>

        <li><strong>Limit Stimulants:</strong> Reduce caffeine and nicotine consumption later in the day.</li>

        <li><strong>Stay Active:</strong> Regular physical activity may improve overall sleep quality.</li>
    </ul>

    <h3>Frequently Asked Questions</h3>

    <p><strong>How long is a typical sleep cycle?</strong><br>
    Most adult sleep cycles last approximately 90 minutes, although individual cycles can range from about 90 to 110 minutes.</p>

    <p><strong>How many sleep cycles should I get each night?</strong><br>
    Most adults complete four to six cycles per night depending on total sleep duration.</p>

    <p><strong>Can sleep cycles change over time?</strong><br>
    Yes. Age, lifestyle, stress, health conditions, and sleep habits can all influence sleep architecture.</p>

    <p><strong>Will waking at the end of a sleep cycle guarantee I feel refreshed?</strong><br>
    While cycle timing can help, overall sleep quality, stress levels, and health factors also play important roles.</p>

    <p><strong>Can this calculator help with naps?</strong><br>
    Yes. Understanding sleep cycles can also help when planning naps to avoid waking during deep sleep.</p>

    <p><strong>Is the Sleep Cycle Calculator free?</strong><br>
    Absolutely. The calculator is completely free and available whenever you need it.</p>

    <h3>Why Choose Our Sleep Cycle Calculator?</h3>

    <p>Our Sleep Cycle Calculator combines simplicity, convenience, and sleep science to help users make more informed decisions about their sleep schedules.</p>

    <p>Unlike complicated sleep-tracking systems, this tool provides immediate recommendations without requiring wearable devices, subscriptions, or personal data collection.</p>

    <p>Everything is calculated directly within your browser, ensuring complete privacy and fast results.</p>

    <p>Whether you're planning tonight's bedtime or tomorrow morning's wake-up time, the calculator offers practical guidance based on proven sleep-cycle concepts.</p>

    <h3>Final Thoughts</h3>

    <p>Good sleep is one of the most important foundations of physical health, mental performance, emotional well-being, and overall quality of life. While many people focus only on getting enough hours of sleep, understanding sleep cycles can help improve how rested and energized you feel each morning.</p>

    <p>Our free Sleep Cycle Calculator makes it easy to identify optimal bedtimes and wake-up times based on complete sleep cycles. By aligning your sleep schedule with your body's natural rhythms, you can reduce morning grogginess, improve focus, and support healthier sleep habits.</p>

    <p>Whether you're a student, professional, athlete, parent, traveler, or someone simply trying to improve sleep quality, this tool provides a simple and effective way to build a better sleep routine.</p>

    <p>Start using the Sleep Cycle Calculator today and discover how proper sleep timing can help you wake up refreshed, energized, and ready for whatever the day brings.</p>

</div>
</div>




<!-- Alarm Settings Modal -->
<div id="alarmModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Set Sleep Alarm</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div class="input-group">
        <label class="input-label">Preferred Wake-up Time</label>
        <input type="time" id="alarmTime" class="input-field" value="07:00">
      </div>
      <div class="input-group">
        <label class="input-label">Number of Cycles</label>
        <select id="alarmCycles" class="input-field">
          <option value="4">4 cycles (6 hours)</option>
          <option value="5" selected>5 cycles (7.5 hours)</option>
          <option value="6">6 cycles (9 hours)</option>
          <option value="7">7 cycles (10.5 hours)</option>
        </select>
      </div>
      <div class="input-group">
        <label class="input-label">Alarm Sound</label>
        <select id="alarmSound" class="input-field">
          <option value="gentle">Gentle</option>
          <option value="standard" selected>Standard</option>
          <option value="progressive">Progressive</option>
        </select>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelAlarm">Cancel</button>
      <button class="modal-button primary" id="setAlarm">Set Alarm</button>
    </div>
  </div>
</div>

<!-- Sleep Cycles Explanation Modal -->
<div id="explainModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Understanding Sleep Cycles</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div class="recommendation-card">
        <h4>What Are Sleep Cycles?</h4>
        <p>Sleep cycles are repeating patterns of sleep stages that occur throughout the night. Each cycle typically lasts 90 minutes and includes all stages of sleep from light sleep to deep sleep and REM sleep.</p>
      </div>
      
      <div class="recommendation-card">
        <h4>Why Cycle Timing Matters</h4>
        <p>Waking up between cycles (during light sleep) feels natural and refreshing. Waking during deep sleep causes sleep inertia - that groggy, disoriented feeling that can last for hours.</p>
      </div>
      
      <div class="recommendation-card">
        <h4>Optimizing Your Sleep</h4>
        <p>By timing your sleep to complete full cycles, you maximize sleep quality and wake up feeling more rested, even if you sleep slightly fewer total hours.</p>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeExplain">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const ageInput = document.getElementById('age');
    const sleepTimeInput = document.getElementById('sleepTime');
    const calculationTypeSelect = document.getElementById('calculationType');
    const cycleDurationSelect = document.getElementById('cycleDuration');
    const sleepGoalSelect = document.getElementById('sleepGoal');
    const fallAsleepTimeSelect = document.getElementById('fallAsleepTime');
    const adjustAgeCheckbox = document.getElementById('adjustAge');
    const showStagesCheckbox = document.getElementById('showStages');
    
    const actionButtons = document.querySelectorAll('.action-button');
    const alertContainer = document.getElementById('alertContainer');
    const sleepResults = document.getElementById('sleepResults');
    const alarmTimes = document.getElementById('alarmTimes');
    const sleepStages = document.getElementById('sleepStages');
    const sleepTimeline = document.getElementById('sleepTimeline');
    
    // Modal elements
    const alarmModal = document.getElementById('alarmModal');
    const explainModal = document.getElementById('explainModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelAlarm = document.getElementById('cancelAlarm');
    const setAlarmBtn = document.getElementById('setAlarm');
    const closeExplain = document.getElementById('closeExplain');

    // Sleep data storage
    let userPreferences = JSON.parse(localStorage.getItem('sleepCyclePreferences')) || {};

    // Initialize calculator
    initializeCalculator();

    // Event listeners
    ageInput.addEventListener('change', updateSleepRecommendations);
    adjustAgeCheckbox.addEventListener('change', updateSleepRecommendations);
    
    actionButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleSleepAction(action);
      });
    });

    // Modal event listeners
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        alarmModal.style.display = 'none';
        explainModal.style.display = 'none';
      });
    });

    cancelAlarm.addEventListener('click', function() {
      alarmModal.style.display = 'none';
    });

    setAlarmBtn.addEventListener('click', function() {
      setAlarmHandler();
    });

    closeExplain.addEventListener('click', function() {
      explainModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === alarmModal || event.target === explainModal) {
        alarmModal.style.display = 'none';
        explainModal.style.display = 'none';
      }
    });

    function initializeCalculator() {
      // Load saved preferences
      if (userPreferences.age) {
        ageInput.value = userPreferences.age;
      }
      if (userPreferences.sleepTime) {
        sleepTimeInput.value = userPreferences.sleepTime;
      }
      if (userPreferences.calculationType) {
        calculationTypeSelect.value = userPreferences.calculationType;
      }
      
      updateSleepRecommendations();
    }

    function updateSleepRecommendations() {
      const age = parseInt(ageInput.value);
      let optimalSleep = "7-9 hours";
      let recommendedCycles = "5-6 cycles";
      let remPercentage = "20-25%";
      
      if (adjustAgeCheckbox.checked) {
        // Age-based sleep recommendations
        if (age <= 12) {
          optimalSleep = "9-12 hours";
          recommendedCycles = "6-8 cycles";
          remPercentage = "25-30%";
        } else if (age <= 18) {
          optimalSleep = "8-10 hours";
          recommendedCycles = "6-7 cycles";
          remPercentage = "20-25%";
        } else if (age <= 64) {
          optimalSleep = "7-9 hours";
          recommendedCycles = "5-6 cycles";
          remPercentage = "20-25%";
        } else {
          optimalSleep = "7-8 hours";
          recommendedCycles = "4-5 cycles";
          remPercentage = "15-20%";
        }
      }
      
      document.getElementById('optimalSleep').textContent = optimalSleep;
      document.getElementById('recommendedCycles').textContent = recommendedCycles;
      document.getElementById('remPercentage').textContent = remPercentage;
      
      // Update cycle length based on age
      if (age <= 12) {
        cycleDurationSelect.value = "60";
        document.getElementById('cycleLength').textContent = "60 minutes";
      } else if (age <= 18) {
        cycleDurationSelect.value = "100";
        document.getElementById('cycleLength').textContent = "100 minutes";
      } else {
        cycleDurationSelect.value = "90";
        document.getElementById('cycleLength').textContent = "90 minutes";
      }
    }

    function handleSleepAction(action) {
      switch (action) {
        case 'calculate':
          calculateSleepCycles();
          break;

        case 'setAlarm':
          alarmModal.style.display = 'block';
          break;

        case 'reset':
          if (confirm('Are you sure you want to reset all inputs?')) {
            ageInput.value = 30;
            sleepTimeInput.value = "23:00";
            calculationTypeSelect.value = "wake-up";
            updateSleepRecommendations();
            hideAllResults();
            showAlert('Calculator reset successfully!', 'success');
          }
          break;

        case 'save':
          savePreferences();
          break;

        case 'explain':
          explainModal.style.display = 'block';
          break;

        case 'share':
          shareResults();
          break;
      }
    }

    function calculateSleepCycles() {
      const age = parseInt(ageInput.value);
      const sleepTime = sleepTimeInput.value;
      const calculationType = calculationTypeSelect.value;
      const cycleDuration = parseInt(cycleDurationSelect.value);
      const sleepGoal = sleepGoalSelect.value;
      const fallAsleepTime = parseInt(fallAsleepTimeSelect.value);
      
      if (!sleepTime) {
        showAlert('Please enter a valid time.', 'error');
        return;
      }
      
      // Calculate based on sleep goal
      let targetCycles;
      switch(sleepGoal) {
        case 'minimal':
          targetCycles = 4;
          break;
        case 'balanced':
          targetCycles = 5;
          break;
        case 'optimal':
          targetCycles = 6;
          break;
        case 'recovery':
          targetCycles = 7;
          break;
        default:
          targetCycles = 5;
      }
      
      // Adjust for age if needed
      if (adjustAgeCheckbox.checked) {
        if (age <= 12) targetCycles = Math.max(targetCycles, 6);
        else if (age <= 18) targetCycles = Math.max(targetCycles, 6);
        else if (age >= 65) targetCycles = Math.min(targetCycles, 5);
      }
      
      const totalSleepMinutes = targetCycles * cycleDuration;
      const totalSleepTime = totalSleepMinutes + fallAsleepTime;
      
      // Parse time
      const [hours, minutes] = sleepTime.split(':').map(Number);
      let baseTime = new Date();
      baseTime.setHours(hours, minutes, 0, 0);
      
      let resultTime;
      let resultTypeLabel;
      
      if (calculationType === 'wake-up') {
        // Calculate bedtime based on wake-up time
        resultTime = new Date(baseTime.getTime() - totalSleepTime * 60000);
        resultTypeLabel = 'Bedtime';
        document.getElementById('resultTypeLabel').textContent = 'Bedtime';
        document.getElementById('mainResultTime').textContent = formatTime(resultTime);
        generateWakeUpTimes(baseTime, cycleDuration, fallAsleepTime);
      } else {
        // Calculate wake-up time based on bedtime
        resultTime = new Date(baseTime.getTime() + totalSleepTime * 60000);
        resultTypeLabel = 'Wake-up Time';
        document.getElementById('resultTypeLabel').textContent = 'Wake-up Time';
        document.getElementById('mainResultTime').textContent = formatTime(resultTime);
        generateWakeUpTimes(resultTime, cycleDuration, fallAsleepTime);
      }
      
      // Update results
      document.getElementById('recommendedDuration').textContent = formatDuration(totalSleepMinutes);
      document.getElementById('cycleCount').textContent = `(${targetCycles} complete cycles)`;
      
      // Set deep sleep and REM estimates
      const deepSleepHours = Math.round((targetCycles * 0.2) * 10) / 10;
      const remSleepHours = Math.round((targetCycles * 0.25) * 10) / 10;
      document.getElementById('deepSleepPeriod').textContent = `${deepSleepHours} hours`;
      document.getElementById('remPeak').textContent = `${Math.floor(totalSleepMinutes * 0.6 / 60)}-${Math.floor(totalSleepMinutes * 0.8 / 60)} hours`;
      
      // Show results
      sleepResults.style.display = 'block';
      
      if (showStagesCheckbox.checked) {
        showSleepStages(targetCycles, cycleDuration);
        showSleepTimeline(targetCycles, cycleDuration);
      }
      
      showAlert('Sleep cycles calculated successfully!', 'success');
    }

    function generateWakeUpTimes(baseTime, cycleDuration, fallAsleepTime) {
      const alarmTimesContainer = document.getElementById('alarmTimes');
      alarmTimesContainer.innerHTML = '<h3>Recommended Wake-up Times</h3>';
      
      // Generate options for 4-7 cycles
      for (let cycles = 4; cycles <= 7; cycles++) {
        const wakeUpTime = new Date(baseTime.getTime() + (cycles * cycleDuration + fallAsleepTime) * 60000);
        const card = document.createElement('div');
        card.className = 'alarm-time-card';
        if (cycles === 5 || cycles === 6) {
          card.classList.add('recommended');
        }
        
        card.innerHTML = `
          <div class="result-label">${cycles} Sleep Cycles</div>
          <div class="alarm-time">${formatTime(wakeUpTime)}</div>
          <div class="cycles-count">${formatDuration(cycles * cycleDuration)} total sleep</div>
        `;
        
        card.addEventListener('click', function() {
          selectAlarmTime(formatTime(wakeUpTime), cycles);
        });
        
        alarmTimesContainer.appendChild(card);
      }
      
      alarmTimes.style.display = 'block';
    }

    function showSleepStages(cycles, cycleDuration) {
      const stageVisualization = document.getElementById('stageVisualization');
      stageVisualization.innerHTML = '';
      
      // Typical stage distribution in a cycle (percentages)
      const stageDistribution = [
        { name: 'N1', percentage: 5, color: 'stage-n1' },
        { name: 'N2', percentage: 50, color: 'stage-n2' },
        { name: 'N3', percentage: 20, color: 'stage-n3' },
        { name: 'REM', percentage: 25, color: 'stage-rem' }
      ];
      
      stageDistribution.forEach(stage => {
        const stageElement = document.createElement('div');
        stageElement.className = `stage ${stage.color}`;
        stageElement.style.width = `${stage.percentage}%`;
        stageElement.textContent = `${stage.name} (${stage.percentage}%)`;
        stageVisualization.appendChild(stageElement);
      });
      
      sleepStages.style.display = 'block';
    }

    function showSleepTimeline(cycles, cycleDuration) {
      const timeline = document.getElementById('cycleTimeline');
      timeline.innerHTML = '';
      
      const totalWidth = 100; // Percentage
      const cycleWidth = totalWidth / cycles;
      
      // Add cycle markers and REM periods
      for (let i = 0; i < cycles; i++) {
        const cycleMarker = document.createElement('div');
        cycleMarker.className = 'cycle-marker';
        cycleMarker.style.left = `${(i + 1) * cycleWidth}%`;
        timeline.appendChild(cycleMarker);
        
        const cycleLabel = document.createElement('div');
        cycleLabel.className = 'cycle-label';
        cycleLabel.textContent = `Cycle ${i + 1}`;
        cycleLabel.style.left = `${(i + 0.5) * cycleWidth}%`;
        timeline.appendChild(cycleLabel);
        
        // Add REM period (longer in later cycles)
        const remWidth = (15 + i * 3) * cycleWidth / 100; // REM increases each cycle
        const remLeft = ((i + 1) * cycleWidth) - remWidth - 5; // Position at end of cycle
        
        const remPeriod = document.createElement('div');
        remPeriod.className = 'rem-period';
        remPeriod.style.left = `${remLeft}%`;
        remPeriod.style.width = `${remWidth}%`;
        remPeriod.title = `Cycle ${i + 1} REM: ${Math.round(remWidth * cycleDuration / cycleWidth)} minutes`;
        timeline.appendChild(remPeriod);
      }
      
      sleepTimeline.style.display = 'block';
    }

    function setAlarmHandler() {
      const alarmTime = document.getElementById('alarmTime').value;
      const alarmCycles = document.getElementById('alarmCycles').value;
      const alarmSound = document.getElementById('alarmSound').value;
      
      // Calculate bedtime based on alarm time
      const cycleDuration = parseInt(cycleDurationSelect.value);
      const fallAsleepTime = parseInt(fallAsleepTimeSelect.value);
      const totalSleepTime = alarmCycles * cycleDuration + fallAsleepTime;
      
      const [hours, minutes] = alarmTime.split(':').map(Number);
      const alarmDate = new Date();
      alarmDate.setHours(hours, minutes, 0, 0);
      
      const bedtime = new Date(alarmDate.getTime() - totalSleepTime * 60000);
      
      showAlert(`Alarm set for ${alarmTime}! Go to bed by ${formatTime(bedtime)} for ${alarmCycles} complete sleep cycles.`, 'success');
      alarmModal.style.display = 'none';
    }

    function selectAlarmTime(time, cycles) {
      showAlert(`Selected wake-up time: ${time} (${cycles} cycles)`, 'success');
    }

    function savePreferences() {
      userPreferences = {
        age: ageInput.value,
        sleepTime: sleepTimeInput.value,
        calculationType: calculationTypeSelect.value,
        cycleDuration: cycleDurationSelect.value,
        sleepGoal: sleepGoalSelect.value,
        fallAsleepTime: fallAsleepTimeSelect.value,
        adjustAge: adjustAgeCheckbox.checked,
        showStages: showStagesCheckbox.checked
      };
      
      localStorage.setItem('sleepCyclePreferences', JSON.stringify(userPreferences));
      showAlert('Preferences saved successfully!', 'success');
    }

    function shareResults() {
      const resultsText = `My optimal sleep times calculated using Sleep Cycle Calculator:\n\nRecommended: ${document.getElementById('mainResultTime').textContent}\nDuration: ${document.getElementById('recommendedDuration').textContent}\nCycles: ${document.getElementById('cycleCount').textContent}`;
      
      if (navigator.share) {
        navigator.share({
          title: 'My Sleep Cycle Results',
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
      sleepResults.style.display = 'none';
      alarmTimes.style.display = 'none';
      sleepStages.style.display = 'none';
      sleepTimeline.style.display = 'none';
    }

    // Utility functions
    function formatTime(date) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    function formatDuration(minutes) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
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