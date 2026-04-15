'use client';

import { useEffect, useState } from 'react';

export default function ScrollFadeIn() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Delay to ensure DOM is fully loaded
    const timer = setTimeout(() => {
      // Target ONLY individual elements, not containers
      const elements = document.querySelectorAll(
        `h1, 
         h2, 
         h3, 
         h4, 
         h5, 
         h6, 
         p, 
         a, 
         button, 
         img, 
         input, 
         textarea, 
         label,
         li,
         .card,
         form > div,
         div[class*="grid"] > div,
         div[class*="flex"]`
      );

      console.log('Total elements found:', elements.length);

      elements.forEach((element) => {
        element.classList.add('fade-in-scroll');
      });

      // Intersection Observer to trigger fade-in on scroll
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in-visible');
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      // Observe all fade-in elements
      const fadeElements = document.querySelectorAll('.fade-in-scroll');
      fadeElements.forEach((el, index) => {
        observer.observe(el);
        
        // Check if element is already in viewport on page load
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInViewport) {
          // Add a staggered delay for elements already visible
          // Shorter delay for elements at the top (like nav)
          const delay = index * 50 + 150;
          setTimeout(() => {
            el.classList.add('fade-in-visible');
          }, delay);
        }
      });
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, [mounted]);

  return null;
}
