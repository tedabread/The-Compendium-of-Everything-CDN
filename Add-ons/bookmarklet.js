
        (() => {
  const existing = document.getElementById("compendium-app");
  if (existing) existing.remove();

  const style = document.createElement("style");
  style.textContent = `

  @import url('https://cdn.compendiumofeverything.org/fonts/fonts.css');

     .font-selector {
      width: 100%;
      padding: 8px 14px;
      border-radius: 16px;
      border: 2px solid var(--accent-color);
      background: var(--bg-color, #f0f0f8);
      color: var(--text-color);
      font-size: 1em;
      font-family: var(--text-font, 'Roboto'), sans-serif;
      box-shadow: 0 2px 8px rgba(0,0,0,0.07);
      transition: border-color 0.2s, box-shadow 0.2s;
      margin-left: 10px;
      outline: none;
      }
     .font-selector:focus {
      border-color: var(--accent-color, royalblue);
      box-shadow: 0 0 0 2px var(--accent-color, royalblue);
      }
     .setting-item label[for="font-family-select"] {
      min-width: 60px;
      font-size: 1em;
      color: var(--text-color, #222);
      font-family: var(--text-font, 'Roboto'), sans-serif;
      margin-right: 10px;
      }
     .setting-item select.font-selector optgroup {
      font-style: normal;
      font-weight: bold;
      color: #444;
      background: #f0f0f8;
      }
     .setting-item select.font-selector option {
      font-size: 1em;
      color: #222;
      background: #fff;
      }
   
     #compendium-app {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1.25);
      transform-origin: center;
      width: 400px;
      height: 600px;
      background-color: var(--bg-color, #fff);
      color: var(--text-color, #000);
      border-radius: 30px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.15);
      display: flex;
      flex-direction: column;
      font-family: var(--text-font, 'Roboto'), sans-serif;
      z-index: 999999999;
      overflow-y: auto;
      overflow-x: hidden;
      box-sizing: border-box;
      font-size: var(--font-size, 16px);
    }
     .compendium-title {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 1.4em;
      font-weight: bold;
      font-style: italic;
      text-align: center;
      margin: 10px 0 20px 0;
      font-family: var(--text-font, 'Roboto'), sans-serif;
      color: var(--text-color);
      text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
      padding-left: 0;
      padding-right: 0;
      justify-content: center;
    }
     #compendium-title-icon {
      font-size: 1.2em;
      color: var(--accent-color);
    }

      #compendium-app.dark {
      --bg-color: #121212;
      --text-color: #eee;
      --accent-color: royalblue;
      --text-font: var(--text-font, 'Roboto'), sans-serif;
    }

      #compendium-app.light {
      --bg-color: #fff;
      --text-color: #000;
      --accent-color: royalblue;
      background-color: var(--bg-color);
      color: var(--text-color);
    }

     #compendium-app header {
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
      height: auto;
      padding: 12px 0;
      border-right: none;
      border-bottom: 2px solid var(--accent-color);
      position: sticky;
      top: 0;
      z-index: 10;
    }

     #compendium-app header .tab {
      flex: 1;
      text-align: center;
      padding: 6px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }
     #compendium-app header .tab:hover {
      color: var(--accent-color, royalblue);
    }

     .tab-label {
      font-size: 1em;
      font-family: var(--text-font, 'Roboto'), sans-serif;
      color: inherit;
      white-space: nowrap;
    }


     #compendium-app header .tab.selected {
      color: var(--accent-color, royalblue);
      font-weight: 700;
    }

     .material-symbols-rounded {
      font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 48;
      font-size: 28px;
      user-select: none;
      text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
      box-sizing: content-box;
    }

     #compendium-app main {
      flex: 1;
      padding: 10px 16px 120px 16px;
      overflow-y: auto;
      overflow-x: hidden;
      height: 100%;
      max-height:100vh;
      box-sizing: border-box;
    }

     #compendium-app input[type="search"] {
      width: 100%;
      padding: 10px 14px;
      border-radius: 24px;
      border: 2px solid var(--accent-color);
      font-size: 1em;
      font-family: var(--text-font, 'Roboto'), sans-serif;
      box-sizing: border-box;
      background-color: var(--bg-color);
      color: var(--text-color);
      outline-offset: 2px;
      outline-color: var(--accent-color, royalblue);
      transition: border-color 0.3s;
    }

     #compendium-app input[type="search"]::placeholder {
      color: var(--text-color);
      opacity: 0.5;
    }

     .results, .content {
      margin-top: 14px;
      margin-bottom: 1.5em;
      line-height: 1.5;
      max-width: 100%;
      box-sizing: border-box;
      word-wrap: break-word;
      overflow-wrap: break-word;
      font-family: var(--text-font, 'Roboto'), sans-serif;
    }
    
     header {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
    }

      header .tab {
      display: inline-block;
      margin: 0 5px;
    }

     #compendium-app input[type="search"] {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

     .version-details {
      user-select: none;
      position: absolute;
      bottom: 50px;   
      left: 20px;
      max-width: 200px;
      padding: 10px 15px;
      background: var(--bg-color);
      border: 2px solid var(--accent-color);
      font-family: var(--text-font, 'Roboto'), sans-serif;
      font-size: 14px;
      color: var(--text-color);
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
      border-radius: 18px;
      z-index: 1000000000;
      white-space: normal;
    }

     .version-label {
      cursor: pointer;
      user-select: none;
      position: absolute;
      bottom: 24px;
      left: 20px;
      font-size: var(--font-size);
      font-style: italic;
      font-family: var(--text-font, 'Roboto'), sans-serif;
      color: #808080;
      z-index: 1000;
    }

     .author-title {
      font-size: var(--font-size);
      position: absolute;
      bottom: 5px;
      left: 20px;
      font-family: var(--text-font, 'Roboto'), sans-serif;
      font-style: italic;
      color: #808080;
      z-index: 1000;
    }

     .result-item {
      padding: 8px 10px;
      border-radius: 30px;
      cursor: pointer;
      transition: background-color 0.2s;
      user-select: none;
      font-weight: 500;
    }

     .result-item:hover {
      background-color: var(--accent-color, royalblue);
      color: #fff;
    }

     .content img {
      max-width: 100%;
      height: auto;
      border-radius: 10px;
      margin: 10px 0;
      display: block;
    }

     .content audio,
     .content video {
      display: block;
      width: 100%;
      max-width: 420px;
      margin: 18px auto 18px auto;
      border-radius: 25px;
      border: var(--accent-color, royalblue);
      box-shadow: 0 2px 10px rgba(0,0,0,0.10);
      background: var(--accent-color, royalblue);
    }

     .content audio {
      height: 38px;
      min-width: 180px;
      outline: none;
    }

     .content audio::-webkit-media-controls-enclosure {
      border-radius: 25px;
      overflow: hidden;
    }
     .content audio::-webkit-media-controls-panel {
      background: var(--bg-color, #fff);
    }
     .content video {
      max-height: 340px;
      background: #000;
}

     .setting-item {
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 500;
    }

     .setting-item label {
      cursor: pointer;
    }

      .toggle-switch {
      position: relative;
      width: 40px;
      height: 22px;
      background-color: #ccc;
      border-radius: 12px;
      cursor: pointer;
      transition: background-color 0.3s;
      color: var(--accent-color);
    }

     .toggle-switch input {
      opacity: 0;
      width: 0;
      height: 0;
      position: absolute;
    }

     .toggle-slider {
      position: absolute;
      top: 1px;
      left: 1px;
      width: 20px;
      height: 20px;
      background-color: white;
      border-radius: 50%;
      transition: transform 0.3s;
    }

    .toggle-switch input:checked + .toggle-slider {
      transform: translateX(18px);
      background-color: var(--accent-color, royalblue);
    }

      input[type="range"] {
      width: 140px;
    }

    #content.weather-content {
      max-width: 400px;
      margin: 2rem auto;
      padding: 2rem;
      border-radius: 8px;
      background: linear-gradient(to bottom, #ffffff, #f0f8ff);
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      text-align: center;
      font-family: var(--text-font, 'Roboto'), sans-serif;
  }

    #content.weather-content h3 {
      margin-bottom: 1rem;
      font-size: 1.6rem;
      color: #333;
  }

    #content.weather-content img {
      margin: 1rem 0;
      filter: drop-shadow(0 0 5px rgba(0,0,0,0.2));
  }

    #content.weather-content p {
      margin: 0.3rem 0;
      font-size: 1rem;
      color: #444;
  }

     .input-group {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-bottom: 1em;
  }

     #location-input {
      height: 22px;
      border: 2px solid var(--accent-color);
      border-radius: 12px 0 0 12px;
      padding: 0 8px;
      font-family: var(--text-font, 'Roboto'), sans-serif;
      background-color: var(--bg-color);
      font-size: var(--font-size);
      margin: 0;
      box-sizing: border-box;
      line-height: normal;
  }
  
     #get-weather-btn {
      height: 22px;
      border: 2px solid var(--accent-color);
      border-left: none;
      border-radius: 0 12px 12px 0;
      background-color: royalblue;
      color: white;
      margin: 0;
      padding: 0 8px;
      font-family: var(--text-font, 'Roboto'), sans-serif;
      cursor: pointer;
      font-size: 14px;
      transition: background-color 0.3s;
      box-sizing: border-box;
      line-height: normal;
  }
     #get-weather-btn:hover {
      background-color: #3a50c1;
  }

     .input-group {
      text-align: center;
      margin-bottom: 1em;
  }

     .input-group input {
      padding: 0.5em 1em;
      font-size: 1rem;
      width: 250px;
      max-width: 90vw;
      margin-right: 0.5em;
      font-family: var(--text-font, 'Roboto'), sans-serif;
      border: 2px solid var(--accent-color);
      border-radius: 4px;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

     .input-group button {
      padding: 0.5em 1.2em;
      font-size: 1rem;
      cursor: pointer;
      font-family: var(--text-font, 'Roboto'), sans-serif;
      background-color: var(--accent-color);
      color: #fff;
      border: none;
      border-radius: 4px;
      transition: background-color 0.3s ease;
  }

     .unit-toggle {
      text-align: center;
      margin-bottom: 1em;
      font-size: 0.9rem;
      user-select: none;
      font-family: var(--text-font, 'Roboto'), sans-serif;
      color: var(--accent-color);
    }
     .unit-toggle input[type="checkbox"] {
      margin-right: 0.4em;
      transform: scale(1.2);
      cursor: pointer;
  }

     .weather-card {
      background: var(--bg-color);
      border-radius: 20px;
      max-width: 320px;
      margin: 0 auto;
      padding: 1.2em 1.5em;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      font-family: var(--text-font, 'Roboto'), sans-serif;
      color: var(--text-color);
  }

     .weather-header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.6em;
      margin-bottom: 0.3em;
  }

     .weather-icon {
      font-size: 2.4rem;
      color: var(--text-color);
  }

     .loading-spinner {
      font-size: 2rem;
      animation: spin 1.5s linear infinite;
      display: inline-block;
      vertical-align: middle;
      color: var(--accent-color);
  }

      @keyframes spin {
      0% { transform: rotate(0deg);}
      100% { transform: rotate(360deg);}
  }

     .wind-container {
      margin-top: 1em;
      user-select: none;
  }

     .wind-speed {
      font-weight: 600;
      font-size: 1.3rem;
      margin-bottom: 0.2em;
      color: var(--accent-color);
      font-family: var(--text-font, 'Roboto'), sans-serif;
 }

      wind-compass {
      display: block;
      margin: 0 auto;
      max-width: 100px;
      height: 100px;
      stroke-linejoin: round;
  }

      input:focus {
      outline-color: var(--accent-color);
      border-color: var(--accent-color);
      box-shadow: 0 0 5px var(--accent-color);
  }

     .forecast-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: nowrap;
      margin-top: 1em;
  }
     .forecast-day {
      flex: 1 1 30%;
      margin: 0 10px;
      box-sizing: border-box;
      text-align: center;
  }
     .forecast-day strong {
      display: block;
      margin-bottom: 0.8em;
  }
     .weather-icon {
       font-size: 48px;
  }
     .switch {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 24px;
      margin: 0;
  }

     .switch input {
      opacity: 0;
      width: 0;
      height: 0;
  }

     .slider {
      position: absolute;
      cursor: pointer;
      top: 0; left: 0; right: 0; bottom: 0;
      background-color: var(--accent-color);
      transition: 0.4s;
      border-radius: 24px;
  }

     .slider::before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
  }

     .switch input:checked + .slider {
      background-color: var(--accent-color);
  }

     .switch input:checked + .slider::before {
      transform: translateX(26px);
  }

     #today-forecast {
      border: 2px solid var(--accent-color);
      background-color: var(--accent-color);
      color: white;
      border-radius: 12px;
      padding: 6px;
  }

     #notepad-btn {
      position: fixed;
      bottom: 30px;
      right: 35px;
      z-index: 1000;
      background: var(--accent-color, royalblue);
      color: #fff;
      border: none;
      border-radius: 50%;
      width: 54px;
      height: 54px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.18);
      cursor: pointer;
      font-size: 2em;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
  }
     #notepad-btn:hover {
      background: #3a50c1;
  }
     #notepad-panel {
      position: fixed;
      bottom: 100px;
      right: 40px;
      width: 320px;
      height: 260px;
      background: var(--bg-color);
      color: var(--text-color, #000);
      border-radius: 18px;
      box-shadow: 0 4px 18px rgba(0,0,0,0.18);
      z-index: 1000002;
      display: none;
      flex-direction: column;
      overflow: hidden;
      border: 2px solid var(--accent-color);
  }
     .notepad-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--accent-color, royalblue);
      color: #fff;
      padding: 8px 14px;
      font-weight: bold;
      font-family: var(--text-font, 'Roboto'), sans-serif;
  }
     #notepad-panel textarea {
      width: 100%;
      height: 190px;
      border: none;
      resize: none;
      padding: 12px;
      font-size: 1em;
      font-family: var(--text-font, 'Roboto'), sans-serif;
      background: transparent;
      color: inherit;
      outline: none;
      box-sizing: border-box;
  }
     #close-notepad {
      background: none;
      border: none;
      color: #fff;
      font-size: 1.3em;
      cursor: pointer;
  }

     #notepad-btn {
      position: fixed;
      bottom: 70px;
      right: 30px;
      z-index: 1000001;
      background: var(--accent-color, royalblue);
      color: #fff;
      border: none;
      border-radius: 50%;
      width: 54px;
      height: 54px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.18);
      cursor: pointer;
      font-size: 2em;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
  }
     #notepad-btn:hover {
      background: #3a50c1;
  }
     #notepad-panel {
      position: fixed;
      bottom: 140px;
      right: 30px;
      width: 300px;
      height: 240px;
      background: var(--bg-color, #fff);
      color: var(--text-color, #000);
      border-radius: 18px;
      box-shadow: 0 4px 18px rgba(0,0,0,0.18);
      z-index: 1000002;
      display: none;
      flex-direction: column;
      overflow: hidden;
  }
  
     .about-panel {
      position: absolute;
      bottom: 50px;
      left: 50px;
      max-width: 320px;
      min-width: 220px;
      padding: 20px 18px 18px 18px;
      background: var(--bg-color, #fff);
      border: 2px solid var(--accent-color);
      border-radius: 22px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.18);
      color: var(--text-color, #222);
      font-family: var(--text-font, 'Roboto'), sans-serif;
      z-index: 1001;
      white-space: normal;
      text-align: center;
  }
     .about-logo {
      width: 120px;
      height: 120px;
      object-fit: contain;
      border-radius: 12px;
      margin-bottom: 8px;
  }
     .about-close {
      position: absolute;
      top: 8px;
      right: 12px;
      cursor: pointer;
      font-size: 1.4em;
      color: var(--accent-color);
      transition: color 0.2s;
  }
     .about-close:hover {
      color: var(--accent-color, royalblue);
  }

    .notepad-header button {
     background: #f5f5f7;
     border: none;
     border-radius: 12px;
     margin-left: 6px;
     padding: 6px 10px;
     cursor: pointer;
     font-size: 1.1em;
     color: #333;
     transition: background 0.2s, box-shadow 0.2s;
     vertical-align: middle;
     display: inline-flex;
     align-items: center;
  }

    .notepad-header button:hover {
     background: #e0e0e7;
     box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  }

    .notepad-header button:active {
     background: #d0d0d7;
  }

    .notepad-header .material-symbols-rounded {
     font-size: 1.3em;
     margin-right: 2px;
  }

      .font-family-settings {
      display: flex;
      flex-direction: column;
      max-width: 300px;
      margin-bottom: 1em;
      font-family: Arial, sans-serif;
  }

     .font-family-settings #font-family-search {
      padding: 6px 10px;
      margin-bottom: 8px;
      font-size: 0.9rem;
      border: 2px solid var(--accent-color, royalblue);
      border-radius: 15px;
      transition: border-color 0.2s ease;
      background: var(--bg-color);
      color: var(--text-color);
      font-family: var(--text-font, 'Roboto'), sans-serif;
      font-size: var(--font-size);
  }

     .font-family-settings #font-family-search:focus {
      border-color: #3a86ff;
      box-shadow: 0 0 4px #3a86ffaa;
  }

     .font-family-settings #font-family-select {
      font-size: 1rem;
      background: var(--bg-color);
      color: var(--text-color);
      border-radius: 12px;
      border: 2px solid var(--accent-color, royalblue);
      font-size: var(--font-size)
  }

     #footer-overlay {
      position: absolute;
      left: 0;
      right: 16px;
      bottom: 0;
      height: 120px;
      background: linear-gradient(
        to top,
        var(--bg-color) 0%,
        var(--bg-color) 40px,
        transparent 100%
    );
      z-index: 100;
      pointer-events: none;
      box-shadow: none;
  }

     .setting-item input[type="color"] {
      appearance: none;
      border: 2px solid var(--accent-color);
      border-radius: 8px;
      width: 32px;
      height: 32px;
      padding: 0;
      background: none;
      cursor: pointer;
      margin-left: 8px;
      transition: border-color 0.2s, box-shadow 0.2s;
      box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  }

     .setting-item input[type="color"]:focus {
      outline: none;
      border-color: #3a86ff;
      box-shadow: 0 0 0 2px #3a86ff44;
  }
     .setting-item label {
      display: flex;
      align-items: center;
      font-size: 1em;
      font-family: var(--text-font, 'Roboto'), sans-serif;
      color: var(--text-color);
  }

     #reset-theme-btn {
      background: var(--accent-color);
      color: white;
      border: none;
      border-radius: 15px;
      padding: 6px 16px;
      font-size: 1em;
      font-weight: 500;
      cursor: pointer;
      margin-top: 6px;
      transition: background 0.2s, box-shadow 0.2s;
  }

     #reset-theme-btn:hover, #reset-theme-btn:focus {
      background: #3a50c1;
      box-shadow: 0 2px 8px rgba(58,134,255,0.10);
      outline: none;
  }

     .dropdown {
      position: relative;
      display: inline-block;
      margin-top: 18px;
  }

     .dropdown-button {
      background: var(--accent-color, royalblue);
      color: #fff;
      padding: 8px 18px;
      border: none;
      border-radius: 25px;
      font-family: var(--text-font);
      font-size: var(--font-size);
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(58,134,255,0.08);
      transition: background 0.2s, box-shadow 0.2s, transform 0.1s;
  }

    .dropdown-button:hover,
    .dropdown-button:focus {
     background: #3a50c1;
     box-shadow: 0 4px 16px rgba(58,134,255,0.15);
     outline: none;
     transform: translateY(-2px) scale(1.04);
  }

     .dropdown-content {
      display: none;
      position: absolute;
      left: 0;
      top: 110%;
      min-width: 180px;
      background: var(--bg-color, #fff);
      border: 2px solid var(--accent-color);
      border-radius: 12px;
      box-shadow: 0 4px 18px rgba(0,0,0,0.12);
      z-index: 1002;
      padding: 8px 0;
      font-family: var(--text-font, 'Roboto'), sans-serif;
  }

    .dropdown:hover .dropdown-content,
    .dropdown:focus-within .dropdown-content {
      display: block;
  }

     .dropdown-content a {
      display: block;
      padding: 10px 18px;
      color: var(--text-color, #222);
      text-decoration: none;
      font-size: 1em;
      border-radius: 8px;
      transition: background 0.15s, color 0.15s;
  }

     .dropdown-content a:hover,
     .dropdown-content a:focus {
      background: var(--accent-color, royalblue);
      color: #fff;
      outline: none;
  }

    .dropdown-warning {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 14px;
      background-color: #fff3cd;
      color: #856404;
      font-size: 13px;
      border-bottom: 1px solid #f5c6cb;
      font-style: italic;
  }

     .warning-icon {
      font-size: 20px;
      color: #f5a623; 
  }

     .citation-popup {
      position: fixed;
      z-index: 999999999999;
      background: var(--accent-color);
      color: white;
      border: 2px solid white;
      border-radius: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.18);
      padding: 10px 14px;
      font-size: 0.98em;
      max-width: 320px;
      min-width: 180px;
      pointer-events: none;
      display: none;
      line-height: 1.5;
      font-family: var(--text-font);
      word-break: break-word;
      transition: opacity 0.15s;
      backdrop-filter: blur(2px);
    }
    .citation-popup a {
      color: white;
      text-decoration: underline;
      word-break: break-all;
    }
    .citation-popup img {
      max-width: 320px;
      max-height: 420px;
      border-radius: 10px;
      margin: 8px 0;
      display: block;
    }
     .infobox {
      margin: 0 0 1em 1.5em;
      width: 100%;
      max-width: 100%;
      font-size: 0.97em;
      background: #f8f9fa;
      color: #222;
      border: 2px solid var(--accent-color);
      border-radius: 25px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.07);
      padding: 0.5em 0.8em 0.8em 0.8em;
      line-height: 1.3;
      overflow: hidden;
    }
    .infobox caption {
      font-size: 1.1em;
      font-weight: bold;
      text-align: center;
      margin-bottom: 0.4em;
      color: #222;
    }
    .infobox th {
      background: none;
      font-weight: bold;
      text-align: left;
      padding: 4px 8px 4px 0;
      border: none;
      color: #222;
      vertical-align: top;
    }
    .infobox td {
      background: none;
      padding: 4px 0 4px 0;
      border: none;
      color: #222;
      vertical-align: top;
    }
    .infobox tr {
      border: none;
    }
    .infobox .infobox-image,
    .infobox .image {
      text-align: center;
      margin: 0.5em 0;
    }
    .infobox .infobox-image img,
    .infobox .image img {
      max-width: 220px;
      height: auto;
      border-radius: 8px;
      margin: 0 auto;
      display: block;
    }
    .infobox .infobox-label {
      font-weight: bold;
      color: #444;
      padding-right: 0.5em;
    }
    .infobox .infobox-data {
      color: #222;
      font-size: var(--font-size);
      font-family: var(--text-font), sans-serif;
    }
    .infobox .infobox-header {
      font-size: 1.15em;
      font-weight: bold;
      text-align: center;
      background: var(--accent-color);
      color: white;
      border-radius: 25px;
      padding: 8px;
      margin-bottom: 0.5em;
    }
    .infobox .infobox-above {
      font-size: 1.1em;
      font-weight: bold;
      text-align: center;
      background: var(--accent-color);
      color: white;
      border-radius: 25px;
      padding: 6px;
      margin-bottom: 0.3em;
    }
    .infobox .infobox-below {
      font-size: 0.98em;
      text-align: center;
      color: #666;
      margin-top: 0.5em;
    }
    .infobox .infobox-subheader {
      font-size: 1em;
      font-weight: bold;
      text-align: center;
      color: #444;
      margin-bottom: 0.2em;
    }
    .infobox .infobox-title {
      font-size: 1.2em;
      font-weight: bold;
      text-align: center;
      color: #222;
      margin-bottom: 0.2em;
    }
    .infobox .infobox-row {
      border-top: 1px solid #e0e0e0;
      margin-top: 0.2em;
      padding-top: 0.2em;
    }
    .infobox .infobox-list {
      list-style: none;
      padding-left: 0;
      margin: 0;
    }
    .infobox .infobox-list li {
      margin-bottom: 0.2em;
    }
    .infobox .infobox-hr {
      border: none;
      border-top: 1px solid #e0e0e0;
      margin: 0.5em 0;
    }
    .infobox .infobox-signature img {
      max-width: 120px;
      height: auto;
      margin: 0.2em auto;
      display: block;
    }
    .infobox .infobox-website a {
      color: var(--accent-color, royalblue);
      text-decoration: underline;
      word-break: break-all;
    }
    #compendium-app.dark .infobox {
      background: #23272b;
      color: #eee;
    }
    #compendium-app.dark .infobox th,
    #compendium-app.dark .infobox td,
    #compendium-app.dark .infobox .infobox-label,
    #compendium-app.dark .infobox .infobox-header,
    #compendium-app.dark .infobox .infobox-above,
    #compendium-app.dark .infobox .infobox-title {
      color: #eee;
    }
    #compendium-app.dark .infobox .infobox-header,
    #compendium-app.dark .infobox .infobox-above {
      background: #181a1b;
    }
    #compendium-app.dark .infobox .infobox-below {
      color: #aaa;
    }
    #compendium-app.dark .infobox .infobox-hr {
      border-top: 1px solid #444;
    }
    #compendium-app.dark .infobox .infobox-website a {
      color: var(--accent-color, royalblue);
    }
/* --- End Infobox Styling --- */

     #toc-toggle-btn {
      position: fixed;
      bottom: 70px;
      left: 35px;
      z-index: 1000;
      background: var(--accent-color, royalblue);
      color: #fff;
      border: none;
      border-radius: 50%;
      width: 54px;
      height: 54px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.18);
      cursor: pointer;
      font-size: 2em;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
    }

     #toc-panel {
      position: absolute;
      top: 24px;
      left: 24px;
      width: 240px;
      max-height: 70%;
      background: var(--bg-color, #fff);
      color: var(--text-color);
      border-radius: 18px;
      box-shadow: 0 4px 18px rgba(0,0,0,0.18);
      z-index: 1001;
      display: none;
      flex-direction: column;
      overflow: auto;
      border: 2px solid var(--accent-color);
      padding: 12px 0 12px 0;
  }

     .play-btn {
      font-family: 'Material Symbols Rounded';
      font-variation-settings: 'FILL' 100, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      font-size: 20px;
      line-height: 1;
      border: none;
      background: var(--accent-color);
      color: white;
      cursor: pointer;
      vertical-align: middle;
      padding: 6px;
      margin-left: 6px;
      border-radius: 24px;
      user-select: none;
      transition: background-color 0.2s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
    }
     .play-btn:hover,
     .play-btn:focus {
      background-color: color-mix(in srgb, var(--accent-color) 70%, black 30%);
      outline: none;
    }

     .sidebar-title {
      font-size: 1.5em;
      font-weight: 900;
      font-style: italic;
      font-family: var(--text-font, 'Roboto'), sans-serif;
      color: var(--accent-color, royalblue);
      text-align: left;
      padding: 8px 8px 18px 8px;
      margin-bottom: 8px;
      line-height: 1.2;
      letter-spacing: 0.01em;
      user-select: none;
      text-shadow: 1px 1px 4px rgba(0,0,0,0.13);
    }

  `;

  document.head.appendChild(style);

const app = document.createElement("section");
app.id = "compendium-app";
app.classList.add("light");

// Define both layouts as template strings
app.innerHTML = `
  <header>
  <div class="tab selected" data-tab="wiki" title="Wikipedia">
    <span class="material-symbols-rounded" aria-label="Wikipedia">language</span>
  </div>
  <div class="tab" data-tab="dic" title="Dictionary">
    <span class="material-symbols-rounded" aria-label="Dictionary">dictionary</span>
  </div>
  <div class="tab" data-tab="thes" title="Thesaurus">
    <span class="material-symbols-rounded" aria-label="Thesaurus">library_books</span>
  </div>
  <div class="tab" data-tab="weather" title="Weather">
    <span class="material-symbols-rounded" aria-label="Weather">partly_cloudy_day</span>
  </div>
  <div class="tab" data-tab="compound" title="Compound Search">
    <span class="material-symbols-rounded" aria-label="Compound Search">search</span>
  </div>
  <div class="tab" data-tab="bookmarks" title="Bookmarks">
    <span class="material-symbols-rounded" aria-label="Bookmarks">bookmarks</span>
  </div>
  <div class="tab" data-tab="sett" title="Settings">
    <span class="material-symbols-rounded" aria-label="Settings">settings</span>
  </div>
</header>
    <main>
      <div class="compendium-title">The Compendium of Everything</div>
      <input type="search" placeholder="Search Encyclopedia..." id="search-input" autocomplete="off" />
      <div class="results"></div>
      <div class="content"></div>
      <div class="settings" style="display:none;"></div>
      <div id="clock-container">
      <div id="time"></div>
      <div id="date"></div>
    </div>

      <div class="version-label" id="versionLabel">Bookmarklet Edition</div>
      <div id="versionDetails" class="version-details" style="display:none;"></div>
      <div class="author-title">Made by L. Smalley</div>
      <div id="footer-overlay"></div>
    </main>

`;

  document.body.appendChild(app);

const notepadBtn = document.createElement("button");
notepadBtn.id = "notepad-btn";
notepadBtn.title = "Open Notepad";
notepadBtn.innerHTML = `<span class="material-symbols-rounded">edit_note</span>`;
app.appendChild(notepadBtn);

const notepadPanel = document.createElement("div");
notepadPanel.id = "notepad-panel";
notepadPanel.innerHTML = `
<div class="notepad-header">
  <span>Notepad</span>
  <div>
    <button id="export-notes" title="Export Notes"><span class="material-symbols-rounded">download</span></button>
    <button id="import-notes" title="Import Notes"><span class="material-symbols-rounded">upload</span></button>
    <button id="close-notepad" title="Close"><span class="material-symbols-rounded">close</span></button>
  </div>
</div>
<textarea id="notepad-text" placeholder="Type your notes here..."></textarea>

`;
app.appendChild(notepadPanel);


notepadPanel.querySelector("#export-notes").addEventListener("click", exportNotes);
notepadPanel.querySelector("#import-notes").addEventListener("click", importNotes);


// Notepad logic
const notepadText = notepadPanel.querySelector("#notepad-text");
const closeNotepad = notepadPanel.querySelector("#close-notepad");

// Load saved notes
notepadText.value = localStorage.getItem("compendium-notepad") || "";

// Save notes on input
notepadText.addEventListener("input", () => {
  localStorage.setItem("compendium-notepad", notepadText.value);
});

// Show/hide panel
notepadBtn.addEventListener("click", () => {
  notepadPanel.style.display = "flex";
});
closeNotepad.addEventListener("click", () => {
  notepadPanel.style.display = "none";
});

// Export notes as .txt file
function exportNotes() {
  const text = localStorage.getItem("compendium-notepad") || "";
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "compendium-notes.txt";
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 0);
}

// Import notes from .txt file
function importNotes() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".txt,text/plain";
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const text = evt.target.result;
      localStorage.setItem("compendium-notepad", text);
      notepadText.value = text;
    };
    reader.readAsText(file);
  };
  input.click();
}

