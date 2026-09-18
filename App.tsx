import React, { useState, useEffect } from 'react';
import EsperiaLanding from './UI';
import ContactPage from './ContactPage';
import OurWorksPage from './OurWorksPage';
import WatermelonDetailPage from './WatermelonDetailPage';
import WhatWeDoPage from './WhatWeDoPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact' | 'works' | 'watermelon' | 'what-we-do'>(() => {
    const hash = window.location.hash;
    if (hash === '#what-we-do' || hash === '#services') return 'what-we-do';
    if (hash === '#contact-us' || hash === '#contact') return 'contact';
    if (hash === '#watermelon' || hash === '#our-works/watermelon') return 'watermelon';
    if (hash === '#our-works' || hash === '#works') return 'works';
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#what-we-do' || hash === '#services') {
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
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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

  const navigateToHome = (sectionId?: string) => {
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
      {currentPage === 'what-we-do' ? (
        <WhatWeDoPage
          onNavigateToHome={navigateToHome}
          onNavigateToWorks={navigateToWorks}
          onNavigateToContact={navigateToContact}
        />
      ) : currentPage === 'contact' ? (
        <ContactPage
          onNavigateToHome={navigateToHome}
          onNavigateToWorks={navigateToWorks}
          onNavigateToWhatWeDo={navigateToWhatWeDo}
        />
      ) : currentPage === 'works' ? (
        <OurWorksPage
          onNavigateToHome={navigateToHome}
          onNavigateToContact={navigateToContact}
          onNavigateToWhatWeDo={navigateToWhatWeDo}
          onViewWatermelon={navigateToWatermelon}
        />
      ) : currentPage === 'watermelon' ? (
        <WatermelonDetailPage
          onBack={navigateToWorks}
          onNavigateToHome={navigateToHome}
          onNavigateToContact={navigateToContact}
          onNavigateToWhatWeDo={navigateToWhatWeDo}
        />
      ) : (
        <EsperiaLanding
          onNavigateToContact={navigateToContact}
          onNavigateToWorks={navigateToWorks}
          onNavigateToWhatWeDo={navigateToWhatWeDo}
        />
      )}
    </>
  );
}

