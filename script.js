// Scroll reveal animation for sections
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Navbar fade in/out on scroll
const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

function checkNavbar() {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 50 && currentScrollY > lastScrollY) {
    if (!navbar.classList.contains('visible')) {
      navbar.style.display = 'flex';
      void navbar.offsetWidth;
      navbar.classList.add('visible');
    }
  } else {
    if (navbar.classList.contains('visible')) {
      navbar.classList.remove('visible');
      setTimeout(() => {
        if (!navbar.classList.contains('visible')) {
          navbar.style.display = 'none';
        }
      }, 400);
    }
  }

  lastScrollY = currentScrollY;
}

window.addEventListener('scroll', checkNavbar);
window.addEventListener('load', () => {
  navbar.style.display = 'none';
});
