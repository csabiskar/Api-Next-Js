"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo/logo3.png";
import { CiHeart, CiSearch } from "react-icons/ci";
import { BsBagCheck } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#FEFFAB] text-center py-1.5 md:py-2 w-full text-sm md:text-base">
        Free shipping on orders over 500 ✨
      </div>

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-4 md:px-8 xl:px-16 h-20 shadow-[0_5px_12px_-10px_rgba(0,0,0,0.4)] backdrop-blur-2xl relative z-50">
        {/* Logo */}
        <Image
          src={logo}
          alt="logo"
          className="w-16 h-16 md:w-18 md:h-18 xl:w-20 xl:h-20 object-contain cursor-pointer"
        />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 xl:gap-12 font-light cursor-pointer">
          <li className="hover:text-amber-600 transition">Home</li>
          <li className="hover:text-amber-600 transition">Sweets</li>
          <li className="hover:text-amber-600 transition">About Us</li>
          <li className="hover:text-amber-600 transition">Contact Us</li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Search */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out
             ${searchOpen ? "w-50 sm:w-60 md:w-64 lg:w-72 xl:w-80" : "w-0"}`}
          >
            <input
              type="text"
              placeholder="Search..."
              className="border h-9 md:h-10 w-full rounded-sm border-gray-300 px-2 focus:outline-amber-600"
            />
          </div>

          {/* Icons */}
          <CiSearch
            size={22}
            className="cursor-pointer hover:text-amber-600"
            onClick={() => setSearchOpen(!searchOpen)}
            strokeWidth={0.7}
          />

          <CiHeart
            size={22}
            className="cursor-pointer hover:text-amber-600 hidden sm:block"
            strokeWidth={0.7}
          />

          <BsBagCheck
            size={20}
            className="cursor-pointer hover:text-amber-600"
            strokeWidth={0.1}
          />

          {/* Login Button */}
          <button className="hidden lg:block border border-gray-300 px-4 py-1 rounded hover:text-amber-600 hover:border-amber-600 transition">
            Login
          </button>

          {/* Mobile Menu Icon */}
          <HiMenu
            size={26}
            className="lg:hidden cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black transition-opacity duration-300 lg:hidden z-40
        ${isOpen ? "opacity-50 visible" : "opacity-0 invisible"}`}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-[#FEFFAB] shadow-lg
        transform transition-transform duration-300 ease-in-out
        lg:hidden z-50
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close */}
        <div className="flex justify-end p-4">
          <HiX
            size={26}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Mobile Menu */}
        <ul className="flex flex-col gap-6 px-6 font-light">
          <li className="hover:text-amber-600 cursor-pointer">Home</li>
          <li className="hover:text-amber-600 cursor-pointer">Sweets</li>
          <li className="hover:text-amber-600 cursor-pointer">About Us</li>
          <li className="hover:text-amber-600 cursor-pointer">Contact Us</li>

          <button className="mt-4 border border-black px-4 py-2 rounded hover:bg-amber-600 hover:text-white hover:border-amber-600 transition">
            Login
          </button>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
