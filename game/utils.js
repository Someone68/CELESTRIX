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
		cpsClicks += Number(localStorage.cp5s);
		add("stardust", "cp5s");
		updateDOM();
	}, 5000);
	clearInterval(cp2s);
	cp2s = setInterval(() => {
		cpsClicks += Number(localStorage.cp2s);
		add("stardust", "cp2s");
		updateDOM();
	}, 2000);
	clearInterval(cp01s);
	cp01s = setInterval(() => {
		cpsClicks += Number(localStorage.cp01s);
		add("stardust", umultiply("cp01s", 3));
		updateDOM();
	}, 100);
}

function convertNumber(lcls) {
	if (typeof lcls === "string") {
		return Number(lcls).toLocaleString();
	} else {
		return lcls.toLocaleString();
	}
}
