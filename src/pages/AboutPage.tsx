import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { ArrowRight, Award, BookOpen, Heart, Camera, Crown, Sparkles, Trophy } from 'lucide-react'
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
    icon: Trophy,
    title: 'Award-Winning',
    description: 'Recognized nationally and internationally in publications and competitions',
  },
]

const pageantHighlights = [
  {
    icon: Crown,
    title: 'Miss South Carolina',
    description: 'Official event photographer capturing every moment from preliminary to crowning.',
  },
  {
    icon: Crown,
    title: 'Little Miss South Carolina',
    description: 'Documenting the youngest stars as they take their first steps on the pageant stage.',
  },
  {
    icon: Crown,
    title: 'Miss American Coed',
    description: 'National-level event coverage and contestant headshots for one of the country\'s premier pageants.',
  },
  {
    icon: Crown,
    title: 'Royalty USA Nationals',
    description: 'Capturing the sparkle and excitement of national-level competition from coast to coast.',
  },
]

export default function AboutPage() {
  useDocumentTitle('About Amanda | Amanda Upton Photography - Pageant Photographer')

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="The Photographer Behind the Crown"
            title="About Amanda"
            description="A second-generation photographer who found her calling in the world of pageantry — capturing confidence, beauty, and crowning moments on stages across the nation."
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
                alt="Amanda Upton - Pageant Photographer"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-gold font-sans font-medium">
                My Story
              </span>
              <h2 className="font-serif text-4xl text-charcoal mt-3 mb-6">
                From Second Shooter to Pageant Photographer
              </h2>
              <div className="space-y-4 text-charcoal-light text-sm leading-relaxed">
                <p>
                  Photography has been woven into the fabric of my life since I was a teenager.
                  My mother was a professional photographer — the first in our family — and
                  I spent my high school years working alongside her as her second shooter,
                  photographing everything from school pictures and studio sessions to weddings
                  and class reunions.
                </p>
                <p>
                  In 2009, I took the leap and officially opened my own studio in Union,
                  South Carolina. I started by photographing families, seniors, and children
                  in my community. But as my work gained recognition and my client base grew,
                  I discovered my true passion — the world of pageantry.
                </p>
                <p>
                  What began as a few headshot sessions for local contestants quickly evolved
                  into a specialty. Today, I'm known as a go-to photographer for pageant
                  competitors across the country. I photograph major events like Miss South
                  Carolina, Little Miss South Carolina, Miss American Coed, and Royalty USA
                  Nationals — capturing everything from headshots and stage moments to the
                  crowning celebration.
                </p>
                <p>
                  My headshot style blends natural lighting with a polished editorial feel.
                  I want every client to look confident, powerful, and authentic. I bring a
                  calm, encouraging energy to every session — especially important in pageants,
                  where confidence is key and it starts in front of my camera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pageant Highlights */}
      <section className="py-20 bg-blush/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="On the Pageant Stage"
            title="Events I Photograph"
            description="From local titles to national stages, I've had the honor of covering some of the biggest pageant events in the country."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pageantHighlights.map((event) => (
              <div key={event.title} className="bg-white p-8 text-center">
                <event.icon className="w-10 h-10 text-gold mx-auto mb-5" strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-charcoal mb-2">{event.title}</h3>
                <p className="text-charcoal-light text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets My Pageant Work Apart */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="My Approach"
            title="What Sets My Pageant Work Apart"
            description="I don't just take photos at pageants — I understand the world of pageantry."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <Sparkles className="w-10 h-10 text-gold mx-auto mb-5" strokeWidth={1.5} />
              <h3 className="font-serif text-xl text-charcoal mb-3">Competition-Ready Headshots</h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                I understand what judges look for. My headshots are designed to highlight your
                best features with a polished editorial style that stands out in any competition
                book or program.
              </p>
            </div>
            <div className="text-center">
              <Camera className="w-10 h-10 text-gold mx-auto mb-5" strokeWidth={1.5} />
              <h3 className="font-serif text-xl text-charcoal mb-3">Next-Day Event Galleries</h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                At multi-day events, my team delivers galleries the very next day using facial
                recognition technology. Contestants and families can find and relive their
                moments before they even leave the venue.
              </p>
            </div>
            <div className="text-center">
              <Heart className="w-10 h-10 text-gold mx-auto mb-5" strokeWidth={1.5} />
              <h3 className="font-serif text-xl text-charcoal mb-3">Confidence Behind the Lens</h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                Pageantry is about confidence, and that starts in the photo session. I create
                a calm, encouraging environment where every contestant — from first-timers to
                seasoned pros — feels empowered and beautiful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-cream">
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
            Every Contestant Has a Crown-Worthy Story
          </h2>
          <p className="text-cream/70 text-sm leading-relaxed mb-4">
            I believe every person who steps on a pageant stage — or in front of my camera —
            has a story worth telling and a beauty worth capturing. Whether you're a tiny miss
            competing for the first time or a seasoned queen chasing a national title, my job
            is to capture the essence of who you are: confident, radiant, and authentically you.
          </p>
          <p className="text-cream/70 text-sm leading-relaxed mb-4">
            Beyond pageantry, I bring the same philosophy to every senior portrait, every wedding,
            every headshot session. The result? Images that don't just capture how you looked,
            but how you felt.
          </p>
          <p className="text-cream/70 text-sm leading-relaxed">
            After more than two decades behind the lens, this is still my greatest honor —
            being trusted with your most meaningful moments.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl text-charcoal mb-6">
            Ready to Book Your Pageant Headshots?
          </h2>
          <p className="text-charcoal-light text-sm leading-relaxed mb-8">
            Whether you need competition headshots, event coverage, or a full portfolio session,
            I'd love to help you put your best face forward.
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
