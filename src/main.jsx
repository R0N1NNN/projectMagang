import React from "react";
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import './css/login.css';
import 'animate.css';
import { GoogleOAuthProvider } from '@react-oauth/google';


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

import { HashRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="617597158120-7aot5v7058n3tc8a4o4e5csq9m61o3j7.apps.googleusercontent.com">
      <HashRouter >
        <ScrollToTop />
        <App />
      </HashRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
)
