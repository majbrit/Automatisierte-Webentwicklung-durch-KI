// Warte, bis das gesamte HTML-Dokument geladen ist
document.addEventListener("DOMContentLoaded", () => {

    // Hole die notwendigen Elemente für die Nachbild-Illusion
    const stareButton = document.getElementById("stare-button");
    const afterimageBox = document.getElementById("afterimage-box");
    const afterimageText = document.getElementById("afterimage-text");

    // Füge einen Event-Listener zum Button hinzu
    stareButton.addEventListener("click", startAfterimageIllusion);

    function startAfterimageIllusion() {
        // 1. Button deaktivieren, um doppeltes Klicken zu verhindern
        stareButton.disabled = true;
        stareButton.textContent = "Starren...";

        // 2. Den Anweisungstext und die Box vorbereiten
        afterimageText.textContent = "Starre 10 Sekunden lang auf den schwarzen Punkt in der Mitte!";
        
        // Setze den Hintergrund auf Grün und füge den schwarzen Punkt hinzu
        afterimageBox.style.backgroundColor = "var(--main-green)";
        afterimageBox.innerHTML = '<div class="dot"></div>';

        // 3. Starte einen Timer für 10 Sekunden (10000 Millisekunden)
        setTimeout(() => {
            // 4. Nach 10 Sekunden:
            // Ändere den Hintergrund auf Weiß und entferne den Punkt
            afterimageBox.style.backgroundColor = "var(--white)";
            afterimageBox.innerHTML = ''; // Entfernt den Punkt

            // Aktualisiere den Text
            afterimageText.textContent = "Siehst du jetzt das pinke (magentafarbene) Nachbild auf der weißen Fläche? Blinzle, wenn du nichts siehst.";
            
            // 5. Mache den Button wieder klickbar für einen neuen Versuch
            stareButton.disabled = false;
            stareButton.textContent = "Nochmal versuchen";

        }, 10000); // 10 Sekunden
    }
});