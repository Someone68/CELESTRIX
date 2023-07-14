let buttonElement = document.getElementById("btn");
let stardustElement = document.getElementById("stardust");
let cp5s;
let cp2s;
let cp01s;
let music = new Audio("https://dl.dropbox.com/s/r3sm76cwut56ta8/music.mp3");
music.loop = true;
music.volume = 0.7;
let documentClicked = false;
let startTime;
let cpsClicks;
let cps;

function gebid(id) {
	return document.getElementById(id);
}
window.onload = () => {
	setInterval(function () {
		var currentTime = new Date().getTime();
		var elapsedTime = (currentTime - startTime) / 1000;
		cps = cpsClicks / elapsedTime;

		cpsClicks = 0;
		startTime = currentTime;
	}, 1000);
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
			cpsClicks += Number(localStorage.cp5s);
			add("stardust", "cp5s");
			updateDOM();
		}, 5000);
		updateDOM();
	} else {
		localStorage.cp5s = 0;
	}
	if (localStorage.cp2s) {
		cp2s = setInterval(() => {
			cpsClicks += Number(localStorage.cp2s);
			add("stardust", "cp2s");
			updateDOM();
		}, 2000);
		updateDOM();
	} else {
		localStorage.cp2s = 0;
	}
	if (localStorage.cp01s) {
		cp01s = setInterval(() => {
			cpsClicks += Number(localStorage.cp01s);
			add("stardust", umultiply("cp01s", 3));
			updateDOM();
		}, 100);
		updateDOM();
	} else {
		localStorage.cp01s = 0;
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
	if (localStorage.autominer2Price) {
		updateDOM();
	} else {
		localStorage.autominer2Price = 500;
	}
	if (localStorage.stardustExtractor3Price) {
		updateDOM();
	} else {
		localStorage.stardustExtractor3Price = 5000;
	}
	if (localStorage.richFont) {
		if (localStorage.richFont === "true") {
			document.documentElement.style.setProperty("--font", "pixel_rich");
		} else {
			document.documentElement.style.setProperty("--font", "pixelfont");
		}
	} else {
		localStorage.richFont = "false";
	}
};

function clickSound() {
	let clickSound = new Audio("click.mp3");
	clickSound.volume = 1;
	clickSound.play();
}

function click() {
	cpsClicks++;
	if (localStorage.musicMuted.toLowerCase() === "false") {
		clickSound();
	}
	add("stardust", "clickPower");
	add("totalClicks");
	updateDOM();
}
function updateDOM() {
	stardustElement.innerHTML = "◈&#8201;" + convertNumber(localStorage.stardust);
	if (!isNaN(cps))
		gebid("cps").innerHTML = "SPS: " + convertNumber(cps.toFixed(2));
	gebid("cursorupgrade").innerHTML =
		"Costs " +
		convertNumber(localStorage.cursorUpgradePrice) +
		" Stardust | " +
		convertNumber(usubtract("clickPower", 1)) +
		" Owned";
	gebid("stardustgenerator1").innerHTML =
		"Costs " +
		convertNumber(localStorage.stardustGenerator1Price) +
		" Stardust | " +
		convertNumber(localStorage.cp5s) +
		" Owned";
	gebid("autominer2").innerHTML =
		"Costs " +
		convertNumber(localStorage.autominer2Price) +
		" Stardust | " +
		convertNumber(localStorage.cp2s) +
		" Owned";
	gebid("stardustextractor3").innerHTML =
		"Costs " +
		convertNumber(localStorage.stardustExtractor3Price) +
		" Stardust | " +
		convertNumber(localStorage.cp01s) +
		" Owned";
	gebid("stats_stardust").innerHTML = convertNumber(localStorage.stardust);
	gebid("stats_clicks").innerHTML = convertNumber(localStorage.totalClicks);
	gebid("stats_clickpower").innerHTML = convertNumber(localStorage.clickPower);
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
	if (localStorage.richFont) {
		if (localStorage.richFont === "true") {
			gebid("richfont").checked = true;
			document.documentElement.style.setProperty("--font", "pixel_rich");
		} else {
			gebid("richfont").checked = false;
			document.documentElement.style.setProperty("--font", "pixelfont");
		}
	} else {
		localStorage.richFont = "false";
	}
}

setInterval(updateDOM, 1);
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
					text: `Not enough Stardust! You need ${convertNumber(
						Math.abs(usubtract("stardust", "cursorUpgradePrice"))
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
					text: "Bought Stardust Generator",
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
		case "autominer2":
			if (greaterThanOrEqual("stardust", "autominer2Price")) {
				subtract("stardust", "autominer2Price");
				add("cp2s");
				resetIntervals();
				Snackbar.show({
					actionText: "OK",
					text: "Bought Auto Miner",
					duration: 2500,
				});
				//increase the price
				localStorage.autominer2Price = Math.round(
					uadd("autominer2Price", Number(localStorage.autominer2Price) * 0.7)
				);
				updateDOM();
			} else {
				swal({
					title: "Insufficient Stardust",
					text: `Not enough Stardust! You need ${Math.abs(
						usubtract("stardust", "autominer2Price")
					)} more!`,
					icon: "error",
				});
			}
			break;
		case "stardustextractor3":
			if (greaterThanOrEqual("stardust", "stardustExtractor3Price")) {
				subtract("stardust", "stardustExtractor3Price");
				add("cp01s");
				resetIntervals();
				Snackbar.show({
					actionText: "OK",
					text: "Bought Stardust Extractor",
					duration: 2500,
				});
				//increase the price
				localStorage.stardustExtractor3Price = Math.round(
					uadd(
						"stardustExtractor3Price",
						Number(localStorage.stardustExtractor3Price) * 1.2
					)
				);
				updateDOM();
			} else {
				swal({
					title: "Insufficient Stardust",
					text: `Not enough Stardust! You need ${Math.abs(
						usubtract("stardust", "stardustExtractor3Price")
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
		//console.log("musicplayed");
		music.play();
	} else {
		music.pause();
		//console.log("muted");
	}
}

music.addEventListener("oncanplaythrough", runMusic);

function toggleRichFont() {
	if (localStorage.richFont) {
		if (localStorage.richFont === "true") {
			localStorage.richFont = "false";
		} else {
			localStorage.richFont = "true";
		}
	} else {
		localStorage.richFont = "false";
	}
}
