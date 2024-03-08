import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import LandingPage from "./pages/LandingPage";
import ContactUs from "./pages/contactUs/ContactUs";
import GenericPage from "./pages/genericPage/GenericPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/generic-page" element={<GenericPage />} />
      </Routes>
    </Router>
  );
}

export default App;
