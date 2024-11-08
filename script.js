// Adding fade-in effect on scroll
document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the fade-in class
  const elements = document.querySelectorAll('.fade-in');

  // IntersectionObserver options to determine when an element is visible in the viewport
  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin around the root
    threshold: 0.2 // Trigger when 20% of the element is visible
  };

  // Create a new IntersectionObserver instance
  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the 'visible' class to the element when it's in view
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe each element with the fade-in class
  elements.forEach((element) => {
    fadeInObserver.observe(element);
  });
});
