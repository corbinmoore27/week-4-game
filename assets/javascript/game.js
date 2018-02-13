var randNum;
var userNum = 0;
var wins = 0;
var losses = 0;
var numberOpts = [];
var myNum;

$(document).ready(function () {
    $("#lossesDisp").text("Losses: " + losses);
    $("#winsDisp").text("Wins: " + wins);
    $("#numDisplay2").text(userNum);

    function winningNum() {
        randNum = Math.floor((Math.random() * 120) + 19);
        $("#numDisplay1").text(randNum);
    };    
    function createNum() {
        myNum = Math.floor((Math.random() * 12) + 1);
    }
        for (let i = 0; i < 4; i++) {
            createNum();
            numberOpts.push(myNum)
            // if (numberOpts.includes(myNum)) {
            //     createNum();
            console.log(numberOpts);
        //    } 
        }
    $("#image1").attr("data-crystalvalue", numberOpts[0]);
    $("#image2").attr("data-crystalvalue", numberOpts[1]);
    $("#image3").attr("data-crystalvalue", numberOpts[2]);
    $("#image4").attr("data-crystalvalue", numberOpts[3]);


    $(".gemsImg").on("click", function () {

        var gemValue = $(this).attr("data-crystalvalue");
        gemValue = parseInt(gemValue, 10);
        console.log(gemValue);
        userNum += gemValue;
        $("#numDisplay2").text(userNum);

        if (userNum === randNum) {
            $("#reset").text("YOU WIN!");
            wins++;
            $("#winsDisp").text("Wins: " + wins);
            reset();
        }

        else if (userNum >= randNum) {
            $("#reset").text("YOU LOSE!");
            losses++;
            $("#lossesDisp").text("Losses: " + losses);
            reset();
        }
    function reset() {
        numberOpts = [];
        userNum = 0;
        $("#numDisplay2").text(userNum);
        winningNum();
    }

    });

    
    winningNum ();
});