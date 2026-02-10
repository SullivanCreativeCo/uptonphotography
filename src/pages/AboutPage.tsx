import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, BookOpen, Heart, Camera } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const credentials = [
  {
    icon: Award,
    title: 'NYIP Certified',
    description: 'Certified by the New York Institute of Photography',
  },
  {
    icon: BookOpen,
    title: 'PPA Member',
    description: 'Active member of the Professional Photographers of America',
  },
  {
    icon: Camera,
    title: '22+ Years',
    description: 'Second-generation photographer with over two decades of experience',
  },
  {
    icon: Heart,
    title: 'Award-Winning',
    description: 'Recognized nationally and internationally in publications and competitions',
  },
]

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Amanda | Amanda Upton Photography</title>
        <meta
          name="description"
          content="Meet Amanda Upton - a second-generation photographer with 22+ years of experience, NYIP certified, and PPA member. Based in Union, South Carolina."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="Get to Know Me"
            title="About Amanda"
            description="A second-generation photographer with a passion for capturing beauty, confidence, and life's most meaningful moments."
          />
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80"
                alt="Amanda Upton photographing"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-gold font-sans font-medium">
                My Story
              </span>
              <h2 className="font-serif text-4xl text-charcoal mt-3 mb-6">
                Where It All Began
              </h2>
              <div className="space-y-4 text-charcoal-light text-sm leading-relaxed">
                <p>
                  Photography has been woven into the fabric of my life since I was a teenager.
                  My mother was a professional photographer — the first in our family — and
                  I spent my high school years working alongside her as her second shooter.
                  Those early days behind the lens taught me not just the technical aspects of
                  photography, but the art of connecting with people and telling their stories
                  through images.
                </p>
                <p>
                  In 2009, I took the leap and officially opened my own studio in Union,
                  South Carolina. I started by photographing families, seniors, and children
                  in my community. As my work gained recognition and my client base grew, I
                  discovered my true calling in the world of pageantry.
                </p>
                <p>
                  Today, I'm known for capturing headshots and covering major pageant events
                  across the nation — from Miss South Carolina and Little Miss South Carolina
                  to Miss American Coed and Royalty USA Nationals. Whether it's the sparkle
                  in a contestant's eye during their crowning moment or the quiet confidence
                  of a professional headshot, I strive to capture the essence of every person
                  who steps in front of my camera.
                </p>
                <p>
                  Beyond pageantry, I continue to pour my heart into wedding photography,
                  senior portraits, and fashion shoots. Every session is an opportunity to
                  create art and forge lasting connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-blush/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="Credentials"
            title="Training & Recognition"
            description="A commitment to excellence that spans over two decades."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((cred) => (
              <div key={cred.title} className="bg-white p-8 text-center">
                <cred.icon className="w-10 h-10 text-gold mx-auto mb-5" strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-charcoal mb-2">{cred.title}</h3>
                <p className="text-charcoal-light text-sm">{cred.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-light font-sans font-medium">
            My Philosophy
          </span>
          <h2 className="font-serif text-4xl text-cream mt-3 mb-6">
            More Than Just Photos
          </h2>
          <p className="text-cream/70 text-sm leading-relaxed mb-4">
            I believe that every person has a story worth telling and a beauty worth
            capturing. My approach combines technical expertise with genuine warmth and
            connection, creating an experience that allows your true self to shine through.
          </p>
          <p className="text-cream/70 text-sm leading-relaxed mb-4">
            Whether you're a first-time pageant contestant or a seasoned competitor,
            a nervous bride or a confident senior, my goal is to make you feel comfortable,
            empowered, and beautiful in front of the camera.
          </p>
          <p className="text-cream/70 text-sm leading-relaxed">
            The result? Images that don't just capture how you looked, but how you felt —
            confident, radiant, and authentically you.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl text-charcoal mb-6">
            Let's Create Something Beautiful
          </h2>
          <p className="text-charcoal-light text-sm leading-relaxed mb-8">
            I'd love to hear about your vision and how we can bring it to life together.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-gold text-white px-10 py-4 text-xs tracking-[0.2em] uppercase font-sans font-medium hover:bg-gold-dark transition-colors no-underline"
          >
            Book a Session
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
