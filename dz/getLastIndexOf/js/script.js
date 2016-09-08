var arr = [3, 5, 5, 2];

function getLastIndexOf(array, element, number) {
	for (var i = array.length - number; i >= 0; i--) {
		if (array[i] === element){
			return i;
		} 
	} 
	return -1; 
}

getLastIndexOf(arr, 5, 3);

