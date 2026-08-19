// Scroll reveal — progressive enhancement only.
// Content is fully visible without JS; styles.css only hides
// [data-reveal] elements when <html class="js"> is present.
(function () {
  var els = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  els.forEach(function (el) { io.observe(el); });
})();
