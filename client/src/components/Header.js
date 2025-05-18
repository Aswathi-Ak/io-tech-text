'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

const Header = () => {
  const [menuItems, setMenuItems] = useState(['Home', 'About', 'Contact']);
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/header?populate=*');
        console.log("this is the response", response.data);
        if (response.data?.data?.header?.menu) {
          setMenuItems(response.data.data.header.menu);
        }
        if (response.data?.data?.logo?.url) {
          setLogoUrl(`http://localhost:1337${response.data.data.logo.url}`);
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
        {logoUrl && (
          <img
            src={logoUrl}
            alt="Logo"
            width={50}
            height={50}
          />
        )}
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
