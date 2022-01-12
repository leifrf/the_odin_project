let loggedIn = false;

while (loggedIn === false) {
  let user = prompt("Please login: ");

  if (user === "Admin") {
    password = prompt("Enter Password: ");

    if (password === "TheMaster") {
      alert("Welcome!");
      loggedIn = true;
    } else if (password === "") {
      alert("Canceled");
    } else {
      alert("Wrong password.");
    }
  } else if (user === "" || user === null) {
    alert("Canceled");
  } else {
    alert("I don't know you");
  }
}
