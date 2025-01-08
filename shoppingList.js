const API_URL = "https://api.jsonbin.io/v3/b/677e1776acd3cb34a8c5e7d7";
const API_KEY = "$2a$10$TX3tFFDLtg0/Yhwt.n/BZOqGfEIsf1ZmahqOqLJlzE/FCszaHVg3C";

function addItem() {
    const itemInput = document.getElementById("shopping-item");
    const itemValue = itemInput.value.trim();

    if (itemValue) {
        fetch(API_URL, {
            method: "GET",
            headers: {
                "X-Master-Key": API_KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            const shoppingList = data.record.shoppingList || [];
            const updatedItems = [...shoppingList, itemValue];
            return fetch(API_URL, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "X-Master-Key": API_KEY
                },
                body: JSON.stringify({ shoppingList: updatedItems })
            });
        })
        .then(() => {
            addItemToList(itemValue);
            itemInput.value = ""; // Eingabefeld leeren
        })
        .catch(error => console.error("Error adding item:", error));
    }
}
function removeItem(itemToRemove) {
    fetch(API_URL, {
        method: "GET",
        headers: {
            "X-Master-Key": API_KEY
        }
    })
    .then(response => response.json())
    .then(data => {
        const shoppingList = data.record.shoppingList || [];
        const updatedItems = shoppingList.filter(item => item !== itemToRemove);

        return fetch(API_URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-Master-Key": API_KEY
            },
            body: JSON.stringify({ shoppingList: updatedItems })
        });
    })
    .then(() => {
        // Entferne das Item direkt aus der DOM-Liste
        const list = document.getElementById("shopping-list-items");
        const listItem = [...list.children].find(li => li.textContent.includes(itemToRemove));
        if (listItem) list.removeChild(listItem);

        console.log(`Item "${itemToRemove}" removed successfully.`);
    })
    .catch(error => console.error("Error removing item:", error));
}


document.addEventListener("DOMContentLoaded", () => {
    fetch(API_URL, {
        headers: {
            "X-Master-Key": API_KEY
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("Loaded data from JSONBin:", data); // Debugging: Zeigt die geladenen Daten
        const items = data.record.shoppingList || [];
        items.forEach(item => {
            addItemToList(item);
        });
    })
    .catch(error => console.error("Error loading shopping list:", error));
});

function addItemToList(item) {
    const list = document.getElementById("shopping-list-items");

    // Erstelle ein Listenelement
    const listItem = document.createElement("li");

    // Text für das Item
    const itemText = document.createElement("span");
    itemText.textContent = item;
    itemText.style.flex = "1"; // Text füllt den restlichen Platz

    // Entfernen-Button erstellen
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.className = "minigame-button"; // Gleicher Stil wie Add-Button
    deleteButton.onclick = () => {
        list.removeChild(listItem); // Entferne das Element aus der DOM-Liste
        removeItem(item); // API-Aufruf zum Entfernen
    };

    // Elemente zusammenfügen
    listItem.appendChild(itemText);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
}

