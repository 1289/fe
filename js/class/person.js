'use strict';

// abstract Person class
var Person = function(name) {
    this.name = name;
    var gender = 1;//male
    var HP = 0;
    var EP = 0;
    var MOVEMENT = 0;
    var LEVEL = 0;
    var MAX_LEVEL = 20;
    var STR = 0; // adds to physical damage
    var MAG = 0; // adds to magic damage
    var SKI = 0; // adds to critical hit and accuracy
    var SPD = 0; // related to times you can acttack
    var LCK = 0; // chance of commit and avoids cirtical hit
    var DEF = 0; // adds to defense
    var RES = 0; // adds to magic defense
};

Person.battleStat = {
    ATK : 0, // damage it can do
   HIT : 0, // chance of hitting a target
    CRIT : 0, // chance of getting a critical hit
    AVO : 0, // chance of avoiding an attack
};

Person.prototype.levelUp = function () {
    if (this.LEVEL == 20) {
        console.log("top level");
    } else {
        this.LEVEL += 1;
        this.EP = 0;
    }
}


