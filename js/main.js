// ==========================================================================
// G-FORCE — JAVASCRIPT LOGIC
// Minimal vanilla JS for expandable drawers, log filtering, and lightbox.
// ==========================================================================

const galleryData = [
  {
    id: 1,
    date: '2026-08-16',
    month: '2026-08',
    title: 'Logo Vector Concepts',
    desc: 'Propeller mark and typography explorations for the G-Force identity.',
    img: 'images/gforce-logo-concepts.jpg'
  },
  {
    id: 2,
    date: '2026-08-17',
    month: '2026-08',
    title: 'Hull Profile & Deadrise Sketches',
    desc: 'Hydrodynamic and aerodynamic draft profiles exploring planing deadrise.',
    img: 'images/hull-design-sketches.jpg'
  },
  {
    id: 3,
    date: '2026-08-18',
    month: '2026-08',
    title: 'Integrated Powertrain Layout',
    desc: 'Schematic for the lift plenum inlet and horizontal thrust duct.',
    img: 'images/hull-propulsion-sketches.jpg'
  },
  {
    id: 4,
    date: '2026-08-18',
    month: '2026-08',
    title: 'Throttle & Rudder Linkage',
    desc: 'Detail sketch of the twin rudder deflection mechanism and servo linkage.',
    img: 'images/throttle-servo-sketch.jpg'
  },
  {
    id: 5,
    date: '2026-09-01',
    month: '2026-09',
    title: 'Parametric Hull in Fusion 360',
    desc: 'Digital 3D CAD modeling of the deck, internal bulkheads, and cowlings.',
    img: 'images/fusion-cad-laptop.jpg'
  },
  {
    id: 6,
    date: '2026-09-02',
    month: '2026-09',
    title: 'Architecture Working Session',
    desc: 'Team meeting reviewing assembly tolerances, mass budgets, and fabrication steps.',
    img: 'images/team-working-session.jpg'
  },
  {
    id: 7,
    date: '2026-09-02',
    month: '2026-09',
    title: 'Project Inception & Planning',
    desc: 'Workshop kickoff aligning on design constraints and fabrication milestones.',
    img: 'images/team-meetup.jpg'
  }
];

let currentLightboxIndex = 0;
let filteredItems = [...galleryData];

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

// Render build logs
function renderLogs(filter = 'all') {
  const grid = document.getElementById('logGrid');
  if (!grid) return;

  filteredItems = filter === 'all'
    ? galleryData
    : galleryData.filter(item => item.month === filter);

  if (filteredItems.length === 0) {
    grid.innerHTML = '<p class="mono" style="color: var(--muted); padding: 1rem 0;">No logs found for this period.</p>';
    return;
  }

  grid.innerHTML = filteredItems.map((item, idx) => `
    <article class="log-item" data-index="${idx}" tabindex="0" role="button" aria-label="View ${item.title}">
      <div class="log-thumb">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
      </div>
      <div class="log-details">
        <span class="log-date mono">${formatDate(item.date)}</span>
        <h3 class="log-title">${item.title}</h3>
        <p class="log-desc">${item.desc}</p>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.log-item').forEach(el => {
    el.addEventListener('click', () => {
      openLightbox(parseInt(el.dataset.index, 10));
    });
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(parseInt(el.dataset.index, 10));
      }
    });
  });
}

// Subsystem Drawer toggles
function initDrawers() {
  const buttons = document.querySelectorAll('.toggle-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('aria-controls');
      const drawer = document.getElementById(targetId);
      if (!drawer) return;

      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      drawer.classList.toggle('open', !expanded);
    });
  });
}

// Filter buttons
function initFilters() {
  const container = document.getElementById('logFilters');
  if (!container) return;

  container.addEventListener('click', (e) => {
    const pill = e.target.closest('.pill');
    if (!pill) return;

    container.querySelectorAll('.pill').forEach(p => {
      p.classList.remove('active');
      p.setAttribute('aria-selected', 'false');
    });

    pill.classList.add('active');
    pill.setAttribute('aria-selected', 'true');
    renderLogs(pill.dataset.filter);
  });
}

// Lightbox logic
const modal = document.getElementById('lightboxModal');
const modalBackdrop = document.getElementById('lightboxBackdrop');
const modalClose = document.getElementById('lightboxClose');
const modalImg = document.getElementById('lightboxImg');
const modalTitle = document.getElementById('lightboxTitle');
const modalDate = document.getElementById('lightboxDate');
const modalDesc = document.getElementById('lightboxDesc');
const modalCounter = document.getElementById('lightboxCounter');
const modalPrev = document.getElementById('lightboxPrev');
const modalNext = document.getElementById('lightboxNext');

function openLightbox(index) {
  if (!modal || index < 0 || index >= filteredItems.length) return;
  currentLightboxIndex = index;
  updateLightbox();
  modal.showModal();
}

function updateLightbox() {
  const item = filteredItems[currentLightboxIndex];
  if (!item) return;

  modalImg.src = item.img;
  modalImg.alt = item.title;
  modalTitle.textContent = item.title;
  modalDate.textContent = formatDate(item.date);
  modalDesc.textContent = item.desc;
  modalCounter.textContent = `${currentLightboxIndex + 1} / ${filteredItems.length}`;
}

function closeLightbox() {
  if (modal && modal.open) modal.close();
}

function prevLightbox() {
  currentLightboxIndex = (currentLightboxIndex > 0) ? currentLightboxIndex - 1 : filteredItems.length - 1;
  updateLightbox();
}

function nextLightbox() {
  currentLightboxIndex = (currentLightboxIndex < filteredItems.length - 1) ? currentLightboxIndex + 1 : 0;
  updateLightbox();
}

document.addEventListener('DOMContentLoaded', () => {
  renderLogs();
  initDrawers();
  initFilters();

  if (modal) {
    if (modalClose) modalClose.addEventListener('click', closeLightbox);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeLightbox);
    if (modalPrev) modalPrev.addEventListener('click', prevLightbox);
    if (modalNext) modalNext.addEventListener('click', nextLightbox);

    window.addEventListener('keydown', (e) => {
      if (!modal.open) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
    });
  }
});
