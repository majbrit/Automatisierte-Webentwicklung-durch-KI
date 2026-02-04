'use strict';

// Warten, bis das HTML-Dokument vollständig geladen ist
document.addEventListener('DOMContentLoaded', () => {

    const toggle = document.getElementById('darkmode-toggle');
    const html = document.documentElement; // Das <html>-Tag

    // 1. Funktion zum Anwenden des Themes
    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme); // Auswahl speichern
        // Schalter-Zustand synchronisieren
        toggle.checked = (theme === 'dark'); 
    }

    // 2. Prüfen, ob eine Einstellung im localStorage gespeichert ist
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        // Gespeichertes Theme anwenden
        applyTheme(savedTheme);
    } else {
        // 3. Wenn nichts gespeichert ist: Systemeinstellung prüfen
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }

    // 4. Event Listener für den Klick auf den Schalter
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            applyTheme('dark');
        } else {
            applyTheme('light');
        }
    });

    // (Optional) Auf Änderungen der Systemeinstellung hören
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Nur ändern, wenn der Benutzer nicht manuell etwas ausgewählt hat
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });

});