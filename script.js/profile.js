// Fungsi pencarian
document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const searchTerm = document.getElementById("search-box").value.trim();

  if (searchTerm) {
    // Lakukan pencarian (sesuaikan dengan kebutuhan Anda)
    searchProducts(searchTerm);
  }
});

// Fungsi contoh pencarian produk
function searchProducts(query) {
  // Ini contoh saja - sesuaikan dengan sistem Anda
  console.log(`Mencari: ${query}`);

  // Jika Anda memiliki produk dalam array JavaScript:
  const products = [
    { name: "Kaos Rucas", category: "Baju" },
    { name: "Jaket Vintage", category: "Jaket" },
    // ... tambahkan produk lainnya
  ];

  const results = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
  );

  console.log("Hasil pencarian:", results);

  // Tampilkan hasil ke user (sesuaikan dengan UI Anda)
  displaySearchResults(results);
}

// Fungsi untuk menampilkan hasil (contoh sederhana)
function displaySearchResults(results) {
  const resultsContainer = document.createElement("div");
  resultsContainer.className = "search-results";

  if (results.length === 0) {
    resultsContainer.innerHTML = "<p>Produk tidak ditemukan</p>";
  } else {
    resultsContainer.innerHTML = "<h3>Hasil Pencarian:</h3>";
    results.forEach((product) => {
      resultsContainer.innerHTML += `<p>${product.name} (${product.category})</p>`;
    });
  }

  // Tambahkan ke DOM (sesuaikan dengan layout Anda)
  const existingResults = document.querySelector(".search-results");
  if (existingResults) {
    existingResults.remove();
  }

  document.body.appendChild(resultsContainer);
}

// Aktifkan Feather Icons
feather.replace();
