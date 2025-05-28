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

  // script.js
document.addEventListener('DOMContentLoaded', function() {
  // Fungsi untuk toggle password visibility
  function togglePassword() {
      const passwordInput = document.getElementById('password');
      const toggleIcon = document.querySelector('.toggle-password');
      
      if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
          toggleIcon.classList.remove('fa-eye');
          toggleIcon.classList.add('fa-eye-slash');
      } else {
          passwordInput.type = 'password';
          toggleIcon.classList.remove('fa-eye-slash');
          toggleIcon.classList.add('fa-eye');
      }
  }

  // Menambahkan event listener ke tombol toggle password
  const togglePasswordBtn = document.querySelector('.toggle-password');
  if (togglePasswordBtn) {
      togglePasswordBtn.addEventListener('click', togglePassword);
  }

  // Fungsi untuk validasi form
  function validateForm(event) {
      event.preventDefault(); // Mencegah form submit default
      
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      
      // Validasi email
      if (!email) {
          alert('Silakan masukkan email Anda');
          return;
      }
      
      // Validasi format email sederhana
      if (!/^\S+@\S+\.\S+$/.test(email)) {
          alert('Format email tidak valid');
          return;
      }
      
      // Validasi password
      if (!password) {
          alert('Silakan masukkan password Anda');
          return;
      }
      
      // Jika semua validasi berhasil, redirect ke halaman beli.html
      window.location.href = '../HTML/beli.html';
  }

  // Menambahkan event listener ke form login
  const loginForm = document.querySelector('.login-form');
  if (loginForm) {
      loginForm.addEventListener('submit', validateForm);
  }

  // Menambahkan event listener ke tombol login (untuk backup)
  const loginBtn = document.querySelector('.login-btn');
  if (loginBtn) {
      loginBtn.addEventListener('click', function(e) {
          e.preventDefault();
          validateForm(e);
      });
  }
});
  // ======================
  // INITIALIZE FEATHER ICONS
  // ======================
  feather.replace();
});
