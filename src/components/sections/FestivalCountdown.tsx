/**
 * Festival Countdown Component
 * 
 * Countdown timer to Origin Festival (Jan 30 - Feb 1, 2026)
 * Creates urgency for booking makeup services
 * 
 * @component
 * @returns {JSX.Element} Countdown timer with call-to-action
 */

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Sparkles, ArrowRight } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function FestivalCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isExpired, setIsExpired] = useState(false);
  
  // Origin Festival dates
  const festivalStart = new Date('2026-01-30T00:00:00');
  const festivalEnd = new Date('2026-02-01T23:59:59');
  const festivalName = "Origin Festival";
  const festivalLocation = "Byron Bay, NSW";
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = festivalStart.getTime() - now.getTime();
      
      // Check if festival has started or ended
      if (now >= festivalStart && now <= festivalEnd) {
        setIsExpired(false);
        // Festival is happening NOW!
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      } else if (now > festivalEnd) {
        setIsExpired(true);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
      
      // Calculate time left
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      return { days, hours, minutes, seconds };
    };
    
    // Initial calculation
    setTimeLeft(calculateTimeLeft());
    
    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  if (isExpired) {
    return null; // Don't show if festival is over
  }
  
  const isFestivalHappening = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;
  
  return (
    <section className="py-section bg-festival-countdown-section relative overflow-hidden transition-colors duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-festival-countdown-circle rounded-full blur-3xl animate-pulse transition-colors duration-300" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-festival-countdown-circle rounded-full blur-3xl animate-pulse delay-1000 transition-colors duration-300" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-festival-countdown-circle rounded-full blur-2xl animate-pulse delay-500 transition-colors duration-300" />
      </div>
      
      <div className="max-w-6xl mx-auto px-fluid-md relative z-10">
        {isFestivalHappening ? (
          // Festival is happening NOW!
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-fluid-lg animate-bounce">
              <Sparkles className="w-6 h-6 text-yellow-300 animate-spin" />
              <span className="text-xl font-body font-bold text-festival-badge transition-colors duration-300">
                HAPPENING NOW!
              </span>
              <Sparkles className="w-6 h-6 text-yellow-300 animate-spin" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-festival-heading mb-fluid-md transition-colors duration-300">
              {festivalName} is Here! 🎉
            </h2>
            
            <p className="text-xl md:text-2xl font-body text-festival-body mb-fluid-lg transition-colors duration-300">
              The festival is happening right now in {festivalLocation}!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 font-body font-bold text-xl rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
              >
                Book Next Festival
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        ) : (
          // Countdown to festival
          <>
            {/* Festival Info */}
            <div className="text-center mb-fluid-xl">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-fluid-md">
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-body font-semibold text-festival-badge uppercase tracking-wide transition-colors duration-300">
                  Coming Soon
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-festival-heading mb-fluid-sm transition-colors duration-300">
                {festivalName}
              </h2>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-festival-body text-lg font-body transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Jan 30 - Feb 1, 2026</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-gray-400 dark:bg-white/50 rounded-full" />
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{festivalLocation}</span>
                </div>
              </div>
            </div>
            
            {/* Countdown Timer */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-fluid-xl">
              {/* Days */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 md:p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-5xl md:text-7xl font-title font-bold text-festival-timer-number mb-2 transition-colors duration-300">
                  {timeLeft.days}
                </div>
                <div className="text-lg md:text-xl font-body font-medium text-festival-timer-label uppercase tracking-wide transition-colors duration-300">
                  Days
                </div>
              </div>
              
              {/* Hours */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 md:p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-5xl md:text-7xl font-title font-bold text-festival-timer-number mb-2 transition-colors duration-300">
                  {timeLeft.hours}
                </div>
                <div className="text-lg md:text-xl font-body font-medium text-festival-timer-label uppercase tracking-wide transition-colors duration-300">
                  Hours
                </div>
              </div>
              
              {/* Minutes */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 md:p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-5xl md:text-7xl font-title font-bold text-festival-timer-number mb-2 transition-colors duration-300">
                  {timeLeft.minutes}
                </div>
                <div className="text-lg md:text-xl font-body font-medium text-festival-timer-label uppercase tracking-wide transition-colors duration-300">
                  Minutes
                </div>
              </div>
              
              {/* Seconds */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 md:p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-5xl md:text-7xl font-title font-bold text-festival-timer-number mb-2 transition-colors duration-300">
                  {timeLeft.seconds}
                </div>
                <div className="text-lg md:text-xl font-body font-medium text-festival-timer-label uppercase tracking-wide transition-colors duration-300">
                  Seconds
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center">
              <p className="text-xl md:text-2xl font-body text-festival-body mb-fluid-lg transition-colors duration-300">
                Don't miss out! Book your festival makeup now for a radiant look that lasts all weekend ✨
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 font-body font-bold text-xl rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
                >
                  Book Your Spot Now
                  <ArrowRight className="w-6 h-6" />
                </a>
                
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 font-body font-bold text-xl rounded-lg hover:bg-white/30 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
                >
                  <Sparkles className="w-6 h-6" />
                  View Festival Looks
                </a>
              </div>
              
              {/* Urgency Message */}
              {timeLeft.days < 14 && (
                <div className="mt-fluid-lg">
                  <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-body font-bold animate-pulse">
                    <Clock className="w-5 h-5" />
                    Limited availability - Book soon!
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}