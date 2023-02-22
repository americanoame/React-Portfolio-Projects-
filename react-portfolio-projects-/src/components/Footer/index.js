import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className='navbar d-flex justify-content-evenly'>
    <ul className="footer">          
          <li ><a href="" target="_blank"><FaLinkedin style={{ fontSize: '50px' }}/></a></li>
          <li ><a href="" target="_blank"><FaGithub style={{ fontSize: '50px' }}/></a></li>                
        </ul>
    <p className="text-center">Copyright © {new Date().getFullYear()} Andre Silva</p>
  </footer>
);

export default Footer;