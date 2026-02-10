import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Star, Camera, Heart, Users, Sparkles, Crown, Trophy } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const services = [
  {
    icon: Crown,
    title: 'Pageant Headshots',
    description:
      'Competition-ready headshots that capture your confidence, poise, and sparkle. From natural lighting to polished editorial looks — designed to make judges take notice.',
  },
  {
    icon: Trophy,
    title: 'Pageant Event Coverage',
    description:
      'Full event documentation from opening number to crowning moment. Next-day delivery through facial recognition galleries so contestants never miss a memory.',
  },
  {
    icon: Sparkles,
    title: 'Competition Prep Portfolios',
    description:
      'Build a stunning portfolio for your next competition. Multiple looks, outfit changes, and creative direction to showcase your range and personality.',
  },
  {
    icon: Camera,
    title: 'Headshots & Portraits',
    description:
      'Professional headshots for seniors, professionals, and personal branding. The same polished, editorial quality trusted by pageant competitors nationwide.',
  },
  {
    icon: Users,
    title: 'Senior Portraits',
    description:
      'Celebrate your senior year with a session that captures who you are. Many of our senior clients are also pageant contestants — we know how to bring out your best.',
  },
  {
    icon: Heart,
    title: 'Weddings & Events',
    description:
      'Timeless wedding photography and special event coverage. The same attention to detail and storytelling that defines our pageant work.',
  },
]

const pageantEvents = [
  'Miss South Carolina',
  'Little Miss South Carolina',
  'Miss American Coed',
  'Royalty USA Nationals',
  'Miss South Carolina Teen',
  'And More Across the Nation',
]

const testimonials = [
  {
    quote:
      'Amanda is THE pageant photographer. She knows exactly how to bring out your confidence in front of the camera. My headshots helped me stand out at Miss South Carolina, and her event coverage captured every moment I wanted to remember.',
    name: 'Sarah M.',
    role: 'Miss South Carolina Contestant',
  },
  {
    quote:
      "As a pageant mom, I cannot say enough about Amanda. She makes every girl feel like a queen, whether it's their first local title or their fourth national competition. The next-day galleries at events are a game-changer.",
    name: 'Jennifer T.',
    role: 'Pageant Mom',
  },
  {
    quote:
      "I've worked with many photographers over my pageant career, but Amanda is on another level. She blends natural lighting with this polished editorial feel that's exactly what you need for competition headshots. She's my go-to, always.",
    name: 'Taylor R.',
    role: 'National Pageant Titleholder',
  },
]

