---
layout: default
title: "Time Unit Converter - Convert Between Different Time Measurements"
permalink: /time-unit-converter-convert-between-different-time-measurements/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Time Unit Converter - Convert Between Different Time Measurements</title>
<meta name="description"
  content="Free online time unit converter tool. Convert between nanoseconds, milliseconds, seconds, minutes, hours, days, weeks, months, years, decades, centuries and more.">
<meta name="keywords"
  content="time converter, unit converter, time measurement, nanoseconds to seconds, hours to minutes, time calculator, time conversion tool">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Time Converter Styles */
  .converter-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .converter-container h1 {
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

  .converter-section {
    margin-bottom: 40px;
    padding: 25px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .converter-section h2 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .converter-section p {
    margin-bottom: 15px;
    line-height: 1.8;
    color: #333;
  }

  .converter-wrapper {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 20px;
    align-items: end;
    margin: 30px 0;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .input-group label {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .input-group input,
  .input-group select {
    padding: 12px 15px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  .input-group input:focus,
  .input-group select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .swap-button {
    padding: 12px 20px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .swap-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .result-section {
    margin-top: 20px;
    padding: 20px;
    background: #e8f4fd;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .result-section h3 {
    color: var(--primary);
    margin-bottom: 15px;
    font-size: 1.3rem;
  }

  .conversion-result {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c3e50;
    text-align: center;
    padding: 15px;
    background: white;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .unit-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 30px 0;
  }

  .category-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-left: 4px solid var(--primary);
  }

  .category-card h3 {
    color: var(--primary);
    margin-bottom: 15px;
    font-size: 1.2rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }

  .unit-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 10px;
  }

  .unit-item {
    padding: 8px 12px;
    background: #f8f9fa;
    border-radius: 4px;
    font-size: 0.9rem;
    text-align: center;
  }

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
    margin: 25px 0;
  }

  .case-button {
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

  .case-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .case-button:active {
    transform: translateY(0);
  }

  .case-button.success {
    background: var(--success);
  }

  .case-button.success:hover {
    background: #218838;
  }

  .case-button.secondary {
    background: #6c757d;
  }

  .case-button.secondary:hover {
    background: #5a6268;
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

  .example-text {
    background: white;
    padding: 15px;
    border-radius: 6px;
    border-left: 4px solid var(--primary);
    margin: 10px 0;
    font-family: monospace;
    white-space: pre-wrap;
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

  /* Time converter specific styles */
  .quick-conversions {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
  }

  .quick-conversion-item {
    padding: 15px;
    background: white;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .quick-conversion-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-color: var(--primary);
  }

  .quick-conversion-item.active {
    background: var(--primary);
    color: white;
  }

  .conversion-value {
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 5px;
    color: var(--primary);
  }

  .quick-conversion-item.active .conversion-value {
    color: white;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .converter-wrapper {
      grid-template-columns: 1fr;
      gap: 15px;
    }

    .swap-button {
      order: 3;
      margin-top: 10px;
    }

    .button-section {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }

    .case-button {
      font-size: 13px;
      padding: 12px 8px;
    }

    .converter-container {
      padding: 15px;
    }

    .converter-section {
      padding: 20px;
      margin-bottom: 30px;
    }

    .converter-container h1 {
      font-size: 2rem;
    }

    .converter-section h2 {
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

    .unit-categories {
      grid-template-columns: 1fr;
    }

    .quick-conversions {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Time Unit Converter</h1>
  <p class="welcome-message">Convert between different time units instantly - from nanoseconds to millennia, including scientific, astronomical, and traditional time measurements.</p>

  <div class="converter-section">
    <h2>Time Unit Converter</h2>

    <div class="converter-wrapper">
      <div class="input-group">
        <label for="fromValue">From:</label>
        <input type="number" id="fromValue" value="1" min="0" step="any">
        <select id="fromUnit">
          <option value="ns">Nanosecond (ns)</option>
          <option value="μs">Microsecond (µs)</option>
          <option value="ms">Millisecond (ms)</option>
          <option value="s" selected>Second (s)</option>
          <option value="min">Minute (min)</option>
          <option value="h">Hour (h)</option>
          <option value="d">Day (d)</option>
          <option value="wk">Week (wk)</option>
          <option value="fortnight">Fortnight</option>
          <option value="month">Month</option>
          <option value="yr">Year (yr)</option>
          <option value="decade">Decade</option>
          <option value="century">Century</option>
          <option value="millennium">Millennium</option>
          <option value="planck">Planck Time (tₚ)</option>
          <option value="shake">Shake</option>
          <option value="jiffy">Jiffy</option>
          <option value="sidereal_day">Sidereal Day</option>
          <option value="sidereal_yr">Sidereal Year</option>
          <option value="julian_yr">Julian Year</option>
          <option value="moment">Moment</option>
          <option value="watch">Watch</option>
          <option value="ghatika">Ghatika</option>
          <option value="muhurta">Muhurta</option>
          <option value="yama">Yama</option>
          <option value="prahara">Prahara</option>
          <option value="nimesha">Nimesha</option>
          <option value="kashta">Kashta</option>
          <option value="kalpa">Kalpa</option>
          <option value="tick">Tick</option>
          <option value="frame">Frame</option>
          <option value="clock_cycle">Clock Cycle</option>
        </select>
      </div>

      <button class="swap-button" id="swapUnits">
        <i class="fas fa-exchange-alt"></i> Swap
      </button>

      <div class="input-group">
        <label for="toValue">To:</label>
        <input type="number" id="toValue" readonly>
        <select id="toUnit">
          <option value="ns">Nanosecond (ns)</option>
          <option value="μs">Microsecond (µs)</option>
          <option value="ms">Millisecond (ms)</option>
          <option value="s">Second (s)</option>
          <option value="min" selected>Minute (min)</option>
          <option value="h">Hour (h)</option>
          <option value="d">Day (d)</option>
          <option value="wk">Week (wk)</option>
          <option value="fortnight">Fortnight</option>
          <option value="month">Month</option>
          <option value="yr">Year (yr)</option>
          <option value="decade">Decade</option>
          <option value="century">Century</option>
          <option value="millennium">Millennium</option>
          <option value="planck">Planck Time (tₚ)</option>
          <option value="shake">Shake</option>
          <option value="jiffy">Jiffy</option>
          <option value="sidereal_day">Sidereal Day</option>
          <option value="sidereal_yr">Sidereal Year</option>
          <option value="julian_yr">Julian Year</option>
          <option value="moment">Moment</option>
          <option value="watch">Watch</option>
          <option value="ghatika">Ghatika</option>
          <option value="muhurta">Muhurta</option>
          <option value="yama">Yama</option>
          <option value="prahara">Prahara</option>
          <option value="nimesha">Nimesha</option>
          <option value="kashta">Kashta</option>
          <option value="kalpa">Kalpa</option>
          <option value="tick">Tick</option>
          <option value="frame">Frame</option>
          <option value="clock_cycle">Clock Cycle</option>
        </select>
      </div>
    </div>

    <div class="result-section">
      <h3>Conversion Result</h3>
      <div class="conversion-result" id="conversionResult">
        1 Second = 0.016666666666666666 Minutes
      </div>
    </div>

    <div class="quick-conversions">
      <div class="quick-conversion-item" data-from="s" data-to="ms">
        <div>Seconds to Milliseconds</div>
        <div class="conversion-value">1 s = 1000 ms</div>
      </div>
      <div class="quick-conversion-item" data-from="min" data-to="s">
        <div>Minutes to Seconds</div>
        <div class="conversion-value">1 min = 60 s</div>
      </div>
      <div class="quick-conversion-item" data-from="h" data-to="min">
        <div>Hours to Minutes</div>
        <div class="conversion-value">1 h = 60 min</div>
      </div>
      <div class="quick-conversion-item" data-from="d" data-to="h">
        <div>Days to Hours</div>
        <div class="conversion-value">1 d = 24 h</div>
      </div>
      <div class="quick-conversion-item" data-from="wk" data-to="d">
        <div>Weeks to Days</div>
        <div class="conversion-value">1 wk = 7 d</div>
      </div>
      <div class="quick-conversion-item" data-from="yr" data-to="d">
        <div>Years to Days</div>
        <div class="conversion-value">1 yr = 365 d</div>
      </div>
    </div>

    <div class="button-section">
      <button class="case-button" data-action="copy">Copy Result</button>
      <button class="case-button success" data-action="reset">Reset</button>
      <button class="case-button secondary" data-action="clear">Clear All</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="unit-categories">
      <div class="category-card">
        <h3>Basic Time Units</h3>
        <div class="unit-list">
          <div class="unit-item">Nanosecond (ns)</div>
          <div class="unit-item">Microsecond (µs)</div>
          <div class="unit-item">Millisecond (ms)</div>
          <div class="unit-item">Second (s)</div>
          <div class="unit-item">Minute (min)</div>
          <div class="unit-item">Hour (h)</div>
          <div class="unit-item">Day (d)</div>
          <div class="unit-item">Week (wk)</div>
          <div class="unit-item">Fortnight</div>
          <div class="unit-item">Month</div>
          <div class="unit-item">Year (yr)</div>
          <div class="unit-item">Decade</div>
          <div class="unit-item">Century</div>
          <div class="unit-item">Millennium</div>
        </div>
      </div>

      <div class="category-card">
        <h3>Scientific & Astronomical</h3>
        <div class="unit-list">
          <div class="unit-item">Planck Time (tₚ)</div>
          <div class="unit-item">Shake</div>
          <div class="unit-item">Jiffy</div>
          <div class="unit-item">Sidereal Day</div>
          <div class="unit-item">Sidereal Year</div>
          <div class="unit-item">Julian Year</div>
        </div>
      </div>

      <div class="category-card">
        <h3>Traditional & Regional</h3>
        <div class="unit-list">
          <div class="unit-item">Moment</div>
          <div class="unit-item">Watch</div>
          <div class="unit-item">Ghatika</div>
          <div class="unit-item">Muhurta</div>
          <div class="unit-item">Yama</div>
          <div class="unit-item">Prahara</div>
          <div class="unit-item">Nimesha</div>
          <div class="unit-item">Kashta</div>
          <div class="unit-item">Kalpa</div>
        </div>
      </div>

      <div class="category-card">
        <h3>Computing & Technical</h3>
        <div class="unit-list">
          <div class="unit-item">Tick</div>
          <div class="unit-item">Frame</div>
          <div class="unit-item">Clock Cycle</div>
        </div>
      </div>
    </div>

    <div class="examples">
      <h2>Common Time Conversions</h2>

      <h3>Everyday Conversions:</h3>
      <div class="example-text">1 minute = 60 seconds
1 hour = 60 minutes = 3,600 seconds
1 day = 24 hours = 1,440 minutes = 86,400 seconds
1 week = 7 days = 168 hours = 10,080 minutes
1 year = 365 days = 8,760 hours = 525,600 minutes</div>

      <h3>Scientific Conversions:</h3>
      <div class="example-text">1 nanosecond = 0.000000001 seconds
1 microsecond = 0.000001 seconds
1 millisecond = 0.001 seconds
1 Planck time ≈ 5.39 × 10⁻⁴⁴ seconds
1 shake = 10 nanoseconds</div>

      <h3>Traditional Time Units:</h3>
      <div class="example-text">1 moment = 90 seconds (historical)
1 watch = 4 hours (nautical)
1 muhurta = 48 minutes (Hindu)
1 ghatika = 24 minutes (Indian)</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Time Unit Converter Tool</h2>

    <p>Need to convert between different time units quickly and accurately? Our free <strong>Time Unit Converter tool</strong> is the perfect solution for students, scientists, engineers, programmers, and anyone working with time measurements. This powerful tool instantly converts between nanoseconds, microseconds, milliseconds, seconds, minutes, hours, days, weeks, months, years, decades, centuries, and even specialized units like Planck time, sidereal days, and traditional time measurements. There's no download required, no registration needed, and your data privacy is guaranteed as all processing happens securely right in your browser.</p>

    <h3>How to Use This Time Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Value:</strong> Type the numerical value you want to convert in the "From" input field.</li>
      <li><strong>Select Source Unit:</strong> Choose the unit of time you're converting from using the first dropdown menu.</li>
      <li><strong>Select Target Unit:</strong> Choose the unit of time you want to convert to using the second dropdown menu.</li>
      <li><strong>View Result:</strong> The converted value automatically appears in the "To" field with the full conversion displayed below.</li>
      <li><strong>Quick Conversions:</strong> Use the quick conversion buttons for common time conversions with a single click.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're a programmer optimizing code performance and need to understand how nanoseconds relate to milliseconds. Instead of manual calculations, you can simply enter "1000000" in the value field, select "Nanoseconds" as the source unit, and choose "Milliseconds" as the target unit. The tool instantly shows that 1,000,000 nanoseconds equals 1 millisecond, helping you understand performance metrics and optimize your code effectively.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Programmers & Developers:</strong> Convert between nanoseconds, clock cycles, and other computing time units for performance optimization.</li>
      <li><strong>Scientists & Researchers:</strong> Work with Planck time, shakes, and other scientific time measurements in physics and chemistry experiments.</li>
      <li><strong>Students & Educators:</strong> Learn about time conversions for mathematics, physics, and engineering coursework.</li>
      <li><strong>Astronomers:</strong> Convert between sidereal time, Julian years, and standard time units for celestial calculations.</li>
      <li><strong>Historians & Cultural Researchers:</strong> Understand traditional time units like moments, watches, muhurtas, and other historical measurements.</li>
      <li><strong>Project Managers:</strong> Convert between work hours, days, weeks, and months for project planning and scheduling.</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What is the smallest time unit I can convert with this tool?</strong><br>
      You can convert Planck time, which is approximately 5.39 × 10⁻⁴⁴ seconds - the theoretically smallest possible time measurement in physics.</p>

    <p><strong>How accurate are the time conversions?</strong><br>
      Our tool uses precise conversion factors with high decimal precision. For astronomical and scientific units, we use established scientific constants and conversion factors.</p>

    <p><strong>What is the difference between a sidereal day and a solar day?</strong><br>
      A sidereal day (approximately 23 hours, 56 minutes, 4.091 seconds) is the time it takes Earth to complete one rotation relative to distant stars. A solar day (24 hours) is relative to the Sun, which is slightly longer due to Earth's orbital motion.</p>

    <p><strong>Can I convert traditional time units like muhurta and ghatika?</strong><br>
      Yes, our tool includes various traditional and regional time units from different cultures, including Hindu, Indian, and historical European time measurements.</p>

    <p><strong>Is my data kept private when I use this tool?</strong><br>
      Absolutely. All conversions happen locally in your browser. We don't store any of your input data or conversion results on our servers.</p>

    <h3>Why Choose Our Time Unit Converter?</h3>
    <p>Our <strong>online time converter</strong> stands out from other tools because of its comprehensive coverage of time units, from the incredibly small (Planck time) to the incredibly large (millennia), including specialized scientific, astronomical, traditional, and computing time measurements. Unlike many online tools, we don't store your data on our servers - all processing happens in your browser. This means your conversions remain completely private. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Common Applications of Time Conversion</h3>
    <p>Time conversion has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Software Development:</strong> Convert between nanoseconds and milliseconds for performance profiling and optimization</li>
      <li><strong>Scientific Research:</strong> Work with extremely small time intervals in particle physics and quantum mechanics</li>
      <li><strong>Astronomy:</strong> Convert between different time systems for celestial observations and calculations</li>
      <li><strong>Engineering:</strong> Calculate timing requirements for electronic systems and embedded devices</li>
      <li><strong>Education:</strong> Teach students about different time measurement systems and conversion principles</li>
      <li><strong>Historical Research:</strong> Understand and convert traditional time units found in historical documents</li>
      <li><strong>International Business:</strong> Convert work hours across different time zones and work schedules</li>
    </ul>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const fromValue = document.getElementById('fromValue');
    const fromUnit = document.getElementById('fromUnit');
    const toValue = document.getElementById('toValue');
    const toUnit = document.getElementById('toUnit');
    const swapButton = document.getElementById('swapUnits');
    const conversionResult = document.getElementById('conversionResult');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const quickConversionItems = document.querySelectorAll('.quick-conversion-item');

    // Time conversion factors (relative to seconds)
    const timeUnits = {
      // Basic units
      'ns': 1e-9,
      'μs': 1e-6,
      'ms': 1e-3,
      's': 1,
      'min': 60,
      'h': 3600,
      'd': 86400,
      'wk': 604800,
      'fortnight': 1209600,
      'month': 2592000, // 30 days approximation
      'yr': 31536000, // 365 days
      'decade': 315360000,
      'century': 3153600000,
      'millennium': 31536000000,
      
      // Scientific & Astronomical
      'planck': 5.391247e-44,
      'shake': 1e-8,
      'jiffy': 0.01, // Physics jiffy (varies by context)
      'sidereal_day': 86164.091,
      'sidereal_yr': 31558149.984,
      'julian_yr': 31557600,
      
      // Traditional & Regional
      'moment': 90, // Historical European
      'watch': 14400, // 4 hours (nautical)
      'ghatika': 1440, // 24 minutes (Indian)
      'muhurta': 2880, // 48 minutes (Hindu)
      'yama': 10800, // 3 hours (Hindu)
      'prahara': 10800, // 3 hours (Indian)
      'nimesha': 0.21333, // Approximately 0.213 seconds (Hindu)
      'kashta': 3.2, // Approximately 3.2 seconds (Hindu)
      'kalpa': 1.296e+12, // 4.32 billion years (Hindu)
      
      // Computing & Technical
      'tick': 0.0001, // Typically 100 nanoseconds in computing
      'frame': 0.041666, // 24 frames per second (film)
      'clock_cycle': 1e-9 // 1 GHz clock (adjustable based on context)
    };

    // Initialize conversion
    convertTime();

    // Event listeners
    fromValue.addEventListener('input', convertTime);
    fromUnit.addEventListener('change', convertTime);
    toUnit.addEventListener('change', convertTime);

    swapButton.addEventListener('click', function() {
      const tempValue = fromValue.value;
      const tempUnit = fromUnit.value;
      
      fromValue.value = toValue.value;
      fromUnit.value = toUnit.value;
      toUnit.value = tempUnit;
      
      convertTime();
    });

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleAction(action);
      });
    });

    quickConversionItems.forEach(item => {
      item.addEventListener('click', function() {
        const from = this.getAttribute('data-from');
        const to = this.getAttribute('data-to');
        
        fromUnit.value = from;
        toUnit.value = to;
        fromValue.value = 1;
        
        // Update active state
        quickConversionItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        
        convertTime();
      });
    });

    function convertTime() {
      const value = parseFloat(fromValue.value) || 0;
      const fromUnitValue = fromUnit.value;
      const toUnitValue = toUnit.value;
      
      // Convert to seconds first
      const valueInSeconds = value * timeUnits[fromUnitValue];
      
      // Convert from seconds to target unit
      const convertedValue = valueInSeconds / timeUnits[toUnitValue];
      
      // Update result
      toValue.value = formatNumber(convertedValue);
      
      // Update conversion result text
      conversionResult.textContent = `${formatNumber(value)} ${getUnitName(fromUnitValue)} = ${formatNumber(convertedValue)} ${getUnitName(toUnitValue)}`;
    }

    function formatNumber(num) {
      if (num === 0) return '0';
      if (Math.abs(num) < 0.0001 || Math.abs(num) > 1000000) {
        return num.toExponential(6);
      }
      // Round to reasonable precision based on magnitude
      const precision = Math.max(0, 6 - Math.floor(Math.log10(Math.abs(num))));
      return Number(num.toFixed(precision)).toString();
    }

    function getUnitName(unitKey) {
      const unitNames = {
        'ns': 'Nanoseconds',
        'μs': 'Microseconds',
        'ms': 'Milliseconds',
        's': 'Seconds',
        'min': 'Minutes',
        'h': 'Hours',
        'd': 'Days',
        'wk': 'Weeks',
        'fortnight': 'Fortnights',
        'month': 'Months',
        'yr': 'Years',
        'decade': 'Decades',
        'century': 'Centuries',
        'millennium': 'Millennia',
        'planck': 'Planck Times',
        'shake': 'Shakes',
        'jiffy': 'Jiffies',
        'sidereal_day': 'Sidereal Days',
        'sidereal_yr': 'Sidereal Years',
        'julian_yr': 'Julian Years',
        'moment': 'Moments',
        'watch': 'Watches',
        'ghatika': 'Ghatikas',
        'muhurta': 'Muhurtas',
        'yama': 'Yamas',
        'prahara': 'Praharas',
        'nimesha': 'Nimeshas',
        'kashta': 'Kashtas',
        'kalpa': 'Kalpas',
        'tick': 'Ticks',
        'frame': 'Frames',
        'clock_cycle': 'Clock Cycles'
      };
      
      return unitNames[unitKey] || unitKey;
    }

    function handleAction(action) {
      switch (action) {
        case 'copy':
          copyToClipboard(conversionResult.textContent);
          break;

        case 'reset':
          fromValue.value = 1;
          fromUnit.value = 's';
          toUnit.value = 'min';
          convertTime();
          showAlert('Converter reset to default values!', 'success');
          break;

        case 'clear':
          fromValue.value = '';
          toValue.value = '';
          conversionResult.textContent = 'Enter a value to see conversion result';
          showAlert('All fields cleared!', 'success');
          break;
      }
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showAlert('Conversion result copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy result: ' + err, 'error');
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