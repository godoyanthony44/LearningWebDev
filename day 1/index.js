console.log('this is a comment');
//window.alert('this is an alerr');

document.getElementById("heading").textContent = 'New Headlines';

let username;
let sum;
let name = 'anthony';
let age = 20;
let favFood = 'rice';
let isStudent = true;
const PI = 3.14;

//template literals are `${value}`

// Number() changes another datatype to numbers, String(), Boolean()

//Const is a constant value

document.getElementById("name").textContent = `Your name is ${name}`;
document.getElementById("age").textContent = `You are ${age} years old`;
document.getElementById("food").textContent = `Your favorite food is ${favFood}`;

//username = window.prompt("give me a name")
//document.getElementById("name").textContent = `Your name is ${username}`;

document.getElementById("button1").onclick = function(){
    username = document.getElementById("mytext").value;
    document.getElementById('heading').textContent = username
};


document.getElementById('button2').onclick = function(){
    radius = Number(document.getElementById('radius').value);
    circ = 2*PI*radius
    document.getElementById('sum').textContent = `The total circumfence of the circle is ${circ}`
};
