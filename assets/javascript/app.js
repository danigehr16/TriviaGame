
console.log("hello")

// these variables are for the questions
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var indexQandA = 0;

// these variables are for the timer

var intervalID;

// var minuets = 0
// var seconds = 0
var timeLeft = 10;

var VolleyballTrivaGame = [{
    question: "What skill is used with two hands above the forehead and is normally used to set up a hitter to hit?",
    answer: ["A Pass", "A Set", "At Hit", "A Dink"],
    correct: "1",
    // image: (place image here!)
    // questions will go here.. put them in html to hard code them... 
}]

function startGame() {
    console.log("the game has begun");
    $('.btn').remove();
    $("#restartBtn").hide;
    // correctAnswers = 0;
    // incorrectAnswers = 0;
    // unansweredQuestions = 0;
   

};

    $("#startBtn").click(function () {
        startGame();

        $("#timer").text("00:00");

        var gameTime = setInterval(function () {
            console.log("game")
            decrement();
            if (timeLeft === 0) {
                stop();
                alert("TIME IS UP")
                function stop() {
                    clearInterval(setInterval)
                    document.getElementById("timer").innerHTML = "TIME IS UP!!";
                    run();
                }
                
            };
        }, 1000)
        
        console.log(timeLeft)

        function run() {
            clearInterval(intervalId);
            intervalID = setInterval(decrement, 1000);
            
        };

        function decrement() {
            timeLeft--;
            $("#timer").html("<h2>" + timeLeft + "</h2>");
        };


        
        //   when timer reaches 0 alert quiz taker there is no more time. also show the questions that were right and the questions that were wrong.
        // if (distance < 0) {
        //     clearInterval(x);
        //     document.getElementById(".container").innerHTML = "Times Up!!!";
        // };

    });













    // var deadline = new timer("0:03:00").getTime();

    // show the results as it counts down

    // document.getElementsById("count").innerHTML = minutes + "m" + seconds + "s"
