/* ================================================
   PORTFOLIO — JavaScript
   Navbar scroll, mobile menu, scroll animations,
   active nav link highlighting
   ================================================ */

(function () {
  'use strict';

  /* -------- Navbar scroll shadow -------- */
  const navbar = document.getElementById('navbar');
  function updateNavbar() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  /* -------- Mobile hamburger -------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on link click
    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!navbar.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* -------- Active nav link on scroll -------- */
  const sections = document.querySelectorAll('section[id]');
  const allNavLinks = document.querySelectorAll('.nav-link');

  function setActiveLink() {
    let current = '';
    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    allNavLinks.forEach(function (link) {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href && href === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();

  /* -------- Fade-in on scroll -------- */
  const fadeTargets = document.querySelectorAll(
    '.project-card, .design-card, .timeline-card, .skill-category, .cert-card, .uiux-card, .about-layout, .contact-link, .hero-content'
  );

  fadeTargets.forEach(function (el) {
    el.classList.add('fade-in');
  });

  const io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  fadeTargets.forEach(function (el) { io.observe(el); });

  /* -------- Smooth scroll for all anchor links -------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* -------- Skill pill hover micro-interaction -------- */
  document.querySelectorAll('.skill-pill').forEach(function (pill) {
    pill.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.05)';
    });
    pill.addEventListener('mouseleave', function () {
      this.style.transform = '';
    });
  });

  /* -------- Console greeting -------- */
  console.log('%c👋 Hey there!', 'font-size:18px;font-weight:bold;color:#0d9488;');
  console.log('%cNikhilesh\'s portfolio · nikhilesh.k3008@gmail.com', 'color:#64748b;');

})();
