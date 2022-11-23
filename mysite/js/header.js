header.innerHTML = `
<header>
            <a href="index.html">
                <img class="logo" src="images/mylogo.png" alt="Stay Connected With Jared Logo">
            </a>
            <nav>
                <a href="index.html">Home</a>
                <a href="video-journals.html">Video Journals</a>
                <a href="piano.html">Piano Videos</a>
                <a href="videos.html">Other Videos</a>
                <a href="about-me.html">About Me (FAQ)</a>
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
`;