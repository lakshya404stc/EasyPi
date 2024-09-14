import React from "react";

export const BannerTitle = ({ value }: { value: string }) => {
  return <h1 className="text-4xl md:text-5xl font-bold mb-6">{value}</h1>;
};


export const BannerSubtitle = ({ value }: { value: string }) => {
  return <p className="text-xl mb-8">{value}</p>;
};

