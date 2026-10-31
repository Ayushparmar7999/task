import React from 'react';

const CTAButton = ({ onClick }) => {
  return (
    <section className="relative z-[5] w-full flex justify-center px-5 sm:px-8 md:px-10 pt-5 sm:pt-7 md:pt-8" id="cta-section">
      <button
        className="btn-shimmer relative overflow-hidden flex items-center justify-center gap-2.5 w-full max-w-[340px] sm:max-w-[440px] md:max-w-[520px] py-4 sm:py-5 md:py-5 px-8 rounded-xl sm:rounded-2xl text-white font-inter font-bold text-[17px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[100%] tracking-[0.5px] transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_16px_rgba(12,183,49,0.35),0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(12,183,49,0.45),0_4px_8px_rgba(0,0,0,0.15)]"
        style={{
          background: 'linear-gradient(135deg, #0CB731 0%, #009111 100%)',
        }}
        id="cta-calculate-button"
        onClick={onClick}
        type="button"
      >
        <span>मुनाफा कैलकुलेट करें</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
};

export default CTAButton;
