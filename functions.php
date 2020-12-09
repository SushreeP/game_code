<?php

/* THIS FILE CONTAINS ALL THE COMMON FUNCTIONS I WILL USE ON MY WEBPAGES, SO THAT I DO NOT HAVE TO DUPLICATE CODE.
VARIABLES ALSO HELP ME TO KEEP CODE DYNAMIC AND EFFICIENT. */

    function webTitle($title){
        echo '
        <html>
        <head>
            <title>' . $title . '</title>
            <link href="css/main.css" rel="stylesheet" type="text/css">
        </head>    
        </html>
        ';
    }

    function webNav($current, $title, $missingPage1, $missingPage2, $missingPage3, $missingPage4, $missingTitle1, $missingTitle2, $missingTitle3, $missingTitle4){
        echo '
        <html>
        <body>
        <font face = "Calibri"/font>
        <link href="css/main.css" rel="stylesheet" type="text/css">
        <img src="./images/logo.png" class="logo" alt="Mental Arithmetic Challenge">

        <div class="topnav">
            <a class="active" href=' . $current . '>' . $title . '</a>
            <a href="' . $missingPage1 . '">' . $missingTitle1 . '</a>
            <a href="' . $missingPage2 . '">' . $missingTitle2 . '</a>
            <a href="' . $missingPage3 . '">' . $missingTitle3 . '</a>
            <a href="' . $missingPage4 . '">' . $missingTitle4 . '</a>
            <a href="https://instagram.com"><img src="https://image.flaticon.com/icons/png/512/87/87390.png" class="topnav" id="socials" alt="Instagram"></a>
            <a href="https://facebook.com"><img src="https://freepikpsd.com/wp-content/uploads/2020/07/facebook-logo-icon-png-22.png" class="topnav" id="socials" alt="Facebook"></a>
            </div>
        
        </body>
        </html>
        ';
    }

    function webFooter(){
        echo '
        <html>
        <footer>Copyright Jai Guerrero | 2020</footer>
        </html>
        ';
    }

?>