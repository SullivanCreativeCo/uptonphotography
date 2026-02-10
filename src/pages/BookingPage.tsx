import { Helmet } from 'react-helmet-async'
import { Clock, DollarSign, Heart, Sparkles, Users, Crown, Trophy, Camera } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const pageantSessions = [
  {
    icon: Crown,
    title: 'Pageant Headshots',
    price: '$199',
    duration: '30 min',
    description: 'Competition-ready headshots with natural lighting & editorial polish',
    featured: true,
  },
  {
    icon: Trophy,
    title: 'Pageant Event Coverage',
    price: 'Custom',
    duration: 'Full event',
    description: 'Complete event documentation with next-day facial recognition galleries',
    featured: true,
  },
  {
    icon: Sparkles,
    title: 'Competition Prep Portfolio',
    price: '$350',
    duration: '1-2 hours',
    description: 'Multiple looks & outfits for a complete competition portfolio',
    featured: true,
  },
]

const otherSessions = [
  {
    icon: Users,
    title: 'Senior Portraits',
    price: '$175',
    duration: '1 hour',
    description: 'Celebrate your milestone year with polished portraits',
  },
  {
    icon: Camera,
    title: 'Professional Headshots',
    price: '$199',
    duration: '30 min',
    description: 'LinkedIn, corporate, and personal branding headshots',
  },
  {
    icon: Heart,
    title: 'Wedding Photography',
    price: '$1,800',
    duration: 'Up to 8 hours',
    description: 'Your complete love story, beautifully told',
  },
]

export default function BookingPage() {
  return (
    <>
      <Helmet>
        <title>Book a Session | Amanda Upton Photography - Pageant Headshots & More</title>
        <meta
          name="description"
          content="Book your pageant headshot session with Amanda Upton Photography. Competition headshots starting at $199. Event coverage, portfolios, seniors, and weddings."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="Let's Get You Stage-Ready"
            title="Book Your Session"
            description="Choose the session that's right for you. Whether you're prepping for competition or celebrating a milestone, let's create something beautiful together."
          />
        </div>
      </section>

      {/* Pageant Sessions - Featured */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Crown className="w-6 h-6 text-gold" strokeWidth={1.5} />
            <h2 className="font-serif text-3xl text-charcoal">Pageant Sessions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pageantSessions.map((session) => (
              <div
                key={session.title}
                className="border-2 border-gold/30 p-8 text-center hover:border-gold transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 bg-gold text-white text-[10px] tracking-[0.2em] uppercase font-sans font-medium py-1.5 text-center">
                  Pageant Specialty
                </div>
                <session.icon
                  className="w-10 h-10 text-gold mx-auto mb-5 mt-4 group-hover:scale-110 transition-transform"
                  strokeWidth={1.5}
                />
                <h3 className="font-serif text-2xl text-charcoal mb-2">{session.title}</h3>
                <p className="text-charcoal-light text-sm mb-4">{session.description}</p>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="flex items-center gap-1 text-gold font-serif text-lg">
                    <DollarSign className="w-4 h-4" />
                    {session.price.replace('$', '')}
                  </span>
                  <span className="flex items-center gap-1 text-taupe text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    {session.duration}
                  </span>
                </div>
                <a
                  href="https://www.uptonphoto.com/book-online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-gold text-white py-3 text-xs tracking-[0.2em] uppercase font-sans font-medium hover:bg-gold-dark transition-colors no-underline"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Sessions */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-charcoal mb-8 text-center">Additional Sessions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherSessions.map((session) => (
              <div
                key={session.title}
                className="border border-cream-dark bg-white p-8 text-center hover:border-gold transition-colors group"
              >
                <session.icon
                  className="w-10 h-10 text-gold mx-auto mb-5 group-hover:scale-110 transition-transform"
                  strokeWidth={1.5}
                />
                <h3 className="font-serif text-2xl text-charcoal mb-2">{session.title}</h3>
                <p className="text-charcoal-light text-sm mb-4">{session.description}</p>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="flex items-center gap-1 text-gold font-serif text-lg">
                    <DollarSign className="w-4 h-4" />
                    {session.price.replace('$', '')}
                  </span>
                  <span className="flex items-center gap-1 text-taupe text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    {session.duration}
                  </span>
                </div>
                <a
                  href="https://www.uptonphoto.com/book-online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-gold text-white py-3 text-xs tracking-[0.2em] uppercase font-sans font-medium hover:bg-gold-dark transition-colors no-underline"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-blush/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="What to Expect"
            title="The Pageant Experience"
            description="From your first inquiry to receiving your competition-ready images, here's how we'll work together."
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Inquire', desc: 'Tell me about your upcoming competition, your goals, and the look you\'re going for. We\'ll plan the perfect session.' },
              { step: '02', title: 'Prepare', desc: 'We\'ll discuss wardrobe, styling, hair & makeup guidance, and create a plan to capture your best angles and expressions.' },
              { step: '03', title: 'Capture', desc: 'Relax and bring your confidence! I\'ll guide you through poses and expressions designed for pageant-quality results.' },
              { step: '04', title: 'Deliver', desc: 'Receive your professionally retouched, competition-formatted images via your private online gallery.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="font-serif text-4xl text-gold">{item.step}</span>
                <h3 className="font-serif text-xl text-charcoal mt-2 mb-3">{item.title}</h3>
                <p className="text-charcoal-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Booking CTA */}
      <section className="py-20 bg-charcoal text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-4xl text-cream mb-4">
            Ready to Get Stage-Ready?
          </h2>
          <p className="text-cream/70 text-sm leading-relaxed mb-8">
            Book directly through our online scheduling system, or contact me for custom
            event coverage quotes and multi-contestant group rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.uptonphoto.com/book-online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-white px-10 py-4 text-xs tracking-[0.2em] uppercase font-sans font-medium hover:bg-gold-dark transition-colors no-underline"
            >
              Book Online Now
            </a>
            <a
              href="mailto:info@uptonphoto.com"
              className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream px-10 py-4 text-xs tracking-[0.2em] uppercase font-sans font-medium hover:border-gold hover:text-gold transition-colors no-underline"
            >
              Email for Event Coverage Quote
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
