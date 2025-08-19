
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.carousel-track');
  const nextButton = document.querySelector('.carousel-btn.next');
  const prevButton = document.querySelector('.carousel-btn.prev');
  const items = Array.from(track.children);
  let currentIndex = 0;
  const visibleCount = 3;

  if (items.length > visibleCount) {
    nextButton.style.display = 'block';
  }

  function updateCarousel() {
    const itemWidth = items[0].getBoundingClientRect().width + 20;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    prevButton.style.display = currentIndex > 0 ? 'block' : 'none';
    nextButton.style.display = currentIndex < items.length - visibleCount ? 'block' : 'none';
  }

  nextButton.addEventListener('click', () => {
    if (currentIndex < items.length - visibleCount) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  window.addEventListener('resize', updateCarousel);
});