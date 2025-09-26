'use client';

import { useState, useEffect } from 'react';

export default function SelfOrderModal({ isOpen, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleOrderRedirect = () => {
    window.open('https://myship.7-11.com.tw/general/detail/GM2301174047589', '_blank');
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl p-8 mx-4 max-w-md w-full shadow-2xl transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl">🔮</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">自助下單</h3>
          <p className="text-gray-600">前往7-11賣貨便選購開運法寶</p>
        </div>

        {/* Product Info */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-6">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">卡蘿的開運小法寶🌟</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>✨ 十全咖啡/一盒15包 - NT$249</p>
              <p>✨ 隨身小財甕🌟 - NT$680</p>
              <p>✨ 開運羅盤✨ - NT$2000</p>
              <p>✨ 棗眠有酵/一盒14包 - NT$880</p>
              <p>✨ 纖女除濕茶/1盒15包 - NT$680</p>
              <p>✨ 願望放大器🌟 - NT$1800</p>
              <p>✨ 成為長髮公主的秘密🤫 - NT$680</p>
              <p>✨ 蔓越莓益生菌 - NT$1280</p>
              <p>✨ 香香私密洗 - NT$680</p>
              <p>✨ 招財精油 - NT$1200</p>
              <p>✨ 芙蓉沐浴乳 - NT$350</p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="space-y-3 text-sm text-gray-600 mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-indigo-500">1.</span>
            <span>點擊「前往選購」按鈕</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-indigo-500">2.</span>
            <span>在7-11賣貨便平台選擇商品</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-indigo-500">3.</span>
            <span>完成下單並選擇取貨方式</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
          >
            稍後再來
          </button>
          <button
            onClick={handleOrderRedirect}
            className="flex-1 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-3 rounded-xl font-medium hover:from-indigo-600 hover:to-indigo-700 transition-all"
          >
            前往選購
          </button>
        </div>
      </div>
    </div>
  );
}
