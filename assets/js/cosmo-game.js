
// setTimeout(function () {
// 	// Hide the loading screen
// 	document.getElementById('loading-screen').style.display = 'none';

// 	// Show the game content
// 	document.getElementById('game-content').style.display = 'block';
// }, 3000); // Adjust the delay as needed



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

if ("speechSynthesis" in window) {
	//Web Speech API is supported
	//function which speaks the score at the end of the game
	function speakScore(score) {
		if ((scoreDisplay.innerText === 1)) {
			let scoreVoice = new SpeechSynthesisUtterance(
				`congratulations, you got ${scoreDisplay.innerText} point.`
			);
			window.speechSynthesis.speak(scoreVoice);
		} else if ((scoreDisplay.innerText === '0')) {
			let scoreVoice = new SpeechSynthesisUtterance(
				`Oh dear, you didn't get any points.`
			);
			window.speechSynthesis.speak(scoreVoice);
		} else {
			let scoreVoice = new SpeechSynthesisUtterance(
				`congratulations, you got ${scoreDisplay.innerText} points.`
			);
			window.speechSynthesis.speak(scoreVoice);
				}
	}}

	//function which speaks the letter(level-1 play) selected
	function speakLetter(letter) { 
		if ("speechSynthesis" in window) { // Web Speech API is supported            
        for (const char of letter) {
            const charVoice = new SpeechSynthesisUtterance(char);
			charVoice.rate = 1.5; //make it read faster than the default 1 (too slow)
            window.speechSynthesis.speak(charVoice);
        }
    } else {
        // Web Speech API is not supported
        console.log("Web Speech API is not supported in this browser.");
    }
}


//timer function
//variables//
let startTime = 60;
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
				speechSynthesis.cancel();
				endGameSound.play();
				clearInterval(countDown);
				gameRunning = false;				
				message.innerHTML = "Game Over";
				playerAnswer.contentEditable = "false";
				setTimeout(() => {
					speakScore(score);			
				}, 2500);
			}
		}
	}, 1000);
}

// start game function //
//variables//
let score = 0;
let gameRunning;
let currentLetter = document.getElementById("quiz-letter");
let playerAnswer = document.getElementById("player-answer");
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("js-score");
let playerAnswerContent = "";
let compTurn = true;
let twoLetterWords;
let lettersTyped = 0;

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

//sound variables
let correctSound = new Audio("assets/sounds/335908__littlerainyseasons__correct.mp3");
correctSound.volume = 0.5;
let wrongSound = new Audio("assets/sounds/554053__gronkjaer__wronganswer.mp3");
wrongSound.volume = 0.5;
let endGameSound = new Audio("assets/sounds/527650__fupicat__winsquare.wav");
endGameSound.volume = 0.5;






//level 1 play - load word from array //
//if (getElementById('level-indicator').innerHTML === 'Level 1'){
function levelOne(letters) {
	let randomIndex = Math.floor(Math.random() * letters.length);
	currentLetter.innerHTML = letters[randomIndex];
	speakLetter(currentLetter.innerText);
	playerTurn();
}


// // ???? youtube video by ByteGrad to help set up my 2 letter array using a fetch from the datamuse API
// // modified to map data results into an array amd to have the twoLetterWords variable be avaliable outide of the findwords function 
async function findWords() {
	try {
		let response = await fetch('https://api.datamuse.com/words?sp=[a-z][a-z]&max=200');
		let data = await response.json();
		return data.map(word => word.word);
	} catch (error) {
		console.error('An error occurred during the word retrieval', error);
		throw error;
	}
}

async function levelTwo() {
	try {
		// Check if twoLetterWords is already populated
		if (!twoLetterWords) {
			// Wait for findWords to complete and get the array
			twoLetterWords = await findWords();
			console.log(twoLetterWords);
		}
		let randomIndexTwo = Math.floor(Math.random() * twoLetterWords.length);
		currentLetter.innerHTML = twoLetterWords[randomIndexTwo];
		speakLetter(currentLetter.innerText);
		playerTurn();
	} catch (error) {
		console.error('An error occurred in levelTwo', error);
		// Handle errors specific to levelTwo if needed
	}

}

function computerTurn() {
	compTurn = true;
	message.innerHTML = "";
	//load correct level play
	if (levelId === "level-1") {
		levelOne(letters);
	} else if (levelId === "level-2") {
		levelTwo();
	};
}

function startGame() {
	playerAnswer.contenteditable = "true";
	gameRunning = true;
	document.getElementById("player-answer").focus();

	// Start the game
	computerTurn();
}


