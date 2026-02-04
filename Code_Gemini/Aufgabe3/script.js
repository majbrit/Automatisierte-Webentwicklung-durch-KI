// Wir warten, bis das gesamte HTML-Dokument geladen ist
document.addEventListener("DOMContentLoaded", function() {

    // Wir holen uns die Elemente, mit denen wir arbeiten wollen
    const registrationForm = document.getElementById("registrationForm");
    const messageElement = document.getElementById("message");

    // Wir fügen einen Event-Listener für das 'submit'-Ereignis des Formulars hinzu
    registrationForm.addEventListener("submit", function(event) {
        
        // Verhindert das Standardverhalten des Formulars (Seiten-Neuladen)
        event.preventDefault(); 

        // 1. Daten aus den Feldern auslesen
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const age = document.getElementById("age").value;

        // 2. Einfache Validierung (prüfen, ob die Felder nicht leer sind)
        // (Der Browser macht das dank 'required' schon, aber als Beispiel)
        if (name === "" || email === "" || age === "") {
            messageElement.textContent = "Bitte füllen Sie alle Felder aus.";
            messageElement.className = "error";
            return; // Bricht die Funktion hier ab
        }

        if (age <= 0) {
             messageElement.textContent = "Bitte geben Sie ein gültiges Alter an.";
             messageElement.className = "error";
             return;
        }

        // 3. Erfolgsfall
        console.log("Formulardaten empfangen:");
        console.log("Name:", name);
        console.log("E-Mail:", email);
        console.log("Alter:", age);

        // Zeige eine Erfolgsmeldung an
        messageElement.textContent = `Vielen Dank, ${name}! Ihre Registrierung war erfolgreich.`;
        messageElement.className = "success";

        // Optional: Formularfelder leeren
        registrationForm.reset();
    });
});