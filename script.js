
document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.querySelector('.share-button');
    const shareContainer = document.querySelector('.share-container');
  
    shareButton.addEventListener('click', () => {
      shareContainer.classList.toggle('active');
    });
  
    document.addEventListener('click', (e) => {
      if (!shareContainer.contains(e.target)) {
        shareContainer.classList.remove('active');
      }
    });
  });
  