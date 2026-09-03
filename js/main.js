// === DATA ===
// Add your gallery images here.
// Put images in assets/images/ and reference them in the 'img' field.
// If 'img' is empty, a seeded placeholder photo is used (replace with the real workshop photo).

const galleryData = [
  {
    date: '2026-09-01',
    month: '2026-09',
    day: 'day1',
    title: 'G-Force logo concepts',
    desc: 'Ink and marker explorations of the G-Force mark and wordmark.',
    img: 'images/gforce-logo-concepts.jpg'
  },
  {
    date: '2026-09-01',
    month: '2026-09',
    day: 'day1',
    title: 'Hull design sketches',
    desc: 'Concept sketches of the hull profile and planing forms.',
    img: 'images/hull-design-sketches.jpg'
  },
  {
    date: '2026-09-01',
    month: '2026-09',
    day: 'day1',
    title: 'Hull and propulsion sketches',
    desc: 'Concept sheet for the hull form, throttle propeller, and motor layout.',
    img: 'images/hull-propulsion-sketches.jpg'
  },
  {
    date: '2026-09-01',
    month: '2026-09',
    day: 'day1',
    title: 'Throttle and servo sketch',
    desc: 'Detail sketch of the throttle propeller and servo linkage for the control system.',
    img: 'images/throttle-servo-sketch.jpg'
  },
  {
    date: '2026-09-01',
    month: '2026-09',
    day: 'day1',
    title: 'CAD in Fusion 360',
    desc: 'Modelling the hull in Fusion 360 on the shop laptop.',
    img: 'images/fusion-cad-laptop.jpg'
  },
  {
    date: '2026-09-01',
    month: '2026-09',
    day: 'day1',
    title: 'Team working session',
    desc: 'The team running through design and planning at a project meetup.',
    img: 'images/team-working-session.jpg'
  },
  {
    date: '2026-09-01',
    month: '2026-09',
    day: 'day1',
    title: 'Team at the event',
    desc: 'G-Force at the Fontys engineering event, laptops out and ready to build.',
    img: 'images/team-meetup.jpg'
  },
  {
    date: '2026-09-02',
    day: 'day2',
    title: 'Plate technical drawing',
    desc: 'Dimensioned technical drawing of the hovercraft plate.',
    img: 'images/plate-technical-drawing.png'
  },
  {
    date: '2026-09-02',
    day: 'day2',
    title: 'CAD assembly drawing',
    desc: 'Isometric CAD assembly of the motor and plate components.',
    img: 'images/cad-assembly-drawing.jpg'
  },
  {
    date: '2026-09-02',
    day: 'day2',
    title: 'Workshop setup',
    desc: 'Setting up the cutting and assembly bench at the workshop.',
    img: 'images/workshop-team-setup.png'
  },
  {
    date: '2026-09-02',
    day: 'day2',
    title: 'Fusion 3D plate model',
    desc: 'Modelling the chassis plates in Autodesk Fusion 360.',
    img: 'images/fusion-plate-model.png'
  },
  {
    date: '2026-09-02',
    day: 'day2',
    title: 'Cutting the material',
    desc: 'Cutting the composite plate material to the deck profile.',
    img: 'images/material-cutting.png'
  },
  {
    date: '2026-09-02',
    day: 'day2',
    title: 'Why technical drawings?',
    desc: 'A presentation on the value of accurate technical drawings.',
    img: 'images/technical-drawings-presentation.png'
  },
  {
    date: '2026-09-02',
    day: 'day2',
    title: 'Cutting progress',
    desc: 'Trimming the plate material against the template profile.',
    img: 'images/material-cutting-overhead.png'
  },
  {
    date: '2026-09-02',
    day: 'day2',
    title: 'Heat forming the plate',
    desc: 'Shaping the plate section over the deck template.',
    img: 'images/heat-forming-white-shirt.png'
  },
  {
    date: '2026-09-02',
    day: 'day2',
    title: 'Shaping the foam core',
    desc: 'Using the hot-wire tool to cut the plate core.',
    img: 'images/heat-forming-blue-jeans.png'
  },
  {
    date: '2026-09-02',
    day: 'day2',
    title: 'Finished plate piece',
    desc: 'The finished plate piece, cut and shaped to the template.',
    img: 'images/finished-plate-piece.png'
  },
  {
    date: '2026-09-02',
    day: 'day2',
    title: 'Test plan',
    desc: 'Testing goals for stability, speed, and identifying loose parts.',
    img: 'images/test-plan-1.png'
  },
  {
    date: '2026-09-02',
    day: 'day2',
    title: 'Test plan: turning',
    desc: 'Goal of controlling turns; testing flap count and length.',
    img: 'images/test-plan-2.png'
  },
  {
    date: '2026-09-02',
    day: 'day2',
    title: 'Assembling the deck',
    desc: 'Fitting the deck and plate components together at the bench.',
    img: 'images/progress-assembling-part.png'
  },
  {
    date: '2026-09-02',
    day: 'day2',
    title: 'Bonding the plate',
    desc: 'Aligning the plate and motor mount during assembly.',
    img: 'images/progress-assembling-piece.png'
  },
  {
    date: '2026-09-02',
    day: 'day2',
    title: 'Steering mechanism sketch',
    desc: 'Pencil sketch of the steering mechanism with testing notes.',
    img: 'images/steering-mechanism-sketch.png'
  },
  {
    date: '2026-09-02',
    day: 'day2',
    title: 'Plate cutout',
    desc: 'The deck plate cutout before bonding.',
    img: 'images/progress-plate-cutout.png'
  },
  {
    date: '2026-09-02',
    day: 'day2',
    title: 'Bonding with hot glue',
    desc: 'Applying hot glue to bond the plate section in place.',
    img: 'images/progress-gluing.png'
  },
  {
    date: '2026-09-02',
    day: 'day2',
    title: 'Hovercraft design',
    desc: 'Nearly final hovercraft design with prop and power system fitted.',
    img: 'images/final-design.png'
  },
  {
    date: '2026-09-03',
    day: 'day3',
    title: 'Assembly',
    desc: 'Fitting the deck, suspension and steering together on the bench.',
    img: 'images/day3-2.png'
  },
  {
    date: '2026-09-03',
    day: 'day3',
    title: 'Steering & wiring',
    desc: 'Working on the steering mechanism and the electrical system.',
    img: 'images/day3-3.png'
  },
  {
    date: '2026-09-03',
    day: 'day3',
    title: 'Ready for a test run',
    desc: 'The hovercraft standing on its skirt, ready for the first test run.',
    img: 'images/day3-1.png'
  },
  {
    date: '2026-09-03',
    day: 'day3',
    title: 'Test run on the floor',
    desc: 'Running the hovercraft through the test cones.',
    img: 'images/day3-5.png'
  },
  {
    date: '2026-09-03',
    day: 'day3',
    title: 'Electronics check',
    desc: 'Close-up on the servo and control wiring.',
    img: 'images/day3-6.png'
  }
];

