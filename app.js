var dueDate = new Date("Nov 30, 2015");
    dueDateTime = dueDate.getTime();

var days,
		hours,
		minutes,
		seconds;

var countdownContainer = document.getElementById('countdown_container'),
    // dueDateElement = document.getElementById('due_date'),
    // todaysDateElement = document.getElementById('todays_date'),
		nodes = countdownContainer.children;


setInterval(function(){
	var currentDate = new Date(),
	    currentTime = currentDate.getTime();
			secondsLeft = (dueDateTime - currentTime)/1000;

	days = parseInt(secondsLeft / 86400);
	secondsLeft = secondsLeft % 86400;

	hours = parseInt(secondsLeft / 3600);
	secondsLeft = secondsLeft % 3600;

	minutes = parseInt(secondsLeft / 60);
	seconds = parseInt(secondsLeft % 60);

	// countdown.innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S";

nodes[0].innerHTML = days;
nodes[1].innerHTML = hours;
nodes[2].innerHTML = minutes;
nodes[3].innerHTML = seconds.toString().length < 2 ? "0" + seconds : seconds;


// dueDateElement.innerHTML = "Due: " + dueDate.toDateString();
// todaysDateElement.innerHTML = "Today: " + currentDate.toDateString();


}, 1000);





