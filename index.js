
var randomNumber1 = Math.floor((Math.random() * 6) +1);
var randomNumber2 = Math.floor((Math.random() * 6) +1);





function changeDice1() {
    if(randomNumber1 === 1){
        document.querySelector(".dice i ").setAttribute('class','fa-solid fa-dice-one fa-10x')
    }
    else if(randomNumber1 === 2){
        document.querySelector(".dice i ").setAttribute('class','fa-solid fa-dice-two fa-10x')
    }
    else if(randomNumber1 === 3){
        document.querySelector(".dice i ").setAttribute('class','fa-solid fa-dice-three fa-10x')
    }
    else if(randomNumber1 === 4){
        document.querySelector(".dice i ").setAttribute('class','fa-solid fa-dice-four fa-10x')
    }
    else if(randomNumber1 === 5){
        document.querySelector(".dice i ").setAttribute('class','fa-solid fa-dice-five fa-10x')
    }
    else{
        document.querySelector(".dice i ").setAttribute('class','fa-solid fa-dice-six fa-10x')
    }
    
};

function changeDice2() {
    if(randomNumber2 === 1){
        document.querySelector(".dice2 i ").setAttribute('class','fa-solid fa-dice-one fa-10x')
    }
    else if(randomNumber2 === 2){
        document.querySelector(".dice2 i ").setAttribute('class','fa-solid fa-dice-two fa-10x')
    }
    else if(randomNumber2 === 3){
        document.querySelector(".dice2 i ").setAttribute('class','fa-solid fa-dice-three fa-10x')
    }
    else if(randomNumber2 === 4){
        document.querySelector(".dice2 i ").setAttribute('class','fa-solid fa-dice-four fa-10x')
    }
    else if(randomNumber2 === 5){
        document.querySelector(".dice2 i ").setAttribute('class','fa-solid fa-dice-five fa-10x')
    }
    else{
        document.querySelector(".dice2 i ").setAttribute('class','fa-solid fa-dice-six fa-10x')
    }

    document.querySelector(".button").setAttribute('onClick','refreshPage()');
    document.querySelector(".button").innerHTML = "Refresh me!";
    
    
};

function giveResults(){
    if (randomNumber1 < randomNumber2){
        document.querySelector(".results").innerHTML = "Player on the right wins!"
    }
    else if (randomNumber1 > randomNumber2){
        document.querySelector(".results").innerHTML = "Player on the left wins!"
    }
    else{
        document.querySelector(".results").innerHTML = "It's a TIE!"
    }

    
}

function refreshPage(){
    window.location.reload();
}