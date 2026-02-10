import { Link } from 'react-router-dom'
import { Camera, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Camera className="w-7 h-7 text-gold" strokeWidth={1.5} />
              <div>
                <span className="font-serif text-xl tracking-wide text-cream">
                  Amanda Upton
                </span>
                <span className="block text-[9px] tracking-[0.3em] uppercase text-taupe font-sans -mt-1">
                  Photography
                </span>
              </div>
            </div>
            <p className="text-sm text-taupe leading-relaxed max-w-xs">
              Award-winning photographer with over 22 years of experience capturing
              life's most beautiful moments. Certified by the New York Institute of
              Photography.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg text-gold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {[
                { to: '/about', label: 'About Amanda' },
                { to: '/services', label: 'Services & Pricing' },
                { to: '/portfolio', label: 'Portfolio' },
                { to: '/booking', label: 'Book a Session' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-taupe hover:text-gold transition-colors no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg text-gold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href="mailto:info@uptonphoto.com"
                className="flex items-center gap-3 text-sm text-taupe hover:text-gold transition-colors no-underline"
              >
                <Mail className="w-4 h-4 text-gold" />
                info@uptonphoto.com
              </a>
              <div className="flex items-center gap-3 text-sm text-taupe">
                <MapPin className="w-4 h-4 text-gold" />
                Union, South Carolina
              </div>
              <div className="flex items-center gap-3 text-sm text-taupe">
                <Phone className="w-4 h-4 text-gold" />
                Contact for availability
              </div>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://www.instagram.com/amandauptonphotography/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-taupe hover:text-gold transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/amandauptonphotography"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-taupe hover:text-gold transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-light mt-12 pt-8 text-center">
          <p className="text-xs text-taupe tracking-wider">
            &copy; {new Date().getFullYear()} Amanda Upton Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
