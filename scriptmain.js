
trivia = [
// [
//     question1: “Which son was Jacob’s oldest?”,
//     optiona: “Simeon”,
//     optionb: “Reuben”,
//     optionc: “Levi”,
//     correctAnswer: "b",

// ]
{
    question: "Who was Jacob's oldest son?",
    optionA: “Simeon”,
    optionB: “Reuben”,
    optionC: “Levi”,
    correctAnswer: "b"
},
///
{
    question: “Which son did Israel say would be praised by his brothers?”,
    optionA: "Judah",
    optionB: "Dan",
    optionC: "Issachar",
    correctAnswer: "a"
},
///
{
    question: "Who was Benjamin’s mother?",
	optionA: "Naomi",
    optionB: "Rachel",
    optionC: "Ruth",
    correctAnswer: "b"
},
///
{
    question: "Which of the tribes was known for living by the sea?",
    optionA: "Asher",
    optionB: "Zebulun",
    optionC: "Gad",
    correctAnswer: "b"
},
///
{
    question: "Moses was from which tribe?",
    optionA: "Manasseh",
    optionB: "Reuben",
    optionC: "Levi",
    correctAnswer: "c"
},
///
{
    question: "Whose wife falsely accused Joseph of rape?",
    optionA: "Pharaoh",
    optionB: "Potiphar",
    optionC: "Herod",
    correctAnswer: "b"
},
///
{
    question: "Which one of the tribes was named for struggle?",
    optionA: "Naphtali",
    optionB: "Issachar",
    optionC: "Reuben",
    correctAnswer: "a"
},
///
{
    question: "Which of Abraham’s sons was held for ransom in Egypt?",
    optionA: "Asher",
    optionB: "Benjamin",
    optionC: "Simeon",
    correctAnswer: "c"
},
 ///
{
    question: "Whose name means judge?",
    optionA: "Dan",
    optionB: "Judah",
    optionC: "Zebulun",
    correctAnswer: "a"
},
///
{
    question: "Who was the eighth son?",
    optionsA: "Benjamin",
    optionB: "Levi",
    optionC: "Gad",
    correctAnswer: "c"
},
///
{
    question: "Who was Dan and Naphtali’s neighbor in Ezekiel’s dream?",
    optionA: "Asher",
    optionB: "Moses",
    optionC: "Joseph",
    correctAnswer: "a"
},
///
{
    question: "The 'men who understood the times' were from which tribe?",
    optionA: "Naphtali",
    optionB: "Issachar",
    optionC: "Aaron",
    correctAnswer: "b"
},
///
{
    question: "Whose mother in law did Jesus heal?",
    optionA: "Peter",
    optionB: "James",
    optionC: "Andrew",
    correctAnswer: "a"
},
///
{
    question: "How many of the Gospels were written by Levi the tax collector?",
	optionA: "2",
    optionB: "1",
    optionC: "3",
    correctAnswer: "b"
},
///
{
    question: "Was Andrew a fisherman?",
    optionA: "Yes",
    optionB: "No",
    correctAnswer: "a"
},
///
{
    question: "There were 2 apostles named James. One’s daddy was Zebedee. The other James’ daddy was…",
    optionA: "Jonah",
    optionB: "Alphaeus",
    optionC: "Theophilus",
    correctAnswer: "b"
},
///
{
    question: "If your name is John Boanerges, what’s your brother’s name?",
    optionA: "Thomas",
    optionB: "Luke",
    optionC: "James",
    correctAnswer: "c"
},
///
{
    question: "Which apostle spoke to the Ethiopian official on the road to Gaza?",
    optionA: "Annas",
    optionB: "Cleopas",
    optionC: "Philip",
    correctAnswer: "c"
},
///
{
    question: "There were two Simons. One was Peter. The other was from where?",
    optionA: "Canaan",
    optionB: "Egypt",
    optionC: "Emmaus",
    correctAnswer: "a"
},
///
{
    question: "Judas betrayed Jesus in what garden?",
    optionA: "Eden",
    optionB: "Olives",
    optionC: "Gethsemane",
    correctAnswer: "c"
},
///
{
    question: "What did ‘Unbelieving Thomas’ see and touch that made him believe?",
    optionA: "Jesus’ scars",
    optionB: "Blood-stained clothes",
    optionC: "Crown of thorns",
    correctAnswer: "a"
},
///
{
    question: "There are at least 2 apostles most people have never heard of. One of them is …",
    optionA: "Caiaphas",
    optionB: "Bartholomew",
    optionC: "Cornelius",
    correctAnswer: "b"
},
///
{
    question: "Was Thaddeus a middle name or a last name?",
    optionA: "Last name",
    optionB: "Middle name",
    optionC: "Nickname",
    correctAnswer: "a"
},
///
{
    question: "Who wrote the Book of Revelation?",
    optionA: "Mark",
    optionB: "John",
    optionC: "Paul",
    correctAnswer: "b"
},
///
];

/////** GLOBAL VARIABLES *////

// qNum (question number)
// gameOver (24 numClicks, triggers "GameOver" and "thanks for playing" message)
// badgeOfHonor (when score === 20)
// shieldOfFaith (when score === 24)

let question
let qNum
let gameOver
let badgeOfHonor
let shieldOfFaith

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

let trivia
let triviaQ
let qContent
let options
let position
let playerSelect
let correctAnswer
let nextQuestion = question + 1;
let numClicks
let score

/// --- cached element references --- ///
let quizBox = document.getElementsById('quizBox');
let radioA = document.querySelector('radioA');
let radioB = document.querySelector('radioB');
let radioC = document.querySelector('radioC');
let submit = document.querySelector('submit');
let reset = document.querySelector('reset');

/// --- event listeners --- ///

radioA.addEventListener('click', handleClick);
radioB.addEventListener('click', handleClick);
radioC.addEventListener('click', handleClick);
submit.addEventListener('click', handleClick);
reset.addEventListener('click', handleClick);


/// --- functions --- ///

// to load/display the data (array method, init function?, )
// to submit answers (click submit)
// to proceed to next question (click submit)
// to update score (click submit)
// to notify players about prizes (correctAnswer += 20)
// to end game (numClicks === 24 || click reset)

//// --- display, load page --- ////
// does render function work without init?

function render (){
    let qNum = position;
    let position = [0];
    let score = 0;
    let numClicks = 0;

    question.innerHTML = "<p>"+ qNum.question +"</p>";
    //the goal is to load the following into the box with the radio buttons//
    optionA.innerHTML = qNum.optionA;
    optionB.innerHTML = qNum.optionB;
    optionC.innerHTML = qNum.optionC;

};
/// --- proceed to next question --- ///

function handleClick(event) {
    let playerSelect = document.getElementsByClassName("vertical-radio-buttons");

    if (submit >= 1 ){
        return nextQuestion;
     } else if (reset){
         return question[0];
     }
    };

 /// --- keeping score --- ///   

function keepScore (){
    if (qNum === correctAnswer){
        score++;
    } else if (score === 20){
        print `Congratulations, you have won the ${badgeOfHonor}`;
    } else if (score === 24){
        print `Congratulations, you have earned the ${shieldOfFaith}`;
    } else if (score < 20 && numClicks === 24) {
    print `Thanks for playing`;
    }
};

/// --- game over --- ///
function gameOver (){
    if (numClicks === 24 || reset); {
    return gameOver; 
}
    };

// init()
// function init(){
    // let qNum = 1;
    // let score = 0;
    // let position = qNum
    // render();
    // }

// function render(){
//     reset.style.display = 'block';
//     triviaQ.forEach(element, index) => {
//         document.getElementsByClassName(index);
//     }
// }

    
    