import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import {
  Star,
  Award,
  Users,
  BookOpen,
  Heart,
  Briefcase,
  Shield,
  Eye,
  Compass,
  Sparkles,
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Scroll,
} from 'lucide-react'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'About Our Astrology Practice',
  description:
    'Learn about AstroJyotish — our experienced Vedic astrologer, credentials, philosophy, and personalised approach to astrological guidance.',
}

// ─── Static data ──────────────────────────────────────────────────────────────

const CREDENTIALS = [
  {
    icon: Clock,
    value: '10+',
    label: 'Years of Practice',
    description: 'A decade of dedicated Jyotish study and active client consultations.',
  },
  {
    icon: Users,
    value: '1,000+',
    label: 'Consultations',
    description: 'Clients from across India and more than 20 countries served.',
  },
  {
    icon: BookOpen,
    value: 'Classical',
    label: 'Trained Lineage',
    description: 'Rooted in Brihat Parashara Hora Shastra and Jaimini traditions.',
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Confidential',
    description: 'Every consultation held in complete professional confidence.',
  },
]

const EXPERTISE = [
  {
    icon: BookOpen,
    title: 'Birth Chart Analysis',
    description:
      'A comprehensive reading of your natal chart — planets, houses, yogas, and the karmic blueprint that shapes your life.',
    color: 'from-violet to-violet-bright',
  },
  {
    icon: Heart,
    title: 'Relationship Astrology',
    description:
      'Synastry and composite chart analysis for understanding compatibility, karmic bonds, and partnership dynamics.',
    color: 'from-gold-dim to-gold',
  },
  {
    icon: Briefcase,
    title: 'Career & Finance',
    description:
      'Identifying your natural vocational strengths, optimal career timing, and financial cycles through Dashas and transits.',
    color: 'from-violet-bright to-violet-glow',
  },
  {
    icon: Compass,
    title: 'Marriage Compatibility',
    description:
      'Traditional Ashtakoot and Dashakoot matching combined with chart analysis for deep compatibility assessment.',
    color: 'from-gold to-gold-bright',
  },
  {
    icon: Eye,
    title: 'Life Guidance',
    description:
      'Broad guidance on life purpose, health patterns, spiritual inclinations, and the major chapters ahead.',
    color: 'from-violet/80 to-violet-bright',
  },
  {
    icon: Star,
    title: 'Horoscope Reading',
    description:
      'Annual and monthly forecast reports using planetary transits and Dasha periods for practical planning.',
    color: 'from-gold-bright to-gold',
  },
]

