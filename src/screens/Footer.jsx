// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    // fopter strat
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1: About */}
        <div>
          <h3 className="text-lg font-semibold mb-4  text-red-500">About Us</h3>
          <p className="text-sm">
            We are committed to saving lives by connecting donors and those in need of blood. Our mission is to ensure safe and timely availability of blood for everyone.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4  text-red-500">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/donate" className="hover:underline">Donate Blood</a></li>
            <li><a href="/contact" className="hover:underline">find Donor</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4  text-red-500">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2  text-red-500" />
              <a href="mailto:info@bloodbank.com" className="hover:underline">info@bloodbank.com</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-red-500" />
              +1 234 567 890
            </li>
          </ul>

          
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 border-t border-gray-400 pt-4 text-center text-lg">
        &copy; {new Date().getFullYear()}<span className='text-red-800'> SMIT</span> Blood Bank. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
