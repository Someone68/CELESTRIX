let buttonElement = document.getElementById("btn");
let stardustElement = document.getElementById("stardust");
let cp5s;
let music = new Audio("https://dl.dropbox.com/s/r3sm76cwut56ta8/music.mp3");
music.loop = true;
music.volume = 0.7;
let documentClicked = false;

function gebid(id) {
	return document.getElementById(id);
}
window.onload = () => {
	buttonElement.addEventListener("click", click);
	if (localStorage.stardust) {
		Snackbar.show({
			actionText: "THANKS",
			text: "Welcome back to CELESTRIX!",
			duration: 1500,
		});
		updateDOM();
	} else {
		Snackbar.show({
			actionText: "THANKS",
			text: "Welcome to CELESTRIX!",
			duration: 1500,
		});
		localStorage.stardust = 0;
		updateDOM();
	}
	if (localStorage.clickPower) {
		updateDOM();
	} else {
		localStorage.clickPower = 1;
	}
	if (localStorage.totalClicks) {
		updateDOM();
	} else {
		localStorage.totalClicks = 0;
	}
	if (localStorage.cursorUpgradePrice) {
		updateDOM();
	} else {
		localStorage.cursorUpgradePrice = 100;
	}
	if (localStorage.cp5s) {
		cp5s = setInterval(() => {
			add("stardust", "cp5s");
			updateDOM();
		}, 5000);
		updateDOM();
	} else {
		localStorage.cp5s = 0;
	}
	if (localStorage.musicMuted) {
		if (
			localStorage.musicMuted.toLowerCase() == "false" ||
			localStorage.musicMuted == false
		) {
			if (documentClicked) music.play();
			document.getElementById("music").innerHTML =
				"<i class='fa-solid fa-volume-high'></i>";
		} else {
			localStorage.musicMuted = true;
			music.pause();
			document.getElementById("music").innerHTML =
				"<i class='fa-solid fa-volume-xmark'></i>";
		}
	} else {
		localStorage.musicMuted = false;
		music.play();
	}
	if (localStorage.stardustGenerator1Price) {
		updateDOM();
	} else {
		localStorage.stardustGenerator1Price = 110;
	}
};

function add(x, y = 1) {
	if (localStorage[x]) {
		if (localStorage[y]) {
			localStorage[x] = Number(localStorage[x]) + Number(localStorage[y]);
		} else {
			localStorage[x] = Number(localStorage[x]) + y;
		}
	} else {
		return x + y;
	}
}

function uadd(x, y = 1) {
	if (localStorage[x]) {
		if (localStorage[y]) {
			return Number(localStorage[x]) + Number(localStorage[y]);
		} else {
			return Number(localStorage[x]) + y;
		}
	} else {
		return x + y;
	}
}

function subtract(x, y = 1) {
	if (localStorage[x]) {
		if (localStorage[y]) {
			localStorage[x] = Number(localStorage[x]) - Number(localStorage[y]);
		} else {
			localStorage[x] = Number(localStorage[x]) - y;
		}
	} else {
		return x - y;
	}
}

function usubtract(x, y = 1) {
	if (localStorage[x]) {
		if (localStorage[y]) {
			return Number(localStorage[x]) - Number(localStorage[y]);
		} else {
			return Number(localStorage[x]) - y;
		}
	} else {
		return x - y;
	}
}

function multiply(x, y = 1) {
	if (localStorage[x]) {
		if (localStorage[y]) {
			localStorage[x] = Number(localStorage[x]) * Number(localStorage[y]);
		} else {
			localStorage[x] = Number(localStorage[x]) * y;
		}
	} else {
		return x * y;
	}
}

function umultiply(x, y = 1) {
	if (localStorage[x]) {
		if (localStorage[y]) {
			return Number(localStorage[x]) * Number(localStorage[y]);
		} else {
			return Number(localStorage[x]) * y;
		}
	} else {
		return x * y;
	}
}

function divide(x, y = 1) {
	if (localStorage[x]) {
		if (localStorage[y]) {
			localStorage[x] = Number(localStorage[x]) / Number(localStorage[y]);
		} else {
			localStorage[x] = Number(localStorage[x]) / y;
		}
	} else {
		return x / y;
	}
}

function udivide(x, y = 1) {
	if (localStorage[x]) {
		if (localStorage[y]) {
			return Number(localStorage[x]) / Number(localStorage[y]);
		} else {
			return Number(localStorage[x]) / y;
		}
	} else {
		return x / y;
	}
}

function lessThan(x, y) {
	if (localStorage[x]) {
		if (localStorage[y]) {
			return Number(localStorage[x]) < Number(localStorage[y]);
		} else {
			return Number(localStorage[x]) < y;
		}
	} else {
		return x < y;
	}
}

function lessThanOrEqual(x, y) {
	if (localStorage[x]) {
		if (localStorage[y]) {
			return Number(localStorage[x]) <= Number(localStorage[y]);
		} else {
			return Number(localStorage[x]) <= y;
		}
	} else {
		return x <= y;
	}
}

function greaterThan(x, y) {
	if (localStorage[x]) {
		if (localStorage[y]) {
			return Number(localStorage[x]) > Number(localStorage[y]);
		} else {
			return Number(localStorage[x]) > y;
		}
	} else {
		return x > y;
	}
}

