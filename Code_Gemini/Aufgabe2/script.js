// Warten, bis das gesamte HTML-Dokument geladen ist
document.addEventListener('DOMContentLoaded', function() {

    // 1. Copyright-Jahr im Footer dynamisch aktualisieren
    const footerText = document.getElementById('footer-text');
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.textContent = `© ${currentYear} Meine Webseite`;
    }

    // 2. Event-Listener für den Button in der Seitenleiste
    const infoButton = document.getElementById('info-button');
    if (infoButton) {
        infoButton.addEventListener('click', function() {
            alert('Button in der Seitenleiste wurde geklickt!');
        });
    }

});