import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="relative container mx-auto p-6 border-b-2 border-black">
        {/* Flex container */}
        <div className="flex items center justify-between">
          {/* Logo */}
          <div className="pt-2">
            <a href="#" className="max-w-md text-green-600 text-3xl font-bold ">
              Work
            </a>
          </div>
          {/* Menu Items */}
          <div className="hidden space-x-6 md:flex">
            <a href="#" className="hover:text-darkGrayishBlue">
              Home
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Job Openings
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Services
            </a>
          </div>
          {/* Button */}
          <Link
            to="/Sign"
            className="hidden p-3 px-6 pt-2 text-white bg-green-600 rounded-full baseline hover:bg-green-500 md:block"
          >
            Log in
          </Link>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="hero">
        {/* Flex Container */}
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          {/* Left item */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-green-700 text-4xl font-bold text-center md:text-5xl md:text-left">
              Bring everyone together for a better job
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Welcome to our website, where we strive to unite individuals from
              diverse backgrounds, experiences, and talents in pursuit of a
              shared goal: fostering a community where everyone can thrive
              professionally. Our platform is dedicated to connecting job
              seekers with opportunities that align with their skills and
              aspirations, while also providing employers with access to a pool
              of qualified candidates. We believe that by bringing everyone
              together, we can create a more inclusive and prosperous future,
              one job opportunity at a time.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="#"
                className="p-3 px-6 pt-2 text-white bg-green-600 rounded-full baseline hover:bg-green-500"
              >
                Sign up
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_440,h_300,f_auto,q_auto,dpr_2.0/brontes/hero/searching-talent@1x.png"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section id="features">
        {/* Flex Container */}
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          {/* What's Different */}
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              What't different about Manage?
            </h2>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          {/* Numbered List */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            {/* List Item 1 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-green-700">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company-wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Track company-wide progress
                </h3>
                <p className="text-darkGrayishBlue">
                  Stay on top of company-wide progress effortlessly with our
                  website's tracking feature. Monitor project milestones, team
                  performance, and key metrics in real-time. Get actionable
                  insights instantly to drive success. Welcome to streamlined
                  progress tracking at its best
                </p>
              </div>
            </div>
            {/* List Item 2 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-green-700">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Advanced built-in reports
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Advanced built-in reports
                </h3>
                <p className="text-darkGrayishBlue">
                  Unlock unparalleled insights with our website's advanced
                  built-in reports. Effortlessly track progress, analyze key
                  metrics, and make informed decisions to propel your success.
                  Discover a smarter way to work with our intuitive reporting
                  tools.
                </p>
              </div>
            </div>
            {/* List Item 3 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-green-700">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Everything you need in one place
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Everything you need in one place
                </h3>
                <p className="text-darkGrayishBlue">
                  Discover work made simple. Our website provides everything you
                  need in one place – from job opportunities to career resources
                  and networking. Streamline your professional life and unlock
                  new opportunities effortlessly. Welcome to a smarter way of
                  working.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer
        style={{ backgroundColor: "#001E00" }}
        className="text-white p-6 mt-32"
      >
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold">Contact Us</h2>
            <p>El Gazela, Ariana</p>
            <p>Email: rbk@gmail.com</p>
            <p>Phone: 216-00-000-000</p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                Facebook
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Twitter
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>© 2024 Work. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
