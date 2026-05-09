document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const themeToggle = document.getElementById('themeToggle');
  const icon = themeToggle ? themeToggle.querySelector('i') : null;

  if (themeToggle && icon) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      if (document.body.classList.contains('light-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
    });
  }

  // Scroll to Top Button
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    };

    scrollTopBtn.addEventListener('click', () => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
  }

  // Highlight Active Nav Link
  const currentLocation = location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentLocation) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Contact Form Validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let isValid = true;

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      if (!name.value.trim()) {
        name.classList.add('is-invalid');
        isValid = false;
      } else {
        name.classList.remove('is-invalid');
      }

      if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) {
        email.classList.add('is-invalid');
        isValid = false;
      } else {
        email.classList.remove('is-invalid');
      }

      if (!message.value.trim()) {
        message.classList.add('is-invalid');
        isValid = false;
      } else {
        message.classList.remove('is-invalid');
      }

      if (isValid) {
        alert('Thank you for your message. I will get back to you soon!');
        contactForm.reset();
      }
    });
  }
});
