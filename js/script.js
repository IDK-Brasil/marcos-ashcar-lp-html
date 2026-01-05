// MOBILE MENU
(function () {
  const hamburger = document.querySelector(".hamburger");
  const closeMenuBtn = document.querySelector(".close-menu");
  const overlay = document.getElementById("overlay");
  const mobileMenu = document.getElementById("menu-mobile");
  const mobileLinks = mobileMenu.querySelectorAll("a");

  function toggleMenu(forceClose) {
    const isOpen = hamburger.classList.contains("is-open");
    const shouldOpen = forceClose ? false : !isOpen;

    hamburger.classList.toggle("is-open", shouldOpen);
    overlay.classList.toggle("is-open", shouldOpen);
    mobileMenu.classList.toggle("is-open", shouldOpen);

    hamburger.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
    mobileMenu.setAttribute("aria-hidden", shouldOpen ? "false" : "true");
  }

  hamburger.addEventListener("click", () => toggleMenu(false));
  closeMenuBtn.addEventListener("click", () => toggleMenu(true));
  overlay.addEventListener("click", () => toggleMenu(true));
  mobileLinks.forEach((link) =>
    link.addEventListener("click", () => toggleMenu(true))
  );
})();

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
