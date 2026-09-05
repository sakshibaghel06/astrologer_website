import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import LiveProductFilters from '@/components/shop/LiveProductFilters'
import ProductFilters from '@/components/shop/ProductFilters'
import { getActiveProducts } from '@/app/shop/actions'
import { STATIC_PRODUCTS, SHOP_CATEGORIES } from '@/lib/shop-data'
import {
  Sparkles,
  Eye,
  Shield,
  Zap,
  Award,
  ArrowRight,
  MessageCircle,
  AlertCircle,
} from 'lucide-react'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Astrology Services & Reports',
  description:
    'Explore personalised astrology consultations, birth chart reports, relationship readings, and career guidance from an experienced Vedic astrologer.',
}

// ─── Static data ──────────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: Eye,
    title: 'Personalised Guidance',
    description:
      'Every service is built from your unique birth chart — no generic forecasts, no one-size-fits-all readings.',
  },
  {
    icon: Zap,
    title: 'Clear & Practical Insights',
    description:
      'Guidance you can act on. Each reading focuses on clarity and practical takeaways for your real situation.',
  },
  {
    icon: Shield,
    title: 'Confidential Sessions',
    description:
      'Everything discussed stays completely private. Your chart, your questions, and your session details are yours alone.',
  },
  {
    icon: Award,
    title: 'Experienced Approach',
    description:
      'Rooted in classical Jyotish with 10+ years of active practice and over 1,000 consultations completed.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ShopPage() {
  // Attempt to load live products from Supabase
  const result = await getActiveProducts()

  // Determine what to render in the product grid:
  //   - Supabase succeeded + has rows → use LiveProductFilters (DB data)
  //   - Supabase succeeded + empty    → fall back to static data (static filters)
  //   - Supabase failed               → fall back to static data + show soft error note
  const useLive    = result.success && result.data.length > 0
  const dbError    = !result.success
  const liveProducts = result.success ? result.data : []

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        aria-label="Services page hero"
      >
        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-56 bg-violet/10 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-gold/6 blur-[90px]" />
        </div>

        {/* Decorative rings — desktop only */}
        <div
          className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 pointer-events-none"
          aria-hidden="true"
        >
          {[200, 150, 100].map((size, i) => (
            <div
              key={size}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet/15"
              style={{
                width: size,
                height: size,
                animation: `rotate-slow ${18 + i * 8}s linear infinite ${i % 2 ? 'reverse' : ''}`,
              }}
            />
          ))}
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-violet/30 to-gold/20 border border-violet/30 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-gold-bright" aria-hidden="true" />
          </div>
          {['♈', '♎', '♊', '♐'].map((sym, i) => {
            const angles = [0, 90, 180, 270]
            const r   = 100
            const rad = (angles[i] * Math.PI) / 180
            const x   = 40 + r * Math.cos(rad - Math.PI / 2)
            const y   = 40 + r * Math.sin(rad - Math.PI / 2)
            return (
              <span
                key={sym}
                className="absolute text-lg text-violet-light/30 font-serif"
                style={{ left: x, top: y, transform: 'translate(-50%,-50%)' }}
                aria-hidden="true"
              >
                {sym}
              </span>
            )
          })}
        </div>

        <Container className="relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold-bright text-xs font-semibold tracking-[0.2em] uppercase mb-7">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              Astrology Services
            </div>

            <h1 className="heading-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Guidance Designed for{' '}
              <span className="text-gradient-gold">Your Journey</span>
            </h1>

            <p className="text-silver text-lg leading-relaxed max-w-xl">
              Explore personalised astrology consultations and reports designed
              to bring clarity to the areas of life that matter most — love,
              career, relationships, and purpose.
            </p>
          </div>
        </Container>

        <span className="divider-gold absolute bottom-0 inset-x-0 opacity-40" aria-hidden="true" />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PRODUCT GRID
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="section-padding bg-section-dark relative"
        aria-labelledby="services-grid-heading"
      >
        <span className="divider-violet absolute top-0 inset-x-0" aria-hidden="true" />

        <Container>
          <div className="mb-10">
            <h2
              id="services-grid-heading"
              className="heading-serif text-2xl sm:text-3xl font-bold mb-2"
            >
              All Services
            </h2>
            <p className="text-muted text-sm">
              Filter by category or browse all available readings and reports.
            </p>
          </div>

          {/* Soft error note — only shown when DB failed and we fell back to static */}
          {dbError && (
            <div className="flex items-center gap-2 mb-8 rounded-xl border border-amber-800/40 bg-amber-900/20 px-4 py-3 text-sm text-amber-300">
              <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              Showing featured services. Live product catalogue temporarily unavailable.
            </div>
          )}

          {/* Live data from Supabase */}
          {useLive && (
            <LiveProductFilters
              products={liveProducts}
              categories={SHOP_CATEGORIES}
            />
          )}

          {/* Static fallback — used when DB is empty or unavailable */}
          {!useLive && (
            <ProductFilters
              products={STATIC_PRODUCTS}
              categories={SHOP_CATEGORIES}
            />
          )}
        </Container>

        <span className="divider-gold absolute bottom-0 inset-x-0 opacity-30" aria-hidden="true" />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          WHY CHOOSE A PERSONALISED READING
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-padding" aria-labelledby="benefits-heading">
        <Container>
          <SectionHeading
            id="benefits-heading"
            label="The Difference"
            title="Why Choose a"
            highlight="Personalised Reading?"
            subtitle="A chart-based consultation goes far deeper than any sun-sign horoscope."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b) => {
              const Icon = b.icon
              return (
                <Card key={b.title} accent className="p-6 flex flex-col gap-4 text-center items-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet/20 to-gold/10 border border-violet/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold-bright" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-cream font-semibold">{b.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{b.description}</p>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="section-padding bg-section-dark relative"
        aria-labelledby="shop-cta-heading"
      >
        <span className="divider-violet absolute top-0 inset-x-0" aria-hidden="true" />

        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-40 bg-violet/10 blur-[80px]" />
        </div>

        <Container size="sm" className="relative z-10">
          <div className="glass rounded-3xl border border-violet/30 px-6 sm:px-12 py-14 text-center flex flex-col items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet to-gold flex items-center justify-center shadow-glow-violet">
              <MessageCircle className="w-6 h-6 text-white" aria-hidden="true" />
            </div>

            <h2
              id="shop-cta-heading"
              className="heading-serif text-2xl sm:text-3xl font-bold text-balance"
            >
              Not Sure Which Service{' '}
              <span className="text-gradient-gold">Is Right for You?</span>
            </h2>

            <p className="text-silver text-base max-w-md leading-relaxed">
              We&apos;re happy to help you choose the right consultation based
              on what you want clarity on. Send us a message and we&apos;ll
              guide you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-sm px-8 py-3.5">
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Contact Us
              </Link>
              <Link href="/about" className="btn-secondary text-sm px-8 py-3.5">
                Learn About Our Approach
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <p className="text-muted text-xs flex items-center gap-2 mt-1">
              <Shield className="w-3.5 h-3.5 text-gold/60" aria-hidden="true" />
              No obligation &bull; Confidential &bull; Honest guidance
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
