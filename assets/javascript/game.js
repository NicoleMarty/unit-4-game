// When the game starts, 
$(document).ready(function() {

    var playerChoice = ["player1", "player2", "player3", "player4"];

    // Pick a player and move remainder to "Your Enemies"

    if ($("#player1>button").on("click", function() {
            $(this).toggleClass("player-button");
            var player2Button = $('#player2>button').remove();
            player2Button.appendTo('#enemies');
            var player3Button = $('#player3>button').remove();
            player3Button.appendTo('#enemies');
            var player4Button = $('#player4>button').remove();
            player4Button.appendTo('#enemies');

        }));

    if ($("#player2>button").on("click", function() {
            $(this).toggleClass("player-button");
            var player1Button = $('#player1>button').remove();
            player1Button.appendTo('#enemies');
            var player3Button = $('#player3>button').remove();
            player3Button.appendTo('#enemies');
            var player4Button = $('#player4>button').remove();
            player4Button.appendTo('#enemies');
        }));

    if ($("#player3>button").on("click", function() {
            $(this).toggleClass("player-button");
            var player1Button = $('#player1>button').remove();
            player1Button.appendTo('#enemies');
            var player2Button = $('#player2>button').remove();
            player2Button.appendTo('#enemies');
            var player4Button = $('#player4>button').remove();
            player4Button.appendTo('#enemies');
        }));

    if ($("#player4>button").on("click", function() {
            $(this).toggleClass("player-button");
            var player1Button = $('#player1>button').remove();
            player1Button.appendTo('#enemies');
            var player2Button = $('#player2>button').remove();
            player2Button.appendTo('#enemies');
            var player3Button = $('#player3>button').remove();
            player3Button.appendTo('#enemies');
        }));







});