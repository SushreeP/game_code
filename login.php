<!--THIS PAGE CONTAINS THE LOGIN FORM FOR THE USER TO FILL AND SUBMIT. A
PLACEHOLDER HAS BEEN USED TO BETTER ORGANISE THE ELEMENTS ON THE PAGE
AND ALSO TO GIVE THE LOGIN FORM A WHITE BORDER WHICH MATCHES THE BODY
BORDER.-->

<?php
    include 'functions.php';
    webTitle("Log In");
    webNav("login.php", "Log In", "index.php", "instructions.php", "leaderboard.php", "register.php", "Game", "Instructions", "Leaderboard", "Sign Up");
?>

<html>
<div class="contents">

    <h1>LOG IN</h1>

    <div class="register-container">
        <div class="register-container" id="register-info"><p>Logging into your account allows you 
            to record your score on our leaderboard, as well as play against others. </p>
        </div>

        <div class="form-wrapper">
            <form id = "login" name = "login">

            <label for="username"><div id="label-text">Username</div></label>
            <input type="text" placeholder="Username" name="username" id="username" required>

            <label for="password"><div id="label-text">Password</div></label>
            <input type="password" placeholder="Password" name="password" id="password" required>

            <button type="submit" class="login-submit-button">Submit</button>
            </form>
            <button type="register" class="no-account-button" id="noAccount">Don't have an account? Click here to sign up.</button>
        </div>
    </div>
</div>

    <script src = "login.js" async defer></script>

</html>

<?php
    webFooter();
?>