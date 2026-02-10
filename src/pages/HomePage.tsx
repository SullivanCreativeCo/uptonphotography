import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Star, Award, Camera, Heart, Users, Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const services = [
  {
    icon: Sparkles,
    title: 'Pageant Photography',
    description:
      'Capturing the sparkle and confidence of every contestant. From local titles to national stages, we make every moment shine.',
  },
  {
    icon: Camera,
    title: 'Headshots & Portraits',
    description:
      'Professional headshots that highlight your natural beauty and unique personality. Perfect for competitions, portfolios, and personal branding.',
  },
  {
    icon: Users,
    title: 'Senior Portraits',
    description:
      'Celebrate this milestone with stunning portraits that capture your personality. A session as unique as you are.',
  },
  {
    icon: Heart,
    title: 'Wedding Photography',
    description:
      'Timeless, romantic wedding photography that tells your love story. From intimate ceremonies to grand celebrations.',
  },
]

const testimonials = [
  {
    quote:
      'Amanda has an incredible eye for capturing the perfect shot. She made me feel so comfortable and confident during my pageant headshot session. The results were absolutely stunning!',
    name: 'Sarah M.',
    role: 'Miss South Carolina Contestant',
  },
  {
    quote:
      'We could not have asked for a better photographer for our wedding day. Amanda captured every emotion, every detail. Her photos are truly works of art that we will treasure forever.',
    name: 'Jennifer & David',
    role: 'Wedding Clients',
  },
  {
    quote:
      "Amanda's senior portrait session was such a fun experience! She knew exactly how to bring out my personality in every shot. I received so many compliments on my photos.",
    name: 'Taylor R.',
    role: 'Senior Portrait Client',
  },
]

const stats = [
  { number: '22+', label: 'Years of Experience' },
  { number: '5,000+', label: 'Sessions Completed' },
  { number: '100+', label: 'Pageant Events' },
  { number: 'NYIP', label: 'Certified Photographer' },
]

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Amanda Upton Photography | Pageant, Portrait & Wedding Photographer</title>
        <meta
          name="description"
          content="Award-winning photographer in Union, SC with 22+ years of experience. Specializing in pageant photography, headshots, senior portraits, and weddings."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="inline-block text-xs tracking-[0.4em] uppercase text-gold-light font-sans font-medium mb-6">
            Award-Winning Photography
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream mb-6 leading-tight">
            Capturing Your
            <span className="block italic text-gold-light">Most Beautiful</span>
            Moments
          </h1>
          <p className="text-cream/70 text-base md:text-lg max-w-xl mx-auto mb-10 font-light leading-relaxed">
            With over 22 years of experience, Amanda Upton creates timeless images
            that celebrate confidence, beauty, and life's most meaningful milestones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 bg-gold text-white px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans font-medium hover:bg-gold-dark transition-colors no-underline"
            >
              Book Your Session
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans font-medium hover:border-gold hover:text-gold transition-colors no-underline"
            >
              View Portfolio
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold-light" />
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] bg-cream-dark overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80"
                  alt="Amanda Upton - Professional Photographer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold" />
            </div>
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-gold font-sans font-medium">
                Nice to Meet You
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mt-3 mb-6">
                I'm Amanda Upton
              </h2>
              <p className="text-charcoal-light text-sm leading-relaxed mb-4">
                Photography has been a part of my life since I was a teenager. My mother was
                a professional photographer — the first in our family — and I worked
                alongside her in high school as her second shooter. That experience ignited
                a passion that has only grown stronger over the past two decades.
              </p>
              <p className="text-charcoal-light text-sm leading-relaxed mb-4">
                In 2009, I officially opened my own studio in Union, South Carolina,
                starting by photographing families, seniors, and children. As my business
                grew, I found my niche in the world of pageantry — capturing headshots
                and covering major pageant events across the nation.
              </p>
              <p className="text-charcoal-light text-sm leading-relaxed mb-8">
                I'm a second-generation professional photographer, certified by the New York
                Institute of Photography and a proud member of the Professional Photographers
                of America. It is my honor to capture your most meaningful moments.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold font-sans font-medium hover:text-gold-dark transition-colors no-underline"
              >
                Learn More About Me
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-4xl text-gold mb-2">{stat.number}</div>
                <div className="text-xs tracking-[0.2em] uppercase text-cream/60 font-sans">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-blush/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="What I Offer"
            title="Services"
            description="From pageant stages to wedding altars, I specialize in capturing the moments that matter most. Each session is tailored to tell your unique story."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 text-center group hover:shadow-lg transition-shadow duration-300"
              >
                <service.icon className="w-10 h-10 text-gold mx-auto mb-5" strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-charcoal mb-3">{service.title}</h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold font-sans font-medium hover:text-gold-dark transition-colors no-underline"
            >
              View All Services & Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="Recent Work"
            title="Portfolio"
            description="A glimpse into the stories I've had the privilege of telling through my lens."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1595959183082-7b570b7e1e2b?auto=format&fit=crop&w=600&q=80', alt: 'Pageant headshot' },
              { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80', alt: 'Portrait session' },
              { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80', alt: 'Wedding photography' },
              { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80', alt: 'Beauty portrait' },
              { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80', alt: 'Professional headshot' },
              { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80', alt: 'Wedding celebration' },
            ].map((img, i) => (
              <div key={i} className="aspect-[3/4] overflow-hidden group cursor-pointer">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold font-sans font-medium hover:text-gold-dark transition-colors no-underline"
            >
              View Full Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="Kind Words"
            title="Client Testimonials"
            description="Nothing makes me happier than hearing from clients who love their photos."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-charcoal-light/30 border border-charcoal-light/20 p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-cream/80 text-sm leading-relaxed italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-gold font-serif text-lg">{testimonial.name}</p>
                  <p className="text-cream/50 text-xs tracking-wider uppercase">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blush/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Award className="w-12 h-12 text-gold mx-auto mb-6" strokeWidth={1} />
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
            Ready to Book Your Session?
          </h2>
          <p className="text-charcoal-light text-sm leading-relaxed mb-10 max-w-lg mx-auto">
            Whether you're preparing for a pageant, celebrating a milestone, or saying "I do,"
            I'd love to be part of your story. Let's create something beautiful together.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-gold text-white px-10 py-4 text-xs tracking-[0.2em] uppercase font-sans font-medium hover:bg-gold-dark transition-colors no-underline"
          >
            Book Your Session
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
