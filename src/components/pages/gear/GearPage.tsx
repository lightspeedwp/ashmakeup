/**
 * @fileoverview Gear Page component
 */

import React from 'react';
import { Camera, PenTool, BatteryCharging, Shield, ChevronRight } from 'lucide-react';
import { gearPageData } from '../../../data/mock/pages/gear';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { setSEO } from '../../../utils/seo';
import '@/styles/blocks/gear-page.css';

const IconMap = {
  paints: PenTool,
  brushes: PenTool,
  tech: Camera,
  survival: BatteryCharging, // Closest metaphor
};

export function GearPage() {
  React.useEffect(() => {
    setSEO({
        title: 'The Toolkit | Ash Shaw Makeup',
        description: gearPageData.hero.description,
        image: '/images/og-gear.jpg'
    });
  }, []);

  return (
    <main className="gear-page bg-atomic-noise">
      <header 
        className="gear-page__hero"
        style={{
            backgroundImage: `radial-gradient(circle at center, rgba(15, 15, 15, 0) 0%, rgba(15, 15, 15, 1) 80%), url('https://images.unsplash.com/photo-1690627931183-991bd45dc2f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwY2FtZXJhJTIwZ2VhciUyMHBob3RvZ3JhcGh5JTIwdG9vbHMlMjBjeWJlcnB1bmt8ZW58MXx8fHwxNzcxNjg3MTA0fDA&ixlib=rb-4.1.0&q=80&w=1080')`
        }}
      >
        <div className="container-xl text-center">
             <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Toolkit' }]} centered />
             <h1 className="text-hero-h1 text-gradient-cyberpunk mb-fluid-md">
                 {gearPageData.hero.title}
             </h1>
             <p className="text-section-h2 text-neutral-300 mb-fluid-lg">
                 {gearPageData.hero.subtitle}
             </p>
             <p className="text-body-p text-neutral-400 max-w-2xl mx-auto">
                 {gearPageData.hero.description}
             </p>
        </div>
      </header>

      <div className="container-xl gear-page__content">
        <div className="gear-grid">
            {gearPageData.categories.map((category) => {
                const Icon = IconMap[category.id as keyof typeof IconMap] || Shield;
                return (
                    <section key={category.id} className="gear-category-card">
                        <div className="gear-category-header">
                            <div className="gear-category-icon">
                                <Icon className="icon-xl text-neon-cyan" />
                            </div>
                            <h2 className="text-section-h3 text-neon-cyan mb-fluid-xs">{category.title}</h2>
                            <p className="text-body-sm text-neutral-400">{category.description}</p>
                        </div>
                        
                        <ul className="gear-item-list">
                            {category.items.map((item, index) => (
                                <li key={index} className="gear-item">
                                    <div className="gear-item__content">
                                        <span className="gear-item__name">{item.name}</span>
                                        <span className="gear-item__desc">{item.desc}</span>
                                    </div>
                                    <span className="gear-item__usage">
                                        {item.usage}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>
                );
            })}
        </div>
      </div>
    </main>
  );
}
