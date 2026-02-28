import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <>
      <div className="bg-yellow-300 text-center">
        Free shipping on orders over 500 ✨.
      </div>
      <nav className="flex h-10 bg-black w-full text-white justify-between">
        <ul className="flex gap-12 items-center mx-auto">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Certification</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
