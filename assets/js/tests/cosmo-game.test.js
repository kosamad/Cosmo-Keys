
/**
 * @jest-environment jsdom
 */

const {} = require("../cosmo-game.js");


//load html page and attach it to the mock DOM
beforeAll(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("game.html", "utf-8");
  document.open();
  document.write(fileContents);
  document.close();

});


//Add a delay to wait for the DOM to load so varibles are decalred
beforeAll(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
});


//see if delay allows for elements of page to load correctly 
describe("check content of DOM element fills e.g scorebox", () => {
  test('test after DOM is loaded', () => {
    const element = document.getElementById('js-score');
    expect(element).not.toBeNull();
  });
});


//see if delay allows for elements of page to load correctly 
describe("check content of DOM element fills e.g scorebox", () => {
  test('score box is 0', () => {
    const element = document.getElementById('js-score');
    expect(element).not.toBeNull();
  });
  test('timer is 60', () => {
    const elementTwo = document.getElementById('timer');
    const timerValue = parseInt(elementTwo.textContent, 10); // Convert content to a number
    expect(timerValue).toEqual(60);
  });
});
