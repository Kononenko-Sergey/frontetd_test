var arr = [3, 5, 3, 2];

function getLastIndexOf(array, element) {
	for (var i = array.length - 1; i >= 0; i--) {
		if (array[i] === element){
			return i;
		} 
	} 
	return -1; 
}

getLastIndexOf(arr, 5);

