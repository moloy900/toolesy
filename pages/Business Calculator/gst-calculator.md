---
layout: default
title: "Online GST Calculator – For Flipkart, Amazon & Sellers"
permalink: /online-gst-calculator-for-flipkart-amazon-sellers/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Online GST Calculator – For Flipkart, Amazon & Sellers</title>
<meta name="description"
  content="Free online GST calculator for Flipkart, Amazon, and other marketplaces. Calculate GST amounts instantly with all Indian tax rates including 0%, 5%, 12%, 18%, and 28%.">
<meta name="keywords"
  content="gst calculator, flipkart gst, amazon gst, marketplace gst, gst calculation, indian tax calculator, gst rates, online gst tool">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* GST Calculator Styles */
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

  .result-item.gst {
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

  .gst-breakdown {
    background: white;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
    border-left: 4px solid #28a745;
  }

  .gst-breakdown h4 {
    color: #28a745;
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

  .gst-rates-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
    margin: 15px 0;
  }

  .gst-rate-option {
    padding: 10px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .gst-rate-option:hover {
    border-color: var(--primary);
    background-color: #f8f9fa;
  }

  .gst-rate-option.active {
    border-color: var(--primary);
    background-color: #e3f2fd;
    font-weight: bold;
  }

  .gst-rate-option .rate {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--primary);
  }

  .gst-rate-option .description {
    font-size: 0.8rem;
    color: #666;
    margin-top: 5px;
  }

  .calculation-type {
    background: white;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
    border: 1px solid #e0e0e0;
  }

  .calculation-option {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .calculation-option:hover {
    background-color: #f8f9fa;
  }

  .calculation-option.active {
    background-color: #e3f2fd;
    border: 1px solid var(--primary);
  }

  .calculation-option input {
    margin: 0;
  }
</style>

<div class="converter-container">
  <h1>Online Free GST Calculator</h1>
  <p class="welcome-message">Calculate GST amounts instantly for Flipkart, Amazon, and other marketplaces. All calculations are in Indian Rupees (₹) with accurate GST rates.</p>

  <div class="converter-section">
    <h2>GST Calculator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Base Amount: </span>
        <span id="baseAmount">₹0.00</span>
      </div>
      <div class="counter-item">
        <span>GST Rate: </span>
        <span id="gstRateDisplay">0%</span>
      </div>
      <div class="counter-item">
        <span>GST Amount: </span>
        <span id="gstAmount">₹0.00</span>
      </div>
      <div class="counter-item">
        <span>Total Amount: </span>
        <span id="totalAmount">₹0.00</span>
      </div>
    </div>

    <div class="calculation-type">
      <h4>Calculation Type <span class="info-tooltip" title="Choose how you want to calculate GST">ℹ️</span></h4>
      
      <div class="calculation-option active" data-type="exclusive">
        <input type="radio" id="exclusive_gst" name="calculation_type" value="exclusive" checked>
        <label for="exclusive_gst">Amount without GST → Add GST</label>
      </div>
      
      <div class="calculation-option" data-type="inclusive">
        <input type="radio" id="inclusive_gst" name="calculation_type" value="inclusive">
        <label for="inclusive_gst">Amount with GST → Remove GST</label>
      </div>
    </div>

    <div class="input-grid">
      <div class="input-group">
        <label for="gst_rate">Select GST Rate * <span class="info-tooltip" title="Choose the applicable GST rate for your product">ℹ️</span></label>
        <select id="gst_rate" required>
          <option value="0">0% - Essential Goods</option>
          <option value="5">5% - Common Use Items</option>
          <option value="12">12% - Standard Rate 1</option>
          <option value="18" selected>18% - Standard Rate 2</option>
          <option value="28">28% - Luxury & Sin Goods</option>
          <option value="40">40% - Special Category</option>
        </select>
      </div>

      <div class="input-group">
        <label for="amount_input" id="amount_label">Amount without GST (₹) <span class="info-tooltip" title="Enter the base amount before GST">ℹ️</span></label>
        <input type="number" id="amount_input" placeholder="Enter Amount" min="0" step="0.01">
      </div>
    </div>

    <div class="gst-rates-grid">
      <div class="gst-rate-option active" data-rate="0">
        <div class="rate">0%</div>
        <div class="description">Essential Goods</div>
      </div>
      <div class="gst-rate-option" data-rate="5">
        <div class="rate">5%</div>
        <div class="description">Common Items</div>
      </div>
      <div class="gst-rate-option" data-rate="12">
        <div class="rate">12%</div>
        <div class="description">Standard 1</div>
      </div>
      <div class="gst-rate-option" data-rate="18">
        <div class="rate">18%</div>
        <div class="description">Standard 2</div>
      </div>
      <div class="gst-rate-option" data-rate="28">
        <div class="rate">28%</div>
        <div class="description">Luxury Goods</div>
      </div>
      <div class="gst-rate-option" data-rate="40">
        <div class="rate">40%</div>
        <div class="description">Special Category</div>
      </div>
    </div>

    <div class="checkbox-group">
      <input type="checkbox" id="show_breakdown" checked>
      <label for="show_breakdown">Show detailed GST breakdown</label>
    </div>

    <div class="button-section">
      <button class="case-button" id="calculateButton">Calculate GST</button>
      <button class="case-button secondary" id="clearButton">Clear</button>
      <button class="case-button success" id="copyButton">Copy Results</button>
      <button class="case-button warning" id="detailsButton">GST Rates Info</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="results-section" id="resultsSection" style="display: none;">
      <h3>GST Calculation Results</h3>
      
      <div class="result-item">
        <span id="resultBaseLabel">Amount without GST:</span>
        <span id="resultBaseAmount">₹0.00</span>
      </div>
      
      <div class="result-item">
        <span>GST Rate:</span>
        <span id="resultGstRate">0%</span>
      </div>
      
      <div class="result-item gst">
        <span>GST Amount:</span>
        <span id="resultGstAmount">₹0.00</span>
      </div>
      
      <div class="result-item total">
        <span id="resultTotalLabel">Total Amount with GST:</span>
        <span id="resultTotalAmount">₹0.00</span>
      </div>

      <div class="gst-breakdown" id="gstBreakdown">
        <h4>GST Breakdown</h4>
        <div class="breakdown-item">
          <span>CGST (<span id="cgstRate">0</span>%):</span>
          <span id="cgstAmount">₹0.00</span>
        </div>
        <div class="breakdown-item">
          <span>SGST (<span id="sgstRate">0</span>%):</span>
          <span id="sgstAmount">₹0.00</span>
        </div>
        <div class="breakdown-item">
          <span>Total GST:</span>
          <span id="breakdownTotalGst">₹0.00</span>
        </div>
      </div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <h3>Example 1: E-commerce Product (18% GST)</h3>
      <div class="example-text">
Amount without GST: ₹1,000
GST Rate: 18%
GST Amount: ₹180
Total with GST: ₹1,180

Breakdown:
- CGST (9%): ₹90
- SGST (9%): ₹90
- Total GST: ₹180
      </div>

      <h3>Example 2: Essential Food Item (0% GST)</h3>
      <div class="example-text">
Amount without GST: ₹500
GST Rate: 0%
GST Amount: ₹0
Total with GST: ₹500

Breakdown:
- CGST (0%): ₹0
- SGST (0%): ₹0
- Total GST: ₹0
      </div>

      <h3>Example 3: Luxury Item (28% GST)</h3>
      <div class="example-text">
Amount without GST: ₹2,500
GST Rate: 28%
GST Amount: ₹700
Total with GST: ₹3,200

Breakdown:
- CGST (14%): ₹350
- SGST (14%): ₹350
- Total GST: ₹700
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online GST Calculator for E-commerce & Marketplaces</h2>

    <p>Our free <strong>GST Calculator</strong> is specifically designed for sellers and buyers on platforms like Flipkart, Amazon, Meesho, and other Indian e-commerce marketplaces. Calculate GST amounts instantly with accurate Indian tax rates including 0%, 5%, 12%, 18%, 28%, and special 40% rates. All calculations are displayed in Indian Rupees (₹) with detailed breakdowns of CGST and SGST components.</p>

    <h3>How to Use This GST Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Select Calculation Type:</strong> Choose whether you want to add GST to a base amount or remove GST from a total amount.</li>
      <li><strong>Choose GST Rate:</strong> Select the applicable GST rate from the dropdown or click on the rate buttons.</li>
      <li><strong>Enter Amount:</strong> Input your amount based on the calculation type selected.</li>
      <li><strong>Calculate:</strong> Click "Calculate GST" to see instant results with detailed breakdown.</li>
      <li><strong>View Breakdown:</strong> Toggle the detailed GST breakdown to see CGST and SGST components.</li>
      <li><strong>Copy Results:</strong> Use the "Copy Results" button to easily share your calculations.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're selling a smartphone on Flipkart for ₹15,000 (excluding GST). The applicable GST rate for electronics is 18%. Using our calculator, you'll instantly see that the GST amount is ₹2,700 (₹1,350 CGST + ₹1,350 SGST), making the total selling price ₹17,700. This helps you set accurate prices and understand your tax liabilities when selling on e-commerce platforms.</p>

    <h3>Understanding GST Rates in India:</h3>
    <p>Goods and Services Tax (GST) in India is divided into multiple tax slabs:</p>
    <ul>
      <li><strong>0% GST:</strong> Essential food items, fresh vegetables, milk, eggs, books, newspapers</li>
      <li><strong>5% GST:</strong> Household necessities, apparel below ₹1000, footwear below ₹500, packaged foods</li>
      <li><strong>12% GST:</strong> Processed foods, computers, mobile phones, business class air tickets</li>
      <li><strong>18% GST:</strong> Most common rate for services, electronics, financial services, restaurants</li>
      <li><strong>28% GST:</strong> Luxury items, automobiles, aerated drinks, premium hotels, cinema tickets</li>
      <li><strong>40% GST:</strong> Special category for luxury cars, tobacco products, pan masala</li>
    </ul>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>E-commerce Sellers:</strong> Calculate accurate pricing for Flipkart, Amazon, Meesho listings</li>
      <li><strong>Small Business Owners:</strong> Understand GST implications on your products and services</li>
      <li><strong>Consumers:</strong> Verify GST amounts on your purchases and invoices</li>
      <li><strong>Accountants:</strong> Quick GST calculations for client invoices and filings</li>
      <li><strong>Students:</strong> Learn about GST calculation and Indian tax structure</li>
      <li><strong>Freelancers:</strong> Calculate GST on your service invoices accurately</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>What is the difference between CGST and SGST?</strong><br>
      CGST (Central GST) is collected by the central government, while SGST (State GST) is collected by the state government. For most intra-state transactions, the GST rate is split equally between CGST and SGST.</p>

    <p><strong>Are GST rates the same for all states in India?</strong><br>
      Yes, GST rates are uniform across all states and union territories in India, making it a unified tax system.</p>

    <p><strong>How do I know which GST rate applies to my product?</strong><br>
      The GST Council has categorized all goods and services into different tax slabs. You can refer to the GST rate finder tool or consult the HSN code classification for your product.</p>

    <p><strong>Can I use this calculator for service GST calculations?</strong><br>
      Yes, this calculator works for both goods and services. Simply select the appropriate GST rate for your service category.</p>

    <p><strong>Is my financial data secure when using this calculator?</strong><br>
      Absolutely. All calculations happen locally in your browser and no data is transmitted to our servers. Your financial information remains completely private.</p>

    <h3>Why Choose Our GST Calculator?</h3>
    <p>Our <strong>GST Calculator</strong> stands out with its e-commerce focus, user-friendly interface, and comprehensive features. Unlike basic calculators, we provide detailed CGST/SGST breakdowns, multiple calculation methods, and preset rates for common e-commerce categories. The tool is optimized for Indian users with rupee formatting and works perfectly on all devices including smartphones and tablets.</p>

    <h3>GST Calculation Formulas Used:</h3>
    <ul>
      <li><strong>Adding GST:</strong> GST Amount = Base Amount × (GST Rate / 100)</li>
      <li><strong>Total with GST:</strong> Total Amount = Base Amount + GST Amount</li>
      <li><strong>Removing GST:</strong> Base Amount = Total Amount / (1 + GST Rate / 100)</li>
      <li><strong>CGST/SGST Split:</strong> For most goods, CGST = SGST = GST Amount / 2</li>
    </ul>

    <h3>Common GST Applications for E-commerce:</h3>
    <p>This calculator is particularly useful for:</p>
    <ul>
      <li><strong>Product Pricing:</strong> Setting accurate MRP including GST for online listings</li>
      <li><strong>Invoice Generation:</strong> Creating GST-compliant invoices for customers</li>
      <li><strong>Tax Planning:</strong> Understanding tax liabilities before listing products</li>
      <li><strong>Price Comparison:</strong> Comparing prices across different GST slabs</li>
      <li><strong>Return Calculations:</strong> Calculating GST on returned products and refunds</li>
    </ul>

    <h3>Tips for E-commerce Sellers:</h3>
    <ul>
      <li>Always verify the correct HSN code and GST rate for your product category</li>
      <li>Include GST clearly in your product pricing and invoices</li>
      <li>Keep updated with GST rate changes announced by the GST Council</li>
      <li>Use this calculator to quickly verify GST amounts during bulk uploads</li>
      <li>Consider GST when planning discounts and promotional pricing</li>
    </ul>
  </div>
</div>

<!-- GST Rates Info Modal -->
<div id="ratesModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">GST Rates Information</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <h4>Standard GST Rate Structure</h4>
      <ul>
        <li><strong>0% GST:</strong> Essential commodities, fresh food, books, newspapers</li>
        <li><strong>5% GST:</strong> Apparel below ₹1000, footwear below ₹500, packaged foods</li>
        <li><strong>12% GST:</strong> Processed foods, mobile phones, computers</li>
        <li><strong>18% GST:</strong> Most services, electronics, financial services</li>
        <li><strong>28% GST:</strong> Luxury cars, aerated drinks, cinema tickets</li>
        <li><strong>40% GST:</strong> Luxury vehicles, tobacco products</li>
      </ul>
      
      <h4>Common E-commerce Categories</h4>
      <ul>
        <li><strong>Electronics:</strong> 18% GST (mobile phones, laptops, accessories)</li>
        <li><strong>Fashion:</strong> 5% (below ₹1000), 12% (above ₹1000)</li>
        <li><strong>Home & Kitchen:</strong> 12-18% depending on product</li>
        <li><strong>Books & Media:</strong> 0% (educational), 12% (other)</li>
        <li><strong>Beauty & Personal Care:</strong> 18%</li>
      </ul>
    </div>
    <div class="modal-footer">
      <button class="modal-button primary" id="closeRates">Close</button>
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
    const ratesModal = document.getElementById('ratesModal');
    const closeRates = document.getElementById('closeRates');
    const closeModal = document.querySelectorAll('.close-modal');
    
    // Input fields
    const gstRateSelect = document.getElementById('gst_rate');
    const amountInput = document.getElementById('amount_input');
    const amountLabel = document.getElementById('amount_label');
    const showBreakdownCheckbox = document.getElementById('show_breakdown');
    const gstBreakdown = document.getElementById('gstBreakdown');
    
    // Calculation type options
    const calculationOptions = document.querySelectorAll('.calculation-option');
    let calculationType = 'exclusive'; // 'exclusive' or 'inclusive'
    
    // GST rate options
    const gstRateOptions = document.querySelectorAll('.gst-rate-option');
    
    // Counter fields
    const baseAmountCounter = document.getElementById('baseAmount');
    const gstRateDisplayCounter = document.getElementById('gstRateDisplay');
    const gstAmountCounter = document.getElementById('gstAmount');
    const totalAmountCounter = document.getElementById('totalAmount');
    
    // Result fields
    const resultBaseLabel = document.getElementById('resultBaseLabel');
    const resultBaseAmount = document.getElementById('resultBaseAmount');
    const resultGstRate = document.getElementById('resultGstRate');
    const resultGstAmount = document.getElementById('resultGstAmount');
    const resultTotalLabel = document.getElementById('resultTotalLabel');
    const resultTotalAmount = document.getElementById('resultTotalAmount');
    
    // Breakdown fields
    const cgstRate = document.getElementById('cgstRate');
    const sgstRate = document.getElementById('sgstRate');
    const cgstAmount = document.getElementById('cgstAmount');
    const sgstAmount = document.getElementById('sgstAmount');
    const breakdownTotalGst = document.getElementById('breakdownTotalGst');

    // Event listeners
    calculateButton.addEventListener('click', calculateGST);
    clearButton.addEventListener('click', clearCalculator);
    copyButton.addEventListener('click', copyResults);
    detailsButton.addEventListener('click', showRatesInfo);
    closeRates.addEventListener('click', closeRatesModal);
    
    // Calculation type selection
    calculationOptions.forEach(option => {
      option.addEventListener('click', function() {
        // Update radio button
        const radio = this.querySelector('input[type="radio"]');
        radio.checked = true;
        
        // Update calculation type
        calculationType = this.getAttribute('data-type');
        
        // Update active class
        calculationOptions.forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
        
        // Update UI labels
        updateCalculationLabels();
      });
    });
    
    // GST rate selection from buttons
    gstRateOptions.forEach(option => {
      option.addEventListener('click', function() {
        const rate = this.getAttribute('data-rate');
        
        // Update select dropdown
        gstRateSelect.value = rate;
        
        // Update active class
        gstRateOptions.forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
      });
    });
    
    // Sync select dropdown with rate buttons
    gstRateSelect.addEventListener('change', function() {
      const rate = this.value;
      
      // Update active rate button
      gstRateOptions.forEach(opt => opt.classList.remove('active'));
      document.querySelector(`.gst-rate-option[data-rate="${rate}"]`).classList.add('active');
    });
    
    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        ratesModal.style.display = 'none';
      });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === ratesModal) {
        ratesModal.style.display = 'none';
      }
    });

    // Toggle breakdown visibility
    showBreakdownCheckbox.addEventListener('change', function() {
      gstBreakdown.style.display = this.checked ? 'block' : 'none';
    });

    function updateCalculationLabels() {
      if (calculationType === 'exclusive') {
        amountLabel.textContent = 'Amount without GST (₹)';
        resultBaseLabel.textContent = 'Amount without GST:';
        resultTotalLabel.textContent = 'Total Amount with GST:';
      } else {
        amountLabel.textContent = 'Amount with GST (₹)';
        resultBaseLabel.textContent = 'Amount without GST:';
        resultTotalLabel.textContent = 'Amount with GST:';
      }
    }

    function calculateGST() {
      // Get input values
      const gstRate = parseFloat(gstRateSelect.value) || 0;
      const amount = parseFloat(amountInput.value) || 0;
      
      // Validate inputs
      if (amount <= 0) {
        showAlert('Please enter a valid amount.', 'error');
        return;
      }
      
      let baseAmount, gstAmount, totalAmount;
      
      if (calculationType === 'exclusive') {
        // Calculate from base amount (add GST)
        baseAmount = amount;
        gstAmount = baseAmount * (gstRate / 100);
        totalAmount = baseAmount + gstAmount;
      } else {
        // Calculate from total amount (remove GST)
        totalAmount = amount;
        baseAmount = totalAmount / (1 + gstRate / 100);
        gstAmount = totalAmount - baseAmount;
      }
      
      // Calculate CGST and SGST (split equally for most goods)
      const cgstRateValue = gstRate / 2;
      const sgstRateValue = gstRate / 2;
      const cgstAmountValue = gstAmount / 2;
      const sgstAmountValue = gstAmount / 2;
      
      // Update counters
      baseAmountCounter.textContent = formatCurrency(baseAmount);
      gstRateDisplayCounter.textContent = `${gstRate}%`;
      gstAmountCounter.textContent = formatCurrency(gstAmount);
      totalAmountCounter.textContent = formatCurrency(totalAmount);
      
      // Update results
      resultBaseAmount.textContent = formatCurrency(baseAmount);
      resultGstRate.textContent = `${gstRate}%`;
      resultGstAmount.textContent = formatCurrency(gstAmount);
      resultTotalAmount.textContent = formatCurrency(totalAmount);
      
      // Update breakdown
      cgstRate.textContent = cgstRateValue;
      sgstRate.textContent = sgstRateValue;
      cgstAmount.textContent = formatCurrency(cgstAmountValue);
      sgstAmount.textContent = formatCurrency(sgstAmountValue);
      breakdownTotalGst.textContent = formatCurrency(gstAmount);
      
      // Show results section
      resultsSection.style.display = 'block';
      
      showAlert('GST calculation completed successfully!', 'success');
    }
    
    function clearCalculator() {
      // Clear inputs
      amountInput.value = '';
      
      // Reset to default calculation type
      document.getElementById('exclusive_gst').checked = true;
      calculationType = 'exclusive';
      calculationOptions.forEach(opt => opt.classList.remove('active'));
      document.querySelector('.calculation-option[data-type="exclusive"]').classList.add('active');
      
      // Reset GST rate to default
      gstRateSelect.value = '18';
      gstRateOptions.forEach(opt => opt.classList.remove('active'));
      document.querySelector('.gst-rate-option[data-rate="18"]').classList.add('active');
      
      // Update labels
      updateCalculationLabels();
      
      // Reset counters
      baseAmountCounter.textContent = '₹0.00';
      gstRateDisplayCounter.textContent = '0%';
      gstAmountCounter.textContent = '₹0.00';
      totalAmountCounter.textContent = '₹0.00';
      
      // Hide results section
      resultsSection.style.display = 'none';
      
      showAlert('Calculator has been cleared.', 'success');
    }
    
    function copyResults() {
      const baseAmount = resultBaseAmount.textContent;
      const gstRate = resultGstRate.textContent;
      const gstAmount = resultGstAmount.textContent;
      const totalAmount = resultTotalAmount.textContent;
      
      const resultsText = `GST Calculation Results:
${resultBaseLabel.textContent} ${baseAmount}
GST Rate: ${gstRate}
GST Amount: ${gstAmount}
${resultTotalLabel.textContent} ${totalAmount}`;
      
      navigator.clipboard.writeText(resultsText).then(() => {
        showAlert('Results copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy results: ' + err, 'error');
      });
    }
    
    function showRatesInfo() {
      ratesModal.style.display = 'block';
    }
    
    function closeRatesModal() {
      ratesModal.style.display = 'none';
    }
    
    function formatCurrency(amount) {
      return '₹' + amount.toLocaleString('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
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

    // Initialize calculator
    updateCalculationLabels();
  });
</script>