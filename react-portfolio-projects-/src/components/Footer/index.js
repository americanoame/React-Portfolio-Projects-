import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../../styles/Footer.css';

const Footer = () => (
  <footer className='navbar d-flex justify-content-evenly'>
    <ul className='footer'>          
          <li ><a href='https://www.linkedin.com/in/andre-silva-273085136/'rel="noopener noreferrer" target='_blank'><FaLinkedin style={{ fontSize: '50px' }}/></a></li>
          <li ><a href='https://github.com/americanoame' rel="noopener noreferrer" target='_blank'><FaGithub style={{ fontSize: '50px' }}/></a></li>                
        </ul>
    <p  id='copyright' className='text-center'>Copyright © {new Date().getFullYear()} Andre Silva</p>
  </footer>
);

export default Footer;