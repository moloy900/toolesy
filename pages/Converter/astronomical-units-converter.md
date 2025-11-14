---
layout: default
title: "Astronomical Units Converter - Convert AU, Light Years, Parsecs, Solar Mass & More"
permalink: /astronomical-units-converter-convert-au-light-years-parsecs-solar-mass-more/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Astronomical Units Converter - Convert AU, Light Years, Parsecs, Solar Mass & More</title>
<meta name="description"
  content="Free online astronomical units converter tool. Convert between AU, light years, parsecs, solar masses, earth masses, astronomical distances, masses, time units and more.">
<meta name="keywords"
  content="astronomical units converter, au to light years, parsec converter, solar mass converter, astronomical distance converter, space units converter, astronomy calculator">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Astronomical Units Converter Styles */
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

  .converter-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin: 30px 0;
  }

  .converter-card {
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border-top: 4px solid var(--primary);
  }

  .converter-card h3 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.3rem;
    text-align: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }

  .input-group {
    margin-bottom: 20px;
  }

  .input-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #2c3e50;
  }

  .input-group input,
  .input-group select {
    width: 100%;
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

  .result-section {
    margin-top: 25px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid #27ae60;
  }

  .result-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #e0e0e0;
  }

  .result-item:last-child {
    border-bottom: none;
  }

  .result-item span:first-child {
    font-weight: 600;
    color: #2c3e50;
  }

  .result-item span:last-child {
    font-weight: bold;
    color: var(--primary);
    font-family: 'Courier New', monospace;
  }

  .unit-info {
    margin-top: 25px;
    padding: 20px;
    background: #fff3cd;
    border-radius: 8px;
    border-left: 4px solid #ffc107;
  }

  .unit-info h4 {
    color: #856404;
    margin-bottom: 10px;
  }

  .unit-info p {
    color: #856404;
    margin-bottom: 8px;
    line-height: 1.6;
  }

  .reference-section {
    margin-top: 25px;
    padding: 20px;
    background: #e8f4fd;
    border-radius: 8px;
    border-left: 4px solid #3498db;
  }

  .reference-section h4 {
    color: #2c3e50;
    margin-bottom: 15px;
  }

  .reference-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #d1ecf1;
  }

  .reference-item:last-child {
    border-bottom: none;
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

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .converter-grid {
      grid-template-columns: 1fr;
      gap: 20px;
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
  }
</style>

<div class="converter-container">
  <h1>Free Online Astronomical Units Converter</h1>
  <p class="welcome-message">Convert between different astronomical units instantly. Convert AU, light years, parsecs, solar masses, earth masses, astronomical distances, time units, speeds and more with precision.</p>

  <div class="converter-section">
    <h2>Astronomical Units Converter</h2>

    <div class="converter-grid">
      <!-- Distance Units Converter -->
      <div class="converter-card">
        <h3>Astronomical Distance Units</h3>
        <div class="input-group">
          <label for="auInput">Astronomical Unit (AU)</label>
          <input type="number" id="auInput" placeholder="Enter AU" step="any">
        </div>
        <div class="input-group">
          <label for="lightYearInput">Light Year (ly)</label>
          <input type="number" id="lightYearInput" placeholder="Enter light years" step="any">
        </div>
        <div class="input-group">
          <label for="parsecInput">Parsec (pc)</label>
          <input type="number" id="parsecInput" placeholder="Enter parsecs" step="any">
        </div>
        <div class="input-group">
          <label for="kiloparsecInput">Kiloparsec (kpc)</label>
          <input type="number" id="kiloparsecInput" placeholder="Enter kiloparsecs" step="any">
        </div>
        <div class="input-group">
          <label for="megaparsecInput">Megaparsec (Mpc)</label>
          <input type="number" id="megaparsecInput" placeholder="Enter megaparsecs" step="any">
        </div>
        <div class="input-group">
          <label for="gigaparsecInput">Gigaparsec (Gpc)</label>
          <input type="number" id="gigaparsecInput" placeholder="Enter gigaparsecs" step="any">
        </div>
        <div class="input-group">
          <label for="kmInput">Kilometer (km)</label>
          <input type="number" id="kmInput" placeholder="Enter kilometers" step="any">
        </div>
        <div class="input-group">
          <label for="meterInput">Meter (m)</label>
          <input type="number" id="meterInput" placeholder="Enter meters" step="any">
        </div>
        
        <div class="result-section">
          <h4>Distance Conversions:</h4>
          <div class="result-item">
            <span>AU to Light Years:</span>
            <span id="auToLy">0</span>
          </div>
          <div class="result-item">
            <span>Light Years to Parsecs:</span>
            <span id="lyToPc">0</span>
          </div>
          <div class="result-item">
            <span>Parsecs to AU:</span>
            <span id="pcToAu">0</span>
          </div>
        </div>
      </div>

      <!-- Mass & Size Units Converter -->
      <div class="converter-card">
        <h3>Mass & Size Units</h3>
        <div class="input-group">
          <label for="solarMassInput">Solar Mass (M☉)</label>
          <input type="number" id="solarMassInput" placeholder="Enter solar masses" step="any">
        </div>
        <div class="input-group">
          <label for="earthMassInput">Earth Mass (M⊕)</label>
          <input type="number" id="earthMassInput" placeholder="Enter earth masses" step="any">
        </div>
        <div class="input-group">
          <label for="jupiterMassInput">Jupiter Mass (M♃)</label>
          <input type="number" id="jupiterMassInput" placeholder="Enter jupiter masses" step="any">
        </div>
        <div class="input-group">
          <label for="kgInput">Kilogram (kg)</label>
          <input type="number" id="kgInput" placeholder="Enter kilograms" step="any">
        </div>
        <div class="input-group">
          <label for="gramInput">Gram (g)</label>
          <input type="number" id="gramInput" placeholder="Enter grams" step="any">
        </div>
        <div class="input-group">
          <label for="solarRadiusInput">Solar Radius (R☉)</label>
          <input type="number" id="solarRadiusInput" placeholder="Enter solar radii" step="any">
        </div>
        <div class="input-group">
          <label for="earthRadiusInput">Earth Radius (R⊕)</label>
          <input type="number" id="earthRadiusInput" placeholder="Enter earth radii" step="any">
        </div>
        <div class="input-group">
          <label for="lunarDistanceInput">Earth-Moon Distance (LD)</label>
          <input type="number" id="lunarDistanceInput" placeholder="Enter lunar distances" step="any">
        </div>
        
        <div class="result-section">
          <h4>Mass Conversions:</h4>
          <div class="result-item">
            <span>Solar Mass to Earth Mass:</span>
            <span id="solarToEarthMass">0</span>
          </div>
          <div class="result-item">
            <span>Earth Mass to Jupiter Mass:</span>
            <span id="earthToJupiterMass">0</span>
          </div>
          <div class="result-item">
            <span>Solar Radius to Earth Radius:</span>
            <span id="solarToEarthRadius">0</span>
          </div>
        </div>
      </div>

      <!-- Time, Speed & Brightness Units Converter -->
      <div class="converter-card">
        <h3>Time, Speed & Brightness</h3>
        <div class="input-group">
          <label for="julianYearInput">Julian Year</label>
          <input type="number" id="julianYearInput" placeholder="Enter Julian years" step="any">
        </div>
        <div class="input-group">
          <label for="siderealYearInput">Sidereal Year</label>
          <input type="number" id="siderealYearInput" placeholder="Enter sidereal years" step="any">
        </div>
        <div class="input-group">
          <label for="secondInput">Second (s)</label>
          <input type="number" id="secondInput" placeholder="Enter seconds" step="any">
        </div>
        <div class="input-group">
          <label for="minuteInput">Minute (min)</label>
          <input type="number" id="minuteInput" placeholder="Enter minutes" step="any">
        </div>
        <div class="input-group">
          <label for="hourInput">Hour (hr)</label>
          <input type="number" id="hourInput" placeholder="Enter hours" step="any">
        </div>
        <div class="input-group">
          <label for="dayInput">Day</label>
          <input type="number" id="dayInput" placeholder="Enter days" step="any">
        </div>
        
        <div class="input-group">
          <label for="speedLightInput">Speed of Light (c)</label>
          <input type="number" id="speedLightInput" placeholder="Enter c (fraction)" step="any">
        </div>
        <div class="input-group">
          <label for="kmPerSInput">Speed (km/s)</label>
          <input type="number" id="kmPerSInput" placeholder="Enter km/s" step="any">
        </div>
        <div class="input-group">
          <label for="mPerSInput">Speed (m/s)</label>
          <input type="number" id="mPerSInput" placeholder="Enter m/s" step="any">
        </div>
        
        <div class="result-section">
          <h4>Time & Speed Conversions:</h4>
          <div class="result-item">
            <span>Light Years to Travel Time:</span>
            <span id="lyTravelTime">0</span>
          </div>
          <div class="result-item">
            <span>km/s to c:</span>
            <span id="kmpsToC">0</span>
          </div>
          <div class="result-item">
            <span>Julian to Sidereal Year:</span>
            <span id="julianToSidereal">0</span>
          </div>
        </div>
      </div>
    </div>

    <div class="unit-info">
      <h4>Astronomical Units Definitions & Conversion Factors</h4>
      <p><strong>Astronomical Unit (AU):</strong> Average Earth-Sun distance ≈ 149.6 million km</p>
      <p><strong>Light Year (ly):</strong> Distance light travels in one year ≈ 9.461 trillion km</p>
      <p><strong>Parsec (pc):</strong> Distance at which 1 AU subtends 1 arcsecond ≈ 3.262 light years</p>
      <p><strong>Solar Mass (M☉):</strong> Mass of our Sun ≈ 1.989 × 10³⁰ kg</p>
      <p><strong>Earth Mass (M⊕):</strong> Mass of Earth ≈ 5.972 × 10²⁴ kg</p>
      <p><strong>Solar Radius (R☉):</strong> Radius of our Sun ≈ 696,340 km</p>
      <p><strong>Lunar Distance (LD):</strong> Average Earth-Moon distance ≈ 384,400 km</p>
      <p><strong>Julian Year:</strong> Exactly 365.25 days, used in astronomy</p>
    </div>

    <div class="reference-section">
      <h4>Common Astronomical Distances</h4>
      <div class="reference-item">
        <span>Earth to Moon:</span>
        <span>0.00257 AU ≈ 1.28 light seconds</span>
      </div>
      <div class="reference-item">
        <span>Earth to Sun:</span>
        <span>1 AU ≈ 8.32 light minutes</span>
      </div>
      <div class="reference-item">
        <span>Sun to Neptune:</span>
        <span>30.1 AU ≈ 4.16 light hours</span>
      </div>
      <div class="reference-item">
        <span>Sun to Proxima Centauri:</span>
        <span>1.3 parsecs ≈ 4.24 light years</span>
      </div>
      <div class="reference-item">
        <span>Sun to Galactic Center:</span>
        <span>8.1 kpc ≈ 26,000 light years</span>
      </div>
      <div class="reference-item">
        <span>Andromeda Galaxy:</span>
        <span>0.77 Mpc ≈ 2.5 million light years</span>
      </div>
    </div>

    <div class="button-section">
      <button class="case-button" data-action="calculate">Calculate All</button>
      <button class="case-button" data-action="reset">Reset All</button>
      <button class="case-button success" data-action="copy">Copy Results</button>
      <button class="case-button secondary" data-action="clear">Clear All</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Common Astronomical Conversion Examples</h2>

      <h3>Distance Conversions:</h3>
      <div class="example-text">1 AU = 149,597,870.7 km = 8.317 light minutes
1 light year = 63,241 AU = 0.3066 parsecs
1 parsec = 206,265 AU = 3.2616 light years
1 megaparsec = 1,000,000 parsecs = 3.26 million light years</div>

      <h3>Mass Conversions:</h3>
      <div class="example-text">1 Solar Mass = 333,000 Earth Masses
1 Solar Mass = 1,047 Jupiter Masses
1 Jupiter Mass = 317.8 Earth Masses
Sun Mass = 1.989 × 10³⁰ kg
Earth Mass = 5.972 × 10²⁴ kg</div>

      <h3>Size Comparisons:</h3>
      <div class="example-text">Solar Radius = 109 Earth Radii
Jupiter Radius = 11.2 Earth Radii
Earth-Moon Distance = 0.00257 AU
Solar System Size (to Neptune) = 30.1 AU</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Astronomical Units Converter Tool</h2>

    <p>Working with astronomical measurements and cosmic scales? Our free <strong>Astronomical Units Converter tool</strong> is the perfect solution for astronomers, astrophysicists, students, educators, and space enthusiasts. This comprehensive tool allows you to instantly convert between all major astronomical units including astronomical units (AU), light years, parsecs, solar masses, earth masses, solar radii, lunar distances, and more. There's no download required, no registration needed, and your data privacy is guaranteed as all calculations happen securely right in your browser.</p>

    <h3>How to Use This Astronomical Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Select Your Input:</strong> Enter the value you want to convert in any of the input fields (AU, light years, solar masses, etc.).</li>
      <li><strong>Automatic Calculation:</strong> The tool automatically calculates and displays all equivalent values in real-time as you type.</li>
      <li><strong>Review Results:</strong> Check the conversion results section for accurate conversions between all related astronomical units.</li>
      <li><strong>Copy or Reset:</strong> Use the "Copy Results" button to save your conversions or "Reset All" to start over with new values.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're an astronomy student studying exoplanets and you read that a newly discovered planet orbits its star at 0.5 AU. To better understand this distance in more familiar terms, you enter "0.5" in the AU field. The tool instantly shows you that this equals approximately 4.16 light minutes, 74.8 million kilometers, or about half the Earth-Sun distance. This helps you visualize the planetary system and compare it to our own solar system.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Astronomers & Astrophysicists:</strong> Convert between different astronomical measurement systems for research and publications.</li>
      <li><strong>Students & Educators:</strong> Learn astronomical unit relationships and verify calculations for coursework and teaching.</li>
      <li><strong>Space Enthusiasts:</strong> Understand and compare cosmic distances and scales in familiar units.</li>
      <li><strong>Science Writers & Journalists:</strong> Convert technical astronomical measurements for public communication.</li>
      <li><strong>Amateur Astronomers:</strong> Calculate telescope specifications and observational parameters using standard units.</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What is the difference between a light year and a parsec?</strong><br>
      A light year is the distance light travels in one year (about 9.46 trillion km). A parsec is based on parallax measurements - the distance at which 1 AU subtends an angle of 1 arcsecond (about 3.26 light years). Parsecs are more commonly used in professional astronomy.</p>

    <p><strong>How do I convert between astronomical units and light years?</strong><br>
      1 light year = 63,241 AU, and 1 AU = 1/63,241 light years. The conversion involves the speed of light and the definition of the astronomical unit based on the Earth-Sun distance.</p>

    <p><strong>Is my data kept private when I use this converter?</strong><br>
      Absolutely. All calculations happen locally in your browser. Your astronomical data and measurements are never sent to any server, meaning we never see, store, or have access to your data. It is 100% secure and private.</p>

    <p><strong>Can I use this tool on my mobile device?</strong><br>
      Yes, our website and converter are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets.</p>

    <p><strong>What is the significance of solar mass in astronomy?</strong><br>
      Solar mass (M☉) is the standard unit of mass in astronomy, equal to the mass of our Sun (1.989 × 10³⁰ kg). It's used to describe the masses of stars, galaxies, and other astronomical objects, providing a convenient scale for cosmic mass measurements.</p>

    <h3>Why Choose Our Astronomical Units Converter?</h3>
    <p>Our <strong>online astronomical converter</strong> stands out from other tools because of its comprehensive coverage, accuracy, and privacy features. Unlike many online converters, we don't process your data on our servers - all calculations happen in your browser. This means your research data, observational measurements, and academic work remain completely private. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Common Applications of Astronomical Unit Conversion</h3>
    <p>Astronomical unit conversion has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Research Astronomy:</strong> Convert between different distance scales for galactic and extragalactic studies</li>
      <li><strong>Exoplanet Studies:</strong> Compare planetary system architectures using consistent distance units</li>
      <li><strong>Cosmology:</strong> Work with megaparsec and gigaparsec scales for large-scale structure measurements</li>
      <li><strong>Space Mission Planning:</strong> Calculate travel times and distances for interplanetary missions</li>
      <li><strong>Education & Outreach:</strong> Help students and the public understand the immense scales of the universe</li>
    </ul>

    <h3>Understanding Astronomical Measurement Systems</h3>
    <p>Astronomical measurement involves several different unit systems, each serving specific distance scales:</p>
    <ul>
      <li><strong>Solar System Scale (AU):</strong> Based on Earth-Sun distance, ideal for planetary distances</li>
      <li><strong>Stellar Scale (Light Years):</strong> Based on light travel time, intuitive for public understanding</li>
      <li><strong>Professional Astronomy (Parsecs):</strong> Based on parallax measurements, standard in research</li>
      <li><strong>Galactic Scale (Kiloparsecs):</strong> For distances within our galaxy and nearby galaxies</li>
      <li><strong>Cosmological Scale (Megaparsecs):</strong> For intergalactic distances and large-scale structure</li>
    </ul>

    <h3>Professional Applications</h3>
    <p>This converter is essential for professionals in various fields:</p>
    <ul>
      <li><strong>Observational Astronomy:</strong> Convert between angular sizes and physical distances</li>
      <li><strong>Theoretical Astrophysics:</strong> Work with natural units in gravitational and cosmological calculations</li>
      <li><strong>Planetary Science:</strong> Compare exoplanet systems with our solar system using AU equivalents</li>
      <li><strong>Space Engineering:</strong> Calculate signal travel times and mission parameters</li>
      <li><strong>Science Communication:</strong> Translate technical measurements into publicly understandable terms</li>
    </ul>

    <h3>Practical Conversion Examples</h3>
    <p>Understanding these common conversions can help in astronomical work:</p>
    <ul>
      <li><strong>Nearest Star:</strong> Proxima Centauri at 1.3 parsecs = 4.24 light years = 268,000 AU</li>
      <li><strong>Galactic Scale:</strong> Milky Way diameter ≈ 30 kiloparsecs = 100,000 light years</li>
      <li><strong>Stellar Masses:</strong> Most stars range from 0.1 to 100 solar masses</li>
      <li><strong>Cosmic Distances:</strong> Observable universe radius ≈ 14 gigaparsecs = 46 billion light years</li>
      <li><strong>Time Scales:</strong> Light travel time across solar system: hours; across galaxy: 100,000 years</li>
    </ul>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // Input elements - Distance
    const auInput = document.getElementById('auInput');
    const lightYearInput = document.getElementById('lightYearInput');
    const parsecInput = document.getElementById('parsecInput');
    const kiloparsecInput = document.getElementById('kiloparsecInput');
    const megaparsecInput = document.getElementById('megaparsecInput');
    const gigaparsecInput = document.getElementById('gigaparsecInput');
    const kmInput = document.getElementById('kmInput');
    const meterInput = document.getElementById('meterInput');
    
    // Input elements - Mass & Size
    const solarMassInput = document.getElementById('solarMassInput');
    const earthMassInput = document.getElementById('earthMassInput');
    const jupiterMassInput = document.getElementById('jupiterMassInput');
    const kgInput = document.getElementById('kgInput');
    const gramInput = document.getElementById('gramInput');
    const solarRadiusInput = document.getElementById('solarRadiusInput');
    const earthRadiusInput = document.getElementById('earthRadiusInput');
    const lunarDistanceInput = document.getElementById('lunarDistanceInput');
    
    // Input elements - Time & Speed
    const julianYearInput = document.getElementById('julianYearInput');
    const siderealYearInput = document.getElementById('siderealYearInput');
    const secondInput = document.getElementById('secondInput');
    const minuteInput = document.getElementById('minuteInput');
    const hourInput = document.getElementById('hourInput');
    const dayInput = document.getElementById('dayInput');
    const speedLightInput = document.getElementById('speedLightInput');
    const kmPerSInput = document.getElementById('kmPerSInput');
    const mPerSInput = document.getElementById('mPerSInput');
    
    // Result elements
    const auToLy = document.getElementById('auToLy');
    const lyToPc = document.getElementById('lyToPc');
    const pcToAu = document.getElementById('pcToAu');
    const solarToEarthMass = document.getElementById('solarToEarthMass');
    const earthToJupiterMass = document.getElementById('earthToJupiterMass');
    const solarToEarthRadius = document.getElementById('solarToEarthRadius');
    const lyTravelTime = document.getElementById('lyTravelTime');
    const kmpsToC = document.getElementById('kmpsToC');
    const julianToSidereal = document.getElementById('julianToSidereal');
    
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');

    // Astronomical constants
    const AU_TO_KM = 149597870.7; // kilometers in 1 AU
    const LIGHT_YEAR_TO_KM = 9460730472580.8; // kilometers in 1 light year
    const PARSEC_TO_LY = 3.261563777; // light years in 1 parsec
    const SPEED_OF_LIGHT = 299792.458; // km/s
    
    // Mass constants (kg)
    const SOLAR_MASS = 1.989e30;
    const EARTH_MASS = 5.972e24;
    const JUPITER_MASS = 1.898e27;
    
    // Size constants (km)
    const SOLAR_RADIUS = 696340;
    const EARTH_RADIUS = 6371;
    const LUNAR_DISTANCE = 384400;
    
    // Time constants (seconds)
    const JULIAN_YEAR = 365.25 * 24 * 3600;
    const SIDEREAL_YEAR = 365.256363004 * 24 * 3600;

    // Event listeners for automatic conversion
    const inputElements = [
      auInput, lightYearInput, parsecInput, kiloparsecInput, megaparsecInput, gigaparsecInput,
      kmInput, meterInput, solarMassInput, earthMassInput, jupiterMassInput, kgInput, gramInput,
      solarRadiusInput, earthRadiusInput, lunarDistanceInput, julianYearInput, siderealYearInput,
      secondInput, minuteInput, hourInput, dayInput, speedLightInput, kmPerSInput, mPerSInput
    ];

    inputElements.forEach(input => {
      input.addEventListener('input', performAllConversions);
    });

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleConverterAction(action);
      });
    });

    function performAllConversions() {
      // Get values from inputs
      const auValue = parseFloat(auInput.value) || 0;
      const lightYearValue = parseFloat(lightYearInput.value) || 0;
      const parsecValue = parseFloat(parsecInput.value) || 0;
      const solarMassValue = parseFloat(solarMassInput.value) || 0;
      const earthMassValue = parseFloat(earthMassInput.value) || 0;
      const jupiterMassValue = parseFloat(jupiterMassInput.value) || 0;
      const solarRadiusValue = parseFloat(solarRadiusInput.value) || 0;
      const earthRadiusValue = parseFloat(earthRadiusInput.value) || 0;
      const lunarDistanceValue = parseFloat(lunarDistanceInput.value) || 0;
      const kmPerSValue = parseFloat(kmPerSInput.value) || 0;

      // Update related fields based on which input was changed
      if (this === auInput && auValue !== 0) {
        // Convert AU to other distance units
        const km = auValue * AU_TO_KM;
        kmInput.value = km.toExponential(6);
        meterInput.value = (km * 1000).toExponential(6);
        lightYearInput.value = (km / LIGHT_YEAR_TO_KM).toExponential(6);
        parsecInput.value = (km / (LIGHT_YEAR_TO_KM * PARSEC_TO_LY)).toExponential(6);
        kiloparsecInput.value = (km / (LIGHT_YEAR_TO_KM * PARSEC_TO_LY * 1000)).toExponential(6);
        megaparsecInput.value = (km / (LIGHT_YEAR_TO_KM * PARSEC_TO_LY * 1e6)).toExponential(6);
        gigaparsecInput.value = (km / (LIGHT_YEAR_TO_KM * PARSEC_TO_LY * 1e9)).toExponential(6);
        lunarDistanceInput.value = (km / LUNAR_DISTANCE).toFixed(6);
      } else if (this === lightYearInput && lightYearValue !== 0) {
        const km = lightYearValue * LIGHT_YEAR_TO_KM;
        auInput.value = (km / AU_TO_KM).toFixed(6);
      } else if (this === solarMassInput && solarMassValue !== 0) {
        // Convert solar masses to other mass units
        const kg = solarMassValue * SOLAR_MASS;
        kgInput.value = kg.toExponential(6);
        gramInput.value = (kg * 1000).toExponential(6);
        earthMassInput.value = (kg / EARTH_MASS).toExponential(6);
        jupiterMassInput.value = (kg / JUPITER_MASS).toExponential(6);
      } else if (this === solarRadiusInput && solarRadiusValue !== 0) {
        // Convert solar radii to other size units
        const km = solarRadiusValue * SOLAR_RADIUS;
        earthRadiusInput.value = (km / EARTH_RADIUS).toFixed(2);
        lunarDistanceInput.value = (km / LUNAR_DISTANCE).toFixed(6);
        auInput.value = (km / AU_TO_KM).toExponential(6);
      } else if (this === kmPerSInput && kmPerSValue !== 0) {
        // Convert speed units
        const fractionC = kmPerSValue / SPEED_OF_LIGHT;
        speedLightInput.value = fractionC.toExponential(6);
        mPerSInput.value = (kmPerSValue * 1000).toExponential(6);
      }

      // Update all result displays
      updateResultDisplays();
    }

    function updateResultDisplays() {
      const auValue = parseFloat(auInput.value) || 0;
      const lightYearValue = parseFloat(lightYearInput.value) || 0;
      const parsecValue = parseFloat(parsecInput.value) || 0;
      const solarMassValue = parseFloat(solarMassInput.value) || 0;
      const earthMassValue = parseFloat(earthMassInput.value) || 0;
      const jupiterMassValue = parseFloat(jupiterMassInput.value) || 0;
      const solarRadiusValue = parseFloat(solarRadiusInput.value) || 0;
      const kmPerSValue = parseFloat(kmPerSInput.value) || 0;
      const julianYearValue = parseFloat(julianYearInput.value) || 0;

      // Update result displays
      if (auValue !== 0) {
        auToLy.textContent = (auValue * AU_TO_KM / LIGHT_YEAR_TO_KM).toExponential(6) + ' ly';
      } else {
        auToLy.textContent = '0';
      }

      if (lightYearValue !== 0) {
        lyToPc.textContent = (lightYearValue / PARSEC_TO_LY).toExponential(6) + ' pc';
      } else {
        lyToPc.textContent = '0';
      }

      if (parsecValue !== 0) {
        pcToAu.textContent = (parsecValue * PARSEC_TO_LY * LIGHT_YEAR_TO_KM / AU_TO_KM).toExponential(6) + ' AU';
      } else {
        pcToAu.textContent = '0';
      }

      if (solarMassValue !== 0) {
        solarToEarthMass.textContent = (solarMassValue * SOLAR_MASS / EARTH_MASS).toExponential(6) + ' M⊕';
      } else {
        solarToEarthMass.textContent = '0';
      }

      if (earthMassValue !== 0) {
        earthToJupiterMass.textContent = (earthMassValue * EARTH_MASS / JUPITER_MASS).toExponential(6) + ' M♃';
      } else {
        earthToJupiterMass.textContent = '0';
      }

      if (solarRadiusValue !== 0) {
        solarToEarthRadius.textContent = (solarRadiusValue * SOLAR_RADIUS / EARTH_RADIUS).toFixed(2) + ' R⊕';
      } else {
        solarToEarthRadius.textContent = '0';
      }

      if (lightYearValue !== 0) {
        lyTravelTime.textContent = lightYearValue + ' years at light speed';
      } else {
        lyTravelTime.textContent = '0';
      }

      if (kmPerSValue !== 0) {
        kmpsToC.textContent = (kmPerSValue / SPEED_OF_LIGHT).toExponential(6) + ' c';
      } else {
        kmpsToC.textContent = '0';
      }

      if (julianYearValue !== 0) {
        julianToSidereal.textContent = (julianYearValue * JULIAN_YEAR / SIDEREAL_YEAR).toFixed(6) + ' sidereal years';
      } else {
        julianToSidereal.textContent = '0';
      }
    }

    function handleConverterAction(action) {
      switch (action) {
        case 'calculate':
          updateResultDisplays();
          showAlert('All conversions calculated successfully!', 'success');
          break;

        case 'reset':
          // Reset all inputs to 0
          inputElements.forEach(input => {
            input.value = '';
          });
          updateResultDisplays();
          showAlert('All fields reset successfully!', 'success');
          break;

        case 'copy':
          copyResultsToClipboard();
          break;

        case 'clear':
          // Clear all inputs and results
          inputElements.forEach(input => {
            input.value = '';
          });
          updateResultDisplays();
          showAlert('All fields cleared successfully!', 'success');
          break;
      }
    }

    function copyResultsToClipboard() {
      const results = `
Astronomical Units Conversion Results:
AU to Light Years: ${auToLy.textContent}
Light Years to Parsecs: ${lyToPc.textContent}
Parsecs to AU: ${pcToAu.textContent}
Solar Mass to Earth Mass: ${solarToEarthMass.textContent}
Earth Mass to Jupiter Mass: ${earthToJupiterMass.textContent}
Solar Radius to Earth Radius: ${solarToEarthRadius.textContent}
Light Year Travel Time: ${lyTravelTime.textContent}
km/s to c: ${kmpsToC.textContent}
Julian to Sidereal Year: ${julianToSidereal.textContent}

Generated using Astronomical Units Converter Tool
      `.trim();

      navigator.clipboard.writeText(results).then(() => {
        showAlert('Conversion results copied to clipboard!', 'success');
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

    // Initialize with some example values
    auInput.value = '1';
    performAllConversions.call(auInput);
  });
</script>