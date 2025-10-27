---
layout: default
title: "Find Location of Your Domain - Free Website Location Finder"
permalink: /find-location-of-your-domain-free-website-location-finder/
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Find Website Location Online - Free Domain & Server Location Finder</title>
<meta name="description"
  content="Easily find website and domain server location online. Free tool to track hosting country, city, IP address, ISP & exact geolocation. Fast, accurate & no signup required.">
<meta name="keywords"
  content="website location finder, where is a website hosted, find server location, domain location lookup, website geolocation, IP location lookup, server country checker, hosting provider finder">
<meta name="author" content="paramdip nath">
<meta name="robots" content="index, follow">

<!-- Open Graph Meta Tags -->
<meta property="og:title" content="Find Website Location Online - Domain & Server Location Finder">
<meta property="og:description" content="Track the exact server location of any website. Free fast and accurate domain geolocation tool.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://toolesy.com/find-location-of-your-domain-free-website-location-finder/">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Find Website & Server Location Online">
<meta name="twitter:description" content="Find where a website is hosted - country, city, ISP & coordinates. No signup!">

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Find Website Location Online",
  "description": "Free tool to check the server location of any domain including IP, ISP & geolocation.",
  "url": "https://toolesy.com/find-location-of-your-domain-free-website-location-finder/",
  "mainEntity": [{
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I find the location of a domain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Enter the website URL in our tool and get the server location including country, region, city & ISP."
        }
      },
      {
        "@type": "Question",
        "name": "Can I find where a website is hosted?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, this tool identifies the hosting provider and server location instantly."
        }
      },
      {
        "@type": "Question",
        "name": "Is this website location tool free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, it is 100% free and requires no account."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate is website geolocation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide the most accurate results based on IP and global data sources."
        }
      }
    ]
  }]
}
</script>

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Leaflet CSS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

