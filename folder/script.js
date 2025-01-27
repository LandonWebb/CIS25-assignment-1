document.addEventListener("DOMContentLoaded", () => {
    const userInput = document.getElementById("userInput");
    const addButton = document.getElementById("addButton");
    const myList = document.getElementById("mylist");

    addButton.addEventListener("click", () => {
        const inputValue = userInput.value.trim();
        if (inputValue !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = inputValue;
            myList.appendChild(listItem);
            userInput.value = ""; 
        } 
    });
});
