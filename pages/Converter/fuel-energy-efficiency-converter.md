---
layout: default
title: "Fuel & Energy Efficiency Converter - Convert Between Efficiency Units"
permalink: /fuel-energy-efficiency-converter-convert-between-efficiency-units/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Fuel & Energy Efficiency Converter - Convert Between Efficiency Units</title>
<meta name="description"
  content="Free online fuel and energy efficiency conversion tool. Convert between km/L, mpg, L/100km, kWh/100km, MJ/km and more efficiency units instantly.">
<meta name="keywords"
  content="fuel efficiency converter, mpg converter, km/L converter, L/100km converter, energy efficiency converter, fuel consumption converter, mileage converter">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Fuel Efficiency Converter Styles */
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

  .conversion-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }

  .conversion-group {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .conversion-group h3 {
    color: var(--primary);
    margin-bottom: 15px;
    font-size: 1.2rem;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 8px;
  }

  .input-group {
    margin-bottom: 15px;
  }

  .input-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: #2c3e50;
  }

  .input-group input,
  .input-group select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
  }

  .input-group input:focus,
  .input-group select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }

  .result-section {
    margin-top: 20px;
    padding: 20px;
    background: #e8f4fd;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .result-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 8px;
    background: white;
    border-radius: 6px;
    border-left: 3px solid var(--primary);
  }

  .result-item:last-child {
    margin-bottom: 0;
  }

  .result-label {
    font-weight: 600;
    color: #2c3e50;
  }

  .result-value {
    font-weight: bold;
    color: var(--primary);
    font-family: 'Courier New', monospace;
  }

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
    margin: 25px 0;
  }

  .converter-button {
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

  .converter-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .converter-button:active {
    transform: translateY(0);
  }

  .converter-button.success {
    background: var(--success);
  }

  .converter-button.success:hover {
    background: #218838;
  }

  .converter-button.secondary {
    background: #6c757d;
  }

  .converter-button.secondary:hover {
    background: #5a6268;
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

  .unit-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 30px 0;
  }

  .category-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-top: 4px solid var(--primary);
  }

  .category-card h3 {
    color: var(--primary);
    margin-bottom: 15px;
    font-size: 1.3rem;
  }

  .category-card ul {
    list-style: none;
    padding: 0;
  }

  .category-card li {
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
    color: #555;
  }

  .category-card li:last-child {
    border-bottom: none;
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
    font-family: monospace;
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
    .conversion-wrapper {
      grid-template-columns: 1fr;
    }

    .button-section {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }

    .converter-button {
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

    .unit-categories {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Fuel & Energy Efficiency Converter</h1>
  <p class="welcome-message">Convert between different fuel and energy efficiency units instantly. Supports km/L, mpg, L/100km, kWh/100km, MJ/km and many more efficiency units.</p>

  <div class="converter-section">
    <h2>Fuel & Energy Efficiency Conversion</h2>

    <div class="conversion-wrapper">
      <div class="conversion-group">
        <h3>Input Value</h3>
        <div class="input-group">
          <label for="inputValue">Efficiency Value</label>
          <input type="number" id="inputValue" placeholder="Enter efficiency value" step="any" value="15">
        </div>
        <div class="input-group">
          <label for="inputUnit">From Unit</label>
          <select id="inputUnit">
            <optgroup label="Distance per Fuel Unit">
              <option value="kmL">Kilometer per Liter (km/L)</option>
              <option value="mL">Meter per Liter (m/L)</option>
              <option value="mpgUS">Mile per Gallon (US) (mpg)</option>
              <option value="mpgUK">Mile per Gallon (UK) (mpg)</option>
              <option value="ftgal">Foot per Gallon (ft/gal)</option>
            </optgroup>
            <optgroup label="Fuel Consumption Units">
              <option value="L100km">Liter per 100 km (L/100 km)</option>
              <option value="gal100mi">Gallon per 100 miles (gal/100 mi)</option>
              <option value="kL1000km">Kiloliter per 1000 km (kL/1000 km)</option>
            </optgroup>
            <optgroup label="Energy-based Efficiency Units">
              <option value="MJkm">Megajoule per km (MJ/km)</option>
              <option value="kWh100km">Kilowatt-hour per 100 km (kWh/100 km)</option>
            </optgroup>
            <optgroup label="Other / Specialized Units">
              <option value="galmiUS">Gallons per mile (US)</option>
              <option value="galmiUK">Gallons per mile (UK)</option>
              <option value="Jm">Joule per meter (J/m)</option>
              <option value="Whkm">Watt-hour per km (Wh/km)</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div class="conversion-group">
        <h3>Conversion Results</h3>
        <div class="result-section">
          <div class="result-item">
            <span class="result-label">km/L:</span>
            <span class="result-value" id="resultKmL">15.0000</span>
          </div>
          <div class="result-item">
            <span class="result-label">mpg (US):</span>
            <span class="result-value" id="resultMpgUS">35.2822</span>
          </div>
          <div class="result-item">
            <span class="result-label">L/100 km:</span>
            <span class="result-value" id="resultL100km">6.6667</span>
          </div>
          <div class="result-item">
            <span class="result-label">mpg (UK):</span>
            <span class="result-value" id="resultMpgUK">42.3720</span>
          </div>
          <div class="result-item">
            <span class="result-label">kWh/100 km:</span>
            <span class="result-value" id="resultKwh100km">23.1481</span>
          </div>
          <div class="result-item">
            <span class="result-label">MJ/km:</span>
            <span class="result-value" id="resultMjKm">0.8333</span>
          </div>
          <div class="result-item">
            <span class="result-label">gal/100 mi:</span>
            <span class="result-value" id="resultGal100mi">2.3521</span>
          </div>
        </div>
      </div>
    </div>

    <div class="button-section">
      <button class="converter-button" id="convertButton">Convert</button>
      <button class="converter-button success" id="swapButton">Swap Units</button>
      <button class="converter-button" id="copyButton">Copy Results</button>
      <button class="converter-button secondary" id="resetButton">Reset</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="unit-categories">
      <div class="category-card">
        <h3>Distance per Fuel Unit</h3>
        <ul>
          <li><strong>km/L</strong> - Kilometers per liter (metric)</li>
          <li><strong>mpg (US)</strong> - Miles per US gallon</li>
          <li><strong>mpg (UK)</strong> - Miles per imperial gallon</li>
          <li><strong>m/L</strong> - Meters per liter</li>
          <li>Higher values = better efficiency</li>
        </ul>
      </div>

      <div class="category-card">
        <h3>Fuel Consumption Units</h3>
        <ul>
          <li><strong>L/100 km</strong> - Liters per 100 km (metric)</li>
          <li><strong>gal/100 mi</strong> - Gallons per 100 miles</li>
          <li><strong>kL/1000 km</strong> - Kiloliters per 1000 km</li>
          <li>Lower values = better efficiency</li>
        </ul>
      </div>

      <div class="category-card">
        <h3>Energy Efficiency Units</h3>
        <ul>
          <li><strong>kWh/100 km</strong> - Electric vehicle standard</li>
          <li><strong>MJ/km</strong> - Megajoules per kilometer</li>
          <li><strong>Wh/km</strong> - Watt-hours per kilometer</li>
          <li><strong>J/m</strong> - Joules per meter</li>
        </ul>
      </div>

      <div class="category-card">
        <h3>Typical Efficiency Values</h3>
        <ul>
          <li><strong>Economy Car:</strong> 15-20 km/L</li>
          <li><strong>SUV:</strong> 8-12 km/L</li>
          <li><strong>Electric Car:</strong> 15-25 kWh/100 km</li>
          <li><strong>Hybrid Car:</strong> 20-30 km/L</li>
        </ul>
      </div>
    </div>

    <div class="examples">
      <h2>Conversion Examples</h2>

      <div class="example-item">
        <strong>15 km/L</strong> = 6.67 L/100 km = 35.28 mpg (US) = 42.37 mpg (UK) = 23.15 kWh/100 km
      </div>

      <div class="example-item">
        <strong>30 mpg (US)</strong> = 12.75 km/L = 7.84 L/100 km = 36.02 mpg (UK) = 19.64 kWh/100 km
      </div>

      <div class="example-item">
        <strong>8 L/100 km</strong> = 12.5 km/L = 29.40 mpg (US) = 35.31 mpg (UK) = 17.28 kWh/100 km
      </div>

      <div class="example-item">
        <strong>20 kWh/100 km</strong> = 5.56 km/L equivalent = 13.08 mpg (US) equivalent = 18.0 L/100 km gasoline equivalent
      </div>
    </div>
  </div>

<!-- SEO Content Section -->
<div class="content-placeholder">

  <h2>Free Online Fuel & Energy Efficiency Conversion Tool</h2>

  <p>
    Fuel efficiency is one of the most important factors people consider when purchasing a vehicle, planning transportation costs, or evaluating environmental impact. Different countries and industries use different methods to measure fuel and energy efficiency, which often creates confusion when comparing vehicles or analyzing consumption data. Our <strong>Fuel & Energy Efficiency Conversion Tool</strong> is designed to eliminate this confusion by allowing users to convert efficiency values instantly between a wide range of units.
  </p>

  <p>
    Whether you drive a gasoline-powered car, a diesel truck, a hybrid vehicle, or an electric vehicle, understanding efficiency measurements can help you make better decisions. This converter supports popular units such as kilometers per liter (km/L), miles per gallon (US and UK), liters per 100 kilometers (L/100 km), kilowatt-hours per 100 kilometers (kWh/100 km), megajoules per kilometer (MJ/km), and several other energy-related measurements.
  </p>

  <p>
    The tool is suitable for everyday drivers, automotive enthusiasts, engineers, researchers, fleet operators, students, and environmental professionals. By converting efficiency values accurately and instantly, it helps users compare vehicles, estimate operating costs, understand energy consumption, and evaluate environmental performance without performing complicated calculations manually.
  </p>

  <h3>How to Use This Fuel & Energy Efficiency Converter</h3>

  <p>
    Using the converter is simple and requires only a few steps. The interface has been designed to provide quick and accurate results, making it accessible even for users with little technical knowledge.
  </p>

  <ul>
    <li>
      <strong>Enter an Efficiency Value:</strong>
      Start by typing the efficiency or consumption value you want to convert into the input field. The tool accepts both whole numbers and decimal values.
    </li>

    <li>
      <strong>Select the Original Unit:</strong>
      Choose the unit that corresponds to your input value. Examples include km/L, mpg (US), mpg (UK), L/100 km, kWh/100 km, and others.
    </li>

    <li>
      <strong>Instantly View Converted Results:</strong>
      Once the value and unit are selected, the tool automatically calculates and displays equivalent values in multiple efficiency units.
    </li>

    <li>
      <strong>Copy or Save Results:</strong>
      Use the available options to copy conversion results for reports, research projects, presentations, or personal records.
    </li>

    <li>
      <strong>Reset for a New Calculation:</strong>
      Clear all fields and start a new conversion whenever needed.
    </li>
  </ul>

  <h3>Why Fuel Efficiency Conversions Matter</h3>

  <p>
    Fuel efficiency measurements vary significantly around the world. A vehicle sold in Europe may display fuel consumption in liters per 100 kilometers, while the same vehicle sold in North America may use miles per gallon. In countries such as Japan and India, kilometers per liter are commonly used. These differences can make direct comparisons difficult.
  </p>

  <p>
    By converting values into familiar units, consumers can compare vehicles more effectively and understand the real-world implications of fuel economy ratings. Businesses can evaluate fleet performance across international markets, while engineers can communicate technical data using the units most relevant to their audience.
  </p>

  <h3>Real-World Applications of Efficiency Conversion</h3>

  <h4>1. Vehicle Purchasing Decisions</h4>

  <p>
    When comparing different vehicles, efficiency ratings are often presented using different measurement systems. A buyer evaluating imported vehicles may need to convert fuel consumption figures into a familiar format to understand which option provides the best value.
  </p>

  <p>
    For example, a vehicle rated at 5 liters per 100 kilometers may initially seem difficult to compare with another vehicle rated at 47 miles per gallon. A quick conversion reveals that both ratings represent nearly identical fuel efficiency.
  </p>

  <h4>2. Road Trip Planning</h4>

  <p>
    Travelers often estimate fuel expenses before long journeys. Understanding vehicle efficiency in different units helps calculate expected fuel costs accurately. By converting fuel economy values into local measurement systems, travelers can better estimate expenses when driving internationally.
  </p>

  <h4>3. Fleet Management</h4>

  <p>
    Businesses that operate transportation fleets need accurate efficiency data to control operating costs. Delivery companies, logistics providers, and public transportation organizations often monitor fuel consumption across different vehicle types and regions.
  </p>

  <p>
    Converting efficiency data into standardized units allows managers to compare performance consistently and identify opportunities for cost reduction.
  </p>

  <h4>4. Electric Vehicle Analysis</h4>

  <p>
    Electric vehicles use energy consumption metrics rather than traditional fuel economy ratings. Most EVs display efficiency in kWh per 100 kilometers or miles per kWh. Converting these values into gasoline-equivalent measurements helps consumers understand efficiency using familiar benchmarks.
  </p>

  <p>
    This is especially useful for drivers transitioning from conventional vehicles to electric transportation.
  </p>

  <h4>5. Environmental Research</h4>

  <p>
    Environmental scientists and policy analysts frequently evaluate energy consumption and emissions data. Standardized efficiency conversions make it easier to compare transportation systems, estimate greenhouse gas emissions, and assess sustainability initiatives.
  </p>

  <h3>Understanding Common Efficiency Units</h3>

  <h4>Kilometers per Liter (km/L)</h4>

  <p>
    Kilometers per liter measures how far a vehicle can travel using one liter of fuel. Higher values indicate better fuel efficiency because the vehicle travels a greater distance using less fuel.
  </p>

  <p>
    This unit is widely used in India, Japan, and many other countries that follow the metric system.
  </p>

  <h4>Miles per Gallon (mpg)</h4>

  <p>
    Miles per gallon measures the distance a vehicle can travel using one gallon of fuel. It is commonly used in the United States and the United Kingdom. However, it is important to remember that the US gallon and UK gallon are different sizes, resulting in different mpg values for the same vehicle.
  </p>

  <h4>Liters per 100 Kilometers (L/100 km)</h4>

  <p>
    This unit measures the amount of fuel required to travel 100 kilometers. Unlike km/L or mpg, lower values indicate better efficiency because less fuel is consumed over the same distance.
  </p>

  <p>
    Many automotive experts prefer this measurement because fuel consumption increases proportionally with the displayed value.
  </p>

  <h4>Kilowatt-Hours per 100 Kilometers (kWh/100 km)</h4>

  <p>
    This unit is commonly used for electric vehicles. It indicates how much electrical energy is required to travel 100 kilometers. Lower values represent greater efficiency and lower operating costs.
  </p>

  <h4>Megajoules per Kilometer (MJ/km)</h4>

  <p>
    Megajoules per kilometer provide a universal energy-based measurement that allows direct comparison between different energy sources, including gasoline, diesel, natural gas, hydrogen, and electricity.
  </p>

  <h3>Benefits of Using an Online Efficiency Converter</h3>

  <ul>
    <li>Instant and accurate calculations</li>
    <li>Eliminates manual conversion errors</li>
    <li>Supports international measurement systems</li>
    <li>Useful for both conventional and electric vehicles</li>
    <li>Ideal for professional and educational use</li>
    <li>Improves understanding of vehicle performance</li>
    <li>Helps estimate fuel and energy costs</li>
    <li>Supports environmental and sustainability analysis</li>
  </ul>

  <h3>US MPG vs UK MPG: Understanding the Difference</h3>

  <p>
    One of the most common sources of confusion in fuel efficiency comparisons is the difference between US and UK gallons. While both units are called gallons, they are not the same size.
  </p>

  <p>
    A US gallon contains approximately 3.785 liters, whereas an Imperial (UK) gallon contains approximately 4.546 liters. Because the UK gallon is larger, the same vehicle will display a higher mpg value when measured using the UK system.
  </p>

  <p>
    For example, a vehicle rated at 40 mpg (US) will achieve roughly 48 mpg (UK), even though the actual fuel consumption remains unchanged.
  </p>

  <h3>Fuel Efficiency and Operating Costs</h3>

  <p>
    Fuel efficiency directly affects the total cost of vehicle ownership. Even small differences in fuel consumption can result in significant savings over time. For drivers who travel long distances regularly, selecting a vehicle with better efficiency can reduce annual fuel expenses by hundreds or even thousands of dollars.
  </p>

  <p>
    For example, if two vehicles travel the same distance every year but one consumes 20% less fuel, the owner of the more efficient vehicle will spend considerably less on fuel. Businesses operating large fleets often save substantial amounts by improving average fuel efficiency across their vehicles.
  </p>

  <p>
    By converting efficiency values into familiar units, drivers can make informed financial decisions and accurately estimate long-term operating expenses.
  </p>

  <h3>Electric Vehicles and Energy Efficiency</h3>

  <p>
    As electric vehicles become increasingly popular, understanding energy efficiency measurements is more important than ever. Unlike gasoline or diesel vehicles, EVs consume electrical energy rather than liquid fuel. Because of this, their efficiency is measured using units such as kWh/100 km, miles per kWh, or watt-hours per mile.
  </p>

  <p>
    Many consumers find it difficult to compare electric vehicle efficiency with traditional fuel economy ratings. Energy-based conversions bridge this gap by expressing electrical consumption in terms of gasoline-equivalent energy values.
  </p>

  <p>
    For example, an electric vehicle consuming 15 kWh per 100 kilometers is significantly more energy efficient than most conventional gasoline vehicles. Converting these values helps drivers better understand the benefits of electric transportation.
  </p>

  <h3>Hybrid Vehicle Efficiency Analysis</h3>

  <p>
    Hybrid vehicles combine internal combustion engines with electric motors to improve efficiency. Because hybrids often achieve much higher fuel economy ratings than conventional vehicles, understanding efficiency conversions becomes especially useful when comparing different vehicle technologies.
  </p>

  <p>
    Some hybrids achieve more than 25 km/L or 60 mpg (US), making them among the most fuel-efficient vehicles available. By converting values across multiple systems, consumers can evaluate performance regardless of the manufacturer's preferred measurement standard.
  </p>

  <h3>Environmental Benefits of Improved Efficiency</h3>

  <p>
    Fuel efficiency is not only important for reducing costs; it also plays a significant role in environmental protection. Vehicles that consume less fuel generally produce fewer greenhouse gas emissions and require fewer natural resources to operate.
  </p>

  <p>
    Improving vehicle efficiency contributes to reduced carbon dioxide emissions, decreased dependence on fossil fuels, and lower air pollution levels. Governments around the world encourage efficiency improvements through regulations, incentives, and fuel economy standards.
  </p>

  <p>
    Researchers and environmental organizations often use efficiency conversions when comparing transportation systems and evaluating sustainability initiatives across different regions.
  </p>

  <h3>Common Fuel Efficiency Conversion Examples</h3>

  <p>
    Understanding practical conversion examples can help users interpret efficiency ratings more easily. Here are some common examples:
  </p>

  <ul>
    <li>10 km/L ≈ 23.5 mpg (US)</li>
    <li>15 km/L ≈ 35.3 mpg (US)</li>
    <li>20 km/L ≈ 47.0 mpg (US)</li>
    <li>25 km/L ≈ 58.8 mpg (US)</li>
    <li>30 km/L ≈ 70.6 mpg (US)</li>
    <li>5 L/100 km ≈ 47 mpg (US)</li>
    <li>8 L/100 km ≈ 29.4 mpg (US)</li>
    <li>10 L/100 km ≈ 23.5 mpg (US)</li>
  </ul>

  <p>
    These examples provide a quick reference when comparing vehicle specifications from different manufacturers and regions.
  </p>

  <h3>Industries That Use Efficiency Conversions</h3>

  <p>
    Fuel and energy efficiency conversions are widely used across many industries and professional fields. Some of the most common include:
  </p>

  <ul>
    <li><strong>Automotive Manufacturing:</strong> Comparing vehicle performance across international markets.</li>
    <li><strong>Transportation & Logistics:</strong> Monitoring fleet fuel consumption and operational costs.</li>
    <li><strong>Government Agencies:</strong> Developing fuel economy regulations and environmental policies.</li>
    <li><strong>Energy Research:</strong> Evaluating alternative fuels and transportation technologies.</li>
    <li><strong>Education:</strong> Teaching engineering, physics, environmental science, and transportation studies.</li>
    <li><strong>Consumer Research:</strong> Comparing vehicles before purchase decisions.</li>
  </ul>

  <h3>Typical Efficiency Values by Vehicle Category</h3>

  <p>
    Vehicle efficiency varies depending on size, weight, engine technology, driving conditions, and intended use. The following ranges represent typical values observed in modern vehicles.
  </p>

  <ul>
    <li><strong>Small Compact Cars:</strong> 15–22 km/L</li>
    <li><strong>Sedan Vehicles:</strong> 12–18 km/L</li>
    <li><strong>Hybrid Cars:</strong> 20–30 km/L</li>
    <li><strong>Diesel Passenger Cars:</strong> 18–25 km/L</li>
    <li><strong>Luxury Vehicles:</strong> 8–15 km/L</li>
    <li><strong>SUVs:</strong> 8–14 km/L</li>
    <li><strong>Pickup Trucks:</strong> 6–12 km/L</li>
    <li><strong>Motorcycles:</strong> 25–45 km/L</li>
    <li><strong>Electric Vehicles:</strong> 12–25 kWh/100 km</li>
  </ul>

  <p>
    Actual efficiency may vary depending on driving habits, traffic conditions, maintenance practices, climate, and road quality.
  </p>

  <h3>Factors That Affect Fuel Efficiency</h3>

  <p>
    Many factors influence how efficiently a vehicle uses fuel or energy. Understanding these factors can help drivers improve performance and reduce operating costs.
  </p>

  <ul>
    <li><strong>Driving Style:</strong> Aggressive acceleration and hard braking increase fuel consumption.</li>
    <li><strong>Vehicle Maintenance:</strong> Proper tire pressure, clean air filters, and regular servicing improve efficiency.</li>
    <li><strong>Vehicle Weight:</strong> Carrying excess cargo requires additional energy.</li>
    <li><strong>Road Conditions:</strong> Hills, rough roads, and stop-and-go traffic increase consumption.</li>
    <li><strong>Weather:</strong> Extreme temperatures may reduce fuel economy and battery performance.</li>
    <li><strong>Speed:</strong> Driving at very high speeds generally decreases efficiency due to aerodynamic drag.</li>
  </ul>

  <h3>Energy Content Reference Values</h3>

  <p>
    Energy-based efficiency conversions rely on standardized fuel energy density values. While exact values may vary slightly depending on fuel composition, the following averages are widely used for calculations:
  </p>

  <ul>
    <li><strong>Gasoline:</strong> Approximately 34.2 MJ/L or 9.5 kWh/L</li>
    <li><strong>Diesel:</strong> Approximately 38.6 MJ/L or 10.7 kWh/L</li>
    <li><strong>Ethanol:</strong> Approximately 24 MJ/L</li>
    <li><strong>Biodiesel:</strong> Approximately 33 MJ/L</li>
    <li><strong>Electricity:</strong> 3.6 MJ per kWh</li>
    <li><strong>Hydrogen:</strong> Approximately 120 MJ/kg</li>
  </ul>

  <p>
    These reference values are commonly used in engineering calculations, efficiency comparisons, and transportation energy analyses.
  </p>

  <h3>Frequently Asked Questions (FAQ)</h3>

  <p>
    <strong>Why do some countries use km/L while others use L/100 km?</strong><br>
    Different regions developed different measurement standards over time. While km/L focuses on distance traveled per unit of fuel, L/100 km focuses on fuel consumed over a fixed distance. Both express the same concept using different perspectives.
  </p>

  <p>
    <strong>Which measurement is easier to understand?</strong><br>
    Many experts prefer L/100 km because fuel consumption changes linearly. However, many drivers find km/L or mpg easier to visualize because they directly show how far a vehicle can travel using a specific amount of fuel.
  </p>

  <p>
    <strong>Can electric vehicle efficiency be compared with gasoline vehicles?</strong><br>
    Yes. Energy-based conversions allow direct comparison between electric and conventional vehicles by converting energy consumption into equivalent fuel economy values.
  </p>

  <p>
    <strong>Why are my real-world fuel economy results different from official ratings?</strong><br>
    Official ratings are measured under controlled testing conditions. Real-world performance depends on traffic, weather, road conditions, vehicle maintenance, and driving habits.
  </p>

  <p>
    <strong>How accurate are online efficiency converters?</strong><br>
    Modern converters use internationally accepted conversion factors and provide highly accurate results suitable for educational, professional, and personal use.
  </p>

  <h3>Tips for Improving Vehicle Efficiency</h3>

  <ul>
    <li>Maintain proper tire pressure.</li>
    <li>Perform regular vehicle servicing.</li>
    <li>Avoid unnecessary idling.</li>
    <li>Drive at moderate and consistent speeds.</li>
    <li>Reduce excess vehicle weight.</li>
    <li>Use cruise control when appropriate.</li>
    <li>Plan routes to minimize traffic delays.</li>
    <li>Keep engines and batteries in good condition.</li>
  </ul>

  <h3>Why Use Our Fuel & Energy Efficiency Converter?</h3>

  <p>
    Our converter is designed to provide fast, reliable, and user-friendly efficiency calculations for both conventional and alternative-energy vehicles. Whether you are comparing fuel economy ratings, estimating operating costs, conducting engineering research, or learning about energy consumption, the tool delivers accurate results within seconds.
  </p>

  <p>
    With support for multiple international measurement systems, energy-based calculations, and electric vehicle metrics, it serves as a comprehensive solution for anyone working with fuel and energy efficiency data.
  </p>

  <h3>Conclusion</h3>

  <p>
    Fuel and energy efficiency measurements play a vital role in transportation, economics, engineering, and environmental sustainability. Because different countries and industries use different units, converting efficiency values accurately is essential for meaningful comparisons and informed decision-making.
  </p>

  <p>
    Our Free Online Fuel & Energy Efficiency Conversion Tool simplifies this process by supporting a wide range of efficiency and energy consumption units. Whether you are a vehicle owner, fleet manager, student, engineer, researcher, or environmentally conscious consumer, this tool provides the accuracy and convenience needed to understand efficiency data with confidence.
  </p>

  <p>
    Use the converter whenever you need to compare vehicles, estimate operating costs, evaluate environmental impact, or perform technical calculations. Accurate efficiency conversions help you make smarter decisions, save money, and better understand how energy is used in modern transportation systems.
  </p>

</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const inputValue = document.getElementById('inputValue');
    const inputUnit = document.getElementById('inputUnit');
    const convertButton = document.getElementById('convertButton');
    const swapButton = document.getElementById('swapButton');
    const copyButton = document.getElementById('copyButton');
    const resetButton = document.getElementById('resetButton');
    const alertContainer = document.getElementById('alertContainer');

    // Result elements
    const resultKmL = document.getElementById('resultKmL');
    const resultMpgUS = document.getElementById('resultMpgUS');
    const resultL100km = document.getElementById('resultL100km');
    const resultMpgUK = document.getElementById('resultMpgUK');
    const resultKwh100km = document.getElementById('resultKwh100km');
    const resultMjKm = document.getElementById('resultMjKm');
    const resultGal100mi = document.getElementById('resultGal100mi');

    // Energy content constants (for conversions)
    const ENERGY_DENSITY = {
      GASOLINE_MJ_L: 34.2,
      GASOLINE_KWH_L: 9.5,
      DIESEL_MJ_L: 38.6,
      DIESEL_KWH_L: 10.7
    };

    // Initialize with default conversion
    convertEfficiency();

    // Event listeners
    convertButton.addEventListener('click', convertEfficiency);
    inputValue.addEventListener('input', convertEfficiency);
    inputUnit.addEventListener('change', convertEfficiency);
    
    swapButton.addEventListener('click', function() {
      showAlert('Use the unit selector to choose different conversion units', 'info');
    });
    
    copyButton.addEventListener('click', copyResults);
    resetButton.addEventListener('click', resetConverter);

    function convertEfficiency() {
      const value = parseFloat(inputValue.value) || 0;
      const fromUnit = inputUnit.value;
      
      // Convert to km/L first (as base unit)
      let kmL;
      
      switch (fromUnit) {
        // Distance per fuel units
        case 'kmL':
          kmL = value;
          break;
        case 'mL':
          kmL = value / 1000;
          break;
        case 'mpgUS':
          kmL = value / 2.352;
          break;
        case 'mpgUK':
          kmL = value / 2.825;
          break;
        case 'ftgal':
          kmL = value * 0.000189394;
          break;
        
        // Fuel consumption units
        case 'L100km':
          kmL = 100 / value;
          break;
        case 'gal100mi':
          kmL = 235.215 / value;
          break;
        case 'kL1000km':
          kmL = 1000 / value;
          break;
        
        // Energy-based efficiency units
        case 'MJkm':
          kmL = ENERGY_DENSITY.GASOLINE_MJ_L / value;
          break;
        case 'kWh100km':
          kmL = (ENERGY_DENSITY.GASOLINE_KWH_L * 100) / value;
          break;
        
        // Other units
        case 'galmiUS':
          kmL = 2.352 / value;
          break;
        case 'galmiUK':
          kmL = 2.825 / value;
          break;
        case 'Jm':
          kmL = (ENERGY_DENSITY.GASOLINE_MJ_L * 1000) / value;
          break;
        case 'Whkm':
          kmL = ENERGY_DENSITY.GASOLINE_KWH_L / (value / 1000);
          break;
        
        default:
          kmL = value;
      }
      
      // Convert to all other units from kmL
      resultKmL.textContent = formatNumber(kmL);
      resultMpgUS.textContent = formatNumber(kmL * 2.352);
      resultL100km.textContent = formatNumber(100 / kmL);
      resultMpgUK.textContent = formatNumber(kmL * 2.825);
      resultKwh100km.textContent = formatNumber((ENERGY_DENSITY.GASOLINE_KWH_L * 100) / kmL);
      resultMjKm.textContent = formatNumber(ENERGY_DENSITY.GASOLINE_MJ_L / kmL);
      resultGal100mi.textContent = formatNumber(235.215 / kmL);
    }

    function formatNumber(num) {
      if (num === 0) return '0.0000';
      if (!isFinite(num)) return '∞';
      
      if (Math.abs(num) < 0.0001) {
        return num.toExponential(6);
      } else if (Math.abs(num) < 1) {
        return num.toFixed(6).replace(/\.?0+$/, '');
      } else if (Math.abs(num) < 1000) {
        return num.toFixed(4).replace(/\.?0+$/, '');
      } else if (Math.abs(num) < 1000000) {
        return num.toFixed(2).replace(/\.?0+$/, '');
      } else {
        return num.toExponential(4);
      }
    }

    function copyResults() {
      const results = `Fuel Efficiency Conversion Results:
Input: ${inputValue.value} ${getUnitName(inputUnit.value)}
km/L: ${resultKmL.textContent}
mpg (US): ${resultMpgUS.textContent}
L/100 km: ${resultL100km.textContent}
mpg (UK): ${resultMpgUK.textContent}
kWh/100 km: ${resultKwh100km.textContent}
MJ/km: ${resultMjKm.textContent}
gal/100 mi: ${resultGal100mi.textContent}`;

      navigator.clipboard.writeText(results).then(() => {
        showAlert('Conversion results copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy results: ' + err, 'error');
      });
    }

    function resetConverter() {
      inputValue.value = '15';
      inputUnit.selectedIndex = 0;
      convertEfficiency();
      showAlert('Converter has been reset', 'success');
    }

    function getUnitName(unitValue) {
      const unitNames = {
        'kmL': 'Kilometer per Liter (km/L)',
        'mL': 'Meter per Liter (m/L)',
        'mpgUS': 'Mile per Gallon (US) (mpg)',
        'mpgUK': 'Mile per Gallon (UK) (mpg)',
        'ftgal': 'Foot per Gallon (ft/gal)',
        'L100km': 'Liter per 100 km (L/100 km)',
        'gal100mi': 'Gallon per 100 miles (gal/100 mi)',
        'kL1000km': 'Kiloliter per 1000 km (kL/1000 km)',
        'MJkm': 'Megajoule per km (MJ/km)',
        'kWh100km': 'Kilowatt-hour per 100 km (kWh/100 km)',
        'galmiUS': 'Gallons per mile (US)',
        'galmiUK': 'Gallons per mile (UK)',
        'Jm': 'Joule per meter (J/m)',
        'Whkm': 'Watt-hour per km (Wh/km)'
      };
      return unitNames[unitValue] || unitValue;
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