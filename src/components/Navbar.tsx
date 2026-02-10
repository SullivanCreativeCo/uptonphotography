import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Camera } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/booking', label: 'Book Now' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-50 border-b border-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <Camera className="w-8 h-8 text-gold" strokeWidth={1.5} />
            <div>
              <span className="font-serif text-2xl tracking-wide text-charcoal">
                Amanda Upton
              </span>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-taupe font-sans font-medium -mt-1">
                Photography
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs tracking-[0.15em] uppercase font-sans font-medium no-underline transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-gold'
                    : 'text-charcoal-light hover:text-gold'
                } ${link.label === 'Book Now' ? 'bg-gold text-white px-5 py-2.5 hover:bg-gold-dark hover:text-white' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-charcoal bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-cream-dark">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-xs tracking-[0.15em] uppercase font-sans font-medium no-underline py-2 transition-colors ${
                  location.pathname === link.path
                    ? 'text-gold'
                    : 'text-charcoal-light'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
