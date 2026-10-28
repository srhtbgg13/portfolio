document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggleBtn || !navLinks) return;
  toggleBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const EMAIL_TUJUAN = 'sarahtng13@gmail.com';
  const form = document.getElementById('contact-form');
  const note = document.getElementById('form-note');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();

    const subject = encodeURIComponent(`Message from Portfolio — ${name}`);
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);

    window.location.href = `mailto:${EMAIL_TUJUAN}?subject=${subject}&body=${body}`;

    if (note) {
      note.textContent = 'Opening your email app...';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const photo = document.getElementById('profile-photo');
  const fallback = document.getElementById('photo-fallback');
  if (!photo || !fallback) return;

  const showFallback = () => {
    photo.style.display = 'none';
    fallback.style.display = 'flex';
  };

  fallback.style.display = 'none';
  photo.addEventListener('error', showFallback);
  if (photo.complete && photo.naturalWidth === 0) showFallback();
});

document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  if (!('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach((el) => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.work-thumb img').forEach((img) => {
    const thumb = img.closest('.work-thumb');
    const fail = () => thumb.classList.add('no-img');
    img.addEventListener('error', fail);
    if (img.complete && img.naturalWidth === 0) fail();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.doc-link').forEach((link) => {
    const href = (link.getAttribute('href') || '').trim();
    if (href && href !== '#') return;
    link.hidden = true;
    const foot = link.closest('.exp-foot');
    if (foot && !foot.querySelector('.exp-tags')) foot.hidden = true;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.work-toggle').forEach((btn) => {
    const card = btn.closest('.work-card');
    const label = btn.querySelector('.work-toggle-label');
    if (!card) return;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const open = card.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (label) label.textContent = open ? 'Show less' : 'Show details';
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggleBtn || !navLinks) return;

  const closeMenu = () => {
    navLinks.classList.remove('is-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

  document.addEventListener('click', (e) => {
    if (!navLinks.classList.contains('is-open')) return;
    if (navLinks.contains(e.target) || toggleBtn.contains(e.target)) return;
    closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
  });
});