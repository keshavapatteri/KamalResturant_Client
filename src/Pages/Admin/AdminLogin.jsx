import React from 'react';

const AdminLogin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-md w-full border border-gray-200">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Admin Login</h2>

        <form className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>

          {/* Forgot Password Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            <a href="#" className="text-blue-600 hover:underline">
              Forgot your password?
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
