header.innerHTML = `
<header>
 <link rel="stylesheet" href="styles/style.css"> 
<!-- <link rel="stylesheet" href="styles/Christmas-theme.css">  -->
 <!-- <link rel="stylesheet" href="styles/Halloween-theme.css"> -->

<style type="text/css">
.mobileShow { display: none;}

/* Smartphone Portrait and Landscape */
@media only screen
  and (min-device-width : 320px)
  and (max-device-width : 480px){ 
    .mobileShow {display: inline;}
}
</style>
            <a href="index.html">
                <img class="logo" src="images/mylogo.png" alt="Stay Connected With Jared Logo">
            </a>
            <nav>
                <a href="index.html">Home</a>
                <a href="video-journals.html">Video Journals</a>
                <a href="piano.html">Piano Videos</a>
                <a href="videos.html">Other Videos</a>
                <a href="about-me.html">About Me (FAQ)</a>
                <a href="contact.html">Contact Me</a>
                <!-- <a href="contact.html">Contact me</a> -->
                <!-- <a href="coming-soon.html">Coming Soon</a> -->
                <!-- <a href="mission.html">Mission Audio Files</a> -->
                <a href="favorite-music.html">Favorite Music</a>
                <a href="painting.html">Paintings</a>
                <a href="recipies.html">Recipes</a>
                <script>
                    function darklightmode(){
                        var element = document.body;
                        element.classList.toggle("dark-mode");
                    }
                </script>
            </nav>
        </header>
        <style>
    html {
        scroll-behavior: smooth;
    }
</style>

        <!-- <button onclick="darklightmode()">Dark/Light</button>
        <script>
            function darklightmode(){
                var element = document.body;
                element.classList.toggle("dark-mode");
            } 
        </script> -->
        <!-- <img class="snow-background" src="images/christmas-background-with-falling-snow_275806-1176.webp" alt="snow-background"> -->
        
        <!-- <div class="storm"></div>
        <a hidden>
            <audio controls autoplay loop>
                <source src="Audio/rain-lightning-thunder-121739.mp3" type=audio/mpeg> Your browser does not support the
                    audio element. </audio> </a> 
                <div class='button-box'>
                </div> -->
`;