import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-sans text-gray-800 font-normal">
              Webshop
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-800  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex md:space-x-4">
            <Link to="/" className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium group transition duration-30">
              Home
              <span className="text-gray-800 bg-gray-800 block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-400"></span>
            </Link>
            {/* <Link to="/products" className="text-gray-800  hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium group transition duration-30">
              Products
              <span className="text-gray-800 bg-gray-800 block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-400"></span>

            </Link> */}
            <Link
            to="/cart"
className="text-gray-800  hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium group transition duration-30"
          >
            Cart
            <span className="text-gray-800 bg-gray-800 block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-400"></span>

          </Link>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-gray-800 hover:text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          {/* <Link
            to="/products"
            className="text-gray-800 hover:text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
          >
            Products
          </Link> */}
          <Link
            to="/cart"
            className="text-gray-800 hover:text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"

          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
