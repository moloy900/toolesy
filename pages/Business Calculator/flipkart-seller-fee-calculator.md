---
layout: default
title: "Flipkart Fee Calculator - Calculate Profit & Seller Payout"
permalink: /flipkart-fee-calculator-calculate-profit-seller-payout/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Flipkart Fee Calculator - Calculate Profit & Seller Payout</title>
<meta name="description"
  content="Calculate Flipkart selling fees, GST, shipping, TCS, commission and profit margin instantly. Best tool for Flipkart sellers to plan pricing strategy.
">
<meta name="keywords"
  content="flipkart seller calculator, flipkart fees, flipkart commission, seller profit calculator, ecommerce fees, flipkart seller charges, online selling calculator">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Flipkart Calculator Styles */
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

  /* Flipkart specific styles */
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

    .results-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="calculator-container">
  <h1>Flipkart Fee Calculator with Discount</h1>
  <p class="welcome-message">Calculate your profit margins on Flipkart sales including commission, shipping, and other fees. Easy to use tool for sellers.</p>

  <div class="calculator-section">
    <h2>Flipkart Fee Calculator</h2>

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
        <label for="sellingPrice">Selling Price (₹)</label>
        <input type="number" id="sellingPrice" placeholder="Enter selling price" min="0" step="0.01">
      </div>
      
      <div class="input-group">
        <label for="discount">Discount (₹ or %)</label>
        <input type="text" id="discount" placeholder="e.g., 50 or 10%">
        <div class="discount-info">
          Enter amount (₹) or percentage (e.g., 10%)
        </div>
      </div>
      
      <div class="input-group">
        <label for="productPrice">Product Price/Cost (₹)</label>
        <input type="number" id="productPrice" placeholder="Enter product cost" min="0" step="0.01">
      </div>
      
      <div class="input-group">
        <label for="commissionType">Commission Type</label>
        <select id="commissionType">
          <option value="Non-FBF">Non-FBF</option>
          <option value="FBF">FBF</option>
        </select>
      </div>
      
      <div class="input-group">
        <label for="sellerTier">Seller Tier</label>
        <select id="sellerTier">
          <option value="Platinum">Platinum</option>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
          <option value="Bronze">Bronze</option>
        </select>
      </div>
      
      <div class="input-group">
        <label>Package Dimensions (for shipping calculation)</label>
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
        <div class="volumetric-weight" id="volumetricWeightDisplay">
          Volumetric Weight: 0 kg
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
        <label for="packingFees">Packing Fees (₹)</label>
        <input type="number" id="packingFees" placeholder="Enter packing charges" min="0" step="0.01">
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
          <span class="result-label">GST</span>
          <span class="result-value" id="gstFee">₹0.00</span>
        </div>
        
        <div class="result-item highlight">
          <span class="result-label">Total Flipkart Fees</span>
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

      <h3>Example 1: High Margin Product</h3>
      <div class="example-text">Selling Price: ₹1000
Discount: 10%
Product Cost: ₹500
Commission: ₹63 (Platinum, Non-FBF)
Shipping: ₹25
Total Fees: ₹88
Gross Margin: ₹412 (41.2%)</div>

      <h3>Example 2: Low Margin Product</h3>
      <div class="example-text">Selling Price: ₹500
Discount: 5%
Product Cost: ₹400
Commission: ₹69 (Silver, Non-FBF)
Shipping: ₹16
Total Fees: ₹85
Gross Margin: ₹15 (3%)</div>

      <h3>Example 3: Loss Scenario</h3>
      <div class="example-text">Selling Price: ₹300
