$(document).ready(function () {

    $("#changeColorBtn").on("click", function () {
        var randomColor = getRandomColor();
        $("body").css("background-color", randomColor);
    });

});

function getRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}