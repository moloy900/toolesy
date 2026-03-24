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

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Indian GST Calculator Tool</h2>

    <p>Need to calculate GST for your business or personal expenses? Our <strong>Indian GST Calculator</strong> is the perfect solution for accurate GST calculations. Whether you need to add GST to an amount or remove GST from a total, this tool handles all calculations instantly. Support for all Indian GST rates including 0%, 5%, 12%, 18%, 28%, and 40%. There's no download required, no registration needed, and your privacy is guaranteed as all calculations happen securely right in your browser.</p>

    <h3>How to Use This GST Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Amount:</strong> Input the amount you want to calculate GST for (in ₹).</li>
      <li><strong>Select GST Rate:</strong> Choose the applicable GST rate - 0%, 5%, 12%, 18%, 28%, or 40%.</li>
      <li><strong>Choose Calculation Type:</strong> Select "Add GST (Exclusive)" to add GST to the amount, or "Remove GST (Inclusive)" to find the original amount before GST.</li>
      <li><strong>Get Results:</strong> The calculator instantly shows the actual amount, GST amount, and total amount.</li>
      <li><strong>Copy or Reset:</strong> Use the copy button to save results or reset to start over.</li>
    </ul>

    <h3>GST Calculation Formulas:</h3>
    <ul>
      <li><strong>Add GST (Exclusive):</strong> GST Amount = (Amount × GST Rate) ÷ 100, Total = Amount + GST Amount</li>
      <li><strong>Remove GST (Inclusive):</strong> Actual Amount = Total Amount ÷ (1 + GST Rate%), GST Amount = Total Amount - Actual Amount</li>
      <li><strong>Reverse GST Calculation:</strong> Find GST from total amount or find the original price before GST</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're a small business owner who needs to invoice a client for ₹10,000 worth of services with 18% GST. Instead of manually calculating (which can lead to errors), you can use this tool. Simply enter ₹10,000, select 18% GST rate, choose "Add GST (Exclusive)", and instantly get: GST Amount = ₹1,800, Total Amount = ₹11,800. This ensures accurate invoicing and proper tax compliance.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Business Owners:</strong> Calculate GST for invoices, billing, and tax returns accurately.</li>
      <li><strong>Accountants:</strong> Quick GST calculations for multiple transactions and client billing.</li>
      <li><strong>Shopkeepers:</strong> Add GST to product prices or calculate GST on purchases.</li>
      <li><strong>Consumers:</strong> Verify GST charges on bills and understand tax components.</li>
      <li><strong>Students:</strong> Learn and practice GST calculations for commerce and business studies.</li>
      <li><strong>Freelancers:</strong> Calculate GST on service invoices for proper billing.</li>
    </ul>

    <h3>Frequently Asked Questions:</h3>
    <p><strong>What are the GST rates in India?</strong><br>
      India has multiple GST rates: 0% (essential goods), 5% (household items), 12% (processed food), 18% (standard rate for most goods and services), 28% (luxury items), and 40% (sin goods like tobacco, aerated drinks).</p>

    <p><strong>What is the difference between exclusive and inclusive GST?</strong><br>
      Exclusive GST means GST is added to the base amount (Amount + GST). Inclusive GST means the amount already includes GST (Total amount contains GST).</p>

    <p><strong>How do I calculate GST on MRP?</strong><br>
      MRP (Maximum Retail Price) usually includes GST. To find GST, use the "Remove GST (Inclusive)" option. Enter the MRP, select the GST rate, and the calculator will show the base price and GST amount.</p>

    <p><strong>Is this GST calculator accurate for all Indian states?</strong><br>
      Yes, this calculator follows the unified GST structure applicable across all Indian states. It works for CGST, SGST, and IGST calculations as the total GST rate remains the same.</p>

    <p><strong>Can I calculate reverse GST with this tool?</strong><br>
      Absolutely! Use the "Remove GST (Inclusive)" option for reverse GST calculation. This helps you find the original amount before GST was added.</p>

    <p><strong>Is my data private when using this calculator?</strong><br>
      Yes, all calculations happen locally in your browser. Your financial data is never sent to any server, ensuring complete privacy and security.</p>

    <p><strong>Can I use this tool on my mobile phone?</strong><br>
      Yes, our GST calculator is fully responsive and optimized for smartphones, tablets, and desktop computers.</p>

    <p><strong>Do I need to create an account or pay to use this?</strong><br>
      No, this is a completely free tool with no sign-up, no subscription, and no hidden fees.</p>

    <h3>Why Choose Our GST Calculator?</h3>
    <p>Our <strong>Indian GST calculator</strong> stands out from other tools because of its accuracy, simplicity, and privacy features. Unlike many online calculators, we don't store your data on servers - all processing happens locally in your browser. This means your financial information remains completely private. The tool supports all Indian GST rates, provides instant results, and includes both add and remove GST options for complete flexibility.</p>

    <h3>Common Applications of GST Calculation</h3>
    <p>GST calculation has numerous practical applications across various business and personal scenarios:</p>
    <ul>
      <li><strong>Invoicing:</strong> Calculate GST for customer invoices and bills</li>
      <li><strong>Tax Filing:</strong> Prepare accurate GST returns and tax calculations</li>
      <li><strong>Pricing Strategy:</strong> Determine product prices with applicable GST rates</li>
      <li><strong>Purchase Verification:</strong> Verify GST charges on purchases and bills</li>
      <li><strong>Budgeting:</strong> Estimate GST expenses for business planning</li>
      <li><strong>Accounting:</strong> Record GST components in financial statements</li>
    </ul>
  </div>
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