const toggle = document.querySelector("[data-lang-toggle]");
let storedLocale;
try {
  storedLocale = localStorage.getItem("tiger-site-locale");
} catch {
  // File previews and privacy settings may disable browser storage.
}
const initialLocale = storedLocale === "zh" ? "zh" : "en";

function setLocale(locale) {
  document.body.classList.toggle("locale-zh", locale === "zh");
  document.body.classList.toggle("locale-en", locale !== "zh");
  document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  try {
    localStorage.setItem("tiger-site-locale", locale);
  } catch {
    // Keep switching usable even when the preference cannot be persisted.
  }
  if (toggle) {
    toggle.textContent = locale === "zh" ? "English" : "中文";
    toggle.setAttribute("lang", locale === "zh" ? "en" : "zh-CN");
    toggle.setAttribute("aria-label", locale === "zh" ? "Switch to English" : "切换到中文");
  }
}

setLocale(initialLocale);

document.querySelectorAll(".lang-en").forEach((element) => element.lang = "en");
document.querySelectorAll(".lang-zh").forEach((element) => element.lang = "zh-CN");

const topbar = document.querySelector(".topbar");
if (topbar && "ResizeObserver" in window) {
  new ResizeObserver(() => {
    document.documentElement.style.setProperty("--header-offset", `${topbar.offsetHeight + 32}px`);
  }).observe(topbar);
}

if (toggle) {
  toggle.addEventListener("click", () => {
    const nextLocale = document.body.classList.contains("locale-zh") ? "en" : "zh";
    setLocale(nextLocale);
  });
}
