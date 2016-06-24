

var a = prompt('enter a=');
var n = prompt('enter n=');

var result = pow(a,n);

function pow(a, n) {
	
	var res = 1;
	for (var i = 0; i < n; i++) {
		res *= a;
	}
	return res;
}


alert(result);