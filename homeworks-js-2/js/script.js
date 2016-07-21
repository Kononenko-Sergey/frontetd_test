var questions = [
	{
		question: '1. Вопрос 1',
		answears: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
	},
	{
		question: '2. Вопрос 1',
		answears: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
	},
	{
		question: '3. Вопрос 1',
		answears: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
	}
];
var test = {
	create: createTest,
	addQuestion: addQuestion
};

function createTest(tytle, id) {
	var body = document.querySelector('body');
	var testBlock = document.createElement('div');
	var h2 = document.createElement('h2');
	var testContainer = document.createElement('div');
	var submit = document.createElement('button');


	testBlock.classList.add('test-block');
	testContainer.classList.add('test-container');
	testContainer.setAttribute("id", id);
	submit.classList.add('submit');

	h2.innerHTML = tytle;
	submit.innerHTML = 'Проверить мои результаты';

	testBlock.appendChild(h2);
	testBlock.appendChild(testContainer);
	testBlock.appendChild(submit);
	body.appendChild(testBlock);

}

function addQuestion(id, question, answearsList) {
	var container = document.getElementById(id);
	var questionBlock = document.createElement('div');
	var h3 = document.createElement('h3');
	var ul = document.createElement('ul');

	h3.innerHTML = question;

	for (var i = 0; i < answearsList.length; i++) {
		var li = document.createElement('li');
		var input = document.createElement('input');
		var span = document.createElement('span');

		li.classList.add('answear');
		input.classList.add('box');
		span.classList.add('answear-text');

		input.setAttribute("type", "checkbox");
		span.innerHTML = answearsList[i];


		li.appendChild(input);
		li.appendChild(span);
		ul.appendChild(li);
	}

	questionBlock.appendChild(h3);
	questionBlock.appendChild(ul);
	container.appendChild(questionBlock);
}

test.create('Тест по программированию', 'ID_1');

for(var i = 0; i < questions.length; i++) {
	test.addQuestion('ID_1', questions[i].question, questions[i].answears);
}





