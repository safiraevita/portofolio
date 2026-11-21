import { useState } from 'react';
import { Check, Copy, Mail, MapPin } from 'lucide-react';
import { EDUCATION_ITEMS, SKILL_TOOLS } from '../data/portfolioData';
import { RetroPhoneMockup } from './RetroPhoneMockup';

export function AboutSection() {
  const [activeSkillId, setActiveSkillId] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const selectedSkill = SKILL_TOOLS.find((tool) => tool.id === activeSkillId);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('safiraevita094@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback: ignore if clipboard API unavailable
    }
  };

  return (
    <section id="about" className="bg-linen w-full py-20 px-6 scroll-mt-4">
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-12 lg:gap-14 items-center">
        {/* Left Column: Retro Silver Feature Phone Mockup */}
        <div className="reveal flex justify-center">
          <RetroPhoneMockup />
        </div>

        {/* Right Column: Bio, Education, Software Skills & Contact */}
        <div className="reveal flex flex-col gap-6">
          <div>
            <span className="marker-pink font-headline text-[22px] font-bold inline-block">
              Halo!
            </span>
          </div>

          <div className="flex flex-col gap-3 font-body text-[15px] leading-6 text-ink max-w-prose text-pretty">
            <p>
              Perkenalkan, aku <span className="marker-pink">Evita Zahrotus Safira</span>, mahasiswa
              S1 Teknik Informatika di Institut Teknologi PLN (lulusan SMA Darul Ulum 1 Unggulan).
            </p>
            <p>
              Tertarik pada bidang teknologi informasi, manajemen administrasi &amp; keuangan
              organisasi, multimedia kreatif, serta pengelolaan acara.
            </p>
          </div>

          {/* Pendidikan */}
          <div className="flex flex-col gap-3">
            <h2 className="font-title text-base font-bold text-ink">Pendidikan</h2>
            <div className="flex flex-col gap-3">
              {EDUCATION_ITEMS.map((edu) => (
                <div
                  key={edu.institution}
                  className="border-l-[3px] border-pink-pastel pl-3"
                >
                  <p className="font-title text-base font-bold text-ink">{edu.institution}</p>
                  <p className="font-body text-[13px] font-medium text-ink-soft">
                    {edu.degreeOrDetail} (<span className="tabular-nums">{edu.period}</span>)
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Software & Tools */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-title text-base font-bold text-ink">Software &amp; Tools</h2>
              {selectedSkill && (
                <span className="font-label text-xs font-semibold text-pink-deep">
                  {selectedSkill.name}
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3.5">
              {SKILL_TOOLS.map((tool) => {
                const isSelected = activeSkillId === tool.id;
                return (
                  <button
                    key={tool.id}
                    type="button"
                    title={tool.name}
                    aria-label={tool.name}
                    aria-pressed={isSelected}
                    onClick={() =>
                      setActiveSkillId((prev) => (prev === tool.id ? null : tool.id))
                    }
                    className={`skill-tile flex items-center justify-center text-white font-headline cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                      tool.tileClass
                    } ${isSelected ? 'ring-2 ring-ink ring-offset-2 ring-offset-paper-linen' : ''}`}
                  >
                    {tool.id === 'capcut' ? (
                      <svg
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M4 7l16 5-16 5V7z" />
                        <path d="M4 17l16-5" />
                      </svg>
                    ) : (
                      tool.label
                    )}
                  </button>
                );
              })}
            </div>

            {selectedSkill && (
              <p className="font-body text-[13px] text-ink-soft bg-surface-container/80 border border-ink/20 rounded-md px-3.5 py-2 max-w-lg">
                <strong className="text-ink">{selectedSkill.name}:</strong> {selectedSkill.note}
              </p>
            )}
          </div>

          {/* Divider */}
          <hr className="border-t-[1.5px] border-ink my-1" />

          {/* Kontak */}
          <div id="contact" className="flex flex-col gap-3 scroll-mt-20">
            <h2 className="font-title text-base font-bold text-ink">Kontak</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-body text-[13px] font-medium text-ink">
              <a
                href="https://www.linkedin.com/in/evita-zahrotus-safira"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>Evita Zahrotus Safira</span>
              </a>

              <a
                href="https://www.instagram.com/zhrsaf._"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 hover:text-primary transition-colors"
              >
                <svg
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>@zhrsaf._</span>
              </a>

              <div className="inline-flex items-center gap-2.5 flex-wrap">
                <a
                  href="mailto:safiraevita094@gmail.com"
                  className="inline-flex items-center gap-2.5 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>safiraevita094@gmail.com</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Salin alamat email"
                  title="Salin email"
                  className="inline-flex items-center gap-1 rounded-sm border border-ink/30 bg-surface-container px-2 py-0.5 text-[11px] font-label font-semibold text-ink hover:bg-pink-gingham transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-grass-mid" aria-hidden="true" />
                      <span>Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" aria-hidden="true" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>

              <div className="inline-flex items-center gap-2.5">
                <MapPin className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>Cengkareng, Jakarta Barat, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
