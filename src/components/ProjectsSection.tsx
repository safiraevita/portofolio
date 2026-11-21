import { useState } from 'react';
import { Folder, ImageOff } from 'lucide-react';
import { PROJECTS, ProjectCategory, ProjectItem } from '../data/portfolioData';

type FilterOption = 'all' | ProjectCategory;

const FILTER_OPTIONS: { value: FilterOption; label: string }[] = [
  { value: 'all', label: 'Semua' },
  { value: 'Web & IT', label: 'Web & IT' },
  { value: 'Administrasi', label: 'Administrasi' },
  { value: 'Multimedia', label: 'Multimedia' },
];

interface ProjectsSectionProps {
  selectedProjectId: string | null;
  onSelectProject: (project: ProjectItem) => void;
  activeFilter: FilterOption;
  onChangeFilter: (filter: FilterOption) => void;
}

function ProjectCard({
  project,
  isSelected,
  onSelect,
}: {
  project: ProjectItem;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`canva-card relative bg-surface-container p-2.5 flex flex-col justify-between cursor-pointer shadow-sm ${
        isSelected ? 'is-selected' : ''
      }`}
    >
      {/* 8 Canva Selection Handles */}
      <span className="canva-handle handle-tl" aria-hidden="true" />
      <span className="canva-handle handle-tc" aria-hidden="true" />
      <span className="canva-handle handle-tr" aria-hidden="true" />
      <span className="canva-handle handle-ml" aria-hidden="true" />
      <span className="canva-handle handle-mr" aria-hidden="true" />
      <span className="canva-handle handle-bl" aria-hidden="true" />
      <span className="canva-handle handle-bc" aria-hidden="true" />
      <span className="canva-handle handle-br" aria-hidden="true" />

      <div>
        <div className="aspect-[3/4] w-full overflow-hidden rounded-sm bg-surface-container-low mb-3 border border-outline-variant">
          {imgError ? (
            <div
              className={`w-full h-full bg-gradient-to-br ${project.accentBg} flex flex-col items-center justify-center gap-2 p-4 text-center`}
            >
              <ImageOff className="w-7 h-7 text-ink-soft" aria-hidden="true" />
              <span className="font-title text-xs font-bold text-ink">
                {project.title}
              </span>
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="font-label text-xs font-semibold text-primary">
            {project.category}
          </span>
          <span className="font-label text-xs font-semibold text-ink-soft tabular-nums">
            {project.year}
          </span>
        </div>

        <h3 className="font-title text-base font-bold text-ink leading-snug">
          {project.title}
        </h3>
      </div>

      <p className="font-body text-[13px] font-medium leading-5 text-ink-soft mt-2">
        {project.shortDesc}
      </p>
    </div>
  );
}

export function ProjectsSection({
  selectedProjectId,
  onSelectProject,
  activeFilter,
  onChangeFilter,
}: ProjectsSectionProps) {
  const [isMinimized, setIsMinimized] = useState(false);

  const visibleProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((item) => item.category === activeFilter);

  return (
    <section
      id="projects"
      className="bg-bliss relative w-full pt-20 pb-24 px-6 overflow-hidden scroll-mt-12"
    >
      {/* Bliss Rolling Hills & Soft Clouds SVG */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
        aria-hidden="true"
      >
        <ellipse cx="260" cy="140" rx="140" ry="38" fill="#FFFFFF" opacity="0.72" />
        <ellipse cx="320" cy="128" rx="95" ry="34" fill="#FFFFFF" opacity="0.82" />
        <ellipse cx="1080" cy="180" rx="170" ry="42" fill="#FFFFFF" opacity="0.68" />
        <ellipse cx="1160" cy="166" rx="105" ry="36" fill="#FFFFFF" opacity="0.78" />
        <path
          d="M0,560 Q360,460 760,540 T1440,500 L1440,800 L0,800 Z"
          fill="#63B63C"
        />
        <path
          d="M0,620 Q480,530 960,610 T1440,580 L1440,800 L0,800 Z"
          fill="#469628"
        />
      </svg>

      <div className="relative z-10 max-w-[1060px] mx-auto flex flex-col items-center">
        <h2 className="pill-heading font-headline mb-8">Projek &amp; Karya</h2>

        {/* Retro Windows XP Explorer Window */}
        <div className="reveal xp-window w-full bg-surface-container overflow-hidden">
          {/* Glossy XP Title Bar */}
          <div className="xp-titlebar px-3 flex items-center justify-between gap-2 select-none">
            <div className="flex items-center gap-2 min-w-0">
              <Folder className="w-4 h-4 text-yellow-300 fill-yellow-300 shrink-0" aria-hidden="true" />
              <span className="font-label text-xs sm:text-sm font-bold text-white truncate drop-shadow-sm">
                C:\Evita\Portofolio\Projek_2024-2026
              </span>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={() => setIsMinimized(true)}
                aria-label="Perkecil jendela"
                title="Perkecil"
                className="xp-btn xp-btn-blue cursor-pointer"
              >
                _
              </button>
              <button
                type="button"
                onClick={() => setIsMinimized(false)}
                aria-label="Pulihkan ukuran jendela"
                title="Pulihkan"
                className="xp-btn xp-btn-blue cursor-pointer"
              >
                □
              </button>
              <button
                type="button"
                onClick={() => onChangeFilter('all')}
                aria-label="Reset filter projek"
                title="Reset filter"
                className="xp-btn xp-btn-red cursor-pointer"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Canvas Body with 20px Dot Grid */}
          {isMinimized ? (
            <div className="xp-dot-grid px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="font-body text-sm text-ink-soft">
                Jendela folder Projek_2024-2026 diperkecil.
              </p>
              <button
                type="button"
                onClick={() => setIsMinimized(false)}
                className="inline-flex items-center justify-center rounded-full bg-primary text-on-primary border-2 border-outline px-5 py-1.5 font-label text-sm font-bold cursor-pointer hover:opacity-90"
              >
                Buka Kembali
              </button>
            </div>
          ) : (
            <div className="xp-dot-grid px-5 py-7 sm:px-7 sm:py-8">
              {/* Category Filter Bar */}
              <div
                className="flex flex-wrap items-center gap-2.5 mb-7"
                role="toolbar"
                aria-label="Filter kategori projek"
              >
                {FILTER_OPTIONS.map((opt) => {
                  const isActive = activeFilter === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => onChangeFilter(opt.value)}
                      className={`inline-flex items-center justify-center rounded-full border-2 border-outline px-6 py-1.5 font-label text-sm font-bold whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                        isActive
                          ? 'bg-primary text-on-primary shadow-sm'
                          : 'bg-surface-container text-ink hover:bg-pink-gingham'
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>

              {/* 4-Column Poster Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                {visibleProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    isSelected={selectedProjectId === project.id}
                    onSelect={() => onSelectProject(project)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
