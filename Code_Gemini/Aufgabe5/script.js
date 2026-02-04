// Wartet, bis das gesamte HTML-Dokument geladen ist
document.addEventListener('DOMContentLoaded', () => {

    // Holt sich den Button und den Tabellenkörper (tbody)
    const button = document.getElementById('addRowBtn');
    const tableBody = document.querySelector('table tbody');

    // Fügt einen Event-Listener hinzu, der auf Klicks auf den Button wartet
    button.addEventListener('click', () => {
        
        // Zählt die aktuellen Zeilen, um die neue Zeilennummer zu bestimmen
        const rowCount = tableBody.rows.length;
        const newRowNumber = rowCount + 1; // Die Datenzeilen starten bei 1, aber wir haben schon 2, also ist die nächste "Zeile 3"

        // 1. Erstellt ein neues <tr> (table row) Element
        const newRow = document.createElement('tr');

        // 2. Erstellt drei <td> (table data) Zellen
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        const cell3 = document.createElement('td');

        // 3. Füllt die Zellen mit Inhalt
        cell1.textContent = `Zeile ${newRowNumber}, Zelle 1`;
        cell2.textContent = `Zeile ${newRowNumber}, Zelle 2`;
        cell3.textContent = `Zeile ${newRowNumber}, Zelle 3`;

        // 4. Fügt die Zellen zur neuen Zeile hinzu
        newRow.appendChild(cell1);
        newRow.appendChild(cell2);
        newRow.appendChild(cell3);

        // 5. Fügt die komplett neue Zeile zum Tabellenkörper hinzu
        tableBody.appendChild(newRow);
    });

});