import React, { useState } from 'react';
import { ChatWindow } from './components/ChatWindow';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans bg-white text-necro-black flex flex-col">
      {/* 11. Simple Navigation (Recreated from HTML) */}
      <nav className="fixed w-full z-50 bg-white border-b-2 border-black top-0 h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.location.reload()}>
              <div className="w-8 h-8 bg-necro-black text-necro-yellow flex items-center justify-center font-heading font-bold text-xl border border-black">N</div>
              <span className="font-heading font-bold text-2xl tracking-tight">necrobyte</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#" className="text-black font-medium hover:underline decoration-2 underline-offset-4">Features</a>
              <a href="#" className="text-black font-medium hover:underline decoration-2 underline-offset-4">Pricing</a>
              <div className="flex items-center gap-2 px-3 py-1 bg-necro-green border-2 border-black shadow-hard-sm">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                <span className="text-xs font-bold uppercase">AI Active</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-black focus:outline-none p-2 border-2 border-black shadow-hard-sm active:translate-y-1 active:shadow-none transition-all bg-necro-gray"
              >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-necro-yellow border-t-2 border-black p-4 absolute w-full z-50 shadow-hard">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-black font-bold text-lg border-b-2 border-black pb-2">Features</a>
              <a href="#" className="text-black font-bold text-lg border-b-2 border-black pb-2">Pricing</a>
              <div className="bg-black text-white p-2 text-center font-bold">AI ASSISTANT ACTIVE</div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area - Pushed down by fixed nav */}
      <main className="pt-16 flex-grow flex flex-col">
        <ChatWindow />
      </main>
    </div>
  );
};

export default App;