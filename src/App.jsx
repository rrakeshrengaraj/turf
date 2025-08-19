import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Navbar2 from './Components/Navbar2';
import LandingPage from './Pages/LandingPage';
import AboutPage from './Pages/AboutPage';
import RulesPage from './Pages/RulesPage';
import GalleryPage from './Pages/GalleryPage';
import ContactPage from './Pages/ContactPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import Registration from './Pages/Registration';

const MainContent = () => {
  return (
    <>
      <Header />
      <main >
        <LandingPage id="home" />
        <AboutPage id="about" />
        <RulesPage id="rules" />
        <GalleryPage id="gallery" />
        <ContactPage id="contact" />
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main single-page scrolling content */}
        <Route path="/" element={<MainContent />} />
        
        {/* Auth pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
};

export default App;