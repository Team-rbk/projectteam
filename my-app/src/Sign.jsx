import React from "react";
import { Link } from "react-router-dom";
const Sign = (props) => {
  return (
    <div>
      <div className="pt-2">
        <a href="#" className="max-w-md text-green-600 text-3xl font-bold ">
          Work
        </a>
      </div>
      <div className="container mx-auto px-4 py-16 mt-10">
        <h1 className="text-4xl font-semibold text-center mb-12 ">
          Join as a client or employer
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="w-full lg:w-1/2  ">
            <form className="bg-white p-8 rounded shadow-md hover:bg-green-50 w-80 h-56 ml-80 rounded-3xl border-2 hover:border-green-600 ">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Join as a Client
              </h2>
              <Link
                to="/Client"
                type="submit"
                className="w-full bg-green-600  text-white font-bold py-3 rounded hover:bg-green-500 text-center mt-8 rounded-3xl"
              >
                Join
              </Link>
            </form>
          </div>
          <div className="w-full lg:w-1/2">
            <form className="bg-white p-8 rounded shadow-md hover:bg-green-50 w-80 h-56 rounded-3xl border-2 hover:border-green-600">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                I'm a employer, looking for work
              </h2>
              <Link
                to="/Employer"
                type="submit"
                className="w-full bg-green-600  text-white font-bold py-3 rounded hover:bg-green-500 text-center rounded-3xl "
              >
                Join
              </Link>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-center mt-12">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/Login" href="#" className="text-green-600 font-bold">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sign;
