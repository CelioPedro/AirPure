/**
 * Hero background image slider with smooth crossfade, continuous zoom, and cinematic gradient overlay.
 * Creates a scene-like effect with smooth transitions.
 */

const heroSection = document.querySelector('.hero');
if (!heroSection) {
  console.warn('Elemento .hero não encontrado no DOM. Slider de background desativado.');
} else {
  const heroImages = [
    './images/hero/HeroBG01.jpg',
    './images/hero/HeroBG02.jpg',
    './images/hero/HeroBG03.jpg'
  ];

  let currentIndex = 0;
  const displayDuration = 6000; // time each image is shown in ms
  const transitionDuration = 1500; // fade transition duration in ms
  const zoomScale = 1.05; // max zoom scale

  // Create container for images
  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.overflow = 'hidden';
  container.style.zIndex = '0';
  container.style.backgroundColor = 'transparent';

  const img1 = document.createElement('div');
  const img2 = document.createElement('div');

  [img1, img2].forEach(img => {
    img.classList.add('hero-bg-img');
    img.style.position = 'absolute';
    img.style.top = '0';
    img.style.left = '0';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.backgroundSize = 'cover';
    img.style.backgroundRepeat = 'no-repeat';
    img.style.filter = 'brightness(0.7) saturate(1.2)';
    img.style.transition = `opacity ${transitionDuration}ms linear, transform ${displayDuration}ms linear`;
    img.style.willChange = 'opacity, transform';
    container.appendChild(img);
  });

  heroSection.style.position = 'relative';
  heroSection.style.backgroundImage = 'none';
  heroSection.appendChild(container);

  // Add cinematic gradient overlay
  const gradientOverlay = document.createElement('div');
  gradientOverlay.style.position = 'absolute';
  gradientOverlay.style.top = '0';
  gradientOverlay.style.left = '0';
  gradientOverlay.style.width = '100%';
  gradientOverlay.style.height = '100%';
  gradientOverlay.style.background = 'linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)';
  gradientOverlay.style.zIndex = '0';
  gradientOverlay.style.pointerEvents = 'none';
  container.appendChild(gradientOverlay);

  let showingImg = img1;
  let hiddenImg = img2;

  // Preload images
  function preloadImages() {
    heroImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }

  function setImage(div, index) {
    div.style.transition = `opacity ${transitionDuration}ms linear, transform ${displayDuration}ms linear`;
    div.style.backgroundImage = `url('${heroImages[index]}')`;
    div.style.opacity = '1';
    div.style.transform = 'scale(1)';
    requestAnimationFrame(() => {
      div.style.transform = `scale(${zoomScale})`;
    });
  }

  function crossfade() {
    const nextIndex = (currentIndex + 1) % heroImages.length;

    // Prepare next image
    hiddenImg.style.transition = `opacity ${transitionDuration}ms linear`;
    hiddenImg.style.backgroundImage = `url('${heroImages[nextIndex]}')`;
    hiddenImg.style.opacity = '0';
    hiddenImg.style.transform = 'scale(1)';
    void hiddenImg.offsetWidth; // Force reflow

    // Fade in new and fade out current
    hiddenImg.style.opacity = '1';
    showingImg.style.opacity = '0';

    // Swap
    [showingImg, hiddenImg] = [hiddenImg, showingImg];

    currentIndex = nextIndex;

    // Restart zoom
    showingImg.style.transition = `opacity ${transitionDuration}ms linear, transform ${displayDuration}ms linear`;
    showingImg.style.transform = `scale(${zoomScale})`;
  }

  function startSlider() {
    preloadImages();
    setImage(showingImg, currentIndex);
    hiddenImg.style.opacity = '0';
    hiddenImg.style.transform = 'scale(1)';

    setInterval(crossfade, displayDuration);
  }

  document.addEventListener('DOMContentLoaded', startSlider);
}
