import { useEffect, useRef } from 'react';

export function useAnimations() {
  const observerRef = useRef(null);
  const nutrientObserverRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current.observe(el);
    });

    nutrientObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target;
            const valueEl = card.querySelector('.nutrient-value');
            const barFill = card.querySelector('.nutrient-bar-fill');
            const target = parseInt(valueEl.dataset.target);
            const suffix = valueEl.textContent.includes('%') ? '%' : 'g';

            if (barFill) {
              barFill.style.width = barFill.dataset.width;
            }

            if (!isNaN(target)) {
              let current = 0;
              const increment = target / 40;
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                valueEl.textContent = Math.round(current) + suffix;
              }, 30);
            }
            nutrientObserverRef.current.unobserve(card);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('.nutrient-card').forEach((el) => {
      nutrientObserverRef.current.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
      nutrientObserverRef.current?.disconnect();
    };
  }, []);

  // Re-observe when new elements appear (e.g. menu cards)
  const reobserve = () => {
    document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
      observerRef.current?.observe(el);
    });
  };

  return { reobserve };
}
