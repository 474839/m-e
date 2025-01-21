// Intersection Observer options
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

// CSS classes for animations
const styles = `
  .hidden {
      opacity: 0;
      transform: translateY(50px);
      transition: all 1s ease;
  }

  .show {
      opacity: 1;
      transform: translateY(0);
  }

  .slide-in {
      animation: slideIn 1.2s ease-out forwards;
  }

  @keyframes slideIn {
      0% {
          opacity: 0;
          transform: translateY(50px);
      }
      100% {
          opacity: 1;
          transform: translateY(0);
      }
  }
`;

// Create and append styles
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Add initial hidden class to elements
document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.querySelector('.About');
  const projectsSection = document.querySelector('.Projects');
  const projects = document.querySelectorAll('.project');

  // Add hidden class initially
  aboutSection.classList.add('hidden');
  projectsSection.classList.add('hidden');
  projects.forEach(project => project.classList.add('hidden'));

  // Create intersection observer
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
              
              // If it's the Projects section, animate individual projects with delay
              if (entry.target.classList.contains('Projects')) {
                  const projects = entry.target.querySelectorAll('.project');
                  projects.forEach((project, index) => {
                      setTimeout(() => {
                          project.classList.add('show');
                      }, index * 200); // 200ms delay between each project
                  });
              }
              
              // Stop observing after animation
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  // Start observing elements
  observer.observe(aboutSection);
  observer.observe(projectsSection);
});

// Add smooth scroll behavior for navigation links
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').slice(1);
          const targetSection = document.getElementById(targetId);
          
          if (targetSection) {
              targetSection.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });
});