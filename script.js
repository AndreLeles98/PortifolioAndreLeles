function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-en]');

    elements.forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) {
            el.textContent = text;
        }
    });

    localStorage.setItem("lang", lang);
}

function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;

    if (userLang.toLowerCase().startsWith("pt")) {
        return "pt";
    }

    return "en";
}

window.onload = () => {
    const savedLang = localStorage.getItem("lang");

    if (savedLang) {
        setLanguage(savedLang);
    } else {
        const detected = detectLanguage();
        setLanguage(detected);
    }
};