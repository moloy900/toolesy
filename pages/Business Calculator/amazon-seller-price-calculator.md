---
layout: default
title: "Amazon Seller Price Calculator - Fees & Profit"
permalink: /amazon-seller-price-calculator-fees-profit/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Amazon Seller Price Calculator - Fees & Profit</title>
<meta name="description" content="Free Amazon seller price calculator to estimate profit, referral fees, shipping costs, and charges. Plan your pricing and maximize earnings.">
<meta name="keywords"
  content="amazon seller calculator, amazon fees, amazon commission, seller profit calculator, ecommerce fees, amazon seller charges, fba calculator, amazon pricing calculator">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<style>
  /* Amazon Calculator Styles */
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

  .calculator-inputs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 25px 0;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .input-group label {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .input-group input, .input-group select {
    padding: 12px 15px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  .input-group input:focus, .input-group select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
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

  .case-button.amazon {
    background: #ff9900;
  }

  .case-button.amazon:hover {
    background: #e68a00;
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

  .result-section {
    margin-top: 30px;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  }

  .result-section h3 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.3rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
  }

  .result-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    margin-bottom: 25px;
  }

  .result-card {
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
    transition: all 0.3s ease;
  }

  .result-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }

  .result-card h4 {
    margin: 0 0 10px 0;
    color: #2c3e50;
    font-size: 1rem;
  }

  .result-card .amount {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary);
  }

  .result-card.profit-positive .amount {
    color: #28a745;
  }

  .result-card.profit-negative .amount {
    color: #dc3545;
  }

  .fee-breakdown {
    margin-top: 25px;
  }

  .fee-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 15px;
    margin: 8px 0;
    background: white;
    border-radius: 6px;
    border-left: 3px solid #e0e6ed;
    transition: all 0.3s ease;
  }

  .fee-item:hover {
    background: #f8f9fa;
    border-left-color: var(--primary);
  }

  .fee-item .fee-name {
    font-weight: 500;
    color: #2c3e50;
  }

  .fee-item .fee-amount {
    font-weight: 600;
    color: #495057;
  }

  .fee-divider {
    border: 0;
    border-top: 2px solid #e9ecef;
    margin: 15px 0;
  }

  .profit-loss-section {
    margin-top: 20px;
    padding: 20px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 10px;
    border: 2px solid #e9ecef;
  }

  .profit-loss-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin: 10px 0;
    background: white;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1.1rem;
  }

  .profit-positive {
    color: #28a745;
    border-left: 4px solid #28a745;
  }

  .profit-negative {
    color: #dc3545;
    border-left: 4px solid #dc3545;
  }

  .contact-card {
    margin-top: 30px;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    text-align: center;
  }

  .contact-card h3 {
    color: var(--primary);
    margin-bottom: 15px;
  }

  .contact-card p {
    margin-bottom: 20px;
    color: #666;
  }

  .contact-buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .contact-btn {
    padding: 12px 20px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
  }

  .phone-btn {
    background: var(--primary);
    color: white;
  }

  .whatsapp-btn {
    background: #25D366;
    color: white;
  }

  .contact-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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

  /* Advanced Options */
  .advanced-options {
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .advanced-toggle {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 15px;
  }

  .advanced-content {
    display: none;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    padding-top: 15px;
    border-top: 1px solid #e0e0e0;
  }

  .advanced-content.show {
    display: grid;
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

    .calculator-inputs {
      grid-template-columns: 1fr;
    }

    .result-grid {
      grid-template-columns: 1fr;
    }

    .advanced-content {
      grid-template-columns: 1fr;
    }

    .contact-buttons {
      flex-direction: column;
    }
  }
</style>

<div class="converter-container">
  <h1>Amazon Seller Price Calculator 2025</h1>
  <p class="welcome-message">Calculate your exact profit, referral fees, shipping costs, and other charges for selling on Amazon. Plan your pricing strategy effectively to maximize your earnings.</p>

  <div class="converter-section">
    <h2>Amazon Seller Profit Calculator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Total Fees: </span>
        <span id="totalFeesCounter">₹0.00</span>
      </div>
      <div class="counter-item">
        <span>Seller Payout: </span>
        <span id="payoutCounter">₹0.00</span>
      </div>
      <div class="counter-item">
        <span>Net Profit: </span>
        <span id="profitCounter">₹0.00</span>
      </div>
      <div class="counter-item">
        <span>Profit Margin: </span>
        <span id="marginCounter">0%</span>
      </div>
    </div>

    <div class="calculator-inputs">
      <div class="input-group">
        <label for="category">Category</label>
        <select id="category">
          <option value="" disabled selected>Select Category</option>
          <option value="Automotive, Car & Accessories">Automotive, Car & Accessories</option>
          <option value="Baby Products, Toys & Education">Baby Products, Toys & Education</option>
          <option value="Books, Music, Movies, Video Games, Entertainment">Books, Music, Movies, Video Games, Entertainment</option>
          <option value="Clothing, Fashion, Jewellery, Luggage, Shoes">Clothing, Fashion, Jewellery, Luggage, Shoes</option>
          <option value="Electronics (Camera, Mobile, PC, Wireless) & Accessories">Electronics (Camera, Mobile, PC, Wireless) & Accessories</option>
          <option value="Grocery, Food & Pet Supplies">Grocery, Food & Pet Supplies</option>
          <option value="Health, Beauty, Personal Care & Personal Care Appliances">Health, Beauty, Personal Care & Personal Care Appliances</option>
          <option value="Home, Decor, Home Improvement, Furniture, Outdoor, Lawn & Garden">Home, Decor, Home Improvement, Furniture, Outdoor, Lawn & Garden</option>
          <option value="Industrial, Medical, Scientific Supplies & Office Products">Industrial, Medical, Scientific Supplies & Office Products</option>
          <option value="Kitchen, Large & Small Appliances">Kitchen, Large & Small Appliances</option>
          <option value="Others">Others</option>
          <option value="Sports, Gym & Sporting Equipment">Sports, Gym & Sporting Equipment</option>
        </select>
      </div>

      <div class="input-group">
        <label for="subcategory">Subcategory:</label>
        <select id="subcategory">
          <option value="">Select a Subcategory</option>
        </select>
      </div>

      <div class="input-group">
        <label for="price">Enter Price (₹)</label>
        <input type="number" id="price" name="price" placeholder="Enter Price">
      </div>

      <div class="input-group">
        <label for="costPrice">Cost Price (₹)</label>
        <input type="number" id="costPrice" name="costPrice" placeholder="Enter Cost Price">
      </div>

      <div class="input-group">
        <label for="weight">Weight (grams)</label>
        <input type="number" id="weight" name="weight" placeholder="Weight (gm)">
      </div>

      <div class="input-group">
        <label for="area">Area</label>
        <select id="area">
          <option value="Local">Local</option>
          <option value="Regional">Regional</option>
          <option value="National">National</option>
        </select>
      </div>

      <div class="input-group">
        <label for="shipping">Shipping Method</label>
        <select id="shipping">
          <option value="" disabled selected>Select Shipping Method</option>
          <option value="1">Amazon FBA</option>
          <option value="2">Self Ship</option>
          <option value="3">Amazon Easy Ship</option>
          <option value="4">Seller Flex</option>
        </select>
      </div>

      <div class="input-group">
        <label for="steplevel">Select Step level:</label>
        <select name="steplevel" id="steplevel">
          <option value="basic" selected>Basic</option>
          <option value="premium">Premium</option>
          <option value="advanced">Advanced</option>
          <option value="standard">Standard</option>
        </select>
      </div>

      <div class="input-group">
        <label for="gst">Select GST Percentage:</label>
        <select name="gst" id="gst">
          <option value="0">0%</option>
          <option value="5">5%</option>
          <option value="12">12%</option>
          <option value="18" selected>18%</option>
          <option value="28">28%</option>
        </select>
      </div>
    </div>

    <!-- Advanced Options -->
    <div class="advanced-options">
      <div class="advanced-toggle" id="advancedToggle">
        <i class="fas fa-cog"></i>
        <span>Advanced Options</span>
        <i class="fas fa-chevron-down" id="advancedArrow"></i>
      </div>
      <div class="advanced-content" id="advancedContent">
        <div class="input-group">
          <label for="storageFee">Monthly Storage Fee (₹):</label>
          <input type="number" id="storageFee" value="0">
        </div>
        <div class="input-group">
          <label for="pickPackFee">Pick & Pack Fee (₹):</label>
          <input type="number" id="pickPackFee" value="0">
        </div>
        <div class="input-group">
          <label for="additionalFee">Additional Fees (₹):</label>
          <input type="number" id="additionalFee" value="0">
        </div>
      </div>
    </div>

    <div class="button-section">
      <button class="case-button amazon" id="calculateButton">Calculate Fees & Profit</button>
      <button class="case-button success" id="saveCalculation">Save Calculation</button>
      <button class="case-button" id="compareScenarios">Compare Scenarios</button>
      <button class="case-button warning" id="resetCalculator">Reset</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="result-section" id="resultSection" style="display: none;">
      <h3>Calculation Results</h3>
      
      <div class="result-grid">
        <div class="result-card">
          <h4>Total Fees</h4>
          <div class="amount" id="totalFees">₹0.00</div>
        </div>
        <div class="result-card">
          <h4>Seller Payout</h4>
          <div class="amount" id="sellerPayout">₹0.00</div>
        </div>
        <div class="result-card" id="profitCard">
          <h4>Net Profit</h4>
          <div class="amount" id="netProfit">₹0.00</div>
        </div>
        <div class="result-card" id="marginCard">
          <h4>Profit Margin</h4>
          <div class="amount" id="profitMargin">0%</div>
        </div>
      </div>

      <div class="fee-breakdown">
        <h4>Fee Breakdown</h4>
        <div class="fee-item">
          <span class="fee-name">Referral Fee</span>
          <span class="fee-amount" id="referralFee">₹0.00</span>
        </div>
        <div class="fee-item">
          <span class="fee-name">Closing Fee</span>
          <span class="fee-amount" id="closingFee">₹0.00</span>
        </div>
        <div class="fee-item">
          <span class="fee-name">Shipping Fee</span>
          <span class="fee-amount" id="shippingFee">₹0.00</span>
        </div>
        <div class="fee-item">
          <span class="fee-name">Storage Fee</span>
          <span class="fee-amount" id="storageFeeDisplay">₹0.00</span>
        </div>
        <div class="fee-item">
          <span class="fee-name">Pick & Pack Fee</span>
          <span class="fee-amount" id="pickPackFeeDisplay">₹0.00</span>
        </div>
        <div class="fee-item">
          <span class="fee-name">Additional Fees</span>
          <span class="fee-amount" id="additionalFeeDisplay">₹0.00</span>
        </div>
        <div class="fee-item">
          <span class="fee-name">GST (<span id="gstRateDisplay">18</span>%)</span>
          <span class="fee-amount" id="gstFee">₹0.00</span>
        </div>
        
        <hr class="fee-divider">
        
        <div class="profit-loss-section">
          <div class="profit-loss-item" id="finalProfit">
            <span>Final Profit / Loss:</span>
            <span>₹0.00</span>
          </div>
          <div class="profit-loss-item" id="finalMargin">
            <span>Profit Margin:</span>
            <span>0%</span>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-card">
      <h3>Contact Us</h3>
      <p>Feel free to reach out to us for inquiries or support!</p>
      <div class="contact-buttons">
        <a href="tel:+918851516327" class="contact-btn phone-btn">
          <i class="fas fa-phone"></i>
          Call Us: +91 88515 16327
        </a>
        <a href="https://wa.me/919310400620?text=Hello_Digicommerce_Solutions_amazon.in_amazon-price-calculator" target="_blank" class="contact-btn whatsapp-btn">
          <i class="fab fa-whatsapp"></i>
          Chat on WhatsApp
        </a>
      </div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Amazon Fee Calculation Examples</h2>

      <h3>Example 1: Electronics Item (FBA)</h3>
      <div class="example-text">Selling Price: ₹15,000
Cost Price: ₹12,000
Category: Electronics
Weight: 500 gm
Shipping: Amazon FBA
Area: National

Referral Fee: ₹1,200
Closing Fee: ₹40
Shipping Fee: ₹85
Storage Fee: ₹25
GST: ₹243
Total Fees: ₹1,593
Payout: ₹13,407
Profit: ₹1,407 (11.73%)</div>

      <h3>Example 2: Clothing Item (Self Ship)</h3>
      <div class="example-text">Selling Price: ₹800
Cost Price: ₹400
Category: Clothing
Weight: 200 gm
Shipping: Self Ship
Area: Local

Referral Fee: ₹120
Closing Fee: ₹20
Shipping Fee: ₹35
GST: ₹31.5
Total Fees: ₹206.5
Payout: ₹593.5
Profit: ₹193.5 (48.38%)</div>

      <h3>Example 3: Home & Kitchen Item (Easy Ship)</h3>
      <div class="example-text">Selling Price: ₹2,500
Cost Price: ₹1,500
Category: Home & Kitchen
Weight: 1000 gm
Shipping: Easy Ship
Area: Regional

Referral Fee: ₹375
Closing Fee: ₹30
Shipping Fee: ₹75
GST: ₹86.4
Total Fees: ₹566.4
Payout: ₹1,933.6
Profit: ₹433.6 (28.91%)</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Amazon Seller Price Calculator 2025 - Complete Guide</h2>

    <p>Maximize your profits on Amazon with our comprehensive <strong>Seller Price Calculator</strong>. This advanced tool helps you understand all the fees, commissions, and charges involved in selling on Amazon, so you can price your products competitively while maintaining healthy profit margins. Whether you're a new seller or an experienced e-commerce business, this calculator provides accurate insights into your Amazon selling costs.</p>

    <h3>How to Use This Amazon Fee Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Select Product Category:</strong> Choose your product's main category and subcategory from the dropdown menus to get accurate commission rates.</li>
      <li><strong>Enter Pricing Details:</strong> Input your product's selling price and cost price to calculate profit margins.</li>
      <li><strong>Specify Product Details:</strong> Enter product weight and select shipping area (Local, Regional, or National).</li>
      <li><strong>Choose Shipping Method:</strong> Select between Amazon FBA, Self Ship, Easy Ship, or Seller Flex for accurate shipping cost calculations.</li>
      <li><strong>Calculate & Analyze:</strong> Click "Calculate Fees & Profit" to get a detailed breakdown of all Amazon charges and your net profit.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're selling an electronic item on Amazon with a selling price of ₹15,000 and a cost price of ₹12,000. Using our calculator with Amazon FBA shipping and national delivery, you'll discover that after all Amazon fees (referral fee, closing fee, shipping, storage, and GST), your net profit would be approximately ₹1,407 with an 11.73% profit margin. This insight helps you determine if your pricing is optimal or if you need to adjust to maintain profitability.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>New Amazon Sellers:</strong> Understand all Amazon fees before listing your first product to avoid surprises.</li>
      <li><strong>Experienced Sellers:</strong> Optimize pricing strategies for different product categories and shipping methods.</li>
      <li><strong>E-commerce Businesses:</strong> Plan inventory and pricing for maximum profitability across your product portfolio.</li>
      <li><strong>Product Managers:</strong> Calculate accurate landed costs for products sold on Amazon.</li>
      <li><strong>Financial Analysts:</strong> Analyze the profitability of Amazon as a sales channel for your business.</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>What is the difference between Amazon FBA and other shipping methods?</strong><br>
      Amazon FBA (Fulfillment by Amazon) means Amazon handles storage, packing, and shipping. Self Ship means you handle everything. Easy Ship is a hybrid where Amazon picks up from your location, and Seller Flex is for high-volume sellers with their own fulfillment infrastructure.</p>

    <p><strong>How is the referral fee calculated?</strong><br>
      Referral fee is a percentage of the selling price that varies by product category, typically ranging from 6% to 45% depending on the category.</p>

    <p><strong>What additional costs should I consider when selling on Amazon?</strong><br>
      Beyond the basic fees, consider monthly storage fees (for FBA), long-term storage fees, returns processing fees, subscription fees (for professional sellers), and advertising costs.</p>

    <p><strong>How does product weight affect shipping costs?</strong><br>
      Heavier products generally incur higher shipping fees, especially for FBA and long-distance shipments. The calculator factors in weight-based pricing.</p>

    <p><strong>Can I use this calculator for international Amazon marketplaces?</strong><br>
      This calculator is optimized for Amazon India. Other marketplaces like Amazon US, UK, or UAE have different fee structures and would require separate calculators.</p>

    <h3>Why Choose Our Amazon Fee Calculator?</h3>
    <p>Our <strong>Amazon Seller Price Calculator</strong> stands out from other tools because of its accuracy, comprehensiveness, and user-friendly interface. We regularly update our fee structures to match Amazon's latest policies, ensuring you get the most accurate calculations. The tool also includes advanced options for experienced sellers who want to factor in additional costs like storage fees and pick & pack charges.</p>

    <h3>Understanding Amazon's Fee Structure</h3>
    <p>Amazon charges several types of fees to sellers, which can be categorized as follows:</p>
    <ul>
      <li><strong>Referral Fees:</strong> Percentage of selling price that varies by product category</li>
      <li><strong>Closing Fees:</strong> Fixed fees per item sold</li>
      <li><strong>Fulfillment Fees:</strong> Shipping and handling costs (for FBA and Easy Ship)</li>
      <li><strong>Storage Fees:</strong> Monthly charges for inventory storage in Amazon warehouses</li>
      <li><strong>Additional Fees:</strong> Long-term storage, returns processing, and other special fees</li>
      <li><strong>Taxes:</strong> GST on Amazon's services as per government regulations</li>
    </ul>
    <p>Understanding these fees is crucial for setting the right prices and maintaining profitability on the Amazon platform.</p>
  </div>
</div>

<!-- Compare Scenarios Modal -->
<div id="compareModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Compare Pricing Scenarios</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div id="comparisonResults">
        <!-- Comparison results will be inserted here -->
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeCompare">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const calculateBtn = document.getElementById('calculateButton');
    const saveBtn = document.getElementById('saveCalculation');
    const compareBtn = document.getElementById('compareScenarios');
    const resetBtn = document.getElementById('resetCalculator');
    const advancedToggle = document.getElementById('advancedToggle');
    const advancedContent = document.getElementById('advancedContent');
    const advancedArrow = document.getElementById('advancedArrow');
    const resultSection = document.getElementById('resultSection');
    const alertContainer = document.getElementById('alertContainer');
    
    // Input Elements
    const category = document.getElementById('category');
    const subcategory = document.getElementById('subcategory');
    const price = document.getElementById('price');
    const costPrice = document.getElementById('costPrice');
    const weight = document.getElementById('weight');
    const area = document.getElementById('area');
    const shipping = document.getElementById('shipping');
    const steplevel = document.getElementById('steplevel');
    const gst = document.getElementById('gst');
    
    // Advanced Options
    const storageFee = document.getElementById('storageFee');
    const pickPackFee = document.getElementById('pickPackFee');
    const additionalFee = document.getElementById('additionalFee');
    
    // Result Elements
    const totalFeesCounter = document.getElementById('totalFeesCounter');
    const payoutCounter = document.getElementById('payoutCounter');
    const profitCounter = document.getElementById('profitCounter');
    const marginCounter = document.getElementById('marginCounter');
    
    const totalFees = document.getElementById('totalFees');
    const sellerPayout = document.getElementById('sellerPayout');
    const netProfit = document.getElementById('netProfit');
    const profitMargin = document.getElementById('profitMargin');
    const profitCard = document.getElementById('profitCard');
    const marginCard = document.getElementById('marginCard');
    
    const referralFee = document.getElementById('referralFee');
    const closingFee = document.getElementById('closingFee');
    const shippingFee = document.getElementById('shippingFee');
    const storageFeeDisplay = document.getElementById('storageFeeDisplay');
    const pickPackFeeDisplay = document.getElementById('pickPackFeeDisplay');
    const additionalFeeDisplay = document.getElementById('additionalFeeDisplay');
    const gstFee = document.getElementById('gstFee');
    const gstRateDisplay = document.getElementById('gstRateDisplay');
    
    const finalProfit = document.getElementById('finalProfit');
    const finalMargin = document.getElementById('finalMargin');
    
    // Modal Elements
    const compareModal = document.getElementById('compareModal');
    const closeCompare = document.getElementById('closeCompare');
    const comparisonResults = document.getElementById('comparisonResults');
    const closeModal = document.querySelectorAll('.close-modal');

    // Store calculation history
    let calculationHistory = [];

    // Event Listeners
    calculateBtn.addEventListener('click', calculateFees);
    saveBtn.addEventListener('click', saveCalculation);
    compareBtn.addEventListener('click', compareScenarios);
    resetBtn.addEventListener('click', resetCalculator);
    advancedToggle.addEventListener('click', toggleAdvancedOptions);
    
    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        compareModal.style.display = 'none';
      });
    });

    // Close compare modal
    closeCompare.addEventListener('click', function() {
      compareModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === compareModal) {
        compareModal.style.display = 'none';
      }
    });

    // Update GST rate display when changed
    gst.addEventListener('change', function() {
      gstRateDisplay.textContent = gst.value;
    });

    // Subcategory loading functionality
    category.addEventListener('change', function() {
      const selectedCategory = this.value;
      
      if (selectedCategory) {
        // Show loading state
        subcategory.innerHTML = '<option value="">Loading subcategories...</option>';
        
        // Make AJAX request to fetch subcategories
        $.post('https://www.digicommerce.in/fetch_subcategories.php', { 
          category: selectedCategory 
        }, function(data) {
          try {
            const subcategories = JSON.parse(data);
            subcategory.innerHTML = '<option value="">Select a Subcategory</option>';
            subcategories.forEach(function(subcat) {
              subcategory.append(new Option(subcat, subcat));
            });
          } catch (error) {
            console.error('Error parsing subcategory response:', error);
            subcategory.innerHTML = '<option value="">Error loading subcategories</option>';
          }
        }).fail(function() {
          subcategory.innerHTML = '<option value="">Error loading subcategories</option>';
        });
      }
    });

    function calculateFees() {
      // Validate inputs
      if (!price.value || !costPrice.value || !weight.value || !category.value || !shipping.value) {
        showAlert('Please fill all required fields!', 'error');
        return;
      }

      const sellingPrice = parseFloat(price.value);
      const productCost = parseFloat(costPrice.value);
      const productWeight = parseFloat(weight.value);
      const selectedCategory = category.value;
      const selectedSubcategory = subcategory.value;
      const selectedArea = area.value;
      const selectedShipping = shipping.value;
      const selectedStep = steplevel.value;
      const gstRate = parseFloat(gst.value);
      
      const storageFeeVal = parseFloat(storageFee.value) || 0;
      const pickPackFeeVal = parseFloat(pickPackFee.value) || 0;
      const additionalFeeVal = parseFloat(additionalFee.value) || 0;

      if (sellingPrice <= 0 || productCost <= 0 || productWeight <= 0) {
        showAlert('Please enter valid positive values!', 'error');
        return;
      }

      // Prepare data for AJAX request
      const data = {
        price: sellingPrice,
        weight: productWeight,
        shippingMethod: selectedShipping,
        subcategory: selectedSubcategory,
        area: selectedArea,
        steplevel: selectedStep,
        gst: gstRate
      };

      // Make AJAX request to calculate fees
      $.ajax({
        url: 'https://www.digicommerce.in/calculate_fees.php',
        type: 'POST',
        data: data,
        success: function(response) {
          try {
            const result = JSON.parse(response);
            
            // Add advanced fees to the result
            const totalAdvancedFees = storageFeeVal + pickPackFeeVal + additionalFeeVal;
            const totalFeesAmount = parseFloat(result.totalFees) + totalAdvancedFees;
            const gstAmount = totalFeesAmount * (gstRate / 100);
            const totalWithGST = totalFeesAmount + gstAmount;
            const payout = sellingPrice - totalWithGST;
            const profit = payout - productCost;
            const profitPercentage = (profit / productCost) * 100;

            // Update counters
            totalFeesCounter.textContent = `₹${totalWithGST.toFixed(2)}`;
            payoutCounter.textContent = `₹${payout.toFixed(2)}`;
            profitCounter.textContent = `₹${profit.toFixed(2)}`;
            marginCounter.textContent = `${profitPercentage.toFixed(2)}%`;

            // Update main results
            totalFees.textContent = `₹${totalWithGST.toFixed(2)}`;
            sellerPayout.textContent = `₹${payout.toFixed(2)}`;
            netProfit.textContent = `₹${profit.toFixed(2)}`;
            profitMargin.textContent = `${profitPercentage.toFixed(2)}%`;

            // Update fee breakdown
            referralFee.textContent = `₹${parseFloat(result.referralFee).toFixed(2)}`;
            closingFee.textContent = `₹${parseFloat(result.closingFee).toFixed(2)}`;
            shippingFee.textContent = `₹${parseFloat(result.shippingFee).toFixed(2)}`;
            storageFeeDisplay.textContent = `₹${storageFeeVal.toFixed(2)}`;
            pickPackFeeDisplay.textContent = `₹${pickPackFeeVal.toFixed(2)}`;
            additionalFeeDisplay.textContent = `₹${additionalFeeVal.toFixed(2)}`;
            gstFee.textContent = `₹${gstAmount.toFixed(2)}`;

            // Update final profit/loss
            finalProfit.innerHTML = `
              <span>Final Profit / Loss:</span>
              <span>₹${profit.toFixed(2)}</span>
            `;
            
            finalMargin.innerHTML = `
              <span>Profit Margin:</span>
              <span>${profitPercentage.toFixed(2)}%</span>
            `;

            // Set profit/loss colors
            if (profit >= 0) {
              profitCard.className = 'result-card profit-positive';
              marginCard.className = 'result-card profit-positive';
              finalProfit.className = 'profit-loss-item profit-positive';
              finalMargin.className = 'profit-loss-item profit-positive';
            } else {
              profitCard.className = 'result-card profit-negative';
              marginCard.className = 'result-card profit-negative';
              finalProfit.className = 'profit-loss-item profit-negative';
              finalMargin.className = 'profit-loss-item profit-negative';
            }

            // Show result section
            resultSection.style.display = 'block';

            // Store calculation
            const calculation = {
              timestamp: new Date().toISOString(),
              sellingPrice: sellingPrice,
              costPrice: productCost,
              category: selectedCategory,
              profit: profit,
              margin: profitPercentage,
              fees: totalWithGST
            };
            
            calculationHistory.push(calculation);
            
            // Keep only last 10 calculations
            if (calculationHistory.length > 10) {
              calculationHistory = calculationHistory.slice(-10);
            }

            showAlert('Fees calculated successfully!', 'success');
          } catch (error) {
            console.error("Error parsing response:", error);
            showAlert('Error calculating fees. Please try again.', 'error');
          }
        },
        error: function(xhr, status, error) {
          console.error("AJAX error:", status, error);
          showAlert('Server error. Please try again later.', 'error');
        }
      });
    }

    function saveCalculation() {
      if (calculationHistory.length === 0) {
        showAlert('No calculation to save! Please calculate first.', 'error');
        return;
      }

      const latestCalculation = calculationHistory[calculationHistory.length - 1];
      const dataStr = JSON.stringify(latestCalculation, null, 2);
      const dataBlob = new Blob([dataStr], {type: 'application/json'});
      
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `amazon-calculation-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      showAlert('Calculation saved successfully!', 'success');
    }

    function compareScenarios() {
      if (calculationHistory.length < 2) {
        showAlert('Need at least 2 calculations to compare!', 'error');
        return;
      }

      // Generate comparison table
      let comparisonHTML = `
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <thead>
            <tr style="background: #f8f9fa;">
              <th style="padding: 12px; text-align: left; border-bottom: 2px solid #dee2e6;">Scenario</th>
              <th style="padding: 12px; text-align: right; border-bottom: 2px solid #dee2e6;">Selling Price</th>
              <th style="padding: 12px; text-align: right; border-bottom: 2px solid #dee2e6;">Cost Price</th>
              <th style="padding: 12px; text-align: right; border-bottom: 2px solid #dee2e6;">Total Fees</th>
              <th style="padding: 12px; text-align: right; border-bottom: 2px solid #dee2e6;">Profit</th>
              <th style="padding: 12px; text-align: right; border-bottom: 2px solid #dee2e6;">Margin</th>
            </tr>
          </thead>
          <tbody>
      `;

      calculationHistory.forEach((calc, index) {
        const profitClass = calc.profit >= 0 ? 'profit-positive' : 'profit-negative';
        comparisonHTML += `
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #dee2e6;">Scenario ${index + 1}</td>
            <td style="padding: 12px; text-align: right; border-bottom: 1px solid #dee2e6;">₹${calc.sellingPrice.toFixed(2)}</td>
            <td style="padding: 12px; text-align: right; border-bottom: 1px solid #dee2e6;">₹${calc.costPrice.toFixed(2)}</td>
            <td style="padding: 12px; text-align: right; border-bottom: 1px solid #dee2e6;">₹${calc.fees.toFixed(2)}</td>
            <td style="padding: 12px; text-align: right; border-bottom: 1px solid #dee2e6;" class="${profitClass}">₹${calc.profit.toFixed(2)}</td>
            <td style="padding: 12px; text-align: right; border-bottom: 1px solid #dee2e6;" class="${profitClass}">${calc.margin.toFixed(2)}%</td>
          </tr>
        `;
      });

      comparisonHTML += `</tbody></table>`;
      comparisonResults.innerHTML = comparisonHTML;
      compareModal.style.display = 'block';
    }

    function resetCalculator() {
      price.value = '';
      costPrice.value = '';
      weight.value = '';
      storageFee.value = '0';
      pickPackFee.value = '0';
      additionalFee.value = '0';
      resultSection.style.display = 'none';
      
      // Reset counters
      totalFeesCounter.textContent = '₹0.00';
      payoutCounter.textContent = '₹0.00';
      profitCounter.textContent = '₹0.00';
      marginCounter.textContent = '0%';
      
      showAlert('Calculator reset!', 'success');
    }

    function toggleAdvancedOptions() {
      advancedContent.classList.toggle('show');
      advancedArrow.classList.toggle('fa-chevron-down');
      advancedArrow.classList.toggle('fa-chevron-up');
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