function greaterThanOrEqual(x, y) {
	if (localStorage[x]) {
		if (localStorage[y]) {
			return Number(localStorage[x]) >= Number(localStorage[y]);
		} else {
			return Number(localStorage[x]) >= y;
		}
	} else {
		return x >= y;
	}
}

function resetIntervals() {
	clearInterval(cp5s);
	cp5s = setInterval(() => {
		add("stardust", "cp5s");
		updateDOM();
	}, 5000);
}

function click() {
	if (localStorage.musicMuted.toLowerCase === "false") {
		let clickSound = new Audio("click.mp3");
		clickSound.volume = 0.7;
		clickSound.play();
	}
	add("stardust", "clickPower");
	add("totalClicks");
	updateDOM();
}
function updateDOM() {
	stardustElement.innerHTML = "◈&#8201;" + localStorage.stardust;
	gebid("cursorupgrade").innerHTML =
		"Costs " +
		localStorage.cursorUpgradePrice +
		" Stardust | " +
		usubtract("clickPower", 1) +
		" Owned";
	gebid("stardustgenerator1").innerHTML =
		"Costs " +
		localStorage.stardustGenerator1Price +
		" Stardust | " +
		localStorage.cp5s +
		" Owned";
	gebid("stats_stardust").innerHTML = localStorage.stardust;
	gebid("stats_clicks").innerHTML = localStorage.totalClicks;
	gebid("stats_clickpower").innerHTML = localStorage.clickPower;
	//console.log(localStorage.musicMuted);
	if (localStorage.musicMuted) {
		if (
			localStorage.musicMuted.toLowerCase() == "false" ||
			localStorage.musicMuted == false
		) {
			if (documentClicked) music.play();
		} else {
			music.pause();
		}
	}
}

setInterval(updateDOM, 10);

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

document.addEventListener("DOMContentLoaded", function () {
	const menuBtn = document.querySelector(".menu-btn");
	const sidenav = document.querySelector(".sidenav");
	const overlay = document.querySelector(".overlay");

	menuBtn.addEventListener("click", function () {
		if (menuBtn.classList.contains("close")) {
			menuBtn.classList.remove("close");
			document.body.classList.remove("sidenav-open");
		} else {
			menuBtn.classList.add("close");
			document.body.classList.add("sidenav-open");
		}
	});

	overlay.addEventListener("click", function () {
		menuBtn.classList.remove("close");
		document.body.classList.remove("sidenav-open");
	});
});

function random(min, max) {
	return Math.floor(Math.random() * (max + 1)) + min;
}

// buy function
function buy(item) {
	switch (item) {
		case "cursorupgrade":
			if (greaterThanOrEqual("stardust", "cursorUpgradePrice")) {
				subtract("stardust", "cursorUpgradePrice");
				add("clickPower");
				Snackbar.show({
					actionText: "OK",
					text: "Bought Cursor Upgrade",
					duration: 2500,
				});
				//increase the price
				localStorage.cursorUpgradePrice = Math.round(
					uadd(
						"cursorUpgradePrice",
						Number(localStorage.cursorUpgradePrice) * 0.7
					)
				);
				updateDOM();
			} else {
				swal({
					title: "Insufficient Stardust",
					text: `Not enough Stardust! You need ${Math.abs(
						usubtract("stardust", "cursorUpgradePrice")
					)} more!`,
					icon: "error",
				});
			}
			break;
		case "stardustgenerator1":
			if (greaterThanOrEqual("stardust", "stardustGenerator1Price")) {
				subtract("stardust", "stardustGenerator1Price");
				add("cp5s");
				resetIntervals();
				Snackbar.show({
					actionText: "OK",
					text: "Bought Stardust Generator Tier I",
					duration: 2500,
				});
				//increase the price
				localStorage.stardustGenerator1Price = Math.round(
					uadd(
						"stardustGenerator1Price",
						Number(localStorage.stardustGenerator1Price) * 0.7
					)
				);
				updateDOM();
			} else {
				swal({
					title: "Insufficient Stardust",
					text: `Not enough Stardust! You need ${Math.abs(
						usubtract("stardust", "stardustGenerator1Price")
					)} more!`,
					icon: "error",
				});
			}
			break;
	}
}

function toggleMusic() {
	if (
		localStorage.musicMuted.toLowerCase() == "true" ||
		localStorage.musicMuted == true
	) {
		//console.log("turned music on");
		localStorage.musicMuted = false;
		music.play();
		if (documentClicked) music.play();
		document.getElementById("music").innerHTML =
			"<i class='fa-solid fa-volume-high'></i>";
	} else {
		//console.log("turned music off");
		localStorage.musicMuted = true;
		music.pause();
		document.getElementById("music").innerHTML =
			"<i class='fa-solid fa-volume-xmark'></i>";
	}
}

function runMusic() {
	if (
		localStorage.musicMuted.toLowerCase() == "false" ||
		localStorage.musicMuted == false
	) {
		music.play();
		//console.log("musicplayed");
		music.play();
	} else {
		music.pause();
		//console.log("muted");
	}
}

music.addEventListener("oncanplaythrough", runMusic);
