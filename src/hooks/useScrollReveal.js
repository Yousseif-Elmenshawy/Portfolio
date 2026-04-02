import { useEffect } from "react";

/**
 * useScrollReveal
 * Attaches an IntersectionObserver to every element that has the
 * `data-reveal` attribute. When the element enters the viewport it
 * receives the class `revealed`, which triggers the CSS animation
 * defined in App.scss.
 *
 * Supports stagger via `data-reveal-delay="200"` (ms).
 *
 * @param {string}  selector  - CSS selector (default: "[data-reveal]")
 * @param {number}  threshold - 0-1 how much of the element must be visible
 */
export default function useScrollReveal(
  selector = "[data-reveal]",
  threshold = 0.15,
) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.revealDelay || 0;
            // Apply stagger delay before the CSS transition fires
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add("revealed");
            // Once revealed we no longer need to watch it
            observer.unobserve(el);
          }
        });
      },
      { threshold },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, threshold]);
}
