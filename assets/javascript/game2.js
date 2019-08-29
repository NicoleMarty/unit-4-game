$(document).ready(function() {
    var characters = {
        "Go-Go": {
            name: "Go-Go",
            health: 120,
            attack: 8,
            imageUrl: "assets/images/go-go-crazy.jpg",
            enemyAttackBack: 15
        },
        "Purge": {
            name: "Purge",
            health: 100,
            attack: 14,
            imageUrl: "assets/images/purge-dude.jpg",
            enemyAttackBack: 5
        },
        "Blue Ice": {
            name: "Blue Ice",
            health: 150,
            attack: 8,
            imageUrl: "assets/images/blue-ice.jpg",
            enemyAttackBack: 5
        },
        "Pantera": {
            name: "Pantera",
            health: 180,
            attack: 7,
            imageUrl: "assets/images/robo-panther.jpg",
            enemyAttackBack: 25
        }
    };

    var currSelectedCharacter;
    var combatants = [];
    var currDefender;
    var turnCounter = 1;
    var killCount = 0;

    // FUNCTIONS ================================================================================================
    // This function will render a character card to the page.
    // The character rendered and the area they are rendered to.
    var renderOne = function(character, renderArea, charStatus) {
        var charDiv = $("<div class='character' data-name='" + (character.name) + "'>");
        var charName = $("<div class='character-name'>").text(character.name);
        var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
        var charHealth = $("<div class='character-health'>").text(character.health);
        charDiv.append(charName).append(charImage).append(charHealth)
        $(renderArea).append(charDiv);

        if (charStatus === "enemy") {
            combatants = character;
            $(charDiv).addClass("enemy");


        } else if (charStatus === "defender") {
            currDefender = characters[name];
            $(charDiv).addClass("target-enemy");


        }
    };

    var renderCharacters = function(charObj, areaRender) {
        if (areaRender === "#characters-section") {
            $(areaRender).empty();
            for (var key in charObj) {
                if (charObj.hasOwnProperty(key)) {
                    renderOne(charObj[key], areaRender, "");
                }
            }
        }

        // if true render selected player to this area "selected-character"
        if (areaRender === "#selected-character") {
            renderOne(charObj, areaRender, "selected-character");
        }

        // if true render selected player to this availble to attack
        if (areaRender === "#available-to-attack-section") {

            // loop through characters and call renderOne function
            for (var i = 0; i < 3; i++) {
                renderOne(charObj[i], areaRender, "enemy");
            };

            $(document).on("click", ".enemy", function() {
                var name = ($(this).attr("data-name"));
                console.log(name)
                    // If no defender, clicked enemy becomes defender
                if ($("#defender").children(this).length === 0) {
                    renderCharacters(name, "#defender");
                    // hide enemies to attack area
                    $(areaRender).hide(this);


                }
            });
        }


        // If defender === true then render the selected enemy here
        if (areaRender === "#defender") {
            $(areaRender).empty();
            for (var i = 0; i < 2; i++) {
                if (combatants[i].name === charObj) {
                    renderOne(combatants[i], areaRender, "defender");
                    var name = ($(this).attr("data-name"));
                }
            }
        }


        if (areaRender === "playerDamage") {
            $("#defender").empty();
            renderOne(charObj, "#defender", "defender");
        }
        if (areaRender === "enemyDamage") {
            $("#selected-character").empty();
            renderOne(charObj, "#selected-character", "selected-character");
        }
        if (areaRender === "enemyDefeated") {
            $("#defender").empty();

        }
    };

    // Render all characters to the page when the game starts!
    renderCharacters(characters, "#characters-section");

    $(document).on("click", ".character", function() {

        // Saving clicked character's name.
        var name = $(this).attr("data-name");
        console.log(name);

        // If player has not yet been chosen...
        if (!currSelectedCharacter) {
            var currSelectedCharacter = characters[name];
            //for (var key in characters) {
            //if (key !== name) {
            //combatants.push(characters[key]);
            //}
            //}
        }
        // Hide character select div
        $("#characters-section").hide();

        // Render selected character and combatants

        renderCharacters(currSelectedCharacter, "#selected-character");
        renderCharacters(combatants, "#available-to-attack-section");
        renderCharacters(currDefender, "#defender");
    });

    //messages
    var renderMessage = function(message) {
        var gamemessageSet = $("#game-message");
        var newMessage = $("<div>").text(message);
        gamemessageSet.append(newMessage);

        if (message === "clearMessage") {
            gamemessageSet.text("");
        }

    }






    // attack on click 
    $("#attack-button").on("click", function() {
        if ($("#defender").children().length !== 0) {
            (currDefender.health -= (currSelectedCharacter.attack * turnCounter));
            if (currDefender.health > 0) {
                renderCharacters(currDefender, "playerDamage");
                //reduce health by opponent's attack pt value
                currSelectedCharacter.health -= currDefender.enemyAttackBack;
                //render player's updated character card
                renderCharacters(currSelectedCharacter, "enemyDamage");
            }
        } else {
            renderCharacters(currDefender, "enemyDefeated");
            killCount++;

            if (killCount >= 3) {

            }
        }
        turnCounter++;
    });



});