const stats = [
  { number: '22+', label: 'Years of Experience' },
  { number: '100+', label: 'Pageant Events Covered' },
  { number: '5,000+', label: 'Sessions Completed' },
  { number: 'NYIP', label: 'Certified Photographer' },
]

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Amanda Upton Photography | Pageant Photographer - Headshots & Event Coverage</title>
        <meta
          name="description"
          content="Award-winning pageant photographer with 22+ years of experience. Official photographer for Miss South Carolina, Miss American Coed, Royalty USA Nationals. Headshots, event coverage, and competition portfolios. Union, SC."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=2000&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="inline-block text-xs tracking-[0.4em] uppercase text-gold-light font-sans font-medium mb-6">
            Official Pageant Photographer
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream mb-6 leading-tight">
            Where Confidence
            <span className="block italic text-gold-light">Meets the Crown</span>
          </h1>
          <p className="text-cream/70 text-base md:text-lg max-w-xl mx-auto mb-10 font-light leading-relaxed">
            With over 22 years behind the lens, Amanda Upton is the trusted photographer
            for pageant competitors from local titles to national stages. Headshots,
            event coverage, and competition portfolios that capture your sparkle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 bg-gold text-white px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans font-medium hover:bg-gold-dark transition-colors no-underline"
            >
              Book Your Headshot Session
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans font-medium hover:border-gold hover:text-gold transition-colors no-underline"
            >
              View Pageant Portfolio
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold-light" />
        </div>
      </section>

      {/* Pageant Events Banner */}
      <section className="py-12 bg-gold/10 border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs tracking-[0.3em] uppercase text-gold font-sans font-medium mb-6">
            Trusted by Contestants & Organizations at
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {pageantEvents.map((event) => (
              <span
                key={event}
                className="font-serif text-lg md:text-xl text-charcoal/80 italic"
              >
                {event}
              </span>
            ))}
          </div>
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
                  alt="Amanda Upton - Professional Pageant Photographer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold" />
            </div>
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-gold font-sans font-medium">
                The Photographer Behind the Crown
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mt-3 mb-6">
                I'm Amanda Upton
              </h2>
              <p className="text-charcoal-light text-sm leading-relaxed mb-4">
                I'm a second-generation photographer who found her true calling in the
                world of pageantry. What started as a small studio in Union, South Carolina
                in 2009 has grown into a career photographing some of the biggest pageant
                stages in the country.
              </p>
              <p className="text-charcoal-light text-sm leading-relaxed mb-4">
                From Miss South Carolina and Little Miss South Carolina to Miss American
                Coed and Royalty USA Nationals, I've had the honor of capturing headshots
                and covering events for contestants at every level — from their very first
                local title to the national stage.
              </p>
              <p className="text-charcoal-light text-sm leading-relaxed mb-8">
                My headshot style blends natural lighting with a polished editorial feel,
                and I bring a calm, encouraging energy to every session — because in
                pageants, confidence is everything, and that starts in front of my camera.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold font-sans font-medium hover:text-gold-dark transition-colors no-underline"
              >
                Read My Full Story
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
            title="Pageant Photography & Beyond"
            description="Pageant headshots and event coverage are my specialty — but I also bring that same polished, editorial eye to senior portraits, weddings, and more."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Pageant Portfolio Preview */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="Recent Work"
            title="Pageant Portfolio"
            description="A glimpse of the headshots, stage moments, and crowning celebrations I've had the honor of capturing."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1595959183082-7b570b7e1e2b?auto=format&fit=crop&w=600&q=80', alt: 'Pageant headshot session' },
              { src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80', alt: 'Pageant stage photography' },
              { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80', alt: 'Competition beauty portrait' },
              { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80', alt: 'Editorial pageant headshot' },
              { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80', alt: 'Pageant contestant portfolio' },
              { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80', alt: 'Natural lighting pageant headshot' },
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

      {/* Why Pageant Contestants Choose Amanda */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="The Amanda Difference"
            title="Why Pageant Contestants Choose Me"
            description="Every detail matters when you're competing. Here's what sets my pageant photography apart."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Crown,
                title: 'Pageant Expertise',
                desc: 'Over a decade specializing in pageant photography. I understand what judges look for and how to showcase your best qualities.',
              },
              {
                icon: Camera,
                title: 'Editorial Style',
                desc: 'My signature look blends natural lighting with polished editorial quality — confident, powerful, and authentically you.',
              },
              {
                icon: Sparkles,
                title: 'Next-Day Galleries',
                desc: 'At multi-day events, my team delivers next-day galleries using facial recognition technology. Your moments, fast.',
              },
              {
                icon: Heart,
                title: 'Confidence-Building',
                desc: 'I bring calm, encouraging energy to every session. Confidence is key in pageantry, and it starts in front of my camera.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <item.icon className="w-10 h-10 text-gold mx-auto mb-5" strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-charcoal mb-3">{item.title}</h3>
                <p className="text-charcoal-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="From the Pageant Community"
            title="What Contestants Say"
            description="Hear from the queens, contestants, and pageant families who trust me with their most important moments."
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
          <Crown className="w-12 h-12 text-gold mx-auto mb-6" strokeWidth={1} />
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
            Ready for Your Crown-Worthy Headshots?
          </h2>
          <p className="text-charcoal-light text-sm leading-relaxed mb-10 max-w-lg mx-auto">
            Whether you're preparing for your first pageant or your next national title,
            I'd love to help you put your best face forward. Let's create headshots that
            capture your confidence and make a lasting impression.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 bg-gold text-white px-10 py-4 text-xs tracking-[0.2em] uppercase font-sans font-medium hover:bg-gold-dark transition-colors no-underline"
            >
              Book Your Session
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://www.uptonphoto.com/book-online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-charcoal/30 text-charcoal px-10 py-4 text-xs tracking-[0.2em] uppercase font-sans font-medium hover:border-gold hover:text-gold transition-colors no-underline"
            >
              Book Online Directly
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
