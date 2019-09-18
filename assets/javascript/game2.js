$(document).ready();

function Character(name, health, attack, imageUrl, enemyAttackBack) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.imageUrl = imageUrl;
    this.enemyAttackBack = enemyAttackBack;

    this.printStats = function() {
        console.log("Name: " + this.name, "\nHealth: " + this.health, "\nAttack: " + this.attack, "\nImageUrl: " + this.imageUrl, "\nEnemyAttackBack: " + this.enemyAttackBack);
    }
}

// creates unique characters using the "character" constructor
var goGo = new Character("Go-Go", 120, 8, "assets/images/go-go-crazy.jpg", 15);
var blueIce = new Character("Blue Ice", 150, 8, "assets/images/blue-ice.jpg", 5);
var purge = new Character("Purge", 100, 14, "assets/images/purge-dude.jpg", 5);
var pantera = new Character("Pantera", 180, 7, "assets/images/robo-panther.jpg", 25);

goGo.printStats();
blueIce.printStats();
purge.printStats();
pantera.printStats();