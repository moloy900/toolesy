---
layout: default
title: "Indian Free GST Calculator - Calculate GST Online | Add & Remove GST"
permalink: /indian-free-gst-calculator-calculate-gst-online-add-remove-gst/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Indian Free GST Calculator - Calculate GST Online | Add & Remove GST</title>
<meta name="description"
  content="Free Indian GST calculator tool. Calculate GST for 0%, 5%, 12%, 18%, 28% and 40% rates. Add GST or remove GST from any amount. GST inclusive and exclusive calculator. Reverse GST calculator for India.">
<meta name="keywords"
  content="gst calculator india, gst calculator 18%, add gst calculator, remove gst calculator, gst inclusive calculator, gst exclusive calculator, reverse gst calculator, gst tax calculator, gst calculation formula, indian gst calculator">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* GST Calculator Styles */
  .gst-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .gst-container h1 {
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

  .gst-section {
    margin-bottom: 40px;
    padding: 25px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .gst-section h2 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .gst-section p {
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

  .calculator-card {
    background: white;
    border-radius: 12px;
    padding: 30px;
    margin: 20px 0;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .amount-input-group {
    margin-bottom: 25px;
  }

  .amount-input-group label {
    display: block;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 10px;
    font-size: 1.1rem;
  }

  .amount-input {
    width: 100%;
    padding: 15px;
    border: 2px solid #e0e6ed;
    border-radius: 10px;
    font-size: 18px;
    transition: border-color 0.3s;
  }

  .amount-input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .gst-rate-buttons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 12px;
    margin: 20px 0;
  }

  .gst-rate-btn {
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 8px;
    background: white;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    transition: all 0.3s ease;
    text-align: center;
  }

  .gst-rate-btn:hover {
    border-color: var(--primary);
    background: rgba(52, 152, 219, 0.1);
    transform: translateY(-2px);
  }

  .gst-rate-btn.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
  }

  .calculation-type {
    display: flex;
    gap: 15px;
    margin: 20px 0;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .type-btn {
    flex: 1;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 8px;
    background: white;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    text-align: center;
  }

  .type-btn:hover {
    border-color: var(--primary);
    background: rgba(52, 152, 219, 0.1);
  }

  .type-btn.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
  }

  .result-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 25px;
    border-radius: 12px;
    margin: 25px 0;
    color: white;
  }

  .result-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .result-item:last-child {
    border-bottom: none;
  }

  .result-label {
    font-size: 1.1rem;
    font-weight: 500;
  }

  .result-value {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .result-formula {
    margin-top: 20px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    font-size: 0.9rem;
    text-align: center;
  }

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
    margin: 25px 0;
  }

  .action-button {
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

  .action-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .action-button:active {
    transform: translateY(0);
  }

  .action-button.success {
    background: var(--success);
  }

  .action-button.success:hover {
    background: #218838;
  }

  .action-button.secondary {
    background: #6c757d;
  }

  .action-button.secondary:hover {
    background: #5a6268;
  }

  .action-button.warning {
    background: #ffc107;
    color: #212529;
  }

  .action-button.warning:hover {
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

  .gst-rates-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    margin: 20px 0;
  }

  .rate-card {
    text-align: center;
    padding: 15px;
    background: white;
    border-radius: 8px;
    border: 1px solid #e0e6ed;
  }

  .rate-card h4 {
    color: var(--primary);
    margin-bottom: 5px;
    font-size: 1.3rem;
  }

  .rate-card p {
    color: #666;
    margin: 0;
    font-size: 0.9rem;
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
    .counter-wrapper {
      grid-template-columns: 1fr;
    }

    .button-section {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }

    .action-button {
      font-size: 13px;
      padding: 12px 8px;
    }

    .gst-container {
      padding: 15px;
    }

    .gst-section {
      padding: 20px;
      margin-bottom: 30px;
    }

    .gst-container h1 {
      font-size: 2rem;
    }

    .gst-section h2 {
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

    .gst-rate-buttons {
      grid-template-columns: repeat(2, 1fr);
    }

    .calculation-type {
      flex-direction: column;
    }

    .result-value {
      font-size: 1.2rem;
    }
  }
</style>

<div class="gst-container">
  <h1>Indian Free GST Calculator</h1>
  <p class="welcome-message">Calculate GST instantly with India's most accurate GST calculator. Add GST or remove GST from any amount. Support for all GST rates including 0%, 5%, 12%, 18%, 28% and 40%.</p>

  <div class="gst-section">
    <h2>GST Calculator India</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>GST Rates: </span>
        <span id="gstRatesCount">6</span>
      </div>
      <div class="counter-item">
        <span>Calculations: </span>
        <span id="calcCount">0</span>
      </div>
      <div class="counter-item">
        <span>Current GST: </span>
        <span id="currentGST">18%</span>
      </div>
      <div class="counter-item">
        <span>Mode: </span>
        <span id="currentMode">Exclusive</span>
      </div>
    </div>

    <div class="calculator-card">
      <div class="amount-input-group">
        <label>Amount (₹)</label>
        <input type="number" id="amount" class="amount-input" placeholder="Enter amount" value="1000">
      </div>

      <div class="gst-rates-info">
        <div class="rate-card">
          <h4>0%</h4>
          <p>Essential goods</p>
        </div>
        <div class="rate-card">
          <h4>5%</h4>
          <p>Household items</p>
        </div>
        <div class="rate-card">
          <h4>12%</h4>
          <p>Processed food</p>
        </div>
        <div class="rate-card">
          <h4>18%</h4>
          <p>Standard rate</p>
        </div>
        <div class="rate-card">
          <h4>28%</h4>
          <p>Luxury items</p>
        </div>
        <div class="rate-card">
          <h4>40%</h4>
          <p>Sin goods</p>
        </div>
      </div>

      <div class="gst-rate-buttons">
        <button class="gst-rate-btn" data-rate="0">0%</button>
        <button class="gst-rate-btn" data-rate="5">5%</button>
        <button class="gst-rate-btn" data-rate="12">12%</button>
        <button class="gst-rate-btn active" data-rate="18">18%</button>
        <button class="gst-rate-btn" data-rate="28">28%</button>
        <button class="gst-rate-btn" data-rate="40">40%</button>
      </div>

      <div class="calculation-type">
        <button class="type-btn active" data-type="exclusive">
          <i class="fas fa-plus-circle"></i> Add GST (Exclusive)
        </button>
        <button class="type-btn" data-type="inclusive">
          <i class="fas fa-minus-circle"></i> Remove GST (Inclusive)
        </button>
      </div>

      <div class="result-section">
        <div class="result-item">
          <span class="result-label">Actual Amount</span>
          <span class="result-value" id="actualAmount">₹ 1,000.00</span>
        </div>
        <div class="result-item">
          <span class="result-label">GST Amount</span>
          <span class="result-value" id="gstAmount">₹ 180.00</span>
        </div>
        <div class="result-item">
          <span class="result-label">Total Amount</span>
          <span class="result-value" id="totalAmount">₹ 1,180.00</span>
        </div>
        <div class="result-formula" id="formula">
          Formula: Actual Amount + GST Amount = Total Amount
        </div>
      </div>
    </div>

    <div class="button-section">
      <button class="action-button" data-action="calculate">Calculate GST</button>
      <button class="action-button success" data-action="copy">Copy Result</button>
      <button class="action-button" data-action="reset">Reset</button>
      <button class="action-button warning" data-action="reverse">Reverse Calculate</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>GST Calculation Examples</h2>

      <h3>Add GST (Exclusive):</h3>
      <div class="example-text">
        Amount: ₹1,000<br>
        GST Rate: 18%<br>
        GST Amount: ₹180<br>
        Total Amount: ₹1,180
      </div>

      <h3>Remove GST (Inclusive):</h3>
      <div class="example-text">
        Total Amount: ₹1,180<br>
        GST Rate: 18%<br>
        GST Amount: ₹180<br>
        Actual Amount: ₹1,000
      </div>

      <h3>Reverse GST Calculation:</h3>
      <div class="example-text">
        If Total Amount is ₹1,180 and GST Rate is 18%<br>
        Actual Amount = Total Amount ÷ (1 + GST Rate%)<br>
        Actual Amount = ₹1,180 ÷ 1.18 = ₹1,000<br>
        GST Amount = Total Amount - Actual Amount = ₹180
      </div>
    </div>
  </div>

  
<div class="content-placeholder">
  <h2>Free Indian GST Calculator Tool – Fast, Accurate and Easy GST Calculations</h2>

  <p>Managing Goods and Services Tax (GST) calculations can sometimes feel confusing, especially when you are handling invoices, purchase records, product pricing, or tax-related paperwork. Whether you are a business owner, freelancer, accountant, student, shopkeeper, or an everyday consumer, understanding GST is essential in India. Our Indian GST Calculator is designed to simplify the entire process by helping you calculate GST instantly and accurately without requiring any manual calculations.</p>

  <p>This easy-to-use calculator allows you to add GST to a base amount or remove GST from a GST-inclusive amount in just a few seconds. Instead of spending time working through formulas on paper or using complex spreadsheets, you can enter an amount, select the GST rate, choose the calculation type, and receive instant results. The calculator supports commonly used GST slabs including 0%, 5%, 12%, 18%, 28%, and 40%.</p>

  <p>One of the biggest advantages of this GST calculator is convenience. Everything happens directly within your browser, meaning there is no need to download software, create an account, or share sensitive financial information. The tool is suitable for both personal and professional use and helps reduce errors that may occur during manual calculations.</p>

  <h3>How to Use This GST Calculator (Step-by-Step)</h3>
  <ul>
    <li><strong>Enter the Amount:</strong> Type the amount in Indian Rupees (₹) for which you want to calculate GST.</li>
    <li><strong>Select the GST Rate:</strong> Choose the applicable GST percentage such as 0%, 5%, 12%, 18%, 28%, or 40%.</li>
    <li><strong>Choose the Calculation Method:</strong> Select whether you want to add GST to a base amount or remove GST from a GST-inclusive total.</li>
    <li><strong>View Instant Results:</strong> The calculator immediately displays the GST amount, original amount, and final total.</li>
    <li><strong>Copy or Reset:</strong> Save your results or clear the form to perform another calculation.</li>
  </ul>

  <p>The process is designed to be simple enough for beginners while still being useful for professionals who need quick and reliable tax calculations throughout the day.</p>

  <h3>GST Calculation Formulas</h3>

  <p>Understanding the formulas behind GST calculations can help you verify results and gain a better understanding of taxation. Although the calculator performs these calculations automatically, knowing the basics is always beneficial.</p>

  <ul>
    <li><strong>Add GST (Exclusive):</strong> GST Amount = (Amount × GST Rate) ÷ 100</li>
    <li><strong>Total Amount:</strong> Amount + GST Amount</li>
    <li><strong>Remove GST (Inclusive):</strong> Actual Amount = Total Amount ÷ (1 + GST Rate ÷ 100)</li>
    <li><strong>GST Portion:</strong> Total Amount − Actual Amount</li>
    <li><strong>Reverse GST Calculation:</strong> Useful for determining the original value before GST was added.</li>
  </ul>

  <p>These formulas form the foundation of GST calculations across India and are commonly used in accounting, billing, and taxation activities.</p>

  <h3>Understanding GST in India</h3>

  <p>GST, or Goods and Services Tax, is a comprehensive indirect tax introduced to replace multiple taxes that previously existed in India. It was implemented to create a unified taxation system and make tax administration more efficient. Today, GST applies to a wide range of goods and services and plays an important role in the Indian economy.</p>

  <p>The GST structure is designed to simplify taxation while ensuring transparency. Businesses collect GST on behalf of the government and submit the collected tax through the GST system. Because GST affects nearly every commercial transaction, accurate calculations are extremely important.</p>

  <p>For businesses, even small mistakes in GST calculations can create accounting discrepancies and compliance issues. Using a reliable GST calculator helps eliminate these risks and improves accuracy.</p>

  <h3>Real-Life Example and Practical Use Case</h3>

  <p>Suppose a freelance graphic designer provides services worth ₹10,000 to a client. The applicable GST rate is 18%. Instead of manually calculating the tax amount, the designer can use this GST calculator.</p>

  <p>After entering ₹10,000 and selecting 18% GST under the “Add GST” option, the calculator instantly shows:</p>

  <ul>
    <li>Original Amount: ₹10,000</li>
    <li>GST Amount: ₹1,800</li>
    <li>Total Invoice Amount: ₹11,800</li>
  </ul>

  <p>This quick calculation ensures that the invoice is accurate and compliant with GST regulations.</p>

  <p>Similarly, if a customer receives a bill of ₹11,800 inclusive of GST and wants to know the actual service value, they can use the “Remove GST” option. The calculator automatically determines the original amount and GST component.</p>

  <h3>Benefits and Who Should Use This Tool</h3>

  <ul>
    <li><strong>Business Owners:</strong> Generate accurate invoices and estimate GST liabilities.</li>
    <li><strong>Accountants:</strong> Perform routine calculations quickly while reducing manual work.</li>
    <li><strong>Retailers and Shopkeepers:</strong> Add GST to product pricing with confidence.</li>
    <li><strong>Consumers:</strong> Verify tax amounts on receipts and bills.</li>
    <li><strong>Students:</strong> Learn GST concepts and practice taxation calculations.</li>
    <li><strong>Freelancers:</strong> Prepare professional invoices for clients.</li>
    <li><strong>Consultants:</strong> Review tax-inclusive and tax-exclusive pricing.</li>
    <li><strong>Small Enterprises:</strong> Improve bookkeeping and financial planning.</li>
  </ul>

  <p>Because GST is relevant across multiple industries, this calculator can serve a wide range of users regardless of their profession or experience level.</p>

  <h3>Frequently Asked Questions</h3>

  <p><strong>What are the GST rates in India?</strong><br>
  India currently uses several GST slabs including 0%, 5%, 12%, 18%, and 28%. Certain products may attract additional compensation cess, resulting in higher effective tax rates in specific cases.</p>

  <p><strong>What is the difference between GST-inclusive and GST-exclusive pricing?</strong><br>
  GST-exclusive pricing means the tax is added separately to the base amount. GST-inclusive pricing means the displayed amount already includes GST.</p>

  <p><strong>Can I calculate GST on MRP?</strong><br>
  Yes. Since MRP generally includes GST, you can enter the MRP amount and use the remove GST option to determine the original price and tax component.</p>

  <p><strong>Is this calculator suitable for all Indian states?</strong><br>
  Yes. GST follows a nationwide framework. The calculator works for transactions involving CGST, SGST, and IGST because the overall GST rate remains the primary factor in the calculation.</p>

  <p><strong>Can I perform reverse GST calculations?</strong><br>
  Absolutely. The reverse GST function helps determine the pre-tax value from a GST-inclusive amount.</p>

  <p><strong>Is the calculator free to use?</strong><br>
  Yes. The calculator is completely free and available without registration or subscription fees.</p>

  <p><strong>Does the calculator store my information?</strong><br>
  No. Calculations are processed within the browser, helping maintain privacy and security.</p>

  <p><strong>Can I use it on mobile devices?</strong><br>
  Yes. The calculator is responsive and works on smartphones, tablets, laptops, and desktop computers.</p>

  <h3>Why Choose Our GST Calculator?</h3>

  <p>There are many GST calculators available online, but not all of them offer the same combination of speed, accuracy, privacy, and ease of use. Our GST calculator has been created with simplicity in mind while ensuring reliable results for everyday users and professionals alike.</p>

  <p>The interface is clean and straightforward. Users can calculate GST within seconds without navigating through complicated menus. Since all calculations happen locally in the browser, there is no need to worry about sharing confidential business data.</p>

  <p>Another important advantage is flexibility. Whether you need to add GST, remove GST, estimate invoice values, verify tax amounts, or understand pricing structures, the tool can help you perform these tasks efficiently.</p>

  <p>For businesses that process multiple transactions daily, using a dedicated GST calculator can save significant time and reduce the risk of costly calculation errors. For consumers, it offers transparency by showing exactly how much tax is included in a purchase.</p>

  <h3>Common Applications of GST Calculation</h3>

  <p>GST calculations are used in numerous situations across different industries. Understanding these applications highlights why a GST calculator is such a valuable tool.</p>

  <ul>
    <li><strong>Invoice Preparation:</strong> Create professional invoices with accurate tax details.</li>
    <li><strong>Tax Return Preparation:</strong> Estimate and verify GST amounts before filing returns.</li>
    <li><strong>Retail Pricing:</strong> Determine final selling prices for products and services.</li>
    <li><strong>Purchase Verification:</strong> Confirm GST amounts shown on supplier invoices.</li>
    <li><strong>Financial Planning:</strong> Estimate tax obligations and budget accordingly.</li>
    <li><strong>Accounting Entries:</strong> Record GST accurately in financial records.</li>
    <li><strong>E-commerce Operations:</strong> Calculate tax for online product sales.</li>
    <li><strong>Service Billing:</strong> Generate client invoices with correct tax amounts.</li>
  </ul>

  <p>From local shops to large enterprises, GST calculations are part of everyday business operations. Having a reliable calculator available can simplify routine work and improve efficiency.</p>

  <h3>Tips for Accurate GST Calculations</h3>

  <ul>
    <li>Always verify the correct GST rate applicable to the product or service.</li>
    <li>Double-check whether the entered amount is GST-inclusive or GST-exclusive.</li>
    <li>Review invoices before issuing them to customers.</li>
    <li>Maintain proper records for tax filing and auditing purposes.</li>
    <li>Use automated tools whenever possible to reduce manual errors.</li>
  </ul>

  <p>By following these practices, businesses and individuals can improve tax accuracy and maintain better financial records.</p>

  <h3>Final Thoughts</h3>

  <p>Whether you need to calculate GST for a single purchase, generate invoices for clients, verify tax amounts on bills, or learn more about India's taxation system, this GST Calculator provides a quick and reliable solution. It eliminates complicated manual calculations, reduces errors, and helps users understand the tax component of every transaction.</p>

  <p>Designed for simplicity, speed, and accuracy, the calculator serves business owners, accountants, students, freelancers, retailers, and consumers alike. With support for multiple GST rates and both GST-inclusive and GST-exclusive calculations, it is a practical tool for everyday financial activities.</p>

  <p>Use the calculator whenever you need instant GST calculations and enjoy a hassle-free way to manage taxes, pricing, invoicing, and financial planning with confidence.</p>
</div>


<script>
  document.addEventListener('DOMContentLoaded', function () {
    const amountInput = document.getElementById('amount');
    const gstRateBtns = document.querySelectorAll('.gst-rate-btn');
    const typeBtns = document.querySelectorAll('.type-btn');
    const actionButtons = document.querySelectorAll('.action-button');
    const alertContainer = document.getElementById('alertContainer');
    
    const actualAmountSpan = document.getElementById('actualAmount');
    const gstAmountSpan = document.getElementById('gstAmount');
    const totalAmountSpan = document.getElementById('totalAmount');
    const formulaSpan = document.getElementById('formula');
    
    let currentRate = 18;
    let currentType = 'exclusive';
    let calculationCount = 0;
    
    // Initialize
    updateCounters();
    calculateGST();
    
    // Event listeners
    amountInput.addEventListener('input', calculateGST);
    
    gstRateBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        gstRateBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentRate = parseFloat(this.getAttribute('data-rate'));
        document.getElementById('currentGST').textContent = currentRate + '%';
        calculateGST();
      });
    });
    
    typeBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        typeBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentType = this.getAttribute('data-type');
        document.getElementById('currentMode').textContent = currentType === 'exclusive' ? 'Exclusive' : 'Inclusive';
        calculateGST();
      });
    });
    
    actionButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleAction(action);
      });
    });
    
    function calculateGST() {
      let amount = parseFloat(amountInput.value);
      
      if (isNaN(amount) || amount < 0) {
        amount = 0;
        amountInput.value = 0;
      }
      
      let actualAmount = 0;
      let gstAmount = 0;
      let totalAmount = 0;
      let formula = '';
      
      if (currentType === 'exclusive') {
        // Add GST (Exclusive)
        actualAmount = amount;
        gstAmount = (actualAmount * currentRate) / 100;
        totalAmount = actualAmount + gstAmount;
        formula = `Formula: Actual Amount (₹${formatNumber(actualAmount)}) + GST (${currentRate}% of ₹${formatNumber(actualAmount)}) = Total Amount`;
      } else {
        // Remove GST (Inclusive)
        totalAmount = amount;
        actualAmount = totalAmount / (1 + (currentRate / 100));
        gstAmount = totalAmount - actualAmount;
        formula = `Formula: Actual Amount = Total Amount ÷ (1 + GST Rate%) = ₹${formatNumber(totalAmount)} ÷ ${1 + (currentRate / 100)} = ₹${formatNumber(actualAmount)}`;
      }
      
      // Update display
      actualAmountSpan.textContent = `₹ ${formatNumber(actualAmount)}`;
      gstAmountSpan.textContent = `₹ ${formatNumber(gstAmount)}`;
      totalAmountSpan.textContent = `₹ ${formatNumber(totalAmount)}`;
      formulaSpan.textContent = formula;
      
      calculationCount++;
      updateCounters();
    }
    
    function formatNumber(num) {
      return num.toLocaleString('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
    
    function handleAction(action) {
      switch (action) {
        case 'calculate':
          calculateGST();
          showAlert('GST calculated successfully!', 'success');
          break;
          
        case 'copy':
          copyResult();
          break;
          
        case 'reset':
          resetCalculator();
          break;
          
        case 'reverse':
          reverseCalculate();
          break;
      }
    }
    
    function copyResult() {
      const actualAmount = actualAmountSpan.textContent;
      const gstAmount = gstAmountSpan.textContent;
      const totalAmount = totalAmountSpan.textContent;
      const rate = currentRate;
      const type = currentType === 'exclusive' ? 'Add GST (Exclusive)' : 'Remove GST (Inclusive)';
      
      const resultText = `GST Calculation Results:\n` +
        `Amount Type: ${type}\n` +
        `GST Rate: ${rate}%\n` +
        `Actual Amount: ${actualAmount}\n` +
        `GST Amount: ${gstAmount}\n` +
        `Total Amount: ${totalAmount}`;
      
      navigator.clipboard.writeText(resultText).then(() => {
        showAlert('Result copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy result: ' + err, 'error');
      });
    }
    
    function resetCalculator() {
      amountInput.value = 1000;
      currentRate = 18;
      currentType = 'exclusive';
      
      // Reset UI
      gstRateBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-rate') == 18) {
          btn.classList.add('active');
        }
      });
      
      typeBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-type') === 'exclusive') {
          btn.classList.add('active');
        }
      });
      
      document.getElementById('currentGST').textContent = '18%';
      document.getElementById('currentMode').textContent = 'Exclusive';
      
      calculateGST();
      showAlert('Calculator reset to default values.', 'success');
    }
    
    function reverseCalculate() {
      // Switch to inclusive mode for reverse calculation
      if (currentType === 'exclusive') {
        typeBtns.forEach(btn => {
          btn.classList.remove('active');
          if (btn.getAttribute('data-type') === 'inclusive') {
            btn.classList.add('active');
          }
        });
        currentType = 'inclusive';
        document.getElementById('currentMode').textContent = 'Inclusive';
        calculateGST();
        showAlert('Reverse GST calculation mode activated. Enter total amount to find actual amount.', 'success');
      } else {
        showAlert('Already in reverse calculation mode. Enter total amount to find actual amount.', 'success');
      }
    }
    
    function updateCounters() {
      document.getElementById('calcCount').textContent = calculationCount;
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