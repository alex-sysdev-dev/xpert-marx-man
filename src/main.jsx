import React from 'react';
import ReactDOM from 'react-dom/client';
import '../portfolio-data.js';
import '../portfolio-hero.jsx';
import '../portfolio-sections.jsx';
import '../tweaks-panel.jsx';
import App from '../portfolio-app.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
