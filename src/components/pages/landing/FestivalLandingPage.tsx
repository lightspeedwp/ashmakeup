/**
 * @fileoverview Festival Landing Page component
 */

import React from 'react';
import { FestivalCountdown } from '../../sections/FestivalCountdown';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { setSEO } from '../../../utils/seo';
import '@/styles/blocks/festival-landing-page.css';

export function FestivalLandingPage() {
  React.useEffect(() => {
    setSEO({
        title: 'Next Festival Countdown | Ash Shaw Makeup',
        description: 'Join Ash Shaw at the next major festival. Book your slot now.',
        image: '/images/og-festival.jpg'
    });
  }, []);

  return (
    <main className="festival-landing-page bg-atomic-noise">
        <div 
            className="festival-landing-hero"
            style={{
                backgroundImage: `radial-gradient(circle at center, rgba(15, 15, 15, 0) 0%, rgba(15, 15, 15, 1) 90%), url('https://images.unsplash.com/photo-1531113165519-5eb0816d7e02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwZmVzdGl2YWwlMjBjcm93ZCUyMGN5YmVycHVuayUyMHBhcnR5fGVufDF8fHx8MTc3MTY4NzEwNHww&ixlib=rb-4.1.0&q=80&w=1080')`
            }}
        >
            <div className="container-xl text-center z-10 relative">
                <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Next Festival' }]} centered />
                <h1 className="text-hero-h1 text-white mb-fluid-lg drop-shadow-neon">
                    The Next Chapter
                </h1>
                <p className="text-section-h2 text-neon-yellow mb-fluid-xl">
                    Are you ready?
                </p>
            </div>
            <div className="festival-landing-bg-overlay" />
        </div>

        <div className="container-xl festival-content-wrapper">
             <FestivalCountdown />
        </div>
    </main>
  );
}
