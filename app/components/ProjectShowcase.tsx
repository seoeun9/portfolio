"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  role: string;
  result: string;
  overview: string;
  details: string[];
  links: ProjectLink[];
};

type ProjectShowcaseProps = {
  projects: Project[];
};

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeProject = activeIndex === null ? null : projects[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <div className="project-heading pt-10">
        <div>
          <p className="text-[11px] font-bold tracking-[0.18em] text-[#8068bd] uppercase">
            Technical Skills
          </p>
          <h3 className="pt-2 text-3xl font-semibold tracking-[-0.04em]">
            Projects
          </h3>
        </div>
        <p>카드를 눌러 프로젝트 이야기를 확인해 보세요.</p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <button
            type="button"
            className="project-card"
            key={project.title}
            onClick={() => setActiveIndex(index)}
            aria-label={`${project.title} 상세 보기`}
          >
            <span className="project-card-number">0{index + 1}</span>
            <span className="project-card-art" aria-hidden="true">
              <span />
              <span />
            </span>
            <span className="project-card-content">
              <span className="project-card-role">{project.role}</span>
              <strong>{project.title}</strong>
              <span className="project-card-description">{project.result}</span>
              <span className="project-card-link">
                자세히 보기 <span aria-hidden="true">↗</span>
              </span>
            </span>
          </button>
        ))}
      </div>

      {activeProject &&
        createPortal(
          <div
            className="project-modal-backdrop"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setActiveIndex(null);
            }}
          >
            <section
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
            >
              <button
                ref={closeButtonRef}
                type="button"
                className="project-modal-close"
                onClick={() => setActiveIndex(null)}
                aria-label="프로젝트 상세 닫기"
              >
                ×
              </button>

              <div className="project-modal-visual" aria-hidden="true">
                <span>0{(activeIndex ?? 0) + 1}</span>
                <i />
                <i />
              </div>

              <div className="project-modal-content">
                <p>{activeProject.role}</p>
                <h3 id="project-modal-title">{activeProject.title}</h3>
                <div className="project-modal-rule" />
                <p className="project-modal-description">
                  {activeProject.overview}
                </p>

                <ul
                  className="project-modal-list"
                  aria-label={`${activeProject.title} 상세 내용`}
                >
                  {activeProject.details.map((detail) => (
                    <li key={`${activeProject.title}-${detail}`}>{detail}</li>
                  ))}
                </ul>

                <div
                  className="project-modal-actions"
                  aria-label={`${activeProject.title} 관련 링크`}
                >
                  {activeProject.links.map((link) => (
                    <a
                      key={`${activeProject.title}-${link.label}`}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="project-modal-link"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </div>,
          document.body,
        )}
    </>
  );
}
