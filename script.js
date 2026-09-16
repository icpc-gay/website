const translations = {
    en: {
        language: "English",

        eyebrow:
            "INTERNATIONAL COLLEGIATE PROGRAMMING CONTEST",

        title:
            "ICPC.GAY",

        subtitle:
            "Code. Compete. Create.",

        description:
            "A place for programmers, problem solvers, and everyone who enjoys competitive programming.",

        button1:
            "Explore",

        button2:
            "About"
    },

    zh: {
        language: "中文",

        eyebrow:
            "国际大学生程序设计竞赛",

        title:
            "ICPC.GAY",

        subtitle:
            "编程 · 竞赛 · 创造",

        description:
            "一个属于程序员、问题解决者，以及所有热爱程序设计竞赛的人的地方。",

        button1:
            "探索",

        button2:
            "关于"
    }
};


const languageButton =
    document.getElementById("languageButton");

const languageMenu =
    document.getElementById("languageMenu");

const languageText =
    document.getElementById("languageText");


/*
 * Open / close language menu
 */

languageButton.addEventListener("click", (event) => {
    event.stopPropagation();

    const open =
        languageMenu.classList.toggle("open");

    languageButton.classList.toggle(
        "open",
        open
    );
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

            const language =
                button.dataset.language;

            setLanguage(language);
        });
    });


function setLanguage(language) {

    const translation =
        translations[language];

    if (!translation) {
        return;
    }


    /*
     * Change every translated element
     */

    document
        .querySelectorAll("[data-i18n]")
        .forEach((element) => {

            const key =
                element.dataset.i18n;

            if (translation[key]) {
                element.textContent =
                    translation[key];
            }
        });


    /*
     * Update language button
     */

    languageText.textContent =
        translation.language;


    /*
     * Update HTML language attribute
     */

    document.documentElement.lang =
        language;


    /*
     * Remember user's language
     */

    localStorage.setItem(
        "language",
        language
    );


    /*
     * Close menu
     */

    languageMenu.classList.remove("open");

    languageButton.classList.remove("open");
}


/*
 * Load saved language
 */

const savedLanguage =
    localStorage.getItem("language");


if (savedLanguage && translations[savedLanguage]) {
    setLanguage(savedLanguage);
}