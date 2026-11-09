import "./styles.css";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation-principale");

if (menuButton && navigation) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.dataset.open = "false";
  };

  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    navigation.dataset.open = String(!isExpanded);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

const hero = document.querySelector(".hero");
const revealTargets = document.querySelectorAll(
  ".about__layout, .training-card, .projects__intro, .project-collection-heading, .project-entry, .contact__layout",
);
const reducedMotionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
let revealObserver;

if (!reducedMotionPreference.matches) {
  hero?.classList.add("hero--entering");

  if ("IntersectionObserver" in window && revealTargets.length > 0) {
    revealTargets.forEach((target) => target.classList.add("reveal"));
    document.documentElement.classList.add("motion-ready");

    revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.12 },
    );

    revealTargets.forEach((target) => revealObserver.observe(target));
  }
}

reducedMotionPreference.addEventListener("change", (event) => {
  if (!event.matches) return;

  revealObserver?.disconnect();
  hero?.classList.remove("hero--entering");
  document.documentElement.classList.remove("motion-ready");
  revealTargets.forEach((target) => target.classList.remove("reveal", "is-visible"));
});

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());
