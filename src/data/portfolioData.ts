import { PortfolioData } from "@/types/portfolio";
import type { FAQ } from "@/types/knowledgeBase";

export const portfolioData: PortfolioData = {
  "navLinks": [
    {
      "label": "Home",
      "href": "#hero"
    },
    {
      "label": "About",
      "href": "#about"
    },
    {
      "label": "Achievements",
      "href": "#achievements"
    },
    {
      "label": "Experience",
      "href": "#experience"
    },
    {
      "label": "Services",
      "href": "#services"
    },
    {
      "label": "Current Initiatives",
      "href": "#initiatives"
    }
  ],
  "hero": {
    "welcomeBadge": "Welcome",
    "name": "Krishanu Kaundilya",
    "titleAccent": "Founder @CoreDhristi & CoreD",
    "role": "AI Agent & Automation Developer",
    "tagline": "AI for everyday business work, built with security in mind.",
    "focusAreas": [
      "AI Agents",
      "Automation",
      "Security"
    ],
    "bio": "I build AI agents, custom CRMs and automations for work that keeps piling up: following up with leads, answering customer questions and keeping business records organised. My background in cybersecurity shapes how I approach the data and access these systems need.",
    "ctaPrimary": {
      "label": "Discuss a project",
      "href": "https://www.linkedin.com/in/krishanu-kaundilya/"
    },
    "profileImage": {
      "src": "/Images/Sir image.jpg",
      "alt": "Krishanu Kaundilya — Founder of CoreDhristi and Cybersecurity Specialist",
      "width": 600,
      "height": 700
    },
    "floatingBadges": {
      "topBadge": {
        "title": "Cyber Security Expert"
      },
      "bottomBadge": {
        "title": "Solutions for the AI Agent Economy"
      }
    }
  },
  "companyMarquee": {
    "title": "Selected client and venture work",
    "items": [
      {
        "id": "adsmark",
        "name": "Adsmark",
        "logoUrl": "/Images/ADSMARK_LANDSCAPE_LOGO_FOR_WHITE_WITHOUT_bg.webp",
        "placeholder": false
      },
      {
        "id": "nexttechwaves",
        "name": "NextTechWaves",
        "logoUrl": "/Images/nexttechwaves.png",
        "placeholder": false
      },
      {
        "id": "tohfabazzar",
        "name": "Tohfa Bazzar",
        "logoUrl": "/Images/tohfabazzar.png",
        "placeholder": false
      },
      {
        "id": "crawldigitally",
        "name": "Crawl Digitally",
        "logoUrl": "/Images/crawl digitally.png",
        "placeholder": false
      }
    ]
  },
  "about": {
    "badge": "About",
    "headline": "About Krishanu Kaundilya",
    "leadBio": "I'm Krishanu Kaundilya, founder of CoreDhristi and CoreD. I build AI agents and business automations, and work in cybersecurity. I started in UI design and learned much of my development work by building things people needed.",
    "bioParagraphs": [
      "My first role was a UI design internship at Technomize in December 2022, while I was still in college. After that, I took on design and web development projects through friends and family. If a project needed something I hadn't built before, I learned it and put it to work. That became the start of my freelancing journey.",
      "I also completed a Product Management programme at IIM Kozhikode. Alongside the design work, I began learning ethical hacking and vulnerability assessment. In 2024, I joined CyberSapiens as an intern, then moved to DTSS Consultants, a Dubai-based firm, as a remote Information Security Consultant. I worked there from May 2024 to March 2026.",
      "Learning about AI security led me to study the systems themselves. I began building AI agents and automations, including CRMs that handle follow-ups and WhatsApp workflows that answer customer enquiries. In June 2025, I also delivered VAPT training to law enforcement officers at CAPT Bhopal, an opportunity that came through LinkedIn.",
      "Today, I'm building CoreDhristi, an AI marketplace, and CoreD, its AI and IT solutions arm. CoreD focuses on cloud, AI and cybersecurity. The two bring together my interests in software, product development and security."
    ],
    "image": {
      "src": "/Images/sir-about-enhanced.png",
      "alt": "Krishanu Kaundilya — Founder of CoreDhristi & Cybersecurity Specialist",
      "width": 1208,
      "height": 1302
    },
    "skillsAndExperience": {
      "title": "Skills & Experience",
      "headline": "Building and learning through real projects since 2022.",
      "supportingLine": "Design, development, cybersecurity and AI automation.",
      "skills": [
        "AI Agents",
        "CRM Development",
        "WhatsApp Automation",
        "VAPT",
        "API Security",
        "SAST / DAST",
        "Malware Analysis",
        "UI Design",
        "Web Development",
        "Product Management"
      ]
    },
    "education": [
      {
        "id": "iim-kozhikode",
        "institution": "Indian Institute of Management, Kozhikode",
        "programme": "Professional Certificate Programme in Product Management (eMDP)",
        "period": "Jul 2023 – Apr 2024",
        "badge": "Executive Education",
        "description": "Completed the Professional Certificate Programme in Product Management (eMDP) covering core product management principles, strategy, lifecycle management, and digital execution.",
        "skillsTags": [
          "Product Management",
          "Product Strategy",
          "Digital Growth"
        ],
        "credentialRef": "202324AsyncEMDP07/054",
        "certificateImageUrl": "/Images/iim-kozhikode-certificate.png"
      },
      {
        "id": "st-paul-bca",
        "institution": "St. Paul Institute Of Professional Studies",
        "programme": "Bachelor of Computer Applications (BCA)",
        "period": "Jun 2020 – May 2023",
        "grade": "Grade: A",
        "badge": "Undergraduate Degree",
        "description": "Completed a Bachelor of Computer Applications with Grade A. My UI design internship at Technomize began during this degree.",
        "skillsTags": [
          "UI Designer",
          "Web Design",
          "Computer Science"
        ]
      },
      {
        "id": "ec-council-practical-training",
        "institution": "EC-Council",
        "programme": "Certified Ethical Hacker (Practical)",
        "period": "Jan 2025 · expiry Feb 2026",
        "badge": "Cybersecurity specialization",
        "grade": "Practical credential",
        "description": "Earned the CEH (Practical) credential in January 2025. The profile lists an expiry in February 2026; renewal has not been confirmed.",
        "skillsTags": ["Offensive Security", "VAPT", "Penetration Testing"],
        "credentialRef": "ECC1293456087",
        "certificateImageUrl": "/Images/ceh-practical-certificate.jpg"
      }
    ],
    "certificates": [
      {
        "id": "ceh-practical",
        "title": "Certified Ethical Hacker (Practical)",
        "issuer": "EC-Council",
        "dateOrPeriod": "Earned Jan 2025 · listed expiry Feb 2026",
        "certificateNumber": "ECC1293456087",
        "accreditation": "CEH (Practical), earned January 2025. The profile lists an expiry in February 2026; renewal has not been confirmed.",
        "imageUrl": "/Images/ceh-practical-certificate.jpg",
        "badge": "Historical credential"
      },
      {
        "id": "iim-pm",
        "title": "Professional Certificate Programme in Product Management",
        "issuer": "Indian Institute of Management Kozhikode (IIM Kozhikode)",
        "dateOrPeriod": "Jul 2023 – Apr 2024",
        "certificateNumber": "202324AsyncEMDP07/054",
        "accreditation": "eMDP (Asynchronous)",
        "imageUrl": "/Images/iim-kozhikode-certificate.png",
        "badge": "Product Strategy"
      }
    ],
    "credentials": [],
    "expertiseAreas": []
  },
  "experiences": [
    {
      "id": "tohfa-bazzar",
      "number": "01",
      "company": "Tohfa Bazzar",
      "description": "Built an AI-based CRM for a 3D miniature business, with automatic follow-up messages, a Gmail connection, AI calling and WhatsApp requirement gathering.",
      "logoUrl": "/Images/tohfabazzar.png",
      "accentColor": "orange",
      "isVerified": true,
      "role": "AI CRM & follow-ups",
      "highlights": [
        "Tohfa Bazzar makes 3D-printed miniatures, paints them and sells them to customers. Digital marketing was bringing in enquiries, but responding and following up on time was becoming difficult.",
        "I built an AI-based CRM around that part of the business. It could send follow-up messages automatically, connect with Gmail and use a calling agent for follow-up calls. WhatsApp automation handled conversations with customers and gathered their requirements."
      ]
    },
    {
      "id": "crawl-digitally",
      "number": "02",
      "company": "Crawl Digitally",
      "description": "Ongoing cybersecurity work in malware analysis, protection of company computers and vulnerability assessment and penetration testing.",
      "logoUrl": "/Images/crawl digitally.png",
      "accentColor": "orange",
      "isVerified": true,
      "role": "Cybersecurity",
      "highlights": [
        "My work with Crawl Digitally is ongoing cybersecurity support. It includes malware analysis on the team's computers, threat protection for company systems and vulnerability assessment and penetration testing.",
        "The engagement spans endpoint issues as well as vulnerability testing. Those are the two parts of the work I support."
      ]
    },
    {
      "id": "adsmark01",
      "number": "03",
      "company": "ADSMARK01",
      "description": "Built an AI-agent-based CRM for a digital marketing company to address delayed lead handling and missed follow-ups.",
      "logoUrl": "/Images/ADSMARK_LANDSCAPE_LOGO_FOR_WHITE_WITHOUT_bg.webp",
      "accentColor": "orange",
      "isVerified": true,
      "role": "AI-agent CRM",
      "highlights": [
        "ADSMARK01 is a digital marketing company. The CRM problem was familiar from my work with Tohfa Bazzar: enquiries were arriving, but timely responses and follow-ups needed a better system.",
        "I built an AI-agent-based CRM to support that workflow. The project centred on lead handling and follow-ups for the agency, rather than treating every enquiry as a task someone had to remember later."
      ]
    },
    {
      "id": "nexttechwaves",
      "number": "04",
      "company": "Next Tech Waves",
      "description": "Added AI agents to education-focused CRM systems in a venture I started. Next Tech Waves is now closed.",
      "logoUrl": "/Images/nexttechwaves.png",
      "accentColor": "orange",
      "isVerified": true,
      "role": "Former venture · Education CRM",
      "highlights": [
        "Next Tech Waves was a venture I started. Part of my work involved education-focused CRMs, including adding AI and AI agents to CRM systems that the team had already built.",
        "That work extended existing software around the needs of education businesses. Next Tech Waves is now closed."
      ]
    },
    {
      "id": "fuel-tracking",
      "number": "05",
      "company": "Fuel tracking & loyalty CRM",
      "description": "Built vehicle-wise fuel records for buses and trucks, tracking refuelling visits and quantities and supporting loyalty points.",
      "role": "Custom business software",
      "highlights": [
        "A petroleum business needed to track how often buses and trucks returned for fuel and how much each vehicle purchased. I built a CRM around the vehicle number, with records for refuelling visits and quantities, alongside loyalty-point tracking.",
        "The system supported a straightforward view of repeat activity: which vehicle returned, how often it refuelled and how much fuel it took. Those records also supported the business's loyalty programme."
      ],
      "accentColor": "orange",
      "isVerified": false
    },
    {
      "id": "indiganic-foods",
      "number": "06",
      "company": "Indiganic Foods",
      "description": "Built WhatsApp automation for a ghee brand to answer customer enquiries and explain its products.",
      "accentColor": "orange",
      "isVerified": true,
      "role": "WhatsApp AI automation",
      "highlights": [
        "Indiganic Foods is a food brand selling ghee, primarily through offline business. It needed WhatsApp automation that could respond to customer enquiries and explain its offerings.",
        "I built AI-based WhatsApp automation for that use case. The focus was answering questions about the brand's products through a channel customers could use directly."
      ]
    }
  ],
  "achievements": [
    {
      "id": "capt-bhopal",
      "title": "VAPT training for law enforcement at CAPT Bhopal",
      "category": "Training & speaking",
      "organizationOrContext": "CAPT Bhopal",
      "year": "June 2025",
      "description": "I delivered a guest lecture at CAPT Bhopal for Indian law enforcement officers. The session covered how vulnerability assessment and penetration testing works, how attackers can steal data, and how systems and information can be protected.",
      "impact": "The opportunity came through LinkedIn. It gave me a chance to explain security work to people whose responsibilities include dealing with cyber threats and protecting information.",
      "imageUrl": "/Images/Bhopal ips.jpg",
      "audience": "Indian law enforcement officers",
      "keyTopics": [
        "VAPT methods",
        "Data theft techniques",
        "System and information protection"
      ],
      "isVerified": true
    }
  ],
  "services": [
    {
      "id": "ai-agents",
      "title": "AI agents & automation",
      "description": "Agents and workflows for lead follow-ups, customer enquiries and repeat business tasks. I also add AI capabilities to software a team already uses.",
      "icon": "agent",
      "href": "#contact",
      "ctaText": "Discuss a project"
    },
    {
      "id": "crm",
      "title": "Custom CRM development",
      "description": "CRMs built around how a business works: customer requirements, follow-up conversations, vehicle records or education workflows.",
      "icon": "crm",
      "href": "#contact",
      "ctaText": "Discuss a project"
    },
    {
      "id": "whatsapp",
      "title": "WhatsApp enquiry automation",
      "description": "AI-assisted replies and product information on WhatsApp, built around the questions customers actually ask.",
      "icon": "automation",
      "href": "#contact",
      "ctaText": "Discuss a project"
    },
    {
      "id": "security",
      "title": "VAPT & application security",
      "description": "Security assessments for web applications, APIs and networks, with source-code reviews, clear findings and remediation verification.",
      "icon": "security",
      "href": "#contact",
      "ctaText": "Discuss a project"
    },
    {
      "id": "malware",
      "title": "Malware analysis & endpoint security",
      "description": "Investigating suspicious activity on company computers and supporting threat protection, informed by my ongoing client security work.",
      "icon": "security",
      "href": "#contact",
      "ctaText": "Discuss a project"
    },
    {
      "id": "web",
      "title": "Web development & AI integration",
      "description": "Web applications and AI integrations shaped by my background in UI design, freelance development and product management.",
      "icon": "web",
      "href": "#contact",
      "ctaText": "Discuss a project"
    }
  ],
  "currentInitiatives": [
    {
      "id": "coredhristi",
      "title": "CoreDhristi",
      "statusTag": "AI agent marketplace",
      "logoUrl": "/Images/Coredhristi.png",
      "summary": "I'm building CoreDhristi so businesses can discover and evaluate AI agents, automations and MCP servers, and developers can distribute their work. My focus includes security review, product architecture and the information a buyer needs before adopting an AI system.",
      "points": [
        "AI agents, automations and MCP servers",
        "Security evaluation and permission transparency",
        "Tools for developers to distribute their work"
      ],
      "href": "https://coredhristi.com/",
      "linkText": "Explore CoreDhristi",
      "domainStatus": "live_verified"
    },

    {
      "id": "cored",
      "title": "CoreD",
      "statusTag": "AI & IT solutions",
      "logoUrl": "/Images/CoreD.png",
      "summary": "CoreD is part of CoreDhristi. It provides AI and IT solutions for businesses, with a focus on cloud, AI and cybersecurity. It is where I work on solutions shaped around a company’s systems and day-to-day needs.",
      "points": [
        "Cloud and IT solutions",
        "AI agents and business automation",
        "Cybersecurity support"
      ],
      "href": "#contact",
      "linkText": "Discuss a CoreD project",
      "domainStatus": "pending_domain"
    }
  ],

  "testimonials": [
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




  "socialLinks": [
    {
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/in/krishanu-kaundilya/",
      "label": "Krishanu Kaundilya on LinkedIn"
    },
    {
      "platform": "CoreDhristi",
      "url": "https://coredhristi.com/",
      "label": "Official CoreDhristi Platform"
    },
    {
      "platform": "GitHub",
      "url": "https://github.com/krishanumishra778",
      "label": "GitHub Profile",
    },
    {
      "platform": "Gmail",
      "url": "mailto:krishanumishra778@gmail.com",
      "label": "Official Gmail"
    }
  ],
  "footer": {
    "headline": "Have a workflow or security problem in mind?",
    "subheadline": "Tell me what your team needs. We can start with the problem and work out what is worth building.",
    "ctaButton": {
      "label": "Connect on LinkedIn",
      "href": "https://www.linkedin.com/in/krishanu-kaundilya/"
    },
    "copyrightNotice": "© 2026 Krishanu Kaundilya. All rights reserved."
  }
};

export const sectionCopy = {
  "heroLinkedInHeadline": "Founder @ CoreDhristi  @coreD | AI Agent & Automation Developer | Building Trust Infrastructure for the AI Agent Economy | AI Agents • Automation • Security",
  "founderParts": ["FOUN", "DER"],
  "story": { "title": "My story", "closeLabel": "Close my story", "close": "Close" },
  "credentials": {
    "educationBadge": "Education",
    "educationTitle": "Academic Background & Specializations",
    "educationHint": "Open any record to inspect its full details and credentials.",
    "viewDetails": "View Credential Details",
    "certificationBadge": "Certifications",
    "certificationTitle": "Industry Certifications",
    "browseHint": "Use arrows to browse",
    "of": "of",
    "previous": "Previous certification",
    "next": "Next certification",
    "issuer": "Issuing authority",
    "reference": "Certificate ID",
    "viewCertificate": "View Certificate"
  },
  "careerIntro": "Design was my starting point. Security consulting and product building shaped what came next.",
  "careerToolsLabel": "Tools used",
  "careerSummaries": {
    "Technomize": "Designed interfaces during college, then moved into freelance design and web development.",
    "CyberSapiens": "Worked on penetration testing and vulnerability assessment while preparing for CEH.",
    "DTSS Consultants": "Assessed web applications, APIs and networks. Reviewed source code, reported findings and verified fixes.",
    "CoreDhristi": "Building an AI marketplace, working on product architecture, security evaluation and developer distribution."
  },
  "careerFocus": {
    "Technomize": ["UI Design", "Web Design"],
    "CyberSapiens": ["VAPT", "Ethical Hacking"],
    "DTSS Consultants": ["Web & API Security", "Source-code Review"],
    "CoreDhristi": ["AI Agents", "Automation", "MCP Servers"]
  },
  "projectDetails": "Read the project",
  "founderWord": "FOUNDER",
  "companies": [
    "CoreDhristi",
    "CoreD"
  ],
  "location": "Indore, India",
  "heroCompact": "AI agents. Business automation. Cybersecurity.",
  "founderPortrait": {
    "src": "/Images/founder.png",
    "alt": "Krishanu Kaundilya, founder of CoreDhristi and CoreD"
  },
  "aboutSubheading": "From UI design to security and AI",
  "professionalFocus": "VAPT · Malware analysis · AI agents & automation",
  "projects": {
    "badge": "Selected work",
    "title": "Projects built around real business needs",
    "subtitle": "Some teams needed better follow-ups. Others needed clearer records or security support. Here is what I worked on."
  },
  "careerHeading": "My career so far",
  "career": [
    {
      "company": "CoreDhristi",
      "role": "Founder",
      "period": "January 2026–present",
      "description": "Building an AI marketplace. My work spans product strategy, architecture, security review and the information buyers need before adopting an AI system."
    },
    {
      "company": "DTSS Consultants",
      "role": "Information Security Consultant",
      "period": "May 2024–March 2026 · Dubai-based firm · Remote",
      "description": "VAPT for web applications, APIs and networks, source-code assessments, security reports and remediation verification. Tools included Burp Suite, Nuclei, Semgrep and CodeQL."
    },
    {
      "company": "CyberSapiens",
      "role": "Cyber Security Specialist Intern",
      "period": "March–May 2024",
      "description": "Worked with senior security analysts on penetration testing and vulnerability assessment while preparing for CEH."
    },
    {
      "company": "Technomize",
      "role": "UI Designer Intern",
      "period": "December 2022–May 2023",
      "description": "My first professional role, alongside college. Interface design was my starting point before freelance design and web development."
    }
  ],
  "achievement": {
    "heading": "Delivered a guest lecture on VAPT to law enforcement officers at CAPT Bhopal",
    "photoCaption": "VAPT guest lecture · CAPT Bhopal, M.P.",
    "badge": "Training & speaking",
    "subtitle": "A guest lecture on vulnerability testing, data theft and practical protection.",
    "open": "Open the achievement book",
    "topics": "What the session covered",
    "sourceLabel": "View the original CAPT Bhopal post",
    "source": "https://www.linkedin.com/posts/krishanu-kaundilya_delivered-a-guest-lecture-on-vapt-to-the-ugcPost-7377104471186620416-GaLF/"
  },
  "services": {
    "badge": "What I can help with",
    "title": "AI, software and security work",
    "subtitle": "Practical development and security support, shaped around the work your team needs to get done."
  },
  "initiatives": {
    "badge": "Current initiatives",
    "title": "What I’m building now",
    "subtitle": "CoreDhristi is the marketplace. CoreD is its AI and IT solutions arm."
  },
  "footerBio": "Founder of CoreDhristi and CoreD. AI agent and automation developer with a background in information security consulting. Based in Indore, India.",
  "educationHeading": "Education & credentials",
  "educationIntro": "The programmes and practical training behind my work.",
  "labels": {
    "about": "About me",
    "skills": "What I work on",
    "readMore": "Read my story",
    "readLess": "Show less",
    "focus": "Professional focus",
    "founder": "Founder & entrepreneur",
    "navigation": "Navigation",
    "connect": "Platforms & connect",
    "contact": "Contact",
    "backTop": "Back to top"
  },
  "book": {
    "project": "Project story",
    "achievement": "Achievement record",
    "education": "Academic credential",
    "certificate": "Professional certification",
    "record": "Supporting record",
    "details": "Record details",
    "footer": "Learning · Achievement · Growth",
    "reference": "Reference",
    "period": "Period",
    "grade": "Grade",
    "overview": "Overview",
    "skills": "Topics & skills",
    "close": "Close book",
    "closeLabel": "Close book details",
    "review": "Review the details and supporting record."
  },
  "metadata": {
    "title": "Krishanu Kaundilya | AI, Automation & Cybersecurity",
    "description": "Meet Krishanu Kaundilya, founder of CoreDhristi and CoreD. Explore his AI agents, custom CRM development, WhatsApp automation and cybersecurity work."
  }
} as const;

export const careerToolAssets = [
  { name: "Burp Suite", src: "/Images/tools/burp-suite.png", wordmark: false, source: "https://portswigger.net/content/images/logos/apple-touch-icon.png" },
  { name: "Nuclei", src: "/Images/tools/nuclei.png", wordmark: true, source: "https://raw.githubusercontent.com/projectdiscovery/nuclei/dev/static/nuclei-logo.png" },
  { name: "Semgrep", src: "/Images/tools/semgrep.png", wordmark: true, source: "https://raw.githubusercontent.com/semgrep/semgrep/develop/semgrep.svg" },
  { name: "CodeQL", src: "/Images/tools/codeql.png", wordmark: false, source: "https://codeql.github.com/assets/img/favicons/favicon.png" },
] as const;

export const careerJourney = [...sectionCopy.career].reverse().map((job, index) => ({
  ...job,
  number: String(index + 1).padStart(2, "0"),
  focus: sectionCopy.careerFocus[job.company],
  summary: sectionCopy.careerSummaries[job.company],
  tools: job.company === "DTSS Consultants" ? careerToolAssets : [],
}));

// Identity data stays with the visible copy; add the canonical URL after a domain is chosen.
export const profileStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: portfolioData.hero.name,
  mainEntity: {
    "@type": "Person",
    name: portfolioData.hero.name,
    description: sectionCopy.footerBio,
    jobTitle: [portfolioData.hero.role, "Cybersecurity Specialist", "Founder"],
    sameAs: portfolioData.socialLinks.filter(link => link.platform === "LinkedIn").map(link => link.url),
    worksFor: [
      { "@type": "Organization", name: "CoreDhristi", url: "https://coredhristi.com/" },
      { "@type": "Organization", name: "CoreD", parentOrganization: { "@type": "Organization", name: "CoreDhristi" } },
    ],
    alumniOf: { "@type": "EducationalOrganization", name: portfolioData.about.education[1].institution },
  },
};

