async function loadTranslation(lng) {
  try {
    const res = await fetch(`assets/locales/${lng}/translation.json`);
    if (!res.ok) throw new Error("Could not load " + lng);
    return await res.json();
  } catch (e) {
    console.error(e);
    return null;
  }
}

const updateContent = () =>
  document
    .querySelectorAll("[data-i18n]")
    .forEach((el) => (el.innerHTML = i18next.t(el.getAttribute("data-i18n"))));

(async () => {
  const savedLang = localStorage.getItem("language") || "ro";
  const translations = await loadTranslation(savedLang);

  i18next.init(
    {
      lng: savedLang,
      fallbackLng: "ro",
      resources: {
        [savedLang]: {
          translation: translations,
        },
      },
    },
    updateContent
  );
  const currentLangText = document.getElementById("current-lang-text");
  if (currentLangText) currentLangText.textContent = savedLang.toUpperCase();
})();

async function changeLanguage(lang) {
  const currentLangText = document.getElementById("current-lang-text");

  if (currentLangText) currentLangText.textContent = lang.toUpperCase();

  const data = await loadTranslation(lang);
  if (data) {
    i18next.addResourceBundle(lang, "translation", data, true, true);
    i18next.changeLanguage(lang, () => {
      updateContent();
    });
    localStorage.setItem("language", lang);
  }
  document.querySelector(".language-dropdown").classList.remove("show");
}

function toggleDropdown() {
  const dropdown = document.querySelector(".language-dropdown");
  dropdown.classList.toggle("show");
}

window.addEventListener("click", function (e) {
  const dropdown = document.querySelector(".language-dropdown");
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("show");
  }
});
