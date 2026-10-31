import React, { useState, useMemo } from 'react';
import headingImg from '../../assets/02 1.png';
import stateDistrictData from '../../data/stateDistrictData';

const RegistrationForm = ({ onNext, formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  // Get sorted state list
  const stateList = useMemo(() => Object.keys(stateDistrictData).sort(), []);

  // Get districts based on selected state
  const districtList = useMemo(() => {
    if (formData.state && stateDistrictData[formData.state]) {
      return stateDistrictData[formData.state].sort();
    }
    return [];
  }, [formData.state]);

  const handleChange = (field, value) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value };
      // Reset district when state changes
      if (field === 'state') {
        updated.district = '';
      }
      return updated;
    });
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name?.trim()) newErrors.name = 'कृपया नाम भरें';
    if (!formData.mobile?.trim()) newErrors.mobile = 'कृपया मोबाइल नंबर भरें';
    else if (!/^[6-9][0-9]{9}$/.test(formData.mobile.trim())) newErrors.mobile = '10 अंकों का सही नंबर भरें';
    if (!formData.state) newErrors.state = 'कृपया राज्य चुनें';
    if (!formData.district) newErrors.district = 'कृपया जिला चुनें';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log('📋 Registration Data:', {
        ...formData,
        mobile: '+91' + formData.mobile,
      });
      onNext();
    }
  };

  // Common label style
  const labelStyle = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    fontSize: 'clamp(13px, 3.5vw, 18px)',
    color: '#000',
  };

  // Common select/input style
  const inputClassName = "w-full bg-transparent border-b-2 border-black/40 focus:border-[#009111] outline-none py-1.5 text-[14px] sm:text-[16px] transition-colors appearance-none";

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
      <div className="w-full px-6 sm:px-8 mt-5 sm:mt-6 flex flex-col gap-5 sm:gap-6 max-w-[360px] sm:max-w-[420px]">

        {/* ===== किसान का नाम ===== */}
        <div className="flex items-center gap-2">
          <label className="whitespace-nowrap shrink-0" style={labelStyle}>
            किसान का नाम :
          </label>
          <div className="flex-1">
            <input
              type="text"
              value={formData.name || ''}
              onChange={(e) => handleChange('name', e.target.value)}
              className={inputClassName}
              style={{ fontFamily: "'Inter', sans-serif" }}
              placeholder="नाम लिखें"
            />
            {errors.name && <p className="text-red-600 text-[11px] mt-0.5">{errors.name}</p>}
          </div>
        </div>

        {/* ===== मोबाइल नं. (+91 prefix) ===== */}
        <div className="flex items-center gap-2">
          <label className="whitespace-nowrap shrink-0" style={labelStyle}>
            मोबाइल नं. :
          </label>
          <div className="flex-1">
            <div className="flex items-center border-b-2 border-black/40 focus-within:border-[#009111] transition-colors">
              <span
                className="shrink-0 text-[14px] sm:text-[16px] pr-1 select-none"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#333' }}
              >
                +91
              </span>
              <input
                type="tel"
                value={formData.mobile || ''}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                  handleChange('mobile', val);
                }}
                maxLength={10}
                inputMode="numeric"
                pattern="[0-9]*"
                className="w-full bg-transparent outline-none py-1.5 text-[14px] sm:text-[16px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
                placeholder="9876543210"
              />
            </div>
            {errors.mobile && <p className="text-red-600 text-[11px] mt-0.5">{errors.mobile}</p>}
          </div>
        </div>

        {/* ===== राज्य (State dropdown) ===== */}
        <div className="flex items-center gap-2">
          <label className="whitespace-nowrap shrink-0" style={labelStyle}>
            राज्य :
          </label>
          <div className="flex-1 relative">
            <select
              value={formData.state || ''}
              onChange={(e) => handleChange('state', e.target.value)}
              className={`${inputClassName} cursor-pointer bg-transparent pr-6`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <option value="" disabled>राज्य चुनें</option>
              {stateList.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            {/* Dropdown arrow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {errors.state && <p className="text-red-600 text-[11px] mt-0.5">{errors.state}</p>}
          </div>
        </div>

        {/* ===== जिला (District dropdown, based on state) ===== */}
        <div className="flex items-center gap-2">
          <label className="whitespace-nowrap shrink-0" style={labelStyle}>
            जिला :
          </label>
          <div className="flex-1 relative">
            <select
              value={formData.district || ''}
              onChange={(e) => handleChange('district', e.target.value)}
              className={`${inputClassName} cursor-pointer bg-transparent pr-6`}
              style={{ fontFamily: "'Inter', sans-serif" }}
              disabled={!formData.state}
            >
              <option value="" disabled>
                {formData.state ? 'जिला चुनें' : 'पहले राज्य चुनें'}
              </option>
              {districtList.map((district) => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
            {/* Dropdown arrow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
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
            boxShadow: '0 4px 14px rgba(12,183,49,0.4)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          type="button"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(12,183,49,0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 14px rgba(12,183,49,0.4)';
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
