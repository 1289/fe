'use strict';

var RANKS = ['E', 'D', 'C', 'B', 'A', 'S'];

var Weapon = function(name, properties) {
    this.name = name;
    var WEIGHT = properties.WEIGHT | 0;
    var ATK = properties.ATK | 1; // adds to physical damage
    var DEF = properties.DEF | 0; // adds to defense
    var HIT = properties.HIT | 0; // adds to critical hit
    var RANGE = properties.RANG | 1; // attack range
    var Rank = properties.Rank | 0;// weapons's ranking from weakest to strongest in RANKS
};

Weapon.prototype.rankUp = function() {};

// =============== SWORD ===================

function Sword(name, properties) {
  Person.call(this, name, properties);
}
Sword.prototype = Object.create(Weapon.prototype);
Sword.prototype.constructor = Sword;
Sword.prototype.rankUp = function() {
    switch(this.Rank){
        case 'E' : this.HIT ++; this.ATK++; this.Rank = 'D'; break;
        case 'D' : this.HIT ++; this.ATK++; this.Rank = 'C'; break;
        case 'C' : this.HIT ++; this.ATK++; this.Rank = 'B'; break;
        case 'B' : this.HIT ++; this.ATK++; this.Rank = 'A'; break;
        case 'A' : this.HIT ++; this.ATK++; this.Rank = 'S'; break;
    }
};

// =============== AXE ===================

function Axe(name, properties) {
  Person.call(this, name, properties);
}
Axe.prototype = Object.create(Weapon.prototype);
Axe.prototype.constructor = Axe;
Axe.prototype.rankUp = function() {
    switch(this.Rank){
        case 'E' : this.DEF ++; this.ATK++; this.Rank = 'D'; break;
        case 'D' : this.HIT ++; this.ATK++; this.Rank = 'C'; break;
        case 'C' : this.DEF ++; this.ATK++; this.Rank = 'B'; break;
        case 'B' : this.HIT ++; this.ATK++; this.Rank = 'A'; break;
        case 'A' : this.DEF ++; this.ATK++; this.Rank = 'S'; break;
    }
};


// =============== LANCE ===================

function Lance(name, properties) {
  Person.call(this, name, properties);
}
Lance.prototype = Object.create(Weapon.prototype);
Lance.prototype.constructor = Lance;
Lance.prototype.rankUp = function() {
    switch(this.Rank){
        case 'E' : this.DEF ++; this.ATK++; this.Rank = 'D'; break;
        case 'D' : this.HIT ++; this.ATK++; this.Rank = 'C'; break;
        case 'C' : this.DEF ++; this.ATK++; this.Rank = 'B'; break;
        case 'B' : this.HIT ++; this.ATK++; this.Rank = 'A'; break;
        case 'A' : this.DEF ++; this.ATK++; this.Rank = 'S'; break;
    }
};

// =============== BOW ===================

function Lance(name, properties) {
  Person.call(this, name, properties);
}
Lance.prototype = Object.create(Weapon.prototype);
Lance.prototype.constructor = Lance;
Lance.prototype.rankUp = function() {
    switch(this.Rank){
        case 'E' : this.DEF ++; this.ATK++; this.Rank = 'D'; break;
        case 'D' : this.HIT ++; this.ATK++; this.Rank = 'C'; break;
        case 'C' : this.DEF ++; this.ATK++; this.Rank = 'B'; break;
        case 'B' : this.HIT ++; this.ATK++; this.Rank = 'A'; break;
        case 'A' : this.DEF ++; this.ATK++; this.Rank = 'S'; break;
    }
};