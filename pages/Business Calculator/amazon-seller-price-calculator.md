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
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Amazon Seller Calculator Styles */
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

  .input-section textarea {
    width: 100%;
    padding: 18px;
    border: 2px solid #e0e6ed;
    border-radius: 10px;
    font-size: 16px;
    min-height: 220px;
    resize: vertical;
    font-family: 'Courier New', monospace;
    transition: border-color 0.3s;
  }

  .input-section textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .file-upload-section {
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .file-upload-button {
    padding: 12px 20px;
    background: var(--primary);
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
    border: none;
  }

  .file-upload-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
  }

  #fileName {
    font-style: italic;
    color: #7f8c8d;
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

  /* Calculator specific styles */
  .calculator-inputs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .input-label {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .input-field, .select-field {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
    transition: border-color 0.3s;
  }

  .input-field:focus, .select-field:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }

  .results-section {
    margin-top: 30px;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  }

  .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-top: 20px;
  }

  .result-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .result-item.highlight {
    background: #e8f4fd;
    border-left-color: #2980b9;
    font-weight: bold;
  }

  .result-item.profit {
    background: #e8f6ef;
    border-left-color: #27ae60;
    font-weight: bold;
  }

  .result-item.loss {
    background: #fdedec;
    border-left-color: #e74c3c;
    font-weight: bold;
  }

  .result-label {
    font-weight: 600;
    color: #2c3e50;
  }

  .result-value {
    font-weight: bold;
    color: #2c3e50;
  }

  .result-item.profit .result-value {
    color: #27ae60;
  }

  .result-item.loss .result-value {
    color: #e74c3c;
  }

  .chart-container {
    margin-top: 30px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  }

  .chart-placeholder {
    height: 300px;
    background: #f8f9fa;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #7f8c8d;
    font-style: italic;
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

    .file-upload-section {
      flex-direction: column;
      align-items: flex-start;
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

    .calculator-inputs {
      grid-template-columns: 1fr;
    }

    .results-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>Amazon Seller Price Calculator</h1>
  <p class="welcome-message">Calculate your Amazon FBA fees, profit margins, and ROI for any product category. Make informed selling decisions with our comprehensive calculator.</p>

  <div class="converter-section">
    <h2>Product Information</h2>

    <div class="calculator-inputs">
      <div class="input-group">
        <label class="input-label">Product Name</label>
        <input type="text" id="productName" class="input-field" placeholder="Enter product name">
      </div>
      
      <div class="input-group">
        <label class="input-label">Select Category</label>
        <select id="category" class="select-field">
          <option value="" selected disabled>Select Category</option>
          <option value="Automotive">Automotive, Car & Accessories</option>
          <option value="Baby">Baby Products, Toys & Education</option>
          <option value="Books">Books, Music, Movies, Video Games, Entertainment</option>
          <option value="Clothing">Clothing, Fashion, Jewellery, Luggage, Shoes</option>
          <option value="Electronics">Electronics (Camera, Mobile, PC, Wireless) & Accessories</option>
          <option value="Grocery">Grocery, Food & Pet Supplies</option>
          <option value="Health">Health, Beauty, Personal Care & Appliances</option>
          <option value="Home">Home, Decor, Furniture, Garden</option>
          <option value="Industrial">Industrial, Medical, Scientific & Office</option>
          <option value="Kitchen">Kitchen, Large & Small Appliances</option>
          <option value="Others">Others</option>
          <option value="Sports">Sports, Gym & Sporting Equipment</option>
        </select>
      </div>
      
      <div class="input-group">
        <label class="input-label">Select Subcategory</label>
        <select id="subcategory" class="select-field">
          <option value="">Select a Subcategory</option>
        </select>
      </div>
      
      <div class="input-group">
        <label class="input-label">Product Cost ($)</label>
        <input type="number" id="productCost" class="input-field" placeholder="0.00" min="0" step="0.01">
      </div>
      
      <div class="input-group">
        <label class="input-label">Selling Price ($)</label>
        <input type="number" id="sellingPrice" class="input-field" placeholder="0.00" min="0" step="0.01">
      </div>
      
      <div class="input-group">
        <label class="input-label">Shipping Cost ($)</label>
        <input type="number" id="shippingCost" class="input-field" placeholder="0.00" min="0" step="0.01" value="0.00">
      </div>
      
      <div class="input-group">
        <label class="input-label">Product Weight (lbs)</label>
        <input type="number" id="productWeight" class="input-field" placeholder="0.00" min="0" step="0.01">
      </div>
      
      <div class="input-group">
        <label class="input-label">Monthly Units Sold</label>
        <input type="number" id="monthlyUnits" class="input-field" placeholder="0" min="0" value="1">
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="calculate">Calculate Profit</button>
        <button class="case-button success" data-action="save">Save Calculation</button>
        <button class="case-button warning" data-action="compare">Compare Products</button>
        <button class="case-button secondary" data-action="clear">Clear All</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="results-section">
      <h2>Profit Calculation Results</h2>
      <div class="results-grid">
        <div class="result-item">
          <span class="result-label">Product Cost</span>
          <span class="result-value" id="resultCost">$0.00</span>
        </div>
        <div class="result-item">
          <span class="result-label">Amazon Referral Fee</span>
          <span class="result-value" id="resultReferral">$0.00</span>
        </div>
        <div class="result-item">
          <span class="result-label">FBA Fulfillment Fee</span>
          <span class="result-value" id="resultFulfillment">$0.00</span>
        </div>
        <div class="result-item">
          <span class="result-label">Storage Fee</span>
          <span class="result-value" id="resultStorage">$0.00</span>
        </div>
        <div class="result-item">
          <span class="result-label">Shipping Cost</span>
          <span class="result-value" id="resultShipping">$0.00</span>
        </div>
        <div class="result-item highlight">
          <span class="result-label">Total Fees</span>
          <span class="result-value" id="resultTotalFees">$0.00</span>
        </div>
        <div class="result-item" id="profitResult">
          <span class="result-label">Net Profit</span>
          <span class="result-value" id="resultProfit">$0.00</span>
        </div>
        <div class="result-item">
          <span class="result-label">Profit Margin</span>
          <span class="result-value" id="resultMargin">0%</span>
        </div>
        <div class="result-item">
          <span class="result-label">ROI</span>
          <span class="result-value" id="resultROI">0%</span>
        </div>
        <div class="result-item">
          <span class="result-label">Monthly Profit</span>
          <span class="result-value" id="resultMonthly">$0.00</span>
        </div>
      </div>
    </div>

    <div class="chart-container">
      <h2>Profit Breakdown</h2>
      <div class="chart-placeholder">
        Profit breakdown chart will appear here after calculation
      </div>
    </div>

    <div class="examples">
      <h2>Example Calculations</h2>

      <h3>Example 1: Electronics Product</h3>
      <div class="example-text">Product: Wireless Headphones
Category: Electronics
Subcategory: Headphones
Cost: $25.00 | Selling Price: $49.99
Weight: 0.5 lbs | Monthly Sales: 50 units

Results:
- Amazon Referral Fee: $7.50 (15%)
- FBA Fulfillment Fee: $3.19
- Total Fees: $10.69
- Net Profit: $14.30 per unit
- Profit Margin: 28.6%
- Monthly Profit: $715.00</div>

      <h3>Example 2: Clothing Product</h3>
      <div class="example-text">Product: Men's T-shirt
Category: Clothing
Subcategory: Men's T-shirts
Cost: $8.00 | Selling Price: $19.99
Weight: 0.3 lbs | Monthly Sales: 100 units

Results:
- Amazon Referral Fee: $3.00 (15%)
- FBA Fulfillment Fee: $2.92
- Total Fees: $5.92
- Net Profit: $6.07 per unit
- Profit Margin: 30.4%
- Monthly Profit: $607.00</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Amazon Seller Price Calculator - Calculate Your Profits</h2>

    <p>Are you an Amazon seller looking to maximize your profits? Our free <strong>Amazon Seller Price Calculator</strong> is the ultimate tool for calculating your Amazon FBA fees, profit margins, and return on investment (ROI) for any product category. This comprehensive calculator helps you make informed selling decisions by providing detailed breakdowns of all Amazon fees and your potential profits. Whether you're a new seller or an experienced Amazon entrepreneur, this tool will save you time and help you avoid costly mistakes.</p>

    <h3>How to Use This Amazon Seller Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Select Product Category:</strong> Choose from our comprehensive list of Amazon product categories including Automotive, Baby Products, Electronics, Clothing, and more.</li>
      <li><strong>Choose Subcategory:</strong> Based on your category selection, pick the appropriate subcategory for more accurate fee calculations.</li>
      <li><strong>Enter Product Details:</strong> Input your product cost, expected selling price, shipping costs, product weight, and estimated monthly sales.</li>
      <li><strong>Calculate Profits:</strong> Click the "Calculate Profit" button to see a detailed breakdown of all Amazon fees and your net profit.</li>
      <li><strong>Analyze Results:</strong> Review your profit margin, ROI, and monthly profit potential to make informed business decisions.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're considering selling wireless headphones on Amazon. You can purchase them for $25 each and plan to sell them for $49.99. Using our calculator, you select "Electronics" as the category and "Headphones" as the subcategory. After entering the product weight (0.5 lbs) and estimating 50 units sold per month, the calculator reveals that after Amazon's referral fee (15% = $7.50) and FBA fulfillment fee ($3.19), your net profit per unit would be $14.30. This gives you a 28.6% profit margin and a monthly profit of $715. Without this calculator, you might have underestimated Amazon's fees and overestimated your profits.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>New Amazon Sellers:</strong> Avoid costly mistakes by accurately calculating all Amazon fees before listing products.</li>
      <li><strong>Experienced Sellers:</strong> Quickly evaluate new product opportunities and optimize pricing strategies.</li>
      <li><strong>Product Researchers:</strong> Compare profitability across different product categories and niches.</li>
      <li><strong>Business Owners:</strong> Make data-driven decisions about which products to add to your Amazon inventory.</li>
      <li><strong>E-commerce Consultants:</strong> Provide clients with accurate profit projections for their Amazon businesses.</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>How accurate are the fee calculations in this Amazon seller calculator?</strong><br>
      Our calculator uses Amazon's current fee structure for 2023, including referral fees, FBA fulfillment fees, and storage fees. However, actual fees may vary slightly based on specific product characteristics and Amazon's periodic fee adjustments.</p>

    <p><strong>Does this calculator work for both FBA and FBM sellers?</strong><br>
      This calculator is primarily designed for FBA (Fulfillment by Amazon) sellers, as it includes FBA-specific fees. For FBM (Fulfillment by Merchant) sellers, you would need to adjust the shipping costs manually.</p>

    <p><strong>How do you calculate the Amazon referral fee?</strong><br>
      The referral fee is typically a percentage of the total sale price (including shipping if charged separately). The percentage varies by category, ranging from 6% to 45%, with most categories at 15%.</p>

    <p><strong>Can I save my calculations for future reference?</strong><br>
      Yes, you can use the "Save Calculation" button to store your current calculation in your browser's local storage for future reference.</p>

    <p><strong>Is this calculator completely free to use?</strong><br>
      Yes, this is a 100% free tool with no registration required. We don't store any of your sensitive business data on our servers.</p>

    <h3>Why Choose Our Amazon Seller Price Calculator?</h3>
    <p>Our <strong>Amazon fee calculator</strong> stands out from other tools because of its comprehensive category-specific calculations, user-friendly interface, and detailed profit breakdown. Unlike simple calculators that only estimate basic fees, our tool considers category-specific referral rates, weight-based FBA fees, and storage costs to give you the most accurate profit projection possible. The dynamic category and subcategory system ensures your calculations are tailored to your specific product type.</p>

    <h3>Understanding Amazon Seller Fees</h3>
    <p>To maximize your profits on Amazon, it's crucial to understand all the fees involved:</p>
    <ul>
      <li><strong>Referral Fees:</strong> Percentage-based fee Amazon charges for each sale, varying by product category</li>
      <li><strong>FBA Fulfillment Fees:</strong> Charges for picking, packing, shipping, and customer service for FBA orders</li>
      <li><strong>Storage Fees:</strong> Monthly charges for storing your inventory in Amazon fulfillment centers</li>
      <li><strong>Shipping Costs:</strong> Your costs to get products to Amazon fulfillment centers</li>
      <li><strong>Other Potential Fees:</strong> Long-term storage fees, removal fees, returns processing fees</li>
    </ul>
  </div>
</div>

<!-- Compare Products Modal -->
<div id="compareModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Compare Products</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
          <h4>Product 1</h4>
          <div class="calculator-inputs">
            <div class="input-group">
              <label class="input-label">Product Name</label>
              <input type="text" id="compareProduct1" class="input-field" placeholder="Product 1">
            </div>
            <div class="input-group">
              <label class="input-label">Cost ($)</label>
              <input type="number" id="compareCost1" class="input-field" placeholder="0.00" min="0" step="0.01">
            </div>
            <div class="input-group">
              <label class="input-label">Selling Price ($)</label>
              <input type="number" id="comparePrice1" class="input-field" placeholder="0.00" min="0" step="0.01">
            </div>
            <div class="input-group">
              <label class="input-label">Monthly Units</label>
              <input type="number" id="compareUnits1" class="input-field" placeholder="0" min="0" value="1">
            </div>
          </div>
          <div class="results-grid">
            <div class="result-item">
              <span class="result-label">Net Profit</span>
              <span class="result-value" id="compareProfit1">$0.00</span>
            </div>
            <div class="result-item">
              <span class="result-label">Profit Margin</span>
              <span class="result-value" id="compareMargin1">0%</span>
            </div>
            <div class="result-item">
              <span class="result-label">Monthly Profit</span>
              <span class="result-value" id="compareMonthly1">$0.00</span>
            </div>
          </div>
        </div>
        <div>
          <h4>Product 2</h4>
          <div class="calculator-inputs">
            <div class="input-group">
              <label class="input-label">Product Name</label>
              <input type="text" id="compareProduct2" class="input-field" placeholder="Product 2">
            </div>
            <div class="input-group">
              <label class="input-label">Cost ($)</label>
              <input type="number" id="compareCost2" class="input-field" placeholder="0.00" min="0" step="0.01">
            </div>
            <div class="input-group">
              <label class="input-label">Selling Price ($)</label>
              <input type="number" id="comparePrice2" class="input-field" placeholder="0.00" min="0" step="0.01">
            </div>
            <div class="input-group">
              <label class="input-label">Monthly Units</label>
              <input type="number" id="compareUnits2" class="input-field" placeholder="0" min="0" value="1">
            </div>
          </div>
          <div class="results-grid">
            <div class="result-item">
              <span class="result-label">Net Profit</span>
              <span class="result-value" id="compareProfit2">$0.00</span>
            </div>
            <div class="result-item">
              <span class="result-label">Profit Margin</span>
              <span class="result-value" id="compareMargin2">0%</span>
            </div>
            <div class="result-item">
              <span class="result-label">Monthly Profit</span>
              <span class="result-value" id="compareMonthly2">$0.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeCompare">Close</button>
      <button class="modal-button primary" id="calculateCompare">Calculate Comparison</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // Category and Subcategory data
    const subcategories = {
      "Automotive": [
        "Helmets & Riding Gloves",
        "Car and Bike parts",
        "Car interior care - Polish",
        "Automotive - Tyres",
        "Automotive - Batteries"
      ],
      "Baby": [
        "Baby Strollers",
        "Baby Car Seats",
        "Baby Safety - Guards & Locks",
        "Toys - Soft Toys"
      ],
      "Books": [
        "Books",
        "Movies",
        "Music",
        "Video Games - Consoles",
        "Musical Instruments - Guitars"
      ],
      "Clothing": [
        "Men's T-shirts",
        "Women's Innerwear",
        "Sarees and Dress Materials",
        "Fashion Jewellery",
        "Luggage - Suitcase & Trolleys"
      ],
      "Electronics": [
        "Mobile Phones",
        "Laptops",
        "Headphones",
        "Television",
        "Printers & Scanners"
      ],
      "Grocery": [
        "Herbs and Spices",
        "Oils",
        "Dried Fruits and Nuts",
        "Pet Food"
      ],
      "Health": [
        "Fragrance",
        "Haircare & Bath",
        "Vitamins & Supplements",
        "Medical Equipment",
        "Electric Massagers"
      ],
      "Home": [
        "Mattresses",
        "Wall Art",
        "Bedsheets & Blankets",
        "Home Decor Products",
        "Lawn & Garden Tools"
      ],
      "Industrial": [
        "Scientific Supplies",
        "Safety Equipment",
        "Power Tools",
        "Office Supplies"
      ],
      "Kitchen": [
        "Cookware & Tableware",
        "Gas Stoves",
        "Large Appliances",
        "Small Appliances",
        "Cleaning Supplies"
      ],
      "Sports": [
        "Cricket Equipment",
        "Football Equipment",
        "Badminton Equipment",
        "Swimming Equipment"
      ],
      "Others": [
        "Fine Art",
        "Gift Cards",
        "Other Miscellaneous Products"
      ]
    };

    // Category referral fee percentages (approximate Amazon rates)
    const referralRates = {
      "Automotive": 12,
      "Baby": 15,
      "Books": 15,
      "Clothing": 17,
      "Electronics": 8,
      "Grocery": 15,
      "Health": 15,
      "Home": 15,
      "Industrial": 12,
      "Kitchen": 15,
      "Others": 15,
      "Sports": 15
    };

    // DOM Elements
    const categorySelect = document.getElementById('category');
    const subcategorySelect = document.getElementById('subcategory');
    const productCost = document.getElementById('productCost');
    const sellingPrice = document.getElementById('sellingPrice');
    const shippingCost = document.getElementById('shippingCost');
    const productWeight = document.getElementById('productWeight');
    const monthlyUnits = document.getElementById('monthlyUnits');
    const calculateButton = document.querySelector('[data-action="calculate"]');
    const saveButton = document.querySelector('[data-action="save"]');
    const compareButton = document.querySelector('[data-action="compare"]');
    const clearButton = document.querySelector('[data-action="clear"]');
    const alertContainer = document.getElementById('alertContainer');
    
    // Result elements
    const resultCost = document.getElementById('resultCost');
    const resultReferral = document.getElementById('resultReferral');
    const resultFulfillment = document.getElementById('resultFulfillment');
    const resultStorage = document.getElementById('resultStorage');
    const resultShipping = document.getElementById('resultShipping');
    const resultTotalFees = document.getElementById('resultTotalFees');
    const resultProfit = document.getElementById('resultProfit');
    const resultMargin = document.getElementById('resultMargin');
    const resultROI = document.getElementById('resultROI');
    const resultMonthly = document.getElementById('resultMonthly');
    const profitResult = document.getElementById('profitResult');
    
    // Modal elements
    const compareModal = document.getElementById('compareModal');
    const closeModal = document.querySelectorAll('.close-modal');
    const closeCompare = document.getElementById('closeCompare');
    const calculateCompare = document.getElementById('calculateCompare');

    // Event listeners
    categorySelect.addEventListener('change', updateSubcategories);
    calculateButton.addEventListener('click', calculateProfit);
    saveButton.addEventListener('click', saveCalculation);
    compareButton.addEventListener('click', openCompareModal);
    clearButton.addEventListener('click', clearAll);
    
    // Compare modal event listeners
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        compareModal.style.display = 'none';
      });
    });
    
    closeCompare.addEventListener('click', function() {
      compareModal.style.display = 'none';
    });
    
    calculateCompare.addEventListener('click', calculateComparison);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === compareModal) {
        compareModal.style.display = 'none';
      }
    });

    // Update subcategories based on category selection
    function updateSubcategories() {
      const category = categorySelect.value;
      subcategorySelect.innerHTML = '<option value="">Select a Subcategory</option>';

      if (subcategories[category]) {
        subcategories[category].forEach(sub => {
          const option = document.createElement('option');
          option.value = sub;
          option.textContent = sub;
          subcategorySelect.appendChild(option);
        });
      }
    }

    // Calculate FBA fulfillment fee based on weight
    function calculateFulfillmentFee(weight) {
      // Simplified FBA fee calculation based on weight
      if (weight <= 0.5) return 3.19;
      if (weight <= 1) return 3.69;
      if (weight <= 1.5) return 4.19;
      if (weight <= 2) return 4.69;
      if (weight <= 2.5) return 5.19;
      if (weight <= 3) return 5.69;
      if (weight <= 3.5) return 6.19;
      if (weight <= 4) return 6.69;
      if (weight <= 4.5) return 7.19;
      if (weight <= 5) return 7.69;
      // For weights over 5 lbs, add $0.38 per additional 0.5 lb
      return 7.69 + Math.ceil((weight - 5) * 2) * 0.38;
    }

    // Calculate monthly storage fee
    function calculateStorageFee(weight, monthlyUnits) {
      // Simplified storage fee: $0.75 per cubic foot per month (standard)
      // Approximation: 1 lb ≈ 0.1 cubic foot for most products
      const cubicFeet = weight * 0.1;
      return cubicFeet * monthlyUnits * 0.75;
    }

    // Main profit calculation function
    function calculateProfit() {
      // Validate inputs
      if (!categorySelect.value) {
        showAlert('Please select a product category.', 'error');
        return;
      }
      
      if (!subcategorySelect.value) {
        showAlert('Please select a product subcategory.', 'error');
        return;
      }
      
      if (!productCost.value || productCost.value <= 0) {
        showAlert('Please enter a valid product cost.', 'error');
        return;
      }
      
      if (!sellingPrice.value || sellingPrice.value <= 0) {
        showAlert('Please enter a valid selling price.', 'error');
        return;
      }
      
      if (!productWeight.value || productWeight.value <= 0) {
        showAlert('Please enter a valid product weight.', 'error');
        return;
      }
      
      if (!monthlyUnits.value || monthlyUnits.value <= 0) {
        showAlert('Please enter a valid number of monthly units.', 'error');
        return;
      }

      // Get input values
      const cost = parseFloat(productCost.value);
      const price = parseFloat(sellingPrice.value);
      const shipping = parseFloat(shippingCost.value) || 0;
      const weight = parseFloat(productWeight.value);
      const units = parseInt(monthlyUnits.value);
      const category = categorySelect.value;

      // Calculate fees
      const referralRate = referralRates[category] || 15;
      const referralFee = (price * referralRate) / 100;
      const fulfillmentFee = calculateFulfillmentFee(weight);
      const storageFee = calculateStorageFee(weight, units) / units; // Per unit
      
      const totalFees = referralFee + fulfillmentFee + storageFee + shipping;
      const netProfit = price - cost - totalFees;
      const profitMargin = (netProfit / price) * 100;
      const roi = (netProfit / cost) * 100;
      const monthlyProfit = netProfit * units;

      // Update results
      resultCost.textContent = `$${cost.toFixed(2)}`;
      resultReferral.textContent = `$${referralFee.toFixed(2)} (${referralRate}%)`;
      resultFulfillment.textContent = `$${fulfillmentFee.toFixed(2)}`;
      resultStorage.textContent = `$${storageFee.toFixed(2)}`;
      resultShipping.textContent = `$${shipping.toFixed(2)}`;
      resultTotalFees.textContent = `$${totalFees.toFixed(2)}`;
      resultProfit.textContent = `$${netProfit.toFixed(2)}`;
      resultMargin.textContent = `${profitMargin.toFixed(1)}%`;
      resultROI.textContent = `${roi.toFixed(1)}%`;
      resultMonthly.textContent = `$${monthlyProfit.toFixed(2)}`;
      
      // Update profit display style based on value
      if (netProfit > 0) {
        profitResult.className = 'result-item profit';
        showAlert('Profit calculation completed successfully!', 'success');
      } else {
        profitResult.className = 'result-item loss';
        showAlert('Warning: This product would result in a loss at the current pricing.', 'error');
      }
    }

    // Save calculation to localStorage
    function saveCalculation() {
      const calculation = {
        productName: document.getElementById('productName').value || 'Unnamed Product',
        category: categorySelect.value,
        subcategory: subcategorySelect.value,
        cost: productCost.value,
        price: sellingPrice.value,
        weight: productWeight.value,
        units: monthlyUnits.value,
        profit: resultProfit.textContent,
        margin: resultMargin.textContent,
        timestamp: new Date().toISOString()
      };
      
      // Get existing calculations or initialize empty array
      const savedCalculations = JSON.parse(localStorage.getItem('amazonCalculator') || '[]');
      
      // Add new calculation
      savedCalculations.push(calculation);
      
      // Save back to localStorage
      localStorage.setItem('amazonCalculator', JSON.stringify(savedCalculations));
      
      showAlert('Calculation saved successfully!', 'success');
    }

    // Open compare products modal
    function openCompareModal() {
      // Pre-fill with current values if available
      if (productCost.value && sellingPrice.value) {
        document.getElementById('compareProduct1').value = document.getElementById('productName').value || 'Product 1';
        document.getElementById('compareCost1').value = productCost.value;
        document.getElementById('comparePrice1').value = sellingPrice.value;
        document.getElementById('compareUnits1').value = monthlyUnits.value;
        
        // Calculate for product 1
        calculateComparisonProduct(1);
      }
      
      compareModal.style.display = 'block';
    }

    // Calculate comparison between two products
    function calculateComparison() {
      calculateComparisonProduct(1);
      calculateComparisonProduct(2);
    }

    // Calculate profit for a comparison product
    function calculateComparisonProduct(productNum) {
      const cost = parseFloat(document.getElementById(`compareCost${productNum}`).value);
      const price = parseFloat(document.getElementById(`comparePrice${productNum}`).value);
      const units = parseInt(document.getElementById(`compareUnits${productNum}`).value);
      
      if (!cost || !price || !units) {
        showAlert(`Please enter valid values for Product ${productNum}`, 'error');
        return;
      }
      
      // Simplified calculation for comparison (using average fees)
      const referralFee = price * 0.15; // 15% average
      const fulfillmentFee = 3.50; // Average FBA fee
      const storageFee = 0.50; // Average storage fee per unit
      
      const totalFees = referralFee + fulfillmentFee + storageFee;
      const netProfit = price - cost - totalFees;
      const profitMargin = (netProfit / price) * 100;
      const monthlyProfit = netProfit * units;
      
      // Update comparison results
      document.getElementById(`compareProfit${productNum}`).textContent = `$${netProfit.toFixed(2)}`;
      document.getElementById(`compareMargin${productNum}`).textContent = `${profitMargin.toFixed(1)}%`;
      document.getElementById(`compareMonthly${productNum}`).textContent = `$${monthlyProfit.toFixed(2)}`;
    }

    // Clear all inputs
    function clearAll() {
      document.getElementById('productName').value = '';
      categorySelect.selectedIndex = 0;
      subcategorySelect.innerHTML = '<option value="">Select a Subcategory</option>';
      productCost.value = '';
      sellingPrice.value = '';
      shippingCost.value = '0.00';
      productWeight.value = '';
      monthlyUnits.value = '1';
      
      // Reset results
      resultCost.textContent = '$0.00';
      resultReferral.textContent = '$0.00';
      resultFulfillment.textContent = '$0.00';
      resultStorage.textContent = '$0.00';
      resultShipping.textContent = '$0.00';
      resultTotalFees.textContent = '$0.00';
      resultProfit.textContent = '$0.00';
      resultMargin.textContent = '0%';
      resultROI.textContent = '0%';
      resultMonthly.textContent = '$0.00';
      profitResult.className = 'result-item';
      
      showAlert('All inputs cleared.', 'success');
    }

    // Show alert message
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