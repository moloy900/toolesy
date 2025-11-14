---
layout: default
title: "Data Transfer Rate Converter - Convert bps, kbps, Mbps, Gbps, MB/s & More"
permalink: /data-transfer-rate-converter-convert-bps-kbps-mbps-gbps-mbs-more/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Online Data Transfer Rate Converter - Convert bps, kbps, Mbps, Gbps, MB/s & More</title>
<meta name="description"
  content="Free online data transfer rate converter tool. Convert between bps, kbps, Mbps, Gbps, Tbps, B/s, kB/s, MB/s, GB/s, TB/s, Kib/s, Mib/s, Gib/s, Tib/s, T1, T3, E1 and more.">
<meta name="keywords"
  content="data transfer rate converter, bps to kbps, mbps to gbps, mb/s to mbps, internet speed converter, bandwidth converter, network speed converter, telecom rates converter">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Data Transfer Rate Converter Styles */
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

  .converter-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin: 30px 0;
  }

  .converter-card {
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border-top: 4px solid var(--primary);
  }

  .converter-card h3 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.3rem;
    text-align: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
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

  .input-group input,
  .input-group select {
    width: 100%;
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

  .result-section {
    margin-top: 25px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid #27ae60;
  }

  .result-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #e0e0e0;
  }

  .result-item:last-child {
    border-bottom: none;
  }

  .result-item span:first-child {
    font-weight: 600;
    color: #2c3e50;
  }

  .result-item span:last-child {
    font-weight: bold;
    color: var(--primary);
    font-family: 'Courier New', monospace;
  }

  .unit-info {
    margin-top: 25px;
    padding: 20px;
    background: #fff3cd;
    border-radius: 8px;
    border-left: 4px solid #ffc107;
  }

  .unit-info h4 {
    color: #856404;
    margin-bottom: 10px;
  }

  .unit-info p {
    color: #856404;
    margin-bottom: 8px;
    line-height: 1.6;
  }

  .reference-section {
    margin-top: 25px;
    padding: 20px;
    background: #e8f4fd;
    border-radius: 8px;
    border-left: 4px solid #3498db;
  }

  .reference-section h4 {
    color: #2c3e50;
    margin-bottom: 15px;
  }

  .reference-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #d1ecf1;
  }

  .reference-item:last-child {
    border-bottom: none;
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
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .converter-grid {
      grid-template-columns: 1fr;
      gap: 20px;
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
</style>

<div class="converter-container">
  <h1>Free Online Data Transfer Rate Converter</h1>
  <p class="welcome-message">Convert between different data transfer rate units instantly. Convert bps, kbps, Mbps, Gbps, Tbps, B/s, kB/s, MB/s, GB/s, TB/s, Kib/s, Mib/s, Gib/s, Tib/s, T1, T3, E1 and more with precision.</p>

  <div class="converter-section">
    <h2>Data Transfer Rate Converter</h2>

    <div class="converter-grid">
      <!-- Bits-based Units Converter -->
      <div class="converter-card">
        <h3>Bits-based Units</h3>
        <div class="input-group">
          <label for="bpsInput">Bits per second (bps)</label>
          <input type="number" id="bpsInput" placeholder="Enter bps value" step="any">
        </div>
        <div class="input-group">
          <label for="kbpsInput">Kilobits per second (kbps)</label>
          <input type="number" id="kbpsInput" placeholder="Enter kbps value" step="any">
        </div>
        <div class="input-group">
          <label for="mbpsInput">Megabits per second (Mbps)</label>
          <input type="number" id="mbpsInput" placeholder="Enter Mbps value" step="any">
        </div>
        <div class="input-group">
          <label for="gbpsInput">Gigabits per second (Gbps)</label>
          <input type="number" id="gbpsInput" placeholder="Enter Gbps value" step="any">
        </div>
        <div class="input-group">
          <label for="tbpsInput">Terabits per second (Tbps)</label>
          <input type="number" id="tbpsInput" placeholder="Enter Tbps value" step="any">
        </div>
        
        <div class="result-section">
          <h4>Bits to Bytes Conversion:</h4>
          <div class="result-item">
            <span>Mbps to MB/s:</span>
            <span id="mbpsToMbs">0</span>
          </div>
          <div class="result-item">
            <span>Gbps to GB/s:</span>
            <span id="gbpsToGbs">0</span>
          </div>
        </div>
      </div>

      <!-- Bytes-based Units Converter -->
      <div class="converter-card">
        <h3>Bytes-based Units</h3>
        <div class="input-group">
          <label for="bsInput">Bytes per second (B/s)</label>
          <input type="number" id="bsInput" placeholder="Enter B/s value" step="any">
        </div>
        <div class="input-group">
          <label for="kbsInput">Kilobytes per second (kB/s)</label>
          <input type="number" id="kbsInput" placeholder="Enter kB/s value" step="any">
        </div>
        <div class="input-group">
          <label for="mbsInput">Megabytes per second (MB/s)</label>
          <input type="number" id="mbsInput" placeholder="Enter MB/s value" step="any">
        </div>
        <div class="input-group">
          <label for="gbsInput">Gigabytes per second (GB/s)</label>
          <input type="number" id="gbsInput" placeholder="Enter GB/s value" step="any">
        </div>
        <div class="input-group">
          <label for="tbsInput">Terabytes per second (TB/s)</label>
          <input type="number" id="tbsInput" placeholder="Enter TB/s value" step="any">
        </div>
        
        <div class="result-section">
          <h4>Bytes to Bits Conversion:</h4>
          <div class="result-item">
            <span>MB/s to Mbps:</span>
            <span id="mbsToMbps">0</span>
          </div>
          <div class="result-item">
            <span>GB/s to Gbps:</span>
            <span id="gbsToGbps">0</span>
          </div>
        </div>
      </div>

      <!-- Binary (IEC) & Telecom Units Converter -->
      <div class="converter-card">
        <h3>Binary (IEC) & Telecom Units</h3>
        <div class="input-group">
          <label for="kibpsInput">Kibibits per second (Kib/s)</label>
          <input type="number" id="kibpsInput" placeholder="Enter Kib/s value" step="any">
        </div>
        <div class="input-group">
          <label for="mibpsInput">Mebibits per second (Mib/s)</label>
          <input type="number" id="mibpsInput" placeholder="Enter Mib/s value" step="any">
        </div>
        <div class="input-group">
          <label for="gibpsInput">Gibibits per second (Gib/s)</label>
          <input type="number" id="gibpsInput" placeholder="Enter Gib/s value" step="any">
        </div>
        <div class="input-group">
          <label for="tibpsInput">Tebibits per second (Tib/s)</label>
          <input type="number" id="tibpsInput" placeholder="Enter Tib/s value" step="any">
        </div>
        
        <div class="input-group">
          <label for="t1Input">T1 Line (1.544 Mbps)</label>
          <input type="number" id="t1Input" placeholder="Enter T1 value" step="any">
        </div>
        <div class="input-group">
          <label for="t3Input">T3 Line (44.736 Mbps)</label>
          <input type="number" id="t3Input" placeholder="Enter T3 value" step="any">
        </div>
        <div class="input-group">
          <label for="e1Input">E1 Line (2.048 Mbps)</label>
          <input type="number" id="e1Input" placeholder="Enter E1 value" step="any">
        </div>
        
        <div class="result-section">
          <h4>Binary Conversions:</h4>
          <div class="result-item">
            <span>Mib/s to Mbps:</span>
            <span id="mibpsToMbps">0</span>
          </div>
          <div class="result-item">
            <span>Gib/s to Gbps:</span>
            <span id="gibpsToGbps">0</span>
          </div>
        </div>
      </div>
    </div>

    <div class="unit-info">
      <h4>Data Transfer Rate Definitions & Conversion Factors</h4>
      <p><strong>bps (bits per second):</strong> Basic unit of data transfer rate</p>
      <p><strong>kbps/Mbps/Gbps:</strong> Decimal multiples (1 kbps = 1,000 bps, 1 Mbps = 1,000,000 bps)</p>
      <p><strong>B/s (Bytes per second):</strong> 1 Byte = 8 bits (1 B/s = 8 bps)</p>
      <p><strong>Kib/s/Mib/s/Gib/s:</strong> Binary multiples (1 Kib/s = 1,024 bps, 1 Mib/s = 1,048,576 bps)</p>
      <p><strong>T1 Line:</strong> Digital transmission line carrying 1.544 Mbps</p>
      <p><strong>T3 Line:</strong> Digital transmission line carrying 44.736 Mbps</p>
      <p><strong>E1 Line:</strong> European digital transmission line carrying 2.048 Mbps</p>
    </div>

    <div class="reference-section">
      <h4>Common Data Transfer Rate References</h4>
      <div class="reference-item">
        <span>Dial-up Modem:</span>
        <span>56 kbps</span>
      </div>
      <div class="reference-item">
        <span>Basic DSL:</span>
        <span>1-10 Mbps</span>
      </div>
      <div class="reference-item">
        <span>Cable Internet:</span>
        <span>10-100 Mbps</span>
      </div>
      <div class="reference-item">
        <span>Fiber Optic:</span>
        <span>100 Mbps - 1 Gbps</span>
      </div>
      <div class="reference-item">
        <span>USB 2.0:</span>
        <span>480 Mbps</span>
      </div>
      <div class="reference-item">
        <span>USB 3.0:</span>
        <span>5 Gbps</span>
      </div>
      <div class="reference-item">
        <span>Gigabit Ethernet:</span>
        <span>1 Gbps</span>
      </div>
      <div class="reference-item">
        <span>10 Gigabit Ethernet:</span>
        <span>10 Gbps</span>
      </div>
    </div>

    <div class="button-section">
      <button class="case-button" data-action="calculate">Calculate All</button>
      <button class="case-button" data-action="reset">Reset All</button>
      <button class="case-button success" data-action="copy">Copy Results</button>
      <button class="case-button secondary" data-action="clear">Clear All</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Common Data Transfer Rate Examples</h2>

      <h3>Internet Speed Examples:</h3>
      <div class="example-text">Basic Broadband: 25 Mbps = 3.125 MB/s
High-Speed Internet: 100 Mbps = 12.5 MB/s
Gigabit Internet: 1 Gbps = 125 MB/s
10 Gigabit Internet: 10 Gbps = 1.25 GB/s</div>

      <h3>File Transfer Time Examples (1GB file):</h3>
      <div class="example-text">At 10 Mbps: ~13 minutes 20 seconds
At 100 Mbps: ~1 minute 20 seconds
At 1 Gbps: ~8 seconds
At 10 Gbps: ~0.8 seconds</div>

      <h3>Telecom Line Comparisons:</h3>
      <div class="example-text">T1 Line: 1.544 Mbps = 24 voice channels
E1 Line: 2.048 Mbps = 32 voice channels
T3 Line: 44.736 Mbps = 672 voice channels
OC-3: 155.52 Mbps = 3 T3 lines</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Data Transfer Rate Converter Tool</h2>

    <p>Working with network speeds, internet bandwidth, or data transfer measurements? Our free <strong>Data Transfer Rate Converter tool</strong> is the perfect solution for network engineers, IT professionals, students, and anyone dealing with digital data transmission. This comprehensive tool allows you to instantly convert between all major data transfer rate units including bits per second (bps, kbps, Mbps, Gbps, Tbps), bytes per second (B/s, kB/s, MB/s, GB/s, TB/s), binary units (Kib/s, Mib/s, Gib/s, Tib/s), and telecom standards (T1, T3, E1). There's no download required, no registration needed, and your data privacy is guaranteed as all calculations happen securely right in your browser.</p>

    <h3>How to Use This Data Transfer Rate Converter (Step-by-Step):</h3>
    <ul>
      <li><strong>Select Your Input:</strong> Enter the value you want to convert in any of the input fields (bps, Mbps, MB/s, etc.).</li>
      <li><strong>Automatic Calculation:</strong> The tool automatically calculates and displays all equivalent values in real-time as you type.</li>
      <li><strong>Review Results:</strong> Check the conversion results section for accurate conversions between all related data rate units.</li>
      <li><strong>Copy or Reset:</strong> Use the "Copy Results" button to save your conversions or "Reset All" to start over with new values.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're a network administrator comparing internet service plans. One provider advertises 500 Mbps download speed, while another advertises 60 MB/s. Instead of manually calculating the conversion (which could lead to errors), you simply enter "500" in the Mbps field. The tool instantly shows you the equivalent value of 62.5 MB/s, making it clear that the second provider offers slightly higher speed. This helps you make informed decisions about internet service purchases and network capacity planning.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Network Engineers:</strong> Convert between different data rate measurement systems for network design and troubleshooting.</li>
      <li><strong>IT Professionals:</strong> Quickly convert between bits and bytes for bandwidth monitoring and capacity planning.</li>
      <li><strong>Students & Educators:</strong> Learn data rate unit relationships and verify homework calculations with instant conversions.</li>
      <li><strong>Telecom Professionals:</strong> Convert between traditional telecom rates (T1, T3, E1) and modern bandwidth measurements.</li>
      <li><strong>Internet Users:</strong> Understand and compare internet speed measurements from different providers.</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><strong>What is the difference between Mbps and MB/s?</strong><br>
      Mbps (Megabits per second) measures data transfer rate in bits, while MB/s (Megabytes per second) measures in bytes. Since 1 byte = 8 bits, to convert Mbps to MB/s, divide by 8. For example, 100 Mbps = 12.5 MB/s.</p>

    <p><strong>What are binary (IEC) units like Mib/s vs decimal units like Mbps?</strong><br>
      Decimal units use base-10 (1 Mbps = 1,000,000 bps), while binary units use base-2 (1 Mib/s = 1,048,576 bps). Binary units are often used in computer memory and storage contexts.</p>

    <p><strong>Is my data kept private when I use this converter?</strong><br>
      Absolutely. All calculations happen locally in your browser. Your data transfer rate values are never sent to any server, meaning we never see, store, or have access to your data. It is 100% secure and private.</p>

    <p><strong>Can I use this tool on my mobile device?</strong><br>
      Yes, our website and converter are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets.</p>

    <p><strong>What are T1, T3, and E1 lines used for?</strong><br>
      These are digital transmission standards used in telecommunications. T1 (1.544 Mbps) and T3 (44.736 Mbps) are North American standards, while E1 (2.048 Mbps) is the European equivalent, commonly used for business internet and voice services.</p>

    <h3>Why Choose Our Data Transfer Rate Converter?</h3>
    <p>Our <strong>online data transfer rate converter</strong> stands out from other tools because of its comprehensive coverage, accuracy, and privacy features. Unlike many online converters, we don't process your data on our servers - all calculations happen in your browser. This means your sensitive network data, bandwidth measurements, and professional work remain completely private. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Common Applications of Data Transfer Rate Conversion</h3>
    <p>Data transfer rate conversion has numerous practical applications across various fields:</p>
    <ul>
      <li><strong>Network Design:</strong> Convert between different bandwidth measurement systems for network architecture planning</li>
      <li><strong>Internet Service Comparison:</strong> Compare internet speed offerings from different providers using consistent units</li>
      <li><strong>Data Center Management:</strong> Standardize bandwidth measurements across different systems and reports</li>
      <li><strong>Education & Training:</strong> Teach students the relationships between different data rate units and measurement systems</li>
      <li><strong>Telecommunications:</strong> Convert legacy telecom rates to modern bandwidth measurements for technology migration</li>
    </ul>

    <h3>Understanding Data Transfer Rate Units</h3>
    <p>Data transfer rate measurement involves several different unit systems, each serving specific contexts:</p>
    <ul>
      <li><strong>Bits per second (bps):</strong> Fundamental unit used in networking and telecommunications</li>
      <li><strong>Bytes per second (B/s):</strong> Commonly used in file transfer and storage contexts</li>
      <li><strong>Decimal multiples (kbps, Mbps, Gbps):</strong> Use base-10, standard in networking</li>
      <li><strong>Binary multiples (Kib/s, Mib/s, Gib/s):</strong> Use base-2, often used in computing contexts</li>
      <li><strong>Telecom standards (T1, T3, E1):</strong> Legacy digital transmission rates still used in business networks</li>
    </ul>

    <h3>Professional Applications</h3>
    <p>This converter is essential for professionals in various fields:</p>
    <ul>
      <li><strong>Network Architecture:</strong> Design networks with appropriate bandwidth capacity using consistent units</li>
      <li><strong>Cloud Computing:</strong> Calculate data transfer costs and requirements between different cloud services</li>
      <li><strong>Video Streaming:</strong> Convert between video bitrates and internet speed requirements</li>
      <li><strong>Data Backup:</strong> Estimate backup times based on available bandwidth and data size</li>
      <li><strong>VoIP Planning:</strong> Calculate bandwidth requirements for voice over IP services</li>
    </ul>

    <h3>Practical Conversion Examples</h3>
    <p>Understanding these common conversions can help in everyday IT tasks:</p>
    <ul>
      <li><strong>Internet Speed:</strong> 100 Mbps internet = 12.5 MB/s actual download speed</li>
      <li><strong>File Transfer:</strong> 1 GB file at 50 MB/s takes 20 seconds to transfer</li>
      <li><strong>Network Upgrade:</strong> Upgrading from T1 (1.544 Mbps) to fiber (100 Mbps) provides ~65x more bandwidth</li>
      <li><strong>Storage vs Transfer:</strong> 1 TB hard drive would take ~2.5 hours to fill at 100 MB/s transfer rate</li>
    </ul>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // Input elements
    const bpsInput = document.getElementById('bpsInput');
    const kbpsInput = document.getElementById('kbpsInput');
    const mbpsInput = document.getElementById('mbpsInput');
    const gbpsInput = document.getElementById('gbpsInput');
    const tbpsInput = document.getElementById('tbpsInput');
    const bsInput = document.getElementById('bsInput');
    const kbsInput = document.getElementById('kbsInput');
    const mbsInput = document.getElementById('mbsInput');
    const gbsInput = document.getElementById('gbsInput');
    const tbsInput = document.getElementById('tbsInput');
    const kibpsInput = document.getElementById('kibpsInput');
    const mibpsInput = document.getElementById('mibpsInput');
    const gibpsInput = document.getElementById('gibpsInput');
    const tibpsInput = document.getElementById('tibpsInput');
    const t1Input = document.getElementById('t1Input');
    const t3Input = document.getElementById('t3Input');
    const e1Input = document.getElementById('e1Input');
    
    // Result elements
    const mbpsToMbs = document.getElementById('mbpsToMbs');
    const gbpsToGbs = document.getElementById('gbpsToGbs');
    const mbsToMbps = document.getElementById('mbsToMbps');
    const gbsToGbps = document.getElementById('gbsToGbps');
    const mibpsToMbps = document.getElementById('mibpsToMbps');
    const gibpsToGbps = document.getElementById('gibpsToGbps');
    
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');

    // Conversion factors
    const DECIMAL_MULTIPLIER = 1000;
    const BINARY_MULTIPLIER = 1024;
    const BITS_TO_BYTES = 1/8;
    const BYTES_TO_BITS = 8;

    // Telecom line rates (in Mbps)
    const T1_RATE = 1.544;
    const T3_RATE = 44.736;
    const E1_RATE = 2.048;

    // Event listeners for automatic conversion
    const inputElements = [
      bpsInput, kbpsInput, mbpsInput, gbpsInput, tbpsInput,
      bsInput, kbsInput, mbsInput, gbsInput, tbsInput,
      kibpsInput, mibpsInput, gibpsInput, tibpsInput,
      t1Input, t3Input, e1Input
    ];

    inputElements.forEach(input => {
      input.addEventListener('input', performAllConversions);
    });

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleConverterAction(action);
      });
    });

    function performAllConversions() {
      // Get values from inputs
      const bpsValue = parseFloat(bpsInput.value) || 0;
      const kbpsValue = parseFloat(kbpsInput.value) || 0;
      const mbpsValue = parseFloat(mbpsInput.value) || 0;
      const gbpsValue = parseFloat(gbpsInput.value) || 0;
      const tbpsValue = parseFloat(tbpsInput.value) || 0;
      const bsValue = parseFloat(bsInput.value) || 0;
      const kbsValue = parseFloat(kbsInput.value) || 0;
      const mbsValue = parseFloat(mbsInput.value) || 0;
      const gbsValue = parseFloat(gbsInput.value) || 0;
      const tbsValue = parseFloat(tbsInput.value) || 0;
      const kibpsValue = parseFloat(kibpsInput.value) || 0;
      const mibpsValue = parseFloat(mibpsInput.value) || 0;
      const gibpsValue = parseFloat(gibpsInput.value) || 0;
      const tibpsValue = parseFloat(tibpsInput.value) || 0;
      const t1Value = parseFloat(t1Input.value) || 0;
      const t3Value = parseFloat(t3Input.value) || 0;
      const e1Value = parseFloat(e1Input.value) || 0;

      // Update related fields based on which input was changed
      if (this === mbpsInput && mbpsValue !== 0) {
        // Convert Mbps to other units
        const baseBps = mbpsValue * DECIMAL_MULTIPLIER * DECIMAL_MULTIPLIER;
        bpsInput.value = baseBps.toFixed(2);
        kbpsInput.value = (mbpsValue * DECIMAL_MULTIPLIER).toFixed(2);
        gbpsInput.value = (mbpsValue / DECIMAL_MULTIPLIER).toFixed(6);
        tbpsInput.value = (mbpsValue / (DECIMAL_MULTIPLIER * DECIMAL_MULTIPLIER)).toFixed(9);
        
        // Convert to bytes
        mbsInput.value = (mbpsValue * BITS_TO_BYTES).toFixed(2);
        
        // Convert to binary units
        mibpsInput.value = (baseBps / (BINARY_MULTIPLIER * BINARY_MULTIPLIER)).toFixed(2);
        
        // Convert to telecom units
        t1Input.value = (mbpsValue / T1_RATE).toFixed(2);
        t3Input.value = (mbpsValue / T3_RATE).toFixed(2);
        e1Input.value = (mbpsValue / E1_RATE).toFixed(2);
      } else if (this === mbsInput && mbsValue !== 0) {
        // Convert MB/s to other units
        const baseBs = mbsValue * DECIMAL_MULTIPLIER * DECIMAL_MULTIPLIER;
        bsInput.value = baseBs.toFixed(2);
        kbsInput.value = (mbsValue * DECIMAL_MULTIPLIER).toFixed(2);
        gbsInput.value = (mbsValue / DECIMAL_MULTIPLIER).toFixed(6);
        tbsInput.value = (mbsValue / (DECIMAL_MULTIPLIER * DECIMAL_MULTIPLIER)).toFixed(9);
        
        // Convert to bits
        mbpsInput.value = (mbsValue * BYTES_TO_BITS).toFixed(2);
      } else if (this === mibpsInput && mibpsValue !== 0) {
        // Convert Mib/s to other units
        const baseBps = mibpsValue * BINARY_MULTIPLIER * BINARY_MULTIPLIER;
        kibpsInput.value = (mibpsValue * BINARY_MULTIPLIER).toFixed(2);
        gibpsInput.value = (mibpsValue / BINARY_MULTIPLIER).toFixed(6);
        tibpsInput.value = (mibpsValue / (BINARY_MULTIPLIER * BINARY_MULTIPLIER)).toFixed(9);
        
        // Convert to decimal units
        mbpsInput.value = (baseBps / (DECIMAL_MULTIPLIER * DECIMAL_MULTIPLIER)).toFixed(2);
      } else if (this === t1Input && t1Value !== 0) {
        // Convert T1 lines to Mbps
        const mbps = t1Value * T1_RATE;
        mbpsInput.value = mbps.toFixed(2);
        t3Input.value = (mbps / T3_RATE).toFixed(2);
        e1Input.value = (mbps / E1_RATE).toFixed(2);
      }

      // Update all result displays
      updateResultDisplays();
    }

    function updateResultDisplays() {
      const mbpsValue = parseFloat(mbpsInput.value) || 0;
      const gbpsValue = parseFloat(gbpsInput.value) || 0;
      const mbsValue = parseFloat(mbsInput.value) || 0;
      const gbsValue = parseFloat(gbsInput.value) || 0;
      const mibpsValue = parseFloat(mibpsInput.value) || 0;
      const gibpsValue = parseFloat(gibpsInput.value) || 0;

      // Update result displays
      if (mbpsValue !== 0) {
        mbpsToMbs.textContent = (mbpsValue * BITS_TO_BYTES).toFixed(2) + ' MB/s';
      } else {
        mbpsToMbs.textContent = '0';
      }

      if (gbpsValue !== 0) {
        gbpsToGbs.textContent = (gbpsValue * BITS_TO_BYTES).toFixed(2) + ' GB/s';
      } else {
        gbpsToGbs.textContent = '0';
      }

      if (mbsValue !== 0) {
        mbsToMbps.textContent = (mbsValue * BYTES_TO_BITS).toFixed(2) + ' Mbps';
      } else {
        mbsToMbps.textContent = '0';
      }

      if (gbsValue !== 0) {
        gbsToGbps.textContent = (gbsValue * BYTES_TO_BITS).toFixed(2) + ' Gbps';
      } else {
        gbsToGbps.textContent = '0';
      }

      if (mibpsValue !== 0) {
        const mbps = (mibpsValue * BINARY_MULTIPLIER * BINARY_MULTIPLIER) / (DECIMAL_MULTIPLIER * DECIMAL_MULTIPLIER);
        mibpsToMbps.textContent = mbps.toFixed(2) + ' Mbps';
      } else {
        mibpsToMbps.textContent = '0';
      }

      if (gibpsValue !== 0) {
        const gbps = (gibpsValue * BINARY_MULTIPLIER * BINARY_MULTIPLIER * BINARY_MULTIPLIER) / (DECIMAL_MULTIPLIER * DECIMAL_MULTIPLIER * DECIMAL_MULTIPLIER);
        gibpsToGbps.textContent = gbps.toFixed(2) + ' Gbps';
      } else {
        gibpsToGbps.textContent = '0';
      }
    }

    function handleConverterAction(action) {
      switch (action) {
        case 'calculate':
          updateResultDisplays();
          showAlert('All conversions calculated successfully!', 'success');
          break;

        case 'reset':
          // Reset all inputs to 0
          inputElements.forEach(input => {
            input.value = '';
          });
          updateResultDisplays();
          showAlert('All fields reset successfully!', 'success');
          break;

        case 'copy':
          copyResultsToClipboard();
          break;

        case 'clear':
          // Clear all inputs and results
          inputElements.forEach(input => {
            input.value = '';
          });
          updateResultDisplays();
          showAlert('All fields cleared successfully!', 'success');
          break;
      }
    }

    function copyResultsToClipboard() {
      const results = `
Data Transfer Rate Conversion Results:
Mbps to MB/s: ${mbpsToMbs.textContent}
Gbps to GB/s: ${gbpsToGbs.textContent}
MB/s to Mbps: ${mbsToMbps.textContent}
GB/s to Gbps: ${gbsToGbps.textContent}
Mib/s to Mbps: ${mibpsToMbps.textContent}
Gib/s to Gbps: ${gibpsToGbps.textContent}

Generated using Data Transfer Rate Converter Tool
      `.trim();

      navigator.clipboard.writeText(results).then(() => {
        showAlert('Conversion results copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy results: ' + err, 'error');
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

    // Initialize with some example values
    mbpsInput.value = '100';
    performAllConversions.call(mbpsInput);
  });
</script>