/////////////////// Adding DOM Elements ///////////////////

const container = document.querySelector("#container");

// Adding p element that says 'Hey I'm red!' in red
const newParagraph = document.createElement("p");
newParagraph.style.color = "red";
newParagraph.textContent = "Hey I'm Red!";
container.append(newParagraph);

// Adding h3 element that says "I'm a blue h3!" in blue
const newH3 = document.createElement("h3");
newH3.style.color = "blue";
newH3.textContent = "I'm a blue h3!";
container.prepend(newH3);

// Adding a div with a black border and pink background color
const newDiv = document.createElement("div");
newDiv.style.border = "black";
newDiv.style.backgroundColor = "pink";

// With the following elements inside of it:

// 1. another h1 that says "I'm in a div"
const newH1 = document.createElement("h1");
newH1.textContent = "I'm in a div";
newDiv.append(newH1);

// 2. a p that says "ME TOO!"
const newParagraphTwo = document.createElement("p");
newParagraphTwo.textContent = "ME TOO!";
newDiv.append(newParagraphTwo);

// 3. Hint: after creating the div with createElement, append the h1 and p to it before adding it to the #container
container.append(newDiv);

/////////////////// Events ///////////////////

function alertHelloWorld() {
  alert("Hello World!");
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", alertHelloWorld);

btn.addEventListener("click", function (e) {
  console.log(e.target);
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
  e.target.style.color = "white";
});

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
