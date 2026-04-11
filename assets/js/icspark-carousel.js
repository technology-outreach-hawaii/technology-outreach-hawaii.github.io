document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.event-carousel');

  carousels.forEach((carousel) => {
    const track = carousel.querySelector('.event-carousel__track');
    const slides = Array.from(track ? track.children : []);
    const nextButton = carousel.querySelector('.event-carousel__btn.next');
    const prevButton = carousel.querySelector('.event-carousel__btn.prev');

    if (!track || slides.length === 0) return;

    let currentSlide = 0;

    const updateCarousel = () => {
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
    };

    nextButton?.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateCarousel();
    });

    prevButton?.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
  });
});
