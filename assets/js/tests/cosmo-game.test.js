
/**
 * @jest-environment jsdom
 */
const {addition, findWords, levelTwo} = require("../cosmo-game");


//load html page and attach it to the mock DOM
beforeAll(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("game.html", "utf-8");
  document.open();
  document.write(fileContents);
  document.close();

});


// Add a delay to wait for the DOM to load so varibles are decalred
beforeAll((done) => {
  setTimeout(() => {
    done();
  }, 2000);
});

//simple addition test to ensure test suit working. can remove at end 
describe("addition test",() => {
  test("addition function", () =>{
      expect(addition(20,22)).toBe(42);
  });
});


//see if delay allows for elements of page to load correctly 
describe("check content of DOM element fills e.g scorebox",() => {
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

describe('levelTwo function works to use the random index and fill my quiz box with two letters', () => {
  beforeEach(() => {
    // Mock the fetch function as jest shouldn't use the API. jest.fn creates a jest mock function//for readme modified from https://salesforce.stackexchange.com/questions/402849/how-to-use-fetch-in-jest-javascript-test
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([{ word: 'ab' }, { word: 'cd' }]),
    }));
  });
  test('one random 2 letter string is stored in the current letter box', async () => {
    await levelTwo(twoLetterWords);  
    expect(['ab', 'cd']).toContain(currentLetter.innerHTML);    
  });
});