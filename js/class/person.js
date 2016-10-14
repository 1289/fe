'use strict';

// abstract Person class
var Person = function(name, properties) {
    this.name = name;
    this.gender = properties.gender | 1; // 1 male 0 female
    this.HP = properties.HP | 0;
    this.EP = properties.EP | 0;
    this.MOVEMENT = properties.MOVEMENT | 5;
    this.LEVEL = properties.LEVEL | 0;
    this.MAX_LEVEL = properties.MAX_LEVEL | 20;
    this.STR = properties.STR | 0; // adds to physical damage
    this.MAG = properties.MAG | 0; // adds to magic damage
    this.SKI = properties.SKI | 0; // adds to critical hit and accuracy
    this.SPD = properties.SPD | 0; // related to times you can acttack
    this.LCK = properties.LCK | 0; // chance of commit and avoids cirtical hit
    this.DEF = properties.DEF | 0; // adds to defense
    this.RES = properties.RES | 0; // adds to magic defense
    this.ATK = properties.ATK | 0; // damage it can do
    this.HIT = properties.HIT | 0; // chance of hitting a target
    this.CRIT = properties.CRIT | 0; // chance of getting a critical hit
    this.AVO = properties.AVO | 0; // chance of avoiding an attack
    // growth rates
    this.grHP = properties.grHP | 0.2;
    this.grSTR = properties.grSTR | 0.2; // adds to physical damage
    this.grMAG = properties.grMAG | 0.2; // adds to magic damage
    this.grSKI = properties.grSKI | 0.2; // adds to critical hit and accuracy
    this.grSPD = properties.grSPD | 0.2; // related to times you can acttack
    this.grLCK = properties.grLCK | 0.2; // chance of commit and avoids cirtical hit
    this.grDEF = properties.grDEF | 0.2; // adds to defense
    this.grRES = properties.grRES | 0.2; // adds to magic defense
    this.weapons = properties.weapons;
};

var PERSON_BASIC_ATTRS = ['HP', 'STR', 'MAG', 'SKI', 'SPD', 'LCK', 'DEF', 'RES'];
var PERSON_WEAPON_ATTRS = ['ATK', 'HIT', 'CRIT', 'AVO'];

// have a rate% chance to increase 1 unit
// rate is between [0 1]
var randomIncreaseUnit = function(rate) {
    return Math.random() > rate ? 0 : 1;
};

Person.prototype.levelUp = function() {
    if (this.LEVEL !== this.MAX_LEVEL) {
        this.LEVEL++;
        this.EP = 0;
        this.HP = randomIncreaseUnit(this.grHP);
        this.STR = randomIncreaseUnit(this.grSTR);
        this.MAG = randomIncreaseUnit(this.grMAG);
        this.SKI = randomIncreaseUnit(this.grSKI);
        this.SPD = randomIncreaseUnit(this.grSPD);
        this.LCK = randomIncreaseUnit(this.grLCK);
        this.DEF = randomIncreaseUnit(this.grDEF);
        this.RES = randomIncreaseUnit(this.grRES);
    }
};




