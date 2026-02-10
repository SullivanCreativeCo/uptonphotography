import { useState } from 'react'
import type { FormEvent } from 'react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { Mail, MapPin, Phone, Instagram, Facebook, Send } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  useDocumentTitle('Contact | Amanda Upton Photography - Pageant Photographer')

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            subtitle="Let's Connect"
            title="Get in Touch"
            description="Whether you need competition headshots, event coverage for your pageant organization, or just want to learn more — I'd love to hear from you."
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h3 className="font-serif text-3xl text-charcoal mb-6">
                Let's Talk Pageants
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed mb-8">
                I'm based in Union, South Carolina, but I travel regularly for pageant events
                across the Southeast and nationwide. Whether you're a contestant looking for
                headshots, a pageant director needing event coverage, or a family celebrating
                a milestone — I'm here for you.
              </p>

              <div className="space-y-6 mb-10">
                <a
                  href="mailto:info@uptonphoto.com"
                  className="flex items-center gap-4 text-charcoal-light hover:text-gold transition-colors no-underline"
                >
                  <div className="w-12 h-12 border border-cream-dark flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-taupe font-sans">Email</p>
                    <p className="text-sm font-medium text-charcoal">info@uptonphoto.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-cream-dark flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-taupe font-sans">Location</p>
                    <p className="text-sm font-medium text-charcoal">Union, South Carolina</p>
                    <p className="text-xs text-taupe">Available nationwide for pageant events</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-cream-dark flex items-center justify-center">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-taupe font-sans">Phone</p>
                    <p className="text-sm font-medium text-charcoal">Available upon request</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-taupe font-sans mb-4">
                  Follow Along
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/amandauptonphotography/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-cream-dark flex items-center justify-center text-charcoal-light hover:border-gold hover:text-gold transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/amandauptonphotography"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-cream-dark flex items-center justify-center text-charcoal-light hover:border-gold hover:text-gold transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-cream p-8 lg:p-12">
              {submitted ? (
                <div className="text-center py-12">
                  <Send className="w-12 h-12 text-gold mx-auto mb-6" strokeWidth={1.5} />
                  <h3 className="font-serif text-3xl text-charcoal mb-4">Message Sent!</h3>
                  <p className="text-charcoal-light text-sm">
                    Thank you for reaching out! I'll get back to you within 24-48 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-2xl text-charcoal mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase text-taupe font-sans mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-cream-dark bg-white px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase text-taupe font-sans mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border border-cream-dark bg-white px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors"
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase text-taupe font-sans mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-cream-dark bg-white px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase text-taupe font-sans mb-2">
                        What Are You Looking For?
                      </label>
                      <select
                        value={formData.sessionType}
                        onChange={(e) => setFormData({ ...formData, sessionType: e.target.value })}
                        className="w-full border border-cream-dark bg-white px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors appearance-none"
                      >
                        <option value="">Select a session type...</option>
                        <option value="pageant-headshots">Pageant Headshots</option>
                        <option value="pageant-event">Pageant Event Coverage</option>
                        <option value="competition-portfolio">Competition Prep Portfolio</option>
                        <option value="senior-portraits">Senior Portraits</option>
                        <option value="wedding">Wedding Photography</option>
                        <option value="headshots">Professional Headshots</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase text-taupe font-sans mb-2">
                        Your Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full border border-cream-dark bg-white px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors resize-none"
                        placeholder="Tell me about your upcoming competition, the look you're going for, and any dates you have in mind..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gold text-white py-3.5 text-xs tracking-[0.2em] uppercase font-sans font-medium hover:bg-gold-dark transition-colors cursor-pointer border-none"
                    >
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
