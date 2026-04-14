const navShell = document.querySelector(".nav-shell");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-menu a");
const yearTarget = document.getElementById("year");
const revealTargets = document.querySelectorAll(".reveal-target");
const accordionTriggers = document.querySelectorAll(".accordion-trigger");
const trackedLinks = document.querySelectorAll(".analytics-link");

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

if (menuToggle && navShell) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navShell.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navShell?.classList.remove("nav-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

revealTargets.forEach((el) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );
  observer.observe(el);
});

accordionTriggers.forEach((trigger, index) => {
  const panel = trigger.nextElementSibling;
  if (!panel) return;

  trigger.addEventListener("click", () => {
    const isOpen = panel.classList.toggle("open");
    trigger.setAttribute("aria-expanded", String(isOpen));
  });

  if (index === 0) {
    trigger.setAttribute("aria-expanded", "true");
  }
});

function trackLinkClick(eventName, href) {
  const key = "kx_hq_click_analytics";
  let store = {};

  try {
    store = JSON.parse(localStorage.getItem(key) || "{}");
  } catch {
    store = {};
  }

  const nextValue = (store[eventName] || 0) + 1;
  store[eventName] = nextValue;
  localStorage.setItem(key, JSON.stringify(store));

  if (typeof window.gtag === "function") {
    window.gtag("event", "kaizrug_link_click", { event_name: eventName, destination: href });
  }

  console.info(`[Kaizrug HQ Analytics] ${eventName}: ${nextValue}`);
}

trackedLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const eventName = link.getAttribute("data-track") || "unlabeled_click";
    const href = link.getAttribute("href") || "";
    trackLinkClick(eventName, href);
  });
});

function setupCarousel(root) {
  const track = root.querySelector(".promo-track, .media-track");
  const slides = root.querySelectorAll(".promo-slide, .media-slide");
  const dotsWrap = root.querySelector(".carousel-dots");
  const prevBtn = root.querySelector('[data-action="prev"]');
  const nextBtn = root.querySelector('[data-action="next"]');
  if (!track || !slides.length || !dotsWrap) return;

  let index = 0;
  let startX = 0;
  let autoTimer = null;

  const dots = Array.from(slides).map((_, i) => {
    const dot = document.createElement("button");
    dot.className = "dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
    dot.addEventListener("click", () => {
      index = i;
      render();
      resetAuto();
    });
    dotsWrap.appendChild(dot);
    return dot;
  });

  const render = () => {
    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  };

  const goNext = () => {
    index = (index + 1) % slides.length;
    render();
  };

  const goPrev = () => {
    index = (index - 1 + slides.length) % slides.length;
    render();
  };

  const resetAuto = () => {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = setInterval(goNext, 5500);
  };

  prevBtn?.addEventListener("click", () => {
    goPrev();
    resetAuto();
  });

  nextBtn?.addEventListener("click", () => {
    goNext();
    resetAuto();
  });

  track.addEventListener("touchstart", (event) => {
    startX = event.changedTouches[0].clientX;
  });

  track.addEventListener("touchend", (event) => {
    const endX = event.changedTouches[0].clientX;
    const delta = endX - startX;
    if (Math.abs(delta) < 30) return;
    if (delta < 0) goNext();
    else goPrev();
    resetAuto();
  });

  render();
  resetAuto();
}

document.querySelectorAll("[data-carousel]").forEach((carouselRoot) => {
  setupCarousel(carouselRoot);
});
