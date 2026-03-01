"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo/logo3.png";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { BsBagCheck } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-[#FEFFAB] text-center py-1.5 xl:py-2 w-full font-normal">
        Free shipping on orders over 500 ✨.
      </div>
      <nav className="w-full flex text-black justify-between items-center px-5 h-22 xl:px-16 shadow-[0_5px_12px_-10px_rgba(0,0,0,0.4)] backdrop-blur-2xl z-50 relative">
        <Image
          src={logo}
          alt="image..."
          className="object-cover w-20 h-20 object-center cursor-pointer"
        />
        <ul className="gap-12 items-center cursor-pointer hidden lg:flex">
          <li className="hover:text-amber-600 font-light transition-all ease-in">
            Home
          </li>
          <li className="hover:text-amber-600 font-light transition-all ease-in">
            Sweets
          </li>
          <li className="hover:text-amber-600 font-light transition-all ease-in">
            About Us
          </li>
          <li className="hover:text-amber-600 font-light transition-all ease-in">
            Contact Us
          </li>
        </ul>
        <div className="flex gap-4 cursor-pointer ml-24 justify-center items-center">
          <CiSearch size={24} strokeWidth={0.7} />
          <CiHeart size={24} strokeWidth={0.7} />
          <BsBagCheck size={24} strokeWidth={0.1} />
          <button className="border border-gray-300 px-4 py-1 rounded cursor-pointer hidden lg:block">
            Login
          </button>
        </div>

        <div className="lg:hidden items-center flex">
          <HiMenu size={24} onClick={() => setIsOpen(!isOpen)} />
        </div>
      </nav>

      <>
        {/* Backdrop */}
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 bg-black transition-opacity duration-500 lg:hidden z-998
            ${isOpen ? "opacity-65 visible" : "opacity-0 invisible"}`}
        />

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-screen w-72 bg-[#FEFFAB]  shadow-lg 
            transform transition-transform duration-300 ease-in-out
            lg:hidden z-999
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-end p-4">
            <HiX
              size={24}
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>

          <ul className="flex flex-col gap-4">
            <li className="hover:text-amber-600 font-light transition-all ease-in cursor-pointer px-4">
              Home
            </li>
            <li className="hover:text-amber-600 font-light transition-all ease-in cursor-pointer px-4">
              Sweets
            </li>
            <li className="hover:text-amber-600 font-light transition-all ease-in cursor-pointer px-4">
              About Us
            </li>
            <li className="hover:text-amber-600 font-light transition-all ease-in cursor-pointer px-4">
              Contact Us
            </li>
            <li className="px-4">
              <button className="w-full border border-black px-4 py-1.5 rounded cursor-pointer hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all ease-in font-light">
                Login
              </button>
            </li>
          </ul>
        </div>
      </>
    </>
  );
}

export default Navbar;
