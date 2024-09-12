"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-white border-t border-gray-200 py-12 md:px-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-semibold text-gray-800">
              Easy Pi
            </span>
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
    //     <footer className="bg-gray-800 text-white py-10">
    //     <div className="container mx-auto px-4">
    //       <div className="grid md:grid-cols-4 gap-8">
    //         <div>
    //           <h3 className="text-lg font-semibold mb-4">Easy Pi</h3>
    //           <p className="text-sm text-gray-400">Empowering your career with AI</p>
    //         </div>
    //         <div>
    //           <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
    //           <ul className="space-y-2">
    //             <li><a href="#" className="text-sm text-gray-400 hover:text-white">Home</a></li>
    //             <li><a href="#" className="text-sm text-gray-400 hover:text-white">About Us</a></li>
    //             <li><a href="#" className="text-sm text-gray-400 hover:text-white">Contact</a></li>
    //           </ul>
    //         </div>
    //         <div>
    //           <h4 className="text-lg font-semibold mb-4">Legal</h4>
    //           <ul className="space-y-2">
    //             <li><a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a></li>
    //             <li><a href="#" className="text-sm text-gray-400 hover:text-white">Terms of Service</a></li>
    //           </ul>
    //         </div>
    //         <div>
    //           <h4 className="text-lg font-semibold mb-4">Connect</h4>
    //           <ul className="space-y-2">
    //             <li><a href="#" className="text-sm text-gray-400 hover:text-white">Twitter</a></li>
    //             <li><a href="#" className="text-sm text-gray-400 hover:text-white">LinkedIn</a></li>
    //             <li><a href="#" className="text-sm text-gray-400 hover:text-white">Facebook</a></li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
    //         © {new Date().getFullYear()} Easy Pi. All rights reserved.
    //       </div>
    //     </div>
    //   </footer>
  );
};

export default Footer;
