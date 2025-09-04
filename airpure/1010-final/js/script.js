// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Product filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    productCards.forEach(card => {
      // Remove inline styles to restore CSS hover effects
      card.style.opacity = '';
      card.style.transform = '';
      card.style.display = '';

      if (filterValue === 'all') {
        card.style.display = 'block';
        card.classList.add('animate');
      } else {
        const cardCategories = card.getAttribute('data-category');
        if (cardCategories && cardCategories.includes(filterValue)) {
          card.style.display = 'block';
          card.classList.add('animate');
        } else {
          card.style.display = 'none';
          card.classList.remove('animate');
        }
      }
    });
  });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

// Observe elements for animation with staggered delays
document.querySelectorAll('.fade-in, .tech-card, .benefit-card').forEach((el, index) => {
  // Add staggered animation delay
  el.style.transitionDelay = `${index * 0.1}s`;
  observer.observe(el);
});

// Separate observer for product cards to ensure consistent effects
document.querySelectorAll('.product-card').forEach((el, index) => {
  observer.observe(el);
});

// Product purchase functionality
document.querySelectorAll('.product-button').forEach(button => {
  button.addEventListener('click', function() {
    const productName = this.closest('.product-card').querySelector('.product-name').textContent;
    const productPrice = this.closest('.product-card').querySelector('.product-price').textContent;

    // Simple purchase simulation
    this.textContent = 'Adicionado!';
    this.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';

    setTimeout(() => {
      this.textContent = 'Comprar Agora';
      this.style.background = '';
    }, 2000);

    // Show purchase confirmation
    alert(`${productName} foi adicionado ao carrinho!\nPreço: ${productPrice}`);
  });
});

// Header background on scroll and CTA button visibility
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  const ctaButton = document.querySelector('.cta-button');

  if (window.scrollY > 50) {
    header.classList.add('scrolled');
    if (ctaButton && window.innerWidth < 1020) {
      ctaButton.classList.add('hidden');
    }
  } else {
    header.classList.remove('scrolled');
    if (ctaButton) {
      ctaButton.classList.remove('hidden');
    }
  }
});

// Handle window resize to show/hide CTA button based on screen width
window.addEventListener('resize', () => {
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    if (window.innerWidth >= 1020) {
      ctaButton.classList.remove('hidden');
    } else if (window.scrollY > 50) {
      ctaButton.classList.add('hidden');
    }
  }
});

// Initialize animations on page load
window.addEventListener('load', () => {
  // Animate hero elements
  const heroContent = document.querySelector('.hero-content');
  const heroImage = document.querySelector('.hero-image');

  setTimeout(() => {
    heroContent.style.opacity = '1';
    heroContent.style.transform = 'translateY(0)';
  }, 300);

  setTimeout(() => {
    heroImage.style.opacity = '1';
    heroImage.style.transform = 'translateY(0)';
  }, 600);
});

// Add initial styles for hero animation
document.addEventListener('DOMContentLoaded', () => {
  const heroContent = document.querySelector('.hero-content');
  const heroImage = document.querySelector('.hero-image');

  heroContent.style.opacity = '0';
  heroContent.style.transform = 'translateY(30px)';
  heroContent.style.transition = 'all 0.8s ease';

  heroImage.style.opacity = '0';
  heroImage.style.transform = 'translateY(30px)';
  heroImage.style.transition = 'all 0.8s ease';

  // Initialize hamburger menu items with hidden state and visible display
  const hamburgerNav = document.querySelector('.hamburger-nav');
  if (hamburgerNav) {
    hamburgerNav.querySelectorAll('a').forEach(link => {
      link.style.opacity = '0';
      link.style.transform = 'translateY(20px)';
      link.style.display = 'block';
    });
  }
});

// Hamburger menu toggle
const hamburgerToggle = document.querySelector('.hamburger-toggle');
const hamburgerNav = document.querySelector('.hamburger-nav');

if (hamburgerToggle && hamburgerNav) {
  hamburgerToggle.addEventListener('click', () => {
    const isOpen = hamburgerNav.classList.contains('show');
    if (isOpen) {
      hamburgerNav.classList.remove('show');
      hamburgerToggle.classList.remove('open');
      document.body.classList.remove('menu-open');
      // Reset animation for next open
      setTimeout(() => {
        hamburgerNav.querySelectorAll('a').forEach(link => {
          link.style.opacity = '0';
          link.style.transform = 'translateY(20px)';
        });
      }, 300);
    } else {
      hamburgerNav.classList.add('show');
      hamburgerToggle.classList.add('open');
      document.body.classList.add('menu-open');
    }
  });

  // Close hamburger menu when clicking outside or on a link
  document.addEventListener('click', (event) => {
    if (!hamburgerToggle.contains(event.target) && !hamburgerNav.contains(event.target)) {
      hamburgerNav.classList.remove('show');
      hamburgerToggle.classList.remove('open');
      document.body.classList.remove('menu-open');
      // Reset animation for next open
      setTimeout(() => {
        hamburgerNav.querySelectorAll('a').forEach(link => {
          link.style.opacity = '0';
          link.style.transform = 'translateY(20px)';
        });
      }, 300);
    }
  });

  // Close menu when a link is clicked
  hamburgerNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburgerNav.classList.remove('show');
      hamburgerToggle.classList.remove('open');
      document.body.classList.remove('menu-open');
      // Reset animation for next open
      setTimeout(() => {
        hamburgerNav.querySelectorAll('a').forEach(link => {
          link.style.opacity = '0';
          link.style.transform = 'translateY(20px)';
        });
      }, 300);
    });
  });
}

// Dropdown menu toggle for mobile
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (dropdownToggle && dropdownMenu) {
  dropdownToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (event) => {
    if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove('show');
    }
  });
}

// FAQ Accordion functionality
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const answer = item.querySelector('.faq-answer');
    const arrow = question.querySelector('.arrow');

    // Toggle active class on question
    question.classList.toggle('active');

    // Toggle open class on answer
    answer.classList.toggle('open');

    // Close other open items
    document.querySelectorAll('.faq-item').forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.querySelector('.faq-question').classList.remove('active');
        otherItem.querySelector('.faq-answer').classList.remove('open');
      }
    });
  });
});