const MISSION_POINTS = [
  'Provide clarity, not fear — the chart is a map, not a sentence',
  'Ground every reading in classical texts and honest interpretation',
  'Offer practical, actionable guidance alongside astrological insight',
  'Treat each consultation as a unique, deeply personal conversation',
  'Respect and protect client privacy at every stage',
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          A. PAGE HERO
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        aria-label="About page hero"
      >
        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-violet/10 blur-[100px]" />
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-gold/6 blur-[90px]" />
        </div>

        {/* Decorative rings — desktop */}
        <div
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none"
          aria-hidden="true"
        >
          {[240, 180, 120].map((size, i) => (
            <div
              key={size}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet/15"
              style={{
                width: size,
                height: size,
                animation: `rotate-slow ${20 + i * 8}s linear infinite ${i % 2 ? 'reverse' : ''}`,
              }}
            />
          ))}
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-violet/30 to-gold/20 border border-violet/30 flex items-center justify-center">
            <Scroll className="w-8 h-8 text-gold-bright" />
          </div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold-bright text-xs font-semibold tracking-[0.2em] uppercase mb-7">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              About Our Astrology Practice
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Guidance{' '}
              <span className="text-gradient-gold">Written in the Stars</span>
            </h1>

            <p className="text-silver text-lg leading-relaxed max-w-xl">
              AstroJyotish is a dedicated Vedic astrology practice offering
              personalised guidance for love, career, relationships, and
              life&apos;s most important decisions — grounded in classical
              scholarship and delivered with genuine care.
            </p>
          </div>
        </Container>

        <span
          className="divider-gold absolute bottom-0 inset-x-0 opacity-40"
          aria-hidden="true"
        />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          B. ASTROLOGER INTRODUCTION
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="section-padding bg-section-dark relative"
        aria-labelledby="astrologer-heading"
      >
        <span className="divider-violet absolute top-0 inset-x-0" aria-hidden="true" />

        <Container>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── Left: decorative portrait composition ── */}
            <div
              className="relative flex items-center justify-center min-h-[340px]"
              aria-hidden="true"
            >
              {/* Outer decorative rings */}
              {[320, 256, 192].map((size, i) => (
                <div
                  key={size}
                  className="absolute rounded-full"
                  style={{
                    width: size,
                    height: size,
                    border: `1px solid ${i === 1 ? 'rgba(217,119,6,0.18)' : 'rgba(107,70,193,0.2)'}`,
                    animation: `rotate-slow ${22 + i * 7}s linear infinite ${i % 2 ? 'reverse' : ''}`,
                  }}
                />
              ))}

              {/* Portrait frame */}
              <div className="relative z-10 w-48 h-48 rounded-full overflow-hidden border-2 border-violet/40 shadow-glow-violet">
                {/* CSS-only portrait placeholder */}
                <div className="absolute inset-0 bg-gradient-to-b from-violet/40 via-cosmic-card to-cosmic-deep" />
                {/* Silhouette shape */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-32">
                  {/* Head */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-b from-gold/30 to-violet/20 border border-gold/20" />
                  {/* Shoulders */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-16 rounded-t-[50%] bg-gradient-to-b from-violet/30 to-violet/10 border-t border-violet/30" />
                </div>
                {/* Stars overlay */}
                {[
                  { style: { top: '18%', left: '22%' } },
                  { style: { top: '12%', right: '20%' } },
                  { style: { top: '35%', right: '14%' } },
                ].map(({ style }, i) => (
                  <Star
                    key={i}
                    className="absolute w-3 h-3 text-gold-bright fill-current animate-twinkle"
                    style={{ ...style, animationDelay: `${i * 0.8}s` }}
                  />
                ))}
              </div>

              {/* Floating zodiac symbols */}
              {[
                { sym: '♈', cls: 'top-6  left-6',  delay: '0s' },
                { sym: '♌', cls: 'top-6  right-6', delay: '1s' },
                { sym: '♎', cls: 'bottom-6 left-6', delay: '2s' },
                { sym: '♓', cls: 'bottom-6 right-6', delay: '3s' },
              ].map(({ sym, cls, delay }) => (
                <span
                  key={sym}
                  className={`absolute ${cls} text-2xl text-violet-light/30 font-serif animate-twinkle-slow`}
                  style={{ animationDelay: delay }}
                >
                  {sym}
                </span>
              ))}

              {/* Award badge */}
              <div className="absolute -bottom-2 right-8 glass rounded-xl px-3 py-2 flex items-center gap-2 border border-gold/30">
                <Award className="w-4 h-4 text-gold-bright" />
                <span className="text-xs font-semibold text-cream">
                  Certified Jyotish Practitioner
                </span>
              </div>
            </div>

            {/* ── Right: bio text ── */}
            <div className="flex flex-col gap-5">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gold-bright">
                <span className="glow-dot" aria-hidden="true" />
                Meet Your Astrologer
              </span>

              <h2
                id="astrologer-heading"
                className="heading-serif text-3xl sm:text-4xl font-bold"
              >
                Rooted in Tradition,{' '}
                <span className="text-gradient-gold">Focused on You</span>
              </h2>

              <p className="text-silver leading-relaxed">
                With over a decade of dedicated practice in Vedic astrology, I
                have guided more than a thousand clients through some of
                life&apos;s most important crossroads — career changes,
                relationship decisions, relocation choices, and questions of
                deeper purpose.
              </p>

              <p className="text-muted text-sm leading-relaxed">
                My training is rooted in the classical tradition of{' '}
                <em className="text-gold-bright not-italic">
                  Brihat Parashara Hora Shastra
                </em>{' '}
                and Jaimini astrology. I hold a postgraduate certification in
                Jyotish Visharad from a recognised institution and have
                continued my studies under senior practitioners for years.
              </p>

              <p className="text-muted text-sm leading-relaxed">
                Every consultation I offer is genuinely personalised. I take the
                time to understand your specific situation and questions before
                the session, so that the time we spend together is focused,
                clear, and practically useful — not generic.
              </p>

              {/* Key facts */}
              <ul className="grid grid-cols-2 gap-3 mt-1" role="list">
                {[
                  'Jyotish Visharad certified',
                  '10+ years active practice',
                  'Classical lineage training',
                  'Clients in 20+ countries',
                  'Hindi & English sessions',
                  'Written report included',
                ].map((fact) => (
                  <li
                    key={fact}
                    className="flex items-center gap-2 text-sm text-silver"
                  >
                    <CheckCircle
                      className="w-3.5 h-3.5 text-gold-bright shrink-0"
                      aria-hidden="true"
                    />
                    {fact}
                  </li>
                ))}
              </ul>

              <Link
                href="/appointment"
                className="btn-primary w-fit text-sm mt-2"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                Book a Consultation
              </Link>
            </div>
          </div>
        </Container>

        <span
          className="divider-gold absolute bottom-0 inset-x-0 opacity-30"
          aria-hidden="true"
        />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          C. CREDENTIALS & EXPERIENCE
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="section-padding"
        aria-labelledby="credentials-heading"
      >
        <Container>
          <SectionHeading
            id="credentials-heading"
            label="Track Record"
            title="Experience You Can"
            highlight="Rely On"
            subtitle="Numbers and milestones that reflect the depth and breadth of this practice."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CREDENTIALS.map((c) => {
              const Icon = c.icon
              return (
                <Card key={c.label} accent className="p-6 flex flex-col gap-4 text-center items-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet/20 to-gold/10 border border-violet/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold-bright" aria-hidden="true" />
                  </div>
                  <span className="font-serif text-3xl font-bold text-gradient-gold">
                    {c.value}
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="text-cream font-semibold text-sm">{c.label}</p>
                    <p className="text-muted text-xs leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          D. AREAS OF EXPERTISE
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="section-padding bg-section-dark relative"
        aria-labelledby="expertise-heading"
      >
        <span className="divider-violet absolute top-0 inset-x-0" aria-hidden="true" />

        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet/6 blur-[100px]" />
        </div>

        <Container className="relative z-10">
          <SectionHeading
            id="expertise-heading"
            label="Specialisations"
            title="Areas of"
            highlight="Expertise"
            subtitle="Each area draws on specific classical techniques tailored to the questions you bring."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERTISE.map((item) => {
              const Icon = item.icon
              return (
                <Card
                  key={item.title}
                  className="group p-6 flex flex-col gap-4"
                >
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-glow-sm`}
                  >
                    <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-cream font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed flex-1">
                    {item.description}
                  </p>
                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-gold-bright hover:text-gold transition-colors group-hover:gap-2 duration-200"
                  >
                    View Service
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </Card>
              )
            })}
          </div>
        </Container>

        <span
          className="divider-gold absolute bottom-0 inset-x-0 opacity-30"
          aria-hidden="true"
        />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          E. OUR MISSION
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="section-padding"
        aria-labelledby="mission-heading"
      >
        <Container>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left: heading + statement */}
            <div className="flex flex-col gap-5">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gold-bright">
                <span className="glow-dot" aria-hidden="true" />
                Our Philosophy
              </span>

              <h2
                id="mission-heading"
                className="heading-serif text-3xl sm:text-4xl font-bold"
              >
                Making Astrology{' '}
                <span className="text-gradient-gold">
                  Practical, Personal &amp; Clear
                </span>
              </h2>

              <p className="text-silver leading-relaxed">
                Our mission is straightforward: to make astrology genuinely
                useful in your real life. That means going beyond vague
                predictions to offer specific, honest, and grounded insight
                based entirely on your individual chart.
              </p>

              <p className="text-muted text-sm leading-relaxed">
                We believe a great astrological consultation should leave you
                feeling more capable and clear — not dependent on further
                readings or frightened by transit warnings. The stars describe
                tendencies and timing. What you do with that information is
                always your own.
              </p>

              {/* Mission points */}
              <ul className="flex flex-col gap-3 mt-2" role="list">
                {MISSION_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-silver"
                  >
                    <span
                      className="mt-1 w-5 h-5 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      <Star className="w-2.5 h-2.5 text-gold-bright fill-current" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: decorative quote card */}
            <div className="flex flex-col gap-6">
              <div className="glass rounded-2xl border border-violet/30 p-8 relative overflow-hidden">
                {/* Ambient glow */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 bg-gold/8 blur-[60px] pointer-events-none"
                  aria-hidden="true"
                />

                <span
                  className="block font-serif text-5xl text-gold/30 leading-none mb-4 select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="text-cream font-serif text-lg sm:text-xl leading-relaxed italic mb-6">
                  The stars incline, they do not compel. Astrology is a tool for
                  wisdom — not a substitute for your own judgment and will.
                </blockquote>
                <p className="text-muted text-xs tracking-widest uppercase">
                  — Core Practice Philosophy
                </p>

                {/* Divider */}
                <span
                  className="divider-gold block mt-6 opacity-40"
                  aria-hidden="true"
                />

                {/* Approach summary */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { icon: BookOpen, label: 'Classical Methods' },
                    { icon: Eye,      label: 'Honest Readings' },
                    { icon: Users,    label: 'Client-Centred' },
                    { icon: Shield,   label: 'Fully Confidential' },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2">
                      <Icon
                        className="w-4 h-4 text-gold-bright shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-xs text-silver">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          F. CTA
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="section-padding bg-section-dark relative"
        aria-labelledby="about-cta-heading"
      >
        <span className="divider-violet absolute top-0 inset-x-0" aria-hidden="true" />

        {/* Glows */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-40 bg-violet/12 blur-[80px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-28 bg-gold/8 blur-[60px]" />
        </div>

        <Container size="sm" className="relative z-10">
          <div className="glass rounded-3xl border border-violet/30 px-6 sm:px-12 py-14 text-center flex flex-col items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet to-gold flex items-center justify-center shadow-glow-violet">
              <Star className="w-6 h-6 text-white fill-current" aria-hidden="true" />
            </div>

            <h2
              id="about-cta-heading"
              className="heading-serif text-3xl sm:text-4xl font-bold text-balance"
            >
              Ready to Explore Your{' '}
              <span className="text-gradient-gold">Astrological Path?</span>
            </h2>

            <p className="text-silver text-base max-w-md leading-relaxed">
              Take the first step toward greater clarity. Book a personalised
              consultation or browse the full range of services available.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/appointment"
                className="btn-primary text-sm px-8 py-3.5"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                Book a Consultation
              </Link>
              <Link
                href="/shop"
                className="btn-secondary text-sm px-8 py-3.5"
              >
                View Services
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <p className="text-muted text-xs flex items-center gap-2 mt-1">
              <Shield className="w-3.5 h-3.5 text-gold/60" aria-hidden="true" />
              Confidential &bull; Personalised &bull; Classical Vedic approach
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
