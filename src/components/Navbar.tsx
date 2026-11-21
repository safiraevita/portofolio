interface NavbarProps {
  activeSection: string;
}

const NAV_LINKS = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export function Navbar({ activeSection }: NavbarProps) {
  return (
    <nav
      aria-label="Navigasi utama"
      className="fixed top-4 right-4 sm:right-6 z-50 flex items-center gap-1 sm:gap-2 rounded-full bg-surface-container/90 backdrop-blur-md border border-outline px-3 sm:px-4 py-1.5 shadow-md"
    >
      {NAV_LINKS.map((link) => {
        const isActive = activeSection === link.id;
        return (
          <a
            key={link.id}
            href={link.href}
            className={`font-label text-xs sm:text-sm font-bold whitespace-nowrap shrink-0 px-2.5 py-1 rounded-full transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              isActive
                ? 'bg-pink-pastel text-ink'
                : 'text-ink hover:bg-pink-gingham'
            }`}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}
