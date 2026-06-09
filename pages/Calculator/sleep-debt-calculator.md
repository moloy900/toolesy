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
    <h2>Sleep Debt Calculator – Understand Your Sleep Deficit and Take Control of Your Energy Levels</h2>

    <p>Most people know what it feels like to lose a few hours of sleep. Maybe you stayed up late finishing a project, binge-watched a television series, traveled across time zones, or simply had trouble falling asleep. The next morning you feel tired, rely on extra coffee, and promise yourself you'll sleep earlier the next night.</p>

    <p>What many people don't realize is that missed sleep doesn't simply disappear. Just like unpaid bills can accumulate into financial debt, lost sleep can build into what experts call <strong>sleep debt</strong>. Over time, even small amounts of missed sleep can add up and affect your mood, concentration, productivity, and overall health.</p>

    <p>Our free <strong>Sleep Debt Calculator</strong> is designed to help you understand exactly how much sleep you're missing and how that shortage may be affecting your daily life. Instead of guessing whether you're getting enough rest, you can use actual data to calculate your sleep deficit and create a practical plan for recovery.</p>

    <p>The calculator is simple to use, completely free, and works directly in your browser. There are no subscriptions, downloads, or complicated tracking systems required. You simply enter your sleep information, review the results, and gain valuable insight into your sleep habits.</p>

    <p>Whether you're a busy professional, student, parent, athlete, shift worker, or someone who constantly feels tired despite spending plenty of time in bed, understanding sleep debt can be an important step toward improving your overall wellbeing.</p>

    <h3>How to Use This Sleep Debt Calculator (Step-by-Step):</h3>

    <p>The calculator is designed to make sleep tracking easy, even if you've never monitored your sleep before.</p>

    <ul>
        <li><strong>Enter Your Age:</strong> Sleep requirements vary throughout life. Providing your age allows the calculator to estimate recommended sleep needs more accurately.</li>

        <li><strong>Select a Tracking Period:</strong> Choose whether you want to review the last 7, 14, 30, or 90 days of sleep data.</li>

        <li><strong>Record Your Sleep Hours:</strong> Enter your actual sleep duration for each day. Focus on real sleep time rather than total time spent lying in bed.</li>

        <li><strong>Calculate Your Results:</strong> The calculator compares your sleep history against recommended sleep requirements.</li>

        <li><strong>Review Recovery Recommendations:</strong> Learn how much sleep debt you've accumulated and discover practical ways to improve your sleep habits.</li>
    </ul>

    <h3>What Is Sleep Debt?</h3>

    <p>Sleep debt is the difference between the amount of sleep your body needs and the amount of sleep you actually get.</p>

    <p>For example, imagine that your body functions best with eight hours of sleep each night. If you consistently sleep only six hours, you create a two-hour sleep deficit every day.</p>

    <p>After five consecutive days, that deficit grows to ten hours. Even though you may continue functioning, your body and brain are operating with less recovery time than they need.</p>

    <p>This accumulated shortage is known as sleep debt.</p>

    <p>Unlike a single bad night's sleep, sleep debt develops gradually. Many people become accustomed to feeling slightly tired and no longer recognize how much their performance and wellbeing have been affected.</p>

    <h3>Why Sleep Debt Matters</h3>

    <p>Sleep isn't simply a period of rest. During sleep, the body performs essential maintenance that supports nearly every system involved in physical and mental health.</p>

    <p>Your brain processes information gathered throughout the day, consolidates memories, regulates emotions, and prepares for new learning experiences. Meanwhile, your body repairs tissues, strengthens the immune system, regulates hormones, and restores energy reserves.</p>

    <p>When you consistently miss sleep, these processes become less effective. The effects may be subtle at first, but they often become more noticeable over time.</p>

    <p>This is why understanding and monitoring sleep debt is so important. It provides a measurable way to identify sleep shortages before they begin significantly affecting your health and performance.</p>

    <h3>A Real-Life Example of Sleep Debt</h3>

    <p>Imagine a professional who needs approximately eight hours of sleep each night but only manages six and a half hours due to work commitments.</p>

    <p>That creates a daily sleep deficit of one and a half hours. After one workweek, the accumulated debt reaches seven and a half hours.</p>

    <p>Many people attempt to recover by sleeping longer on weekends. While additional weekend sleep can help reduce some of the deficit, it often doesn't completely eliminate the accumulated debt.</p>

    <p>As a result, the person may begin the following week still carrying residual fatigue despite believing they "caught up" on sleep.</p>

    <p>This cycle repeats for months or even years for many adults.</p>

    <h3>Common Signs You May Have Sleep Debt</h3>

    <p>Sleep debt affects people differently, but several warning signs are common.</p>

    <ul>
        <li><strong>Difficulty Waking Up:</strong> Struggling to get out of bed despite multiple alarms.</li>

        <li><strong>Daytime Fatigue:</strong> Feeling tired during work, school, or daily activities.</li>

        <li><strong>Reduced Focus:</strong> Trouble concentrating on tasks or maintaining attention.</li>

        <li><strong>Mood Changes:</strong> Increased irritability, frustration, or emotional sensitivity.</li>

        <li><strong>Frequent Caffeine Dependence:</strong> Relying heavily on coffee or energy drinks to stay alert.</li>

        <li><strong>Memory Problems:</strong> Difficulty remembering information or recalling details.</li>

        <li><strong>Lower Productivity:</strong> Completing tasks more slowly than usual.</li>
    </ul>

    <p>If several of these symptoms sound familiar, tracking your sleep debt may provide valuable insight into what is happening.</p>

    <h3>How Much Sleep Do You Actually Need?</h3>

    <p>One of the biggest misconceptions about sleep is that everyone requires exactly eight hours per night. In reality, sleep needs vary depending on age, genetics, lifestyle, and overall health.</p>

    <p>Most healthy adults require between seven and nine hours of sleep each night. Teenagers generally need more sleep because of ongoing growth and development, while younger children often need significantly longer sleep durations.</p>

    <p>Individual differences also matter. Some people feel rested after seven hours, while others function best with closer to nine hours.</p>

    <p>The Sleep Debt Calculator uses established sleep guidelines as a starting point while helping users understand how their actual sleep patterns compare to recommended levels.</p>

    <h3>The Difference Between Sleepiness and Sleep Debt</h3>

    <p>Feeling sleepy after a late night is normal. However, sleep debt is different from temporary tiredness.</p>

    <p>Sleepiness usually reflects your current level of fatigue. Sleep debt represents accumulated sleep loss over time.</p>

    <p>Someone with significant sleep debt may no longer feel obviously sleepy because their body has adapted to operating below optimal performance levels.</p>

    <p>This adaptation can be misleading because many people underestimate how much chronic sleep deprivation affects their cognitive abilities, mood, and physical health.</p>

    <h3>Who Should Use a Sleep Debt Calculator?</h3>

    <p>Nearly anyone can benefit from understanding their sleep patterns, but certain groups often find sleep debt tracking especially valuable.</p>

    <ul>
        <li><strong>Professionals:</strong> Monitor how demanding schedules affect sleep and productivity.</li>

        <li><strong>Students:</strong> Balance academic responsibilities with healthy recovery.</li>

        <li><strong>Parents:</strong> Understand the effects of disrupted sleep during childcare responsibilities.</li>

        <li><strong>Athletes:</strong> Track recovery and optimize physical performance.</li>

        <li><strong>Shift Workers:</strong> Manage irregular schedules and sleep disruptions.</li>

        <li><strong>Frequent Travelers:</strong> Monitor sleep challenges caused by changing time zones.</li>
    </ul>

    <p>Regardless of your lifestyle, understanding your sleep debt can help you make more informed decisions about your health, energy, and daily routines.</p>

    <h3>How Sleep Debt Affects Your Brain and Daily Performance</h3>

    <p>Many people think sleep debt simply makes them feel tired. While fatigue is certainly one symptom, the effects of insufficient sleep extend far beyond feeling sleepy. Sleep debt can influence nearly every aspect of brain function, from memory and concentration to decision-making and emotional regulation.</p>

    <p>When you sleep, your brain performs important housekeeping tasks. It organizes information gathered throughout the day, strengthens memories, removes waste products, and prepares for new learning experiences. When sleep is consistently shortened, these processes become less effective.</p>

    <p>This is one reason people with significant sleep debt often struggle to concentrate. Tasks that normally feel simple may require more effort, and productivity can decline even when motivation remains high.</p>

    <p>Reaction times may also become slower. Research has shown that chronic sleep deprivation can affect alertness in ways similar to alcohol impairment. This can be particularly concerning for drivers, machine operators, healthcare workers, and anyone responsible for safety-sensitive tasks.</p>

    <h3>The Impact on Memory and Learning</h3>

    <p>Sleep plays a major role in memory formation. During sleep, especially during deep sleep and REM sleep, the brain processes information and transfers important memories into long-term storage.</p>

    <p>Students who regularly sacrifice sleep to study often discover that the lack of rest reduces their ability to remember what they learned. The same principle applies to professionals learning new skills or adapting to new responsibilities.</p>

    <p>Sleep debt can make it more difficult to retain information, recall details, and solve complex problems. Over time, these effects may influence academic performance, workplace productivity, and overall cognitive efficiency.</p>

    <h3>Emotional Effects of Sleep Debt</h3>

    <p>Sleep doesn't only affect thinking—it also influences emotions. People who accumulate sleep debt often notice changes in mood long before they recognize the extent of their sleep deprivation.</p>

    <p>Even a few nights of insufficient sleep can increase irritability, frustration, and emotional sensitivity. Minor inconveniences may feel more stressful, and patience can become harder to maintain.</p>

    <p>Many people also report feeling less motivated, less positive, and less emotionally resilient when carrying significant sleep debt.</p>

    <p>This happens because sleep helps regulate emotional processing within the brain. Without enough recovery time, emotional responses may become more intense and more difficult to manage.</p>

    <h3>Physical Health Consequences of Chronic Sleep Debt</h3>

    <p>Sleep debt isn't only a mental performance issue. Long-term sleep deprivation may also affect physical health.</p>

    <p>During sleep, the body repairs tissues, balances hormones, strengthens immune defenses, and supports metabolic processes. When sleep is consistently restricted, these functions may become less efficient.</p>

    <p>Research has linked chronic sleep deprivation with increased risks of various health concerns, including weight gain, weakened immunity, high blood pressure, cardiovascular problems, and metabolic disorders.</p>

    <p>While occasional sleep loss is unlikely to cause serious harm, persistent sleep debt can place additional strain on the body's systems over time.</p>

    <h3>Sleep Debt and the Immune System</h3>

    <p>Your immune system depends on adequate sleep to function effectively. During sleep, the body produces proteins and immune cells that help defend against illness and infection.</p>

    <p>People who consistently sleep too little may find themselves getting sick more frequently or taking longer to recover from common illnesses.</p>

    <p>This doesn't mean every cold or infection is caused by sleep debt, but maintaining healthy sleep habits is an important part of supporting overall immune health.</p>

    <h3>Can You Catch Up on Lost Sleep?</h3>

    <p>One of the most common questions about sleep debt is whether it can be fully repaid. The answer is somewhat complicated.</p>

    <p>Extra sleep can certainly help reduce accumulated sleep debt. Sleeping longer on weekends or after periods of sleep deprivation often improves alertness and reduces fatigue.</p>

    <p>However, recovery is not always immediate. Some effects of chronic sleep deprivation may take several days or even weeks of consistent healthy sleep habits to fully improve.</p>

    <p>This is why experts generally recommend preventing sleep debt whenever possible rather than relying entirely on catch-up sleep.</p>

    <h3>The Role of Naps in Sleep Recovery</h3>

    <p>Naps can be useful when you're carrying sleep debt, especially if a full night's recovery sleep isn't immediately possible.</p>

    <p>Short naps of approximately 20 to 30 minutes may help improve alertness, concentration, and mood without causing excessive grogginess afterward.</p>

    <p>Longer naps may provide additional recovery benefits, but they can sometimes interfere with nighttime sleep if taken too late in the day.</p>

    <p>While naps can help reduce fatigue, they generally work best as a supplement to healthy nighttime sleep rather than a replacement for it.</p>

    <h3>Why Tracking Sleep Matters</h3>

    <p>Many people underestimate how much sleep they actually lose. A missed hour here and there may seem insignificant, but over time these small deficits can accumulate into substantial sleep debt.</p>

    <p>Tracking sleep helps transform vague assumptions into measurable information. By recording sleep duration consistently, you can identify patterns that may otherwise go unnoticed.</p>

    <p>You may discover that certain work schedules, social activities, travel routines, or lifestyle habits regularly reduce your sleep more than you realized.</p>

    <p>The Sleep Debt Calculator helps bring these patterns into focus, making it easier to take proactive steps toward healthier sleep habits.</p>

    <h3>Advanced Sleep Debt Tracking Features</h3>

    <p>Modern sleep tracking tools provide more than simple calculations. They help users understand trends, identify risk factors, and create practical recovery plans based on real sleep data.</p>

    <p>Our Sleep Debt Calculator is designed to make this process simple and accessible for everyone.</p>

    <ul>
        <li><strong>Age-Based Sleep Recommendations:</strong> Sleep requirements automatically adjust according to established age guidelines.</li>

        <li><strong>Flexible Tracking Periods:</strong> Analyze sleep patterns across weekly, monthly, or longer timeframes.</li>

        <li><strong>Deficit Monitoring:</strong> Instantly see how much sleep debt has accumulated over your selected period.</li>

        <li><strong>Recovery Guidance:</strong> Receive practical suggestions for gradually reducing sleep debt.</li>

        <li><strong>Trend Analysis:</strong> Identify recurring sleep patterns that may be affecting your wellbeing.</li>
    </ul>

    <h3>Common Myths About Sleep Debt</h3>

    <p>Sleep is often surrounded by misconceptions that can make healthy sleep habits harder to maintain.</p>

    <p><strong>Myth:</strong> I can function perfectly fine on five hours of sleep.<br>
    <strong>Reality:</strong> While some people adapt to feeling tired, most adults perform significantly better with adequate sleep.</p>

    <p><strong>Myth:</strong> Weekend sleep completely fixes weekday sleep loss.<br>
    <strong>Reality:</strong> Extra weekend sleep can help reduce sleep debt, but it may not fully reverse all effects of chronic sleep deprivation.</p>

    <p><strong>Myth:</strong> Coffee eliminates sleep debt.<br>
    <strong>Reality:</strong> Caffeine may temporarily improve alertness, but it does not replace the restorative benefits of sleep.</p>

    <p><strong>Myth:</strong> Sleeping longer is always better.<br>
    <strong>Reality:</strong> Consistent, high-quality sleep is generally more beneficial than irregular patterns of excessive and insufficient sleep.</p>

    <h3>Practical Ways to Reduce Sleep Debt</h3>

    <p>If you've accumulated sleep debt, gradual improvement is often more effective than dramatic changes.</p>

    <ul>
        <li><strong>Prioritize Sleep:</strong> Treat sleep as an essential part of your health routine rather than an optional activity.</li>

        <li><strong>Create a Consistent Schedule:</strong> Go to bed and wake up at similar times whenever possible.</li>

        <li><strong>Limit Late-Night Screen Exposure:</strong> Reduce blue light exposure before bedtime.</li>

        <li><strong>Develop a Relaxing Routine:</strong> Reading, stretching, or other calming activities may help prepare the body for sleep.</li>

        <li><strong>Optimize Your Sleep Environment:</strong> A cool, dark, and quiet bedroom often supports better rest.</li>

        <li><strong>Monitor Caffeine Intake:</strong> Limiting stimulants later in the day may improve sleep quality.</li>
    </ul>

    <h3>Frequently Asked Questions</h3>

    <p><strong>What is sleep debt?</strong><br>
    Sleep debt is the accumulated difference between the amount of sleep your body needs and the amount you actually receive.</p>

    <p><strong>How is sleep debt calculated?</strong><br>
    The calculation compares recommended sleep duration with actual sleep duration over a specific period of time.</p>

    <p><strong>Can sleep debt affect productivity?</strong><br>
    Yes. Sleep debt may reduce concentration, reaction time, memory performance, and overall cognitive efficiency.</p>

    <p><strong>Can naps eliminate sleep debt?</strong><br>
    Naps can help reduce fatigue and provide temporary recovery benefits, but they generally do not replace consistent nighttime sleep.</p>

    <p><strong>How long does recovery take?</strong><br>
    Recovery depends on the amount of accumulated sleep debt. Mild deficits may improve within a few days, while larger deficits can require longer periods of healthy sleep.</p>

    <p><strong>Is the Sleep Debt Calculator free?</strong><br>
    Yes. The calculator is completely free to use and accessible directly through your browser.</p>

    <h3>Why Choose Our Sleep Debt Calculator?</h3>

    <p>Our Sleep Debt Calculator combines simplicity, accuracy, and practical insights into one easy-to-use tool.</p>

    <p>Unlike complicated sleep-tracking systems that require wearable devices or paid subscriptions, this calculator focuses on the information that matters most—understanding how much sleep you're getting compared to how much your body needs.</p>

    <p>Everything happens directly in your browser, helping protect your privacy while providing fast and reliable results.</p>

    <p>Whether you're monitoring a busy work schedule, balancing family responsibilities, preparing for exams, or simply trying to improve your overall health, the calculator can help you make informed decisions about your sleep habits.</p>

    <h3>Final Thoughts</h3>

    <p>Sleep debt is one of the most overlooked factors affecting daily energy, productivity, mood, and long-term health. Because it accumulates gradually, many people don't realize how much sleep they've lost until the effects become difficult to ignore.</p>

    <p>Tracking your sleep debt provides valuable insight into your sleep habits and helps identify opportunities for improvement. Even small adjustments to bedtime routines and sleep schedules can lead to meaningful benefits over time.</p>

    <p>Our free Sleep Debt Calculator makes it easy to measure sleep deficits, understand recovery needs, and develop healthier sleep habits based on real data rather than guesswork.</p>

    <p>Start tracking your sleep today and take the first step toward better rest, improved energy, stronger focus, and a healthier lifestyle.</p>

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