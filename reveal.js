(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('nav');
    if (nav) {
      var onScroll = function () {
        nav.classList.toggle('nav-scrolled', window.scrollY > 8);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    if (reduceMotion) return;

    var selectors = [
      'section',
      '.project-card',
      '.about-block',
      '.about-list-item',
      '.card',
      '.contact-card'
    ];
    var targets = document.querySelectorAll(selectors.join(','));
    if (!targets.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(function (el) {
      el.classList.add('reveal');
      observer.observe(el);
    });
  });
})();
