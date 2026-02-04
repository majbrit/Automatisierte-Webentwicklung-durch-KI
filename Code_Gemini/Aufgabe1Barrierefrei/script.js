document.addEventListener('DOMContentLoaded', () => {
    
    // Hole den Button und das Menü aus dem DOM
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('#primary-navigation');

    // Stelle sicher, dass beide Elemente existieren, bevor ein Event Listener hinzugefügt wird
    if (navToggle && navMenu) {
        
        // Füge einen Klick-Event-Listener zum Button hinzu
        navToggle.addEventListener('click', () => {
            
            // 1. Schalte die CSS-Klasse '.nav-open' am Menü um
            // Dies steuert die Sichtbarkeit (display: none / display: flex)
            navMenu.classList.toggle('nav-open');
            
            // 2. Hole den aktuellen Status von aria-expanded
            // getAttribute gibt einen String "true" oder "false" zurück
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            
            // 3. Setze den ARIA-Status auf den gegenteiligen Wert
            // Wenn es 'true' war, setze es auf 'false', und umgekehrt.
            // Dies ist entscheidend für Screenreader.
            navToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }
});