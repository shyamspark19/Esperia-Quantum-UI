import React, { useState, useEffect } from 'react';
import EsperiaLanding from './UI';
import ContactPage from './ContactPage';
import OurWorksPage from './OurWorksPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact' | 'works'>(() => {
    const hash = window.location.hash;
    if (hash === '#contact-us' || hash === '#contact') return 'contact';
    if (hash === '#our-works' || hash === '#works') return 'works';
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#contact-us' || hash === '#contact') {
        setCurrentPage('contact');
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
      {currentPage === 'contact' ? (
        <ContactPage onNavigateToHome={navigateToHome} onNavigateToWorks={navigateToWorks} />
      ) : currentPage === 'works' ? (
        <OurWorksPage onNavigateToHome={navigateToHome} onNavigateToContact={navigateToContact} />
      ) : (
        <EsperiaLanding
          onNavigateToContact={navigateToContact}
          onNavigateToWorks={navigateToWorks}
        />
      )}
    </>
  );
}
