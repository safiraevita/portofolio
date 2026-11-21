/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProjectModal } from './components/ProjectModal';
import { ProjectsSection } from './components/ProjectsSection';
import { PROJECTS, ProjectCategory, ProjectItem } from './data/portfolioData';

type FilterOption = 'all' | ProjectCategory;

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);

  // Scroll Reveal via IntersectionObserver
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      reveals.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    } else {
      reveals.forEach((el) => el.classList.add('in'));
    }
  }, []);

  // Track active section in viewport for Navbar pill highlight
  useEffect(() => {
    const sectionIds = ['about', 'experience', 'projects', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 220;
      let current = 'about';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollY >= top) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((item) => item.category === activeFilter);

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProjectId(project.id);
    setModalProject(project);
  };

  const handleNavigateModal = (direction: 'prev' | 'next') => {
    if (!modalProject || filteredProjects.length <= 1) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === modalProject.id);
    const safeIndex = currentIndex === -1 ? 0 : currentIndex;
    const nextIndex =
      direction === 'next'
        ? (safeIndex + 1) % filteredProjects.length
        : (safeIndex - 1 + filteredProjects.length) % filteredProjects.length;
    const nextProject = filteredProjects[nextIndex];
    setSelectedProjectId(nextProject.id);
    setModalProject(nextProject);
  };

  return (
    <div className="min-h-screen bg-surface text-ink font-body">
      <Navbar activeSection={activeSection} />

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection
          selectedProjectId={selectedProjectId}
          onSelectProject={handleSelectProject}
          activeFilter={activeFilter}
          onChangeFilter={setActiveFilter}
        />
      </main>

      <footer className="bg-grass-dark border-t-2 border-pink-pastel text-on-secondary text-center py-5 px-6">
        <p className="font-body text-[13px] font-medium">
          © 2026 Evita Zahrotus Safira · Y2K Digital Scrapbook Portfolio ✦
        </p>
      </footer>

      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
        onNavigate={handleNavigateModal}
        totalCount={filteredProjects.length}
      />
    </div>
  );
}
