import React from 'react';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#F7FAF7' }} className='py-5'>
      <div className=" container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-green-600">Hello, Mootaz!</h1>
            <p className=" text-2xl text-black">Welcome to your dashboard.</p>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600">Post a Job</button>
        </div>
      </div>
      {/* Card Section */}
      <div className="container mx-auto px-4">
        <div className="flex justify-start">
          {/* Left Card */}
          <div className="w-1/3 bg-gray-100 p-5 rounded-lg  mr-2">
            <h2 className="text-lg font-bold text-green-600">Find the Best Workers</h2>
            <p className="font-semibold text-sm">Take advantage of our platform to find the best workers for your projects.</p>
            <p className="font-semibold text-sm">Get high-quality services from skilled professionals.</p>
          </div>
          {/* Right Card */}
          <div className="w-1/3 bg-gray-100 p-5 rounded-lg  mr-2">
            <h2 className="text-lg font-bold text-green-600">Get the Best Service</h2>
            <p className="text-black font-semibold text-sm">Find top-notch professionals to fulfill your needs.</p>
            <p className="text-black font-semibold text-sm">Enjoy hassle-free transactions and exceptional service.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
