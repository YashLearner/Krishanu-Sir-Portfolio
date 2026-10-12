import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Achievements", href: "#achievements" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Current Initiatives", href: "#initiatives" },
  ],

  hero: {
    welcomeBadge: "Welcome",
    name: "Krishanu Kaundilya",
    titleAccent: "Founder @ CoreDhristi",
    role: "AI Agent & Automation Developer",
    tagline: "Building Trust Infrastructure for the AI Agent Economy",
    focusAreas: ["AI Agents", "Automation", "Security"],
    bio: "I help companies stop doing by hand what verified AI agents can already do — hiring vetted agents, automations, and MCP servers like a workforce, with security review before anything goes live.",
    ctaPrimary: {
      label: "Let's Talk",
      href: "https://coredhristi.com/",
    },
    profileImage: {
      src: "/Images/Sir image.jpg",
      alt: "Krishanu Kaundilya — Founder of CoreDhristi and Cybersecurity Specialist",
      width: 600,
      height: 700,
    },
    floatingBadges: {
      topBadge: {
        title: "Cyber Security Expert",
      },
      bottomBadge: {
        title: "Solutions for the AI Agent Economy",
      },
    },
  },

  companyMarquee: {
    title: "Companies & Organizations Worked With / Mentored",
    items: [
      {
        id: "adsmark",
        name: "Adsmark",
        logoUrl: "/Images/ADSMARK_LANDSCAPE_LOGO_FOR_WHITE_WITHOUT_bg.webp",
        placeholder: false,
      },
      {
        id: "nexttechwaves",
        name: "NextTechWaves",
        logoUrl: "/Images/nexttechwaves.png",
        placeholder: false,
      },
      {
        id: "tohfabazzar",
        name: "Tohfa Bazzar",
        logoUrl: "/Images/tohfabazzar.png",
        placeholder: false,
      },
      {
        id: "crawldigitally",
        name: "Crawl Digitally",
        logoUrl: "/Images/crawl digitally.png",
        placeholder: false,
      },
    ],
  },

  about: {
    badge: "About us",
    headline: "About Krishanu Kaundilya",
    leadBio:
      "Krishanu Kaundilya is a Cybersecurity Professional, AI Agent & Automation Developer, Educator, and Entrepreneur with approximately five years of experience across cybersecurity, AI agent development, automation, and emerging AI technologies.",
    bioParagraphs: [
      "With a background in offensive security and vulnerability research, Krishanu has worked across web and API security, network security, Vulnerability Assessment and Penetration Testing (VAPT), Static and Dynamic Application Security Testing (SAST/DAST), security automation, and AI/LLM security. As a CEH Master and Certified Ethical Hacker, he brings a security-first mindset to evaluating digital systems, identifying vulnerabilities, and understanding the risks associated with increasingly autonomous technologies.",
      "His work also extends to AI security research, prompt-injection testing, LLM red teaming, custom security tooling, and agentic AI workflows. By actively building AI agents and automation systems, he understands both sides of the technology: how to develop capable AI solutions and how to address the security, trust, and operational challenges they introduce.",
    ],
    image: {
      src: "/Images/Sir image 2.jpg",
      alt: "Krishanu Kaundilya — Founder of CoreDhristi & Cybersecurity Specialist",
      width: 600,
      height: 600,
    },
    skillsAndExperience: {
      title: "Skills & Experience",
      headline: "5+ Years of Experience",
      supportingLine:
        "Hands-on experience across AI agents, automation, and cybersecurity.",
      skills: [
        "AI Automation",
        "AI Agents",
        "MCP Servers",
        "Cybersecurity",
        "LLM Red Teaming",
        "CEH Master",
        "VAPT",
        "SAST / DAST",
        "Prompt Injection",
        "Entrepreneur",
      ],
    },
    education: [
      {
        id: "iim-kozhikode",
        institution: "Indian Institute of Management, Kozhikode",
        programme:
          "Professional Certificate Programme in Product Management (eMDP)",
        period: "Jul 2023 – Apr 2024",
        badge: "Executive Education",
        description:
          "Completed the Professional Certificate Programme in Product Management (eMDP) covering core product management principles, strategy, lifecycle management, and digital execution.",
        skillsTags: ["Product Management", "Product Strategy", "Digital Growth"],
        credentialRef: "202324AsyncEMDP07/054",
        certificateImageUrl: "/Images/iim-kozhikode-certificate.png",
      },
      {
        id: "st-paul-bca",
        institution: "St. Paul Institute Of Professional Studies",
        programme:
          "B.C.A, Computer and Information Sciences and Support Services",
        period: "Jun 2020 – May 2023",
        grade: "Grade: A",
        badge: "Undergraduate Degree",
        description:
          "Completed Bachelor of Computer Applications with Grade A, building strong foundations in computer sciences, software engineering, UI design, and web architecture.",
        skillsTags: ["UI Designer", "Web Design", "Computer Science"],
      },
      {
        id: "ec-council-ceh",
        institution: "EC-Council",
        programme:
          "Certified Ethical Hacker (CEH Master / Practical)",
        period: "Jan 2025 – Feb 2026",
        grade: "Practical Certified",
        badge: "Cybersecurity Specialization",
        description:
          "Rigorous offensive security training completing hands-on challenges across network exploitation, VAPT, web/API security testing, and advanced defensive analysis.",
        skillsTags: ["Offensive Security", "VAPT", "Penetration Testing", "LLM Red Teaming"],
        credentialRef: "ECC1293456087",
        certificateImageUrl: "/Images/ceh-practical-certificate.jpg",
      },
    ],
    certificates: [
      {
        id: "ceh-practical",
        title: "Certified Ethical Hacker (Practical)",
        issuer: "EC-Council",
        dateOrPeriod: "Jan 2025 – Feb 2026",
        certificateNumber: "ECC1293456087",
        accreditation: "ANSI / ISO/IEC 17024 Accredited",
        imageUrl: "/Images/ceh-practical-certificate.jpg",
        badge: "Offensive Security",
      },
      {
        id: "iim-pm",
        title: "Professional Certificate Programme in Product Management",
        issuer: "Indian Institute of Management Kozhikode (IIM Kozhikode)",
        dateOrPeriod: "Jul 2023 – Apr 2024",
        certificateNumber: "202324AsyncEMDP07/054",
        accreditation: "eMDP (Asynchronous)",
        imageUrl: "/Images/iim-kozhikode-certificate.png",
        badge: "Product Strategy",
      },
    ],
    credentials: [
      {
        title: "Founder & Partner",
        issuer: "CoreDhristi LLP (Incorporated Oct 2026)",
        details: "Building trust and evaluation infrastructure for AI agents and MCP servers.",
      },
      {
        title: "Certified Ethical Hacker (CEH Master)",
        issuer: "EC-Council",
        details: "Practical penetration testing, ethical hacking, and offensive security methodologies.",
      },
      {
        title: "Executive Security Instructor",
        issuer: "Bhopal Administration Session",
        details: "Delivered strategic cybersecurity briefings for senior IPS and IAS officers.",
      },
    ],
    expertiseAreas: [
      {
        category: "AI Agents & Automation",
        description:
          "Building robust multi-agent systems, autonomous task workflows, and custom MCP bridges for enterprise data environments.",
        tags: ["CrewAI", "LangChain", "MCP Servers", "Autonomous Agents", "n8n", "Python"],
      },
      {
        category: "Offensive Security & Red Teaming",
        description:
          "Proactive vulnerability assessment, penetration testing, prompt injection simulations, and LLM security audits.",
        tags: ["VAPT", "SAST / DAST", "Promptfoo", "LLM Red Teaming", "Semgrep", "CodeQL"],
      },
      {
        category: "7-Layer Verification Pipeline",
        description:
          "Automated security auditing framework verifying code provenance, secret leakage, dependencies, and behavioral boundaries.",
        tags: ["Betterleaks", "OSV-Scanner", "Syft (SBOM)", "Agentic Radar", "Presidio PII"],
      },
    ],
  },

  experiences: [
    {
      id: "tohfa-bazzar",
      number: "01",
      company: "Tohfa Bazzar",
      description: "Built AI based CRM",
      logoUrl: "/Images/tohfabazzar.png",
      accentColor: "orange",
      isVerified: true,
    },
    {
      id: "crawl-digitally",
      number: "02",
      company: "Crawl Digitally",
      description: "Cybersecurity and AI solution",
      logoUrl: "/Images/crawl digitally.png",
      accentColor: "orange",
      isVerified: true,
    },
    {
      id: "adsmark01",
      number: "03",
      company: "ADSMARK01",
      description: "CRM and ai agent solution",
      logoUrl: "/Images/ADSMARK_LANDSCAPE_LOGO_FOR_WHITE_WITHOUT_bg.webp",
      accentColor: "orange",
      isVerified: true,
    },
    {
      id: "nexttechwaves",
      number: "04",
      company: "Nexttechwaves",
      description: "Ai Based Educational Solution",
      logoUrl: "/Images/nexttechwaves.png",
      accentColor: "orange",
      isVerified: true,
    },
    {
      id: "indiganic-foods",
      number: "05",
      company: "Indiganic Foods",
      description: "Built AI-based CRM",
      accentColor: "orange",
      isVerified: true,
    },
  ],

  achievements: [
    {
      id: "bhopal-ips-session",
      title: "Cybersecurity & Ethical Hacking Session for IPS, IAS & Civil Officers",
      category: "Executive Training & Civil Leadership",
      organizationOrContext: "State Administration, Bhopal",
      year: "Executive Briefing",
      description:
        "Delivered a specialized, high-impact cybersecurity and ethical hacking session in Bhopal for senior government officials, including IPS and IAS officers. Covered critical insights from ethical hacking to advanced cybersecurity, threat vector defense, and digital security governance.",
      impact:
        "Equipped senior administrative and police leadership with actionable offensive security concepts, cyber defense mechanisms, and digital risk mitigation strategies.",
      imageUrl: "/Images/Bhopal ips.jpg",
      audience: "Senior IPS & IAS Officers, Civil Administration Leaders",
      keyTopics: [
        "Ethical Hacking Fundamentals",
        "Offensive Security Threat Vectors",
        "Critical Digital Systems Defense",
        "AI & Cyber Risk Mitigation",
      ],
      isVerified: true,
    },
  ],

  services: [
    {
      id: "coredhristi-marketplace",
      title: "CoreDhristi Marketplace",
      description:
        "The trusted AI workforce marketplace enabling companies to hire verified AI agents, intelligent automations, and custom MCP servers verified across 7 security layers.",
      icon: "marketplace",
      href: "https://coredhristi.com/",
      ctaText: "Explore Marketplace",
    },
    {
      id: "ai-agents",
      title: "AI Agents",
      description:
        "Custom autonomous multi-agent systems and goal-driven LLM workflows tailored for intelligent task execution, document analysis, and 24/7 business operations.",
      icon: "agent",
      href: "https://coredhristi.com/hire/developers",
      ctaText: "Discuss AI Agents",
    },
    {
      id: "ai-automations",
      title: "AI Automations",
      description:
        "Scalable end-to-end process automations connecting webhook flows, APIs, and databases (n8n, Make, custom scripts) to eliminate manual overhead.",
      icon: "automation",
      href: "https://coredhristi.com/marketplace?type=automation",
      ctaText: "Automate Workflows",
    },
    {
      id: "cybersecurity-solutions",
      title: "Cybersecurity Solutions",
      description:
        "Comprehensive Vulnerability Assessment and Penetration Testing (VAPT), offensive security audits, SAST/DAST reviews, and prompt injection LLM red-teaming.",
      icon: "security",
      href: "https://coredhristi.com/about#security",
      ctaText: "Request Security Review",
    },
    {
      id: "ai-based-crm",
      title: "AI Based CRM",
      description:
        "Intelligent customer relationship platforms equipped with automated agent follow-ups, smart pipeline tracking, and personalized client engagement.",
      icon: "crm",
      href: "#contact",
      ctaText: "Build Custom CRM",
    },
    {
      id: "website-development",
      title: "Website Development",
      description:
        "High-performance, secure, and modern web applications engineered with Next.js, TypeScript, and responsive design systems built for speed and conversion.",
      icon: "web",
      href: "#contact",
      ctaText: "Develop Web App",
    },
  ],

  currentInitiatives: [
    {
      id: "coredhristi-initiative",
      title: "CoreDhristi",
      statusTag: "AI Agent Marketplace",
      logoUrl: "/Images/Coredhristi.png",
      summary:
        "CoreDhristi is an AI agent marketplace where companies hire verified AI agents, AI automations, and MCP servers. Developers build and sell their AI agents, earning 80% revenue share. Browsing is free; you only need to log in to hire, subscribe, or list.",
      teamSize: "8+ Team Members & Engineers",
      points: [
        "Vetted AI workforce verified through 7-layer security checks",
        "80% revenue share for verified AI agent developers",
        "Browse freely with instant hiring & subscribing",
      ],
      href: "https://www.coredhristi.com/",
      linkText: "Visit CoreDhristi",
      domainStatus: "live_verified",
    },
    {
      id: "nexttechwaves-initiative",
      title: "NextTechWaves.online",
      statusTag: "Educational Academy",
      logoUrl: "/Images/nexttechwaves.png",
      summary:
        "An educational platform where Krishanu teaches AI, Automation, and Cybersecurity. Actively mentoring students from India as well as Nepal in live online cohorts.",
      teamSize: "Online Cohorts across India & Nepal",
      points: [
        "Practical curriculum in AI Agents, Automation, and Ethical Hacking",
        "Cross-border cohorts mentoring learners in India and Nepal",
        "Hands-on project delivery and offensive security labs",
      ],
      href: "https://nexttechwaves.online/index.html",
      linkText: "Visit NextTechWaves",
      domainStatus: "live_verified",
    },
  ],

  testimonials: [
    {
      id: "testimonial-1",
      name: "Senior Leadership Team",
      role: "Enterprise Partner",
      organization: "Tohfa Bazzar",
      content:
        "Krishanu architected and deployed our AI-based CRM with exceptional speed and security guardrails. His dual mastery in autonomous systems and cybersecurity ensures everything runs reliably without risk.",
      rating: 5,
      isVerified: true,
    },
    {
      id: "testimonial-2",
      name: "Technical Director",
      role: "Client Partner",
      organization: "Crawl Digitally",
      content:
        "Outstanding expertise in cybersecurity solutions and AI automation. He identified critical threat vectors that traditional audits missed and built automated agent workflows that streamlined our entire team's workflow.",
      rating: 5,
      isVerified: true,
    },
    {
      id: "testimonial-3",
      name: "Operations Lead",
      role: "Product Growth",
      organization: "ADSMARK01",
      content:
        "The custom CRM and AI agent solutions Krishanu developed have transformed our lead qualification and client handling. A true engineer with a security-first approach.",
      rating: 5,
      isVerified: true,
    },
  ],

  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/krishanu-kaundilya/",
      label: "Krishanu Kaundilya on LinkedIn",
    },
    {
      platform: "CoreDhristi",
      url: "https://coredhristi.com/",
      label: "Official CoreDhristi Platform",
    },
  ],

  footer: {
    headline: "Let's Build the Secure AI Economy Together",
    subheadline:
      "Whether you need verified AI agents, custom MCP server architecture, or exhaustive security reviews, let's connect.",
    ctaButton: {
      label: "Get in Touch",
      href: "https://coredhristi.com/",
    },
    copyrightNotice: `© ${new Date().getFullYear()} Krishanu Kaundilya. All rights reserved.`,
  },
};
