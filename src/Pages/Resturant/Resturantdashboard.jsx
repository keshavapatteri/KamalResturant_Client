import React from 'react';

export const Resturantdashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 text-gray-800 dark:text-white">

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center text-primary dark:text-primary-dark">
          Welcome to Restaurant Dashboard
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-center">
          Here’s a quick overview of today’s activity.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {/* Add Product Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-semibold mb-4 text-center text-indigo-600">Add Product</h3>
          <div className="text-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors">
              <a href='/AddProduct'>Click</a>
            </button>
          </div>
        </div>

        {/* Get All Products Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-semibold mb-4 text-center text-green-600">Get All Products</h3>
          <div className="text-center">
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
              <a href='/ResturantBygetall'>Click</a>
            </button>
          </div>
        </div>

        {/* Additional Cards (You can add more similar cards here) */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-semibold mb-4 text-center text-yellow-600">Order History</h3>
          <div className="text-center">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg transition-colors">
              <a href='/ResturantByOrders'>Click</a>
            </button>
          </div>
        </div>

        {/* Example Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-semibold mb-4 text-center text-blue-600">Manage Inventory</h3>
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
              <a href='/InventoryManagement'>Click</a>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};