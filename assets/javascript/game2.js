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
        },
    };
    console.log(characters);
    // This function will render a character card to the page.
    // The character rendered and the area they are rendered to.
    var renderOne = function(character, renderArea) {
        var charDiv = $("<div class='character' data-name='" + character.name + "'>");
        var charName = $("<div class='character-name'>").text(character.name);
        var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
        var charHealth = $("<div class='character-health'>").text(character.health);
        charDiv.append(charName).append(charImage).append(charHealth);
        $(renderArea).append(charDiv);

    }

    var renderCharacters = function(charObj, areaRender) {
            if (areaRender === "#characters-section") {
                $(areaRender).empty();
                for (var key in charObj) {
                    if (charObj.hasOwnProperty(key)) {
                        renderOne(charObj[key], areaRender);
                    }

                }
            }

        }
        // Render all characters to the page when the game starts!
    renderCharacters(characters, "#characters-section");
});