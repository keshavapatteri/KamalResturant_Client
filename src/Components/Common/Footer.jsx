import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      <div className="flex-grow">
        {/* Your page content goes here */}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 w-full">
        <div className="px-4 md:px-12">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">About Us</h2>
              <p className="text-sm text-gray-400">
                We provide the best car rental service with top-notch customer
                support and seamless booking experience.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Quick Links</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition duration-300">
                    Cars
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition duration-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-sm text-gray-400 mb-2">
                📍 123 Street, City, Country
              </p>
              <p className="text-sm text-gray-400 mb-2">📞 +123 456 7890</p>
              <p className="text-sm text-gray-400">✉️ support@carrental.com</p>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition duration-300"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition duration-300"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-500 transition duration-300"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition duration-300"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
            © {new Date().getFullYear()} EVM Wheels. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
