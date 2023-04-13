// Get the navigation links and add an event listener to each
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent default link behavior
    event.preventDefault();
    
    // Get the section ID from the link's href attribute
    const sectionId = link.getAttribute('href');
    
    // Scroll to the section with a smooth animation
    document.querySelector(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Get the button element and add an event listener
const topButton = document.getElementById('top-button');
topButton.addEventListener('click', () => {
  // Scroll to the top of the page with a smooth animation
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
