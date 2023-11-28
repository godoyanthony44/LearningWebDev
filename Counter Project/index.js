let count = 0
const decreaseBTN = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increaseBTN = document.getElementById('increase');
const counter = document.getElementById('counter');

counter.textContent = count

increaseBTN.onclick = function(){
    count++
    counter.textContent = count;
};

decreaseBTN.onclick = function(){
    count--
    counter.textContent = count;
};

reset.onclick = function(){
    count = 0
    counter.textContent = count;
};


