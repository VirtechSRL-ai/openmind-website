(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Sequenza chat nell'hero ---------- */
  var user = document.querySelector('[data-step="1"]');
  var status = document.querySelector('[data-step="2"]');
  var answer = document.querySelector('[data-step="3"]');
  var statusText = document.querySelector('.status-text');

  function finishChat() {
    if (user) user.classList.add('shown');
    if (answer) answer.classList.add('shown');
    if (status) status.classList.add('done');
  }

  if (reduced || !('IntersectionObserver' in window)) {
    finishChat();
  } else if (user && status && answer && statusText) {
    var states = [];
    try { states = JSON.parse(statusText.getAttribute('data-states')) || []; } catch (e) {}

    var chatSeen = false;
    var chatObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting || chatSeen) return;
        chatSeen = true;
        chatObserver.disconnect();

        setTimeout(function () { user.classList.add('shown'); }, 500);
        setTimeout(function () { status.classList.add('shown'); }, 1200);

        states.forEach(function (label, i) {
          setTimeout(function () { statusText.textContent = label; }, 1200 + i * 900);
        });

        setTimeout(function () {
          status.classList.add('done');
          answer.classList.add('shown');
        }, 1200 + states.length * 900);
      });
    }, { threshold: 0.4 });

    chatObserver.observe(document.querySelector('.chat-card'));
  }

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');

  if (reduced || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
    return;
  }

  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });

  reveals.forEach(function (el, i) {
    el.style.transitionDelay = (i % 3) * 70 + 'ms';
    revealObserver.observe(el);
  });

  /* Rete di sicurezza: deep link, scroll programmatici, iframe.
     Se un elemento è in viewport ma l'observer non è scattato, rivelalo. */
  function revealVisible() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    reveals.forEach(function (el) {
      if (el.classList.contains('in')) return;
      var r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) {
        el.classList.add('in');
        revealObserver.unobserve(el);
      }
    });
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { revealVisible(); ticking = false; });
  }, { passive: true });

  window.addEventListener('hashchange', function () { setTimeout(revealVisible, 400); });
  setTimeout(revealVisible, 300);
  setTimeout(revealVisible, 1500);
})();
