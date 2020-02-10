// How to use setInterval

// This runs immediately, so we need to put it in a function that we can call...

let x = 0;

let inter = setInterval(() => {
	console.log(x);
	x += 1;
	if (x === 10) {
		clearInterval(inter);
		console.log("Clock stopped");
	}
}, 1000);

// Call this, and add one parameter for how many seconds you want it to tick off.

function timer(limit) {
	let sec = 0;
	let inter = setInterval(() => {
		console.log(sec);
		sec += 1;
		if (sec > limit) {
		clearInterval(inter);
		console.log("Clock stopped");
	}
}, 1000);
};