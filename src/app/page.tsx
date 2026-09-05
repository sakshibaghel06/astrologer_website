import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import {
  Star,
  Sun,
  Sparkles,
  ArrowRight,
  Quote,
  ChevronRight,
  BookOpen,
  Compass,
  Eye,
  Flame,
  Heart,
  Shield,
  Zap,
  Clock,
  Award,
  CheckCircle,
  Users,
  TrendingUp,
  Briefcase,
  Calendar,
  Globe,
  Droplets,
  Leaf,
  Fish,
  Scale,
  Waves,
  Wind,
  Mountain,
} from 'lucide-react'

// ─── Page-level metadata ─────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AstroJyotish — Vedic Astrology & Cosmic Guidance',
  description:
    'Get personalised Vedic astrology readings for love, career, relationships, and life decisions. Book a consultation with an experienced Jyotish practitioner today.',
}

// ─── Static data ─────────────────────────────────────────────────────────────

const STATS = [
  { value: '10+',    label: 'Years Experience' },
  { value: '1,000+', label: 'Consultations' },
  { value: '98%',    label: 'Client Satisfaction' },
  { value: '20+',    label: 'Countries Served' },
]

const SERVICES = [
  {
    icon: BookOpen,
    title: 'Birth Chart Analysis',
    description:
      'A precise reading of your natal chart — planets, houses, and the karmic blueprint you arrived with.',
    href: '/shop',
    color: 'from-violet to-violet-bright',
    glow: 'group-hover:shadow-glow-violet',
  },
  {
    icon: Heart,
    title: 'Love & Relationship',
    description:
      'Understand compatibility, karmic bonds, and the celestial influences shaping your relationships.',
    href: '/shop',
    color: 'from-gold-dim to-gold',
    glow: 'group-hover:shadow-glow-gold',
  },
  {
    icon: Briefcase,
    title: 'Career & Finance',
    description:
      'Align your professional path with the planets — timing, opportunity, and growth cycles revealed.',
    href: '/shop',
    color: 'from-violet-bright to-violet-glow',
    glow: 'group-hover:shadow-glow-violet',
  },
  {
    icon: Compass,
    title: 'Life Guidance',
    description:
      'A comprehensive look at life direction, purpose, health, and the major turning points ahead.',
    href: '/shop',
    color: 'from-gold to-gold-bright',
    glow: 'group-hover:shadow-glow-gold',
  },
]

const WHY_CHOOSE = [
  {
    icon: Award,
    title: 'Experienced Guidance',
    description:
      'Over a decade of dedicated Jyotish practice with classical training from recognised lineages.',
  },
  {
    icon: Eye,
    title: 'Personalised Insights',
    description:
      'Every reading is built from your unique chart — never a generic forecast or templated report.',
  },
  {
    icon: Shield,
    title: 'Confidential Consultations',
    description:
      'Your personal details and consultation content are held in complete confidence, always.',
  },
  {
    icon: Zap,
    title: 'Practical Advice',
    description:
      'Actionable guidance grounded in real life — remedies, timing, and decisions you can act on.',
  },
]

const ZODIAC_SIGNS = [
  { symbol: '♈', name: 'Aries',       icon: Flame,    dates: 'Mar 21 – Apr 19' },
  { symbol: '♉', name: 'Taurus',      icon: Mountain,  dates: 'Apr 20 – May 20' },
  { symbol: '♊', name: 'Gemini',      icon: Wind,      dates: 'May 21 – Jun 20' },
  { symbol: '♋', name: 'Cancer',      icon: Droplets,  dates: 'Jun 21 – Jul 22' },
  { symbol: '♌', name: 'Leo',         icon: Sun,       dates: 'Jul 23 – Aug 22' },
  { symbol: '♍', name: 'Virgo',       icon: Leaf,      dates: 'Aug 23 – Sep 22' },
  { symbol: '♎', name: 'Libra',       icon: Scale,     dates: 'Sep 23 – Oct 22' },
  { symbol: '♏', name: 'Scorpio',     icon: Eye,       dates: 'Oct 23 – Nov 21' },
  { symbol: '♐', name: 'Sagittarius', icon: Compass,   dates: 'Nov 22 – Dec 21' },
  { symbol: '♑', name: 'Capricorn',   icon: Globe,     dates: 'Dec 22 – Jan 19' },
  { symbol: '♒', name: 'Aquarius',    icon: Waves,     dates: 'Jan 20 – Feb 18' },
  { symbol: '♓', name: 'Pisces',      icon: Fish,      dates: 'Feb 19 – Mar 20' },
]

