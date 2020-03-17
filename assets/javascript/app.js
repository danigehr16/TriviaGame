
console.log("hello")

// these variables are for the timer
var timeLeft = 10;
var intervalId;

// theses variables are for the questions.
var correct = 0;
var wrong = 0;
var unanswered = 0;
var messages = ["Great Job", "That's Just Ok", "You Really Need to Do Better"];
var range;
// $("#question1")
// $("#question2")
// $("#question3")


$(".container").hide();
$("#count").hide();
$("#results").hide();

function startGame() {
    console.log("the game has begun");
    $('.btn').remove();
    // $("#restartBtn").hide();
    $(".container").show();
    $("#count").show()

    
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
            var question1 = document.quiz.question1.value;
            var question2 = document.quiz.question2.value;
            var question3 = document.quiz.question3.value;

            // debugger
            if (question1 === "A Set") {
                correct++;
            } else if (question1 === "A Set") {
                wrong++;
            }

            if (question2 === "Libero") {
                correct++;
            } else if (question2 === "Libero") {
                wrong++;
            }

            if (question3 === "2") {
                correct++;
            } else if (question3 === "2") {
                wrong++;
            }
            console.log(correct)

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


        var question1 = document.quiz.question1.value;
        var question2 = document.quiz.question2.value;
        var question3 = document.quiz.question3.value;

        if (question1 === "A Set") {
            correct++;
        } else if (question1 === "A Set") {
            wrong++;
        }

        if (question2 === "Libero") {
            correct++;
        } else if (question2 === "Libero") {
            wrong++;
        }

        if (question3 === "2") {
            correct++;
        } else if (question3 === "2") {
            wrong++;
        }

        if (correct < 1) {
            range = 2;
        }

        if (correct > 0 && correct < 3) {
            range = 1;
        }

        if (correct = 3) {
            range = 0;
        }
        

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
                return (length)



        };
    };

    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "You Got " + correct + " Correct.";
    document.getElementById("number_wrong").innerHTML = "You Got " + wrong + " Wrong.";
    document.getElementById("unanswered").innerHTML = "You Didn't Answer " + unanswered + " Questions." 
});

