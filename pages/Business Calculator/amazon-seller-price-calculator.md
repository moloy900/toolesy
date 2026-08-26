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
  /* Amazon Calculator Styles */
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

  .input-section {
    margin: 20px 0;
  }

  .input-group {
    margin-bottom: 25px;
  }

  .input-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #2c3e50;
  }

  .input-group input, .input-group select {
    width: 100%;
    padding: 15px;
    border: 2px solid #e0e6ed;
    border-radius: 10px;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  .input-group input:focus, .input-group select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .dimensions-group {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
  }

  .weight-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  .input-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }

  .results-section {
    margin: 30px 0;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    border-left: 4px solid var(--success);
  }

  .results-section h3 {
    color: var(--success);
    margin-bottom: 20px;
    font-size: 1.3rem;
  }

  .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-bottom: 20px;
  }

  .result-item {
    display: flex;
    flex-direction: column;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
    text-align: center;
  }

  .result-label {
    font-weight: 600;
    color: #7f8c8d;
    margin-bottom: 8px;
    font-size: 0.9rem;
  }

  .result-value {
    font-weight: bold;
    font-size: 1.4rem;
    color: var(--primary);
  }

  .result-value.profit {
    color: var(--success);
  }

  .result-value.loss {
    color: #e74c3c;
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

  .file-info {
    margin-top: 10px;
    font-size: 14px;
    color: #7f8c8d;
    width: 100%;
  }

  .options-section {
    background: #f8f9fa;
    padding: 0px;
    border-radius: 10px;
    margin: 10px 0;
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

  .upload-icon {
    color: var(--primary);
    cursor: help;
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

  /* Amazon specific styles */
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

  .volumetric-weight {
    background: #e8f4fd;
    padding: 15px;
    border-radius: 8px;
    margin-top: 15px;
    font-weight: 600;
    text-align: center;
  }

  .weight-calculation {
    background: #fff3cd;
    padding: 15px;
    border-radius: 8px;
    margin-top: 15px;
    border-left: 4px solid #ffc107;
  }

  .weight-result {
    background: #d1ecf1;
    padding: 15px;
    border-radius: 8px;
    margin-top: 10px;
    border-left: 4px solid #17a2b8;
    font-weight: 600;
  }

  .discount-info {
    background: #fff8e1;
    padding: 10px 15px;
    border-radius: 6px;
    margin-top: 10px;
    font-size: 0.9rem;
    border-left: 4px solid #ffc107;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .counter-wrapper {
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

    .rate-tables {
      grid-template-columns: 1fr;
    }

    .dimensions-group {
      grid-template-columns: 1fr;
    }

    .weight-group {
      grid-template-columns: 1fr;
    }

    .results-grid {
      grid-template-columns: 1fr;
    }

    .input-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="calculator-container">
  <h1>Amazon Fee Calculator with Discount</h1>
  <p class="welcome-message">Calculate your profit margins on Amazon sales including commission, shipping, and other fees. Easy to use tool for sellers.</p>

  <div class="calculator-section">
    <h2>Amazon Fee Calculator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Commission Fee: </span>
        <span id="commissionCount">₹0.00</span>
      </div>
      <div class="counter-item">
        <span>Shipping Fee: </span>
        <span id="shippingCount">₹0.00</span>
      </div>
      <div class="counter-item">
        <span>Other Fees: </span>
        <span id="otherFeesCount">₹0.00</span>
      </div>
      <div class="counter-item">
        <span>Total Fees: </span>
        <span id="totalFeesCount">₹0.00</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Product Information <i class="fas fa-info-circle upload-icon" id="infoIcon" title="Rate Card Information"></i></h2>
      
      <div class="input-group">
        <label for="productName">Product Name</label>
        <input type="text" id="productName" placeholder="Enter product name">
      </div>
      
      <div class="input-group">
        <label for="sellingPrice">Selling Price (MRP) (₹)</label>
        <input type="number" id="sellingPrice" placeholder="Enter selling price" min="0" step="0.01">
      </div>
      
      <div class="input-group">
        <label for="discount">Discount (₹ or %)</label>
        <input type="text" id="discount" placeholder="e.g., 50 or 10%">
        <div class="discount-info">
          Enter amount (₹) or percentage (e.g., 10%)
        </div>
      </div>
      

      <div class="input-grid">
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
          <label for="referralFee">Referral Fee (%)</label>
          <input type="text" id="referralFee" readonly>
        </div>

        <div class="input-group">
          <label for="fulfillmentMethod">Fulfillment Method</label>
          <select id="fulfillmentMethod">
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
      </div>

      <div class="input-group">
        <label for="productPrice">Product Price/Cost (₹)</label>
        <input type="number" id="productPrice" placeholder="Enter product cost" min="0" step="0.01">
      </div>

       <div class="input-group">
        <label for="packingFees">Packing Cost (₹)</label>
        <input type="number" id="packingFees" placeholder="Enter packing charges" min="0" step="0.01">
      </div>
      
      <div class="input-group">
        <label>Package Dimensions & Weight</label>
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
        
        <div class="weight-group">
          <div>
            <label for="actualWeight">Actual Weight (kg)</label>
            <input type="number" id="actualWeight" placeholder="Actual weight" min="0" step="0.01">
          </div>
          <div>
            <label for="divisor">Volumetric Divisor</label>
            <select id="divisor">
              <option value="5000">5000 (Amazon/Amazon)</option>
              <option value="6000">6000 (Other Couriers)</option>
            </select>
          </div>
        </div>
        
        <div class="weight-calculation" id="weightCalculation">
          <strong>Weight Calculation:</strong><br>
          <span id="volumetricCalc">Volumetric Weight = (L × B × H) / 5000</span><br>
          <span id="actualWeightDisplay">Actual Weight: 0 kg</span><br>
          <span id="volumetricWeightDisplay">Volumetric Weight: 0 kg</span>
        </div>
        
        <div class="weight-result" id="finalWeightResult">
          Final Shipping Weight: 0 kg (Based on higher value)
        </div>
      </div>
      
      <div class="input-group">
        <label for="nationalShipping">National Shipping Fees (₹)</label>
        <input type="number" id="nationalShipping" placeholder="Calculated automatically" min="0" step="0.01" readonly>
      </div>
      
      <div class="input-group">
        <label for="returnRto">Return RTO (₹)</label>
        <input type="number" id="returnRto" placeholder="Enter RTO charges" min="0" step="0.01">
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

    <div class="options-section">
      <div class="button-section">
        <button class="calc-button" id="calculateBtn">Calculate Fees & Margin</button>
        <button class="calc-button secondary" id="clearBtn">Clear</button>
        <button class="calc-button success" id="saveBtn">Save Results</button>
        <button class="calc-button warning" id="rateCardBtn">View Rate Card</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="results-section" id="resultSection" style="display: none;">
      <h3>Calculation Results</h3>
      
      <div class="results-grid">
        <div class="result-item">
          <span class="result-label">Selling Price</span>
          <span class="result-value" id="sellingPriceResult">₹0.00</span>
        </div>
        
        <div class="result-item">
          <span class="result-label">Discount Applied</span>
          <span class="result-value" id="discountResult">₹0.00</span>
        </div>
        
        <div class="result-item">
          <span class="result-label">Final Selling Price</span>
          <span class="result-value" id="finalSellingPrice">₹0.00</span>
        </div>
        
        <div class="result-item">
          <span class="result-label">Commission Fee</span>
          <span class="result-value" id="commissionFee">₹0.00</span>
        </div>
        
        <div class="result-item">
          <span class="result-label">Referral Fee</span>
          <span class="result-value" id="referralFeeResult">₹0.00</span>
        </div>
        
        <div class="result-item">
          <span class="result-label">Closing Fee</span>
          <span class="result-value" id="closingFeeResult">₹0.00</span>
        </div>
        
        <div class="result-item">
          <span class="result-label">Shipping Fee</span>
          <span class="result-value" id="shippingFee">₹0.00</span>
        </div>
        
        <div class="result-item">
          <span class="result-label">Return RTO</span>
          <span class="result-value" id="rtoFee">₹0.00</span>
        </div>
        
        <div class="result-item">
          <span class="result-label">Packing Fees</span>
          <span class="result-value" id="packingFee">₹0.00</span>
        </div>
        
        <div class="result-item">
          <span class="result-label">Other Fees</span>
          <span class="result-value" id="otherFeesResult">₹0.00</span>
        </div>
        
        <div class="result-item">
          <span class="result-label">GST</span>
          <span class="result-value" id="gstFee">₹0.00</span>
        </div>
        
        <div class="result-item highlight">
          <span class="result-label">Total Amazon Fees</span>
          <span class="result-value" id="totalFees">₹0.00</span>
        </div>
        
        <div class="result-item highlight">
          <span class="result-label">Gross Margin</span>
          <span class="result-value" id="grossMargin">₹0.00</span>
        </div>
      </div>
    </div>

    {% include share-and-donation.html %}

  <div class="examples">
      <h2>Examples</h2>

      <h3>Example 1: Gangajal (1 Liter Bottle)</h3>
      <div class="example-text">Selling Price: ₹200
Discount: 10%
Product Cost: ₹80
Dimensions: 9.5cm × 30cm × 9.5cm
Actual Weight: 1.07kg
Volumetric Weight: 0.54kg
Final Weight: 1.07kg (higher value)
Commission: ₹63 (Platinum, Non-FBF)
Shipping: ₹25
Total Fees: ₹88
Gross Margin: ₹92 (46%)</div>

      <h3>Example 2: Lightweight Product</h3>
      <div class="example-text">Selling Price: ₹500
Discount: 5%
Product Cost: ₹300
Dimensions: 20cm × 20cm × 10cm
Actual Weight: 0.3kg
Volumetric Weight: 0.8kg
Final Weight: 0.8kg (higher value)
Commission: ₹69 (Silver, Non-FBF)
Shipping: ₹16
Total Fees: ₹85
Gross Margin: ₹115 (23%)</div>

      <h3>Example 3: Heavy Small Product</h3>
      <div class="example-text">Selling Price: ₹800
Discount: 15%
Product Cost: ₹400
Dimensions: 10cm × 10cm × 5cm
Actual Weight: 2.5kg
Volumetric Weight: 0.1kg
Final Weight: 2.5kg (higher value)
Commission: ₹65 (Gold, Non-FBF)
Shipping: ₹30
Total Fees: ₹95
Gross Margin: ₹305 (38.1%)</div>
    </div>
  </div>

  <!-- Rate Card Section -->
  <div class="rate-card">
    <h2 class="section-title">Amazon Rate Card</h2>
    
    <div class="rate-tables">
      <div>
        <h3>Commission & Fixed Fees (₹)</h3>
        <table>
          <thead>
            <tr>
              <th>Seller Tier</th>
              <th>Non-FBF</th>
              <th>FBF</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Platinum</td>
              <td>₹63</td>
              <td>₹55</td>
            </tr>
            <tr>
              <td>Gold</td>
              <td>₹65</td>
              <td>₹57</td>
            </tr>
            <tr>
              <td>Silver</td>
              <td>₹69</td>
              <td>₹61</td>
            </tr>
            <tr>
              <td>Bronze</td>
              <td>₹69</td>
              <td>₹61</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div>
        <h3>National Shipping Fees (₹)</h3>
        <table>
          <thead>
            <tr>
              <th>Weight Range</th>
              <th>National</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0-500 grams</td>
              <td>₹16</td>
            </tr>
            <tr>
              <td>Incremental 500 grams, upto 1 Kg</td>
              <td>₹25</td>
            </tr>
            <tr>
              <td>+1Kg, upto 1.5Kg</td>
              <td>₹30</td>
            </tr>
            <tr>
              <td>+1.5Kg, upto 2Kg</td>
              <td>₹20</td>
            </tr>
            <tr>
              <td>+2Kg, upto 3Kg (For every 0.5 kg)</td>
              <td>₹20</td>
            </tr>
            <tr>
              <td>+3Kg, upto 12Kg (For every 1 kg)</td>
              <td>₹18</td>
            </tr>
            <tr>
              <td>+1Kg, beyond 12Kg (For every 1 kg)</td>
              <td>₹8</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

 <!-- SEO Content Section -->
<div class="content-placeholder">
  <h2>Volumetric Weight Calculator for Amazon & Flipkart</h2>

  <p>Almost every seller who's been surprised by a shipping bill higher than expected has run into the same cause: the courier or marketplace didn't charge based on what the product actually weighs, but on how much space its box takes up. This calculator works out that "volumetric weight" figure directly from your package dimensions, so you know which number — actual weight or volumetric weight — is going to determine your shipping cost before you commit to a packaging size.</p>

  <h3>Actual Weight vs. Volumetric Weight</h3>

  <p>Actual weight is exactly what it sounds like — the product plus its packaging, put on a scale. Volumetric weight is a stand-in for how much cargo space a package occupies, calculated from its dimensions rather than a scale:</p>

  <p style="text-align:center; font-size: 1.1em;"><strong>Volumetric Weight = (Length × Breadth × Height) ÷ Volumetric Divisor</strong></p>

  <p>Couriers and marketplaces then charge based on whichever of the two numbers is larger. The logic is straightforward from their side: a delivery van has limited space long before it has limited weight capacity, so a large, light box still takes up room that could otherwise carry several smaller, denser packages.</p>

  <h3>Two Examples Worth Comparing</h3>

  <p><strong>A dense product:</strong> a 1-liter bottle of liquid weighs around 1.07 kg including its bottle, and measures roughly 9.5 × 30 × 9.5 cm. Run through the formula, that's (9.5 × 30 × 9.5) ÷ 5000 ≈ 0.54 kg of volumetric weight — well below the actual weight. Here, actual weight wins, and shipping is charged on the full 1.07 kg.</p>

  <p><strong>A bulky, light product:</strong> a decorative foam item weighing just 0.30 kg but boxed at 20 × 20 × 10 cm works out to (20 × 20 × 10) ÷ 5000 = 0.80 kg of volumetric weight — nearly three times its actual weight. Here, volumetric weight wins, and the seller pays shipping as if the product weighed 800 grams rather than 300.</p>

  <p>The pattern is consistent: dense, compact products rarely trigger a volumetric penalty. Light, bulky ones almost always do, and that's exactly the category of product where sellers most often underestimate shipping cost during initial pricing research.</p>

  <h3>Using the Calculator</h3>

  <ol>
    <li>Enter the package's length, breadth, and height in centimeters.</li>
    <li>Enter the actual weight of the product plus its packaging.</li>
    <li>Select the volumetric divisor your marketplace or courier uses (commonly 5000, though some couriers use 6000).</li>
    <li>The calculator returns both figures and tells you which one your shipping charge will actually be based on.</li>
  </ol>

  <h3>Packaging Choices That Actually Move the Number</h3>

  <p>Since volumetric weight comes directly from box dimensions, packaging decisions have a direct, calculable effect on shipping cost:</p>

  <ul>
    <li><strong>Size the box to the product, not to whatever's on hand.</strong> A box even a few centimeters larger than necessary on each side can meaningfully raise volumetric weight — the formula multiplies all three dimensions together, so small increases compound.</li>
    <li><strong>Minimize void fill where possible.</strong> Padding and empty space add to the outer box dimensions without adding to the actual weight, which is precisely the combination that triggers a volumetric weight penalty.</li>
    <li><strong>Flatter shapes often ship cheaper than cube-shaped ones</strong> for the same product volume, since courier pricing tiers and box-size brackets aren't always symmetric across dimensions.</li>
    <li><strong>Re-run the calculation whenever you change suppliers or packaging materials</strong> — a supplier switch that changes box dimensions by even a centimeter or two can shift a product from the actual-weight side of the calculation to the volumetric side.</li>
  </ul>

  <h3>Checking Which Divisor Applies to You</h3>

  <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
    <thead>
      <tr style="background-color: #FF9900; color: white;">
        <th style="padding: 12px; text-align: left;">Platform / Courier</th>
        <th style="padding: 12px; text-align: left;">Weight Used for Charging</th>
        <th style="padding: 12px; text-align: left;">Common Divisor</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #ddd;">
        <td style="padding: 12px;"><strong>Amazon.in</strong></td>
        <td style="padding: 12px;">Higher of actual or volumetric weight</td>
        <td style="padding: 12px;">5000</td>
      </tr>
      <tr style="border-bottom: 1px solid #ddd;">
        <td style="padding: 12px;"><strong>Most third-party couriers</strong></td>
        <td style="padding: 12px;">Higher of actual or volumetric weight</td>
        <td style="padding: 12px;">5000 or 6000</td>
      </tr>
    </tbody>
  </table>

  <p>The divisor isn't universal, so it's worth confirming the exact figure your specific courier or fulfillment program uses rather than assuming it matches a competitor's or a previous shipment's rate.</p>

  <h3>Questions Sellers Often Have</h3>

  <p><strong>Why did my shipping cost come in higher than the product's actual weight would suggest?</strong><br>
  This is almost always volumetric weight at work — the package's dimensions produced a higher figure than the scale weight, and shipping was charged on the larger of the two.</p>

  <p><strong>Does volumetric weight apply to every shipment, or only large packages?</strong><br>
  It applies to any package, but it only actually changes the price when the volumetric figure exceeds the actual weight — which mostly affects bulky, lightweight items rather than small, dense ones.</p>

  <p><strong>If I reduce my box size slightly, how much difference does it really make?</strong><br>
  Potentially more than expected, since the formula multiplies length, breadth, and height together — shaving a couple of centimeters off each dimension compounds rather than just adding up.</p>

  <p><strong>Does the divisor ever change?</strong><br>
  It can, and it varies by courier and sometimes by shipment type, so it's worth rechecking rather than assuming a figure that applied a year ago (or with a different courier) still applies today.</p>

  <p><strong>Is my package data stored anywhere after I calculate it?</strong><br>
  No — the calculation happens locally in your browser, and nothing you enter is saved or transmitted elsewhere.</p>
</div>

<!-- Rate Card Modal -->
<div id="rateCardModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Amazon Rate Card Information</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>This calculator uses Amazon India's current fee structure for seller calculations:</p>
      <ul>
        <li><strong>Commission Fees:</strong> Based on seller tier (Platinum, Gold, Silver, Bronze)</li>
        <li><strong>Referral Fees:</strong> Percentage based on product category and price range</li>
        <li><strong>Closing Fees:</strong> Fixed fees based on fulfillment method and price</li>
        <li><strong>Shipping Fees:</strong> Based on weight (actual or volumetric, whichever is higher)</li>
      </ul>
      <p>All calculations are estimates. Actual fees may vary based on Amazon's current policies.</p>
    </div>
    <div class="modal-footer">
      <button class="modal-button primary" id="closeRateCard">Close</button>
    </div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
    // Amazon referral fee data structure
    const amazonReferralFees = {
        "₹0 – ₹300": {
            averageFee: "0% – 5%",
            referralFee: 2.5
        },
        "₹301 – ₹500": {
            averageFee: "5% – 10%",
            referralFee: 7.5
        },
        "₹501 – ₹1000": {
            averageFee: "10% – 15%",
            referralFee: 12.5
        },
        "₹1001 – ₹5000": {
            averageFee: "12% – 16%",
            referralFee: 14
        },
        "₹5001 – ₹20000": {
            averageFee: "6% – 10%",
            referralFee: 8
        },
        "₹20000+": {
            averageFee: "2% – 7%",
            referralFee: 4.5
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

    // Rate card data - using Silver tier and Non-FBF as defaults
    const defaultCommissionFee = 69; // Silver, Non-FBF

    // DOM elements
    const calculateBtn = document.getElementById('calculateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const saveBtn = document.getElementById('saveBtn');
    const rateCardBtn = document.getElementById('rateCardBtn');
    const alertContainer = document.getElementById('alertContainer');
    const resultSection = document.getElementById('resultSection');
    const lengthInput = document.getElementById('length');
    const breadthInput = document.getElementById('breadth');
    const heightInput = document.getElementById('height');
    const actualWeightInput = document.getElementById('actualWeight');
    const divisorSelect = document.getElementById('divisor');
    const weightCalculation = document.getElementById('weightCalculation');
    const finalWeightResult = document.getElementById('finalWeightResult');
    const nationalShippingInput = document.getElementById('nationalShipping');
    const discountInput = document.getElementById('discount');
    const categorySelect = document.getElementById('category');
    const referralFeeInput = document.getElementById('referralFee');
    const fulfillmentMethodSelect = document.getElementById('fulfillmentMethod');
    const closingFeeInput = document.getElementById('closingFee');
    const sellingPriceInput = document.getElementById('sellingPrice');
    const otherFeesInput = document.getElementById('otherFees');
    
    // Modal elements
    const rateCardModal = document.getElementById('rateCardModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const closeRateCard = document.getElementById('closeRateCard');
    const infoIcon = document.getElementById('infoIcon');

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

    // Update referral fee based on selected category
    function updateReferralFee() {
        const selectedCategory = categorySelect.value;
        
        if (selectedCategory && amazonReferralFees[selectedCategory]) {
            const referralFeePercentage = amazonReferralFees[selectedCategory].referralFee;
            referralFeeInput.value = `${referralFeePercentage}%`;
        } else {
            referralFeeInput.value = '';
        }
        
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
        const type = fulfillmentMethodSelect.value;
        
        const closingFee = calculateClosingFee(price, type);
        closingFeeInput.value = `₹${closingFee}`;
    }

    // Event listeners
    calculateBtn.addEventListener('click', calculateFees);
    clearBtn.addEventListener('click', clearInputs);
    saveBtn.addEventListener('click', saveResults);
    rateCardBtn.addEventListener('click', showRateCard);
    infoIcon.addEventListener('click', showRateCard);
    
    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            rateCardModal.style.display = 'none';
        });
    });

    // Close rate card modal
    closeRateCard.addEventListener('click', function() {
        rateCardModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === rateCardModal) {
            rateCardModal.style.display = 'none';
        }
    });

    // Also calculate when pressing Enter in input fields
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') calculateFees();
        });
    });

    // Update weight calculation when dimensions or weight change
    [lengthInput, breadthInput, heightInput, actualWeightInput, divisorSelect].forEach(input => {
        input.addEventListener('input', updateWeightCalculation);
    });

    // Update referral and closing fees when inputs change
    categorySelect.addEventListener('change', updateReferralFee);
    sellingPriceInput.addEventListener('input', updateClosingFee);
    fulfillmentMethodSelect.addEventListener('change', updateClosingFee);

    // Calculate volumetric weight
    function calculateVolumetricWeight() {
        const length = parseFloat(lengthInput.value) || 0;
        const breadth = parseFloat(breadthInput.value) || 0;
        const height = parseFloat(heightInput.value) || 0;
        const divisor = parseFloat(divisorSelect.value) || 5000;
        
        const volumetricWeight = (length * breadth * height) / divisor;
        return volumetricWeight;
    }

    // Calculate final shipping weight (higher of actual or volumetric)
    function calculateFinalWeight() {
        const actualWeight = parseFloat(actualWeightInput.value) || 0;
        const volumetricWeight = calculateVolumetricWeight();
        
        return Math.max(actualWeight, volumetricWeight);
    }

    // Update weight calculation display
    function updateWeightCalculation() {
        const length = parseFloat(lengthInput.value) || 0;
        const breadth = parseFloat(breadthInput.value) || 0;
        const height = parseFloat(heightInput.value) || 0;
        const actualWeight = parseFloat(actualWeightInput.value) || 0;
        const divisor = parseFloat(divisorSelect.value) || 5000;
        
        const volumetricWeight = calculateVolumetricWeight();
        const finalWeight = calculateFinalWeight();
        
        // Update calculation display
        document.getElementById('volumetricCalc').textContent = 
            `Volumetric Weight = (${length} × ${breadth} × ${height}) / ${divisor} = ${volumetricWeight.toFixed(2)} kg`;
        
        document.getElementById('actualWeightDisplay').textContent = 
            `Actual Weight: ${actualWeight.toFixed(2)} kg`;
        
        document.getElementById('volumetricWeightDisplay').textContent = 
            `Volumetric Weight: ${volumetricWeight.toFixed(2)} kg`;
        
        // Update final weight result
        let weightType = '';
        if (actualWeight > volumetricWeight) {
            weightType = 'Actual Weight is higher';
        } else if (volumetricWeight > actualWeight) {
            weightType = 'Volumetric Weight is higher';
        } else {
            weightType = 'Both weights are equal';
        }
        
        finalWeightResult.textContent = 
            `Final Shipping Weight: ${finalWeight.toFixed(2)} kg (${weightType})`;
        
        // Update shipping fee
        updateShippingFee(finalWeight);
    }

    // Calculate shipping fee based on final weight
    function calculateShippingFee(weight) {
        if (weight <= 0.5) return 16;
        if (weight <= 1) return 25;
        if (weight <= 1.5) return 30;
        if (weight <= 2) return 20;
        
        if (weight <= 3) {
            // +20 for every 0.5kg beyond 2kg
            const additionalHalfKgs = Math.ceil((weight - 2) / 0.5);
            return 20 + (additionalHalfKgs * 20);
        }
        
        if (weight <= 12) {
            // +18 for every 1kg beyond 3kg
            const additionalKgs = Math.ceil(weight - 3);
            return 20 + ((3 - 2) / 0.5 * 20) + (additionalKgs * 18);
        }
        
        // Beyond 12kg: +8 for every 1kg
        const additionalKgs = Math.ceil(weight - 12);
        return 20 + ((3 - 2) / 0.5 * 20) + ((12 - 3) * 18) + (additionalKgs * 8);
    }

    // Parse discount input (can be amount or percentage)
    function parseDiscount(discountStr, sellingPrice) {
        if (!discountStr) return 0;
        
        // Check if it's a percentage
        if (discountStr.includes('%')) {
            const percentage = parseFloat(discountStr.replace('%', '')) || 0;
            return (sellingPrice * percentage) / 100;
        }
        
        // Otherwise treat as fixed amount
        return parseFloat(discountStr) || 0;
    }

    // Update shipping fee when weight changes
    function updateShippingFee(finalWeight) {
        const shippingFee = calculateShippingFee(finalWeight);
        nationalShippingInput.value = shippingFee.toFixed(2);
    }

    // Calculate all fees and margins
    function calculateFees() {
        // Get input values
        const sellingPrice = parseFloat(document.getElementById('sellingPrice').value) || 0;
        const discountValue = discountInput.value;
        const productPrice = parseFloat(document.getElementById('productPrice').value) || 0;
        const returnRto = parseFloat(document.getElementById('returnRto').value) || 0;
        const packingFees = parseFloat(document.getElementById('packingFees').value) || 0;
        const otherFees = parseFloat(document.getElementById('otherFees').value) || 0;
        const category = categorySelect.value;
        const fulfillmentMethod = fulfillmentMethodSelect.value;
        const gstRate = parseFloat(document.getElementById('gst').value) || 0;
        
        // Validate inputs
        if (sellingPrice <= 0) {
            showAlert('Please enter a valid selling price.', 'error');
            return;
        }
        
        // Calculate discount
        const discountAmount = parseDiscount(discountValue, sellingPrice);
        const finalSellingPrice = sellingPrice - discountAmount;
        
        // Calculate final weight and shipping
        const finalWeight = calculateFinalWeight();
        const shippingFee = calculateShippingFee(finalWeight);
        
        // Use default commission fee
        const commissionFee = defaultCommissionFee;
        
        // Calculate referral fee
        const referralFeePercentage = category && amazonReferralFees[category] ? amazonReferralFees[category].referralFee : 0;
        const referralFeeAmount = (finalSellingPrice * referralFeePercentage) / 100;
        
        // Calculate closing fee
        const closingFeeAmount = calculateClosingFee(sellingPrice, fulfillmentMethod);
        
        // Calculate GST on final selling price
        const gstAmount = (finalSellingPrice * gstRate) / 100;
        
        // Calculate total Amazon fees
        const totalFees = commissionFee + referralFeeAmount + closingFeeAmount + shippingFee + returnRto + packingFees + otherFees;
        
        // Calculate gross margin (excluding GST)
        const grossMargin = finalSellingPrice - totalFees - productPrice;
        
        // Update counters
        document.getElementById('commissionCount').textContent = `₹${commissionFee.toFixed(2)}`;
        document.getElementById('shippingCount').textContent = `₹${shippingFee.toFixed(2)}`;
        document.getElementById('otherFeesCount').textContent = `₹${(returnRto + packingFees + otherFees).toFixed(2)}`;
        document.getElementById('totalFeesCount').textContent = `₹${totalFees.toFixed(2)}`;
        
        // Update results in the UI
        document.getElementById('sellingPriceResult').textContent = `₹${sellingPrice.toFixed(2)}`;
        document.getElementById('discountResult').textContent = `₹${discountAmount.toFixed(2)}`;
        document.getElementById('finalSellingPrice').textContent = `₹${finalSellingPrice.toFixed(2)}`;
        document.getElementById('commissionFee').textContent = `₹${commissionFee.toFixed(2)}`;
        document.getElementById('referralFeeResult').textContent = `₹${referralFeeAmount.toFixed(2)}`;
        document.getElementById('closingFeeResult').textContent = `₹${closingFeeAmount.toFixed(2)}`;
        document.getElementById('shippingFee').textContent = `₹${shippingFee.toFixed(2)}`;
        document.getElementById('rtoFee').textContent = `₹${returnRto.toFixed(2)}`;
        document.getElementById('packingFee').textContent = `₹${packingFees.toFixed(2)}`;
        document.getElementById('otherFeesResult').textContent = `₹${otherFees.toFixed(2)}`;
        document.getElementById('gstFee').textContent = `₹${gstAmount.toFixed(2)}`;
        document.getElementById('totalFees').textContent = `₹${totalFees.toFixed(2)}`;
        document.getElementById('grossMargin').textContent = `₹${grossMargin.toFixed(2)}`;
        
        // Color code the gross margin
        const grossMarginElement = document.getElementById('grossMargin');
        if (grossMargin < 0) {
            grossMarginElement.className = 'result-value loss';
        } else {
            grossMarginElement.className = 'result-value profit';
        }
        
        // Show result section
        resultSection.style.display = 'block';
        
        // Show success message
        showAlert('Fees calculated successfully!', 'success');
    }

    function clearInputs() {
        document.getElementById('productName').value = '';
        document.getElementById('sellingPrice').value = '';
        document.getElementById('discount').value = '';
        document.getElementById('productPrice').value = '';
        document.getElementById('length').value = '';
        document.getElementById('breadth').value = '';
        document.getElementById('height').value = '';
        document.getElementById('actualWeight').value = '';
        document.getElementById('returnRto').value = '';
        document.getElementById('packingFees').value = '';
        document.getElementById('otherFees').value = '';
        resultSection.style.display = 'none';
        
        // Reset selects
        categorySelect.selectedIndex = 0;
        fulfillmentMethodSelect.selectedIndex = 0;
        
        // Reset calculated fields
        referralFeeInput.value = '';
        closingFeeInput.value = '';
        
        // Reset counters
        document.getElementById('commissionCount').textContent = '₹0.00';
        document.getElementById('shippingCount').textContent = '₹0.00';
        document.getElementById('otherFeesCount').textContent = '₹0.00';
        document.getElementById('totalFeesCount').textContent = '₹0.00';
        
        updateWeightCalculation();
        showAlert('Inputs cleared.', 'success');
    }

    function saveResults() {
        if (resultSection.style.display === 'none') {
            showAlert('No results to save. Please calculate fees first.', 'error');
            return;
        }
        
        // Create a text representation of the results
        const productName = document.getElementById('productName').value || 'Unnamed Product';
        const resultText = `Amazon Fee Calculator Results
Product: ${productName}
Selling Price: ${document.getElementById('sellingPriceResult').textContent}
Discount Applied: ${document.getElementById('discountResult').textContent}
Final Selling Price: ${document.getElementById('finalSellingPrice').textContent}
Commission Fee: ${document.getElementById('commissionFee').textContent}
Referral Fee: ${document.getElementById('referralFeeResult').textContent}
Closing Fee: ${document.getElementById('closingFeeResult').textContent}
Shipping Fee: ${document.getElementById('shippingFee').textContent}
Return RTO: ${document.getElementById('rtoFee').textContent}
Packing Fees: ${document.getElementById('packingFee').textContent}
Other Fees: ${document.getElementById('otherFeesResult').textContent}
GST: ${document.getElementById('gstFee').textContent}
Total Amazon Fees: ${document.getElementById('totalFees').textContent}
Gross Margin: ${document.getElementById('grossMargin').textContent}
Calculated on: ${new Date().toLocaleString()}`;
        
        // Create a blob and download link
        const blob = new Blob([resultText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Amazon_fee_calculation.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showAlert('Results saved successfully!', 'success');
    }

    function showRateCard() {
        rateCardModal.style.display = 'block';
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

    // Initialize
    populateCategories();
    updateReferralFee();
    updateClosingFee();
    updateWeightCalculation();
});
</script>