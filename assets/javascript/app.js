// create a display for the Timer html

console.log("hello")

var timer


// update counter (count down) every 1 second

var x = setInterval (function() {
    var minutes = Math.floor((timer % ( 1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timer % (1000 *60)) / 1000);
})

// calculate for minuets and seconds

// show the results as it counts down

document.getElementsById("count").innerHTML = minutes + "m" + seconds + "s";

// when timer reaches 0 alert quiz taker there is no more time. also show the questions that were right and the questions that were wrong.
if( distance < 0) {
    clearInterval (x);
    document.getElementById("count").innerHTML = "Times Up!!!";
};

// show a restart button

