import React from 'react'

const AdminHeader = () => {
  return (
    <header className="w-full bg-gradient-to-r from-blue-900 to-purple-600 shadow-lg py-4 px-6 fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between w-full">
        {/* Logo and restaurant name */}
        <div className="flex items-center">
          <img src="https://uploads.turbologo.com/uploads/design/preview_image/798549/preview_image20230419-17312-1z0esei.png" alt="KAMAL RESTAURANT Logo" className="h-8 mr-4" />
          <h1 className="text-3xl font-bold text-white">KAMAL RESTAURANT</h1>
        </div>
        
        {/* Login button */}
        <button className="bg-white text-blue-600 hover:bg-blue-100 font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300">
          Login
        </button>
      </div>
    </header>
  )
}

export default AdminHeader
