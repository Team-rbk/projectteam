import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#001E00' }} className=" text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">Contact Us</h2>
          <p> El Gazela,Ariana</p>
          <p>Email: rbk@gmail.com</p>
          <p>Phone: 216-00-000-000</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">Facebook</a>
            <a href="#" className="text-white hover:text-gray-300">Twitter</a>
            <a href="#" className="text-white hover:text-gray-300">Instagram</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; 2024 Work. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
