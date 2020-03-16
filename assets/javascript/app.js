
console.log("hello")

// these variables are for the timer
var timeLeft = 30;
var intervalId;

// theses variables are for the questions.
var correct = 0;
var wrong = 0;
var unanswered = 0;
var messages = ["Great Job", "That's Just Ok", "You Really Need to Do Better"];
var range;
$("#question1")
$("#question2")
$("#question3")
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;


$(".container").hide();
$("#count").hide();
$("#results").hide();

function startGame() {
    console.log("the game has begun");
    $('.btn').remove();
    // $("#restartBtn").hide();
    $(".container").show();
    $("#count").show();

    if (question1 == "A Set") {
        correct++;
        console.log(question1)

        ifelse(question1 === "A Set")
        wrong++;
    }

    if (question2 == "Libero") {
        correct++;
        console.log(question2)

        ifelse(question2 === "Libero")
        wrong++;
    }

    if (question3 == "2") {
        correct++;
        console.log(question3)

        ifelse(question3 === "2")
        wrong++;
    }


    document.getElementById("number_correct").innerHTML = "You Got " + correct + " Correct.";
    document.getElementById("number_wrong").innerHTML = "You Got " + wrong + " Wrong.";
    document.getElementById("unanswered").innerHTML = "You Didn't Answer " + unanswered + " Questions."
};

$("#startBtn").click(function () {
    startGame();

    $("#timer").text("10");

    var gameTime = setInterval(function () {
        console.log("game")
        decrement();
        if (timeLeft === 0) {
            document.getElementById("timer").innerHTML = "TIME IS UP";
            clearInterval(gameTime);
            $(".container").hide();
            $("#count").hide();
            $("#results").show();

            radio("question1");
            radio("question2");
            radio("question3");



        };
    }, 1000)


    var messages = ["Great Job", "That's Just Ok", "You Really Need to Do Better"];
    var range;

    $("#button").click(function () {
        stop("#timer");
        $("#timer").hide();
        $("#results").show();
        $("#count").hide();
        if (correct < 1) {
            range = 2;
        }
        if (correct > 0 && correct < 3) {
            range = 1;
        }
        if (correct = 3) {
            range = 0;
        }
        document.getElementById("message").innerHTML = messages[range];

        radio("question1");
        radio("question2");
        radio("question3");
        $(".container").hide();

    })

    function decrement() {
        timeLeft--;
        $("#timer").html("<h2>" + timeLeft + "</h2>");
    };

    function radio(question) {
        var input = document.getElementsByName(question);

        for (i = 0; i < input.length; i++) {
            if (input[i].checked)
                return "input:" + input[i].value;
            console.log("input: " + input[i].value)


        };
    };

});

