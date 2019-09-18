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
            var currSelectedChar;
            var combatants = [];
            var currDefender;
            var turnCounter = 1;
            var killCount = 0;

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

                $(document).on("click", characters, function() {
                    if (currSelectedChar === characters["Go-Go"]) {
                        this.addClass("yourPlayer")
                        console.log(yourPlayer);
                    }
                })
            });