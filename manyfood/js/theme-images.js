// Theme-based image switcher for Mintlify
function initThemeImages() {
  // Find all theme-aware images
  const themeImages = document.querySelectorAll('[data-theme-image]');
  
  function updateThemeImages() {
    const isDark = document.documentElement.classList.contains('dark') || 
                   document.documentElement.getAttribute('data-theme') === 'dark' ||
                   document.body.classList.contains('dark');
    
    themeImages.forEach(container => {
      const lightImg = container.querySelector('[data-theme="light"]');
      const darkImg = container.querySelector('[data-theme="dark"]');
      
      if (lightImg && darkImg) {
        if (isDark) {
          lightImg.style.display = 'none';
          darkImg.style.display = 'block';
        } else {
          lightImg.style.display = 'block';
          darkImg.style.display = 'none';
        }
      }
    });
  }
  
  // Run on page load
  updateThemeImages();
  
  // Listen for theme changes
  const observer = new MutationObserver(updateThemeImages);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class', 'data-theme']
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initThemeImages);
} else {
  initThemeImages();
} 