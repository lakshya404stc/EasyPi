import React, { ReactNode } from "react";

interface BannerWrapperProps {
  children: ReactNode;
}

export const BannerWrapper: React.FC<BannerWrapperProps> = ({ children }) => {
  return (
    <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">{children}</div>
      </div>
    </section>
  );
};
