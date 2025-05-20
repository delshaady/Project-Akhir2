document.addEventListener("DOMContentLoaded", function () {
  // Hamburger menu functionality
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navbarNav = document.querySelector(".navbar .navbar-nav");
  const searchButton = document.getElementById("search-button");
  const shoppingCart = document.getElementById("shopping-cart");
  const searchForm = document.querySelector(".search-form");
  const searchBox = document.querySelector("#search-box");

  // Toggle mobile menu
  hamburgerMenu.addEventListener("click", function (e) {
    e.preventDefault();
    navbarNav.classList.toggle("active");

    // Toggle icon between menu and x
    const icon = hamburgerMenu.querySelector("i");
    if (navbarNav.classList.contains("active")) {
      icon.setAttribute("data-feather", "x");
    } else {
      icon.setAttribute("data-feather", "menu");
    }
    feather.replace();
  });

  // Close mobile menu when clicking on nav link
  document.querySelectorAll(".navbar-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      navbarNav.classList.remove("active");
      hamburgerMenu.querySelector("i").setAttribute("data-feather", "menu");
      feather.replace();
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
      hamburgerMenu.querySelector("i").setAttribute("data-feather", "menu");
      feather.replace();
    }
  });

  // Search functionality
  searchButton.addEventListener("click", function (e) {
    e.preventDefault();
    searchForm.classList.toggle("active");
    searchBox.focus();
  });

  // Shopping cart functionality
  shoppingCart.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Keranjang belanja akan segera tersedia!");
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });

  // Form submission
  const contactForm = document.querySelector(".contact form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const inputs = this.querySelectorAll("input, textarea");
      let isValid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          input.style.border = "1px solid red";
          isValid = false;
        } else {
          input.style.border = "";
        }
      });

      if (isValid) {
        alert(
          "Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda."
        );
        this.reset();
      } else {
        alert("Harap lengkapi semua field yang diperlukan!");
      }
    });
  }

  // Initialize feather icons
  feather.replace();
});
