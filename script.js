document.addEventListener('DOMContentLoaded', () => {
  // Navbar toggle for mobile
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('nav ul');
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.innerHTML = navMenu.classList.contains('active')
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-link, .btn-buy, .btn-plan').forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const href = link.getAttribute('href');
        const target = document.querySelector(href);
        if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        navMenu.classList.remove('active');
        navToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  });

  // Back to top button
  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) backToTop.classList.add('visible');
    else backToTop.classList.remove('visible');
  });

  // Banner form submission
  document.getElementById('banner-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    if (/^\S+@\S+\.\S+$/.test(email)) {
      alert(`Thank you! We'll send updates to ${email}`);
      e.target.reset();
    } else {
      alert('Please enter a valid email.');
    }
  });

  // Contact form submission
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const name = e.target.name.value.trim();
    const phone = e.target.phone.value.trim();
    const message = e.target.message.value.trim();
    if (email && name && phone && message && /^\S+@\S+\.\S+$/.test(email)) {
      alert('Thank you! We’ll get back to you soon.');
      e.target.reset();
    } else {
      alert('Please fill all fields correctly.');
    }
  });

  // Particle animation
  if (window.particlesJS) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 900 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.6, random: true },
        size: { value: 4, random: true },
        line_linked: { enable: true, distance: 180, color: '#ffffff', opacity: 0.4, width: 1.2 },
        move: { enable: true, speed: 3.5, direction: 'none', random: false, straight: false, out_mode: 'out' }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { repulse: { distance: 120, duration: 0.5 }, push: { particles_nb: 5 } }
      },
      retina_detect: true
    });
  }
});