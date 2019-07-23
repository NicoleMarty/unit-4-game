// When the game starts, 
$(document).ready(function() {

            var playerChoice = ["player1", "player2", "player3", "player4"];

            // Pick a player and move remainder to "Your Enemies"

            if ($("#player1>button").on("click", function() {
                    $(this).toggleClass("player-button");
                    var player2Button = $('#player2>button').remove();
                    player2Button.appendTo('#opponent1');
                    var player3Button = $('#player3>button').remove();
                    player3Button.appendTo('#opponent2');
                    var player4Button = $('#player4>button').remove();
                    player4Button.appendTo('#opponent3');

                }));

            if ($("#player2>button").on("click", function() {
                    $(this).toggleClass("player-button");
                    var player1Button = $('#player1>button').remove();
                    player1Button.appendTo('#opponent1');
                    var player3Button = $('#player3>button').remove();
                    player3Button.appendTo('#opponent2');
                    var player4Button = $('#player4>button').remove();
                    player4Button.appendTo('#opponent3');
                }));

            if ($("#player3>button").on("click", function() {
                    $(this).toggleClass("player-button");
                    var player1Button = $('#player1>button').remove();
                    player1Button.appendTo('#opponent1');
                    var player2Button = $('#player2>button').remove();
                    player2Button.appendTo('#opponent2');
                    var player4Button = $('#player4>button').remove();
                    player4Button.appendTo('#opponent3');
                }));

            if ($("#player4>button").on("click", function() {
                    $(this).toggleClass("player-button");
                    var player1Button = $('#player1>button').remove();
                    player1Button.appendTo('#opponent1');
                    var player2Button = $('#player2>button').remove();
                    player2Button.appendTo('#opponent2');
                    var player3Button = $('#player3>button').remove();
                    player3Button.appendTo('#opponent3');
                }));

            // Choose an opponent
            var opponentChoice = ["#opponent1", "#opponent2", "#opponent3"];

            if ($("#opponent1>button").on("click", function() {
                    $(this).toggleClass("opponent-button");
                    var opponent1Button = $('#opponent1>button').remove();
                    opponent1Button.appendTo('.currentOpponent');

                }));

            if ($("#opponent2>button").on("click", function() {
                    $(this).toggleClass("opponent-button");
                    var opponent2Button = $('#opponent2>button').remove();
                    opponent2Button.appendTo('.currentOpponent');

                }));

            if ($("#opponent3>button").on("click", function() {
                    $(this).toggleClass("opponent-button");
                    var opponent3Button = $('#opponent3>button').remove();
                    opponent3Button.appendTo('.currentOpponent');

                }));

            // Attack on click events

            $("#attack").on("click", function() {

                }

                // Counter attack (not sure what event to use for this)


                // Fight if/then/else statements

                // if win match1, pick new opponent, start new match
                // else game over hp === 0
                // if win match2, pick new opponent, start new match
                // else game over hp === 0
                // if win match3, win game
                // else game over, hp === 0








            });