let buttonElement = document.getElementById("btn");
let stardustElement = document.getElementById("stardust");
let stardust = 0;
window.onload = () => {
	buttonElement.addEventListener("click", click);
	if (localStorage.stardust) {
		Snackbar.show({ actionText: "THANKS", text: "Welcome back to CELESTRIX!" });
		updateDOM();
	} else {
		Snackbar.show({ actionText: "THANKS", text: "Welcome to CELESTRIX!" });
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

function reset() {
	swal({
		title: "Warning!",
		text:
			"Are you sure you want to reset the game? All your progress will be lost!",
		icon: "info",
		buttons: ["Cancel", "Reset"],
		dangerMode: true,
	}).then((willDelete) => {
		if (willDelete) {
			swal({
				title: "LAST WARNING!",
				text: "FINAL WARNING: You will lose all your progress!",
				icon: "warning",
				buttons: ["EXIT", "RESET"],
				dangerMode: true,
			}).then((willDelete2) => {
				if (willDelete2) {
					localStorage.clear();
					swal("Game Reset", "", {
						icon: "error",
						button: "Refresh",
					}).then(() => {
						location.reload();
					});
				} else {
					swal("That was close!");
				}
			});
		}
	});
}
