---
layout: default
title: "Sleep Debt Calculator – Track Your Sleep Deficit"
permalink: /sleep-debt-calculator-track-and-calculate-your-sleep-deficit/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Sleep Debt Calculator – Track Your Sleep Deficit</title>

<meta name="description"
  content="Free sleep debt calculator to track your weekly sleep deficit and get tips to recover lost sleep. Improve your sleep health, mood, and daily energy levels.">

<meta name="keywords"
  content="sleep debt calculator, sleep deficit calculator, sleep recovery calculator, how much sleep do I need, sleep tracker, sleep health calculator, sleep balance calculator, sleep deprivation recovery, sleep hours needed">

<meta name="author" content="ToolEsy.com">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://toolesy.com/sleep-debt-calculator-track-and-calculate-your-sleep-deficit">

<!-- ✅ Open Graph / Facebook -->
<meta property="og:title" content="Sleep Debt Calculator | Check Your Sleep Deficit">
<meta property="og:description" content="Track your sleep deficit and learn how much recovery sleep you need for better health and energy.">
<meta property="og:url" content="https://toolesy.com/sleep-debt-calculator-track-and-calculate-your-sleep-deficit">
<meta property="og:type" content="website">

<!-- ✅ Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Sleep Debt Calculator | Calculate Sleep Deficiency">
<meta name="twitter:description" content="Check your sleep debt, restore sleep balance & boost productivity with science-backed calculations.">


