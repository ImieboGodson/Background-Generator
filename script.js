let colorSelector1 = document.getElementById("color1");
let colorSelector2 = document.getElementById("color2");
let result = document.getElementById("result");
let body = document.querySelector("body");

function colorSelector (){
	body.style.background = "linear-gradient( to right, " + colorSelector1.value + ", " + colorSelector2.value + ")";
	console.log("linear-gradient( to right, " + colorSelector1.value + ", " + colorSelector2.value + ")");

	result.textContent = body.style.background + ";";
}


colorSelector1.addEventListener("input", colorSelector)

colorSelector2.addEventListener("input", colorSelector)