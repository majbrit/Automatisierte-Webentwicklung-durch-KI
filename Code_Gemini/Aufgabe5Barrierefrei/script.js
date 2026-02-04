// Wir warten, bis das gesamte HTML-Dokument geladen ist,
// bevor wir versuchen, Elemente zu finden.
document.addEventListener("DOMContentLoaded", () => {
    
    // Finde den Button und die Tabelle über ihre IDs
    const toggleButton = document.getElementById("toggleButton");
    const table = document.getElementById("datenTabelle");

    // Stelle sicher, dass beide Elemente existieren, bevor wir weitermachen
    if (toggleButton && table) {
        
        // Füge einen Klick-Event-Listener zum Button hinzu
        toggleButton.addEventListener("click", () => {
            
            // 1. Überprüfe den aktuellen Zustand
            // Wir lesen den 'aria-expanded'-Status aus, der als "true" oder "false" (String) gespeichert ist.
            const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";

            // 2. Ändere die Sichtbarkeit der Tabelle
            // Wir verwenden die 'hidden'-Eigenschaft, die semantisch korrekt ist
            // und von Screenreadern verstanden wird.
            // Wenn sie expanded (sichtbar) war, wird sie jetzt versteckt (hidden = true).
            table.hidden = isExpanded;

            // 3. Aktualisiere den ARIA-Status
            // Setze den Status auf den entgegengesetzten Wert.
            toggleButton.setAttribute("aria-expanded", !isExpanded);

            // 4. Aktualisiere den Button-Text für sehende Benutzer
            // Ändere den Text, um die neue Aktion zu beschreiben.
            toggleButton.textContent = isExpanded
                ? "Tabelle einblenden"
                : "Tabelle ausblenden";
        });
    }
});