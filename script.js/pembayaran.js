  document.addEventListener('DOMContentLoaded', function() {
    const confirmBtn = document.querySelector('.confirm-btn');
    
    confirmBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      const selectedPayment = document.querySelector('.option input:checked');
      
      if (!selectedPayment) {
        showAlert('error', 'Silakan pilih metode pembayaran terlebih dahulu.');
        return;
      }
      
      showAlert('success', 'Pembayaran berhasil! Mengarahkan ke halaman utama...');
      
      setTimeout(() => {
        window.location.href = "../HTML/landing-page.html";
      }, 2000);
    });
    
    // Fungsi alert sederhana
    function showAlert(type, message) {
      const alertDiv = document.createElement('div');
      alertDiv.className = `custom-alert ${type}`;
      alertDiv.textContent = message;
      document.body.appendChild(alertDiv);
      
      setTimeout(() => {
        alertDiv.remove();
      }, 2000);
    }
    
    // Logika pilihan pembayaran
    document.querySelectorAll('.option input').forEach(option => {
      option.addEventListener('change', function() {
        document.querySelectorAll('.option').forEach(opt => {
          opt.classList.remove('selected');
        });
        this.closest('.option').classList.add('selected');
      });
    });
  });