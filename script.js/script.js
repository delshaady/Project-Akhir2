document.addEventListener("DOMContentLoaded", function () {
  // ======================
  // HAMBURGER MENU FUNCTIONALITY
  // ======================

  // Select elements
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navbarNav = document.querySelector(".navbar .navbar-nav");
  const searchButton = document.getElementById("search-button");
  const searchForm = document.querySelector(".search-form");

  // Toggle mobile menu
  hamburgerMenu.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation(); // Mencegah event bubbling

    // Toggle class active pada navbar-nav
    navbarNav.classList.toggle("active");

    // Tutup search form jika terbuka
    if (searchForm.classList.contains("active")) {
      searchForm.classList.remove("active");
    }

    // Ganti icon menu <-> x
    const icon = hamburgerMenu.querySelector("i");
    if (navbarNav.classList.contains("active")) {
      icon.setAttribute("data-feather", "x");
    } else {
      icon.setAttribute("data-feather", "menu");
    }
    feather.replace();
  });

  // Tutup mobile menu ketika klik di luar
  document.addEventListener("click", function (e) {
    // Jika yang diklik bukan hamburger menu atau navbar-nav
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");

      // Kembalikan icon ke menu
      const icon = hamburgerMenu.querySelector("i");
      icon.setAttribute("data-feather", "menu");
      feather.replace();
    }
  });

  // Tutup mobile menu ketika klik link di dalamnya
  document.querySelectorAll(".navbar-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      navbarNav.classList.remove("active");

      // Kembalikan icon ke menu
      const icon = hamburgerMenu.querySelector("i");
      icon.setAttribute("data-feather", "menu");
      feather.replace();
    });
  });

  // ======================
  // SEARCH FORM FUNCTIONALITY
  // ======================
  if (searchButton && searchForm) {
    const searchBox = document.querySelector("#search-box");

    searchButton.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation(); // Mencegah event bubbling

      // Toggle search form
      searchForm.classList.toggle("active");

      // Tutup mobile menu jika terbuka
      if (navbarNav.classList.contains("active")) {
        navbarNav.classList.remove("active");

        // Kembalikan icon ke menu
        const icon = hamburgerMenu.querySelector("i");
        icon.setAttribute("data-feather", "menu");
        feather.replace();
      }

      // Fokus ke search box jika form aktif
      if (searchForm.classList.contains("active") && searchBox) {
        searchBox.focus();
      }
    });

    // Tutup search form ketika klik di luar
    document.addEventListener("click", function (e) {
      if (!searchForm.contains(e.target) && e.target !== searchButton) {
        searchForm.classList.remove("active");
      }
    });
  }

  // ======================
  // SMOOTH SCROLLING
  // ======================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      // Skip untuk link dengan href="#"
      if (this.getAttribute("href") === "#") return;

      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Sesuaikan dengan tinggi navbar
          behavior: "smooth",
        });
      }
    });
  });

  // ======================
  // INITIALIZE FEATHER ICONS
  // ======================
  feather.replace();
});
