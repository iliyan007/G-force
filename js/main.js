// === DATA ===
// Add your gallery images here.
// Put images in assets/images/ and reference them in the 'img' field.
// If 'img' is empty, a seeded placeholder photo is used (replace with the real workshop photo).

const galleryData = [
  {
    date: '2026-08-16',
    month: '2026-08',
    title: 'G-Force logo concepts',
    desc: 'Ink and marker explorations of the G-Force mark and wordmark.',
    img: 'images/gforce-logo-concepts.jpg'
  },
  {
    date: '2026-08-17',
    month: '2026-08',
    title: 'Hull design sketches',
    desc: 'Concept sketches of the hull profile and planing forms.',
    img: 'images/hull-design-sketches.jpg'
  },
  {
    date: '2026-08-18',
    month: '2026-08',
    title: 'Hull and propulsion sketches',
    desc: 'Concept sheet for the hull form, throttle propeller, and motor layout.',
    img: 'images/hull-propulsion-sketches.jpg'
  },
  {
    date: '2026-08-18',
    month: '2026-08',
    title: 'Throttle and servo sketch',
    desc: 'Detail sketch of the throttle propeller and servo linkage for the control system.',
    img: 'images/throttle-servo-sketch.jpg'
  },
  {
    date: '2026-09-01',
    month: '2026-09',
    title: 'CAD in Fusion 360',
    desc: 'Modelling the hull in Fusion 360 on the shop laptop.',
    img: 'images/fusion-cad-laptop.jpg'
  },
  {
    date: '2026-09-02',
    month: '2026-09',
    title: 'Team working session',
    desc: 'The team running through design and planning at a project meetup.',
    img: 'images/team-working-session.jpg'
  },
  {
    date: '2026-09-02',
    month: '2026-09',
    title: 'Team at the event',
    desc: 'G-Force at the Fontys engineering event, laptops out and ready to build.',
    img: 'images/team-meetup.jpg'
  }
];

const reduceMotion =
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// === RENDER GALLERY ===
function renderGallery(filter = 'all') {
  const grid = document.getElementById('galleryGrid');
  const filtered = filter === 'all'
    ? galleryData
    : galleryData.filter(item => item.month === filter);

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-results">No gallery items for this period yet.</div>';
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <article class="gallery-item reveal">
      <a class="gallery-item-image" href="${item.img}" target="_blank" rel="noopener" aria-label="View larger photo: ${item.title}">
        <img src="${item.img}" alt="${item.title}" loading="lazy" onerror="this.closest('.gallery-item-image').classList.add('img-missing')" />
      </a>
      <div class="gallery-item-info">
        <div class="gallery-item-date">${formatDate(item.date)}</div>
        <div class="gallery-item-title">${item.title}</div>
        <div class="gallery-item-desc">${item.desc}</div>
      </div>
    </article>
  `).join('');

  observeRevealElements();
}

// === HELPERS ===
function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

// === SCROLL REVEAL ===
function observeRevealElements() {
  const els = document.querySelectorAll('.reveal:not(.visible)');

  if (reduceMotion) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(el => observer.observe(el));
}

// === NAVIGATION ===
function initNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Active link detection via IntersectionObserver (no scroll listeners)
  const navLinkBySection = {};
  links.querySelectorAll('a[href^="#"]').forEach(a => {
    navLinkBySection[a.getAttribute('href').slice(1)] = a;
  });
  const sections = Array.from(navLinkBySection.keys())
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const link = navLinkBySection[entry.target.id];
      if (!link) return;
      links.querySelectorAll('a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));
}

// === FILTERS ===
function initFilters(containerId, renderFn) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.addEventListener('click', (e) => {
    if (!e.target.classList.contains('filter-btn')) return;
    container.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    renderFn(e.target.dataset.filter);
  });
}

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
  renderGallery();
  initNav();
  initFilters('galleryFilters', renderGallery);
  observeRevealElements();
});
