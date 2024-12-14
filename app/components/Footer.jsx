import React from "react";
import Socials from "./socials";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-8 py-4 bg-[#020617] text-white ">
      <p>&copy; 2024 BlogCast</p>
      <div className="flex items-center space-x-4">
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
