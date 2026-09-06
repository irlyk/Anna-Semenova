document.querySelectorAll('.site-header').forEach((header) => {
    const navigation = header.querySelector('nav');
    const toggle = header.querySelector('.menu-toggle');

    toggle?.addEventListener('click', () => {
        const isOpen = navigation.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
        toggle.textContent = isOpen ? 'ЗАКРЫТЬ' : 'МЕНЮ';
    });

    navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
        navigation.classList.remove('is-open');
        toggle?.setAttribute('aria-expanded', 'false');
        if (toggle) toggle.textContent = 'МЕНЮ';
    }));
});
