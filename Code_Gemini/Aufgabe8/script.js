// Wir warten, bis die gesamte Webseite geladen ist.
document.addEventListener('DOMContentLoaded', () => {

    // Wir holen uns die HTML-Elemente, die wir brauchen.
    const jumpButton = document.getElementById('jump-button');
    const counterDisplay = document.getElementById('jump-counter');

    // Wir erstellen eine Variable, um die Sprünge zu zählen.
    let jumpCount = 0;

    // Diese Funktion wird jedes Mal aufgerufen, wenn der Knopf gedrückt wird.
    function handleJump() {
        // 1. Erhöhe den Zähler
        jumpCount = jumpCount + 1;
        
        // 2. Zeige die neue Zahl auf der Webseite an
        counterDisplay.textContent = jumpCount;

        // Bonus: Ein kleiner Wackel-Effekt für den Knopf
        jumpButton.style.transform = 'scale(1.1)';
        
        // Setze den Knopf nach einer kurzen Zeit zurück
        setTimeout(() => {
            jumpButton.style.transform = 'scale(1)';
        }, 100); // 100 Millisekunden
    }

    // Wir sagen dem Knopf, dass er auf "Klicks" hören soll
    jumpButton.addEventListener('click', handleJump);

});