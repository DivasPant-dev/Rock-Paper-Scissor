const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const computerChoce = document.querySelector(".computerChoseSpan");
const scoreComp = document.querySelector(".computerSpan");
const scorePlay = document.querySelector(".playerSpan");
const display = document.querySelector(".display");

function fRock() {
    rock.classList.add("selected");
    paper.classList.remove("selected");
    scissor.classList.remove("selected");
}

function fPaper() {
    rock.classList.remove("selected");
    paper.classList.add("selected");
    scissor.classList.remove("selected");
}

function fScissor() {
    rock.classList.remove("selected");
    paper.classList.remove("selected");
    scissor.classList.add("selected");
}


function confirmm() {
    const string = ["rock", "paper", "scissor"];
    const playerChose = document.querySelector(".selected");
    const random = string[Math.floor(Math.random() * string.length)];

    if (!playerChose) {
        display.innerHTML = "Please select any one option!";
        display.style.color = "orange";
        return;
    }

    computerChoce.innerHTML = random;

    if (playerChose.classList.contains(random)) {
        display.innerHTML = "It's a Tie";
        display.style.color = "black"
    } else if (
        playerChose.classList.contains("rock") && random === "scissor" ||
        playerChose.classList.contains("paper") && random === "rock" ||
        playerChose.classList.contains("scissor") && random === "paper"
    ) {
        display.innerHTML = "You won!";
        display.style.color = "green";
        scorePlay.innerHTML = parseInt(scorePlay.innerHTML) + 1;
    } else {
        display.innerHTML = "You lost!";
        display.style.color = "red";
        scoreComp.innerHTML = parseInt(scoreComp.innerHTML) + 1;
    }

    rock.classList.remove("selected");
    paper.classList.remove("selected");
    scissor.classList.remove("selected");
}