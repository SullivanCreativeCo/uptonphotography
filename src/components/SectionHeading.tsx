interface SectionHeadingProps {
  subtitle?: string
  title: string
  description?: string
  light?: boolean
}

export default function SectionHeading({ subtitle, title, description, light }: SectionHeadingProps) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      {subtitle && (
        <span className={`text-xs tracking-[0.3em] uppercase font-sans font-medium ${light ? 'text-gold-light' : 'text-gold'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-serif text-4xl md:text-5xl mt-3 mb-4 ${light ? 'text-cream' : 'text-charcoal'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-sm leading-relaxed ${light ? 'text-cream/80' : 'text-charcoal-light'}`}>
          {description}
        </p>
      )}
      <div className="flex justify-center mt-6">
        <div className={`w-16 h-px ${light ? 'bg-gold-light' : 'bg-gold'}`} />
      </div>
    </div>
  )
}
