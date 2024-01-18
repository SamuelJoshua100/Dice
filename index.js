
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h3").innerHTML = "Player 1 Wins &#129327;!!";
    playClickSound();
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h3").innerHTML = "Player 2 Wins &#128526;!!";
    playClickSound();
} else {
    document.querySelector("h3").innerHTML = "It's a Draw &#128557;!!";
    playClickSound();
};

document.querySelectorAll(".btn")[i].addEventListener("click", playClickSound);

function playClickSound() {
    var audioSound = new Audio("sounds/dice.mp3");
    audioSound.play();
}





