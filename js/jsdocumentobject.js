let val;
val = document;
val = document.doctype;
val = document.head;
val = document.body;
val = document.URL;

val = document.links; //HTML collection
val = document.links[0];
val = document.links[0].id;
val = document.links[3].className;
val = document.links[0].classList; //DomTokenList
val = document.links[0].classList[0];
val = document.links[0].classList[1];

val = document.forms; //HTML collection
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].className;
val = document.forms[0].classList;
val = document.forms[0].action;
val = document.forms[0].method;

val = document.images;
val = document.images[0];
val = document.images[0].src;
val = document.images[0].className;
val = document.images[0].classList;
val = document.images[0].classList[0];
val = document.images[0].alt;
val = document.images[0].abc; //undefined attribute
val = document.images[0].getAttribute("abc");
val = document.images[0].getAttribute("class");
val = document.images[0].getAttribute("src");

val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].type;
val = document.scripts[0].getAttribute("src");
// console.log(val);

// Change Styling
document.getElementById("tasktitle").style.backgroundColor = "grey";
// document.getElementById("tasktitle").style.color = "#fff";
document.getElementById("tasktitle").style.padding = "5px";

//Change Content
// document.getElementById("tasktitle").textContent = "My lists";
// document.getElementById("tasktitle").innerText = "My tasks";
// document.getElementById(
//   "tasktitle"
// ).innerHTML = `<span style='color:yellow'>My job</span>`;

//Call to class Name
let lis = document.getElementsByClassName("list-group-item");
console.log(lis);
console.log(lis[0]);
// lis[0].style.color = "red";
// lis[1].textContent = "Have to visit";

//Call to tag
let litags = document.getElementsByTagName("li");
console.log(litags);
console.log(litags[0]);
// litags[0].style.color = "red";
// litags[1].innerText = "Have to cook";

//queryselector
// console.log(document.querySelector("#tasktitle"));
// console.log(document.querySelector(".title"));
// console.log(document.querySelector("h3"));

// console.log(document.querySelector("li"));
// document.querySelector("ul li").style.color = "blue";
// document.querySelector("ul li:nth-child(odd)").style.backgroundColor = "silver";
// document.querySelector("ul li:nth-child(even)").style.backgroundColor = "gold";
// document.querySelector("ul li:last-child").style.color = "green";
// document.querySelector("ul li:nth-of-type(3)").style.color = "blue";
// document.querySelector("ul li:nth-of-type(3)").textContent = "Have to wash";

const listitems = document
  .querySelector("ul")
  .getElementsByClassName("list-group-item");
console.log(listitems);

// document.querySelector("ul li:nth-child(odd)").style.background = "silver";
// document.querySelector("ul li:nth-child(even)").style.background = "gold";

// listitems[0].textContent = "hello";

// listitems.forEach(function (listitem, index) {
//   console.log(index);
// });   //error cuz of not pure array(Html collection is array but not pure array and loop can be used only in pure array)

let arritems = Array.from(listitems);
console.log(arritems);

arritems.forEach(function (arritem, index) {
  //   console.log(index);
  //   arritem.textContent = "hello";
  //   arritem.innerText = `${index} : hello`;
});

//querySelectorAll  //NodeList
let its = document.querySelectorAll("ul.list-group li.list-group-item");
console.log(its);
console.log(its[0]);
its.forEach(function (it, index) {
  //   console.log(index);
  //   it.textContent = "hello";
  //   it.innerText = `${index} : hello World`;
});

const liodd = document.querySelectorAll("li:nth-of-type(odd)");
const lieven = document.querySelectorAll("li:nth-of-type(even)");
console.log(liodd);
console.log(lieven);
liodd.forEach(function (li, index) {
  //   console.log(li);
  //   li.style.backgroundColor = "silver";
});

for (let i = 0; i < lieven.length; i++) {
  //   console.log(lieven[i]);
  //   lieven[i].style.backgroundColor = "gold";
}

//children
let chl;
const getul = document.querySelector("ul.list-group");
console.log(getul);
const getli = document.querySelector("li.list-group-item:first-child");
console.log(getli);

chl = getul.children; //HTMLCollection
console.log(chl);
console.log(chl[3]);
chl = getul.children[0];
console.log(chl);
// getul.children[0].innerText = "Have to eat";
// getul.children[1].innerHTML = `Have to read <a href='#' id='delete-item2'><i class="fa-solid fa-trash-can"></i></a>`;

//children of children
chl = getul.children[1].children; //html collection
chl = getul.children[1].children[0];
chl = getul.children[1].children[0].id;
chl = getul.children[1].children[0].className;
chl = getul.children[1].children[0].classList; //DomTokenLists
chl = getul.children[1].children[0].href;
chl = getul.children[0].children[0].children[0];

//first child
chl = getul.firstElementChild;

//last child
chl = getul.lastElementChild;

//child element count
chl = getul.children.length;
chl = getul.childElementCount;
chl = getul.children[0].childElementCount;
chl = getul.children[0].children[0].childElementCount;
console.log(chl);

const getfirstli = document.querySelector("li.list-group-item:first-child");
console.log(getfirstli);

let sbl = getfirstli.nextElementSibling;
sbl = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling; //list item 4
console.log(sbl);

let psbl =
  getfirstli.nextElementSibling.nextElementSibling.previousElementSibling; //list item 2
console.log(psbl);

// Create Element
const newli = document.createElement("li");

newli.className = "list-group-item";
newli.id = "new-item";
newli.setAttribute("abc", "newitem");
// newli.textContent = "hay";
// newli.innerHTML = `List Item 6<a href="#" id="delete-item6" class="delete-item"><i class="fa-solid fa-trash-can"></i></a></li>`;

