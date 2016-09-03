var hours = 0;
var minutes = 0;
var seconds = 0;
var ms = 0;
var $hours= $(".hours");
var $minutes= $(".minutes");
var $seconds= $(".seconds");
var $ms= $(".ms");
var $play= $(".play");
var $stop= $(".stop");
var timer;
var isRun = false; 

function counter(){

	isRun = true;
	
	if (minutes === 60){
		$hours.html(hours);
		hours++;
		$hours.html(hours);
		minutes = 0;
		$minutes.html(minutes);
	}
	if (seconds === 60){
		minutes++;
		$minutes.html(minutes);
		seconds = 0;
		$seconds.html(seconds);

	}
	if (ms === 1000){
		seconds++;
		$seconds.html(seconds);
		ms = 0;
		$ms.html(ms);

	}
	

	// console.log(hours, minutes, seconds, ms);
	ms += 100;
	$ms.html(ms);

	

	if (seconds === 65){
		clearInterval(timer);
	}
	
}

function runTimer() {
	if(isRun) return;

	timer = setInterval(counter, 100);
}

function offTimer() {
	isRun=false;

	clearInterval(timer);
	
}



$play.on("click", runTimer);
$stop.on("click", offTimer);