// ===== Responsive Navbar Toggle =====
const nav = document.querySelector('.nav-links');
const menuToggle = document.createElement('div');

menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '&#9776;';
document.querySelector('.navbar').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// ===== Smooth Scroll Animation =====
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
    nav.classList.remove('active');
  });
});

// ===== Scroll Fade-In Animation =====
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const position = sec.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;
    if (position < screenPos) {
      sec.classList.add('visible');
    }
  });
});