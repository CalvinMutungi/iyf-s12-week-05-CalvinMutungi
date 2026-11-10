// Task 9.2 Practice: DOM Navigation

const nav = document.querySelector("nav");

// 1. Select the header, then navigate to the nav inside it
const header = document.querySelector("header");
console.log("Header's nav:", header.querySelector("nav"));

// 2. Select the first nav-link, then get its parent li
const firstNavLink = document.querySelector(".nav-link");
console.log("Parent li of first nav-link:", firstNavLink.parentElement);

// 3. Select the article, then get its next sibling (section)
const article = document.querySelector("article");
console.log("Next sibling of article:", article.nextElementSibling);

// 4. Select the ul, then get all its child li elements
const ul = document.querySelector("ul");
console.log("Child li elements of ul:", ul.children);

// 5. Start from the footer and navigate up to the body
const footer = document.querySelector("footer");
console.log("Footer's parent body:", footer.parentElement);