const tabs = app.querySelectorAll(".tab");
const searchInput = app.querySelector("#search-input");
const resultsDiv = app.querySelector(".results");
const contentDiv = app.querySelector(".content");
const settingsDiv = app.querySelector(".settings");

let currentTab = "wiki";

let darkMode = false;
let fontSize = 14; // px
let appSize = 1.25; //scale
let fontFamily = "Roboto";

// Store content for each tab
const tabContents = {
  wiki: { results: "", content: ""},
  dic: { results: "", content: ""},
  thes: { results: "", content: ""},
  weather: { results: "", content: ""},
  compound: { results: "", content: ""},
  sett: { results: "", content: ""}
};

// Keyboard shortcuts for tab switching
document.addEventListener("keydown", (e) => {
  if (e.altKey && e.shiftKey) {
    switch (e.key.toLowerCase()) {
      case "w":
        switchTab("wiki");
        break;
      case "d":
        switchTab("dic");
        break;
      case "t":
        switchTab("thes");
        break;
      case "f":
        switchTab("weather");
        break;
      case "c":
        switchTab("compound");
        break;
      case "b":
        switchTab("bookmarks");
        break;
      case "s":
        switchTab("sett");
        break;
    }
  }
});

function initContentPopupsAndLinks() {
  // Always get fresh reference
  const contentDiv = app.querySelector(".content");
  // Citation popups
  let popup = document.getElementById("citation-popup");
  if (!popup) {
    popup = document.createElement("div");
    popup.className = "citation-popup";
    popup.id = "citation-popup";
    const citationPopupDiv = document.getElementById('compendium-app');
    citationPopupDiv.appendChild(popup);
  }

  // Function to remove leading ^ symbols from citation text
function cleanCitationText(text) {
  return text.replace(/^\s*\^+/, '').replace(/^\s+/, '');
}

// Update citation popups to clean text
contentDiv.querySelectorAll('a[href^="#cite_note"]').forEach(ref => {
  ref.addEventListener("mouseenter", (e) => {
    const href = ref.getAttribute("href");
    const note = contentDiv.querySelector(href);
    if (note) {
        const cleanedText = cleanCitationText(note.innerHTML);
        popup.innerHTML = cleanedText;
        popup.style.display = "block";
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        popup.style.left = Math.min(mouseX + 20, window.innerWidth - 340) + "px";
        popup.style.top = Math.max(mouseY - 10, 10) + "px";
      } else {
        popup.innerHTML = `<span style="color: #888;">Citation not found</span>`;
        popup.style.display = "block";
        popup.style.left = Math.min(e.clientX + 20, window.innerWidth - 340) + "px";
        popup.style.top = Math.max(e.clientY - 10, 10) + "px";
      }
  });
    ref.addEventListener("mousemove", (e) => {
      popup.style.left = Math.min(e.clientX + 20, window.innerWidth - 340) + "px";
      popup.style.top = Math.max(e.clientY - 10, 10) + "px";
    });
    ref.addEventListener("mouseleave", () => {
      popup.style.display = "none";
    });
  });

  // Article summary popups and disable navigation
  contentDiv.querySelectorAll('a[href^="/wiki/"]').forEach(link => {
    const href = link.getAttribute("href");
    if (
      href.startsWith("/wiki/File:") ||
      href.startsWith("/wiki/Special:") ||
      href.startsWith("/wiki/Help:") ||
      href.startsWith("/wiki/Category:") ||
      href.startsWith("/wiki/Talk:") ||
      href.startsWith("/wiki/Template:") ||
      href.startsWith("/wiki/Portal:") ||
      href.startsWith("/wiki/Wikipedia:") ||
      href.startsWith("/wiki/Main_Page") ||
      href.startsWith("/wiki/Citation_needed")
    ) return;

    let fetchTimeout, lastTitle = "";

    link.addEventListener("mouseenter", (e) => {
      const articleTitle = decodeURIComponent(href.replace(/^\/wiki\//, "")).replace(/_/g, " ");
      fetchTimeout = setTimeout(async () => {
        if (lastTitle === articleTitle) return;
        lastTitle = articleTitle;
        popup.innerHTML = `<span style="color: white;">Loading summary...</span>`;
        popup.style.display = "block";
        popup.style.left = Math.min(e.clientX + 20, window.innerWidth - 340) + "px";
        popup.style.top = Math.max(e.clientY - 10, 10) + "px";
        try {
          const resp = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(articleTitle)}`);
          if (!resp.ok) throw new Error("No summary found");
          const data = await resp.json();
          let imgHtml = "";
          if (data.thumbnail && data.thumbnail.source) {
            imgHtml = `<img src="${data.thumbnail.source}" alt="${data.title}" style="max-width:80px;max-height:80px;float:right;margin-left:12px;border-radius:8px;">`;
          }
          popup.innerHTML = `
            <div style="min-width:180px;max-width:320px;overflow:hidden;">
              ${imgHtml}
              <b>${data.title}</b><br>
              <span style="font-size:0.98em;">${data.extract || "<i>No summary available.</i>"}</span>
            </div>
          `;
        } catch {
          popup.innerHTML = `<span style="color:#888;">No summary available.</span>`;
        }
      }, 200);
    });

    link.addEventListener("mousemove", (e) => {
      popup.style.left = Math.min(e.clientX + 20, window.innerWidth - 340) + "px";
      popup.style.top = Math.max(e.clientY - 10, 10) + "px";
    });

    link.addEventListener("mouseleave", () => {
      clearTimeout(fetchTimeout);
      lastTitle = "";
      popup.style.display = "none";
    });

    // Disable navigation for all wiki links
    link.addEventListener("click", e => {
      e.preventDefault();
      return false;
    });
  });
}

function switchTab(tab) {
  // Always get fresh references in case DOM was rebuilt
  const resultsDiv = app.querySelector(".results");
  const contentDiv = app.querySelector(".content");
  const settingsDiv = app.querySelector(".settings");

  // Save current tab's content and scroll position
  if (tabContents[currentTab]) {
    tabContents[currentTab].results = resultsDiv.innerHTML;
    tabContents[currentTab].content = contentDiv.innerHTML;
    tabContents[currentTab].scroll = contentDiv.scrollTop; // Save scroll position
  }

  const tabNames = {
    wiki: "Wikipedia",
    dic: "Dictionary",
    thes: "Thesaurus",
    weather: "Weather",
    compound: "Compound Search",
    bookmarks: "Bookmarks",
    sett: "Settings"
  };
  const tabData = {
    wiki: { label: "Wikipedia", icon: "language" },
    dic: { label: "Dictionary", icon: "dictionary" },
    thes: { label: "Thesaurus", icon: "library_books" },
    weather: { label: "Weather", icon: "partly_cloudy_day" },
    compound: { label: "Compound Search", icon: "search" },
    bookmarks: { label: "Bookmarks", icon: "bookmark" },
    sett: { label: "Settings", icon: "settings" }
  };
  const titleIcon = document.getElementById("compendium-title-icon");
  const titleLabel = document.getElementById("compendium-title-label");
  if (titleIcon && titleLabel && tabData[tab]) {
    titleIcon.textContent = tabData[tab].icon;
    titleLabel.textContent = tabData[tab].label;
  }

  currentTab = tab;
  tabs.forEach((t) => t.classList.toggle("selected", t.dataset.tab === tab));
  settingsDiv.style.display = "none";
  searchInput.style.display = "block";
  searchInput.value = "";

  // Restore content for the new tab
  if (tab === "wiki") {
    searchInput.placeholder = "Search Wikipedia...";
    searchInput.disabled = false;
    resultsDiv.innerHTML = tabContents.wiki.results;
    contentDiv.innerHTML = tabContents.wiki.content;
    settingsDiv.style.display = "none";
    // Re-initialize popups/links
    initContentPopupsAndLinks();
    // Restore scroll
    setTimeout(() => {
      contentDiv.scrollTop = tabContents.wiki.scroll || 0;
    }, 0);
  } else if (tab === "dic") {
    searchInput.placeholder = "Search Dictionary...";
    searchInput.disabled = false;
    resultsDiv.innerHTML = tabContents.dic.results;
    contentDiv.innerHTML = tabContents.dic.content;
    settingsDiv.style.display = "none";
    initContentPopupsAndLinks();
    setTimeout(() => {
      contentDiv.scrollTop = tabContents.dic.scroll || 0;
    }, 0);
  } else if (tab === "thes") {
    searchInput.placeholder = "Search Thesaurus...";
    searchInput.disabled = false;
    resultsDiv.innerHTML = tabContents.thes.results;
    contentDiv.innerHTML = tabContents.thes.content;
    settingsDiv.style.display = "none";
    initContentPopupsAndLinks();
    setTimeout(() => {
      contentDiv.scrollTop = tabContents.thes.scroll || 0;
    }, 0);
  } else if (tab === "weather") {
    searchInput.style.display = "none";
    resultsDiv.innerHTML = tabContents.weather.results;
    contentDiv.innerHTML = tabContents.weather.content;
    settingsDiv.style.display = "none";
    if (!contentDiv.innerHTML) loadWeather();
    setTimeout(() => {
      contentDiv.scrollTop = tabContents.weather.scroll || 0;
    }, 0);

    // --- Weather auto-refresh: start timer when entering weather tab ---
    if (typeof weatherRefreshTimer !== "undefined" && weatherRefreshTimer) {
      clearInterval(weatherRefreshTimer);
      weatherRefreshTimer = null;
    }
    weatherRefreshTimer = setInterval(() => {
      if (typeof lastWeatherLocation !== "undefined" && lastWeatherLocation) {
        // Ensure unit toggle matches last used unit
        const unitToggle = document.getElementById("unit-toggle");
        if (unitToggle && typeof lastWeatherUnit !== "undefined") {
          unitToggle.checked = lastWeatherUnit;
        }
        fetchWeather(lastWeatherLocation, true);
      }
    }, 120000); // 2 minutes
  } else if (tab === "compound") {
    searchInput.placeholder = "Search Wikipedia, Dictionary, Thesaurus...";
    searchInput.disabled = false;
    resultsDiv.innerHTML = tabContents.compound.results;
    contentDiv.innerHTML = tabContents.compound.content;
    settingsDiv.style.display = "none";
    setTimeout(() => {
      contentDiv.scrollTop = tabContents.compound.scroll || 0;
      // Re-attach event listeners to compound-wiki-link
      contentDiv.querySelectorAll('.compound-wiki-link').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const title = decodeURIComponent(link.getAttribute('data-title'));
          switchTab('wiki');
          searchInput.value = title;
          wikiLoadArticle(title);
        });
      });
    }, 0);
  } else if (tab === "bookmarks") {
    searchInput.style.display = "none";
    settingsDiv.style.display = "none";
    resultsDiv.innerHTML = "";
    contentDiv.innerHTML = renderBookmarks();
    // Attach remove event listeners
    setTimeout(() => {
      contentDiv.querySelectorAll('.remove-bookmark-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const title = btn.getAttribute('data-title');
          removeBookmark(title);
          contentDiv.innerHTML = renderBookmarks();
        });
      });
      contentDiv.querySelectorAll('.bookmark-title-link').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          switchTab('wiki');
          searchInput.value = link.getAttribute('data-title');
          wikiLoadArticle(link.getAttribute('data-title'));
        });
      });
    }, 0);
  } else if (tab === "sett") {
    searchInput.style.display = "none";
    settingsDiv.style.display = "block";
    resultsDiv.innerHTML = "";
    contentDiv.innerHTML = "";
    loadSettings();
    setTimeout(() => {
      contentDiv.scrollTop = tabContents.sett.scroll || 0;
    }, 0);
  }
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => switchTab(tab.dataset.tab));
});


// Wikipedia API
async function wikiLoadArticles(query) {
  if (!query) {
    resultsDiv.innerHTML = "";
    contentDiv.innerHTML = "";
    return;
  }

  resultsDiv.innerHTML = "Searching...";
  contentDiv.innerHTML = "";

  try {
    const searchRes = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=${encodeURIComponent(
        query
      )}&utf8=1&srlimit=10`
    );
    const searchData = await searchRes.json();

    let searchResults = searchData.query.search;
    const titles = searchResults.map(item => item.title);

    const thumbRes = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages&titles=${encodeURIComponent(
        titles.join("|")
      )}&piprop=thumbnail&pithumbsize=80`
    );
    const thumbData = await thumbRes.json();
    const pagesWithThumbs = thumbData.query.pages;

    const thumbnailMap = {};
    for (const pageId in pagesWithThumbs) {
      const page = pagesWithThumbs[pageId];
      if (page.thumbnail) {
        thumbnailMap[page.title] = page.thumbnail.source;
      }
    }

    let resultsArr = [];
    if (
      query.trim().toLowerCase().includes("compendium of everything") ||
      query.trim().toLowerCase() === "compendium"
    ) {
      resultsArr.push({
        title: "The Compendium of Everything",
        isEasterEgg: true,
        thumbnail: "https://cdn.compendiumofeverything.org/images/Compendium_Logo.png"
      });
    }

    resultsArr = resultsArr.concat(
      searchResults.map(item => ({
        title: item.title,
        isEasterEgg: false,
        thumbnail: thumbnailMap[item.title] || "https://cdn.compendiumofeverything.org/images/No_Image_Available_alt.png"
      }))
    );

    if (!resultsArr.length) {
      resultsDiv.innerHTML = "<i>No results found.</i>";
      return;
    }

    resultsDiv.innerHTML = "";
    resultsArr.forEach((item) => {
      const div = document.createElement("div");
      div.className = "result-item";
      div.setAttribute("style", `
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
        cursor: pointer;
      `);

      const thumb = document.createElement("img");
      thumb.src = item.thumbnail;
      thumb.alt = "";
      thumb.setAttribute("style", `
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 15px;
        flex-shrink: 0;
      `);

      const title = document.createElement("span");
      title.textContent = item.title;

      div.appendChild(thumb);
      div.appendChild(title);
      div.addEventListener("click", () => wikiLoadArticle(item.title));

      resultsDiv.appendChild(div);
    });
  } catch (e) {
    resultsDiv.innerHTML = `<i>Error fetching Wikipedia results.</i>`;
  }
}

async function wikiLoadArticle(title) {
  resultsDiv.innerHTML = "";
  contentDiv.innerHTML = "Loading article...";

  if (title.trim().toLowerCase() === "the compendium of everything") {
    contentDiv.innerHTML = `
<img src="https://cdn.compendiumofeverything.org/images/Compendium_Logo.png" alt="Compendium Logo" class="about-logo" style="display:block;margin:0 auto 18px auto;align-items:right;">
      <h1>The Compendium of Everything</h1>
      <p>
        <b>The Compendium of Everything</b> is a multi-tool web application created by Liam C. Smalley in 2025. Designed as a digital Swiss Army knife, it provides users with quick access to a variety of resources, including Wikipedia, a dictionary, a thesaurus, weather forecasts, and a notepad—all within a single, streamlined interface.
      </p>
      <h2>History</h2>
      <p>
        The project began in late May 2025, when Smalley released version Beta 1.0 as a modest side project. The initial version was built using <a href="https://p5js.org/" target="_blank">p5.js</a>, a JavaScript library for creative coding. The first GitHub repository was minimal, containing only basic usage instructions, a logo (which has since evolved), and a single JavaScript file.
      </p>
      <p>
        Upon its release, The Compendium of Everything received no publicity and was largely overlooked. Smalley briefly considered abandoning the project, but ultimately decided to continue development, believing that its utility would eventually be recognized.
      </p>
      <h2>Development and Features</h2>
      <p>
        In early June 2025, Smalley dedicated significant effort to improving the application. One of the first major updates was the addition of a weather tab, allowing users to check current conditions and forecasts for any location. Around this time, Smalley discovered that his financial situation was better than expected, which enabled him to purchase a domain name and begin hosting The Compendium of Everything as a standalone web app. His website went live officially on 6th June, 2025 at 5:00 PM EST exactly.
      </p>
      <p>
        Over subsequent versions, the application expanded to include a font selector, dark mode, customizable text size, and a persistent notepad. The interface was refined for clarity and accessibility, and the project’s logo was updated to reflect its evolving identity.
      </p>
      <h2>Author and Pseudonym</h2>
      <p>
        The creator, Liam C. Smalley, is also known online by the pseudonym <b>Pidgeron</b>, which serves as his GitHub username and digital moniker for his programming projects.
      </p>
      <h2>Design Philosophy</h2>
      <p>
        The Compendium of Everything was conceived as a tool for “knowledge at your fingertips.” Its design emphasizes speed, simplicity, and versatility, allowing users to search Wikipedia, look up word definitions, find synonyms and antonyms, check the weather, and jot down notes—all without leaving the app. The project’s open-source nature encourages community feedback and contributions.
      </p>
      <h2>See Also</h2>
      <ul>
        <li><a href="https://github.com/Pidgeron/The-Compendium-of-Everything" target="_blank" style="color: var(--accent-color); text-decoration: none;">Official GitHub Repository</a></li>
        <li><a href="https://www.compendiumofeverything.org/versions/beta" target="_blank" style="color: var(--accent-color); text-decoration: none;">Original Beta Version</a></li>
      </ul>
      <hr>
      <p style="font-size:0.9em;color:#888;">
        This article is an easter egg, appearing only when you search for "The Compendium of Everything" within the app.
      </p>
    `;
    return;
  }

  try {
    const articleRes = await fetch(
      `https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=${encodeURIComponent(title)}&prop=text`
    );
    const data = await articleRes.json();
    let html = data?.parse?.text?.["*"] || "<i>Could not load content.</i>";

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Remove edit section links
    doc.querySelectorAll(".mw-editsection").forEach((el) => el.remove());

    // Fix image URLs
    doc.querySelectorAll("img").forEach((img) => {
      let src = img.getAttribute("src") || img.getAttribute("data-src");
      if (!src) return;
      if (src.startsWith("//")) src = "https:" + src;
      else if (src.startsWith("/")) src = "https://en.wikipedia.org" + src;
      else if (!src.startsWith("http")) src = "https://en.wikipedia.org/" + src.replace(/^\/*/, "");

      const thumbMatch = src.match(/^(.*)\/thumb\/(.*?\/.*?)(?:\/[^\/]+)?$/);
      if (thumbMatch) {
        src = `${thumbMatch[1]}/${thumbMatch[2]}`;
      }

      img.setAttribute("src", src);
      img.removeAttribute("srcset");
      img.onerror = function () {
        this.style.display = "none";
      };
    });

    // Remove links that wrap images
    doc.querySelectorAll("a > img").forEach(img => {
      const a = img.parentElement;
      if (a && a.tagName === "A") {
        a.replaceWith(img);
      }
    });

    // === Fix links ===
    doc.querySelectorAll("a[href]").forEach((a) => {
      const href = a.getAttribute("href");

      if (!href) return;

      // Internal Wikipedia links
      if (
        href.startsWith("/wiki/") ||
        href.startsWith("#cite_note")
      ) {
        a.style.cursor = "pointer";
        a.style.color = "var(--accent-color, royalblue)";
        a.style.textDecoration = "underline";
        if (href.startsWith("/wiki/")) a.removeAttribute("title");
        return;
      }

      // External links
      if (href.startsWith("http") || href.startsWith("//")) {
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
        a.style.color = "var(--accent-color, royalblue)";
        a.style.textDecoration = "underline";
        a.style.cursor = "pointer";
        return;
      }

      // Unknown/weird links — disable
      a.removeAttribute("href");
      a.style.cursor = "default";
      a.style.color = "inherit";
      a.style.textDecoration = "none";
    });

    contentDiv.innerHTML = doc.body.innerHTML;

    // Add bookmark button at the top
    const bookmarkBtn = document.createElement("button");
    bookmarkBtn.className = "bookmark-btn";
    bookmarkBtn.title = "Bookmark this article";
    bookmarkBtn.style = "display:inline-flex;align-items:center;gap:6px;padding:8px 18px;margin-bottom:12px;border-radius:18px;background:var(--accent-color,royalblue);color:#fff;border:none;cursor:pointer;font-size:1em;font-family:var(--text-font,'Roboto'),sans-serif;";
    bookmarkBtn.innerHTML = `<span class="material-symbols-rounded" style="font-size:1.3em;">bookmark</span>
    `;

    // Check if already bookmarked
    const bookmarks = getBookmarks();
    if (bookmarks.some(b => b.title === title)) {
      bookmarkBtn.disabled = true;
      bookmarkBtn.innerHTML = `<span class="material-symbols-rounded" style="font-size:1.3em;">bookmark_added</span>
      `;
      bookmarkBtn.style.opacity = "0.7";
    }

    bookmarkBtn.addEventListener("click", () => {
      addBookmark({
        title,
        html: contentDiv.innerHTML
      });
      bookmarkBtn.disabled = true;
      bookmarkBtn.innerHTML = `<span class="material-symbols-rounded" style="font-size:1.3em;">bookmark_added</span>
      `;
      bookmarkBtn.style.opacity = "0.7";
    });

    contentDiv.prepend(bookmarkBtn);


    // Remove leading ^ symbols
    (function removeLeadingCaret() {
      let node = contentDiv.firstChild;
      while (node) {
        if (node.nodeType === Node.TEXT_NODE) {
          node.textContent = node.textContent.replace(/^\s*\^+/, '').replace(/^\s+/, '');
          if (node.textContent.trim().length > 0) break;
        }
        node = node.nextSibling;
      }
    })();

    // Remove ^ from citation entries
    contentDiv.querySelectorAll('ol.references li, .references li').forEach(li => {
      li.innerHTML = li.innerHTML.replace(/\^+/g, '');
    });

    // === Citation Popup System ===
    if (!document.getElementById("citation-popup-style")) {
      const popupStyle = document.createElement("style");
      popupStyle.id = "citation-popup-style";
      document.head.appendChild(popupStyle);
    }

    let popup = document.getElementById("citation-popup");
    if (!popup) {
      popup = document.createElement("div");
      popup.className = "citation-popup";
      popup.id = "citation-popup";
      document.body.appendChild(popup);
    }

    contentDiv.querySelectorAll('a[href^="#cite_note"]').forEach(ref => {
      ref.addEventListener("mouseenter", (e) => {
        const href = ref.getAttribute("href");
        const note = contentDiv.querySelector(href);
        if (note) {
          popup.innerHTML = note.innerHTML;
          popup.style.display = "block";
          const mouseX = e.clientX;
          const mouseY = e.clientY;
          popup.style.left = Math.min(mouseX + 20, window.innerWidth - 340) + "px";
          popup.style.top = Math.max(mouseY - 10, 10) + "px";
        }
      });
      ref.addEventListener("mousemove", (e) => {
        popup.style.left = Math.min(e.clientX + 20, window.innerWidth - 340) + "px";
        popup.style.top = Math.max(e.clientY - 10, 10) + "px";
      });
      ref.addEventListener("mouseleave", () => {
        popup.style.display = "none";
      });
    });

    // === Internal Article Popups and Navigation ===
    contentDiv.querySelectorAll('a[href^="/wiki/"]').forEach(link => {
      const href = link.getAttribute("href");
      if (
        href.startsWith("/wiki/File:") ||
        href.startsWith("/wiki/Special:") ||
        href.startsWith("/wiki/Help:") ||
        href.startsWith("/wiki/Category:") ||
        href.startsWith("/wiki/Talk:") ||
        href.startsWith("/wiki/Template:") ||
        href.startsWith("/wiki/Portal:") ||
        href.startsWith("/wiki/Wikipedia:") ||
        href.startsWith("/wiki/Main_Page") ||
        href.startsWith("/wiki/Citation_needed")
      ) return;

      let fetchTimeout, lastTitle = "";

      link.addEventListener("mouseenter", (e) => {
        const articleTitle = decodeURIComponent(href.replace(/^\/wiki\//, "")).replace(/_/g, " ");
        fetchTimeout = setTimeout(async () => {
          if (lastTitle === articleTitle) return;
          lastTitle = articleTitle;
          popup.innerHTML = `<span style="color: white;">Loading summary...</span>`;
          popup.style.display = "block";
          popup.style.left = Math.min(e.clientX + 20, window.innerWidth - 340) + "px";
          popup.style.top = Math.max(e.clientY - 10, 10) + "px";
          try {
            const resp = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(articleTitle)}`);
            if (!resp.ok) throw new Error("No summary found");
            const data = await resp.json();
            let imgHtml = "";
            if (data.thumbnail && data.thumbnail.source) {
              imgHtml = `<img src="${data.thumbnail.source}" alt="${data.title}" style="max-width:80px;max-height:80px;float:right;margin-left:12px;border-radius:8px;">`;
            }
            popup.innerHTML = `
              <div style="min-width:180px;max-width:320px;overflow:hidden;">
                ${imgHtml}
                <b>${data.title}</b><br>
                <span style="font-size:0.98em;">${data.extract || "<i>No summary available.</i>"}</span>
              </div>
            `;
          } catch {
            popup.innerHTML = `<span style="color:#888;">No summary available.</span>`;
          }
        }, 200);
      });

      link.addEventListener("mousemove", (e) => {
        popup.style.left = Math.min(e.clientX + 20, window.innerWidth - 340) + "px";
        popup.style.top = Math.max(e.clientY - 10, 10) + "px";
      });

      link.addEventListener("mouseleave", () => {
        clearTimeout(fetchTimeout);
        lastTitle = "";
        popup.style.display = "none";
      });

      link.addEventListener("click", e => {
        e.preventDefault();
        if (popup) popup.style.display = "none";
        const articleTitle = decodeURIComponent(href.replace(/^\/wiki\//, "")).replace(/_/g, " ");
        searchInput.value = articleTitle;
        wikiLoadArticle(articleTitle);

        // --- Update URL param when navigating to a new article ---
        const param = encodeURIComponent(articleTitle.trim().replace(/ /g, "-"));
        const newUrl = `${window.location.pathname}?wikipedia=${param}`;
        window.history.replaceState({}, "", newUrl);
      });
    });

    // === Table of Contents ===
    const oldBtn = contentDiv.querySelector("#toc-toggle-btn");
    if (oldBtn) oldBtn.remove();
    const oldPanel = contentDiv.querySelector("#toc-panel");
    if (oldPanel) oldPanel.remove();

    const tocBtn = document.createElement("button");
    tocBtn.id = "toc-toggle-btn";
    tocBtn.title = "Show Table of Contents";
    tocBtn.innerHTML = `<span class="material-symbols-rounded">toc</span>`;

    const tocPanel = document.createElement("div");
    tocPanel.id = "toc-panel";
    tocPanel.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;padding:0 18px 8px 18px;font-weight:bold;">
        <span>Contents</span>
        <button id="toc-close-btn" style="background:none;border:none;font-size:1.3em;cursor:pointer;color:#888;">
          <span class="material-symbols-rounded">close</span>
        </button>
      </div>
      <div id="toc-scroll" style="flex:1;overflow:auto;border-radius:18px;">
        <div id="toc-list" style="padding:0 18px;"></div>
      </div>
    `;

    contentDiv.appendChild(tocBtn);
    contentDiv.appendChild(tocPanel);

    tocBtn.onclick = () => {
      tocPanel.style.display = tocPanel.style.display === "block" ? "none" : "block";
    };
    tocPanel.querySelector("#toc-close-btn").onclick = () => {
      tocPanel.style.display = "none";
    };

    const tocList = tocPanel.querySelector("#toc-list");
    tocList.innerHTML = "";
    const headings = Array.from(contentDiv.querySelectorAll("h2, h3, h4"));
    if (headings.length) {
      headings.forEach((h, i) => {
        if (!h.id) h.id = "toc-h-" + i;
        const indent = h.tagName === "H2" ? 0 : h.tagName === "H3" ? 1 : 2;
        const a = document.createElement("a");
        a.textContent = h.textContent.replace(/\[.*\]/, "").trim();
        a.style.marginLeft = `${indent * 16}px`;
        a.style.display = "block";
        a.style.color = "var(--accent-color)";
        a.style.textDecoration = "underline";
        a.style.marginBottom = "6px";
        a.style.cursor = "pointer";
        a.href = "#" + h.id;
        a.onclick = (e) => {
          e.preventDefault();
          h.scrollIntoView({ behavior: "smooth", block: "start" });
          tocPanel.style.display = "none";
        };
        tocList.appendChild(a);
      });
    } else {
      tocBtn.style.display = "none";
    }
const imageLightbox = document.getElementById('compendium-app')
    // === Lightbox ===
contentDiv.querySelectorAll("img").forEach(img => {
  img.style.cursor = "pointer";
  img.addEventListener("click", function handler(e) {
    e.stopPropagation();

    // Remove existing overlay if present
    let overlay = document.getElementById("img-lightbox-overlay");
    if (overlay) overlay.remove();

    // Create overlay
    overlay = document.createElement("div");
    overlay.id = "img-lightbox-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.background = "rgba(0,0,0,0.85)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "999999999";
    overlay.style.cursor = "zoom-in";

    // Helper to extract original Wikimedia Commons filename
    function extractCommonsFilename(url) {
      const thumbMatch = url.match(/\/thumb\/(?:[^\/]+\/){2}([^\/]+)\/[^\/]+$/);
      if (thumbMatch && thumbMatch[1]) {
        return decodeURIComponent(thumbMatch[1]);
      }
      const parts = url.split("/");
      return decodeURIComponent(parts[parts.length - 1].split("?")[0]);
    }

    // Create Download button with Material Symbols Rounded icon
    const downloadBtn = document.createElement("button");
    downloadBtn.innerHTML = `<span class="material-symbols-rounded" style="font-variation-settings:'wght' 400; font-size: 20px;">download</span>`;
    downloadBtn.style.position = "fixed";
    downloadBtn.style.top = "10px";
    downloadBtn.style.left = "10px";
    downloadBtn.style.padding = "6px 10px";
    downloadBtn.style.fontSize = "18px";
    downloadBtn.style.border = "none";
    downloadBtn.style.borderRadius = "15px";
    downloadBtn.style.background = "none";
    downloadBtn.style.color = "var(--accent-color)";
    downloadBtn.style.cursor = "pointer";
    downloadBtn.style.zIndex = "1000000";
    downloadBtn.style.userSelect = "none";
    downloadBtn.style.display = "flex";
    downloadBtn.style.alignItems = "center";
    downloadBtn.style.justifyContent = "center";

    downloadBtn.addEventListener("click", async (event) => {
      event.stopPropagation();

      let filename = extractCommonsFilename(bigImg.src) || "downloaded-image.png";
      // Force .png extension
      filename = filename.replace(/\.[^.]+$/, ".png");

      try {
        // Fetch image as blob
        const response = await fetch(bigImg.src, {mode: 'cors'});
        if (!response.ok) throw new Error("Network response was not ok");

        const blob = await response.blob();

        // Convert to PNG using canvas
        const imgBitmap = await createImageBitmap(blob);
        const canvas = document.createElement("canvas");
        canvas.width = imgBitmap.width;
        canvas.height = imgBitmap.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(imgBitmap, 0, 0);

        canvas.toBlob((pngBlob) => {
          const url = URL.createObjectURL(pngBlob);
          const link = document.createElement("a");
          link.href = url;
          link.download = filename;
          document.body.appendChild(link);
          link.click();
          setTimeout(() => {
            URL.revokeObjectURL(url);
            link.remove();
          }, 100);
        }, "image/png");

      } catch (error) {
        alert("Failed to download image: " + error.message);
      }
    });

    overlay.appendChild(downloadBtn);

    // Create big image
    const bigImg = document.createElement("img");
    bigImg.src = img.src;
    bigImg.alt = img.alt || "";
    bigImg.style.maxWidth = "90vw";
    bigImg.style.maxHeight = "90vh";
    bigImg.style.borderRadius = "16px";
    bigImg.style.boxShadow = "0 4px 32px rgba(0,0,0,0.5)";
    bigImg.style.background = "#fff";
    bigImg.style.transition = "transform 0.2s ease";
    bigImg.style.transformOrigin = "center center";
    bigImg.style.cursor = "zoom-in";

    let zoomedIn = false;
    const zoomScale = 4;
    let isDragging = false;
    let startX = 0, startY = 0, currentX = 0, currentY = 0;

    bigImg.addEventListener("click", (e) => {
      e.stopPropagation();
      zoomedIn = !zoomedIn;

      if (zoomedIn) {
        bigImg.style.transform = `scale(${zoomScale})`;
        bigImg.style.cursor = "grab";
        overlay.style.cursor = "default";
      } else {
        bigImg.style.transform = "scale(1)";
        bigImg.style.left = "0";
        bigImg.style.top = "0";
        currentX = 0;
        currentY = 0;
        bigImg.style.cursor = "zoom-in";
        overlay.style.cursor = "zoom-out";
      }
    });

    bigImg.addEventListener("mousedown", (e) => {
      if (!zoomedIn) return;
      isDragging = true;
      startX = e.clientX - currentX;
      startY = e.clientY - currentY;
      bigImg.style.cursor = "grabbing";
      e.preventDefault();
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      currentX = e.clientX - startX;
      currentY = e.clientY - startY;
      bigImg.style.transform = `scale(${zoomScale}) translate(${currentX / zoomScale}px, ${currentY / zoomScale}px)`;
    });

    document.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false;
        bigImg.style.cursor = "grab";
      }
    });

    overlay.addEventListener("click", () => {
      overlay.remove();
    });

    document.addEventListener("keydown", function escCloser(e) {
      if (e.key === "Escape") {
        overlay.remove();
        document.removeEventListener("keydown", escCloser);
      }
    });

    overlay.appendChild(bigImg);
    imageLightbox.appendChild(overlay);
  });
});

  } catch (e) {
    contentDiv.innerHTML = "<i>Error fetching content.</i>";
  }
}

// Function to setup Table of Contents
function setupTableOfContents() {
  const contentDiv = document.querySelector(".content");
  const oldBtn = contentDiv.querySelector("#toc-toggle-btn");
  if (oldBtn) oldBtn.remove();
  const oldPanel = contentDiv.querySelector("#toc-panel");
  if (oldPanel) oldPanel.remove();

  const tocBtn = document.createElement("button");
  tocBtn.id = "toc-toggle-btn";
  tocBtn.title = "Show Table of Contents";
  tocBtn.innerHTML = `<span class="material-symbols-rounded">toc</span>`;

  const tocPanel = document.createElement("div");
  tocPanel.id = "toc-panel";
  tocPanel.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:0 18px 8px 18px;font-weight:bold;">
      <span>Contents</span>
      <button id="toc-close-btn" style="background:none;border:none;font-size:1.3em;cursor:pointer;color:var(--accent-color, royalblue);">
        <span class="material-symbols-rounded">close</span>
      </button>
    </div>
    <div id="toc-scroll" style="flex:1;overflow:auto;border-radius:18px;">
      <div id="toc-list" style="padding:0 18px;"></div>
    </div>
  `;

  contentDiv.appendChild(tocBtn);
  contentDiv.appendChild(tocPanel);

  tocBtn.onclick = () => {
    tocPanel.style.display = tocPanel.style.display === "block" ? "none" : "block";
  };
  tocPanel.querySelector("#toc-close-btn").onclick = () => {
    tocPanel.style.display = "none";
  };

  const tocList = tocPanel.querySelector("#toc-list");
  tocList.innerHTML = "";
  const headings = Array.from(contentDiv.querySelectorAll("h2, h3, h4"));
  if (headings.length) {
    headings.forEach((h, i) => {
      if (!h.id) h.id = "toc-h-" + i;
      const indent = h.tagName === "H2" ? 0 : h.tagName === "H3" ? 1 : 2;
      const a = document.createElement("a");
      a.textContent = h.textContent.replace(/\[.*\]/, "").trim();
      a.style.marginLeft = `${indent * 16}px`;
      a.style.display = "block";
      a.style.color = "var(--accent-color, royalblue)";
      a.style.textDecoration = "underline";
      a.style.marginBottom = "6px";
      a.style.cursor = "pointer";
      a.href = "#" + h.id;
      a.onclick = (e) => {
        e.preventDefault();
        h.scrollIntoView({ behavior: "smooth", block: "start" });
        tocPanel.style.display = "none";
      };
      tocList.appendChild(a);
    });
  } else {
    tocBtn.style.display = "none";
  }

}



// Main dictionary search function
async function dicSearch(query) {
  if (!query || !query.trim()) {
    resultsDiv.innerHTML = "";
    contentDiv.innerHTML = "";
    return;
  }

  const cleanQuery = query.trim();

  resultsDiv.innerHTML = "Searching...";
  contentDiv.innerHTML = "";

  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(cleanQuery)}`
    );

    if (res.status === 404) {
      resultsDiv.innerHTML = "<i>No definitions found.</i>";
      return;
    }

    const data = await res.json();

    resultsDiv.innerHTML = "";

    displayDictionary(data[0]);

    if (query && typeof window !== "undefined") {
  const param = encodeURIComponent(query.trim());
  const newUrl = `${window.location.pathname}?dictionary=${param}`;
  window.history.replaceState({}, "", newUrl);
}

  }
    catch (e) {
    resultsDiv.innerHTML = "<i>Error fetching dictionary data.</i>";
  }
}

// Display dictionary data with play button icons
function displayDictionary(entry) {
  if (!entry) {
    contentDiv.innerHTML = "<i>No data.</i>";
    return;
  }
  let html = `<h2 style="margin-top:0;">${entry.word}</h2>`;

  if (entry.phonetics && entry.phonetics.length) {
    html += `<p><i>Pronunciations:</i></p><ul style="margin-top: 0; margin-bottom: 1em;">`;
    entry.phonetics.forEach((phon) => {
      if (phon.text) html += `<li>${phon.text}`;
      if (phon.audio) {
        html += ` <button class="play-btn" onclick="new Audio('${phon.audio}').play()" aria-label="Play pronunciation">play_arrow</button>`;
      }
      html += `</li>`;
    });
    html += `</ul>`;
  }

  if (entry.meanings && entry.meanings.length) {
    entry.meanings.forEach((meaning) => {
      html += `<h3 style="margin-bottom: 0;">${meaning.partOfSpeech}</h3><ul>`;
      meaning.definitions.forEach((def) => {
        html += `<li>${def.definition}`;
        if (def.example) html += `<br><em>Example: ${def.example}</em>`;
        html += `</li>`;
      });
      html += `</ul>`;
    });
  }

  contentDiv.innerHTML = html;

  injectPlayButtonStyles();
}

function injectPlayButtonStyles() {
  if (document.getElementById('play-btn-styles')) return;

  const style = document.createElement('style');
  style.id = 'play-btn-styles';
  document.head.appendChild(style);
}

  // Thesaurus API (Datamuse API)
  async function thesSearch(query) {
    if (!query) {
      resultsDiv.innerHTML = "";
      contentDiv.innerHTML = "";
      return;
    }

    resultsDiv.innerHTML = "Searching...";
    contentDiv.innerHTML = "";

    try {
      const [synRes, antRes] = await Promise.all([
        fetch(
          `https://api.datamuse.com/words?rel_syn=${encodeURIComponent(
            query
          )}&max=20`
        ),
        fetch(
          `https://api.datamuse.com/words?rel_ant=${encodeURIComponent(
            query
          )}&max=20`
        ),
      ]);

      const synData = await synRes.json();
      const antData = await antRes.json();

      resultsDiv.innerHTML = "";

      let html = `<h2>Thesaurus for "${query}"</h2>`;

      if (synData.length) {
        html +=
          `<h3>Synonyms</h3><ul>` +
          synData.map((w) => `<li>${w.word}</li>`).join("") +
          `</ul>`;
      } else {
        html += `<h3>Synonyms</h3><p><i>No synonyms found.</i></p>`;
      }

      if (antData.length) {
        html +=
          `<h3>Antonyms</h3><ul>` +
          antData.map((w) => `<li>${w.word}</li>`).join("") +
          `</ul>`;
      } else {
        html += `<h3>Antonyms</h3><p><i>No antonyms found.</i></p>`;
      }

      contentDiv.innerHTML = html;

if (query && typeof window !== "undefined") {
  const param = encodeURIComponent(query.trim());
  const newUrl = `${window.location.pathname}?thesaurus=${param}`;
  window.history.replaceState({}, "", newUrl);
}

    }
     catch (e) {
      resultsDiv.innerHTML = "<i>Error fetching thesaurus data.</i>";
    }
  }

  function getBookmarks() {
  try {
    return JSON.parse(localStorage.getItem("compendium-bookmarks") || "[]");
  } catch {
    return [];
  }
}

function saveBookmarks(arr) {
  localStorage.setItem("compendium-bookmarks", JSON.stringify(arr));
}

function addBookmark(obj) {
  const arr = getBookmarks();
  if (!arr.some(b => b.title === obj.title)) {
    arr.push(obj);
    saveBookmarks(arr);
  }
}

function removeBookmark(title) {
  let arr = getBookmarks();
  arr = arr.filter(b => b.title !== title);
  saveBookmarks(arr);
}

function renderBookmarks() {
  const arr = getBookmarks();
  if (!arr.length) return `<div style="text-align:center;margin-top:2em;"><span class="material-symbols-rounded" style="font-size:2em;color:var(--accent-color);">bookmarks</span><br><i>No bookmarks yet.</i></div>`;
  return `<h2><span class="material-symbols-rounded" style="vertical-align:middle;">bookmarks</span> Bookmarked Articles</h2>
    <ul style="list-style:none;padding-left:0;">${
      arr.map(b => `
        <li style="margin-bottom:1em;">
          <a href="#" class="bookmark-title-link" data-title="${b.title}" style="font-weight:bold;font-size:1.1em;color:var(--accent-color,royalblue);text-decoration:underline;cursor:pointer;">${b.title}</a>
          <button class="remove-bookmark-btn" data-title="${b.title}" title="Remove bookmark" style="margin-left:12px;background:var(--accent-color);color:white;border:none;border-radius:25px;padding:4px 10px;cursor:pointer;font-size:1.2em;display:inline-flex;align-items:center;">
            <span class="material-symbols-rounded" style="font-size:1.3em;">bookmark_remove</span>
          </button>
        </li>
      `).join("")
    }</ul>`;
}

async function loadWeather() {
  contentDiv.innerHTML = `
   <div class="input-group">
      <input type="text" id="location-input" placeholder="Enter ZIP or City">
      <button id="get-weather-btn">Get Weather</button>
    </div>
    <div class="unit-toggle">
      <span>Metric</span>
      <label class="switch">
        <input type="checkbox" id="unit-toggle">
        <span class="slider"></span>
      </label>
      <span>Imperial</span>
    </div>
    <div id="weather-output" class="weather-card" style="text-align:center;">
      <i>Enter a location to get weather.</i>
    </div>
  `;

  let lastWeatherLocation = "";
  let lastWeatherUnit = false; // false = metric, true = imperial
  let weatherRefreshTimer = null;

  const input = document.getElementById("location-input");
  const button = document.getElementById("get-weather-btn");
  const output = document.getElementById("weather-output");
  const unitToggle = document.getElementById("unit-toggle");

  const windDirDegrees = {
    N: 0, NNE: 22.5, NE: 45, ENE: 67.5,
    E: 90, ESE: 112.5, SE: 135, SSE: 157.5,
    S: 180, SSW: 202.5, SW: 225, WSW: 247.5,
    W: 270, WNW: 292.5, NW: 315, NNW: 337.5,
  };

  const weatherIcons = {
    Clear: "wb_sunny",
    "Partly cloudy": "partly_cloudy_day",
    Overcast: "cloud_queue",
    Cloudy: "cloud",
    Fog: "foggy",
    Mist: "foggy",
    Drizzle: "rainy",
    Rain: "rainy",
    Snow: "snowing",
    Thunderstorm: "thunderstorm",
    default: "wb_cloudy",
  };

  const weatherCodeDescriptions = {
    0: "Clear sky", 1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast",
    45: "Fog", 48: "Depositing rime fog", 51: "Light drizzle",
    53: "Moderate drizzle", 55: "Dense drizzle", 56: "Light freezing drizzle",
    57: "Dense freezing drizzle", 61: "Slight rain", 63: "Moderate rain",
    65: "Heavy rain", 66: "Light freezing rain", 67: "Heavy freezing rain",
    71: "Slight snowfall", 73: "Moderate snowfall", 75: "Heavy snowfall",
    77: "Snow grains", 80: "Slight rain showers", 81: "Moderate rain showers",
    82: "Violent rain showers", 85: "Slight snow showers", 86: "Heavy snow showers",
    95: "Thunderstorm", 96: "Thunderstorm with slight hail", 99: "Thunderstorm with heavy hail"
  };

  function describeWeather(code) {
    return weatherCodeDescriptions[code] || `Unknown (${code})`;
  }

  function getWindDirection(degrees) {
    const dirs = Object.entries(windDirDegrees);
    let closest = "N";
    let minDiff = 360;
    for (const [dir, deg] of dirs) {
      const diff = Math.abs(deg - degrees);
      if (diff < minDiff) {
        minDiff = diff;
        closest = dir;
      }
    }
    return closest;
  }

  function getWeatherIcon(desc) {
    for (const key in weatherIcons) {
      if (desc.toLowerCase().includes(key.toLowerCase()))
        return weatherIcons[key];
    }
    return weatherIcons["default"];
  }

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.toLocaleString("en-GB", { month: "short" });
  const weekday = date.toLocaleString("en-GB", { weekday: "short" });
  const year = date.getFullYear();

  function getOrdinalSuffix(n) {
    if (n >= 11 && n <= 13) return "th";
    switch (n % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  }

  return `${weekday}, ${day}${getOrdinalSuffix(day)} ${month}, ${year}`;
}


  async function fetchWeather(query, silent = false) {
    if (!query) {
      output.innerHTML = `<i>Please enter a location.</i>`;
      return;
    }

    if (!silent) {
      output.innerHTML = `
      <span class="material-symbols-rounded loading-spinner">autorenew</span>
      <div>Loading weather...</div>`;
  }

    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1`
      );
      const geoData = await geoRes.json();
      if (!geoData.results || geoData.results.length === 0)
        throw new Error("Location not found.");

      const loc = geoData.results[0];
      const lat = loc.latitude;
      const lon = loc.longitude;
      const locationName = `${loc.name}${loc.admin1 ? ", " + loc.admin1 : ""}${loc.country ? ", " + loc.country : ""}`;
      const useImperial = unitToggle.checked;

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`
      );
      const weatherData = await weatherRes.json();
      const cw = weatherData.current_weather;

      const desc = describeWeather(cw.weathercode);
      const iconName = getWeatherIcon(desc);

      const tempC = cw.temperature;
      const windKmph = cw.windspeed;
      const windDirDeg = cw.winddirection;
      const windDir = getWindDirection(windDirDeg);

      const temp = useImperial
        ? `${Math.ceil((tempC * 9) / 5 + 32)}°F`
        : `${Math.ceil(tempC)}°C`;

      const windSpeed = useImperial
        ? (windKmph * 0.621371).toFixed(1)
        : windKmph.toFixed(1);

      const windUnit = useImperial ? "mph" : "km/h";

      const todayStr = new Date().toLocaleDateString('en-CA'); // Local timezone, format: YYYY-MM-DD

      let forecastHTML = `<h4>3-Day Forecast</h4><div class="forecast-container">`;
      const daily = weatherData.daily;
      for (let i = 0; i < 3; i++) {
        const dayRaw = daily.time[i];
        const formattedDate = formatDate(dayRaw);
        const maxC = daily.temperature_2m_max[i];
        const minC = daily.temperature_2m_min[i];
        const weatherCode = daily.weathercode[i];
        const weatherDesc = describeWeather(weatherCode);
        const forecastIcon = getWeatherIcon(weatherDesc);

        const max = useImperial
          ? `${Math.ceil((maxC * 9) / 5 + 32)}°F`
          : `${Math.ceil(maxC)}°C`;
        const min = useImperial
          ? `${Math.ceil((minC * 9) / 5 + 32)}°F`
          : `${Math.ceil(minC)}°C`;

        const todayId = i === 1 ? `id="today-forecast"` : "";


        forecastHTML += `
          <div class="forecast-day" ${todayId}>
            <strong>${formattedDate}</strong>
            <span class="material-symbols-rounded weather-icon">${forecastIcon}</span><br>
            ${weatherDesc}<br>
            High: ${max}<br>
            Low: ${min}
          </div>`;
      }
      forecastHTML += `</div>`;

      lastWeatherLocation = query;
      lastWeatherUnit = unitToggle.checked;

      output.innerHTML = `
  <div class="weather-header">
    <h3>Weather in ${locationName}</h3>
  </div>
  <p><strong>${desc}</strong></p>
  <span class="material-symbols-rounded weather-icon">${iconName}</span>
  <p>Temperature: ${temp}</p>
  <p>Wind: ${windSpeed} ${windUnit} (${windDir})</p>
  <div class="wind-container" style="width:120px; margin:auto;">
    <svg class="wind-compass" viewBox="0 0 100 100" width="120" height="120" aria-label="Wind direction compass" role="img">
      <circle cx="50" cy="50" r="48" fill="none" stroke="#666" stroke-width="2"/>
      <line x1="80" y1="20" x2="72" y2="28" stroke="#666" stroke-width="1.5"/>
      <line x1="80" y1="80" x2="72" y2="72" stroke="#666" stroke-width="1.5"/>
      <line x1="20" y1="80" x2="28" y2="72" stroke="#666" stroke-width="1.5"/>
      <line x1="20" y1="20" x2="28" y2="28" stroke="#666" stroke-width="1.5"/>
      <text x="50" y="25" text-anchor="middle" font-weight="bold" font-size="14" fill="#666" font-family="sans-serif">N</text>
      <text x="85" y="55" text-anchor="middle" font-weight="bold" font-size="14" fill="#666" font-family="sans-serif">E</text>
      <text x="50" y="85" text-anchor="middle" font-weight="bold" font-size="14" fill="#666" font-family="sans-serif">S</text>
      <text x="15" y="55" text-anchor="middle" font-weight="bold" font-size="14" fill="#666" font-family="sans-serif">W</text>
      <circle cx="50" cy="50" r="6" fill="var(--accent-color)"/>
      <g transform="rotate(${windDirDeg}, 50, 50)">
        <polygon points="50,14 47,50 53,50" fill="var(--accent-color)" stroke="var(--accent-color)" stroke-width="2"/>
      </g>
    </svg>
  </div>
  <div class="forecast">${forecastHTML}</div>
