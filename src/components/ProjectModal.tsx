import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, FileText, ImageOff } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
  totalCount: number;
}

export function ProjectModal({
  project,
  onClose,
  onNavigate,
  totalCount,
}: ProjectModalProps) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && totalCount > 1) {
        onNavigate('prev');
      } else if (e.key === 'ArrowRight' && totalCount > 1) {
        onNavigate('next');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose, onNavigate, totalCount]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-meta modal-desc"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 backdrop-blur-[3px] p-4"
    >
      <div className="rounded-lg border-[3px] border-xp-blue bg-surface-container text-ink shadow-2xl max-w-xl w-full overflow-hidden animate-[fadeIn_180ms_ease-out]">
        {/* Windows XP Glossy Title Bar */}
        <header className="xp-titlebar flex items-center justify-between px-3">
          <div className="flex items-center gap-2 min-w-0">
            <FileText className="w-4 h-4 text-yellow-300 shrink-0" aria-hidden="true" />
            <h2
              id="modal-title"
              className="font-label text-sm font-bold text-white truncate"
            >
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup dialog"
            className="xp-btn xp-btn-red cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
          >
            ✕
          </button>
        </header>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 flex flex-col gap-4">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-sm border border-outline-variant bg-surface-container-low">
            {imageError ? (
              <div
                className={`w-full h-full bg-gradient-to-br ${project.accentBg} flex flex-col items-center justify-center gap-2 p-4 text-center`}
              >
                <ImageOff className="w-8 h-8 text-ink-soft" aria-hidden="true" />
                <span className="font-title text-sm font-bold text-ink">
                  {project.title}
                </span>
              </div>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div>
            <p id="modal-meta" className="font-label text-xs font-semibold text-primary">
              {project.category} · <span className="tabular-nums">{project.year}</span>
            </p>
            <h3 className="font-headline text-[22px] font-bold text-ink mt-1">
              {project.title}
            </h3>
            <p id="modal-desc" className="font-body text-[15px] leading-6 text-ink-soft mt-2">
              {project.fullDesc}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="font-label text-xs font-semibold text-ink">Tools:</span>
            <span className="font-body text-[13px] font-medium text-ink-soft">
              {project.tools.join(', ')}
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <footer className="flex items-center justify-between gap-3 px-5 pb-5 sm:px-6 sm:pb-6">
          {totalCount > 1 ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onNavigate('prev')}
                aria-label="Projek sebelumnya"
                className="inline-flex items-center gap-1 rounded-full bg-surface-container text-ink border-2 border-outline px-3.5 py-1.5 font-label text-xs font-bold hover:bg-pink-gingham transition-colors cursor-pointer whitespace-nowrap"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                <span>Sebelumnya</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('next')}
                aria-label="Projek berikutnya"
                className="inline-flex items-center gap-1 rounded-full bg-surface-container text-ink border-2 border-outline px-3.5 py-1.5 font-label text-xs font-bold hover:bg-pink-gingham transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Berikutnya</span>
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          ) : (
            <div />
          )}

          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full bg-primary text-on-primary border-2 border-outline px-6 py-1.5 cursor-pointer hover:opacity-90 transition-opacity font-label text-sm font-bold whitespace-nowrap"
          >
            Tutup
          </button>
        </footer>
      </div>
    </div>
  );
}
