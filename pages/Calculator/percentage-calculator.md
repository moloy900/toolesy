---
layout: default
title: "Percentage Calculator – Calculate Percentages Online"
permalink: /percentage-calculator/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Percentage Calculator – Calculate Percentages Online</title>

<meta name="description"
  content="Free percentage calculator to find percentage increase, decrease, discounts, GST, and percentage of any number. Quick, accurate, and easy for daily use.">

<meta name="keywords"
  content="percentage calculator, calculate percentage, percentage increase calculator, percentage decrease calculator, percentage of number, discount percentage calculator, GST percentage calculator, math calculator online">

<meta name="author" content="ToolEsy.com">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://toolesy.com/percentage-calculator">

<!-- ✅ Open Graph / Facebook -->
<meta property="og:title" content="Free Percentage Calculator Online">
<meta property="og:description" content="Calculate percentage increase, decrease, discount, and GST instantly.">
<meta property="og:url" content="https://toolesy.com/percentage-calculator">
<meta property="og:type" content="website">

<!-- ✅ Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free Percentage Calculator Online">
<meta name="twitter:description" content="Easy percent calculator for percentage increase, decrease & discounts.">

<!-- ✅ Webpage Schema -->
<script type="application/ld+json">
{
 "@context": "https://schema.org",
 "@type": "WebPage",
 "name": "Free Percentage Calculator Online",
 "url": "https://toolesy.com/percentage-calculator",
 "description": "Free percentage calculator for percentage increase, decrease, discounts & GST calculations.",
 "publisher": {
   "@type": "Organization",
   "name": "ToolEsy"
 }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I calculate percentage of a number?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multiply the number by the percentage divided by 100. For example, to find 15% of 200, calculate (15 ÷ 100) × 200 = 30."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between percentage increase and decrease?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Percentage increase measures growth from an original value to a higher value, while percentage decrease measures reduction from an original value to a lower value."
      }
    },
    {
      "@type": "Question",
      "name": "How do I calculate what percentage one number is of another?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Divide the first number by the second number, then multiply by 100. For example, to find what percentage 25 is of 80, calculate (25 ÷ 80) × 100 = 31.25%."
      }
    },
    {
      "@type": "Question",
      "name": "Is there any cost to use this percentage calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, this is completely free tool with no registration required and no hidden fees."
      }
    }
  ]
}
</script>



