const canvas = document.getElementById("myCanvas");
const container = document.getElementById("container");
const coordinates = document.getElementById("coordinates");

let offsetX, offsetY;
let isDragging = false;

canvas.addEventListener("mousedown", function (e) {
    isDragging = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
});

canvas.addEventListener("mouseup", function () {
    isDragging = false;
});

container.addEventListener("mousemove", function (e) {
    if (isDragging) {
        const x = e.pageX - container.offsetLeft - offsetX;
        const y = e.pageY - container.offsetTop - offsetY;
        canvas.style.left = x + "px";
        canvas.style.top = y + "px";
        const relativeX = x + canvas.width / 2;
        const relativeY = y + canvas.height / 2;
        coordinates.textContent = `{x:${relativeX}, y:${relativeY}}`;
    }
});
