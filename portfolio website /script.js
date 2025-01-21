// Scroll progress indicator
window.addEventListener('scroll', () => {
  const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  const rotation = scrollProgress * 360;
  
  // Create or get scroll indicator element
  let scrollIndicator = document.querySelector('.scroll-indicator');
  if (!scrollIndicator) {
      scrollIndicator = document.createElement('div');
      scrollIndicator.className = 'scroll-indicator';
      document.body.appendChild(scrollIndicator);
  }
  
  scrollIndicator.style.transform = `rotate(${rotation}deg)`;
});

// Parallax scroll effect
window.addEventListener('scroll', () => {
  const projects = document.querySelectorAll('.project');
  const scrolled = window.pageYOffset;
  
  projects.forEach((project, index) => {
      const speed = 1 + (index * 0.1); // Different speed for each project
      const yPos = -(scrolled * speed * 0.03);
      project.style.transform = `translateY(${yPos}px)`;
  });
});

// Smooth scroll to sections when clicking nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      if (section) {
          section.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});

// Reveal elements on scroll
const revealOnScroll = () => {
  const elements = document.querySelectorAll('.About, .project');
  
  elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
      }
  });
}

window.addEventListener('scroll', revealOnScroll);