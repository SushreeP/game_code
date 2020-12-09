var username = document.login.username;
var password = document.login.password;

if (localStorage.getItem("users") == undefined) {
  alert("No users yet. Register first.");
  localStorage.setItem("users", "[]");
}

if (localStorage.getItem("targetScore") == undefined) {
  localStorage.setItem("targetScore", 0);
}

if (localStorage.getItem("playingAgainst") == undefined) {
  localStorage.setItem("playingAgainst", "");
}

var users = JSON.parse(localStorage.getItem("users"));

document.getElementById("login").addEventListener("submit", function (e) {
  e.preventDefault();
  for (let i = 0; i < users.length; i++) {
    if (users[i].name == username.value) {
      if (users[i].password == password.value) {
        localStorage.setItem("currentUser", JSON.stringify(users[i].name));
        window.location.href = "index.php";
        return;
      } else {
        alert("Incorrect password");
        return;
      }
    }
  }
  alert("User not found");
});

document.getElementById("noAccount").addEventListener("click", function (e) {
  window.location.href = "register.php";
});
