// Toggle Navigation (for mobile)
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Contact Form (demo)
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you, your message has been sent successfully!");
  form.reset();
});