`;

if (query && typeof window !== "undefined") {
  const param = encodeURIComponent(query.trim());
  const newUrl = `${window.location.pathname}?weather=${param}`;
  window.history.replaceState({}, "", newUrl);
}

  } catch (err) {
    if (!silent) {
      output.innerHTML = `<i>Could not load weather. Try a ZIP code if City doesn't work.</i>`;
    }
    // If silent, do not change the UI on error
  }
}

  button.addEventListener("click", () => fetchWeather(input.value));
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") fetchWeather(input.value);
  });

  unitToggle.addEventListener("change", () => {
    if (input.value.trim()) {
      fetchWeather(input.value);
    }
  });

  // Clear any previous timer
if (weatherRefreshTimer) clearInterval(weatherRefreshTimer);

// Set up auto-refresh every 2 minutes (120,000 ms)
weatherRefreshTimer = setInterval(() => {
  if (lastWeatherLocation) {
    unitToggle.checked = lastWeatherUnit;
    fetchWeather(lastWeatherLocation, true); // silent refresh
  }
}, 120000); // 2 minutes
}



async function compoundSearch(query) {
  if (!query) {
    resultsDiv.innerHTML = "";
    contentDiv.innerHTML = "";
    return;
  }
  resultsDiv.innerHTML = "Searching all sources...";
  contentDiv.innerHTML = "";

  try {
    // Run all three searches in parallel
    const [wiki, dic, thes] = await Promise.all([
      (async () => {
        try {
          const res = await fetch(
            `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=${encodeURIComponent(query)}&utf8=1&srlimit=5`
          );
          const data = await res.json();
          return data.query.search || [];
        } catch { return []; }
      })(),
      (async () => {
        try {
          const res = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(query)}`
          );
          if (!res.ok) return null;
          const data = await res.json();
          return data[0] || null;
        } catch { return null; }
      })(),
      (async () => {
        try {
          const [synRes, antRes] = await Promise.all([
            fetch(`https://api.datamuse.com/words?rel_syn=${encodeURIComponent(query)}&max=20`),
            fetch(`https://api.datamuse.com/words?rel_ant=${encodeURIComponent(query)}&max=20`)
          ]);
          const syn = await synRes.json();
          const ant = await antRes.json();
          return { syn, ant };
        } catch { return { syn: [], ant: [] }; }
      })()
    ]);

    let html = "";

    // Wikipedia
    html += `<h2><span class="material-symbols-rounded" style="vertical-align:middle;">language</span> Wikipedia</h2>`;
    if (wiki.length) {
      html += "<ul>";
      wiki.forEach(item => {
        // Title as clickable link
        html += `<li>
          <a href="#" class="compound-wiki-link" data-title="${encodeURIComponent(item.title)}" style="font-weight:bold; color:var(--accent-color,royalblue); text-decoration:underline; cursor:pointer;">
            ${item.title}
          </a>
          <br>
          <span style="font-size:0.95em;">${item.snippet.replace(/<\/?span[^>]*>/g, "")}</span>
        </li>`;
      });
      html += "</ul>";
    } else {
      html += "<i>No Wikipedia results found.</i>";
    }

    // Dictionary (full)
    html += `<h2 style="margin-top:1.5em;"><span class="material-symbols-rounded" style="vertical-align:middle;">dictionary</span> Dictionary</h2>`;
    if (dic) {
      html += `<h3 style="margin-top:0;">${dic.word}</h3>`;
      if (dic.phonetics && dic.phonetics.length) {
        html += `<p><i>Pronunciations:</i></p><ul style="margin-top: 0; margin-bottom: 1em;">`;
        dic.phonetics.forEach((phon) => {
          if (phon.text) html += `<li>${phon.text}`;
          if (phon.audio) {
            html += ` <button class="play-btn" onclick="new Audio('${phon.audio}').play()" aria-label="Play pronunciation">play_arrow</button>`;
          }
          html += `</li>`;
        });
        html += `</ul>`;
      }
      if (dic.meanings && dic.meanings.length) {
        dic.meanings.forEach((meaning) => {
          html += `<h4 style="margin-bottom: 0;">${meaning.partOfSpeech}</h4><ul>`;
          meaning.definitions.forEach((def) => {
            html += `<li>${def.definition}`;
            if (def.example) html += `<br><em>Example: ${def.example}</em>`;
            html += `</li>`;
          });
          html += `</ul>`;
        });
      }
    } else {
      html += "<i>No dictionary entry found.</i>";
    }

    // Thesaurus (full)
    html += `<h2 style="margin-top:1.5em;"><span class="material-symbols-rounded" style="vertical-align:middle;">library_books</span> Thesaurus</h2>`;
    if ((thes.syn && thes.syn.length) || (thes.ant && thes.ant.length)) {
      if (thes.syn && thes.syn.length) {
        html += `<h4>Synonyms</h4><ul>`;
        html += thes.syn.map(w => `<li>${w.word}</li>`).join("");
        html += `</ul>`;
      } else {
        html += `<h4>Synonyms</h4><p><i>No synonyms found.</i></p>`;
      }
      if (thes.ant && thes.ant.length) {
        html += `<h4>Antonyms</h4><ul>`;
        html += thes.ant.map(w => `<li>${w.word}</li>`).join("");
        html += `</ul>`;
      } else {
        html += `<h4>Antonyms</h4><p><i>No antonyms found.</i></p>`;
      }
    } else {
      html += "<i>No synonyms or antonyms found.</i>";
    }

    resultsDiv.innerHTML = "";
    contentDiv.innerHTML = html;

    // Add event listeners to Wikipedia links
    contentDiv.querySelectorAll('.compound-wiki-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const title = decodeURIComponent(link.getAttribute('data-title'));
        switchTab('wiki');
        searchInput.value = title;
        wikiLoadArticle(title);
      });
    });

    injectPlayButtonStyles();

  } catch {
    resultsDiv.innerHTML = "<i>Error fetching compound search results.</i>";
    contentDiv.innerHTML = "";
  }
}


