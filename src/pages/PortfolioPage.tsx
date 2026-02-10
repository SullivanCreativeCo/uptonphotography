import { useState } from 'react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import SectionHeading from '../components/SectionHeading'

const categories = ['All', 'Pageant Headshots', 'Pageant Events', 'Seniors', 'Weddings', 'Portraits']

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1595959183082-7b570b7e1e2b?auto=format&fit=crop&w=800&q=80', alt: 'Pageant competition headshot', category: 'Pageant Headshots' },
  { src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80', alt: 'Pageant stage moment', category: 'Pageant Events' },
  { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80', alt: 'Editorial pageant headshot', category: 'Pageant Headshots' },
  { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80', alt: 'Pageant beauty portrait', category: 'Pageant Headshots' },
  { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80', alt: 'Competition portfolio shot', category: 'Pageant Headshots' },
  { src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=800&q=80', alt: 'Backstage pageant preparation', category: 'Pageant Events' },
  { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80', alt: 'Natural lighting pageant headshot', category: 'Pageant Headshots' },
  { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80', alt: 'Crowning celebration', category: 'Pageant Events' },
  { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80', alt: 'Professional headshot', category: 'Portraits' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80', alt: 'Wedding ceremony', category: 'Weddings' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80', alt: 'Wedding couple', category: 'Weddings' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80', alt: 'Wedding details', category: 'Weddings' },
  { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', alt: 'Senior portrait', category: 'Seniors' },
  { src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80', alt: 'Senior portrait session', category: 'Seniors' },
  { src: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=800&q=80', alt: 'Pageant contestant on stage', category: 'Pageant Events' },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  useDocumentTitle('Portfolio | Amanda Upton Photography - Pageant Headshots & Event Photography')

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="My Work"
            title="Pageant Portfolio & Gallery"
            description="From competition headshots and stage moments to senior portraits and weddings — a collection of the stories I've had the honor of capturing."
          />
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs tracking-[0.15em] uppercase font-sans font-medium px-6 py-2.5 transition-colors cursor-pointer border ${
                  activeCategory === cat
                    ? 'bg-gold text-white border-gold'
                    : 'bg-transparent text-charcoal-light border-cream-dark hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredImages.map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className="aspect-[3/4] overflow-hidden group cursor-pointer relative"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300 flex items-end justify-center pb-6">
                  <span className="text-white text-xs tracking-[0.2em] uppercase font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {img.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blush/30 text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-charcoal mb-4">
            Want to See More?
          </h2>
          <p className="text-charcoal-light text-sm leading-relaxed mb-6">
            Visit my full client galleries on Zenfolio or follow me on Instagram for the latest
            pageant headshots, event coverage, and behind-the-scenes moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/amandauptonphotography/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-white px-8 py-3 text-xs tracking-[0.2em] uppercase font-sans font-medium hover:bg-gold-dark transition-colors no-underline"
            >
              Follow on Instagram
            </a>
            <a
              href="https://amandafergusonphotography.zenfolio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-charcoal/30 text-charcoal px-8 py-3 text-xs tracking-[0.2em] uppercase font-sans font-medium hover:border-gold hover:text-gold transition-colors no-underline"
            >
              View Client Galleries
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
