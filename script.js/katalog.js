// Fungsi untuk mengganti gambar utama
function changeImage(clickedImage) {
  const mainImage = document.getElementById("mainImage");
  mainImage.src = clickedImage.src;

  // Update border aktif pada thumbnail
  document.querySelectorAll(".media-gallery img").forEach((img) => {
    img.style.border =
      img === clickedImage ? "2px solid var(--primary)" : "none";
  });
}

// Fungsi untuk memilih opsi (ukuran/warna)
function selectOption(clickedButton, optionType) {
  // Hapus class 'selected' dari semua button dalam grup yang sama
  const buttons = clickedButton.parentElement.querySelectorAll("button");
  buttons.forEach((btn) => btn.classList.remove("selected"));

  // Tambahkan class 'selected' ke button yang diklik
  clickedButton.classList.add("selected");

  // Anda bisa menyimpan pilihan user untuk digunakan nanti
  // localStorage.setItem(optionType, clickedButton.textContent);
}

// Fungsi untuk inisialisasi saat halaman dimuat
function initPage() {
  // Pilih opsi pertama secara default
  document.querySelectorAll(".options-container").forEach((container) => {
    const firstButton = container.querySelector("button");
    if (firstButton) firstButton.classList.add("selected");
  });

  // Event listener untuk tombol Beli Sekarang
  document.querySelector(".buy-now")?.addEventListener("click", function () {
    // Validasi pilihan ukuran dan warna sebelum redirect
    const selectedSize = document.querySelector(
      '.options-container button.selected[onclick*="size"]'
    );
    if (!selectedSize) {
      alert("Silakan pilih ukuran terlebih dahulu");
      return;
    }

    window.location.href = "../../pembayaran.html";
  });

  // Event listener untuk tombol Keranjang
  document
    .querySelector(".add-to-cart")
    ?.addEventListener("click", function () {
      // Logika tambah ke keranjang bisa ditambahkan di sini
      alert("Produk telah ditambahkan ke keranjang");
    });
}

// Jalankan inisialisasi saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", initPage);
