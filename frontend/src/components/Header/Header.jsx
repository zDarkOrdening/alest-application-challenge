import React from 'react';
import './Header.css';

function Header(props) {
  const handleTitleClick = () => {
    if (window.location.pathname !== '/') {
      window.location.href = '/';
    }
  };

  return (
    <header className='header'>
      <h1 onClick={handleTitleClick}>{props.title}</h1>
    </header>
  );
}

export default Header;