function loadSettings() {
  // Get current theme values or defaults
  const accentColor = app.style.getPropertyValue("--accent-color") || "royalblue";
  const textColor = app.style.getPropertyValue("--text-color") || "#000000";
  const bgColor = app.style.getPropertyValue("--bg-color") || "#ffffff";

  settingsDiv.innerHTML = `
    <div class="setting-item">
      <label for="dark-mode-toggle">Dark Mode</label>
      <label class="toggle-switch">
        <input type="checkbox" id="dark-mode-toggle" ${darkMode ? "checked" : ""} ${localStorage.getItem("custom-theme") ? "disabled" : ""}>
        <span class="toggle-slider"></span>
      </label>
    </div>
    <div class="setting-item">
      <label for="font-size-range">Text Size (${fontSize}px)</label>
      <input type="range" id="font-size-range" min="10" max="25" value="${fontSize}">
    </div>
    <div class="setting-item" style="flex-direction:column;align-items:flex-start;">
      <div style="font-weight:bold;margin-bottom:6px;">Theme</div>
      <label style="margin-bottom:4px;">Accent Color: <input type="color" id="accent-color-picker" value="${accentColor.trim() || "#4169e1"}"></label>
      <label style="margin-bottom:4px;">Text Color: <input type="color" id="text-color-picker" value="${textColor.trim() || "#000000"}"></label>
      <label style="margin-bottom:4px;">Background Color: <input type="color" id="bg-color-picker" value="${bgColor.trim() || "#ffffff"}"></label>
      <button id="reset-theme-btn" style="margin-top:6px; font-family: var(--text-font, 'Roboto'), sans-serif;">Reset to Default</button>
      <div style="font-size:0.9em;color:#888;margin-top:2px;">Custom theme disables dark mode toggle.</div>
    </div>
    <div class="setting-item font-family-settings">
      <label for="font-family-search">Search Fonts:</label>
      <input type="text" id="font-family-search" placeholder="Type to filter fonts…" autocomplete="off" style="font-family: var(--text-font, 'Roboto'), sans-serif;" />
      <label for="font-family-select">Font Family:</label>
      <select id="font-family-select" class="font-selector" size="10">
        <optgroup label="Sans-Serif">
          <option value="Roboto" style="font-family:Roboto, sans-serif; background: var(--bg-color); color: var(--text-color);">Roboto</option>
          <option value="'Open Sans', sans-serif" style="font-family:'Open Sans', sans-serif; background: var(--bg-color); color: var(--text-color);">Open Sans</option>
          <option value="'Montserrat', sans-serif" style="font-family:'Montserrat', sans-serif; background: var(--bg-color); color: var(--text-color);">Montserrat</option>
          <option value="'Lato', sans-serif" style="font-family:'Lato', sans-serif; background: var(--bg-color); color: var(--text-color);">Lato</option>
          <option value="'Nunito', sans-serif" style="font-family:'Nunito', sans-serif; background: var(--bg-color); color: var(--text-color);">Nunito</option>
          <option value="'Quicksand', sans-serif" style="font-family:'Quicksand', sans-serif; background: var(--bg-color); color: var(--text-color);">Quicksand</option>
          <option value="'Raleway', sans-serif" style="font-family:'Raleway', sans-serif; background: var(--bg-color); color: var(--text-color);">Raleway</option>
          <option value="'Work Sans', sans-serif" style="font-family:'Work Sans', sans-serif; background: var(--bg-color); color: var(--text-color);">Work Sans</option>
          <option value="'Source Sans 3', sans-serif" style="font-family:'Source Sans 3', sans-serif; background: var(--bg-color); color: var(--text-color);">Source Sans 3</option>
          <option value="'Ubuntu', sans-serif" style="font-family:'Ubuntu', sans-serif; background: var(--bg-color); color: var(--text-color);">Ubuntu</option>
          <option value="'Inter', sans-serif" style="font-family:'Inter', sans-serif; background: var(--bg-color); color: var(--text-color);">Inter</option>
          <option value="'Mulish', sans-serif" style="font-family:'Mulish', sans-serif; background: var(--bg-color); color: var(--text-color);">Mulish</option>
          <option value="'Cabin', sans-serif" style="font-family:'Cabin', sans-serif; background: var(--bg-color); color: var,--text-color);">Cabin</option>
          <option value="'Barlow', sans-serif" style="font-family:'Barlow', sans-serif; background: var(--bg-color); color: var(--text-color);">Barlow</option>
          <option value="'Asap', sans-serif" style="font-family:'Asap', sans-serif; background: var(--bg-color); color: var(--text-color);">Asap</option>
          <option value="'Karla', sans-serif" style="font-family:'Karla', sans-serif; background: var(--bg-color); color: var(--text-color);">Karla</option>
          <option value="'Manrope', sans-serif" style="font-family:'Manrope', sans-serif; background: var(--bg-color); color: var(--text-color);">Manrope</option>
          <option value="'Titillium Web', sans-serif" style="font-family:'Titillium Web', sans-serif; background: var(--bg-color); color: var(--text-color);">Titillium Web</option>
          <option value="'Exo 2', sans-serif" style="font-family:'Exo 2', sans-serif; background: var(--bg-color); color: var(--text-color);">Exo 2</option>
          <option value="'Signika', sans-serif" style="font-family:'Signika', sans-serif; background: var(--bg-color); color: var(--text-color);">Signika</option>
          <option value="'Hind', sans-serif" style="font-family:'Hind', sans-serif; background: var(--bg-color); color: var(--text-color);">Hind</option>
          <option value="'Archivo', sans-serif" style="font-family:'Archivo', sans-serif; background: var(--bg-color); color: var(--text-color);">Archivo</option>
          <option value="'Questrial', sans-serif" style="font-family:'Questrial', sans-serif; background: var(--bg-color); color: var,--text-color);">Questrial</option>
          <option value="'Heebo', sans-serif" style="font-family:'Heebo', sans-serif; background: var(--bg-color); color: var(--text-color);">Heebo</option>
          <option value="'Fira Sans', sans-serif" style="font-family:'Fira Sans', sans-serif; background: var(--bg-color); color: var(--text-color);">Fira Sans</option>
          <option value="'Assistant', sans-serif" style="font-family:'Assistant', sans-serif; background: var(--bg-color); color: var(--text-color);">Assistant</option>
          <option value="'Lexend', sans-serif" style="font-family:'Lexend', sans-serif; background: var(--bg-color); color: var(--text-color);">Lexend</option>
          <option value="'Public Sans', sans-serif" style="font-family:'Public Sans', sans-serif; background: var(--bg-color); color: var(--text-color);">Public Sans</option>
          <option value="'DM Sans', sans-serif" style="font-family:'DM Sans', sans-serif; background: var(--bg-color); color: var(--text-color);">DM Sans</option>
          <option value="'OpenDyslexic', sans-serif" style="font-family:'OpenDyslexic', sans-serif; background: var(--bg-color); color: var(--text-color);">OpenDyslexic</option>
        </optgroup>
        <optgroup label="Serif">
          <option value="'EB Garamond', serif" style="font-family:'EB Garamond', serif; background: var(--bg-color); color: var,--text-color);">EB Garamond</option>
          <option value="'Merriweather', serif" style="font-family:'Merriweather', serif; background: var(--bg-color); color: var(--text-color);">Merriweather</option>
          <option value="'Playfair Display', serif" style="font-family:'Playfair Display', serif; background: var(--bg-color); color: var(--text-color);">Playfair Display</option>
          <option value="'Roboto Serif', serif" style="font-family:'Roboto Serif', serif; background: var(--bg-color); color: var(--text-color);">Roboto Serif</option>
          <option value="'PT Serif', serif" style="font-family:'PT Serif', serif; background: var(--bg-color); color: var(--text-color);">PT Serif</option>
          <option value="'Crimson Text', serif" style="font-family:'Crimson Text', serif; background: var(--bg-color); color: var(--text-color);">Crimson Text</option>
          <option value="'Libre Baskerville', serif" style="font-family:'Libre Baskerville', serif; background: var(--bg-color); color: var(--text-color);">Libre Baskerville</option>
          <option value="'Source Serif 4', serif" style="font-family:'Source Serif 4', serif; background: var(--bg-color); color: var,--text-color);">Source Serif 4</option>
          <option value="'Domine', serif" style="font-family:'Domine', serif; background: var(--bg-color); color: var(--text-color);">Domine</option>
          <option value="'Spectral', serif" style="font-family:'Spectral', serif; background: var(--bg-color); color: var(--text-color);">Spectral</option>
          <option value="'Cardo', serif" style="font-family:'Cardo', serif; background: var(--bg-color); color: var(--text-color);">Cardo</option>
          <option value="'Vollkorn', serif" style="font-family:'Vollkorn', serif; background: var(--bg-color); color: var(--text-color);">Vollkorn</option>
          <option value="'Crete Round', serif" style="font-family:'Crete Round', serif; background: var(--bg-color); color: var,--text-color);">Crete Round</option>
          <option value="'Arvo', serif" style="font-family:'Arvo', serif; background: var(--bg-color); color: var(--text-color);">Arvo</option>
          <option value="'Old Standard TT', serif" style="font-family:'Old Standard TT', serif; background: var(--bg-color); color: var(--text-color);">Old Standard TT</option>
          <option value="'Prata', serif" style="font-family:'Prata', serif; background: var(--bg-color); color: var(--text-color);">Prata</option>
          <option value="'Zilla Slab', serif" style="font-family:'Zilla Slab', serif; background: var(--bg-color); color: var(--text-color);">Zilla Slab</option>
          <option value="'Alice', serif" style="font-family:'Alice', serif; background: var(--bg-color); color: var(--text-color);">Alice</option>
          <option value="'Gloock', serif" style="font-family:'Gloock', serif; background: var(--bg-color); color: var(--text-color);">Gloock</option>
          <option value="'Trirong', serif" style="font-family:'Trirong', serif; background: var(--bg-color); color: var(--text-color);">Trirong</option>
          <option value="'Noticia Text', serif" style="font-family:'Noticia Text', serif; background: var(--bg-color); color: var(--text-color);">Noticia Text</option>
          <option value="'Abhaya Libre', serif" style="font-family:'Abhaya Libre', serif; background: var(--bg-color); color: var(--text-color);">Abhaya Libre</option>
          <option value="'Libre Caslon Text', serif" style="font-family:'Libre Caslon Text', serif; background: var(--bg-color); color: var(--text-color);">Libre Caslon Text</option>
          <option value="'Martel', serif" style="font-family:'Martel', serif; background: var(--bg-color); color: var(--text-color);">Martel</option>
        </optgroup>
        <optgroup label="Monospace">
          <option value="'Fira Mono', monospace" style="font-family:'Fira Mono', monospace; background: var(--bg-color); color: var(--text-color);">Fira Mono</option>
          <option value="'JetBrains Mono', monospace" style="font-family:'JetBrains Mono', monospace; background: var(--bg-color); color: var(--text-color);">JetBrains Mono</option>
          <option value="'Roboto Mono', monospace" style="font-family:'Roboto Mono', monospace; background: var(--bg-color); color: var(--text-color);">Roboto Mono</option>
          <option value="'Source Code Pro', monospace" style="font-family:'Source Code Pro', monospace; background: var(--bg-color); color: var(--text-color);">Source Code Pro</option>
          <option value="'IBM Plex Mono', monospace" style="font-family:'IBM Plex Mono', monospace; background: var(--bg-color); color: var(--text-color);">IBM Plex Mono</option>
          <option value="'Space Mono', monospace" style="font-family:'Space Mono', monospace; background: var(--bg-color); color: var(--text-color);">Space Mono</option>
          <option value="'Cascadia Code', monospace" style="font-family:'Cascadia Code', monospace; background: var(--bg-color); color: var(--text-color);">Cascadia Code</option>
          <option value="'Inconsolata', monospace" style="font-family:'Inconsolata', monospace; background: var(--bg-color); color: var(--text-color);">Inconsolata</option>
          <option value="'Ubuntu Mono', monospace" style="font-family:'Ubuntu Mono', monospace; background: var(--bg-color); color: var(--text-color);">Ubuntu Mono</option>
          <option value="'Anonymous Pro', monospace" style="font-family:'Anonymous Pro', monospace; background: var(--bg-color); color: var(--text-color);">Anonymous Pro</option>
          <option value="'Share Tech Mono', monospace" style="font-family:'Share Tech Mono', monospace; background: var(--bg-color); color: var(--text-color);">Share Tech Mono</option>
          <option value="'Cutive Mono', monospace" style="font-family:'Cutive Mono', monospace; background: var(--bg-color); color: var(--text-color);">Cutive Mono</option>
          <option value="'Oxygen Mono', monospace" style="font-family:'Oxygen Mono', monospace; background: var(--bg-color); color: var(--text-color);">Oxygen Mono</option>
          <option value="'Overpass Mono', monospace" style="font-family:'Overpass Mono', monospace; background: var(--bg-color); color: var(--text-color);">Overpass Mono</option>
          <option value="'Major Mono Display', monospace" style="font-family:'Major Mono Display', monospace; background: var(--bg-color); color: var(--text-color);">Major Mono Display</option>
          <option value="'Nanum Gothic Coding', monospace" style="font-family:'Nanum Gothic Coding', monospace; background: var(--bg-color); color: var(--text-color);">Nanum Gothic Coding</option>
          <option value="'Red Hat Mono', monospace" style="font-family:'Red Hat Mono', monospace; background: var(--bg-color); color: var(--text-color);">Red Hat Mono</option>
          <option value="'VT323', monospace" style="font-family:'VT323', monospace; background: var(--bg-color); color: var(--text-color);">VT323</option>
          <option value="'Syne Mono', monospace" style="font-family:'Syne Mono', monospace; background: var(--bg-color); color: var(--text-color);">Syne Mono</option>
          <option value="'Recursive', monospace" style="font-family:'Recursive', monospace; background: var(--bg-color); color: var(--text-color);">Recursive</option>
          <option value="'Nova Mono', monospace" style="font-family:'Nova Mono', monospace; background: var(--bg-color); color: var(--text-color);">Nova Mono</option>
          <option value="'Enriqueta', monospace" style="font-family:'Enriqueta', monospace; background: var(--bg-color); color: var(--text-color);">Enriqueta</option>
          <option value="'Special Elite', monospace" style="font-family:'Special Elite', monospace; background: var(--bg-color); color: var(--text-color);">Special Elite</option>
          <option value="'Mononoki', monospace" style="font-family:'Mononoki', monospace; background: var(--bg-color); color: var(--text-color);">Mononoki</option>
          <option value="'IBM Plex Mono', monospace" style="font-family:'IBM Plex Mono', monospace; background: var(--bg-color); color: var(--text-color);">IBM Plex Mono</option>
          <option value="'PT Mono', monospace" style="font-family:'PT Mono', monospace; background: var(--bg-color); color: var(--text-color);">PT Mono</option>
          <option value="'Fira Code', monospace" style="font-family:'Fira Code', monospace; background: var(--bg-color); color: var(--text-color);">Fira Code</option>
          <option value="'Anonymous Pro', monospace" style="font-family:'Anonymous Pro', monospace; background: var(--bg-color); color: var(--text-color);">Anonymous Pro</option>
          <option value="'Courier Prime', monospace" style="font-family:'Courier Prime', monospace; background: var(--bg-color); color: var(--text-color);">Courier Prime</option>
        </optgroup>
      </select>
    </div>
<div class="dropdown">
  <button class="dropdown-button">Versions</button>
  <div class="dropdown-content">
    <div class="dropdown-warning">
      <span class="material-symbols-rounded warning-icon">warning</span>
      These past versions may be buggy, unstable, and may try to unionize. Proceed with caution.
    </div>
    <a href="https://www.compendiumofeverything.org/versions/beta/">Beta 1.0</a>
    <a href="https://www.compendiumofeverything.org/versions/beta/1.1/">Beta 1.1</a>
    <a href="https://www.compendiumofeverything.org/versions/beta/1.2/">Beta 1.2</a>
    <a href="https://www.compendiumofeverything.org/versions/beta/1.3/">Beta 1.3</a>
    <a href="https://www.compendiumofeverything.org/versions/beta/1.4/">Beta 1.4</a>
    <a href="https://www.compendiumofeverything.org/versions/beta/1.5/">Beta 1.5</a>
    <a href="https://www.compendiumofeverything.org/versions/beta/1.6/">Beta 1.6</a>
    <a href="https://www.compendiumofeverything.org/versions/2.0/">2.0</a>
    <a href="https://www.compendiumofeverything.org/versions/2.1/">2.1</a>
    <a href="https://www.compendiumofeverything.org/versions/2.2/">2.2</a>
    <a href="https://www.compendiumofeverything.org/versions/2.3/">2.3</a>
  </div>
</div>


`;

  // Theme pickers logic
  const accentPicker = document.getElementById("accent-color-picker");
  const textPicker = document.getElementById("text-color-picker");
  const bgPicker = document.getElementById("bg-color-picker");
  const resetBtn = document.getElementById("reset-theme-btn");
  const darkModeToggle = document.getElementById("dark-mode-toggle");

  function setThemeVars(accent, text, bg) {
    app.style.setProperty("--accent-color", accent);
    app.style.setProperty("--text-color", text);
    app.style.setProperty("--bg-color", bg);
    localStorage.setItem("custom-theme", JSON.stringify({accent, text, bg}));
    // Disable dark mode toggle when custom theme is set
    darkModeToggle.disabled = true;
    app.classList.remove("dark");
    app.classList.add("light");
  }

function resetThemeVars() {
  // Remove inline custom theme variables so class-based ones take effect
  app.style.removeProperty("--accent-color");
  app.style.removeProperty("--text-color");
  app.style.removeProperty("--bg-color");
  localStorage.removeItem("custom-theme");
  darkModeToggle.disabled = false;
  darkModeToggle.removeAttribute("disabled");
  darkModeToggle.checked = darkMode; // Sync toggle state with darkMode variable

  // Restore dark/light mode
  if (darkMode) {
    app.classList.add("dark");
    app.classList.remove("light");
  } else {
    app.classList.remove("dark");
    app.classList.add("light");
  }

  // Force a change event to ensure the UI and logic are in sync
  const event = new Event('change', { bubbles: true });
  darkModeToggle.dispatchEvent(event);
}
  accentPicker.addEventListener("input", () => {
    setThemeVars(accentPicker.value, textPicker.value, bgPicker.value);
  });
  textPicker.addEventListener("input", () => {
    setThemeVars(accentPicker.value, textPicker.value, bgPicker.value);
  });
  bgPicker.addEventListener("input", () => {
    setThemeVars(accentPicker.value, textPicker.value, bgPicker.value);
  });
resetBtn.addEventListener("click", () => {
  resetThemeVars();
  accentPicker.value = "#4169e1";
  textPicker.value = "#000000";
  bgPicker.value = "#ffffff";
});

  // On load, apply custom theme if present
  const savedTheme = localStorage.getItem("custom-theme");
  if (savedTheme) {
    const {accent, text, bg} = JSON.parse(savedTheme);
    setThemeVars(accent, text, bg);
    accentPicker.value = accent;
    textPicker.value = text;
    bgPicker.value = bg;
  }

  // Font search filter
  const searchInput = document.getElementById('font-family-search');
  const fontSelect = document.getElementById('font-family-select');
  searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    for (const option of fontSelect.options) {
      if (option.tagName === 'OPTION') {
        const text = option.textContent.toLowerCase();
        option.style.display = text.includes(filter) ? '' : 'none';
      }
    }
  });
  

  // Dark mode toggle
  settingsDiv
    .querySelector("#dark-mode-toggle")
    .addEventListener("change", (e) => {
      darkMode = e.target.checked;
      if (darkMode) {
        app.classList.add("dark");
        app.classList.remove("light");
      } else {
        app.classList.remove("dark");
        app.classList.add("light");
      }
    });

  // Font size slider
  settingsDiv
    .querySelector("#font-size-range")
    .addEventListener("input", (e) => {
      fontSize = e.target.value;
      app.style.setProperty("--font-size", `${fontSize}px`);
      e.target.previousElementSibling.textContent = `Text Size (${fontSize}px)`;
    });

  // Font family selector
  settingsDiv
    .querySelector("#font-family-select")
    .addEventListener("change", (e) => {
      fontFamily = e.target.value;
      app.style.setProperty("--text-font", fontFamily);
    });

  // Set font on load
  app.style.setProperty("--text-font", fontFamily);
}
  let debounceTimer;
  searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    const q = searchInput.value.trim();
    debounceTimer = setTimeout(() => {
      if (currentTab === "wiki") {
        wikiLoadArticles(q);
      } else if (currentTab === "dic") {
        dicSearch(q);
      } else if (currentTab === "thes") {
        thesSearch(q);
      } else if (currentTab === "compound") {
        compoundSearch(q);
      }
    }, 400);
  });

  switchTab("wiki");

