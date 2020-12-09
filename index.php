<!--THIS PAGE IS MY HOME PAGE, WHICH WILL CONTAIN THE PLACEHOLDER FOR THE GAME. -->

<?php
    include 'functions.php';
    webTitle("Game");
    webNav("index.php", "Game", "instructions.php", "leaderboard.php", "register.php", "login.php", "How to Play", "Leaderboard", "Sign Up", "Log In");
?>

<html>

<body>
    
    <div id="scrolling-title-1">
        <marquee behavior="scroll" direction="left" height:="" loop="" scrollamount="8" scrolldelay="85" width="100%">
            <span style="font-size: 1em;color:#FFFFFF">
                Welcome to the Mental Arithmetic Challenge!</span></marquee>
            </div>

    <div id="scrolling-title-2">
        <marquee behavior="scroll" direction="left" height:="" loop="" scrollamount="8" scrolldelay="87" width="100%">
            <span style="font-size: 1em;color:#FFFFFF">
                Sign up/log in to record your score, and click 'How to Play' for game instructions!</span></marquee>
            </div>

    <div id="scrolling-title-2">
        <marquee behavior="scroll" direction="left" height:="" loop="" scrollamount="8" scrolldelay="95" width="100%">
            <span style="font-size: 1em;color:#FFFFFF">
                You can also check your rank in our leaderboard!</span></marquee>
            </div>

    <div id="scrolling-title-1">
        <marquee behavior="scroll" direction="left" height:="" loop="" scrollamount="8" scrolldelay="95" width="100%">
            <span style="font-size: 1em;color:#FFFFFF">
                Enjoy the game!</span></marquee>
            </div>
    
    <!--PLACEHOLDER FOR GAME-->

    <div id="game">
      <div id="operation"></div>
      <span id= "timer">0s</span>
      <div id="formcontainer">
        <form name="userinput">
          <input
            placeholder="Your Number"
            name="useranswer"
            id="useranswer"
            /><button id="start">Start</button>
        </form>
      </div>
    </div>

    <script src="script.js" async defer></script>

    </body>

</html>

<?php
    webFooter();
?>