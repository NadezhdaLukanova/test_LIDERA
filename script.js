document.addEventListener('DOMContentLoaded', () => {

  const popupOverlay = document.getElementById('popup-overlay');
  const signupButtons = document.querySelectorAll('.btn-signup, .btn-signup-free, .btn-get-started');
  const closePopupButton = document.querySelector('.btn-close-popup');
  const videoElement = document.getElementById('hero-video');
  let popupShownByVideo = false; 

  function showPopup() {
      if (popupOverlay) {
          popupOverlay.classList.add('is-visible');
      }
  }

  function hidePopup() {
      if (popupOverlay) {
          popupOverlay.classList.remove('is-visible');
      }
  }

  signupButtons.forEach(button => {
      button.addEventListener('click', (event) => {
          event.preventDefault(); 
          showPopup();
      });
  });

  if (closePopupButton) {
      closePopupButton.addEventListener('click', hidePopup);
  }

  if (popupOverlay) {
      popupOverlay.addEventListener('click', (event) => {
          if (event.target === popupOverlay) {
              hidePopup();
          }
      });
  }

  if (videoElement) {
      videoElement.addEventListener('timeupdate', () => {
          if (!popupShownByVideo && videoElement.duration && videoElement.currentTime > videoElement.duration / 2) {
              showPopup();
              popupShownByVideo = true; 
          }
      });
  }

  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');
  const authButtons = document.querySelector('.auth-buttons');

  if (burgerMenu && navLinks && authButtons) {
      burgerMenu.addEventListener('click', () => {
          burgerMenu.classList.toggle('active');
          navLinks.classList.toggle('active');
          authButtons.classList.toggle('active');
      });
  }

  const mobileNavLinks = document.querySelectorAll('.nav-links a');
  mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
          burgerMenu.classList.remove('active');
          navLinks.classList.remove('active');
          authButtons.classList.remove('active');
      });
  });

  const featuresGrid = document.getElementById('features-grid');
  const sliderDots = document.getElementById('slider-dots');
  const sliderArrowPrev = document.getElementById('slider-arrow-prev');
  const sliderArrowNext = document.getElementById('slider-arrow-next');

  let currentSlide = 0;
  const slidesCount = featuresGrid.children.length;
  const slidesToShow = 4; 

  function updateSlider() {
    featuresGrid.style.transform = `translateX(-${currentSlide * (100 / slidesToShow)}%)`;
    const dots = sliderDots.children;
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
    }
    dots[currentSlide].classList.add('active');
  }

  sliderArrowPrev.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slidesCount) % slidesCount;
    updateSlider();
  });

  sliderArrowNext.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slidesCount;
    updateSlider();
  });

  updateSlider();

});