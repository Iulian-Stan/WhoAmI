import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/solid.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/brands.min.css';
import '../node_modules/aos/dist/aos.css';
import '../node_modules/glightbox/dist/css/glightbox.min.css';
import './index.scss';
import App from './App';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
