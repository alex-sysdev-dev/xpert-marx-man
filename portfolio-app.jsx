/* portfolio-app.jsx — Main App + Tweaks */
import { useState, useEffect, useRef } from 'react';

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme":   "executive",
  "accent":  "blue",
  "density": "standard"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [active, setActive] = useState('top');
  const [navOpen, setNavOpen] = useState(false);

  /* Active section tracking */
  useEffect(() => {
    const ids = ['top', 'projects', 'experience', 'skills', 'about', 'contact'];
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [t.theme]);

  /* Below-fold scroll reveal — setTimeout is reliable in iframe environments */
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
      }),
      { threshold: 0.04 }
    );

    const setup = () => {
      document.querySelectorAll('[data-reveal]').forEach(el => {
        el.classList.remove('in');
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight + 80) {
          el.classList.add('in');
        } else {
          obs.observe(el);
        }
      });
    };

    /* Use setTimeout so it runs even when rAF is throttled */
    const timer = setTimeout(setup, 120);
    return () => { clearTimeout(timer); obs.disconnect(); };
  }, [t.theme]);

  /* Persist scroll position */
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-scroll');
    if (saved) window.scrollTo(0, parseInt(saved, 10));
    const fn = () => localStorage.setItem('portfolio-scroll', String(window.scrollY));
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div id="app" data-theme={t.theme} data-accent={t.accent} data-density={t.density}>
      <PortNav active={active} theme={t.theme} />

      {t.theme === 'executive' ? <HeroExecutive /> : <HeroEditorial />}

      <Projects />
      <Timeline />
      <Skills />
      <About />
      <PortContact />
      <PortFooter />

      <TweaksPanel>
        <TweakSection label="Design Direction" />
        <TweakRadio
          label="Theme"
          value={t.theme}
          options={['executive', 'editorial']}
          onChange={v => setTweak('theme', v)}
        />

        <TweakSection label="Accent Color" />
        <TweakColor
          label="Accent"
          value={t.accent === 'blue' ? '#3b82f6' : t.accent === 'cyan' ? '#22d3ee' : '#10b981'}
          options={['#3b82f6', '#22d3ee', '#10b981']}
          onChange={v => {
            if (v === '#3b82f6') setTweak('accent', 'blue');
            else if (v === '#22d3ee') setTweak('accent', 'cyan');
            else setTweak('accent', 'emerald');
          }}
        />

        <TweakSection label="Layout" />
        <TweakRadio
          label="Density"
          value={t.density}
          options={['standard', 'compact']}
          onChange={v => setTweak('density', v)}
        />
      </TweaksPanel>
    </div>
  );
}

export default App;
