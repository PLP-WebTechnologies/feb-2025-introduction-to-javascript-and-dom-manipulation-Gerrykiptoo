// script.js
function changeText() {
    const heading = document.getElementById("mainHeading");
    const paragraph = document.querySelector("#targetArticle p");
    const status = document.getElementById("status");

    heading.textContent = "Updated Content!";
    paragraph.textContent = "This text was changed dynamically!";
    status.textContent = "Status: Text Modified";
}

function toggleStyles() {
    const article = document.getElementById("targetArticle");
    article.classList.toggle("highlight");
    
    const status = document.getElementById("status");
    status.textContent = article.classList.contains("highlight") 
        ? "Status: Styles Active" 
        : "Status: Styles Reset";
}

function addElement() {
    const list = document.getElementById("itemList");
    const newItem = document.createElement("li");
    const itemCount = list.children.length + 1;
    
    newItem.textContent = `New Item ${itemCount} (Added Dynamically)`;
    list.appendChild(newItem);
    
    document.getElementById("status").textContent = `Status: Added Item ${itemCount}`;
}

function removeElement() {
    const list = document.getElementById("itemList");
    if (list.children.length > 0) {
        const lastItem = list.lastElementChild;
        lastItem.remove();
        document.getElementById("status").textContent = "Status: Last Item Removed";
    }
}