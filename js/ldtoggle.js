const root = document.documentElement;
const toggleBtn = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  root.setAttribute("data-theme", "dark");
}

toggleBtn.addEventListener("click", () => {
  let current = root.getAttribute("data-theme");
  let next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

if (localStorage.getItem("theme") === "dark") {
    toggle.checked = true;
}