document.addEventListener("DOMContentLoaded", function () {
    function updateLoveCounter() {
        // Startdatum als UTC setzen, um Fehler zu vermeiden
        const startDate = new Date(Date.UTC(2024, 5, 22, 0, 0, 0));
        const now = new Date(); // Aktuelle Zeit in der lokalen Zeitzone

        // Berechnung der Zeitdifferenz
        const diffTime = now.getTime() - startDate.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))+1;

        // **Exakte Stunden berechnen OHNE Zeitzonenfehler**
        const remainingTime = diffTime - (diffDays * 24 * 60 * 60 * 1000);
        const utcHours = Math.floor(remainingTime / (1000 * 60 * 60)); 
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        // **Jetzt die Zeitzonen-Differenz explizit berechnen**
        const timezoneOffset = now.getTimezoneOffset() / 60; // In Stunden umwandeln
        const hours = utcHours - timezoneOffset; // Korrigierte Stundenberechnung

        // Jahre, Monate, Wochen berechnen
        const years = (diffDays / 365).toFixed(2);
        const months = Math.floor(diffDays / 30.44);
        const weeks = Math.floor(diffDays / 7);

        // HTML-Elemente aktualisieren
        document.getElementById("days-counter").textContent = `${diffDays} days`;
        document.getElementById("detailed-counter").textContent = 
            `${hours} hours, ${minutes} minutes, ${seconds} seconds`;

        document.getElementById("years-counter").textContent = `${years}`;
        document.getElementById("months-counter").textContent = `${months}`;
        document.getElementById("weeks-counter").textContent = `${weeks}`;
    }

    // Starte den Counter und aktualisiere ihn jede Sekunde
    updateLoveCounter();
    setInterval(updateLoveCounter, 1000);
});
