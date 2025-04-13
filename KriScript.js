function openMinigamePopup() {
    const popup = document.getElementById('minigame-popup');
    popup.classList.remove('hidden');
    resetAllGames(); // Sicherstellen, dass alle Spiele zurückgesetzt werden
    showGameSelection(); // Nur die Auswahlbuttons anzeigen
}

function closeMinigamePopup() {
    const popup = document.getElementById('minigame-popup');
    resetAllGames(); // Alle Spiele zurücksetzen
    popup.classList.add('hidden');
}

function selectMinigame(gameId) {
    const games = document.querySelectorAll('.minigame-container');
    games.forEach((game) => {
        game.style.display = 'none'; // Alle Spiele ausblenden
    });

    resetAllGames(); // Alte Ergebnisse zurücksetzen

    const selectedGame = document.getElementById(gameId);
    if (selectedGame) {
        selectedGame.style.display = 'block'; // Ausgewähltes Spiel anzeigen
    }
}

function playGame(gameId) {
    const resultElement = document.getElementById(`${gameId}-result`);
    resultElement.textContent = 'Deciding...';

    setTimeout(() => {
        if (gameId === 'who-loves-more') {
            resultElement.textContent = 'Kote loves Kris more ❤️';
        } else if (gameId === 'spend-time') {
            resultElement.textContent = 'Hubby ❤️';
        } else if (gameId === 'how-many-kisses') {
            const kisses = Math.floor(Math.random() * 11); // Zufällige Zahl zwischen 0 und 10
            resultElement.textContent = `You get ${kisses} kisses 💋`;
        }
    }, 2000);
}

function resetAllGames() {
    const resultElements = document.querySelectorAll('.minigame-result');
    resultElements.forEach((result) => {
        result.textContent = ''; // Ergebnis zurücksetzen
    });

    const games = document.querySelectorAll('.minigame-container');
    games.forEach((game) => {
        game.style.display = 'none'; // Alle Spiele ausblenden
    });
}

function showGameSelection() {
    const gameSelection = document.querySelector('.game-selection');
    if (gameSelection) {
        gameSelection.style.display = 'block'; // Auswahlbuttons anzeigen
    }

    const games = document.querySelectorAll('.minigame-container');
    games.forEach((game) => {
        game.style.display = 'none'; // Sicherstellen, dass keine Spiele angezeigt werden
    });
}





function toggleYourHome() {
    const content = document.getElementById('your-home-content');
    const button = document.querySelector('#your-home .toggle-button');
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        content.style.maxHeight = content.scrollHeight + 'px';
        button.textContent = '▲'; // Symbol für ausgeklappt
    } else {
        content.style.maxHeight = '0';
        content.classList.add('hidden');
        button.textContent = '▼'; // Symbol für eingeklappt
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#your-home .toggle-button');
    button.textContent = '▼'; // Initialzustand
});



document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const closeMenuButton = document.querySelector(".close-menu");
    const navLinks = document.querySelector(".nav-links");
    const body = document.body;

    // Menü öffnen
    menuToggle.addEventListener("click", () => {
        navLinks.classList.add("active");
        body.classList.add("active-menu");
    });

    // Menü schließen (Schließen-Button)
    closeMenuButton.addEventListener("click", () => {
        closeMenu();
    });

    // Klick außerhalb des Menüs erkennen
    document.addEventListener("click", (event) => {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            closeMenu();
        }
    });

    // Funktion zum Schließen des Menüs
    function closeMenu() {
        navLinks.classList.remove("active");
        body.classList.remove("active-menu");
    }
});


//Timer!!

document.addEventListener("DOMContentLoaded", function () {
    function updateCountdown() {
        // Zielzeit: 31. März 2025, 01:55 Uhr (Georgische Zeit)
        const targetTime = new Date(Date.UTC(2025, 5, 2, 3, 55, 0)); // UTC-Zeit für 01:55 Uhr georgischer Zeit (GMT+4)

        const now = new Date(); // Aktuelle Zeit
        const diffTime = targetTime - now; // Differenz in Millisekunden

        if (diffTime <= 0) {
            document.getElementById("countdown-display").textContent = "🎉 It's time!";
            return;
        }

        const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

        document.getElementById("countdown-display").textContent = 
            `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }

    // Starte den Countdown und aktualisiere ihn jede Sekunde
    updateCountdown();
    setInterval(updateCountdown, 1000);
});





