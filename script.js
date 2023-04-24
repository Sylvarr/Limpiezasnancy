window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("content-wrapper").style.opacity = "1";
    document.getElementById("loading-screen").style.opacity = "0";
    setTimeout(function () {
      document.getElementById("loading-screen").style.display = "none";
    }, 800);
  }, 800);
});

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

ScrollReveal().reveal(".servicios1", { delay: 300 });
ScrollReveal().reveal(".card-reveal", { delay: 250 });
