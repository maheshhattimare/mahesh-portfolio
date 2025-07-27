import { useState, useEffect } from "react";
import { Sparkles, Code2 } from "lucide-react";

const FullScreenLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 15;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-[#050414] dark:to-purple-900/20 text-gray-800 dark:text-white overflow-hidden">
      {/* Minimal background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle floating orbs */}
        <div className="absolute w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full top-[-50px] left-[-50px] blur-3xl animate-pulse" />
        <div className="absolute w-48 h-48 bg-gradient-to-r from-purple-200/20 to-blue-200/20 dark:from-purple-500/10 dark:to-blue-500/10 rounded-full bottom-[-30px] right-[-30px] blur-3xl animate-pulse animation-delay-300" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:50px_50px] opacity-10"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Simple elegant loader */}
        <div className="relative flex items-center justify-center mb-8">
          {/* Outer ring */}
          <div className="absolute h-20 w-20 rounded-full border-2 border-blue-200/30 dark:border-blue-400/30 animate-spin"></div>

          {/* Inner gradient ring */}
          <div
            className="h-16 w-16 rounded-full border-4 border-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:from-[#8245ec] dark:to-purple-400 animate-spin shadow-lg"
            style={{
              background:
                "conic-gradient(from 0deg, transparent, #3b82f6, #8b5cf6, transparent)",
              WebkitMask: "radial-gradient(circle, transparent 65%, black 65%)",
              mask: "radial-gradient(circle, transparent 65%, black 65%)",
            }}
          ></div>

          {/* Center dot */}
          <div className="absolute h-3 w-3 bg-blue-600 dark:bg-[#8245ec] rounded-full animate-pulse"></div>
        </div>

        {/* Brand/Logo area */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-3 mb-3">
            <Code2 className="h-8 w-8 text-blue-600 dark:text-[#8245ec]" />
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-300 dark:to-blue-200 bg-clip-text text-transparent">
              Portfolio
            </h1>
            <Sparkles className="h-8 w-8 text-blue-600 dark:text-[#8245ec]" />
          </div>
        </div>

        {/* Simple loading text */}
        <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-6">
          Loading...
        </h2>

        {/* Progress bar */}
        <div className="w-64 max-w-[80vw] mb-6">
          <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-[#8245ec] dark:to-purple-400 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>

        {/* Simple description */}
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm max-w-sm px-4">
          Please wait while we prepare everything for you
        </p>
      </div>

      {/* Bottom minimal decoration */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 opacity-30">
        <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent dark:via-[#8245ec]"></div>
        <div className="w-1 h-1 bg-blue-500 dark:bg-[#8245ec] rounded-full animate-pulse"></div>
        <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent dark:via-[#8245ec]"></div>
      </div>
    </div>
  );
};

export default FullScreenLoader;
