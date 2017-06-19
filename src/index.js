window.onload = function() {
  const game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload, create });

  function preload() {
    game.load.image('logo', 'assets/phaser.png');
  }

  function create() {
    const logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
  }
};
