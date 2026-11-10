// ==========================================
// TASK 9.1: Selecting Elements
// ==========================================
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

// Additional 9.1 Selectors
const mainHeading = document.querySelector("h1");
const contactForm = document.getElementById("contact-form");
const emailInput = document.getElementById("email");
const navListItems = document.querySelectorAll("nav li");
const lastParagraph = document.querySelectorAll("p")[document.querySelectorAll("p").length - 1];


// ==========================================
// TASK 9.2: Traversing the DOM
// ==========================================
const nav = document.querySelector("nav");
console.log("Parent:", nav.parentElement);          // header
console.log("Children:", nav.children);               // HTMLCollection
console.log("First Child:", nav.firstElementChild);      // ul
console.log("Last Child:", nav.lastElementChild);       // ul

const article = document.querySelector("article");
console.log("Next Sibling:", article.nextElementSibling);     // section
console.log("Prev Sibling:", article.previousElementSibling); // null

const navLinks = nav.querySelectorAll("a");  // all links inside nav


// ==========================================
// TASK 9.3: Modifying Content & Styles
// ==========================================
const h1 = document.querySelector("h1");
console.log("textContent:", h1.textContent);     
console.log("innerText:", h1.innerText);       
h1.textContent = "DOM Manipulation Mastery";

// HTML Content
console.log("Original innerHTML:", article.innerHTML);
article.innerHTML = `
    <h2>Updated Article</h2>
    <p>This is new content injected via JavaScript.</p>
`;

// Attributes
const link = document.querySelector(".nav-link");
console.log("href attribute:", link.getAttribute("href"));
link.setAttribute("href", "https://developer.mozilla.org");

// Data attributes
const container = document.querySelector(".container");
container.dataset.sectionId = "week-05-practice";
console.log("Dataset ID:", container.dataset.sectionId);

// Styles
Object.assign(container.style, {
    backgroundColor: "#1e1e1e",
    color: "#f8f9fa",
    padding: "30px",
    borderRadius: "8px"
});


// ==========================================
// TASK 9.4: Adding & Removing Elements
// ==========================================
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph added dynamically!";
newParagraph.className = "content highlight";

article.appendChild(newParagraph);  // Add at end

// Dynamic Nav Item Builder function
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
