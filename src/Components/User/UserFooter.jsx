import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export const UserFooter = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <img src="/assets/zomato-logo.png" alt="Zomato Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-red-500">Kamal Restaurant</span>
          </div>
          <div className="flex space-x-6">
            <a href="/About" className="hover:text-red-500">About</a>
            <a href="/privacy" className="hover:text-red-500">Privacy</a>
            <a href="/terms" className="hover:text-red-500">Terms</a>
          </div>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-red-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-500"><FaInstagram /></a>
            <a href="#" className="hover:text-red-500"><FaTwitter /></a>
          </div>
        </div>
        <div className="border-t border-gray-300 dark:border-gray-700 mt-6 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Kamal Restaurant. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
