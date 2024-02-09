
/**
 * @jest-environment jsdom
 */

const { addition, matchCheck} = require("../cosmo-game");

//load html page and attach it to the mock DOM
beforeAll(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("game.html", "utf-8");
  document.open();
  document.write(fileContents);
  document.close();

});



describe("addition test",() => {
  test("addition function", () =>{
      expect(addition(20,22)).toBe(42);
  });
});

describe("match check isolated test",() => {
  test("compTurn = true", () => {
    matchCheck();
    expect(compTurn).toBe(true);
  });
});

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