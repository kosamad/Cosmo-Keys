//setting the level indicator for the user (top of the screen)
//takes the stored selected level key (from the level page) and uses it to set the corresponsing level id and colour
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

//  game play variables //
let score = 0;
let gameRunning;
let currentLetter = document.getElementById("quiz-letter");
let playerAnswer = document.getElementById("player-answer");
playerAnswer.contentEditable = "false";
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("js-score");
let playerAnswerContent = "";
let twoLetterWords;
let threeLetterWords;
let lettersTyped = 0;
let play;
let pauseBtn;
let removeIcon;
let compTurn = true;

//array for level 1 play as API not used
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



//timer variables
let startTime = 60;
let remainingTime = startTime;
let countDown;
const timerT = document.querySelector("#timer");
const timerColor = document.querySelector(".time-container");
let paused = false;

//sound variables
let correctSound = new Audio(
	"assets/sounds/335908__littlerainyseasons__correct.mp3"
);
correctSound.volume = 0.5;
let wrongSound = new Audio('assets/sounds/554053__gronkjaer__wronganswer.mp3');
wrongSound.volume = 0.5;
let endGameSound = new Audio("assets/sounds/527650__fupicat__winsquare.wav");
endGameSound.volume = 0.5;

if (compTurn === false) {
	playerAnswer.contenteditable = "true"; //ensures the user can type on their turn
}

//speech/sound functions
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

//function which speaks the letter (level-1/2 play) or word (level-3 play)
function speakLetter(letter) {
	if ("speechSynthesis" in window) {
		// Web Speech API is supported
		if (levelId === "level-3") {
			let levelThreeWord = new SpeechSynthesisUtterance(currentLetter.innerText);
			levelThreeWord.rate = 1;
			window.speechSynthesis.speak(levelThreeWord);
		} else {
			for (const char of letter) { //separates the characters which is important for level-2 play
				let charCheck = char;
				if (char.toLowerCase() === "a") {
					charCheck = "eigh"; //required as "a" sound is not pronouced like the alphabetical a pronounced "ay"
				}
				const charVoice = new SpeechSynthesisUtterance(charCheck);
				charVoice.rate = 1;
				window.speechSynthesis.speak(charVoice);
			}
		}
	} else {
		// Web Speech API is not supported
		console.log("Web Speech API is not supported in this browser.");
	}
}

//timer function
function startTimer() {
	timerColor.style.backgroundImage =
		"radial-gradient(circle, #d0fdcc, #b1fdaa, #91fb85, #6bf95c, #30f61e)";
	timerT.innerHTML = `${remainingTime}`; //time display set to remaining time
	countDown = setInterval(() => {
		if (!paused) { //function only runs if the game is  not paused
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
			//when remaining time is 0 the game is over. The timer stops, the end game sound plays and the score is declared.
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

//Loading correct words depending on which level is selected 
//level 1 play - load word from written array //
function levelOne(letters) {
	let randomIndex = Math.floor(Math.random() * letters.length);
	currentLetter.innerText = letters[randomIndex]; //chooses a random letter from the array
	setTimeout(() => {
		speakLetter(currentLetter.innerText);
	}, 100); //delay to speech API req to function correctly (especially on apple devices)
	playerTurn();
}

//level-2 play- uses API
// youtube video by ByteGrad to help set up my 2 letter array using a fetch from the datamuse API
// modified to map data results into an array amd to have the twoLetterWords variable be avaliable outide of the findwords function
//async function used as the data needs to be collected from the API before it can be used. 
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
				threeLetterWords = data.filter(word => word.word.length === 3);//API sometimes gives four letter words so this ensures three letter words only make it into the game
				return threeLetterWords.map(word => word.word);
			}
		}
	} catch (error) {
		console.error("An error occurred during the word retrieval", error);
		throw error;
	}
}

//async function that waits for the levelTwo letters to be populated by the API above.
async function levelTwo() {
	try {
		// Check if twoLetterWords is already populated if it isn't use API to fetch 2 letter array
		if (!twoLetterWords) {
			// Wait for findWords to complete and get the array
			twoLetterWords = await findWords();
			console.log(twoLetterWords);
		}
		let randomIndexTwo = Math.floor(Math.random() * twoLetterWords.length);
		currentLetter.innerText  = twoLetterWords[randomIndexTwo]; //chooses a random word from the array
		setTimeout(() => {
			speakLetter(currentLetter.innerText);
		}, 100); //delay to speech API req to function correctly (especially on apple devices)
		playerTurn();
	} catch (error) {
		console.error("An error occurred in levelTwo", error);
		// Handle errors specific to levelTwo if needed
	}
}

//level-3 play retrives 3 letter words
async function levelThree() {
	try {
		// Check if threeLetterWords is already populated
		if (!threeLetterWords) {
			// Wait for findWords to complete and get the array
			threeLetterWords = await findWords();
			console.log(threeLetterWords);
		}
		let randomIndexThree = Math.floor(Math.random() * threeLetterWords.length);
		currentLetter.innerText = threeLetterWords[randomIndexThree];
		setTimeout(() => {
			speakLetter(currentLetter.innerText);
		}, 100);	//delay to speech API req to function correctly (especially on apple devices)	 
		playerTurn();
	} catch (error) {
		console.error("An error occurred in levelThree", error);
		// Handle errors specific to levelTwo if needed
	}
}

//general game play
//computer turn
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

//start game function which initialises the game and begins the first computer turn
function startGame() {
	gameRunning = true;
	playerAnswer.contentEditable = "true";//allows the user to type	and brings up the keypad on mobile devices
	document.getElementById("player-answer").focus(); //puts the cursor in the player-answer box
	computerTurn();
}

