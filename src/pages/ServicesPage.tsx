import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Image, Check, Crown } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const services = [
  {
    title: 'Pageant Headshots',
    price: 'Starting at $199',
    duration: '30-minute session',
    image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e1e2b?auto=format&fit=crop&w=800&q=80',
    featured: true,
    description:
      'Competition-ready headshots designed to make judges take notice. My signature style blends natural lighting with a polished editorial feel — capturing your confidence, poise, and sparkle in every frame.',
    includes: [
      'Pre-session consultation & style guidance',
      '30-minute professional session',
      'Multiple outfit & look changes',
      'Professional retouching & skin smoothing',
      'Digital images with print release',
      'Online gallery delivery',
      'Competition-formatted files available',
    ],
  },
  {
    title: 'Pageant Event Coverage',
    price: 'Custom Pricing',
    duration: 'Full event / multi-day',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    featured: true,
    description:
      'Complete event coverage from opening number to the final crowning moment. Whether it\'s a local preliminary or a national competition, I capture every smile, every walk, and every crown. My team provides next-day gallery delivery using facial recognition technology.',
    includes: [
      'Full event documentation',
      'Stage & backstage coverage',
      'Individual contestant photos',
      'Crowning & celebration moments',
      'Next-day delivery via facial recognition galleries',
      'Full resolution digital delivery',
      'Organization licensing available',
    ],
  },
  {
    title: 'Competition Prep Portfolio',
    price: 'Starting at $350',
    duration: '1-2 hour session',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    featured: true,
    description:
      'Build a complete portfolio for your next competition. We\'ll work together on multiple looks — from glamour and editorial to natural and lifestyle — giving you a versatile collection that showcases your full range.',
    includes: [
      'Creative direction & mood board planning',
      '1-2 hour session with multiple setups',
      'Multiple outfit & styling changes',
      'Professional retouching on all selects',
      'Digital images with print release',
      'Portfolio-ready formatting',
      'Social media optimized images',
    ],
  },
  {
    title: 'Senior Portraits',
    price: 'Starting at $175',
    duration: '1-hour session',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80',
    featured: false,
    description:
      'Celebrate your senior year with a portrait session as unique as you are. Many of our senior clients are also pageant contestants, and we bring that same polished expertise to every session.',
    includes: [
      'Pre-session planning & styling tips',
      '1-hour session at location of choice',
      'Multiple outfit & location changes',
      'Professional retouching',
      'Digital images with print release',
      'Online gallery delivery',
    ],
  },
  {
    title: 'Wedding Photography',
    price: 'Starting at $1,800',
    duration: 'Up to 8 hours',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    featured: false,
    description:
      'Timeless, romantic wedding photography that tells your complete love story. From getting ready moments to the last dance, every detail is captured with the same editorial quality that defines my pageant work.',
    includes: [
      'Engagement session included',
      'Up to 8 hours of coverage',
      'Second photographer available',
      'Full professional editing',
      'Online gallery with print release',
      'Wedding day timeline consultation',
    ],
  },
  {
    title: 'Professional Headshots',
    price: 'Starting at $199',
    duration: '30-minute session',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    featured: false,
    description:
      'Polish your professional image with headshots perfect for LinkedIn, corporate websites, acting portfolios, and personal branding. Same polished quality trusted by pageant competitors.',
    includes: [
      'Pre-session consultation',
      '30-minute studio session',
      'Up to 2 outfit changes',
      'Professional retouching',
      'Digital images with usage rights',
      'Quick 1-week turnaround',
    ],
  },
]

export default function ServicesPage() {
  const featuredServices = services.filter((s) => s.featured)
  const otherServices = services.filter((s) => !s.featured)

  return (
    <>
      <Helmet>
        <title>Services & Pricing | Amanda Upton Photography - Pageant Headshots & Event Coverage</title>
        <meta
          name="description"
          content="Pageant headshots starting at $199. Event coverage, competition portfolios, senior portraits, weddings. Official pageant photographer for Miss South Carolina, Miss American Coed, and more."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="Investment in Your Crown"
            title="Pageant Services & Pricing"
            description="From competition headshots to full event coverage, every session is tailored to help you shine on stage and beyond."
          />
        </div>
      </section>

      {/* Featured Pageant Services */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <Crown className="w-6 h-6 text-gold" strokeWidth={1.5} />
            <h2 className="font-serif text-3xl text-charcoal">Pageant Photography</h2>
          </div>
          <div className="space-y-20">
            {featuredServices.map((service, i) => (
              <div
                key={service.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-gold text-white text-[10px] tracking-[0.2em] uppercase font-sans font-medium px-3 py-1.5">
                      Pageant Specialty
                    </div>
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="font-serif text-3xl text-charcoal mb-2">{service.title}</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-gold font-serif text-xl">{service.price}</span>
                    <span className="flex items-center gap-1 text-taupe text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      {service.duration}
                    </span>
                  </div>
                  <p className="text-charcoal-light text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-8">
                    {service.includes.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-charcoal-light text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/booking"
                    className="inline-flex items-center gap-2 bg-gold text-white px-8 py-3 text-xs tracking-[0.2em] uppercase font-sans font-medium hover:bg-gold-dark transition-colors no-underline"
                  >
                    Book This Session
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="Also Available"
            title="Additional Services"
            description="I bring the same polished, editorial eye to every session — whether you're a senior, a bride, or a professional building your brand."
          />
          <div className="space-y-16">
            {otherServices.map((service, i) => (
              <div
                key={service.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="font-serif text-3xl text-charcoal mb-2">{service.title}</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-gold font-serif text-xl">{service.price}</span>
                    <span className="flex items-center gap-1 text-taupe text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      {service.duration}
                    </span>
                  </div>
                  <p className="text-charcoal-light text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-8">
                    {service.includes.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-charcoal-light text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/booking"
                    className="inline-flex items-center gap-2 bg-gold text-white px-8 py-3 text-xs tracking-[0.2em] uppercase font-sans font-medium hover:bg-gold-dark transition-colors no-underline"
                  >
                    Book This Session
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 bg-blush/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Image className="w-10 h-10 text-gold mx-auto mb-5" strokeWidth={1.5} />
          <h3 className="font-serif text-2xl text-charcoal mb-4">A Note on Pricing</h3>
          <p className="text-charcoal-light text-sm leading-relaxed mb-2">
            All sessions include a pre-session consultation to discuss your vision, goals,
            and styling. Digital images are delivered via an online gallery with a print
            release within 2-3 weeks (season dependent).
          </p>
          <p className="text-charcoal-light text-sm leading-relaxed mb-2">
            For pageant event coverage, pricing is based on the scope and duration of the event.
            Contact me directly for a custom quote tailored to your organization's needs.
          </p>
          <p className="text-charcoal-light text-sm leading-relaxed">
            A travel fee may apply for sessions located outside the Union, South Carolina area.
            Custom packages are available — let's create something perfect for you.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl text-charcoal mb-4">
            Not Sure Which Session Is Right for You?
          </h2>
          <p className="text-charcoal-light text-sm leading-relaxed mb-8">
            Whether you're prepping for your first local pageant or need event coverage for a
            national competition, I'm here to help. Let's chat about your goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold text-white px-10 py-4 text-xs tracking-[0.2em] uppercase font-sans font-medium hover:bg-gold-dark transition-colors no-underline"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
