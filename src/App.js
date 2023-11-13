import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout.js'; // Make sure to import the new Layout component
import HomePage from './pages/HomePage';
import Skills from './components/Skills';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage.js';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/skills" element={<Skills />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Add more routes as needed */}
            </Routes>
          </Layout>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
