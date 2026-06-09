/* portfolio-sections.jsx — Nav + all section components */
import { useState, useEffect, useRef } from 'react';

/* ── Icons ──────────────────────────────────────────────── */
const Ico = {
  check: <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>,
  ext: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>,
  dl: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V3M6 9l6 6 6-6M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3"/></svg>,
  mail: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 8 10-8"/></svg>,
  gh: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
  li: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  menu: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z"/></svg>,
  close: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>,
  chevron: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>,
};

/* ── Nav ─────────────────────────────────────────────── */
function PortNav({ active, theme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { github, linkedin, resumeUrl } = window.PORTFOLIO;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { href: '#projects',   label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills',     label: 'Skills' },
    { href: '#about',      label: 'About' },
  ];

  const close = () => setOpen(false);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} role="navigation">
      <div className="nav-inner">
        <a href="#top" className="nav-brand" onClick={close}>
          {theme === 'executive' && <span className="nav-mark">AA</span>}
          <span className="nav-brand-stack">
            <span className="nav-brand-name">Alex Aguilar</span>
            {theme === 'executive' && <span className="nav-brand-sub">Operations · Software</span>}
          </span>
        </a>

        <button className="nav-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(o => !o)}>
          {open ? Ico.close : Ico.menu}
        </button>

        <ul className={`nav-links${open ? ' nav-open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className={`nav-link${active === l.href.slice(1) ? ' active' : ''}`} onClick={close}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="nav-cta">
          Resume {Ico.dl}
        </a>
      </div>
    </nav>
  );
}

/* ── Projects ──────────────────────────────────────────── */
function Projects() {
  const { projects } = window.PORTFOLIO;
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <header className="section-header" data-reveal>
          <p className="section-eyebrow">Selected Work</p>
          <h2 className="section-title">Three things I've shipped.</h2>
        </header>
        <div className="projects-list">
          {projects.map((p, i) => <ProjectCard key={p.num} project={p} delay={i} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, delay }) {
  return (
    <article className="project-card card" data-reveal data-d={Math.min(delay, 3)}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="project-head">
          <div>
            <div className="project-num">{p.num} / {String(window.PORTFOLIO.projects.length).padStart(2,'0')}</div>
            <h3 className="project-name">{p.name}</h3>
            <p className="project-type">{p.type}</p>
          </div>
          <span className="pill pill-live">{p.status}</span>
        </div>
        <p className="project-desc">{p.desc}</p>
        <div className="tags">
          {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <div className="wins">
          {p.wins.map((w, i) => (
            <div key={i} className="win-item">
              <span className="win-dot">{Ico.check}</span>
              <span>{w}</span>
            </div>
          ))}
        </div>
        <div className="cta-row">
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '12px', padding: '9px 18px' }}>
            View Live {Ico.ext}
          </a>
        </div>
      </div>
    </article>
  );
}

/* ── Timeline ──────────────────────────────────────────── */
function Timeline() {
  const { experience } = window.PORTFOLIO;
  const [expanded, setExpanded] = useState(new Set([0, 1]));
  const toggle = i => setExpanded(s => {
    const n = new Set(s);
    n.has(i) ? n.delete(i) : n.add(i);
    return n;
  });

  return (
    <section id="experience" className="section" style={{ background: 'rgba(255,255,255,.01)' }}>
      <div className="wrap">
        <header className="section-header" data-reveal>
          <p className="section-eyebrow">Career</p>
          <h2 className="section-title">Experience</h2>
        </header>
        <div className="timeline">
          {experience.map((e, i) => (
            <TLEntry key={i} entry={e} index={i} open={expanded.has(i)} onToggle={() => toggle(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TLEntry({ entry: e, index, open, onToggle }) {
  const cls = ['tl-entry', e.current ? 'tl-entry--current' : '', e.military ? 'tl-entry--military' : ''].filter(Boolean).join(' ');
  return (
    <div className={cls} data-reveal data-d={Math.min(index, 4)}>
      <div className="tl-dot" />
      <div className="tl-body">
        <div className="tl-header" onClick={onToggle} role="button" aria-expanded={open}>
          <div className="tl-left">
            <span className="tl-role">{e.role}</span>
            <span className="tl-company">{e.company}</span>
          </div>
          <div className="tl-right">
            {e.current && <span className="tl-badge">Active</span>}
            <span className="tl-period">{e.period}</span>
            <span className="tl-location">{e.location}</span>
            <span className="tl-toggle" style={{ transform: open ? 'rotate(180deg)' : 'none', display: 'inline-block', transition: 'transform 220ms' }}>
              {Ico.chevron}
            </span>
          </div>
        </div>
        {open && (
          <div className="tl-wins">
            {e.wins.map((w, j) => (
              <div key={j} className="tl-win">{w}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Skills ────────────────────────────────────────────── */
function Skills() {
  const { skills } = window.PORTFOLIO;
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <header className="section-header" data-reveal>
          <p className="section-eyebrow">Capabilities</p>
          <h2 className="section-title">The full stack.</h2>
        </header>
        <div className="skills-grid">
          {skills.map((g, i) => (
            <div key={g.group} className="skill-card card" data-reveal data-d={i + 1}>
              <div className="skill-group-title">{g.group}</div>
              <div className="skill-chips">
                {g.items.map(item => <div key={item} className="skill-chip">{item}</div>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── About ─────────────────────────────────────────────── */
function About() {
  const { certs } = window.PORTFOLIO;
  return (
    <section id="about" className="section" style={{ background: 'rgba(255,255,255,.01)' }}>
      <div className="wrap">
        <header className="section-header" data-reveal>
          <p className="section-eyebrow">Background</p>
          <h2 className="section-title">From the floor to the codebase.</h2>
        </header>
        <div className="about-inner">
          <div>
            <p className="about-bio" data-reveal>
              I'm <strong>Alex Aguilar</strong> — a supply chain operations leader turned full-stack developer based in Las Vegas, NV.
              I've led warehouse operations firsthand at <strong>Amazon, Walmart, Upfield, and Frito-Lay</strong>, which gives me a
              perspective most developers don't have: I build systems for problems I've actually lived.
            </p>
            <p className="about-bio" data-reveal data-d="1">
              In 2024, I founded <strong>AxiomOps</strong> to build AI-powered operational tools. That work led to a
              <strong> NASA SBIR Phase I grant ($180K)</strong> to research autonomous fault management for distributed
              fulfillment operations using LLM-based agentic systems.
            </p>
            <p className="about-bio" data-reveal data-d="2" style={{ marginBottom: '32px' }}>
              Before operations, I served <strong>12 years in the United States Marine Corps</strong> as a Combat Instructor
              at the School of Infantry West — three combat deployments, 2,000+ Marines trained.
              That discipline is still the foundation of everything I do.
            </p>
            <div className="cert-list" data-reveal data-d="3">
              {certs.map(c => (
                <div key={c.label} className="cert-item">
                  <span className="cert-label">{c.label}</span>
                  <span className="cert-detail">{c.detail}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="headshot-wrap" data-reveal data-d="1">
            <img src="/uploads/Headshot.JPG" alt="Alex Aguilar" className="headshot" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Contact ───────────────────────────────────────────── */
function PortContact() {
  const { email, github, linkedin, resumeUrl } = window.PORTFOLIO;
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="contact-card card" data-reveal>
          <div className="contact-inner">
            <p className="section-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Contact</p>
            <h2 className="contact-title">Open to the right opportunity.</h2>
            <p className="contact-sub">Operations leadership, software engineering, or both. Let's talk.</p>
            <a href={`mailto:${email}`} className="btn btn-primary">
              Send a Message
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <div className="contact-links">
              <a href={`mailto:${email}`} className="contact-link">{Ico.mail} {email}</a>
              <a href={github} target="_blank" rel="noopener noreferrer" className="contact-link">{Ico.gh} GitHub</a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">{Ico.li} LinkedIn</a>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="contact-link">{Ico.dl} Resume PDF</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ────────────────────────────────────────────── */
function PortFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} Alex Aguilar — Built from the floor up.</span>
          <span>Las Vegas, NV · xpertmarxman@gmail.com</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { PortNav, Projects, Timeline, Skills, About, PortContact, PortFooter });
