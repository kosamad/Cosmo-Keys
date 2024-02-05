document.addEventListener("DOMContentLoaded", function () {
	//takes the stored selected level key (from the level page) and uses it to set the corresponsing level id
	const levelId = localStorage.getItem("selectedLevel");
	const levelIndicator = document.getElementById("level-indicator");
	if (levelId === "level-1") {
		levelIndicator.innerHTML = "Level 1";
	} else if (levelId === "level-2") {
		levelIndicator.innerHTML = "Level 2";
	} else if (levelId === "level-3") {
		levelIndicator.innerHTML = "Level 3";
	}
});

// setting the select level key on the level.html page and storing it locally.
function setLevelId(level) {
	localStorage.setItem("selectedLevel", level);
}

//function which speaks the score at the end of the game
function speakScore(score){
    const scoreVoice = new SpeechSynthesisUtterance(`congratulations, you got ${scoreDisplay.innerText} points.`);
window.speechSynthesis.speak(scoreVoice);   
}



// random word generator = wordnik API
//my API key = 3lzog3go2uofwfe898ruc3q94lgp7jl1sqnhwc2dys5f752l2

// function that slects which level function to impletment using if/if else.

//timer function

let startTime = 5;
let remainingTime = startTime;
let countDown;
const timerT = document.querySelector("#timer");
const timerColor = document.querySelector(".time-container");
let paused = false;

function startTimer() {
	timerColor.style.backgroundImage =
		"radial-gradient(circle, #d0fdcc, #b1fdaa, #91fb85, #6bf95c, #30f61e)";

	timerT.innerHTML = `${remainingTime}`;

	countDown = setInterval(() => {
		if (!paused) {
			remainingTime--;
			timerT.innerHTML = `${remainingTime}`;

			//if statements to change the colour of the time-container as time reduces
			if (remainingTime <= 50 && remainingTime >= 41) {
				timerColor.style.backgroundImage =
					"radial-gradient(circle, #e5f6c2, #d2ee9c, #bee676, #a8de4c, #90d600)";
			} else if (remainingTime <= 40 && remainingTime >= 31) {
				timerColor.style.backgroundImage =
					"radial-gradient(circle, #fdf9b2, #f9f392, #f5ed71, #f0e74c, #ece10f)";
			} else if (remainingTime <= 30 && remainingTime >= 21) {
				timerColor.style.backgroundImage =
					"radial-gradient(circle, #f3d7a5, #f2c983, #f1ba61, #f0ab3e, #ef9b09)";
			} else if (remainingTime <= 20 && remainingTime >= 11) {
				timerColor.style.backgroundImage =
					"radial-gradient(circle, #f8c7a8, #f8ae80, #f6945a, #f27934, #ec5b00)";
			} else if (remainingTime <= 10 && remainingTime >= 0) {
				timerColor.style.backgroundImage =
					"radial-gradient(circle, #f8afaf, #ff8f8b, #ff6d64, #fb473a, #f10000)";
			}

			if (remainingTime === 0) {
				endGameSound.play();
				clearInterval(countDown);
				gameRunning = false;
				message.innerHTML = "Game Over";                
				playerAnswer.contentEditable = "false";
				playerAnswer.innerHTML =
					'<a href="game.html" type="button" aria-label="reset game"><i id="reset-game-two" class="fa-solid fa-arrow-rotate-right icon"></i></a>';
					setTimeout(() => {
						speakScore(score);
						}, 2500);
		}
		}
	}, 1000);
}

// start game function //

let score = 0;
let gameRunning;
const currentLetter = document.getElementById("quiz-letter");
const playerAnswer = document.getElementById("player-answer");
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("js-score");
let playerAnswerContent = "";

//sound variables
let correctSound=new Audio('assets/sounds/335908__littlerainyseasons__correct.mp3');
correctSound.volume=0.5;
let wrongSound=new Audio ('assets/sounds/554053__gronkjaer__wronganswer.mp3');
wrongSound.volume=0.5;
let endGameSound = new Audio('assets/sounds/527650__fupicat__winsquare.wav');
endGameSound.volume=0.5;

