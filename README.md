# Doodle jump
The purpose of the game is to jump over the platforms and reach the highest possible score.
The game screen is the platforms and the background image.
The player is represented by a Doodle that jumps with intervals of 1 second.
The player bounces on the platforms to ascend.
The player can move the Doodle with the right and left keys to move right or left.
The game is over when the Doodle jump and don't collition with a platform and falls down.

Extra: 
Appear some enemies, that the Doodle has to avoid.
Add some power Ups to jump more o ascend.
* * *
## MVP
### Technique
Html5 __Canvas__ and Vanilla __Javascript__
### Game states
* __Start Screen__
  * Title
  * Play button
* __Game Screen__
  * Canvas
* __Game Over Screen__
  * Play again button
  * Go to start screen button
### Game
* Create platforms
* Create Doodle in the bottom of the screen
* Move player
  * Jump constantly
  * Left or right to move sideways.
* Create platforms on the screen
* Check that Doodle collision with the platform
* If Doodle jumps and don't collision a platform -> Game Over -> Show Game Over Screen
* * *
## BACK LOG
### Score
* Run counter and store score on game over
### High score
* Create High Score Screen
* Show latest score on Start Screen
* Add high score button to Start Screen
### Music
* Add background music to game
* Add music on and off button to Start screen.
## Happy face
* Every 100pts  shows a happyface.
### Levels
* Check score and increase level.
* * *
## Data structure
__main.js__
````
start(id);
printGameOverScreen(id);
var game = new Game({
    this.rows,
    this.columns,
    ctx: ctx,
    this.player
    this.platforms,
  });
game.init();
````
__Game.js__
````
class Game{
  constructor(options, callback) {
    this.player = player;
    this.plaforms;
    this.rows = options.rows;
    this.columns = options.columns;
    this.interval = undefined;
    this.maxCells = options.maxCells;
    this.gameOver = callback;
  }
}
Game.generatePlatforms();
Game.drawPlayer();
Game.drawBoard();
Game.update();
Game.clean();
Game.assignControlToKeys();
Game.gameOver();
Game.init();
````
__Player.js__
````
Classs Player(){
  this.width;
  this.height;
};
Player.move();
Player.collidesPlatform();
Player.stop();
Player.reset();
Player.jump();
````
__Platform.js__
````
class Platform(){
  this.width;
  this.height;
};
````

## Links

[Github](https://github.com/jaimemorav/project-1-game)
[Slides](https://docs.google.com/presentation/d/1lfj46LoEejsag4dPzSY_H-azX0xiSM2Vzi4XvKh3fYI/edit?usp=sharing)
[Trello](https://trello.com/b/Kul81z32/game)
[Reference -> Doodle Jump](https://www.paisdelosjuegos.es/juego/salto+hacia+arriba/doodle+jump.html)