// Get DOM elements
const selectField = document.getElementById("selectField");
const selectText = document.getElementById("selectText");
const options = document.getElementsByClassName("options");
const list = document.getElementById("list");
const arrowIcon = document.getElementById("arrowIcon");

// Toggle dropdown list and arrow rotation on select field click
selectField.onclick = () => {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
}

// Loop through each option to handle selection
for (let option of options) {
    option.onclick = function() {
        // Update selected text and close dropdown
        selectText.textContent = this.textContent;
        list.classList.add("hide");
        arrowIcon.classList.remove("rotate");
    }
}