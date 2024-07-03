import React, { useState } from 'react';
import brandImage from '../../assets/icons/icons8-upload-to-the-cloud-48.png';
import search from '../../assets/icons/search.png';
import trash from '../../assets/icons/trash.png';
import account from '../../assets/icons/account.png';
import menuIcon from '../../assets/icons/download.png'; // Add an icon for the menu button
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='nav-contaner'>
      <div className='Nav-item'>
        <img src={brandImage} alt="Brand" />
      </div>
      <div className={`div-list ${menuOpen ? 'open' : ''}`}>
        <ul className='Nav-list'>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className='icon'> 
        <img src={search} alt="Search" />
        <img src={trash} alt="Trash" />
        <img src={account} alt="Account" />
      </div>
      <button className='menu-button' onClick={toggleMenu}>
        <img src={menuIcon} alt="Menu" />
      </button>
    </nav>
  );
};

export default Navbar;
