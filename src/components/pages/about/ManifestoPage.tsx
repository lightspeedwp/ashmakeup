/**
 * @fileoverview Manifesto Page component
 */

import React from 'react';
import { manifestoPageData } from '../../../data/mock/pages/manifesto';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { setSEO } from '../../../utils/seo';
import '@/styles/blocks/manifesto-page.css';

export function ManifestoPage() {
  React.useEffect(() => {
    setSEO({
        title: 'Manifesto: Neon vs Atomic Black | Ash Shaw Makeup',
        description: manifestoPageData.hero.description,
        image: '/images/og-manifesto.jpg'
    });
  }, []);

  return (
    <main className="manifesto-page bg-atomic-noise">
      <header 
        className="manifesto-page__hero"
        style={{
            backgroundImage: `radial-gradient(circle at center, rgba(15, 15, 15, 0) 0%, rgba(15, 15, 15, 1) 90%), url('https://images.unsplash.com/photo-1764268602042-88b05a211378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5lb24lMjBhcnQlMjBzaGFwZXMlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzE2ODcxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080')`
        }}
      >
        <div className="container-xl text-center">
             <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Manifesto' }]} centered />
             <h1 className="text-hero-h1 text-gradient-cyberpunk mb-fluid-md">
                 {manifestoPageData.hero.title}
             </h1>
             <p className="text-section-h2 text-neutral-300 max-w-2xl mx-auto tracking-widest uppercase">
                 {manifestoPageData.hero.description}
             </p>
        </div>
      </header>

      <div className="manifesto-scroll-container">
        {manifestoPageData.sections.map((section, index) => (
            <section key={section.id} className={`manifesto-section theme-${section.theme}`}>
                <div className="container-lg manifesto-section__inner">
                    <h2 className="manifesto-title">{section.title}</h2>
                    <p className="manifesto-content">{section.content}</p>
                    <div className="manifesto-decoration" />
                </div>
            </section>
        ))}
      </div>
      
      <div className="manifesto-footer text-center py-fluid-3xl">
          <p className="text-body-lg text-neutral-400 italic">"We paint to be seen, not by the sun, but by each other in the dark."</p>
      </div>
    </main>
  );
}
