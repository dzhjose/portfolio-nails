export function initReveal() {
  const elements = document.querySelectorAll("[data-reveal]:not([data-revealed])");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;

          const delay = el.dataset.revealDelay || 0;

          setTimeout(() => {
            el.classList.remove("opacity-0", "translate-y-6");
            el.classList.add("opacity-100", "translate-y-0");
          }, delay);

          el.setAttribute("data-revealed", "true");
          obs.unobserve(el);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((el) => {
    observer.observe(el);
  });
}
