function getCurrentYear() {
  const currentYear = new Date().getFullYear();
  return currentYear;
}

function updateFooterText() {
  const footerText = document.getElementById("footer-text");
  const currentYear = getCurrentYear();
  footerText.innerHTML = `©${currentYear} Limpiezas Nancy. Todos los derechos reservados.`;
}

updateFooterText();

document.addEventListener("click", function (event) {
  const target = event.target;
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navbarNav = document.getElementById("navbarNav");
  const isNavOpen = navbarNav.classList.contains("show");

  if (
    !target.closest(".navbar-toggler") &&
    !target.closest("#navbarNav") &&
    isNavOpen
  ) {
    hamburgerBtn.click();
  }
});

// ScrollReveal().reveal(".card-reveal", { delay: 500 });
// ScrollReveal().reveal(".card-reveal2", { delay: 800 });
