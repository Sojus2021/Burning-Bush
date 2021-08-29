
trivia = [
// [
//     question1: “Which son was Jacob’s oldest?”,
//     optiona: “Simeon”,
//     optionb: “Reuben”,
//     optionc: “Levi”,
//     correctAnswer: "b",

// ]
{
    question1: "Who was Jacob's oldest son?",
    options: {
	    a: “Simeon”,
        b: “Reuben”,
        c: “Levi”,
    },
    correctAnswer: "b"
},
///
{
    question2: “Which son did Israel say would be praised by his brothers?”,
    options: {
        a: "Judah",
        b: "Dan",
        c: "Issachar",
    },
    correctAnswer: "a"
},
///
{
    question3: "Who was Benjamin’s mother?",
	options: {
        a: "Naomi",
        b: "Rachel",
        c: "Ruth"
    },
    correctAnswer: "b"
},
///
{
    question4: "Which of the tribes was known for living by the sea?",
    options: {
        a: "Asher",
        b: "Zebulun",
        c: "Gad"
    },
    correctAnswer: "b"
},
///
{
    question5: "Moses was from which tribe?",
    options: {
        a: "Manasseh",
        b: "Reuben",
        c: "Levi"
    },
    correctAnswer: "c"
},
///
{
    question6: "Whose wife falsely accused Joseph of rape?",
    options: {
        a: "Pharaoh",
        b: "Potiphar",
        c: "Herod"
    },
    correctAnswer: "b"
},
///
{
    question7: "Which one of the tribes was named for struggle?",
    options: {
        a: "Naphtali",
        b: "Issachar",
        c: "Reuben"
    },
    correctAnswer: "a"
},
///
{
    question8: "Which of Abraham’s sons was held for ransom in Egypt",
    options: {
        a: "Asher",
        b: "Benjamin",
        c: "Simeon"
    },
    correctAnswer: "c"
},
 ///
{
    question9: "Whose name means judge?",
    options: {
        a: "Dan",
        b: "Judah",
        c: "Zebulun"
    },
    correctAnswer: "a"
},
///
{
    question10: "Who was the eighth son?",
    options: {
        a: "Benjamin",
        b: "Levi",
        c: "Gad"
    },
    correctAnswer: "c"
},
///
{
    question11: "Who was Dan and Naphtali’s neighbor in Ezekiel’s dream?",
    options: {
        a: "Asher",
        b: "Moses",
        c: "Joseph"
    },
    correctAnswer: "a"
},
///
{
    question12: "The 'men who understood the times' were from which tribe?",
    options: {
        a: "Naphtali"
        b: "Issachar",
        c: "Aaron"
    },
    correctAnswer: "b"
},
///
{
    question13: "Whose mother in law did Jesus heal?",
    options: {
        a: "Peter",
        b: "James",
        c: "Andrew"
    },
    correctAnswer: "a"
},
///
{
    question14: "How many of the Gospels were written by Levi the tax collector?",
	options: {
        a: "2",
        b: "1",
        c: "3"
    },
    correctAnswer: "b"
},
///
{
    question15: "Was Andrew a fisherman?",
    options: {
        a: "Yes",
        b: "No"
    },
    correctAnswer: "a"
},
///
{
    question16: "There were 2 apostles named James. One’s daddy was Zebedee. The other James’ daddy was…",
    options: {
        a: "Jonah",
        b: "Alphaeus",
        c: "Theophilus"
    },
    correctAnswer: "b"
},
///
{
    question17: "If your name is John Boanerges, what’s your brother’s name?",
    options: {
        a: "Thomas",
        b: "Luke",
        c: "James"
    },
    correctAnswer: "c"
},
///
{
    question18: "Which apostle spoke to the Ethiopian official on the road to Gaza?",
    options: {
        a: "Annas",
        b: "Cleopas",
        c: "Philip"
    },
    correctAnswer: "c"
},
///
{
    question19: "There were two Simons. One was Peter. The other was from where?",
    options: {
        a: "Canaan",
        b: "Egypt",
        c: "Emmaus"
    },
    correctAnswer: "a"
},
///
{
    question20: "Judas betrayed Jesus in what garden?",
    options: {
        a: "Eden",
        b: "Olives",
        c: "Gethsemane"
    },
    correctAnswer: "c"
},
///
{
    question21: "What did ‘Unbelieving Thomas’ see and touch that made him believe?",
    options: {
        a: "Jesus’ scars",
        b: "Blood-stained clothes",
        c: "Crown of thorns"
    },
    correctAnswer: "a"
},
///
{
    question22: "There are at least 2 apostles most people have never heard of. One of them is …",
    options: {
        a: "Caiaphas",
        b: "Bartholomew",
        c: "Cornelius"
    },
    correctAnswer: "b"
},
///
{
    question23: "Was Thaddeus a middle name or a last name?",
    options: {
        a: "Last name",
        b: "Middle name",
        c: "Nickname"
    },
    correctAnswer: "a"
},
///
{
    question24: "Who wrote the Book of Revelation?",
    options: {
        a: "Mark",
        b: "John",
        c: "Paul"
    },
    correctAnswer: "b"
},
///
];


