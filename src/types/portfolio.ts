/**
 * TypeScript Interfaces & Types for Krishanu Kaundilya's Portfolio
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface ProfileImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface HeroData {
  welcomeBadge: string;
  name: string;
  titleAccent: string; // "Founder @ CoreDhristi"
  role: string;        // "AI Agent & Automation Developer"
  tagline: string;     // "Building Trust Infrastructure for the AI Agent Economy"
  focusAreas: string[];// ["AI Agents", "Automation", "Security"]
  bio: string;
  ctaPrimary: {
    label: string;
    href: string;
  };
  profileImage: ProfileImage;
  floatingBadges: {
    topBadge: {
      title: string;
      subtitle?: string;
    };
    bottomBadge: {
      title: string;
    };
  };
}

export interface CompanyMarqueeItem {
  id: string;
  name: string;
  logoUrl?: string;
  placeholder: boolean;
}

export interface CredentialItem {
  title: string;
  issuer: string;
  details?: string;
}

export interface ExpertiseArea {
  category: string;
  description: string;
  tags: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  programme: string;
  period: string;
  grade?: string;
  badge?: string;
  description?: string;
  skillsTags?: string[];
  credentialRef?: string;
  certificateImageUrl?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  dateOrPeriod: string;
  certificateNumber?: string;
  accreditation?: string;
  imageUrl: string;
  badge?: string;
}

export interface AboutData {
  badge: string;
  headline: string;
  leadBio: string;
  bioParagraphs: string[];
  credentials: CredentialItem[];
  expertiseAreas: ExpertiseArea[];
  image: ProfileImage;
  skillsAndExperience: {
    title: string;
    headline: string;
    supportingLine: string;
    skills: string[];
  };
  education: EducationItem[];
  certificates: CertificateItem[];
}

export interface ExperienceItem {
  id: string;
  number: string;
  company: string;
  description: string;
  logoUrl?: string;
  accentColor: "orange" | "amber" | "blue" | "rose" | "emerald" | "pink" | "teal";
  role?: string;
  period?: string;
  location?: string;
  highlights?: string[];
  isVerified: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  description: string;
  organizationOrContext: string;
  year: string;
  impact?: string;
  imageUrl?: string;
  audience?: string;
  keyTopics?: string[];
  isVerified: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  icon?: string;
  deliverables?: string[];
  href?: string;
  ctaText?: string;
}

export interface InitiativeItem {
  id: string;
  title: string;
  statusTag: string;
  summary: string;
  points?: string[];
  teamSize?: string;
  logoUrl?: string;
  href: string;
  linkText: string;
  domainStatus: "live_verified" | "pending_domain";
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  content: string;
  avatarUrl?: string;
  rating?: number;
  isVerified: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface PortfolioData {
  navLinks: NavLink[];
  hero: HeroData;
  companyMarquee: {
    title: string;
    items: CompanyMarqueeItem[];
  };
  about: AboutData;
  experiences: ExperienceItem[];
  achievements: AchievementItem[];
  services: ServiceItem[];
  currentInitiatives: InitiativeItem[];
  testimonials: TestimonialItem[];
  socialLinks: SocialLink[];
  footer: {
    headline: string;
    subheadline: string;
    ctaButton: {
      label: string;
      href: string;
    };
    copyrightNotice: string;
  };
}
