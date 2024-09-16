import React, { ReactNode } from "react";

interface FooterBannerWrapperProps {
  children: ReactNode;
  className?: string;
}

export const FooterBannerWrapper: React.FC<FooterBannerWrapperProps> = ({
  children,
}) => {
  return (
    <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-[50px]">
      <div className="container mx-auto px-4 text-center">{children}</div>
    </section>
  );
};
