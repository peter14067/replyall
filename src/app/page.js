'use client';

import { useState } from 'react';
import ConsultationModal from './components/ConsultationModal';
import SelfOrderModal from './components/SelfOrderModal';

export default function Home() {
  const [activeTab, setActiveTab] = useState('consultation');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isSelfOrderModalOpen, setIsSelfOrderModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">卡</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">卡蘿</h1>
                <p className="text-sm text-gray-600">偶爾潑辣偶爾溫柔的命理師🤍</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => setIsConsultationModalOpen(true)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeTab === 'consultation' 
                    ? 'bg-pink-500 text-white' 
                    : 'text-gray-600 hover:text-pink-500'
                }`}
              >
                一對一諮詢
              </button>
              <button 
                onClick={() => setActiveTab('courses')}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeTab === 'courses' 
                    ? 'bg-pink-500 text-white' 
                    : 'text-gray-600 hover:text-pink-500'
                }`}
              >
                八字課程
              </button>
              <button 
                onClick={() => setActiveTab('booking')}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeTab === 'booking' 
                    ? 'bg-pink-500 text-white' 
                    : 'text-gray-600 hover:text-pink-500'
                }`}
              >
                預約表單
              </button>
              <button 
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScB_iL1I63tXe6ktEyhvE9WPbyen8pNf2D8Gnh1vc0rFIWAmQ/viewform', '_blank')}
                className="px-4 py-2 rounded-full transition-colors text-gray-600 hover:text-pink-500"
              >
                八字預約表
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
              歡迎來到卡蘿的命理世界
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              專業八字命理諮詢 • 線上課程教學 • 個人化開運指導
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">
                ✨ 一對一諮詢請點我
              </div>
              <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                📚 學習八字課程
              </div>
              <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                📅 八字預約表
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* 一對一諮詢 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💫</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">一對一諮詢</h3>
              <p className="text-gray-600 mb-4">個人化命理分析，深入了解你的命運軌跡</p>
              <button 
                onClick={() => setIsConsultationModalOpen(true)}
                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-xl font-medium hover:from-pink-600 hover:to-pink-700 transition-all"
              >
                立即預約
              </button>
            </div>
          </div>

          {/* 八字課程 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">八字課程</h3>
              <p className="text-gray-600 mb-4">系統性學習八字命理，掌握命運密碼</p>
              <button 
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfSX51b0Xp5z8piNiEjemqEQvLhoXSr9MXX_e74GEXzKyZ1Fg/viewform', '_blank')}
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-xl font-medium hover:from-purple-600 hover:to-purple-700 transition-all"
              >
                查看課程
              </button>
            </div>
          </div>

          {/* 開運法寶 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔮</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">開運法寶</h3>
              <p className="text-gray-600 mb-4">精選開運商品，助你提升運勢能量</p>
              <button 
                onClick={() => setIsSelfOrderModalOpen(true)}
                className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-3 rounded-xl font-medium hover:from-indigo-600 hover:to-indigo-700 transition-all"
              >
                自助下單
              </button>
            </div>
          </div>

          {/* 八字預約表 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">八字預約表</h3>
              <p className="text-gray-600 mb-4">填寫預約表單，安排專屬八字全盤分析時間</p>
              <button 
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScB_iL1I63tXe6ktEyhvE9WPbyen8pNf2D8Gnh1vc0rFIWAmQ/viewform', '_blank')}
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 rounded-xl font-medium hover:from-emerald-600 hover:to-emerald-700 transition-all"
              >
                填寫預約表
              </button>
            </div>
          </div>
        </div>

        {/* Course Details Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">八字學習課程內容</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-4">課程分為初中高</h4>
              <p className="text-gray-600 mb-6">（一次課程大約兩小時）</p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🪄</span>
                  <span className="text-gray-700">五行.天干.地支關係</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🪄</span>
                  <span className="text-gray-700">地支衝合害刑局.馬花庫</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🪄</span>
                  <span className="text-gray-700">十神有哪些？</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🪄</span>
                  <span className="text-gray-700">論盤實戰解析</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">課程特色</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-500 text-xl">✨</span>
                  <span className="text-gray-700">採用線上上課</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-500 text-xl">✨</span>
                  <span className="text-gray-700">可以跟八字老師約方便時間上課</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-500 text-xl">✨</span>
                  <span className="text-gray-700">終身複習不到四位數</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white/60 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  任何問題可以直接➕line id: start1001202
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">準備好開始你的命理之旅了嗎？</h3>
            <p className="text-lg mb-6 opacity-90">立即聯繫卡蘿，開啟專屬於你的命運解讀</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setIsConsultationModalOpen(true)}
                className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
              >
                立即預約諮詢
              </button>
              <button 
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfSX51b0Xp5z8piNiEjemqEQvLhoXSr9MXX_e74GEXzKyZ1Fg/viewform', '_blank')}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-colors"
              >
                查看課程詳情
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 卡蘿命理工作室. 專業八字命理諮詢服務</p>
        </div>
      </footer>

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationModalOpen} 
        onClose={() => setIsConsultationModalOpen(false)} 
      />

      {/* Self Order Modal */}
      <SelfOrderModal 
        isOpen={isSelfOrderModalOpen} 
        onClose={() => setIsSelfOrderModalOpen(false)} 
      />
    </div>
  );
}
