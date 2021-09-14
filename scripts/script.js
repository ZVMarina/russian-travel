const langLinkElements = document.querySelectorAll('.header__lang-link');

function addLangLinkHandler() {
    langLinkElements.forEach(langEl => {
        langEl.addEventListener('click', () => {
            toggleActiveLangLink(langEl)
        });
    })
}

function toggleActiveLangLink(langEl) {
    langLinkElements.forEach(link => {
        link.classList.remove('header__lang-link_active');
    })
    langEl.classList.add('header__lang-link_active')
}

window.addEventListener('load', addLangLinkHandler);
