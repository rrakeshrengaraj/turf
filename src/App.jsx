import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/Landingpage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
// import AboutPage from './Pages/AboutPage';
// import RulesPage from './Pages/RulesPage';
// import GalleryPage from './Pages/GalleryPage';
// import ContactPage from './Pages/ContactPage';
// import NotFoundPage from './Pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />  */}
      </Routes>
    </Router>
  );
};

export default App;