import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBuilding, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ showNavBar, toggleNavBar }) => {
  const [categories, setCategories] = useState([
    'Laptop',
    'Shoes',
    'Suits',
    'T-shirt',
  ]);
  const [selectedIndex, setIndex] = useState(0);

  const mainContentStyle = {
    marginLeft: showNavBar ? '' : '190px',
    transition: 'margin 0.9s ease',
  };

  return (
    <div className={`nav_bar ${showNavBar ? 'visible' : 'hidden'}`}>
      <div className="toggle-btn" onClick={toggleNavBar} style={mainContentStyle}>
        ☰
      </div>
      <ul>
        {categories.map((category, index) => (
          <li
            className={selectedIndex === index ? 'selected' : ''}
            key={index}
            onClick={() => setIndex(index) }
            
          >
            {category}
          </li>
        ))}
        <li>
          <FontAwesomeIcon style={{ marginRight: '5px' }} id='icon' icon={faBuilding} />
          Services
        </li>
        <li>
          <FontAwesomeIcon style={{ marginRight: '5px' }} id='icon' icon={faEnvelope} />
          Contact
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
