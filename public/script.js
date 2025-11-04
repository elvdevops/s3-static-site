// Smooth scrolling
document.querySelectorAll('a[href^=\"#\"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Dark mode toggle
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Team carousel (auto-rotating)
const members = document.querySelectorAll('.member');
let current = 0;
setInterval(() => {
  members[current].classList.remove('active');
  current = (current + 1) % members.length;
  members[current].classList.add('active');
}, 4000);

// Contact form fake submission
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks for reaching out! We will contact you soon.');
  e.target.reset();
});

// Scroll reveal effect
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight / 1.2;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) {
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
    }
  });
});

sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(40px)';
  sec.style.transition = 'all 0.6s ease-out';
});
