// Mobile menu toggle
const burger = document.querySelector("[data-burger]");
const mobile = document.querySelector("[data-mobile]");

if (burger && mobile) {
  burger.addEventListener("click", () => {
    mobile.classList.toggle("show");
  });
}

// Active link highlight based on filename
const path = window.location.pathname.toLowerCase();
document.querySelectorAll("a[data-nav]").forEach(a => {
  const href = (a.getAttribute("href") || "").toLowerCase();
  if (href && path.endsWith(href)) a.classList.add("active");
  if ((path.endsWith("/") || path.endsWith("index.html")) && (href === "index.html")) a.classList.add("active");
});
