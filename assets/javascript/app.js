
console.log("hello")
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var timeLeft = 3;
var intervalID;
var indexQandA = 0;
// var answered = fasle;
var correct;

var VolleyballTrivaGame = [{
    question: "What skill is used with two hands above the forehead and is normally used to set up a hitter to hit?",
    answer:["A Pass" , "A Set" , "At Hit" , "A Dink"],
    correct: "2",
    // image: (place image here!)
    // questions will go here
}]

function startGame() {
    console.log("the game has begun");
    $('.start-button').remove();
    correctAnswers = 0;
    incorrectAnswers = 0;
    unansweredQuestions = 0;
    loadQandA();
}

function run() {
    clearInterval(intervalId);
    intervalID = setInterval(decrement, 3000);
}

function decrement() {
    number--;
    $("#timer").html("<h2>" + timeLeft + "</h2>");

    if(number === 0) {
        stop();
        alert("TIME IS UP!!!")
        function stop() {
            clearInterval(intervalId)
        }
        run();
        
    }
}




$("timer").text("00:00");


// update counter (count down) every 1 second




// calculate for minuets and seconds

// var deadline = new timer("0:03:00").getTime();

// show the results as it counts down

// document.getElementsById("count").innerHTML = minutes + "m" + seconds + "s";

// when timer reaches 0 alert quiz taker there is no more time. also show the questions that were right and the questions that were wrong.
// if( distance < 0) {
//     clearInterval (x);
//     document.getElementById("count").innerHTML = "Times Up!!!";
// };

// show a restart button

