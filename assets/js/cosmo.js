document.addEventListener('DOMContentLoaded', ()=>{

//const displayCurrentLevel = document.querySelector('#level-indicator')    
//let currentLevel = 1

})


// random word generator = wordnik API
//my API key = 



//level 1 play



const array1 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function getNextLetter(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const letter = arr[randomIndex];
    return letter;
}

const result = getNextLetter(array1);
console.log(result);
