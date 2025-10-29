---
layout: default
title: "Online Morse Code Translator - Convert Text to Morse Code"
permalink: /online-morse-code-translator-convert-text-to-morse-code/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Free Morse Code Translator Online | Text to Morse Code Converter</title>

<meta name="description" content="Free online Morse Code Translator tool. Convert text to Morse code and decode Morse to text instantly with audio playback, light signals, vibration option & learning guide. Perfect for beginners & ham radio enthusiasts.">

<meta name="keywords" content="morse code translator, morse code converter, text to morse, morse decoder, morse code audio, morse code learner, international morse code, ham radio morse, SOS signal translator, morse code practice">

<meta name="author" content="paramdip nath">
<meta name="robots" content="index, follow" />

<!-- ✅ Open Graph SEO -->
<meta property="og:title" content="Free Morse Code Translator Online | Text ↔ Morse Converter">
<meta property="og:description" content="Instant text to Morse code conversion with sound, light & vibration options. Best tool for learning Morse code.">
<meta property="og:url" content="https://toolesy.com/online-morse-code-translator-convert-text-to-morse-code">
<meta property="og:type" content="website">

<!-- ✅ Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free Online Morse Code Translator Tool">
<meta name="twitter:description" content="Convert text to Morse code and decode Morse instantly with sound & light signals.">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Morse Code Translator Styles */
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
    min-height: 120px;
    resize: vertical;
    font-family: 'Courier New', monospace;
    transition: border-color 0.3s;
  }

  .input-section textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .output-section {
    margin: 20px 0;
  }

  .output-section pre {
    width: 100%;
    padding: 18px;
    border: 2px solid #e0e6ed;
    border-radius: 10px;
    font-size: 16px;
    min-height: 120px;
    background: #f8f9fa;
    font-family: 'Courier New', monospace;
    white-space: pre-wrap;
    overflow-x: auto;
    line-height: 1.4;
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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
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

  .case-button.danger {
    background: #dc3545;
  }

  .case-button.danger:hover {
    background: #c82333;
  }

  .case-button:disabled {
    background: #6c757d;
    cursor: not-allowed;
    transform: none;
  }

  .case-button:disabled:hover {
    transform: none;
    box-shadow: none;
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

  .alert-info {
    background-color: #d1ecf1;
    color: #0c5460;
    border: 1px solid #bee5eb;
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
    line-height: 1.4;
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

  /* Morse Code specific styles */
  .morse-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .option-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .option-label {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .option-select, .option-input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
  }

  .option-input {
    width: 80px;
  }

  .option-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .option-checkbox input {
    width: 18px;
    height: 18px;
  }

  /* Control panel styles */
  .control-panel {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
  }

  .control-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .control-button {
    padding: 12px 15px;
    border: none;
    border-radius: 8px;
    background: var(--primary);
    color: white;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .control-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
  }

  .control-button:disabled {
    background: #6c757d;
    cursor: not-allowed;
    transform: none;
  }

  .control-button.active {
    background: var(--success);
  }

  /* Visual signal display */
  .signal-display {
    margin: 20px 0;
    padding: 20px;
    background: #2c3e50;
    border-radius: 10px;
    text-align: center;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .signal-light {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #34495e;
    transition: all 0.1s ease;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }

  .signal-light.active {
    background: #f39c12;
    box-shadow: 0 0 30px #f39c12;
  }

  .signal-text {
    color: white;
    font-family: monospace;
    font-size: 18px;
    margin-top: 10px;
  }

  /* Progress bar */
  .progress-container {
    margin: 20px 0;
    background: #e9ecef;
    border-radius: 10px;
    height: 8px;
    overflow: hidden;
  }

  .progress-bar {
    height: 100%;
    background: var(--primary);
    width: 0%;
    transition: width 0.3s ease;
  }

  /* Status indicator */
  .status-indicator {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    background: white;
    border-radius: 6px;
    margin: 10px 0;
  }

  .status-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #6c757d;
  }

  .status-dot.active {
    background: var(--success);
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
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

    .morse-options {
      grid-template-columns: 1fr;
    }

    .control-panel {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Morse Code Translator</h1>
  <p class="welcome-message">Convert text to Morse code and vice versa with audio playback, visual signals, and vibration. Perfect for learning Morse code, emergency communication, and educational purposes.</p>

  <div class="converter-section">
    <h2>Morse Code Translator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Character Count: </span>
        <span id="charCount">0</span>
      </div>
      <div class="counter-item">
        <span>Word Count: </span>
        <span id="wordCount">0</span>
      </div>
      <div class="counter-item">
        <span>Morse Length: </span>
        <span id="morseLength">0</span>
      </div>
      <div class="counter-item">
        <span>Translation Time: </span>
        <span id="translationTime">0s</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Input Text <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      <textarea id="textInput" rows="4" placeholder="Enter text to convert to Morse code..."></textarea>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".txt,.json" style="display: none;">

    <div class="morse-options">
      <div class="option-group">
        <label class="option-label">Translation Direction</label>
        <select id="translationDirection" class="option-select">
          <option value="text-to-morse">Text to Morse</option>
          <option value="morse-to-text">Morse to Text</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Speed (WPM)</label>
        <input type="number" id="speed" class="option-input" min="5" max="50" value="20">
      </div>
      
      <div class="option-group">
        <label class="option-label">Frequency (Hz)</label>
        <input type="number" id="frequency" class="option-input" min="300" max="1500" value="800">
      </div>
      
      <div class="option-group">
        <label class="option-label">Volume</label>
        <input type="range" id="volume" min="0" max="100" value="80" class="option-input" style="width: 100%;">
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="playSound" checked>
          <label for="playSound">Sound</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="showLight">
          <label for="showLight">Light Signal</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="enableVibration">
          <label for="enableVibration">Vibration</label>
        </div>
      </div>
    </div>

    <div class="control-panel">
      <div class="control-group">
        <button class="control-button" id="playButton" data-action="play">
          <i class="fas fa-play"></i> Play
        </button>
        <button class="control-button" id="pauseButton" data-action="pause" disabled>
          <i class="fas fa-pause"></i> Pause
        </button>
        <button class="control-button" id="stopButton" data-action="stop" disabled>
          <i class="fas fa-stop"></i> Stop
        </button>
      </div>
      
      <div class="control-group">
        <button class="control-button" id="repeatButton" data-action="repeat">
          <i class="fas fa-redo"></i> Repeat
        </button>
        <button class="control-button" id="loopButton" data-action="loop">
          <i class="fas fa-infinity"></i> Loop
        </button>
        <button class="control-button success" id="saveButton" data-action="save">
          <i class="fas fa-save"></i> Save Audio
        </button>
      </div>
    </div>

    <div class="progress-container">
      <div class="progress-bar" id="progressBar"></div>
    </div>

    <div class="status-indicator">
      <div class="status-dot" id="statusDot"></div>
      <span id="statusText">Ready to translate</span>
    </div>

    <div class="signal-display" id="signalDisplay" style="display: none;">
      <div class="signal-light" id="signalLight"></div>
      <div class="signal-text" id="signalText"></div>
    </div>

    <div class="output-section">
      <h2>Morse Code Output</h2>
      <pre id="outputText">Morse code translation will appear here...</pre>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="translate">Translate</button>
        <button class="case-button" data-action="copy">Copy to Clipboard</button>
        <button class="case-button success" data-action="download">Download</button>
        <button class="case-button warning" data-action="examples">Show Examples</button>
        <button class="case-button secondary" data-action="clear">Clear</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

   {% include share-and-donation.html %}

    <div class="examples">
      <h2>Morse Code Examples</h2>

      <h3>Common Phrases:</h3>
      <div class="example-text">SOS: ... --- ...
HELLO: .... . .-.. .-.. ---
WORLD: .-- --- .-. .-.. -..
EMERGENCY: . -- . .-. --. . -. -.-. -.--
I LOVE YOU: .. .-.. --- ...- . -.-- --- ..-</div>

      <h3>International Morse Code:</h3>
      <div class="example-text">A: .-      B: -...    C: -.-.    D: -..     E: .
F: ..-.    G: --.     H: ....    I: ..      J: .---
K: -.-     L: .-..    M: --      N: -.      O: ---
P: .--.    Q: --.-    R: .-.     S: ...     T: -
U: ..-     V: ...-    W: .--     X: -..-    Y: -.--
Z: --..

1: .----   2: ..---   3: ...--   4: ....-   5: .....
6: -....   7: --...   8: ---..   9: ----.   0: -----

.: .-.-.-  ,: --..--  ?: ..--..  ': .----.  !: -.-.--
/: -..-.   (: -.--.   ): -.--.-  &: .-...   ::: ---...
;: -.-.-.  =: -...-   +: .-.-.   -: -....-  _: ..--.-
": .-..-.  $: ...-..- @: .--.-.</div>

      <h3>Prosigns (Procedural Signals):</h3>
      <div class="example-text">Start: -.-.-
End: .-.-.
Wait: .-...
Error: ........
Understood: ...-.
Invitation to transmit: -.-
End of work: ...-.-</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Online Morse Code Translator Tool</h2>

    <p>Need to communicate using Morse code or learn this historic communication system? Our free <strong>Morse Code Translator tool</strong> is the perfect solution for students, radio operators, emergency responders, and enthusiasts. This powerful tool instantly converts text to Morse code and vice versa, with realistic audio playback, visual light signals, and vibration feedback. You can adjust speed, frequency, and volume to match your learning needs or communication requirements. There's no download required, no registration needed, and your messages remain private as all processing happens securely right in your browser.</p>

    <h3>How to Use This Morse Code Translator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Text:</strong> Type or paste your text into the input box above. For Morse to text translation, use dots (.) and dashes (-) with spaces between characters and slashes (/) between words.</li>
      <li><strong>Configure Settings:</strong> Adjust the translation speed (WPM), audio frequency, volume, and enable sound, light, or vibration feedback according to your preferences.</li>
      <li><strong>Translate:</strong> Click the "Translate" button to convert your text to Morse code or vice versa. The translation appears instantly in the output area.</li>
      <li><strong>Play & Practice:</strong> Use the playback controls to hear the Morse code, see the light signals, or feel the vibration patterns. Practice recognizing and sending Morse code.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're preparing for an amateur radio license exam and need to learn Morse code. Instead of just memorizing dots and dashes from a chart, you can use this tool to hear how each character sounds at different speeds. For example, you can practice recognizing the distress signal "SOS" (... --- ...) by listening to it, watching the light flash, and feeling the vibration pattern. This multi-sensory approach accelerates learning and helps you become proficient in Morse code communication.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Students & Learners:</strong> Master Morse code through interactive audio, visual, and tactile feedback at adjustable speeds.</li>
      <li><strong>Radio Operators:</strong> Practice sending and receiving Morse code for amateur radio communications and licensing exams.</li>
      <li><strong>Emergency Responders:</strong> Learn emergency signals and communication methods for situations where verbal communication isn't possible.</li>
      <li><strong>History Enthusiasts:</strong> Experience and understand this historic communication method that revolutionized long-distance communication.</li>
      <li><strong>Accessibility Users:</strong> Use Morse code as an alternative communication method for people with different abilities.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: What is Morse code and how does it work?</strong><br>
      A: Morse code is a method of transmitting text information as a series of on-off tones, lights, or clicks that can be directly understood by a skilled listener or observer without special equipment. It uses a standardized sequence of short and long signals (dots and dashes) to represent letters, numbers, and punctuation.</p>

    <p><strong>Q: Can I use this tool to learn Morse code?</strong><br>
      A: Absolutely! This tool is perfect for learning Morse code. You can start with common words and phrases, adjust the speed from slow to fast as you improve, and use the different feedback methods (audio, visual, vibration) to reinforce your learning through multiple senses.</p>

    <p><strong>Q: Is my text kept private and secure when I use this tool?</strong><br>
      A: Yes, privacy is a core principle of our tool. The Morse code translation happens locally on your own computer or phone. Your text is never sent to any server, meaning we never see, store, or have access to your messages. It is 100% secure.</p>

    <p><strong>Q: Can I use this tool on my mobile phone?</strong><br>
      A: Yes, our website and tool are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets. The vibration feature works on compatible mobile devices.</p>

    <p><strong>Q: Do I need to create an account or pay to use this?</strong><br>
      A: No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees.</p>

    <h3>Why Choose Our Morse Code Translator?</h3>
    <p>Our <strong>online Morse Code Translator</strong> stands out from other tools because of its comprehensive features, realistic feedback, and privacy protection. Unlike many online tools, we don't store your messages on our servers - all processing happens in your browser. This means your private communications, practice texts, and sensitive messages remain completely secure. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Common Applications of Morse Code</h3>
    <p>Morse code continues to have practical applications across various fields:</p>
    <ul>
      <li><strong>Amateur Radio:</strong> Used by ham radio operators for long-distance communication with simple equipment</li>
      <li><strong>Emergency Signaling:</strong> Distress signals like SOS can be sent using light, sound, or tapping when other methods fail</li>
      <li><strong>Military & Aviation:</strong> Still taught as a backup communication method in some military and aviation contexts</li>
      <li><strong>Accessibility:</strong> Alternative communication method for people with speech or hearing impairments</li>
      <li><strong>Education:</strong> Teaching historical communication methods, binary concepts, and pattern recognition</li>
    </ul>
  </div>
</div>

<!-- File Upload Modal -->
<div id="uploadModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Upload Text File</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>Select a text file (.txt or .json) to upload its content to the text area.</p>
      <input type="file" id="modalFileUpload" accept=".txt,.json">
      <p id="fileInfo" class="file-info"></p>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelUpload">Cancel</button>
      <button class="modal-button primary" id="confirmUpload">Upload</button>
    </div>
  </div>
</div>

<!-- Examples Modal -->
<div id="examplesModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Morse Code Examples</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
          <h4>Common Words & Phrases</h4>
          <div class="example-text">HELLO: .... . .-.. .-.. ---
GOODBYE: --. --- --- -.. -... -.-- .
THANK YOU: - .... .- -. -.- -.-- --- ..-
PLEASE: .--. .-.. . .- ... .
SOS: ... --- ...
HELP: .... . .-.. .--.
EMERGENCY: . -- . .-. --. . -. -.-. -.--
I LOVE YOU: .. .-.. --- ...- . -.-- --- ..-</div>
        </div>
        <div>
          <h4>Alphabet & Numbers</h4>
          <div class="example-text">A: .-      B: -...    C: -.-.    
D: -..     E: .       F: ..-.
G: --.     H: ....    I: ..      
J: .---    K: -.-     L: .-..
M: --      N: -.      O: ---
P: .--.    Q: --.-    R: .-.
S: ...     T: -       U: ..-
V: ...-    W: .--     X: -..-
Y: -.--    Z: --..

1: .----   2: ..---   3: ...--
4: ....-   5: .....   6: -....
7: --...   8: ---..   9: ----.
0: -----</div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeExamples">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('textInput');
    const outputText = document.getElementById('outputText');
    const caseButtons = document.querySelectorAll('.case-button');
    const controlButtons = document.querySelectorAll('.control-button');
    const alertContainer = document.getElementById('alertContainer');
    const fileUpload = document.getElementById('fileUpload');
    const uploadIcon = document.getElementById('uploadIcon');
    
    // Morse code options
    const translationDirection = document.getElementById('translationDirection');
    const speed = document.getElementById('speed');
    const frequency = document.getElementById('frequency');
    const volume = document.getElementById('volume');
    const playSound = document.getElementById('playSound');
    const showLight = document.getElementById('showLight');
    const enableVibration = document.getElementById('enableVibration');
    
    // Control elements
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const stopButton = document.getElementById('stopButton');
    const repeatButton = document.getElementById('repeatButton');
    const loopButton = document.getElementById('loopButton');
    const saveButton = document.getElementById('saveButton');
    
    // Display elements
    const progressBar = document.getElementById('progressBar');
    const statusDot = document.getElementById('statusDot');
    const statusText = document.getElementById('statusText');
    const signalDisplay = document.getElementById('signalDisplay');
    const signalLight = document.getElementById('signalLight');
    const signalText = document.getElementById('signalText');
    
    // Modal elements
    const uploadModal = document.getElementById('uploadModal');
    const examplesModal = document.getElementById('examplesModal');
    const modalFileUpload = document.getElementById('modalFileUpload');
    const fileInfo = document.getElementById('fileInfo');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelUpload = document.getElementById('cancelUpload');
    const confirmUpload = document.getElementById('confirmUpload');
    const closeExamples = document.getElementById('closeExamples');
    
    // Morse code dictionary
    const morseCode = {
      'A': '.-',      'B': '-...',    'C': '-.-.',    'D': '-..',     'E': '.',
      'F': '..-.',    'G': '--.',     'H': '....',    'I': '..',      'J': '.---',
      'K': '-.-',     'L': '.-..',    'M': '--',      'N': '-.',      'O': '---',
      'P': '.--.',    'Q': '--.-',    'R': '.-.',     'S': '...',     'T': '-',
      'U': '..-',     'V': '...-',    'W': '.--',     'X': '-..-',    'Y': '-.--',
      'Z': '--..',    '1': '.----',   '2': '..---',   '3': '...--',   '4': '....-',
      '5': '.....',   '6': '-....',   '7': '--...',   '8': '---..',   '9': '----.',
      '0': '-----',   '.': '.-.-.-',  ',': '--..--',  '?': '..--..',  "'": '.----.',
      '!': '-.-.--',  '/': '-..-.',   '(': '-.--.',   ')': '-.--.-',  '&': '.-...',
      ':': '---...',  ';': '-.-.-.',  '=': '-...-',   '+': '.-.-.',   '-': '-....-',
      '_': '..--.-',  '"': '.-..-.',  '$': '...-..-', '@': '.--.-.',  ' ': '/'
    };
    
    // Reverse lookup for Morse to text
    const textFromMorse = {};
    for (const [char, code] of Object.entries(morseCode)) {
      textFromMorse[code] = char;
    }
    
    // Audio context for sound generation
    let audioContext;
    let oscillator;
    let gainNode;
    
    // Playback state
    let isPlaying = false;
    let isPaused = false;
    let isLooping = false;
    let currentPlayback = null;
    let playbackTimeout = null;
    
    // Store original text for comparison
    let originalTextContent = '';

    // Initialize counters
    updateCounts();

    // Event listeners
    textInput.addEventListener('input', updateCounts);
    
    // Show/hide signal display based on light setting
    showLight.addEventListener('change', function() {
      signalDisplay.style.display = this.checked ? 'flex' : 'none';
    });

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleAction(action);
      });
    });

    controlButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleControlAction(action);
      });
    });

    // Upload icon click handler - opens modal
    uploadIcon.addEventListener('click', function () {
      uploadModal.style.display = 'block';
    });

    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        uploadModal.style.display = 'none';
        examplesModal.style.display = 'none';
        modalFileUpload.value = '';
        fileInfo.textContent = '';
      });
    });

    // Close modal when clicking cancel
    cancelUpload.addEventListener('click', function() {
      uploadModal.style.display = 'none';
      modalFileUpload.value = '';
      fileInfo.textContent = '';
    });

    // Close examples modal
    closeExamples.addEventListener('click', function() {
      examplesModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === uploadModal || event.target === examplesModal) {
        uploadModal.style.display = 'none';
        examplesModal.style.display = 'none';
        modalFileUpload.value = '';
        fileInfo.textContent = '';
      }
    });

    // Handle file selection in modal
    modalFileUpload.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        fileInfo.textContent = `Selected file: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
      } else {
        fileInfo.textContent = '';
      }
    });

    // Confirm upload button
    confirmUpload.addEventListener('click', function() {
      const file = modalFileUpload.files[0];
      if (!file) {
        showAlert('Please select a file first.', 'error');
        return;
      }

      // Check file type
      if (file.type === 'text/plain' || file.name.endsWith('.txt') || file.name.endsWith('.json')) {
        const reader = new FileReader();
        reader.onload = function (e) {
          textInput.value = e.target.result;
          updateCounts();
          showAlert('File uploaded successfully!', 'success');
          uploadModal.style.display = 'none';
          modalFileUpload.value = '';
          fileInfo.textContent = '';
        };
        reader.onerror = function () {
          showAlert('Error reading the file.', 'error');
        };
        reader.readAsText(file);
      } else {
        showAlert('Unsupported file format. Please upload a TXT or JSON file.', 'error');
      }
    });

    function updateCounts() {
      const text = textInput.value;

      // Character count
      document.getElementById('charCount').textContent = text.length;

      // Word count
      const wordCount = text ? text.trim().split(/\s+/).length : 0;
      document.getElementById('wordCount').textContent = wordCount;

      // Morse length (approximate)
      let morseLength = 0;
      if (translationDirection.value === 'text-to-morse') {
        morseLength = text.toUpperCase().split('').reduce((total, char) => {
          return total + (morseCode[char] ? morseCode[char].length : 0);
        }, 0);
      } else {
        morseLength = text.split('').filter(c => c === '.' || c === '-').length;
      }
      document.getElementById('morseLength').textContent = morseLength;

      // Translation time (approximate)
      const wpm = parseInt(speed.value);
      const timeInMinutes = morseLength / (wpm * 5); // Standard PARIS calculation
      document.getElementById('translationTime').textContent = (timeInMinutes * 60).toFixed(1) + 's';
    }

    function handleAction(action) {
      const text = textInput.value;
      
      switch (action) {
        case 'translate':
          const translation = translateText(text);
          outputText.textContent = translation;
          showAlert('Translation completed!', 'success');
          break;

        case 'copy':
          copyToClipboard(outputText.textContent);
          break;

        case 'download':
          downloadText('morse_code.txt', outputText.textContent);
          break;

        case 'examples':
          examplesModal.style.display = 'block';
          break;

        case 'clear':
          textInput.value = '';
          outputText.textContent = 'Morse code translation will appear here...';
          stopPlayback();
          updateCounts();
          break;
      }

      updateCounts();
    }

    function handleControlAction(action) {
      switch (action) {
        case 'play':
          if (isPaused) {
            resumePlayback();
          } else {
            startPlayback();
          }
          break;

        case 'pause':
          pausePlayback();
          break;

        case 'stop':
          stopPlayback();
          break;

        case 'repeat':
          stopPlayback();
          startPlayback();
          break;

        case 'loop':
          isLooping = !isLooping;
          loopButton.classList.toggle('active', isLooping);
          showAlert(isLooping ? 'Loop enabled' : 'Loop disabled', 'info');
          break;

        case 'save':
          saveAudio();
          break;
      }
    }

    // Translation functions
    function translateText(text) {
      if (translationDirection.value === 'text-to-morse') {
        return textToMorse(text);
      } else {
        return morseToText(text);
      }
    }

    function textToMorse(text) {
      return text.toUpperCase().split('').map(char => {
        if (char === ' ') return '/';
        return morseCode[char] || `[${char}]`;
      }).join(' ');
    }

    function morseToText(morse) {
      return morse.split(' ').map(code => {
        if (code === '/') return ' ';
        return textFromMorse[code] || `[${code}]`;
      }).join('');
    }

    // Playback functions
    function startPlayback() {
      const text = translationDirection.value === 'text-to-morse' 
        ? textInput.value 
        : outputText.textContent;
      
      if (!text.trim()) {
        showAlert('Please enter some text to play.', 'error');
        return;
      }

      stopPlayback();
      
      isPlaying = true;
      isPaused = false;
      updatePlaybackControls();
      updateStatus('Playing Morse code...', 'active');
      
      // Initialize audio context if needed
      if (playSound.checked && !audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        gainNode = audioContext.createGain();
        gainNode.connect(audioContext.destination);
      }
      
      const morseSequence = translationDirection.value === 'text-to-morse'
        ? textToMorseSequence(text)
        : text.split('');
      
      playMorseSequence(morseSequence, 0);
    }

    function textToMorseSequence(text) {
      const sequence = [];
      for (const char of text.toUpperCase()) {
        if (char === ' ') {
          sequence.push('/');
        } else if (morseCode[char]) {
          sequence.push(...morseCode[char].split(''));
        }
      }
      return sequence;
    }

    function playMorseSequence(sequence, index) {
      if (!isPlaying || index >= sequence.length) {
        if (isLooping && isPlaying) {
          // Loop back to beginning
          playMorseSequence(sequence, 0);
        } else {
          stopPlayback();
        }
        return;
      }
      
      const symbol = sequence[index];
      let duration = 0;
      
      // Calculate timing based on WPM
      const wpm = parseInt(speed.value);
      const dotDuration = 1200 / wpm; // ms per dot
      
      if (symbol === '.') {
        duration = dotDuration;
        playBeep(duration);
        showSignal('DOT', true);
      } else if (symbol === '-') {
        duration = dotDuration * 3;
        playBeep(duration);
        showSignal('DASH', true);
      } else if (symbol === '/') {
        duration = dotDuration * 7; // Word space
        showSignal('WORD SPACE', false);
      } else {
        duration = dotDuration * 3; // Character space
        showSignal('CHAR SPACE', false);
      }
      
      // Update progress
      const progress = (index / sequence.length) * 100;
      progressBar.style.width = `${progress}%`;
      
      // Schedule next symbol
      currentPlayback = setTimeout(() => {
        showSignal('', false);
        playMorseSequence(sequence, index + 1);
      }, duration);
    }

    function playBeep(duration) {
      if (!playSound.checked || !audioContext) return;
      
      oscillator = audioContext.createOscillator();
      oscillator.connect(gainNode);
      oscillator.frequency.value = parseInt(frequency.value);
      oscillator.type = 'sine';
      
      // Set volume
      const vol = parseInt(volume.value) / 100;
      gainNode.gain.value = vol;
      
      oscillator.start();
      setTimeout(() => {
        if (oscillator) {
          oscillator.stop();
        }
      }, duration);
      
      // Trigger vibration if enabled
      if (enableVibration.checked && navigator.vibrate) {
        const vibeDuration = duration * 0.8; // Slightly shorter than beep
        navigator.vibrate(vibeDuration);
      }
    }

    function showSignal(type, isActive) {
      if (!showLight.checked) return;
      
      signalLight.classList.toggle('active', isActive);
      signalText.textContent = type;
    }

    function pausePlayback() {
      if (!isPlaying) return;
      
      isPaused = true;
      isPlaying = false;
      
      if (playbackTimeout) {
        clearTimeout(playbackTimeout);
        playbackTimeout = null;
      }
      
      if (oscillator) {
        oscillator.stop();
        oscillator = null;
      }
      
      updatePlaybackControls();
      updateStatus('Playback paused', '');
      showSignal('PAUSED', false);
    }

    function resumePlayback() {
      if (!isPaused) return;
      
      isPlaying = true;
      isPaused = false;
      updatePlaybackControls();
      updateStatus('Playing Morse code...', 'active');
      
      // Note: Full resume would require storing playback state
      // For simplicity, we restart from beginning
      startPlayback();
    }

    function stopPlayback() {
      isPlaying = false;
      isPaused = false;
      
      if (playbackTimeout) {
        clearTimeout(playbackTimeout);
        playbackTimeout = null;
      }
      
      if (oscillator) {
        oscillator.stop();
        oscillator = null;
      }
      
      progressBar.style.width = '0%';
      updatePlaybackControls();
      updateStatus('Ready to translate', '');
      showSignal('STOPPED', false);
    }

    function updatePlaybackControls() {
      playButton.disabled = isPlaying && !isPaused;
      pauseButton.disabled = !isPlaying || isPaused;
      stopButton.disabled = !isPlaying && !isPaused;
      
      playButton.innerHTML = isPaused 
        ? '<i class="fas fa-play"></i> Resume' 
        : '<i class="fas fa-play"></i> Play';
    }

    function updateStatus(text, state) {
      statusText.textContent = text;
      statusDot.className = 'status-dot';
      if (state === 'active') {
        statusDot.classList.add('active');
      }
    }

  
    function saveAudio() {
    const text = translationDirection.value === 'text-to-morse' 
        ? textInput.value 
        : outputText.textContent;
    
    if (!text.trim()) {
        showAlert('Please enter some text to generate audio.', 'error');
        return;
    }

    showAlert('Generating audio file...', 'info');
    
    // Get the morse sequence
    const morseSequence = translationDirection.value === 'text-to-morse'
        ? textToMorseSequence(text)
        : text.split('');
    
    // Calculate total duration
    const wpm = parseInt(speed.value);
    const dotDuration = 1200 / wpm; // ms per dot
    let totalDuration = 0;
    
    for (const symbol of morseSequence) {
        if (symbol === '.') {
            totalDuration += dotDuration;
        } else if (symbol === '-') {
            totalDuration += dotDuration * 3;
        } else if (symbol === '/') {
            totalDuration += dotDuration * 7;
        } else {
            totalDuration += dotDuration * 3;
        }
        totalDuration += dotDuration; // Add space after each symbol
    }
    
    // Generate WAV file
    generateWavFile(morseSequence, totalDuration);
}

function generateWavFile(morseSequence, totalDuration) {
    const sampleRate = 44100;
    const frequency = parseInt(document.getElementById('frequency').value);
    const volume = parseInt(document.getElementById('volume').value) / 100;
    
    // Convert duration from ms to samples
    const totalSamples = Math.ceil(totalDuration * sampleRate / 1000);
    const buffer = new Float32Array(totalSamples);
    
    let currentSample = 0;
    const wpm = parseInt(speed.value);
    const dotDuration = 1200 / wpm;
    
    // Generate audio for each morse symbol
    for (const symbol of morseSequence) {
        let symbolDuration = 0;
        
        if (symbol === '.') {
            symbolDuration = dotDuration;
        } else if (symbol === '-') {
            symbolDuration = dotDuration * 3;
        } else if (symbol === '/') {
            symbolDuration = dotDuration * 7;
        } else {
            symbolDuration = dotDuration * 3;
        }
        
        const symbolSamples = Math.ceil(symbolDuration * sampleRate / 1000);
        
        // Generate tone for dots and dashes, silence for spaces
        if (symbol === '.' || symbol === '-') {
            for (let i = 0; i < symbolSamples; i++) {
                if (currentSample + i < totalSamples) {
                    const t = (currentSample + i) / sampleRate;
                    buffer[currentSample + i] = Math.sin(2 * Math.PI * frequency * t) * volume;
                }
            }
        }
        
        currentSample += symbolSamples;
        
        // Add space between symbols (except after word spaces)
        if (symbol !== '/') {
            const spaceSamples = Math.ceil(dotDuration * sampleRate / 1000);
            currentSample += spaceSamples;
        }
    }
    
    // Convert to WAV format
    const wavBuffer = encodeWAV(buffer, sampleRate);
    const blob = new Blob([wavBuffer], { type: 'audio/wav' });
    
    // Create download link
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'morse_code.wav';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showAlert('Audio file saved successfully!', 'success');
}

function encodeWAV(samples, sampleRate) {
    const buffer = new ArrayBuffer(44 + samples.length * 2);
    const view = new DataView(buffer);
    
    // WAV header
    const writeString = (offset, string) => {
        for (let i = 0; i < string.length; i++) {
            view.setUint8(offset + i, string.charCodeAt(i));
        }
    };
    
    writeString(0, 'RIFF');
    view.setUint32(4, 36 + samples.length * 2, true);
    writeString(8, 'WAVE');
    writeString(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeString(36, 'data');
    view.setUint32(40, samples.length * 2, true);
    
    // Convert samples to 16-bit PCM
    let offset = 44;
    for (let i = 0; i < samples.length; i++) {
        const s = Math.max(-1, Math.min(1, samples[i]));
        view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
        offset += 2;
    }
    
    return buffer;
}

// Helper function to convert text to morse sequence
function textToMorseSequence(text) {
    const sequence = [];
    for (const char of text.toUpperCase()) {
        if (char === ' ') {
            sequence.push('/');
        } else if (morseCode[char]) {
            sequence.push(...morseCode[char].split(''));
            sequence.push(' '); // Add space between characters
        }
    }
    // Remove trailing space if present
    if (sequence.length > 0 && sequence[sequence.length - 1] === ' ') {
        sequence.pop();
    }
    return sequence;
}

    function copyToClipboard(text) {
      if (text === 'Morse code translation will appear here...' || !text.trim()) {
        showAlert('Please translate some text first.', 'error');
        return;
      }
      
      navigator.clipboard.writeText(text).then(() => {
        showAlert('Morse code copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy text: ' + err, 'error');
      });
    }

    function downloadText(filename, text) {
      if (text === 'Morse code translation will appear here...' || !text.trim()) {
        showAlert('Please translate some text first.', 'error');
        return;
      }
      
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showAlert('Morse code downloaded successfully!', 'success');
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