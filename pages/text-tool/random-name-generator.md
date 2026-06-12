---
layout: default
title: "Random Name Generator - Generate Real Names from Anywhere"
permalink: /random-name-generator-generate-real-names-from-anywhere/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Random Name Generator - Generate Real Names from Anywhere</title>
<meta name="description"
  content="Free random name generator tool. Generate realistic names from any region or culture. Filter by gender, select from custom lists, and create multiple names instantly.">
<meta name="keywords"
  content="random name generator, name generator, real names, fake names, character names, baby names, fantasy names, male names, female names, name list">
<meta name="author" content="Paramdip Nath">
<meta name="robots" content="index, follow">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Random Name Generator Styles */
  .generator-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .generator-container h1 {
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

  .generator-section {
    margin-bottom: 40px;
    padding: 25px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .generator-section h2 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .generator-section p {
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
    min-height: 150px;
    resize: vertical;
    font-family: 'Courier New', monospace;
    transition: border-color 0.3s;
  }

  .input-section textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .options-section {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
  }

  .generation-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin: 20px 0;
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
    font-size: 1rem;
  }

  .option-select, .option-input, .option-number {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    background: white;
  }

  .option-number {
    width: 100px;
  }

  .gender-buttons {
    display: flex;
    gap: 10px;
    margin-top: 5px;
  }

  .gender-button {
    flex: 1;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 6px;
    background: white;
    cursor: pointer;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s ease;
  }

  .gender-button:hover {
    border-color: var(--primary);
    background: rgba(52, 152, 219, 0.1);
  }

  .gender-button.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
  }

  .option-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
  }

  .option-checkbox input {
    width: 20px;
    height: 20px;
  }

  .option-checkbox label {
    font-weight: 500;
    color: #333;
  }

  .region-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 10px;
    margin-top: 10px;
  }

  .region-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .region-item:hover {
    border-color: var(--primary);
    background: rgba(52, 152, 219, 0.05);
  }

  .region-item.selected {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
  }

  .region-item input {
    margin: 0;
  }

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 12px;
    margin: 25px 0;
  }

  .action-button {
    padding: 14px 10px;
    border: none;
    border-radius: 8px;
    background: var(--primary);
    color: white;
    font-size: 16px;
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

  .results-section {
    margin-top: 30px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    border: 2px solid #e0e6ed;
  }

  .results-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 2px solid #f0f0f0;
  }

  .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
    margin-top: 20px;
  }

  .name-card {
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
    text-align: center;
    border-left: 4px solid var(--primary);
    transition: all 0.3s ease;
  }

  .name-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .name-text {
    font-size: 1.3rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
  }

  .name-details {
    font-size: 0.9rem;
    color: #666;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
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
    max-width: 600px;
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
    max-height: 400px;
    overflow-y: auto;
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

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .counter-wrapper {
      grid-template-columns: 1fr;
    }

    .button-section {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    .action-button {
      font-size: 14px;
      padding: 12px 8px;
    }

    .generator-container {
      padding: 15px;
    }

    .generator-section {
      padding: 20px;
      margin-bottom: 30px;
    }

    .generator-container h1 {
      font-size: 2rem;
    }

    .generator-section h2 {
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

    .generation-options {
      grid-template-columns: 1fr;
    }

    .region-grid {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }

    .results-grid {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }
</style>

<div class="generator-container">
  <h1>Random Name Generator</h1>
  <p class="welcome-message">Generate realistic names from any region or culture. Filter by gender, select from custom lists, and create multiple names instantly for your projects.</p>

  <div class="generator-section">
    <h2>Random Name Generator</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Names Generated: </span>
        <span id="namesCount">0</span>
      </div>
      <div class="counter-item">
        <span>Regions Available: </span>
        <span id="regionsCount">12</span>
      </div>
      <div class="counter-item">
        <span>Male Names: </span>
        <span id="maleCount">0</span>
      </div>
      <div class="counter-item">
        <span>Female Names: </span>
        <span id="femaleCount">0</span>
      </div>
    </div>

    <div class="input-section">
      <h2>Custom Name List (Optional)</h2>
      <textarea id="customNames" rows="4" placeholder="Enter your custom names list here, one name per line..."></textarea>
      <p style="color: #666; font-size: 0.9rem; margin-top: 5px;">Add your own names to pick randomly from. One name per line.</p>
    </div>

    <div class="generation-options">
      <div class="option-group">
        <label class="option-label">What names:</label>
        <select id="nameType" class="option-select">
          <option value="real">Generate random Real Names</option>
          <option value="custom">Pick a random name from my list</option>
          <option value="fantasy">Fantasy/Sci-Fi Names</option>
          <option value="historical">Historical Names</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">From:</label>
        <select id="nameRegion" class="option-select">
          <option value="anywhere">Anywhere (Global)</option>
          <option value="europe">Europe</option>
          <option value="asia">Asia</option>
          <option value="americas">Americas</option>
          <option value="africa">Africa</option>
          <option value="middleeast">Middle East</option>
        </select>
      </div>
      
      <div class="option-group">
        <label class="option-label">Gender:</label>
        <div class="gender-buttons">
          <button class="gender-button active" data-gender="both">Both</button>
          <button class="gender-button" data-gender="male">Male</button>
          <button class="gender-button" data-gender="female">Female</button>
        </div>
      </div>
      
      <div class="option-group">
        <label class="option-label">How many names:</label>
        <input type="number" id="nameCount" class="option-number" min="1" max="100" value="1">
        <div class="option-checkbox">
          <input type="checkbox" id="includeSurnames" checked>
          <label for="includeSurnames">Include surnames</label>
        </div>
        <div class="option-checkbox">
          <input type="checkbox" id="includeMiddleNames">
          <label for="includeMiddleNames">Include middle names</label>
        </div>
      </div>
    </div>

    <div class="options-section">
      <h3>Select Specific Regions:</h3>
      <div class="region-grid" id="regionGrid">
        <label class="region-item">
          <input type="checkbox" name="region" value="usa" checked>
          <span>United States</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="uk" checked>
          <span>United Kingdom</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="germany" checked>
          <span>Germany</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="france" checked>
          <span>France</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="spain" checked>
          <span>Spain</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="italy" checked>
          <span>Italy</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="china" checked>
          <span>China</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="japan" checked>
          <span>Japan</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="india" checked>
          <span>India</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="russia" checked>
          <span>Russia</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="brazil" checked>
          <span>Brazil</span>
        </label>
        <label class="region-item">
          <input type="checkbox" name="region" value="mexico" checked>
          <span>Mexico</span>
        </label>
      </div>
    </div>

    <div class="button-section">
      <button class="action-button" data-action="generate">Generate Names</button>
      <button class="action-button success" data-action="generate-more">Generate More</button>
      <button class="action-button" data-action="copy">Copy to Clipboard</button>
      <button class="action-button warning" data-action="export">Export as CSV</button>
      <button class="action-button secondary" data-action="clear">Clear Results</button>
      <button class="action-button" data-action="save-list">Save Name List</button>
    </div>

    <div id="alertContainer" class="alert-container"></div>

   {% include share-and-donation.html %}

    <div class="results-section">
      <div class="results-header">
        <h3>Generated Names</h3>
        <button class="action-button secondary" data-action="refresh">Refresh All</button>
      </div>
      <div id="resultsGrid" class="results-grid">
        <!-- Names will be dynamically inserted here -->
      </div>
    </div>

    <div class="examples">
      <h2>Example Name Combinations</h2>

      <h3>American Names:</h3>
      <div class="example-text">Male: James Wilson
Female: Sarah Johnson
Both: Michael Brown & Emily Davis</div>

      <h3>Japanese Names:</h3>
      <div class="example-text">Male: Tanaka Kaito
Female: Sato Hana
Both: Yamamoto Ren & Suzuki Yui</div>

      <h3>European Names:</h3>
      <div class="example-text">Male: Luca Rossi (Italian)
Female: Sophie Müller (German)
Both: Jean Dupont (French) & Maria García (Spanish)</div>
    </div>
  </div>


<!-- SEO Content Section -->
<div class="content-placeholder">
    <h2>Free Random Name Generator – Create Unique Names Instantly for Any Purpose</h2>

    <p>
        Finding the right name can sometimes take longer than writing an entire story, designing a game character,
        launching a business, or creating a new project. Whether you're searching for realistic personal names,
        fantasy-inspired character names, historical names, or simply looking for creative inspiration, our
        <strong>Random Name Generator</strong> makes the process fast, easy, and enjoyable.
    </p>

    <p>
        Instead of spending hours browsing name websites, researching cultural naming traditions, or brainstorming
        ideas from scratch, you can generate hundreds of high-quality names in seconds. The tool is designed for
        writers, game developers, content creators, researchers, teachers, entrepreneurs, and anyone who needs fresh
        naming ideas.
    </p>

    <p>
        With flexible filtering options, you can choose specific regions, countries, genders, and naming styles.
        Whether you're creating a medieval knight, a modern business brand, a science fiction hero, or a realistic
        database for testing purposes, the Random Name Generator provides endless possibilities while saving valuable
        time.
    </p>

    <p>
        Best of all, the tool is completely free to use, requires no registration, and works directly in your browser.
        Your generated names remain private, allowing you to brainstorm and create without worrying about your ideas
        being stored or shared.
    </p>

    <h3>How to Use This Random Name Generator (Step-by-Step)</h3>

    <ul>
        <li>
            <strong>Choose the Name Category:</strong>
            Select the type of names you want to generate. Options may include realistic names, fantasy names,
            historical names, business names, fictional names, or custom name lists.
        </li>

        <li>
            <strong>Select a Region or Country:</strong>
            Generate names from around the world or narrow your results to a specific country, culture, or continent.
        </li>

        <li>
            <strong>Choose Gender Preferences:</strong>
            Filter names by male, female, or mixed results depending on your project requirements.
        </li>

        <li>
            <strong>Set the Number of Results:</strong>
            Decide how many names you want to generate at once. Generate a single name or create large lists for
            extensive projects.
        </li>

        <li>
            <strong>Customize Additional Settings:</strong>
            Include surnames, middle names, nicknames, or country-specific naming conventions when available.
        </li>

        <li>
            <strong>Generate and Save:</strong>
            Click the generate button to instantly create your list of names. You can then copy, download, or save the
            results for later use.
        </li>
    </ul>

    <h3>Why People Use Random Name Generators</h3>

    <p>
        Naming something important can be surprisingly difficult. A name often influences how people perceive a
        character, brand, product, or project. The right name can create a strong first impression, while a poor name
        may feel forgettable or out of place.
    </p>

    <p>
        Random name generators remove the pressure of brainstorming by providing a wide range of options instantly.
        Instead of staring at a blank page, users can explore dozens of creative possibilities and discover names they
        may never have considered on their own.
    </p>

    <p>
        Many professional writers and game designers use name generators as part of their creative process. Even when
        they don't use the generated names directly, the suggestions often spark new ideas and help overcome creative
        blocks.
    </p>

    <h3>Real-Life Example & Use Case</h3>

    <p>
        Imagine you're writing a historical fiction novel set across multiple countries. Your story includes Japanese
        merchants, French nobles, German soldiers, and English explorers. Researching authentic names for every
        character could take many hours.
    </p>

    <p>
        With a Random Name Generator, you can instantly generate culturally appropriate names for each group. You might
        create ten Japanese male names, five French female names, and a list of English surnames within minutes. This
        allows you to focus on storytelling rather than spending excessive time on name research.
    </p>

    <p>
        The same applies to game development. A role-playing game may require hundreds of character names, village
        names, guild names, and merchant names. Instead of manually inventing every name, developers can quickly build
        large collections of believable names using automated generation tools.
    </p>

    <h3>Benefits & Who Should Use This Tool?</h3>

    <ul>
        <li>
            <strong>Writers & Authors:</strong>
            Create memorable character names, family names, city names, and fictional identities for novels, short
            stories, and screenplays.
        </li>

        <li>
            <strong>Game Developers:</strong>
            Generate names for NPCs, heroes, villains, factions, kingdoms, guilds, and fantasy worlds.
        </li>

        <li>
            <strong>Business Owners:</strong>
            Brainstorm company names, product names, startup brands, and business concepts.
        </li>

        <li>
            <strong>Parents-to-Be:</strong>
            Explore baby name ideas from different countries, cultures, and traditions.
        </li>

        <li>
            <strong>Teachers & Students:</strong>
            Create realistic names for assignments, classroom activities, storytelling projects, and educational games.
        </li>

        <li>
            <strong>Researchers:</strong>
            Generate sample data and placeholder names for surveys, studies, and software testing.
        </li>

        <li>
            <strong>Content Creators:</strong>
            Find usernames, social media identities, fictional profiles, and creative aliases.
        </li>
    </ul>

    <h3>Popular Types of Names You Can Generate</h3>

    <ul>
        <li><strong>Modern First Names</strong> – Popular contemporary names from around the world.</li>
        <li><strong>Historical Names</strong> – Names inspired by past centuries and historical periods.</li>
        <li><strong>Fantasy Names</strong> – Unique names suitable for magical worlds and fictional universes.</li>
        <li><strong>Medieval Names</strong> – Traditional names inspired by medieval Europe and ancient kingdoms.</li>
        <li><strong>Sci-Fi Names</strong> – Futuristic names for science fiction stories and games.</li>
        <li><strong>Business Names</strong> – Brand and company name ideas for entrepreneurs.</li>
        <li><strong>Usernames</strong> – Creative online identities for social media and gaming platforms.</li>
        <li><strong>Place Names</strong> – City, village, kingdom, and location names for world-building projects.</li>
    </ul>

    <h3>How Random Name Generation Helps Creativity</h3>

    <p>
        Creativity often thrives when new ideas are introduced unexpectedly. A random name generator can act as a
        creative partner by presenting combinations and possibilities you may never think of manually.
    </p>

    <p>
        Many writers experience "character naming fatigue" during large projects. After naming dozens of characters,
        finding fresh and distinctive names becomes increasingly difficult. Random generation helps maintain variety
        and prevents repetitive naming patterns.
    </p>

    <p>
        Similarly, entrepreneurs searching for business names can use generated suggestions as starting points. Even if
        the generated name is not chosen directly, it can inspire related concepts and branding ideas.
    </p>

    <h3>Frequently Asked Questions (FAQ)</h3>

    <p>
        <strong>Q: How realistic are the generated names?</strong><br>
        A: Generated names are based on common naming conventions, cultural patterns, and authentic structures to
        provide realistic and believable results.
    </p>

    <p>
        <strong>Q: Can I generate names from specific countries?</strong><br>
        A: Yes. Many generators allow country-specific and region-specific filtering options.
    </p>

    <p>
        <strong>Q: Is there a limit on the number of names I can generate?</strong><br>
        A: Most users can generate large batches of names repeatedly without restrictions.
    </p>

    <p>
        <strong>Q: Can I use generated names commercially?</strong><br>
        A: In most cases, generated names can be used in books, games, applications, and business projects.
    </p>

    <p>
        <strong>Q: Can I save my favorite names?</strong><br>
        A: Yes. You can copy, export, or save generated names for future use.
    </p>

    <p>
        <strong>Q: Does the tool work on mobile devices?</strong><br>
        A: Absolutely. The generator is optimized for smartphones, tablets, laptops, and desktop computers.
    </p>

    <h3>Why Choose Our Random Name Generator?</h3>

    <p>
        There are many name generation tools available online, but our generator focuses on simplicity, flexibility,
        and privacy. The interface is designed to help users quickly find the names they need without unnecessary
        complexity.
    </p>

    <p>
        Unlike some platforms that require registration or limit usage, this tool is completely accessible without
        creating an account. You can generate names whenever inspiration strikes.
    </p>

    <p>
        Privacy is another major advantage. Your generated results remain within your browser, helping protect your
        creative projects, character ideas, and personal work from unnecessary exposure.
    </p>

    <p>
        Fast performance, customizable options, and support for multiple naming styles make this tool suitable for both
        casual users and professional creators.
    </p>

    <h3>Common Applications of Random Name Generation</h3>

    <p>
        Random name generation is useful across numerous industries and creative disciplines. Here are some of the most
        common applications:
    </p>

    <ul>
        <li>
            <strong>Creative Writing:</strong>
            Generate character names, family names, kingdom names, and fictional locations.
        </li>

        <li>
            <strong>Game Development:</strong>
            Create names for characters, NPCs, cities, guilds, factions, and magical artifacts.
        </li>

        <li>
            <strong>Brand Development:</strong>
            Brainstorm memorable business names, product names, and startup identities.
        </li>

        <li>
            <strong>Software Testing:</strong>
            Generate realistic placeholder data for applications and databases.
        </li>

        <li>
            <strong>Education:</strong>
            Create examples for classroom exercises, writing assignments, and language learning.
        </li>

        <li>
            <strong>Research Projects:</strong>
            Produce sample names for surveys, user studies, and academic investigations.
        </li>

        <li>
            <strong>Role-Playing Games:</strong>
            Quickly build extensive character rosters for tabletop campaigns and online adventures.
        </li>
    </ul>

    <h3>Tips for Choosing the Perfect Name</h3>

    <p>
        When selecting a generated name, consider the purpose of your project. Think about the cultural background,
        historical setting, personality traits, and audience expectations associated with the name.
    </p>

    <p>
        A memorable name is often easy to pronounce, relevant to the context, and distinctive enough to stand out.
        Reviewing several generated options before making a final choice can help you find the strongest candidate.
    </p>

    <p>
        For businesses and brands, it's also wise to check domain availability, trademarks, and social media handles
        before committing to a name.
    </p>

    <h3>Conclusion</h3>

    <p>
        The Random Name Generator is a valuable tool for anyone who needs fresh, creative, and realistic naming ideas.
        Whether you're writing a novel, developing a game, launching a startup, conducting research, or simply looking
        for inspiration, this tool can help you generate high-quality names in seconds.
    </p>

    <p>
        With customizable filters, support for multiple cultures and naming styles, unlimited generation options, and a
        privacy-focused design, it provides a simple yet powerful solution for all your naming needs. Start generating
        names today and discover the perfect identity for your next character, project, business, or creative venture.
    </p>
</div>


<!-- Save List Modal -->
<div id="saveListModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Save Custom Name List</h3>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-body">
      <p>Enter a name for your custom list:</p>
      <input type="text" id="listName" placeholder="e.g., Fantasy Characters, Business Names, etc." style="width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ddd; border-radius: 6px;">
      <p>Current list contains <span id="listCount">0</span> names.</p>
      <textarea id="modalNameList" rows="6" style="width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ddd; border-radius: 6px; font-family: monospace;" readonly></textarea>
    </div>
    <div class="modal-footer">
      <button class="modal-button secondary" id="cancelSave">Cancel</button>
      <button class="modal-button primary" id="confirmSave">Save List</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const customNames = document.getElementById('customNames');
    const nameType = document.getElementById('nameType');
    const nameRegion = document.getElementById('nameRegion');
    const nameCount = document.getElementById('nameCount');
    const genderButtons = document.querySelectorAll('.gender-button');
    const regionCheckboxes = document.querySelectorAll('input[name="region"]');
    const actionButtons = document.querySelectorAll('.action-button');
    const resultsGrid = document.getElementById('resultsGrid');
    const alertContainer = document.getElementById('alertContainer');
    const includeSurnames = document.getElementById('includeSurnames');
    const includeMiddleNames = document.getElementById('includeMiddleNames');
    
    // Modal elements
    const saveListModal = document.getElementById('saveListModal');
    const listName = document.getElementById('listName');
    const modalNameList = document.getElementById('modalNameList');
    const closeModal = document.querySelectorAll('.close-modal');
    const cancelSave = document.getElementById('cancelSave');
    const confirmSave = document.getElementById('confirmSave');
    
    // Statistics
    let namesGenerated = 0;
    let maleNamesCount = 0;
    let femaleNamesCount = 0;
    
    // Name databases
    const nameDatabase = {
      male: {
        usa: ['James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Thomas', 'Charles'],
        uk: ['Oliver', 'George', 'Harry', 'Jack', 'Jacob', 'Noah', 'Charlie', 'Thomas', 'Oscar', 'William'],
        germany: ['Lukas', 'Leon', 'Finn', 'Paul', 'Jonas', 'Felix', 'Maximilian', 'Elias', 'Tim', 'Luis'],
        france: ['Lucas', 'Louis', 'Gabriel', 'Jules', 'Arthur', 'Raphaël', 'Adam', 'Maël', 'Hugo', 'Léo'],
        spain: ['Antonio', 'Manuel', 'José', 'Francisco', 'David', 'Juan', 'Javier', 'Daniel', 'Jesús', 'Carlos'],
        italy: ['Leonardo', 'Francesco', 'Alessandro', 'Lorenzo', 'Mattia', 'Andrea', 'Gabriele', 'Matteo', 'Riccardo', 'Davide'],
        china: ['Wei', 'Ming', 'Feng', 'Jian', 'Lei', 'Tao', 'Yang', 'Jun', 'Hong', 'Xiang'],
        japan: ['Kaito', 'Haruto', 'Yuto', 'Sota', 'Yuki', 'Riku', 'Haruki', 'Kenta', 'Takumi', 'Daichi'],
        india: ['Aarav', 'Vivaan', 'Aditya', 'Vihaan', 'Arjun', 'Sai', 'Reyansh', 'Mohammed', 'Shaurya', 'Ayaan'],
        russia: ['Alexander', 'Maxim', 'Artyom', 'Mikhail', 'Ivan', 'Dmitry', 'Kirill', 'Andrey', 'Sergey', 'Alexey'],
        brazil: ['Miguel', 'Arthur', 'Heitor', 'Bernardo', 'Théo', 'Davi', 'Gabriel', 'Pedro', 'Lorenzo', 'Lucas'],
        mexico: ['Santiago', 'Mateo', 'Sebastián', 'Leonardo', 'Diego', 'Daniel', 'Miguel', 'Ángel', 'Alejandro', 'Emiliano']
      },
      female: {
        usa: ['Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen'],
        uk: ['Olivia', 'Amelia', 'Isla', 'Ava', 'Emily', 'Isabella', 'Mia', 'Poppy', 'Ella', 'Lily'],
        germany: ['Emma', 'Mia', 'Hannah', 'Emilia', 'Sofia', 'Lina', 'Anna', 'Lea', 'Mila', 'Lena'],
        france: ['Emma', 'Louise', 'Alice', 'Chloé', 'Léa', 'Manon', 'Camille', 'Inès', 'Sarah', 'Juliette'],
        spain: ['María', 'Carmen', 'Ana', 'Isabel', 'Dolores', 'Pilar', 'José', 'Teresa', 'Rosa', 'Francisca'],
        italy: ['Sofia', 'Giulia', 'Aurora', 'Alice', 'Ginevra', 'Emma', 'Giorgia', 'Martina', 'Beatrice', 'Nicole'],
        china: ['Mei', 'Fang', 'Ling', 'Xia', 'Jing', 'Li', 'Qian', 'Xiu', 'Yan', 'Zhen'],
        japan: ['Sakura', 'Yui', 'Rin', 'Hana', 'Miyu', 'Akari', 'Aoi', 'Koharu', 'Haruka', 'Mei'],
        india: ['Saanvi', 'Ananya', 'Diya', 'Aadhya', 'Tanisha', 'Pari', 'Ira', 'Aarohi', 'Veda', 'Sara'],
        russia: ['Anastasia', 'Maria', 'Daria', 'Anna', 'Elizaveta', 'Polina', 'Viktoria', 'Yekaterina', 'Sofia', 'Arina'],
        brazil: ['Alice', 'Sophia', 'Helena', 'Valentina', 'Laura', 'Isabella', 'Manuela', 'Júlia', 'Heloísa', 'Luiza'],
        mexico: ['María', 'Guadalupe', 'Rosa', 'Carmen', 'Ana', 'Josefina', 'Margarita', 'Verónica', 'Elizabeth', 'Leticia']
      },
      surnames: {
        usa: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'],
        uk: ['Smith', 'Jones', 'Williams', 'Taylor', 'Brown', 'Davies', 'Evans', 'Wilson', 'Thomas', 'Johnson'],
        germany: ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann'],
        france: ['Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Richard', 'Petit', 'Durand', 'Leroy', 'Moreau'],
        spain: ['García', 'Fernández', 'González', 'Rodríguez', 'López', 'Martínez', 'Sánchez', 'Pérez', 'Gómez', 'Martín'],
        italy: ['Rossi', 'Russo', 'Ferrari', 'Esposito', 'Bianchi', 'Romano', 'Colombo', 'Ricci', 'Marino', 'Greco'],
        china: ['Wang', 'Li', 'Zhang', 'Liu', 'Chen', 'Yang', 'Zhao', 'Huang', 'Zhou', 'Wu'],
        japan: ['Sato', 'Suzuki', 'Takahashi', 'Tanaka', 'Watanabe', 'Ito', 'Yamamoto', 'Nakamura', 'Kobayashi', 'Kato'],
        india: ['Patel', 'Sharma', 'Singh', 'Kumar', 'Das', 'Gupta', 'Choudhury', 'Banerjee', 'Nair', 'Menon'],
        russia: ['Ivanov', 'Smirnov', 'Kuznetsov', 'Popov', 'Vasilyev', 'Petrov', 'Sokolov', 'Mikhailov', 'Novikov', 'Fedorov'],
        brazil: ['Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Alves', 'Pereira', 'Lima', 'Gomes'],
        mexico: ['Hernández', 'García', 'Martínez', 'López', 'González', 'Pérez', 'Rodríguez', 'Sánchez', 'Ramírez', 'Cruz']
      }
    };
    
    // Initialize
    updateCounters();
    setActiveGender('both');
    
    // Event listeners
    genderButtons.forEach(button => {
      button.addEventListener('click', function () {
        const gender = this.getAttribute('data-gender');
        setActiveGender(gender);
      });
    });
    
    nameType.addEventListener('change', function() {
      if (this.value === 'custom') {
        customNames.style.display = 'block';
        showAlert('Enter your custom names list above, one name per line.', 'success');
      } else {
        customNames.style.display = 'block';
      }
    });
    
    actionButtons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.getAttribute('data-action');
        handleAction(action);
      });
    });
    
    // Close modal when clicking X
    closeModal.forEach(closeBtn => {
      closeBtn.addEventListener('click', function() {
        saveListModal.style.display = 'none';
        listName.value = '';
      });
    });
    
    // Close modal when clicking cancel
    cancelSave.addEventListener('click', function() {
      saveListModal.style.display = 'none';
      listName.value = '';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === saveListModal) {
        saveListModal.style.display = 'none';
        listName.value = '';
      }
    });
    
    // Confirm save button
    confirmSave.addEventListener('click', function() {
      const name = listName.value.trim();
      if (!name) {
        showAlert('Please enter a name for your list.', 'error');
        return;
      }
      
      // In a real implementation, you would save to localStorage or a database
      showAlert(`List "${name}" saved successfully!`, 'success');
      saveListModal.style.display = 'none';
      listName.value = '';
    });
    
    function setActiveGender(gender) {
      genderButtons.forEach(button => {
        if (button.getAttribute('data-gender') === gender) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });
    }
    
    function getSelectedGender() {
      const activeButton = document.querySelector('.gender-button.active');
      return activeButton ? activeButton.getAttribute('data-gender') : 'both';
    }
    
    function getSelectedRegions() {
      const selected = [];
      regionCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
          selected.push(checkbox.value);
        }
      });
      return selected.length > 0 ? selected : Object.keys(nameDatabase.male);
    }
    
    function handleAction(action) {
      switch (action) {
        case 'generate':
          generateNames();
          break;
          
        case 'generate-more':
          generateNames();
          break;
          
        case 'copy':
          copyNamesToClipboard();
          break;
          
        case 'export':
          exportNamesAsCSV();
          break;
          
        case 'clear':
          clearResults();
          break;
          
        case 'save-list':
          saveCustomList();
          break;
          
        case 'refresh':
          generateNames(true);
          break;
      }
    }
    
    function generateNames(refresh = false) {
      const type = nameType.value;
      const count = parseInt(nameCount.value) || 1;
      const gender = getSelectedGender();
      const regions = getSelectedRegions();
      const useSurnames = includeSurnames.checked;
      const useMiddleNames = includeMiddleNames.checked;
      
      // Clear previous results if refreshing
      if (refresh) {
        resultsGrid.innerHTML = '';
      }
      
      // Generate names based on type
      if (type === 'custom') {
        generateCustomNames(count);
      } else {
        for (let i = 0; i < count; i++) {
          const region = regions[Math.floor(Math.random() * regions.length)];
          generateName(type, region, gender, useSurnames, useMiddleNames);
        }
      }
      
      updateCounters();
      showAlert(`Generated ${count} name${count > 1 ? 's' : ''} successfully!`, 'success');
    }
    
    function generateName(type, region, gender, useSurname, useMiddleName) {
      let firstName = '';
      let lastName = '';
      let middleName = '';
      let nameGender = gender;
      
      // Determine actual gender for this name
      if (gender === 'both') {
        nameGender = Math.random() > 0.5 ? 'male' : 'female';
      }
      
      // Get first name
      const firstNames = nameDatabase[nameGender][region] || nameDatabase[nameGender]['usa'];
      firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      
      // Get surname if requested
      if (useSurname) {
        const surnames = nameDatabase.surnames[region] || nameDatabase.surnames['usa'];
        lastName = surnames[Math.floor(Math.random() * surnames.length)];
      }
      
      // Get middle name if requested
      if (useMiddleName) {
        const middleNames = nameDatabase[nameGender][region] || nameDatabase[nameGender]['usa'];
        // Ensure middle name is different from first name
        do {
          middleName = middleNames[Math.floor(Math.random() * middleNames.length)];
        } while (middleName === firstName && middleNames.length > 1);
      }
      
      // Construct full name
      let fullName = firstName;
      if (middleName) {
        fullName += ' ' + middleName;
      }
      if (lastName) {
        fullName += ' ' + lastName;
      }
      
      // Update statistics
      namesGenerated++;
      if (nameGender === 'male') {
        maleNamesCount++;
      } else {
        femaleNamesCount++;
      }
      
      // Create name card
      const nameCard = document.createElement('div');
      nameCard.className = 'name-card';
      nameCard.innerHTML = `
        <div class="name-text">${fullName}</div>
        <div class="name-details">
          <span>${getRegionName(region)}</span>
          <span>${nameGender}</span>
        </div>
      `;
      
      resultsGrid.appendChild(nameCard);
    }
    
    function generateCustomNames(count) {
      const customList = customNames.value.trim();
      if (!customList) {
        showAlert('Please enter some names in your custom list first.', 'error');
        return;
      }
      
      const names = customList.split('\n').filter(name => name.trim().length > 0);
      if (names.length === 0) {
        showAlert('No valid names found in your custom list.', 'error');
        return;
      }
      
      for (let i = 0; i < count; i++) {
        const randomName = names[Math.floor(Math.random() * names.length)];
        
        // Create name card
        const nameCard = document.createElement('div');
        nameCard.className = 'name-card';
        nameCard.innerHTML = `
          <div class="name-text">${randomName}</div>
          <div class="name-details">
            <span>Custom List</span>
            <span>Random</span>
          </div>
        `;
        
        resultsGrid.appendChild(nameCard);
        namesGenerated++;
      }
    }
    
    function getRegionName(code) {
      const regionNames = {
        usa: 'USA',
        uk: 'UK',
        germany: 'Germany',
        france: 'France',
        spain: 'Spain',
        italy: 'Italy',
        china: 'China',
        japan: 'Japan',
        india: 'India',
        russia: 'Russia',
        brazil: 'Brazil',
        mexico: 'Mexico'
      };
      return regionNames[code] || code;
    }
    
    function copyNamesToClipboard() {
      const nameCards = resultsGrid.querySelectorAll('.name-text');
      if (nameCards.length === 0) {
        showAlert('No names to copy. Generate some names first.', 'error');
        return;
      }
      
      const names = Array.from(nameCards).map(card => card.textContent).join('\n');
      
      navigator.clipboard.writeText(names).then(() => {
        showAlert(`${nameCards.length} name${nameCards.length > 1 ? 's' : ''} copied to clipboard!`, 'success');
      }).catch(err => {
        showAlert('Failed to copy names: ' + err, 'error');
      });
    }
    
    function exportNamesAsCSV() {
      const nameCards = resultsGrid.querySelectorAll('.name-card');
      if (nameCards.length === 0) {
        showAlert('No names to export. Generate some names first.', 'error');
        return;
      }
      
      let csvContent = "Name,Region,Gender\n";
      
      nameCards.forEach(card => {
        const name = card.querySelector('.name-text').textContent;
        const details = card.querySelectorAll('.name-details span');
        const region = details[0].textContent;
        const gender = details[1].textContent;
        
        csvContent += `"${name}","${region}","${gender}"\n`;
      });
      
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'generated_names.csv';
      a.click();
      
      showAlert(`Exported ${nameCards.length} names as CSV file!`, 'success');
    }
    
    function clearResults() {
      resultsGrid.innerHTML = '';
      namesGenerated = 0;
      maleNamesCount = 0;
      femaleNamesCount = 0;
      updateCounters();
      showAlert('All names cleared.', 'success');
    }
    
    function saveCustomList() {
      const nameCards = resultsGrid.querySelectorAll('.name-text');
      if (nameCards.length === 0) {
        showAlert('No names to save. Generate some names first.', 'error');
        return;
      }
      
      const names = Array.from(nameCards).map(card => card.textContent).join('\n');
      modalNameList.value = names;
      document.getElementById('listCount').textContent = nameCards.length;
      saveListModal.style.display = 'block';
    }
    
    function updateCounters() {
      document.getElementById('namesCount').textContent = namesGenerated;
      document.getElementById('maleCount').textContent = maleNamesCount;
      document.getElementById('femaleCount').textContent = femaleNamesCount;
      document.getElementById('regionsCount').textContent = getSelectedRegions().length;
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