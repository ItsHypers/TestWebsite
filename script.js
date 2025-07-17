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

const navbar = document.querySelector('.navbar');

function checkNavbar() {
  if (window.innerWidth <= 768) {
    // Always hide navbar on small screens
    navbar.classList.remove('visible');
    navbar.style.display = 'none';
    return;
  }
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    // Show navbar if scrolled past 50px
    if (!navbar.classList.contains('visible')) {
      navbar.style.display = 'flex';
      void navbar.offsetWidth; // reflow to enable transition
      navbar.classList.add('visible');
    }
  } else {
    // Hide navbar only when near the top (inside hero)
    if (navbar.classList.contains('visible')) {
      navbar.classList.remove('visible');
      setTimeout(() => {
        if (!navbar.classList.contains('visible')) {
          navbar.style.display = 'none';
        }
      }, 400); // match fade-out duration
    }
  }
}

window.addEventListener('scroll', checkNavbar);
window.addEventListener('load', () => {
  navbar.style.display = 'none';
});
