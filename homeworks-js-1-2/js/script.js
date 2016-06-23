var names = [];
var name = '';
for (var i = 0; i < 5; i++) {
	name = prompt('Enter Name', '');
	names.push(name);
}
var userName = prompt('Enter User Name!', '');

var result = false;

for (var i = 0; i < names.length; i++) {
	if (userName == names[i]){
	 	result = true;
	 	break;
	}
}

if(result) {
	alert(userName + ', вы успешно вошли');
} else {
	alert('Error');
}