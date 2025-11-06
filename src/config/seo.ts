export interface SiteConfig {
  site: string;
  title: string;
  description: string;
  author: string;
  keywords: string[];
  image: string;
  twitterHandle: string;
  githubUsername: string;
  linkedinUsername: string;
}

export const siteConfig: SiteConfig = {
  site: "https://tinystudioo.com",
  title: "tinystudioo.",
  description:
    "Crafts sleek, high-quality websites with a futuristic edge. Specialized in minimalist designs that combine advanced technology with seamless usability. From smooth animations to optimized performance, turn complex ideas into simple, engaging user experiences.",
  author: "Tinystudioo",
  keywords: [
    "Tinystudioo",
    "Full Stack Developer",
    "Web Developer",
    "Designer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Frontend",
    "Backend",
    "UI/UX",
    "Portfolio",
    "Web Applications",
    "Creative Projects",
  ],
  image: "/images/tinystudioo.png",
  twitterHandle: "@difaananda40",
  githubUsername: "difaananda40",
  linkedinUsername: "difaananda40",
};

export const defaultSEO = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  author: siteConfig.author,
  image: siteConfig.image,
  type: "website" as const,
  noindex: false,
  nofollow: false,
};

// SEO utilities
export function generatePageTitle(pageTitle?: string): string {
  if (!pageTitle) return siteConfig.title;
  return `${pageTitle} by ${siteConfig.title}`;
}

export function generatePageDescription(content?: string): string {
  if (!content) return siteConfig.description;
  return content.length > 160 ? content.substring(0, 157) + "..." : content;
}

export function generateKeywords(additionalKeywords: string[] = []): string[] {
  return [...new Set([...siteConfig.keywords, ...additionalKeywords])];
}
