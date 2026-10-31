import React from 'react';
import farmerImage from '../../assets/01 1.png';
import headingText from '../../assets/02 1.png';
import productImage from '../../assets/product 1.png';

const HeroSection = () => {
  return (
    <section className="relative w-full flex flex-col items-center z-[2] pt-5 sm:pt-8 md:pt-10" id="hero-section">

      {/* Orange decorative arcs on the left */}
      <div className="absolute top-0 left-0 w-1/2 h-full z-[1] pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: '320px',
            height: '550px',
            top: '-60px',
            left: '-160px',
            border: '3px solid rgba(227, 140, 15, 0.45)',
            transform: 'rotate(-20deg)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '350px',
            height: '600px',
            top: '-80px',
            left: '-150px',
            border: '3px solid rgba(227, 140, 15, 0.3)',
            transform: 'rotate(-18deg)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '380px',
            height: '650px',
            top: '-100px',
            left: '-140px',
            border: '3px solid rgba(227, 140, 15, 0.2)',
            transform: 'rotate(-16deg)',
          }}
        />
      </div>

      {/* Heading text image */}
      <div className="relative z-[3] w-full flex justify-center mt-[50px] sm:mt-[60px] md:mt-[70px] px-4">
        <img
          src={headingText}
          alt="पायोनियर किसान का सपना - अब खेती बने बिजनेस अपना"
          className="w-[80%] sm:w-[70%] md:w-[60%] max-w-[340px] sm:max-w-[400px] md:max-w-[460px] h-auto object-contain drop-shadow-lg"
        />
      </div>

      {/* Farmer image */}
      <div className="relative z-[4] w-full flex justify-center -mt-2 sm:-mt-1">
        <img
          src={farmerImage}
          alt="Pioneer Farmer"
          className="w-[60%] sm:w-[50%] md:w-[45%] max-w-[260px] sm:max-w-[300px] md:max-w-[350px] h-auto object-contain"
          style={{ filter: 'drop-shadow(4px 8px 16px rgba(0,0,0,0.2))' }}
        />
      </div>

      {/* Product image - Pioneer Hybrid Corn Seed */}
      <div className="absolute bottom-[-30px] sm:bottom-[-20px] right-[6%] sm:right-[10%] md:right-[12%] z-[5]">
        <img
          src={productImage}
          alt="Pioneer Hybrid Corn Seed"
          className="w-[75px] sm:w-[90px] md:w-[110px] h-auto object-contain animate-bounce"
          style={{
            filter: 'drop-shadow(2px 4px 8px rgba(0,0,0,0.2))',
            animationDuration: '3s',
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
