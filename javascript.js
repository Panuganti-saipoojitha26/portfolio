document.addEventListener('DOMContentLoaded', () => {
  const fadeEls = document.querySelectorAll('.fade-in');

  if (fadeEls.length === 0) {
    // nothing to animate (maybe class missing) — nothing to do
    return;
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeEls.forEach(el => observer.observe(el));
  } else {
    // fallback for older browsers: reveal immediately
    fadeEls.forEach(el => el.classList.add('animate'));
  }
});
