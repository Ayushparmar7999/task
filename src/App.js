import React, { useState } from 'react';
import './App.css';

// Import assets
import bgImage from './assets/image 1.png';
import logoImg from './assets/Logo 1.png';
import headingImg from './assets/02 1.png';
import farmerImg from './assets/01 1.png';
import productImg from './assets/product 1.png';

// Import screen components
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Calculator from './components/Calculator/Calculator';
import Certificate from './components/Certificate/Certificate';

function App() {
  // Navigation state: 'landing' | 'registration' | 'calculator' | 'certificate'
  const [currentScreen, setCurrentScreen] = useState('landing');

  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    state: '',
    district: '',
  });

  // Calculator results state
  const [calcResults, setCalcResults] = useState({
    totalCost: 0,
    yieldPerAcre: 0,
    marketRate: 0,
    totalIncome: 0,
    profit: 0,
  });

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
    // Scroll to top on navigation
    window.scrollTo(0, 0);
  };

  const handleRestart = () => {
    setFormData({ name: '', mobile: '', state: '', district: '' });
    setCalcResults({ totalCost: 0, yieldPerAcre: 0, marketRate: 0, totalIncome: 0, profit: 0 });
    navigateTo('landing');
  };

  // ===== LANDING PAGE (Screen 1) =====
  const renderLanding = () => (
    <div className="relative z-[5] flex flex-col items-center w-full" style={{ minHeight: '100vh' }}>

      {/* Heading text image */}
      <div className="mt-[70px] sm:mt-[88px] md:mt-[100px] px-4 flex justify-center w-full">
        <img
          src={headingImg}
          alt="पायोनियर किसान का सपना - अब खेती बने बिजनेस अपना"
          className="w-[80%] max-w-[300px] sm:max-w-[380px] md:max-w-[440px] h-auto"
          style={{ filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.1))' }}
        />
      </div>

      {/* Farmer + Product area */}
      <div className="relative flex justify-center w-full -mt-1">
        <img
          src={farmerImg}
          alt="Pioneer Farmer"
          className="w-[60%] max-w-[235px] sm:max-w-[285px] md:max-w-[335px] h-auto relative z-[2]"
          style={{ filter: 'drop-shadow(3px 6px 12px rgba(0,0,0,0.2))' }}
        />
        <div className="absolute z-[3]" style={{ bottom: '-20px', right: '10%' }}>
          <img
            src={productImg}
            alt="Pioneer Hybrid Corn Seed"
            className="w-[68px] sm:w-[82px] md:w-[96px] h-auto"
            style={{ filter: 'drop-shadow(2px 3px 6px rgba(0,0,0,0.15))' }}
          />
        </div>
      </div>

      {/* White card with question */}
      <div
        className="bg-white text-center mt-3 sm:mt-4"
        style={{
          borderRadius: '14px',
          padding: 'clamp(14px, 3.5vw, 24px) clamp(18px, 4.5vw, 36px)',
          width: '84%',
          maxWidth: '330px',
          boxShadow: '0 3px 14px rgba(0,0,0,0.08)',
        }}
      >
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: 'clamp(15px, 4.2vw, 28px)',
            lineHeight: '140%',
            color: '#6C0000',
            textAlign: 'center',
          }}
        >
          क्या आप जानते हैं अपनी फसल का
          <br />
          असली मुनाफा?
        </h2>
      </div>

      {/* Description text */}
      <div className="mt-3 sm:mt-4 text-center px-5">
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(13px, 3.6vw, 20px)',
            lineHeight: '155%',
            color: '#000',
          }}
        >
          लागत और पैदावार का हिसाब लगाएं,
          <br />
          और तुरंत अपना रिजल्ट देखें
        </p>
      </div>

      {/* Spacer */}
      <div className="flex-1 min-h-[16px]"></div>

      {/* CTA Button */}
      <div className="w-full px-5 sm:px-8 flex justify-center mb-3 sm:mb-4">
        <button
          onClick={() => navigateTo('registration')}
          className="btn-shimmer flex items-center justify-center w-full py-3.5 sm:py-4 md:py-[18px] text-white cursor-pointer border-none"
          style={{
            background: 'linear-gradient(135deg, #0CB731 0%, #009111 100%)',
            borderRadius: '10px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(16px, 4.2vw, 24px)',
            letterSpacing: '0.3px',
            maxWidth: '330px',
            boxShadow: '0 4px 14px rgba(12,183,49,0.35)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          type="button"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(12,183,49,0.45)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 14px rgba(12,183,49,0.35)';
          }}
        >
          मुनाफा कैलकुलेट करें
        </button>
      </div>

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

  // ===== RENDER CURRENT SCREEN =====
  const renderScreen = () => {
    switch (currentScreen) {
      case 'registration':
        return (
          <RegistrationForm
            onNext={() => navigateTo('calculator')}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 'calculator':
        return (
          <Calculator
            onNext={() => navigateTo('certificate')}
            formData={formData}
            setFormData={setFormData}
            calcResults={calcResults}
            setCalcResults={setCalcResults}
          />
        );
      case 'certificate':
        return (
          <Certificate
            formData={formData}
            calcResults={calcResults}
            onRestart={handleRestart}
          />
        );
      default:
        return renderLanding();
    }
  };

  return (
    <div className="page-wrapper">
      <div className="page-container">

        {/* Background image */}
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
          draggable="false"
        />

        {/* Orange decorative arcs */}
        <div className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none overflow-hidden">
          <div className="arc arc-1"></div>
          <div className="arc arc-2"></div>
          <div className="arc arc-3"></div>
        </div>

        {/* Pioneer Logo (top-right) */}
        <div className="absolute top-0 right-0 z-[10]">
          <div
            className="flex flex-col items-center justify-center"
            style={{
              // backgroundColor: '#009111',
              borderRadius: '0 0 0 16px',
              padding: '12px 16px',
            }}
          >
            <img
              src={logoImg}
              alt="Pioneer"
              className="w-[62px] sm:w-[72px] md:w-[88px] h-auto"
            />
          </div>
        </div>

        {/* Render current screen */}
        {renderScreen()}
      </div>
    </div>
  );
}

export default App;
