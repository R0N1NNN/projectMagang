import React from "react";
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import 'animate.css';

import App from './App.jsx'
import ScrollToTop from "./components/ScrollToTop.jsx";

import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init({
  offset: 250,
  once: false,
  mirror: true,
});

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
