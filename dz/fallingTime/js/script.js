function fallingTime (h) {
	var G = 9.81;
	var u = Math.sqrt (2 * G * h);
	var t = 2 * h / u;  
	return t;
}
