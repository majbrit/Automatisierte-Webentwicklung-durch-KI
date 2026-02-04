// script.js

// 1. Warte, bis das gesamte HTML-Dokument geladen ist
document.addEventListener('DOMContentLoaded', (event) => {
    
    // 2. Finde das Button-Element über seine ID
    const button = document.getElementById('alertButton');

    // 3. Füge einen "Event Listener" hinzu, der auf einen Klick wartet
    button.addEventListener('click', function() {
        
        // 4. Wenn geklickt wird, zeige den Alert an
        alert('Hallo Welt!');
    });
});