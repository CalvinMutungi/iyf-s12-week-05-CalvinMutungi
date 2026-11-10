
const header = document.getElementById("main-header");
console.log("getElementById:", header);

const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);


const mainHeading = document.querySelector("h1");
const contactForm = document.getElementById("contact-form");
const emailInput = document.getElementById("email");
const navListItems = document.querySelectorAll("nav li");
const lastParagraph = document.querySelectorAll("p")[document.querySelectorAll("p").length - 1];



const nav = document.querySelector("nav");
console.log("Parent:", nav.parentElement);         
console.log("Children:", nav.children);               
console.log("First Child:", nav.firstElementChild);      
console.log("Last Child:", nav.lastElementChild);       

const article = document.querySelector("article");
console.log("Next Sibling:", article.nextElementSibling);     
console.log("Prev Sibling:", article.previousElementSibling); 

const navLinks = nav.querySelectorAll("a");  
const h1 = document.querySelector("h1");
console.log("textContent:", h1.textContent);     
console.log("innerText:", h1.innerText);       
h1.textContent = "DOM Manipulation Mastery";


console.log("Original innerHTML:", article.innerHTML);
article.innerHTML = `
    <h2>Updated Article</h2>
    <p>This is new content injected via JavaScript.</p>
`;


const link = document.querySelector(".nav-link");
console.log("href attribute:", link.getAttribute("href"));
link.setAttribute("href", "https://developer.mozilla.org");

const container = document.querySelector(".container");
container.dataset.sectionId = "week-05-practice";
console.log("Dataset ID:", container.dataset.sectionId);


Object.assign(container.style, {
    backgroundColor: "#1e1e1e",
    color: "#f8f9fa",
    padding: "30px",
    borderRadius: "8px"
});

const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph added dynamically!";
newParagraph.className = "content highlight";

article.appendChild(newParagraph);  


const navList = document.querySelector(".nav-list");

function addNavItem(text, href) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = text;
    a.href = href;
    a.className = "nav-link";
    
    li.appendChild(a);
    navList.appendChild(li);
}

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");


const counterContainer = document.createElement("div");
counterContainer.style.margin = "20px 0";
counterContainer.innerHTML = `
    <h3>Click Counter</h3>
    <span id="count-display" style="font-size: 24px; font-weight: bold;">0</span>
    <div style="margin-top: 10px;">
        <button id="decrease-btn">-</button>
        <button id="increase-btn">+</button>
        <button id="reset-btn">Reset</button>
    </div>
`;
document.body.appendChild(counterContainer);

let count = 0;
const countDisplay = document.getElementById("count-display");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");

increaseBtn.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
    if (count > 0) {
        count-—; 
        countDisplay.textContent = count;
    }
});

resetBtn.addEventListener("click", () => {
    count = 0;
    countDisplay.textContent 

document.addEventListener("keydown", function(event) {
    // Ctrl + S: Prevent actual save dialog and show alert
    if (event.ctrlKey && event.key.toLowerCase() === "s") {
        event.preventDefault();
        alert("Shortcut Saved! (Default save dialog blocked)");
    }
    
    
    if (event.key === "Escape") {
        const inputs = document.querySelectorAll("input");
        inputs.forEach(input => input.value = "");
        console.log("Inputs cleared via Escape key.");
    }
    
    
    if (event.ctrlKey && event.key === "Enter") {
        const form = document.getElementById("contact-form");
        if (form) {
            console.log("Form submitted via Ctrl+Enter shortcut.");
        }
    }
});


