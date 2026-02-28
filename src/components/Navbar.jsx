import React from 'react'

function Navbar() {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
          MyPortfolio
        </h1>

        {/* Menu */}
        <ul className="flex gap-8 font-medium">
          <li className="hover:text-gray-400 cursor-pointer transition duration-300">Home</li>
          <li className="hover:text-gray-400 cursor-pointer transition duration-300">About</li>
          <li className="hover:text-gray-400 cursor-pointer transition duration-300">Skills</li>
          <li className="hover:text-gray-400 cursor-pointer transition duration-300">Certification</li>
          <li className="hover:text-gray-400 cursor-pointer transition duration-300">Contact Us</li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar