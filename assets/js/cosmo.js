document.addEventListener('DOMContentLoaded', ()=>{

//const displayCurrentLevel = document.querySelector('#level-indicator')    
//let currentLevel = 1

})


//let game {
    //score: 0,
    //currentGame: [],
    //playerMoves:[],
    //}


// random word generator = wordnik API
//my API key = 



//click event listner to start the game

//level 1 play
//js
//FUNC = new function

// function that slects which level function to impletment using if/if else.

//event that listens for when the start button is clicked and toggles the displayed divs
const startHidden = document.querySelector('.start-hidden');
const clickHidden = document.querySelector('.click-hidden');

function showGameArea(){    
    startHidden.classList.toggle('hide');
    clickHidden.classList.toggle('hide');

    //call function to start the timer
    
    startTimer();

}


//timer function
function startTimer(){

let startTime = 3;
    const timerT = document.querySelector('#timer');
    timerT.innerHTML = `${startTime}`;

    const countDown = setInterval(() => {
        startTime--;
        timerT.innerHTML = `${startTime}`;
        if(startTime === 0){
            clearInterval (countDown);
        }
},1000);

}



// function to change colour of background as time running 
//const timerColor = document.getElementById('timer');

//if(remainingTime < 50){
   // timerColor.style.display = 'figure out how to do tis'
    
//}
// listening for when the play button is clicked to start the game //

//document.querySelector("#start-game").addEventListener('click', startGame); 

// start game function //

//function startGame (){

    //game.score = 0;
    //game.playerMoves =[];
    //document.getElementById('player-answer').focus()




//if (getElementById('level-indicator').innerHTML === 'Level 1'){
//level 1 play//
//const array1 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

//function getNextLetter(arr) {
    //const randomIndex = Math.floor(Math.random() * arr.length);
    //const letter = arr[randomIndex];
    //return letter;
//}

//const result = getNextLetter(array1);
//document.getElementById("quiz-letter").innerHTML = result

//console.log(result);
//}


//level 2 play

//}

//function playerResponse {}

//function nextTurn () {
    //game.playerMoves = [];

//}