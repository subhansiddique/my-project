
import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
   
    return (
        <nav className="bg-purple-300 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold"> <span className='text-red-900 text-3xl'>SMIT</span>Blood Bank</h1>
              </div>
              <div className="hidden md:flex space-x-4 items-center">
                <Link to="/home" className="hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link to="/about" className="hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link to="/find" className="hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium">
                  Find Donor
                </Link>
                <Link to="/donor" className="hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium">
                 Apply as a Donor
                </Link>
                
              </div>
              
            </div>
          </div>
    
         
          
        </nav>
      );
    };

export default Navbar;




// https://templates.bwlthemes.com/blood_donation/v_2/index.html