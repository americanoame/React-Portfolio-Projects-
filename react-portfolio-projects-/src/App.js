import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './pages/About';
import Project from './pages/Project';

// import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/"
            element={<About />}
          />

          <Route
            path="/project"
            element={<Project />}
          />
          
            <Route
            path="/navbar"
            element={<Navbar/>}
          /> 

          {/* <Route
            path="/resume"
            element={<Resume />}
          />  */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
