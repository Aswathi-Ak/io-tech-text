'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Header = () => {
  const [menuItems, setMenuItems] = useState(['Home', 'About Us', 'Services', 'Blog', 'Our Team', 'Contact Us']);
  const [logoUrl, setLogoUrl] = useState('');
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/header?populate=*');
        if (response.data?.data?.logo?.url) {
          setLogoUrl(`http://localhost:1337${response.data.data.logo.url}`);
        }
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItems();
  }, []);

  const serviceDropdown = (
    <ul className="absolute top-full mt-1 bg-yellow-900 text-white rounded-md shadow-md z-50 py-2 w-40">
      {['Legal Consultation Services', 'Foreign Investment Services', 'Contracts','Notarization','Insurance','Banking and Financial Instiutions'].map((service) => (
        <li key={service}>
          <Link
            href={`/service/${service}`}
            className="block px-4 py-2 hover:bg-yellow-800 capitalize"
            onClick={() => setServicesOpen(false)}
          >
            {service}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="fixed inset-0 w-full h-full"
        style={{
          backgroundImage: logoUrl ? `url(${logoUrl})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Navigation Menu */}
          <nav className="flex-1">
            <ul className="flex space-x-8 relative">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => item === 'Services' && setServicesOpen(true)}
                  onMouseLeave={() => item === 'Services' && setServicesOpen(false)}
                >
                  <a
                    href={
                      item === 'Home'
                        ? '/'
                        : item === 'Services'
                        ? '#'
                        : `/${item.toLowerCase().replace(/\s+/g, '-')}`
                    }
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                  >
                    {item}
                  </a>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>

                  {item === 'Services' && servicesOpen && serviceDropdown}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-8">
            {/* Search Icon */}
            <div className="mx-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer hover:text-blue-600 transition-colors duration-300"
              >
                <path
                  d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Book Appointment */}
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
              style={{
                width: '125px',
                height: '71px',
              }}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </header>

      {/* Content Area */}
      <main className="relative z-10 pt-20">
        {/* Your page content will go here */}
      </main>
    </div>
  );
};

export default Header;
