import React, { useState, useEffect } from "react";
import {
  Home,
  ArrowLeft,
  Search,
  AlertTriangle,
  Zap,
  Star,
  Moon,
  Sun,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleBackHome = () => {
    setIsAnimating(true);
    setTimeout(() => {
      // Navigate to home - replace with your navigation logic
      navigate("/");
      setIsAnimating(false);
    }, 500);
  };

  // Floating elements animation
  const floatingElements = Array.from({ length: 8 }, (_, i) => (
    <div
      key={i}
      className={`absolute opacity-20 text-blue-300 animate-pulse`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${2 + Math.random() * 2}s`,
      }}
    >
      {i % 4 === 0 && <Star size={16} />}
      {i % 4 === 1 && <Zap size={14} />}
      {i % 4 === 2 && <Moon size={12} />}
      {i % 4 === 3 && <Sun size={18} />}
    </div>
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      {floatingElements}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="relative mb-8">
            <div className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse">
              404
            </div>
            <div className="absolute inset-0 text-8xl md:text-9xl font-black text-white opacity-10 blur-sm">
              404
            </div>
          </div>

          {/* Error Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                <AlertTriangle size={40} className="text-white" />
              </div>
              <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Page Not Found
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-delay">
            Oops! The page you're looking for seems to have vanished into the
            digital void. Don't worry, even the best explorers sometimes take a
            wrong turn.
          </p>

          {/* Search Bar */}
          <div className="relative mb-8 animate-fade-in-delay-2">
            <div className="relative max-w-md mx-auto">
              <Search
                size={20}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search for something..."
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
            <button
              onClick={handleBackHome}
              disabled={isAnimating}
              className={`group relative px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white cursor-pointer font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 ${
                isAnimating ? "animate-pulse" : ""
              }`}
            >
              <span className="flex items-center">
                <Home size={20} className="mr-2" />
                Back to Home
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </button>

            <button
              className=" cursor-pointer group px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
              onClick={() => navigate(-1)}
            >
              <span className="flex items-center">
                <ArrowLeft size={20} className="mr-2" />
                Go Back
              </span>
            </button>
          </div>

          {/* Help Links */}
          <div className="mt-12 animate-fade-in-delay-4">
            <p className="text-gray-400 mb-4">Need help? Try these links:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-300 hover:underline"
              >
                FAQ
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-300 hover:underline"
              >
                Contact Support
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-300 hover:underline"
              >
                Site Map
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-300 hover:underline"
              >
                Report Issue
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-auto">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0.3)" />
            </linearGradient>
          </defs>
          <path
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="url(#waveGradient)"
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-4 {
          animation: fade-in 0.8s ease-out 0.8s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
