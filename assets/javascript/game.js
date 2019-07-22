// When the game starts, 
$(document).ready(function() {

    if ($("#player1>button").on("click", function() {
            $(this).toggleClass("player-button");
            var player2Button = $('#player2>button').detach();
            player2Button.appendTo('#enemies');
            var player3Button = $('#player3>button').detach();
            player3Button.appendTo('#enemies');
            var player4Button = $('#player4>button').detach();
            player4Button.appendTo('#enemies');
        }));

    $("#player2>button").on("click", function() { $(this).toggleClass("player-button"); });
    $("#player3>button").on("click", function() { $(this).toggleClass("player-button"); });
    $("#player4>button").on("click", function() { $(this).toggleClass("player-button"); });



});