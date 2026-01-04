// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  });
});

// Navbar scroll effect
const navbar = document.querySelector('.modern-navbar');
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  
  // Add scrolled class when scrolling down
  if (scrolled > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = scrolled;
});

// Mobile menu toggle
const hamburgerButton = document.getElementById("hamburger-button");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

if (hamburgerButton) {
  hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });
}

// Close mobile menu when clicking on a link
const menuItems = document.querySelectorAll(".mobile-nav-link");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    hamburgerIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  });
});

// Intersection Observer for fade-in animations
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  
  const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  sections.forEach((section) => {
    observer.observe(section);
  });
});

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero-section");
  const heroBackground = document.querySelector(".hero-background");
  
  if (hero && scrolled < window.innerHeight) {
    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    heroBackground.style.opacity = `${1 - scrolled / window.innerHeight * 0.3}`;
  }
});

// Add typing effect to hero title
const heroTitle = document.querySelector(".title-name");
if (heroTitle) {
  const text = heroTitle.textContent;
  heroTitle.textContent = "";
  heroTitle.style.opacity = "1";
  
  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      heroTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };
  
  // Start typing after a short delay
  setTimeout(typeWriter, 500);
}

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px) rotate(1deg)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) rotate(0deg)';
  });
});

// Animate skill tags on scroll
const skillTags = document.querySelectorAll('.skill-tag');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, index * 50);
    }
  });
}, { threshold: 0.1 });

skillTags.forEach((tag) => {
  tag.style.opacity = '0';
  tag.style.transform = 'translateY(20px)';
  tag.style.transition = 'all 0.3s ease';
  skillObserver.observe(tag);
});

// Add ripple effect to buttons
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .nav-link-cta');
buttons.forEach((button) => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
  .btn-primary, .btn-secondary, .nav-link-cta {
    position: relative;
    overflow: hidden;
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
