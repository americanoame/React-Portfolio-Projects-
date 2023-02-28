import React, {useState} from 'react';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Portfolio from './components/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('About');

   console.log(About)
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
        return <Contact />;
      }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    
      {renderPage()}
      <Footer />
    </div>
  );
}



