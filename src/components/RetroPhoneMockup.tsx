import { useState } from 'react';
import { Phone, PhoneOff } from 'lucide-react';

interface PhoneScreen {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  note: string;
}

const PHONE_SCREENS: PhoneScreen[] = [
  {
    id: 'greeting',
    badge: 'Hai, aku Evita!',
    title: 'Evita Zahrotus S.',
    subtitle: 'Informatics Engineering · IT PLN',
    note: 'Y2K digital scrapbook & creative archive ✦',
  },
  {
    id: 'focus',
    badge: 'Fokus & Minat',
    title: 'IT, Admin & Kreatif',
    subtitle: 'Web · Keuangan · Multimedia',
    note: 'Teliti menyusun pembukuan, rapi mengonsep acara.',
  },
  {
    id: 'location',
    badge: 'Domisili',
    title: 'Jakarta Barat',
    subtitle: 'Cengkareng, Indonesia',
    note: 'Terbuka untuk kolaborasi proyek & kepanitiaan!',
  },
];

export function RetroPhoneMockup() {
  const [screenIndex, setScreenIndex] = useState(0);
  const current = PHONE_SCREENS[screenIndex];

  const handleNext = () => {
    setScreenIndex((prev) => (prev + 1) % PHONE_SCREENS.length);
  };

  const handlePrev = () => {
    setScreenIndex((prev) => (prev - 1 + PHONE_SCREENS.length) % PHONE_SCREENS.length);
  };

  const handleCallContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="phone-chassis w-full max-w-[330px] aspect-[9/17.5] p-4 flex flex-col justify-between relative">
      {/* Top Speaker Slot */}
      <div className="flex justify-center pt-1 pb-2">
        <div className="w-14 h-2 rounded-full bg-ink/80 shadow-inner" />
      </div>

      {/* Inner Gingham Screen */}
      <div className="phone-gingham relative flex-1 rounded-md border-2 border-ink/70 overflow-hidden shadow-inner flex flex-col justify-between p-4">
        {/* Greeting Pill Badge */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-label text-[11px] font-bold text-ink/70 tabular-nums">
            0{screenIndex + 1}/0{PHONE_SCREENS.length}
          </span>
          <span
            role="status"
            className="inline-flex items-center rounded-full bg-secondary text-on-secondary px-4 py-1.5 shadow-md"
          >
            <span className="font-label text-xs font-semibold whitespace-nowrap">
              {current.badge}
            </span>
          </span>
        </div>

        {/* Center Scrapbook Card */}
        <div className="my-auto flex flex-col items-center text-center gap-2">
          <div className="w-24 h-24 rounded-full bg-surface-container border-2 border-ink flex items-center justify-center shadow-md sticker-cutout">
            <span className="font-display italic font-black text-3xl text-pink-deep">
              E✦
            </span>
          </div>
          <div className="bg-surface-container/92 border-[1.5px] border-ink rounded-md px-3.5 py-3 shadow-sm w-full">
            <p className="font-title text-sm font-bold text-ink">{current.title}</p>
            <p className="font-label text-[11px] font-semibold text-pink-deep mt-0.5">
              {current.subtitle}
            </p>
            <p className="font-handwritten text-xl font-bold text-ink leading-tight mt-2">
              {current.note}
            </p>
          </div>
        </div>

        {/* Softkey Hint Row */}
        <div className="flex items-center justify-between text-[11px] font-label font-bold text-ink/75 pt-1">
          <span>‹ Prev</span>
          <span>Next ›</span>
        </div>
      </div>

      {/* Tactile Keypad */}
      <div className="pt-4 pb-2 px-2 flex flex-col gap-3">
        <div className="flex items-center justify-between px-2">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Layar ponsel sebelumnya"
            className="w-11 h-6 rounded-full bg-surface-container border border-ink/40 text-ink font-bold text-xs shadow-sm active:scale-95 transition-transform cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            —
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Layar ponsel berikutnya"
            className="w-11 h-6 rounded-full bg-surface-container border border-ink/40 text-ink font-bold text-xs shadow-sm active:scale-95 transition-transform cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            —
          </button>
        </div>

        <div className="flex items-center justify-between px-2">
          <button
            type="button"
            onClick={handleCallContact}
            aria-label="Menuju bagian kontak"
            title="Menuju Kontak"
            className="w-11 h-8 rounded-full bg-grass-mid border border-ink/50 text-on-secondary flex items-center justify-center shadow-sm active:scale-95 transition-transform cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
          </button>

          {/* Center 5-Way D-Pad */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Ganti tampilan layar ponsel"
            title="Tekan untuk ganti info"
            className="phone-dpad w-16 h-16 rounded-md flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span className="w-7 h-7 rounded-sm border border-ink/30 bg-surface-container/60" />
          </button>

          <button
            type="button"
            onClick={() => setScreenIndex(0)}
            aria-label="Kembali ke layar awal ponsel"
            title="Kembali ke awal"
            className="w-11 h-8 rounded-full bg-pink-deep border border-ink/50 text-on-primary flex items-center justify-center shadow-sm active:scale-95 transition-transform cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <PhoneOff className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
