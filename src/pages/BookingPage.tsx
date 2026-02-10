import { Helmet } from 'react-helmet-async'
import { Clock, DollarSign, Camera, Heart, Sparkles, Users, Star, Image } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const sessions = [
  {
    icon: Sparkles,
    title: 'Pageant Headshots',
    price: '$199',
    duration: '30 min',
    description: 'Professional headshots for competition',
  },
  {
    icon: Users,
    title: 'Senior Portraits',
    price: '$250',
    duration: '1 hour',
    description: 'Celebrate your milestone year',
  },
  {
    icon: Camera,
    title: 'Professional Headshots',
    price: '$199',
    duration: '30 min',
    description: 'Elevate your professional image',
  },
  {
    icon: Image,
    title: 'Fashion & Editorial',
    price: '$350',
    duration: '1-2 hours',
    description: 'Creative fashion photography',
  },
  {
    icon: Heart,
    title: 'Wedding Photography',
    price: '$1,800',
    duration: 'Up to 8 hours',
    description: 'Your complete love story',
  },
  {
    icon: Star,
    title: 'Event Coverage',
    price: 'Custom',
    duration: 'Full event',
    description: 'Pageant & event documentation',
  },
]

export default function BookingPage() {
  return (
    <>
      <Helmet>
        <title>Book a Session | Amanda Upton Photography</title>
        <meta
          name="description"
          content="Book your photography session with Amanda Upton. Pageant headshots, senior portraits, wedding photography, and more. Sessions starting at $199."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="Let's Work Together"
            title="Book Your Session"
            description="Choose the session that's right for you and let's create something beautiful together. Not sure which to pick? Reach out and I'll help you decide."
          />
        </div>
      </section>

      {/* Session Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions.map((session) => (
              <div
                key={session.title}
                className="border border-cream-dark p-8 text-center hover:border-gold transition-colors group"
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
            title="The Experience"
            description="From inquiry to delivery, here's how we'll work together to create your perfect images."
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Inquire', desc: 'Reach out and tell me about your vision. We will discuss your goals, style, and the perfect session for you.' },
              { step: '02', title: 'Plan', desc: 'Together we will plan every detail — from wardrobe and location to timing and mood.' },
              { step: '03', title: 'Capture', desc: 'Relax and enjoy the session! I will guide you through poses and expressions to capture your best moments.' },
              { step: '04', title: 'Deliver', desc: 'Receive your beautifully edited images through your private online gallery within 2-3 weeks.' },
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
            Ready to Get Started?
          </h2>
          <p className="text-cream/70 text-sm leading-relaxed mb-8">
            You can book directly through our online scheduling system or contact me for
            custom packages and event coverage quotes.
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
              Email for Custom Quote
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
