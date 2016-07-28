var arr = [3, 5, 3, 2];

function getIndexOf(array, element, number) {
	for (var i = number; i < array.length; i++) {
		if (array[i] === element){
			return i;
		} 
	} 
	return -1; 
}

getIndexOf(arr, 3,1);