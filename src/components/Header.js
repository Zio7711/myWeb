import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Header({ setShowTimeDelay }) {
  const [headerLocation, setHeaderLocation] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      setHeaderLocation('header-top');
      setShowTimeDelay(0);
    } else {
      setHeaderLocation('');
      setShowTimeDelay(350);
    }
  }, [location.pathname]);

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
              <Link
                to='/'
                className={
                  location.pathname === '/' ? 'nav-link active' : 'nav-link'
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className={
                  location.pathname === '/about'
                    ? 'nav-link active'
                    : 'nav-link'
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='/resume'
                className={
                  location.pathname === '/resume'
                    ? 'nav-link active'
                    : 'nav-link'
                }
              >
                Resume
              </Link>
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
