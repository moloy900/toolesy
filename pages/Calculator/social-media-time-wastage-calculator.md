---
layout: default
title: "Social Media Time Calculator – Track Digital Usage"
permalink: /social-media-time-wastage-calculator/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Social Media Time Calculator – Track Digital Usage</title>

<meta name="description"
  content="Free social media time calculator to track daily screen time on Facebook, Instagram, YouTube, TikTok, and more. Reduce distractions and boost productivity.">

<meta name="keywords"
  content="social media time calculator, screen time calculator, time wastage calculator, digital detox, productivity tracker, social media addiction, screen addiction, time management tool, digital wellness, app usage calculator">

<meta name="author" content="ToolEsy.com">
<meta name="robots" content="index, follow">

<link rel="canonical" href="https://toolesy.com/social-media-time-wastage-calculator">

<!-- ✅ Open Graph / Facebook -->
<meta property="og:title" content="Social Media Time Wastage Calculator | Track Screen Time Online">
<meta property="og:description" content="Track time spent on social media and calculate productivity loss. Take control of your digital life.">
<meta property="og:url" content="https://toolesy.com/social-media-time-wastage-calculator">
<meta property="og:type" content="website">

<!-- ✅ Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Social Media Time Calculator | Reduce Screen Time & Boost Productivity">
<meta name="twitter:description" content="Check how much time you waste on social media and improve your digital well-being.">


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

    <h2>Social Media Time Wastage Calculator – Discover Where Your Time Really Goes</h2>

    <p>Have you ever picked up your phone for "just five minutes" and then looked up to realize an entire hour has disappeared? You're definitely not alone. Social media platforms have become a major part of modern life. They help us stay connected with friends, discover new ideas, follow current events, and even grow businesses. However, they can also quietly consume large amounts of our time without us noticing.</p>

    <p>Many people underestimate how much time they spend scrolling through feeds, watching short videos, checking notifications, or responding to messages. What feels like a few quick visits throughout the day can easily add up to several hours. Over weeks, months, and years, those hours become significant chunks of your life.</p>

    <p>Our <strong>Social Media Time Wastage Calculator</strong> is designed to help you understand your actual screen-time habits. Instead of guessing how much time you spend online, this calculator provides a clear picture of your daily, weekly, monthly, and yearly social media usage. It also helps you visualize what that time could represent in terms of productivity, personal development, education, exercise, family time, or other meaningful activities.</p>

    <p>The goal isn't to make you feel guilty about using social media. Social media itself isn't necessarily bad. It can be educational, entertaining, and useful when used intentionally. The purpose of this calculator is simply to provide awareness. Once you know where your time is going, you can make informed decisions about how you want to spend it.</p>

    <p>Whether you're a student struggling to focus on studies, a professional trying to increase productivity, a parent concerned about screen habits, or someone simply curious about your digital lifestyle, this tool can provide valuable insights.</p>

    <h3>How to Use This Social Media Time Calculator (Step-by-Step):</h3>

    <p>Using the calculator is simple and only takes a few moments.</p>

    <ul>
        <li><strong>Enter Daily Usage:</strong> Input the average amount of time you spend on each social media platform every day.</li>

        <li><strong>Include Multiple Platforms:</strong> Add usage from platforms such as Instagram, Facebook, TikTok, X (Twitter), Snapchat, YouTube, Reddit, LinkedIn, and others.</li>

        <li><strong>Set Productivity Value:</strong> Optionally enter the value of your time per hour to estimate potential productivity costs.</li>

        <li><strong>Enable Additional Analysis:</strong> Include sleep impact, mental wellness insights, and long-term lifestyle calculations.</li>

        <li><strong>Generate Results:</strong> Click the calculate button to receive a complete breakdown of your social media usage.</li>

        <li><strong>Review Recommendations:</strong> Explore personalized suggestions for improving your digital habits.</li>
    </ul>

    <h3>Why Most People Underestimate Their Screen Time</h3>

    <p>One of the most surprising discoveries people make after using screen-time tracking tools is that they spend far more time online than they initially believed.</p>

    <p>This happens because social media usage is usually fragmented throughout the day. Instead of spending three consecutive hours on an app, you might check it dozens of times for a few minutes each session.</p>

    <p>For example, you may scroll during breakfast, check notifications during work breaks, browse during lunch, watch videos while commuting, and spend additional time online before bed. Individually, these sessions seem insignificant. Together, they can easily exceed several hours.</p>

    <p>The Social Media Time Wastage Calculator helps combine all those small sessions into a single, easy-to-understand picture.</p>

    <h3>Understanding the True Value of Time</h3>

    <p>Time is one of the few resources that cannot be replenished. Money can be earned again, opportunities can return, and skills can be learned later. Time, however, moves in only one direction.</p>

    <p>When viewed in daily increments, an extra hour of scrolling may not seem important. However, consider the long-term impact.</p>

    <p>One hour per day equals:</p>

    <ul>
        <li>7 hours per week</li>
        <li>30 hours per month</li>
        <li>365 hours per year</li>
        <li>More than 15 full days annually</li>
    </ul>

    <p>If someone spends three hours daily on social media, the numbers become even more striking. That's over 1,000 hours every year spent consuming digital content.</p>

    <p>The calculator helps transform abstract screen time into meaningful measurements that are easier to understand.</p>

    <h3>A Real-Life Example</h3>

    <p>Consider a university student named Rahul. He believes he spends about one hour per day on social media.</p>

    <p>After checking his phone's screen-time report, he discovers the reality is quite different:</p>

    <ul>
        <li>Instagram: 1 hour 20 minutes</li>
        <li>YouTube Shorts: 55 minutes</li>
        <li>X (Twitter): 25 minutes</li>
        <li>Facebook: 20 minutes</li>
    </ul>

    <p>Total daily usage: 3 hours.</p>

    <p>Over a year, Rahul spends approximately 1,095 hours on social media. That's equivalent to more than 45 entire days.</p>

    <p>Seeing these numbers motivates him to reduce his usage by just one hour daily. That simple adjustment gives him back 365 hours each year—time he can invest in learning new skills, exercising, reading, or pursuing career opportunities.</p>

    <h3>Who Should Use This Calculator?</h3>

    <p>Virtually anyone who uses social media can benefit from understanding their digital habits.</p>

    <ul>
        <li><strong>Students:</strong> Identify distractions affecting academic performance.</li>

        <li><strong>Professionals:</strong> Improve focus and workplace productivity.</li>

        <li><strong>Freelancers:</strong> Reduce interruptions and increase billable work hours.</li>

        <li><strong>Parents:</strong> Better understand family screen-time patterns.</li>

        <li><strong>Content Creators:</strong> Separate productive content creation from passive consumption.</li>

        <li><strong>Entrepreneurs:</strong> Improve time management and business efficiency.</li>

        <li><strong>Anyone Seeking Balance:</strong> Create healthier relationships with technology.</li>
    </ul>

    <h3>Is Social Media Always a Waste of Time?</h3>

    <p>Not necessarily.</p>

    <p>Social media can be a powerful tool when used intentionally. Many people use social platforms for professional networking, education, business marketing, community engagement, and maintaining relationships.</p>

    <p>The issue usually arises when usage becomes unconscious rather than purposeful.</p>

    <p>For example, spending 30 minutes learning a new skill through educational content may provide significant value. Spending three hours endlessly scrolling through random posts without any specific purpose may not offer the same return.</p>

    <p>The calculator doesn't judge how you spend your time. Instead, it provides data so you can decide whether your current habits align with your goals and priorities.</p>

    <h3>Signs Social Media May Be Consuming Too Much Time</h3>

    <p>Many people don't realize their screen habits have become excessive until they begin noticing certain patterns.</p>

    <ul>
        <li>Checking your phone immediately after waking up</li>

        <li>Feeling anxious when away from social media</li>

        <li>Constantly refreshing feeds without a specific reason</li>

        <li>Losing track of time while scrolling</li>

        <li>Using social media to avoid important tasks</li>

        <li>Frequently staying up later than planned</li>

        <li>Feeling less productive despite being busy all day</li>
    </ul>

    <p>If these situations sound familiar, calculating your actual usage can provide valuable perspective.</p>

    <h3>The Hidden Opportunity Cost of Social Media</h3>

    <p>Every hour spent on one activity is an hour unavailable for another activity.</p>

    <p>Economists call this concept opportunity cost.</p>

    <p>For example, two hours spent scrolling through social media could alternatively be used for:</p>

    <ul>
        <li>Learning a new language</li>
        <li>Reading a book</li>
        <li>Exercising</li>
        <li>Building a business</li>
        <li>Spending time with family</li>
        <li>Developing professional skills</li>
        <li>Pursuing hobbies and creative projects</li>
    </ul>

    <p>The calculator helps users think about these trade-offs without judgment, allowing them to make choices that better align with their personal goals.</p>

        <h3>The Psychology Behind Social Media Addiction</h3>

    <p>Have you ever opened a social media app without even thinking about it? Perhaps you unlocked your phone to check the weather, answer a message, or set an alarm, but somehow ended up scrolling through videos for twenty minutes. This behavior is incredibly common, and there is a reason for it.</p>

    <p>Modern social media platforms are designed to capture and maintain attention. Their goal is to keep users engaged for as long as possible because longer engagement often translates into more advertising revenue and platform growth.</p>

    <p>This doesn't mean social media companies are trying to harm users. However, many platform features are intentionally designed using principles from behavioral psychology that encourage repeated usage.</p>

    <p>Understanding these mechanisms can help you become more aware of your digital habits and make better decisions about how you spend your time online.</p>

    <h3>Dopamine and Reward Loops</h3>

    <p>One of the most discussed aspects of social media use is dopamine. Dopamine is often referred to as the brain's "reward chemical," although its role is more complex than that description suggests.</p>

    <p>Whenever you receive a notification, a like, a comment, or discover an interesting post, your brain experiences a small sense of reward. These rewards feel satisfying and encourage you to repeat the behavior.</p>

    <p>The challenge is that these rewards are unpredictable. You never know exactly when you'll receive a new notification or find particularly engaging content.</p>

    <p>This unpredictability creates a powerful feedback loop. Similar principles have been observed in gambling systems, where uncertainty keeps people engaged longer than predictable rewards.</p>

    <p>As a result, many users develop habits of repeatedly checking their devices throughout the day even when there is no real reason to do so.</p>

    <h3>The Infinite Scroll Effect</h3>

    <p>Years ago, websites often had clear stopping points. You reached the bottom of a page and naturally decided whether to continue.</p>

    <p>Today's social media platforms frequently use infinite scrolling. New content continuously loads as you move down the screen, removing natural opportunities to stop.</p>

    <p>Without a clear endpoint, it becomes easier to lose track of time. Five minutes can quickly become thirty minutes, and thirty minutes can become an hour.</p>

    <p>This is one reason why many people are surprised when they check their actual screen-time statistics.</p>

    <h3>Fear of Missing Out (FOMO)</h3>

    <p>Another powerful psychological factor is the fear of missing out, commonly known as FOMO.</p>

    <p>Social media provides a constant stream of updates about friends, celebrities, influencers, news events, trends, and cultural moments. This creates a feeling that something important might happen while you're offline.</p>

    <p>Even when nothing particularly significant is occurring, the possibility that you could miss something interesting encourages frequent checking behavior.</p>

    <p>Many users find themselves refreshing feeds multiple times per day simply to stay informed or connected.</p>

    <p>While staying informed has benefits, excessive monitoring can become mentally exhausting and consume substantial amounts of time.</p>

    <h3>How Social Media Impacts Productivity</h3>

    <p>One of the biggest hidden costs of excessive social media use is reduced productivity.</p>

    <p>Many people assume that checking social media for a few minutes has minimal impact on their work. However, research suggests that interruptions often have consequences beyond the actual time spent on the interruption itself.</p>

    <p>When you switch from an important task to social media, your brain must redirect attention. After returning to work, it may take several minutes to fully regain focus.</p>

    <p>This phenomenon is known as context switching.</p>

    <p>If social media interrupts your work ten or twenty times throughout the day, the cumulative productivity loss can become substantial.</p>

    <h3>The Cost of Constant Distraction</h3>

    <p>Deep focus is becoming increasingly valuable in a world filled with digital distractions.</p>

    <p>Activities such as studying, writing, programming, strategic planning, problem-solving, and creative work often require sustained concentration.</p>

    <p>Frequent interruptions can break mental momentum and make it harder to perform these tasks efficiently.</p>

    <p>Many people discover that reducing social media usage doesn't just save time—it also improves the quality of the time they already have.</p>

    <p>By spending fewer hours switching between apps and notifications, individuals often experience better concentration, stronger performance, and greater satisfaction with their work.</p>

    <h3>Social Media and Mental Health</h3>

    <p>The relationship between social media and mental health is complex. Social media can provide valuable support networks, educational content, entertainment, and opportunities for connection.</p>

    <p>At the same time, excessive use may contribute to stress, anxiety, and negative self-comparisons in some individuals.</p>

    <p>Many social platforms encourage users to share highlights of their lives. As a result, people are often exposed to carefully curated versions of other people's experiences.</p>

    <p>Comparing your everyday reality to someone else's highlight reel can sometimes create unrealistic expectations and feelings of inadequacy.</p>

    <p>This effect is particularly common among younger users but can affect people of all ages.</p>

    <h3>The Connection Between Social Media and Sleep</h3>

    <p>Screen time can also affect sleep quality.</p>

    <p>Many people use social media shortly before bedtime. Scrolling through feeds, watching videos, or engaging in online discussions can make it harder for the brain to transition into a restful state.</p>

    <p>Additionally, late-night notifications and endless streams of content can encourage users to stay awake longer than intended.</p>

    <p>Even losing thirty minutes of sleep each night can accumulate into significant sleep deprivation over time.</p>

    <p>The calculator helps users recognize how social media habits may influence not only their time but also their overall wellbeing.</p>

    <h3>Frequently Asked Questions</h3>

    <p><strong>How accurate is the Social Media Time Wastage Calculator?</strong><br>
    The calculator is only as accurate as the information entered. For best results, compare your estimates with your device's built-in screen-time reports.</p>

    <p><strong>Does all social media usage count as wasted time?</strong><br>
    No. Many people use social media for business, education, networking, and communication. The calculator helps identify overall usage patterns rather than labeling every minute as unproductive.</p>

    <p><strong>Can I use the calculator to track progress over time?</strong><br>
    Yes. Regularly calculating your usage allows you to compare results and monitor improvements in your digital habits.</p>

    <p><strong>What is a healthy amount of social media usage?</strong><br>
    There is no universal number. Healthy usage depends on your goals, responsibilities, and overall wellbeing. The key is ensuring social media supports your life rather than controlling it.</p>

    <p><strong>Will reducing social media improve productivity?</strong><br>
    Many people find that limiting unnecessary screen time improves focus, reduces distractions, and creates more opportunities for meaningful activities.</p>

    <h3>Practical Strategies for Reducing Social Media Usage</h3>

    <p>If your results reveal more screen time than expected, don't panic. Small changes can produce meaningful improvements.</p>

    <ul>
        <li><strong>Disable Non-Essential Notifications:</strong> Reduce interruptions throughout the day.</li>

        <li><strong>Set Daily Limits:</strong> Use built-in device tools to monitor and limit app usage.</li>

        <li><strong>Create Screen-Free Periods:</strong> Establish times during the day when social media is off-limits.</li>

        <li><strong>Keep Devices Away During Meals:</strong> Focus on conversations and mindful eating.</li>

        <li><strong>Avoid Social Media Before Bed:</strong> Develop a relaxing evening routine.</li>

        <li><strong>Remove Unnecessary Apps:</strong> Eliminate platforms that add little value to your life.</li>

        <li><strong>Replace Scrolling with Purposeful Activities:</strong> Reading, exercise, learning, and hobbies can provide lasting benefits.</li>
    </ul>

    <h3>Creating a Personal Digital Detox Plan</h3>

    <p>A digital detox doesn't necessarily mean deleting every social media account.</p>

    <p>For most people, a sustainable approach involves intentional usage rather than complete avoidance.</p>

    <p>Start by identifying your biggest time-consuming platforms. Then set realistic reduction goals. For example, reducing usage from three hours per day to two hours per day is often more achievable than attempting to quit immediately.</p>

    <p>Track your progress weekly and celebrate small improvements. Even modest reductions can reclaim dozens or hundreds of hours annually.</p>

    <h3>The Long-Term Impact of Small Daily Changes</h3>

    <p>The most powerful aspect of time management is consistency.</p>

    <p>Saving thirty minutes each day may not seem dramatic, but over a year it creates more than 180 additional hours.</p>

    <p>One hour saved per day creates 365 hours annually.</p>

    <p>Those hours can be invested in learning, health, relationships, career growth, creativity, travel, or simply enjoying more free time.</p>

    <p>The calculator helps transform abstract screen-time habits into tangible opportunities for positive change.</p>

    <h3>Why Choose Our Social Media Time Wastage Calculator?</h3>

    <p>Our calculator goes beyond simple screen-time measurement. It helps you understand the broader impact of your digital habits on productivity, wellbeing, sleep, and personal goals.</p>

    <p>Everything runs directly within your browser, meaning your information remains private and secure. No account creation, subscriptions, or complicated setup processes are required.</p>

    <p>The interface is simple enough for beginners while providing meaningful insights that can help anyone make smarter decisions about their time.</p>

    <h3>Final Thoughts</h3>

    <p>Social media is one of the most influential technologies of the modern era. It has transformed communication, entertainment, education, and business in remarkable ways.</p>

    <p>However, like any powerful tool, its value depends on how it is used.</p>

    <p>The Social Media Time Wastage Calculator helps you gain clarity about your digital habits by turning screen time into measurable insights. Rather than relying on assumptions, you can see exactly how much time you're spending online and evaluate whether those habits align with your priorities.</p>

    <p>Awareness is the first step toward change. By understanding your social media usage patterns, you can take control of your time, improve productivity, strengthen focus, and create more space for the activities that matter most to you.</p>

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