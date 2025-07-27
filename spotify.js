document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById("audioPlayer");
    const playButtons = document.querySelectorAll(".imageButton");
    const playOverElements = document.querySelectorAll(".playOver");

    playButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const songSrc = button.getAttribute("data-src");
            const fullSrc = new URL(songSrc, window.location.href).href;

            if (audioPlayer.src !== fullSrc) {
                audioPlayer.src = fullSrc;
                audioPlayer.play();
            } else {
                if (audioPlayer.paused) {
                    audioPlayer.play();
                } else {
                    audioPlayer.pause();
                }
            }
            console.log(1)

            // Reset all playOver elements
            playOverElements.forEach((over,i)=>{
                over.style.opacity=i===index&&!audioPlayer.paused?"1":"0";
            })
        });
    });
});
