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
  const en = await loadTranslation("en");
  i18next.init(
    {
      lng: "en",
      fallbackLng: "en",
      resources: {
        en: {
          translation: en,
        },
      },
    },
    updateContent
  );
})();


async function changeLanguage(lang) {
  const currentLangText = document.getElementById("current-lang-text");

  if (lang === "en") currentLangText.textContent = "EN";
  if (lang === "ru") currentLangText.textContent = "RU";
  if (lang === "ro") currentLangText.textContent = "RO";

  const data = await loadTranslation(lang);
  if (data) {
    i18next.addResourceBundle(lang, "translation", data, true, true);
    i18next.changeLanguage(lang, () => {
      updateContent();
    });
  }
  document.querySelector(".language-dropdown").classList.remove("show");
}

function toggleDropdown() {
  const dropdown = document.querySelector(".language-dropdown");
  dropdown.classList.toggle("show");
}

// Close dropdown if clicked outside
window.addEventListener("click", function (e) {
  const dropdown = document.querySelector(".language-dropdown");
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("show");
  }
});
