'use strict';

var game = new Phaser.Game( 200, 160, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});

var lord = new Lord("lord");
console.log(lord);
var enemy;

function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = '#eee';

    game.load.image( 'lord', 'assets/images/player.png' );
    game.load.image( 'enemy', 'assets/images/zombie.png' );
}

function create() {
    game.physics.startSystem( Phaser.Physics.ARCADE );

    lord = game.add.sprite( 0, 0, 'lord' );
    game.physics.arcade.enable( lord );
    lord.body.collideWorldBounds = true;
    game.camera.follow( lord );
    enemy = game.add.sprite( 100, 100, 'enemy' );
    game.physics.arcade.enable( enemy );
    enemy.body.collideWorldBounds = true;
    enemy.body.immovable = true;
    //cursors = game.input.keyboard.createCursorKeys();
}

function update() {
}