const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');
const chapters = [...document.querySelectorAll('[data-chapter]')];
const chapterLinks = [...document.querySelectorAll('.section-nav a')];
const mainLinks = [...menu.querySelectorAll('a')];
const progress = document.querySelector('.reading-progress > span');

function menuLabel(open) {
  return document.documentElement.lang === 'en'
    ? (open ? 'Close menu' : 'Open menu')
    : (open ? 'Tutup menu' : 'Buka menu');
}

function closeMenu(returnFocus = false) {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', menuLabel(false));
  menu.classList.remove('is-open');
  if (returnFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', menuLabel(open));
  menu.classList.toggle('is-open', open);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) closeMenu();
});
document.addEventListener('focusin', (event) => {
  if (!event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(min-width: 961px)').addEventListener('change', () => closeMenu());
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      // Keep keyboard focus with the reading position after anchor navigation.
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  });
});
let scheduled = false;
function updateActiveChapter() {
  const headerHeight = document.querySelector('.site-header').getBoundingClientRect().height;
  const readingLine = headerHeight + (window.innerHeight - headerHeight) * .35;
  const active = chapters.find((chapter) => {
    const rect = chapter.getBoundingClientRect();
    return rect.top <= readingLine && rect.bottom > readingLine;
  }) || chapters[0];
  const id = '#' + active.id;
  [...chapterLinks, ...mainLinks].forEach((link) => {
    if (link.getAttribute('href') === id) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  progress.style.transform = `scaleX(${Number(active.dataset.chapter) / chapters.length})`;
  scheduled = false;
}
function scheduleUpdate() {
  if (!scheduled) {
    scheduled = true;
    requestAnimationFrame(updateActiveChapter);
  }
}
window.addEventListener('scroll', scheduleUpdate, { passive: true });
window.addEventListener('resize', scheduleUpdate, { passive: true });

const compactReading = window.matchMedia('(max-width: 760px)');
const readingDetails = [...document.querySelectorAll('.mobile-details, .step-detail')];
function syncReadingDetails() {
  readingDetails.forEach((details) => {
    details.open = !compactReading.matches;
    details.querySelector('summary').tabIndex = compactReading.matches ? 0 : -1;
  });
  scheduleUpdate();
}
readingDetails.forEach((details) => details.addEventListener('toggle', scheduleUpdate));
compactReading.addEventListener('change', syncReadingDetails);
syncReadingDetails();
updateActiveChapter();
