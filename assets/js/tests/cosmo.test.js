
/**
 * @jest-environment jsdom
 */

const{wordsTwo} = require("../cosmo");

beforeAll(() => {
let fs = require("fs");
let fileContents = fs.readFileSync("game.html","utf-8")
document.open();
document.write(fileContents);
document.close();
});

describe("level 2 game play",() => {
    test("levelTwo wordsTwo variable exists", () =>{
        expect("wordsTwo").toBeDefined();
    });
    //test("array loaded using wordnik API")
});