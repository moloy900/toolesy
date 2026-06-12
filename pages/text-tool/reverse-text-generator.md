---
layout: default
title: "Reverse Text Generator - Flip & Reverse Text Online"
permalink: /reverse-text-generator-flip-reverse-text-online/
---

<!-- ✅ Basic Meta Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Reverse Text Generator - Flip & Reverse Text Online</title>
<meta name="description" content="Free reverse text generator tool. Flip text, mirror words, and reverse letters instantly. Perfect for fun messages, social media, coding, and creative projects.">
<meta name="keywords" content="reverse text, flip text, mirror text, backwards text, reverse string, upside down text, text reverser, reverse words, text tool, string converter">
<meta name="author" content="paramdip nath">
<meta name="robots" content="index, follow">

<!-- ✅ Open Graph Tags -->
<meta property="og:title" content="Reverse Text Generator - Flip & Mirror Text Instantly">
<meta property="og:description" content="Flip your text backwards, reverse words, and create mirrored text in one click. 100% Free.">
<meta property="og:url" content="https://toolesy.com/reverse-text-generator-flip-reverse-text-online">
<meta property="og:type" content="website">

<!-- ✅ Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Reverse Text Generator - FREE Online Tool">
<meta name="twitter:description" content="Reverse and flip text instantly. Great for puzzles, coding, fun messages, and more.">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Reverse Text Generator Styles */
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

  /* Reverse Text specific styles */
  .reverse-options {
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

    .reverse-options {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Reverse Text Generator</h1>
  <p class="welcome-message">Flip and reverse your text instantly with our free online tool. Create backwards text, mirrored text, and upside down text for social media, coding, and creative projects.</p>

  <div class="converter-section">
    <h2>Reverse Text Generator</h2>

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
        <span>Reverse Time: </span>
        <span id="reverseTime">0ms</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Input Text <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      <textarea id="textInput" rows="6" placeholder="Enter your text here to reverse it..."></textarea>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".txt,.text" style="display: none;">

    <div class="reverse-options">
      <div class="option-group">
        <label class="option-label">Reverse Type</label>
        <select id="reverseType" class="option-select">
          <option value="reverse">Reverse Text (Backwards)</option>
          <option value="words">Reverse Words Order</option>
          <option value="mirror">Mirror Text</option>
          <option value="upside-down">Upside Down Text</option>
          <option value="flip">Flip Text</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Case Handling</label>
        <select id="caseHandling" class="option-select">
          <option value="preserve">Preserve Original Case</option>
          <option value="lower">Convert to Lowercase</option>
          <option value="upper">Convert to Uppercase</option>
          <option value="title">Title Case</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Line Handling</label>
        <select id="lineHandling" class="option-select">
          <option value="preserve">Preserve Line Breaks</option>
          <option value="single">Single Line</option>
          <option value="reverse-lines">Reverse Line Order</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="preserveSpaces" checked>
          <label for="preserveSpaces">Preserve Spaces</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="preservePunctuation" checked>
          <label for="preservePunctuation">Preserve Punctuation</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="autoReverse" checked>
          <label for="autoReverse">Auto Reverse on Type</label>
        </div>
      </div>
    </div>

    <div class="input-section">
      <h2>Reversed Text Output</h2>
      <textarea id="textOutput" rows="6" placeholder="Reversed text will appear here..." readonly></textarea>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="reverse">Reverse Text</button>
        <button class="case-button" data-action="copy-input">Copy Input</button>
        <button class="case-button" data-action="copy-output">Copy Output</button>
        <button class="case-button success" data-action="download">Download Text</button>
        <button class="case-button warning" data-action="compare">Compare</button>
        <button class="case-button secondary" data-action="clear">Clear All</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

   {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <h3>Original Text:</h3>
      <div class="example-text">Hello World!
This is a sample text.
Reverse text generator is amazing!</div>

      <h3>Reversed Text (Backwards):</h3>
      <div class="example-text">!gnizama si rotareneg txet esreveR
.txet elpmas a si sihT
!dlroW olleH</div>

      <h3>Reverse Words Order:</h3>
      <div class="example-text">World! Hello
text sample a is This
amazing! is generator text Reverse</div>

      <h3>Mirror Text:</h3>
      <div class="example-text">!dlroW olleH
.txet elpmas a si sihT
!gnizama si rotareneg txet esreveR</div>

      <h3>Upside Down Text:</h3>
      <div class="example-text">¡pꞕoꞁꞁǝH
˙ʇxǝʇ ǝꞁdɯɐs ɐ sᴉ sᴉɥꞱ
¡buᴉzɐɯɐ sᴉ ɹoʇɐɹǝuǝɹ ʇxǝʇ ǝsɹǝʌǝɹ</div>
    </div>
  </div>


<!-- SEO Content Section -->
<div class="content-placeholder">

    <h2>Free Online Reverse Text Generator Tool – Instantly Reverse, Flip, and Transform Text</h2>

    <p>
        Looking for a quick and easy way to reverse text online? Our <strong>Free Reverse Text Generator</strong> helps
        you instantly transform ordinary text into reversed text, mirrored text, upside-down text, flipped text, and
        other creative variations. Whether you're creating engaging social media content, testing programming logic,
        designing digital artwork, or simply having fun with text manipulation, this tool provides a fast and reliable
        solution.
    </p>

    <p>
        Text reversal may seem simple at first, but it has a surprising number of practical and creative applications.
        From educational exercises and software development to puzzles, branding concepts, and visual design projects,
        reversed text can add a unique element that captures attention and encourages interaction.
    </p>

    <p>
        Unlike many online tools that require registration or upload your data to external servers, this reverse text
        generator works directly within your browser. Your content remains private and secure throughout the entire
        process. Simply enter your text, choose a transformation method, and receive instant results.
    </p>

    <p>
        Whether you're reversing a single word, a sentence, a paragraph, or an entire document, the tool can process
        large amounts of text quickly while preserving accuracy and formatting options.
    </p>

    <h3>How to Use This Reverse Text Generator (Step-by-Step)</h3>

    <ul>
        <li>
            <strong>Enter Your Text:</strong>
            Type directly into the input field or paste content from documents, websites, emails, social media posts,
            or other sources.
        </li>

        <li>
            <strong>Select a Reverse Mode:</strong>
            Choose how you want the text transformed. Options may include character reversal, word reversal, mirror
            text, upside-down text, and more.
        </li>

        <li>
            <strong>Adjust Optional Settings:</strong>
            Configure options such as case preservation, punctuation handling, spacing preferences, and line-break
            behavior.
        </li>

        <li>
            <strong>Generate the Output:</strong>
            Click the generate button and instantly view the transformed version of your text.
        </li>

        <li>
            <strong>Copy, Share, or Download:</strong>
            Use the output immediately, copy it to your clipboard, or save it for future projects.
        </li>
    </ul>

    <h3>What Is Reverse Text?</h3>

    <p>
        Reverse text is text that has been transformed so that the order of characters, words, or lines appears in the
        opposite direction from the original. For example, the word "Hello" becomes "olleH" when reversed character by
        character.
    </p>

    <p>
        Depending on the selected transformation method, reverse text can take several forms. Some methods reverse only
        the characters, while others reverse the order of words or entire lines. Advanced styles may even create
        mirrored or upside-down versions using special Unicode characters.
    </p>

    <p>
        These transformations can be useful for both practical and creative purposes, making reverse text generators
        popular among students, programmers, designers, content creators, and puzzle enthusiasts.
    </p>

    <h3>Real-Life Example & Use Case</h3>

    <p>
        Imagine you're managing a social media campaign for a mystery-themed event. You want to create curiosity and
        encourage audience participation. Instead of posting a normal announcement, you decide to publish a hidden
        message using reversed text.
    </p>

    <p>
        For example, the phrase:
    </p>

    <div class="example-text">
        "The secret event begins tonight."
    </div>

    <p>
        can instantly become:
    </p>

    <div class="example-text">
        ".thginot snigeb tneve terces ehT"
    </div>

    <p>
        Followers become intrigued and attempt to decode the message, increasing engagement and interaction. This
        simple transformation can turn ordinary content into a fun and memorable experience.
    </p>

    <h3>Benefits & Who Should Use This Tool?</h3>

    <ul>
        <li>
            <strong>Social Media Managers:</strong>
            Create unique posts that attract attention and encourage audience interaction.
        </li>

        <li>
            <strong>Developers & Programmers:</strong>
            Test string manipulation algorithms and experiment with text-processing functions.
        </li>

        <li>
            <strong>Content Creators:</strong>
            Add creative effects to videos, graphics, blog posts, and digital content.
        </li>

        <li>
            <strong>Teachers & Students:</strong>
            Demonstrate concepts related to strings, language processing, and computational thinking.
        </li>

        <li>
            <strong>Graphic Designers:</strong>
            Explore visual text effects for logos, artwork, and creative branding projects.
        </li>

        <li>
            <strong>Puzzle Creators:</strong>
            Design games, riddles, treasure hunts, and decoding challenges.
        </li>

        <li>
            <strong>Researchers:</strong>
            Analyze text transformations and language processing techniques.
        </li>
    </ul>

    <h3>Popular Types of Reverse Text</h3>

    <ul>
        <li>
            <strong>Character Reversal:</strong>
            Reverses every character in the text from end to beginning.
        </li>

        <li>
            <strong>Word Reversal:</strong>
            Keeps characters intact while reversing the order of words.
        </li>

        <li>
            <strong>Line Reversal:</strong>
            Changes the order of lines while preserving the content of each line.
        </li>

        <li>
            <strong>Mirror Text:</strong>
            Creates text that visually resembles a reflection.
        </li>

        <li>
            <strong>Upside-Down Text:</strong>
            Uses Unicode characters to simulate flipped text.
        </li>

        <li>
            <strong>Flip Text:</strong>
            Generates stylized text effects often used in creative design projects.
        </li>
    </ul>

    <h3>Frequently Asked Questions</h3>

    <p>
        <strong>What is the difference between reverse text and mirror text?</strong><br>
        Reverse text changes the order of characters, words, or lines. Mirror text attempts to visually simulate a
        reflected appearance using special character substitutions.
    </p>

    <p>
        <strong>How much text can I reverse?</strong><br>
        Most modern browsers can process thousands of characters at once, allowing you to reverse lengthy documents,
        articles, and data sets.
    </p>

    <p>
        <strong>Will punctuation and spaces be preserved?</strong><br>
        Yes. Depending on the selected settings, punctuation marks, spaces, and formatting can be preserved or modified
        according to your preferences.
    </p>

    <p>
        <strong>Is my text secure?</strong><br>
        Absolutely. Processing occurs locally within your browser, meaning your content is not uploaded or stored
        externally.
    </p>

    <p>
        <strong>Can I use the tool on mobile devices?</strong><br>
        Yes. The reverse text generator works on smartphones, tablets, laptops, and desktop computers.
    </p>

    <p>
        <strong>Do I need an account?</strong><br>
        No. The tool is completely free and does not require registration or subscriptions.
    </p>

    <h3>Why Choose Our Reverse Text Generator?</h3>

    <p>
        There are many text transformation tools available online, but our reverse text generator focuses on speed,
        simplicity, flexibility, and privacy. Whether you're reversing a single word or processing a large document,
        the tool delivers accurate results within seconds.
    </p>

    <p>
        The intuitive interface makes it easy for beginners to use, while advanced customization options provide
        flexibility for professional users. Everything works directly in your browser, eliminating the need for
        software downloads or complicated installations.
    </p>

    <p>
        Privacy is another major advantage. Because processing occurs locally, your text remains entirely under your
        control at all times.
    </p>

    <h3>Common Applications of Reverse Text</h3>

    <p>
        Reverse text generation is useful in a wide variety of situations:
    </p>

    <ul>
        <li>
            <strong>Social Media Marketing:</strong>
            Create attention-grabbing posts and interactive content.
        </li>

        <li>
            <strong>Programming Education:</strong>
            Demonstrate algorithms related to string manipulation.
        </li>

        <li>
            <strong>Creative Design:</strong>
            Produce unique typography and visual effects.
        </li>

        <li>
            <strong>Gaming:</strong>
            Design clues, puzzles, hidden messages, and challenges.
        </li>

        <li>
            <strong>Language Learning:</strong>
            Explore word structures and text transformations.
        </li>

        <li>
            <strong>Research & Testing:</strong>
            Generate modified text for analysis and experimentation.
        </li>

        <li>
            <strong>Entertainment:</strong>
            Create fun messages, riddles, and social activities.
        </li>
    </ul>

    <h3>Advanced Features & Customization</h3>

    <p>
        Our reverse text generator provides a variety of advanced controls that allow users to customize the output
        according to their specific needs.
    </p>

    <ul>
        <li>
            <strong>Multiple Reverse Modes:</strong>
            Choose between character reversal, word reversal, line reversal, mirror text, and upside-down text.
        </li>

        <li>
            <strong>Case Management:</strong>
            Preserve original capitalization or convert text to uppercase, lowercase, or title case.
        </li>

        <li>
            <strong>Formatting Controls:</strong>
            Decide how spaces, punctuation, symbols, and line breaks should be handled.
        </li>

        <li>
            <strong>Real-Time Preview:</strong>
            Instantly view changes while editing text.
        </li>

        <li>
            <strong>Large Text Support:</strong>
            Process long documents, reports, and datasets efficiently.
        </li>

        <li>
            <strong>Cross-Platform Compatibility:</strong>
            Works consistently across desktop and mobile devices.
        </li>
    </ul>

    <h3>Educational Value of Reverse Text</h3>

    <p>
        Reverse text tools are often used in computer science and language education. Students learning programming can
        experiment with string manipulation techniques, while language learners can study character patterns and word
        structures from a different perspective.
    </p>

    <p>
        Teachers frequently use reverse text exercises to encourage logical thinking and problem-solving. Activities
        involving encoded messages and text transformations can make learning more interactive and enjoyable.
    </p>

    <h3>Tips for Getting the Best Results</h3>

    <ul>
        <li>Choose the transformation style that best matches your project goals.</li>
        <li>Preview the output before sharing or publishing.</li>
        <li>Test different reverse modes for creative inspiration.</li>
        <li>Use mirror and upside-down text sparingly to maintain readability.</li>
        <li>Combine reverse text with other typography effects for unique designs.</li>
    </ul>

    <h3>Conclusion</h3>

    <p>
        The Free Online Reverse Text Generator is a versatile tool for transforming ordinary text into creative,
        engaging, and visually interesting formats. Whether you're creating social media content, designing graphics,
        developing software, teaching programming concepts, or simply experimenting with text effects, the tool offers
        a fast and reliable solution.
    </p>

    <p>
        With multiple reversal modes, advanced customization options, strong privacy protection, and support for large
        amounts of text, it is an excellent choice for professionals, students, creators, and hobbyists alike. Try it
        today and discover new ways to transform your text with just a few clicks.
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
      <p>Select a text file (.txt) to upload its content to the text area.</p>
      <input type="file" id="modalFileUpload" accept=".txt,.text">
      <p id="fileInfo" class="file-info"></p>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelUpload">Cancel</button>
      <button class="modal-button primary" id="confirmUpload">Upload</button>
    </div>
  </div>
</div>

<!-- Compare Modal -->
<div id="compareModal" class="modal">
  <div class="modal-content" style="max-width: 90%;">
    <div class="modal-header">
      <h3 class="modal-title">Compare Text</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
          <h4>Original Text</h4>
          <textarea id="originalText" rows="10" style="width: 100%; font-family: monospace;" readonly></textarea>
        </div>
        <div>
          <h4>Reversed Text</h4>
          <textarea id="reversedText" rows="10" style="width: 100%; font-family: monospace;" readonly></textarea>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="closeCompare">Close</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('textInput');
    const textOutput = document.getElementById('textOutput');
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const fileUpload = document.getElementById('fileUpload');
    const uploadIcon = document.getElementById('uploadIcon');
    
    // Reverse options
    const reverseType = document.getElementById('reverseType');
    const caseHandling = document.getElementById('caseHandling');
    const lineHandling = document.getElementById('lineHandling');
    const preserveSpaces = document.getElementById('preserveSpaces');
    const preservePunctuation = document.getElementById('preservePunctuation');
    const autoReverse = document.getElementById('autoReverse');
    
    // Modal elements
    const uploadModal = document.getElementById('uploadModal');
    const compareModal = document.getElementById('compareModal');
    const modalFileUpload = document.getElementById('modalFileUpload');
    const fileInfo = document.getElementById('fileInfo');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelUpload = document.getElementById('cancelUpload');
    const confirmUpload = document.getElementById('confirmUpload');
    const closeCompare = document.getElementById('closeCompare');
    const originalText = document.getElementById('originalText');
    const reversedText = document.getElementById('reversedText');
    

    // Store original text for comparison
    let originalTextContent = '';

    // Initialize counters
    updateCounts();

    // Event listeners
    textInput.addEventListener('input', function() {
      updateCounts();
      if (autoReverse.checked && textInput.value) {
        handleReverseAction();
      }
    });

    // Options change listeners for auto reverse
    reverseType.addEventListener('change', function() {
      if (autoReverse.checked && textInput.value) {
        handleReverseAction();
      }
    });

    caseHandling.addEventListener('change', function() {
      if (autoReverse.checked && textInput.value) {
        handleReverseAction();
      }
    });

    lineHandling.addEventListener('change', function() {
      if (autoReverse.checked && textInput.value) {
        handleReverseAction();
      }
    });

    preserveSpaces.addEventListener('change', function() {
      if (autoReverse.checked && textInput.value) {
        handleReverseAction();
      }
    });

    preservePunctuation.addEventListener('change', function() {
      if (autoReverse.checked && textInput.value) {
        handleReverseAction();
      }
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
        compareModal.style.display = 'none';
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

    // Close compare modal
    closeCompare.addEventListener('click', function() {
      compareModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === uploadModal || event.target === compareModal) {
        uploadModal.style.display = 'none';
        compareModal.style.display = 'none';
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
      if (file.type === 'text/plain' || file.name.endsWith('.txt') || file.name.endsWith('.text')) {
        const reader = new FileReader();
        reader.onload = function (e) {
          textInput.value = e.target.result;
          updateCounts();
          if (autoReverse.checked) {
            handleReverseAction();
          }
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
        showAlert('Unsupported file format. Please upload a TXT file.', 'error');
      }
    });

    function updateCounts() {
      const text = textInput.value;

      // Character count
      document.getElementById('charCount').textContent = text.length;

      // Word count (approximate)
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      document.getElementById('wordCount').textContent = words;

      // Line count
      const lineCount = text ? text.split(/\n/).length : 0;
      document.getElementById('lineCount').textContent = lineCount;
    }

    function handleTextAction(action) {
      const text = textInput.value;
      
      // Store original text for comparison
      if (action === 'reverse') {
        originalTextContent = text;
      }

      switch (action) {
        case 'reverse':
          handleReverseAction();
          break;

        case 'copy-input':
          copyToClipboard(text);
          break;

        case 'copy-output':
          copyToClipboard(textOutput.value);
          break;

        case 'download':
          downloadText('reversed_text.txt', textOutput.value);
          break;

        case 'compare':
          if (!originalTextContent) {
            showAlert('Please reverse text first to compare.', 'error');
            return;
          }
          originalText.value = originalTextContent;
          reversedText.value = textOutput.value;
          compareModal.style.display = 'block';
          break;

        case 'clear':
          textInput.value = '';
          textOutput.value = '';
          originalTextContent = '';
          updateCounts();
          document.getElementById('reverseTime').textContent = '0ms';
          break;
      }

      updateCounts();
    }

    function handleReverseAction() {
      const startTime = performance.now();
      const text = textInput.value;
      
      if (!text) {
        showAlert('Please enter some text to reverse.', 'error');
        return;
      }

      let reversed = '';
      const type = reverseType.value;
      
      switch (type) {
        case 'reverse':
          reversed = reverseText(text);
          break;
        case 'words':
          reversed = reverseWords(text);
          break;
        case 'mirror':
          reversed = mirrorText(text);
          break;
        case 'upside-down':
          reversed = upsideDownText(text);
          break;
        case 'flip':
          reversed = flipText(text);
          break;
      }
      
      // Apply case handling
      reversed = applyCaseHandling(reversed);
      
      textOutput.value = reversed;
      
      const endTime = performance.now();
      document.getElementById('reverseTime').textContent = Math.round(endTime - startTime) + 'ms';
      
      showAlert('Text reversed successfully!', 'success');
    }

    // Reverse text functions
    function reverseText(text) {
      let lines = text.split('\n');
      let result = [];
      
      for (let line of lines) {
        // Reverse the entire string
        let reversedLine = line.split('').reverse().join('');
        result.push(reversedLine);
      }
      
      if (lineHandling.value === 'reverse-lines') {
        result.reverse();
      }
      
      return lineHandling.value === 'single' ? result.join(' ') : result.join('\n');
    }
    
    function reverseWords(text) {
      let lines = text.split('\n');
      let result = [];
      
      for (let line of lines) {
        // Reverse word order
        let words = line.split(/\s+/);
        let reversedWords = words.reverse();
        result.push(reversedWords.join(' '));
      }
      
      if (lineHandling.value === 'reverse-lines') {
        result.reverse();
      }
      
      return lineHandling.value === 'single' ? result.join(' ') : result.join('\n');
    }
    
    function mirrorText(text) {
      let lines = text.split('\n');
      let result = [];
      
      for (let line of lines) {
        // Reverse each line but keep line order
        let reversedLine = line.split('').reverse().join('');
        result.push(reversedLine);
      }
      
      return result.join('\n');
    }
    
    function upsideDownText(text) {
      const upsideDownMap = {
        'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ',
        'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd',
        'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x',
        'y': 'ʎ', 'z': 'z', 'A': '∀', 'B': '𐐒', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'Ⅎ',
        'G': 'פ', 'H': 'H', 'I': 'I', 'J': 'ſ', 'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N',
        'O': 'O', 'P': 'Ԁ', 'Q': 'Ό', 'R': 'ᴚ', 'S': 'S', 'T': '┴', 'U': '∩', 'V': 'Λ',
        'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z', '0': '0', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ',
        '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6', '.': '˙', ',': "'",
        "'": ',', '"': ',,', '`': ',', '?': '¿', '!': '¡', '[': ']', ']': '[', '(': ')',
        ')': '(', '{': '}', '}': '{', '<': '>', '>': '<', '&': '⅋', '_': '‾', ';': '؛',
        ':': ':', '-': '-', '+': '+', '=': '=', '*': '*', '/': '/', '\\': '\\', '|': '|',
        ' ': ' '
      };
      
      let result = '';
      for (let char of text) {
        result = (upsideDownMap[char] || char) + result;
      }
      
      return result;
    }
    
    function flipText(text) {
      // Simple flip - reverse and swap some characters
      const flipMap = {
        'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ',
        'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd',
        'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x',
        'y': 'ʎ', 'z': 'z'
      };
      
      let result = '';
      for (let char of text) {
        result = (flipMap[char.toLowerCase()] || char) + result;
      }
      
      return result;
    }
    
    function applyCaseHandling(text) {
      switch (caseHandling.value) {
        case 'lower':
          return text.toLowerCase();
        case 'upper':
          return text.toUpperCase();
        case 'title':
          return toTitleCase(text);
        default:
          return text;
      }
    }
    
    function toTitleCase(text) {
      return text.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }

    function copyToClipboard(text) {
      if (!text) {
        showAlert('No text to copy.', 'error');
        return;
      }
      
      navigator.clipboard.writeText(text).then(() => {
        showAlert('Text copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy text: ' + err, 'error');
      });
    }

    function downloadText(filename, text) {
      if (!text) {
        showAlert('No text to download.', 'error');
        return;
      }
      
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showAlert('Text downloaded successfully!', 'success');
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