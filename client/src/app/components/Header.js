'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Header = () => {
  const [menuItems, setMenuItems] = useState(['Home', 'About', 'Contact']);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/header');
        if (response.data?.data?.header?.menu) {
          setMenuItems(response.data.data.header.menu);
        }
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <h1>My App</h1>
        <nav>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
