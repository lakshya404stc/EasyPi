import React from "react";

export const Title = ({ value, className }: { value: string, className?: string }) => {
  return <h2 className={`text-3xl font-semibold md:mb-6 mb-4 text-center pb-3 text-gray-800 ${className}`}>{value}</h2>;
};


export const TitleContent = ({value, className}:{value:string, className?:string}) => {
  return <p className={`text-xl mb-8 text-gray-700 ${className}`}>
  {value}
</p>
}