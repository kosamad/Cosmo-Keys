
/**
 * @jest-environment jsdom
 */

const { addition, findWords, levelTwo, handleInput, playerTurn, matchCheck, startGame,
  startTimer, computerTurn } = require("../cosmo-game");




//load html page and attach it to the mock DOM
beforeAll(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("game.html", "utf-8");
  document.open();
  document.write(fileContents);
  document.close();

});





//Add a delay to wait for the DOM to load so varibles are decalred
// beforeAll(async () => {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
// });




//simple addition test to ensure test suit working. can remove at end 
describe("addition test", () => {
  test("addition function", () => {
    expect(addition(20, 22)).toBe(42);
  });
});


//see if delay allows for elements of page to load correctly 
describe("check content of DOM element fills e.g scorebox", () => {
  test('test after DOM is loaded', () => {
    const element = document.getElementById('js-score');
    expect(element).not.toBeNull();
  });
});

//testing level 2 play

describe('findWords function', () => {
  beforeEach(() => {
    // Mock the fetch function as jest shouldn't use the API. jest.fn creates a jest mock function//for readme modified from https://salesforce.stackexchange.com/questions/402849/how-to-use-fetch-in-jest-javascript-test
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([{ word: 'ab' }, { word: 'cd' }]),
    }));
  });
  test('fetches two-letter words from the API', async () => {
    twoLetterWords = await findWords();
    expect(twoLetterWords).toEqual(['ab', 'cd']);
  });
});


describe("comuter turn works correctly", () => {
  beforeAll(() => {
    compTurn = true;
    levelId = "level-2";
    console.log(levelId);
  });
  test("if level id equals level two should initiate level two function", () => {
    const levelTwoMock = jest.fn();
    global.levelTwo = levelTwoMock;
    computerTurn();
    console.log(computerTurn);
    expect(levelTwoMock).toHaveBeenCalled();
  });
});


describe("levelTwo works correctly", () => {
  beforeEach(() => {
    twoLetterWords = ['up', 'on', 'in', 'to',] ; 
    currentLetter.innerText = ''; 
    });
  test("level two function", () => {
    levelTwo();
    const innerText = currentLetter.innerText.trim();
    expect(twoLetterWords).toContain(innerText);  
  });
});







// describe("Level Two function", () => {
//   document.body.innerHTML = '<div id="player-answer" contenteditable="true"></div>';
//   const playerAnswer = document.getElementById('player-answer');
//   const mockEvent = { type: 'input' };
//   // Spy on the matchCheck function
//   const spyMatchCheck = jest.spyOn(window, 'matchCheck');
//   beforeEach(() => {
//     // Reset variables or any setup needed
//     lettersTyped = 0;
//     compTurn = false;
//   });



//   test("Does the computer wait for two letters to be types before calling matchCheck in levelTwo play", () => {
//     levelId = 'level-2';
//     playerAnswer.addEventListener('input', handleInput);
//      // Trigger the input event twice
//      playerAnswer.dispatchEvent(new Event('input',mockEvent));
//      playerAnswer.dispatchEvent(new Event('input',mockEvent));
//       // Check if matchCheck is called after two letters are typed
//       expect(spyMatchCheck).toHaveBeenCalledTimes(1);
//   });
//   afterEach(() => {
//     spyMatchCheck.mockRestore();
// });
// });




// describe('levelTwo function works to use the random index and fill my quiz box with two letters', () => {
//   beforeEach(() => {
//     // Mock the fetch function as jest shouldn't use the API. jest.fn creates a jest mock function//for readme modified from https://salesforce.stackexchange.com/questions/402849/how-to-use-fetch-in-jest-javascript-test
//     global.fetch = jest.fn(() => Promise.resolve({
//       json: () => Promise.resolve([{ word: 'ab' }, { word: 'cd' }]),
//     }));
//   });
//   test('one random 2 letter string is stored in the current letter box', async () => {
//     await levelTwo();  
//     const currentLetterTest = currentLetter.innerHTML.trim();
//     expect(['ab', 'cd']).toContain(currentLetterTest);    
//   });
// }); 

