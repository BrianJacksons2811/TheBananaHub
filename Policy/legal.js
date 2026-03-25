document.addEventListener("DOMContentLoaded", function () {
  const revealItems = document.querySelectorAll(".reveal");

  // Show all reveal sections
  revealItems.forEach(function (item) {
    item.classList.add("visible");
  });

  // Highlight active nav link
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function (link) {
    const href = link.getAttribute("href");

    if (!href) return;

    const cleanHref = href.split("/").pop();

    if (cleanHref === currentPage) {
      link.style.fontWeight = "700";
      link.style.color = "#111827";
    }
  });

  console.log("legal.js loaded successfully");
});