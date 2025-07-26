import React from "react";
import { Loader2, Sparkles } from "lucide-react";

const FullScreenLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white via-[#f1f5f9] to-white text-gray-800 overflow-hidden">
      {/* Floating bubbles animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 bg-blue-100 rounded-full top-[-60px] left-[-60px] blur-3xl opacity-70 animate-pulse" />
        <div className="absolute w-72 h-72 bg-purple-100 rounded-full bottom-[-60px] right-[-60px] blur-3xl opacity-70 animate-ping" />
      </div>

      {/* Loader Spinner with inner glow */}
      <div className="relative flex items-center justify-center">
        <div className="h-20 w-20 rounded-full border-[5px] border-blue-500 border-t-transparent animate-spin shadow-xl shadow-blue-300/40"></div>
        <div className="absolute h-24 w-24 rounded-full border border-blue-200 animate-ping opacity-50"></div>
      </div>

      {/* Main loading text */}
      <h1 className="mt-6 flex items-center gap-2 text-2xl font-semibold tracking-tight text-blue-700 animate-fade-in-up">
        <Sparkles className="h-6 w-6 text-indigo-400 animate-bounce" />
        Loading Your Portfolio
      </h1>

      {/* Subtext */}
      <p className="mt-2 text-sm text-gray-500 animate-fade-in delay-200">
        Please wait a moment while we prepare everything...
      </p>
    </div>
  );
};

export default FullScreenLoader;
