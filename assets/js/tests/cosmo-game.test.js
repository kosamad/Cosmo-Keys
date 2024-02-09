
/**
 * @jest-environment jsdom
 */
const {addition, findWords,} = require("../cosmo-game");


//load html page and attach it to the mock DOM
beforeAll(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("game.html", "utf-8");
  document.open();
  document.write(fileContents);
  document.close();

});

beforeAll((done) => {
  // Add a delay to wait for the DOM to load
  setTimeout(() => {
    done();
  }, 1000); // Adjust the delay time as needed
});

describe("addition test",() => {
  test("addition function", () =>{
      expect(addition(20,22)).toBe(42);
  });
});

test('test after DOM is loaded', () => {
  // Your test logic here
  // For example, check for the presence of an element
  const element = document.getElementById('js-score');
  expect(element).not.toBeNull();
});



describe('findWords function', () => {

  beforeEach(() => {
    // Mock the fetch function
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([{ word: 'ab' }, { word: 'cd' }]),
    }));
  });

  test('fetches two-letter words from the API', async () => {
    twoLetterWords = await findWords();
    // await new Promise(resolve => setTimeout(resolve, 0)); // Allow microtasks to complete
    expect(twoLetterWords).toEqual(['ab', 'cd']);
    // expect(global.fetch).toHaveBeenCalledWith('https://api.datamuse.com/words?sp=[a-z][a-z]&max=200');
  });



  // test('fetches two-letter words from the API', async () => {
  //   // Mock the fetch function as jest shouldn't use the API. jest.fn creates a jest mock function//for readme modified from https://salesforce.stackexchange.com/questions/402849/how-to-use-fetch-in-jest-javascript-test
  //   global.fetch = jest.fn(() => Promise.resolve({
  //     json: () => Promise.resolve([{ word: 'ab' }, { word: 'cd' }]),
  //   }));
  //   await findWords();
  //   expect(twoLetterWords).toEqual(['ab', 'cd']);
  //   expect(global.fetch).toHaveBeenCalledWith('https://api.datamuse.com/words?sp=[a-z][a-z]&max=200');
  //   });
});




// describe("findWords function", () => {
//    test("should populate twoLetterWords array with two-letter words" (), {
//        // Call the function that populates the array
//       findWords();
//       // Assert that twoLetterWords is an array
//       expect(Array.isArray(twoLetterWords)).toBe(true);

//       // Assert that every word in the array has a length of 2
//       expect(twoLetterWords.every(word => word.length === 2)).toBe(true);
//   });
// });

//check level 1 play



//describe("level 1 puts 1 letter in the quiz letter box", () => {
  //neeed to simulate click event to bring up quiz-letter box, Fireevent?
  //test('DESCRIPTION_OF_THIS_TEST'), () => {
   // startGame();
    //computerTurn();
    // levelOne(letters);
  //}
  

//})
//test()

//describe("level 2 game play",() => {
//test("levelTwo twoLetterWords variable exists", () =>{
       //expect(twoLetterWords).toBeDefined();
//});
     //test("wordsTwo array filled by datamuse API (2 letter words)", () =>{
       // const twoLetterWords = [];
       // findWords();
    //expect(twoLetterWords.every(word => word.length === 2)).toBe(true);
   // });
    
//});