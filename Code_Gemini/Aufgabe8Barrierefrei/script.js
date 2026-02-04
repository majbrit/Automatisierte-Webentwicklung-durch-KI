// Warte, bis die gesamte Seite geladen ist
document.addEventListener('DOMContentLoaded', () => {

    // Finde den Knopf und die Anzeige-Box im HTML
    const tipButton = document.getElementById('tipButton');
    const tipDisplay = document.getElementById('tipDisplay');

    // Eine Liste mit lustigen Tipps
    const tips = [
        "Versuche mal, beim Springen deine Knie ganz hoch zu ziehen!",
        "Hüpfe auf nur einem Bein. Schaffst du fünf Sprünge?",
        "Springe rückwärts! (Aber pass auf, dass du nicht stolperst.)",
        "Versuche, das Seil zweimal zu schwingen, bevor du landest (Double Under)!",
        "Lege Musik auf und versuche, im Rhythmus zu springen.",
        "Denk daran: Übung macht den Meister! Jeder fängt mal klein an."
    ];

    // Diese Funktion wird ausgeführt, wenn der Knopf geklickt wird
    function showRandomTip() {
        // 1. Wähle einen zufälligen Tipp aus der Liste
        const randomIndex = Math.floor(Math.random() * tips.length);
        const randomTip = tips[randomIndex];

        // 2. Zeige den Tipp in der Box an
        tipDisplay.textContent = randomTip;
    }

    // Sage dem Knopf, dass er auf Klicks "hören" soll
    // Überprüfe zuerst, ob der Button überhaupt existiert
    if (tipButton) {
        tipButton.addEventListener('click', showRandomTip);
    }

});