// Handle URL parameters for initial loading
function handleURLParams() {
  const params = new URLSearchParams(window.location.search);

  if (params.has("wikipedia")) {
    let article = params.get("wikipedia");
    article = article.replace(/-/g, " ");
    switchTab("wiki");
    searchInput.value = article;
    wikiLoadArticle(article);
  } else if (params.has("dictionary")) {
    const word = params.get("dictionary");
    switchTab("dic");
    searchInput.value = word;
    dicSearch(word);
  } else if (params.has("thesaurus")) {
    const word = params.get("thesaurus");
    switchTab("thesaurus");
    searchInput.value = word;
    thesSearch(word);
  } else if (params.has("weather")) {
    const location = params.get("weather");
    switchTab("weather");
    setTimeout(() => {
      const input = document.getElementById("location-input");
      if (input) {
        input.value = location;
        document.getElementById("get-weather-btn").click();
      }
    }, 500);
  } else if (params.has("comp")) {
    const word = params.get("comp");
    switchTab("compound");
    searchInput.value = word;
    compoundSearch(word);
  } else if (params.has("bookmarks")) {
    switchTab("bookmarks");
  } else if (params.has("settings")) {
    switchTab("settings");
    // Default to Wikipedia tab
    switchTab("wiki");
  }

}


handleURLParams();

  // Initialise theme
  app.classList.add("light");
  app.style.setProperty("--font-size", `${fontSize}px`);
  app.style.setProperty("--text-font", fontFamily);

})();

