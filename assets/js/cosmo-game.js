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
	levelIndicator.style.color = "#27e862";
} else if (levelId === "level-2") {
	levelIndicator.innerHTML = "Level 2";
	levelIndicator.style.color = "#eab02f";
} else if (levelId === "level-3") {
	levelIndicator.innerHTML = "Level 3";
	levelIndicator.style.color = "#e72b2b";
}



if ("speechSynthesis" in window) {
	//Web Speech API is supported
	//function which speaks the score at the end of the game
	function speakScore(score) {
		if (scoreDisplay.innerText === 1) {
			let scoreVoice = new SpeechSynthesisUtterance(
				`congratulations, you got ${scoreDisplay.innerText} point.`
			);
			window.speechSynthesis.speak(scoreVoice);
		} else if (scoreDisplay.innerText === "0") {
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
	}
}

//function which speaks the letter(level-1 play) selected
function speakLetter(letter) {
	if ("speechSynthesis" in window) {
		// Web Speech API is supported
		if (levelId === "level-3") {
			let levelThreeWord = new SpeechSynthesisUtterance(currentLetter.innerText);
			levelThreeWord.rate = 1;
			window.speechSynthesis.speak(levelThreeWord);
		} else {
			for (const char of letter) {
				let charCheck = char;
				if (char.toLowerCase() === "a") {
					charCheck = "ay";
				}
				const charVoice = new SpeechSynthesisUtterance(charCheck);
				charVoice.rate = 1.5; //make it read faster than the default 1 (too slow)
				window.speechSynthesis.speak(charVoice);
			}
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
					"radial-gradient(circle, #e97070, #ef5d5a, #f24943, #f33028, #f10000)";
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
let threeLetterWords;
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
let correctSound = new Audio(
	"assets/sounds/335908__littlerainyseasons__correct.mp3"
);
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
		let response, data;
		if (levelId === "level-2") {
			response = await fetch("https://api.datamuse.com/words?sp=[a-z][a-z]&max=200");
		} else if (levelId === "level-3") {
			response = await fetch("https://api.datamuse.com/words?sp=^[a-z]{3}$&max=200");
		}
		if (response) {
			data = await response.json();
			if (levelId === "level-2") {
				return data.map((word) => word.word);
			} else if (levelId === "level-3") {
				let threeLetterWords = data.filter(word => word.word.length === 3);
				return threeLetterWords.map(word => word.word);
			}
		}
	} catch (error) {
		console.error("An error occurred during the word retrieval", error);
		throw error;
	}
}



// async function findWords() {
//     try {
//         if (levelId === "level-2") {
//             let response = await fetch(
//                 "https://api.datamuse.com/words?sp=[a-z][a-z]&max=200"
//             );
//             let data = await response.json();
//             return data.map((word) => word.word);
//         } else if (levelId === "level-3") {
//             let response = await fetch(
//                 "https://api.datamuse.com/words?sp=^[a-z]{3}$&max=200"
//             );
//             let data = await response.json();
//             let threeLetterWords = data.filter(word => word.word.length === 3);
//             if (threeLetterWords.length > 0) {
//                 let threeLetterWordsArray = threeLetterWords.map(word => word.word);
//                 return threeLetterWordsArray;
//             }
//         }
//     } catch (error) {
//         console.error("An error occurred during the word retrieval", error);
//         throw error;
//     }
// }

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
		console.error("An error occurred in levelTwo", error);
		// Handle errors specific to levelTwo if needed
	}
}

async function levelThree() {
	try {
		// Check if twoLetterWords is already populated
		if (!threeLetterWords) {
			// Wait for findWords to complete and get the array
			threeLetterWords = await findWords();
			console.log(threeLetterWords);
		}
		let randomIndexThree = Math.floor(Math.random() * threeLetterWords.length);
		currentLetter.innerHTML = threeLetterWords[randomIndexThree];
		speakLetter(currentLetter.innerText);
		playerTurn();
	} catch (error) {
		console.error("An error occurred in levelTwo", error);
		// Handle errors specific to levelTwo if needed
	}
}

function computerTurn() {
	compTurn = true;
	message.innerHTML = "Good Luck!";
	//load correct level play
	if (levelId === "level-1") {
		levelOne(letters);
	} else if (levelId === "level-2") {
		levelTwo();
	} else if (levelId === "level-3") {
		levelThree();
	}
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
	} else if (levelId === "level-2" && lettersTyped === 1) {
		preMatchCheckTwo();
	} else if (levelId === "level-2" && lettersTyped === 2) {
		matchCheck();
	} else if (levelId === "level-3" && (lettersTyped === 1 || lettersTyped === 2)) {
		preMatchCheckThree();
	} else if (levelId === "level-3" && lettersTyped === 3) {
		matchCheck();
	}
}

function preMatchCheckTwo() {
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

function preMatchCheckThree() {
	let playerAnswerContent = playerAnswer.textContent.trim();
	let currentLetterContent = currentLetter.textContent.trim();
	for (let i = 0; i < playerAnswerContent.length; i++) {
		if (playerAnswerContent.charAt(i) !== currentLetterContent.charAt(i)) {
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
	// If all characters match, continue with the correct case
	compTurn = false;
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


let play;
let pauseBtn;
let removeIcon;

document.addEventListener("DOMContentLoaded", function () {
	play = document.getElementById("start-game-button");

	//colour change of start button container only changes when the button is hovered over and returns to normal when the mouse is removed. 
	play.addEventListener('mouseover', function () {
		document.getElementById('start-box-container').style.backgroundImage = "radial-gradient(	circle,	#6ee4ef,	#6ee4ef,	#6ee4ef,#6ee4ef,#6ee4ef	)";
	});

	play.addEventListener('mouseout', function () {
		document.getElementById('start-box-container').style.backgroundImage = "linear-gradient(	to right top,#ea505a,#f2624a,#f57639,#f28b27,#eba012)";
	});

	play.addEventListener("click", function () {
		var startContainer = document.getElementById("start-box-container");
		var reloadContainer = document.getElementById("reload-box-container");

		startContainer.classList.add("hide");
		reloadContainer.classList.remove("hide");


		pauseBtn = document.getElementById("pause-btn");
		removeIcon = document.getElementById("pause-remove");

		pauseBtn.addEventListener("click", togglePause);

		startGame();
		startTimer();
	});
});


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

document.getElementById("pause-btn").addEventListener("click", togglePause);
function togglePause() {
	console.log("i've been clicked")
	if (gameRunning) {
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
}


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
