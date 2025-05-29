document.addEventListener("DOMContentLoaded", function () {
  // Tab Switching Functionality
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to clicked button and corresponding content
      button.classList.add("active");
      const tabId = button.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });

  // Profile Form Submission
  const profileForm = document.querySelector(".profile-form");
  if (profileForm) {
    profileForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const fullName = document.getElementById("fullname").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const birthdate = document.getElementById("birthdate").value;

      // Here you would typically send this data to a server
      console.log("Profile updated:", { fullName, email, phone, birthdate });

      // Show success message (you can replace this with a proper notification)
      alert("Profile updated successfully!");
    });
  }

  // Edit Avatar Button
  const editAvatarBtn = document.querySelector(".edit-avatar");
  if (editAvatarBtn) {
    editAvatarBtn.addEventListener("click", function (e) {
      e.preventDefault();
      // In a real app, this would open a file dialog to upload a new avatar
      alert("Feature to change avatar coming soon!");
    });
  }

  // Shopping Cart Toggle
  const cartIcon = document.querySelector(".shopping-cart-icon");
  const shoppingCart = document.querySelector(".shopping-cart");
  if (cartIcon && shoppingCart) {
    cartIcon.addEventListener("click", function (e) {
      e.preventDefault();
      shoppingCart.classList.toggle("active");
    });
  }

  // Remove Item from Cart
  const removeButtons = document.querySelectorAll(".remove-item");
  removeButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const cartItem = this.closest(".cart-item");
      cartItem.remove();
      // You would also update the cart total here
    });
  });

  // Wishlist Functionality
  const wishlistRemoveBtns = document.querySelectorAll(".wishlist-btn.remove");
  wishlistRemoveBtns.forEach((button) => {
    button.addEventListener("click", function () {
      const wishlistItem = this.closest(".wishlist-item");
      wishlistItem.remove();
    });
  });

  const wishlistAddToCartBtns = document.querySelectorAll(
    ".wishlist-btn:not(.remove)"
  );
  wishlistAddToCartBtns.forEach((button) => {
    button.addEventListener("click", function () {
      // In a real app, this would add the item to the cart
      alert("Item added to cart!");
    });
  });

  // Reorder Button
  const reorderButtons = document.querySelectorAll(".order-footer .btn22");
  reorderButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      // In a real app, this would add all items from the order to the cart
      alert("Items from this order have been added to your cart!");
    });
  });

  // Add New Address Button
  const addAddressBtn = document.querySelector("#address .btn22");
  if (addAddressBtn) {
    addAddressBtn.addEventListener("click", function (e) {
      e.preventDefault();
      // In a real app, this would open a form to add a new address
      alert("Feature to add new address coming soon!");
    });
  }

  // Edit Address Button
  const editAddressBtn = document.querySelector(".edit-address");
  if (editAddressBtn) {
    editAddressBtn.addEventListener("click", function (e) {
      e.preventDefault();
      // In a real app, this would open a form to edit the address
      alert("Feature to edit address coming soon!");
    });
  }
});
