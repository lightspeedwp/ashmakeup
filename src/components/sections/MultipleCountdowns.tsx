/**
 * Multiple Festival Countdowns Component
 * 
 * Displays countdowns to multiple upcoming festivals
 * Shows the next 3 upcoming festivals with smart date handling
 * 
 * @component
 * @returns {JSX.Element} Multiple countdown timers with festival information
 */

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

interface Festival {
  name: string;
  startDate: Date;
  endDate: Date;
  location: string;
  color: {
    from: string;
    via: string;
    to: string;
  };
  darkColor: {
    from: string;
    via: string;
    to: string;
  };
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Festival data - Update these dates each year
const FESTIVALS: Festival[] = [
  {
    name: "Origin Festival",
    startDate: new Date('2026-01-30T00:00:00'),
    endDate: new Date('2026-02-01T23:59:59'),
    location: "Byron Bay, NSW",
    color: {
      from: "purple-600",
      via: "pink-500",
      to: "blue-500"
    },
    darkColor: {
      from: "purple-900",
      via: "pink-900",
      to: "blue-900"
    }
  },
  {
    name: "Rainbow Serpent",
    startDate: new Date('2026-01-23T00:00:00'),
    endDate: new Date('2026-01-26T23:59:59'),
    location: "Lexton, VIC",
    color: {
      from: "green-500",
      via: "teal-400",
      to: "cyan-500"
    },
    darkColor: {
      from: "green-900",
      via: "teal-900",
      to: "cyan-900"
    }
  },
  {
    name: "Earth Frequency",
    startDate: new Date('2026-02-13T00:00:00'),
    endDate: new Date('2026-02-16T23:59:59'),
    location: "Southeast Queensland",
    color: {
      from: "amber-500",
      via: "orange-500",
      to: "red-500"
    },
    darkColor: {
      from: "amber-900",
      via: "orange-900",
      to: "red-900"
    }
  }
];

export function MultipleCountdowns() {
  const [festivalStates, setFestivalStates] = useState<{
    [key: string]: {
      timeLeft: TimeLeft;
      isHappening: boolean;
      hasEnded: boolean;
    }
  }>({});

  useEffect(() => {
    const calculateStates = () => {
      const now = new Date();
      const newStates: typeof festivalStates = {};

      FESTIVALS.forEach((festival) => {
        const difference = festival.startDate.getTime() - now.getTime();
        
        // Check if festival is happening now
        if (now >= festival.startDate && now <= festival.endDate) {
          newStates[festival.name] = {
            timeLeft: { days: 0, hours: 0, minutes: 0, seconds: 0 },
            isHappening: true,
            hasEnded: false
          };
        }
        // Check if festival has ended
        else if (now > festival.endDate) {
          newStates[festival.name] = {
            timeLeft: { days: 0, hours: 0, minutes: 0, seconds: 0 },
            isHappening: false,
            hasEnded: true
          };
        }
        // Festival is upcoming
        else {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);
          
          newStates[festival.name] = {
            timeLeft: { days, hours, minutes, seconds },
            isHappening: false,
            hasEnded: false
          };
        }
      });

      setFestivalStates(newStates);
    };

    // Initial calculation
    calculateStates();

    // Update every second
    const timer = setInterval(calculateStates, 1000);

    return () => clearInterval(timer);
  }, []);

  // Filter to show only upcoming or happening festivals
  const activeFestivals = FESTIVALS.filter(
    festival => !festivalStates[festival.name]?.hasEnded
  ).slice(0, 3); // Show max 3 festivals

  if (activeFestivals.length === 0) {
    return null; // Don't show if no active festivals
  }

  return (
    <section className="py-section bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-purple-950/20 dark:via-purple-900/10 dark:to-purple-950/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-fluid-md relative z-10">
        {/* Section Header */}
        <div className="text-center mb-fluid-2xl">
          <h2 className="text-section-h2 font-heading font-bold text-gradient-pink-purple-blue mb-fluid-md">
            Upcoming Festival Season
          </h2>
          <p className="text-body-guideline font-body text-gray-600 dark:text-purple-200 max-w-2xl mx-auto">
            Book your festival makeup early to secure your spot ✨
          </p>
        </div>

        {/* Festival Countdowns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-fluid-lg">
          {activeFestivals.map((festival) => {
            const state = festivalStates[festival.name];
            if (!state) return null;

            const colorClasses = `from-${festival.color.from} via-${festival.color.via} to-${festival.color.to}`;
            const darkColorClasses = `dark:from-${festival.darkColor.from} dark:via-${festival.darkColor.via} dark:to-${festival.darkColor.to}`;

            return (
              <div
                key={festival.name}
                className={`
                  relative overflow-hidden rounded-2xl p-fluid-lg
                  bg-gradient-to-br ${colorClasses} ${darkColorClasses}
                  shadow-xl hover:shadow-2xl transition-all duration-300
                  transform hover:scale-105
                `}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 overflow-hidden opacity-10">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Festival Info */}
                  <div className="mb-fluid-md">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-5 h-5 text-white" />
                      <h3 className="text-2xl font-heading font-bold text-white">
                        {festival.name}
                      </h3>
                    </div>
                    <div className="flex flex-col gap-1 text-white/90 text-sm font-body">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {festival.startDate.toLocaleDateString('en-AU', {
                            month: 'short',
                            day: 'numeric'
                          })}{' '}
                          -{' '}
                          {festival.endDate.toLocaleDateString('en-AU', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{festival.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Status or Countdown */}
                  {state.isHappening ? (
                    <div className="text-center py-fluid-md">
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full animate-bounce">
                        <Sparkles className="w-5 h-5 text-yellow-300 animate-spin" />
                        <span className="text-lg font-body font-bold text-white">
                          HAPPENING NOW!
                        </span>
                        <Sparkles className="w-5 h-5 text-yellow-300 animate-spin" />
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Countdown Timer */}
                      <div className="grid grid-cols-4 gap-2 mb-fluid-md">
                        <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-3">
                          <div className="text-3xl font-title font-bold text-white">
                            {state.timeLeft.days}
                          </div>
                          <div className="text-xs font-body text-white/80 uppercase">
                            Days
                          </div>
                        </div>
                        <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-3">
                          <div className="text-3xl font-title font-bold text-white">
                            {state.timeLeft.hours}
                          </div>
                          <div className="text-xs font-body text-white/80 uppercase">
                            Hours
                          </div>
                        </div>
                        <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-3">
                          <div className="text-3xl font-title font-bold text-white">
                            {state.timeLeft.minutes}
                          </div>
                          <div className="text-xs font-body text-white/80 uppercase">
                            Mins
                          </div>
                        </div>
                        <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-3">
                          <div className="text-3xl font-title font-bold text-white">
                            {state.timeLeft.seconds}
                          </div>
                          <div className="text-xs font-body text-white/80 uppercase">
                            Secs
                          </div>
                        </div>
                      </div>

                      {/* Urgency Badge */}
                      {state.timeLeft.days < 14 && (
                        <div className="flex justify-center">
                          <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-body font-bold">
                            <Clock className="w-4 h-4" />
                            Limited Slots!
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-fluid-2xl">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-pink-purple-blue text-white px-button py-button font-body font-bold text-button-fluid rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-purple-500/50"
          >
            Book Your Festival Makeup
            <Sparkles className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
