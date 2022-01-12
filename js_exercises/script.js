// Console log shortcut
c = console.log;

function checkAge(age) {
  return age > 18 ? true : "Did parents allow you?";
}

function checkAgeTwo(age) {
  return age > 18 || "Did parents allow you?";
}

console.log(checkAge(19));
console.log(checkAgeTwo(19));

function min(number1, number2) {
  return Math.min(number1, number2);
}

c(min(2, 5));
c(min(3, -1));
c(min(1, 1));

function pow(number, power) {
  return Math.pow(number, power);
}

c(pow(3, 2));
c(pow(3, 3));

function greet(name, text = textFn()) {
  return `${text} ${name}`;
}

function textFn() {
  return `Hi there,`;
}

c(greet("Ann", "hi"));

const greetBob = () => {
  return `Hi Bob`;
};

c(greetBob());

// Convert to arrow
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function () {
//     alert("You agreed.");
//   },
//   function () {
//     alert("You canceled the execution.");
//   }
// );

// const askArrow = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// askArrow(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.")
// );

const add7 = (number) => `${number} + 7 is ${number + 7}`;
c(add7(5));

const multiply = (number1, number2) =>
  `${number1} * ${number2} is ${number1 * number2}`;
c(multiply(5, 5));

const capitalize = (string) => {
  // First try
  // let firstLetter = string.slice(0, 1);
  // let restOfWord = string.slice(1);
  // return `${firstLetter.toUpperCase()}${restOfWord.toLowerCase()}`;

  // Refactored
  return `${string.slice(0, 1).toUpperCase()}${string.slice(1).toLowerCase()}`;
};

c(capitalize("yOYOYio"));
c(capitalize("YOooOyO"));

const lastLetter = (string) => {
  return string.slice(-1);
};

c(lastLetter("COWfaskdifsidfdsikX"));
c(lastLetter("abcd"));
