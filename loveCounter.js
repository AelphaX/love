document.addEventListener("DOMContentLoaded", function () {
    function updateLoveCounter() {
        // Startdatum als GMT+4 setzen (22.06.2024, 00:00:00 GMT+4)
        const startDate = new Date(Date.UTC(2024, 5, 21, 20, 0, 0)); // Umrechnung auf UTC
        const now = new Date(); // Aktuelle Zeit
        
        // Berechnung der Zeitdifferenz in Millisekunden
        const diffTime = now.getTime() - startDate.getTime();
        
        // Berechnung der Tage
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;

        // Berechnung von Stunden, Minuten und Sekunden
        const totalSeconds = Math.floor(diffTime / 1000);
        const seconds = totalSeconds % 60;
        const totalMinutes = Math.floor(totalSeconds / 60);
        const minutes = totalMinutes % 60;
        const totalHours = Math.floor(totalMinutes / 60);
        const hours = totalHours % 24;

        // Berechnung von Jahren, Monaten und Wochen
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
