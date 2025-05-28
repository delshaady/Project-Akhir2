    function changeImage(imgElement) {
      document.getElementById('mainImage').src = imgElement.src;
      
      // Tambah efek aktif pada thumbnail
      document.querySelectorAll('.media-gallery img').forEach(img => {
        img.style.borderColor = img === imgElement ? 'var(--primary)' : 'var(--medium-gray)';
      });
    }

    function selectOption(button, group) {
      // Hapus kelas selected dari semua button dalam grup yang sama
      const buttons = button.parentElement.querySelectorAll('button');
      buttons.forEach(btn => btn.classList.remove('selected'));
      
      // Tambah kelas selected ke button yang diklik
      button.classList.add('selected');
    }
    
    // Pilih opsi pertama secara default
    document.addEventListener('DOMContentLoaded', function() {
      const firstSizeBtn = document.querySelector('.option-group button[onclick*="size"]');
      const firstColorBtn = document.querySelector('.option-group button[onclick*="color"]');
      
      if (firstSizeBtn) firstSizeBtn.classList.add('selected');
      if (firstColorBtn) firstColorBtn.classList.add('selected');
    });

    
  document.addEventListener("DOMContentLoaded", function () {
    const buyNowBtn = document.querySelector(".buy-now");
    const addToCartBtn = document.querySelector(".add-to-cart");

    // Beli Sekarang
    buyNowBtn.addEventListener("click", function () {
      window.location.href = "pembayaran.html";
    });

    // Tambah ke Keranjang
    addToCartBtn.addEventListener("click", function () {
      // Simpan ke localStorage
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      cartItems.push({
        id: Date.now(),
        name: "Produk Anda",
        price: 0,
      });
      localStorage.setItem("cart", JSON.stringify(cartItems));

      // Tampilkan alert custom
      showAlert("success", "Produk ditambahkan ke keranjang!");
    });

    // Fungsi alert custom
    function showAlert(type, message) {
      const alertDiv = document.createElement("div");
      alertDiv.className = `custom-alert ${type}`;
      alertDiv.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:10px;">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        ${message}
      `;
      document.body.appendChild(alertDiv);

      setTimeout(() => {
        alertDiv.remove();
      }, 3000);
    }
  });