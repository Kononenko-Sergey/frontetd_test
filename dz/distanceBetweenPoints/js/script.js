function distanceBetweenPoints (Xb, Xa, Yb, Ya) {

	var ab = Math.sqrt ((Xb - Xa) * (Xb - Xa)) + ((Yb - Ya) * (Yb - Ya));
	return ab;
}
var ab = distanceBetweenPoints (2, 2, 4, 4);




function distanceBetweenPoints (point1, point2) {

	var ab = Math.sqrt ((point1.x - point2.x) * (point1.x - point2.x)) + ((point1.y - point2.y) * (point1.y - point2.y));
	return ab;
}
var AB = distanceBetweenPoints ({x: 2, y: 4}, {x: 5, y: 9});