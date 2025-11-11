import { useEffect } from 'react'
import { Instagram, Behance, Youtube, ArrowRight, Sparkles, MoveRight } from 'lucide-react'

// Brand palette
const BRAND_BLUE = '#3772b7'
const BRAND_YELLOW = '#FFD845'

function App() {
  useEffect(() => {
    // Soft parallax on mouse move for background orbs
    const handleMove = (e) => {
      const orbs = document.querySelectorAll('[data-orb]')
      orbs.forEach((el, i) => {
        const speed = (i + 1) * 0.01
        const x = (window.innerWidth / 2 - e.clientX) * speed
        const y = (window.innerHeight / 2 - e.clientY) * speed
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      })
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div data-orb className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-30" style={{ background: `radial-gradient(60% 60% at 50% 50%, ${BRAND_BLUE}55, transparent 70%)` }} />
        <div data-orb className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-30" style={{ background: `radial-gradient(60% 60% at 50% 50%, ${BRAND_YELLOW}66, transparent 70%)` }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(1200px 600px at 80% 10%, rgba(55,114,183,0.15), transparent), radial-gradient(800px 500px at 10% 90%, rgba(255,216,69,0.08), transparent)' }} />
        {/* Grid overlay */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.06]" aria-hidden>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Navigation */}
      <header className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md" style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}, ${BRAND_YELLOW})` }} />
            <span className="tracking-[0.2em] text-sm uppercase text-slate-300">Resplace</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-slate-300">
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#commissions" className="hover:text-white transition-colors">Commissions</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <a href="https://wa.me/6287802572596" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-slate-900 font-medium" style={{ backgroundColor: BRAND_YELLOW }}>
            Open Commissions <MoveRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 pt-12 sm:pt-24 pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-[${BRAND_YELLOW}]" /> Futuristic Design • Motion • Illustration
            </div>
            <h1 className="mt-6 text-6xl sm:text-7xl font-semibold tracking-tight leading-[0.95]">
              <span style={{ color: BRAND_BLUE }}>Resplace</span>
            </h1>
            <p className="mt-2 text-xl text-slate-300">Replace the Space.</p>
            <p className="mt-6 text-slate-300/90 max-w-xl">
              I’m Resplace — a graphic designer, illustrator, and motion designer who transforms ideas into bold visual stories.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="https://wa.me/6287802572596" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-slate-900 font-semibold shadow-[0_10px_30px_rgba(55,114,183,0.35)]" style={{ backgroundColor: BRAND_YELLOW }}>
                Open Commissions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#portfolio" className="text-slate-300 hover:text-white">See Work</a>
            </div>
          </div>
          <div className="relative">
            {/* Geometric composition */}
            <div className="aspect-square w-full max-w-sm mx-auto">
              <div className="relative h-full w-full">
                <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm" />
                <div className="absolute inset-6 rounded-3xl" style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}33, transparent)` }} />
                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full" style={{ background: `radial-gradient(circle at 30% 30%, ${BRAND_YELLOW}, transparent 60%)` }} />
                <div className="absolute bottom-6 left-6 h-24 w-24 rotate-12" style={{ background: `conic-gradient(from 0deg, ${BRAND_BLUE}, transparent 60%)` }} />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="size-28 rounded-full border border-white/20 bg-white/10 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="relative z-10 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold">Selected Work</h2>
            <span className="text-slate-400 text-sm">Brand Identity • Illustration • Motion Design</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <PortfolioCard key={i} {...p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 backdrop-blur">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4" style={{ color: BRAND_BLUE }}>About</h3>
            <p className="text-slate-300 leading-relaxed">
              Resplace crafts impactful visuals that balance precision and emotion. From bold brand systems to expressive illustrations and kinetic motion, every project is designed to move — blending geometry, rhythm, and story into a cohesive visual language.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              The focus: delivering memorable, future-forward work where motion and design live in harmony.
            </p>
          </div>
        </div>
      </section>

      {/* Commissions */}
      <section id="commissions" className="relative z-10 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold">Open for Commissions</h3>
          <p className="text-slate-300 mt-3">Let’s collaborate and bring your ideas to life.</p>
          <a href="https://wa.me/6287802572596" target="_blank" rel="noreferrer" className="group mt-6 inline-flex items-center gap-2 rounded-full px-8 py-3 font-semibold text-slate-900" style={{ backgroundColor: BRAND_YELLOW }}>
            Message on WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="relative z-10 py-12 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-md" style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}, ${BRAND_YELLOW})` }} />
            <span className="text-slate-300 text-sm">© 2025 Resplace Design — Replace the Space.</span>
          </div>
          <div className="flex items-center gap-4">
            <SocialIcon href="https://instagram.com" label="Instagram"><Instagram className="h-5 w-5" /></SocialIcon>
            <SocialIcon href="https://behance.net" label="Behance"><Behance className="h-5 w-5" /></SocialIcon>
            <SocialIcon href="https://youtube.com" label="YouTube"><Youtube className="h-5 w-5" /></SocialIcon>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/[0.04] text-slate-200 hover:text-white hover:bg-white/[0.08] transition"
    >
      {children}
    </a>
  )
}

function PortfolioCard({ title, tag, color, index }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur"
      style={{
        boxShadow: '0 10px 30px rgba(0,0,0,0.25)'
      }}
    >
      <div className="aspect-[4/3]">
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${color}33, transparent)` }} />
        {/* Decorative geometry */}
        <div className="absolute -top-6 -left-6 h-28 w-28 rounded-full" style={{ background: `radial-gradient(circle at 30% 30%, ${color}, transparent 60%)` }} />
        <div className="absolute bottom-6 right-6 h-20 w-20 rotate-45" style={{ background: `conic-gradient(from 0deg, ${color}, transparent 60%)` }} />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full p-5">
            <div className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/90 backdrop-blur">
              {tag}
            </div>
            <h4 className="mt-3 text-lg font-semibold">{title}</h4>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0))' }} />
        <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-3 py-1.5 text-sm font-medium">
          View Project <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  )
}

const projects = [
  { title: 'Nebula Labs — Identity', tag: 'Brand Identity', color: BRAND_BLUE },
  { title: 'Urban Glyphs — Poster Series', tag: 'Illustration', color: BRAND_YELLOW },
  { title: 'Velocity — Title Motion', tag: 'Motion Design', color: BRAND_BLUE },
  { title: 'MonoMark — Logo System', tag: 'Brand Identity', color: BRAND_YELLOW },
  { title: 'Aurora Frames — Editorial', tag: 'Illustration', color: BRAND_BLUE },
  { title: 'Pulse UI — Product Teaser', tag: 'Motion Design', color: BRAND_YELLOW },
]

export default App
