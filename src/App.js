import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Your component imports
import HomePage from './pages/HomePage';
/* import AboutPage from './pages/AboutPage'; */
/* import Contact from './pages/ContactPage'; */
import Navbar from './components/Navbar';
import Skills from './components/Skills';
/* import CurrentWork from './components/CurrentWork'; */

import './styles/App.css';




function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<Skills />} />
        {/* <Route path="/current-work" element={<CurrentWork />} /> */}
       
      </Routes>
    </div>
  </Router>
  );
}


export default App;