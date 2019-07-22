// When the game starts, 
$(document).ready(function() {


    // Pick a player and move remainder to "Your Enemies"
    if ($("#player1>button").on("click", function() {
            $(this).toggleClass("player-button");
            var player2Button = $('#player2>button').detach();
            player2Button.appendTo('#enemies');
            var player3Button = $('#player3>button').detach();
            player3Button.appendTo('#enemies');
            var player4Button = $('#player4>button').detach();
            player4Button.appendTo('#enemies');

        }));

    else if ($("#player2>button").on("click", function() {
            $(this).toggleClass("player-button");
            var player1Button = $('#player1>button').detach();
            player1Button.appendTo('#enemies');
            var player3Button = $('#player3>button').detach();
            player3Button.appendTo('#enemies');
            var player4Button = $('#player4>button').detach();
            player4Button.appendTo('#enemies');
        }));

    else if ($("#player3>button").on("click", function() {
            $(this).toggleClass("player-button");
            var player1Button = $('#player1>button').detach();
            player1Button.appendTo('#enemies');
            var player2Button = $('#player2>button').detach();
            player2Button.appendTo('#enemies');
            var player4Button = $('#player4>button').detach();
            player4Button.appendTo('#enemies');
        }));

    else($("#player4>button").on("click", function() {
        $(this).toggleClass("player-button");
        var player1Button = $('#player1>button').detach();
        player1Button.appendTo('#enemies');
        var player2Button = $('#player2>button').detach();
        player2Button.appendTo('#enemies');
        var player3Button = $('#player3>button').detach();
        player3Button.appendTo('#enemies');
    }));



});
e