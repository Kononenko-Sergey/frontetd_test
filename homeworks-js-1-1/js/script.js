

var a = prompt('Введите число a=');
var n = prompt('Введите степень n=');

var result = pow(a,n);

function pow(a, n) {
	
	var res = 1;
	for (var i = 0; i < n; i++) {
		res *= a;
	}
	return res;
}


console.log(result);