Discount: 20%
Product Cost: ₹250
Commission: ₹69 (Bronze, Non-FBF)
Shipping: ₹25
Total Fees: ₹94
Gross Margin: -₹44 (-14.7%)</div>
    </div>
  </div>

  <!-- Rate Card Section -->
  <div class="rate-card">
    <h2 class="section-title">Flipkart Rate Card</h2>
    
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
    <h2>Free Online Flipkart Fee Calculator with Discount</h2>

    <p>Need to calculate your profit margins on Flipkart accurately? Our free <strong>Flipkart Fee Calculator with Discount</strong> is the perfect tool for sellers, entrepreneurs, and businesses selling on India's leading e-commerce platform. This powerful calculator instantly computes all Flipkart fees including commission, shipping, packing, RTO, and GST to give you a clear picture of your actual profit margins. There's no download required, no registration needed, and your financial data remains completely private.</p>

    <h3>How to Use This Flipkart Fee Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Product Details:</strong> Input your product name, selling price, and any discounts (either fixed amount or percentage).</li>
      <li><strong>Set Cost & Commission:</strong> Enter your product cost and select your seller tier and commission type (FBF or Non-FBF).</li>
      <li><strong>Package Dimensions:</strong> Input your package dimensions to automatically calculate shipping fees based on volumetric weight.</li>
      <li><strong>Additional Fees:</strong> Enter any additional fees like packing charges and return RTO costs.</li>
      <li><strong>Calculate:</strong> Click the "Calculate Fees & Margin" button to instantly see your detailed profit breakdown.</li>
      <li><strong>Analyze Results:</strong> Review the comprehensive breakdown including all fees and your final profit margin.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're selling a product for ₹1,000 with a 10% discount. Your product cost is ₹500, and you're a Platinum tier seller using Non-FBF commission. Instead of manually calculating all the complex fees (which can be time-consuming and prone to errors), you can simply enter these values into our calculator. The tool will instantly show that after ₹100 discount, ₹63 commission, ₹25 shipping, and other fees, your actual profit is ₹412 with a 41.2% margin. This quick calculation helps you make informed pricing decisions for your Flipkart business.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Flipkart Sellers:</strong> Accurately calculate profit margins for products to optimize pricing strategies.</li>
      <li><strong>E-commerce Entrepreneurs:</strong> Evaluate the profitability of different product categories and seller tiers.</li>
      <li><strong>Business Owners:</strong> Make data-driven decisions about which products to sell on Flipkart.</li>
      <li><strong>New Sellers:</strong> Understand the complete fee structure before listing products on Flipkart.</li>
      <li><strong>Experienced Sellers:</strong> Quickly calculate margins for new products or during promotional periods.</li>
      <li><strong>Product Managers:</strong> Analyze the impact of discounts and promotions on overall profitability.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: What is the difference between FBF and Non-FBF commission?</strong><br>
      A: FBF (Flipkart Advantage) sellers get lower commission rates as Flipkart handles storage, packing, and shipping. Non-FBF sellers have higher commission but handle these aspects themselves.</p>

    <p><strong>Q: How is volumetric weight calculated for shipping?</strong><br>
      A: Volumetric weight = (Length × Breadth × Height) / 5000 (in cm). Flipkart charges shipping based on whichever is higher - actual weight or volumetric weight.</p>

    <p><strong>Q: Is my financial data kept private when I use this calculator?</strong><br>
      A: Absolutely. All calculations happen locally in your browser. We don't store, transmit, or have access to any of the data you enter into the calculator.</p>

    <p><strong>Q: Can I use this calculator on my mobile phone?</strong><br>
      A: Yes, our website and calculator are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets.</p>

    <p><strong>Q: Do I need to create an account or pay to use this?</strong><br>
      A: No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees.</p>

    <h3>Why Choose Our Flipkart Fee Calculator?</h3>
    <p>Our <strong>Flipkart Fee Calculator</strong> stands out from other tools because of its accuracy, comprehensiveness, and privacy features. Unlike many online calculators, we include all relevant Flipkart fees and automatically calculate shipping based on package dimensions. The tool works entirely in your browser, ensuring your sensitive financial information remains completely private. The interface is clean and intuitive, making it easy for anyone to calculate Flipkart profit margins without financial expertise.</p>

    <h3>Understanding Flipkart Fee Structure</h3>
    <p>Flipkart's fee structure includes several components that impact your final profit margin. The main fees are commission (which varies by category and seller tier), shipping fees (based on weight and distance), fixed fee, collection fee, and GST on these fees. Additionally, sellers may incur costs for packing, returns (RTO), and other value-added services. Understanding this complete fee structure is essential for setting profitable prices on the platform.</p>

    <h3>Common Applications of Flipkart Fee Calculation</h3>
    <p>Fee calculation has numerous practical applications across various business scenarios:</p>
    <ul>
      <li><strong>Pricing Strategy:</strong> Determine optimal selling prices to achieve target profit margins</li>
      <li><strong>Product Selection:</strong> Evaluate which products are most profitable to sell on Flipkart</li>
      <li><strong>Promotion Planning:</strong> Calculate the impact of discounts and promotions on profitability</li>
      <li><strong>Tier Optimization:</strong> Determine if upgrading your seller tier would be financially beneficial</li>
      <li><strong>Inventory Management:</strong> Make informed decisions about which products to restock based on profitability</li>
    </ul>
  </div>
</div>

