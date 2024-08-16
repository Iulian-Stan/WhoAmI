import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import '../node_modules/aos/dist/aos.css';
import './index.scss';
import App from './App';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
