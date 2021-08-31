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
		correctAnswer: 'b',
	},
	///
	{
		question: 'Moses was from which tribe?',
		optionA: 'Manasseh',
		optionB: 'Reuben',
		optionC: 'Levi',
		correctAnswer: 'c',
	},
	///
	{
		question: 'Whose wife falsely accused Joseph of rape?',
		optionA: 'Pharaoh',
		optionB: 'Potiphar',
		optionC: 'Herod',
		correctAnswer: 'b',
	},
	///
	{
		question: 'Which one of the tribes was named for struggle?',
		optionA: 'Naphtali',
		optionB: 'Issachar',
		optionC: 'Reuben',
		correctAnswer: 'a',
	},
	///
	{
		question: 'Which of Abraham’s sons was held for ransom in Egypt?',
		optionA: 'Asher',
		optionB: 'Benjamin',
		optionC: 'Simeon',
		correctAnswer: 'c',
	},
	///
	{
		question: 'Whose name means judge?',
		optionA: 'Dan',
		optionB: 'Judah',
		optionC: 'Zebulun',
		correctAnswer: 'a',
	},
	///
	{
		question: 'Who was the eighth son?',
		optionsA: 'Benjamin',
		optionB: 'Levi',
		optionC: 'Gad',
		correctAnswer: 'c',
	},
	///
	{
		question: 'Who was Dan and Naphtali’s neighbor in Ezekiel’s dream?',
		optionA: 'Asher',
		optionB: 'Moses',
		optionC: 'Joseph',
		correctAnswer: 'a',
	},
	///
	{
		question: "The 'men who understood the times' were from which tribe?",
		optionA: 'Naphtali',
		optionB: 'Issachar',
		optionC: 'Aaron',
		correctAnswer: 'b',
	},
	///
	{
		question: 'Whose mother in law did Jesus heal?',
		optionA: 'Peter',
		optionB: 'James',
		optionC: 'Andrew',
		correctAnswer: 'a',
	},
	///
	{
		question: 'How many of the Gospels were written by Levi the tax collector?',
		optionA: '2',
		optionB: '1',
		optionC: '3',
		correctAnswer: 'b',
	},
	///
	{
		question: 'Was Andrew a fisherman?',
		optionA: 'Yes',
		optionB: 'No',
		correctAnswer: 'a',
	},
	///
	{
		question:
			'There were 2 apostles named James. One’s daddy was Zebedee. The other James’ daddy was…',
		optionA: 'Jonah',
		optionB: 'Alphaeus',
		optionC: 'Theophilus',
		correctAnswer: 'b',
	},
	///
	{
		question: 'If your name is John Boanerges, what’s your brother’s name?',
		optionA: 'Thomas',
		optionB: 'Luke',
		optionC: 'James',
		correctAnswer: 'c',
	},
	///
	{
		question:
			'Which apostle spoke to the Ethiopian official on the road to Gaza?',
		optionA: 'Annas',
		optionB: 'Cleopas',
		optionC: 'Philip',
		correctAnswer: 'c',
	},
	///
	{
		question: 'There were two Simons. One was Peter. The other was from where?',
		optionA: 'Canaan',
		optionB: 'Egypt',
		optionC: 'Emmaus',
		correctAnswer: 'a',
	},
	///
	{
		question: 'Judas betrayed Jesus in what garden?',
		optionA: 'Eden',
		optionB: 'Olives',
		optionC: 'Gethsemane',
		correctAnswer: 'c',
	},
	///
	{
		question:
			'What did ‘Unbelieving Thomas’ see and touch that made him believe?',
		optionA: 'Jesus’ scars',
		optionB: 'Blood-stained clothes',
		optionC: 'Crown of thorns',
		correctAnswer: 'a',
	},
	///
	{
		question:
			'There are at least 2 apostles most people have never heard of. One of them is …',
		optionA: 'Caiaphas',
		optionB: 'Bartholomew',
		optionC: 'Cornelius',
		correctAnswer: 'b',
	},
	///
	{
		question: 'Was Thaddeus a middle name or a last name?',
		optionA: 'Last name',
		optionB: 'Middle name',
		optionC: 'Nickname',
		correctAnswer: 'a',
	},
	///
	{
		question: 'Who wrote the Book of Revelation?',
		optionA: 'Mark',
		optionB: 'John',
		optionC: 'Paul',
		correctAnswer: 'b',
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

let playerSelect;
let numClicks;
let correctAnswer;
let nextQuestion;
let score;

/// --- cached element references --- ///

const pText = document.querySelector('#question-text');
const radioA = document.querySelector('#optionA');
const radioB = document.querySelector('#optionB');
const radioC = document.querySelector('#optionC');
const reset = document.querySelector('.reset');
const submit = document.querySelector('.submit');
const selectors = document.querySelector('.selectors');

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

function keepScore() {
	if (numClicks === correctAnswer) {
		score++;
	} else if (score === 20) {
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

// keepScore();
/// --- game over --- //
