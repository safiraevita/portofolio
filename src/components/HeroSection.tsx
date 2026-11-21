export function HeroSection() {
  return (
    <header className="hero-turf relative min-h-[85svh] sm:min-h-[870px] w-full flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      {/* SVG Micro-grain Turf Noise Overlay */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full opacity-25 mix-blend-overlay"
        aria-hidden="true"
      >
        <filter id="turf-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#turf-noise)" />
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center select-none">
        <div className="flex flex-col items-start">
          <span className="porto-ribbon font-headline tracking-tight self-start ml-2 sm:ml-6">
            Porto
          </span>
          <h1 className="folio-display">Folio</h1>
        </div>
        <p className="hero-subtitle mt-4 font-body italic font-medium text-on-secondary tracking-wide drop-shadow-md">
          Evita Zahrotus Safira
        </p>
      </div>

      <a
        href="#about"
        className="relative z-10 mt-12 inline-flex items-center gap-1.5 rounded-full bg-surface-container/85 border border-outline px-6 py-2.5 font-label text-sm font-bold text-ink shadow-sm hover:bg-surface-container transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-pastel whitespace-nowrap shrink-0"
      >
        <span>scroll down ↓</span>
      </a>
    </header>
  );
}
