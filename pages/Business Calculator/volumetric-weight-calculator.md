---
layout: default
title: "Volumetric Weight Calculator – For Amazon & Flipkart"
permalink: /volumetric-weight-calculator-for-amazon-flipkart/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Volumetric Weight Calculator – For Amazon & Flipkart</title>
<meta name="description"
  content="Free online volumetric weight calculator for Flipkart, Amazon, and other marketplaces. Calculate shipping costs based on package dimensions and volumetric weight.">
<meta name="keywords"
  content="volumetric weight calculator, flipkart shipping, amazon shipping, courier charges, package dimensions, shipping cost calculator, volumetric weight formula">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Volumetric Weight Calculator Styles */
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

  .input-section {
    margin: 20px 0;
  }

  .input-section input, .input-section select {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    font-size: 16px;
    margin-bottom: 15px;
    transition: border-color 0.3s;
  }

  .input-section input:focus, .input-section select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .input-section label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #2c3e50;
  }

  .checkbox-group {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
  }

  .checkbox-group input {
    width: 18px;
    height: 18px;
  }

  .checkbox-group label {
    margin-bottom: 0;
    font-weight: normal;
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

  .case-button.warning {
    background: #ffc107;
    color: #212529;
  }

  .case-button.warning:hover {
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

  .results-section {
    margin-top: 30px;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .results-section h3 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
  }

  .result-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #eee;
  }

  .result-item.total {
    font-weight: bold;
    font-size: 1.2rem;
    color: var(--primary);
    border-bottom: none;
    border-top: 2px solid #eee;
    margin-top: 10px;
    padding-top: 15px;
  }

  .result-item.volumetric {
    font-weight: bold;
    font-size: 1.3rem;
    color: #28a745;
    border-bottom: none;
    margin-top: 10px;
    padding-top: 15px;
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

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .counter-wrapper {
      grid-template-columns: 1fr;
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

  /* Input grid layout */
  .input-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }

  .input-group {
    display: flex;
    flex-direction: column;
  }

  .calculation-breakdown {
    background: white;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
    border-left: 4px solid #17a2b8;
  }

  .calculation-breakdown h4 {
    color: #17a2b8;
    margin-bottom: 15px;
    font-size: 1.2rem;
  }

  .breakdown-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .breakdown-item:last-child {
    border-bottom: none;
    font-weight: bold;
    color: var(--primary);
  }

  .info-tooltip {
    color: #6c757d;
    cursor: help;
    margin-left: 5px;
  }

  .marketplace-options {
    background: white;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    border: 1px solid #e0e0e0;
  }

  .marketplace-option {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .marketplace-option:hover {
    background-color: #f8f9fa;
  }

  .marketplace-option.active {
    background-color: #e3f2fd;
    border: 1px solid var(--primary);
  }

  .marketplace-option input {
    margin: 0;
  }

  .marketplace-logo {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  .weight-comparison {
    background: #fff3cd;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    border-left: 4px solid #ffc107;
  }

  .weight-comparison h4 {
    color: #856404;
    margin-bottom: 10px;
  }
</style>

<div class="converter-container">
  <h1>Volumetric Weight Calculator</h1>
  <p class="welcome-message">Calculate volumetric weight for Flipkart, Amazon, and other marketplaces. Optimize your shipping costs by understanding dimensional weight calculations.</p>

  <div class="converter-section">
    <h2>Volumetric Weight Calculator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Package Volume: </span>
        <span id="packageVolume">0 cm³</span>
      </div>
      <div class="counter-item">
        <span>Volumetric Factor: </span>
        <span id="volFactorDisplay">5000</span>
      </div>
      <div class="counter-item">
        <span>Volumetric Weight: </span>
        <span id="volumetricWeight">0 kg</span>
      </div>
      <div class="counter-item">
        <span>Actual Weight: </span>
        <span id="actualWeight">0 kg</span>
      </div>
    </div>

    <div class="marketplace-options">
      <h4>Select Marketplace <span class="info-tooltip" title="Choose your marketplace for recommended volumetric factors">ℹ️</span></h4>
      
      <div class="marketplace-option active" data-factor="5000">
        <input type="radio" id="flipkart" name="marketplace" value="flipkart" checked>
        <label for="flipkart">Flipkart (Factor: 5000)</label>
      </div>
      
      <div class="marketplace-option" data-factor="5000">
        <input type="radio" id="amazon" name="marketplace" value="amazon">
        <label for="amazon">Amazon (Factor: 5000)</label>
      </div>
      
      <div class="marketplace-option" data-factor="4000">
        <input type="radio" id="meesho" name="marketplace" value="meesho">
        <label for="meesho">Meesho (Factor: 4000)</label>
      </div>
      
      <div class="marketplace-option" data-factor="6000">
        <input type="radio" id="myntra" name="marketplace" value="myntra">
        <label for="myntra">Myntra (Factor: 6000)</label>
      </div>
      
      <div class="marketplace-option" data-factor="custom">
        <input type="radio" id="custom" name="marketplace" value="custom">
        <label for="custom">Custom Factor</label>
      </div>
    </div>

    <div class="input-grid">
      <div class="input-group">
        <label for="length">Length (cm) <span class="info-tooltip" title="Enter the longest dimension of your package">ℹ️</span></label>
        <input type="number" id="length" placeholder="Enter length in cm" min="1" step="0.1">
      </div>

      <div class="input-group">
        <label for="width">Width (cm) <span class="info-tooltip" title="Enter the second longest dimension of your package">ℹ️</span></label>
        <input type="number" id="width" placeholder="Enter width in cm" min="1" step="0.1">
      </div>

      <div class="input-group">
        <label for="height">Height (cm) <span class="info-tooltip" title="Enter the shortest dimension of your package">ℹ️</span></label>
        <input type="number" id="height" placeholder="Enter height in cm" min="1" step="0.1">
      </div>

      <div class="input-group">
        <label for="actual_weight">Actual Weight (kg) <span class="info-tooltip" title="Enter the physical weight of your package">ℹ️</span></label>
        <input type="number" id="actual_weight" placeholder="Enter actual weight" min="0" step="0.01" value="1">
      </div>
    </div>

    <div class="input-grid">
      <div class="input-group">
        <label for="volumetric_factor">Volumetric Factor <span class="info-tooltip" title="Divisor used to calculate volumetric weight (typically 4000-6000)">ℹ️</span></label>
        <input type="number" id="volumetric_factor" placeholder="5000" min="1000" max="10000" step="100" value="5000">
      </div>

      <div class="input-group">
        <label for="shipping_rate">Shipping Rate (₹/kg) <span class="info-tooltip" title="Cost per kilogram for shipping">ℹ️</span></label>
        <input type="number" id="shipping_rate" placeholder="Enter shipping rate" min="1" step="1" value="50">
      </div>
    </div>

    <div class="checkbox-group">
      <input type="checkbox" id="show_comparison" checked>
      <label for="show_comparison">Show weight comparison and shipping cost</label>
    </div>

    <div class="button-section">
      <button class="case-button" id="calculateButton">Calculate Volumetric Weight</button>
      <button class="case-button secondary" id="clearButton">Clear</button>
      <button class="case-button success" id="copyButton">Copy Results</button>
      <button class="case-button warning" id="detailsButton">Formula Info</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="results-section" id="resultsSection" style="display: none;">
      <h3>Volumetric Weight Results</h3>
      
      <div class="result-item">
        <span>Package Dimensions:</span>
        <span id="resultDimensions">0 × 0 × 0 cm</span>
      </div>
      
      <div class="result-item">
        <span>Package Volume:</span>
        <span id="resultVolume">0 cm³</span>
      </div>
      
      <div class="result-item">
        <span>Volumetric Factor:</span>
        <span id="resultFactor">5000</span>
      </div>
      
      <div class="result-item volumetric">
        <span>Volumetric Weight:</span>
        <span id="resultVolWeight">0 kg</span>
      </div>
      
      <div class="result-item">
        <span>Actual Weight:</span>
        <span id="resultActualWeight">0 kg</span>
      </div>

      <div class="weight-comparison" id="weightComparison">
        <h4>Weight Comparison</h4>
        <div class="breakdown-item">
          <span>Chargable Weight:</span>
          <span id="chargableWeight">0 kg</span>
        </div>
        <div class="breakdown-item">
          <span>Shipping Rate:</span>
          <span id="resultShippingRate">₹0/kg</span>
        </div>
        <div class="breakdown-item">
          <span>Estimated Shipping Cost:</span>
          <span id="shippingCost">₹0</span>
        </div>
      </div>

      <div class="calculation-breakdown">
        <h4>Calculation Breakdown</h4>
        <div class="breakdown-item">
          <span>Volume Calculation:</span>
          <span id="volumeCalculation">Length × Width × Height</span>
        </div>
        <div class="breakdown-item">
          <span>Volumetric Weight Formula:</span>
          <span id="weightFormula">(L × W × H) ÷ Factor</span>
        </div>
        <div class="breakdown-item">
          <span>Chargable Weight Rule:</span>
          <span id="chargableRule">Higher of Volumetric or Actual Weight</span>
        </div>
      </div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <h3>Example 1: Small Electronics Box</h3>
      <div class="example-text">
Dimensions: 30 × 20 × 10 cm
Volume: 6,000 cm³
Volumetric Factor: 5000
Volumetric Weight: 1.2 kg
Actual Weight: 0.8 kg
Chargable Weight: 1.2 kg (Volumetric)
Shipping Cost: ₹60 (at ₹50/kg)
      </div>

      <h3>Example 2: Clothing Package</h3>
      <div class="example-text">
Dimensions: 40 × 30 × 5 cm
Volume: 6,000 cm³
Volumetric Factor: 5000
Volumetric Weight: 1.2 kg
Actual Weight: 1.5 kg
Chargable Weight: 1.5 kg (Actual)
Shipping Cost: ₹75 (at ₹50/kg)
      </div>

      <h3>Example 3: Large Lightweight Item</h3>
      <div class="example-text">
Dimensions: 60 × 40 × 30 cm
Volume: 72,000 cm³
Volumetric Factor: 5000
Volumetric Weight: 14.4 kg
Actual Weight: 2.0 kg
Chargable Weight: 14.4 kg (Volumetric)
Shipping Cost: ₹720 (at ₹50/kg)
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Volumetric Weight Calculator for E-commerce Sellers</h2>

    <p>Our free <strong>Volumetric Weight Calculator</strong> is specifically designed for e-commerce sellers on platforms like Flipkart, Amazon, Meesho, and other Indian marketplaces. Calculate accurate shipping costs by understanding dimensional weight calculations, which courier companies use to charge for lightweight but bulky packages. All calculations are optimized for Indian shipping scenarios and rupee-based pricing.</p>

    <h3>How to Use This Volumetric Weight Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Select Marketplace:</strong> Choose your e-commerce platform for recommended volumetric factors.</li>
      <li><strong>Enter Package Dimensions:</strong> Input length, width, and height in centimeters.</li>
      <li><strong>Input Actual Weight:</strong> Enter the physical weight of your package in kilograms.</li>
      <li><strong>Set Volumetric Factor:</strong> Use the recommended factor or set a custom value.</li>
      <li><strong>Configure Shipping Rate:</strong> Enter your shipping cost per kilogram.</li>
      <li><strong>Calculate:</strong> Click "Calculate Volumetric Weight" to see detailed results.</li>
      <li><strong>Analyze Results:</strong> Compare volumetric vs actual weight and estimate shipping costs.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're shipping a large but lightweight product like a pillow on Amazon. The package dimensions are 50×40×20 cm (volume: 40,000 cm³) with an actual weight of just 1.2 kg. Using the standard volumetric factor of 5000, the volumetric weight calculates to 8 kg. Since couriers charge based on whichever weight is higher, you'd be charged for 8 kg instead of 1.2 kg. At ₹50/kg shipping rate, this means ₹400 instead of ₹60 - a significant difference that impacts your profitability.</p>

    <h3>Understanding Volumetric Weight:</h3>
    <p>Volumetric weight (also called dimensional weight) is a pricing technique used by courier companies to account for lightweight but bulky packages that occupy more space in vehicles:</p>
    <ul>
      <li><strong>Purpose:</strong> Fair pricing for packages that take up more space relative to their weight</li>
      <li><strong>Formula:</strong> (Length × Width × Height) ÷ Volumetric Factor</li>
      <li><strong>Chargable Weight:</strong> The higher of volumetric weight or actual weight</li>
      <li><strong>Common Factors:</strong> 4000-6000 (varies by courier and region)</li>
    </ul>

    <h3>Standard Volumetric Factors by Platform:</h3>
    <ul>
      <li><strong>Flipkart:</strong> 5000 (standard for most Indian couriers)</li>
      <li><strong>Amazon:</strong> 5000 (similar to Flipkart)</li>
      <li><strong>Meesho:</strong> 4000 (more favorable for sellers)</li>
      <li><strong>Myntra:</strong> 6000 (less favorable for bulky items)</li>
      <li><strong>Delhivery:</strong> 5000</li>
      <li><strong>Blue Dart:</strong> 5000</li>
      <li><strong>DTDC:</strong> 5000</li>
    </ul>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>E-commerce Sellers:</strong> Accurately calculate shipping costs before listing products</li>
      <li><strong>Small Business Owners:</strong> Optimize packaging to reduce volumetric weight</li>
      <li><strong>Dropshippers:</strong> Understand true shipping costs for different products</li>
      <li><strong>Inventory Managers:</strong> Plan storage and shipping for various product sizes</li>
      <li><strong>Startup Founders:</strong> Budget accurately for shipping expenses</li>
      <li><strong>Logistics Professionals:</strong> Quick calculations for customer quotes</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>Why is volumetric weight important for e-commerce sellers?</strong><br>
      Volumetric weight determines your actual shipping costs. Underestimating it can significantly reduce your profit margins or even cause losses on orders.</p>

    <p><strong>How can I reduce my volumetric weight?</strong><br>
      Use compact packaging, avoid excessive void fill, choose smaller boxes when possible, and consider flexible packaging for non-fragile items.</p>

    <p><strong>Are volumetric factors the same for all courier companies?</strong><br>
      No, different couriers use different factors. Domestic couriers in India typically use 4000-6000, while international shipping may use different factors.</p>

    <p><strong>What happens if my actual weight is higher than volumetric weight?</strong><br>
      You'll be charged based on the actual weight. Courier companies always charge based on whichever weight is higher.</p>

    <p><strong>Is this calculator accurate for all Indian courier services?</strong><br>
      While we use standard factors, always verify with your specific courier service as factors can change or vary by service type.</p>

    <h3>Why Choose Our Volumetric Weight Calculator?</h3>
    <p>Our <strong>Volumetric Weight Calculator</strong> provides the most comprehensive solution specifically designed for Indian e-commerce sellers. Unlike basic calculators, we include marketplace-specific factors, shipping cost estimations, and detailed comparisons between volumetric and actual weights. The tool is optimized for rupee-based calculations and provides practical insights for cost optimization.</p>

    <h3>Volumetric Weight Calculation Formulas:</h3>
    <ul>
      <li><strong>Volume Calculation:</strong> Length (cm) × Width (cm) × Height (cm)</li>
      <li><strong>Volumetric Weight:</strong> Volume (cm³) ÷ Volumetric Factor</li>
      <li><strong>Chargable Weight:</strong> Maximum of (Volumetric Weight, Actual Weight)</li>
      <li><strong>Shipping Cost:</strong> Chargable Weight × Shipping Rate per kg</li>
    </ul>

    <h3>Packaging Optimization Tips for Sellers:</h3>
    <p>Reduce your shipping costs with these smart packaging strategies:</p>
    <ul>
      <li><strong>Right-Size Packaging:</strong> Use the smallest possible box that safely contains your product</li>
      <li><strong>Flexible Packaging:</strong> Consider poly mailers for non-fragile, soft goods</li>
      <li><strong>Nested Packaging:</strong> For multiple items, pack efficiently to minimize empty space</li>
      <li><strong>Custom Boxes:</strong> For high-volume products, consider custom-sized packaging</li>
      <li><strong>Material Choice:</strong> Use lightweight but protective materials</li>
      <li><strong>Regular Review:</strong> Periodically reassess packaging for optimization opportunities</li>
    </ul>

    <h3>Common Mistakes to Avoid:</h3>
    <ul>
      <li><strong>Ignoring Volumetric Weight:</strong> Only considering actual weight can be costly</li>
      <li><strong>Over-Packaging:</strong> Using boxes that are too large for the product</li>
      <li><strong>Inconsistent Measurements:</strong> Not measuring packages accurately</li>
      <li><strong>Outdated Factors:</strong> Using incorrect volumetric factors for your courier</li>
      <li><strong>Neglecting Packaging Costs:</strong> Forgetting to include packaging material costs in calculations</li>
    </ul>
  </div>
</div>

<!-- Formula Info Modal -->
<div id="formulaModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Volumetric Weight Formula</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <h4>Standard Volumetric Weight Calculation</h4>
      <p><strong>Formula:</strong> (Length × Width × Height) ÷ Volumetric Factor</p>
      
      <h4>Step-by-Step Calculation</h4>
      <ol>
        <li>Measure package dimensions in centimeters</li>
        <li>Calculate volume: L × W × H = Volume (cm³)</li>
        <li>Divide volume by volumetric factor (typically 5000)</li>
        <li>Compare volumetric weight with actual weight</li>
        <li>Use the higher weight for shipping charges</li>
      </ol>
      
      <h4>Example Calculation</h4>
      <p>Package: 40 × 30 × 20 cm<br>
      Volume: 40 × 30 × 20 = 24,000 cm³<br>
      Volumetric Weight: 24,000 ÷ 5000 = 4.8 kg<br>
      Actual Weight: 2.5 kg<br>
      Chargable Weight: 4.8 kg (higher value)</p>
      
      <h4>Common Volumetric Factors</h4>
      <ul>
        <li>Domestic Shipping: 4000-6000</li>
        <li>International Air: 5000-6000</li>
        <li>International Sea: 1000-2000</li>
      </ul>
    </div>
    <div class="modal-footer">
      <button class="modal-button primary" id="closeFormula">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculateButton');
    const clearButton = document.getElementById('clearButton');
    const copyButton = document.getElementById('copyButton');
    const detailsButton = document.getElementById('detailsButton');
    const alertContainer = document.getElementById('alertContainer');
    const resultsSection = document.getElementById('resultsSection');
    const formulaModal = document.getElementById('formulaModal');
    const closeFormula = document.getElementById('closeFormula');
    const closeModal = document.querySelectorAll('.close-modal');
    const weightComparison = document.getElementById('weightComparison');
    
    // Input fields
    const lengthInput = document.getElementById('length');
    const widthInput = document.getElementById('width');
    const heightInput = document.getElementById('height');
    const actualWeightInput = document.getElementById('actual_weight');
    const volumetricFactorInput = document.getElementById('volumetric_factor');
    const shippingRateInput = document.getElementById('shipping_rate');
    const showComparisonCheckbox = document.getElementById('show_comparison');
    
    // Marketplace options
    const marketplaceOptions = document.querySelectorAll('.marketplace-option');
    let selectedMarketplace = 'flipkart';
    
    // Counter fields
    const packageVolumeCounter = document.getElementById('packageVolume');
    const volFactorDisplayCounter = document.getElementById('volFactorDisplay');
    const volumetricWeightCounter = document.getElementById('volumetricWeight');
    const actualWeightCounter = document.getElementById('actualWeight');
    
    // Result fields
    const resultDimensions = document.getElementById('resultDimensions');
    const resultVolume = document.getElementById('resultVolume');
    const resultFactor = document.getElementById('resultFactor');
    const resultVolWeight = document.getElementById('resultVolWeight');
    const resultActualWeight = document.getElementById('resultActualWeight');
    const chargableWeight = document.getElementById('chargableWeight');
    const resultShippingRate = document.getElementById('resultShippingRate');
    const shippingCost = document.getElementById('shippingCost');
    const volumeCalculation = document.getElementById('volumeCalculation');
    const weightFormula = document.getElementById('weightFormula');
    const chargableRule = document.getElementById('chargableRule');

    // Event listeners
    calculateButton.addEventListener('click', calculateVolumetricWeight);
    clearButton.addEventListener('click', clearCalculator);
    copyButton.addEventListener('click', copyResults);
    detailsButton.addEventListener('click', showFormulaInfo);
    closeFormula.addEventListener('click', closeFormulaModal);
    
    // Marketplace selection
    marketplaceOptions.forEach(option => {
      option.addEventListener('click', function() {
        // Update radio button
        const radio = this.querySelector('input[type="radio"]');
        radio.checked = true;
        
        // Update selected marketplace
        selectedMarketplace = this.getAttribute('data-factor');
        
        // Update active class
        marketplaceOptions.forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
        
        // Update volumetric factor if not custom
        if (selectedMarketplace !== 'custom') {
          volumetricFactorInput.value = selectedMarketplace;
        }
        
        // Update counter display
        volFactorDisplayCounter.textContent = selectedMarketplace;
      });
    });
    
    // Update counter when volumetric factor changes
    volumetricFactorInput.addEventListener('input', function() {
      volFactorDisplayCounter.textContent = this.value;
    });
    
    // Update counter when actual weight changes
    actualWeightInput.addEventListener('input', function() {
      actualWeightCounter.textContent = this.value + ' kg';
    });
    
    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        formulaModal.style.display = 'none';
      });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === formulaModal) {
        formulaModal.style.display = 'none';
      }
    });

    // Toggle comparison visibility
    showComparisonCheckbox.addEventListener('change', function() {
      weightComparison.style.display = this.checked ? 'block' : 'none';
    });

    function calculateVolumetricWeight() {
      // Get input values
      const length = parseFloat(lengthInput.value) || 0;
      const width = parseFloat(widthInput.value) || 0;
      const height = parseFloat(heightInput.value) || 0;
      const actualWeight = parseFloat(actualWeightInput.value) || 0;
      const volumetricFactor = parseFloat(volumetricFactorInput.value) || 5000;
      const shippingRate = parseFloat(shippingRateInput.value) || 0;
      
      // Validate inputs
      if (length <= 0 || width <= 0 || height <= 0) {
        showAlert('Please enter valid package dimensions (all values must be greater than 0).', 'error');
        return;
      }
      
      if (actualWeight <= 0) {
        showAlert('Please enter a valid actual weight greater than 0.', 'error');
        return;
      }
      
      if (volumetricFactor <= 0) {
        showAlert('Please enter a valid volumetric factor greater than 0.', 'error');
        return;
      }
      
      // Calculate volume and volumetric weight
      const volume = length * width * height;
      const volumetricWeight = volume / volumetricFactor;
      
      // Determine chargable weight (higher of the two)
      const chargableWeightValue = Math.max(volumetricWeight, actualWeight);
      
      // Calculate shipping cost
      const estimatedShippingCost = chargableWeightValue * shippingRate;
      
      // Update counters
      packageVolumeCounter.textContent = volume.toLocaleString('en-IN') + ' cm³';
      volFactorDisplayCounter.textContent = volumetricFactor;
      volumetricWeightCounter.textContent = volumetricWeight.toFixed(2) + ' kg';
      actualWeightCounter.textContent = actualWeight.toFixed(2) + ' kg';
      
      // Update results
      resultDimensions.textContent = `${length} × ${width} × ${height} cm`;
      resultVolume.textContent = volume.toLocaleString('en-IN') + ' cm³';
      resultFactor.textContent = volumetricFactor;
      resultVolWeight.textContent = volumetricWeight.toFixed(2) + ' kg';
      resultActualWeight.textContent = actualWeight.toFixed(2) + ' kg';
      chargableWeight.textContent = chargableWeightValue.toFixed(2) + ' kg';
      resultShippingRate.textContent = '₹' + shippingRate + '/kg';
      shippingCost.textContent = '₹' + estimatedShippingCost.toFixed(2);
      
      // Update calculation breakdown
      volumeCalculation.textContent = `${length} × ${width} × ${height} = ${volume.toLocaleString('en-IN')} cm³`;
      weightFormula.textContent = `(${length} × ${width} × ${height}) ÷ ${volumetricFactor} = ${volumetricWeight.toFixed(2)} kg`;
      
      // Update chargable rule with explanation
      if (volumetricWeight > actualWeight) {
        chargableRule.textContent = `Volumetric weight (${volumetricWeight.toFixed(2)} kg) is higher than actual weight (${actualWeight.toFixed(2)} kg)`;
      } else {
        chargableRule.textContent = `Actual weight (${actualWeight.toFixed(2)} kg) is higher than volumetric weight (${volumetricWeight.toFixed(2)} kg)`;
      }
      
      // Show results section
      resultsSection.style.display = 'block';
      
      showAlert('Volumetric weight calculation completed successfully!', 'success');
    }
    
    function clearCalculator() {
      // Clear inputs
      lengthInput.value = '';
      widthInput.value = '';
      heightInput.value = '';
      actualWeightInput.value = '1';
      volumetricFactorInput.value = '5000';
      shippingRateInput.value = '50';
      
      // Reset to default marketplace
      document.getElementById('flipkart').checked = true;
      selectedMarketplace = '5000';
      marketplaceOptions.forEach(opt => opt.classList.remove('active'));
      document.querySelector('.marketplace-option[data-factor="5000"]').classList.add('active');
      
      // Reset counters
      packageVolumeCounter.textContent = '0 cm³';
      volFactorDisplayCounter.textContent = '5000';
      volumetricWeightCounter.textContent = '0 kg';
      actualWeightCounter.textContent = '0 kg';
      
      // Hide results section
      resultsSection.style.display = 'none';
      
      showAlert('Calculator has been cleared.', 'success');
    }
    
    function copyResults() {
      const dimensions = resultDimensions.textContent;
      const volume = resultVolume.textContent;
      const volWeight = resultVolWeight.textContent;
      const actualWeight = resultActualWeight.textContent;
      const chargable = chargableWeight.textContent;
      const shipping = shippingCost.textContent;
      
      const resultsText = `Volumetric Weight Calculation Results:
Package Dimensions: ${dimensions}
Package Volume: ${volume}
Volumetric Weight: ${volWeight}
Actual Weight: ${actualWeight}
Chargable Weight: ${chargable}
Estimated Shipping Cost: ${shipping}`;
      
      navigator.clipboard.writeText(resultsText).then(() => {
        showAlert('Results copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy results: ' + err, 'error');
      });
    }
    
    function showFormulaInfo() {
      formulaModal.style.display = 'block';
    }
    
    function closeFormulaModal() {
      formulaModal.style.display = 'none';
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

    // Initialize calculator
    actualWeightCounter.textContent = actualWeightInput.value + ' kg';
  });
</script>