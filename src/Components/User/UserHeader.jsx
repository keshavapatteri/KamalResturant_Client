import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../Config/AxiosInstance";

export const UserHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = await axiosInstance.post('/user/logout', {}, { withCredentials: true });
  
      console.log('Logout Success:', res.data);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };


  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/Logo.jpg" alt="Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-red-500"><a href="/">Kamal Restaurant</a></span>
        </div>
        <nav className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200">
          <a href="/home" className="hover:text-red-500">Home</a>
          <a href="#" className="hover:text-red-500">Menu</a>
          <a href="/contact" className="hover:text-red-500">Contact</a>
          <a href="/Profile" className="hover:text-red-500">Profile</a>
          <button
                        className="btn btn-primary bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-colors"
                        onClick={handleLogout}
                    >
                        LOGOUT
                    </button>
        </nav>
      </div>
    </header>
  );
};
