/* Sticky nav: transparent at the top, yellow bar once you scroll */
(function () {
  var header = document.querySelector(".header_area");
  if (!header) return;

  function onScroll() {
    header.classList.toggle("navbar_fixed", window.scrollY > 60);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

/* Mobile dropdown menu */
(function () {
  var toggler = document.querySelector(".navbar-toggler");
  var menu = document.querySelector(".menu_nav");
  if (!toggler || !menu) return;

  toggler.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    toggler.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();

/* Dark mode.
   The head of each page runs a tiny inline script that applies the saved
   theme before paint, so the page never flashes light before turning dark.
   This part only handles the click. */
(function () {
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;

  function label() {
    var dark = document.documentElement.dataset.theme === "dark";
    btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
  }

  btn.addEventListener("click", function () {
    var dark = document.documentElement.dataset.theme === "dark";
    var next = dark ? "light" : "dark";

    document.documentElement.dataset.theme = next;
    label();

    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* private browsing or storage disabled: the choice just won't persist */
    }
  });

  label();
})();
