import React from 'react';
import brandImage from '../../assets/icons/icons8-upload-to-the-cloud-48.png';
import search from '../../assets/icons/search.png'
import trash from '../../assets/icons/trash.png'
import account from '../../assets/icons/account.png'
import './Navbar.css'
const Navbar = () => {
    return (
      <nav className='nav-contaner'>
        <div className='Nav-item'>
          <img src={brandImage} alt="Brand" />
        </div>
        <div className='div-list'>
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
            <img src={search} alt="" />
            <img src={trash} alt="" />
            <img src={account} alt="" />
        </div>
      </nav>
    );
  };
  
  export default Navbar;