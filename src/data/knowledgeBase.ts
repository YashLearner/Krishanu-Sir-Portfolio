

export type FAQ = {
  id: string;
  category: string;
  questions: string[];
  keywords: string[];
  answer: string;
};

/**
 * Public-profile and CoreDhrishti FAQs compiled from the supplied LinkedIn,
 * GitHub, and CoreDhrishti pages. Each entry contains several question phrasings
 * for the same verified answer (exactly 200 question phrasings across 29 entries).
 * Review the content periodically because company features and profile details
 * can change.
 */
export const knowledgeBase: FAQ[] = [
  {
    id: "krishanu-profile",
    category: "profile",
    questions: [
      "Who is Krishanu Kaundilya?",
      "Can you introduce Krishanu Kaundilya?",
      "Tell me about Krishanu.",
      "Who owns this portfolio?",
      "What is Krishanu Kaundilya known for?",
      "Krishanu Kaundilya kaun hain?",
      "Mujhe Krishanu ke baare mein batao.",
    ],
    keywords: ["Krishanu Kaundilya", "about Krishanu", "portfolio owner", "professional introduction"],
    answer:
      "Krishanu Kaundilya is a cybersecurity professional, VAPT specialist, and AI security researcher. His public profiles describe work across web and API security testing, AI/LLM security, security automation, and the CoreDhrishti AI-agent marketplace. LinkedIn: https://www.linkedin.com/in/krishanu-kaundilya/ | GitHub: https://github.com/krishanumishra778",
  },
  {
    id: "professional-role",
    category: "career",
    questions: [
      "What is Krishanu's professional role?",
      "What kind of professional is Krishanu Kaundilya?",
      "Is Krishanu a cybersecurity professional?",
      "What roles does Krishanu work in?",
      "What is his area of work?",
      "Krishanu ka profession kya hai?",
      "Does he work in AI security and VAPT?",
    ],
    keywords: ["professional role", "career focus", "cybersecurity professional", "VAPT specialist"],
    answer:
      "His public profile describes him as a cybersecurity professional, CEH Master, VAPT specialist, and AI/LLM security researcher. His listed focus areas include web and API penetration testing, DAST scanner rule development, and agentic security automation.",
  },
  {
    id: "location-experience",
    category: "career",
    questions: [
      "Where is Krishanu based?",
      "Which city does Krishanu work from?",
      "What location is listed on his public profile?",
      "How much VAPT experience does Krishanu list?",
      "Where is Krishanu Kaundilya located in India?",
      "Krishanu kis city mein based hain?",
    ],
    keywords: ["Indore", "location", "years of VAPT experience", "based in India"],
    answer:
      "His public GitHub profile lists Indore, Madhya Pradesh, India, and states 2+ years of hands-on VAPT experience. Experience figures are based on the published profile and may change over time.",
  },
  {
    id: "security-focus-areas",
    category: "expertise",
    questions: [
      "What are Krishanu's main security specialities?",
      "Which areas of cybersecurity does he focus on?",
      "What security work does Krishanu do?",
      "Does he research AI security?",
      "What are his VAPT focus areas?",
      "Krishanu cybersecurity mein kis cheez par kaam karte hain?",
      "Does his profile mention agentic security automation?",
    ],
    keywords: ["security specialities", "AI security", "agentic security automation", "VAPT focus"],
    answer:
      "His public profile lists web-application and API penetration testing, AI/LLM security and prompt injection, DAST scanner rule development, and agentic security automation as focus areas.",
  },
  {
    id: "web-api-testing",
    category: "expertise",
    questions: [
      "Does Krishanu do web application penetration testing?",
      "What does he do in API security?",
      "Does his profile list web app and API testing?",
      "Can you describe Krishanu's web security focus?",
      "Which application security assessments does he list?",
      "Kya Krishanu web application aur API testing karte hain?",
      "Does he work on vulnerabilities in web apps?",
    ],
    keywords: ["web application penetration testing", "API security", "web app testing", "application security"],
    answer:
      "Web-application and API penetration testing are explicitly listed among Krishanu's focus areas. His public project portfolio also references vulnerability templates and security testing tools. Specific assessment details should be discussed with him directly.",
  },
  {
    id: "network-mobile-security",
    category: "expertise",
    questions: [
      "Does Krishanu have network security assessment experience?",
      "Does his profile mention mobile application security?",
      "What testing areas are included in his VAPT experience?",
      "Does he work beyond web applications?",
      "Does his public bio include network infrastructure testing?",
      "Kya unka experience network aur mobile apps tak bhi hai?",
      "Which assessment surfaces are mentioned in his bio?",
    ],
    keywords: ["network infrastructure", "mobile app security", "network testing", "mobile applications"],
    answer:
      "The CoreDhrishti About page describes Krishanu's VAPT experience across web applications, network infrastructure, mobile apps, and APIs. Scope and availability for a specific engagement should be confirmed with him.",
  },
  {
    id: "certifications",
    category: "credentials",
    questions: [
      "Which cybersecurity certifications are listed for Krishanu?",
      "Does Krishanu list CEH Master?",
      "What EC-Council credentials appear on his profile?",
      "Is CEH Practical mentioned in his credentials?",
      "Which CEH qualifications does he list publicly?",
      "Krishanu ki profile par kaun si CEH certifications listed hain?",
      "Does his profile mention Certified Ethical Hacker v13?",
    ],
    keywords: ["CEH Master", "CEH v13", "CEH Practical", "EC-Council certifications"],
    answer:
      "His public profiles list CEH Master, Certified Ethical Hacker v13 (CEH), and CEH Practical associated with EC-Council. For current validity or credential verification, check the relevant issuer records rather than relying only on a portfolio summary.",
  },
  {
    id: "product-management-education",
    category: "education",
    questions: [
      "What product-management education is listed for Krishanu?",
      "Did Krishanu study at IIM Kozhikode?",
      "What programme did he complete at IIM Kozhikode?",
      "When did he complete the product management programme?",
      "What did his IIM Kozhikode programme focus on?",
      "Krishanu ne IIM Kozhikode mein kya programme kiya?",
    ],
    keywords: ["IIM Kozhikode", "product management", "product strategy", "education"],
    answer:
      "His LinkedIn profile lists the Professional Certificate Programme in Product Management at IIM Kozhikode, completed from July 2023 to April 2024. The profile says it strengthened his foundation in product thinking, strategy, customer-focused problem-solving, prioritisation, and execution.",
  },
  {
    id: "consulting-work",
    category: "experience",
    questions: [
      "What consulting work is mentioned on the CoreDhrishti About page?",
      "Does Krishanu's public bio mention DTSS Consultants?",
      "Where is the consulting engagement described in his profile based?",
      "What does his public profile say about client risk reduction?",
      "Is remote consulting mentioned in his bio?",
      "Krishanu ke consulting experience ke baare mein kya listed hai?",
      "Does the profile mention information-security consulting?",
    ],
    keywords: ["DTSS Consultants", "information security consultant", "consulting", "risk reduction"],
    answer:
      "The CoreDhrishti About page describes Krishanu as an Information Security Consultant and says he consults for DTSS Consultants in Dubai remotely. It also reports that he helped clients reduce security-risk exposure by 40%+ across multiple engagements; this is a published profile claim, not a guarantee of future results.",
  },
  {
    id: "client-engagements",
    category: "experience",
    questions: [
      "What client security work is highlighted on the portfolio site?",
      "What was found in the aviation booking portal assessment?",
      "Which issues were addressed for Crawl Digitally?",
      "Does the About page list real client work?",
      "What application-security examples are publicly mentioned?",
      "Kya profile mein client engagements ke examples diye gaye hain?",
      "What does the site say about the aviation-sector portal?",
    ],
    keywords: ["aviation booking portal", "Crawl Digitally", "client engagements", "XSS remediation"],
    answer:
      "The CoreDhrishti About page highlights an aviation-sector booking portal assessment where six critical/high vulnerabilities were found and remediated, and a Crawl Digitally web application engagement involving XSS, security headers, and session-management issues. These are examples stated on the public site.",
  },
  {
    id: "bug-bounty-research",
    category: "research",
    questions: [
      "What bug-bounty research is mentioned on Krishanu's profile?",
      "Does his profile mention HackerOne findings?",
      "What kinds of issues did he report on a cryptocurrency exchange?",
      "What is the IDOR research mentioned in his profile?",
      "Does his GitHub profile describe business-logic findings?",
      "Krishanu ke bug bounty research mein kya mention hai?",
      "Were the listed exchange findings confirmed?",
    ],
    keywords: ["HackerOne", "IDOR", "business logic", "cryptocurrency exchange"],
    answer:
      "His public profile describes two HackerOne findings from 2025 on a cryptocurrency exchange: an IDOR issue involving unauthorised access to P2P trading history through userId manipulation, and a business-logic issue involving negative or zero amounts. The profile says both reports were confirmed by the platform security team. This summary is informational, not an instruction to test systems without permission.",
  },
  {
    id: "speaking-training",
    category: "speaking",
    questions: [
      "Has Krishanu delivered cybersecurity training?",
      "Where did he speak about ethical hacking?",
      "What training is mentioned at CAPT Bhopal?",
      "Did he deliver phishing-awareness training?",
      "Which audience received the ethical-hacking lecture?",
      "Krishanu ne kis audience ko security training di hai?",
      "What does his profile say about Crawl Digitally training?",
    ],
    keywords: ["CAPT Bhopal", "ethical hacking lecture", "phishing awareness", "security training"],
    answer:
      "His public profile says he delivered a guest lecture on ethical hacking to law-enforcement officers at CAPT Bhopal and conducted phishing-awareness training for the Crawl Digitally team.",
  },
  {
    id: "open-source-overview",
    category: "projects",
    questions: [
      "Which open-source security tools does Krishanu publish?",
      "What security projects are available on his GitHub?",
      "Can you list Krishanu's main public security repositories?",
      "What tools has he built for security testing?",
      "Which projects are linked from his public profile?",
      "Krishanu ke GitHub par kaun se security tools hain?",
      "What are the main projects in his open-source portfolio?",
    ],
    keywords: ["open-source tools", "GitHub repositories", "security projects", "public repositories"],
    answer:
      "His public GitHub profile highlights four security tools: nuclei-template-library, recon-automation-tool, vapt-report-generator, and prompt-injection-toolkit. They cover vulnerability-scanning templates, reconnaissance automation, structured assessment reporting, and AI/LLM security testing. Explore them at https://github.com/krishanumishra778",
  },
  {
    id: "nuclei-template-library",
    category: "projects",
    questions: [
      "What is the nuclei-template-library project?",
      "What does Krishanu's Nuclei template repository contain?",
      "Which vulnerability areas are covered by his Nuclei templates?",
      "Does the Nuclei library include IDOR and XSS templates?",
      "What is the technology used in nuclei-template-library?",
      "Nuclei template library kis kaam aati hai?",
      "Are the custom Nuclei templates mapped to OWASP Top 10?",
    ],
    keywords: ["nuclei-template-library", "Nuclei templates", "YAML templates", "OWASP Top 10"],
    answer:
      "The public nuclei-template-library repository contains custom Nuclei YAML templates described as being built from real VAPT engagements. Its listed coverage includes IDOR, business logic, XSS, and missing security headers, with OWASP Top 10 mapping. Repository: https://github.com/krishanumishra778/nuclei-template-library",
  },
  {
    id: "recon-automation-tool",
    category: "projects",
    questions: [
      "What is Krishanu's recon automation tool?",
      "What does the recon-automation-tool repository automate?",
      "Which tools are shown in the recon pipeline?",
      "What language is used by the reconnaissance automation project?",
      "Does the tool produce an HTML report?",
      "Recon automation tool ka workflow kya hai?",
      "Which libraries are listed for recon-automation-tool?",
    ],
    keywords: ["recon-automation-tool", "Subfinder", "httpx", "recon pipeline"],
    answer:
      "The public recon-automation-tool repository describes an automated reconnaissance pipeline that runs Subfinder, httpx, and Nuclei and produces an HTML report. Its listed stack includes Python, BeautifulSoup, and dnspython. Use it only for systems you are authorised to assess. Repository: https://github.com/krishanumishra778/recon-automation-tool",
  },
  {
    id: "vapt-report-generator",
    category: "projects",
    questions: [
      "What does the VAPT report generator do?",
      "Can Krishanu's report tool generate PDF reports?",
      "Does the VAPT report generator also produce HTML?",
      "What input format does the report generator use?",
      "Which scoring standard is listed in the reporting tool?",
      "VAPT report generator ka use kya hai?",
      "Does the generator include severity and remediation details?",
    ],
    keywords: ["vapt-report-generator", "ReportLab", "CVSS v3.1", "PDF report"],
    answer:
      "The vapt-report-generator converts structured JSON findings into professional PDF and HTML penetration-testing reports. Its published features include executive summaries, findings, CVSS v3.1 scoring, severity labels, proof-of-concept blocks, and remediation highlights. Stack: Python, ReportLab, and HTML/CSS. Repository: https://github.com/krishanumishra778/vapt-report-generator",
  },
  {
    id: "prompt-injection-toolkit",
    category: "projects",
    questions: [
      "What is the Prompt Injection Toolkit?",
      "What does Krishanu's PIT project test?",
      "How many payloads are listed in the Prompt Injection Toolkit?",
      "Which categories are supported by PIT?",
      "Does PIT cover jailbreak and information-leak tests?",
      "Prompt Injection Toolkit kis kaam aata hai?",
      "What does PIT map its checks against?",
    ],
    keywords: ["Prompt Injection Toolkit", "PIT", "jailbreak", "OWASP LLM Top 10"],
    answer:
      "PIT is a Python-based AI/LLM security testing tool for authorised assessment of prompt injection, jailbreaks, system-prompt leaks, and denial-of-service risks. The repository lists 31 payloads across injection, jailbreak, leak, and DoS categories and maps coverage to OWASP LLM Top 10 risks. Use it only on systems you own or have explicit written permission to test. Repository: https://github.com/krishanumishra778/prompt-injection-toolkit",
  },
  {
    id: "coredhristi-purpose",
    category: "coredhristi",
    questions: [
      "What is CoreDhrishti?",
      "What does the CoreDhrishti platform do?",
      "Why was CoreDhrishti created?",
      "Is CoreDhrishti an AI-agent marketplace?",
      "What problem does CoreDhrishti aim to solve?",
      "CoreDhrishti kya hai?",
      "What is the mission of CoreDhrishti?",
    ],
    keywords: ["CoreDhrishti", "AI workforce marketplace", "platform mission", "AI agent marketplace"],
    answer:
      "CoreDhrishti describes itself as an AI workforce marketplace connecting developers who build AI agents with businesses that need them. The platform focuses on verified agents, automations, MCP servers, creator IP protection, and a usage model where companies pay per agent. Website: https://www.coredhristi.com/",
  },
  {
    id: "marketplace-listing-types",
    category: "coredhristi",
    questions: [
      "What can people find on the CoreDhrishti marketplace?",
      "Does CoreDhrishti list AI agents?",
      "Are automations available on CoreDhrishti?",
      "Does the platform support MCP servers?",
      "What are Skills on CoreDhrishti?",
      "CoreDhrishti par kis type ki listings milti hain?",
      "How do AI agents differ from automations on the platform?",
    ],
    keywords: ["AI agents", "AI automations", "MCP servers", "free skills"],
    answer:
      "CoreDhrishti lists four broad resource types: AI agents for work requiring judgement, automations for repeatable rule-based steps, MCP servers for connecting AI tools to systems, and Skills such as templates, prompts, datasets, system prompts, and tools. Availability of a particular listing depends on what has been published and verified.",
  },
  {
    id: "company-buyer-workflow",
    category: "coredhristi",
    questions: [
      "How can a company get started on CoreDhrishti?",
      "How do businesses find an agent on the marketplace?",
      "Can a company browse CoreDhrishti without logging in?",
      "What steps does a buyer follow to use an AI agent?",
      "How does a company hire a verified AI agent?",
      "Company CoreDhrishti par agent kaise hire kare?",
      "Can businesses filter marketplace listings by budget?",
    ],
    keywords: ["buyer workflow", "hire an agent", "browse marketplace", "company account"],
    answer:
      "The public site says visitors can browse without logging in. To hire, a buyer signs up, chooses the appropriate account type, verifies their phone, selects a listing, and subscribes or buys at the creator-set price. Listings can be filtered by category, type, and budget; consult the current site for the latest flow.",
  },
  {
    id: "developer-listing-workflow",
    category: "coredhristi",
    questions: [
      "How can a developer sell an AI agent on CoreDhrishti?",
      "Can creators list automations and MCP servers?",
      "Does CoreDhrishti charge developers to list an agent?",
      "Can developers publish more than one listing?",
      "What does a creator need to do before listing an agent?",
      "Developer CoreDhrishti par apna agent kaise list kare?",
    ],
    keywords: ["creator workflow", "sell an agent", "free listing", "developer listing"],
    answer:
      "CoreDhrishti says creators can list agents, automations, MCP servers, and free Skills without a platform listing fee, with unlimited listings. Sellers sign up, select an account type, verify their phone, submit a listing, and the listing must pass the applicable security and quality review before receiving a verified listing status.",
  },
  {
    id: "creator-revenue-share",
    category: "coredhristi",
    questions: [
      "What revenue share do creators receive on CoreDhrishti?",
      "How much of each sale does a developer keep?",
      "Does CoreDhrishti advertise an 80 percent creator share?",
      "Are creator earnings reduced by the platform service fee?",
      "How does CoreDhrishti pay creators fairly?",
      "CoreDhrishti par developers ko kitna revenue milta hai?",
      "Is the revenue share the same for each sale?",
    ],
    keywords: ["80% revenue share", "creator earnings", "revenue share", "creator payout"],
    answer:
      "CoreDhrishti states that creators receive a flat 80% share of every sale. Its About page says the buyer-facing service fee is separate and is not deducted from the creator's stated 80% share. Check the current pricing and terms for the latest conditions.",
  },
  {
    id: "marketplace-pricing",
    category: "coredhristi",
    questions: [
      "How much does CoreDhrishti cost?",
      "Is there a platform subscription fee?",
      "Who sets the subscription price for an AI agent?",
      "Does CoreDhrishti use per-agent pricing?",
      "Can buyers pay monthly or yearly for an agent?",
      "CoreDhrishti ka pricing model kya hai?",
      "Are buyers charged for every seat on the platform?",
    ],
    keywords: ["CoreDhrishti pricing", "per-agent price", "platform subscription fee", "monthly subscription"],
    answer:
      "The CoreDhrishti website says there is no platform subscription fee. Companies pay the price set by each agent's creator, with monthly or yearly billing per agent and a separate service fee described in the site's terms. Prices vary by listing, so check https://www.coredhristi.com/ for current details.",
  },
  {
    id: "security-review-overview",
    category: "coredhristi",
    questions: [
      "How does CoreDhrishti verify agents?",
      "What is the CoreDhrishti security-review process?",
      "How many review layers does an agent pass?",
      "What does a Security Verified badge mean on CoreDhrishti?",
      "Are listings security-scanned before going live?",
      "CoreDhrishti ki seven-layer security review kya hai?",
      "Why does the marketplace review AI agents before publishing?",
    ],
    keywords: ["7-layer security review", "verified badge", "security review", "listing verification"],
    answer:
      "CoreDhrishti says every applicable listing passes a seven-layer security and quality review before going live. The published pipeline covers secret scanning, static analysis, dependency and supply-chain checks, isolated build and test checks, adversarial attack simulation, workflow/MCP verification, and data-claim cross-checks with an SBOM. A review reduces risk but should not be interpreted as a guarantee that software can never fail.",
  },
  {
    id: "security-review-layers-1-3",
    category: "coredhristi-security",
    questions: [
      "What do the first three CoreDhrishti security layers check?",
      "Which tool scans secrets in a repository?",
      "Does CoreDhrishti use Semgrep and CodeQL?",
      "How are dependencies reviewed on the marketplace?",
      "What is the purpose of OSV-Scanner?",
      "CoreDhrishti ke secret scanning aur dependency checks kya hain?",
      "Which checks look for hardcoded credentials?",
    ],
    keywords: ["Betterleaks", "Semgrep", "CodeQL", "OSV-Scanner", "dependency audit"],
    answer:
      "The first three published layers are: (1) Betterleaks scans repository history for hardcoded keys, tokens, and passwords; (2) Semgrep and CodeQL perform static code analysis for unsafe patterns; (3) OSV-Scanner checks third-party dependencies against known-vulnerability databases.",
  },
  {
    id: "security-review-layers-4-5",
    category: "coredhristi-security",
    questions: [
      "How does CoreDhrishti check whether an agent works?",
      "What is the isolated QA layer?",
      "Does CoreDhrishti run an agent's test suite?",
      "What is Promptfoo used for in the review process?",
      "How are adversarial attacks simulated against agents?",
      "CoreDhrishti ke QA aur attack simulation checks kya hain?",
      "Which review layers test functionality and hostile inputs?",
    ],
    keywords: ["isolated QA", "functionality checks", "Promptfoo", "attack simulation", "adversarial testing"],
    answer:
      "Layer 4 installs and builds an agent in an isolated container and runs its test suite to check functionality. Layer 5 uses Promptfoo for automated adversarial attack simulations across multiple vulnerability categories. These are part of the published review process, not a promise of zero risk.",
  },
  {
    id: "security-review-layers-6-7",
    category: "coredhrishti-security",
    questions: [
      "What do CoreDhrishti's last two review layers check?",
      "How does the platform verify MCP servers?",
      "What is Agentic Radar used for?",
      "What does MCP Inspector check?",
      "How are personal-data claims cross-checked?",
      "CoreDhrishti SBOM aur data-claim review kaise karta hai?",
      "What are Presidio and Syft used for in the review?",
    ],
    keywords: ["Agentic Radar", "MCP Inspector", "Presidio", "Syft", "SBOM"],
    answer:
      "Layer 6 uses Agentic Radar to inspect n8n or framework-based automation workflows and MCP Inspector to identify tools exposed by an MCP server, when applicable. Layer 7 uses Presidio to cross-check personal-data handling claims and Syft to produce a software bill of materials (SBOM).",
  },
  {
    id: "creator-ip-and-access",
    category: "coredhrishti-security",
    questions: [
      "How does CoreDhrishti protect a creator's source code?",
      "Does the marketplace expose a developer's private repository?",
      "How is access to a subscribed agent controlled?",
      "What happens when a buyer cancels an agent subscription?",
      "Does CoreDhrishti use revocable license keys?",
      "CoreDhrishti creator ke IP ko kaise protect karta hai?",
      "Can access be revoked after cancellation?",
    ],
    keywords: ["source-code protection", "creator IP", "license key", "cancel subscription"],
    answer:
      "CoreDhrishti says it protects creator intellectual property and uses API-gated access, revocable license keys, or developer-managed cloud hosting depending on the deployment model. Its published FAQ says cancelling access revokes the license. The exact protection model depends on the listing and should be checked in the platform's current documentation.",
  },
  {
    id: "global-payments-payouts",
    category: "coredhrishti-payments",
    questions: [
      "Which currencies does CoreDhrishti support?",
      "Can Indian buyers pay in rupees?",
      "Which payment provider is listed for India?",
      "Which provider handles international payments?",
      "How are creators paid on CoreDhrishti?",
      "CoreDhrishti par payout aur payment methods kya hain?",
      "What is the stated buyer-protection hold period for creator payouts?",
    ],
    keywords: ["Razorpay", "Stripe", "INR", "USD", "EUR", "GBP", "creator payouts"],
    answer:
      "The website lists INR payments in India through Razorpay, including UPI, cards, and net banking, while international payments use Stripe in USD, EUR, or GBP based on region. It describes a 21-day buyer-protection hold, automatic monthly creator payouts, and a minimum payout of ₹1,000. Payment terms can change, so verify current details on the official site.",
  },
];
