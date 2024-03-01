//colour re-set when the page is accessed using a back button. 
let levelOneBtnOut = document.getElementById("level-one-outer").style.backgroundImage  = "radial-gradient(circle, #14ff5c, #10f154, #0be34c, #06d645, #00c83d)";
let levelTwoBtnOut  = document.getElementById("level-two-outer").style.backgroundImage  = "radial-gradient(circle, #ffb000, #f4a901, #eaa203, #df9b04, #d59405)";
let levelThreeBtnOut  =  document.getElementById("level-three-outer").style.backgroundImage  = "radial-gradient(circle, #e72b2b, #de2423, #d61c1b, #cd1412, #c40808)";

// setting the select level key on the level.html page and storing it locally.
function setLevelId(level) {
	localStorage.setItem("selectedLevel", level);
}

levelOneBtn = document.getElementById("level-1");
levelTwoBtn  = document.getElementById("level-2");
levelThreeBtn  = document.getElementById("level-3");
		

//colour change of button containers only changes when the button is hovered over and returns to normal when the mouse is removed. 
levelOneBtn.addEventListener('mouseover', function () {
	console.log("detect")
    document.getElementById("level-one-outer").style.backgroundImage = "radial-gradient(	circle,	#6ee4ef,	#6ee4ef,	#6ee4ef,#6ee4ef,#6ee4ef	)";
});
levelOneBtn.addEventListener('mouseout', function () {
    document.getElementById("level-one-outer").style.backgroundImage  = "radial-gradient(circle, #14ff5c, #10f154, #0be34c, #06d645, #00c83d)";
});

levelTwoBtn.addEventListener('mouseover', function () {
	console.log("detect")
    document.getElementById("level-two-outer").style.backgroundImage = "radial-gradient(	circle,	#6ee4ef,	#6ee4ef,	#6ee4ef,#6ee4ef,#6ee4ef	)";
});
levelTwoBtn.addEventListener('mouseout', function () {
    document.getElementById("level-two-outer").style.backgroundImage  = "radial-gradient(circle, #ffb000, #f4a901, #eaa203, #df9b04, #d59405)";
});

levelThreeBtn.addEventListener('mouseover', function () {
	console.log("detect")
    document.getElementById("level-three-outer").style.backgroundImage = "radial-gradient(	circle,	#6ee4ef,	#6ee4ef,	#6ee4ef,#6ee4ef,#6ee4ef	)";
});
levelThreeBtn.addEventListener('mouseout', function () {
    document.getElementById("level-three-outer").style.backgroundImage  = "radial-gradient(circle, #e72b2b, #de2423, #d61c1b, #cd1412, #c40808)";
});




