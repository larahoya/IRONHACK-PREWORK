var user = {};
var responses = [];

alert('Welcome to Middle-earth!');
function questionName() {
	var name = prompt('What is your name?');
	user.name = name;
}
questionName();
alert('Let´s start the quiz ' + user.name + '!');


function question1() {
	var answer1 = prompt('Is Frodo a Hobbit? (Yes/No)');

	if(answer1.toLowerCase() === 'yes') {
		answer1 = true;
	} else if(answer1.toLowerCase() === 'no') {
		answer1 = false;
	} else {
		alert('Please answer Yes or No!');
		return question1();
	}

	responses.push(answer1);
}

function question2() {
	var answer2 = prompt('Is Boromir a member of The Fellowship of the Ring? (Yes/No)');

	if(answer2.toLowerCase() === 'yes') {
		answer2 = true;
	} else if(answer2.toLowerCase() === 'no') {
		answer2 = false;
	} else {
		alert('Please answer Yes or No!');
		return question2();
	}

	responses.push(answer2);

}

function question3() {
	var answer3 = prompt('Frodo come from...: \n\tRivendell \n\tMordor \n\tThe Shire');
	answer3 = answer3.toLowerCase();

	switch(answer3) {
		case 'rivendell':
			answer3 = false;
			break;
		case 'mordor':
			answer3 = false;
			break;
		case 'the shire':
			answer3 = true;
			break;
		default:
			alert ('Please choose one!');
			return question3();
	}

	responses.push(answer3);

}

function question4() {
	var answer4 = prompt('What is the other name of Smeagol? \n\tSam \n\tGollum \n\tSauron');
	answer4 = answer4.toLowerCase();

	switch(answer4) {
		case 'sam':
			answer4 = false;
			break;
		case 'gollum':
			answer4 = true;
			break;
		case 'sauron':
			answer4 = false;
			break;
		default:
			alert ('Please choose one!');
			return question4();
	}

	responses.push(answer4);

}

function question5() {
	var answer5 = prompt('What is the writter of The Lord of The Rings? \n\tSalinger \n\tTolkien \n\tShakespeare');
	answer5 = answer5.toLowerCase();

	switch(answer5) {
		case 'salinger':
			answer5 = false;
			break;
		case 'tolkien':
			answer5 = true;
			break;
		case 'shakespeare':
			answer5 = false;
			break;
		default:
			alert ('Please choose one!');
			return question5();
	}

	responses.push(answer5);

}

question1();
question2();
question3();
question4();
question5();

function showResults() {
	if(user.correctResponses === 5) {
		alert('You have ' + user.correctResponses + ' correct answers.\nYou do it PERFECT ' + user.name + '!');
	} else if(user.correctResponses > user.wrongResponses) {
		alert('You have ' + user.correctResponses + ' correct answers.\nYou do it well '+ user.name + '!');
	} else {
		alert('You have ' + user.correctResponses + ' correct answers.\nMaybe you should try again '+ user.name + '!')
	}
}


function evaluate(responsesArray) {

	var correctResponses = 0;
	var wrongResponses = 0;

	for(var i=0; i<responsesArray.length; i++) {
		if(responsesArray[i] === true) {
			correctResponses += 1;
		} else {
			wrongResponses +=1;
		}
	}

	user.correctResponses = correctResponses;
	user.wrongResponses = wrongResponses;

	showResults();
}

evaluate(responses);


