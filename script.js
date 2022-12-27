// Challenge-1:
function ageInDays(){
    let birthYear = prompt("Which year you were born... my friend!!!");
    let ageInDays = (2022 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode(`You are ${ageInDays} days old...`)
    h1.setAttribute('id','ageInDays')
    h1.appendChild(textAnswer)
    document.getElementById('result').appendChild(h1)
}

function reset1(){
    document.getElementById('ageInDays').remove();
}

//Challenge-2:
function generateCat(){
    let image = document.createElement('img');
    let generate = document.getElementById('cat-generator');
    image.src = "cute-kitty.gif";
    image.setAttribute('id','gen')
    generate.appendChild(image);
} 

function reset2(){
    document.getElementById('gen').remove();
}