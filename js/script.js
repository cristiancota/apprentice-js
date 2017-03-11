
var button1 = document.getElementById('btn1');
console.log(button1)

function hola(){
    var newDiv = document.createElement("div");
    newDiv.style.background = getRandomColorCode();

    newDiv.addEventListener('click', function(){
        newDiv.style.background = getRandomColorCode();
    })

    document.body.appendChild(newDiv);
}

function stop(){
    clearInterval(interval)
}

var colors = ['red', 'green', 'blue']

function getRandomNumber(){
    return Math.floor(Math.random() * (1 + 0 - 255)) + 255;
}

function getRandomColorCode(){
    return "rgb("+getRandomNumber()+","+getRandomNumber()+","+getRandomNumber()+")"
}

var interval = setInterval(hola, 500);
