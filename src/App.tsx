import React, { useState, useEffect } from 'react';
import {
  LandingPage,
  ContactPage,
  OurWorksPage,
  WatermelonDetailPage,
  WhatWeDoPage,
  BlogsPage,
  WhyEsperiaPage,
} from './pages';
import type { PageType } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>(() => {
    const hash = window.location.hash;
    if (hash === '#why-esperia') return 'why-esperia';
    if (hash === '#what-we-do' || hash === '#services') return 'what-we-do';
    if (hash === '#contact-us' || hash === '#contact') return 'contact';
    if (hash === '#watermelon' || hash === '#our-works/watermelon') return 'watermelon';
    if (hash === '#our-works' || hash === '#works') return 'works';
    if (hash === '#blogs' || hash === '#blogs-and-newsletters' || hash === '#newsletters') return 'blogs';
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#why-esperia') {
        setCurrentPage('why-esperia');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#what-we-do' || hash === '#services') {
        setCurrentPage('what-we-do');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#contact-us' || hash === '#contact') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#watermelon' || hash === '#our-works/watermelon') {
        setCurrentPage('watermelon');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#our-works' || hash === '#works') {
        setCurrentPage('works');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#blogs' || hash === '#blogs-and-newsletters' || hash === '#newsletters') {
        setCurrentPage('blogs');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToWhyEsperia = () => {
    window.location.hash = '#why-esperia';
    setCurrentPage('why-esperia');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToWhatWeDo = () => {
    window.location.hash = '#what-we-do';
    setCurrentPage('what-we-do');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToContact = () => {
    window.location.hash = '#contact-us';
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToWorks = () => {
    window.location.hash = '#our-works';
    setCurrentPage('works');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToWatermelon = () => {
    window.location.hash = '#watermelon';
    setCurrentPage('watermelon');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToBlogs = () => {
    window.location.hash = '#blogs';
    setCurrentPage('blogs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = (sectionId?: string) => {
    if (sectionId === 'why-esperia') {
      navigateToWhyEsperia();
      return;
    }
    if (sectionId === 'blogs' || sectionId === 'newsletters') {
      navigateToBlogs();
      return;
    }
    setCurrentPage('home');
    if (sectionId) {
      window.location.hash = `#${sectionId}`;
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {currentPage === 'why-esperia' ? (
        <WhyEsperiaPage
          onNavigateToHome={navigateToHome}
          onNavigateToWorks={navigateToWorks}
          onNavigateToContact={navigateToContact}
          onNavigateToWhatWeDo={navigateToWhatWeDo}
          onNavigateToBlogs={navigateToBlogs}
        />
      ) : currentPage === 'blogs' ? (
        <BlogsPage
          onNavigateToHome={navigateToHome}
          onNavigateToWorks={navigateToWorks}
          onNavigateToContact={navigateToContact}
          onNavigateToWhatWeDo={navigateToWhatWeDo}
          onNavigateToWhyEsperia={navigateToWhyEsperia}
        />
      ) : currentPage === 'what-we-do' ? (
        <WhatWeDoPage
          onNavigateToHome={navigateToHome}
          onNavigateToWorks={navigateToWorks}
          onNavigateToContact={navigateToContact}
          onNavigateToBlogs={navigateToBlogs}
          onNavigateToWhyEsperia={navigateToWhyEsperia}
        />
      ) : currentPage === 'contact' ? (
        <ContactPage
          onNavigateToHome={navigateToHome}
          onNavigateToWorks={navigateToWorks}
          onNavigateToWhatWeDo={navigateToWhatWeDo}
          onNavigateToBlogs={navigateToBlogs}
          onNavigateToWhyEsperia={navigateToWhyEsperia}
        />
      ) : currentPage === 'works' ? (
        <OurWorksPage
          onNavigateToHome={navigateToHome}
          onNavigateToContact={navigateToContact}
          onNavigateToWhatWeDo={navigateToWhatWeDo}
          onNavigateToBlogs={navigateToBlogs}
          onNavigateToWhyEsperia={navigateToWhyEsperia}
          onViewWatermelon={navigateToWatermelon}
        />
      ) : currentPage === 'watermelon' ? (
        <WatermelonDetailPage
          onBack={navigateToWorks}
          onNavigateToHome={navigateToHome}
          onNavigateToContact={navigateToContact}
          onNavigateToWhatWeDo={navigateToWhatWeDo}
          onNavigateToBlogs={navigateToBlogs}
          onNavigateToWhyEsperia={navigateToWhyEsperia}
        />
      ) : (
        <LandingPage
          onNavigateToHome={navigateToHome}
          onNavigateToContact={navigateToContact}
          onNavigateToWorks={navigateToWorks}
          onNavigateToWhatWeDo={navigateToWhatWeDo}
          onNavigateToBlogs={navigateToBlogs}
          onNavigateToWhyEsperia={navigateToWhyEsperia}
        />
      )}
    </>
  );
}
