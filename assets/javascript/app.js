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


function setTimer(duration, display) {
    var counter = duration;
    var timerId = setInterval(function(){
        seconds = parseInt(counter % 60, 10);
        // seconds = seconds < 10 ? "0" + seconds : seconds;
        seconds = seconds < 10 ? + seconds : seconds;
        display.text(' ' + seconds + ' Seconds');
        counter--;
        if (counter < 0) {
            counter = duration;
            // $("#messages").html('<div class="alert alert-info"><h4>Your Time is Up!</h4></div>');
            clearInterval(timerId);
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
            isAnswered = true;
            correctAnswers++;
            $("#messages").html('<div class="alert alert-info"><h4>You Got It Right! Congrats!</h4></div>');
            
           
        }
        else if (selectedOption !== answer){
            isAnswered = true;
            incorrectAnswers++;
            $("#messages").html('<div class="alert alert-danger"><h4>You Got It Wrong!</h4></div>');
            showAnswer(); 
            
            
            
        }
        else {
            isAnswered = false;
            unanswered++;
            // timeLeft = 0;
            $("#image").html('<div><img class="img-fluid" src="assets/images/time-is-up.gif" ></div>');
            // setTimer(timeLeft, display);
            
            
            
        }
        
    });
}

function showAnswer() {
    var ans = '<span class="h3 ml-3">' + correctAnswer + '</span>';
    $("#answer").html('<h6 class="alert alert-info border border-info">Correct Answer: ' + ans + '</h6>');
}

function showButtons() {
    //Give options to Play Again or Reset game  
    $('#playAgain').html('<button type="button" class="btn btn-warning btn-sm">' + ' CONTINUE ' + '</button>');
    $('#resetGame').html('<button type="button" class="btn btn-danger btn-sm">' + ' EXIT GAME ' + '</button>');
    $('#playAgain').on('click', function(){
    //   newGame();
    });
    $('#resetGame').on('click', function(){
        window.location.href='start.html';
    }); 
   
  }

  function showResults() {
    $("#results").empty();
    $("#answered").text();
    $("#unanswered").text();
    $("#correctAns").text();
    $("#incorrectAns").text();
    
  }

  
    var isAnswered = false;
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
  
    function startQuiz() {
        isAnswered = false;
        correctAnswers = 0;
        incorrectAnswers = 0;
        unanswered = 0;
        timeLeft = 10; 
        
    
        showQuestion();
        displayOptions();
        selectOptions(); 
        var display = $('#timeRemaining').text(' ' + timeLeft + ' Seconds');        
        setTimer(timeLeft, display);
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
    
   startQuiz();
    
    
});