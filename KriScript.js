function openMinigamePopup() {
    const popup = document.getElementById('minigame-popup');
    popup.classList.remove('hidden');
}

// Schließt das Popup für die Minispiele
function closeMinigamePopup() {
    const popup = document.getElementById('minigame-popup');
    popup.classList.add('hidden');
}

// Wählt ein Minigame aus und zeigt es an
function selectMinigame(gameId) {
    const games = document.querySelectorAll('.minigame-container');
    games.forEach((game) => {
        game.style.display = 'none';
    });

    const selectedGame = document.getElementById(gameId);
    if (selectedGame) {
        selectedGame.style.display = 'block';
    }
}

// Führt ein Minigame aus
function playGame(gameId) {
    const resultElement = document.getElementById(`${gameId}-result`);
    resultElement.textContent = 'Deciding...'; // Zeigt die Entscheidungsanimation an

    // Simuliert eine Entscheidungszeit
    setTimeout(() => {
        if (gameId === 'who-loves-more') {
            resultElement.textContent = 'Kote loves Kris more ❤️';
        } else if (gameId === 'spend-time') {
            resultElement.textContent = 'Hubby ❤️';
        }
    }, 2000);
}



function toggleLoveNest() {
    const content = document.getElementById('love-nest-content');
    const button = document.querySelector('#love-nest .toggle-button');
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
    const button = document.querySelector('#love-nest .toggle-button');
    button.textContent = '▼'; // Initialzustand
});
