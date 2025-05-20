const hamburger = document.getElementById('hamburger-menu');
    const navbarNav = document.querySelector('.navbar-nav');

    hamburger.addEventListener('click', function () {
      navbarNav.classList.toggle('active');
    });

    document.querySelectorAll('.navbar-nav a').forEach(link =>
      link.addEventListener('click', () => {
        navbarNav.classList.remove('active');
      })
    );