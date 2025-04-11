import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-md w-full mt-0">
      <div className="max-w-full mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <a
  href="/"
  className="text-white text-2xl font-bold tracking-wide font-sans"
>
  KAMAL RESTAURANT
</a>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="/"
            className="text-white text-sm font-medium hover:text-blue-300 transition duration-300"
          >
            Home
          </a>
          <a
            href="/admin"
            className="text-white text-sm font-medium hover:text-blue-300 transition duration-300"
          >
            Admin Login
          </a>
          <a
            href="/common/login"
            className="text-white text-sm font-medium hover:text-blue-300 transition duration-300"
          >
            User Login
          </a>
          <a
            href="/Common/ResturantLogin"
            className="text-white text-sm font-medium hover:text-blue-300 transition duration-300"
          >
           ResturantLogin
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
