// Wartet, bis das gesamte HTML-Dokument geladen und geparst ist
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Alle zu animierenden Sektionen auswählen
    const scrollSections = document.querySelectorAll('.scroll-section');

    // 2. Konfiguration für den Intersection Observer
    const observerOptions = {
        root: null, // Beobachtet im Verhältnis zum Viewport des Browsers
        rootMargin: '0px',
        threshold: 0.25 // Löst aus, wenn 25% des Elements sichtbar sind
    };

    // 3. Die Callback-Funktion, die aufgerufen wird, wenn eine Sektion ein- oder austritt
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Prüft, ob das Element jetzt im Viewport ist
            if (entry.isIntersecting) {
                // Fügt die CSS-Klasse hinzu, um die Animation auszulösen
                entry.target.classList.add('is-visible');
                
                // Stoppt die Beobachtung dieses Elements, da die Animation nur einmal ablaufen soll
                observer.unobserve(entry.target);
            }
        });
    };

    // 4. Den Observer erstellen
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 5. Jede Sektion anweisen, vom Observer beobachtet zu werden
    scrollSections.forEach(section => {
        observer.observe(section);
    });

});