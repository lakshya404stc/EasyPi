import React from "react";

export const CardTitle = ({ value, className }: { value: string, className?:string }) => {
  return <h3 className={`text-xl font-semibold mb-2 text-gray-800 ${className}`}>{value}</h3>;
};


export const CardSubtitle = ({ value, className }: { value: string, className?:string }) => {
  return <p className={`text-gray-700 ${className}`}>{value}</p>;
};