<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Sleep Debt Calculator Styles */
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

  .input-section textarea {
    width: 100%;
    padding: 18px;
    border: 2px solid #e0e6ed;
    border-radius: 10px;
    font-size: 16px;
    min-height: 120px;
    resize: vertical;
    font-family: 'Courier New', monospace;
    transition: border-color 0.3s;
  }

  .input-section textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
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

  .sleep-history {
    margin-top: 30px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .history-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
  }

  .history-table th,
  .history-table td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  .history-table th {
    background-color: #f8f9fa;
    font-weight: 600;
    color: var(--primary);
  }

  .history-table tr:hover {
    background-color: #f5f5f5;
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

  .sleep-visualization {
    margin: 30px 0;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .visualization-chart {
    height: 200px;
    background: linear-gradient(90deg, #e3f2fd, #bbdefb);
    border-radius: 8px;
    margin: 15px 0;
    position: relative;
    overflow: hidden;
  }

  .chart-bar {
    position: absolute;
    bottom: 0;
    background: var(--primary);
    transition: all 0.3s ease;
  }

  .chart-labels {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 12px;
    color: #666;
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

  /* Sleep quality indicator */
  .sleep-quality {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
  }

  .quality-indicator {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  .quality-excellent { background: #28a745; }
  .quality-good { background: #20c997; }
  .quality-fair { background: #ffc107; }
  .quality-poor { background: #fd7e14; }
  .quality-critical { background: #dc3545; }

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

    .history-table {
      font-size: 14px;
    }

    .history-table th,
    .history-table td {
      padding: 8px;
    }
  }
</style>

<div class="calculator-container">
  <h1>Sleep Debt Calculator</h1>
  <p class="welcome-message">Track your sleep patterns, calculate your sleep deficit, and get personalized recommendations for better sleep health and recovery.</p>

  <div class="calculator-section">
    <h2>Sleep Debt Calculator</h2>

    <div class="sleep-stats-wrapper">
      <div class="stat-item">
        <span>Current Sleep Debt: </span>
        <span id="sleepDebt">0 hours</span>
      </div>
      <div class="stat-item">
        <span>Recommended Sleep: </span>
        <span id="recommendedSleep">7-9 hours</span>
      </div>
      <div class="stat-item">
        <span>Sleep Quality: </span>
        <span id="sleepQuality">Good</span>
      </div>
      <div class="stat-item">
        <span>Recovery Time: </span>
        <span id="recoveryTime">0 days</span>
      </div>
    </div>

    <div class="sleep-input-section">
      <div class="input-group">
        <label class="input-label">Your Age</label>
        <input type="number" id="age" class="input-field" min="1" max="120" value="30" placeholder="Enter your age">
      </div>
      
      <div class="input-group">
        <label class="input-label">Recommended Sleep Hours</label>
        <input type="number" id="recommendedHours" class="input-field" min="4" max="12" step="0.5" value="8" placeholder="Recommended hours">
      </div>
      
      <div class="input-group">
        <label class="input-label">Tracking Period (Days)</label>
        <select id="trackingPeriod" class="input-field">
          <option value="7">7 days</option>
          <option value="14" selected>14 days</option>
          <option value="30">30 days</option>
          <option value="90">90 days</option>
        </select>
      </div>
    </div>

    <div class="sleep-options">
      <div class="option-group">
        <label class="option-label">Sleep Pattern</label>
        <select id="sleepPattern" class="option-select">
          <option value="consistent">Consistent</option>
          <option value="irregular">Irregular</option>
          <option value="shift-work">Shift Work</option>
          <option value="weekend-catchup">Weekend Catch-up</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Lifestyle Factors</label>
        <select id="lifestyle" class="option-select">
          <option value="sedentary">Sedentary</option>
          <option value="moderate" selected>Moderately Active</option>
          <option value="active">Very Active</option>
          <option value="athlete">Athlete</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Stress Level</label>
        <select id="stressLevel" class="option-select">
          <option value="low">Low</option>
          <option value="medium" selected>Medium</option>
          <option value="high">High</option>
          <option value="very-high">Very High</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="trackNaps" checked>
          <label for="trackNaps">Include naps in calculation</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="adjustRecommended" checked>
          <label for="adjustRecommended">Adjust recommended sleep by age</label>
        </div>
      </div>
    </div>

    <div class="sleep-history">
      <h3>Sleep History (Last 7 Days)</h3>
      <table class="history-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Hours Slept</th>
            <th>Sleep Debt</th>
            <th>Quality</th>
          </tr>
        </thead>
        <tbody id="sleepHistoryBody">
          <!-- Sleep history will be populated here -->
        </tbody>
      </table>
    </div>

    <div class="sleep-visualization">
      <h3>Sleep Debt Visualization</h3>
      <div class="visualization-chart" id="sleepChart">
        <!-- Chart bars will be added dynamically -->
      </div>
      <div class="chart-labels">
        <span>Day 1</span>
        <span>Day 7</span>
        <span>Day 14</span>
        <span>Day 21</span>
        <span>Day 28</span>
      </div>
    </div>

    <div class="button-section">
      <button class="action-button" data-action="calculate">Calculate Sleep Debt</button>
      <button class="action-button" data-action="addEntry">Add Sleep Entry</button>
      <button class="action-button" data-action="reset">Reset Data</button>
      <button class="action-button success" data-action="save">Save Progress</button>
      <button class="action-button warning" data-action="recommendations">Get Recommendations</button>
      <button class="action-button secondary" data-action="export">Export Data</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

   {% include share-and-donation.html %}

    <div class="recommendations">
      <h2>Sleep Recommendations</h2>
      
      <div class="recommendation-card">
        <h4>Immediate Recovery</h4>
        <p>Based on your current sleep debt, focus on getting 1-2 extra hours of sleep per night for the next 3-5 days.</p>
      </div>
      
      <div class="recommendation-card">
        <h4>Sleep Schedule</h4>
        <p>Try to maintain a consistent sleep schedule, even on weekends. Go to bed and wake up at the same time every day.</p>
      </div>
      
      <div class="recommendation-card">
        <h4>Sleep Environment</h4>
        <p>Ensure your bedroom is dark, quiet, and cool (around 65°F or 18°C) for optimal sleep quality.</p>
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
<div class="content-placeholder">
    <h2>Sleep Debt Calculator - Track and Manage Your Sleep Deficit</h2>

    <p>Let me ask you something that might hit a little too close to home. Have you ever pulled an all-nighter (or just a few late nights in a row) and told yourself, "It's fine, I'll just sleep in on Saturday"? And then Saturday comes, you sleep until 10 AM, but somehow you still feel exhausted for the rest of the weekend? That's not just in your head. That's sleep debt. And unlike credit card debt, you don't get a monthly statement in the mail reminding you how much you owe. It just builds up quietly, making you grumpier, foggier, and less healthy until one day you realize you can't remember the last time you felt genuinely well-rested. Our free <strong>Sleep Debt Calculator</strong> is here to change that. It helps you track exactly how much sleep you're actually getting compared to what your body really needs. It shows you your accumulated deficit over days or weeks. And most importantly, it gives you a realistic, personalized plan to pay that debt back. No judgment. No complicated science jargon. Just honest numbers and practical advice to help you feel human again. You don't need to sign up, you don't need to share your data, and you definitely don't need to feel guilty about the late nights you've already had. Let's just figure out where you stand and make a plan forward.</p>

    <h3>How to Use This Sleep Debt Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Your Details:</strong> The first thing the calculator asks for is your age. Why? Because a 16-year-old and a 45-year-old have genuinely different sleep needs—it's not just a suggestion, it's biology. A teenager's brain is still developing and typically needs 8-10 hours. A healthy adult usually does fine with 7-9 hours. Older adults (65+) might naturally sleep a bit less at night but nap more during the day. So don't skip this step. Enter your actual age so the calculator knows your target range.</li>
      <li><strong>Set Tracking Preferences:</strong> Now you choose how far back you want to look. Are you just curious about the last week? Or do you suspect this has been going on for months? You can track 7, 14, 30, or even 90 days. The longer the period, the better the pattern emerges—but start with whatever you can remember or log. Also, you'll see options for lifestyle factors. Do you have a physically demanding job? Are you under chronic stress? Do you exercise intensely most days? These things actually increase your sleep needs slightly, and the calculator adjusts for that. It's not cheating—it's accuracy.</li>
      <li><strong>Record Your Sleep:</strong> This is where honesty matters. Use the "Add Sleep Entry" button to log your actual sleep hours for each day. And I mean <em>actual</em> sleep—not time in bed scrolling on your phone, not time lying there worrying about work. Actual, eyes-closed, genuinely asleep time. If you're not sure, err on the low side. Most of us overestimate how much we actually sleep. The calculator doesn't judge you for low numbers; it just needs accurate data to help you.</li>
      <li><strong>Calculate & Analyze:</strong> Hit the "Calculate Sleep Debt" button and brace yourself. It might be a little uncomfortable to see the number, but knowledge is power. The calculator will show you your total sleep debt for the period, your average nightly deficit, and—here's the important part—how that debt is likely affecting your energy, mood, focus, and health. It's not meant to scare you. It's meant to show you that your tiredness isn't "all in your head" or a character flaw. It's a measurable physiological reality, and it can be fixed.</li>
      <li><strong>Follow Recommendations:</strong> This is where the hope comes in. Based on your specific debt amount and your lifestyle, the calculator generates a personalized sleep recovery plan. It might recommend an earlier bedtime, strategic naps, a weekend catch-up schedule, or gradual adjustments over several weeks. Follow these recommendations as closely as you can, and re-calculate after a week or two. You should see your debt decreasing—and more importantly, you should <em>feel</em> the difference.</li>
    </ul>

    <h3>Real-Life Example & Use Case (Because Stories Help):</h3>
    <p>Meet Vikram. He's a 34-year-old project manager at a tech company, married, with a 2-year-old daughter. His life is a blur of deadlines, daycare drop-offs, and the occasional attempt at exercise. He thought he was doing okay on sleep—maybe 6.5 hours on weeknights, plus "sleeping in" until 8:30 on weekends (his daughter wakes up at 6:30 anyway, so "sleeping in" is relative). But lately, he's been feeling awful. Brain fog by 2 PM. Snapping at his team. Craving sugar all afternoon. Falling asleep on the couch by 9:30 PM and then having trouble staying asleep.</p>
    <p>Vikram decided to try our sleep debt calculator. He entered his age (34), set the tracking period to 14 days, and logged his actual sleep as best he could remember (he also used his fitness tracker data to fill in the gaps). The results hit him hard. His recommended sleep was 8 hours per night. His actual average was 6 hours and 22 minutes on weeknights, and 7 hours on weekend nights. Over 14 days, his total sleep debt was 19.5 hours. The calculator explained that this level of debt was likely causing significant cognitive impairment—equivalent to being legally drunk in terms of reaction time and decision-making.</p>
    <p>Vikram wasn't lazy. He wasn't broken. He was just deeply sleep-deprived. The calculator gave him a recovery plan: add 30 minutes to his bedtime for the next two weeks, take a 20-minute power nap after lunch (his office had a quiet room), and stop scrolling on his phone after 10 PM. He followed the plan imperfectly—life happens—but after 10 days, his sleep debt had dropped to 8 hours. He noticed the difference: clearer thinking, more patience, less sugar craving. He's still paying down the debt, but now he has a tool to track it. That's what this calculator can do for you.</p>

    <h3>Understanding Sleep Debt & Its Impact (No Alarmism, Just Facts):</h3>
    <ul>
      <li><strong>What is Sleep Debt? (In Plain English):</strong> Sleep debt is simply the gap between how much sleep your body truly needs and how much you actually get. If you need 8 hours but only sleep 6 hours on Monday, you've created 2 hours of debt. Do that again on Tuesday, and you owe 4 hours. By Friday, you owe 10 hours. That debt doesn't magically disappear—it carries over, affecting your brain and body until you "pay it back" with extra sleep. You can't cheat biology.</li>
      <li><strong>Short-term Effects (What You Feel Right Now):</strong> This is the stuff you probably already recognize. Impaired attention—you read the same email three times and still don't absorb it. Mood swings—you snap at your partner or your coworker over something small. Reduced immune function—you catch every cold that goes around the office. Slower reaction times—you almost rear-end someone at a stop sign. Increased appetite—especially for carbs and sugar, because your body is desperate for quick energy. None of this is a moral failing. It's just sleep debt talking.</li>
      <li><strong>Long-term Consequences (What Happens If You Ignore It):</strong> This is the scary part, but you need to know it. Chronic sleep debt (months or years of insufficient sleep) is linked to serious health problems: obesity (because of hormonal changes that increase hunger and decrease satiety), type 2 diabetes (insulin resistance gets worse), cardiovascular disease (high blood pressure, inflammation, increased heart attack risk), and mental health issues (depression and anxiety are both strongly correlated with chronic sleep loss). The good news? Most of this damage is reversible with consistent, adequate sleep. But you have to start somewhere.</li>
      <li><strong>Recovery Time (How Long Until You Feel Better?):</strong> Here's the frustrating truth: it takes longer to recover from sleep debt than it took to accumulate it. One late night might take two or three nights of good sleep to fully repay. A week of chronic undersleeping might take a week or more of disciplined sleep to recover. And if you've been running on 5-6 hours for years? It could take a month or two of consistent 7-9 hour nights to feel fully normal again. But don't let that discourage you. You'll feel <em>better</em> long before you're fully caught up. The first few nights of extra sleep will already reduce the brain fog and moodiness.</li>
    </ul>

    <h3>Benefits & Who Should Use This Calculator (Probably You):</h3>
    <ul>
      <li><strong>Busy Professionals:</strong> You tell yourself you're "fine" on 6 hours. But are you really? Or have you just forgotten what "fine" feels like? Use the calculator to track your sleep for two weeks alongside your work performance. You might notice a strong correlation between low sleep days and low productivity, bad decisions, or conflicts with colleagues. That's not a coincidence. That's data.</li>
      <li><strong>Students:</strong> The culture of "cram all night, sleep when you're dead" is not only stupid, it's counterproductive. Sleep is when your brain moves information from short-term to long-term memory. If you're not sleeping, you're literally throwing away some of what you studied. Use the calculator to track your sleep during exam week. The nights with 4 hours of sleep might feel "productive" in the moment, but the sleep debt is making you less efficient the next day.</li>
      <li><strong>Parents of Young Children:</strong> I see you. You're running on fumes. Your sleep debt is probably astronomical, and you can't just "sleep more" because the baby won't allow it. That's okay—the calculator can still help you. It can show you the true size of your debt so you stop blaming yourself for being tired. It can also help you prioritize your own sleep when you do get windows of opportunity (e.g., "If the baby sleeps from 8 PM to 1 AM, I should sleep immediately, not scroll on my phone for an hour").</li>
      <li><strong>Shift Workers:</strong> Your situation is genuinely harder than most people's. Your circadian rhythm is constantly fighting your work schedule. Use the calculator to track your sleep debt over several rotations. You might find that you're accumulating debt faster on night shifts, which means you need to be extra intentional about sleep hygiene during those periods. The calculator won't fix shift work, but it can help you minimize the damage.</li>
      <li><strong>Health-Conscious People:</strong> You track your steps, your calories, your macros, maybe even your heart rate variability. But are you tracking your sleep debt? It's arguably more important than any of those for overall health. Use the calculator as part of your wellness routine. The goal isn't perfection—it's awareness and gradual improvement.</li>
    </ul>

    <h3>Frequently Asked Questions (Real Answers, Not Corporate Fluff):</h3>
    <p><strong>How is sleep debt actually calculated?</strong><br>
      It's straightforward math, actually. First, the calculator determines your recommended sleep range based on your age (and adjusts slightly for lifestyle factors like high stress or physical labor). Then for each day you log, it subtracts your actual sleep from your recommended sleep. If the result is negative (you slept less than recommended), that's added to your debt. If it's positive (you slept more), that subtracts from your debt. The total over your tracking period is your current sleep debt. Example: recommended 8 hours, actual 6 hours on Monday = +2 debt. Actual 9 hours on Tuesday = -1 debt (because you paid back one hour). Net debt after two days = 1 hour. Simple.</p>

    <p><strong>Can I really "catch up" on lost sleep? Or is that a myth?</strong><br>
      Yes and no. You can reduce your sleep debt by sleeping extra—that's not a myth. If you owe 10 hours, sleeping 9 hours for 10 nights (instead of your usual 7) will eventually pay it down. However, some effects of chronic sleep deprivation (like certain metabolic changes or cognitive deficits) may not fully reverse with just extra sleep. And "catching up" on weekends by sleeping 12 hours both days is less effective than spreading extra sleep across multiple nights. Think of it like debt: making one giant payment is good, but consistent extra payments over time is better. The calculator's recovery plan reflects this—it usually recommends spreading extra sleep across several nights, not just a massive weekend sleep-in.</p>

    <p><strong>How much sleep do I actually need? (Give me a number.)</strong><br>
      I wish I could give you a single number, but biology doesn't work that way. Most adults need 7-9 hours. Some rare "short sleepers" (genetic mutation) genuinely thrive on 6 hours, but that's about 1% of the population. Some people need 9 hours to feel their best. The calculator uses age-based guidelines from the National Sleep Foundation and similar sources: adults 18-64: 7-9 hours; adults 65+: 7-8 hours; teenagers 14-17: 8-10 hours; school-age children: 9-12 hours. If you consistently sleep within your age range and still feel tired, see a doctor—there might be something else going on (sleep apnea, thyroid issues, etc.).</p>

    <p><strong>Is napping helpful for reducing sleep debt? Or does it just mess up nighttime sleep?</strong><br>
      Strategic napping can help, but it's not a complete solution. A 20-30 minute power nap (short enough to avoid deep sleep) can temporarily reduce sleepiness and improve alertness. It can also reduce your sleep debt slightly—but only if you weren't going to get that sleep at night anyway. The problem is that long or late naps can interfere with nighttime sleep, making it harder to fall asleep or stay asleep. The calculator's recovery plan might include nap recommendations if your schedule makes longer nighttime sleep impossible. But for most people, focusing on consistent, adequate nighttime sleep is the more effective long-term strategy.</p>

    <p><strong>How long does it take to recover from sleep debt? Be real with me.</strong><br>
      Okay, real talk. For every hour of sleep debt, it typically takes 1-3 nights of adequate or extra sleep to fully repay it. That means if you owe 10 hours, you're looking at 10-30 days of consistent 8-9 hour nights to feel completely caught up. But—and this is important—you'll feel <em>dramatically better</em> long before you're fully debt-free. The first few nights of extra sleep will clear the brain fog and improve your mood. After a week, your reaction time and memory will improve. After a month, your immune function and stress resilience will be noticeably better. Don't let the long timeline discourage you. The benefits start immediately, even if the full recovery takes a while.</p>

    <h3>Why Monitor Your Sleep Debt? (The Big Picture):</h3>
    <p>Look, most of us go through life vaguely tired, vaguely grumpy, and vaguely unproductive. We assume that's just "adult life." But what if it's not? What if that constant low-grade exhaustion is just accumulated sleep debt that you've normalized because you've forgotten what "fully rested" feels like? Monitoring your sleep debt is like finally looking at your bank account after months of ignoring it. The number might be uncomfortable at first, but at least now you know. And once you know, you can do something about it. Regular tracking helps you identify patterns: Do you accumulate more debt during work projects? During holiday seasons? When you're stressed? Once you see the pattern, you can plan ahead. You can build in recovery nights before the debt gets out of hand. You can make informed decisions about whether that late-night work session or that extra episode of your show is worth the debt. Sleep isn't just "rest." It's a biological necessity that affects every system in your body. Treat it that way, and the calculator will help you stay accountable.</p>

    <h3>Advanced Sleep Tracking Features (For the Data Nerds):</h3>
    <p>Our sleep debt calculator isn't just a simple add-and-subtract tool. We built in several features for people who want to go deeper:</p>
    <ul>
      <li><strong>Age-Adjusted Recommendations:</strong> As mentioned, a 16-year-old and a 60-year-old have genuinely different sleep architectures. The calculator uses peer-reviewed sleep guidelines to adjust its recommendations. No more "one size fits all" advice that doesn't fit anyone.</li>
      <li><strong>Lifestyle Factor Integration:</strong> Do you run marathons? Work 12-hour shifts on your feet? Going through a divorce or a high-stress period at work? All of these things increase your body's need for sleep (because recovery takes longer). The calculator lets you add these factors and adjusts your recommended sleep range upward slightly. It's not a massive adjustment, but it's more accurate than ignoring them.</li>
      <li><strong>Visual Progress Tracking (Charts & Graphs):</strong> Numbers are great, but humans are visual. The calculator generates simple charts showing your sleep debt over time—spiking during busy weeks, dropping during recovery periods. Seeing the line go down is genuinely motivating. It turns sleep into a measurable goal rather than an abstract concept.</li>
      <li><strong>Personalized Recovery Plans:</strong> This is the most practical feature. Based on your specific debt amount and your stated schedule constraints (e.g., "I can't go to bed earlier than 11 PM on weekdays"), the calculator generates a realistic recovery plan. It might suggest adding 30 minutes to your bedtime for two weeks, taking a specific nap schedule, or adjusting your weekend sleep-in strategy. These aren't generic tips—they're tailored to your numbers.</li>
      <li><strong>Long-term Trend Analysis:</strong> If you use the calculator weekly or monthly, it will store your historical data (locally, on your device—not on our servers) and show you trends over months. Are you getting better or worse? Does your sleep debt spike during certain seasons? This long-term view helps you make structural changes, not just one-time fixes.</li>
    </ul>

    <h3>One Final Thought (Because This Matters More Than You Think):</h3>
    <p>I'm not going to stand here and tell you that tracking sleep debt will solve all your problems. It won't fix a toxic job, a crying baby, or a medical condition. But what it will do is give you one piece of clear, actionable data about your own body. Most of us spend our lives guessing about sleep—"I think I got enough," "I probably need more," "I'll sleep when I'm dead." That's not a plan. That's avoidance. The Sleep Debt Calculator is just a tool. It's up to you to use it. Enter your numbers, look at the results honestly, and decide if you're willing to make small changes. You don't have to become a sleep monk. You don't have to be in bed by 9 PM every night. But if you're tired all the time—truly tired, not just "I didn't have coffee yet" tired—then you owe it to yourself to at least measure the problem. The data doesn't lie. And once you see the number, you can't unsee it. That's the first step toward feeling better. Try the calculator tonight. And then try going to bed 20 minutes earlier. See what happens. You might be surprised.</p>
</div>
</div>

<!-- Add Sleep Entry Modal -->
<div id="sleepEntryModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Add Sleep Entry</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div class="input-group">
        <label class="input-label">Date</label>
        <input type="date" id="sleepDate" class="input-field">
      </div>
      <div class="input-group">
        <label class="input-label">Hours Slept</label>
        <input type="number" id="sleepHours" class="input-field" min="0" max="24" step="0.5" value="7">
      </div>
      <div class="input-group">
        <label class="input-label">Sleep Quality (1-10)</label>
        <input type="number" id="sleepQualityInput" class="input-field" min="1" max="10" value="7">
      </div>
      <div class="input-group">
        <label class="input-label">Notes (Optional)</label>
        <textarea id="sleepNotes" class="input-field" rows="3" placeholder="Any factors affecting your sleep?"></textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelSleepEntry">Cancel</button>
      <button class="modal-button primary" id="saveSleepEntry">Save Entry</button>
    </div>
  </div>
</div>

<!-- Recommendations Modal -->
<div id="recommendationsModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Personalized Sleep Recommendations</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div id="personalizedRecommendations">
        <!-- Recommendations will be populated here -->
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeRecommendations">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const ageInput = document.getElementById('age');
    const recommendedHoursInput = document.getElementById('recommendedHours');
    const trackingPeriodSelect = document.getElementById('trackingPeriod');
    const sleepPatternSelect = document.getElementById('sleepPattern');
    const lifestyleSelect = document.getElementById('lifestyle');
    const stressLevelSelect = document.getElementById('stressLevel');
    const trackNapsCheckbox = document.getElementById('trackNaps');
    const adjustRecommendedCheckbox = document.getElementById('adjustRecommended');
    
    const actionButtons = document.querySelectorAll('.action-button');
    const alertContainer = document.getElementById('alertContainer');
    const sleepHistoryBody = document.getElementById('sleepHistoryBody');
    const sleepChart = document.getElementById('sleepChart');
    
    // Modal elements
    const sleepEntryModal = document.getElementById('sleepEntryModal');
    const recommendationsModal = document.getElementById('recommendationsModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelSleepEntry = document.getElementById('cancelSleepEntry');
    const saveSleepEntry = document.getElementById('saveSleepEntry');
    const closeRecommendations = document.getElementById('closeRecommendations');
    const personalizedRecommendations = document.getElementById('personalizedRecommendations');

    // Sleep data storage
    let sleepData = JSON.parse(localStorage.getItem('sleepData')) || [];
    let currentSleepDebt = 0;

    // Initialize calculator
    initializeCalculator();

    // Event listeners
    ageInput.addEventListener('change', updateRecommendedSleep);
    adjustRecommendedCheckbox.addEventListener('change', updateRecommendedSleep);
    
    actionButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleSleepAction(action);
      });
    });

    // Modal event listeners
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        sleepEntryModal.style.display = 'none';
        recommendationsModal.style.display = 'none';
      });
    });

    cancelSleepEntry.addEventListener('click', function() {
      sleepEntryModal.style.display = 'none';
    });

    saveSleepEntry.addEventListener('click', function() {
      saveSleepEntryHandler();
    });

    closeRecommendations.addEventListener('click', function() {
      recommendationsModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === sleepEntryModal || event.target === recommendationsModal) {
        sleepEntryModal.style.display = 'none';
        recommendationsModal.style.display = 'none';
      }
    });

    function initializeCalculator() {
      updateRecommendedSleep();
      loadSleepHistory();
      calculateSleepDebt();
      updateSleepChart();
    }

    function updateRecommendedSleep() {
      const age = parseInt(ageInput.value);
      let recommendedHours = 8; // Default for adults
      
      if (adjustRecommendedCheckbox.checked) {
        // Age-based sleep recommendations
        if (age <= 1) recommendedHours = 14;
        else if (age <= 2) recommendedHours = 13;
        else if (age <= 5) recommendedHours = 11;
        else if (age <= 13) recommendedHours = 10;
        else if (age <= 17) recommendedHours = 9;
        else if (age <= 64) recommendedHours = 8;
        else recommendedHours = 7;
      }
      
      recommendedHoursInput.value = recommendedHours;
      document.getElementById('recommendedSleep').textContent = `${recommendedHours} hours`;
    }

    function loadSleepHistory() {
      // Clear existing rows
      sleepHistoryBody.innerHTML = '';
      
      // Get last 7 entries or all if less than 7
      const recentEntries = sleepData.slice(-7);
      
      if (recentEntries.length === 0) {
        sleepHistoryBody.innerHTML = '<tr><td colspan="4" style="text-align: center;">No sleep entries yet. Add your first entry!</td></tr>';
        return;
      }
      
      recentEntries.forEach(entry => {
        const row = document.createElement('tr');
        
        // Format date
        const date = new Date(entry.date);
        const formattedDate = date.toLocaleDateString();
        
        // Determine sleep quality indicator
        let qualityClass = 'quality-fair';
        let qualityText = 'Fair';
        
        if (entry.quality >= 9) {
          qualityClass = 'quality-excellent';
          qualityText = 'Excellent';
        } else if (entry.quality >= 7) {
          qualityClass = 'quality-good';
          qualityText = 'Good';
        } else if (entry.quality >= 5) {
          qualityClass = 'quality-fair';
          qualityText = 'Fair';
        } else if (entry.quality >= 3) {
          qualityClass = 'quality-poor';
          qualityText = 'Poor';
        } else {
          qualityClass = 'quality-critical';
          qualityText = 'Critical';
        }
        
        row.innerHTML = `
          <td>${formattedDate}</td>
          <td>${entry.hours} hours</td>
          <td>${entry.debt > 0 ? '+' : ''}${entry.debt.toFixed(1)} hours</td>
          <td>
            <div class="sleep-quality">
              <div class="quality-indicator ${qualityClass}"></div>
              <span>${qualityText}</span>
            </div>
          </td>
        `;
        
        sleepHistoryBody.appendChild(row);
      });
    }

    function calculateSleepDebt() {
      if (sleepData.length === 0) {
        currentSleepDebt = 0;
        updateSleepStats();
        return;
      }
      
      const recommendedHours = parseFloat(recommendedHoursInput.value);
      const trackingPeriod = parseInt(trackingPeriodSelect.value);
      
      // Filter data for tracking period
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - trackingPeriod);
      
      const relevantData = sleepData.filter(entry => {
        const entryDate = new Date(entry.date);
        return entryDate >= cutoffDate;
      });
      
      // Calculate total sleep debt
      let totalDebt = 0;
      relevantData.forEach(entry => {
        totalDebt += entry.debt;
      });
      
      currentSleepDebt = totalDebt;
      updateSleepStats();
    }

    function updateSleepStats() {
      document.getElementById('sleepDebt').textContent = `${currentSleepDebt.toFixed(1)} hours`;
      
      // Update sleep quality based on debt
      let qualityText = 'Excellent';
      let qualityClass = 'quality-excellent';
      
      if (currentSleepDebt > 10) {
        qualityText = 'Critical';
        qualityClass = 'quality-critical';
      } else if (currentSleepDebt > 5) {
        qualityText = 'Poor';
        qualityClass = 'quality-poor';
      } else if (currentSleepDebt > 2) {
        qualityText = 'Fair';
        qualityClass = 'quality-fair';
      } else if (currentSleepDebt > 0) {
        qualityText = 'Good';
        qualityClass = 'quality-good';
      }
      
      document.getElementById('sleepQuality').textContent = qualityText;
      
      // Calculate recovery time (assuming 1 hour of extra sleep recovers 1 hour of debt)
      const recoveryDays = Math.ceil(currentSleepDebt / 1.5); // 1.5 hours extra per day
      document.getElementById('recoveryTime').textContent = `${recoveryDays} days`;
    }

    function updateSleepChart() {
      // Clear existing chart
      sleepChart.innerHTML = '';
      
      if (sleepData.length === 0) return;
      
      // Get last 28 days or all available data
      const chartData = sleepData.slice(-28);
      const maxDebt = Math.max(...chartData.map(entry => Math.abs(entry.debt)), 1);
      
      // Create bars for the chart
      chartData.forEach((entry, index) => {
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        
        // Calculate bar height (percentage of max debt)
        const barHeight = (Math.abs(entry.debt) / maxDebt) * 100;
        bar.style.height = `${barHeight}%`;
        bar.style.width = `${100 / chartData.length}%`;
        bar.style.left = `${(index / chartData.length) * 100}%`;
        
        // Color based on debt (red for positive debt, green for negative/surplus)
        bar.style.background = entry.debt > 0 ? '#dc3545' : '#28a745';
        
        // Tooltip with date and debt amount
        const date = new Date(entry.date);
        bar.title = `${date.toLocaleDateString()}: ${entry.debt > 0 ? '+' : ''}${entry.debt.toFixed(1)} hours`;
        
        sleepChart.appendChild(bar);
      });
    }

    function handleSleepAction(action) {
      switch (action) {
        case 'calculate':
          calculateSleepDebt();
          showAlert('Sleep debt calculated successfully!', 'success');
          break;

        case 'addEntry':
          // Set today's date as default
          const today = new Date().toISOString().split('T')[0];
          document.getElementById('sleepDate').value = today;
          document.getElementById('sleepHours').value = '';
          document.getElementById('sleepQualityInput').value = '7';
          document.getElementById('sleepNotes').value = '';
          sleepEntryModal.style.display = 'block';
          break;

        case 'reset':
          if (confirm('Are you sure you want to reset all sleep data? This cannot be undone.')) {
            sleepData = [];
            localStorage.setItem('sleepData', JSON.stringify(sleepData));
            initializeCalculator();
            showAlert('Sleep data reset successfully!', 'success');
          }
          break;

        case 'save':
          localStorage.setItem('sleepData', JSON.stringify(sleepData));
          showAlert('Sleep progress saved successfully!', 'success');
          break;

        case 'recommendations':
          showPersonalizedRecommendations();
          break;

        case 'export':
          exportSleepData();
          break;
      }
    }

    function saveSleepEntryHandler() {
      const date = document.getElementById('sleepDate').value;
      const hours = parseFloat(document.getElementById('sleepHours').value);
      const quality = parseInt(document.getElementById('sleepQualityInput').value);
      const notes = document.getElementById('sleepNotes').value;
      
      if (!date || isNaN(hours) || hours < 0 || hours > 24) {
        showAlert('Please enter valid sleep data.', 'error');
        return;
      }
      
      const recommendedHours = parseFloat(recommendedHoursInput.value);
      const debt = recommendedHours - hours;
      
      // Add new entry
      const newEntry = {
        date: date,
        hours: hours,
        quality: quality,
        debt: debt,
        notes: notes
      };
      
      sleepData.push(newEntry);
      
      // Sort by date
      sleepData.sort((a, b) => new Date(a.date) - new Date(b.date));
      
      // Save to localStorage
      localStorage.setItem('sleepData', JSON.stringify(sleepData));
      
      // Update UI
      loadSleepHistory();
      calculateSleepDebt();
      updateSleepChart();
      
      sleepEntryModal.style.display = 'none';
      showAlert('Sleep entry added successfully!', 'success');
    }

    function showPersonalizedRecommendations() {
      let recommendationsHTML = '';
      
      if (currentSleepDebt > 10) {
        recommendationsHTML = `
          <div class="recommendation-card">
            <h4>High Sleep Debt Detected</h4>
            <p>Your current sleep debt of ${currentSleepDebt.toFixed(1)} hours is significant. Focus on:</p>
            <ul>
              <li>Adding 1-2 extra hours of sleep each night</li>
              <li>Taking short (20-30 minute) naps when possible</li>
              <li>Prioritizing sleep over non-essential activities</li>
              <li>Consulting a healthcare provider if fatigue persists</li>
            </ul>
          </div>
        `;
      } else if (currentSleepDebt > 5) {
        recommendationsHTML = `
          <div class="recommendation-card">
            <h4>Moderate Sleep Debt</h4>
            <p>Your sleep debt of ${currentSleepDebt.toFixed(1)} hours is manageable with consistent effort:</p>
            <ul>
              <li>Aim for 30-60 minutes of extra sleep nightly</li>
              <li>Maintain a consistent sleep schedule</li>
              <li>Limit caffeine after 2 PM</li>
              <li>Create a relaxing bedtime routine</li>
            </ul>
          </div>
        `;
      } else if (currentSleepDebt > 0) {
        recommendationsHTML = `
          <div class="recommendation-card">
            <h4>Minimal Sleep Debt</h4>
            <p>Your sleep debt of ${currentSleepDebt.toFixed(1)} hours is minimal. Maintain your good habits:</p>
            <ul>
              <li>Continue getting your recommended ${recommendedHoursInput.value} hours</li>
              <li>Stay consistent with your sleep schedule</li>
              <li>Monitor for any changes in sleep patterns</li>
            </ul>
          </div>
        `;
      } else {
        recommendationsHTML = `
          <div class="recommendation-card">
            <h4>Excellent Sleep Health</h4>
            <p>You're meeting or exceeding your sleep needs! Keep up the good work:</p>
            <ul>
              <li>Maintain your current sleep schedule</li>
              <li>Continue prioritizing sleep as part of your health routine</li>
              <li>Share your successful sleep habits with others</li>
            </ul>
          </div>
        `;
      }
      
      // Add lifestyle-specific recommendations
      const lifestyle = lifestyleSelect.value;
      if (lifestyle === 'active' || lifestyle === 'athlete') {
        recommendationsHTML += `
          <div class="recommendation-card">
            <h4>Active Lifestyle Considerations</h4>
            <p>As an active individual, your sleep needs might be higher than average:</p>
            <ul>
              <li>Consider adding 30-60 minutes to your sleep target on intense training days</li>
              <li>Pay attention to recovery sleep after strenuous activity</li>
              <li>Sleep is when muscle repair and growth occur</li>
            </ul>
          </div>
        `;
      }
      
      personalizedRecommendations.innerHTML = recommendationsHTML;
      recommendationsModal.style.display = 'block';
    }

    function exportSleepData() {
      if (sleepData.length === 0) {
        showAlert('No sleep data to export.', 'error');
        return;
      }
      
      // Convert to CSV
      let csv = 'Date,Hours Slept,Sleep Quality,Sleep Debt,Notes\n';
      sleepData.forEach(entry => {
        csv += `"${entry.date}",${entry.hours},${entry.quality},${entry.debt},"${entry.notes || ''}"\n`;
      });
      
      // Create download link
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'sleep_data.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      showAlert('Sleep data exported successfully!', 'success');
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