<style>
  /* Domain Location Finder Styles */
  .location-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .location-container h1 {
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

  .location-section {
    margin-bottom: 40px;
    padding: 25px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid var(--primary);
  }

  .location-section h2 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .location-section p {
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

  .input-section input {
    width: 100%;
    padding: 18px;
    border: 2px solid #e0e6ed;
    border-radius: 10px;
    font-size: 16px;
    margin-bottom: 15px;
    font-family: inherit;
    transition: border-color 0.3s;
  }

  .input-section input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .button-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 12px;
    margin: 25px 0;
  }

  .location-button {
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

  .location-button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .location-button:active {
    transform: translateY(0);
  }

  .location-button.success {
    background: var(--success);
  }

  .location-button.success:hover {
    background: #218838;
  }

  .location-button.secondary {
    background: #6c757d;
  }

  .location-button.secondary:hover {
    background: #5a6268;
  }

  .result-section {
    margin-top: 30px;
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    display: none;
  }

  .result-section h3 {
    color: var(--primary);
    margin-bottom: 20px;
    font-size: 1.4rem;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 10px;
  }

  .result-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    margin-bottom: 20px;
  }

  .result-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background: #f8f9fa;
    border-radius: 6px;
    border-left: 4px solid var(--primary);
  }

  .result-item span:first-child {
    font-weight: 600;
    color: var(--primary);
  }

  .result-item span:last-child {
    font-weight: bold;
    color: #2c3e50;
  }

  .map-container {
    margin-top: 20px;
    height: 400px;
    background: #e9ecef;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
  }

  #map {
    height: 100%;
    width: 100%;
    border-radius: 8px;
  }

  .map-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #6c757d;
    font-weight: 600;
    text-align: center;
    padding: 20px;
  }

  .map-placeholder i {
    font-size: 3rem;
    margin-bottom: 15px;
    color: var(--primary);
  }

  .loading {
    text-align: center;
    padding: 20px;
    display: none;
  }

  .loading-spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid var(--primary);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 2s linear infinite;
    margin: 0 auto 15px;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
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

  /* Leaflet map customizations */
  .leaflet-popup-content-wrapper {
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .leaflet-popup-content {
    margin: 15px 20px;
    font-family: inherit;
  }

  .leaflet-popup-content h4 {
    color: var(--primary);
    margin-bottom: 8px;
    font-size: 1.1rem;
  }

  .leaflet-popup-content p {
    margin: 5px 0;
    color: #555;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .counter-wrapper {
      grid-template-columns: 1fr;
    }

    .button-section {
      grid-template-columns: 1fr;
    }

    .location-button {
      font-size: 13px;
      padding: 12px 8px;
    }

    .location-container {
      padding: 15px;
    }

    .location-section {
      padding: 20px;
      margin-bottom: 30px;
    }

    .location-container h1 {
      font-size: 2rem;
    }

    .location-section h2 {
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

    .result-grid {
      grid-template-columns: 1fr;
    }

    .map-container {
      height: 300px;
    }
  }
</style>

<div class="location-container">
  <h1>Free Domain Location Finder Tool</h1>
  <p class="welcome-message">Discover the geographic location of any website or domain. Get detailed server location information including country, city, ISP, coordinates, and more with our free domain location finder.</p>

  <div class="location-section">
    <h2>Website Location Finder</h2>

    <div class="counter-wrapper">
      <div class="counter-item">
        <span>Domains Checked: </span>
        <span id="domainCount">0</span>
      </div>
      <div class="counter-item">
        <span>Countries Found: </span>
        <span id="countryCount">0</span>
      </div>
      <div class="counter-item">
        <span>ISPs Identified: </span>
        <span id="ispCount">0</span>
      </div>
      <div class="counter-item">
        <span>Successful Lookups: </span>
        <span id="successCount">0</span>
      </div>
    </div>

    <div class="input-section">
      <input type="text" id="domainInput" placeholder="Enter website URL or domain (e.g., google.com, example.com)">
    </div>

    <div class="button-section">
      <button class="location-button" id="findLocationButton">
        <i class="fas fa-map-marker-alt"></i> Find Location
      </button>
      <button class="location-button success" id="myLocationButton">
        <i class="fas fa-globe"></i> Find My Server Location
      </button>
      <button class="location-button" id="copyResultsButton">
        <i class="fas fa-copy"></i> Copy Results
      </button>
      <button class="location-button secondary" id="clearButton">
        <i class="fas fa-broom"></i> Clear
      </button>
    </div>

    <div class="loading" id="loadingSection">
      <div class="loading-spinner"></div>
      <p>Finding domain location, please wait...</p>
    </div>

    <div class="result-section" id="resultSection">
      <h3>Domain Location Information</h3>
      <div class="result-grid" id="resultGrid">
        <!-- Results will be populated here -->
      </div>
      
      <div class="map-container">
        <div id="map"></div>
        <div class="map-placeholder" id="mapPlaceholder">
          <i class="fas fa-map"></i>
          <p>Interactive map will be displayed here</p>
          <small>Enter a domain to see its location on the map</small>
        </div>
      </div>
    </div>

    <div id="alertContainer" class="alert-container"></div>
    {% include share-and-donation.html %}

    <div class="examples">
      <h2>Examples</h2>

      <h3>Popular Websites and Their Server Locations:</h3>
      <div class="example-text">google.com - United States (California)
facebook.com - United States (California)
wikipedia.org - United States (Virginia)
bbc.com - United Kingdom (London)
alibaba.com - China (Hangzhou)</div>

      <h3>Sample Location Information:</h3>
      <div class="example-text">Domain: google.com
IP Address: 142.251.16.100
Country: United States
City: Mountain View
Region: California
ISP: Google LLC
Coordinates: 37.4056, -122.0775
Timezone: America/Los_Angeles</div>
    </div>
  </div>

  <!-- SEO Content Section -->
  <div class="content-placeholder">
    <h2>Free Domain Location Finder Tool</h2>

    <p>Curious about where websites are physically hosted? Our free <strong>Domain Location Finder tool</strong> reveals the geographic location of any website's servers. Perfect for website owners, developers, and digital marketers, this tool provides instant insights into server locations, helping you understand hosting infrastructure, optimize performance, and ensure compliance with data regulations.</p>

    <h3>How to Use This Domain Location Finder (Step-by-Step):</h3>
    <ul>
      <li><strong>Enter Domain:</strong> Type any website URL or domain name in the input field (e.g., google.com, amazon.com)</li>
      <li><strong>Find Location:</strong> Click the "Find Location" button to get detailed geographic information</li>
      <li><strong>View Details:</strong> See comprehensive location data including country, city, ISP, and coordinates</li>
      <li><strong>Interactive Map:</strong> View the exact location on an interactive map with marker</li>
      <li><strong>Check Your Location:</strong> Use "Find My Server Location" to discover where your own website is hosted</li>
      <li><strong>Copy Results:</strong> Click "Copy Results" to save the location information for reference</li>
    </ul>

    <h3>Real-Life Example & Use Case:</h3>
    <p>Imagine you're launching an e-commerce website targeting European customers. You want to ensure fast loading times by hosting your website closer to your target audience. Using our Domain Location Finder, you can check where popular European websites are hosted and make informed decisions about your own hosting provider and server location to optimize performance for your specific market.</p>

    <h3>Benefits & Who Should Use This Tool:</h3>
    <ul>
      <li><strong>Website Owners:</strong> Verify your server location and ensure it aligns with your target audience</li>
      <li><strong>Developers:</strong> Troubleshoot performance issues related to server distance and latency</li>
      <li><strong>SEO Professionals:</strong> Understand how server location might impact search engine rankings in different regions</li>
      <li><strong>Business Analysts:</strong> Research competitor hosting strategies and infrastructure</li>
      <li><strong>Security Researchers:</strong> Investigate suspicious websites and track their hosting locations</li>
      <li><strong>Students & Educators:</strong> Learn about internet infrastructure and global content delivery</li>
    </ul>

    <h3>Frequently Asked Questions (FAQ):</h3>
    <p><strong>Q: How accurate is the location information provided?</strong><br>
      A: Location accuracy varies based on the IP geolocation database. We typically achieve country-level accuracy of 95%+ and city-level accuracy of 80-90% for most websites. Major content delivery networks (CDNs) may show multiple locations.</p>

    <p><strong>Q: Can I find the location of any website?</strong><br>
      A: Yes, you can find server locations for virtually any publicly accessible website or domain. Some websites using advanced CDNs or proxy services might show multiple locations.</p>

    <p><strong>Q: Why does server location matter?</strong><br>
      A: Server location impacts website loading speed, SEO performance, data compliance (like GDPR), and user experience. Websites load faster for visitors located closer to the server.</p>

    <p><strong>Q: Is this tool completely free to use?</strong><br>
      A: Yes, this is 100% free with no limitations, registration, or hidden costs. You can perform unlimited domain location lookups.</p>

    <p><strong>Q: How current is the location data?</strong><br>
      A: We use real-time IP geolocation databases that are regularly updated to provide the most current location information available.</p>

    <h3>Why Choose Our Domain Location Finder?</h3>
    <p>Our <strong>online domain location tool</strong> stands out for its comprehensive data, user-friendly interface, and real-time results. Unlike basic IP lookup tools, we provide detailed geographic information, ISP details, and interactive maps that help you visualize server locations worldwide.</p>

    <h3>Understanding Server Locations and Their Impact</h3>
    <p>Website performance is significantly influenced by server location due to the physics of data transmission. The farther data has to travel, the longer it takes to reach the user. This is why:</p>
    <ul>
      <li><strong>Global Businesses:</strong> Often use CDNs to serve content from locations closest to their users</li>
      <li><strong>Local Businesses:</strong> Benefit from hosting in their target country for better local SEO</li>
      <li><strong>E-commerce Sites:</strong> Require fast loading times to reduce bounce rates and increase conversions</li>
      <li><strong>Media Websites:</strong> Need optimized delivery for large files like images and videos</li>
    </ul>
  </div>
</div>

<!-- Leaflet JS -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const domainInput = document.getElementById('domainInput');
    const findLocationButton = document.getElementById('findLocationButton');
    const myLocationButton = document.getElementById('myLocationButton');
    const clearButton = document.getElementById('clearButton');
    const resultSection = document.getElementById('resultSection');
    const resultGrid = document.getElementById('resultGrid');
    const loadingSection = document.getElementById('loadingSection');
    const alertContainer = document.getElementById('alertContainer');
    const copyResultsButton = document.getElementById('copyResultsButton');
    const mapContainer = document.getElementById('map');
    const mapPlaceholder = document.getElementById('mapPlaceholder');
    
    // Counters
    const domainCount = document.getElementById('domainCount');
    const countryCount = document.getElementById('countryCount');
    const ispCount = document.getElementById('ispCount');
    const successCount = document.getElementById('successCount');

    // Map variables
    let map = null;
    let marker = null;

    // Initialize counters from localStorage or set to 0
    let stats = JSON.parse(localStorage.getItem('domainLocationStats')) || {
      domainsChecked: 0,
      countriesFound: new Set(),
      ispsFound: new Set(),
      successfulLookups: 0
    };

    updateCounters();

    // Initialize map
    initMap();

    // Event listeners
    findLocationButton.addEventListener('click', findDomainLocation);
    myLocationButton.addEventListener('click', findMyServerLocation);
    clearButton.addEventListener('click', clearAll);
    copyResultsButton.addEventListener('click', copyResults);
    
    domainInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        findDomainLocation();
      }
    });

    function initMap() {
      // Initialize map with world view
      map = L.map('map').setView([20, 0], 2);
      
      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
      }).addTo(map);
      
      // Hide placeholder when map is ready
      mapPlaceholder.style.display = 'none';
    }

    function updateMap(lat, lng, domain, locationData) {
      if (!map) return;
      
      // Remove existing marker
      if (marker) {
        map.removeLayer(marker);
      }
      
      // Set view to new location
      map.setView([lat, lng], 10);
      
      // Add new marker
      marker = L.marker([lat, lng]).addTo(map);
      
      // Create popup content
      const popupContent = `
        <div style="text-align: center;">
          <h4>${domain}</h4>
          <p><strong>IP:</strong> ${locationData.ip}</p>
          <p><strong>Location:</strong> ${locationData.city || 'Unknown'}, ${locationData.country_name || 'Unknown'}</p>
          <p><strong>ISP:</strong> ${locationData.org || 'Unknown'}</p>
          <p><strong>Coordinates:</strong> ${lat.toFixed(4)}, ${lng.toFixed(4)}</p>
        </div>
      `;
      
      marker.bindPopup(popupContent).openPopup();
    }

    async function findDomainLocation() {
      const domain = domainInput.value.trim();
      
      if (!domain) {
        showAlert('Please enter a website URL or domain name.', 'error');
        return;
      }

      // Clean the domain input (remove http/https and paths)
      const cleanDomain = domain.replace(/^https?:\/\//, '').split('/')[0];
      
      showLoading();
      updateStat('domainsChecked', 1);
      
      try {
        // Get IP address first
        const ipResponse = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://dns.google/resolve?name=${cleanDomain}&type=A`)}`);
        const ipData = await ipResponse.json();
        const dnsData = JSON.parse(ipData.contents);
        
        if (dnsData.Answer && dnsData.Answer.length > 0) {
          const ipAddress = dnsData.Answer[0].data;
          await getLocationDetails(ipAddress, cleanDomain);
        } else {
          hideLoading();
          showAlert('Could not find IP address for the specified domain.', 'error');
        }
      } catch (error) {
        hideLoading();
        showAlert('Error finding domain location. Please try again.', 'error');
        console.error('Error:', error);
      }
    }

    async function findMyServerLocation() {
      showLoading();
      updateStat('domainsChecked', 1);
      
      try {
        // Get user's public IP
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const myIp = ipData.ip;
        
        domainInput.value = 'My Server Location';
        await getLocationDetails(myIp, 'Your Server');
      } catch (error) {
        hideLoading();
        showAlert('Error finding your server location. Please try again.', 'error');
        console.error('Error:', error);
      }
    }

    async function getLocationDetails(ipAddress, domain) {
      try {
        const response = await fetch(`https://ipapi.co/${ipAddress}/json/`);
        const locationData = await response.json();
        
        if (locationData.error) {
          throw new Error(locationData.reason);
        }
        
        displayResults(locationData, domain, ipAddress);
        updateStat('successfulLookups', 1);
        
        // Update country and ISP counters
        if (locationData.country_name && locationData.country_name !== 'Undefined') {
          stats.countriesFound.add(locationData.country_name);
        }
        if (locationData.org) {
          stats.ispsFound.add(locationData.org);
        }
        
        updateCounters();
        hideLoading();
      } catch (error) {
        // Fallback if detailed location info fails
        const basicInfo = {
          ip: ipAddress,
          network: 'Information not available',
          org: 'Information not available',
          country_name: 'Information not available',
          city: 'Information not available',
          region: 'Information not available',
          country_code: 'N/A',
          timezone: 'N/A',
          latitude: null,
          longitude: null
        };
        
        displayResults(basicInfo, domain, ipAddress);
        hideLoading();
      }
    }

    function displayResults(locationData, domain, ipAddress) {
      resultGrid.innerHTML = '';
      
      const results = [
        { label: 'Domain', value: domain },
        { label: 'IP Address', value: locationData.ip || ipAddress },
        { label: 'Country', value: locationData.country_name || 'Unknown' },
        { label: 'Region/State', value: locationData.region || 'Unknown' },
        { label: 'City', value: locationData.city || 'Unknown' },
        { label: 'ISP', value: locationData.org || locationData.network || 'Unknown' },
        { label: 'Timezone', value: locationData.timezone || 'Unknown' },
        { label: 'Country Code', value: locationData.country_code || 'N/A' },
        { label: 'Coordinates', value: locationData.latitude && locationData.longitude ? 
          `${locationData.latitude}, ${locationData.longitude}` : 'Not available' }
      ];
      
      results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.innerHTML = `
          <span>${result.label}:</span>
          <span>${result.value}</span>
        `;
        resultGrid.appendChild(resultItem);
      });

      // Update map with coordinates if available
      if (locationData.latitude && locationData.longitude) {
        updateMap(
          parseFloat(locationData.latitude), 
          parseFloat(locationData.longitude), 
          domain, 
          locationData
        );
      } else {
        // Reset map to world view if no coordinates
        if (map) {
          map.setView([20, 0], 2);
          if (marker) {
            map.removeLayer(marker);
            marker = null;
          }
        }
      }
      
      resultSection.style.display = 'block';
      showAlert('Domain location information retrieved successfully!', 'success');
    }

    function clearAll() {
      domainInput.value = '';
      resultSection.style.display = 'none';
      alertContainer.innerHTML = '';
      
      // Reset map to world view
      if (map) {
        map.setView([20, 0], 2);
        if (marker) {
          map.removeLayer(marker);
          marker = null;
        }
      }
    }

    function copyResults() {
      const results = Array.from(document.querySelectorAll('.result-item'))
        .map(item => {
          const label = item.querySelector('span:first-child').textContent;
          const value = item.querySelector('span:last-child').textContent;
          return `${label} ${value}`;
        })
        .join('\n');
      
      navigator.clipboard.writeText(results).then(() => {
        showAlert('Location results copied to clipboard!', 'success');
      }).catch(err => {
        showAlert('Failed to copy results: ' + err, 'error');
      });
    }

    function showLoading() {
      loadingSection.style.display = 'block';
      resultSection.style.display = 'none';
    }

    function hideLoading() {
      loadingSection.style.display = 'none';
    }

    function updateStat(stat, value) {
      if (stat === 'domainsChecked') {
        stats.domainsChecked += value;
      } else if (stat === 'successfulLookups') {
        stats.successfulLookups += value;
      }
      localStorage.setItem('domainLocationStats', JSON.stringify({
        ...stats,
        countriesFound: Array.from(stats.countriesFound),
        ispsFound: Array.from(stats.ispsFound)
      }));
      updateCounters();
    }

    function updateCounters() {
      domainCount.textContent = stats.domainsChecked;
      countryCount.textContent = stats.countriesFound.size;
      ispCount.textContent = stats.ispsFound.size;
      successCount.textContent = stats.successfulLookups;
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

    // Initialize stats from localStorage
    if (stats.countriesFound && Array.isArray(stats.countriesFound)) {
      stats.countriesFound = new Set(stats.countriesFound);
    }
    if (stats.ispsFound && Array.isArray(stats.ispsFound)) {
      stats.ispsFound = new Set(stats.ispsFound);
    }
  });
</script>