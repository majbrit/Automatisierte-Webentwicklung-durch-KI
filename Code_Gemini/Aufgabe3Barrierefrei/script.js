// Warten, bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function() {
    
    // Formular und wichtige Elemente auswählen
    const form = document.getElementById("anmeldeformular");
    const statusDiv = document.getElementById("form-status");

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const ageInput = document.getElementById("age");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const ageError = document.getElementById("age-error");

    // 'novalidate' im HTML verhindert die Standard-Browser-Validierung,
    // damit wir unsere eigene, einheitliche Validierung durchführen können.
    
    form.addEventListener("submit", function(event) {
        // Verhindert das Standard-Absenden des Formulars
        event.preventDefault();
        
        // Setzt den Status zurück
        let isValid = true;
        statusDiv.textContent = "";
        statusDiv.className = "";
        nameError.textContent = "";
        emailError.textContent = "";
        ageError.textContent = "";

        nameInput.setAttribute("aria-invalid", "false");
        emailInput.setAttribute("aria-invalid", "false");
        ageInput.setAttribute("aria-invalid", "false");

        // 1. Name validieren (darf nicht leer sein)
        if (nameInput.value.trim() === "") {
            isValid = false;
            nameError.textContent = "Bitte geben Sie Ihren Namen ein.";
            nameInput.setAttribute("aria-invalid", "true");
        }
        
        // 2. E-Mail validieren (einfache Prüfung)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === "") {
            isValid = false;
            emailError.textContent = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
            emailInput.setAttribute("aria-invalid", "true");
        } else if (!emailPattern.test(emailInput.value.trim())) {
            isValid = false;
            emailError.textContent = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
            emailInput.setAttribute("aria-invalid", "true");
        }
        
        // 3. Alter validieren (muss eine positive Zahl sein)
        const age = parseInt(ageInput.value, 10);
        if (isNaN(age) || age <= 0) {
            isValid = false;
            ageError.textContent = "Bitte geben Sie ein gültiges Alter ein (mindestens 1).";
            ageInput.setAttribute("aria-invalid", "true");
        }

        // 4. Feedback basierend auf Validierung geben
        if (isValid) {
            // Erfolgsfall
            statusDiv.textContent = "Anmeldung erfolgreich! Vielen Dank.";
            statusDiv.className = "success";
            
            // In einer echten Anwendung würden Sie die Daten hier senden,
            // z.B. mit fetch()
            console.log("Formulardaten:", {
                name: nameInput.value,
                email: emailInput.value,
                age: ageInput.value
            });
            
            // Formular zurücksetzen
            form.reset();
            
        } else {
            // Fehlerfall
            statusDiv.textContent = "Bitte korrigieren Sie die markierten Fehler.";
            statusDiv.className = "error";
            // Der Fokus wird auf die Statusmeldung gesetzt, damit Screenreader-Nutzer
            // sofort über das Problem informiert werden.
            statusDiv.focus(); 
        }
    });
});