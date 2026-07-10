(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('nav');
    if (nav) {
      var onScroll = function () {
        nav.classList.toggle('nav-scrolled', window.scrollY > 8);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }
  });
})();