document.addEventListener("DOMContentLoaded", () => {
  const versionLabel = document.getElementById("versionLabel");
  const versionDetails = document.getElementById("versionDetails");

  const updates = `
    <div style="position: relative;">
      <strong>Bookmarklet Edition:</strong>
      <ul>
        <li>Made <i>The Compendium of Everything </i>into a Bookmarklet</li>
        <li>Updated changelog</li>
      </ul>
      <strong>Personal Note:</strong>
      <p>Recently, I've been having trouble coming up with ideas for new features, so if you have any ideas, please feel free to <a href="https://mail.google.com/mail/?view=cm&to=liamcsmalley@gmail.com&su=Compendium%20Ideas" target="_blank" style="color: var(--accent-color); text-decoration: none;">Email</a> me your ideas</p>
        <a href="https://github.com/Pidgeron/The-Compendium-of-Everything/tree/main" target="_blank" style="color: var(--accent-color); text-decoration: none;">View project on GitHub</a>
        <br>
        <a href="https://www.compendiumofeverything.org/versions/beta" target="_blank" style="color: var(--accent-color); text-decoration: none;">View Beta version</a>
      <p style="color: grey; font-family: var(--text-font); font-size: 0.9em;"">See Settings Tab for more past versions</p>
      <span id="closeUpdates" class="material-symbols-rounded" style="position: absolute; top: 6px; right: 10px; cursor: pointer; font-size: 1.4em; font-family: var(--text-font 'Roboto'), sans-serif;">close</span>
    </div>
  `;

  versionLabel.addEventListener("click", () => {
    if (versionDetails.style.display === "none" || !versionDetails.style.display) {
      versionDetails.innerHTML = updates;
      versionDetails.style.display = "block";

      const closeBtn = document.getElementById("closeUpdates");
      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          versionDetails.style.display = "none";
        });
      }
    } else {
      versionDetails.style.display = "none";
    }
  });
});