//Create text note
newli.appendChild(document.createTextNode("Save Myanmar"));

const newlink = document.createElement("a");
newlink.id = "delete-item6";
newlink.className = "delete-item";
newlink.href = "#";
newlink.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

newli.appendChild(newlink);
document.querySelector("ul.list-group").appendChild(newli);

console.log(newli);
console.log(newlink);

//Replace Element
const newtitle = document.createElement("h2");
newtitle.id = "tasktitle";
newtitle.appendChild(document.createTextNode("All my lists"));
console.log(newtitle);

const oldtitle = document.getElementById("tasktitle");
const getcardaction = document.querySelector(".card-action");

// replace child(new,old)
getcardaction.replaceChild(newtitle, oldtitle);

//Remove elemnts
const getlis = document.querySelectorAll("li");
// console.log(getlis);
// console.log(getlis[0]);
// getlis[0].remove();

// Remove Child Element (child)
const getfirstul = document.querySelector("ul");
// console.log(getfirstul);
// console.log(getlis[5]);
// getfirstul.removeChild(getlis[0]);
// getfirstul.removeChild(getlis[5]);
// _______________________________________________
/*
// Class
const firstli = document.querySelector("li:first-child");
// console.log(firstli);
const firstlink = firstli.children[0]; // HTML Collection
// console.log(firstlink);
let firstlnk;
firstlnk = firstlink.className;
// console.log(firstlnk);
firstlnk = firstlink.classList; // DOM Token List
// console.log(firstlnk);

firstlink.className = "Delete myself";
firstlink.className = "delete-item delete-myself";
firstlink.className = "delete-item delete-me delete-myself";

firstlnk = firstlink.classList; // DOM TOKEN List
// console.log(firstlnk);

console.log(firstlnk[0]);
console.log(firstlnk[1]);

firstlink.classList.add("delete-ourselves");
firstlink.classList.add("delete-myself");

firstli.classList.add("delete-myself", "delete-ourselves");
console.log(firstli.classList);
firstli.classList.remove("delete-item");
firstli.classList.remove("delete-me", "delete-myself");
console.log(firstli.classList);
firstlink.classList.replace("delete-ourselves", "delete-delete");
console.log(firstlink.classList);
if (firstlink.classList.contains("delete-me")) {
  console.log("Yes");
} else {
  console.log("No");
}
// _______________________________________________________

// Attribute;
let getatt = firstlink.getAttribute("href");
console.log(getatt);

getatt = firstlink.setAttribute("href", "https://google.com");
console.log(firstlink);
console.log(firstlink.hasAttribute("class"));
console.log(getatt); // true
console.log(firstlink.hasAttribute("title"));
console.log(getatt); // false

// ____________________________*/

// addEventListener()
const clearbtn = document.querySelector(".clear-tasks");

// Method 1

// clearbtn.addEventListener("click", function (e) {
//   console.log("hay I am working");
//   e.preventDefault();
// });

// Method 2
clearbtn.addEventListener("click", myclick);

function myclick(e) {
  // console.log(`hay I am my click`);

  let val;
  val = e;

  // Event target element
  // val = e.target;
  // val = e.target.id;
  // val = e.target.className;
  // val = e.target.classList; // DOM Token List

  // e.target.innerText = "Clear Me";

  //Event Type
  //coordinates event - relative to the window
  // val = e.clientX;
  // val = e.clientY;
  // coordinates event - relative to the element
  // val = e.offsetX;
  // val = e.offsetY;

  // console.log(val);

  e.preventDefault();
}

//Mouse Event

const clbtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h2");

console.log(clbtn, card, heading);

// clbtn.addEventListener("click", mouseeventtype);
// clbtn.addEventListener("dblclick", mouseeventtype);
// clbtn.addEventListener("mousedown", mouseeventtype);
// clbtn.addEventListener("mouseup", mouseeventtype);

// card.addEventListener("mouseenter", mouseeventtype);
// card.addEventListener("mouseleave", mouseeventtype);
// card.addEventListener("mouseover", mouseeventtype);
// card.addEventListener("mousemove", mouseeventtype);

function mouseeventtype(e) {
  console.log(`Event type = ${e.type}`);
  e.preventDefault();
}
// ______________________________

// const formel = document.querySelector("form");
// const inputtask = document.getElementById("task");

// formel.addEventListener("submit", inputeventtype);

// function inputeventtype(e) {
//   console.log(`Event type = ${e.type}`);
//   console.log(inputtask.value);
//   e.preventDefault();
// }
// ________________________________

const inputtask = document.getElementById("task");
const geth2 = document.querySelector("h2");

// inputtask.addEventListener("keydown", inputeventtype);
// inputtask.addEventListener("keypress", inputeventtype); //keydown = keyup
// inputtask.addEventListener("keyup", inputeventtype);
// inputtask.addEventListener("focus", inputeventtype); //result show when pointer on the input box
// inputtask.addEventListener("blur", inputeventtype);  //result show when result change
//similar to onchange but onchange works only when result changes
// inputtask.addEventListener("cut", inputeventtype); //rs show when cut button
// inputtask.addEventListener("paste", inputeventtype); //rs show when paste button
// inputtask.addEventListener("input", inputeventtype); //keyup = input

function inputeventtype(e) {
  console.log(`Event type = ${e.type}`);
  console.log(e.target.value);
  geth2.textContent = e.target.value;
  e.preventDefault();
}
//31 march rc

// ___________________________________
