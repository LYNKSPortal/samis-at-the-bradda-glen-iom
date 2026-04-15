'use client';

import { useEffect } from 'react';

export default function ScrollFade() {
  useEffect(() => {
    const checkVisibility = (element: Element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // More generous check - show if any part is in viewport
      return rect.top < windowHeight && rect.bottom > 0;
    };

    // Create observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    // Run immediately
    const init = () => {
      const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button, img, svg, li, label, input, textarea, span, div.bg-gray-50, div.bg-white, div.bg-primary, div.bg-accent, div[class*="grid"], div[class*="flex"]');
      
      elements.forEach((el) => {
        // Skip footer images - they should always be visible
        if (el.tagName === 'IMG' && el.closest('footer')) {
          return;
        }
        
        el.classList.add('scroll-fade');
        
        // Force visible if in viewport
        if (checkVisibility(el)) {
          // Use requestAnimationFrame to ensure it's applied
          requestAnimationFrame(() => {
            el.classList.add('visible');
          });
        }
        
        observer.observe(el);
      });
    };

    // Run immediately and also after a short delay
    init();
    setTimeout(init, 100);

    return () => {
      const elements = document.querySelectorAll('.scroll-fade');
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}
