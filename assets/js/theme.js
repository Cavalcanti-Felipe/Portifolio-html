// Seleciona o botão e o corpo
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Classe do tema escuro
const DARK_THEME_CLASS = 'dark-theme';

// Alternar tema ao clicar no botão
themeToggle.addEventListener('click', () => {
    const isDark = body.classList.toggle(DARK_THEME_CLASS);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Carregar o tema salvo ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add(DARK_THEME_CLASS);
    }
});
