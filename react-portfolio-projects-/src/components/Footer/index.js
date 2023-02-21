import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => (
  <footer className="py-3">
    <ul className="contact">          
          <li ><a href="" target="_blank"><FaLinkedinIn style={{ fontSize: '50px' }}/></a></li>
          <li ><a href="" target="_blank"><FaGithub style={{ fontSize: '50px' }}/></a></li>                
        </ul>
    <p className="text-center">Copyright © {new Date().getFullYear()} Andre Silva</p>
  </footer>
);

export default Footer;