const langLinkElements = document.querySelectorAll('.header__lang-link');

function addLangLinkHandler() {
    document.addEventListener('click', (event) => {
        if (event.target.closest('.header__lang-link')) {
            toggleActiveLangLink(event.target);
        }
    })
}

function toggleActiveLangLink(langEl) {
    langLinkElements.forEach(linkEl => {
        linkEl.classList.remove('header__lang-link_active');
    })
    langEl.classList.add('header__lang-link_active');
}

window.addEventListener('load', addLangLinkHandler);