<!-- Rate Card Modal -->
<div id="rateCardModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Flipkart Rate Card</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
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
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeRateCard">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // Rate card data
    const rateCard = {
      'Platinum': { 'Non-FBF': 63, 'FBF': 55 },
      'Gold': { 'Non-FBF': 65, 'FBF': 57 },
      'Silver': { 'Non-FBF': 69, 'FBF': 61 },
      'Bronze': { 'Non-FBF': 69, 'FBF': 61 }
    };

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
    const volumetricWeightDisplay = document.getElementById('volumetricWeightDisplay');
    const nationalShippingInput = document.getElementById('nationalShipping');
    const discountInput = document.getElementById('discount');
    
    // Modal elements
    const rateCardModal = document.getElementById('rateCardModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const closeRateCard = document.getElementById('closeRateCard');
    const infoIcon = document.getElementById('infoIcon');

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

    // Update shipping when dimensions change
    [lengthInput, breadthInput, heightInput].forEach(input => {
      input.addEventListener('input', updateShippingFee);
    });

    // Calculate volumetric weight
    function calculateVolumetricWeight() {
      const length = parseFloat(lengthInput.value) || 0;
      const breadth = parseFloat(breadthInput.value) || 0;
      const height = parseFloat(heightInput.value) || 0;
      
      const volumetricWeight = (length * breadth * height) / 5000;
      volumetricWeightDisplay.textContent = `Volumetric Weight: ${volumetricWeight.toFixed(2)} kg`;
      
      return volumetricWeight;
    }

    // Calculate shipping fee based on volumetric weight
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

    // Update shipping fee when dimensions change
    function updateShippingFee() {
      const volumetricWeight = calculateVolumetricWeight();
      const shippingFee = calculateShippingFee(volumetricWeight);
      nationalShippingInput.value = shippingFee.toFixed(2);
    }

    // Calculate all fees and margins
    function calculateFees() {
      // Get input values
      const sellingPrice = parseFloat(document.getElementById('sellingPrice').value) || 0;
      const discountValue = discountInput.value;
      const productPrice = parseFloat(document.getElementById('productPrice').value) || 0;
      const commissionType = document.getElementById('commissionType').value;
      const sellerTier = document.getElementById('sellerTier').value;
      const returnRto = parseFloat(document.getElementById('returnRto').value) || 0;
      const packingFees = parseFloat(document.getElementById('packingFees').value) || 0;
      const gstRate = parseFloat(document.getElementById('gst').value) || 0;
      
      // Validate inputs
      if (sellingPrice <= 0) {
        showAlert('Please enter a valid selling price.', 'error');
        return;
      }
      
      // Calculate discount
      const discountAmount = parseDiscount(discountValue, sellingPrice);
      const finalSellingPrice = sellingPrice - discountAmount;
      
      // Calculate volumetric weight and shipping
      const volumetricWeight = calculateVolumetricWeight();
      const shippingFee = calculateShippingFee(volumetricWeight);
      
      // Get commission and fixed fees from rate card
      const commissionFee = rateCard[sellerTier][commissionType];
      
      // Calculate GST on final selling price
      const gstAmount = (finalSellingPrice * gstRate) / 100;
      
      // Calculate total Flipkart fees
      const totalFees = commissionFee + shippingFee + returnRto + packingFees;
      
      // Calculate gross margin (excluding GST)
      const grossMargin = finalSellingPrice - totalFees - productPrice;
      
      // Update counters
      document.getElementById('commissionCount').textContent = `₹${commissionFee.toFixed(2)}`;
      document.getElementById('shippingCount').textContent = `₹${shippingFee.toFixed(2)}`;
      document.getElementById('otherFeesCount').textContent = `₹${(returnRto + packingFees).toFixed(2)}`;
      document.getElementById('totalFeesCount').textContent = `₹${totalFees.toFixed(2)}`;
      
      // Update results in the UI
      document.getElementById('sellingPriceResult').textContent = `₹${sellingPrice.toFixed(2)}`;
      document.getElementById('discountResult').textContent = `₹${discountAmount.toFixed(2)}`;
      document.getElementById('finalSellingPrice').textContent = `₹${finalSellingPrice.toFixed(2)}`;
      document.getElementById('commissionFee').textContent = `₹${commissionFee.toFixed(2)}`;
      document.getElementById('shippingFee').textContent = `₹${shippingFee.toFixed(2)}`;
      document.getElementById('rtoFee').textContent = `₹${returnRto.toFixed(2)}`;
      document.getElementById('packingFee').textContent = `₹${packingFees.toFixed(2)}`;
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
      document.getElementById('returnRto').value = '';
      document.getElementById('packingFees').value = '';
      resultSection.style.display = 'none';
      
      // Reset counters
      document.getElementById('commissionCount').textContent = '₹0.00';
      document.getElementById('shippingCount').textContent = '₹0.00';
      document.getElementById('otherFeesCount').textContent = '₹0.00';
      document.getElementById('totalFeesCount').textContent = '₹0.00';
      
      updateShippingFee();
      showAlert('Inputs cleared.', 'success');
    }

    function saveResults() {
      if (resultSection.style.display === 'none') {
        showAlert('No results to save. Please calculate fees first.', 'error');
        return;
      }
      
      // Create a text representation of the results
      const productName = document.getElementById('productName').value || 'Unnamed Product';
      const resultText = `Flipkart Fee Calculator Results
Product: ${productName}
Selling Price: ${document.getElementById('sellingPriceResult').textContent}
Discount Applied: ${document.getElementById('discountResult').textContent}
Final Selling Price: ${document.getElementById('finalSellingPrice').textContent}
Commission Fee: ${document.getElementById('commissionFee').textContent}
Shipping Fee: ${document.getElementById('shippingFee').textContent}
Return RTO: ${document.getElementById('rtoFee').textContent}
Packing Fees: ${document.getElementById('packingFee').textContent}
GST: ${document.getElementById('gstFee').textContent}
Total Flipkart Fees: ${document.getElementById('totalFees').textContent}
Gross Margin: ${document.getElementById('grossMargin').textContent}
Calculated on: ${new Date().toLocaleString()}`;
      
      // Create a blob and download link
      const blob = new Blob([resultText], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'flipkart_fee_calculation.txt';
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
    updateShippingFee();
  });
</script>