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
var options = document.getElementById("options");
var count;
var gameOver;
var value;
var arr;
var moves;
var symbol;
var humanGame;

window.onload = reset;

function reset() {
    humanGame = false;
    gameOver = false;
    for(var i = 0; i < allSpots.length; i++) {
        allSpots[i].innerHTML = "";
        allSpots[i].classList.remove("x");
        allSpots[i].classList.remove("o");
    }
    message.classList.remove("x");
    message.classList.remove("o");
    message.innerHTML = "";
    moves = 0;
    count = 0;
    options.style.display = "block";
    var allOptionBtns = document.getElementsByClassName("select");

    for (var i = 0; i < allOptionBtns.length; i++) {
        allOptionBtns[i].addEventListener("click", function(){
            options.style.display = "none"
            value = Number(this.getAttribute("value"));
            if (value === 0) {
                compTurn();
            } else {
                humanGame = true;
            }
        });
    }
}

resetBtn.addEventListener("click", function() {
    reset();
});

function compTurn() {
    if (moves % 2 === 0 && gameOver !== true) {
        var arr = [];
        for (var i = 0; i < allSpots.length; i++) {
            if (allSpots[i].innerHTML !== "x" && allSpots[i].innerHTML !== "o") {
                arr.push(allSpots[i]);
            }
        }
        var thisTime = Math.floor(Math.random() * arr.length);
        var getVal =  Number(arr[thisTime].getAttribute("value"));
        allSpots[getVal].classList.add("x");
        allSpots[getVal].innerHTML = "x";
        symbol = "x";
        player = 1;
        moves++;
        checkScore(moves, symbol, player);
        clearText(symbol, player);
    }
}

for (var i = 0; i < allSpots.length; i++) {
    allSpots[i].addEventListener("click", function() {
        if (moves % 2 !== 0) {
        if (this.innerHTML === "x" || this.innerHTML === "o") {
            runMessage();
        } else {
            this.classList.add("o");
            this.innerHTML = "o";
            symbol = "o";
            player = 2;
            moves++;
            checkScore(moves, symbol, player);
            clearText(symbol, player);
            compTurn();
        }}
    })
}

for (var k = 0; k < allSpots.length; k++) {
    allSpots[k].addEventListener("click", function() {
        if (humanGame && !gameOver) {
            if (this.innerHTML !== "x" && this.innerHTML !== "o") {
                if (count % 2 === 0) {
                this.classList.add("x");
                this.innerHTML = "x";
                symbol = "x";
                player = 1;
                } else {
                this.classList.add("o");
                this.innerHTML = "o";
                symbol = "o";
                player = 2;
                }
                count++;
            } else {
                runMessage();
            }
            checkScore(count, symbol, player);
            clearText(symbol, player);
        }
    });
}

function runMessage() {
    message.innerHTML = "This spot is already taken.";
    setTimeout(function(){
        message.innerHTML = "";
    }, 2000);
}

function checkScore(turns, text, player) {
    if ((spot1.innerHTML === text && spot2.innerHTML === text && spot3.innerHTML === text) ||
        (spot4.innerHTML === text && spot5.innerHTML === text && spot6.innerHTML === text) ||
        (spot7.innerHTML === text && spot8.innerHTML === text && spot9.innerHTML === text) ||
        (spot1.innerHTML === text && spot4.innerHTML === text && spot7.innerHTML === text) ||
        (spot2.innerHTML === text && spot5.innerHTML === text && spot8.innerHTML === text) ||
        (spot3.innerHTML === text && spot6.innerHTML === text && spot9.innerHTML === text) ||
        (spot1.innerHTML === text && spot5.innerHTML === text && spot9.innerHTML === text) ||
        (spot3.innerHTML === text && spot5.innerHTML === text && spot7.innerHTML === text)) {
        message.classList.add(text);
        message.innerHTML = "Player " + player + " wins!";
        gameOver = true;
    } else if (turns === 9) {
        message.innerHTML = "It's a tie!"
        gameOver = true;
    }
}

function clearText(sym, play) {
    sym = "";
    play = "";
}