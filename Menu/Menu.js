/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
const menuButton = document.querySelector(".header");

function createMenu(arr) {
  const menu = document.createElement("div");
  const ul = document.createElement("ul");
  const li0 = document.createElement("li");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const li4 = document.createElement("li");
  const li5 = document.createElement("li");

  menuButton.appendChild(menu);
  menu.appendChild(ul);
  ul.appendChild(li0);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  ul.appendChild(li5);

  menu.classList.add("menu");

  li0.textContent = arr[0];
  li1.textContent = arr[1];
  li2.textContent = arr[2];
  li3.textContent = arr[3];
  li4.textContent = arr[4];
  li5.textContent = arr[5];

  menuButton.addEventListener("click", e => {
    menu.classList.toggle("menu--open");
  });
  return menu;
}

createMenu(menuItems);
