document.addEventListener('DOMContentLoaded', () => {
  const loadingContainer = document.querySelector('.loading-container');
  
  // Hide loading animation after 3 seconds
  setTimeout(() => {
    loadingContainer.classList.add('hidden');
  }, 3000);
}); 