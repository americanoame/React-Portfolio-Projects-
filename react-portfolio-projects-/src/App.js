import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Project from './pages/Project';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Project />} />
        <Route path="/" element={<Footer />} />



      </Routes>

    </Router>
  );
}

export default App;
