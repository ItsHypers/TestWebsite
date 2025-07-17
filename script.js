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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      
      const offset = 80; // adjust this value to scroll higher (pixels)
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Navbar display and fade-in on scroll only after hero
const navbar = document.querySelector('.navbar');
const heroSection = document.querySelector('.hero-header');

function checkNavbar() {
  const heroBottom = heroSection.getBoundingClientRect().bottom;

  if (heroBottom <= 0) {
    if (!navbar.classList.contains('visible')) {
      navbar.classList.add('visible');
    }
  } else {
    if (navbar.classList.contains('visible')) {
      navbar.classList.remove('visible');
    }
  }
}

window.addEventListener('scroll', checkNavbar);
window.addEventListener('load', checkNavbar);

// Particles config
tsParticles.load("tsparticles", {
  fpsLimit: 30,
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        area: 800,
      }
    },
    color: {
      value: "#004080"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.05,
      random: true,
      anim: {
        enable: true,
        speed: 0.2,       // slower flicker/fade
        opacity_min: 0.05,
        sync: false
      }
    },
    size: {
      value: 6,          // bigger particles
      random: true,
      anim: {
        enable: false,
      }
    },
    move: {
      enable: true,
      speed: 0.2,        // slow drifting movement
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "out"
      }
    },
    links: {
      enable: false
    }
  },
  detectRetina: true,
  background: {
    color: "transparent"
  }
});
