// 1. Wähle die Checkbox (den Schalter) aus
const toggleSwitch = document.getElementById('checkbox');

// 2. Wähle den <body> aus
const body = document.body;

// 3. Füge einen Event-Listener hinzu, der auf "change" (Klick) reagiert
toggleSwitch.addEventListener('change', function() {
    // 4. Füge die Klasse 'dark-mode' zum <body> hinzu ODER entferne sie.
    // .classList.toggle() macht genau das automatisch.
    body.classList.toggle('dark-mode');
});