/////** GLOBAL VARIABLES *////

// qNum (question number)
// gameOver (24 numClicks, triggers "GameOver" and "thanks for playing" message)
// badgeOfHonor (when score === 20)
// shieldOfFaith (when score === 24)

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
reset.addEventListener('click', init);


/// --- functions --- ///

// to load/display the data (array method, init function?, )
// to submit answers (click submit)
// to proceed to next question (click submit)
// to update score (click submit)
// to notify players about prizes (correctAnswer += 20)
// to end game (numClicks === 24 || click reset)
// to reset game (click reset)

//// --- display, load page --- ////

init()
function init(){
let qNum = 1;
let score = 0;
let position = qNum
render();
}

function render(){
    reset.style.display = 'block';
    triviaQ.forEach(element, index) => {
        document.getElementsByClassName(index);
    }
}

// let i = 0;
// let length1 = triviaQ.length
// correctAnswer = 0;
// score = 0;

// function loadPage(index) {
//     document.getElementById("qNum").innerHTML = qNum
//     document.getElementById("score").innerHTML = score
//     document.getElementById("options").innerHTML = options
//     document.getElementById("correctAnswer").innerHTML = correctAnswer
    
//     reset.onclick = function () {
//         if(i > trivia.length - 1){
//             i = 0
//         }
//         loadPage(i);
//         i++;
//     };
// }
// loadPage();
// if playerSelect === correctAnswer
//     return score + 1


// for (let i = 0; i < trivia.length; i++){
//     return (trivia[i]);
// }
// let triviaQ = document.getElementsByClassName("qContent");


// function loadPage(qNum) {
//     const triviaQ = trivia[i];
//     qContent.innerText = triviaQ.position;

//     options.innerHTML = " ";
//  for (key in triviaQ.options){
//      const radioA = "position"+i+"_options"
//      const radioB = "position"+i+"_options"
//      const radioC = "position"+i+"_options"
//      const opText = triviaQ.options[key];
//  }

// };





    
    // const ouput [];
    
    // indQuestion.forEach((position, qNum) => {
    //     const options [];
        
    //     for (letter in position.options){
    //         options.push(
    //             `<label>
    //             <input type="radio" name="options${qNum}" value="${letter}" > ${letter} :
    //             ${position.options[letter]} 
    //             </label>`
    //             );
    //         }
            
    //     })
    // }
    
    // function handleClick(event){
        
    //     if numClicks return next question
        
        
    //     if numClicks === 24
    //     return alert "game over"
        
    //     if score === 20
    //     return alert "Congratulations, you've won the Badge of Honor!"
        
    //     if score === 24
    //     return alert "Congratulations, you've earned the Shield of Faith!"
    // init()
    
    // function init(){
    //     numClicks = new Array(24).fill(null)
    //     position = 0
    //     playerSelect = 0;
    //     correctAnswer = 0;
    //     score = 0;
    //     render();
    // }
    // function render () {
    //     button.style.display = 'none'
    
    }