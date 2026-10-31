import React, { useState } from 'react';
import headingImg from '../../assets/02 1.png';

const RegistrationForm = ({ onNext, formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error on change
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name?.trim()) newErrors.name = 'कृपया नाम भरें';
    if (!formData.mobile?.trim()) newErrors.mobile = 'कृपया मोबाइल नंबर भरें';
    else if (!/^[0-9]{10}$/.test(formData.mobile.trim())) newErrors.mobile = '10 अंकों का नंबर भरें';
    if (!formData.state?.trim()) newErrors.state = 'कृपया राज्य भरें';
    if (!formData.district?.trim()) newErrors.district = 'कृपया जिला भरें';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log('📋 Registration Data:', formData);
      onNext();
    }
  };

  return (
    <div className="relative z-[5] flex flex-col items-center w-full" style={{ minHeight: '100vh' }}>

      {/* Heading text image */}
      <div className="mt-[70px] sm:mt-[88px] md:mt-[100px] px-4 flex justify-center w-full">
        <img
          src={headingImg}
          alt="पायोनियर किसान का सपना - अब खेती बने बिजनेस अपना"
          className="w-[75%] max-w-[280px] sm:max-w-[350px] md:max-w-[400px] h-auto"
          style={{ filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.1))' }}
        />
      </div>

      {/* Subtitle */}
      <div className="mt-3 sm:mt-4 text-center px-5">
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(14px, 4vw, 22px)',
            lineHeight: '150%',
            color: '#000',
          }}
        >
          अपना मुनाफा जानने के लिए
          <br />
          अपनी जानकारी भरें -
        </p>
      </div>

      {/* Form Fields */}
      <div className="w-full px-6 sm:px-8 mt-5 sm:mt-6 flex flex-col gap-4 sm:gap-5 max-w-[360px] sm:max-w-[420px]">

        {/* किसान का नाम */}
        <div className="flex items-center gap-2">
          <label
            className="whitespace-nowrap shrink-0"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(13px, 3.5vw, 18px)',
              color: '#000',
            }}
          >
            किसान का नाम :
          </label>
          <div className="flex-1">
            <input
              type="text"
              value={formData.name || ''}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full bg-transparent border-b-2 border-black/40 focus:border-pioneer-green outline-none py-1 text-[14px] sm:text-[16px] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
            {errors.name && <p className="text-red-600 text-[11px] mt-0.5">{errors.name}</p>}
          </div>
        </div>

        {/* मोबाइल नं. */}
        <div className="flex items-center gap-2">
          <label
            className="whitespace-nowrap shrink-0"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(13px, 3.5vw, 18px)',
              color: '#000',
            }}
          >
            मोबाइल नं. :
          </label>
          <div className="flex-1">
            <input
              type="tel"
              value={formData.mobile || ''}
              onChange={(e) => handleChange('mobile', e.target.value)}
              maxLength={10}
              className="w-full bg-transparent border-b-2 border-black/40 focus:border-pioneer-green outline-none py-1 text-[14px] sm:text-[16px] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
            {errors.mobile && <p className="text-red-600 text-[11px] mt-0.5">{errors.mobile}</p>}
          </div>
        </div>

        {/* राज्य */}
        <div className="flex items-center gap-2">
          <label
            className="whitespace-nowrap shrink-0"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(13px, 3.5vw, 18px)',
              color: '#000',
            }}
          >
            राज्य :
          </label>
          <div className="flex-1">
            <input
              type="text"
              value={formData.state || ''}
              onChange={(e) => handleChange('state', e.target.value)}
              className="w-full bg-transparent border-b-2 border-black/40 focus:border-pioneer-green outline-none py-1 text-[14px] sm:text-[16px] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
            {errors.state && <p className="text-red-600 text-[11px] mt-0.5">{errors.state}</p>}
          </div>
        </div>

        {/* जिला */}
        <div className="flex items-center gap-2">
          <label
            className="whitespace-nowrap shrink-0"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(13px, 3.5vw, 18px)',
              color: '#000',
            }}
          >
            जिला :
          </label>
          <div className="flex-1">
            <input
              type="text"
              value={formData.district || ''}
              onChange={(e) => handleChange('district', e.target.value)}
              className="w-full bg-transparent border-b-2 border-black/40 focus:border-pioneer-green outline-none py-1 text-[14px] sm:text-[16px] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
            {errors.district && <p className="text-red-600 text-[11px] mt-0.5">{errors.district}</p>}
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1 min-h-[20px]"></div>

      {/* CTA Button */}
      <div className="w-full px-5 sm:px-8 flex justify-center mb-3 sm:mb-4">
        <button
          onClick={handleSubmit}
          className="btn-shimmer flex items-center justify-center w-full py-3.5 sm:py-4 text-white cursor-pointer border-none"
          style={{
            background: 'linear-gradient(135deg, #0CB731 0%, #009111 100%)',
            borderRadius: '10px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(16px, 4.2vw, 24px)',
            letterSpacing: '0.3px',
            maxWidth: '330px',
            boxShadow: '0 4px 14px rgba(245,166,35,0.4)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          type="button"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(245,166,35,0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 14px rgba(245,166,35,0.4)';
          }}
        >
          कैलकुलेटर पर जाएँ
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
};

export default RegistrationForm;
