$(document).ready(function () {
                
    // Hiding everything but start button
    $("#main-container").hide();
    $(".card").hide();
    
    // Adding functionality to start button
    $("#start-button").on("click", function() {
        $("#main-container").show();
        $("#start-container").hide();
        startTime();
    });

    // Time countdown 
    var time = 15;
    var intervalId;
    function countdown() {
        time--;
        $(".time").html("Time Remaining: " + time);
        if (time === 0) {
            clearInterval(intervalId);
            gradeAnswers();
            displayScore();
            $(".card").show();
            $("#main-container").hide();
            $(".time").hide();
        }
    };
    function startTime() {
        clearInterval(intervalId);
        intervalId = setInterval(countdown, 1000);
    };
    
    // Calculates Score
    var correctCount = 0;
    var incorrectCount = 0;
    var unansweredCount = 0;
    var answers = [];
    
    function gradeAnswers() {
        for (var i = 1; i < 5; i++) {
            var val = $('input:radio[name="q'+i+'"]:checked').val(); 
            answers.push(val);
        }
        console.log(answers);
        
        // Grading question 1
        if (answers[0] === "7") {
            correctCount++;
        }
        else if (answers[0] === undefined) {
            unansweredCount++;
        }
        else if (answers[0] !== "7") {
            incorrectCount++;
        };

        //Grading question 2
        if (answers[1] === "3") {
            correctCount++;
        }
        else if (answers[1] === undefined) {
            unansweredCount++;
        }
        else if (answers[1] !== "3") {
            incorrectCount++;
        };
        
        //Grading question 3
        if (answers[2] === "29") {
            correctCount++;
        }
        else if (answers[2] === undefined) {
            unansweredCount++;
        }
        else if (answers[2] !== "29") {
            incorrectCount++;
        };
        
        //Grading question 4
        if (answers[3] === "191") {
            correctCount++;
        }
        else if (answers[3] === undefined) {
            unansweredCount++;
        }
        else if (answers[3] !== "191") {
            incorrectCount++;
        };
    }

    // Submit button functionality
    //clearing the score before and after to make sure scores don't continue to add up
    $("#submit").on("click", function() {
        correctCount = 0;
        incorrectCount = 0;
        unansweredCount = 0;
        answers = [];
        gradeAnswers();
        displayScore();
        $(".card").show();
        $("#main-container").hide();
        $(".time").hide();
        correctCount = 0;
        incorrectCount = 0;
        unansweredCount = 0;
        answers = [];

    });

    // Displaying score
    function displayScore() {
        $(".score").html("Correct Answers: " + correctCount + "<br>");
        $(".score").append("Incorrect Answers: " + incorrectCount + "<br>");
        $(".score").append("Unanswered: " + unansweredCount);
    }
    
    


});