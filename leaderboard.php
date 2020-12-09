<!--THIS PAGE CONTAINS THE LEADERBOARD, INCLUDING THE TABLE, WHICH I MADE IN
A FUNCTION AND THEN CALLED ON THIS PAGE. THIS IS BECAUSE THE FUNCTION WAS
VERY LONG AND ALSO REPETITIVE - SAME CODE FOR EVERY ROW.-->

<?php
    include 'functions.php';
    webTitle("Leaderboard");
    webNav("leaderboard.php", "Leaderboard", "index.php", "instructions.php", "register.php", "login.php", "Game", "How to Play", "Sign Up", "Log In");
?>

<html>
    <h1>LEADERBOARD</h1>

    <table id = "leaderboard">
        <tr>
            <th>Username</th>
            <th>Score</th>
            <th>Date of play</th>
            <th>Click button to play user!</th>
        </tr>
           
    </table>

    <script>

        let leaderboard = document.getElementById("leaderboard");

        let users = JSON.parse(localStorage.getItem("users"));
        for (let i = 0; i < users.length; i++) {
            var tr = document.createElement("tr");
            var td_user = document.createElement("td");
            var td_score = document.createElement("td");
            var td_date = document.createElement("td");
            var td_play = document.createElement("td");


            td_user.innerHTML = users[i].name;
            td_score.innerHTML = users[i].maxscore;
            td_date.innerHTML = users[i].date;

            var playUser = document.createElement("button");
            playUser.setAttribute("id","playUser");
            playUser.innerText = "Play " + users[i].name;
            playUser.addEventListener("click", function (e) {
                localStorage.setItem("targetScore", users[i].maxscore);
                localStorage.setItem("playingAgainst", users[i].name);
                window.location.href = "index.php";
            });
            td_play.appendChild(playUser);

            tr.appendChild(td_user);
            tr.appendChild(td_score);
            tr.appendChild(td_date);
            tr.appendChild(td_play);
            leaderboard.appendChild(tr);
        }

    </script>

</html>

<?php
    webFooter();
?>