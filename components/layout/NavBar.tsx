"use client";
import { ContactRound, Home } from "lucide-react";
import React from "react";
import { Logo } from "../Logo";

const NavBar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto px-10 py-3 flex justify-between items-center">
        <Logo/>
        <div className="items-center h-full gap-7">
          <div className="rounded-full bg-indigo-100 p-2 text-indigo-700">
            <ContactRound size={25} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
