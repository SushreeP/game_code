/****** DOM Elements *******/

var username = document.signup.username;
var useremail = document.signup.email;
var password = document.signup.password;
var retypepw = document.signup.pwd_repeat;

if (localStorage.getItem("users") == undefined) {
  localStorage.setItem("users", "[]");
}
if (localStorage.getItem("currentUser") == undefined) {
  localStorage.setItem("currentUser", "");
}

if (localStorage.getItem("targetScore") == undefined) {
  localStorage.setItem("targetScore", 0);
}

if (localStorage.getItem("playingAgainst") == undefined) {
  localStorage.setItem("playingAgainst", "");
}

var users = JSON.parse(localStorage.getItem("users"));

var confirm_pw = () => {
  if (retypepw.value !== password.value) {
    alert("Password retype doesn't match.");
    retypepw.value = "";
    return false;
  }
  return true;
};

var checkExistingUser = (username, password) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].name == username) {
      if (users[i].password == password) {
        alert(
          "Account with these details already exists. Please try to log in."
        );
        return false;
      } else {
        return true;
      }
    }
  }
  return true;
};

document
  .getElementById("registerSubmit")
  .addEventListener("click", function createUser(e) {
    e.preventDefault();
    if (!confirm_pw()) {
      alert("Check field values.");
      return;
    }

    if (checkExistingUser(username.value, password.value)) {
      var d = new Date();
      var newUser = {
        name: username.value,
        email: useremail.value,
        password: password.value,
        maxscore: 0,
        date: d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear(),
      };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(username.value));
      window.location.href = "index.php";
    }
  });

document.getElementById("haveAccount").addEventListener("click", function (e) {
  window.location.href = "login.php";
});
