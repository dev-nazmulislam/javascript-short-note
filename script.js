// .parentElement | .children | .previousElementSibling | .nextElementSibling | .firstElementChild | .lastElementChild | Array.from() | Array.prototype.slice.apply() | [...array]
const listItem = document.getElementById("li");
const parent = listItem.parentElement; // Get parent Element
const children = listItem.children; // Get Childrens
const previousSibling = listItem.previousElementSibling; // Get Previous Sibling Element
const nextSibling = listItem.nextElementSibling; // Get Nest Sibling Element
const firstChiled = listItem.firstElementChild; // Get First Element of child
const lastChiled = listItem.lastElementChild; // Get Last Element of child
// Html Collection is an array like objects so we can convert an array for Traversing.
// Array.from()
const listItems = Array.from(listItem);
listItems.forEach((li, index) => {
  let text = li.innerHTML;
  li.innerHTML = `(${index + 1}) ${text}`;
});

// Array.prototype.slice.apply()
const listItems = Array.prototype.slice.apply(listItem);
listItems.forEach((li, index) => {
  let text = li.innerHTML;
  li.innerHTML = `(${index + 1}) ${text}`;
});

// [...array]
const listItems = [...listItem];
listItems.forEach((li, index) => {
  let text = li.innerHTML;
  li.innerHTML = `(${index + 1}) ${text}`;
});
// Create a <p> element and append it to the document
const p = document.createElement("p");
p.innerText = "This is a paragraph";
document.body.appendChild(p);
// Create a <p> element and append it to an element
const p = document.createElement("p");
p.innerHTML = "This is a paragraph.";
document.getElementById("myDIV").appendChild(p);

function createElement(tagName, className, innerHTML) {
  let tag = document.createElement(tagName);
  tag.classList = className | "";
  tag.innerHTML = innerHTML | "";
  return tag;
}

function append(parent, children) {
  children.forEach((child) => parent.appendChild(child));
}
