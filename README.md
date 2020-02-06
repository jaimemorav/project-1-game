# Doodle Penguin Jump
The purpose of the game is to jump over the platforms and reach the highest possible score.
The game screen is the platforms and the background image.
The player is represented by Perry. 
It is a that dreams with flying but it can't. The solution is to jump. 
Perry  bounces on the platforms to ascend.
The player can move Perry with the right and left keys to move right or left.
The game is over when Perry doesn't collide with a platform and falls down.

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
  * Restart button
  * Go to start screen button
### Game
* Create platforms
* Create Penguin in the bottom of the screen
* Move player
  * Left or right to move sideways.
* Create platforms on the screen
* Check that Perry collides with the platforms
* If PErry jumps and don't collision a platform -> Game Over -> Show Game Over Screen
* * *
## BACK LOG
### Score
* Run counter and store score on game over
### High score
* Create High Score Screen
* Show latest score on Start Screen
* Add high score button to Start Screen
### Music
* Add music that sounds when Perry collides with a platform to game
* Add music of Game over.
### Levels
* Check score and increase level of difficoulty.
* * *
## Data structure
__main.js__
````
var game = new Game({
    ctx: ctx,
    this.player
    this.platforms,
  });
start()
restart()
printGameOverScreen(id);

````
__Game.js__
````
class Game{
  constructor(options, callback) {
    this.ctx = options.ctx;
    this.player = options.player;
    this.platform = options.platform;
    this.interval = undefined;
    this.gameOver = callback;
    this.keys = [];
    this.score = 0;
    this.background = new Image();
    this.background.src = './images/background.png';
    this.stop = false;
    this.backgroundInterval = undefined;
    this.posY = 0;
    this.musicGameOver = new Audio();
    this.musicGameOver.src = './music/game-over.wav';
    this.playGameOver = 0;
  }
}
this._drawBackground();
this._moveBackground();
this._drawPlayer();
this._generatePlatforms();
this. _drawPlatforms();
this._printScore();
this._clean();
this._assignControlsToKeys();
this._controlKeys();
this._gameOver();
this._printGameOver();
this._collidesPlayerWithPlatform();
this._moveMap();
this._erasePlatforms();
this._stop();
this._update();
this.start();
````
__Player.js__
````
Classs Player(){
  constructor() {
    this.body = {width: 40, height: 40};
    this.initialPosition = {row: 250, column: 250};
    this.position = {row: 250, column: 250};
    this.direction = 'left';
    this.falling = true;
    this.speed = 1;
    this.realSpeed = 0; 
    this.distanceJump = 85;
    this.positionBeforeJump = 400;
    this.invertalJump = undefined;
    this.playerImage = new Image();
    this.playerImage.src = './images/perry.png';
    this.playerImageJump = new Image();
    this.playerImageJump.src = './images/perry-jump.png';
    this.soundBounce = new Audio();
    this.soundBounce.src = './music/bounce.wav';
};
this._move();
this._moveRight();
this._moveLeft();
this._jump();
this._goDown();
this._goUp();
````
__Platform.js__
````
class Platform(){
  this.body = {width, height};
  this.position;
  this.platformImage = new Image();
    this.platformImage.src = './images/platform.png';   
};
````
## Links

[Github](https://github.com/jaimemorav/project-1-game)
[Reference -> Doodle Jump](https://www.paisdelosjuegos.es/juego/salto+hacia+arriba/doodle+jump.html)