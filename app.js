var dueDate = new Date("Nov 30, 2015").getTime();

var days,
		hours,
		minutes,
		seconds;

var countdownElement = document.getElementById('countdown');

setInterval(function(){
	var currentDate = new Date().getTime(),
			secondsLeft = (dueDate - currentDate)/1000;

	days = parseInt(secondsLeft / 86400);
	secondsLeft = secondsLeft % 86400;

	hours = parseInt(secondsLeft / 3600);
	secondsLeft = secondsLeft % 3600;

	minutes = parseInt(secondsLeft / 60);
	seconds = parseInt(secondsLeft % 60);

	countdown.innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S";
}, 1000);





