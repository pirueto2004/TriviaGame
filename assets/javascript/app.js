function setBackgroundImage(myObject, imageUrl) {
   myObject.css({
                "background-image": "url(" + imageUrl + ")",
                "background-size": "cover",
                "background-position": "center",
                });
}

function startTimer(duration, display) {
    var timer = duration;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.text(' ' + seconds + ' Seconds');
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswers = 0;

$(document).ready(function(){
    var body = $("body");
    var imageUrl = 'assets/images/bg-pic.jpg';
    setBackgroundImage(body, imageUrl);
    var thirtySeconds = 30; 
    var display = $('#timeRemaining').text(' ' + thirtySeconds + ' Seconds');
    // jQuery(function ($) {
         
        startTimer(thirtySeconds, display);
    // });
});