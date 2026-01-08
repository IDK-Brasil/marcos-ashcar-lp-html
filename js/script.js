
// ANIMATED SECTIONS AND SLIDER
(function () {
  const animatedSections = document.querySelectorAll("[data-animate='true']");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  animatedSections.forEach((section) => observer.observe(section));

  const sliderSelector = ".audience-slider";
  let slider;

  function initKeen() {
    if (window.innerWidth <= 768) {
      if (slider) slider.destroy();
      slider = null;
      return;
    }

    if (!slider) {
      slider = new KeenSlider(sliderSelector, {
        loop: false,
        mode: "free",
        slides: {
          perView: "auto",
          spacing: 0,
        },
      });
    }
  }

  initKeen();
  window.addEventListener("resize", initKeen);
})();
