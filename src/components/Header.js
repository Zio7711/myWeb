import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [headerLocation, setHeaderLocation] = useState('');
  const redirect = () => {
    setHeaderLocation('header-top');
  };

  return (
    <header id='header' className={headerLocation}>
      <div className='container'>
        <h1>
          <a href='/'>Emily Jones</a>
        </h1>
        <h2>
          I'm a passionate <span>graphic designer</span> from New York
        </h2>

        <nav id='navbar' className='navbar'>
          <ul>
            <li>
              <a className='nav-link active' href='#header'>
                Home
              </a>
            </li>
            <li>
              <Link to='/about' onClick={redirect}>
                <a className='nav-link' href='/#about'>
                  About
                </a>
              </Link>
            </li>
            <li>
              <a className='nav-link' href='#resume'>
                Resume
              </a>
            </li>
            <li>
              <a className='nav-link' href='#services'>
                Services
              </a>
            </li>
            <li>
              <a className='nav-link' href='#portfolio'>
                Portfolio
              </a>
            </li>
            <li>
              <a className='nav-link' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
          <i className='bi bi-list mobile-nav-toggle'></i>
        </nav>

        <div className='social-links'>
          <a href='/' className='twitter'>
            <i className='bi bi-twitter'></i>
          </a>
          <a href='/' className='facebook'>
            <i className='bi bi-facebook'></i>
          </a>
          <a href='/' className='instagram'>
            <i className='bi bi-instagram'></i>
          </a>
          <a href='/' className='linkedin'>
            <i className='bi bi-linkedin'></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
