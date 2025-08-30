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

// Initialize with default language
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

// Update DOM
const updateContent = () =>
  document
    .querySelectorAll("[data-i18n]")
    .forEach((el) => (el.innerHTML = i18next.t(el.getAttribute("data-i18n"))));

// Switch language
async function changeLanguage(lng) {
  const data = await loadTranslation(lng);
  if (data) {
    i18next.addResourceBundle(lng, "translation", data, true, true);
    i18next.changeLanguage(lng, () => {
      updateContent();
      document
        .querySelectorAll(".language-switcher button")
        .forEach((btn) => btn.classList.remove("active"));
      document.getElementById("btn-" + lng).classList.add("active");
    });
  }
}
