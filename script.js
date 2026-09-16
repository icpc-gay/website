const languageButton = document.getElementById("languageButton");

const languageMenu = document.getElementById("languageMenu");

const languageText = document.getElementById("languageText");


/*
 * Open / close language menu
 */

languageButton.addEventListener("click", (event) => {
    event.stopPropagation();

    const open = languageMenu.classList.toggle("open");

    languageButton.classList.toggle("open", open);
});


/*
 * Close when clicking elsewhere
 */

document.addEventListener("click", () => {
    languageMenu.classList.remove("open");

    languageButton.classList.remove("open");
});


/*
 * Change language
 */

document
    .querySelectorAll("[data-language]")
    .forEach((button) => {

        button.addEventListener("click", (event) => {

            event.stopPropagation();

            const language = button.dataset.language;

            setLanguage(language);
        });
    });

async function setLanguage(language) {
    const response = await fetch(`/i18n/${language}.json`);
    const translation = await response.json();
    if (!translation) {
        return;
    }

    /*
     * Change every translated element
     */
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        element.textContent = translation[key] ?? key;
    });

    /*
     * Update language button
     */
    languageText.textContent = translation.language;

    /*
     * Update HTML language attribute
     */
    document.documentElement.lang = language;


    /*
     * Remember user's language
     */
    localStorage.setItem("language", language);


    /*
     * Close menu
     */
    languageMenu.classList.remove("open");

    languageButton.classList.remove("open");
}


/*
 * Load saved language
 */

const savedLanguage = localStorage.getItem("language") || "zh";

if (savedLanguage) {
    setLanguage(savedLanguage);
}