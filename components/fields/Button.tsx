"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface ButtonProps {
  inverted?: boolean;
  text: string;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({ inverted = false, text, type = "button" }) => {
  const router = useRouter();

  const buttonClass = !inverted
    ? "text-white bg-indigo-800 hover:bg-indigo-700"
    : "bg-white text-indigo-800 hover:bg-gray-100";

  return (
    <button
      onClick={() => router.push("/pricing")}
      type={type}
      className={`px-8 py-3 rounded-full text-lg font-semibold transition duration-300 ${buttonClass}`}
    >
      {text}
    </button>
  );
};
