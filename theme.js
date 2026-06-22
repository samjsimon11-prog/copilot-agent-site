(function () {
  const root = document.documentElement;
  const toggles = document.querySelectorAll(".theme-toggle");

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("site-theme", theme);
    } catch (e) {}
  }

  function initTheme() {
    let saved;
    try {
      saved = localStorage.getItem("site-theme");
    } catch (e) {}

    if (saved === "dark" || saved === "light") {
      setTheme(saved);
    } else {
      setTheme("light");
    }
  }

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "light";
      setTheme(current === "light" ? "dark" : "light");
    });
  });

  initTheme();
})();
