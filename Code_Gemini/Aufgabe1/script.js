// Wir warten, bis das gesamte HTML-Dokument geladen ist
document.addEventListener("DOMContentLoaded", function() {
    
    // Alle Elemente mit der Klasse 'nav-link' auswählen
    const navLinks = document.querySelectorAll('.nav-link');

    // Funktion, um die 'active'-Klasse von allen Links zu entfernen
    function removeActiveClasses() {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    }

    // Für jeden Link einen Klick-Event-Listener hinzufügen
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Zuerst 'active' von allen Links entfernen
            removeActiveClasses();
            
            // Dann 'active' nur zum angeklickten Link hinzufügen
            this.classList.add('active');
        });
    });

    // Hinweis: Der 'Home'-Link hat die 'active'-Klasse bereits im HTML,
    // damit beim ersten Laden der Seite ein Link aktiv ist.
});