// Warten, bis das HTML-Dokument vollständig geladen ist
document.addEventListener('DOMContentLoaded', () => {

    // Die benötigten Elemente aus dem DOM holen
    const slider = document.getElementById('volume-slider');
    const output = document.getElementById('volume-output');

    // Funktion, um den Wert zu aktualisieren
    function updateSlider(value) {
        // 1. Visuelles Output-Element aktualisieren
        output.textContent = `${value}%`;
        
        // 2. ARIA-Attribute für Screenreader aktualisieren
        // 'aria-valuenow' ist der reine Zahlenwert
        slider.setAttribute('aria-valuenow', value);
        
        // 'aria-valuetext' gibt einen verständlichen Text aus
        // z.B. "Lautstärke: 50 Prozent" statt nur "50"
        slider.setAttribute('aria-valuetext', `Lautstärke: ${value} Prozent`);
    }

    // Den initialen Zustand setzen, falls der Standardwert (value="50")
    // beim Laden der Seite angezeigt werden soll.
    updateSlider(slider.value);

    // Event-Listener hinzufügen:
    // Das 'input'-Ereignis feuert bei JEDER kleinen Bewegung des Reglers.
    // (Alternativ 'change', das erst feuert, wenn man loslässt)
    slider.addEventListener('input', (event) => {
        updateSlider(event.target.value);
    });

});