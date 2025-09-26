'use client';

import { useState, useEffect } from 'react';

export default function ConsultationModal({ isOpen, onClose }) {
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
          <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl">💫</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">一對一諮詢預約</h3>
          <p className="text-gray-600">掃描下方QR code加入LINE，開始你的命理之旅</p>
        </div>

        {/* QR Code Section */}
        <div className="text-center mb-6">
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 inline-block">
            <div className="w-48 h-48 rounded-lg overflow-hidden mb-4">
              <img 
                src="/line-qr-code.svg" 
                alt="LINE QR Code" 
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-xs text-gray-500">掃描QR code加入LINE好友</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 mb-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">或直接搜尋LINE ID：</p>
            <div className="bg-white rounded-lg px-4 py-2 inline-block">
              <span className="font-mono text-lg font-bold text-pink-600">start1001202</span>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span className="text-pink-500">1.</span>
            <span>掃描QR code或搜尋LINE ID</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-pink-500">2.</span>
            <span>加入好友後發送「諮詢預約」</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-pink-500">3.</span>
            <span>卡蘿會盡快回覆並安排諮詢時間</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
          >
            稍後再來
          </button>
          <button
            onClick={() => {
              // 複製LINE ID到剪貼板
              navigator.clipboard.writeText('start1001202');
              alert('LINE ID已複製到剪貼板！');
            }}
            className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-xl font-medium hover:from-pink-600 hover:to-pink-700 transition-all"
          >
            複製LINE ID
          </button>
        </div>
      </div>
    </div>
  );
}
