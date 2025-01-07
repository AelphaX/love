// Load the saved shopping list from localStorage
document.addEventListener("DOMContentLoaded", () => {
    const savedItems = JSON.parse(localStorage.getItem("shoppingList")) || [];
    savedItems.forEach(item => {
        addItemToList(item);
    });
});

function addItem() {
    const itemInput = document.getElementById("shopping-item");
    const itemValue = itemInput.value.trim();
    if (itemValue) {
        addItemToList(itemValue);
        saveItem(itemValue);
        itemInput.value = ""; // Clear the input field
    }
}

function addItemToList(item) {
    const list = document.getElementById("shopping-list-items");
    const listItem = document.createElement("li");
    listItem.style.display = "flex";
    listItem.style.alignItems = "center";
    listItem.style.marginBottom = "0.5rem";

    const itemText = document.createElement("span");
    itemText.textContent = item;
    itemText.style.flex = "1";

    // Add a delete button to remove the item
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.className = "minigame-button";
    deleteButton.onclick = () => {
        list.removeChild(listItem);
        removeItem(item);
    };

    listItem.appendChild(itemText);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
}

function saveItem(item) {
    const savedItems = JSON.parse(localStorage.getItem("shoppingList")) || [];
    savedItems.push(item);
    localStorage.setItem("shoppingList", JSON.stringify(savedItems));
}

function removeItem(item) {
    let savedItems = JSON.parse(localStorage.getItem("shoppingList")) || [];
    savedItems = savedItems.filter(savedItem => savedItem !== item);
    localStorage.setItem("shoppingList", JSON.stringify(savedItems));
}