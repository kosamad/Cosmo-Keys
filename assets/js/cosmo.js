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

let startTime = 60;
    const timerT = document.querySelector('#timer');
    const timerColor = document.querySelector('.time-container');

    timerColor.style.backgroundImage = 'radial-gradient(circle, #d0fdcc, #b1fdaa, #91fb85, #6bf95c, #30f61e)';
    
    timerT.innerHTML = `${startTime}`;

    const countDown = setInterval(() => {
        startTime--;
        timerT.innerHTML = `${startTime}`;

        //if statements to change the colour of the time-container as time reduces
        if (startTime <= 50 && startTime >= 41) {
            timerColor.style.backgroundImage = 'radial-gradient(circle, #e5f6c2, #d2ee9c, #bee676, #a8de4c, #90d600)';
        } else if (startTime <= 40  && startTime >= 31) {
            timerColor.style.backgroundImage = 'radial-gradient(circle, #fdf9b2, #f9f392, #f5ed71, #f0e74c, #ece10f)';
        } else if (startTime <= 30  && startTime >= 21) {
            timerColor.style.backgroundImage = 'radial-gradient(circle, #f3d7a5, #f2c983, #f1ba61, #f0ab3e, #ef9b09)';
        } else if (startTime <= 20  && startTime >= 11) {
            timerColor.style.backgroundImage = 'radial-gradient(circle, #f8c7a8, #f8ae80, #f6945a, #f27934, #ec5b00)';
        }else if (startTime <= 10  && startTime >= 0) {
            timerColor.style.backgroundImage = 'radial-gradient(circle, #f8afaf, #ff8f8b, #ff6d64, #fb473a, #f10000)';
        };

        if(startTime === 0){
            clearInterval (countDown);
        }
        }, 1000);
}


   
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