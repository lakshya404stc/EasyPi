"use client";
import { Home, Plus } from "lucide-react";
import React from "react";

const NavBar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto px-10 py-3 flex justify-between items-center">
        <a href="/" className="text-2xl font-semibold text-gray-800">
          <img src="/assets/img/logo2.png" className="h-[50px]"/>
        </a>
        <div className="md:flex items-center h-full gap-7 hidden">
          <div>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-gray-800"
            >
              Contact
            </a>
          </div>
          <div>
            <a href="#features" className="text-gray-600 hover:text-gray-800">
              Features
            </a>
          </div>
          <div>
            <a href="#pricing" className="text-gray-600 hover:text-gray-800">
              Pricing
            </a>
          </div>
          <div className="rounded-full bg-purple-100 p-2 text-purple-600">
            <Home size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
