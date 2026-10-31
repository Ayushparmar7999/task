import React from 'react';
import logo from '../../assets/Logo 1.png';

const Header = () => {
  return (
    <header className="absolute top-0 right-0 z-20 p-3 sm:p-4 md:p-5 lg:p-6" id="header">
      <div className="bg-pioneer-green rounded-bl-xl sm:rounded-bl-2xl p-2.5 px-3.5 sm:p-3 sm:px-4 md:p-4 md:px-5 flex items-center justify-center shadow-lg">
        <img
          src={logo}
          alt="Pioneer Logo"
          className="w-[60px] sm:w-[72px] md:w-[90px] lg:w-[100px] h-auto object-contain"
        />
      </div>
    </header>
  );
};

export default Header;