function playerTurn() {
	compTurn = false;
	// Reset the count of letters typed for each new player turn
	lettersTyped = 0;
	playerAnswer.addEventListener("input", handleInput); //listens for player typing (the input) and executes the matchCheck function
}
if (compTurn === false) {
	playerAnswer.contenteditable = "true";
} //else {
//playerAnswer.contenteditable = "false";
//}

function handleInput(event) {
	// Increment the count of letters typed each time there is a type in the box
	lettersTyped++;
	// Check if the desired count is reached e.g 2 for level two play
	if (levelId === "level-1") {
		matchCheck();
	} else if (levelId === "level-2" && lettersTyped === 1){
		preMatchCheck();
	}
	else if (levelId === "level-2" && lettersTyped === 2) {
		matchCheck();
	}
	//need to add in level 3 play check here
};

function preMatchCheck() {
	let playerAnswerContent = playerAnswer.textContent.trim();
    let currentLetterContent = currentLetter.textContent.trim();
	if (playerAnswerContent.charAt(0) === currentLetterContent.charAt(0)) {
        compTurn = false;			
	} else {
		compTurn = true;
		message.innerHTML = "Wrong!";
		speechSynthesis.cancel();
		wrongSound.play();
		scoreDisplay.innerHTML = score;
		playerAnswer.innerHTML = "";
		computerTurn();
		return false;
	}
}

function matchCheck() {
	compTurn = true;
	let playerAnswerContent = playerAnswer.textContent;
	if (playerAnswerContent === currentLetter.textContent) {
		message.innerHTML = "Correct!";
		correctSound.play();
		score++;
		scoreDisplay.innerHTML = score;
		setTimeout(() => {
			playerAnswer.innerHTML = "";
			computerTurn();
		}, 500);
		return true;
	} else {
		message.innerHTML = "Wrong!";
		speechSynthesis.cancel();
		wrongSound.play();
		scoreDisplay.innerHTML = score;
				setTimeout(() => {
			playerAnswer.innerHTML = "";
			computerTurn();
		}, 500);
		return false;
	}
}

//event that listens for when the start button is clicked and toggles the displayed divs
//i.e going from a play button to the game play area.
//starts the first game + timer



// document.addEventListener("DOMContentLoaded", function () {
// 	let play = document.getElementById("startgametwo");
// 		play.addEventListener("click", function () {                  
//             play.innerHTML = '<a href="game.html" id="reset-game" type="button" aria-label="reset game"><i class="fa-solid fa-arrow-rotate-right icon"></i></a>';
//             startGame();
//             startTimer();
        
//         })
//     });



document.addEventListener("DOMContentLoaded", function () {
		let play = document.getElementById("start-game-button");
			play.addEventListener("click", function () {                  
				var startContainer = document.getElementById("start-box-container");
				var reloadContainer = document.getElementById("reload-box-container");
		
				startContainer.classList.add('hide');
				reloadContainer.classList.remove('hide');	
				
				startGame();
        		startTimer();
	        })
	    });

	
	//pausing the timer and changing the symbol written in the DOM to restart the timer again.
	let pauseBtn = document.getElementById("pause-btn");
	let removeIcon = document.getElementById("pause-remove");

// function focusAtEnd() {
// 	let reFocus = document.querySelector(".focus-point");
// 			reFocus.focus();	
// 			reFocus.setSelectionRange(reFocus.value.length, reFocus.value.length);	
// ;}

function focusAtEnd() {
    let reFocus = document.querySelector(".focus-point");
    //cursor back inside the player answer box and moved to the end of the text already entered
	reFocus.focus();	
	let range = document.createRange(); 
	range.selectNodeContents(reFocus);
    range.collapse(false);
	let selection = window.getSelection(); 
    selection.removeAllRanges();
    selection.addRange(range);
}

	pauseBtn.addEventListener("click", function () {
		if(gameRunning){
		if (removeIcon.classList.contains("fa-pause")) {
			removeIcon.classList.remove("fa-pause");
			removeIcon.classList.add("fa-play");
			paused = true;
		} else {
			removeIcon.classList.remove("fa-play");
			removeIcon.classList.add("fa-pause");
			paused = false;		
			focusAtEnd();
		}
	}
});



function addition(a, b) {
	return a + b;
}

// module.exports = {
// 	addition,
// 	findWords,
// 	levelTwo,
// 	handleInput,
// 	playerTurn,
// 	matchCheck,
// 	startGame,
// 	startTimer,
// 	computerTurn,
// 	};