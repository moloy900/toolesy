---
layout: default
title: "Social Media Time Wastage Calculator - Track Your Digital Time"
permalink: /social-media-time-wastage-calculator/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Social Media Time Wastage Calculator - Track Your Digital Time</title>
<meta name="description"
  content="Free online Social Media Time Wastage Calculator. Track how much time you spend on social media platforms and calculate the productivity loss. Optimize your digital habits.">
<meta name="keywords"
  content="social media time calculator, time wastage calculator, digital detox, productivity tracker, social media addiction, time management, digital wellness">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Social Media Calculator Styles */
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

  .platforms-section {
    margin: 20px 0;
  }

  .platform-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    margin-bottom: 20px;
  }

  .platform-item {
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    border-left: 4px solid #e0e0e0;
  }

  .platform-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .platform-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    color: white;
    font-size: 1.2rem;
  }

  .facebook-bg { background: #3b5998; }
  .instagram-bg { background: #E1306C; }
  .twitter-bg { background: #1DA1F2; }
  .youtube-bg { background: #FF0000; }
  .tiktok-bg { background: #000000; }
  .whatsapp-bg { background: #25D366; }
  .linkedin-bg { background: #0077B5; }
  .snapchat-bg { background: #FFFC00; color: #000; }
  .reddit-bg { background: #FF4500; }
  .pinterest-bg { background: #BD081C; }

  .platform-name {
    font-weight: 600;
    color: #2c3e50;
  }

  .time-input {
    width: 100%;
    padding: 10px;
    border: 2px solid #e0e6ed;
    border-radius: 6px;
    font-size: 14px;
    transition: border-color 0.3s;
  }

  .time-input:focus {
    outline: none;
    border-color: var(--primary);
  }

  .time-options {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }

  .time-option {
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

  .time-option:hover {
    background: #e9ecef;
  }

  .time-option.active {
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

  .calc-button.danger {
    background: #dc3545;
    color: white;
  }

  .calc-button.danger:hover {
    background: #c82333;
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

  .result-item.danger {
    border-left-color: #dc3545;
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

  .result-item.danger .result-value {
    color: #dc3545;
  }

  .result-description {
    font-size: 0.9rem;
    color: #7f8c8d;
  }

  .chart-container {
    margin-top: 30px;
    height: 300px;
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .time-breakdown {
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

  .productivity-tips {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .productivity-tips h3 {
    color: var(--primary);
    margin-bottom: 15px;
  }

  .productivity-tips ul {
    margin: 15px 0;
    padding-left: 30px;
  }

  .productivity-tips li {
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

    .platform-grid {
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

    .chart-container {
      height: 250px;
    }
  }
</style>

<div class="calculator-container">
  <h1>Social Media Time Wastage Calculator</h1>
  <p class="welcome-message">Discover how much time you're spending on social media and its impact on your productivity, mental health, and life goals. Calculate your digital time wastage and get personalized recommendations.</p>

  <div class="calculator-section">
    <h2>Social Media Time Tracker</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Total Daily Time: </span>
        <span id="totalTime">0h 0m</span>
      </div>
      <div class="counter-item">
        <span>Weekly Time: </span>
        <span id="weeklyTime">0h 0m</span>
      </div>
      <div class="counter-item">
        <span>Monthly Time: </span>
        <span id="monthlyTime">0h 0m</span>
      </div>
      <div class="counter-item">
        <span>Yearly Time: </span>
        <span id="yearlyTime">0h 0m</span>
      </div>
    </div>

    <div class="platforms-section">
      <h2>Social Media Platforms <small>Enter your daily usage for each platform</small></h2>
      
      <div class="platform-grid">
        <!-- Facebook -->
        <div class="platform-item">
          <div class="platform-header">
            <div class="platform-icon facebook-bg">
              <i class="fab fa-facebook-f"></i>
            </div>
            <div class="platform-name">Facebook</div>
          </div>
          <input type="number" class="time-input" id="facebookTime" min="0" max="24" step="0.5" placeholder="Hours per day">
          <div class="time-options">
            <div class="time-option" data-minutes="30">30m</div>
            <div class="time-option" data-minutes="60">1h</div>
            <div class="time-option" data-minutes="120">2h</div>
            <div class="time-option" data-minutes="180">3h+</div>
          </div>
        </div>

        <!-- Instagram -->
        <div class="platform-item">
          <div class="platform-header">
            <div class="platform-icon instagram-bg">
              <i class="fab fa-instagram"></i>
            </div>
            <div class="platform-name">Instagram</div>
          </div>
          <input type="number" class="time-input" id="instagramTime" min="0" max="24" step="0.5" placeholder="Hours per day">
          <div class="time-options">
            <div class="time-option" data-minutes="30">30m</div>
            <div class="time-option" data-minutes="60">1h</div>
            <div class="time-option" data-minutes="120">2h</div>
            <div class="time-option" data-minutes="180">3h+</div>
          </div>
        </div>

        <!-- Twitter -->
        <div class="platform-item">
          <div class="platform-header">
            <div class="platform-icon twitter-bg">
              <i class="fab fa-twitter"></i>
            </div>
            <div class="platform-name">Twitter</div>
          </div>
          <input type="number" class="time-input" id="twitterTime" min="0" max="24" step="0.5" placeholder="Hours per day">
          <div class="time-options">
            <div class="time-option" data-minutes="30">30m</div>
            <div class="time-option" data-minutes="60">1h</div>
            <div class="time-option" data-minutes="120">2h</div>
            <div class="time-option" data-minutes="180">3h+</div>
          </div>
        </div>

        <!-- YouTube -->
        <div class="platform-item">
          <div class="platform-header">
            <div class="platform-icon youtube-bg">
              <i class="fab fa-youtube"></i>
            </div>
            <div class="platform-name">YouTube</div>
          </div>
          <input type="number" class="time-input" id="youtubeTime" min="0" max="24" step="0.5" placeholder="Hours per day">
          <div class="time-options">
            <div class="time-option" data-minutes="30">30m</div>
            <div class="time-option" data-minutes="60">1h</div>
            <div class="time-option" data-minutes="120">2h</div>
            <div class="time-option" data-minutes="180">3h+</div>
          </div>
        </div>

        <!-- TikTok -->
        <div class="platform-item">
          <div class="platform-header">
            <div class="platform-icon tiktok-bg">
              <i class="fab fa-tiktok"></i>
            </div>
            <div class="platform-name">TikTok</div>
          </div>
          <input type="number" class="time-input" id="tiktokTime" min="0" max="24" step="0.5" placeholder="Hours per day">
          <div class="time-options">
            <div class="time-option" data-minutes="30">30m</div>
            <div class="time-option" data-minutes="60">1h</div>
            <div class="time-option" data-minutes="120">2h</div>
            <div class="time-option" data-minutes="180">3h+</div>
          </div>
        </div>

        <!-- WhatsApp -->
        <div class="platform-item">
          <div class="platform-header">
            <div class="platform-icon whatsapp-bg">
              <i class="fab fa-whatsapp"></i>
            </div>
            <div class="platform-name">WhatsApp</div>
          </div>
          <input type="number" class="time-input" id="whatsappTime" min="0" max="24" step="0.5" placeholder="Hours per day">
          <div class="time-options">
            <div class="time-option" data-minutes="30">30m</div>
            <div class="time-option" data-minutes="60">1h</div>
            <div class="time-option" data-minutes="120">2h</div>
            <div class="time-option" data-minutes="180">3h+</div>
          </div>
        </div>

        <!-- LinkedIn -->
        <div class="platform-item">
          <div class="platform-header">
            <div class="platform-icon linkedin-bg">
              <i class="fab fa-linkedin-in"></i>
            </div>
            <div class="platform-name">LinkedIn</div>
          </div>
          <input type="number" class="time-input" id="linkedinTime" min="0" max="24" step="0.5" placeholder="Hours per day">
          <div class="time-options">
            <div class="time-option" data-minutes="30">30m</div>
            <div class="time-option" data-minutes="60">1h</div>
            <div class="time-option" data-minutes="120">2h</div>
            <div class="time-option" data-minutes="180">3h+</div>
          </div>
        </div>

        <!-- Snapchat -->
        <div class="platform-item">
          <div class="platform-header">
            <div class="platform-icon snapchat-bg">
              <i class="fab fa-snapchat-ghost"></i>
            </div>
            <div class="platform-name">Snapchat</div>
          </div>
          <input type="number" class="time-input" id="snapchatTime" min="0" max="24" step="0.5" placeholder="Hours per day">
          <div class="time-options">
            <div class="time-option" data-minutes="30">30m</div>
            <div class="time-option" data-minutes="60">1h</div>
            <div class="time-option" data-minutes="120">2h</div>
            <div class="time-option" data-minutes="180">3h+</div>
          </div>
        </div>

        <!-- Reddit -->
        <div class="platform-item">
          <div class="platform-header">
            <div class="platform-icon reddit-bg">
              <i class="fab fa-reddit-alien"></i>
            </div>
            <div class="platform-name">Reddit</div>
          </div>
          <input type="number" class="time-input" id="redditTime" min="0" max="24" step="0.5" placeholder="Hours per day">
          <div class="time-options">
            <div class="time-option" data-minutes="30">30m</div>
            <div class="time-option" data-minutes="60">1h</div>
            <div class="time-option" data-minutes="120">2h</div>
            <div class="time-option" data-minutes="180">3h+</div>
          </div>
        </div>

        <!-- Pinterest -->
        <div class="platform-item">
          <div class="platform-header">
            <div class="platform-icon pinterest-bg">
              <i class="fab fa-pinterest"></i>
            </div>
            <div class="platform-name">Pinterest</div>
          </div>
          <input type="number" class="time-input" id="pinterestTime" min="0" max="24" step="0.5" placeholder="Hours per day">
          <div class="time-options">
            <div class="time-option" data-minutes="30">30m</div>
            <div class="time-option" data-minutes="60">1h</div>
            <div class="time-option" data-minutes="120">2h</div>
            <div class="time-option" data-minutes="180">3h+</div>
          </div>
        </div>
      </div>
    </div>

    <div class="calculation-options">
      <div class="option-group">
        <label class="option-label">Calculation Period</label>
        <select id="calculationPeriod" class="option-select">
          <option value="daily">Daily</option>
          <option value="weekly" selected>Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Productivity Value ($/hour)</label>
        <input type="number" id="hourlyRate" class="option-input" min="0" value="25" placeholder="e.g., 25">
        <small>Your estimated hourly earning potential</small>
      </div>
      
      <div class="option-group">
        <label class="option-label">Include Mental Health Impact</label>
        <div class="option-checkbox">
          <input type="checkbox" id="includeMentalHealth" checked>
          <label for="includeMentalHealth">Calculate stress & anxiety impact</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="includeSleepImpact" checked>
          <label for="includeSleepImpact">Include sleep quality impact</label>
        </div>
      </div>
    </div>

    <div class="button-section">
      <button class="calc-button" data-action="calculate">Calculate Time Wastage</button>
      <button class="calc-button success" data-action="save">Save My Data</button>
      <button class="calc-button warning" data-action="compare">Compare With Average</button>
      <button class="calc-button danger" data-action="detox">Digital Detox Plan</button>
      <button class="calc-button secondary" data-action="clear">Clear All</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="results-section" id="resultsSection">
      <h2>Time Wastage Analysis Results</h2>
      
      <div class="results-grid">
        <div class="result-item">
          <h3>Total Time Wasted</h3>
          <div class="result-value" id="totalWastedTime">0h 0m</div>
          <div class="result-description" id="timePeriod">Per week</div>
        </div>
        
        <div class="result-item warning">
          <h3>Productivity Loss</h3>
          <div class="result-value" id="productivityLoss">$0</div>
          <div class="result-description">Potential earnings lost</div>
        </div>
        
        <div class="result-item danger">
          <h3>Life Impact</h3>
          <div class="result-value" id="lifeImpact">0%</div>
          <div class="result-description">Of waking hours consumed</div>
        </div>
        
        <div class="result-item">
          <h3>Digital Wellness Score</h3>
          <div class="result-value" id="wellnessScore">0/100</div>
          <div class="result-description">Higher is better</div>
        </div>
      </div>

      <div class="time-breakdown">
        <h3>Time Breakdown by Platform</h3>
        <div class="breakdown-grid" id="platformBreakdown">
          <!-- Platform breakdown will be inserted here by JavaScript -->
        </div>
      </div>
      
      <div class="chart-container">
        <canvas id="timeChart"></canvas>
      </div>

      <div class="productivity-tips">
        <h3>Personalized Recommendations</h3>
        <div id="recommendations">
          <p>Enter your social media usage data and calculate to get personalized recommendations for improving your digital wellness.</p>
        </div>
      </div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Real-Life Examples</h2>

      <h3>Moderate User (2 hours daily):</h3>
      <div class="example-text">
• Daily: 2 hours
• Weekly: 14 hours (almost 2 full work days)
• Monthly: 60 hours (2.5 full days)
• Yearly: 730 hours (30 full days)
• Productivity Loss: $18,250 (at $25/hour)
• Impact: 12% of waking hours spent on social media
      </div>

      <h3>Heavy User (4 hours daily):</h3>
      <div class="example-text">
• Daily: 4 hours
• Weekly: 28 hours (3.5 work days)
• Monthly: 120 hours (5 full days)
• Yearly: 1,460 hours (60 full days)
• Productivity Loss: $36,500 (at $25/hour)
• Impact: 25% of waking hours spent on social media
      </div>

      <h3>Extreme User (6+ hours daily):</h3>
      <div class="example-text">
• Daily: 6 hours
• Weekly: 42 hours (more than a full work week)
• Monthly: 180 hours (7.5 full days)
• Yearly: 2,190 hours (91 full days)
• Productivity Loss: $54,750 (at $25/hour)
• Impact: 37% of waking hours spent on social media
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Social Media Time Wastage Calculator - Reclaim Your Time</h2>

    <p>Do you ever wonder where all your time goes? Our <strong>Social Media Time Wastage Calculator</strong> helps you understand exactly how much time you're spending on various social media platforms and the real impact it has on your productivity, mental health, and life goals. This powerful tool calculates your digital time consumption across all major platforms and provides personalized insights to help you make better decisions about your screen time.</p>

    <h3>How to Use This Social Media Time Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Daily Usage:</strong> For each social media platform, input how many hours you spend on it daily. Use the quick buttons for common time intervals.</li>
      <li><strong>Set Your Parameters:</strong> Adjust your hourly productivity value and choose whether to include mental health and sleep impact calculations.</li>
      <li><strong>Calculate:</strong> Click "Calculate Time Wastage" to see detailed analysis of your social media consumption.</li>
      <li><strong>Review Results:</strong> Examine your total time wasted, productivity loss, life impact percentage, and digital wellness score.</li>
      <li><strong>Get Recommendations:</strong> Receive personalized tips for reducing screen time and improving your digital wellness.</li>
      <li><strong>Take Action:</strong> Use the "Digital Detox Plan" to create a customized strategy for reducing your social media usage.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine Sarah, a marketing professional who feels constantly busy but never productive. She uses our calculator and discovers she's spending 3.5 hours daily on social media (2 hours on Instagram, 1 hour on Facebook, and 30 minutes on Twitter). The results shock her: she's wasting 24.5 hours weekly (equivalent to a part-time job), losing $612.50 in potential productivity weekly (at $25/hour), and spending 21% of her waking hours scrolling through feeds. With this awareness, she uses our digital detox plan to reduce her usage by 50%, reclaiming over 12 hours weekly for more meaningful activities.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Students:</strong> Understand how social media affects study time and academic performance.</li>
      <li><strong>Professionals:</strong> Calculate productivity loss and optimize work efficiency.</li>
      <li><strong>Parents:</strong> Monitor and manage family screen time habits.</li>
      <li><strong>Mental Health Advocates:</strong> Understand the correlation between screen time and wellbeing.</li>
      <li><strong>Anyone Feeling Overwhelmed:</strong> Identify time drains and reclaim control of your schedule.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: How accurate is the Social Media Time Wastage Calculator?</strong><br>
      A: The calculator provides estimates based on the data you input. For maximum accuracy, check your phone's screen time reports or use dedicated tracking apps before entering your usage times.</p>

    <p><strong>Q: What counts as "productive time" versus "wasted time" on social media?</strong><br>
      A: While some social media use can be productive (networking, learning, business), our calculator focuses on recreational usage. The tool allows you to adjust parameters based on how you value your time.</p>

    <p><strong>Q: Can I save my data to track progress over time?</strong><br>
      A: Yes, the calculator includes a "Save My Data" feature that stores your information locally in your browser, allowing you to compare your usage patterns over weeks or months.</p>

    <p><strong>Q: How is the digital wellness score calculated?</strong><br>
      A: The wellness score considers total screen time, distribution across platforms, comparison with healthy benchmarks, and potential impact on sleep and mental health.</p>

    <p><strong>Q: Is my social media usage data secure and private?</strong><br>
      A: Absolutely. All calculations happen locally in your browser. Your data is never sent to any server, ensuring complete privacy and security.</p>

    <h3>The Psychology of Social Media Addiction</h3>
    <p>Social media platforms are designed to keep you engaged through psychological triggers:</p>
    <ul>
      <li><strong>Variable Rewards:</strong> The unpredictable nature of likes, comments, and notifications creates a dopamine-driven feedback loop similar to slot machines.</li>
      <li><strong>Fear of Missing Out (FOMO):</strong> Constant updates create anxiety about being left out of social events or trends.</li>
      <li><strong>Social Validation:</strong> Likes and shares provide instant social validation, reinforcing usage behavior.</li>
      <li><strong>Infinite Scroll:</strong> Bottomless feeds eliminate natural stopping points, encouraging endless consumption.</li>
      <li><strong>Push Notifications:</strong> Designed to interrupt and pull you back into the app throughout the day.</li>
    </ul>

    <h3>Strategies for Healthier Social Media Use</h3>
    <p>Reducing social media consumption doesn't mean complete elimination. Here are evidence-based strategies:</p>
    <ul>
      <li><strong>Set Time Limits:</strong> Use app timers or dedicated apps to enforce daily limits.</li>
      <li><strong>Create No-Phone Zones:</strong> Designate certain areas (bedroom, dining table) as phone-free.</li>
      <li><strong>Schedule Social Media Time:</strong> Batch your usage into specific time blocks rather than constant checking.</li>
      <li><strong>Turn Off Notifications:</strong> Eliminate interruptions that pull you into apps unnecessarily.</li>
      <li><strong>Curate Your Feed:</strong> Unfollow accounts that trigger negative emotions or excessive usage.</li>
      <li><strong>Find Alternative Activities:</strong> Replace social media scrolling with hobbies, exercise, or real social interactions.</li>
      <li><strong>Practice Digital Minimalism:</strong> Regularly audit and remove apps that don't add significant value to your life.</li>
    </ul>

    <h3>The Real Cost of Social Media Overuse</h3>
    <p>Beyond time wastage, excessive social media use has documented effects:</p>
    <ul>
      <li><strong>Mental Health:</strong> Linked to increased anxiety, depression, and loneliness</li>
      <li><strong>Sleep Quality:</strong> Blue light exposure and mental stimulation disrupt sleep patterns</li>
      <li><strong>Attention Span:</strong> Constant switching reduces ability to focus deeply</li>
      <li><strong>Real Relationships:</strong> Can replace face-to-face interactions with superficial connections</li>
      <li><strong>Productivity:</strong> Context switching costs reduce work efficiency significantly</li>
      <li><strong>Physical Health:</strong> Sedentary behavior associated with extended screen time</li>
    </ul>
  </div>
</div>

<!-- Digital Detox Plan Modal -->
<div id="detoxModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Digital Detox Plan</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div id="detoxPlanContent">
        <p>Based on your social media usage, here's your personalized digital detox plan:</p>
        <div id="detoxSteps">
          <!-- Detox steps will be inserted here by JavaScript -->
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelDetox">Cancel</button>
      <button class="modal-button primary" id="saveDetoxPlan">Save Plan</button>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    // DOM elements
    const platformInputs = document.querySelectorAll('.time-input');
    const timeOptions = document.querySelectorAll('.time-option');
    const calcButtons = document.querySelectorAll('.calc-button');
    const alertContainer = document.getElementById('alertContainer');
    const resultsSection = document.getElementById('resultsSection');
    
    // Calculation options
    const calculationPeriod = document.getElementById('calculationPeriod');
    const hourlyRate = document.getElementById('hourlyRate');
    const includeMentalHealth = document.getElementById('includeMentalHealth');
    const includeSleepImpact = document.getElementById('includeSleepImpact');
    
    // Result elements
    const totalTimeElement = document.getElementById('totalTime');
    const weeklyTimeElement = document.getElementById('weeklyTime');
    const monthlyTimeElement = document.getElementById('monthlyTime');
    const yearlyTimeElement = document.getElementById('yearlyTime');
    const totalWastedTimeElement = document.getElementById('totalWastedTime');
    const productivityLossElement = document.getElementById('productivityLoss');
    const lifeImpactElement = document.getElementById('lifeImpact');
    const wellnessScoreElement = document.getElementById('wellnessScore');
    const timePeriodElement = document.getElementById('timePeriod');
    const platformBreakdownElement = document.getElementById('platformBreakdown');
    const recommendationsElement = document.getElementById('recommendations');
    
    // Modal elements
    const detoxModal = document.getElementById('detoxModal');
    const detoxStepsElement = document.getElementById('detoxSteps');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelDetox = document.getElementById('cancelDetox');
    const saveDetoxPlan = document.getElementById('saveDetoxPlan');
    
    // Chart variable
    let timeChart = null;

    // Platform data
    const platforms = [
      { id: 'facebookTime', name: 'Facebook', icon: 'facebook-bg' },
      { id: 'instagramTime', name: 'Instagram', icon: 'instagram-bg' },
      { id: 'twitterTime', name: 'Twitter', icon: 'twitter-bg' },
      { id: 'youtubeTime', name: 'YouTube', icon: 'youtube-bg' },
      { id: 'tiktokTime', name: 'TikTok', icon: 'tiktok-bg' },
      { id: 'whatsappTime', name: 'WhatsApp', icon: 'whatsapp-bg' },
      { id: 'linkedinTime', name: 'LinkedIn', icon: 'linkedin-bg' },
      { id: 'snapchatTime', name: 'Snapchat', icon: 'snapchat-bg' },
      { id: 'redditTime', name: 'Reddit', icon: 'reddit-bg' },
      { id: 'pinterestTime', name: 'Pinterest', icon: 'pinterest-bg' }
    ];

    // Event listeners
    platformInputs.forEach(input => {
      input.addEventListener('input', updateTotalTime);
    });

    timeOptions.forEach(option => {
      option.addEventListener('click', function() {
        const minutes = parseInt(this.getAttribute('data-minutes'));
        const hours = (minutes / 60).toFixed(1);
        const platformItem = this.closest('.platform-item');
        const input = platformItem.querySelector('.time-input');
        input.value = hours;
        
        // Update active state
        const siblings = this.parentElement.querySelectorAll('.time-option');
        siblings.forEach(sib => sib.classList.remove('active'));
        this.classList.add('active');
        
        updateTotalTime();
      });
    });

    calculationPeriod.addEventListener('change', updateTotalTime);

    calcButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleCalculation(action);
      });
    });

    // Modal event listeners
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        detoxModal.style.display = 'none';
      });
    });

    cancelDetox.addEventListener('click', function() {
      detoxModal.style.display = 'none';
    });

    saveDetoxPlan.addEventListener('click', function() {
      // In a real application, this would save the detox plan
      showAlert('Digital detox plan saved successfully!', 'success');
      detoxModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === detoxModal) {
        detoxModal.style.display = 'none';
      }
    });

    function updateTotalTime() {
      let totalDailyHours = 0;
      
      platformInputs.forEach(input => {
        const value = parseFloat(input.value) || 0;
        totalDailyHours += value;
      });
      
      const totalDailyMinutes = totalDailyHours * 60;
      
      // Update counter displays
      totalTimeElement.textContent = formatTime(totalDailyHours * 60);
      weeklyTimeElement.textContent = formatTime(totalDailyMinutes * 7);
      monthlyTimeElement.textContent = formatTime(totalDailyMinutes * 30);
      yearlyTimeElement.textContent = formatTime(totalDailyMinutes * 365);
    }

    function handleCalculation(action) {
      const totalDailyHours = calculateTotalDailyHours();
      
      if (action === 'calculate' && totalDailyHours === 0) {
        showAlert('Please enter your social media usage times first.', 'error');
        return;
      }
      
      switch(action) {
        case 'calculate':
          calculateTimeWastage(totalDailyHours);
          break;
          
        case 'save':
          saveUserData();
          break;
          
        case 'compare':
          compareWithAverage(totalDailyHours);
          break;
          
        case 'detox':
          generateDetoxPlan(totalDailyHours);
          break;
          
        case 'clear':
          clearAllData();
          return;
      }
    }
    
    function calculateTotalDailyHours() {
      let total = 0;
      platformInputs.forEach(input => {
        total += parseFloat(input.value) || 0;
      });
      return total;
    }
    
    function calculateTimeWastage(totalDailyHours) {
      const period = calculationPeriod.value;
      const rate = parseFloat(hourlyRate.value) || 25;
      
      // Calculate time for different periods
      const weeklyHours = totalDailyHours * 7;
      const monthlyHours = totalDailyHours * 30;
      const yearlyHours = totalDailyHours * 365;
      
      let periodHours, periodLabel;
      
      switch(period) {
        case 'daily':
          periodHours = totalDailyHours;
          periodLabel = 'Per day';
          break;
        case 'weekly':
          periodHours = weeklyHours;
          periodLabel = 'Per week';
          break;
        case 'monthly':
          periodHours = monthlyHours;
          periodLabel = 'Per month';
          break;
        case 'yearly':
          periodHours = yearlyHours;
          periodLabel = 'Per year';
          break;
      }
      
      // Calculate results
      const productivityLoss = periodHours * rate;
      const wakingHoursPercentage = Math.round((totalDailyHours / 16) * 100); // Assuming 16 waking hours
      const wellnessScore = calculateWellnessScore(totalDailyHours);
      
      // Update UI with results
      totalWastedTimeElement.textContent = formatTime(periodHours * 60);
      productivityLossElement.textContent = `$${productivityLoss.toLocaleString()}`;
      lifeImpactElement.textContent = `${wakingHoursPercentage}%`;
      wellnessScoreElement.textContent = `${wellnessScore}/100`;
      timePeriodElement.textContent = periodLabel;
      
      // Update platform breakdown
      updatePlatformBreakdown(period);
      
      // Update chart
      updateChart();
      
      // Generate recommendations
      generateRecommendations(totalDailyHours, wellnessScore);
      
      // Show results section
      resultsSection.style.display = 'block';
      
      // Scroll to results
      resultsSection.scrollIntoView({ behavior: 'smooth' });
      
      showAlert('Time wastage calculation completed!', 'success');
    }
    
    function calculateWellnessScore(totalDailyHours) {
      // Simple wellness score calculation
      // 0-1 hours: 90-100 (Excellent)
      // 1-2 hours: 70-89 (Good)
      // 2-4 hours: 50-69 (Moderate)
      // 4-6 hours: 30-49 (Poor)
      // 6+ hours: 0-29 (Concerning)
      
      if (totalDailyHours <= 1) return Math.max(90, 100 - (totalDailyHours * 10));
      if (totalDailyHours <= 2) return Math.max(70, 90 - ((totalDailyHours - 1) * 20));
      if (totalDailyHours <= 4) return Math.max(50, 70 - ((totalDailyHours - 2) * 10));
      if (totalDailyHours <= 6) return Math.max(30, 50 - ((totalDailyHours - 4) * 10));
      return Math.max(0, 30 - ((totalDailyHours - 6) * 5));
    }
    
    function updatePlatformBreakdown(period) {
      let multiplier = 1;
      switch(period) {
        case 'weekly': multiplier = 7; break;
        case 'monthly': multiplier = 30; break;
        case 'yearly': multiplier = 365; break;
      }
      
      let breakdownHTML = '';
      
      platforms.forEach(platform => {
        const input = document.getElementById(platform.id);
        const hours = parseFloat(input.value) || 0;
        const totalHours = hours * multiplier;
        
        if (hours > 0) {
          breakdownHTML += `
            <div class="breakdown-item">
              <div class="breakdown-value">${formatTime(totalHours * 60)}</div>
              <div class="breakdown-label">${platform.name}</div>
            </div>
          `;
        }
      });
      
      platformBreakdownElement.innerHTML = breakdownHTML || '<p>No platform data entered.</p>';
    }
    
    function updateChart() {
      const ctx = document.getElementById('timeChart').getContext('2d');
      
      // Destroy previous chart if it exists
      if (timeChart) {
        timeChart.destroy();
      }
      
      // Prepare data for chart
      const labels = [];
      const data = [];
      
      platforms.forEach(platform => {
        const input = document.getElementById(platform.id);
        const hours = parseFloat(input.value) || 0;
        
        if (hours > 0) {
          labels.push(platform.name);
          data.push(hours);
        }
      });
      
      // Create new chart
      timeChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [{
            data: data,
            backgroundColor: [
              '#3b5998', '#E1306C', '#1DA1F2', '#FF0000', '#000000',
              '#25D366', '#0077B5', '#FFFC00', '#FF4500', '#BD081C'
            ],
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
              text: 'Time Distribution by Platform (Daily)'
            }
          }
        }
      });
    }
    
    function generateRecommendations(totalDailyHours, wellnessScore) {
      let recommendations = '';
      
      if (wellnessScore >= 80) {
        recommendations = `
          <p><strong>Excellent Digital Wellness!</strong> Your social media usage is at a healthy level. Keep up these good habits:</p>
          <ul>
            <li>Continue being mindful of your screen time</li>
            <li>Maintain your current balanced approach</li>
            <li>Consider sharing your strategies with others</li>
          </ul>
        `;
      } else if (wellnessScore >= 60) {
        recommendations = `
          <p><strong>Good Digital Habits</strong> with room for improvement. Consider these adjustments:</p>
          <ul>
            <li>Set specific time limits for your most-used platforms</li>
            <li>Designate phone-free times during the day</li>
            <li>Try a 24-hour digital detox once a month</li>
          </ul>
        `;
      } else if (wellnessScore >= 40) {
        recommendations = `
          <p><strong>Moderate Concern</strong> - Your social media usage is impacting your productivity and wellbeing:</p>
          <ul>
            <li>Implement app timers to enforce daily limits</li>
            <li>Delete the most time-consuming apps for one week</li>
            <li>Schedule specific "social media times" instead of constant checking</li>
            <li>Find offline activities to replace scrolling habits</li>
          </ul>
        `;
      } else {
        recommendations = `
          <p><strong>High Priority for Change</strong> - Your social media usage is significantly impacting your life:</p>
          <ul>
            <li>Consider a 7-day digital detox to reset your habits</li>
            <li>Delete social media apps from your phone for 30 days</li>
            <li>Seek accountability from friends or family</li>
            <li>Consult with a mental health professional if needed</li>
            <li>Replace social media time with exercise, reading, or hobbies</li>
          </ul>
        `;
      }
      
      recommendationsElement.innerHTML = recommendations;
    }
    
    function saveUserData() {
      const userData = {
        timestamp: new Date().toISOString(),
        platforms: {}
      };
      
      platforms.forEach(platform => {
        const input = document.getElementById(platform.id);
        userData.platforms[platform.name] = parseFloat(input.value) || 0;
      });
      
      // In a real application, this would save to local storage or a database
      localStorage.setItem('socialMediaTimeData', JSON.stringify(userData));
      showAlert('Your social media data has been saved locally!', 'success');
    }
    
    function compareWithAverage(totalDailyHours) {
      // Average social media usage statistics
      const globalAverage = 2.5; // hours per day
      const comparison = ((totalDailyHours - globalAverage) / globalAverage) * 100;
      
      let message;
      if (comparison < -20) {
        message = `You use ${Math.abs(comparison).toFixed(0)}% LESS social media than the global average - great job!`;
        showAlert(message, 'success');
      } else if (comparison > 20) {
        message = `You use ${comparison.toFixed(0)}% MORE social media than the global average - consider reducing your usage.`;
        showAlert(message, 'warning');
      } else {
        message = `Your social media usage is close to the global average of ${globalAverage} hours daily.`;
        showAlert(message, 'info');
      }
    }
    
    function generateDetoxPlan(totalDailyHours) {
      if (totalDailyHours === 0) {
        showAlert('Please enter your social media usage times first.', 'error');
        return;
      }
      
      let detoxSteps = '';
      
      if (totalDailyHours <= 2) {
        detoxSteps = `
          <h4>Light Detox Plan (1-2 hours daily)</h4>
          <ol>
            <li><strong>Week 1:</strong> Reduce usage by 30 minutes daily</li>
            <li><strong>Week 2:</strong> Implement one phone-free day per week</li>
            <li><strong>Week 3:</strong> Turn off all non-essential notifications</li>
            <li><strong>Week 4:</strong> Replace 30 minutes of social media with a productive activity</li>
          </ol>
        `;
      } else if (totalDailyHours <= 4) {
        detoxSteps = `
          <h4>Moderate Detox Plan (2-4 hours daily)</h4>
          <ol>
            <li><strong>Week 1:</strong> Set app timers to limit daily usage</li>
            <li><strong>Week 2:</strong> Delete your most-used app for 7 days</li>
            <li><strong>Week 3:</strong> Designate specific times for social media checking</li>
            <li><strong>Week 4:</strong> Implement a 48-hour digital detox weekend</li>
          </ol>
        `;
      } else {
        detoxSteps = `
          <h4>Intensive Detox Plan (4+ hours daily)</h4>
          <ol>
            <li><strong>Week 1:</strong> Delete all social media apps from your phone</li>
            <li><strong>Week 2:</strong> Use social media only on a computer for limited time</li>
            <li><strong>Week 3:</strong> Find alternative activities for former social media times</li>
            <li><strong>Week 4:</strong> Evaluate which platforms add real value and reintroduce selectively</li>
          </ol>
        `;
      }
      
      detoxStepsElement.innerHTML = detoxSteps;
      detoxModal.style.display = 'block';
    }
    
    function clearAllData() {
      platformInputs.forEach(input => {
        input.value = '';
      });
      
      // Clear active time options
      document.querySelectorAll('.time-option.active').forEach(option => {
        option.classList.remove('active');
      });
      
      resultsSection.style.display = 'none';
      updateTotalTime();
      showAlert('All data cleared successfully!', 'success');
    }

    function formatTime(minutes) {
      const hours = Math.floor(minutes / 60);
      const mins = Math.round(minutes % 60);
      return `${hours}h ${mins}m`;
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
    updateTotalTime();
  });
</script>