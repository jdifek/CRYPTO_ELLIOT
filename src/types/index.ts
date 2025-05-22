export interface LanguageOption {
  id: string;
  label: string;
}

export interface Content {
  title: string;
  subtitle: string;
  heroText: string;
  descriptionTitle: string;
  description: string;
  ctaButton: string;
  featuresTitle: string;
  features: {
    title: string;
    description: string;
  }[];
}

export type LanguageContent = {
  [key: string]: Content;
};