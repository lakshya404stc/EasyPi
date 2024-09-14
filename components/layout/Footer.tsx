"use client";
import React from "react";
import { Logo } from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-white border-t border-gray-200 py-12 md:px-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Logo/>
            <p className="text-sm text-gray-600 mt-1">
              Empowering your career with AI
            </p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end">
            <a href="#" className="text-gray-600 hover:text-gray-800 mx-3 my-2">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 mx-3 my-2">
              Features
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 mx-3 my-2">
              Pricing
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 mx-3 my-2">
              FAQ
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 mx-3 my-2">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 mx-3 my-2">
              Terms
            </a>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Easy Pi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
