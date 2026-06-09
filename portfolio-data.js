'use strict';
window.PORTFOLIO = {
  name: "Alex Aguilar",
  title: "Operations Leader · Software Builder",
  location: "Las Vegas, NV",
  email: "xpertmarxman@gmail.com",
  github: "https://github.com/alex-sysdev-dev",
  linkedin: "https://www.linkedin.com/in/alex-a-47333223b",
  resumeUrl: "https://raw.githubusercontent.com/alex-sysdev-dev/xpert-marx-man/main/Aguilar_Supply_Chain_OpsTech.pdf",
  lead: "Supply chain operations leader turned full-stack developer. After 8+ years on the fulfillment floor, I build the systems operators actually need — grounded in real warehouse experience, not abstract spec sheets.",

  stats: [
    { value: "8+",    label: "Yrs Ops Leadership", sub: "Amazon · Walmart · Upfield" },
    { value: "$180K", label: "NASA SBIR Grant",     sub: "Phase I · Awardee 2026" },
    { value: "4",     label: "Products Live",       sub: "In Production" },
    { value: "12",    label: "Yrs USMC Service",    sub: "Combat Instructor" },
  ],

  projects: [
    {
      num: "01",
      name: "BlueLineOps",
      type: "Warehouse Management System",
      status: "Live",
      url: "https://bluelineopsok.vercel.app",
      desc: "Full-stack WMS covering yard management, inbound receiving, QA, inventory control, and outbound fulfillment workflows. The operational testbed and research instrumentation platform for the NASA SBIR Phase I autonomous fault management research.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "REST APIs", "Vercel"],
      wins: [
        "Relational data model: warehouses, trailers, yard spots, shipments, inventory bins",
        "Task-driven execution with real-time labor assignment to associates and stations",
        "Bin-level inventory tracking from inbound shipment through QA, storage, and staging",
      ],
    },
    {
      num: "02",
      name: "ChatterBot",
      type: "Multi-Tenant AI SaaS",
      status: "Live",
      url: "https://chatter-bot-chi.vercel.app",
      desc: "Operator platform enabling local businesses to configure, train, and deploy branded AI chatbot agents. Full Stripe billing with tiered pricing, multi-tenant operator dashboard, and embeddable widget via code snippet.",
      tech: ["Next.js", "OpenAI API", "Supabase", "Stripe", "Node.js", "Vercel"],
      wins: [
        "Multi-tenant operator dashboard — no engineering required for config or training",
        "Stripe subscription billing (Starter/Growth/Pro) with webhooks and lifecycle management",
        "Embeddable chat widget deployable via a single code snippet",
      ],
    },
    {
      num: "03",
      name: "FreelancerOS",
      type: "Business Management Platform",
      status: "Live",
      url: "https://freelancer-os-gray.vercel.app",
      desc: "Full-stack web application to track, manage, and visualize freelance revenue, clients, projects, and invoices. Secure REST APIs, environment-based configuration management, and a responsive data-driven UI.",
      tech: ["Next.js", "React", "Supabase", "PostgreSQL", "Vercel", "Git"],
      wins: [
        "Revenue and invoice tracking across clients and projects in one dashboard",
        "Production-grade REST APIs with environment-based configuration security",
        "Git-based CI/CD deployment on Vercel with responsive data-driven UI",
      ],
    },
    {
      num: "04",
      name: "Keystone",
      type: "Federal Grant Consulting Firm",
      status: "Live",
      url: "https://keystone-tawny-three.vercel.app/",
      desc: "End-to-end proposal management platform for federal grant applicants. Clients get a dedicated portal with proposal stage tracking, compliance cross-walk, document review, milestone timelines, and direct messaging — built from the inside out by someone who navigated the NASA SBIR process firsthand.",
      tech: ["React", "Vite", "Vercel", "Custom Design System", "Stripe"],
      wins: [
        "Client portal: live proposal stage tracker, compliance checklist, and document review workflow",
        "Services site + white-label portal — landing page, service pages, brand film, and launch strategy",
        "Built from personal experience securing NASA SBIR Phase I — every feature solves a real pain point",
      ],
    },
  ],

  experience: [
    {
      role: "Founder & Principal Investigator",
      company: "AxiomOps",
      period: "2024 – Present",
      location: "Las Vegas, NV",
      current: true,
      wins: [
        "Secured NASA SBIR Phase I — $180K to research autonomous fault management using LLM-based agentic systems",
        "Shipped 3 production SaaS products: BlueLineOps, ChatterBot, FreelancerOS",
        "Completed end-to-end federal grant process: SAM.gov, SBA SBIR Registry, NASA ProSAMS (UEI: XTKAKMCJ8NG5)",
      ],
    },
    {
      role: "Tax Preparer",
      company: "Jackson Hewitt",
      period: "Sep 2025 – Present",
      location: "Kansas City, MO",
      current: true,
      wins: [
        "Prepare individual and complex Form 1040 filings including multi-state returns",
        "Identify tax-saving opportunities; maintain compliance with IRS regulations",
      ],
    },
    {
      role: "Area Manager",
      company: "Amazon",
      period: "Mar 2024 – Apr 2025",
      location: "Kansas City, MO",
      wins: [
        "Supervised 32–55 hourly associates across high-volume fulfillment zones",
        "Reduced downtime 15% through forecasting dashboard improvements",
        "Maintained 98% on-time operational performance",
      ],
    },
    {
      role: "Warehouse Supervisor",
      company: "Upfield",
      period: "Feb 2023 – Feb 2024",
      location: "New Century, KS",
      wins: [
        "Directed SAP-integrated WMS operations — 99% order accuracy",
        "Reduced downtime 12% through Root Cause Analysis initiatives",
        "Automated reporting workflows — 40% reduction in manual data entry",
      ],
    },
    {
      role: "Area Manager / Systems Lead",
      company: "Walmart",
      period: "Aug 2021 – Dec 2023",
      location: "Topeka, KS",
      wins: [
        "Supported Walmart Fulfillment launch — startup operations, staffing, and execution",
        "Maintained 97% on-time fulfillment through labor planning",
        "Managed WCS automation — reduced unplanned downtime via predictive maintenance",
      ],
    },
    {
      role: "Site Expert Trainer",
      company: "Frito-Lay",
      period: "Jul 2015 – Feb 2021",
      location: "Topeka, KS",
      wins: [
        "Led technical training for processing and production teams across all shifts",
        "Partnered with Engineering to commission and stabilize new processing lines",
        "Developed standardized operations and safety training curriculum",
      ],
    },
    {
      role: "Combat Instructor",
      company: "United States Marine Corps",
      period: "Nov 2002 – Nov 2014",
      location: "Camp Pendleton, CA",
      military: true,
      wins: [
        "School of Infantry West · 12 years service",
        "Trained 2,000+ Marines in advanced tactics and mission readiness",
        "3 combat deployments: Iraq ×2 (Battle of Fallujah), Afghanistan (Battle of Marjah)",
      ],
    },
  ],

  skills: [
    {
      group: "Operations",
      items: ["WMS / SAP ERP", "Kronos LMS", "Yard Management", "Lean / Six Sigma", "Root Cause Analysis", "Union CBA Mgmt", "EHS Compliance"],
    },
    {
      group: "Engineering",
      items: ["TypeScript / JavaScript", "React / Next.js", "Node.js / REST APIs", "PostgreSQL / Supabase", "Git / GitHub", "Vercel", "Stripe"],
    },
    {
      group: "AI & Automation",
      items: ["LLM APIs (Anthropic / OpenAI)", "Agentic Systems", "RAG Architecture", "Multi-tenant SaaS", "Serverless Functions", "Chatbot Design"],
    },
    {
      group: "Leadership",
      items: ["Team Leadership (55+)", "Workforce Training", "Change Management", "KPI Reporting", "Tableau", "UAT / Implementation"],
    },
  ],

  certs: [
    { label: "NASA SBIR Phase I", detail: "INSITU.1.S26B-0315 · $180,000 · 2026" },
    { label: "IRS PTIN",          detail: "Active · Tax Professional" },
    { label: "B.S. Information Technology", detail: "SNHU · 2023" },
  ],
};
