const API_URL = "https://677ec64d94bde1c1252d7d2b.mockapi.io/shoppingList";

// Funktion zum Laden der Einkaufsliste
function loadShoppingList() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("shopping-list-items");
            list.innerHTML = ""; // Liste leeren

            data.forEach(item => {
                addItemToList(item.item, item.id); // Items zur DOM hinzufügen
            });
        })
        .catch(error => console.error("Error loading shopping list:", error));
}

// Funktion zum Hinzufügen eines Items
function addItem() {
    const itemInput = document.getElementById("shopping-item");
    const itemValue = itemInput.value.trim();

    if (itemValue) {
        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ item: itemValue }),
        })
            .then(response => response.json())
            .then(data => {
                loadShoppingList(); // Liste neu laden
                itemInput.value = ""; // Eingabefeld leeren
            })
            .catch(error => console.error("Error adding item:", error));
    }
}

// Funktion zum Entfernen eines Items
function removeItem(itemToRemove, itemId) {
    fetch(`${API_URL}/${itemId}`, {
        method: "DELETE",
    })
        .then(() => {
            loadShoppingList(); // Liste neu laden
        })
        .catch(error => console.error("Error removing item:", error));
}

// Regelmäßiges Polling einrichten
setInterval(loadShoppingList, 2000); // Alle 2 Sekunden die Liste aktualisieren

// Initiale Liste laden
document.addEventListener("DOMContentLoaded", loadShoppingList);

// Funktion zum Hinzufügen eines Items zur DOM
function addItemToList(item, id) {
    const list = document.getElementById("shopping-list-items");

    const listItem = document.createElement("li");
    listItem.style.display = "flex";
    listItem.style.alignItems = "center";
    listItem.style.marginBottom = "0.5rem";

    const itemText = document.createElement("span");
    itemText.textContent = item;
    itemText.style.flex = "1";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.style.backgroundColor = "#6200ea";
    deleteButton.style.color = "white";
    deleteButton.style.border = "none";
    deleteButton.style.padding = "0.5rem";
    deleteButton.style.borderRadius = "5px";
    deleteButton.style.cursor = "pointer";

    deleteButton.onclick = () => removeItem(item, id);

    listItem.appendChild(itemText);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
}


