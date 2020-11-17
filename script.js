var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("p")
var body = document.getElementById("background");
var button = document.querySelector(".random");

function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background;

}

function randomBackground(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    body.style.background = "linear-gradient(to right, " + "#" + randomColor + ", " + "#" + randomColor2 + ")";
    css.textContent = body.style.background;
    color1.value = "#" + randomColor;
    color2.value = "#" + randomColor2;
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomBackground);

setGradient();
