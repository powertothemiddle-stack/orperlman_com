export interface Project {
  id: string;
  title: string;
  category: "Design" | "Development" | "Branding";
  image: string;
  description: string;
  client: string;
  year: string;
  link?: string;
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface PricingPlan {
  name: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface Article {
  id: string;
  title: string;
  category: "Org Design" | "Leading Talent" | "Decision Making" | "Exercise and Mobility";
  date: string;
  readTime: string;
  description: string;
  author: string;
  link: string;
  content?: string[];
}

