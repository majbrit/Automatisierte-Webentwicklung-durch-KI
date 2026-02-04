// Wir warten, bis das gesamte HTML-Dokument geladen ist
document.addEventListener('DOMContentLoaded', () => {

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // 1. Gespeichertes Theme beim Laden der Seite prüfen
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.setAttribute('aria-pressed', 'true');
    }

    // 2. Event-Listener für den Button
    themeToggle.addEventListener('click', () => {
        // Klasse auf dem Body umschalten
        body.classList.toggle('dark-mode');

        // Status für Barrierefreiheit und Speicherung prüfen
        if (body.classList.contains('dark-mode')) {
            // Im Dark Mode
            themeToggle.setAttribute('aria-pressed', 'true');
            localStorage.setItem('theme', 'dark');
        } else {
            // Im Light Mode
            themeToggle.setAttribute('aria-pressed', 'false');
            localStorage.setItem('theme', 'light');
        }
    });

});