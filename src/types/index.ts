export type PageType =
  | 'home'
  | 'contact'
  | 'works'
  | 'watermelon'
  | 'young-genius'
  | 'iris-hr'
  | 'tas-connect'
  | 'what-we-do'
  | 'blogs'
  | 'blog-detail'
  | 'why-esperia'
  | 'privacy'
  | 'terms';

export interface BasePageProps {
  onNavigateToHome: (sectionId?: string) => void;
  onNavigateToWorks: () => void;
  onNavigateToContact: () => void;
  onNavigateToWhatWeDo: () => void;
  onNavigateToBlogs?: () => void;
  onNavigateToWhyEsperia?: () => void;
  onNavigateToPrivacy?: () => void;
  onNavigateToTerms?: () => void;
}

