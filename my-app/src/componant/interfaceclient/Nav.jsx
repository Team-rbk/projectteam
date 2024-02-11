import React, { useState } from 'react';

const Nav = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className=" text-2xl font-bold h-8 w-auto text-green-600">Work</h1>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10  mt-5 flex items-baseline space-x-4">
                <a href="#" className="text-gray-500 hover:text-green-600">Jobs</a>
                <a href="#" className="text-gray-500 hover:text-green-600">Workers</a>
              </div>
            </div>
          </div>
      
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="ml-3 relative">
                <div>
                  <button onClick={toggleDropdown} className="max-w-xs flex items-center border border-white text-sm rounded-full focus:border-green-500" id="user-menu" aria-haspopup="true">
                    <img className="h-10 w-10 rounded-full" src={props.user.imagec} alt="User" />
                  </button>
                </div>
                {dropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Log out</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