// About panel logic
const authorTitle = document.querySelector('.author-title');
const versionDetails = document.getElementById("versionDetails");

// Create about panel
const aboutPanel = document.createElement('div');
aboutPanel.id = "aboutPanel";
aboutPanel.className = "about-panel";
aboutPanel.style.display = "none";
aboutPanel.innerHTML = `
  <div style="position: relative;">
    <img src="https://cdn.compendiumofeverything.org/images/Compendium_Logo.png" alt="Compendium Logo" class="about-logo">
    <h2 style="margin-top:10px;">The Compendium of Everything</h2>
    <p>
      A multi-tool web app for quick access to Wikipedia, dictionary, thesaurus, weather, and more.<br>
      Created by <b>Liam C. Smalley</b>.<br>
      <span style="font-size:13px; color:#888;">Copyright &copy; 2025</span>
    </p>
    <span id="closeAbout" class="material-symbols-rounded about-close">close</span>
  </div>
`;

const aboutHTML = document.getElementById('compendium-app')
aboutHTML.appendChild(aboutPanel);

// Show/hide About panel, ensure only one panel is open
authorTitle.addEventListener("click", () => {
  // Hide version panel if open
  versionDetails.style.display = "none";
  // Toggle about panel
  aboutPanel.style.display = aboutPanel.style.display === "block" ? "none" : "block";
});

aboutPanel.querySelector("#closeAbout").addEventListener("click", () => {
  aboutPanel.style.display = "none";
});

// Hide about panel if version label is clicked
document.getElementById("versionLabel").addEventListener("click", () => {
  aboutPanel.style.display = "none";
});

//Copyright 2025 by L. Smalley
