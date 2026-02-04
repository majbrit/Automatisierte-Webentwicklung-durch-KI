// Wir warten, bis das gesamte HTML-Dokument geladen ist.
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Hermann-Gitter aufbauen ---
    const gridContainer = document.querySelector('.hermann-grid');
    
    // Prüfen, ob das Gitter-Element auf der Seite existiert
    if (gridContainer) {
        const squareCount = 36; // 6x6 Gitter
        for (let i = 0; i < squareCount; i++) {
            const square = document.createElement('div');
            // 'aria-hidden' ist hier sinnvoll, da die Quadrate
            // für Screenreader keinen Inhalt haben und nur Teil
            // der visuellen Illusion sind, die bereits beschrieben wurde.
            square.setAttribute('aria-hidden', 'true');
            gridContainer.appendChild(square);
        }
    }


    // --- 2. Phi-Phänomen (Apparente Bewegung) steuern ---
    const dot1 = document.getElementById('dot1');
    const dot2 = document.getElementById('dot2');
    const motionNotice = document.getElementById('motion-notice');

    // Prüfen, ob alle benötigten Elemente vorhanden sind
    if (dot1 && dot2 && motionNotice) {
        
        // Abfragen der Systemeinstellung für reduzierte Bewegung
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        let animationInterval = null;
        let currentState = true; // true = dot1 aktiv, false = dot2 aktiv

        // Funktion, die die Punkte umschaltet
        function toggleDots() {
            if (currentState) {
                dot1.classList.add('active');
                dot2.classList.remove('active');
            } else {
                dot1.classList.remove('active');
                dot2.classList.add('active');
            }
            currentState = !currentState;
        }

        // Funktion, die auf Einstellungs-Änderungen reagiert
        function handleMotionChange() {
            if (motionQuery.matches) {
                // BEWEGUNG REDUZIEREN:
                // Animation stoppen, falls sie läuft
                if (animationInterval) {
                    clearInterval(animationInterval);
                    animationInterval = null;
                }
                // Einen statischen, barrierefreien Zustand anzeigen (beide Punkte sichtbar)
                dot1.classList.add('active');
                dot2.classList.add('active');
                // Hinweis einblenden
                motionNotice.style.display = 'block';
            } else {
                // BEWEGUNG ERLAUBT:
                // Hinweis ausblenden
                motionNotice.style.display = 'none';
                // Animation starten, falls sie nicht schon läuft
                if (!animationInterval) {
                    toggleDots(); // Sofort starten
                    animationInterval = setInterval(toggleDots, 300); // Alle 300ms wechseln
                }
            }
        }

        // Führe die Prüfung beim Laden der Seite einmal aus
        handleMotionChange();

        // Überwache Änderungen an der Systemeinstellung
        motionQuery.addEventListener('change', handleMotionChange);
    }

});