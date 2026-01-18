/**
 * ThemeToggle Component
 * 
 * Toggle between light and deep purple dark mode themes
 * 
 * @component
 * @returns {JSX.Element} Theme toggle button with sun/moon icons
 * 
 * @accessibility
 * - ARIA label for screen readers
 * - Keyboard navigation (Tab, Enter, Space)
 * - Focus visible indicators
 * - Reduced motion support
 * 
 * @example
 * <ThemeToggle />
 */

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  
  // Check for saved theme preference or system preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  // Toggle theme
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };
  
  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleTheme();
    }
  };
  
  return (
    <button
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] flex items-center justify-center bg-theme-toggle border-w-200 border-theme-toggle rounded-900 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-purple-500/50 shadow-theme-toggle hover:shadow-400 dark:shadow-400 group"
    >
      {/* Sun Icon (Light Mode) */}
      <Sun 
        className={`
          absolute w-[22px] h-[22px] sm:w-[25px] sm:h-[25px] text-theme-sun
          transition-all duration-200
          ${darkMode ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}
          group-hover:scale-110
        `}
        strokeWidth={1.875}
      />
      
      {/* Moon Icon (Dark Mode) */}
      <Moon 
        className={`
          absolute w-[22px] h-[22px] sm:w-[25px] sm:h-[25px] text-theme-moon
          transition-all duration-200
          ${darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}
          group-hover:scale-110
        `}
        strokeWidth={1.875}
      />
      
      {/* Screen reader only text */}
      <span className="sr-only">
        {darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
    </button>
  );
}