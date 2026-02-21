/**
 * @fileoverview Press Kit Page component
 */

import React from 'react';
import { Download, Mail, MapPin, Instagram, FileText } from 'lucide-react';
import { pressKitData } from '../../../data/mock/pages/press';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { setSEO } from '../../../utils/seo';
import '@/styles/blocks/press-page.css';

export function PressKitPage() {
  React.useEffect(() => {
    setSEO({
      title: 'Press & Media Kit | Ash Shaw Makeup',
      description: pressKitData.hero.description,
      image: '/images/og-press.jpg', 
    });
  }, []);

  return (
    <main className="press-page bg-atomic-noise">
      <header 
        className="press-page__hero"
        style={{
            backgroundImage: `radial-gradient(circle at center, rgba(15, 15, 15, 0) 0%, rgba(15, 15, 15, 1) 80%), url('https://images.unsplash.com/photo-1652341483339-9ad5eef3ea74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwcHVycGxlJTIwcGluayUyMGJsdWUlMjBhYnN0cmFjdCUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcxNjg3MTA0fDA&ixlib=rb-4.1.0&q=80&w=1080')`
        }}
      >
        <div className="container-xl text-center">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Press Kit' }]} centered />
            <h1 className="text-hero-h1 text-gradient-pink-purple-blue mb-fluid-md">
                {pressKitData.hero.title}
            </h1>
            <p className="text-section-h2 text-neon-cyan mb-fluid-lg">
                {pressKitData.hero.subtitle}
            </p>
            <p className="text-body-p text-neutral-300 max-w-3xl mx-auto">
                {pressKitData.hero.description}
            </p>
        </div>
      </header>

      <div className="container-xl press-page__content">
        <section className="press-section">
            <div className="press-section__header">
                <FileText className="icon-lg text-neon-pink" />
                <h2 className="text-section-h2">Biographies</h2>
            </div>
            
            <div className="press-bio-grid">
                <article className="press-bio-card">
                    <h3 className="text-section-h3 mb-fluid-sm">{pressKitData.bios.short.title}</h3>
                    <div className="press-bio-card__body">
                        <p className="text-body-p">{pressKitData.bios.short.content}</p>
                    </div>
                    <button className="btn btn--ghost-neon btn--sm mt-fluid-md" onClick={() => navigator.clipboard.writeText(pressKitData.bios.short.content)}>
                        Copy Text
                    </button>
                </article>

                <article className="press-bio-card">
                    <h3 className="text-section-h3 mb-fluid-sm">{pressKitData.bios.long.title}</h3>
                     <div className="press-bio-card__body">
                        {pressKitData.bios.long.content.split('\n\n').map((para, i) => (
                            <p key={i} className="text-body-p mb-fluid-sm">{para}</p>
                        ))}
                    </div>
                     <button className="btn btn--ghost-neon btn--sm mt-fluid-md" onClick={() => navigator.clipboard.writeText(pressKitData.bios.long.content)}>
                        Copy Text
                    </button>
                </article>
            </div>
        </section>

        <section className="press-section">
            <h2 className="text-section-h2 mb-fluid-lg text-center">Brand Assets</h2>
            <div className="press-assets-grid">
                {pressKitData.assets.map((category) => (
                    <div key={category.id} className="press-asset-category">
                        <h3 className="text-section-h3 mb-fluid-md border-b border-neon-purple pb-fluid-sm">
                            {category.title}
                        </h3>
                        <p className="text-body-p text-neutral-400 mb-fluid-md">{category.description}</p>
                        <ul className="press-asset-list">
                            {category.items.map((item, index) => (
                                <li key={index} className="press-asset-item">
                                    <div className="press-asset-item__info">
                                        <span className="press-asset-item__label">{item.label}</span>
                                        <span className="press-asset-item__meta">{item.format} • {item.size}</span>
                                    </div>
                                    <button className="btn btn--icon-only btn--ghost" aria-label={`Download ${item.label}`}>
                                        <Download className="icon-sm" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>

        <section className="press-contact text-center">
            <h2 className="text-section-h2 mb-fluid-md">Contact & Booking</h2>
            <div className="flex flex-col items-center gap-fluid-sm">
                <a href={`mailto:${pressKitData.contact.email}`} className="flex items-center gap-fluid-sm text-body-p hover:text-neon-green transition-colors">
                    <Mail className="icon-md" /> {pressKitData.contact.email}
                </a>
                 <a href={`https://instagram.com/${pressKitData.contact.instagram.replace('@','')}`} className="flex items-center gap-fluid-sm text-body-p hover:text-neon-pink transition-colors">
                    <Instagram className="icon-md" /> {pressKitData.contact.instagram}
                </a>
                 <div className="flex items-center gap-fluid-sm text-body-p text-neutral-400">
                    <MapPin className="icon-md" /> {pressKitData.contact.location}
                </div>
            </div>
        </section>
      </div>
    </main>
  );
}
