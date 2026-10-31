import React, { useState } from 'react';

const Calculator = ({ onNext, formData, setFormData, calcResults, setCalcResults }) => {
  const [totalCost, setTotalCost] = useState('');
  const [yieldPerAcre, setYieldPerAcre] = useState('');
  const [marketRate, setMarketRate] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleCalculate = () => {
    const cost = parseFloat(totalCost);
    const yieldVal = parseFloat(yieldPerAcre);
    const rate = parseFloat(marketRate);

    if (isNaN(cost) || isNaN(yieldVal) || isNaN(rate)) {
      alert('कृपया सभी फ़ील्ड में सही संख्या भरें');
      return;
    }

    const totalIncome = yieldVal * rate;
    const profit = totalIncome - cost;

    const results = {
      totalCost: cost,
      yieldPerAcre: yieldVal,
      marketRate: rate,
      totalIncome: totalIncome,
      profit: profit,
    };

    setCalcResults(results);
    setShowResults(true);

    console.log('🧮 Calculator Input:', { totalCost: cost, yieldPerAcre: yieldVal, marketRate: rate });
    console.log('📊 Calculator Results:', { totalIncome, profit });
  };

  const handleViewCertificate = () => {
    console.log('🏆 Certificate Data:', {
      ...formData,
      ...calcResults,
    });
    onNext();
  };

  return (
    <div className="relative z-[5] flex flex-col items-center w-full" style={{ minHeight: '100vh' }}>

      {/* Header Title */}
      <div className="mt-[70px] sm:mt-[85px] md:mt-[95px] text-center px-5">
        <h1
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(18px, 5vw, 30px)',
            lineHeight: '130%',
            color: '#000',
          }}
        >
          अपनी फसल का मुनाफा जानें
        </h1>
        <p
          className="mt-1"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(12px, 3.2vw, 16px)',
            color: '#333',
          }}
        >
          जानकारी भरें और तुरंत रिजल्ट देखें -
        </p>
      </div>

      {/* Calculator Form */}
      <div className="w-full px-5 sm:px-8 mt-5 sm:mt-6 flex flex-col gap-4 max-w-[360px] sm:max-w-[420px]">

        {/* कुल लागत */}
        <div>
          <label
            className="block mb-1"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(13px, 3.5vw, 17px)',
              color: '#000',
            }}
          >
            कुल लागत (₹/एकड़)
          </label>
          <input
            type="number"
            value={totalCost}
            onChange={(e) => setTotalCost(e.target.value)}
            placeholder="उदाहरण: 15000"
            className="w-full border-2 border-black/30 rounded-lg py-2.5 px-3 bg-white/80 text-[14px] sm:text-[16px] outline-none focus:border-pioneer-green transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
        </div>

        {/* पैदावार */}
        <div>
          <label
            className="block mb-1"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(13px, 3.5vw, 17px)',
              color: '#000',
            }}
          >
            पैदावार (क्विंटल/एकड़)
          </label>
          <input
            type="number"
            value={yieldPerAcre}
            onChange={(e) => setYieldPerAcre(e.target.value)}
            placeholder="उदाहरण: 30"
            className="w-full border-2 border-black/30 rounded-lg py-2.5 px-3 bg-white/80 text-[14px] sm:text-[16px] outline-none focus:border-pioneer-green transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
        </div>

        {/* मार्केट रेट */}
        <div>
          <label
            className="block mb-1"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(13px, 3.5vw, 17px)',
              color: '#000',
            }}
          >
            मार्केट रेट (₹/क्विंटल)
          </label>
          <input
            type="number"
            value={marketRate}
            onChange={(e) => setMarketRate(e.target.value)}
            placeholder="उदाहरण: 2000"
            className="w-full border-2 border-black/30 rounded-lg py-2.5 px-3 bg-white/80 text-[14px] sm:text-[16px] outline-none focus:border-pioneer-green transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
        </div>

        {/* Calculate Button */}
        <button
          onClick={handleCalculate}
          className="btn-shimmer w-full py-3 sm:py-3.5 text-white cursor-pointer border-none mt-1"
          style={{
            background: 'linear-gradient(135deg, #0CB731 0%, #009111 100%)',
            borderRadius: '10px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(15px, 4vw, 22px)',
            boxShadow: '0 4px 14px rgba(12,183,49,0.35)',
            transition: 'transform 0.2s ease',
          }}
          type="button"
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          कैलकुलेट करें
        </button>

        {/* Results Table */}
        {showResults && calcResults && (
          <div
            className="w-full border-2 border-pioneer-green rounded-lg overflow-hidden mt-1"
            style={{ animation: 'fadeIn 0.4s ease' }}
          >
            <div className="grid grid-cols-2">
              <div
                className="py-3 text-center border-r-2 border-pioneer-green"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(14px, 3.5vw, 18px)',
                }}
              >
                <div className="text-[12px] sm:text-[14px] text-black/60 mb-1">कुल आय</div>
                <div className="text-pioneer-green">
                  ₹{calcResults.totalIncome?.toLocaleString('en-IN')}
                </div>
              </div>
              <div
                className="py-3 text-center"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(14px, 3.5vw, 18px)',
                }}
              >
                <div className="text-[12px] sm:text-[14px] text-black/60 mb-1">मुनाफा</div>
                <div className={calcResults.profit >= 0 ? 'text-pioneer-green' : 'text-red-600'}>
                  ₹{calcResults.profit?.toLocaleString('en-IN')}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View Certificate Button */}
        {showResults && (
          <button
            onClick={handleViewCertificate}
            className="btn-shimmer w-full py-3.5 sm:py-4 text-white cursor-pointer border-none mt-1"
            style={{
              background: 'linear-gradient(135deg, #0CB731 0%, #009111 100%)',
              borderRadius: '10px',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(15px, 4vw, 22px)',
              boxShadow: '0 4px 14px rgba(12,183,49,0.35)',
              transition: 'transform 0.2s ease',
              animation: 'fadeIn 0.4s ease',
            }}
            type="button"
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            अपना सर्टिफिकेट देखें
          </button>
        )}
      </div>

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

export default Calculator;