const TESTIMONIALS = [
  {
    initials: 'P',
    name: 'Priya',
    service: 'Birth Chart Reading',
    rating: 5,
    text: 'The reading was remarkably accurate and gave me genuine clarity about a career decision I had been agonising over for months. Highly recommended.',
  },
  {
    initials: 'R',
    name: 'Rahul',
    service: 'Love & Relationship',
    rating: 5,
    text: 'I came in sceptical and left with a new understanding of patterns in my relationships I had never seen before. The consultation was thoughtful and grounding.',
  },
  {
    initials: 'A',
    name: 'Ananya',
    service: 'Life Guidance',
    rating: 5,
    text: 'The annual forecast was incredibly detailed. The guidance on timing helped me make important decisions with far more confidence. Will definitely return.',
  },
]

const FEATURED_SERVICES = [
  {
    icon: BookOpen,
    title: 'Detailed Birth Chart',
    description:
      'A thorough written and verbal analysis of your natal chart covering all major life areas, planetary periods, and upcoming transits.',
    price: '₹999',
    href: '/appointment',
    popular: false,
  },
  {
    icon: Heart,
    title: 'Compatibility Reading',
    description:
      'An in-depth comparison of two charts examining synastry, karmic connections, and long-term compatibility across all dimensions.',
    price: '₹1,499',
    href: '/appointment',
    popular: true,
  },
  {
    icon: TrendingUp,
    title: 'Career Astrology Report',
    description:
      'A focused written report on career potential, ideal fields, best timing for change, and financial cycles based on your chart.',
    price: '₹1,299',
    href: '/appointment',
    popular: false,
  },
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
        aria-label="Hero"
      >
        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-violet/10 blur-[130px]" />
          <div className="absolute top-1/2 right-1/4 w-[320px] h-[320px] rounded-full bg-gold/7 blur-[90px]" />
          <div className="absolute bottom-0 left-1/2 w-[400px] h-[200px] rounded-full bg-violet/8 blur-[100px] -translate-x-1/2" />
        </div>

        {/* Decorative rotating rings — desktop only */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none" aria-hidden="true">
          {[480, 380, 280, 180].map((size, i) => (
            <div
              key={size}
              className="absolute rounded-full border border-violet/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: size,
                height: size,
                animation: `rotate-slow ${20 + i * 8}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
              }}
            />
          ))}
          {/* Centrepiece */}
          <div className="relative w-[180px] h-[180px] flex items-center justify-center rounded-full bg-gradient-to-br from-violet/30 to-gold/20 border border-violet/30 shadow-glow-violet">
            <span className="font-serif text-6xl text-cream/80 select-none" aria-hidden="true">ॐ</span>
          </div>
          {/* Orbiting dots */}
          {ZODIAC_SIGNS.slice(0, 8).map((z, i) => {
            const angle = (i / 8) * 360
            const rad = (angle * Math.PI) / 180
            const r = 190
            const x = 90 + r * Math.cos(rad - Math.PI / 2)
            const y = 90 + r * Math.sin(rad - Math.PI / 2)
            return (
              <span
                key={z.name}
                className="absolute text-base text-violet-glow/60 font-serif select-none"
                style={{ left: x, top: y, transform: 'translate(-50%,-50%)' }}
              >
                {z.symbol}
              </span>
            )
          })}
        </div>

        <Container className="relative z-10">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold-bright text-xs font-semibold tracking-[0.2em] uppercase mb-7">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              Astrology &bull; Guidance &bull; Insight
            </div>

            {/* Headline */}
            <h1 className="heading-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Discover What the{' '}
              <span className="text-gradient-gold">Stars Have in Store</span>{' '}
              for You
            </h1>

            {/* Sub-copy */}
            <p className="text-silver text-lg leading-relaxed mb-10 max-w-xl">
              Get personalised astrological guidance for love, career,
              relationships, and life&apos;s most important decisions — rooted
              in authentic Vedic Jyotish tradition.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/appointment" className="btn-primary text-sm px-8 py-3.5">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                Book a Consultation
              </Link>
              <Link href="/shop" className="btn-secondary text-sm px-8 py-3.5">
                Explore Services
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Stats row */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-gradient-gold">
                    {s.value}
                  </span>
                  <span className="text-xs text-muted tracking-wide leading-tight">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>

        {/* Section fade */}
        <div
          className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-cosmic-deep to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. INTRO / ABOUT ASTROLOGY
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="section-padding relative bg-section-dark"
        aria-labelledby="intro-heading"
      >
        <span className="divider-violet absolute top-0 inset-x-0" aria-hidden="true" />

        <Container>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Visual — mandala / cosmic art */}
            <div className="relative flex items-center justify-center min-h-[280px] md:min-h-[380px]" aria-hidden="true">
              {/* Outer rings */}
              {[320, 250, 190, 130, 80].map((size, i) => (
                <div
                  key={size}
                  className="absolute rounded-full border border-violet/20"
                  style={{
                    width: size,
                    height: size,
                    animation: `rotate-slow ${18 + i * 6}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
                    borderColor: i % 2 === 0
                      ? 'rgba(107,70,193,0.2)'
                      : 'rgba(217,119,6,0.15)',
                  }}
                />
              ))}
              {/* Centre */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-violet to-gold shadow-glow-violet flex items-center justify-center animate-pulse-glow">
                <Star className="w-8 h-8 text-white fill-current" />
              </div>
              {/* Cardinal dots */}
              {[
                { cls: 'top-[calc(50%-160px)] left-1/2', delay: '0s' },
                { cls: 'bottom-[calc(50%-160px)] left-1/2', delay: '0.75s' },
                { cls: 'left-[calc(50%-160px)] top-1/2', delay: '1.5s' },
                { cls: 'right-[calc(50%-160px)] top-1/2', delay: '2.25s' },
              ].map(({ cls, delay }, i) => (
                <span
                  key={i}
                  className={`absolute ${cls} -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gold-bright shadow-glow-gold animate-twinkle`}
                  style={{ animationDelay: delay }}
                />
              ))}
              {/* Zodiac symbols scattered */}
              {['♈','♌','♎','♓'].map((sym, i) => {
                const positions = ['top-6 left-8','top-6 right-8','bottom-6 left-8','bottom-6 right-8']
                return (
                  <span
                    key={sym}
                    className={`absolute ${positions[i]} text-2xl text-violet-light/40 font-serif animate-twinkle-slow`}
                    style={{ animationDelay: `${i * 0.6}s` }}
                  >
                    {sym}
                  </span>
                )
              })}
            </div>

            {/* Text */}
            <div className="flex flex-col gap-5">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gold-bright">
                <span className="glow-dot" aria-hidden="true" />
                Ancient Wisdom, Modern Clarity
              </span>

              <h2
                id="intro-heading"
                className="heading-serif text-3xl sm:text-4xl font-bold"
              >
                What Vedic Astrology{' '}
                <span className="text-gradient-gold">Can Do for You</span>
              </h2>

              <p className="text-silver leading-relaxed">
                Vedic astrology — Jyotish — is one of the oldest systems of
                self-knowledge on Earth. Unlike sun-sign horoscopes, a Jyotish
                consultation examines your complete birth chart: the precise
                position of every planet at the moment of your birth, mapped
                against a system refined over thousands of years.
              </p>

              <p className="text-muted leading-relaxed text-sm">
                The result is a remarkably detailed portrait of your strengths,
                challenges, karmic patterns, and the natural timing of life
                events — giving you the clarity to make decisions with greater
                confidence, not less freedom.
              </p>

              {/* Mini feature list */}
              <ul className="flex flex-col gap-2 mt-1" role="list">
                {[
                  'Understand your natural strengths and blind spots',
                  'Identify the best timing for major decisions',
                  'Gain insight into recurring relationship patterns',
                  'Receive personalised remedies and practical guidance',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-silver">
                    <CheckCircle className="w-4 h-4 text-gold-bright mt-0.5 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/about" className="btn-secondary w-fit text-sm mt-2">
                Learn More About Our Approach
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>

        <span className="divider-gold absolute bottom-0 inset-x-0 opacity-30" aria-hidden="true" />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. SERVICES OVERVIEW
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="section-padding"
        aria-labelledby="services-overview-heading"
      >
        <Container>
          <SectionHeading
            id="services-overview-heading"
            label="What We Offer"
            title="Our Astrology"
            highlight="Services"
            subtitle="Every consultation is tailored to your unique chart and the questions that matter most to you right now."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc) => {
              const Icon = svc.icon
              return (
                <Card
                  key={svc.title}
                  accent
                  className="group flex flex-col gap-4 p-6"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center shadow-glow-sm transition-all duration-300 ${svc.glow}`}
                  >
                    <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>

                  <h3 className="font-serif text-cream font-semibold text-lg leading-snug">
                    {svc.title}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed flex-1">
                    {svc.description}
                  </p>

                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-gold-bright hover:text-gold transition-colors group-hover:gap-2 duration-200 mt-auto"
                  >
                    Learn More
                    <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/shop" className="btn-secondary text-sm">
              View All Services
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. WHY CHOOSE US
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="section-padding relative bg-section-dark"
        aria-labelledby="why-heading"
      >
        <span className="divider-violet absolute top-0 inset-x-0" aria-hidden="true" />

        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-violet/8 blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-gold/6 blur-[100px]" />
        </div>

        <Container className="relative z-10">
          <SectionHeading
            id="why-heading"
            label="Why Choose Us"
            title="Guidance You Can"
            highlight="Trust"
            subtitle="What sets our consultations apart is the combination of classical scholarship, genuine intuition, and practical wisdom."
            className="mb-14"
          />

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {WHY_CHOOSE.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="card-cosmic p-6 flex flex-col gap-4 text-center items-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet/20 to-gold/10 border border-violet/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold-bright" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-cream font-semibold">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>

          {/* Stats band */}
          <div className="rounded-2xl bg-gradient-to-r from-violet/10 via-cosmic-card to-gold/10 border border-cosmic-border p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '10+',    label: 'Years of Experience',    icon: Clock },
                { value: '1,000+', label: 'Consultations Completed', icon: Users },
                { value: '98%',    label: 'Client Satisfaction',    icon: Award },
                { value: '20+',    label: 'Countries Served',       icon: Globe },
              ].map(({ value, label, icon: Icon }) => (
                <div key={label} className="flex flex-col items-center text-center gap-2">
                  <Icon className="w-5 h-5 text-gold/60 mb-1" aria-hidden="true" />
                  <span className="font-serif text-3xl font-bold text-gradient-gold">{value}</span>
                  <span className="text-xs text-muted leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>

        <span className="divider-gold absolute bottom-0 inset-x-0 opacity-30" aria-hidden="true" />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. ZODIAC SHOWCASE
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="section-padding"
        aria-labelledby="zodiac-heading"
      >
        <Container>
          <SectionHeading
            id="zodiac-heading"
            label="The Zodiac"
            title="Your"
            highlight="Star Sign"
            subtitle="Each of the twelve signs carries distinct qualities, strengths, and cosmic themes. Which one are you?"
            className="mb-14"
          />

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {ZODIAC_SIGNS.map((sign) => {
              const Icon = sign.icon
              return (
                <div
                  key={sign.name}
                  className="group card-cosmic flex flex-col items-center text-center gap-2 p-4 cursor-default select-none hover:border-violet/40 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Symbol */}
                  <span
                    className="text-3xl text-violet-glow group-hover:text-gold-bright transition-colors duration-300 font-serif"
                    aria-hidden="true"
                  >
                    {sign.symbol}
                  </span>

                  {/* Icon */}
                  <div className="w-8 h-8 rounded-lg bg-violet/10 border border-violet/20 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300">
                    <Icon className="w-4 h-4 text-violet-light group-hover:text-gold-bright transition-colors duration-300" aria-hidden="true" />
                  </div>

                  <p className="text-cream text-xs font-semibold tracking-wide">
                    {sign.name}
                  </p>
                  <p className="text-muted text-[10px] leading-tight">
                    {sign.dates}
                  </p>
                </div>
              )
            })}
          </div>

          <p className="text-center text-muted text-sm mt-8">
            Your sun sign is just the beginning.{' '}
            <Link href="/appointment" className="text-gold-bright hover:text-gold underline-offset-2 hover:underline transition-colors">
              A full chart reading
            </Link>{' '}
            reveals the complete picture.
          </p>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          6. TESTIMONIALS
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="section-padding relative bg-section-dark"
        aria-labelledby="testimonials-heading"
      >
        <span className="divider-violet absolute top-0 inset-x-0" aria-hidden="true" />

        <Container>
          <SectionHeading
            id="testimonials-heading"
            label="Client Stories"
            title="Words from Those"
            highlight="We've Guided"
            subtitle="Honest reflections from clients who have walked this path."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name} className="p-6 flex flex-col gap-4">
                {/* Quote */}
                <Quote className="w-8 h-8 text-gold/30" aria-hidden="true" />

                {/* Stars */}
                <div
                  className="flex items-center gap-0.5"
                  aria-label={`${t.rating} out of 5 stars`}
                  role="img"
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-gold-bright fill-current" aria-hidden="true" />
                  ))}
                </div>

                <p className="text-silver text-sm leading-relaxed flex-1 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 border-t border-cosmic-border">
                  <div
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-violet to-gold flex items-center justify-center text-xs font-bold text-white shrink-0"
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-cream text-sm font-semibold">{t.name}</p>
                    <p className="text-muted text-xs">{t.service}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>

        <span className="divider-gold absolute bottom-0 inset-x-0 opacity-30" aria-hidden="true" />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          7. FEATURED / POPULAR SERVICES
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="section-padding"
        aria-labelledby="popular-heading"
      >
        <Container>
          <SectionHeading
            id="popular-heading"
            label="Popular Choices"
            title="Most-Booked"
            highlight="Services"
            subtitle="Start your journey with one of our most-requested consultations."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {FEATURED_SERVICES.map((svc) => {
              const Icon = svc.icon
              return (
                <div
                  key={svc.title}
                  className={`relative card-cosmic flex flex-col gap-4 p-6 ${
                    svc.popular ? 'border-gold/40 shadow-glow-gold' : ''
                  }`}
                >
                  {/* Popular badge */}
                  {svc.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge-gold text-[10px] px-3 py-1 whitespace-nowrap">
                      Most Popular
                    </span>
                  )}

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet/30 to-gold/20 border border-violet/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold-bright" aria-hidden="true" />
                  </div>

                  <h3 className="font-serif text-cream text-xl font-semibold">
                    {svc.title}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed flex-1">
                    {svc.description}
                  </p>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-cosmic-border mt-auto">
                    <span className="font-serif text-2xl font-bold text-gradient-gold">
                      {svc.price}
                    </span>
                    <Link
                      href={svc.href}
                      className={svc.popular ? 'btn-primary text-xs px-5 py-2' : 'btn-secondary text-xs px-5 py-2'}
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          <p className="text-center text-muted text-xs mt-8">
            Demo prices shown for illustration only. Final pricing confirmed at booking.
          </p>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          8. FINAL CTA
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="section-padding relative bg-section-dark"
        aria-labelledby="final-cta-heading"
      >
        <span className="divider-violet absolute top-0 inset-x-0" aria-hidden="true" />

        {/* Glows */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-48 bg-violet/15 blur-[80px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-32 bg-gold/10 blur-[60px]" />
        </div>

        <Container size="sm" className="relative z-10">
          <div className="glass rounded-3xl border border-violet/30 px-6 sm:px-12 py-14 text-center flex flex-col items-center gap-6">

            {/* Decorative symbol */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet to-gold flex items-center justify-center shadow-glow-violet">
              <Star className="w-7 h-7 text-white fill-current" aria-hidden="true" />
            </div>

            <h2
              id="final-cta-heading"
              className="heading-serif text-3xl sm:text-4xl font-bold text-balance"
            >
              Ready to Find Your{' '}
              <span className="text-gradient-gold">Cosmic Direction?</span>
            </h2>

            <p className="text-silver text-base max-w-md leading-relaxed">
              Book a personalised consultation and take your next important step
              with far greater clarity and confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/appointment" className="btn-primary text-sm px-8 py-3.5">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                Book Your Consultation
              </Link>
              <Link href="/contact" className="btn-ghost text-sm px-8 py-3.5">
                Get in Touch
              </Link>
            </div>

            {/* Reassurance line */}
            <p className="text-muted text-xs flex items-center gap-2 mt-2">
              <Shield className="w-3.5 h-3.5 text-gold/60" aria-hidden="true" />
              Confidential &bull; Personalised &bull; Practical
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
