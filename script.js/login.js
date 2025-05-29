// Simple Login Script with all features working
document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const rememberCheckbox = document.getElementById("remember");
  const togglePasswordBtn = document.querySelector(".toggle-password");
  const loginBtn = document.querySelector(".login-btn");

  // Check for remembered email on page load
  const rememberedEmail = localStorage.getItem("rememberedEmail");
  if (rememberedEmail) {
    emailInput.value = rememberedEmail;
    rememberCheckbox.checked = true;
  }

  // Toggle password visibility
  if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener("click", function () {
      const type = passwordInput.type === "password" ? "text" : "password";
      passwordInput.type = type;
      this.classList.toggle("fa-eye-slash");
      this.classList.toggle("fa-eye");
    });
  }

  // Form submission handler
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const rememberMe = rememberCheckbox.checked;

      // Simple validation
      if (!email || !email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address");
        return;
      }

      if (!password || password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
      }

      // Show loading state
      const originalText = loginBtn.innerHTML;
      loginBtn.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Logging in...';
      loginBtn.disabled = true;

      // Simulate API call with timeout
      setTimeout(() => {
        // Simple mock validation (replace with real API call)
        const validUsers = [
          { email: "admin@dthrift.com", password: "password123" },
          { email: "user@dthrift.com", password: "user1234" },
        ];

        const isValidUser = validUsers.some(
          (user) => user.email === email && user.password === password
        );

        if (isValidUser) {
          // Remember email if checkbox is checked
          if (rememberMe) {
            localStorage.setItem("rememberedEmail", email);
          } else {
            localStorage.removeItem("rememberedEmail");
          }

          // Show success and redirect
          alert("Login successful! Redirecting...");
          window.location.href = "../HTML/baju.html";
        } else {
          alert("Invalid email or password");
          loginBtn.innerHTML = originalText;
          loginBtn.disabled = false;
        }
      }, 1000);
    });
  }
});