const reduceMotion =
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// === RENDER GALLERY ===
function renderGallery(filter = 'day2') {
  const grid = document.getElementById('galleryGrid');
  const filtered = galleryData.filter(item => item.day === filter);

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-results">No photos for this day yet.</div>';
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <article class="gallery-item reveal">
      <a class="gallery-item-image" href="${item.img}" data-full="${item.img}" data-title="${item.title}" data-desc="${item.desc}" aria-label="View larger photo: ${item.title}">
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
    weekday: 'long',
    day: 'numeric',
    month: 'long',
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
  const sections = Object.keys(navLinkBySection)
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

  const buttons = container.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderFn(btn.dataset.filter);
    });
  });
}

// === LIGHTBOX ===
function openLightbox(src, title, desc) {
  const box = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImage');
  const cap = document.getElementById('lightboxCaption');
  img.src = src;
  img.alt = title;
  cap.innerHTML = `<strong>${title}</strong>` + (desc ? ` <span>${desc}</span>` : '');
  box.classList.add('open');
  box.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.getElementById('lightboxClose').focus();
}

function closeLightbox() {
  const box = document.getElementById('lightbox');
  box.classList.remove('open');
  box.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  const img = document.getElementById('lightboxImage');
  img.removeAttribute('src');
  img.removeAttribute('alt');
}

function initLightbox() {
  const grid = document.getElementById('galleryGrid');
  const box = document.getElementById('lightbox');
  if (!grid || !box) return;

  let lastFocused = null;

  grid.addEventListener('click', (e) => {
    const link = e.target.closest('.gallery-item-image');
    if (!link) return;
    e.preventDefault();
    lastFocused = document.activeElement;
    openLightbox(link.dataset.full, link.dataset.title, link.dataset.desc);
  });

  document.getElementById('lightboxClose').addEventListener('click', (e) => {
    e.stopPropagation();
    closeLightbox();
    if (lastFocused && lastFocused.focus) lastFocused.focus();
    lastFocused = null;
  });

  box.addEventListener('click', (e) => {
    if (e.target !== box) return;
    closeLightbox();
    if (lastFocused && lastFocused.focus) lastFocused.focus();
    lastFocused = null;
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || !box.classList.contains('open')) return;
    closeLightbox();
    if (lastFocused && lastFocused.focus) lastFocused.focus();
    lastFocused = null;
  });
}

// === TIMELINE ===
function initTimeline() {
  const tl = document.getElementById('timeline');
  if (!tl) return;

  tl.addEventListener('click', (e) => {
    const btn = e.target.closest('.tl-link');
    if (!btn) return;
    const day = btn.dataset.day;
    if (day) renderGallery(day);
    const target = document.querySelector(btn.dataset.target || '#gallery');
    const filterBtn = document.querySelector('.filter-btn[data-filter="' + day + '"]');
    if (filterBtn) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      filterBtn.classList.add('active');
    }
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// === TECHNICAL POSTER (modal) ===
function initPoster() {
  const btn = document.querySelector('.poster-btn');
  const modal = document.getElementById('posterModal');
  const img = document.getElementById('posterImage');
  if (!btn || !modal || !img) return;

  let lastFocused = null;
  const open = () => {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const first = modal.querySelector('.poster-close');
    if (first) first.focus();
  };
  const close = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused && lastFocused.focus) lastFocused.focus();
    lastFocused = null;
  };

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    lastFocused = document.activeElement;
    open();
  });

  modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', close));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) close();
  });
}

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
  renderGallery();
  initNav();
  initFilters('galleryFilters', renderGallery);
  initLightbox();
  initTimeline();
  initPoster();
  observeRevealElements();
});
