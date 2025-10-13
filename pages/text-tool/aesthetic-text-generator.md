---
layout: default
title: "Aesthetic Text Generator - Create Stylish Text for Social Media"
permalink: /aesthetic-text-generator-create-stylish-text-for-social-media/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Free Aesthetic Text Generator - Create Stylish Text for Social Media</title>
<meta name="description"
  content="Free online aesthetic text generator tool. Create stylish, fancy, and beautiful text for social media, bios, and messages. Convert normal text to aesthetic fonts instantly.">
<meta name="keywords"
  content="aesthetic text generator, fancy text, stylish fonts, social media text, bio text, cool fonts, text generator, unicode text, aesthetic fonts">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Aesthetic Text Generator Styles */
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
    font-family: 'Arial', sans-serif;
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

  .output-section textarea {
    width: 100%;
    padding: 18px;
    border: 2px solid #e0e6ed;
    border-radius: 10px;
    font-size: 16px;
    min-height: 120px;
    resize: vertical;
    font-family: 'Arial', sans-serif;
    background: #f8f9fa;
    transition: border-color 0.3s;
  }

  .font-preview {
    margin: 15px 0;
    padding: 15px;
    background: white;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
    font-size: 1.4rem;
    text-align: center;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
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

  .font-styles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
  }

  .font-style-button {
    padding: 15px;
    border: 2px solid #e0e6ed;
    border-radius: 8px;
    background: white;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    font-size: 1.1rem;
  }

  .font-style-button:hover {
    border-color: var(--primary);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .font-style-button.active {
    border-color: var(--primary);
    background: var(--primary);
    color: white;
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

  /* Share and donation buttons */
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

  /* Examples section */
  .examples {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .example-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    margin: 20px 0;
  }

  .example-item {
    padding: 15px;
    background: white;
    border-radius: 8px;
    text-align: center;
    border-left: 4px solid var(--primary);
  }

  .example-original {
    font-size: 1rem;
    color: #666;
    margin-bottom: 8px;
  }

  .example-aesthetic {
    font-size: 1.3rem;
    font-weight: bold;
    color: #2c3e50;
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

    .font-styles {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    .example-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Aesthetic Text Generator</h1>
  <p class="welcome-message">Create beautiful, stylish text for social media bios, messages, and posts. Convert normal text to aesthetic fonts with fancy unicode characters instantly.</p>

  <div class="converter-section">
    <h2>Aesthetic Text Generator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Character Count: </span>
        <span id="charCount">0</span>
      </div>
      <div class="counter-item">
        <span>Line Count: </span>
        <span id="lineCount">0</span>
      </div>
      <div class="counter-item">
        <span>Font Style: </span>
        <span id="fontStyle">Normal</span>
      </div>
      <div class="counter-item">
        <span>Text Type: </span>
        <span id="textType">Plain Text</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Input Text</h2>
      <textarea id="textInput" rows="4" placeholder="Type or paste your text here..."></textarea>
    </div>

    <div class="font-styles">
      <div class="font-style-button active" data-style="normal">Normal Text</div>
      <div class="font-style-button" data-style="bold">Bold Text</div>
      <div class="font-style-button" data-style="italic">Italic Text</div>
      <div class="font-style-button" data-style="script">Script Text</div>
      <div class="font-style-button" data-style="double-struck">Double Struck</div>
      <div class="font-style-button" data-style="gothic">Gothic Text</div>
      <div class="font-style-button" data-style="cursive">Cursive Text</div>
      <div class="font-style-button" data-style="squared">Squared Text</div>
      <div class="font-style-button" data-style="circled">Circled Text</div>
      <div class="font-style-button" data-style="small-caps">Small Caps</div>
      <div class="font-style-button" data-style="reversed">Reversed Text</div>
      <div class="font-style-button" data-style="upside-down">Upside Down</div>
    </div>

    <div class="font-preview" id="fontPreview">
      Your aesthetic text will appear here...
    </div>

    <div class="output-section">
      <h2>Output Text</h2>
      <textarea id="textOutput" rows="4" placeholder="Aesthetic text will appear here..." readonly></textarea>
    </div>

    <div class="button-section">
      <button class="case-button" data-action="copy">Copy to Clipboard</button>
      <button class="case-button success" data-action="clear">Clear Text</button>
      <button class="case-button warning" data-action="reverse">Reverse Text</button>
      <button class="case-button secondary" data-action="refresh">Refresh Styles</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Popular Aesthetic Text Examples</h2>
      <div class="example-grid">
        <div class="example-item">
          <div class="example-original">Hello World</div>
          <div class="example-aesthetic" style="font-weight: bold;">𝐇𝐞𝐥𝐥𝐨 𝐖𝐨𝐫𝐥𝐝</div>
        </div>
        <div class="example-item">
          <div class="example-original">Aesthetic</div>
          <div class="example-aesthetic" style="font-style: italic;">𝒜𝑒𝓈𝓉𝒽𝑒𝓉𝒾𝒸</div>
        </div>
        <div class="example-item">
          <div class="example-original">Social Media</div>
          <div class="example-aesthetic">𝕊𝕠𝕔𝕚𝕒𝕝 𝕄𝕖𝕕𝕚𝕒</div>
        </div>
        <div class="example-item">
          <div class="example-original">Bio Text</div>
          <div class="example-aesthetic" style="font-family: cursive;">𝓑𝓲𝓸 𝓣𝓮𝔁𝓽</div>
        </div>
        <div class="example-item">
          <div class="example-original">Instagram</div>
          <div class="example-aesthetic">🅸🅽🆂🆃🅰🅶🆁🅰🅼</div>
        </div>
        <div class="example-item">
          <div class="example-original">TikTok</div>
          <div class="example-aesthetic">ⓉⓘⓚⓉⓞⓚ</div>
        </div>
      </div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Aesthetic Text Generator - Create Beautiful Text for Social Media</h2>

    <p>Looking to make your social media profiles stand out? Our free <strong>Aesthetic Text Generator</strong> is the perfect tool for creating stylish, fancy text for Instagram, TikTok, Twitter, Facebook, and other platforms. Instantly transform your normal text into beautiful aesthetic fonts using unicode characters. No download required, no registration needed, and your text privacy is guaranteed as all processing happens right in your browser.</p>

    <h3>How to Use This Aesthetic Text Generator (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Your Text:</strong> Type or paste your text into the input box above. This could be your bio, caption, username, or any text you want to style.</li>
      <li><strong>Choose Font Style:</strong> Browse through our collection of aesthetic font styles and click on any style to see a preview instantly.</li>
      <li><strong>Copy & Use:</strong> Once you find the perfect aesthetic text style, click the "Copy to Clipboard" button and paste it directly into your social media profiles, messages, or documents.</li>
      <li><strong>Experiment:</strong> Try different font styles and combinations to create unique text that matches your personal aesthetic.</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're updating your Instagram bio and want to make it more visually appealing. Instead of using plain text, you can use our aesthetic text generator to create stylish text that captures attention. For example, transform "Coffee lover • Travel enthusiast • Photography" into "🅒🅞🅕🅕🅔🅔 🅛🅞🅥🅔🅡 • 🅣🅡🅐🅥🅔🅛 🅔🅝🅣🅗🅤🅢🅘🅐🅢🅣 • 🅟🅗🅞🅣🅞🅖🅡🅐🅟🅗🅨" with just a few clicks.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Social Media Users:</strong> Create eye-catching bios, captions, and comments for Instagram, TikTok, Twitter, Facebook, and more.</li>
      <li><strong>Content Creators:</strong> Make your content stand out with stylish text in thumbnails, descriptions, and social media posts.</li>
      <li><strong>Gamers:</strong> Create unique usernames and clan tags for gaming platforms.</li>
      <li><strong>Students & Teens:</strong> Add personality to your social media profiles and messages with cool text styles.</li>
      <li><strong>Businesses:</strong> Make your brand social media profiles more engaging and visually appealing.</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: What is aesthetic text and how does it work?</strong><br>
      A: Aesthetic text uses special unicode characters that look like stylized versions of normal letters. These characters are supported by most modern platforms and apps, allowing you to create fancy text without using images.</p>

    <p><strong>Q: Where can I use aesthetic text generated by this tool?</strong><br>
      A: You can use aesthetic text on most social media platforms (Instagram, TikTok, Twitter, Facebook), messaging apps (WhatsApp, Telegram, Discord), gaming platforms, and anywhere that supports unicode characters.</p>

    <p><strong>Q: Is there any limit to how much text I can convert?</strong><br>
      A: You can convert as much text as you want! There are no limits on the number of characters or how many times you can use the tool.</p>

    <p><strong>Q: Is my text kept private when I use this generator?</strong><br>
      A: Absolutely. Your text never leaves your computer. The conversion happens locally in your browser, meaning we never see, store, or have access to your text. It is 100% private and secure.</p>

    <p><strong>Q: Can I use this tool on my mobile phone?</strong><br>
      A: Yes, our website and tool are fully responsive and optimized to work perfectly on all devices, including smartphones and tablets.</p>

    <p><strong>Q: Do I need to create an account or pay to use this?</strong><br>
      A: No, this is a completely free tool. There is no sign-up, no subscription, and no hidden fees.</p>

    <h3>Why Choose Our Aesthetic Text Generator?</h3>
    <p>Our <strong>aesthetic text generator</strong> stands out from other tools because of its simplicity, wide variety of font styles, and privacy features. Unlike many online tools, we don't store your text on our servers - all processing happens in your browser. This means your personal messages, bios, and any text you convert remains completely private. The tool also works offline once loaded, making it reliable even with unstable internet connections.</p>

    <h3>Popular Uses of Aesthetic Text</h3>
    <p>Aesthetic text has become incredibly popular across various platforms and use cases:</p>
    <ul>
      <li><strong>Instagram Bios:</strong> Make your profile stand out with stylish bio text that reflects your personality</li>
      <li><strong>TikTok Usernames:</strong> Create unique and memorable usernames that capture attention</li>
      <li><strong>Twitter Display Names:</strong> Add flair to your Twitter profile with fancy display names</li>
      <li><strong>Discord Roles & Names:</strong> Customize your Discord server with aesthetic role names and member nicknames</li>
      <li><strong>YouTube Titles:</strong> Make your video thumbnails more engaging with stylish text</li>
      <li><strong>Gaming Tags:</strong> Create cool gamertags and clan names for various gaming platforms</li>
      <li><strong>Personal Messages:</strong> Add personality to your chats and direct messages</li>
    </ul>

    <h3>Tips for Using Aesthetic Text Effectively</h3>
    <p>While aesthetic text can make your content more visually appealing, here are some tips to use it effectively:</p>
    <ul>
      <li><strong>Don't Overdo It:</strong> Use aesthetic text sparingly for emphasis rather than converting entire paragraphs</li>
      <li><strong>Test Compatibility:</strong> Some platforms may not support all unicode characters, so test your text before publishing</li>
      <li><strong>Consider Readability:</strong> Ensure your text remains readable after conversion</li>
      <li><strong>Match Your Brand:</strong> Choose font styles that align with your personal or brand aesthetic</li>
      <li><strong>Combine Styles:</strong> Mix different font styles for creative combinations</li>
    </ul>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('textInput');
    const textOutput = document.getElementById('textOutput');
    const fontPreview = document.getElementById('fontPreview');
    const caseButtons = document.querySelectorAll('.case-button');
    const fontButtons = document.querySelectorAll('.font-style-button');
    const alertContainer = document.getElementById('alertContainer');
    
    // Font style mappings
    const fontStyles = {
      normal: {
        name: "Normal Text",
        converter: (text) => text
      },
      bold: {
        name: "Bold Text",
        converter: (text) => convertToBold(text)
      },
      italic: {
        name: "Italic Text",
        converter: (text) => convertToItalic(text)
      },
      script: {
        name: "Script Text",
        converter: (text) => convertToScript(text)
      },
      'double-struck': {
        name: "Double Struck",
        converter: (text) => convertToDoubleStruck(text)
      },
      gothic: {
        name: "Gothic Text",
        converter: (text) => convertToGothic(text)
      },
      cursive: {
        name: "Cursive Text",
        converter: (text) => convertToCursive(text)
      },
      squared: {
        name: "Squared Text",
        converter: (text) => convertToSquared(text)
      },
      circled: {
        name: "Circled Text",
        converter: (text) => convertToCircled(text)
      },
      'small-caps': {
        name: "Small Caps",
        converter: (text) => convertToSmallCaps(text)
      },
      reversed: {
        name: "Reversed Text",
        converter: (text) => convertToReversed(text)
      },
      'upside-down': {
        name: "Upside Down",
        converter: (text) => convertToUpsideDown(text)
      }
    };

    let currentFontStyle = 'normal';

    // Initialize
    updateCounts();

    // Event listeners
    textInput.addEventListener('input', function() {
      updateCounts();
      convertText();
    });

    caseButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleTextAction(action);
      });
    });

    fontButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Remove active class from all buttons
        fontButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        currentFontStyle = this.getAttribute('data-style');
        document.getElementById('fontStyle').textContent = fontStyles[currentFontStyle].name;
        convertText();
      });
    });

    function updateCounts() {
      const text = textInput.value;

      // Character count
      document.getElementById('charCount').textContent = text.length;

      // Line count
      const lineCount = text ? text.split(/\n/).length : 0;
      document.getElementById('lineCount').textContent = lineCount;

      // Text type
      const textType = text.length > 0 ? 'Styled Text' : 'Plain Text';
      document.getElementById('textType').textContent = textType;
    }

    function convertText() {
      const text = textInput.value;
      if (!text) {
        textOutput.value = '';
        fontPreview.textContent = 'Your aesthetic text will appear here...';
        return;
      }

      const converter = fontStyles[currentFontStyle].converter;
      const convertedText = converter(text);
      
      textOutput.value = convertedText;
      fontPreview.textContent = convertedText || 'Your aesthetic text will appear here...';
    }

    function handleTextAction(action) {
      switch (action) {
        case 'copy':
          copyToClipboard(textOutput.value);
          break;

        case 'clear':
          textInput.value = '';
          textOutput.value = '';
          fontPreview.textContent = 'Your aesthetic text will appear here...';
          updateCounts();
          showAlert('Text cleared successfully!', 'success');
          break;

        case 'reverse':
          const reversedText = textInput.value.split('').reverse().join('');
          textInput.value = reversedText;
          convertText();
          showAlert('Text reversed successfully!', 'success');
          break;

        case 'refresh':
          convertText();
          showAlert('Styles refreshed!', 'success');
          break;
      }
    }

    // Font conversion functions
    function convertToBold(text) {
      const boldMap = {
        'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣',
        'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭',
        'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳',
        'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉',
        'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓',
        'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙'
      };
      return convertWithMap(text, boldMap);
    }

    function convertToItalic(text) {
      const italicMap = {
        'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ', 'i': '𝑖', 'j': '𝑗',
        'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜', 'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡',
        'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦', 'z': '𝑧',
        'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺', 'H': '𝐻', 'I': '𝐼', 'J': '𝐽',
        'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂', 'P': '𝑃', 'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇',
        'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌', 'Z': '𝑍'
      };
      return convertWithMap(text, italicMap);
    }

    function convertToScript(text) {
      const scriptMap = {
        'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': '𝑒', 'f': '𝒻', 'g': '𝑔', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿',
        'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': '𝑜', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉',
        'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏',
        'A': '𝒜', 'B': '𝐵', 'C': '𝒞', 'D': '𝒟', 'E': '𝐸', 'F': '𝐹', 'G': '𝒢', 'H': '𝐻', 'I': '𝐼', 'J': '𝒥',
        'K': '𝒦', 'L': '𝐿', 'M': '𝑀', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': '𝑅', 'S': '𝒮', 'T': '𝒯',
        'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵'
      };
      return convertWithMap(text, scriptMap);
    }

    function convertToDoubleStruck(text) {
      const doubleStruckMap = {
        'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛',
        'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥',
        'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫',
        'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀', 'J': '𝕁',
        'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋',
        'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ'
      };
      return convertWithMap(text, doubleStruckMap);
    }

    function convertToGothic(text) {
      const gothicMap = {
        'a': '𝔞', 'b': '𝔟', 'c': '𝔠', 'd': '𝔡', 'e': '𝔢', 'f': '𝔣', 'g': '𝔤', 'h': '𝔥', 'i': '𝔦', 'j': '𝔧',
        'k': '𝔨', 'l': '𝔩', 'm': '𝔪', 'n': '𝔫', 'o': '𝔬', 'p': '𝔭', 'q': '𝔮', 'r': '𝔯', 's': '𝔰', 't': '𝔱',
        'u': '𝔲', 'v': '𝔳', 'w': '𝔴', 'x': '𝔵', 'y': '𝔶', 'z': '𝔷',
        'A': '𝔄', 'B': '𝔅', 'C': 'ℭ', 'D': '𝔇', 'E': '𝔈', 'F': '𝔉', 'G': '𝔊', 'H': 'ℌ', 'I': 'ℑ', 'J': '𝔍',
        'K': '𝔎', 'L': '𝔏', 'M': '𝔐', 'N': '𝔑', 'O': '𝔒', 'P': '𝔓', 'Q': '𝔔', 'R': 'ℜ', 'S': '𝔖', 'T': '𝔗',
        'U': '𝔘', 'V': '𝔙', 'W': '𝔚', 'X': '𝔛', 'Y': '𝔜', 'Z': 'ℨ'
      };
      return convertWithMap(text, gothicMap);
    }

    function convertToCursive(text) {
      const cursiveMap = {
        'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯', 'g': '𝓰', 'h': '𝓱', 'i': '𝓲', 'j': '𝓳',
        'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷', 'o': '𝓸', 'p': '𝓹', 'q': '𝓺', 'r': '𝓻', 's': '𝓼', 't': '𝓽',
        'u': '𝓾', 'v': '𝓿', 'w': '𝔀', 'x': '𝔁', 'y': '𝔂', 'z': '𝔃',
        'A': '𝓐', 'B': '𝓑', 'C': '𝓒', 'D': '𝓓', 'E': '𝓔', 'F': '𝓕', 'G': '𝓖', 'H': '𝓗', 'I': '𝓘', 'J': '𝓙',
        'K': '𝓚', 'L': '𝓛', 'M': '𝓜', 'N': '𝓝', 'O': '𝓞', 'P': '𝓟', 'Q': '𝓠', 'R': '𝓡', 'S': '𝓢', 'T': '𝓣',
        'U': '𝓤', 'V': '𝓥', 'W': '𝓦', 'X': '𝓧', 'Y': '𝓨', 'Z': '𝓩'
      };
      return convertWithMap(text, cursiveMap);
    }

    function convertToSquared(text) {
      const squaredMap = {
        'a': '🄰', 'b': '🄱', 'c': '🄲', 'd': '🄳', 'e': '🄴', 'f': '🄵', 'g': '🄶', 'h': '🄷', 'i': '🄸', 'j': '🄹',
        'k': '🄺', 'l': '🄻', 'm': '🄼', 'n': '🄽', 'o': '🄾', 'p': '🄿', 'q': '🅀', 'r': '🅁', 's': '🅂', 't': '🅃',
        'u': '🅄', 'v': '🅅', 'w': '🅆', 'x': '🅇', 'y': '🅈', 'z': '🅉',
        'A': '🄰', 'B': '🄱', 'C': '🄲', 'D': '🄳', 'E': '🄴', 'F': '🄵', 'G': '🄶', 'H': '🄷', 'I': '🄸', 'J': '🄹',
        'K': '🄺', 'L': '🄻', 'M': '🄼', 'N': '🄽', 'O': '🄾', 'P': '🄿', 'Q': '🅀', 'R': '🅁', 'S': '🅂', 'T': '🅃',
        'U': '🅄', 'V': '🅅', 'W': '🅆', 'X': '🅇', 'Y': '🅈', 'Z': '🅉'
      };
      return convertWithMap(text, squaredMap);
    }

    function convertToCircled(text) {
      const circledMap = {
        'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ',
        'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ',
        'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ',
        'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ',
        'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ',
        'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ'
      };
      return convertWithMap(text, circledMap);
    }

    function convertToSmallCaps(text) {
      const smallCapsMap = {
        'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ғ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ',
        'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ', 's': 's', 't': 'ᴛ',
        'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ'
      };
      return convertWithMap(text.toLowerCase(), smallCapsMap);
    }

    function convertToReversed(text) {
      return text.split('').reverse().join('');
    }

    function convertToUpsideDown(text) {
      const upsideDownMap = {
        'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ',
        'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ',
        'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
        'A': '∀', 'B': '𐐒', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': 'פ', 'H': 'H', 'I': 'I', 'J': 'ſ',
        'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ', 'Q': 'Ό', 'R': 'ᴚ', 'S': 'S', 'T': '┴',
        'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z',
        '0': '0', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6',
        '.': '˙', ',': "'", "'": ',', '"': ',,', '`': ',', '?': '¿', '!': '¡', '[': ']', ']': '[', '(': ')', ')': '(',
        '{': '}', '}': '{', '<': '>', '>': '<', '&': '⅋', '_': '‾'
      };
      return convertWithMap(text, upsideDownMap);
    }

    function convertWithMap(text, map) {
      return text.split('').map(char => map[char] || char).join('');
    }

    function copyToClipboard(text) {
      if (!text) {
        showAlert('Please generate some text first!', 'error');
        return;
      }
      
      navigator.clipboard.writeText(text).then(() => {
        showAlert('Aesthetic text copied to clipboard!', 'success');
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
  });
</script>