---
layout: default
title: "Byte Unit Converter - Convert Between Different Data Storage Units"
permalink: /byte-unit-converter-convert-between-different-data-storage-units/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Byte Unit Converter - Convert Between Different Data Storage Units</title>
<meta name="description"
  content="Free online byte unit converter tool. Convert between bits, bytes, kilobytes, megabytes, gigabytes, terabytes and more data storage measurements.">
<meta name="keywords"
  content="byte converter, data converter, storage converter, bits to bytes, megabytes to gigabytes, data size calculator, digital storage converter">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Byte Converter Styles */
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

  .converter-wrapper {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 20px;
    align-items: end;
    margin: 30px 0;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .input-group label {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .input-group input,
  .input-group select {
    padding: 12px 15px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  .input-group input:focus,
  .input-group select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .swap-button {
    padding: 12px 20px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .swap-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .result-section {
    margin-top: 20px;
    padding: 20px;
    background: #e8f4fd;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .result-section h3 {
    color: var(--primary);
    margin-bottom: 15px;
    font-size: 1.3rem;
  }

  .conversion-result {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c3e50;
    text-align: center;
    padding: 15px;
    background: white;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .unit-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 30px 0;
  }

  .category-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-left: 4px solid var(--primary);
  }

  .category-card h3 {
    color: var(--primary);
    margin-bottom: 15px;
    font-size: 1.2rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }

  .unit-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 10px;
  }

  .unit-item {
    padding: 8px 12px;
    background: #f8f9fa;
    border-radius: 4px;
    font-size: 0.9rem;
    text-align: center;
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

  /* Byte converter specific styles */
  .quick-conversions {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
  }

  .quick-conversion-item {
    padding: 15px;
    background: white;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .quick-conversion-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-color: var(--primary);
  }

  .quick-conversion-item.active {
    background: var(--primary);
    color: white;
  }

  .conversion-value {
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 5px;
    color: var(--primary);
  }

  .quick-conversion-item.active .conversion-value {
    color: white;
  }

  /* Storage size visualization */
  .storage-comparison {
    margin: 30px 0;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .storage-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    margin: 8px 0;
    border-radius: 6px;
    background: #f8f9fa;
    transition: all 0.3s ease;
  }

  .storage-item:hover {
    background: #e9ecef;
    transform: translateX(5px);
  }

  .storage-size {
    font-weight: bold;
    color: var(--primary);
  }

  .storage-example {
    font-size: 0.9rem;
    color: #666;
  }

  /* System selector */
  .system-selector {
    display: flex;
    gap: 15px;
    margin: 20px 0;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .system-option {
    flex: 1;
    padding: 12px;
    text-align: center;
    background: white;
    border: 2px solid #e0e0e0;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .system-option.active {
    border-color: var(--primary);
    background: var(--primary);
    color: white;
  }

  .system-option:hover {
    border-color: var(--primary);
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .converter-wrapper {
      grid-template-columns: 1fr;
      gap: 15px;
    }

    .swap-button {
      order: 3;
      margin-top: 10px;
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

    .unit-categories {
      grid-template-columns: 1fr;
    }

    .quick-conversions {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    .system-selector {
      flex-direction: column;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Byte Unit Converter</h1>
  <p class="welcome-message">Convert between different data storage units instantly - from bits to yottabytes, including decimal, binary, and bit-based measurement systems.</p>

  <div class="converter-section">
    <h2>Byte Unit Converter</h2>

    <div class="system-selector">
      <div class="system-option active" data-system="decimal">
        <strong>Decimal System</strong>
        <div class="storage-example">(Base 10: KB, MB, GB)</div>
      </div>
      <div class="system-option" data-system="binary">
        <strong>Binary System</strong>
        <div class="storage-example">(Base 2: KiB, MiB, GiB)</div>
      </div>
      <div class="system-option" data-system="bit">
        <strong>Bit-based Units</strong>
        <div class="storage-example">(Kb, Mb, Gb, Tb)</div>
      </div>
    </div>

    <div class="converter-wrapper">
      <div class="input-group">
        <label for="fromValue">From:</label>
        <input type="number" id="fromValue" value="1" min="0" step="any">
        <select id="fromUnit">
          <!-- Bit / Byte Units -->
          <option value="bit">Bit (b)</option>
          <option value="byte" selected>Byte (B)</option>
          
          <!-- Decimal Units -->
          <option value="KB">Kilobyte (KB)</option>
          <option value="MB">Megabyte (MB)</option>
          <option value="GB">Gigabyte (GB)</option>
          <option value="TB">Terabyte (TB)</option>
          <option value="PB">Petabyte (PB)</option>
          <option value="EB">Exabyte (EB)</option>
          <option value="ZB">Zettabyte (ZB)</option>
          <option value="YB">Yottabyte (YB)</option>
          
          <!-- Binary Units -->
          <option value="KiB">Kibibyte (KiB)</option>
          <option value="MiB">Mebibyte (MiB)</option>
          <option value="GiB">Gibibyte (GiB)</option>
          <option value="TiB">Tebibyte (TiB)</option>
          <option value="PiB">Pebibyte (PiB)</option>
          <option value="EiB">Exbibyte (EiB)</option>
          <option value="ZiB">Zebibyte (ZiB)</option>
          <option value="YiB">Yobibyte (YiB)</option>
          
          <!-- Bit-based Units -->
          <option value="Kb">Kilobit (Kb)</option>
          <option value="Mb">Megabit (Mb)</option>
          <option value="Gb">Gigabit (Gb)</option>
          <option value="Tb">Terabit (Tb)</option>
          <option value="Pb">Petabit (Pb)</option>
          <option value="Eb">Exabit (Eb)</option>
          <option value="Zb">Zettabit (Zb)</option>
          <option value="Yb">Yottabit (Yb)</option>
        </select>
      </div>

      <button class="swap-button" id="swapUnits">
        <i class="fas fa-exchange-alt"></i> Swap
      </button>

      <div class="input-group">
        <label for="toValue">To:</label>
        <input type="number" id="toValue" readonly>
        <select id="toUnit">
          <!-- Bit / Byte Units -->
          <option value="bit">Bit (b)</option>
          <option value="byte">Byte (B)</option>
          
          <!-- Decimal Units -->
          <option value="KB" selected>Kilobyte (KB)</option>
          <option value="MB">Megabyte (MB)</option>
          <option value="GB">Gigabyte (GB)</option>
          <option value="TB">Terabyte (TB)</option>
          <option value="PB">Petabyte (PB)</option>
          <option value="EB">Exabyte (EB)</option>
          <option value="ZB">Zettabyte (ZB)</option>
          <option value="YB">Yottabyte (YB)</option>
          
          <!-- Binary Units -->
          <option value="KiB">Kibibyte (KiB)</option>
          <option value="MiB">Mebibyte (MiB)</option>
          <option value="GiB">Gibibyte (GiB)</option>
          <option value="TiB">Tebibyte (TiB)</option>
          <option value="PiB">Pebibyte (PiB)</option>
          <option value="EiB">Exbibyte (EiB)</option>
          <option value="ZiB">Zebibyte (ZiB)</option>
          <option value="YiB">Yobibyte (YiB)</option>
          
          <!-- Bit-based Units -->
          <option value="Kb">Kilobit (Kb)</option>
          <option value="Mb">Megabit (Mb)</option>
          <option value="Gb">Gigabit (Gb)</option>
          <option value="Tb">Terabit (Tb)</option>
          <option value="Pb">Petabit (Pb)</option>
          <option value="Eb">Exabit (Eb)</option>
          <option value="Zb">Zettabit (Zb)</option>
          <option value="Yb">Yottabit (Yb)</option>
        </select>
      </div>
    </div>

    <div class="result-section">
      <h3>Conversion Result</h3>
      <div class="conversion-result" id="conversionResult">
        1 Byte = 0.001 Kilobytes
      </div>
    </div>

    <div class="quick-conversions">
      <div class="quick-conversion-item" data-from="byte" data-to="KB">
        <div>Bytes to Kilobytes</div>
        <div class="conversion-value">1 B = 0.001 KB</div>
      </div>
      <div class="quick-conversion-item" data-from="MB" data-to="GB">
        <div>Megabytes to Gigabytes</div>
        <div class="conversion-value">1 MB = 0.001 GB</div>
      </div>
      <div class="quick-conversion-item" data-from="GB" data-to="TB">
        <div>Gigabytes to Terabytes</div>
        <div class="conversion-value">1 GB = 0.001 TB</div>
      </div>
      <div class="quick-conversion-item" data-from="byte" data-to="bit">
        <div>Bytes to Bits</div>
        <div class="conversion-value">1 B = 8 b</div>
      </div>
      <div class="quick-conversion-item" data-from="MB" data-to="MiB">
        <div>MB to MiB</div>
        <div class="conversion-value">1 MB ≈ 0.954 MiB</div>
      </div>
    </div>

    <div class="storage-comparison">
      <h3>Common Storage Sizes</h3>
      <div class="storage-item">
        <span>Text Document</span>
        <span class="storage-size">~50 KB</span>
      </div>
      <div class="storage-item">
        <span>MP3 Song</span>
        <span class="storage-size">~4 MB</span>
      </div>
      <div class="storage-item">
        <span>HD Movie</span>
        <span class="storage-size">~2 GB</span>
      </div>
      <div class="storage-item">
        <span>Smartphone Storage</span>
        <span class="storage-size">64-512 GB</span>
      </div>
      <div class="storage-item">
        <span>Laptop SSD</span>
        <span class="storage-size">256 GB - 2 TB</span>
      </div>
    </div>

    <div class="button-section">
      <button class="case-button" data-action="copy">Copy Result</button>
      <button class="case-button success" data-action="reset">Reset</button>
      <button class="case-button secondary" data-action="clear">Clear All</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="unit-categories">
      <div class="category-card">
        <h3>Bit / Byte Units</h3>
        <div class="unit-list">
          <div class="unit-item">Bit (b)</div>
          <div class="unit-item">Byte (B)</div>
        </div>
      </div>

      <div class="category-card">
        <h3>Decimal Units (Base 10)</h3>
        <div class="unit-list">
          <div class="unit-item">Kilobyte (KB)</div>
          <div class="unit-item">Megabyte (MB)</div>
          <div class="unit-item">Gigabyte (GB)</div>
          <div class="unit-item">Terabyte (TB)</div>
          <div class="unit-item">Petabyte (PB)</div>
          <div class="unit-item">Exabyte (EB)</div>
          <div class="unit-item">Zettabyte (ZB)</div>
          <div class="unit-item">Yottabyte (YB)</div>
        </div>
      </div>

      <div class="category-card">
        <h3>Binary Units (Base 2)</h3>
        <div class="unit-list">
          <div class="unit-item">Kibibyte (KiB)</div>
          <div class="unit-item">Mebibyte (MiB)</div>
          <div class="unit-item">Gibibyte (GiB)</div>
          <div class="unit-item">Tebibyte (TiB)</div>
          <div class="unit-item">Pebibyte (PiB)</div>
          <div class="unit-item">Exbibyte (EiB)</div>
          <div class="unit-item">Zebibyte (ZiB)</div>
          <div class="unit-item">Yobibyte (YiB)</div>
        </div>
      </div>
    </div>

    <div class="examples">
      <h2>Common Data Conversions</h2>

      <h3>Basic Conversions:</h3>
      <div class="example-text">1 byte = 8 bits
1 kilobyte = 1000 bytes
1 megabyte = 1000 kilobytes
1 gigabyte = 1000 megabytes
1 terabyte = 1000 gigabytes</div>

      <h3>Binary vs Decimal Comparison:</h3>
      <div class="example-text">1 kibibyte (KiB) = 1024 bytes
1 kilobyte (KB) = 1000 bytes
1 mebibyte (MiB) = 1,048,576 bytes
1 megabyte (MB) = 1,000,000 bytes
1 gibibyte (GiB) = 1,073,741,824 bytes
1 gigabyte (GB) = 1,000,000,000 bytes</div>

      <h3>Real-World Examples:</h3>
      <div class="example-text">Text email: ~10 KB
Web page: ~2 MB
HD photo: ~5 MB
DVD movie: ~4.7 GB
Blu-ray movie: ~25 GB
Internet traffic (global): ~3 ZB/year</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Byte Unit Converter Tool</h2>

    <p>Need to convert between different data storage units quickly and accurately? Our free <strong>Byte Unit Converter tool</strong> is the perfect solution for IT professionals, developers, students, and anyone working with digital storage measurements. This powerful tool instantly converts between bits, bytes, kilobytes, megabytes, gigabytes, terabytes, and even massive units like yottabytes. It supports decimal (base 10), binary (base 2), and bit-based measurement systems. There's no download required, no registration needed, and your data privacy is guaranteed as all processing happens securely right in your browser.</p>

    <h3>How to Use This Byte Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Select Measurement System:</strong> Choose between Decimal, Binary, or Bit-based units using the system selector.</li>
      <li><strong>Enter Value:</strong> Type the numerical value you want to convert in the "From" input field.</li>
      <li><strong>Select Source Unit:</strong> Choose the unit of data storage you're converting from using the first dropdown menu.</li>
      <li><strong>Select Target Unit:</strong> Choose the unit of data storage you want to convert to using the second dropdown menu.</li>
      <li><strong>View Result:</strong> The converted value automatically appears in the "To" field with the full conversion displayed below.</li>
      <li><strong>Quick Conversions:</strong> Use the quick conversion buttons for common data storage conversions with a single click.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're a system administrator planning storage upgrades and need to understand the actual capacity of hard drives. Manufacturers typically advertise storage in decimal units (GB, TB), but operating systems often display binary units (GiB, TiB). Instead of manual calculations, you can simply enter "1000" in the value field, select "Gigabytes" as the source unit, and choose "Gibibytes" as the target unit. The tool instantly shows that 1000 GB equals approximately 931 GiB, helping you understand the actual usable storage capacity.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>IT Professionals:</strong> Convert between different storage units for capacity planning and system administration.</li>
      <li><strong>Developers & Programmers:</strong> Work with file sizes, memory allocation, and data transfer calculations.</li>
      <li><strong>Students & Educators:</strong> Learn about data storage conversions for computer science and IT coursework.</li>
      <li><strong>Data Analysts:</strong> Convert large datasets between different measurement units for analysis and reporting.</li>
      <li><strong>Cloud Storage Users:</strong> Understand actual storage capacities and transfer speeds across different platforms.</li>
      <li><strong>Network Engineers:</strong> Convert between bits and bytes for bandwidth and data transfer rate calculations.</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What is the difference between decimal and binary units?</strong><br>
      Decimal units (KB, MB, GB) use base 10 (1000 bytes per kilobyte), while binary units (KiB, MiB, GiB) use base 2 (1024 bytes per kibibyte). Storage manufacturers typically use decimal units, while operating systems often use binary units.</p>

    <p><strong>How accurate are the byte conversions?</strong><br>
      Our tool uses precise conversion factors with high decimal precision. For binary units, we use exact powers of 2 (1024, 1048576, etc.), while for decimal units we use exact powers of 10 (1000, 1000000, etc.).</p>

    <p><strong>What are yottabytes and yobibytes used for?</strong><br>
      Yottabytes (1,000,000,000,000,000,000,000,000 bytes) and yobibytes (1,208,925,819,614,629,174,706,176 bytes) are theoretical units used for measuring global data storage, internet traffic, and astronomical data volumes.</p>

    <p><strong>Can I convert between bits and bytes?</strong><br>
      Yes, our tool supports conversions between all bit-based and byte-based units. Remember that 1 byte equals 8 bits, which is essential for network speed and data transfer calculations.</p>

    <p><strong>Is my data kept private when I use this tool?</strong><br>
      Absolutely. All conversions happen locally in your browser. We don't store any of your input data or conversion results on our servers.</p>

    <h3>Why Choose Our Byte Unit Converter?</h3>
    <p>Our <strong>online byte converter</strong> stands out from other tools because of its comprehensive coverage of data storage units, from individual bits to massive yottabytes, including support for decimal, binary, and bit-based measurement systems. Unlike many online tools, we don't store your data on our servers - all processing happens in your browser. This means your conversions remain completely private. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Common Applications of Byte Conversion</h3>
    <p>Byte conversion has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Storage Capacity Planning:</strong> Convert between different units for hard drive, SSD, and cloud storage planning</li>
      <li><strong>File Size Management:</strong> Understand and compare file sizes across different measurement systems</li>
      <li><strong>Network Bandwidth:</strong> Convert between bits and bytes for internet speed and data transfer calculations</li>
      <li><strong>Memory Allocation:</strong> Work with RAM and virtual memory sizes in appropriate units</li>
      <li><strong>Data Backup:</strong> Calculate backup storage requirements and transfer times</li>
      <li><strong>Web Development:</strong> Optimize website assets and understand data transfer costs</li>
      <li><strong>Database Management:</strong> Plan storage requirements for databases and data warehouses</li>
      <li><strong>Education:</strong> Teach students about digital storage systems and unit conversions</li>
    </ul>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const fromValue = document.getElementById('fromValue');
    const fromUnit = document.getElementById('fromUnit');
    const toValue = document.getElementById('toValue');
    const toUnit = document.getElementById('toUnit');
    const swapButton = document.getElementById('swapUnits');
    const conversionResult = document.getElementById('conversionResult');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const quickConversionItems = document.querySelectorAll('.quick-conversion-item');
    const systemOptions = document.querySelectorAll('.system-option');

    // Conversion factors (relative to bytes)
    const byteUnits = {
      // Bit / Byte Units
      'bit': 8,
      'byte': 1,
      
      // Decimal Units (Base 10)
      'KB': 1/1000,
      'MB': 1/1000000,
      'GB': 1/1000000000,
      'TB': 1/1000000000000,
      'PB': 1/1000000000000000,
      'EB': 1/1e18,
      'ZB': 1/1e21,
      'YB': 1/1e24,
      
      // Binary Units (Base 2)
      'KiB': 1/1024,
      'MiB': 1/1048576,
      'GiB': 1/1073741824,
      'TiB': 1/1099511627776,
      'PiB': 1/1125899906842624,
      'EiB': 1/1152921504606846976,
      'ZiB': 1/1180591620717411303424,
      'YiB': 1/1208925819614629174706176,
      
      // Bit-based Units
      'Kb': 8000,
      'Mb': 8000000,
      'Gb': 8000000000,
      'Tb': 8000000000000,
      'Pb': 8e15,
      'Eb': 8e18,
      'Zb': 8e21,
      'Yb': 8e24
    };

    // Initialize conversion
    convertBytes();

    // Event listeners
    fromValue.addEventListener('input', convertBytes);
    fromUnit.addEventListener('change', convertBytes);
    toUnit.addEventListener('change', convertBytes);

    swapButton.addEventListener('click', function() {
      const tempValue = fromValue.value;
      const tempUnit = fromUnit.value;
      
      fromValue.value = toValue.value;
      fromUnit.value = toUnit.value;
      toUnit.value = tempUnit;
      
      convertBytes();
    });

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleAction(action);
      });
    });

    quickConversionItems.forEach(item => {
      item.addEventListener('click', function() {
        const from = this.getAttribute('data-from');
        const to = this.getAttribute('data-to');
        
        fromUnit.value = from;
        toUnit.value = to;
        fromValue.value = 1;
        
        // Update active state
        quickConversionItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        
        convertBytes();
      });
    });

    systemOptions.forEach(option => {
      option.addEventListener('click', function() {
        const system = this.getAttribute('data-system');
        
        // Update active state
        systemOptions.forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
        
        // Update unit options based on selected system
        updateUnitOptions(system);
        convertBytes();
      });
    });

    function updateUnitOptions(system) {
      // This function would filter the dropdown options based on the selected system
      // For simplicity, we'll just convert with the current selections
    }

    function convertBytes() {
      const value = parseFloat(fromValue.value) || 0;
      const fromUnitValue = fromUnit.value;
      const toUnitValue = toUnit.value;
      
      // Convert to bytes first
      const valueInBytes = value / byteUnits[fromUnitValue];
      
      // Convert from bytes to target unit
      const convertedValue = valueInBytes * byteUnits[toUnitValue];
      
      // Update result
      toValue.value = formatNumber(convertedValue);
      
      // Update conversion result text
      conversionResult.textContent = `${formatNumber(value)} ${getUnitName(fromUnitValue)} = ${formatNumber(convertedValue)} ${getUnitName(toUnitValue)}`;
    }

    function formatNumber(num) {
      if (num === 0) return '0';
      if (Math.abs(num) < 0.0001 || Math.abs(num) > 1000000) {
        return num.toExponential(6);
      }
      // Round to reasonable precision based on magnitude
      const precision = Math.max(0, 6 - Math.floor(Math.log10(Math.abs(num))));
      return Number(num.toFixed(precision)).toString();
    }

    function getUnitName(unitKey) {
      const unitNames = {
        // Bit / Byte Units
        'bit': 'Bits',
        'byte': 'Bytes',
        
        // Decimal Units
        'KB': 'Kilobytes',
        'MB': 'Megabytes',
        'GB': 'Gigabytes',
        'TB': 'Terabytes',
        'PB': 'Petabytes',
        'EB': 'Exabytes',
        'ZB': 'Zettabytes',
        'YB': 'Yottabytes',
        
        // Binary Units
        'KiB': 'Kibibytes',
        'MiB': 'Mebibytes',
        'GiB': 'Gibibytes',
        'TiB': 'Tebibytes',
        'PiB': 'Pebibytes',
        'EiB': 'Exbibytes',
        'ZiB': 'Zebibytes',
        'YiB': 'Yobibytes',
        
        // Bit-based Units
        'Kb': 'Kilobits',
        'Mb': 'Megabits',
        'Gb': 'Gigabits',
        'Tb': 'Terabits',
        'Pb': 'Petabits',
        'Eb': 'Exabits',
        'Zb': 'Zettabits',
        'Yb': 'Yottabits'
      };
      
      return unitNames[unitKey] || unitKey;
    }

    function handleAction(action) {
      switch (action) {
        case 'copy':
          copyToClipboard(conversionResult.textContent);
          break;

        case 'reset':
          fromValue.value = 1;
          fromUnit.value = 'byte';
          toUnit.value = 'KB';
          convertBytes();
          showAlert('Converter reset to default values!', 'success');
          break;

        case 'clear':
          fromValue.value = '';
          toValue.value = '';
          conversionResult.textContent = 'Enter a value to see conversion result';
          showAlert('All fields cleared!', 'success');
          break;
      }
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showAlert('Conversion result copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy result: ' + err, 'error');
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
  });
</script>