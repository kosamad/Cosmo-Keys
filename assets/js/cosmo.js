document.addEventListener('DOMContentLoaded', function () {

    //takes the stored selected level key (from the level page) and uses it to set the corresponsing level id
    const levelId = localStorage.getItem('selectedLevel');
    const levelIndicator = document.getElementById('level-indicator');
    if (levelId === 'level-1'){
        levelIndicator.innerHTML = 'Level 1';
    } else if (levelId === 'level-2'){
        levelIndicator.innerHTML = 'Level 2';
    } else if (levelId === 'level-3'){
        levelIndicator.innerHTML = 'Level 3';
    };  

});

// setting the select level key on the level.html page and storing it locally.
function setLevelId(level){
    localStorage.setItem('selectedLevel', level);
      }

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

//timer function

let startTime = 60;
let remainingTime = startTime;
let countDown;
const timerT = document.querySelector('#timer');
const timerColor = document.querySelector('.time-container');
let paused=false;

function startTimer(){
    timerColor.style.backgroundImage = 'radial-gradient(circle, #d0fdcc, #b1fdaa, #91fb85, #6bf95c, #30f61e)';
    
    timerT.innerHTML = `${remainingTime}`;

    countDown = setInterval(() => {
        if(!paused){
        remainingTime--;
        timerT.innerHTML = `${remainingTime}`;

        //if statements to change the colour of the time-container as time reduces
        if (remainingTime <= 50 && remainingTime >= 41) {
            timerColor.style.backgroundImage = 'radial-gradient(circle, #e5f6c2, #d2ee9c, #bee676, #a8de4c, #90d600)';
        } else if (remainingTime <= 40  && remainingTime>= 31) {
            timerColor.style.backgroundImage = 'radial-gradient(circle, #fdf9b2, #f9f392, #f5ed71, #f0e74c, #ece10f)';
        } else if (remainingTime <= 30  && remainingTime >= 21) {
            timerColor.style.backgroundImage = 'radial-gradient(circle, #f3d7a5, #f2c983, #f1ba61, #f0ab3e, #ef9b09)';
        } else if (remainingTime <= 20  && remainingTime >= 11) {
            timerColor.style.backgroundImage = 'radial-gradient(circle, #f8c7a8, #f8ae80, #f6945a, #f27934, #ec5b00)';
        }else if (remainingTime<= 10  && remainingTime >= 0) {
            timerColor.style.backgroundImage = 'radial-gradient(circle, #f8afaf, #ff8f8b, #ff6d64, #fb473a, #f10000)';
        };

        if(remainingTime=== 0){
            clearInterval (countDown);
        }
        }
        }, 1000);
        
}


//event that listens for when the start button is clicked and toggles the displayed divs
//i.e going from a play button to the game play area.
//starts the first game + timer
const startHidden = document.querySelector('.start-hidden');
const clickHidden = document.querySelector('.click-hidden');

function showGameArea(){    
    startHidden.classList.toggle('hide');
    clickHidden.classList.toggle('hide');


   startTimer();
};



//pausing the timer and changing the symbol written in the DOM to restart the timer again. 
let pauseBtn = document.getElementById('pause-btn');
let removeIcon = document.getElementById('pause-remove');

pauseBtn.addEventListener('click',function() {

    if (removeIcon.classList.contains('fa-pause')) {
        removeIcon.classList.remove('fa-pause'); 
        removeIcon.classList.add('fa-play');       
        paused=true;
        } else {removeIcon.classList.remove('fa-play'); 
    removeIcon.classList.add('fa-pause');;
        paused=false;
        }         
});



   
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