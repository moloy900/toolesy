---
layout: default
title: "Text to Handwriting Converter – Realistic Handwritten Notes"
permalink: /text-to-handwriting-converter-convert-digital-text-to-realistic-handwriting/
---

<!-- ✅ Essential Meta Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Text to Handwriting Converter – Realistic Handwritten Notes</title>
<meta name="description" content="Free Text to Handwriting Converter. Turn typed text into realistic handwritten notes with adjustable pen styles, colors, and spacing. Download as PNG or PDF — no sign-up required.">
<meta name="keywords" content="text to handwriting, handwriting converter, convert text to handwriting, digital text to handwriting, handwritten notes generator, handwriting font, writing style converter, notebook handwriting, realistic handwriting tool">
<meta name="author" content="paramdip nath">
<meta name="robots" content="index, follow">

<!-- ✅ Open Graph Tags -->
<meta property="og:title" content="Text to Handwriting Converter - Free & Realistic">
<meta property="og:description" content="Create handwritten notes online from typed text. Customize page style and download as image or PDF.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://toolesy.com/text-to-handwriting-converter-convert-digital-text-to-realistic-handwriting">

<!-- ✅ Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free Text to Handwriting Converter">
<meta name="twitter:description" content="Turn your text into natural handwriting with amazing styles. Download instantly!">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Google Fonts for handwriting styles -->
<link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Indie+Flower&family=Schoolbell&family=Cedarville+Cursive&family=Amatic+SC:wght@400;700&family=Homemade+Apple&family=Pacifico&family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Dawning+of+a+New+Day&family=Swanky+and+Moo+Moo&family=Tangerine:wght@400;700&family=Caveat:wght@400;500;600;700&family=Zeyada&display=swap" rel="stylesheet">

