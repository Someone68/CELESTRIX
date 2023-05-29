let i = 0;
let txt =
	"A CLICKER GAME\nCLICK THE BUTTON TO GAIN ◈\nBUY UPGRADES WITH ◈"; /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
	if (i < txt.length) {
		if (i <= 0) {
			document.getElementById("desc").innerHTML = "";
		}
		if (txt.charAt(i) === "\n") {
			document.getElementById("desc").appendChild(document.createElement("br"));
		} else {
			document.getElementById("desc").innerHTML += txt.charAt(i);
		}
		i++;
		setTimeout(typeWriter, speed);
	}
}

document.getElementById("desc").innerHTML = ""; // clear existing text
typeWriter();