//player turn function
function playerTurn() {
	compTurn = false;
	playerAnswer.contentEditable = "true"
	playerAnswer.focus();//brings back the cursor to the box
	lettersTyped = 0;// Reset the count of letters typed for each new player turn
	playerAnswer.addEventListener("input", handleInput); //listens for player typing (the input) and executes the handleinput function
}

//function to check how many letters have been typed and what match function follows
function handleInput(event) {
	// Increment the count of letters typed each time there is a type in the box
	lettersTyped++;
	// Function chosen depending on level and how many letters need to be typed
	if (levelId === "level-1") {
		matchCheck();
	} else if (levelId === "level-2" && lettersTyped === 1) {
		preMatchCheck();
	} else if (levelId === "level-2" && lettersTyped === 2) {
		matchCheck();
	} else if (levelId === "level-3" && (lettersTyped === 1 || lettersTyped === 2)) {
		preMatchCheck();
	} else if (levelId === "level-3" && lettersTyped === 3) {
		matchCheck();
	}
}

//preMatchCheck's for level 2 and 3, check each letter typed by the player against the computer (before the final letter). 
//moves out of player turn if an incorrect letter is typed, plays the wrong sound and moves back to the computerTurn
function preMatchCheck() {
	let playerAnswerContent = playerAnswer.textContent.trim().toLowerCase();//makes play case insensitive
	let currentLetterContent = currentLetter.textContent.trim();
	for (let i = 0; i < playerAnswerContent.length; i++) {
		if (playerAnswerContent.charAt(i) !== currentLetterContent.charAt(i)) {
			compTurn = true; //poss code out
			playerAnswer.removeEventListener("input", handleInput);//stops the computer listening if the user is mid typing next letter (prevents next letter being initiated)
			message.innerHTML = "Wrong!";
			speechSynthesis.cancel();
			wrongSound.play();
			scoreDisplay.innerHTML = score;
			setTimeout(() => {
				playerAnswer.innerHTML = "";
				computerTurn();
			}, 1000);
			return false;
		}
	}
	// If all characters match, continue with the correct case
	compTurn = false;
}

//matchCheck checks the completed player answer against the computer and issues subsequent function based on a correct or incorrect answer 
function matchCheck() {
	compTurn = true;
	let playerAnswerContent = playerAnswer.textContent.trim().toLowerCase();
	if (playerAnswerContent === currentLetter.textContent) {
		playerAnswer.removeEventListener("input", handleInput);
		message.innerHTML = "Correct!";
		speechSynthesis.cancel();
		correctSound.play();
		score++;
		scoreDisplay.innerHTML = score;
		setTimeout(() => {
			playerAnswer.innerHTML = "";
			computerTurn();
		}, 1000);
		return true;
	} else {
		message.innerHTML = "Wrong!";
		playerAnswer.removeEventListener("input", handleInput);
		speechSynthesis.cancel();
		wrongSound.play();
		scoreDisplay.innerHTML = score;
		setTimeout(() => {
			playerAnswer.innerHTML = "";
			computerTurn();
		}, 1000);
		return false;
	}
}

//listener which waits for the DOM to load and then waits for the user to click the startgame button
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

		//starts the game while also changing the visible box container to a pause/play button
		var startContainer = document.getElementById("start-box-container");
		var reloadContainer = document.getElementById("reload-box-container");
		startContainer.classList.add("hide");
		reloadContainer.classList.remove("hide");
		pauseBtn = document.getElementById("pause-btn");
		removeIcon = document.getElementById("pause-remove");
		pauseBtn.addEventListener("click", togglePause);

		//colour change of pause/play button container only changes when the button is hovered over and returns to normal when the mouse is removed. 
		pauseBtn.addEventListener('mouseover', function () {
			document.getElementById("reload-box-container").style.backgroundImage = "radial-gradient(	circle,	#6ee4ef,	#6ee4ef,	#6ee4ef,#6ee4ef,#6ee4ef	)";
		});
		pauseBtn.addEventListener('mouseout', function () {
			document.getElementById("reload-box-container").style.backgroundImage = "linear-gradient(	to right top,#ea505a,#f2624a,#f57639,#f28b27,#eba012)";
		});

		findWords();//find the words for level 2 and 3 play	

		//game and timer functions are called to start the game
		startGame();
		startTimer();
	});
});

//pausing the game functions (pause timer and computer is controlled by the timer function)
//ensure cursor moves to the end of the prev typed letter (and not to the start)
function focusAtEnd() {
	playerAnswer.contentEditable = "true"
	let reFocus = document.querySelector(".focus-point");
	reFocus.focus();
	let range = document.createRange();
	range.selectNodeContents(reFocus);
	range.collapse(false);
	let selection = window.getSelection();
	selection.removeAllRanges();
	selection.addRange(range);
	speakLetter(currentLetter.innerText);//reminds user of what they are supposed to be typing. 
}

//adding the event listener again after the initial click has been done to start the game
document.getElementById("pause-btn").addEventListener("click", togglePause);

//changes pause/play icon depending on which is showing if the game is running 
function togglePause() {
	if (gameRunning) {
		if (removeIcon.classList.contains("fa-pause")) {
			removeIcon.classList.remove("fa-pause");
			removeIcon.classList.add("fa-play");
			paused = true;//stops the timer
			speechSynthesis.cancel();//stop computer from speaking
			playerAnswer.contentEditable = "false";
		} else {
			removeIcon.classList.remove("fa-play");
			removeIcon.classList.add("fa-pause");
			paused = false;
			focusAtEnd();
		}
	}
}

