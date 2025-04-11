import React from 'react'

const AdminFooter = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 shadow-inner fixed bottom-0 left-0">
      <div className="flex items-center justify-between w-full">
        <p className="text-sm">&copy; {new Date().getFullYear()} Admin Dashboard. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-200 transition duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-200 transition duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default AdminFooter
