export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface HeroData {
  name: string;
  headline: string;
  location: string;
  contacts: ContactLink[];
  ctas: Array<{ label: string; href: string }>;
}

export interface AboutData {
  summary: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  companySite?: string;
  logoSrc?: string;
  logoSurface?: 'light' | 'dark';
  location: string;
  period: string;
  highlights: string[];
  featured: boolean;
}

export interface ProjectAsset {
  type: 'image' | 'diagram';
  src: string;
  alt: string;
}

export interface ProjectData {
  id: string;
  title: string;
  period: string;
  context: string;
  challenges: string[];
  architectureNotes?: string[];
  stack: string[];
  assets: ProjectAsset[];
  emphasis: 'primary' | 'secondary';
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  details?: string;
  credentialCode?: string;
  credentialUrl?: string;
  competencies?: string[];
}

export interface Portfolio {
  hero: HeroData;
  about: AboutData;
  experiences: ExperienceItem[];
  projects: ProjectData[];
  skills: SkillCategory[];
  education: EducationItem[];
}
