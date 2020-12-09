<!--THIS PAGE CONTAINS THE INSTRUCTIONS ON HOW TO PLAY THE GAME. THERE
IS ALSO A PLACEHOLDER FOR AN INSTRUCTIONS VIDEO.-->

<?php
    include 'functions.php';
    webTitle("How to Play");
    webNav("instructions.php", "How to Play", "index.php", "leaderboard.php", "register.php", "login.php", "Game", "Leaderboard", "Sign Up", "Log In");
?>

<html>

<body>
<h1>INSTRUCTIONS</h1>

<div class="row">
    <div class="column">
        <h1>DESCRIPTION</h1>

        <!--TEXT INSTRUCTIONS-->

        <div id="instruction-text">
            <p>1. The game will start you off with a random number between 0 and 10.</p>
            <p>2. You will then be counted in to the start of the game - mathematical calculations such as '+3' or 
                '*4' will appear, which you must quickly add on to the number you started with and then each 
                subsequent number. For example, you could start with 9 and have to add 4 - this would be 13. You then could
                be told to multiply by 2 - your new number would then be 26. The speed with which calculations change 
                depends on your selected difficulty.</p>
            <p>3. Once you have lost track of the latest number, you must click the STOP button and enter the
                number you ended up with.</p>
            <p>4. The game will match your number to the step in the game where the number was correct. For example,
                if your last number was 14, and that answer was correct in step (or calculation) 7, your score would
                be 7.
        </div>
    </div>

    <!--VIDEO INSTRUCTIONS-->

    <div class="column">
        <h1>VIDEO</h1>
        <video id="video"><source src="" type="video/mp4"><span style="color:red;">Video is not supported in your browser. Please use an alternative browser or follow the text instructions. </span></video>
    </div>
</div>

<?php
    webFooter()
?>

</body>
</html>