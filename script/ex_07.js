window.addEventListener('load', () => {

    const canvas = document.querySelector("canvas")
    const ctx = canvas.getContext("2d")
    ctx.beginPath();
    ctx.moveTo(6, 6)
    ctx.lineTo(14, 10)
    ctx.lineTo(6, 14)
    const width = canvas.width;
    const height = canvas.height;
    ctx.closePath();
    ctx.fillStyle = "green"
    ctx.fill();
    ctx.stroke();
    const song = new Audio("triangle.ogg")
    const button = document.querySelectorAll("footer div button")
    const pause = button[0]
    const stop = button[1]
    const mute = button[2]

    canvas.onclick = () => {
        song.play();
    }
    pause.onclick = () => {
        song.pause();
    }
    mute.onclick = () => {
        if (song.muted) {
            song.muted = false;
        } else {
            song.muted = true;
        }
    }
    stop.onclick = () => {
        song.pause();
        song.currentTime = 0;
    }
})