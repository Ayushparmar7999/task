import React from 'react';
import certificateFrame from '../../assets/QWWWER 1.png';
import logoImg from '../../assets/Logo 1.png';
import medalImg from '../../assets/10603705_42828-Photoroom 1.png';
import headingImg from '../../assets/02 1.png';
import farmerImg from '../../assets/01 1.png';

const Certificate = ({ formData, calcResults, onRestart }) => {
  const handleShare = async () => {
    const shareData = {
      title: 'Pioneer मुनाफा सर्टिफिकेट',
      text: `🌾 शानदार! ${formData.name} बिज़नेस सोच वाले किसान हैं!\n\n📊 कुल आय: ₹${calcResults.totalIncome?.toLocaleString('en-IN')}\n💰 मुनाफा: ₹${calcResults.profit?.toLocaleString('en-IN')}\n\nPioneer मक्का - अब खेती बने बिज़नेस अपना!`,
    };

    console.log('📤 Share Data:', shareData);

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share cancelled or failed:', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareData.text);
        alert('सर्टिफिकेट टेक्स्ट कॉपी हो गया!');
      } catch (err) {
        console.log('Clipboard failed:', err);
      }
    }
  };

  return (
    <div className="relative z-[5] flex flex-col items-center w-full" style={{ minHeight: '100vh' }}>

      {/* ===== Certificate Card ===== */}
      <div className="mt-[70px] sm:mt-[85px] md:mt-[95px] w-[90%] max-w-[360px] sm:max-w-[430px] relative">

        {/* Frame background image */}
        <div className="relative w-full">
          <img
            src={certificateFrame}
            alt="Certificate Frame"
            className="w-full h-auto"
            style={{ filter: 'drop-shadow(2px 4px 12px rgba(0,0,0,0.15))' }}
          />

          {/* ===== Certificate Content (overlaid on frame) ===== */}
          <div
            className="absolute flex flex-col items-center"
            style={{
              top: '5%',
              left: '10%',
              right: '10%',
              bottom: '8%',
            }}
          >
            {/* Pioneer Logo (small) */}
            <img
              src={logoImg}
              alt="Pioneer"
              className="h-auto"
              style={{ width: 'clamp(40px, 12vw, 60px)' }}
            />

            {/* शानदार! heading */}
            <h1
              className="mt-1"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(24px, 7vw, 40px)',
                color: '#6C0000',
                textAlign: 'center',
                lineHeight: '110%',
              }}
            >
              शानदार!
            </h1>

            {/* Gold Medal Badge */}
            <div className="my-1 sm:my-2 relative">
              <img
                src={medalImg}
                alt="Medal"
                className="h-auto"
                style={{ width: 'clamp(42px, 13vw, 65px)' }}
              />
              {/* "मुनाफ़ा" text on medal */}
              <span
                className="absolute left-1/2 -translate-x-1/2"
                style={{
                  top: '30%',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(5px, 1.6vw, 9px)',
                  color: '#6C0000',
                  whiteSpace: 'nowrap',
                }}
              >
                मुनाफ़ा
              </span>
            </div>

            {/* यह प्रमाणित किया जाता है कि */}
            <p
              className="text-center"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(8px, 2.5vw, 13px)',
                color: '#6C0000',
                lineHeight: '130%',
              }}
            >
              यह प्रमाणित किया जाता है कि
            </p>

            {/* Farmer Name with underline */}
            <div className="mt-1 text-center">
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(10px, 3vw, 16px)',
                  color: '#000',
                  borderBottom: '1.5px solid #333',
                  paddingBottom: '2px',
                  display: 'inline-block',
                }}
              >
                श्रीमान {formData.name || '________'}
              </p>
            </div>

            {/* बिज़नेस सोच वाले किसान हैं! */}
            <p
              className="mt-1 text-center"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(9px, 2.8vw, 15px)',
                color: '#000',
                lineHeight: '130%',
              }}
            >
              बिज़नेस सोच वाले किसान हैं!
            </p>

            {/* Profit details section */}
            <div
              className="mt-1 text-center w-full"
              style={{
                fontFamily: "'Inter', sans-serif",
                lineHeight: '150%',
              }}
            >
              <p style={{
                fontWeight: 600,
                fontSize: 'clamp(7px, 2.1vw, 11px)',
                color: '#333',
              }}>
                पायोनियर मक्का लगाकर मुझे मिला
              </p>
              <p style={{
                fontWeight: 800,
                fontSize: 'clamp(8px, 2.4vw, 12px)',
                color: '#009111',
              }}>
                है ₹{calcResults.profit?.toLocaleString('en-IN')} का शुद्ध मुनाफा।
              </p>
              <p style={{
                fontWeight: 500,
                fontSize: 'clamp(6px, 1.8vw, 10px)',
                color: '#444',
                marginTop: '2px',
              }}>
                पायोनियर मक्का बीज से अपना मुनाफा जानें हम।
              </p>
            </div>

            {/* Bottom section: Farmer image + Heading image side by side */}
            <div className="mt-auto flex items-end justify-center gap-2 w-full">
              {/* Small farmer image */}
              <img
                src={farmerImg}
                alt="Farmer"
                className="h-auto"
                style={{ width: 'clamp(28px, 9vw, 48px)' }}
              />
              {/* Small heading text image */}
              <img
                src={headingImg}
                alt="अब खेती बने बिजनेस अपना"
                className="h-auto"
                style={{ width: 'clamp(70px, 22vw, 130px)' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===== Share Button ===== */}
      <div className="mt-5 sm:mt-6 flex justify-center">
        <button
          onClick={handleShare}
          className="w-[54px] h-[54px] sm:w-[62px] sm:h-[62px] rounded-full flex items-center justify-center cursor-pointer border-none"
          style={{
            background: 'linear-gradient(135deg, #0CB731 0%, #009111 100%)',
            boxShadow: '0 4px 16px rgba(12,183,49,0.4)',
            transition: 'transform 0.2s ease',
          }}
          type="button"
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="5" r="3" stroke="white" strokeWidth="2" />
            <circle cx="6" cy="12" r="3" stroke="white" strokeWidth="2" />
            <circle cx="18" cy="19" r="3" stroke="white" strokeWidth="2" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="white" strokeWidth="2" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="white" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {/* Restart link */}
      <button
        onClick={onRestart}
        className="mt-3 text-black/70 underline cursor-pointer bg-transparent border-none"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          fontSize: '13px',
        }}
      >
        फिर से कैलकुलेट करें
      </button>

      {/* Spacer */}
      <div className="flex-1 min-h-[16px]"></div>

      {/* Bottom orange bar */}
      <div
        className="w-full"
        style={{
          height: '16px',
          background: 'linear-gradient(90deg, #C47A0A 0%, #E89C18 50%, #C47A0A 100%)',
        }}
      ></div>
    </div>
  );
};

export default Certificate;