<style>
  /* Text to Handwriting Styles */
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

  /* New styles for handwriting converter */
  .handwriting-options {
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

  .font-preview {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    max-height: 300px;
    overflow-y: auto;
  }

  .font-item {
    padding: 15px;
    background: white;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .font-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .font-item.active {
    border-color: var(--primary);
    background: rgba(52, 152, 219, 0.05);
  }

  .font-name {
    font-weight: 600;
    margin-bottom: 10px;
    color: #2c3e50;
  }

  .font-sample {
    font-size: 18px;
    color: #333;
  }

  /* Handwriting fonts */
  .gloria-hallelujah { font-family: 'Gloria Hallelujah', cursive; }
  .indie-flower { font-family: 'Indie Flower', cursive; }
  .schoolbell { font-family: 'Schoolbell', cursive; }
  .cedarville-cursive { font-family: 'Cedarville Cursive', cursive; }
  .amatic-sc { font-family: 'Amatic SC', cursive; font-weight: 700; }
  .homemade-apple { font-family: 'Homemade Apple', cursive; }
  .pacifico { font-family: 'Pacifico', cursive; }
  .comic-neue { font-family: 'Comic Neue', cursive; }
  .dawning-of-a-new-day { font-family: 'Dawning of a New Day', cursive; }
  .swanky-and-moo-moo { font-family: 'Swanky and Moo Moo', cursive; }
  .tangerine { font-family: 'Tangerine', cursive; }
  .caveat { font-family: 'Caveat', cursive; }
  .zeyada { font-family: 'Zeyada', cursive; }

  .preview-section {
    margin: 30px 0;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .preview-section h2 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
  }

  .handwriting-preview {
    min-height: 400px;
    padding: 40px;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    overflow: auto;
    line-height: 1.6;
  }

  .page-style {
    background: #f9f9f9;
    border: 1px solid #ccc;
    padding: 40px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }

  .page-style.lined {
    background-image: linear-gradient(to bottom, transparent 39px, #e0e0e0 40px);
    background-size: 100% 40px;
  }

  .page-style.grid {
    background-image: 
      linear-gradient(to right, #e0e0e0 1px, transparent 1px),
      linear-gradient(to bottom, #e0e0e0 1px, transparent 1px);
    background-size: 20px 20px;
  }

  /* Color picker */
  .color-picker {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .color-input {
    width: 50px;
    height: 40px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
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

    .handwriting-options {
      grid-template-columns: 1fr;
    }

    .font-preview {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }

    .handwriting-preview {
      padding: 20px;
      min-height: 300px;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Text To Handwriting Converter</h1>
  <p class="welcome-message">Transform your digital text into realistic handwritten notes with customizable fonts, colors, spacing, and page styles. Download as PNG or PDF.</p>

  <div class="converter-section">
    <h2>Text To Handwriting Converter</h2>

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
        <span>Line Count: </span>
        <span id="lineCount">0</span>
      </div>
      <div class="counter-item">
        <span>Page Count: </span>
        <span id="pageCount">1</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Input Text <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      <textarea id="textInput" rows="6" placeholder="Type or paste your text here..."></textarea>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".txt,.doc,.docx" style="display: none;">

    <div class="handwriting-options">
      <div class="option-group">
        <label class="option-label">Handwriting Font</label>
        <select id="fontFamily" class="option-select">
          <option value="gloria-hallelujah">Gloria Hallelujah</option>
          <option value="indie-flower">Indie Flower</option>
          <option value="schoolbell">Schoolbell</option>
          <option value="cedarville-cursive">Cedarville Cursive</option>
          <option value="amatic-sc">Amatic SC</option>
          <option value="homemade-apple">Homemade Apple</option>
          <option value="pacifico">Pacifico</option>
          <option value="comic-neue">Comic Neue</option>
          <option value="dawning-of-a-new-day">Dawning of a New Day</option>
          <option value="swanky-and-moo-moo">Swanky and Moo Moo</option>
          <option value="tangerine">Tangerine</option>
          <option value="caveat">Caveat</option>
          <option value="zeyada">Zeyada</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Font Size</label>
        <input type="number" id="fontSize" class="option-input" min="12" max="72" value="24">
      </div>
      
      <div class="option-group">
        <label class="option-label">Pen Ink Color</label>
        <div class="color-picker">
          <input type="color" id="inkColor" class="color-input" value="#000000">
          <span id="colorValue">#000000</span>
        </div>
      </div>
      
      <div class="option-group">
        <label class="option-label">Page Style</label>
        <select id="pageStyle" class="option-select">
          <option value="plain">Plain Paper</option>
          <option value="lined">Lined Paper</option>
          <option value="grid">Grid Paper</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Letter Spacing</label>
        <input type="range" id="letterSpacing" min="-2" max="10" value="0" step="0.1">
        <span id="letterSpacingValue">0px</span>
      </div>
      
      <div class="option-group">
        <label class="option-label">Word Spacing</label>
        <input type="range" id="wordSpacing" min="0" max="20" value="4" step="0.1">
        <span id="wordSpacingValue">4px</span>
      </div>
      
      <div class="option-group">
        <label class="option-label">Line Spacing</label>
        <input type="range" id="lineSpacing" min="1" max="3" value="1.5" step="0.1">
        <span id="lineSpacingValue">1.5</span>
      </div>
    </div>

    <div class="font-preview">
      <div class="font-item active" data-font="gloria-hallelujah">
        <div class="font-name">HandWriting 1</div>
        <div class="font-sample gloria-hallelujah">The quick brown fox</div>
      </div>
      <div class="font-item" data-font="indie-flower">
        <div class="font-name">HandWriting 2</div>
        <div class="font-sample indie-flower">The quick brown fox</div>
      </div>
      <div class="font-item" data-font="schoolbell">
        <div class="font-name">HandWriting 3</div>
        <div class="font-sample schoolbell">The quick brown fox</div>
      </div>
      <div class="font-item" data-font="cedarville-cursive">
        <div class="font-name">HandWriting 4</div>
        <div class="font-sample cedarville-cursive">The quick brown fox</div>
      </div>
      <div class="font-item" data-font="amatic-sc">
        <div class="font-name">HandWriting 5</div>
        <div class="font-sample amatic-sc">The quick brown fox</div>
      </div>
      <div class="font-item" data-font="homemade-apple">
        <div class="font-name">HandWriting 6</div>
        <div class="font-sample homemade-apple">The quick brown fox</div>
      </div>
      <div class="font-item" data-font="pacifico">
        <div class="font-name">HandWriting 7</div>
        <div class="font-sample pacifico">The quick brown fox</div>
      </div>
      <div class="font-item" data-font="comic-neue">
        <div class="font-name">HandWriting 8</div>
        <div class="font-sample comic-neue">The quick brown fox</div>
      </div>
      <div class="font-item" data-font="dawning-of-a-new-day">
        <div class="font-name">HandWriting 9</div>
        <div class="font-sample dawning-of-a-new-day">The quick brown fox</div>
      </div>
      <div class="font-item" data-font="swanky-and-moo-moo">
        <div class="font-name">HandWriting 10</div>
        <div class="font-sample swanky-and-moo-moo">The quick brown fox</div>
      </div>
      <div class="font-item" data-font="tangerine">
        <div class="font-name">HandWriting 11</div>
        <div class="font-sample tangerine">The quick brown fox</div>
      </div>
      <div class="font-item" data-font="caveat">
        <div class="font-name">HandWriting 12</div>
        <div class="font-sample caveat">The quick brown fox</div>
      </div>
      <div class="font-item" data-font="zeyada">
        <div class="font-name">HandWriting 13</div>
        <div class="font-sample zeyada">The quick brown fox</div>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="preview">Preview Handwriting</button>
        <button class="case-button success" data-action="download-png">Download PNG</button>
        <button class="case-button success" data-action="download-pdf">Download PDF</button>
        <button class="case-button" data-action="copy">Copy to Clipboard</button>
        <button class="case-button secondary" data-action="clear">Clear</button>
      </div>
    </div>
{% include share-and-donation.html %}
    <div id="alertContainer" class="alert-container"></div>

    <div class="preview-section">
      <h2>Handwriting Preview</h2>
      <div id="handwritingPreview" class="handwriting-preview page-style">
        <p>Your handwriting will appear here. Type some text and click "Preview Handwriting" to see the result.</p>
      </div>
    </div>

    <div class="examples">
      <h2>Examples</h2>

      <h3>Sample Text with Different Fonts:</h3>
      <div class="example-text gloria-hallelujah" style="font-size: 20px;">This is sample text in Gloria Hallelujah font. It looks like natural handwriting.</div>

      <h3>Another Example:</h3>
      <div class="example-text indie-flower" style="font-size: 20px;">This text uses the Indie Flower font, which has a playful, casual appearance.</div>

      <h3>Formal Handwriting:</h3>
      <div class="example-text cedarville-cursive" style="font-size: 20px;">Cedarville Cursive provides a more elegant, formal handwriting style.</div>
    </div>
  </div>

<!-- SEO Content Section -->
<div class="content-placeholder">

  <h2>Free Online Text To Handwriting Converter</h2>

  <p>
    Want to turn typed text into realistic handwritten notes without picking up a pen? Our
    <strong>Text To Handwriting Converter</strong> makes it easy to transform digital text into
    beautiful handwritten pages in just a few clicks. Whether you're creating study notes,
    personal letters, classroom worksheets, journal pages, greeting cards, or creative projects,
    this tool helps you generate authentic-looking handwriting directly from your browser.
  </p>

  <p>
    Instead of spending hours writing content by hand, simply type or paste your text, choose a
    handwriting style, customize the appearance, and instantly generate a handwritten version.
    With multiple handwriting fonts, adjustable spacing controls, paper backgrounds, and download
    options, you can create documents that closely resemble real handwritten pages.
  </p>

  <p>
    The converter is designed to be simple enough for beginners while offering advanced
    customization options for users who want complete control over the final result. Whether you're
    a student preparing notes, a teacher creating educational materials, or a designer working on
    creative content, this tool provides a fast and convenient solution.
  </p>

  <p>
    Best of all, everything runs directly inside your browser. No software installation, account
    creation, or technical knowledge is required. Your content remains private because your text is
    processed locally on your device.
  </p>

  <h3>How to Use This Text to Handwriting Converter (Step-by-Step)</h3>

  <ul>
    <li>
      <strong>Enter Your Text:</strong>
      Type directly into the editor or paste content from documents, emails, websites, or notes.
      You can also upload a text file if supported.
    </li>

    <li>
      <strong>Select a Handwriting Style:</strong>
      Browse through the available handwriting fonts and choose the one that best matches your
      preferred writing style.
    </li>

    <li>
      <strong>Customize the Appearance:</strong>
      Adjust font size, pen color, letter spacing, word spacing, line height, and page margins to
      create a realistic handwritten effect.
    </li>

    <li>
      <strong>Choose a Paper Background:</strong>
      Select from plain paper, ruled paper, notebook paper, or graph paper depending on your
      project requirements.
    </li>

    <li>
      <strong>Preview the Result:</strong>
      Review your handwritten document before exporting to ensure it looks exactly the way you
      want.
    </li>

    <li>
      <strong>Download and Share:</strong>
      Save the finished handwriting as a PNG image or PDF document for printing, sharing, or
      archiving.
    </li>
  </ul>

  <h3>What Is a Text to Handwriting Converter?</h3>

  <p>
    A Text to Handwriting Converter is a tool that transforms standard typed text into a format
    that resembles human handwriting. Instead of displaying traditional computer fonts, the
    converter uses specially designed handwriting styles to recreate the appearance of handwritten
    notes.
  </p>

  <p>
    Modern handwriting generators go beyond simple font replacement. They allow users to customize
    spacing, paper styles, colors, and layout settings, making the final output appear much more
    natural and realistic.
  </p>

  <p>
    This technology is useful for educational purposes, personal projects, creative work, and
    document design where a handwritten appearance is desired without manually writing everything by
    hand.
  </p>

  <h3>Real-Life Example & Use Case</h3>

  <p>
    Imagine a student preparing study notes for an upcoming examination. Typing the notes on a
    computer is much faster than writing everything manually, but printed typed pages can sometimes
    feel difficult to review or less personal.
  </p>

  <p>
    By using this Text to Handwriting Converter, the student can type the notes, convert them into
    realistic handwriting, and print them on lined paper. The result looks like carefully prepared
    handwritten study material while saving a significant amount of time.
  </p>

  <p>
    Similarly, a teacher can create classroom worksheets that have a handwritten appearance,
    helping younger students feel more engaged with the material. A business professional might use
    the tool to create personalized thank-you notes, while content creators can generate
    handwritten quotes for social media graphics.
  </p>

  <h3>Benefits & Who Should Use This Tool?</h3>

  <ul>
    <li>
      <strong>Students:</strong>
      Create neat study notes, project work, assignments, and revision materials without spending
      hours writing by hand.
    </li>

    <li>
      <strong>Teachers:</strong>
      Generate worksheets, classroom activities, educational handouts, and practice exercises with
      consistent handwriting.
    </li>

    <li>
      <strong>Content Creators:</strong>
      Design social media graphics, inspirational quotes, digital journals, and visual content with
      a personal touch.
    </li>

    <li>
      <strong>Professionals:</strong>
      Produce personalized letters, thank-you notes, invitations, and business communications that
      feel more human and engaging.
    </li>

    <li>
      <strong>Designers:</strong>
      Incorporate handwritten elements into branding, posters, presentations, and creative
      projects.
    </li>

    <li>
      <strong>Researchers:</strong>
      Create educational examples, demonstrations, and visual documentation using handwriting
      styles.
    </li>

    <li>
      <strong>Individuals with Handwriting Challenges:</strong>
      Generate neat and readable handwritten documents regardless of physical writing limitations.
    </li>
  </ul>

  <h3>Frequently Asked Questions</h3>

  <p>
    <strong>How many handwriting styles are available?</strong><br>
    Most handwriting converters provide multiple handwriting fonts, ranging from neat classroom
    handwriting to more casual and artistic styles. You can preview each option before selecting
    your favorite.
  </p>

  <p>
    <strong>Can I change the color of the handwriting?</strong><br>
    Yes. You can typically choose from various ink colors such as blue, black, red, green, and
    other shades to match the appearance of real pen writing.
  </p>

  <p>
    <strong>Can I customize spacing and layout?</strong><br>
    Absolutely. Most converters allow you to adjust letter spacing, word spacing, line spacing,
    margins, and font size to achieve a more realistic handwritten effect.
  </p>

  <p>
    <strong>What file formats can I download?</strong><br>
    The generated handwriting can usually be downloaded as PNG images or PDF documents, making it
    easy to print or share.
  </p>

  <p>
    <strong>Can I convert long documents?</strong><br>
    Yes. Large amounts of text can be converted, and lengthy content is typically divided across
    multiple pages when exported as PDF.
  </p>

  <p>
    <strong>Is my text private?</strong><br>
    Yes. Your text remains on your device and is processed locally in your browser. No content is
    uploaded to external servers.
  </p>

  <h3>Why Choose Our Text To Handwriting Converter?</h3>

  <p>
    There are many handwriting generators available online, but our converter focuses on providing
    a balance of realism, simplicity, speed, and privacy. The user-friendly interface makes it easy
    for anyone to create professional-looking handwritten documents in minutes.
  </p>

  <p>
    Unlike some online services that require registration or cloud processing, this tool performs
    all operations directly in your browser. This ensures greater privacy while also improving
    performance.
  </p>

  <p>
    The combination of handwriting styles, customizable spacing controls, paper backgrounds, and
    export options makes it suitable for both personal and professional use.
  </p>

  <h3>Common Applications of Text to Handwriting Conversion</h3>

  <p>
    Converting digital text into handwriting can be useful in many different situations:
  </p>

  <ul>
    <li>
      <strong>Education:</strong>
      Create study notes, assignments, practice sheets, and classroom resources.
    </li>

    <li>
      <strong>Personal Letters:</strong>
      Generate handwritten messages, greetings, invitations, and thank-you notes.
    </li>

    <li>
      <strong>Creative Design:</strong>
      Add handwritten elements to artwork, posters, journals, and social media graphics.
    </li>

    <li>
      <strong>Business Communication:</strong>
      Produce personalized messages that stand out from standard typed documents.
    </li>

    <li>
      <strong>Digital Content Creation:</strong>
      Design handwritten quotes, captions, and visual storytelling elements.
    </li>

    <li>
      <strong>Accessibility Support:</strong>
      Help individuals create clean handwritten documents without physically writing them.
    </li>
  </ul>

  <h3>Customization Features Explained</h3>

  <p>
    One of the biggest advantages of a modern handwriting converter is the ability to personalize
    every aspect of the output.
  </p>

  <ul>
    <li><strong>Font Selection:</strong> Choose from multiple handwriting styles.</li>
    <li><strong>Ink Colors:</strong> Simulate different pen colors and writing tools.</li>
    <li><strong>Font Size:</strong> Create large headings or compact notes.</li>
    <li><strong>Letter Spacing:</strong> Control the distance between characters.</li>
    <li><strong>Word Spacing:</strong> Adjust readability and overall appearance.</li>
    <li><strong>Line Spacing:</strong> Create realistic notebook-style writing layouts.</li>
    <li><strong>Paper Backgrounds:</strong> Use plain, lined, ruled, or graph paper designs.</li>
    <li><strong>Page Margins:</strong> Customize document layout for printing.</li>
  </ul>

  <h3>Tips for Creating Realistic Handwritten Documents</h3>

  <ul>
    <li>
      Choose a handwriting style that matches the purpose of your document.
    </li>

    <li>
      Use moderate font sizes to mimic natural handwriting.
    </li>

    <li>
      Slightly increase line spacing for improved readability.
    </li>

    <li>
      Select blue or black ink colors for a traditional handwritten appearance.
    </li>

    <li>
      Use lined paper backgrounds when creating educational notes.
    </li>

    <li>
      Review the preview carefully before downloading the final version.
    </li>
  </ul>

  <h3>Advantages of Digital Handwriting</h3>

  <p>
    Digital handwriting combines the convenience of typing with the visual appeal of handwritten
    content. Users can edit mistakes instantly, experiment with different styles, and generate
    polished documents without rewriting entire pages.
  </p>

  <p>
    This approach saves time, improves consistency, and provides flexibility for educational,
    creative, and professional applications. It also allows users to maintain a handwritten
    aesthetic without sacrificing the efficiency of digital tools.
  </p>

  <h3>Conclusion</h3>

  <p>
    The Text To Handwriting Converter is a practical and versatile tool for transforming ordinary
    typed text into realistic handwritten documents. Whether you're creating assignments, personal
    letters, educational materials, creative artwork, or professional communications, the tool
    offers an easy way to achieve an authentic handwritten appearance.
  </p>

  <p>
    With multiple handwriting styles, extensive customization options, secure browser-based
    processing, and convenient export formats, it provides everything needed to create
    high-quality handwritten content quickly and efficiently. Simply enter your text, customize the
    design, preview the result, and download your finished document within minutes.
  </p>

</div>

<!-- File Upload Modal -->
<div id="uploadModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Upload Text File</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>Select a text file (.txt, .doc, or .docx) to upload its content to the text area.</p>
      <input type="file" id="modalFileUpload" accept=".txt,.doc,.docx">
      <p id="fileInfo" class="file-info"></p>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelUpload">Cancel</button>
      <button class="modal-button primary" id="confirmUpload">Upload</button>
    </div>
  </div>
</div>

<!-- Add these libraries for PNG and PDF generation -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

<script>
document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('textInput');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const fileUpload = document.getElementById('fileUpload');
    const uploadIcon = document.getElementById('uploadIcon');
    const handwritingPreview = document.getElementById('handwritingPreview');
    
    // Handwriting options
    const fontFamily = document.getElementById('fontFamily');
    const fontSize = document.getElementById('fontSize');
    const inkColor = document.getElementById('inkColor');
    const colorValue = document.getElementById('colorValue');
    const pageStyle = document.getElementById('pageStyle');
    const letterSpacing = document.getElementById('letterSpacing');
    const letterSpacingValue = document.getElementById('letterSpacingValue');
    const wordSpacing = document.getElementById('wordSpacing');
    const wordSpacingValue = document.getElementById('wordSpacingValue');
    const lineSpacing = document.getElementById('lineSpacing');
    const lineSpacingValue = document.getElementById('lineSpacingValue');
    
    // Font preview items
    const fontItems = document.querySelectorAll('.font-item');
    
    // Modal elements
    const uploadModal = document.getElementById('uploadModal');
    const modalFileUpload = document.getElementById('modalFileUpload');
    const fileInfo = document.getElementById('fileInfo');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelUpload = document.getElementById('cancelUpload');
    const confirmUpload = document.getElementById('confirmUpload');

    // Initialize counters
    updateCounts();

    // Event listeners for real-time preview updates
    textInput.addEventListener('input', function() {
        updateCounts();
        updateHandwritingPreview();
    });
    
    // Update color value display and preview
    inkColor.addEventListener('input', function() {
        colorValue.textContent = this.value;
        colorValue.style.color = this.value; // Visual feedback
        updateHandwritingPreview();
    });
    
    // Update spacing value displays and preview
    letterSpacing.addEventListener('input', function() {
        letterSpacingValue.textContent = this.value + 'px';
        updateHandwritingPreview();
    });
    
    wordSpacing.addEventListener('input', function() {
        wordSpacingValue.textContent = this.value + 'px';
        updateHandwritingPreview();
    });
    
    lineSpacing.addEventListener('input', function() {
        lineSpacingValue.textContent = this.value;
        updateHandwritingPreview();
    });
    
    // Update preview when other settings change
    fontSize.addEventListener('input', updateHandwritingPreview);
    fontFamily.addEventListener('change', updateHandwritingPreview);
    pageStyle.addEventListener('change', updateHandwritingPreview);
    
    // Font selection from preview
    fontItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            fontItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
            // Update font family select
            const font = this.getAttribute('data-font');
            fontFamily.value = font;
            updateHandwritingPreview();
        });
    });
    
    // Update font preview when select changes
    fontFamily.addEventListener('change', function() {
        fontItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-font') === this.value) {
                item.classList.add('active');
            }
        });
        updateHandwritingPreview();
    });

    caseButtons.forEach(button => {
        button.addEventListener('click', function () {
            const action = this.getAttribute('data-action');
            handleTextAction(action);
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

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === uploadModal) {
            uploadModal.style.display = 'none';
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
        if (file.type === 'text/plain' || file.name.endsWith('.txt') || 
            file.name.endsWith('.doc') || file.name.endsWith('.docx')) {
            const reader = new FileReader();
            reader.onload = function (e) {
                textInput.value = e.target.result;
                updateCounts();
                updateHandwritingPreview();
                showAlert('Text file uploaded successfully!', 'success');
                uploadModal.style.display = 'none';
                modalFileUpload.value = '';
                fileInfo.textContent = '';
            };
            reader.onerror = function () {
                showAlert('Error reading the text file.', 'error');
            };
            reader.readAsText(file);
        } else {
            showAlert('Unsupported file format. Please upload a TXT, DOC, or DOCX file.', 'error');
        }
    });

    function updateCounts() {
        const text = textInput.value;

        // Character count
        document.getElementById('charCount').textContent = text.length;

        // Word count
        const wordCount = text ? text.trim().split(/\s+/).length : 0;
        document.getElementById('wordCount').textContent = wordCount;

        // Line count
        const lineCount = text ? text.split(/\n/).length : 0;
        document.getElementById('lineCount').textContent = lineCount;

        // Page count (approximate - assuming ~500 words per page)
        const pageCount = Math.max(1, Math.ceil(wordCount / 500));
        document.getElementById('pageCount').textContent = pageCount;
    }

    function handleTextAction(action) {
        const text = textInput.value;

        switch (action) {
            case 'preview':
                updateHandwritingPreview();
                showAlert('Handwriting preview updated!', 'success');
                break;

            case 'download-png':
                downloadAsPNG();
                break;

            case 'download-pdf':
                downloadAsPDF();
                break;

            case 'copy':
                copyToClipboard(text);
                break;

            case 'clear':
                textInput.value = '';
                handwritingPreview.innerHTML = '<p>Your handwriting will appear here. Type some text and click "Preview Handwriting" to see the result.</p>';
                updateCounts();
                break;
        }
    }

    function updateHandwritingPreview() {
        const text = textInput.value;
        if (!text.trim()) {
            handwritingPreview.innerHTML = '<p style="color: #666;">Please enter some text to preview.</p>';
            return;
        }

        // Get the selected font family from the active font item
        const activeFontItem = document.querySelector('.font-item.active');
        const selectedFont = activeFontItem ? activeFontItem.getAttribute('data-font') : 'gloria-hallelujah';
        const currentColor = inkColor.value;
        
        // Apply all selected styles to preview container
        handwritingPreview.style.fontFamily = getComputedStyle(document.querySelector(`.${selectedFont}`)).fontFamily;
        handwritingPreview.style.fontSize = fontSize.value + 'px';
        handwritingPreview.style.color = currentColor;
        handwritingPreview.style.letterSpacing = letterSpacing.value + 'px';
        handwritingPreview.style.wordSpacing = wordSpacing.value + 'px';
        handwritingPreview.style.lineHeight = lineSpacing.value;
        
        // Apply page style
        handwritingPreview.className = 'handwriting-preview page-style';
        if (pageStyle.value === 'lined') {
            handwritingPreview.classList.add('lined');
        } else if (pageStyle.value === 'grid') {
            handwritingPreview.classList.add('grid');
        }
        
        // Format text with paragraphs - apply color to each paragraph explicitly
        const paragraphs = text.split('\n\n');
        let htmlContent = '';
        
        paragraphs.forEach(paragraph => {
            if (paragraph.trim()) {
                // Replace single newlines with <br> tags but keep paragraph separation
                const formattedParagraph = paragraph.replace(/\n/g, '<br>');
                htmlContent += `<p style="color: ${currentColor}; margin: 0 0 1em 0; font-family: inherit; font-size: inherit; letter-spacing: inherit; word-spacing: inherit; line-height: inherit;">${formattedParagraph}</p>`;
            }
        });
        
        handwritingPreview.innerHTML = htmlContent || `<p style="color: ${currentColor};">No text to display.</p>`;
    }

    function downloadAsPNG() {
        const text = textInput.value;
        if (!text.trim()) {
            showAlert('Please enter some text before downloading.', 'error');
            return;
        }

        // Update preview to ensure we're capturing the current state
        updateHandwritingPreview();

        // Use html2canvas to capture the handwriting preview
        html2canvas(handwritingPreview, {
            scale: 2, // Higher scale for better quality
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
        }).then(canvas => {
            // Convert canvas to blob
            canvas.toBlob(blob => {
                // Create download link
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'handwriting-' + new Date().getTime() + '.png';
                
                // Trigger download
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                
                // Clean up
                URL.revokeObjectURL(url);
                
                showAlert('PNG downloaded successfully!', 'success');
            }, 'image/png');
        }).catch(error => {
            console.error('Error generating PNG:', error);
            showAlert('Error generating PNG. Please try again.', 'error');
        });
    }

    function downloadAsPDF() {
        const text = textInput.value;
        if (!text.trim()) {
            showAlert('Please enter some text before downloading.', 'error');
            return;
        }

        // Check if jsPDF is available
        if (typeof jspdf === 'undefined') {
            showAlert('PDF generation library not loaded. Please refresh the page.', 'error');
            return;
        }

        // Update preview to ensure we're capturing the current state
        updateHandwritingPreview();

        // Use html2canvas to capture the handwriting preview
        html2canvas(handwritingPreview, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
        }).then(canvas => {
            // Initialize jsPDF
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            
            // Calculate dimensions to fit the image on the page
            const imgWidth = pageWidth - 20; // 10mm margin on each side
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            
            // Add image to PDF
            const imgData = canvas.toDataURL('image/png');
            pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
            
            // Save PDF
            pdf.save('handwriting-' + new Date().getTime() + '.pdf');
            
            showAlert('PDF downloaded successfully!', 'success');
        }).catch(error => {
            console.error('Error generating PDF:', error);
            showAlert('Error generating PDF. Please try again.', 'error');
        });
    }

    function copyToClipboard(text) {
        if (!text.trim()) {
            showAlert('Please enter some text to copy.', 'error');
            return;
        }
        
        navigator.clipboard.writeText(text).then(() => {
            showAlert('Text copied to clipboard!', 'success');
        }).catch(err => {
            showAlert('Failed to copy text: ' + err, 'error');
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
    
    // Initialize the preview with default values
    updateHandwritingPreview();
});
</script>