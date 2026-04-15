'use client';

import { useEffect } from 'react';

export default function FadeInOnScroll() {
  useEffect(() => {
    // Add CSS class to all elements
    const addFadeClass = () => {
      // Get ALL elements in main, nav, and footer
      const allElements = document.querySelectorAll('main *, nav *, footer *');
      
      allElements.forEach((el) => {
        // Only add to elements that have direct text or are images/buttons
        const tagName = el.tagName.toLowerCase();
        if (
          tagName === 'h1' || tagName === 'h2' || tagName === 'h3' || 
          tagName === 'h4' || tagName === 'h5' || tagName === 'h6' ||
          tagName === 'p' || tagName === 'a' || tagName === 'button' ||
          tagName === 'img' || tagName === 'li' || tagName === 'span' ||
          el.classList.contains('card') || el.classList.contains('bg-primary') ||
          el.classList.contains('bg-accent') || el.classList.contains('bg-white')
        ) {
          el.classList.add('fade-element');
        }
      });

      // Check which elements are in viewport on load
      checkVisibility();
    };

    const checkVisibility = () => {
      const elements = document.querySelectorAll('.fade-element');
      let visibleCount = 0;
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 0;
        
        if (isVisible && !el.classList.contains('is-visible')) {
          el.classList.add('is-visible');
          visibleCount++;
        }
      });
      
      if (visibleCount > 0) {
        console.log('FadeInOnScroll: Made', visibleCount, 'elements visible');
      }
    };

    // Observer for scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Initialize
    setTimeout(() => {
      console.log('FadeInOnScroll: Starting...');
      addFadeClass();
      
      const fadeElements = document.querySelectorAll('.fade-element');
      console.log('FadeInOnScroll: Found', fadeElements.length, 'elements to fade');
      fadeElements.forEach((el) => observer.observe(el));
    }, 500);

    // Check on scroll
    window.addEventListener('scroll', checkVisibility);

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      const fadeElements = document.querySelectorAll('.fade-element');
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}
