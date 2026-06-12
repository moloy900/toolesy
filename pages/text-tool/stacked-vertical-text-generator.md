---
layout: default
title: "Vertical Text Generator – Create Stacked Text Online Free"
permalink: /stacked-vertical-text-generator-online-vertical-text-creator/
---

<!-- ✅ Basic Meta Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Vertical Text Generator – Create Stacked Text Online Free</title>
<meta name="description" content="Free vertical text generator to convert horizontal text into stacked or vertical format instantly. Ideal for social media posts, banners, and creative design projects.">
<meta name="keywords" content="vertical text generator, stacked text, upright text, vertical letter spacing, text rotator vertical, creative text tool, vertical writing generator, social media text generator, text design tool">
<meta name="robots" content="index, follow">
<meta name="author" content="paramdip nath">

<!-- ✅ Open Graph Tags -->
<meta property="og:title" content="Vertical Text Generator - Free Online Text Tool">
<meta property="og:description" content="Convert horizontal text to vertical stacked format in one click. No installation needed. 100% Free.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://toolesy.com/stacked-vertical-text-generator-online-vertical-text-creator">

<!-- ✅ Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free Vertical Text Generator - Create Stacked Text Online">
<meta name="twitter:description" content="Transform normal text into vertical & upright designs instantly. Works on any device!">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Stacked Text Generator Styles */
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

  /* Stacked Text specific styles */
  .stacked-options {
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

  /* Preview section */
  .preview-section {
    margin: 20px 0;
    padding: 20px;
    background: white;
    border-radius: 10px;
    border: 2px dashed #e0e6ed;
  }

  .preview-title {
    color: var(--primary);
    margin-bottom: 15px;
    font-size: 1.2rem;
  }

  .preview-container {
    min-height: 100px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    font-family: 'Courier New', monospace;
    text-align: center;
    overflow-x: auto;
  }

  .vertical-text {
    display: inline-block;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    line-height: 1.2;
    padding: 10px;
  }

  .stacked-text {
    font-family: 'Courier New', monospace;
    line-height: 1;
    letter-spacing: 0;
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

    .stacked-options {
      grid-template-columns: 1fr;
    }

    .vertical-text {
      writing-mode: horizontal-tb;
      text-orientation: mixed;
    }
  }
</style>

<div class="converter-container">
  <h1>Free Online Stacked & Vertical Text Generator</h1>
  <p class="welcome-message">Convert your horizontal text to vertical or stacked format instantly. Perfect for social media bios, creative designs, presentations, and artistic projects.</p>

  <div class="converter-section">
    <h2>Stacked & Vertical Text Generator</h2>

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
        <span>Max Line Length: </span>
        <span id="maxLineLength">0</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Input Text <i class="fas fa-upload upload-icon" id="uploadIcon">Upload</i></h2>
      <textarea id="textInput" rows="6" placeholder="Type or paste your text here to convert to vertical format..."></textarea>
    </div>

    <!-- Hidden file input -->
    <input type="file" id="fileUpload" accept=".txt,.doc,.docx" style="display: none;">

    <div class="stacked-options">
      <div class="option-group">
        <label class="option-label">Text Style</label>
        <select id="textStyle" class="option-select">
          <option value="vertical">Vertical Text</option>
          <option value="stacked">Stacked Text</option>
          <option value="reverse">Reverse Vertical</option>
          <option value="upside-down">Upside Down</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Separator</label>
        <select id="separatorType" class="option-select">
          <option value="space">Space</option>
          <option value="newline">New Line</option>
          <option value="none">No Separator</option>
          <option value="dot">Dot</option>
          <option value="dash">Dash</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Character Spacing</label>
        <select id="spacingType" class="option-select">
          <option value="normal">Normal</option>
          <option value="wide">Wide</option>
          <option value="compact">Compact</option>
        </select>
      </div>
      
      <div class="option-group">
        <div class="option-checkbox">
          <input type="checkbox" id="preserveSpaces" checked>
          <label for="preserveSpaces">Preserve Spaces</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="includePunctuation" checked>
          <label for="includePunctuation">Include Punctuation</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="autoUpdate" checked>
          <label for="autoUpdate">Auto Update</label>
        </div>
      </div>
    </div>

    <div class="preview-section">
      <h3 class="preview-title">Live Preview</h3>
      <div class="preview-container">
        <div id="textPreview" class="vertical-text">Your vertical text will appear here...</div>
      </div>
    </div>

    <div class="options-section">
      <div class="button-section">
        <button class="case-button" data-action="generate">Generate Vertical Text</button>
        <button class="case-button" data-action="reverse">Reverse Direction</button>
        <button class="case-button" data-action="copy">Copy to Clipboard</button>
        <button class="case-button success" data-action="download">Download Text</button>
        <button class="case-button warning" data-action="compare">Compare</button>
        <button class="case-button secondary" data-action="clear">Clear</button>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>

   {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <h3>Original Text:</h3>
      <div class="example-text">Hello World!
This is stacked text.
Vertical formatting looks amazing!</div>

      <h3>Vertical Text:</h3>
      <div class="example-text">H
e
l
l
o
 
W
o
r
l
d
!

T
h
i
s
 
i
s
 
s
t
a
c
k
e
d
 
t
e
x
t
.


V
e
r
t
i
c
a
l
 
f
o
r
m
a
t
t
i
n
g
 
l
o
o
k
s
 
a
m
a
z
i
n
g
!</div>

      <h3>Stacked Text:</h3>
      <div class="example-text">H e l l o   W o r l d ! 
T h i s   i s   s t a c k e d   t e x t . 
V e r t i c a l   f o r m a t t i n g   l o o k s   a m a z i n g !</div>
    </div>
  </div>

 <!-- SEO Content Section -->
<div class="content-placeholder">

    <h2>Free Online Stacked & Vertical Text Generator Tool</h2>

    <p>
        Want to make your text stand out from the crowd? Our <strong>Stacked & Vertical Text Generator</strong> helps
        you transform ordinary horizontal text into visually appealing vertical and stacked text layouts in just a few
        seconds. Whether you're creating a unique social media bio, designing a poster, building marketing materials,
        preparing presentation slides, or simply experimenting with creative typography, this tool makes the process
        fast and effortless.
    </p>

    <p>
        In today's digital world, grabbing attention is more difficult than ever. Millions of posts, advertisements,
        and messages compete for visibility every day. Creative text formatting is one of the simplest ways to make
        your content more noticeable. Vertical and stacked text naturally attracts the eye because it breaks away from
        traditional horizontal layouts that people see constantly.
    </p>

    <p>
        Instead of manually placing each letter on a separate line or spending time adjusting text inside graphic design
        software, you can instantly convert your words into a clean vertical format with a single click. The tool is
        easy to use, works directly inside your browser, and requires no installation or registration.
    </p>

    <p>
        Whether you're a social media creator, graphic designer, marketer, educator, student, or business owner, this
        vertical text generator can help you create professional-looking text layouts quickly and efficiently.
    </p>

    <h3>How to Use This Vertical Text Generator (Step-by-Step)</h3>

    <ul>
        <li>
            <strong>Enter Your Text:</strong>
            Type directly into the text box or paste content from another document, website, email, or social media
            platform.
        </li>

        <li>
            <strong>Select a Text Style:</strong>
            Choose between vertical text, stacked text, reverse vertical text, spaced layouts, or other available
            formatting options.
        </li>

        <li>
            <strong>Customize Formatting:</strong>
            Adjust spacing, separators, alignment, and character arrangement to achieve your preferred look.
        </li>

        <li>
            <strong>Generate Your Output:</strong>
            Click the generate button and instantly view the transformed version of your text.
        </li>

        <li>
            <strong>Copy and Use Anywhere:</strong>
            Copy the generated text and paste it into social media profiles, design software, documents, presentations,
            or websites.
        </li>
    </ul>

    <h3>What Is Vertical Text?</h3>

    <p>
        Vertical text is a text format where characters are displayed from top to bottom instead of left to right.
        Rather than appearing in a standard horizontal line, each letter is placed beneath the previous one, creating a
        vertical reading experience.
    </p>

    <p>
        For example, the word:
    </p>

    <pre>
HELLO
    </pre>

    <p>
        can become:
    </p>

    <pre>
H
E
L
L
O
    </pre>

    <p>
        This style is commonly used in graphic design, advertising, social media profiles, posters, signage, and
        artistic typography projects because it immediately attracts attention and creates visual interest.
    </p>

    <h3>What Is Stacked Text?</h3>

    <p>
        Stacked text is similar to vertical text, but it focuses on placing letters, words, or phrases on separate
        lines to create a structured visual effect. Unlike traditional vertical writing systems used in some languages,
        stacked text is often used for decorative and creative purposes.
    </p>

    <p>
        Designers frequently use stacked text when creating logos, posters, banners, and social media graphics because
        it allows important words to occupy less horizontal space while creating a bold visual appearance.
    </p>

    <p>
        Stacked text can also improve emphasis by isolating individual letters or words, making them more memorable to
        readers.
    </p>

    <h3>Real-Life Example & Use Case</h3>

    <p>
        Imagine you're updating your Instagram profile and want your bio to look different from everyone else's.
        Instead of displaying your profession in a standard horizontal format, you can convert it into stacked text.
    </p>

    <p>
        A regular bio might look like:
    </p>

    <pre>
Creative Designer
    </pre>

    <p>
        After using the vertical text generator, it could appear as:
    </p>

    <pre>
C
R
E
A
T
I
V
E

D
E
S
I
G
N
E
R
    </pre>

    <p>
        This simple transformation makes the profile more distinctive and helps attract attention from visitors who are
        scrolling quickly through social media content.
    </p>

    <h3>Benefits & Who Should Use This Tool?</h3>

    <ul>
        <li>
            <strong>Social Media Managers:</strong>
            Create unique bios, captions, and profile descriptions that stand out from competitors.
        </li>

        <li>
            <strong>Graphic Designers:</strong>
            Generate creative typography layouts for posters, banners, advertisements, and branding projects.
        </li>

        <li>
            <strong>Content Creators:</strong>
            Add visual interest to digital content, videos, graphics, and social media campaigns.
        </li>

        <li>
            <strong>Teachers & Educators:</strong>
            Create visually engaging educational materials and classroom presentations.
        </li>

        <li>
            <strong>Marketing Professionals:</strong>
            Design eye-catching promotional materials and advertising campaigns.
        </li>

        <li>
            <strong>Students:</strong>
            Enhance school projects, presentations, and creative assignments.
        </li>

        <li>
            <strong>Business Owners:</strong>
            Improve branding materials and promotional content with distinctive typography.
        </li>
    </ul>

    <h3>Frequently Asked Questions</h3>

    <p>
        <strong>What is the difference between vertical text and stacked text?</strong><br>
        Vertical text displays characters in a top-to-bottom arrangement, while stacked text may arrange letters,
        words, or phrases across multiple lines for stylistic purposes. Both formats create a visually distinctive
        appearance.
    </p>

    <p>
        <strong>Can I use the generated text on social media?</strong><br>
        Yes. Most social media platforms support stacked text formatting. However, display behavior may vary slightly
        depending on the platform and device being used.
    </p>

    <p>
        <strong>Is my text secure?</strong><br>
        Absolutely. The text conversion process happens directly inside your browser. Your content is never uploaded,
        stored, or shared with external servers.
    </p>

    <p>
        <strong>Can I use this tool on mobile devices?</strong><br>
        Yes. The generator is fully responsive and works on smartphones, tablets, laptops, and desktop computers.
    </p>

    <p>
        <strong>Is there a character limit?</strong><br>
        Most browsers can process large amounts of text efficiently, although shorter text usually produces the most
        visually appealing vertical layouts.
    </p>

    <p>
        <strong>Do I need to register or pay?</strong><br>
        No. The tool is completely free to use and does not require an account.
    </p>

    <h3>Why Choose Our Stacked & Vertical Text Generator?</h3>

    <p>
        There are many text formatting tools available online, but our vertical text generator focuses on simplicity,
        speed, flexibility, and privacy. You don't need graphic design software or technical skills to create
        professional-looking vertical text.
    </p>

    <p>
        Everything works instantly within your browser, making the tool accessible from virtually any device. The
        intuitive interface allows beginners to generate creative text effects within seconds, while advanced
        customization options provide flexibility for experienced designers and marketers.
    </p>

    <p>
        Because all processing occurs locally, your content remains private and secure throughout the entire process.
    </p>

    <h3>Creative Applications of Vertical Text</h3>

    <p>
        Vertical and stacked text can be used in many creative and professional situations:
    </p>

    <ul>
        <li>
            <strong>Social Media Enhancement:</strong>
            Create memorable profile bios and attention-grabbing captions.
        </li>

        <li>
            <strong>Graphic Design:</strong>
            Build posters, flyers, banners, and promotional graphics.
        </li>

        <li>
            <strong>Website Design:</strong>
            Add creative typography elements to landing pages and digital experiences.
        </li>

        <li>
            <strong>Presentation Design:</strong>
            Improve slide layouts with unique text arrangements.
        </li>

        <li>
            <strong>Art Projects:</strong>
            Experiment with typography-based artwork and creative compositions.
        </li>

        <li>
            <strong>Brand Development:</strong>
            Explore distinctive visual styles for logos and brand identities.
        </li>

        <li>
            <strong>Event Promotions:</strong>
            Design invitations, posters, and announcements with enhanced visual appeal.
        </li>
    </ul>

    <h3>Advantages of Using Vertical Text</h3>

    <p>
        Vertical text naturally captures attention because it differs from conventional reading patterns. When used
        correctly, it can improve visual hierarchy and draw focus to important information.
    </p>

    <p>
        Designers often use vertical layouts to save horizontal space while maintaining strong visual impact. This
        makes vertical text particularly useful for posters, banners, mobile designs, and social media profiles where
        space may be limited.
    </p>

    <p>
        In branding and advertising, vertical text can create a memorable impression that helps content stand out from
        competitors using standard typography.
    </p>

    <h3>Tips for Using Vertical Text Effectively</h3>

    <ul>
        <li>
            <strong>Keep Text Short:</strong>
            Vertical layouts are most effective when used for short words, titles, and key phrases.
        </li>

        <li>
            <strong>Prioritize Readability:</strong>
            Ensure the text remains easy to understand across different devices and screen sizes.
        </li>

        <li>
            <strong>Use as an Accent:</strong>
            Vertical text works best when highlighting specific elements rather than replacing entire paragraphs.
        </li>

        <li>
            <strong>Test Multiple Layouts:</strong>
            Experiment with spacing and formatting to find the most attractive arrangement.
        </li>

        <li>
            <strong>Match Your Brand Style:</strong>
            Use vertical text in ways that complement your overall visual identity.
        </li>
    </ul>

    <h3>Platform-Specific Tips</h3>

    <p>
        Different platforms display stacked text slightly differently. Understanding these differences can help you
        achieve better results.
    </p>

    <ul>
        <li>
            <strong>Instagram:</strong>
            Excellent for bios, story graphics, and highlight covers.
        </li>

        <li>
            <strong>Facebook:</strong>
            Useful for page descriptions, promotional posts, and event announcements.
        </li>

        <li>
            <strong>Twitter/X:</strong>
            Can help profile information and special posts stand out.
        </li>

        <li>
            <strong>TikTok:</strong>
            Effective for profile bios and creative video captions.
        </li>

        <li>
            <strong>LinkedIn:</strong>
            Best used sparingly to maintain a professional appearance while adding visual distinction.
        </li>
    </ul>

    <h3>Conclusion</h3>

    <p>
        The Free Online Stacked & Vertical Text Generator is an easy and powerful way to transform ordinary text into
        visually engaging layouts. Whether you're creating social media content, graphic designs, marketing materials,
        presentations, or branding assets, vertical text can help your message stand out.
    </p>

    <p>
        With instant processing, flexible customization options, strong privacy protection, and support for all modern
        devices, this tool provides everything you need to create attractive vertical and stacked text in seconds. Try
        it today and discover how creative typography can elevate your content and make a lasting impression.
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
      <p>Select a text file (.txt, .doc, .docx) to upload its content to the text area.</p>
      <input type="file" id="modalFileUpload" accept=".txt,.doc,.docx">
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
          <h4>Vertical Text</h4>
          <textarea id="verticalText" rows="10" style="width: 100%; font-family: monospace;" readonly></textarea>
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
    const caseButtons = document.querySelectorAll('.case-button');
    const alertContainer = document.getElementById('alertContainer');
    const fileUpload = document.getElementById('fileUpload');
    const uploadIcon = document.getElementById('uploadIcon');
    const textPreview = document.getElementById('textPreview');
    
    // Stacked text options
    const textStyle = document.getElementById('textStyle');
    const separatorType = document.getElementById('separatorType');
    const spacingType = document.getElementById('spacingType');
    const preserveSpaces = document.getElementById('preserveSpaces');
    const includePunctuation = document.getElementById('includePunctuation');
    const autoUpdate = document.getElementById('autoUpdate');
    
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
    const verticalText = document.getElementById('verticalText');
    

    // Store original text for comparison
    let originalTextContent = '';

    // Initialize counters and preview
    updateCounts();
    updatePreview();

    // Event listeners
    textInput.addEventListener('input', function() {
      updateCounts();
      if (autoUpdate.checked) {
        updatePreview();
      }
    });

    // Update preview when options change
    textStyle.addEventListener('change', updatePreview);
    separatorType.addEventListener('change', updatePreview);
    spacingType.addEventListener('change', updatePreview);
    preserveSpaces.addEventListener('change', updatePreview);
    includePunctuation.addEventListener('change', updatePreview);

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
      if (file.type === 'text/plain' || 
          file.name.endsWith('.txt') || 
          file.name.endsWith('.doc') || 
          file.name.endsWith('.docx')) {
        const reader = new FileReader();
        reader.onload = function (e) {
          textInput.value = e.target.result;
          updateCounts();
          updatePreview();
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
        showAlert('Unsupported file format. Please upload a text file (TXT, DOC, DOCX).', 'error');
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

      // Max line length
      const lines = text.split('\n');
      const maxLength = Math.max(...lines.map(line => line.length));
      document.getElementById('maxLineLength').textContent = maxLength;
    }

    function updatePreview() {
      const text = textInput.value || 'Your vertical text will appear here...';
      const convertedText = convertToVertical(text);
      textPreview.textContent = convertedText;
      
      // Update CSS classes based on text style
      textPreview.className = textStyle.value === 'vertical' ? 'vertical-text' : 'stacked-text';
    }

    function handleTextAction(action) {
      const text = textInput.value;
      
      // Store original text for comparison
      if (action === 'generate' || action === 'reverse') {
        originalTextContent = text;
      }

      switch (action) {
        case 'generate':
          updatePreview();
          showAlert('Vertical text generated successfully!', 'success');
          break;

        case 'reverse':
          // Toggle text style between vertical and reverse
          if (textStyle.value === 'vertical') {
            textStyle.value = 'reverse';
          } else if (textStyle.value === 'reverse') {
            textStyle.value = 'vertical';
          }
          updatePreview();
          showAlert('Text direction reversed!', 'success');
          break;

        case 'copy':
          copyToClipboard(textPreview.textContent);
          break;

        case 'download':
          downloadText('vertical_text.txt', textPreview.textContent);
          break;

        case 'compare':
          if (!originalTextContent) {
            showAlert('Please generate vertical text first to compare.', 'error');
            return;
          }
          originalText.value = originalTextContent;
          verticalText.value = textPreview.textContent;
          compareModal.style.display = 'block';
          break;

        case 'clear':
          textInput.value = '';
          originalTextContent = '';
          updateCounts();
          updatePreview();
          break;
      }

      updateCounts();
    }

    // Convert text to vertical format
    function convertToVertical(text) {
      if (!text || text === 'Your vertical text will appear here...') {
        return 'Your vertical text will appear here...';
      }

      let result = '';
      const separator = getSeparator();
      
      switch (textStyle.value) {
        case 'vertical':
          result = convertToTrueVertical(text, separator);
          break;
        case 'stacked':
          result = convertToStacked(text, separator);
          break;
        case 'reverse':
          result = convertToReverseVertical(text, separator);
          break;
        case 'upside-down':
          result = convertToUpsideDown(text, separator);
          break;
      }
      
      return result;
    }
    
    // Convert to true vertical text (character by character)
    function convertToTrueVertical(text, separator) {
      let result = '';
      
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        
        // Handle spaces based on preserveSpaces setting
        if (char === ' ' && !preserveSpaces.checked) {
          continue;
        }
        
        // Handle punctuation based on includePunctuation setting
        if (!includePunctuation.checked && isPunctuation(char)) {
          continue;
        }
        
        result += char + separator;
        
        // Add extra spacing for wide option
        if (spacingType.value === 'wide') {
          result += separator;
        }
      }
      
      return result.trim();
    }
    
    // Convert to stacked text (each character on new line)
    function convertToStacked(text, separator) {
      const lines = text.split('\n');
      let result = '';
      
      for (let line of lines) {
        let stackedLine = '';
        
        for (let i = 0; i < line.length; i++) {
          const char = line[i];
          
          // Handle spaces based on preserveSpaces setting
          if (char === ' ' && !preserveSpaces.checked) {
            stackedLine += ' ';
            continue;
          }
          
          // Handle punctuation based on includePunctuation setting
          if (!includePunctuation.checked && isPunctuation(char)) {
            continue;
          }
          
          stackedLine += char;
          
          // Add spacing between characters
          if (i < line.length - 1) {
            if (spacingType.value === 'wide') {
              stackedLine += '  ';
            } else if (spacingType.value === 'normal') {
              stackedLine += ' ';
            }
            // Compact spacing adds no extra space
          }
        }
        
        result += stackedLine + '\n';
      }
      
      return result.trim();
    }
    
    // Convert to reverse vertical text
    function convertToReverseVertical(text, separator) {
      const verticalText = convertToTrueVertical(text, separator);
      const lines = verticalText.split('\n');
      return lines.reverse().join('\n');
    }
    
    // Convert to upside down text
    function convertToUpsideDown(text, separator) {
      const upsideDownMap = {
        'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ',
        'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd',
        'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x',
        'y': 'ʎ', 'z': 'z', 'A': '∀', 'B': '𐐒', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'Ⅎ',
        'G': 'פ', 'H': 'H', 'I': 'I', 'J': 'ſ', 'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N',
        'O': 'O', 'P': 'Ԁ', 'Q': 'Ό', 'R': 'ᴚ', 'S': 'S', 'T': '⊥', 'U': '∩', 'V': 'Λ',
        'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z', '0': '0', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ',
        '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6', ',': "'", '.': '˙',
        '?': '¿', '!': '¡', '"': '„', "'": ',', '`': ',', '(': ')', ')': '(', '[': ']',
        ']': '[', '{': '}', '}': '{', '<': '>', '>': '<', '&': '⅋', '_': '‾'
      };
      
      let upsideDown = '';
      for (let i = text.length - 1; i >= 0; i--) {
        const char = text[i];
        upsideDown += upsideDownMap[char] || char;
      }
      
      return convertToTrueVertical(upsideDown, separator);
    }
    
    // Get the appropriate separator character
    function getSeparator() {
      switch (separatorType.value) {
        case 'space': return ' ';
        case 'newline': return '\n';
        case 'dot': return '·';
        case 'dash': return '-';
        case 'none': return '';
        default: return '\n';
      }
    }
    
    // Check if character is punctuation
    function isPunctuation(char) {
      return /[.,\/#!$%\^&\*;:{}=\-_`~()?'"]/.test(char);
    }

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showAlert('Vertical text copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy text: ' + err, 'error');
      });
    }

    function downloadText(filename, text) {
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      showAlert('Vertical text downloaded successfully!', 'success');
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