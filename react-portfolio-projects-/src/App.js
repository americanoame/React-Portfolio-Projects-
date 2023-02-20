import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from  './components/About';
import Project from  './components/Project';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/" element={<Project />} />
  
        
      </Routes>

    </Router>
  );
}

export default App;
