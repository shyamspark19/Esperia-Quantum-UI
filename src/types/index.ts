export type PageType =
  | 'home'
  | 'contact'
  | 'works'
  | 'watermelon'
  | 'what-we-do'
  | 'blogs'
  | 'why-esperia';

export interface BasePageProps {
  onNavigateToHome: (sectionId?: string) => void;
  onNavigateToWorks: () => void;
  onNavigateToContact: () => void;
  onNavigateToWhatWeDo: () => void;
  onNavigateToBlogs?: () => void;
  onNavigateToWhyEsperia?: () => void;
}
