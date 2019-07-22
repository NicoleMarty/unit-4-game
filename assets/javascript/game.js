// When the game starts, 
$(document).ready(function() {

    var players = ["Go-go", "Purge", "Blue-ice", "Pantera"];

    for (var i = 0; i < players.length; i++) {
        var playerBtn = $("<button>");
        playerBtn.addClass("player-button player");
        playerBtn.attr("data-player", players[i]);
    }

});