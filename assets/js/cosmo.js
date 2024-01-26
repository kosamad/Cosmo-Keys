document.addEventListener('DOMContentLoaded', ()=>{

//const displayCurrentLevel = document.querySelector('#level-indicator')    
//let currentLevel = 1

})


// random word generator = wordnik API
//my API key = 



//click event listner to start the game

//level 1 play

//FUNC = new function

// function that slects which level function to impletment using if/if else.


document.querySelector("#start-game").addEventListener('click', startGame);

function startGame (){

const array1 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function getNextLetter(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const letter = arr[randomIndex];
    return letter;
}

const result = getNextLetter(array1);
document.getElementById("quiz-letter").innerHTML = result

console.log(result);

}


