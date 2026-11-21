import { EDUCATION_ITEMS, EXPERIENCE_COLUMNS } from '../data/portfolioData';

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-alpine relative w-full py-20 px-6 overflow-hidden scroll-mt-12"
    >
      {/* Atmospheric Alpine Mountain & Pine Forest SVG Scenery */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full object-cover"
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="mist-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A6C8E2" />
            <stop offset="100%" stopColor="#DCEBF5" />
          </linearGradient>
        </defs>
        <rect width="1440" height="800" fill="url(#mist-sky)" />
        {/* Distant Mountain Peaks */}
        <path
          d="M0,480 L180,260 L340,390 L520,210 L740,410 L960,180 L1180,360 L1340,240 L1440,340 L1440,800 L0,800 Z"
          fill="#89A8BD"
          opacity="0.65"
        />
        <path
          d="M0,560 L240,360 L460,500 L680,330 L920,490 L1140,320 L1440,480 L1440,800 L0,800 Z"
          fill="#5E8196"
          opacity="0.7"
        />
        {/* Deep Pine Forest Silhouette */}
        <path
          d="M0,800 L0,620 L40,560 L80,620 L120,520 L170,630 L210,550 L260,640 L310,540 L360,630 L420,570 L470,640 L520,530 L580,640 L640,560 L700,630 L760,520 L820,640 L880,550 L940,630 L1000,540 L1060,640 L1120,560 L1180,630 L1240,530 L1300,640 L1360,560 L1440,630 L1440,800 Z"
          fill="#183424"
        />
      </svg>

      {/* Pastel Pink Clipboard Centerpiece */}
      <div className="reveal relative z-10 max-w-[980px] mx-auto pt-7">
        {/* Top-Center Brushed Chrome Metal Clip */}
        <div className="chrome-clip w-[150px] h-[48px] mx-auto -mb-5 relative z-20 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-surface border border-ink/50 shadow-inner" />
        </div>

        {/* Pink Clipboard Board */}
        <div className="clipboard-board px-6 py-10 sm:px-11 sm:py-12">
          {/* Group 1: Pengalaman Organisasi */}
          <div>
            <h2 className="pill-heading font-headline">Pengalaman Organisasi</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-7">
              {EXPERIENCE_COLUMNS.map((column, colIdx) => (
                <div
                  key={colIdx}
                  className="border-l-[1.5px] border-ink pl-4 flex flex-col gap-6"
                >
                  {column.map((item, idx) => (
                    <div key={`${item.organization}-${idx}`}>
                      <h3 className="font-title text-base font-bold text-ink">
                        {item.organization}
                      </h3>
                      <p className="font-label text-xs font-semibold text-ink-soft mt-1 tabular-nums">
                        {item.period}
                      </p>
                      <p className="font-body text-[13px] font-medium leading-5 text-ink mt-1.5">
                        <strong>{item.role}</strong> — {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Group 2: Latar Belakang Pendidikan */}
          <div className="mt-9">
            <h2 className="pill-heading font-headline">Latar Belakang Pendidikan</h2>

            <div className="border-l-[1.5px] border-ink pl-4 mt-5 flex flex-col gap-4">
              {EDUCATION_ITEMS.map((edu) => (
                <div key={edu.institution}>
                  <p className="font-title text-base font-bold text-ink">
                    {edu.institution}{' '}
                    <span className="font-body text-[13px] text-ink-soft font-normal tabular-nums">
                      ({edu.period})
                    </span>
                  </p>
                  <p className="font-body text-[13px] font-medium text-ink mt-0.5">
                    {edu.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
