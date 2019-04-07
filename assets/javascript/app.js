var questionsArray = [
    { id: 1,
    text: 'Who invented the telephone?',
    answer: 'Graham Bell',
    answerSet: ["A. Einstein","Graham Bell","Antonio Meucci","Elisha Gray"]},

    { id: 2,
    text: 'What temperature does water boil at?',
    answer: '32 F',
    answerSet: ["100 F","40 F","32 F","120 F"]},

    {id: 3,
    text: 'Who discovered penicillin?',
    answer: 'Alexander Fleming',
    answerSet: ["Alexander Fleming","Louis Pasteur","Howard Florey","Robert Koch"]},

    {id: 4,
    text: 'Who wrote Julius Caesar, Macbeth and Hamlet?',
    answer: 'William Shakespeare',
    answerSet: ["Oscar Wilde","Charles Dickens","William Wordsworth","William Shakespeare"]},

    {id: 5,
    text: 'Which is the only mammal that can’t jump?',
    answer: 'Adult Elephant',
    answerSet: ["Hippos","Giraff","Adult Elephant","Platypus"]}
];

var answer_Set = questionsArray.map(x => ({answerSet: x.answerSet[0], answerSet: x.answerSet[1], answerSet: x.answerSet[2], answerSet: x.answerSet[3]}));

var randomQuestion = Math.floor(Math.random() * questionsArray.length);

function setBackgroundImage(myObject, imageUrl) {
   myObject.css({
                "background-image": "url(" + imageUrl + ")",
                // "background-size": "cover",
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
    var bg_picUrl = 'assets/images/bg-pic.jpg';
        setBackgroundImage(body, bg_picUrl);

    $("#startButton").on('click', function(){
        $(this).hide();
        $('#startPic').hide();
        window.location.href='start.html';
     
    });
    
    $("#qNum").text(questionsArray[randomQuestion].id);
    $("#question").text(questionsArray[randomQuestion].text);

    var arrayLength = (questionsArray[randomQuestion]).answerSet.length;
    var option;
    for (var i = 0; i < arrayLength; i++) {
        option = $("#"+ i);
        option.text(questionsArray[randomQuestion].answerSet[i]);
    }

    var timeLimit = 30; 
    var display = $('#timeRemaining').text(' ' + timeLimit + ' Seconds');        
        startTimer(timeLimit, display);
});