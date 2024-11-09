// Toggle background music
function toggleMusic() {
    const music = document.getElementById('bg-music');
    const button = document.getElementById('music-button');
    if (music.paused) {
        music.play();
        button.textContent = "Pause Music";
    } else {
        music.pause();
        button.textContent = "Play Music";
    }
}
