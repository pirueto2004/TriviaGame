const myQuestions = [
        { id: 1,
        question: 'Who invented the telephone?',
        options: {
            a: "Albert Einstein",
            b: "Graham Bell",
            c: "Antonio Meucci",
            d: "Elisha Gray"
            },
        answer: 'b'
        },

        { id: 2,
        question: 'What temperature does water boil at?',
        options: {
            a: "100 F",
            b: "40 F",
            c: "32 F",
            d: "120 F"
            },
        answer: 'c'
        },
        
        {id: 3,
        question: 'Who discovered penicillin?',
        options: {
            a: "Alexander Fleming",
            b: "Louis Pasteur",
            c: "Howard Florey",
            d: "Robert Koch"
            },
        answer: 'a'
        },
        
        {id: 4,
        question: 'Who wrote Julius Caesar, Macbeth and Hamlet?',
        options: {
            a: "Oscar Wilde",
            b: "Charles Dickens",
            c: "William Wordsworth",
            d: "William Shakespeare"
            },
        answer: 'd'
        },

        {id: 5,
        question: 'Which is the only adult mammal that can’t jump?',
        options: {
            a: "Hippos",
            b: "Giraff",
            c: "Elephant",
            d: "Platypus"
            },
        answer: 'c'
        },

        {id: 6,
            question: 'Who is the strongest avenger in the Marvel Cinematic Universe?',
            options: {
                a: "Hulk",
                b: "Scarlet Witch",
                c: "Thor",
                d: "Iron man"
                },
            answer: 'c'
            }


];

//Declaration of all of the game variables 
var isAnswered = false;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var timeLeft = 0;
var interval;
var display;
var selected = false;


//Select the random question from the array
var randomQuestion;
var optionsLength;

var id;
var question;
var options;
var answer;
var correctAnswer;


function setBackgroundImage(myObject, imageUrl) {
   myObject.css({
                "background-image": "url(" + imageUrl + ")",
                 "background-position": "center"
                });
}


function setTimer(duration, display) {
    var counter = duration;
    var timerId = setInterval(function(){
        //Seconds are calculated as the module 60 of the current total seconds counter.
        seconds = parseInt(counter % 60, 10);
        // seconds = seconds < 10 ? "0" + seconds : seconds;
        seconds = seconds < 10 ? + seconds : seconds;
        display.text(' ' + seconds + ' Seconds');
        counter--;
        if (counter < 0 ) {
            selected = false;
            counter = duration;
            // $("#messages").html('<div class="alert alert-info"><h4>Your Time is Up!</h4></div>');
            stopTimer(timerId);
            isAnswered = false;
            unanswered++;
            $("#image").html('<div><img class="img-fluid" src="assets/images/time-is-up.gif" ></div>');   
            $("#unanswered").html(unanswered);
            showAnswer();
            showButtons();
            
        }
    }, 1000);
    return timerId;
}

function stopTimer(interval) {
    clearInterval(interval);
  }

  


function showQuestion() { 
    $("#qNum").text(id);
    $("#question").text(question);
}

function displayOptions() {
    $('#mySelect').empty();
    // $('#options').append('<option value="0">--Select One Answer--</option>');
    $.each(options, function(key, val) {
        $("#mySelect").append('<option value="'+ key +'">'+ val +'</option>');
    }); 
}




function showAnswer() {
    var ans = '<span class="h3 ml-3">' + correctAnswer + '</span>';
    $("#answer").html('<h6 class="alert alert-info border border-info">Correct Answer: ' + ans + '</h6>');
}

function showButtons() {
    //Give options to Play Again or Reset game  
    $('#playAgain').html('<button type="button" class="btn btn-warning btn-sm">' + ' CONTINUE ' + '</button>');
    $('#resetGame').html('<button type="button" class="btn btn-danger btn-sm">' + ' NEW GAME ' + '</button>');
   
  }

     
  
    function startQuiz() {
        
        //Initialize all variables
        isAnswered = false;
        correctAnswers = 0;
        incorrectAnswers = 0;
        unanswered = 0;
        timeLeft = 10; 

        $("#image").empty();
        $("#message").empty();
        $("#answer").empty();
        

        //Build start page 
        showQuestion();
        displayOptions();
        
        display = $('#timeRemaining').text(' ' + timeLeft + ' Seconds');
        interval = setTimer(timeLeft, display);
                
       
      }

    function continueQuiz() {
        timeLeft = 10; 
        
        $("#image").empty();
        $("#message").empty();
        $("#answer").empty();
        

        //Build start page 
        randomQuestion = Math.floor(Math.random() * myQuestions.length);
    optionsLength = (myQuestions[randomQuestion]).options.length;

    id =  myQuestions[randomQuestion].id;
    question =  myQuestions[randomQuestion].question;
    options = myQuestions[randomQuestion].options;
    answer = myQuestions[randomQuestion].answer;
    correctAnswer = options[answer];
        showQuestion();
        displayOptions();
        
        display = $('#timeRemaining').text(' ' + timeLeft + ' Seconds');
        interval = setTimer(timeLeft, display);
    }

      
$(document).ready(function(){
        
    var body = $("body");
    var bg_picUrl = 'assets/images/bg-pic.jpg';
        setBackgroundImage(body, bg_picUrl);
         

    $("#startButton").on('click', function(){
        $(this).hide();
        $('#startPic').hide();
        window.location.href='start.html';
     
    });

    $('#playAgain').on('click', function(){
        $('button').hide();
        continueQuiz();
    });
    $('#resetGame').on('click', function(){
        window.location.href='index.html';  
    }); 
   
    randomQuestion = Math.floor(Math.random() * myQuestions.length);
    optionsLength = (myQuestions[randomQuestion]).options.length;

    id =  myQuestions[randomQuestion].id;
    question =  myQuestions[randomQuestion].question;
    options = myQuestions[randomQuestion].options;
    answer = myQuestions[randomQuestion].answer;
    correctAnswer = options[answer];

   startQuiz();

   $('#mySelect').change(function() {
    selected = true;
    var selectedOption = $(this).val();
    
    if (selectedOption === answer) {
        isAnswered = true;
        answered++;
        correctAnswers++;
        stopTimer(interval);
        $("#image").html('<div class="alert alert-info"><h4>You Got It Right! Congrats!</h4></div>'); 
        $("#answered").html(answered);
        $("#correctAnswers").html(correctAnswers);
        showButtons();
                          
    }
    else if (selectedOption !== answer) {
        isAnswered = true;
        answered++;
        incorrectAnswers++;
        stopTimer(interval);
        $("#image").html('<div class="alert alert-danger"><h4>You Got It Wrong!</h4></div>');
        $("#answered").html(answered);
        $("#incorrectAnswers").html(incorrectAnswers);
        showAnswer();
        showButtons();  
    }
    else {
        selected = false;
    }
       
});
      
});