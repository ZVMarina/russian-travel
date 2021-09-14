const langLink = document.querySelectorAll('.header__lang-link');

function langActive() {
    langLink.forEach(lang => {
        lang.addEventListener('click', () => {
            langLink.forEach(link => {
                link.classList.remove('header__lang-link_active');
            })
            lang.classList.add('header__lang-link_active')
        });
    })
}

langActive()
