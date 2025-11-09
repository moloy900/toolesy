---
layout: default
title: "Amazon Seller Price Calculator - Fees & Profit"
permalink: /amazon-seller-price-calculator-fees-profit/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Amazon Seller Price Calculator - Fees & Profit</title>
<meta name="description"
  content="Free Amazon Seller Price Calculator. Calculate your Amazon FBA fees, profit margins, and ROI for any product category. Make informed selling decisions.">
<meta name="keywords"
  content="amazon seller calculator, amazon fba calculator, amazon profit calculator, amazon fees calculator, amazon roi calculator, amazon seller tools">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Amazon Seller Fee Calculator Styles */
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

  .result-item.profit {
    font-weight: bold;
    font-size: 1.3rem;
    color: var(--success);
    border-bottom: none;
    margin-top: 10px;
    padding-top: 15px;
  }

  .result-item.loss {
    font-weight: bold;
    font-size: 1.3rem;
    color: #dc3545;
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

  .fee-breakdown {
    background: white;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
    border-left: 4px solid #ff9900;
  }

  .fee-breakdown h4 {
    color: #ff9900;
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

  .dimensions-group {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
  }

  .shipping-type-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  .shipping-option {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .shipping-option:hover {
    border-color: var(--primary);
  }

  .shipping-option.selected {
    border-color: var(--primary);
    background-color: #fff5e6;
  }

  .shipping-option input {
    width: auto;
  }

  .volumetric-weight {
    background: #fff5e6;
    padding: 15px;
    border-radius: 8px;
    margin-top: 15px;
    font-weight: 600;
    text-align: center;
  }

  .weight-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-top: 15px;
  }

  .calculation-section {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 2px solid #eee;
  }

  .rate-card {
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    margin-bottom: 30px;
  }

  .rate-tables {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  @media (max-width: 768px) {
    .rate-tables {
      grid-template-columns: 1fr;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }

  th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: var(--primary);
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f8f9fa;
  }

  .info-box {
    background: #e8f4fd;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 15px;
    border-left: 4px solid #2196f3;
  }

  .info-box h4 {
    margin-bottom: 10px;
    color: #1976d2;
  }
</style>

<div class="converter-container">
  <h1>Amazon Seller Fee Calculator</h1>
  <p class="welcome-message">Calculate your profit margins on Amazon sales with detailed shipping calculations and accurate fee estimations.</p>

  <div class="converter-section">
    <h2>Amazon Fee Calculator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Total Amazon Fees: </span>
        <span id="totalFeesCounter">₹0.00</span>
      </div>
      <div class="counter-item">
        <span>Profit Margin: </span>
        <span id="profitMarginCounter">₹0.00</span>
      </div>
      <div class="counter-item">
        <span>Margin %: </span>
        <span id="marginPercentCounter">0%</span>
      </div>
      <div class="counter-item">
        <span>Net Profit: </span>
        <span id="netProfitCounter">₹0.00</span>
      </div>
    </div>

    <div class="input-grid">
      <div class="input-group">
        <label for="productName">Product Name</label>
        <input type="text" id="productName" placeholder="Enter product name">
      </div>

      <div class="input-group">
        <label for="sellingPrice">Selling Price (₹)</label>
        <input type="number" id="sellingPrice" placeholder="Enter selling price" min="0" step="0.01">
      </div>

      <div class="input-group">
        <label for="discount">Discount (%)</label>
        <input type="number" id="discount" placeholder="Enter discount percentage" min="0" max="100" step="0.01">
      </div>

      <div class="input-group">
        <label for="productPrice">Product Price/Cost (₹)</label>
        <input type="number" id="productPrice" placeholder="Enter product cost" min="0" step="0.01">
      </div>
    </div>

    <div class="input-grid">
      <div class="input-group">
        <label for="packingCost">Packing Cost (₹)</label>
        <input type="number" id="packingCost" placeholder="Enter packing cost" min="0" step="0.01">
      </div>

      <div class="input-group">
        <label for="otherFees">Other Fees (₹)</label>
        <input type="number" id="otherFees" placeholder="Enter other fees" min="0" step="0.01">
      </div>

      <div class="input-group">
        <label for="category">Category</label>
        <select id="category">
          <option value="">Select Category</option>
        </select>
      </div>

      <div class="input-group">
        <label for="subcategory">Subcategory</label>
        <select id="subcategory">
          <option value="">Select Subcategory</option>
        </select>
      </div>
    </div>

    <div class="input-grid">
      <div class="input-group">
        <label for="referralFee">Referral Fee (%)</label>
        <input type="text" id="referralFee" readonly>
      </div>

      <div class="input-group">
        <label for="closingFeeType">Fulfillment Method</label>
        <select id="closingFeeType">
          <option value="fc">Fulfillment by Amazon (FC)</option>
          <option value="easyShip">Easy Ship</option>
          <option value="selfShip">Self Ship</option>
          <option value="sellerFlex">Seller Flex</option>
        </select>
      </div>

      <div class="input-group">
        <label for="closingFee">Closing Fee (₹)</label>
        <input type="text" id="closingFee" readonly>
      </div>

      <div class="input-group">
        <label for="gst">GST</label>
        <select id="gst">
          <option value="0">0%</option>
          <option value="5">5%</option>
          <option value="12">12%</option>
          <option value="18" selected>18%</option>
          <option value="28">28%</option>
        </select>
      </div>
    </div>

    <div class="calculation-section">
      <h2 class="section-title">Shipping Details</h2>
      
      <div class="input-group">
        <label>Shipping Type</label>
        <div class="shipping-type-group">
          <div class="shipping-option" id="nationalShippingOption">
            <input type="radio" id="nationalShipping" name="shippingType" value="national" checked>
            <label for="nationalShipping">National Shipping</label>
          </div>
          <div class="shipping-option" id="internationalShippingOption">
            <input type="radio" id="internationalShipping" name="shippingType" value="international">
            <label for="internationalShipping">International Shipping</label>
          </div>
        </div>
      </div>
      
      <div class="input-group">
        <label>Shipping Zone</label>
        <select id="shippingZone">
          <option value="local">Local (Same City)</option>
          <option value="regional">Regional (Same Region)</option>
          <option value="national" selected>National (Across Regions)</option>
        </select>
      </div>
      
      <div class="input-group">
        <label>Product Dimensions</label>
        <div class="dimensions-group">
          <div>
            <label for="length">Length (cm)</label>
            <input type="number" id="length" placeholder="Length" min="0" step="0.1">
          </div>
          <div>
            <label for="breadth">Breadth (cm)</label>
            <input type="number" id="breadth" placeholder="Breadth" min="0" step="0.1">
          </div>
          <div>
            <label for="height">Height (cm)</label>
            <input type="number" id="height" placeholder="Height" min="0" step="0.1">
          </div>
        </div>
      </div>
      
      <div class="input-group">
        <label for="actualWeight">Actual Weight (kg)</label>
        <input type="number" id="actualWeight" placeholder="Enter weight" min="0" step="0.01">
      </div>
      
      <div class="volumetric-weight" id="volumetricWeightDisplay">
        Volumetric Weight: 0 kg
      </div>
      
      <div class="weight-info">
        <div>
          <label for="chargeableWeight">Chargeable Weight (kg)</label>
          <input type="text" id="chargeableWeight" readonly>
        </div>
        <div>
          <label for="sizeTier">Size Tier</label>
          <input type="text" id="sizeTier" readonly>
        </div>
      </div>
      
      <div class="input-group">
        <label for="shippingFee">Shipping Fee (₹)</label>
        <input type="text" id="shippingFee" readonly>
      </div>
    </div>

    <div class="calculation-section">
      <h2 class="section-title">Additional Fees</h2>
      
      <div class="input-grid">
        <div class="input-group">
          <label for="returnRto">Return RTO (₹)</label>
          <input type="number" id="returnRto" placeholder="Enter RTO charges" min="0" step="0.01">
        </div>
        
        <div class="input-group">
          <label for="additionalPackingFees">Additional Packing Fees (₹)</label>
          <input type="number" id="additionalPackingFees" placeholder="Enter additional packing charges" min="0" step="0.01">
        </div>
      </div>
    </div>

    <div class="button-section">
      <button class="case-button" id="calculateBtn">Calculate Fees & Margin</button>
      <button class="case-button secondary" id="clearButton">Clear</button>
      <button class="case-button success" id="copyButton">Copy Results</button>
      <button class="case-button warning" id="detailsButton">Fee Details</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="results-section" id="resultsSection" style="display: none;">
      <h3>Calculation Results</h3>
      
      <div class="result-item">
        <span class="result-label">Selling Price:</span>
        <span class="result-value" id="sellingPriceResult">₹0.00</span>
      </div>
      
      <div class="result-item">
        <span class="result-label">Discount Applied:</span>
        <span class="result-value" id="discountResult">₹0.00</span>
      </div>
      
      <div class="result-item">
        <span class="result-label">Final Selling Price:</span>
        <span class="result-value" id="finalSellingPrice">₹0.00</span>
      </div>
      
      <div class="result-item">
        <span class="result-label">Referral Fee:</span>
        <span class="result-value" id="referralFeeResult">₹0.00</span>
      </div>
      
      <div class="result-item">
        <span class="result-label">Closing Fee:</span>
        <span class="result-value" id="closingFeeResult">₹0.00</span>
      </div>
      
      <div class="result-item">
        <span class="result-label">Shipping Fee:</span>
        <span class="result-value" id="shippingFeeResult">₹0.00</span>
      </div>
      
      <div class="result-item">
        <span class="result-label">Pick & Pack Fee:</span>
        <span class="result-value" id="pickPackFeeResult">₹0.00</span>
      </div>
      
      <div class="result-item">
        <span class="result-label">Packing Cost:</span>
        <span class="result-value" id="packingCostResult">₹0.00</span>
      </div>
      
      <div class="result-item">
        <span class="result-label">Other Fees:</span>
        <span class="result-value" id="otherFeesResult">₹0.00</span>
      </div>
      
      <div class="result-item">
        <span class="result-label">Return RTO:</span>
        <span class="result-value" id="rtoFeeResult">₹0.00</span>
      </div>
      
      <div class="result-item">
        <span class="result-label">Additional Packing:</span>
        <span class="result-value" id="additionalPackingResult">₹0.00</span>
      </div>
      
      <div class="result-item">
        <span class="result-label">GST:</span>
        <span class="result-value" id="gstFeeResult">₹0.00</span>
      </div>
      
      <div class="result-item total">
        <span class="result-label">Total Amazon Fees:</span>
        <span class="result-value" id="totalAmazonFees">₹0.00</span>
      </div>
      
      <div class="result-item profit" id="profitResult">
        <span class="result-label">Gross Margin (excluding GST):</span>
        <span class="result-value" id="grossMargin">₹0.00</span>
      </div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <h3>Example 1: Electronics Product</h3>
      <div class="example-text">
Selling Price: ₹15,000
Discount: 10%
Product Cost: ₹9,000
Referral Fee: 5%
Closing Fee: ₹51
Shipping Fee: ₹122
Total Amazon Fees: ₹1,023
Gross Margin: ₹4,427
Margin %: 32.8%
      </div>

      <h3>Example 2: Clothing Item</h3>
      <div class="example-text">
Selling Price: ₹1,200
Discount: 5%
Product Cost: ₹600
Referral Fee: 17%
Closing Fee: ₹26
Shipping Fee: ₹65
Total Amazon Fees: ₹295
Gross Margin: ₹245
Margin %: 21.5%
      </div>
    </div>
  </div>

  <div class="rate-card">
    <h2 class="section-title">Amazon Fee Structure</h2>
    
    <div class="rate-tables">
      <div>
        <h3>Closing Fees - Fulfillment by Amazon (FC)</h3>
        <table>
          <thead>
            <tr>
              <th>Item Price Range (INR)</th>
              <th>All Categories</th>
              <th>Exception Categories</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>₹ 0 - 300</td>
              <td>₹ 26</td>
              <td>₹ 13</td>
            </tr>
            <tr>
              <td>₹ 301 - 500</td>
              <td>₹ 21</td>
              <td>₹ 13</td>
            </tr>
            <tr>
              <td>₹ 501 - 1000</td>
              <td>₹ 26</td>
              <td>₹ 26</td>
            </tr>
            <tr>
              <td>Above ₹ 1000</td>
              <td>₹ 51</td>
              <td>₹ 71</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div>
        <h3>FC Weight Handling Fees (Standard)</h3>
        <table>
          <thead>
            <tr>
              <th>Weight Range</th>
              <th>Regional</th>
              <th>National</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>First 500 g</td>
              <td>₹ 39</td>
              <td>₹ 65</td>
            </tr>
            <tr>
              <td>500g - 1kg</td>
              <td>₹ 54</td>
              <td>₹ 85</td>
            </tr>
            <tr>
              <td>1kg - 2kg</td>
              <td>₹ 78</td>
              <td>₹ 122</td>
            </tr>
            <tr>
              <td>Each additional kg after 2kg</td>
              <td>₹ 24</td>
              <td>₹ 34</td>
            </tr>
            <tr>
              <td>Each additional kg after 5kg</td>
              <td>₹ 13</td>
              <td>₹ 18</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Amazon Seller Fee Calculator - Optimize Your E-commerce Business</h2>

    <p>Our free <strong>Amazon Seller Fee Calculator</strong> helps e-commerce sellers accurately estimate their profit margins on Amazon sales. By accounting for all Amazon fees including referral fees, closing fees, shipping costs, and additional charges, you can make informed pricing decisions and maximize your profitability. All calculations are optimized for the Indian marketplace with rupee-based pricing.</p>

    <h3>How to Use This Amazon Fee Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Product Details:</strong> Input your product name, selling price, and applicable discount.</li>
      <li><strong>Input Costs:</strong> Enter product cost, packing cost, and other associated fees.</li>
      <li><strong>Select Category:</strong> Choose the appropriate product category for accurate referral fee calculation.</li>
      <li><strong>Configure Fulfillment:</strong> Select your fulfillment method (FBA, Easy Ship, Self Ship, etc.).</li>
      <li><strong>Add Shipping Details:</strong> Enter package dimensions and weight for accurate shipping cost calculation.</li>
      <li><strong>Include Additional Fees:</strong> Add any return RTO charges or additional packing fees.</li>
      <li><strong>Calculate:</strong> Click "Calculate Fees & Margin" to see your detailed profit breakdown.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're selling a smartphone on Amazon for ₹15,000 with a 10% discount. Your product cost is ₹9,000, and you're using Fulfillment by Amazon. The calculator will show you that after accounting for a 5% referral fee (₹675), closing fee (₹51), shipping fee (₹122 based on dimensions), and other costs, your gross margin would be ₹4,427 with a 32.8% profit margin. This helps you evaluate if your pricing strategy is sustainable for long-term business growth.</p>

    <h3>Understanding Amazon Seller Fees:</h3>
    <p>Amazon charges several types of fees that impact your profitability:</p>
    <ul>
      <li><strong>Referral Fees:</strong> Percentage-based fee on the sale price (varies by category)</li>
      <li><strong>Closing Fees:</strong> Fixed fee based on product price range</li>
      <li><strong>Shipping Fees:</strong> Based on package weight and dimensions</li>
      <li><strong>Pick & Pack Fees:</strong> For FBA orders, based on size and weight</li>
      <li><strong>Storage Fees:</strong> Monthly charges for inventory in Amazon warehouses</li>
      <li><strong>Additional Fees:</strong> Returns, long-term storage, removal orders, etc.</li>
    </ul>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>New Amazon Sellers:</strong> Understand the complete fee structure before listing products</li>
      <li><strong>Existing Sellers:</strong> Optimize pricing strategies to maximize profitability</li>
      <li><strong>Product Research:</strong> Evaluate potential profit margins for new product ideas</li>
      <li><strong>Inventory Managers:</strong> Plan for accurate cost calculations and pricing</li>
      <li><strong>E-commerce Consultants:</strong> Provide clients with accurate profit projections</li>
      <li><strong>Business Owners:</strong> Make data-driven decisions about Amazon marketplace expansion</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>How accurate is this Amazon fee calculator?</strong><br>
      Our calculator uses Amazon's published fee structures and is regularly updated. However, always verify with the latest Amazon rate card as fees can change.</p>

    <p><strong>Does this calculator include all Amazon fees?</strong><br>
      This calculator includes the major fees most sellers encounter. Additional fees like long-term storage, removal orders, or subscription fees are not included.</p>

    <p><strong>Can I use this for international Amazon marketplaces?</strong><br>
      This calculator is optimized for Amazon India. Fee structures vary significantly across different Amazon marketplaces.</p>

    <p><strong>How often are the fee structures updated?</strong><br>
      We monitor Amazon's fee announcements and update our calculator accordingly. However, sellers should always check Amazon's official rate card for the most current information.</p>

    <p><strong>Is my product data secure when using this calculator?</strong><br>
      Absolutely. All calculations happen locally in your browser and no data is transmitted to our servers. Your business information remains completely private.</p>

    <h3>Why Choose Our Amazon Seller Fee Calculator?</h3>
    <p>Our <strong>Amazon Seller Fee Calculator</strong> provides the most comprehensive fee analysis specifically designed for Indian Amazon sellers. Unlike basic calculators, we account for dimensional weight calculations, category-specific referral fees, and multiple fulfillment methods. The tool is optimized for Indian sellers with rupee formatting and provides detailed breakdowns to help you understand exactly where your money is going.</p>

    <h3>Amazon Fee Calculation Formulas:</h3>
    <ul>
      <li><strong>Referral Fee:</strong> Final Selling Price × Category Percentage</li>
      <li><strong>Closing Fee:</strong> Based on price range and fulfillment method</li>
      <li><strong>Volumetric Weight:</strong> (Length × Width × Height) ÷ 5000</li>
      <li><strong>Chargeable Weight:</strong> Maximum of (Actual Weight, Volumetric Weight)</li>
      <li><strong>Shipping Fee:</strong> Based on chargeable weight and shipping zone</li>
      <li><strong>Gross Margin:</strong> Final Selling Price - (Product Cost + All Fees)</li>
    </ul>

    <h3>Tips for Amazon Sellers:</h3>
    <ul>
      <li>Always calculate fees before setting your product prices</li>
      <li>Consider dimensional weight when designing packaging</li>
      <li>Regularly review Amazon's fee changes and adjust pricing accordingly</li>
      <li>Use this calculator during product research to evaluate profitability</li>
      <li>Factor in return rates and associated costs in your margin calculations</li>
      <li>Consider bundling products to optimize fulfillment costs</li>
    </ul>
  </div>
</div>

<!-- Fee Details Modal -->
<div id="detailsModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Amazon Fee Details</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <h4>Standard Amazon Fee Structure</h4>
      <ul>
        <li><strong>Referral Fees:</strong> 5-20% based on category</li>
        <li><strong>Closing Fees:</strong> ₹13-71 based on price range</li>
        <li><strong>Shipping Fees:</strong> Based on weight and dimensions</li>
        <li><strong>Pick & Pack Fees:</strong> ₹17-26+ for FBA orders</li>
        <li><strong>Storage Fees:</strong> Monthly per cubic foot charges</li>
      </ul>
      
      <h4>Common Category Referral Rates</h4>
      <ul>
        <li>Electronics: 5-7%</li>
        <li>Clothing: 12-21%</li>
        <li>Home & Kitchen: 12-18%</li>
        <li>Books: 3-13.5%</li>
        <li>Automotive: 5-16%</li>
      </ul>
    </div>
    <div class="modal-footer">
      <button class="modal-button primary" id="closeDetails">Close</button>
    </div>
  </div>
</div>

<script>
  // Amazon referral fee data structure
  const amazonReferralFees = {
  "₹0 – ₹300": {
    averageFee: "0% – 5%",
    note: "🔹 Low-value items attract buyers — Amazon often charges 0% or very low fees in this range to encourage sales."
  },
  "₹301 – ₹500": {
    averageFee: "5% – 10%",
    note: "🔹 Most categories fall here — such as books, small electronics, gadget accessories, fashion items, etc."
  },
  "₹501 – ₹1000": {
    averageFee: "10% – 15%",
    note: "🔹 Mid-range products — most apparel, household items, and automotive parts fall in this range."
  },
  "₹1001 – ₹5000": {
    averageFee: "12% – 16%",
    note: "🔹 Mid–high value items — like branded shoes, car parts, premium books, some electronics."
  },
  "₹5001 – ₹20000": {
    averageFee: "6% – 10%",
    note: "🔹 High-value electronics — such as laptops, tablets, TVs; lower percentage commission here."
  },
  "₹20000+": {
    averageFee: "2% – 7%",
    note: "🔹 Very high-value items or vehicles — such as cars, bikes, large electronics; commission is lowest here."
  }
};


  // Closing fee data
  const closingFees = {
    "fc": [
      { maxPrice: 300, fee: 26, exceptionFee: 13 },
      { maxPrice: 500, fee: 21, exceptionFee: 13 },
      { maxPrice: 1000, fee: 26, exceptionFee: 26 },
      { maxPrice: Infinity, fee: 51, exceptionFee: 71 }
    ],
    "easyShip": [
      { maxPrice: 300, fee: 6 },
      { maxPrice: 500, fee: 11 },
      { maxPrice: 1000, fee: 34 },
      { maxPrice: Infinity, fee: 65 }
    ],
    "selfShip": [
      { maxPrice: 300, fee: 20 },
      { maxPrice: 500, fee: 25 },
      { maxPrice: 1000, fee: 50 },
      { maxPrice: Infinity, fee: 100 }
    ],
    "sellerFlex": [
      { maxPrice: 300, fee: 6 },
      { maxPrice: 500, fee: 11 },
      { maxPrice: 1000, fee: 34 },
      { maxPrice: Infinity, fee: 65 }
    ]
  };

  // FC Weight handling fees (Standard)
  const fcWeightFees = {
    "standard": {
      "regional": {
        "0-0.5": 39,
        "0.5-1": 54,
        "1-2": 78,
        "additionalAfter2": 24,
        "additionalAfter5": 13
      },
      "national": {
        "0-0.5": 65,
        "0.5-1": 85,
        "1-2": 122,
        "additionalAfter2": 34,
        "additionalAfter5": 18
      }
    }
  };

  // Pick & Pack fees
  const pickPackFees = {
    "standard": {
      "base": 17,
      "additionalPerKg": 5,
      "additionalPer5kgAfter5": 2
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    const calculateBtn = document.getElementById('calculateBtn');
    const clearButton = document.getElementById('clearButton');
    const copyButton = document.getElementById('copyButton');
    const detailsButton = document.getElementById('detailsButton');
    const alertContainer = document.getElementById('alertContainer');
    const resultsSection = document.getElementById('resultsSection');
    const detailsModal = document.getElementById('detailsModal');
    const closeDetails = document.getElementById('closeDetails');
    const closeModal = document.querySelectorAll('.close-modal');
    
    // Input fields
    const categorySelect = document.getElementById('category');
    const subcategorySelect = document.getElementById('subcategory');
    const referralFeeInput = document.getElementById('referralFee');
    const closingFeeTypeSelect = document.getElementById('closingFeeType');
    const closingFeeInput = document.getElementById('closingFee');
    const sellingPriceInput = document.getElementById('sellingPrice');
    const discountInput = document.getElementById('discount');
    const productPriceInput = document.getElementById('productPrice');
    const packingCostInput = document.getElementById('packingCost');
    const otherFeesInput = document.getElementById('otherFees');
    const shippingOptions = document.querySelectorAll('input[name="shippingType"]');
    const lengthInput = document.getElementById('length');
    const breadthInput = document.getElementById('breadth');
    const heightInput = document.getElementById('height');
    const actualWeightInput = document.getElementById('actualWeight');
    const chargeableWeightInput = document.getElementById('chargeableWeight');
    const sizeTierInput = document.getElementById('sizeTier');
    const shippingFeeInput = document.getElementById('shippingFee');
    const volumetricWeightDisplay = document.getElementById('volumetricWeightDisplay');
    const shippingZoneSelect = document.getElementById('shippingZone');
    const returnRtoInput = document.getElementById('returnRto');
    const additionalPackingFeesInput = document.getElementById('additionalPackingFees');
    const gstSelect = document.getElementById('gst');

    // Populate categories
    function populateCategories() {
      categorySelect.innerHTML = '<option value="">Select Category</option>';
      
      for (const category in amazonReferralFees) {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
      }
    }

    // Update subcategories when category changes
    function updateSubcategories() {
      const selectedCategory = categorySelect.value;
      subcategorySelect.innerHTML = '<option value="">Select Subcategory</option>';
      
      if (selectedCategory && amazonReferralFees[selectedCategory]) {
        for (const subcategory in amazonReferralFees[selectedCategory]) {
          const option = document.createElement('option');
          option.value = subcategory;
          option.textContent = subcategory;
          subcategorySelect.appendChild(option);
        }
      }
      
      updateReferralFee();
    }

    // Calculate referral fee based on price and category
    function calculateReferralFee(price, category, subcategory) {
      if (!category || !subcategory || !amazonReferralFees[category] || !amazonReferralFees[category][subcategory]) {
        return 0;
      }
      
      const feeStructure = amazonReferralFees[category][subcategory];
      
      for (const tier of feeStructure) {
        if (price <= tier.maxPrice) {
          return tier.fee;
        }
      }
      
      return 0;
    }

    // Update referral fee display
    function updateReferralFee() {
      const price = parseFloat(sellingPriceInput.value) || 0;
      const category = categorySelect.value;
      const subcategory = subcategorySelect.value;
      
      const referralFeePercentage = calculateReferralFee(price, category, subcategory);
      referralFeeInput.value = `${referralFeePercentage}%`;
      
      updateClosingFee();
    }

    // Calculate closing fee based on price and type
    function calculateClosingFee(price, type) {
      if (!closingFees[type]) return 0;
      
      const feeStructure = closingFees[type];
      
      for (const tier of feeStructure) {
        if (price <= tier.maxPrice) {
          return tier.fee;
        }
      }
      
      return 0;
    }

    // Update closing fee display
    function updateClosingFee() {
      const price = parseFloat(sellingPriceInput.value) || 0;
      const type = closingFeeTypeSelect.value;
      
      const closingFee = calculateClosingFee(price, type);
      closingFeeInput.value = `₹${closingFee}`;
    }

    // Calculate volumetric weight
    function calculateVolumetricWeight() {
      const length = parseFloat(lengthInput.value) || 0;
      const breadth = parseFloat(breadthInput.value) || 0;
      const height = parseFloat(heightInput.value) || 0;
      
      const volumetricWeight = (length * breadth * height) / 5000;
      volumetricWeightDisplay.textContent = `Volumetric Weight: ${volumetricWeight.toFixed(2)} kg`;
      
      return volumetricWeight;
    }

    // Calculate chargeable weight (actual or volumetric, whichever is higher)
    function calculateChargeableWeight() {
      const actualWeight = parseFloat(actualWeightInput.value) || 0;
      const volumetricWeight = calculateVolumetricWeight();
      
      return Math.max(actualWeight, volumetricWeight);
    }

    // Calculate shipping fee based on fulfillment method and weight
    function calculateShippingFee(fulfillmentMethod, weight, zone) {
      if (fulfillmentMethod === 'selfShip') {
        return 0; // Self-ship has no Amazon shipping fees
      }
      
      let fee = 0;
      
      if (fulfillmentMethod === 'fc') {
        const fees = fcWeightFees.standard[zone];
        
        if (weight <= 0.5) {
          fee = fees["0-0.5"];
        } else if (weight <= 1) {
          fee = fees["0.5-1"];
        } else if (weight <= 2) {
          fee = fees["1-2"];
        } else {
          fee = fees["1-2"];
          const additionalWeight = weight - 2;
          
          if (weight <= 5) {
            fee += additionalWeight * fees.additionalAfter2;
          } else {
            fee += 3 * fees.additionalAfter2; // For weight from 2-5kg
            const extraWeight = weight - 5;
            fee += extraWeight * fees.additionalAfter5;
          }
        }
      } else if (fulfillmentMethod === 'easyShip') {
        // Use national rates for Easy Ship
        const fees = fcWeightFees.standard.national;
        
        if (weight <= 0.5) {
          fee = fees["0-0.5"];
        } else if (weight <= 1) {
          fee = fees["0.5-1"];
        } else if (weight <= 2) {
          fee = fees["1-2"];
        } else {
          fee = fees["1-2"];
          const additionalWeight = weight - 2;
          
          if (weight <= 5) {
            fee += additionalWeight * fees.additionalAfter2;
          } else {
            fee += 3 * fees.additionalAfter2; // For weight from 2-5kg
            const extraWeight = weight - 5;
            fee += extraWeight * fees.additionalAfter5;
          }
        }
      }
      
      return fee;
    }

    // Calculate pick & pack fee
    function calculatePickPackFee(weight) {
      const fees = pickPackFees.standard;
      let fee = fees.base;
      
      if (weight > 1) {
        const additionalWeight = Math.min(weight - 1, 4); // Up to 5kg
        fee += additionalWeight * fees.additionalPerKg;
        
        if (weight > 5) {
          const additionalUnits = Math.ceil((weight - 5) / 5);
          fee += additionalUnits * fees.additionalPer5kgAfter5;
        }
      }
      
      return fee;
    }

    // Update shipping calculations
    function updateShippingCalculations() {
      const actualWeight = parseFloat(actualWeightInput.value) || 0;
      
      const volumetricWeight = calculateVolumetricWeight();
      const chargeableWeight = calculateChargeableWeight();
      
      chargeableWeightInput.value = `${chargeableWeight.toFixed(2)} kg`;
      sizeTierInput.value = chargeableWeight > 2 ? 'Standard+' : 'Standard';
      
      const fulfillmentMethod = closingFeeTypeSelect.value;
      const zone = shippingZoneSelect.value;
      const shippingFee = calculateShippingFee(fulfillmentMethod, chargeableWeight, zone);
      
      shippingFeeInput.value = `₹${shippingFee.toFixed(2)}`;
    }

    // Event listeners for shipping options
    shippingOptions.forEach(option => {
      option.addEventListener('change', function() {
        document.querySelectorAll('.shipping-option').forEach(el => {
          el.classList.remove('selected');
        });
        document.getElementById(`${this.value}ShippingOption`).classList.add('selected');
      });
    });

    // Initialize selected shipping option
    document.getElementById('nationalShippingOption').classList.add('selected');

    // Calculate all fees and margins
    function calculateFees() {
      // Get input values
      const sellingPrice = parseFloat(sellingPriceInput.value) || 0;
      const discountPercent = parseFloat(discountInput.value) || 0;
      const productPrice = parseFloat(productPriceInput.value) || 0;
      const packingCost = parseFloat(packingCostInput.value) || 0;
      const otherFees = parseFloat(otherFeesInput.value) || 0;
      const category = categorySelect.value;
      const subcategory = subcategorySelect.value;
      const returnRto = parseFloat(returnRtoInput.value) || 0;
      const additionalPackingFees = parseFloat(additionalPackingFeesInput.value) || 0;
      const gstRate = parseFloat(gstSelect.value) || 0;
      
      // Validate required fields
      if (!sellingPrice || sellingPrice <= 0) {
        showAlert('Please enter a valid selling price.', 'error');
        return;
      }
      
      if (!productPrice || productPrice <= 0) {
        showAlert('Please enter a valid product cost.', 'error');
        return;
      }
      
      // Calculate discount amount
      const discountAmount = (sellingPrice * discountPercent) / 100;
      const finalSellingPrice = sellingPrice - discountAmount;
      
      // Calculate dimensions and weight
      const actualWeight = parseFloat(actualWeightInput.value) || 0;
      
      const volumetricWeight = calculateVolumetricWeight();
      const chargeableWeight = calculateChargeableWeight();
      
      // Calculate referral fee
      const referralFeePercentage = calculateReferralFee(sellingPrice, category, subcategory);
      const referralFeeAmount = (finalSellingPrice * referralFeePercentage) / 100;
      
      // Calculate closing fee
      const closingFeeType = closingFeeTypeSelect.value;
      const closingFeeAmount = calculateClosingFee(sellingPrice, closingFeeType);
      
      // Calculate shipping fee
      const zone = shippingZoneSelect.value;
      const shippingFeeAmount = calculateShippingFee(closingFeeType, chargeableWeight, zone);
      
      // Calculate pick & pack fee (only for FC)
      const pickPackFeeAmount = (closingFeeType === 'fc') ? calculatePickPackFee(chargeableWeight) : 0;
      
      // Calculate GST
      const gstAmount = (finalSellingPrice * gstRate) / 100;
      
      // Calculate total Amazon fees
      const totalAmazonFees = referralFeeAmount + closingFeeAmount + shippingFeeAmount + pickPackFeeAmount;
      
      // Calculate total costs
      const totalCosts = productPrice + packingCost + otherFees + returnRto + additionalPackingFees;
      
      // Calculate total fees
      const totalFees = totalAmazonFees + totalCosts;
      
      // Calculate gross margin (excluding GST)
      const grossMargin = finalSellingPrice - totalFees;
      
      // Calculate net profit
      const netProfit = grossMargin - gstAmount;
      
      // Calculate margin percentage
      const marginPercent = (grossMargin / finalSellingPrice) * 100;
      
      // Update results in the UI
      document.getElementById('sellingPriceResult').textContent = `₹${sellingPrice.toFixed(2)}`;
      document.getElementById('discountResult').textContent = `₹${discountAmount.toFixed(2)}`;
      document.getElementById('finalSellingPrice').textContent = `₹${finalSellingPrice.toFixed(2)}`;
      document.getElementById('referralFeeResult').textContent = `₹${referralFeeAmount.toFixed(2)}`;
      document.getElementById('closingFeeResult').textContent = `₹${closingFeeAmount.toFixed(2)}`;
      document.getElementById('shippingFeeResult').textContent = `₹${shippingFeeAmount.toFixed(2)}`;
      document.getElementById('pickPackFeeResult').textContent = `₹${pickPackFeeAmount.toFixed(2)}`;
      document.getElementById('packingCostResult').textContent = `₹${packingCost.toFixed(2)}`;
      document.getElementById('otherFeesResult').textContent = `₹${otherFees.toFixed(2)}`;
      document.getElementById('rtoFeeResult').textContent = `₹${returnRto.toFixed(2)}`;
      document.getElementById('additionalPackingResult').textContent = `₹${additionalPackingFees.toFixed(2)}`;
      document.getElementById('gstFeeResult').textContent = `₹${gstAmount.toFixed(2)}`;
      document.getElementById('totalAmazonFees').textContent = `₹${totalAmazonFees.toFixed(2)}`;
      document.getElementById('grossMargin').textContent = `₹${grossMargin.toFixed(2)}`;
      
      // Update counters
      document.getElementById('totalFeesCounter').textContent = `₹${totalFees.toFixed(2)}`;
      document.getElementById('profitMarginCounter').textContent = `₹${grossMargin.toFixed(2)}`;
      document.getElementById('marginPercentCounter').textContent = `${marginPercent.toFixed(2)}%`;
      document.getElementById('netProfitCounter').textContent = `₹${netProfit.toFixed(2)}`;
      
      // Color code the gross margin
      const profitResult = document.getElementById('profitResult');
      if (grossMargin < 0) {
        profitResult.className = 'result-item loss';
      } else {
        profitResult.className = 'result-item profit';
      }
      
      // Show results section
      resultsSection.style.display = 'block';
      
      showAlert('Amazon fee calculation completed successfully!', 'success');
    }

    function clearCalculator() {
      // Clear inputs
      document.getElementById('productName').value = '';
      sellingPriceInput.value = '';
      discountInput.value = '';
      productPriceInput.value = '';
      packingCostInput.value = '';
      otherFeesInput.value = '';
      lengthInput.value = '';
      breadthInput.value = '';
      heightInput.value = '';
      actualWeightInput.value = '';
      returnRtoInput.value = '';
      additionalPackingFeesInput.value = '';
      
      // Reset selects
      categorySelect.selectedIndex = 0;
      subcategorySelect.innerHTML = '<option value="">Select Subcategory</option>';
      closingFeeTypeSelect.selectedIndex = 0;
      gstSelect.selectedIndex = 3; // 18%
      shippingZoneSelect.selectedIndex = 2; // National
      
      // Reset calculated fields
      referralFeeInput.value = '';
      closingFeeInput.value = '';
      chargeableWeightInput.value = '';
      sizeTierInput.value = '';
      shippingFeeInput.value = '';
      volumetricWeightDisplay.textContent = 'Volumetric Weight: 0 kg';
      
      // Reset counters
      document.getElementById('totalFeesCounter').textContent = '₹0.00';
      document.getElementById('profitMarginCounter').textContent = '₹0.00';
      document.getElementById('marginPercentCounter').textContent = '0%';
      document.getElementById('netProfitCounter').textContent = '₹0.00';
      
      // Hide results section
      resultsSection.style.display = 'none';
      
      showAlert('Calculator has been cleared.', 'success');
    }
    
    function copyResults() {
      const sellingPrice = document.getElementById('sellingPriceResult').textContent;
      const discount = document.getElementById('discountResult').textContent;
      const finalPrice = document.getElementById('finalSellingPrice').textContent;
      const grossMargin = document.getElementById('grossMargin').textContent;
      const marginPercent = document.getElementById('marginPercentCounter').textContent;
      
      const resultsText = `Amazon Fee Calculation Results:
Selling Price: ${sellingPrice}
Discount Applied: ${discount}
Final Selling Price: ${finalPrice}
Gross Margin: ${grossMargin}
Margin Percentage: ${marginPercent}`;
      
      navigator.clipboard.writeText(resultsText).then(() => {
        showAlert('Results copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy results: ' + err, 'error');
      });
    }
    
    function showFeeDetails() {
      detailsModal.style.display = 'block';
    }
    
    function closeDetailsModal() {
      detailsModal.style.display = 'none';
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

    // Event listeners
    calculateBtn.addEventListener('click', calculateFees);
    clearButton.addEventListener('click', clearCalculator);
    copyButton.addEventListener('click', copyResults);
    detailsButton.addEventListener('click', showFeeDetails);
    closeDetails.addEventListener('click', closeDetailsModal);
    
    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        detailsModal.style.display = 'none';
      });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === detailsModal) {
        detailsModal.style.display = 'none';
      }
    });

    categorySelect.addEventListener('change', updateSubcategories);
    subcategorySelect.addEventListener('change', updateReferralFee);
    sellingPriceInput.addEventListener('input', updateReferralFee);
    closingFeeTypeSelect.addEventListener('change', updateClosingFee);
    
    // Shipping calculation event listeners
    [lengthInput, breadthInput, heightInput, actualWeightInput].forEach(input => {
      input.addEventListener('input', updateShippingCalculations);
    });
    
    shippingZoneSelect.addEventListener('change', updateShippingCalculations);

    // Initialize
    populateCategories();
    updateReferralFee();
    updateClosingFee();
    updateShippingCalculations();
  });
</script>