// When the game starts, 
$(document).ready(function() {

    var playerChoice = ["player1", "player2", "player3", "player4"];
    console.log(playerChoice.length);

    // Pick a player and move remainder to "Your Enemies"

    if ($("#player1").on("click", function() {
            var player2Button = $('#player2').remove();
            player2Button.appendTo('#enemy1');
            var player3Button = $('#player3').remove();
            player3Button.appendTo('#enemy2');
            var player4Button = $('#player4').remove();
            player4Button.appendTo('#enemy3');

        }));

    if ($("#player2").on("click", function() {
            var player1Button = $('#player1').remove();
            player1Button.appendTo('#enemy1');
            var player3Button = $('#player3').remove();
            player3Button.appendTo('#enemy2');
            var player4Button = $('#player4').remove();
            player4Button.appendTo('#enemy3');
        }));

    if ($("#player3").on("click", function() {

            var player1Button = $('#player1').remove();
            player1Button.appendTo('#enemy1');
            var player2Button = $('#player2').remove();
            player2Button.appendTo('#enemy2');
            var player4Button = $('#player4').remove();
            player4Button.appendTo('#enemy3');
        }));

    if ($("#player4").on("click", function() {
            var player1Button = $('#player1').remove();
            player1Button.appendTo('#enemy1');
            var player2Button = $('#player2').remove();
            player2Button.appendTo('#enemy2');
            var player3Button = $('#player3').remove();
            player3Button.appendTo('#enemy3');
        }));

    // Choose an opponent
    var opponents = ["#enemy1", "#enemy2", "#enemy3"];

    if ($("#enemy1").on("click", function() {
            $(this).appendTo("#opponentChoice");

        }));

    if ($("#enemy2").on("click", function() {
            $(this).appendTo("#opponentChoice");

        }));

    if ($("#enemy3").on("click", function() {
            $(this).appendTo("#opponentChoice");

        }));


    // Attack on click events

    // Counter attack (not sure what event to use for this)


    // Fight if/then/else statements

    // if win match1, pick new opponent, start new match
    // else game over hp === 0
    // if win match2, pick new opponent, start new match
    // else game over hp === 0
    // if win match3, win game
    // else game over, hp === 0


});