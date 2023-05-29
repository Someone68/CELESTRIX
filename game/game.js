let buttonElement = document.getElementById("btn");
let stardustElement = document.getElementById("stardust");
let stardust = 0;
window.onload = () => {
	buttonElement.addEventListener("click", click);
	if (localStorage.stardust) {
		updateDOM();
	} else {
		localStorage.stardust = 0;
		updateDOM();
	}
	if (localStorage.clickPower) {
		updateDOM;
	} else {
		localStorage.clickPower = 1;
	}
};

function click() {
	localStorage.stardust =
		Number(localStorage.stardust) + Number(localStorage.clickPower);
	updateDOM();
}
function updateDOM() {
	stardustElement.innerHTML = "◈&#8201;" + localStorage.stardust;
}
