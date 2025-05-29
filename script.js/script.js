document.addEventListener("DOMContentLoaded", function () {
  // ======================
  // DATA REFERENSI PRODUK
  // ======================
  const productDatabase = [
    // Produk dari baju.html
    { id: 'baju1', name: "baju distro", category: "Baju", price: 100000, image: "../img/Baju/baju distro.jpg", url: "../HTML/Katalog/Beli/beli1.html" },
    { id: 'baju2', name: "baju distro", category: "Baju", price: 100000, image: "../img/Baju/distro2.jpg", url: "../HTML/Katalog/Beli/beli2.html" },
    // ... (tambahkan semua produk baju)
    
    // Produk dari celana.html
    { id: 'celana1', name: "Celana Chino", category: "Celana", price: 100000, image: "../img/celana/celana1.jpg", url: "../HTML/Katalog/celana/beli1.html" },
    { id: 'celana2', name: "Celana Chino", category: "Celana", price: 100000, image: "../img/celana/celana2.jpeg", url: "../HTML/Katalog/celana/beli2.html" },
    // ... (tambahkan semua produk celana)
    
    // Produk dari jaket.html
    { id: 'jaket1', name: "Jaket Vintage", category: "Jaket", price: 100000, image: "../img/jaket/Hoodie1.jpg", url: "../HTML/Katalog/Jaket/beli1.html" },
    { id: 'jaket2', name: "Jaket Vintage", category: "Jaket", price: 100000, image: "../img/jaket/h2.jpg", url: "../HTML/Katalog/Jaket/beli2.html" },
    // ... (tambahkan semua produk jaket)
    
    // Produk dari beli.html
    { id: 'beli1', name: "Jaket Vintage", category: "Baju", price: 100000, image: "../img/Baju/baju distro.jpg", url: "../HTML/katalog.html" },
    { id: 'beli2', name: "Jaket Vintage", category: "Baju", price: 100000, image: "../img/Baju/distro2.jpg", url: "../HTML/buy-page.html" }
    // ... (tambahkan semua produk dari beli.html)
  ];

  // ======================
  // HAMBURGER MENU FUNCTIONALITY
  // ======================
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navbarNav = document.querySelector(".navbar .navbar-nav");
  const searchButton = document.getElementById("search-button");
  const searchForm = document.querySelector(".search-form");

  // Toggle mobile menu
  hamburgerMenu.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    navbarNav.classList.toggle("active");

    if (searchForm.classList.contains("active")) {
      searchForm.classList.remove("active");
    }

    const icon = hamburgerMenu.querySelector("i");
    if (navbarNav.classList.contains("active")) {
      icon.setAttribute("data-feather", "x");
    } else {
      icon.setAttribute("data-feather", "menu");
    }
    feather.replace();
  });

  // ... (kode hamburger menu lainnya tetap sama)

  // ======================
  // SEARCH FUNCTIONALITY WITH DEBOUNCE
  // ======================
  if (searchButton && searchForm) {
    const searchBox = document.querySelector("#search-box");
    const searchResults = document.createElement("div");
    searchResults.className = "search-results";
    searchForm.appendChild(searchResults);

    // Fungsi debounce
    function debounce(func, timeout = 300) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
      };
    }

    // Fungsi pencarian
    const searchProducts = (query) => {
      if (!query) {
        searchResults.innerHTML = "";
        searchResults.style.display = "none";
        return;
      }

      const filteredProducts = productDatabase.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );

      displayResults(filteredProducts);
    };

    // Fungsi tampilkan hasil
    const displayResults = (products) => {
      searchResults.innerHTML = "";
      
      if (products.length === 0) {
        searchResults.innerHTML = "<div class='search-result-item'>Produk tidak ditemukan</div>";
        searchResults.style.display = "block";
        return;
      }

      products.forEach(product => {
        const item = document.createElement("div");
        item.className = "search-result-item";
        item.innerHTML = `
          <img src="${product.image}" alt="${product.name}" width="50">
          <div class="search-result-info">
            <strong>${product.name}</strong>
            <span>${product.category}</span>
            <span>Rp ${product.price.toLocaleString()}</span>
          </div>
        `;
        item.addEventListener("click", () => {
          window.location.href = product.url;
        });
        searchResults.appendChild(item);
      });

      searchResults.style.display = "block";
    };

    // Event listeners untuk search
    searchBox.addEventListener("input", debounce((e) => {
      searchProducts(e.target.value);
    }));

    searchButton.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      searchForm.classList.toggle("active");

      if (navbarNav.classList.contains("active")) {
        navbarNav.classList.remove("active");

        const icon = hamburgerMenu.querySelector("i");
        icon.setAttribute("data-feather", "menu");
        feather.replace();
      }

      if (searchForm.classList.contains("active") && searchBox) {
        searchBox.focus();
      }
    });

    document.addEventListener("click", function (e) {
      if (!searchForm.contains(e.target)) {
        searchForm.classList.remove("active");
        searchResults.style.display = "none";
      }
    });

    searchBox.addEventListener("click", (e) => {
      e.stopPropagation();
      if (searchBox.value) {
        searchResults.style.display = "block";
      }
    });
  }

  // ======================
  // SMOOTH SCROLLING
  // ======================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href") === "#") return;

      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });

  // ======================
  // LOGIN FORM FUNCTIONALITY
  // ======================
  // ... (kode login form tetap sama)

  // ======================
  // INITIALIZE FEATHER ICONS
  // ======================
  feather.replace();
});