// Assistant copy and new professional FAQs live beside the visible first-party content.
// Process answers set out questions to scope; they are not booked services or guarantees.
export const assistantCopy = {
  welcome: "Hi, I'm Krishanu's portfolio assistant. Ask about his AI agents, CRM automation, cybersecurity work, career or projects. English and Hinglish are both welcome.",
  noAnswer: "I don't have a confirmed answer to that in Krishanu's portfolio. Try a specific project, service or career question, or ask how to contact him for details.",
  suggestions: ["What services can I hire Krishanu for?", "Which client projects has Krishanu delivered?", "How can I discuss a project with Krishanu?"],
  inputLabel: "Ask a question about Krishanu Kaundilya",
} as const;

function professionalFAQ(
  id: string,
  category: string,
  questions: [string, string, string],
  keywords: string[],
  answer: string,
  source: FAQ["source"] = "portfolio",
): FAQ {
  return { id, category, questions, keywords, answer, source };
}

/** 125 substantive answer topics, each with three authored questions: 375 new Q&A pairs. */
export const professionalFAQs: FAQ[] = [
  // Profile and professional journey: 12 topics.
  professionalFAQ("founder-identity", "profile",
    ["Which companies did Krishanu found?", "Is Krishanu the founder of CoreDhristi and CoreD?", "Krishanu kaun si companies ke founder hain?"],
    ["founder", "entrepreneur", "companies founded"],
    "Krishanu is the founder of CoreDhristi and CoreD. CoreDhristi focuses on an AI marketplace; CoreD is its AI and IT solutions arm, focused on cloud, AI and cybersecurity. He also founded the former Next Tech Waves venture, which is now closed."),
  professionalFAQ("career-story", "profile",
    ["How did Krishanu build his career?", "What is the story behind his career changes?", "Krishanu ki puri journey kya hai?"],
    ["journey", "career story", "professional background"],
    "He started with UI design at Technomize in December 2022 while studying, then took on freelance design and web development. He studied product management at IIM Kozhikode, interned at CyberSapiens in 2024 and joined DTSS Consultants in May 2024. Learning about AI security led him to build agents and automations. He now leads CoreDhristi and CoreD."),
  professionalFAQ("design-start", "profile",
    ["Did Krishanu start his career in design?", "Was UI design his first professional role?", "Krishanu ne UI design se shuru kia tha?"],
    ["design background", "first role", "started in design"],
    "Yes. His first documented role was a UI Designer internship at Technomize, December 2022 to May 2023. He was still in college. Afterward, he delivered UI design, graphic design and web development work through friends and family."),
  professionalFAQ("freelance-origin", "profile",
    ["How did Krishanu start freelancing?", "Where did his first freelance projects come from?", "Freelancing ki shuruaat kaise hui thi?"],
    ["freelancing", "referrals", "first freelance projects"],
    "Freelancing began with design and web development work referred by friends and family. Later projects also came through professional connections and LinkedIn. He learned new development techniques as real client work required them; the portfolio does not assign an invented full-time employer to that period."),
  professionalFAQ("self-directed-learning", "profile",
    ["How did Krishanu learn development?", "Did he learn by working on real projects?", "Krishanu development kaise sikhe?"],
    ["self taught", "learning approach", "real projects"],
    "He combined formal education with independent learning and hands-on client projects. He used online material when he needed to build something new, then applied it to actual design, development and automation work. His cybersecurity learning also included an internship and consultancy experience."),
  professionalFAQ("security-transition", "profile",
    ["Why did Krishanu move into cybersecurity?", "How did ethical hacking become part of his career?", "UI ke baad cybersecurity mein kaise aaye?"],
    ["cybersecurity journey", "ethical hacking interest", "security transition"],
    "He had a strong interest in ethical hacking and began studying VAPT independently. That led to his March-May 2024 CyberSapiens internship while preparing for CEH, followed by the Information Security Consultant role at DTSS Consultants."),
  professionalFAQ("ai-transition", "profile",
    ["How did Krishanu get into AI agents?", "What connected his cybersecurity work with AI development?", "Krishanu AI agents mein kaise aaye?"],
    ["AI journey", "transition to AI", "security to AI"],
    "Studying AI security and risks around AI agents led him to learn how these systems work and build them himself. His delivered examples include AI CRMs, automated follow-ups and WhatsApp enquiry workflows. His current work brings automation development and security experience together."),
  professionalFAQ("experience-timeline", "profile",
    ["When did Krishanu begin working professionally?", "Can you give his experience timeline instead of a rounded number?", "Krishanu ka work experience kab se start hua?"],
    ["years of experience", "experience duration", "professional start"],
    "His documented timeline begins in December 2022 with Technomize. It includes CyberSapiens in March-May 2024, DTSS Consultants in May 2024-March 2026 and the CoreDhristi founder role from January 2026. The dates distinguish design, security and founder experience rather than calling all of it years of VAPT."),
  professionalFAQ("product-perspective", "profile",
    ["How does product management influence his work?", "Does he combine product thinking with development?", "Product management ka experience kaam mein kaise aata hai?"],
    ["product thinking", "product perspective", "product strategy skills"],
    "He completed a product management certificate programme at IIM Kozhikode and leads product strategy at CoreDhristi. That background sits alongside implementation work: understanding a business workflow, deciding what should be built and considering how people will use it."),
  professionalFAQ("current-work", "profile",
    ["What is Krishanu working on now?", "What are his current professional activities?", "Krishanu abhi kis pe kaam kar rahe hain?"],
    ["current work", "currently working", "present role"],
    "His portfolio identifies him as founder of CoreDhristi and CoreD, with work in AI agents, business automation and cybersecurity. He also describes ongoing malware analysis, threat protection and VAPT for Crawl Digitally. DTSS Consultants ended in March 2026 and Next Tech Waves is closed."),
  professionalFAQ("professional-combination", "profile",
    ["What connects Krishanu's different skills?", "How are design security and automation related in his work?", "Design security aur AI ka combination kya hai?"],
    ["combined expertise", "design security automation", "professional strengths"],
    "His design background helps explain interfaces and workflows; development experience turns those workflows into software; security consulting adds experience in assessing vulnerabilities and verifying fixes. The portfolio demonstrates that combination through business-specific CRM and automation projects rather than claiming expertise in every technology."),
  professionalFAQ("individual-or-company", "profile",
    ["Am I hiring Krishanu personally or his company?", "Are his personal consulting and company services the same engagement?", "Project Krishanu khud karenge ya company ke through?"],
    ["individual consultant", "personal engagement", "company engagement"],
    "This is Krishanu's personal portfolio. CoreD is the AI and IT solutions arm of CoreDhristi, but the contracting party, contributors and responsibilities for a new project need to be agreed directly. A founder title alone does not establish who will perform every part of an engagement.", "engagement-scope"),

  // Career history: 12 topics.
  professionalFAQ("dtss-tenure", "career",
    ["When did Krishanu work at DTSS Consultants?", "What were the start and end dates of the DTSS role?", "DTSS mein kab se kab tak job ki thi?"],
    ["DTSS", "DTSS dates", "DTSS tenure"],
    "He worked at DTSS Consultants as an Information Security Consultant from May 2024 to March 2026. The firm is Dubai-based and his work was remote."),
  professionalFAQ("dtss-not-current", "career",
    ["Is Krishanu still employed by DTSS?", "Does he currently work for DTSS Consultants?", "Kya Krishanu abhi bhi DTSS mein hain?"],
    ["still at DTSS", "current DTSS employment", "DTSS ended"],
    "No current DTSS employment is listed in the verified timeline. His DTSS Consultants role ended in March 2026. His present portfolio focus is CoreDhristi, CoreD and his automation and cybersecurity work."),
  professionalFAQ("dtss-remote", "career",
    ["Did Krishanu relocate to Dubai for DTSS?", "Was the Dubai consultancy role remote?", "DTSS ke liye Dubai gaye the ya remote tha?"],
    ["Dubai remote", "DTSS remote", "Dubai relocation"],
    "The DTSS role was remote for a Dubai-based firm. That does not establish a Dubai residence or an on-site relocation. Krishanu's portfolio location is Indore, India."),
  professionalFAQ("dtss-assessment-scope", "career",
    ["What systems did he test while at DTSS?", "Which assessment surfaces were part of his DTSS work?", "DTSS mein kis type ki testing karte the?"],
    ["DTSS testing scope", "DTSS assessments", "consultancy testing"],
    "His documented DTSS work included web application, API and network vulnerability assessment and penetration testing. It also covered static and dynamic assessment work, technical reporting and verification of remediated findings."),
  professionalFAQ("dtss-custom-rules", "career",
    ["Did he create custom scanner rules at DTSS?", "What was his Nuclei template and DAST rule work?", "Custom Nuclei templates aur DAST rules banaye hain?"],
    ["custom scanner rules", "DAST rules", "custom Nuclei work"],
    "Yes. His DTSS role description includes developing custom Nuclei templates and DAST rules as part of assessment work. A specific rule set, coverage area or sample should be discussed directly without exposing private client findings."),
  professionalFAQ("dtss-source-review", "career",
    ["Which source code tools did he use at DTSS?", "Did his consultancy work include Semgrep and CodeQL?", "DTSS mein source code review kis tool se hota tha?"],
    ["DTSS source review", "Semgrep experience", "CodeQL experience"],
    "His DTSS work includes source code assessment using Semgrep and CodeQL. These sit alongside web/API/network VAPT rather than replacing testing of a running application."),
  professionalFAQ("dtss-reporting", "career",
    ["What kind of security reports did he prepare at DTSS?", "Did he write reports for technical and executive audiences?", "DTSS mein reporting kis format mein karte the?"],
    ["DTSS reporting", "executive reports", "technical security reports"],
    "He prepared technical and executive security reports, including CVSS v3.1 severity ratings and remediation guidance. His role also included checking whether fixes addressed reported findings."),
  professionalFAQ("iso-gap-experience", "career",
    ["Has Krishanu worked on ISO 27001 gap assessments?", "Does he have information security gap assessment experience?", "ISO 27001 gap assessment ka experience hai?"],
    ["ISO 27001", "ISO IEC 27001", "gap assessment"],
    "His DTSS role includes support for ISO/IEC 27001 gap assessments. That is assessment experience; it does not establish that he is an accredited certification body or that hiring him guarantees an ISO certificate."),
  professionalFAQ("cybersapiens-tenure", "career",
    ["When was his CyberSapiens internship?", "What was Krishanu's role at CyberSapiens?", "CyberSapiens internship kab aur kis role mein thi?"],
    ["CyberSapiens", "CyberSapiens internship", "security internship"],
    "He was a Cyber Security Specialist intern at CyberSapiens from March to May 2024, remotely. He worked with senior security analysts on VAPT while preparing for CEH."),
  professionalFAQ("technomize-tenure", "career",
    ["When was the Technomize internship?", "What did Krishanu do at Technomize?", "Technomize internship kab hui thi?"],
    ["Technomize", "UI internship", "Technomize dates"],
    "Krishanu's Technomize role was a six-month UI Designer internship, December 2022-May 2023, in Indore. He began it while studying for his BCA."),
  professionalFAQ("founder-start-date", "career",
    ["When did Krishanu become founder of CoreDhristi?", "Does his founder role start date mean the company incorporation date?", "CoreDhristi founder role kab se hai?"],
    ["founder start date", "CoreDhristi January 2026", "incorporation date"],
    "His founder role begins in January 2026. The user-provided company record states CoreDhristi LLP was incorporated in October 2026. These are different events: working on a venture can begin before legal incorporation."),
  professionalFAQ("career-overlap", "career",
    ["Did his founder work overlap with DTSS?", "Could he work on client projects alongside remote employment?", "DTSS aur founder work ka overlap tha?"],
    ["career overlap", "parallel client projects", "side projects"],
    "The recorded dates overlap: the CoreDhristi founder role starts January 2026 and DTSS ends March 2026. Krishanu also described taking referred client projects alongside remote work. The portfolio does not invent separate full-time employment tenures for those projects."),

  // Education and credential accuracy: 9 topics.
  professionalFAQ("bca-institution", "education",
    ["Where did Krishanu complete his BCA?", "What is his undergraduate degree and college?", "BCA kis college se ki hai?"],
    ["BCA", "bachelor degree", "St Paul", "undergraduate"],
    "He completed a Bachelor of Computer Applications at St. Paul Institute Of Professional Studies. The recorded programme dates are June 2020-May 2023."),
  professionalFAQ("bca-grade", "education",
    ["What grade did he receive in his BCA?", "Does the portfolio list an undergraduate grade?", "BCA mein kya grade tha?"],
    ["BCA grade", "degree grade", "academic grade"],
    "His BCA record lists Grade A. The portfolio does not provide a percentage, CGPA or class rank, so those should not be inferred from that grade."),
  professionalFAQ("iim-period", "education",
    ["What were his IIM programme dates?", "When did the IIM Kozhikode certificate programme run?", "IIM Kozhikode course kab se kab tak tha?"],
    ["IIM dates", "eMDP", "product certificate dates"],
    "The Professional Certificate Programme in Product Management at IIM Kozhikode ran from July 2023 to April 2024 in his recorded education history."),
  professionalFAQ("iim-not-mba", "education",
    ["Does Krishanu have an MBA from IIM?", "Is the IIM product management course an MBA degree?", "Kya IIM se MBA kiya hai?"],
    ["MBA", "IIM degree type", "certificate not MBA"],
    "The documented qualification is a Professional Certificate Programme in Product Management (eMDP) from IIM Kozhikode. It should be described as that certificate programme, not as an MBA or another degree."),
  professionalFAQ("ceh-issued", "credentials",
    ["When did Krishanu earn CEH Practical?", "What are the issue and expiry dates of CEH Practical?", "CEH Practical kab mila aur expiry kya hai?"],
    ["CEH dates", "CEH issued", "CEH Practical expiry"],
    "The recorded CEH Practical entry was issued in January 2025 and lists an expiry in February 2026. The certificate image is available in the portfolio's credentials section; renewal is not confirmed."),
  professionalFAQ("ceh-renewal", "credentials",
    ["Is Krishanu's CEH certification currently valid?", "Has his CEH Practical credential been renewed?", "CEH certification renew hui hai kya?"],
    ["CEH renewal", "current certification", "CEH valid", "CEH expired"],
    "Current validity is not confirmed. The recorded CEH and CEH Practical entries list a February 2026 expiry. Ask Krishanu for renewed issuer evidence if an active credential is required; this assistant will not infer renewal from a badge."),
  professionalFAQ("network-security-course", "credentials",
    ["Has he completed a network security course?", "Which networking course appears in his credentials?", "Network security ka kaun sa course kiya hai?"],
    ["network security course", "network course credential", "Computer Networks Security"],
    "His recorded EC-Council courses include Computer Networks Security from Scratch to Advanced, September 2024. This is a course credential and should not be presented as an unrelated network vendor certification."),
  professionalFAQ("zap-course", "credentials",
    ["What is his OWASP ZAP course credential?", "Did he study penetration testing with OWASP ZAP?", "OWASP ZAP course kiya hai kya?"],
    ["OWASP ZAP", "ZAP course", "penetration testing course"],
    "His recorded credentials include EC-Council's Penetration Testing With OWASP ZAP, September 2024. There is also an August 2024 Burp Suite course entry. These are listed course credentials, separate from CEH validity."),
  professionalFAQ("verify-credentials", "credentials",
    ["How can I verify his education and certificates?", "Where can I view credential evidence?", "Certificates verify kaise kar sakte hain?"],
    ["verify credentials", "certificate evidence", "view credentials"],
    "Use the portfolio's education and certification cards to inspect the available certificate images, and compare them with the issuer record where verification is available. LinkedIn records are at https://www.linkedin.com/in/krishanu-kaundilya/ . For renewal or missing evidence, ask Krishanu directly."),

  // Six distinct project cases, four useful facets each: 24 topics.
  professionalFAQ("tohfa-overview", "projects",
    ["What did Krishanu build for Tohfa Bazzar?", "Can you describe the miniature business CRM project?", "Tohfa Bazzar ke liye kya banaya tha?"],
    ["Tohfa Bazzar", "Thofa Bazzar", "Tohfa Bazaar", "miniature CRM"],
    "For Tohfa Bazzar, a business selling painted 3D miniatures, he built an AI CRM to handle leads and follow-ups. It included automatic messages, a Gmail connection, AI follow-up calling and WhatsApp requirement collection."),
  professionalFAQ("tohfa-problem", "projects",
    ["What problem did Tohfa Bazzar need solved?", "Why did the miniature business need a CRM?", "Tohfa Bazzar ko CRM ki zarurat kyu thi?"],
    ["Tohfa problem", "miniature lead problem", "Tohfa missed followups"],
    "Digital marketing was bringing leads to the miniature business, but replies and follow-ups were delayed. The CRM project addressed that handling gap through automated follow-up and requirement collection. No verified conversion percentage is available."),
  professionalFAQ("tohfa-channels", "projects",
    ["Which channels were connected in the Tohfa CRM?", "Did the miniature CRM include Gmail WhatsApp and calls?", "Tohfa CRM mein Gmail calling aur WhatsApp tha?"],
    ["Tohfa integrations", "Tohfa channels", "Tohfa Gmail", "Tohfa WhatsApp"],
    "The confirmed Tohfa features are Gmail connection, automated follow-up messages, an AI calling agent for follow-up calls and WhatsApp automation that gathers customer requirements. Specific providers, APIs and software versions were not supplied."),
  professionalFAQ("tohfa-requirements", "projects",
    ["How did Tohfa Bazzar collect customer requirements?", "What did WhatsApp do in the miniature CRM?", "Tohfa ke customers ki requirements kaise collect hoti thi?"],
    ["Tohfa requirements", "miniature requirements", "Tohfa requirement collection"],
    "WhatsApp automation was part of the CRM and collected what the customer needed. The documented case does not specify a fixed question script, supported language list or automatic order approval; those details should be confirmed rather than inferred."),
  professionalFAQ("adsmark-overview", "projects",
    ["What was the ADSMARK01 project?", "Did Krishanu build a CRM for a marketing agency?", "ADSMARK01 ke liye kya banaya tha?"],
    ["ADSMARK01", "Adsmark", "marketing agency CRM"],
    "He delivered an AI-agent-based CRM for ADSMARK01, a digital marketing company. It addressed incoming lead handling and missed follow-ups. The project is a client CRM engagement, not employment at the agency."),
  professionalFAQ("adsmark-problem", "projects",
    ["Why did ADSMARK01 need AI CRM workflows?", "What sales problem did the agency CRM address?", "ADSMARK01 mein follow up ka kya issue tha?"],
    ["ADSMARK01 problem", "agency followup problem", "Adsmark lead handling"],
    "ADSMARK01 had difficulty following up with incoming leads consistently. Krishanu built an AI-agent CRM around lead handling and follow-up. The supported business problem is clear; a measured revenue uplift has not been supplied."),
  professionalFAQ("adsmark-integrations", "projects",
    ["Which integrations are confirmed for ADSMARK01?", "Was the agency CRM identical to the Tohfa system?", "ADSMARK01 mein bhi same integrations the kya?"],
    ["ADSMARK01 integrations", "Adsmark channels", "agency CRM integrations"],
    "The confirmed ADSMARK01 scope is an AI-agent-based CRM for lead handling and follow-ups. Its exact channel list was not supplied, so the assistant does not copy Gmail, calling or WhatsApp features from the separate Tohfa case."),
  professionalFAQ("agency-project-reference", "projects",
    ["Which past project is relevant to a digital marketing agency?", "Can you point an agency to a comparable CRM case?", "Marketing agency ke liye kaun sa case relevant hai?"],
    ["agency case study", "marketing agency example", "agency project reference"],
    "ADSMARK01 is the closest confirmed agency example: an AI-agent CRM for lead handling and follow-ups. Share your own lead channels and sales process to discuss a comparable scope; another agency's integration needs may differ."),
  professionalFAQ("indiganic-overview", "projects",
    ["What did Krishanu deliver for Indiganic Foods?", "What is the food brand WhatsApp project?", "Indiganic Foods ke liye kya kaam kiya?"],
    ["Indiganic Foods", "Indiganic", "food brand project"],
    "He built AI-based WhatsApp automation for Indiganic Foods, a ghee brand selling primarily offline. The workflow answered customer enquiries and explained its offerings. This case is WhatsApp automation, not a confirmed full CRM build."),
  professionalFAQ("indiganic-offline", "projects",
    ["Can an offline food business benefit from his automation experience?", "Did Indiganic Foods primarily sell offline?", "Offline food business ke liye automation ka example hai?"],
    ["offline business example", "Indiganic offline", "ghee brand"],
    "Yes. The Indiganic Foods example came from a brand primarily selling offline that needed WhatsApp responses to customer questions. It demonstrates enquiry handling for an offline business without implying a complete ecommerce or delivery system."),
  professionalFAQ("indiganic-capabilities", "projects",
    ["What questions did the Indiganic workflow handle?", "Did the food brand assistant explain products?", "Indiganic WhatsApp bot kya explain karta tha?"],
    ["Indiganic enquiries", "Indiganic products", "food enquiry workflow"],
    "The supplied scope was to respond to incoming customer enquiries and explain the brand's offerings. There is no confirmed payment, order fulfilment or stock integration in this case. A new project can define those requirements separately."),
  professionalFAQ("indiganic-not-crm", "projects",
    ["Was the Indiganic project a full CRM?", "Should the food brand case be called CRM development?", "Indiganic project CRM tha ya WhatsApp automation?"],
    ["Indiganic CRM", "food project type", "Indiganic scope"],
    "The confirmed delivery is AI-based WhatsApp automation for enquiries and product information. It should not be expanded into a full CRM claim without additional evidence."),
  professionalFAQ("fuel-crm-overview", "projects",
    ["What did the petroleum client CRM do?", "Has Krishanu built a fuel business CRM?", "Petroleum client ke liye CRM mein kya banaya?"],
    ["petroleum CRM", "fuel CRM", "petrol CRM", "petroleum client"],
    "He built a vehicle-based CRM for a petroleum business. It records bus and truck vehicle numbers, refuelling frequency and fuel quantities, and supports loyalty-point tracking. The official client name has not been confirmed, so the case remains anonymous."),
  professionalFAQ("fuel-vehicle-tracking", "projects",
    ["How did the fuel CRM identify repeat customers?", "Did it track refuelling by bus and truck number?", "Bus aur truck number se fuel tracking hoti thi?"],
    ["bus tracking", "truck tracking", "vehicle refuelling", "vehicle numbers"],
    "The CRM used vehicle numbers to record refuelling for buses and trucks. The business could track how often a vehicle refuelled and the quantity recorded. GPS tracking and automatic number-plate recognition were not part of the supplied case."),
  professionalFAQ("fuel-loyalty", "projects",
    ["Was loyalty tracking part of the petroleum CRM?", "What was the fuel loyalty points use case?", "Petroleum CRM mein loyalty points kaise the?"],
    ["loyalty points", "fuel loyalty", "refuelling rewards"],
    "Loyalty-point tracking was included alongside vehicle numbers, refuelling counts and fuel quantities. The client used these records to support repeat-vehicle rewards. No specific earning formula or redemption policy has been supplied."),
  professionalFAQ("fuel-not-ai", "projects",
    ["Was the petroleum CRM powered by AI?", "Does every CRM project in the portfolio use AI?", "Fuel CRM bhi AI based tha kya?"],
    ["fuel AI", "petroleum AI", "non AI CRM"],
    "AI was not confirmed for the petroleum CRM. The documented delivery is a custom record-keeping and loyalty workflow. Some other projects use AI agents, but that does not make every CRM an AI project."),
  professionalFAQ("crawl-overview", "projects",
    ["What does Krishanu do for Crawl Digitally?", "Is Crawl Digitally a security client?", "Crawl Digitally mein kya kaam karte hain?"],
    ["Crawl Digitally", "Crawl", "Crawl security"],
    "He handles ongoing cybersecurity for Crawl Digitally, including malware analysis, protection of company and team computers, and VAPT. This is a security engagement, not an AI CRM project."),
  professionalFAQ("crawl-malware", "projects",
    ["Does he analyse malware for Crawl Digitally?", "What computer protection work is described for Crawl?", "Crawl Digitally ke computers ka malware analysis karte hain?"],
    ["Crawl malware", "Crawl computer protection", "Crawl threat protection"],
    "Yes. His supplied account specifically includes malware analysis and threat protection for the company and its team's computers. The portfolio does not publish private incident details, endpoint logs or an unsupported incident count."),
  professionalFAQ("crawl-vapt", "projects",
    ["Is VAPT included in the Crawl Digitally engagement?", "Does the Crawl work go beyond malware analysis?", "Crawl Digitally mein VAPT bhi karte hain kya?"],
    ["Crawl VAPT", "Crawl assessment", "Crawl penetration testing"],
    "Yes. VAPT is included alongside malware analysis and computer threat protection. A target list or full assessment report is not public, so the assistant does not reveal client systems or invent vulnerability findings."),
  professionalFAQ("crawl-not-crm", "projects",
    ["Did he build an AI CRM for Crawl Digitally?", "Should Crawl be listed as an automation client?", "Crawl Digitally ka project CRM tha kya?"],
    ["Crawl CRM", "Crawl automation project", "Crawl engagement type"],
    "The confirmed Crawl Digitally engagement is cybersecurity: malware analysis, threat protection and VAPT. There is no confirmed AI CRM delivery for that company in the supplied project record."),
  professionalFAQ("nextwaves-founder", "projects",
    ["What was Krishanu's role in Next Tech Waves?", "Did he found the education CRM venture?", "Next Tech Waves Krishanu ne start kia tha?"],
    ["Next Tech Waves", "NextTechWaves", "Nextwaves founder"],
    "He started Next Tech Waves and worked on adding AI and AI agents to education CRM systems built by the team. It is a former venture and is now closed."),
  professionalFAQ("nextwaves-closed", "projects",
    ["Is Next Tech Waves still operating?", "Is the education venture currently active?", "Next Tech Waves abhi bhi chal raha hai?"],
    ["Next Tech Waves closed", "Nextwaves status", "Nextwaves active"],
    "Krishanu has confirmed that Next Tech Waves is closed. A site that remains accessible does not establish that the venture is operating. His current initiatives are CoreDhristi and CoreD."),
  professionalFAQ("nextwaves-contribution", "projects",
    ["Did Krishanu build every part of the education CRMs?", "What was his individual contribution at Next Tech Waves?", "Education CRM pura khud banaya tha ya AI add kia?"],
    ["Nextwaves contribution", "education CRM contribution", "education AI integration"],
    "His described contribution was adding AI and AI agents to existing education CRMs built by the team. The portfolio should distinguish that AI integration work from sole authorship of the complete CRM."),
  professionalFAQ("education-crm-use-case", "projects",
    ["Does he have experience with education CRM needs?", "Which project shows AI integration for education businesses?", "Education business CRM ka experience hai kya?"],
    ["education CRM", "education business automation", "education project"],
    "Next Tech Waves is his confirmed education CRM example. He extended team-built CRM systems with AI and AI agents for education requirements. Specific admission, payment or attendance modules have not been confirmed and should be scoped separately."),

  // Buyer-facing service scope: 16 topics.
  professionalFAQ("services-overview", "services",
    ["What services can I hire Krishanu for?", "Which professional services does Krishanu offer?", "Krishanu se kaun kaun sa kaam karwa sakte hain?"],
    ["services", "hire", "offerings", "what can you build"],
    "His documented work covers AI agents, custom CRM development, business automation, WhatsApp enquiry workflows and cybersecurity. Security experience includes web/API/network VAPT, SAST/DAST, malware analysis and remediation verification. Tell him the workflow or system you need help with to agree a relevant scope."),
  professionalFAQ("custom-crm-service", "services",
    ["Can Krishanu develop a custom CRM?", "Can he build a CRM around my business process?", "Mere business ke liye custom CRM bana sakte hain?"],
    ["CRM", "custom CRM", "CRM development"],
    "Yes, custom CRM work is demonstrated by his lead-handling and fuel-loyalty projects. Start with the records you need, who uses them and what should happen next. A new system's modules, integrations and delivery plan need to be agreed for your business."),
  professionalFAQ("existing-crm-integration", "services",
    ["Can he add AI to an existing CRM?", "Do I need to replace my CRM to work with him?", "Existing CRM mein AI agents add kar sakte hain?"],
    ["existing CRM", "AI CRM integration", "CRM extension"],
    "Adding AI to an existing CRM is part of his education CRM experience. Whether your system can be extended depends on its interfaces, permissions and workflow. Share the current product and the task you want automated before deciding to rebuild it."),
  professionalFAQ("agency-crm-service", "services",
    ["Can he help my marketing agency handle leads?", "Is an agency follow-up CRM relevant to his experience?", "Meri marketing agency ke leads automate kar sakte hain?"],
    ["agency CRM", "marketing agency automation", "agency leads"],
    "ADSMARK01 is a relevant example of his AI-agent CRM work for a digital marketing company. For your agency, describe where leads arrive, who follows up and when a lead should move to a person. The exact channels and rules need their own scope."),
  professionalFAQ("miniature-service-reference", "services",
    ["Can he build workflows for a custom product business?", "Does he have experience collecting custom order requirements?", "Custom product business ki requirements automate ho sakti hain?"],
    ["custom product workflow", "miniature business automation", "custom order enquiries"],
    "The Tohfa Bazzar case is relevant: a 3D miniature business needed timely follow-ups and customer requirements. His CRM combined messaging, Gmail, calling and WhatsApp requirement collection. New custom-product workflows should define what information must be collected before a person confirms the order."),
  professionalFAQ("fuel-service-reference", "services",
    ["Can he build a vehicle-based business CRM?", "Is fleet refuelling tracking relevant to his experience?", "Fleet refuelling ke liye CRM bana sakte hain?"],
    ["fleet CRM", "vehicle CRM", "fuel business software"],
    "His petroleum client project recorded bus and truck refuelling by vehicle number, quantity and frequency, with loyalty points. It is relevant to a similar requirement. Fleet GPS, accounting and hardware integration would be additional scope, not assumed features."),
  professionalFAQ("food-service-reference", "services",
    ["Can he automate questions for a food business?", "Is product enquiry automation suitable for an offline brand?", "Food brand ke customer questions automate kar sakte hain?"],
    ["food automation", "offline brand WhatsApp", "product enquiries"],
    "Indiganic Foods is a confirmed example of AI WhatsApp replies for customer enquiries and product information. A new food-brand workflow should use approved product information and define when a question needs a human response. No sales uplift is promised from the example."),
  professionalFAQ("education-service-scope", "services",
    ["Can he discuss an AI integration for my education CRM?", "Would education workflow automation fit his past work?", "Mere education CRM mein AI add karna hai kya karenge?"],
    ["education CRM service", "education AI scope", "school CRM integration"],
    "His Next Tech Waves work is relevant to adding AI and agents to education CRMs. Share the existing system and the precise workflow. Admissions, student data, messaging and permissions should be discussed explicitly rather than assumed from the earlier project."),
  professionalFAQ("multichannel-followups", "services",
    ["Can follow-ups span email WhatsApp and calls?", "Does his experience include multiple follow-up channels?", "Email WhatsApp aur calls ek workflow mein aa sakte hain?"],
    ["multichannel followup", "email WhatsApp calls", "multiple channels"],
    "The Tohfa CRM included Gmail, automatic messages, AI calling and WhatsApp requirement collection. For a new business, channel availability, account access and provider support must be checked. The previous project is evidence of that workflow type, not universal integration support."),
  professionalFAQ("ai-calling", "services",
    ["Has Krishanu built an AI calling workflow?", "Can I ask about automated follow-up calls?", "AI calling agent ka kaam kiya hai kya?"],
    ["AI calling", "calling agent", "automated calls", "followup calls"],
    "Yes. His Tohfa Bazzar CRM included an AI calling agent for follow-up calls. Supported languages, calling providers, consent requirements and call-handling rules for a new project need to be agreed; the portfolio does not publish a universal calling package."),
  professionalFAQ("gmail-workflows", "services",
    ["Can he connect Gmail to a CRM workflow?", "Has he worked on Gmail-connected automation?", "Gmail ko CRM se connect kar sakte hain?"],
    ["Gmail", "Gmail integration", "email integration"],
    "A Gmail connection is confirmed in the Tohfa Bazzar CRM. Share the messages and CRM actions you need to connect so he can assess the integration. Access should use an agreed secure connection; do not paste mailbox passwords into this public assistant."),
  professionalFAQ("whatsapp-service", "services",
    ["Can Krishanu build WhatsApp automation?", "Does he develop AI enquiry assistants on WhatsApp?", "WhatsApp automation bana sakte hain kya?"],
    ["WhatsApp", "WhatsApp automation", "WhatsApp chatbot"],
    "Yes. His projects include an AI WhatsApp enquiry workflow for Indiganic Foods and WhatsApp requirement collection within Tohfa Bazzar's CRM. Tell him the questions customers ask and your current WhatsApp setup. Provider compatibility and any usage charges need a separate check."),
  professionalFAQ("lead-requirement-service", "services",
    ["Can an assistant collect customer requirements before handoff?", "Can he help structure incoming lead information?", "Customer requirements collect karke team ko de sakta hai?"],
    ["requirement collection", "lead information", "customer requirements"],
    "Requirement collection is part of the Tohfa WhatsApp workflow. For a new engagement, list the information a person needs before taking over and the questions that should trigger human review. This defines the automation more clearly than asking for a generic chatbot."),
  professionalFAQ("automation-first-step", "services",
    ["Which manual process should I automate first?", "What should I send to discuss business automation?", "Business automation start karne ke liye kya bheju?"],
    ["automation first step", "manual process", "automation brief"],
    "Send one repeated task, a sample input, the expected output, the software involved and where the process currently gets stuck. Lead follow-ups, enquiry replies and record updates are relevant examples from his work. Those details make it possible to discuss a bounded first workflow.", "engagement-scope"),
  professionalFAQ("crm-versus-chatbot", "services",
    ["Should I ask for a CRM or a chatbot?", "How are his CRM projects different from enquiry assistants?", "CRM chahiye ya chatbot dono mein kya difference hai?"],
    ["CRM versus chatbot", "CRM or chatbot", "chatbot difference"],
    "Use a CRM brief when the main need is managing records and follow-up stages. Use an enquiry-assistant brief when the main task is responding to questions or collecting information. His portfolio has both, and a project can connect them if the integration is agreed.", "engagement-scope"),
  professionalFAQ("automation-human-boundaries", "services",
    ["Can the automation replace every decision by my team?", "Should an AI workflow handle exceptions without a person?", "AI automation sab decisions khud le lega kya?"],
    ["human handoff", "automation boundaries", "human review"],
    "A project should define which actions can run automatically and which need a person. Replies about uncertain product details, unusual customer requests or sensitive changes need an agreed fallback. The portfolio does not promise fully autonomous handling of every business decision.", "engagement-scope"),

  // Security scope and delivery: 14 topics.
  professionalFAQ("vapt-service", "security",
    ["Can I hire Krishanu for VAPT?", "What security testing experience supports a new assessment?", "VAPT karwana hai Krishanu kar sakte hain?"],
    ["VAPT", "penetration testing", "vulnerability assessment"],
    "His DTSS work includes web application, API and network VAPT, and his Crawl Digitally engagement also includes VAPT. For a new assessment, share the authorized targets, environment, access level and reporting needs so the scope can be confirmed."),
  professionalFAQ("web-assessment-scope", "security",
    ["What should I share for a web application assessment?", "Can he assess an authenticated business web app?", "Web application testing ke liye kya details chahiye?"],
    ["web application assessment", "website security", "web pentest"],
    "Web assessment is part of his documented experience. For scoping, share the authorized domains, application purpose, environment, user roles and available test accounts. Agree boundaries before testing; the public assistant does not initiate a scan or collect credentials.", "engagement-scope"),
  professionalFAQ("api-assessment-scope", "security",
    ["What does he need to scope API testing?", "Can I discuss an API security review with him?", "API security review ke liye kya bhejna hoga?"],
    ["API assessment", "API pentest", "API review"],
    "API testing is included in his DTSS experience. Useful scoping material includes authorized endpoints, API documentation, authentication methods, roles and the intended environment. Share non-secret documentation first; arrange any credentials through an agreed secure channel.", "engagement-scope"),
  professionalFAQ("network-assessment-scope", "security",
    ["Can a network assessment be discussed with Krishanu?", "What should a network testing brief contain?", "Network testing ke scope mein kya dena hota hai?"],
    ["network assessment", "network VAPT", "network testing scope"],
    "Network VAPT is in his recorded DTSS scope. A new brief should identify owned or authorized targets, access arrangements, testing boundaries and service constraints. It does not imply authorization to test unrelated infrastructure.", "engagement-scope"),
  professionalFAQ("sast-dast-service", "security",
    ["Does Krishanu work with SAST and DAST?", "Can source assessment and running-app testing be discussed together?", "SAST DAST dono ka experience hai?"],
    ["SAST", "DAST", "static dynamic testing"],
    "Yes. His record includes source code assessment with Semgrep and CodeQL, alongside dynamic assessment work and custom DAST rules. For an engagement, agree whether source access, running-environment testing and remediation verification are included."),
  professionalFAQ("malware-service", "security",
    ["Does he provide malware analysis work?", "Which project shows malware analysis experience?", "Malware analysis ka kaam karte hain?"],
    ["malware", "malware analysis", "computer infection"],
    "Malware analysis is part of his ongoing work for Crawl Digitally. Describe the affected environment and observed symptoms to discuss an appropriate engagement. Do not upload executable samples, passwords or private logs to this public portfolio chat."),
  professionalFAQ("computer-protection", "security",
    ["Has he worked on protecting company computers?", "Does his security experience include team endpoints?", "Office ke computers ki security handle ki hai?"],
    ["threat protection", "endpoint protection", "company computers"],
    "Yes. He describes threat protection and malware analysis for Crawl Digitally's company and team computers. The portfolio does not specify a managed endpoint product, round-the-clock service or response-time commitment; those need a direct scope discussion."),
  professionalFAQ("remediation-verification", "security",
    ["Can fixes be checked after a security assessment?", "Has he verified remediation of vulnerabilities?", "Fix hone ke baad retesting bhi karte hain?"],
    ["retesting", "remediation verification", "verify fixes"],
    "Remediation verification is part of his DTSS experience. Include the findings to recheck, the updated environment and the expected evidence in a new scope. Retesting rounds and timing need to be agreed rather than assumed to be unlimited."),
  professionalFAQ("cvss-reporting", "security",
    ["What severity scoring has he used in reports?", "Does Krishanu have CVSS reporting experience?", "Security report mein severity scoring ka experience hai?"],
    ["CVSS", "CVSS v3.1", "severity scoring"],
    "His recorded consultancy reporting used CVSS v3.1 severity ratings, technical detail and remediation guidance. If your organization requires a different scoring version or template, make it part of the brief rather than assuming it from this past experience."),
  professionalFAQ("security-deliverables", "security",
    ["What should be agreed as security assessment deliverables?", "Can findings evidence and remediation guidance be scoped?", "Security assessment ke deliverables kya honge?"],
    ["security deliverables", "assessment report", "findings report"],
    "His experience supports discussing technical findings, severity ratings, supporting evidence, executive reporting and remediation guidance. Agree the target coverage, report format, exclusions and any retest separately. This chat is not a completed assessment or a security certificate.", "engagement-scope"),
  professionalFAQ("testing-authorization", "security",
    ["Does testing require the system owner's permission?", "Can I ask him to assess a system I do not control?", "VAPT ke liye owner ki permission chahiye kya?"],
    ["testing permission", "authorized testing", "system owner authorization"],
    "Security testing should be scoped with permission from the system owner. Provide only authorized targets and agree the boundaries before work starts. Access to a public URL alone is not permission to test it.", "engagement-scope"),
  professionalFAQ("account-hacking-boundary", "security",
    ["Can Krishanu hack someone else's account?", "Does he offer unauthorized password stealing?", "Kisi aur ka account hack karwa sakte hain?"],
    ["hack account", "steal password", "unauthorized hacking", "hack Instagram"],
    "No unauthorized account access or password theft is offered here. His security work concerns authorized assessment and protection. For an account you own, use the platform's official recovery process; for a business assessment, discuss a legitimate testing scope.", "engagement-scope"),
  professionalFAQ("ai-security-background", "security",
    ["How does his background relate to AI security?", "Can his AI security interests be discussed for an agent project?", "AI security mein unka background kya hai?"],
    ["AI security background", "agent security experience", "AI security journey"],
    "His security studies led him into AI development, and CoreDhristi's product work includes how buyers assess agent permissions, data handling and verification. Discuss the agent, tools and intended actions for a specific review; this is not a claim of certification for every AI security framework."),
  professionalFAQ("mobile-cloud-scope", "security",
    ["Are mobile and cloud security engagements confirmed?", "Can I assume he supports every security platform?", "Mobile ya cloud security ka scope confirm kaise hoga?"],
    ["mobile security scope", "cloud security scope", "supported security platforms"],
    "His strongest documented assessment record is web, API and network testing. CoreD focuses on cloud, AI and cybersecurity, but a particular mobile, cloud-vendor or infrastructure engagement needs direct confirmation. A broad service category is not evidence of every specific implementation."),

  // CoreDhristi and CoreD, without duplicating changing platform terms: 8 topics.
  professionalFAQ("cored-purpose", "companies",
    ["What is CoreD?", "What does the CoreD business focus on?", "CoreD kya karta hai?"],
    ["CoreD", "Core D", "CoreD services"],
    "CoreD is part of CoreDhristi and provides AI and IT solutions, with a focus on cloud, AI and cybersecurity. It is the solutions arm described by Krishanu, distinct from CoreDhristi's marketplace focus."),
  professionalFAQ("company-difference", "companies",
    ["What is the difference between CoreDhristi and CoreD?", "Are the marketplace and solutions arm separate ideas?", "CoreDhristi aur CoreD mein kya difference hai?"],
    ["CoreDhristi versus CoreD", "company difference", "marketplace solutions arm"],
    "CoreDhristi focuses on an AI marketplace connecting software creators and business buyers. CoreD is its AI and IT solutions arm, focused on cloud, AI and cybersecurity. Both are part of Krishanu's current founder story; Next Tech Waves is a separate closed venture."),
  professionalFAQ("cored-no-url", "companies",
    ["Does CoreD have a confirmed separate website?", "Where can I find the official CoreD URL?", "CoreD ki alag website link hai kya?"],
    ["CoreD website", "CoreD URL", "CoreD link"],
    "No separate CoreD website URL has been confirmed in the supplied portfolio record. The confirmed parent-platform link is https://coredhristi.com/ . Ask Krishanu for the appropriate CoreD contact or current URL rather than relying on a similarly named site."),
  professionalFAQ("marketplace-founder-work", "companies",
    ["What does Krishanu do as CoreDhristi's founder?", "Does he work on marketplace strategy and architecture?", "CoreDhristi mein founder ke taur pe kya karte hain?"],
    ["marketplace founder responsibilities", "CoreDhristi architecture", "founder responsibilities"],
    "His role includes product strategy, architecture, marketplace design, verification, licensing and clearer information for buyers about AI systems. The platform focus includes agents, automations and MCP servers. These responsibilities do not establish a private customer count or revenue figure."),
  professionalFAQ("marketplace-buyer-problem", "companies",
    ["What buyer problem motivated CoreDhristi?", "Why does he care about AI agent transparency?", "AI buyers ke liye CoreDhristi kya problem solve karta hai?"],
    ["buyer transparency", "agent trust", "marketplace buyer problem"],
    "The idea is to help a business understand what an agent does, what it can access, how it handles data and what review information is available before adoption. His founder work links marketplace usability with his information security background."),
  professionalFAQ("platform-personal-pricing", "companies",
    ["Does marketplace pricing set Krishanu's freelance rate?", "Are CoreDhristi fees the same as a custom CRM quote?", "Marketplace pricing aur freelance charges same hain kya?"],
    ["marketplace versus consulting price", "platform versus project fees", "personal pricing difference"],
    "No. Marketplace listing prices and platform terms concern software sold on CoreDhristi. A custom development or consulting engagement needs its own scope and quote. This assistant does not turn marketplace fees into Krishanu's hourly rate."),
  professionalFAQ("platform-current-information", "companies",
    ["Where should I verify current marketplace terms?", "Can this portfolio confirm live platform availability?", "CoreDhristi ke latest terms kahan check karu?"],
    ["current marketplace terms", "live platform status", "platform availability"],
    "Check https://coredhristi.com/ for current listings, fees and account terms. This portfolio assistant uses a maintained local knowledgebase; it does not perform live account checks, verify a payout or know which listings are available at the moment.", "platform"),
  professionalFAQ("company-structure", "companies",
    ["Is CoreD part of CoreDhristi?", "Is Next Tech Waves the current solutions arm?", "CoreD ka CoreDhristi se kya relation hai?"],
    ["CoreD relationship", "company structure", "current initiatives"],
    "Krishanu describes CoreD as part of CoreDhristi and its AI/IT solutions arm. Next Tech Waves was his earlier education CRM venture and is closed. It should not be substituted for CoreD in current initiatives."),

  // Speaking and training: 5 topics.
  professionalFAQ("capt-date", "speaking",
    ["When did Krishanu give the CAPT Bhopal session?", "What month and year was the law enforcement training?", "CAPT Bhopal training kab hui thi?"],
    ["CAPT date", "June 2025 training", "Bhopal lecture date"],
    "Krishanu states that the CAPT Bhopal VAPT session took place in June 2025. That is the event month supplied by him, not an inferred date from the LinkedIn post's relative publication time."),
  professionalFAQ("capt-audience", "speaking",
    ["Who attended his CAPT Bhopal training?", "Were specific officer ranks confirmed for the session?", "CAPT training mein kaun si audience thi?"],
    ["CAPT audience", "law enforcement audience", "officer ranks"],
    "The confirmed audience was Indian law enforcement officers. Specific ranks, attendance numbers and an institutional endorsement have not been supplied, so the assistant does not expand the audience to a particular IAS or IPS group."),
  professionalFAQ("capt-content", "speaking",
    ["What did he teach at CAPT Bhopal?", "Which subjects did the VAPT guest session cover?", "CAPT Bhopal session mein kya sikhaya tha?"],
    ["CAPT", "CAPT Bhopal", "law enforcement training", "Bhopal lecture"],
    "The June 2025 guest session covered how vulnerability assessment and penetration testing works, how attackers steal data and how systems and information can be protected. It is a speaking and training milestone, not a law enforcement employment role."),
  professionalFAQ("capt-evidence", "speaking",
    ["Where can I see the CAPT guest lecture post?", "Is there a public source for the Bhopal session?", "CAPT lecture ka original post kahan hai?"],
    ["CAPT post", "CAPT evidence", "Bhopal session source"],
    "The portfolio links Krishanu's original LinkedIn post about delivering a VAPT lecture to law enforcement officers at CAPT Bhopal: https://www.linkedin.com/posts/krishanu-kaundilya_delivered-a-guest-lecture-on-vapt-to-the-ugcPost-7377104471186620416-GaLF/"),
  professionalFAQ("training-invitation", "speaking",
    ["Can I invite Krishanu for a training session?", "How should I propose a VAPT awareness workshop?", "Training ya guest lecture ke liye invite kaise kare?"],
    ["training invitation", "workshop enquiry", "guest lecture booking"],
    "His CAPT session is relevant speaking experience. Send the audience, topic, intended learning outcomes, format and proposed date through his professional contact. Availability, fees and a specific curriculum need to be confirmed; this chat does not book a session.", "engagement-scope"),

  // Professional contact and practical engagement questions: 14 topics.
  professionalFAQ("project-contact", "collaboration",
    ["How can I discuss a project with Krishanu?", "What is the best way to contact him about work?", "Project discuss karne ke liye contact kaise kare?"],
    ["contact", "email", "email address", "discuss a project", "get in touch", "hire Krishanu"],
    "Contact him on LinkedIn at https://www.linkedin.com/in/krishanu-kaundilya/ or email krishanumishra778@gmail.com. Include the problem, current tools, expected result and any deadline. This assistant can explain his portfolio but cannot confirm a booking or send a message for you."),
  professionalFAQ("linkedin-profile", "collaboration",
    ["Where is Krishanu's LinkedIn profile?", "Can you share his professional LinkedIn link?", "Krishanu ka LinkedIn account link do?"],
    ["LinkedIn", "LinkedIn profile", "professional profile"],
    "His professional LinkedIn profile is https://www.linkedin.com/in/krishanu-kaundilya/ . It is a useful place to review experience, education and updates or send a project enquiry."),
  professionalFAQ("github-profile", "collaboration",
    ["What is Krishanu's GitHub profile?", "Please show me the GitHub repositories", "Krishanu ka GitHub account kya hai?"],
    ["GitHub", "GitHub repositories", "code profile", "public code"],
    "Krishanu's GitHub profile is https://github.com/krishanumishra778 . Use it to review his public repositories and README documentation. Public repositories are separate from private client code; availability of one does not imply permission to share the other."),
  professionalFAQ("resume-request", "collaboration",
    ["Can I request Krishanu's resume?", "Where can a client ask for his CV?", "Krishanu ka resume ya CV milega?"],
    ["resume", "CV", "curriculum vitae"],
    "A professional resume has been prepared from his portfolio history. Ask Krishanu through LinkedIn or email for the appropriate current copy. This assistant does not invent a public download URL or expose a local file path."),
  professionalFAQ("project-pricing", "collaboration",
    ["How much does Krishanu charge for a project?", "What are his freelance rates or consultation fees?", "Project ka price ya fees kitni hogi?"],
    ["pricing", "price", "fees", "rates", "cost", "budget", "charges", "custom CRM pricing", "AI automation pricing", "VAPT pricing", "WhatsApp pricing", "website development pricing"],
    "No fixed freelance rate or package price is confirmed in this portfolio. A useful quote needs the workflow, integrations, scope and expected result. Send those details to Krishanu so he can confirm effort, software costs and what is included.", "engagement-scope"),
  professionalFAQ("project-timeline", "collaboration",
    ["How long will a CRM or automation project take?", "Does he publish fixed delivery times?", "CRM ya automation banne mein kitna time lagega?"],
    ["delivery time", "turnaround", "project timeline", "deadline", "VAPT delivery time", "AI delivery time", "WhatsApp delivery time"],
    "There is no confirmed standard turnaround time. Existing systems, integrations, access and the agreed features affect delivery. Share your deadline with the brief and ask for an estimated plan; this assistant cannot promise a date.", "engagement-scope"),
  professionalFAQ("availability", "collaboration",
    ["Is Krishanu available for a new project?", "How many hours per week can he commit?", "Abhi naye project ke liye available hain kya?"],
    ["availability", "available", "weekly hours", "book a call"],
    "Live availability and weekly capacity are not published in this knowledgebase. Contact Krishanu with the scope and preferred start date to confirm them. His portfolio showing relevant experience is not a confirmed booking.", "engagement-scope"),
  professionalFAQ("remote-collaboration", "collaboration",
    ["Has he worked remotely with an international firm?", "Can a remote engagement be discussed?", "Remote project ya international collaboration kar sakte hain?"],
    ["remote work", "international collaboration", "remote consultant"],
    "He worked remotely for Dubai-based DTSS Consultants. For a new remote project, discuss communication channels, time-zone overlap and milestones directly. The portfolio does not specify an always-available schedule."),
  professionalFAQ("nda-confidentiality", "collaboration",
    ["Can I discuss an NDA for a project?", "How should confidential project material be shared?", "Confidential project ya NDA kaise discuss kare?"],
    ["NDA", "confidentiality", "confidential project"],
    "Discuss any confidentiality agreement directly before sharing private material. This assistant cannot sign an NDA or agree terms on Krishanu's behalf. Begin with a non-sensitive summary and arrange an appropriate channel for any confidential documents.", "engagement-scope"),
  professionalFAQ("secure-access", "collaboration",
    ["Should I paste passwords or API keys into this chat?", "How should integration credentials be provided?", "API key ya password yahan bhej du kya?"],
    ["API keys", "credentials", "password sharing", "secret sharing"],
    "Do not paste passwords, API keys or private client data into this public assistant. For a confirmed engagement, agree secure access and appropriate permissions directly. The chat only explains the portfolio; it is not an access-provisioning system.", "engagement-scope"),
  professionalFAQ("ownership-terms", "collaboration",
    ["Who owns the code in a new client project?", "Are intellectual property terms automatically included?", "Project ke code ka ownership kiska hoga?"],
    ["code ownership", "project IP", "intellectual property terms"],
    "Ownership, licensing, third-party components and handover rights need to be written into the engagement terms. This portfolio does not establish a default transfer agreement. CoreDhristi marketplace licensing is a separate matter from custom client work.", "engagement-scope"),
  professionalFAQ("maintenance-scope", "collaboration",
    ["Is ongoing support included after development?", "How should maintenance and bug fixing be agreed?", "Delivery ke baad support milega kya?"],
    ["maintenance", "ongoing support", "after delivery", "support period"],
    "Support duration, bug fixes, change requests and monitoring need to be scoped directly. No unlimited maintenance or response-time commitment is published here. Clarify which issues are included and how later changes will be handled.", "engagement-scope"),
  professionalFAQ("deployment-scope", "collaboration",
    ["Can hosting and deployment be part of a project?", "Who pays for servers and AI usage?", "Hosting deployment aur AI usage cost ka kya hoga?"],
    ["hosting", "deployment", "server costs", "AI usage costs"],
    "Discuss the intended environment, account ownership, deployment responsibilities and recurring provider costs as separate scope items. CoreD focuses on cloud, AI and cybersecurity, but this assistant does not select a cloud vendor or promise that external usage charges are included.", "engagement-scope"),
  professionalFAQ("specific-tool-stack", "collaboration",
    ["Does Krishanu support n8n Zapier or LangChain for my project?", "Can you confirm every automation framework he uses?", "n8n Make Zapier ya LangChain ka stack confirm hai?"],
    ["n8n", "Zapier", "Make", "LangChain", "React", "Next js", "technology stack", "frameworks"],
    "His portfolio confirms delivered CRM and AI workflows, but it does not list every integration framework used for those client systems. Ask him to confirm your required stack and relevant samples. CoreDhristi listing categories mentioning a tool do not by themselves prove his personal client experience with it."),

  // Public assistant boundaries and common short messages: 6 topics.
  professionalFAQ("greeting", "conversation",
    ["Hello", "Hi there", "Namaste"],
    ["hi", "hello", "hey", "namaste"],
    "Hi! I can help you explore Krishanu's AI agents, CRM automation, cybersecurity experience, client projects and career. Ask about a service you need or try a project name such as Tohfa Bazzar or Crawl Digitally."),
  professionalFAQ("thanks", "conversation",
    ["Thank you", "Thanks for the information", "Shukriya"],
    ["thanks", "thank you", "shukriya", "dhanyavad"],
    "You're welcome. If you're considering a project, ask about the most relevant case study or how to send Krishanu a brief."),
  professionalFAQ("assistant-scope", "conversation",
    ["What can this assistant answer?", "Are these live AI generated replies?", "Ye chatbot kya kya bata sakta hai?"],
    ["assistant capabilities", "chatbot scope", "knowledgebase", "Hinglish", "supported languages"],
    "This assistant matches your question against a maintained local knowledgebase about Krishanu. It can explain his background, work and project-scoping questions in English or Hinglish. It does not browse live accounts, book work or generate new facts when the record has no answer."),
  professionalFAQ("public-phone", "collaboration",
    ["Can you share Krishanu's phone number?", "Is a public WhatsApp contact number listed?", "Krishanu ka mobile number de do?"],
    ["phone number", "mobile number", "contact number", "WhatsApp number"],
    "No public phone or WhatsApp contact number has been confirmed in the supplied record. Use LinkedIn at https://www.linkedin.com/in/krishanu-kaundilya/ or email krishanumishra778@gmail.com to ask for the appropriate contact channel."),
  professionalFAQ("office-address", "profile",
    ["What is Krishanu's office address?", "Can I visit a confirmed business office?", "Office ka full address kya hai?"],
    ["office address", "street address", "visit office"],
    "Indore, Madhya Pradesh, India is his confirmed base. A public office address and visitor arrangements have not been supplied. Contact him directly before planning an in-person meeting rather than inferring an address from the city."),
  professionalFAQ("results-and-guarantees", "projects",
    ["Are project revenue gains or success rates verified?", "Does Krishanu guarantee conversion improvements?", "Guaranteed results ya revenue numbers hain kya?"],
    ["guaranteed results", "success rate", "revenue gains", "conversion metrics", "40 percent"],
    "The verified project record describes the business problems and delivered workflows, not measured revenue gains, client counts or guaranteed conversion rates. Ask for evidence for any outcome you need to evaluate. A useful proposal should define acceptance criteria rather than promise unsupported numbers."),
  // Broad navigation keywords should explain Krishanu's work, not platform taxonomy.
  professionalFAQ("ai-agent-service", "services",
    ["Can Krishanu develop an AI agent for a business?", "What AI agent development work does he do?", "Business ke liye AI agent develop kar sakte hain?"],
    ["AI", "automation", "business automation", "AI agent", "AI agents", "AI development", "AI agent developer"],
    "His delivered AI work includes lead follow-up CRMs, AI calling workflows, WhatsApp enquiry assistants and agent integrations in existing education CRMs. Describe the task, information sources and permitted actions for your agent. The appropriate tools, integrations and human handoffs need to be agreed for that workflow."),
  professionalFAQ("skills-overview", "profile",
    ["What practical skills does Krishanu bring to a project?", "Can you summarize his development and security skills?", "Krishanu ke main skills kya hain?"],
    ["skills", "expertise", "skill set"],
    "His portfolio covers AI agents, CRM development, WhatsApp and business automation, web/API/network VAPT, SAST/DAST, malware analysis, UI design, web development and product management. Documented security tools include Burp Suite, Nuclei, Semgrep and CodeQL. A particular technology requirement should be checked directly."),
  professionalFAQ("projects-overview", "projects",
    ["Which client projects has Krishanu delivered?", "Can you summarize all six client project cases?", "Krishanu ke client projects ki list batao?"],
    ["projects", "case studies", "client work", "portfolio projects"],
    "The six supplied cases are Tohfa Bazzar's AI CRM, ADSMARK01's AI-agent CRM, Indiganic Foods' WhatsApp enquiries, a petroleum client's refuelling and loyalty CRM, Crawl Digitally's cybersecurity work and AI integrations in education CRMs at the former Next Tech Waves venture. Ask a project name for its specific scope."),
  professionalFAQ("education-overview", "education",
    ["What is Krishanu's academic background?", "Can you summarize his college and executive education?", "Krishanu ki education qualification kya hai?"],
    ["education", "qualification", "academic background", "college"],
    "He holds a BCA from St. Paul Institute Of Professional Studies, June 2020-May 2023, Grade A. He also completed IIM Kozhikode's Professional Certificate Programme in Product Management (eMDP), July 2023-April 2024. The IIM qualification is a certificate programme, not an MBA."),
  professionalFAQ("tools-overview", "expertise",
    ["Which tools are documented in Krishanu's work?", "What security tools and public programming work can I review?", "Krishanu ka verified tools stack kya hai?"],
    ["tools", "tool stack", "Burp Suite", "Semgrep", "CodeQL", "Nuclei", "Python"],
    "His consultancy record names Burp Suite, Nuclei, Semgrep and CodeQL. His public GitHub projects also document Python-based security utilities: https://github.com/krishanumishra778 . Confirm a specific client-project stack directly; a public tool or marketplace listing does not establish every integration he supports.", "public-profile"),
];
