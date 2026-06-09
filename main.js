// Highlight active nav link based on current page
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");
  const current = location.pathname.split("/").pop() || "index.html";
  links.forEach(link => {
    if (link.getAttribute("href") === current) link.classList.add("active");
  });
});

// Contact form handler
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const btn = form.querySelector("button[type=submit]");
    btn.textContent = "Sent ✓";
    btn.disabled = true;
    btn.style.background = "#2a6a3a";
    btn.style.color = "#fff";
  });
}
