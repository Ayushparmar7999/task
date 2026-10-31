import React from 'react';

const ContentSection = () => {
  return (
    <section className="relative z-[3] w-full flex flex-col items-center px-5 sm:px-8 md:px-10 -mt-2 sm:mt-0" id="content-section">
      {/* White card with question */}
      <div className="bg-white rounded-2xl sm:rounded-3xl py-5 px-5 sm:py-7 sm:px-7 md:py-8 md:px-8 w-full max-w-[340px] sm:max-w-[440px] md:max-w-[520px] text-center shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
        <h2 className="font-inter font-semibold text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] leading-[140%] md:leading-[100%] text-center text-pioneer-dark-red">
          क्या आप जानते हैं अपनी फसल का
          <br />
          असली मुनाफा?
        </h2>
      </div>

      {/* Description text below card */}
      <div className="mt-4 sm:mt-5 md:mt-6 text-center px-2">
        <p className="font-inter font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[160%] text-black">
          लागत और पैदावार का हिसाब लगाएं,
          <br />
          और तुरंत अपना रिजल्ट देखें
        </p>
      </div>
    </section>
  );
};

export default ContentSection;
