export interface Startup {
  id: string;
  name: string;
  logo: string;
  shortDescription: string;
  mrr: number;
  category: string;
  foundedDate: string;
  location: string;
  website: string;
  longDescription: string;
  isVerified?: boolean;
  metrics: {
    mrr: number;
    launchedIn: string;
    founders: string;
    funding: string;
    monetisation: string;
    commitment: string;
  };
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    bluesky?: string;
  };
}