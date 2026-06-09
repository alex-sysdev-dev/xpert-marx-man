/* portfolio-hero.jsx — HeroExecutive + HeroEditorial */
import { useState, useEffect } from 'react';

const ArrowRight = () =>
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>;

const Download = () =>
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 15V3M6 9l6 6 6-6M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3" />
  </svg>;


function StatTile({ value, label, sub }) {
  return (
    <div className="stat-tile">
      <div className="stat-val">{value}</div>
      <div className="stat-lbl">{label}</div>
      {sub && <div className="stat-sub">{sub}</div>}
    </div>);

}

/* Hero has CSS keyframe animations — no data-reveal needed */
function HeroExecutive() {
  const { stats, lead, resumeUrl } = window.PORTFOLIO;
  return (
    <section className="hero-exec" id="top">
      <div className="exec-left">
        <div className="exec-eyebrow">
          Founder · USMC Veteran · NASA SBIR Awardee
        </div>
        <h1 className="exec-name" style={{ fontFamily: "Cabin" }}>Alex<br />Aguilar</h1>
        <p className="exec-tagline">Operations Leader. Software Builder.</p>
        <p className="exec-lead">{lead}</p>
        <div className="cta-row">
          <a href="#projects" className="btn btn-primary">View Projects <ArrowRight /></a>
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            Download Resume <Download />
          </a>
        </div>
      </div>
      <div className="exec-right">
        <div className="stat-grid">
          {stats.map((s) => <StatTile key={s.label} value={s.value} label={s.label} sub={s.sub} />)}
        </div>
      </div>
    </section>);

}

function HeroEditorial() {
  const { lead, resumeUrl } = window.PORTFOLIO;
  return (
    <section className="hero-edit" id="top">
      <div className="wrap">
        <div className="edit-hero-inner">
          <p className="edit-eyebrow">Operations Leader · Software Builder · Las Vegas, NV</p>
          <h1 className="edit-name">
            <span className="edit-name-first">Alex</span>
            <span className="edit-name-last">Aguilar</span>
          </h1>
          <div className="edit-rule"></div>
          <p className="edit-tagline">Operations. Software. Intelligence.</p>
          <p className="edit-lead">{lead}</p>
          <div className="cta-row" style={{ justifyContent: 'center' }}>
            <a href="#projects" className="btn btn-primary">View Work <ArrowRight /></a>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Resume <Download /></a>
            <a href="#contact" className="btn btn-text">Get in Touch →</a>
          </div>
        </div>
      </div>
    </section>);

}

Object.assign(window, { HeroExecutive, HeroEditorial, StatTile });