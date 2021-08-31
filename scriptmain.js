let trivia = [
	///
	{
		question: 'Who was Benjamin’s mother?',
		optionA: 'Naomi',
		optionB: 'Rachel',
		optionC: 'Ruth',
		correctAnswer: 'Rachel',
	},
	///
	{
		question: 'Which of the tribes was known for living by the sea?',
		optionA: 'Asher',
		optionB: 'Zebulun',
		optionC: 'Gad',
		correctAnswer: 'Zebulun',
	},
	///
	{
		question: 'Moses was from which tribe?',
		optionA: 'Manasseh',
		optionB: 'Reuben',
		optionC: 'Levi',
		correctAnswer: 'Levi',
	},
	///
	{
		question: 'Whose wife falsely accused Joseph of rape?',
		optionA: 'Pharaoh',
		optionB: 'Potiphar',
		optionC: 'Herod',
		correctAnswer: 'Potiphar',
	},
	///
	{
		question: 'Which one of the tribes was named for struggle?',
		optionA: 'Naphtali',
		optionB: 'Issachar',
		optionC: 'Reuben',
		correctAnswer: 'Naphtali',
	},
	///
	{
		question: 'Which of Abraham’s sons was held for ransom in Egypt?',
		optionA: 'Asher',
		optionB: 'Benjamin',
		optionC: 'Simeon',
		correctAnswer: 'Simeon',
	},
	///
	{
		question: 'Whose name means judge?',
		optionA: 'Dan',
		optionB: 'Judah',
		optionC: 'Zebulun',
		correctAnswer: 'Dan',
	},
	///
	{
		question: 'Who was the eighth son?',
		optionsA: 'Benjamin',
		optionB: 'Levi',
		optionC: 'Gad',
		correctAnswer: 'Gad',
	},
	///
	{
		question: 'Who was Dan and Naphtali’s neighbor in Ezekiel’s dream?',
		optionA: 'Asher',
		optionB: 'Moses',
		optionC: 'Joseph',
		correctAnswer: 'Asher',
	},
	///
	{
		question: "The 'men who understood the times' were from which tribe?",
		optionA: 'Naphtali',
		optionB: 'Issachar',
		optionC: 'Aaron',
		correctAnswer: 'Issachar',
	},
	///
	{
		question: 'Whose mother in law did Jesus heal?',
		optionA: 'Peter',
		optionB: 'James',
		optionC: 'Andrew',
		correctAnswer: 'Peter',
	},
	///
	{
		question: 'How many of the Gospels were written by Levi the tax collector?',
		optionA: '2',
		optionB: '1',
		optionC: '3',
		correctAnswer: '1',
	},
	///
	{
		question: 'Was Andrew a fisherman?',
		optionA: 'Yes',
		optionB: 'No',
		correctAnswer: 'Yes',
	},
	///
	{
		question:
			'There were 2 apostles named James. One’s daddy was Zebedee. The other James’ daddy was…',
		optionA: 'Jonah',
		optionB: 'Alphaeus',
		optionC: 'Theophilus',
		correctAnswer: 'Alphaeus',
	},
	///
	{
		question: 'If your name is John Boanerges, what’s your brother’s name?',
		optionA: 'Thomas',
		optionB: 'Luke',
		optionC: 'James',
		correctAnswer: 'James',
	},
	///
	{
		question:
			'Which apostle spoke to the Ethiopian official on the road to Gaza?',
		optionA: 'Annas',
		optionB: 'Cleopas',
		optionC: 'Philip',
		correctAnswer: 'Philip',
	},
	///
	{
		question:
			'Jesus had two apostles named Simon. One was Peter. The other was from where?',
		optionA: 'Canaan',
		optionB: 'Egypt',
		optionC: 'Emmaus',
		correctAnswer: 'Canaan',
	},
	///
	{
		question: 'Judas betrayed Jesus in what garden?',
		optionA: 'Eden',
		optionB: 'Olives',
		optionC: 'Gethsemane',
		correctAnswer: 'Gethsemane',
	},
	///
	{
		question:
			'What did ‘Unbelieving Thomas’ see and touch that made him believe?',
		optionA: 'Scars',
		optionB: 'Blood-stained clothes',
		optionC: 'Crown of thorns',
		correctAnswer: 'Scars',
	},
	///
	{
		question:
			'There are at least 2 apostles most people have never heard of. One of them is …',
		optionA: 'Caiaphas',
		optionB: 'Bartholomew',
		optionC: 'Cornelius',
		correctAnswer: 'Bartholomew',
	},
	///
	{
		question: 'Was Thaddeus a middle name or a last name?',
		optionA: 'Last name',
		optionB: 'Middle name',
		optionC: 'Nickname',
		correctAnswer: 'Last name',
	},
	///
	{
		question: 'Who wrote the Book of Revelation?',
		optionA: 'Mark',
		optionB: 'John',
		optionC: 'Paul',
		correctAnswer: 'John',
	},
	///
];

/////** STATE/GLOBAL VARIABLES *////

// qNum (question number)
// gameOver (22 numClicks, triggers "GameOver" and "thanks for playing" message)
// badgeOfHonor (when score === 20)
// shieldOfFaith (when score === 22)

let qNum = 0;
let badgeOfHonor;
let shieldOfFaith;

/// ** STATE VARIABLES *///

// trivia (entire array)
// triviaQ (each individual question)
// qContent (question text, for display at h3)
// options (possible answers players can choose from)
// position (question player is currently answering)
// playerSelect (choice player ultimately makes)
// correctAnswer (self explanatory)
// numClicks (total number of selections player has made)
// score (number of correct answers, initially set at zero, 1 point each)

let numClicks;
let score = 0;
let correctAnswer = (score += 0);
let nextQuestion;

/// --- cached element references --- ///

const pText = document.querySelector('#question-text');
const radioA = document.querySelector('#optionA');
const radioB = document.querySelector('#optionB');
const radioC = document.querySelector('#optionC');
const reset = document.querySelector('.reset');
const submit = document.querySelector('.submit');
const selectors = document.querySelector('.selectors');
const h5 = document.querySelector('h5');

/// --- event listeners --- ///

reset.addEventListener('click', (event) => {
	event.preventDefault();
	qNum = 0;
	pText.innerText = trivia[qNum].question;
	radioA.innerText = trivia[qNum].optionA;
	radioB.innerText = trivia[qNum].optionB;
	radioC.innerText = trivia[qNum].optionC;
});

selectors.addEventListener('click', (event) => {
	console.log(event.target.innerText);
	if (event.target.innerText === trivia[qNum].correctAnswer) {
		
        score++;

		console.log(score);
		console.log(h5);

		// set h5 = number of correctAnswers

		h5.innerText = score;
	}
	qNum++;
	pText.innerText = trivia[qNum].question;
	radioA.innerText = trivia[qNum].optionA;
	radioB.innerText = trivia[qNum].optionB;
	radioC.innerText = trivia[qNum].optionC;
});

// /// --- keeping score --- ///
// // to update score (click submit)
// // to notify players about prizes (correctAnswer += 20)
// // to end game (numClicks === 22 || click reset)

numClicks = qNum >= 1;

function keepScore() {
	
     if (score === 20) {
		message.textContext = `Congratulations, you have won the ${badgeOfHonor}`;
	} else if (score === 22) {
		message.textContext = `Congratulations, you have earned the ${shieldOfFaith}`;
	} else if (score < 20 && numClicks === 22) {
		message.textContext = `Thanks for playing`;
	} else if (numClicks === 22);
	{
		mesage.textContext = `Thanks for playing`;
	}
}
