import React, { ReactNode } from "react";

interface BannerWrapperProps {
  children: ReactNode;
  className?: string;
}

export const BannerWrapper: React.FC<BannerWrapperProps> = ({ children, className="py-20" }) => {
  return (
    <section className={`bg-gradient-to-r from-purple-700 to-indigo-800 text-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">{children}</div>
      </div>
    </section>
  );
};
