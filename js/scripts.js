var spot1 = document.getElementById("spot1");
var spot2 = document.getElementById("spot2");
var spot3 = document.getElementById("spot3");
var spot4 = document.getElementById("spot4");
var spot5 = document.getElementById("spot5");
var spot6 = document.getElementById("spot6");
var spot7 = document.getElementById("spot7");
var spot8 = document.getElementById("spot8");
var spot9 = document.getElementById("spot9");
var resetBtn = document.getElementById("resetBtn");
var tbody = document.getElementById("tbody");
var allSpots = document.getElementsByTagName("td");
var message = document.getElementById("message");
var count = 0;

function reset() {
    for(var i = 0; i < allSpots.length; i++) {
        allSpots[i].innerHTML = "";
        allSpots[i].classList.remove("x");
        allSpots[i].classList.remove("o");
    }
    message.classList.remove("x");
    message.classList.remove("o");
    message.innerHTML = "";
    count = 0;
}

resetBtn.addEventListener("click", function() {
    reset();
});

for (var k = 0; k < allSpots.length; k++) {
    allSpots[k].addEventListener("click", function() {
        if (this.innerHTML !== "x" && this.innerHTML !== "o") {
            if (count % 2 === 0) {
            this.classList.add("x");
            this.innerHTML = "x";
            } else {
            this.classList.add("o");
            this.innerHTML = "o";
            }
            count++;
            if (count === 9) {
                message.innerHTML = "It's a tie!"
            }
        } else {
            message.innerHTML = "This spot is already taken.";
            setTimeout(function(){
                message.innerHTML = "";
            }, 2000);
        }
        checkResults();
    });
}

function checkResults() {
    if ((spot1.innerHTML === "x" && spot2.innerHTML === "x" && spot3.innerHTML === "x") ||
        (spot4.innerHTML === "x" && spot5.innerHTML === "x" && spot6.innerHTML === "x") ||
        (spot7.innerHTML === "x" && spot8.innerHTML === "x" && spot9.innerHTML === "x") ||
        (spot1.innerHTML === "x" && spot4.innerHTML === "x" && spot7.innerHTML === "x") ||
        (spot2.innerHTML === "x" && spot5.innerHTML === "x" && spot8.innerHTML === "x") ||
        (spot3.innerHTML === "x" && spot6.innerHTML === "x" && spot9.innerHTML === "x") ||
        (spot1.innerHTML === "x" && spot5.innerHTML === "x" && spot9.innerHTML === "x") ||
        (spot3.innerHTML === "x" && spot5.innerHTML === "x" && spot7.innerHTML === "x")) {
        message.classList.add("x");
        message.innerHTML = "Player 1 wins!";
    } else if ((spot1.innerHTML === "o" && spot2.innerHTML === "o" && spot3.innerHTML === "o") ||
        (spot4.innerHTML === "o" && spot5.innerHTML === "o" && spot6.innerHTML === "o") ||
        (spot7.innerHTML === "o" && spot8.innerHTML === "o" && spot9.innerHTML === "o") ||
        (spot1.innerHTML === "o" && spot4.innerHTML === "o" && spot7.innerHTML === "o") ||
        (spot2.innerHTML === "o" && spot5.innerHTML === "o" && spot8.innerHTML === "o") ||
        (spot3.innerHTML === "o" && spot6.innerHTML === "o" && spot9.innerHTML === "o") ||
        (spot1.innerHTML === "o" && spot5.innerHTML === "o" && spot9.innerHTML === "o") ||
        (spot3.innerHTML === "o" && spot5.innerHTML === "o" && spot7.innerHTML === "o")) {
        message.classList.add("o");
        message.innerHTML = "Player 2 wins!";

    }
}