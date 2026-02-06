const button = document.getElementById("changeColorBtn");

button.addEventListener("click", function () {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}