//array for level 1 play
const letters = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

//level 1 play - load word from array //
//if (getElementById('level-indicator').innerHTML === 'Level 1'){
function levelOne(letters) {
	const randomIndex = Math.floor(Math.random() * letters.length);
	currentLetter.innerHTML = letters[randomIndex];		
	speakLetter(currentLetter.innerText);
	
	playerAnswer.addEventListener("input", function(event){
		matchCheck()});
}

//function which speaks the letter(level-1 play) selected
function speakLetter(letter){
    const letterVoice = new SpeechSynthesisUtterance(letter);
window.speechSynthesis.speak(letterVoice);}

function startGame() {
	playerAnswer.contenteditable = "true";
	gameRunning = true;
	document.getElementById("player-answer").focus();

	//level 1 play - load word from array //
	levelOne(letters);
		   
	//listens for player typing (the input) and executes the matchCheck function
	
	};

	function matchCheck() {		
		let playerAnswerContent=playerAnswer.textContent;			
		if (playerAnswerContent === currentLetter.textContent) {
			message.innerHTML = "Correct!";	
			correctSound.play();	
			score++;
			scoreDisplay.innerHTML = score;
			return true;			
		} else {
			message.innerHTML = "Wrong!";	
			wrongSound.play();
			scoreDisplay.innerHTML = score;
			compTurn=true;
			return false;
		};
	
	}


//checks if user and computer inputs match. if yes (true) updates score, and ,after a delay, calls the next letter and clears the player input box
// function matchCheck() {		
// 	let playerAnswerContent=playerAnswer.textContent;

// 		if (matchResult()) {			
// 			setTimeout(() => {
// 			levelOne(letters);
// 			playerAnswer.innerHTML = "";
// 			playerAnswer.contenteditable = "true";								
// 			}, 1000);				
// 		score++;
// 	} else {				
// 		setTimeout(() => {
// 			levelOne(letters);
// 			playerAnswer.innerHTML = "";	
// 			playerAnswer.contenteditable = "true";				
// 			}, 1000);
// 			}
// 		scoreDisplay.innerHTML = score;
// }

// // event parameter passed into matchResult function which means the user input can be limited to 1 character only.
// function matchResult() {	
// 	let playerAnswerContent=playerAnswer.textContent;
// 	if (playerAnswerContent === currentLetter.textContent) {
// 		message.innerHTML = "Correct!";	
// 		correctSound.play();	
// 		return true;
// 	} else {
// 		message.innerHTML = "Wrong!";	
// 		wrongSound.play();	
// 		return false;
// 	}
// };

//const result = getNextLetter(letter);
//document.getElementById("quiz-letter").innerHTML = result
//console.log(result);

//}

//event that listens for when the start button is clicked and toggles the displayed divs
//i.e going from a play button to the game play area.
//starts the first game + timer
const startHidden = document.querySelector(".start-hidden");
const clickHidden = document.querySelector(".click-hidden");

function showGameArea() {
	startHidden.classList.toggle("hide");
	clickHidden.classList.toggle("hide");

	startGame();
	startTimer();
}

//pausing the timer and changing the symbol written in the DOM to restart the timer again.
let pauseBtn = document.getElementById("pause-btn");
let removeIcon = document.getElementById("pause-remove");

pauseBtn.addEventListener("click", function () {
	if (removeIcon.classList.contains("fa-pause")) {
		removeIcon.classList.remove("fa-pause");
		removeIcon.classList.add("fa-play");
		paused = true;
	} else {
		removeIcon.classList.remove("fa-play");
		removeIcon.classList.add("fa-pause");
		paused = false;
	}
});

//}
// listening for when the play button is clicked to start the game //

//document.querySelector("#start-game").addEventListener('click', startGame);

//level 2 play

//}

//function playerResponse {}

//function nextTurn () {
//game.playerMoves = [];

//}


//voice parts

//if ('speechSynthesis' in window) {
    // Web Speech API is supported
    // Your code to use speech synthesis goes here
//} else {
    // Web Speech API is not supported
  //  console.error('Web Speech API is not supported in this browser.');
//}