const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

// Smoothly prevent placeholder demo links from jumping to the top.
document.querySelectorAll(".disabled-link").forEach(link => {
  link.addEventListener("click", (event) => event.preventDefault());
});
