"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 font-poppins">
      <div className="container mx-auto flex justify-between items-center py-6 px-6">

        {/* LOGO */}
        <h1 className="text-2xl text-gray-900 font-poppins">
          Salala Mobiles
        </h1>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex space-x-6 font-poppins text-[16px] font-medium">
          <Link href="#home" className="hover:text-blue-600">Home</Link>
          <Link href="#about" className="hover:text-blue-600">About Us</Link>
          <Link href="#services" className="hover:text-blue-600">Services</Link>
          <Link href="#blog" className="hover:text-blue-600">Blog</Link>
          <Link href="#contact" className="hover:text-blue-600">Contact Us</Link>
        </nav>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          className="md:hidden text-2xl text-gray-900"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white px-6 overflow-hidden transition-all duration-300 font-poppins ${
          open ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 text-lg font-medium">
          <Link onClick={() => setOpen(false)} href="#home" className="hover:text-blue-600">
            Home
          </Link>
          <Link onClick={() => setOpen(false)} href="#about" className="hover:text-blue-600">
            About Us
          </Link>
          <Link onClick={() => setOpen(false)} href="#services" className="hover:text-blue-600">
            Services
          </Link>
          <Link onClick={() => setOpen(false)} href="#blog" className="hover:text-blue-600">
            Blog
          </Link>
          <Link onClick={() => setOpen(false)} href="#contact" className="hover:text-blue-600">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
