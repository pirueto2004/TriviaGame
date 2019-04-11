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




function setBackgroundImage(myObject, imageUrl) {
   myObject.css({
                "background-image": "url(" + imageUrl + ")",
                 "background-position": "center"
                });
}


function startTimer(duration, display) {
    var timer = duration;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.text(' ' + seconds + ' Seconds');
        timer--;
        if (timer < 0) {
            timer = duration;
            // $("#messages").html('<div class="alert alert-info"><h4>Your Time is Up!</h4></div>');

            $("#image").html('<div><img class="img-fluid" src="assets/images/time-is-up.gif" ></div>');
            showAnswer();
            showButtons();
            
        }
    }, 1000);
}


function showQuestion() { 
    $("#qNum").text(id);
    $("#question").text(question);
}

function displayOptions() {
    $('#options').empty();
    // $('#options').append('<option value="0">--Select One Answer--</option>');
    $.each(options, function(key, val) {
        $("#options").append('<option value="'+ key +'">'+ val +'</option>');
    }); 
}


function selectOptions() {
    $('#options').change(function() {
        var selectedOption = $(this).val();
        if (selectedOption === answer) {
            correctAnswers++;
            $("#messages").html('<div class="alert alert-info"><h4>You Got It Right! Congrats!</h4></div>');
        }
        else {
            incorrectAnswers++;
            $("#messages").html('<div class="alert alert-danger"><h4>You Got It Wrong!</h4></div>');
            showAnswer();
            
        }
    });
}

function showAnswer() {
    $("#answer").html('<h4 class="alert alert-info border border-">Correct Answer: ' + correctAnswer+ '</h4>');
}

function showButtons() {
    //Give options to Play Again or Reset game  
    $('#playAgain').html('<button type="button" class="btn btn-warning btn-sm">' + ' CONTINUE ' + '</button>');
    $('#resetGame').html('<button type="button" class="btn btn-danger btn-sm">' + ' EXIT GAME ' + '</button>');
    $('#playAgain').click(function(){
    //   newGame();
    });
    $('#resetGame').click(function(){
    //   initializeGame();
    });   
  }

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    var timeLeft = 10;

    var randomQuestion = Math.floor(Math.random() * myQuestions.length);
    var optionsLength = (myQuestions[randomQuestion]).options.length;

    var id =  myQuestions[randomQuestion].id;
    var question =  myQuestions[randomQuestion].question;
    var options = myQuestions[randomQuestion].options;
    var answer = myQuestions[randomQuestion].answer;
    var correctAnswer = options[answer];
  
  
      
$(document).ready(function(){
    
    
    var body = $("body");
    var bg_picUrl = 'assets/images/bg-pic.jpg';
        setBackgroundImage(body, bg_picUrl);
            

    $("#startButton").on('click', function(){
        $(this).hide();
        $('#startPic').hide();
        window.location.href='start.html';
     
    });
    
    showQuestion();
    displayOptions();
    selectOptions();

    
    var display = $('#timeRemaining').text(' ' + timeLeft + ' Seconds');        
        startTimer(timeLeft, display);
    
    
});