

let indexPlayBtn = document.getElementById("index-play-btn");
let restartColour = document.getElementById("index-play-outer");

restartColour.style.backgroundImage = "linear-gradient(to right top, #e597f6,  #d27ff0, #bd67eb,  #a64fe7, #8a38e3)";

		
//colour change of button containers only changes when the button is hovered over and returns to normal when the mouse is removed. 
indexPlayBtn.addEventListener('mouseover', function () {
    document.getElementById("index-play-outer").style.backgroundImage = "radial-gradient(	circle,	#6ee4ef,	#6ee4ef,	#6ee4ef,#6ee4ef,#6ee4ef	)";
});
indexPlayBtn.addEventListener('mouseout', function () {
    document.getElementById("index-play-outer").style.backgroundImage  = "linear-gradient(to right top, #e597f6,  #d27ff0, #bd67eb,  #a64fe7, #8a38e3)";
});
