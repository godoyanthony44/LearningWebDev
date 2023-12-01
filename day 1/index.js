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
    document.getElementById('heading').textContent = username;
};


document.getElementById('button2').onclick = function(){
    radius = Number(document.getElementById('radius').value);
    circ = 2*PI*radius
    document.getElementById('sum').textContent = `The total circumfence of the circle is ${circ}`
};


let ages = 21;

ages>= 21 ? console.log(`you are ${ages}`) : console.log(`Youre not old enough`);

let purchase  = 125;
let discount = purchase> 100 ? 10:0;


const myCheckBox = document.getElementById('checkbox1');
const visaBtn = document.getElementById('visaBtn');
const masterBtn = document.getElementById('masterBtn');
const applePay = document.getElementById('Apple Pay');
const subBtn = document.getElementById('submitt');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');



subBtn.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are Subscribed!`;
    }
    else{
        subResult.textContent = `You are not Subscribed!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if(masterBtn.checked){
        paymentResult.textContent = `You are paying with Master Card`;
    }
    else if(applePay.checked){
        paymentResult.textContent = `You are paying with Apple Pay`;
    }
    else{
        paymentResult.textContent = `You have not paid`;
    }
   
}
