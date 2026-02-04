// Warten, bis das gesamte HTML-Dokument geladen ist
document.addEventListener('DOMContentLoaded', () => {

    // Alle Sektionen auswählen, die animiert werden sollen
    const sections = document.querySelectorAll('.story-section');

    // Überprüfen, ob der Browser den IntersectionObserver überhaupt unterstützt
    if (!('IntersectionObserver' in window)) {
        // Fallback für alte Browser: Alle Animationen sofort anzeigen
        sections.forEach(section => {
            section.classList.add('is-visible');
        });
        return; // Script-Ausführung hier beenden
    }

    // Optionen für den Observer:
    // Die Animation soll starten, wenn 25% der Sektion sichtbar sind
    const observerOptions = {
        root: null, // Verwendet den Viewport als "root"
        rootMargin: '0px',
        threshold: 0.25 // 25% Sichtbarkeit
    };

    // Die Callback-Funktion, die aufgerufen wird, wenn sich die Sichtbarkeit ändert
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Überprüfen, ob die Sektion jetzt sichtbar ist (intersecting)
            if (entry.isIntersecting) {
                // Klasse hinzufügen, um die CSS-Animation auszulösen
                entry.target.classList.add('is-visible');
                
                // Sobald die Animation einmal ausgelöst wurde,
                // stoppen wir die Beobachtung für dieses Element (spart Performance)
                observer.unobserve(entry.target);
            }
            // Wir brauchen keinen 'else'-Teil, da die Animation nicht rückgängig gemacht werden soll
        });
    };

    // Den Observer erstellen
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Jede Sektion anweisen, vom Observer "beobachtet" zu werden
    sections.forEach(section => {
        observer.observe(section);
    });

});