<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Percentage Calculator Styles */
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

  .calculator-types {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }

  .calculator-type {
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    cursor: pointer;
    border: 2px solid transparent;
  }

  .calculator-type:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
    border-color: var(--primary);
  }

  .calculator-type.active {
    border-color: var(--primary);
    background: #f0f8ff;
  }

  .calculator-type h3 {
    color: var(--primary);
    margin-bottom: 10px;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .calculator-type p {
    font-size: 0.95rem;
    color: #555;
    margin: 0;
  }

  .input-section {
    margin: 20px 0;
  }

  .input-group {
    margin-bottom: 20px;
  }

  .input-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #2c3e50;
  }

  .input-group input {
    width: 100%;
    padding: 14px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  .input-group input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .formula-display {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    margin: 20px 0;
    border-left: 4px solid var(--primary);
    font-family: 'Courier New', monospace;
    font-size: 1rem;
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

  .result-section {
    margin-top: 30px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    display: none;
  }

  .result-section.active {
    display: block;
    animation: fadeIn 0.5s;
  }

  .result-title {
    color: var(--primary);
    font-size: 1.3rem;
    margin-bottom: 15px;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 10px;
  }

  .result-value {
    font-size: 2rem;
    font-weight: bold;
    color: #2c3e50;
    margin: 15px 0;
    text-align: center;
  }

  .calculation-steps {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    margin-top: 20px;
    font-size: 0.95rem;
  }

  .calculation-steps h4 {
    margin-bottom: 10px;
    color: var(--primary);
  }

  .calculation-steps ol {
    margin-left: 20px;
  }

  .calculation-steps li {
    margin-bottom: 8px;
    line-height: 1.5;
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

  .example-item {
    background: white;
    padding: 15px;
    border-radius: 6px;
    border-left: 4px solid var(--primary);
    margin: 10px 0;
  }

  .example-question {
    font-weight: 600;
    margin-bottom: 5px;
    color: #2c3e50;
  }

  .example-answer {
    color: #555;
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

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .calculator-types {
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

    .result-value {
      font-size: 1.5rem;
    }
  }

  /* Calculator type icons */
  .calculator-type i {
    font-size: 1.5rem;
    color: var(--primary);
  }
</style>

<div class="calculator-container">
  <h1>Free Online Percentage Calculator</h1>
  <p class="welcome-message">Calculate percentages easily with our free online tool. Find percentage increase, decrease, percentage of a number, and more with step-by-step solutions.</p>

  <div class="calculator-section">
    <h2>Percentage Calculator</h2>

    <div class="calculator-types">
      <div class="calculator-type active" data-type="percentage-of-number">
        <h3><i class="fas fa-percentage"></i> Percentage of a Number</h3>
        <p>Calculate what is X% of Y number</p>
      </div>
      <div class="calculator-type" data-type="percentage-increase">
        <h3><i class="fas fa-arrow-up"></i> Percentage Increase</h3>
        <p>Find the percentage increase from one value to another</p>
      </div>
      <div class="calculator-type" data-type="percentage-decrease">
        <h3><i class="fas fa-arrow-down"></i> Percentage Decrease</h3>
        <p>Find the percentage decrease from one value to another</p>
      </div>
      <div class="calculator-type" data-type="find-percentage">
        <h3><i class="fas fa-search"></i> Find Percentage</h3>
        <p>Calculate what percentage X is of Y</p>
      </div>
    </div>

    <div class="input-section">
      <div id="percentage-of-number-inputs" class="calculator-inputs">
        <div class="input-group">
          <label for="percentage-value">What is</label>
          <input type="number" id="percentage-value" placeholder="Enter percentage">
        </div>
        <div class="input-group">
          <label for="number-value">% of</label>
          <input type="number" id="number-value" placeholder="Enter number">
        </div>
        <div class="formula-display">
          Formula: (Percentage ÷ 100) × Number
        </div>
      </div>

      <div id="percentage-increase-inputs" class="calculator-inputs" style="display: none;">
        <div class="input-group">
          <label for="original-value">Original Value</label>
          <input type="number" id="original-value" placeholder="Enter original value">
        </div>
        <div class="input-group">
          <label for="new-value">New Value</label>
          <input type="number" id="new-value" placeholder="Enter new value">
        </div>
        <div class="formula-display">
          Formula: ((New Value - Original Value) ÷ Original Value) × 100
        </div>
      </div>

      <div id="percentage-decrease-inputs" class="calculator-inputs" style="display: none;">
        <div class="input-group">
          <label for="decrease-original-value">Original Value</label>
          <input type="number" id="decrease-original-value" placeholder="Enter original value">
        </div>
        <div class="input-group">
          <label for="decrease-new-value">New Value</label>
          <input type="number" id="decrease-new-value" placeholder="Enter new value">
        </div>
        <div class="formula-display">
          Formula: ((Original Value - New Value) ÷ Original Value) × 100
        </div>
      </div>

      <div id="find-percentage-inputs" class="calculator-inputs" style="display: none;">
        <div class="input-group">
          <label for="part-value">What percentage is</label>
          <input type="number" id="part-value" placeholder="Enter part value">
        </div>
        <div class="input-group">
          <label for="whole-value">of</label>
          <input type="number" id="whole-value" placeholder="Enter whole value">
        </div>
        <div class="formula-display">
          Formula: (Part ÷ Whole) × 100
        </div>
      </div>
    </div>

    <div class="button-section">
      <button class="calc-button" id="calculate-button">Calculate</button>
      <button class="calc-button success" id="clear-button">Clear</button>
      <button class="calc-button secondary" id="copy-button">Copy Result</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    <div class="result-section" id="result-section">
      <h3 class="result-title">Calculation Result</h3>
      <div class="result-value" id="result-value"></div>
      <div class="calculation-steps" id="calculation-steps"></div>
    </div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <div class="example-item">
        <div class="example-question">What is 20% of 150?</div>
        <div class="example-answer">20% of 150 is 30. Calculation: (20 ÷ 100) × 150 = 30</div>
      </div>

      <div class="example-item">
        <div class="example-question">If a product price increases from $50 to $65, what is the percentage increase?</div>
        <div class="example-answer">The percentage increase is 30%. Calculation: ((65 - 50) ÷ 50) × 100 = 30%</div>
      </div>

      <div class="example-item">
        <div class="example-question">If a product price decreases from $80 to $64, what is the percentage decrease?</div>
        <div class="example-answer">The percentage decrease is 20%. Calculation: ((80 - 64) ÷ 80) × 100 = 20%</div>
      </div>

      <div class="example-item">
        <div class="example-question">What percentage is 25 of 200?</div>
        <div class="example-answer">25 is 12.5% of 200. Calculation: (25 ÷ 200) × 100 = 12.5%</div>
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Percentage Calculator</h2>

    <p>Our <strong>Percentage Calculator</strong> is a versatile tool that helps you solve various percentage-related problems quickly and accurately. Whether you're calculating discounts, tax amounts, tip percentages, or analyzing data changes, this calculator provides instant results with step-by-step explanations. It's completely free to use, requires no registration, and works directly in your browser.</p>

    <h3>How to Use This Percentage Calculator (Step-by-Step):</h3>
    <ul>
      <li><strong>Select Calculation Type:</strong> Choose from four different percentage calculations: Percentage of a Number, Percentage Increase, Percentage Decrease, or Find Percentage.</li>
      <li><strong>Enter Values:</strong> Input the required numbers in the appropriate fields based on your selected calculation type.</li>
      <li><strong>Calculate:</strong> Click the "Calculate" button to get your result instantly.</li>
      <li><strong>Review Steps:</strong> Examine the step-by-step calculation process to understand how the result was derived.</li>
      <li><strong>Copy or Clear:</strong> Use the "Copy Result" button to copy the answer to your clipboard or "Clear" to start over.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're shopping and see a jacket originally priced at $120 now on sale for $84. To find the discount percentage, you would use the Percentage Decrease calculator. Enter $120 as the original value and $84 as the new value. The calculator instantly shows you're getting a 30% discount, helping you make an informed purchasing decision.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Students:</strong> Learn percentage calculations with visual step-by-step explanations.</li>
      <li><strong>Shoppers:</strong> Quickly calculate discounts and sale prices while shopping.</li>
      <li><strong>Business Professionals:</strong> Analyze sales growth, profit margins, and performance metrics.</li>
      <li><strong>Finance Professionals:</strong> Calculate interest rates, tax amounts, and financial percentages.</li>
      <li><strong>Teachers:</strong> Demonstrate percentage concepts with real-time calculations.</li>
      <li><strong>Anyone:</strong> Solve everyday percentage problems without manual calculations.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: How do I calculate percentage of a number?</strong><br>
      A: Multiply the number by the percentage divided by 100. For example, to find 15% of 200, calculate (15 ÷ 100) × 200 = 30.</p>

    <p><strong>Q: What's the difference between percentage increase and decrease?</strong><br>
      A: Percentage increase measures growth from an original value to a higher value, while percentage decrease measures reduction from an original value to a lower value.</p>

    <p><strong>Q: How do I calculate what percentage one number is of another?</strong><br>
      A: Divide the first number by the second number, then multiply by 100. For example, to find what percentage 25 is of 80, calculate (25 ÷ 80) × 100 = 31.25%.</p>

    <p><strong>Q: Is there any cost to use this percentage calculator?</strong><br>
      A: No, this is completely free tool with no registration required and no hidden fees.</p>

    <h3>Why Choose Our Percentage Calculator?</h3>
    <p>Our <strong>online percentage calculator</strong> stands out for its simplicity, accuracy, and educational value. Unlike basic calculators that just provide answers, ours shows the complete calculation process, helping you understand the methodology. The interface is intuitive with four specialized calculation types to cover all common percentage scenarios. All calculations happen locally in your browser, ensuring your data privacy and enabling offline use once the page is loaded.</p>

    <h3>Common Applications of Percentage Calculations</h3>
    <p>Percentage calculations have numerous practical applications in daily life and professional contexts:</p>
    <ul>
      <li><strong>Shopping & Discounts:</strong> Calculate sale prices and discount percentages</li>
      <li><strong>Finance & Banking:</strong> Determine interest rates, loan percentages, and investment returns</li>
      <li><strong>Business Analytics:</strong> Measure growth rates, profit margins, and market share</li>
      <li><strong>Academic Grading:</strong> Calculate test scores and grade percentages</li>
      <li><strong>Cooking & Nutrition:</strong> Adjust recipe proportions and calculate nutritional percentages</li>
      <li><strong>Statistics & Data Analysis:</strong> Interpret survey results and data trends</li>
    </ul>

    <h3>Percentage Formulas Used in This Calculator</h3>
    <p>Our calculator uses these standard mathematical formulas:</p>
    <ul>
      <li><strong>Percentage of a Number:</strong> (Percentage ÷ 100) × Number</li>
      <li><strong>Percentage Increase:</strong> ((New Value - Original Value) ÷ Original Value) × 100</li>
      <li><strong>Percentage Decrease:</strong> ((Original Value - New Value) ÷ Original Value) × 100</li>
      <li><strong>Find Percentage:</strong> (Part ÷ Whole) × 100</li>
    </ul>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const calculatorTypes = document.querySelectorAll('.calculator-type');
    const calculatorInputs = document.querySelectorAll('.calculator-inputs');
    const calculateButton = document.getElementById('calculate-button');
    const clearButton = document.getElementById('clear-button');
    const copyButton = document.getElementById('copy-button');
    const resultSection = document.getElementById('result-section');
    const resultValue = document.getElementById('result-value');
    const calculationSteps = document.getElementById('calculation-steps');
    const alertContainer = document.getElementById('alert-container');

    let currentCalculatorType = 'percentage-of-number';

    // Event listeners for calculator type selection
    calculatorTypes.forEach(type => {
      type.addEventListener('click', function () {
        // Remove active class from all types
        calculatorTypes.forEach(t => t.classList.remove('active'));
        // Add active class to clicked type
        this.classList.add('active');
        
        // Update current calculator type
        currentCalculatorType = this.getAttribute('data-type');
        
        // Hide all input sections
        calculatorInputs.forEach(input => {
          input.style.display = 'none';
        });
        
        // Show the selected input section
        document.getElementById(`${currentCalculatorType}-inputs`).style.display = 'block';
        
        // Hide result section
        resultSection.classList.remove('active');
      });
    });

    // Calculate button event listener
    calculateButton.addEventListener('click', function () {
      calculatePercentage();
    });

    // Clear button event listener
    clearButton.addEventListener('click', function () {
      clearInputs();
    });

    // Copy button event listener
    copyButton.addEventListener('click', function () {
      copyResult();
    });

    // Enter key support for inputs
    document.querySelectorAll('input').forEach(input => {
      input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          calculatePercentage();
        }
      });
    });

    function calculatePercentage() {
      let result, steps;
      
      try {
        switch (currentCalculatorType) {
          case 'percentage-of-number':
            result = calculatePercentageOfNumber();
            break;
          case 'percentage-increase':
            result = calculatePercentageIncrease();
            break;
          case 'percentage-decrease':
            result = calculatePercentageDecrease();
            break;
          case 'find-percentage':
            result = findPercentage();
            break;
          default:
            throw new Error('Unknown calculator type');
        }
        
        if (result && steps) {
          displayResult(result, steps);
        }
      } catch (error) {
        showAlert(error.message, 'error');
      }
    }

    function calculatePercentageOfNumber() {
      const percentage = parseFloat(document.getElementById('percentage-value').value);
      const number = parseFloat(document.getElementById('number-value').value);
      
      if (isNaN(percentage) || isNaN(number)) {
        throw new Error('Please enter valid numbers for both percentage and number');
      }
      
      const result = (percentage / 100) * number;
      const steps = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Convert ${percentage}% to decimal: ${percentage} ÷ 100 = ${percentage/100}</li>
          <li>Multiply by the number: ${percentage/100} × ${number} = ${result}</li>
          <li>Result: ${percentage}% of ${number} is ${result}</li>
        </ol>
      `;
      
      return { value: result, text: `${percentage}% of ${number} is ${result}`, steps };
    }

    function calculatePercentageIncrease() {
      const original = parseFloat(document.getElementById('original-value').value);
      const newVal = parseFloat(document.getElementById('new-value').value);
      
      if (isNaN(original) || isNaN(newVal)) {
        throw new Error('Please enter valid numbers for both original and new values');
      }
      
      if (newVal <= original) {
        throw new Error('New value must be greater than original value for percentage increase');
      }
      
      const increase = newVal - original;
      const result = (increase / original) * 100;
      const steps = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Find the increase: ${newVal} - ${original} = ${increase}</li>
          <li>Divide increase by original value: ${increase} ÷ ${original} = ${increase/original}</li>
          <li>Multiply by 100 to get percentage: ${increase/original} × 100 = ${result.toFixed(2)}%</li>
          <li>Result: The percentage increase from ${original} to ${newVal} is ${result.toFixed(2)}%</li>
        </ol>
      `;
      
      return { value: result, text: `Increase from ${original} to ${newVal} is ${result.toFixed(2)}%`, steps };
    }

    function calculatePercentageDecrease() {
      const original = parseFloat(document.getElementById('decrease-original-value').value);
      const newVal = parseFloat(document.getElementById('decrease-new-value').value);
      
      if (isNaN(original) || isNaN(newVal)) {
        throw new Error('Please enter valid numbers for both original and new values');
      }
      
      if (newVal >= original) {
        throw new Error('New value must be less than original value for percentage decrease');
      }
      
      const decrease = original - newVal;
      const result = (decrease / original) * 100;
      const steps = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Find the decrease: ${original} - ${newVal} = ${decrease}</li>
          <li>Divide decrease by original value: ${decrease} ÷ ${original} = ${decrease/original}</li>
          <li>Multiply by 100 to get percentage: ${decrease/original} × 100 = ${result.toFixed(2)}%</li>
          <li>Result: The percentage decrease from ${original} to ${newVal} is ${result.toFixed(2)}%</li>
        </ol>
      `;
      
      return { value: result, text: `Decrease from ${original} to ${newVal} is ${result.toFixed(2)}%`, steps };
    }

    function findPercentage() {
      const part = parseFloat(document.getElementById('part-value').value);
      const whole = parseFloat(document.getElementById('whole-value').value);
      
      if (isNaN(part) || isNaN(whole)) {
        throw new Error('Please enter valid numbers for both part and whole values');
      }
      
      if (part > whole) {
        throw new Error('Part value cannot be greater than whole value');
      }
      
      const result = (part / whole) * 100;
      const steps = `
        <h4>Calculation Steps:</h4>
        <ol>
          <li>Divide part by whole: ${part} ÷ ${whole} = ${part/whole}</li>
          <li>Multiply by 100 to get percentage: ${part/whole} × 100 = ${result.toFixed(2)}%</li>
          <li>Result: ${part} is ${result.toFixed(2)}% of ${whole}</li>
        </ol>
      `;
      
      return { value: result, text: `${part} is ${result.toFixed(2)}% of ${whole}`, steps };
    }

    function displayResult(result, steps) {
      resultValue.textContent = result.text;
      calculationSteps.innerHTML = steps;
      resultSection.classList.add('active');
      showAlert('Calculation completed successfully!', 'success');
    }

    function clearInputs() {
      // Clear all input fields
      document.querySelectorAll('input').forEach(input => {
        input.value = '';
      });
      
      // Hide result section
      resultSection.classList.remove('active');
      
      showAlert('All inputs cleared!', 'success');
    }

    function copyResult() {
      if (!resultSection.classList.contains('active')) {
        showAlert('No result to copy. Please calculate first.', 'error');
        return;
      }
      
      const textToCopy = resultValue.textContent;
      navigator.clipboard.writeText(textToCopy).then(() => {
        showAlert('Result copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy result: ' + err, 'error');
      });
    }

    function showAlert(message, type) {
      // Remove any existing alerts
      const existingAlert = document.querySelector('.alert');
      if (existingAlert) {
        existingAlert.remove();
      }
      
      const alertDiv = document.createElement('div');
      alertDiv.className = `alert alert-${type}`;
      alertDiv.innerHTML = `
        ${message}
        <span class="close">&times;</span>
      `;

      alertContainer.appendChild(alertDiv);

      // Add close functionality
      alertDiv.querySelector('.close').addEventListener('click', function () {
        alertDiv.remove();
      });

      // Auto remove after 5 seconds
      setTimeout(() => {
        if (alertDiv.parentNode) {
          alertDiv.remove();
        }
      }, 5000);
    }
  });
</script>