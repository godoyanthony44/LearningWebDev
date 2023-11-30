let MAX = 6;
let MIN = 1;
let randomNum;
let button = document.getElementById("DiceRoll");
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let dice3 = document.getElementById("dice3");

button.onclick = function(){
    randomNum = Math.floor(Math.random()*(MAX-MIN)) + MIN;
    dice1.textContent = randomNum;
    randomNum = Math.floor(Math.random()*(MAX-MIN)) + MIN;
    dice2.textContent = randomNum;
    randomNum = Math.floor(Math.random()*(MAX-MIN)) + MIN;
    dice3.textContent = randomNum;
}


