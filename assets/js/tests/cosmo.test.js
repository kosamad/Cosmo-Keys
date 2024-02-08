
/**
 * @jest-environment jsdom
 */

const addition = require("../cosmo");

beforeAll(() => {
let fs = require("fs");
let fileContents = fs.readFileSync("game.html","utf-8")
document.open();
document.write(fileContents);
document.close();
});

describe("addition test",() => {
test("addition function", () =>{
    expect(addition(20,22)).toBe(42);
});
});

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