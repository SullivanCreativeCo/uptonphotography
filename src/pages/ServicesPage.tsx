import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Image, Check } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const services = [
  {
    title: 'Pageant Headshots',
    price: 'Starting at $199',
    duration: '30-minute session',
    image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e1e2b?auto=format&fit=crop&w=800&q=80',
    description:
      'Professional pageant headshots designed to make a lasting first impression. We work together to highlight your natural beauty and capture your unique sparkle.',
    includes: [
      'Pre-session consultation',
      '30-minute professional session',
      'Multiple outfit changes',
      'Professional retouching',
      'Digital images with print release',
      'Online gallery delivery',
    ],
  },
  {
    title: 'Senior Portraits',
    price: 'Starting at $250',
    duration: '1-hour session',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80',
    description:
      'Celebrate your senior year with a portrait session as unique as you are. We will find the perfect locations and styles to capture your personality.',
    includes: [
      'Pre-session planning & styling tips',
      '1-hour session at location of choice',
      'Multiple outfit & location changes',
      'Professional retouching',
      'Digital images with print release',
      'Online gallery delivery in 2-3 weeks',
    ],
  },
  {
    title: 'Wedding Photography',
    price: 'Starting at $1,800',
    duration: 'Up to 8 hours',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    description:
      'Timeless, romantic wedding photography that tells your complete love story. From getting ready moments to the last dance, every detail is captured beautifully.',
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
    title: 'Pageant Event Coverage',
    price: 'Custom Pricing',
    duration: 'Full event',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80',
    description:
      'Complete event coverage for pageant organizations. From Miss South Carolina to national competitions, I capture every crown, every smile, every moment.',
    includes: [
      'Full event documentation',
      'Contestant individual photos',
      'Crowning moment coverage',
      'Quick turnaround for social media',
      'Full resolution digital delivery',
      'Organization licensing available',
    ],
  },
  {
    title: 'Fashion & Editorial',
    price: 'Starting at $350',
    duration: '1-2 hour session',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    description:
      'Creative fashion and editorial photography for models, designers, and brands looking to make a statement with stunning visual content.',
    includes: [
      'Creative direction & mood board',
      '1-2 hour session',
      'Multiple look changes',
      'Professional retouching',
      'High-resolution digital files',
      'Commercial licensing available',
    ],
  },
  {
    title: 'Professional Headshots',
    price: 'Starting at $199',
    duration: '30-minute session',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    description:
      'Polish your professional image with headshots perfect for LinkedIn, corporate websites, acting portfolios, and personal branding.',
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
  return (
    <>
      <Helmet>
        <title>Services & Pricing | Amanda Upton Photography</title>
        <meta
          name="description"
          content="Professional photography services including pageant headshots, senior portraits, wedding photography, event coverage, and fashion shoots. Sessions starting at $199."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="Investment in Yourself"
            title="Services & Pricing"
            description="Every session is a tailored experience designed to bring out your best. Browse our offerings below and find the perfect fit for your vision."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
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
          <p className="text-charcoal-light text-sm leading-relaxed">
            A travel fee may apply for sessions located outside the Union, South Carolina area,
            based on mileage and lodging. Custom packages are available — reach out and let's
            create something perfect for you.
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
            Let's chat! I'd love to learn about your needs and recommend the perfect package.
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
