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
    color: #28a745;
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

  .upload-icon {
    color: var(--primary);
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    padding: 5px;
    border-radius: 4px;
  }

  .upload-icon:hover {
    background: rgba(52, 152, 219, 0.1);
    transform: scale(1.1);
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

  /* Amazon Calculator specific styles */
  .calculator-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin: 20px 0;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  .dimensions-group {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin-bottom: 15px;
  }

  .dimension-input {
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

  .tabs {
    display: flex;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
  }

  .tab {
    padding: 10px 20px;
    cursor: pointer;
    border-bottom: 3px solid transparent;
    transition: all 0.3s;
  }

  .tab:hover {
    background-color: #f8f9fa;
  }

  .tab.active {
    border-bottom: 3px solid var(--primary);
    font-weight: 600;
    color: var(--primary);
  }

  .tab-content {
    display: none;
  }

  .tab-content.active {
    display: block;
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

  .weight-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-top: 15px;
  }

  .volumetric-display {
    background: #fff5e6;
    padding: 15px;
    border-radius: 8px;
    margin-top: 15px;
    font-weight: 600;
    text-align: center;
    border-left: 4px solid #ff9900;
  }

  .shipping-options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-bottom: 15px;
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

  .rate-card {
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    margin-bottom: 30px;
  }

  .rate-tables {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 20px;
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

    .modal-content {
      margin: 20% auto;
      width: 95%;
      padding: 20px;
    }

    .calculator-grid {
      grid-template-columns: 1fr;
    }

    .dimensions-group {
      grid-template-columns: 1fr;
    }

    .shipping-options {
      grid-template-columns: 1fr;
    }

    .weight-info {
      grid-template-columns: 1fr;
    }

    .rate-tables {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>Amazon Seller Fee Calculator</h1>
  <p class="welcome-message">Calculate your profit margins on Amazon sales with detailed shipping calculations, referral fees, and FBA charges. All calculations in Indian Rupees (₹).</p>

  <div class="converter-section">
    <h2>Amazon Fee Calculator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Product Price: </span>
        <span id="productPriceCounter">₹0.00</span>
      </div>
      <div class="counter-item">
        <span>Referral Fee: </span>
        <span id="referralFeeCounter">₹0.00</span>
      </div>
      <div class="counter-item">
        <span>Closing Fee: </span>
        <span id="closingFeeCounter">₹0.00</span>
      </div>
      <div class="counter-item">
        <span>Shipping Fee: </span>
        <span id="shippingFeeCounter">₹0.00</span>
      </div>
    </div>

    <div class="tabs">
      <div class="tab active" data-tab="basic">Basic Information</div>
      <div class="tab" data-tab="shipping">Shipping Details</div>
      <div class="tab" data-tab="advanced">Advanced Options</div>
    </div>

    <div class="calculator-grid">
      <div>
        <div class="tab-content active" id="basic-tab">
          <h3>Product Information</h3>
          
          <div class="input-group">
            <label for="productName">Product Name</label>
            <input type="text" id="productName" placeholder="Enter product name">
          </div>
          
          <div class="input-group">
            <label for="sellingPrice">Selling Price MRP(₹) <span class="info-tooltip" title="The price at which you're selling the product">ℹ️</span></label>
            <input type="number" id="sellingPrice" placeholder="Enter selling price" min="0" step="0.01">
          </div>
          
          <div class="input-group">
            <label for="productCost">Product Cost (₹) <span class="info-tooltip" title="Your cost to acquire or manufacture the product">ℹ️</span></label>
            <input type="number" id="productCost" placeholder="Enter product cost" min="0" step="0.01">
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
          
          <div class="input-group">
            <label for="referralFee">Referral Fee (%)</label>
            <input type="text" id="referralFee" readonly>
          </div>
          
          <div class="input-group">
            <label for="fulfillmentMethod">Fulfillment Method</label>
            <select id="fulfillmentMethod">
              <option value="fc">Fulfillment by Amazon (FBA)</option>
              <option value="easyShip">Easy Ship</option>
              <option value="selfShip">Self Ship</option>
              <option value="sellerFlex">Seller Flex</option>
            </select>
          </div>
          
          <div class="input-group">
            <label for="closingFee">Closing Fee (₹)</label>
            <input type="text" id="closingFee" readonly>
          </div>
        </div>

        <div class="tab-content" id="shipping-tab">
          <h3>Shipping Details</h3>
          
          <div class="input-group">
            <label>Shipping Type</label>
            <div class="shipping-options">
              <div class="shipping-option selected" id="nationalShippingOption">
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
            <label for="shippingZone">Shipping Zone</label>
            <select id="shippingZone">
              <option value="local">Local (Same City)</option>
              <option value="regional">Regional (Same Region)</option>
              <option value="national" selected>National (Across Regions)</option>
            </select>
          </div>
          
          <div class="input-group">
            <label>Product Dimensions</label>
            <div class="dimensions-group">
              <div class="dimension-input">
                <label for="length">Length (cm)</label>
                <input type="number" id="length" placeholder="Length" min="0" step="0.1">
              </div>
              <div class="dimension-input">
                <label for="width">Width (cm)</label>
                <input type="number" id="width" placeholder="Width" min="0" step="0.1">
              </div>
              <div class="dimension-input">
                <label for="height">Height (cm)</label>
                <input type="number" id="height" placeholder="Height" min="0" step="0.1">
              </div>
            </div>
          </div>
          
          <div class="input-group">
            <label for="actualWeight">Actual Weight (kg)</label>
            <input type="number" id="actualWeight" placeholder="Enter weight" min="0" step="0.01">
          </div>
          
          <div class="volumetric-display" id="volumetricWeightDisplay">
            Volumetric Weight: 0 kg
          </div>
          
          <div class="weight-info">
            <div class="input-group">
              <label for="chargeableWeight">Chargeable Weight (kg)</label>
              <input type="text" id="chargeableWeight" readonly>
            </div>
            <div class="input-group">
              <label for="sizeTier">Size Tier</label>
              <input type="text" id="sizeTier" readonly>
            </div>
          </div>
          
          <div class="input-group">
            <label for="shippingFee">Shipping Fee (₹)</label>
            <input type="text" id="shippingFee" readonly>
          </div>
          
          <div class="info-box">
            <h4>Shipping Fee Calculation</h4>
            <p>Shipping fees are calculated based on chargeable weight (actual or volumetric, whichever is higher) and shipping zone.</p>
            <p>Volumetric Weight = (Length × Width × Height) / 5000</p>
          </div>
        </div>

        <div class="tab-content" id="advanced-tab">
          <h3>Additional Fees</h3>
          
          <div class="input-group">
            <label for="returnRto">Return RTO (₹) <span class="info-tooltip" title="Return to origin charges">ℹ️</span></label>
            <input type="number" id="returnRto" placeholder="Enter RTO charges" min="0" step="0.01">
          </div>
          
          <div class="input-group">
            <label for="packingFees">Packing Fees (₹) <span class="info-tooltip" title="Additional packing material costs">ℹ️</span></label>
            <input type="number" id="packingFees" placeholder="Enter packing charges" min="0" step="0.01">
          </div>
          
          <div class="input-group">
            <label for="gst">GST (%)</label>
            <select id="gst">
              <option value="0">0%</option>
              <option value="5">5%</option>
              <option value="12">12%</option>
              <option value="18" selected>18%</option>
              <option value="28">28%</option>
            </select>
          </div>
          
          <div class="info-box">
            <h4>Additional FBA Fees (If Applicable)</h4>
            <p><strong>Pick & Pack Fee:</strong> ₹17 for Standard items up to 1kg, ₹5 for each additional kg up to 5kg, ₹2 for each additional 5kg thereafter.</p>
            <p><strong>Storage Fee:</strong> ₹45 per cubic foot per month.</p>
            <p><strong>FBA Removal Fees:</strong> ₹10-30 for Standard, ₹100 for Heavy & Bulky.</p>
          </div>
        </div>
        
        <div class="button-section">
          <button class="case-button" id="calculateButton">Calculate Fees & Margin</button>
          <button class="case-button secondary" id="clearButton">Clear</button>
          <button class="case-button success" id="copyButton">Copy Results</button>
          <button class="case-button warning" id="detailsButton">Fee Details</button>
        </div>

        <div id="alertContainer" class="alert-container"></div>
      </div>

      <div class="results-section">
        <h3>Calculation Results</h3>
        
        <div class="result-item">
          <span class="result-label">Selling Price:</span>
          <span class="result-value" id="sellingPriceResult">₹0.00</span>
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
          <span class="result-label">Return RTO:</span>
          <span class="result-value" id="rtoFeeResult">₹0.00</span>
        </div>
        
        <div class="result-item">
          <span class="result-label">Packing Fees:</span>
          <span class="result-value" id="packingFeeResult">₹0.00</span>
        </div>
        
        <div class="result-item">
          <span class="result-label">GST:</span>
          <span class="result-value" id="gstFeeResult">₹0.00</span>
        </div>
        
        <div class="result-item total">
          <span class="result-label">Total Amazon Fees:</span>
          <span class="result-value" id="totalFees">₹0.00</span>
        </div>
        
        <div class="result-item profit" id="profitResult">
          <span class="result-label">Net Profit:</span>
          <span class="result-value" id="netProfit">₹0.00</span>
        </div>

        <div class="fee-breakdown">
          <h4>Profit Breakdown</h4>
          <div class="breakdown-item">
            <span>Product Cost:</span>
            <span id="breakdownProductCost">₹0.00</span>
          </div>
          <div class="breakdown-item">
            <span>Total Fees:</span>
            <span id="breakdownTotalFees">₹0.00</span>
          </div>
          <div class="breakdown-item">
            <span>Net Profit:</span>
            <span id="breakdownNetProfit">₹0.00</span>
          </div>
          <div class="breakdown-item">
            <span>Profit Margin:</span>
            <span id="breakdownProfitMargin">0%</span>
          </div>
        </div>
      </div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <h3>Example 1: Small Electronics (FBA)</h3>
      <div class="example-text">
Selling Price: ₹1,500
Product Cost: ₹800
Category: Electronics
Fulfillment: FBA
Dimensions: 20 × 15 × 10 cm
Weight: 0.8 kg

Results:
- Referral Fee: ₹75 (5%)
- Closing Fee: ₹26
- Shipping Fee: ₹65
- Pick & Pack: ₹17
- Total Fees: ₹183
- Net Profit: ₹517
- Profit Margin: 34.5%
      </div>

      <h3>Example 2: Clothing Item (Easy Ship)</h3>
      <div class="example-text">
Selling Price: ₹800
Product Cost: ₹300
Category: Apparel
Fulfillment: Easy Ship
Dimensions: 30 × 20 × 5 cm
Weight: 0.5 kg

Results:
- Referral Fee: ₹56 (7%)
- Closing Fee: ₹34
- Shipping Fee: ₹65
- Total Fees: ₹155
- Net Profit: ₹345
- Profit Margin: 43.1%
      </div>
    </div>
  </div>

  <div class="rate-card">
    <h2 class="section-title">Amazon Fee Structure</h2>
    
    <div class="rate-tables">
      <div>
        <h3>Closing Fees - Fulfillment by Amazon (FBA)</h3>
        <table>
          <thead>
            <tr>
              <th>Item Price Range (₹)</th>
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
        <h3>FBA Weight Handling Fees (Standard)</h3>
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
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Amazon Seller Fee Calculator - Optimize Your E-commerce Business</h2>

    <p>Our free <strong>Amazon Seller Fee Calculator</strong> helps Indian e-commerce sellers accurately calculate all Amazon fees including referral fees, closing fees, FBA charges, and shipping costs. Whether you use Fulfillment by Amazon (FBA), Easy Ship, or Self Ship, this comprehensive tool provides detailed profit margin analysis to help you make informed pricing decisions.</p>

    <h3>How to Use This Amazon Fee Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Product Details:</strong> Input your product name, selling price, and cost price in Indian Rupees.</li>
      <li><strong>Select Category:</strong> Choose the appropriate Amazon product category for accurate referral fee calculation.</li>
      <li><strong>Choose Fulfillment Method:</strong> Select between FBA, Easy Ship, Self Ship, or Seller Flex.</li>
      <li><strong>Input Shipping Details:</strong> Enter package dimensions and weight for accurate shipping cost calculation.</li>
      <li><strong>Add Additional Fees:</strong> Include any return RTO charges, packing fees, or applicable GST.</li>
      <li><strong>Calculate:</strong> Click "Calculate Fees & Margin" to see detailed profit analysis.</li>
      <li><strong>Analyze Results:</strong> Review net profit, profit margin, and detailed fee breakdown.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're selling a smartphone accessory on Amazon for ₹1,200 with a product cost of ₹600. Using FBA fulfillment with package dimensions of 15×10×5 cm and weight of 0.3 kg, our calculator shows you'd pay ₹60 in referral fees (5%), ₹26 in closing fees, ₹65 in shipping fees, and ₹17 in pick & pack fees. Your total Amazon fees would be ₹168, leaving you with a net profit of ₹432 and a healthy 36% profit margin.</p>

    <h3>Understanding Amazon Seller Fees:</h3>
    <p>Amazon charges several types of fees that impact your profitability:</p>
    <ul>
      <li><strong>Referral Fees:</strong> Percentage-based fee on the selling price (varies by category from 3-15%)</li>
      <li><strong>Closing Fees:</strong> Fixed fee based on product price range</li>
      <li><strong>FBA Fees:</strong> Includes pick & pack, weight handling, and storage fees</li>
      <li><strong>Shipping Fees:</strong> Based on package dimensions, weight, and shipping zone</li>
      <li><strong>Additional Fees:</strong> Return RTO charges, packing costs, and applicable GST</li>
    </ul>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>New Amazon Sellers:</strong> Understand fee structure before listing products</li>
      <li><strong>Existing Sellers:</strong> Optimize pricing strategies for maximum profitability</li>
      <li><strong>Product Research:</strong> Evaluate profit potential for new product ideas</li>
      <li><strong>Inventory Managers:</strong> Plan costs for different product categories</li>
      <li><strong>E-commerce Consultants:</strong> Provide accurate fee calculations for clients</li>
      <li><strong>Business Owners:</strong> Make data-driven decisions about Amazon marketplace</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>What is the difference between FBA and Easy Ship?</strong><br>
      FBA (Fulfillment by Amazon) means Amazon stores, packs, and ships your products. Easy Ship means you store products but Amazon handles pickup and delivery.</p>

    <p><strong>How are referral fees calculated?</strong><br>
      Referral fees are a percentage of the total selling price (including shipping if not charged separately) and vary by product category.</p>

    <p><strong>What is volumetric weight and why is it important?</strong><br>
      Volumetric weight considers package dimensions to calculate shipping costs for lightweight but bulky items. Amazon uses the higher of actual or volumetric weight.</p>

    <p><strong>Are there any monthly subscription fees for Amazon sellers?</strong><br>
      Yes, Amazon charges a professional selling plan fee of ₹4,200 + GST per month, or you can choose individual plan with per-item fees.</p>

    <p><strong>Is this calculator accurate for all Amazon marketplaces?</strong><br>
      This calculator is optimized for Amazon India. Fees may vary for other international Amazon marketplaces.</p>

    <h3>Why Choose Our Amazon Seller Fee Calculator?</h3>
    <p>Our <strong>Amazon Seller Fee Calculator</strong> provides the most comprehensive fee analysis specifically designed for Indian sellers. Unlike basic calculators, we include detailed volumetric weight calculations, multiple fulfillment methods, and accurate category-based referral fees. The tool is optimized for rupee-based calculations and provides practical insights for cost optimization and profit maximization.</p>

    <h3>Amazon Fee Calculation Formulas:</h3>
    <ul>
      <li><strong>Referral Fee:</strong> Selling Price × Category Percentage</li>
      <li><strong>Closing Fee:</strong> Fixed amount based on price range</li>
      <li><strong>Volumetric Weight:</strong> (Length × Width × Height) / 5000</li>
      <li><strong>Shipping Fee:</strong> Based on chargeable weight and shipping zone</li>
      <li><strong>Net Profit:</strong> Selling Price - Product Cost - Total Fees</li>
      <li><strong>Profit Margin:</strong> (Net Profit / Selling Price) × 100</li>
    </ul>

    <h3>Tips for Amazon Sellers to Maximize Profit:</h3>
    <ul>
      <li><strong>Optimize Packaging:</strong> Use the smallest possible packaging to reduce volumetric weight</li>
      <li><strong>Choose Right Fulfillment:</strong> Select the most cost-effective fulfillment method for your products</li>
      <li><strong>Price Strategically:</strong> Consider all fees when setting your selling price</li>
      <li><strong>Monitor Fee Changes:</strong> Amazon occasionally updates fee structures - stay informed</li>
      <li><strong>Use FBA Calculator:</strong> Always verify costs using Amazon's official FBA revenue calculator</li>
      <li><strong>Consider Storage Costs:</strong> Factor in long-term storage fees for slow-moving inventory</li>
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
        <li><strong>Referral Fees:</strong> 3-15% based on category
          <ul>
            <li>Electronics: 5-7%</li>
            <li>Apparel: 7-12%</li>
            <li>Books: 3-13.5%</li>
            <li>Home & Kitchen: 7-12%</li>
          </ul>
        </li>
        <li><strong>Closing Fees:</strong> ₹6-100 based on price range</li>
        <li><strong>FBA Fees:</strong> ₹17-300+ based on size and weight</li>
        <li><strong>Shipping Fees:</strong> ₹39-300+ based on zone and weight</li>
      </ul>
      
      <h4>Volumetric Weight Calculation</h4>
      <p><strong>Formula:</strong> (Length × Width × Height) / 5000</p>
      <p>Amazon uses the higher of actual weight or volumetric weight to calculate shipping fees.</p>
    </div>
    <div class="modal-footer">
      <button class="modal-button primary" id="closeDetails">Close</button>
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
    const detailsModal = document.getElementById('detailsModal');
    const closeDetails = document.getElementById('closeDetails');
    const closeModal = document.querySelectorAll('.close-modal');
    
    // Amazon referral fee data structure
    const amazonReferralFees = {
      "Electronics": {
        "Mobile Phones": [
          { maxPrice: Infinity, fee: 5.0 }
        ],
        "Laptops": [
          { maxPrice: 70000, fee: 6.0 },
          { maxPrice: Infinity, fee: 7.0 }
        ],
        "Camera & Photo": [
          { maxPrice: 1000, fee: 6.0 },
          { maxPrice: 5000, fee: 8.0 },
          { maxPrice: Infinity, fee: 10.0 }
        ]
      },
      "Apparel": {
        "Clothing": [
          { maxPrice: 500, fee: 7.0 },
          { maxPrice: 1000, fee: 10.0 },
          { maxPrice: Infinity, fee: 12.0 }
        ],
        "Shoes": [
          { maxPrice: 750, fee: 7.0 },
          { maxPrice: Infinity, fee: 10.0 }
        ]
      },
      "Home & Kitchen": {
        "Home Decor": [
          { maxPrice: 300, fee: 7.0 },
          { maxPrice: Infinity, fee: 10.0 }
        ],
        "Kitchen & Dining": [
          { maxPrice: 500, fee: 7.0 },
          { maxPrice: Infinity, fee: 10.0 }
        ]
      },
      "Books": {
        "Books": [
          { maxPrice: 250, fee: 3.0 },
          { maxPrice: 500, fee: 4.5 },
          { maxPrice: 1000, fee: 9.0 },
          { maxPrice: Infinity, fee: 13.5 }
        ]
      }
    };

    // Closing fee data
    const closingFees = {
      "fc": [
        { maxPrice: 300, fee: 26 },
        { maxPrice: 500, fee: 21 },
        { maxPrice: 1000, fee: 26 },
        { maxPrice: Infinity, fee: 51 }
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

    // FBA Weight handling fees
    const fbaWeightFees = {
      "standard": {
        "regional": {
          "0-0.5": 39,
          "0.5-1": 54,
          "1-2": 78,
          "additionalAfter2": 24
        },
        "national": {
          "0-0.5": 65,
          "0.5-1": 85,
          "1-2": 122,
          "additionalAfter2": 34
        }
      }
    };

    // Pick & Pack fees
    const pickPackFees = {
      "standard": {
        "base": 17,
        "additionalPerKg": 5
      }
    };

    // DOM elements
    const categorySelect = document.getElementById('category');
    const subcategorySelect = document.getElementById('subcategory');
    const referralFeeInput = document.getElementById('referralFee');
    const fulfillmentMethodSelect = document.getElementById('fulfillmentMethod');
    const closingFeeInput = document.getElementById('closingFee');
    const sellingPriceInput = document.getElementById('sellingPrice');
    const productCostInput = document.getElementById('productCost');
    const shippingOptions = document.querySelectorAll('input[name="shippingType"]');
    const lengthInput = document.getElementById('length');
    const widthInput = document.getElementById('width');
    const heightInput = document.getElementById('height');
    const actualWeightInput = document.getElementById('actualWeight');
    const chargeableWeightInput = document.getElementById('chargeableWeight');
    const sizeTierInput = document.getElementById('sizeTier');
    const shippingFeeInput = document.getElementById('shippingFee');
    const volumetricWeightDisplay = document.getElementById('volumetricWeightDisplay');
    const shippingZoneSelect = document.getElementById('shippingZone');

    // Tab functionality
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        this.classList.add('active');
        const tabId = this.getAttribute('data-tab');
        document.getElementById(`${tabId}-tab`).classList.add('active');
      });
    });

    // Shipping option selection
    shippingOptions.forEach(option => {
      option.addEventListener('change', function() {
        document.querySelectorAll('.shipping-option').forEach(el => {
          el.classList.remove('selected');
        });
        document.getElementById(`${this.value}ShippingOption`).classList.add('selected');
      });
    });

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
      updateCounters();
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
      const type = fulfillmentMethodSelect.value;
      
      const closingFee = calculateClosingFee(price, type);
      closingFeeInput.value = `₹${closingFee}`;
      
      updateCounters();
    }

    // Calculate volumetric weight
    function calculateVolumetricWeight() {
      const length = parseFloat(lengthInput.value) || 0;
      const width = parseFloat(widthInput.value) || 0;
      const height = parseFloat(heightInput.value) || 0;
      
      const volumetricWeight = (length * width * height) / 5000;
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
        return 0;
      }
      
      let fee = 0;
      
      if (fulfillmentMethod === 'fc') {
        const fees = fbaWeightFees.standard[zone];
        
        if (weight <= 0.5) {
          fee = fees["0-0.5"];
        } else if (weight <= 1) {
          fee = fees["0.5-1"];
        } else if (weight <= 2) {
          fee = fees["1-2"];
        } else {
          fee = fees["1-2"];
          const additionalWeight = weight - 2;
          fee += additionalWeight * fees.additionalAfter2;
        }
      } else if (fulfillmentMethod === 'easyShip') {
        // Use same fees as FBA national for Easy Ship
        const fees = fbaWeightFees.standard.national;
        
        if (weight <= 0.5) {
          fee = fees["0-0.5"];
        } else if (weight <= 1) {
          fee = fees["0.5-1"];
        } else if (weight <= 2) {
          fee = fees["1-2"];
        } else {
          fee = fees["1-2"];
          const additionalWeight = weight - 2;
          fee += additionalWeight * fees.additionalAfter2;
        }
      }
      
      return fee;
    }

    // Calculate pick & pack fee
    function calculatePickPackFee(weight) {
      const fees = pickPackFees.standard;
      let fee = fees.base;
      
      if (weight > 1) {
        const additionalWeight = weight - 1;
        fee += additionalWeight * fees.additionalPerKg;
      }
      
      return fee;
    }

    // Update shipping calculations
    function updateShippingCalculations() {
      const actualWeight = parseFloat(actualWeightInput.value) || 0;
      
      const volumetricWeight = calculateVolumetricWeight();
      const chargeableWeight = calculateChargeableWeight();
      
      chargeableWeightInput.value = `${chargeableWeight.toFixed(2)} kg`;
      sizeTierInput.value = chargeableWeight > 2 ? 'Heavy & Bulky' : 'Standard';
      
      const fulfillmentMethod = fulfillmentMethodSelect.value;
      const zone = shippingZoneSelect.value;
      const shippingFee = calculateShippingFee(fulfillmentMethod, chargeableWeight, zone);
      
      shippingFeeInput.value = `₹${shippingFee.toFixed(2)}`;
      
      updateCounters();
    }

    // Update counters
    function updateCounters() {
      const sellingPrice = parseFloat(sellingPriceInput.value) || 0;
      const category = categorySelect.value;
      const subcategory = subcategorySelect.value;
      const referralFeePercentage = calculateReferralFee(sellingPrice, category, subcategory);
      const referralFeeAmount = (sellingPrice * referralFeePercentage) / 100;
      
      const fulfillmentMethod = fulfillmentMethodSelect.value;
      const closingFeeAmount = calculateClosingFee(sellingPrice, fulfillmentMethod);
      
      const actualWeight = parseFloat(actualWeightInput.value) || 0;
      const volumetricWeight = calculateVolumetricWeight();
      const chargeableWeight = calculateChargeableWeight();
      const zone = shippingZoneSelect.value;
      const shippingFeeAmount = calculateShippingFee(fulfillmentMethod, chargeableWeight, zone);
      
      document.getElementById('productPriceCounter').textContent = `₹${sellingPrice.toFixed(2)}`;
      document.getElementById('referralFeeCounter').textContent = `₹${referralFeeAmount.toFixed(2)}`;
      document.getElementById('closingFeeCounter').textContent = `₹${closingFeeAmount.toFixed(2)}`;
      document.getElementById('shippingFeeCounter').textContent = `₹${shippingFeeAmount.toFixed(2)}`;
    }

    // Calculate all fees and margins
    function calculateFees() {
      const sellingPrice = parseFloat(sellingPriceInput.value) || 0;
      const productCost = parseFloat(productCostInput.value) || 0;
      const category = categorySelect.value;
      const subcategory = subcategorySelect.value;
      const returnRto = parseFloat(document.getElementById('returnRto').value) || 0;
      const packingFees = parseFloat(document.getElementById('packingFees').value) || 0;
      const gstRate = parseFloat(document.getElementById('gst').value) || 0;
      
      const actualWeight = parseFloat(actualWeightInput.value) || 0;
      const volumetricWeight = calculateVolumetricWeight();
      const chargeableWeight = calculateChargeableWeight();
      
      const referralFeePercentage = calculateReferralFee(sellingPrice, category, subcategory);
      const referralFeeAmount = (sellingPrice * referralFeePercentage) / 100;
      
      const fulfillmentMethod = fulfillmentMethodSelect.value;
      const closingFeeAmount = calculateClosingFee(sellingPrice, fulfillmentMethod);
      
      const zone = shippingZoneSelect.value;
      const shippingFeeAmount = calculateShippingFee(fulfillmentMethod, chargeableWeight, zone);
      
      const pickPackFeeAmount = (fulfillmentMethod === 'fc') ? calculatePickPackFee(chargeableWeight) : 0;
      
      const gstAmount = (sellingPrice * gstRate) / 100;
      
      const totalFees = referralFeeAmount + closingFeeAmount + shippingFeeAmount + pickPackFeeAmount + returnRto + packingFees;
      
      const netProfit = sellingPrice - productCost - totalFees;
      const profitMargin = (netProfit / sellingPrice) * 100;
      
      document.getElementById('sellingPriceResult').textContent = `₹${sellingPrice.toFixed(2)}`;
      document.getElementById('referralFeeResult').textContent = `₹${referralFeeAmount.toFixed(2)}`;
      document.getElementById('closingFeeResult').textContent = `₹${closingFeeAmount.toFixed(2)}`;
      document.getElementById('shippingFeeResult').textContent = `₹${shippingFeeAmount.toFixed(2)}`;
      document.getElementById('pickPackFeeResult').textContent = `₹${pickPackFeeAmount.toFixed(2)}`;
      document.getElementById('rtoFeeResult').textContent = `₹${returnRto.toFixed(2)}`;
      document.getElementById('packingFeeResult').textContent = `₹${packingFees.toFixed(2)}`;
      document.getElementById('gstFeeResult').textContent = `₹${gstAmount.toFixed(2)}`;
      document.getElementById('totalFees').textContent = `₹${totalFees.toFixed(2)}`;
      document.getElementById('netProfit').textContent = `₹${netProfit.toFixed(2)}`;
      
      document.getElementById('breakdownProductCost').textContent = `₹${productCost.toFixed(2)}`;
      document.getElementById('breakdownTotalFees').textContent = `₹${totalFees.toFixed(2)}`;
      document.getElementById('breakdownNetProfit').textContent = `₹${netProfit.toFixed(2)}`;
      document.getElementById('breakdownProfitMargin').textContent = `${profitMargin.toFixed(2)}%`;
      
      const profitResult = document.getElementById('profitResult');
      if (netProfit < 0) {
        profitResult.className = 'result-item loss';
      } else {
        profitResult.className = 'result-item profit';
      }
      
      showAlert('Amazon fee calculation completed successfully!', 'success');
    }

    // Clear calculator
    function clearCalculator() {
      document.getElementById('productName').value = '';
      document.getElementById('sellingPrice').value = '';
      document.getElementById('productCost').value = '';
      document.getElementById('category').selectedIndex = 0;
      document.getElementById('subcategory').innerHTML = '<option value="">Select Subcategory</option>';
      document.getElementById('referralFee').value = '';
      document.getElementById('fulfillmentMethod').selectedIndex = 0;
      document.getElementById('closingFee').value = '';
      document.getElementById('length').value = '';
      document.getElementById('width').value = '';
      document.getElementById('height').value = '';
      document.getElementById('actualWeight').value = '';
      document.getElementById('chargeableWeight').value = '';
      document.getElementById('sizeTier').value = '';
      document.getElementById('shippingFee').value = '';
      document.getElementById('returnRto').value = '';
      document.getElementById('packingFees').value = '';
      document.getElementById('gst').selectedIndex = 3;
      
      document.querySelectorAll('.shipping-option').forEach(el => {
        el.classList.remove('selected');
      });
      document.getElementById('nationalShippingOption').classList.add('selected');
      document.getElementById('nationalShipping').checked = true;
      
      document.getElementById('shippingZone').selectedIndex = 2;
      
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      document.querySelector('.tab').classList.add('active');
      document.getElementById('basic-tab').classList.add('active');
      
      updateCounters();
      showAlert('Calculator has been cleared.', 'success');
    }

    // Copy results
    function copyResults() {
      const sellingPrice = document.getElementById('sellingPriceResult').textContent;
      const netProfit = document.getElementById('netProfit').textContent;
      const profitMargin = document.getElementById('breakdownProfitMargin').textContent;
      
      const resultsText = `Amazon Fee Calculation Results:
Selling Price: ${sellingPrice}
Net Profit: ${netProfit}
Profit Margin: ${profitMargin}`;
      
      navigator.clipboard.writeText(resultsText).then(() => {
        showAlert('Results copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy results: ' + err, 'error');
      });
    }

    // Show fee details modal
    function showFeeDetails() {
      detailsModal.style.display = 'block';
    }

    // Close modal
    function closeDetailsModal() {
      detailsModal.style.display = 'none';
    }

    // Show alert
    function showAlert(message, type) {
      const alertDiv = document.createElement('div');
      alertDiv.className = `alert alert-${type}`;
      alertDiv.innerHTML = `
        ${message}
        <span class="close">&times;</span>
      `;

      alertContainer.innerHTML = '';
      alertContainer.appendChild(alertDiv);

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
    calculateButton.addEventListener('click', calculateFees);
    clearButton.addEventListener('click', clearCalculator);
    copyButton.addEventListener('click', copyResults);
    detailsButton.addEventListener('click', showFeeDetails);
    closeDetails.addEventListener('click', closeDetailsModal);
    
    categorySelect.addEventListener('change', updateSubcategories);
    subcategorySelect.addEventListener('change', updateReferralFee);
    sellingPriceInput.addEventListener('input', updateReferralFee);
    fulfillmentMethodSelect.addEventListener('change', updateClosingFee);
    
    [lengthInput, widthInput, heightInput, actualWeightInput].forEach(input => {
      input.addEventListener('input', updateShippingCalculations);
    });
    
    shippingZoneSelect.addEventListener('change', updateShippingCalculations);
    
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        detailsModal.style.display = 'none';
      });
    });

    window.addEventListener('click', function(event) {
      if (event.target === detailsModal) {
        detailsModal.style.display = 'none';
      }
    });

    // Initialize
    populateCategories();
    updateReferralFee();
    updateClosingFee();
    updateShippingCalculations();
  });
</script>