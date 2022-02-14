import React from 'react';

function Header() {
  return (
    <header id='header'>
      <div className='container'>
        <h1>
          <a href='index.html'>Emily Jones</a>
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
              <a className='nav-link' href='#about'>
                About
              </a>
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
          <span className='twitter'>
            <i className='bi bi-twitter'></i>
          </span>
          <span className='facebook'>
            <i className='bi bi-facebook'></i>
          </span>
          <span className='instagram'>
            <i className='bi bi-instagram'></i>
          </span>
          <span className='linkedin'>
            <i className='bi bi-linkedin'></i>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
