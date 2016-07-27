var arr = [1, 5, 3, 2];

function getIndexOf(array, element) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === element){
			return i;
		} 
	} 
	return -1; 
}

getIndexOf(arr, 3);