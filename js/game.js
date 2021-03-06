class Game {
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
    this.posY = -500;
    this.musicGameOver = new Audio();
    this.musicGameOver.src = './music/game-over.wav';
    this.playGameOver = 0;
  }
  
    _drawBackground(){
      this.ctx.drawImage(this.background, 0, this.posY, 500, 1000 );
      this._moveBackground();
    }

    _moveBackground(){
      if(this.posY > 0){
        this.posY = -500;
      } else {
        this.posY += 0.2;
      }
    }

    _drawPlayer(){
        ctx.drawImage(this.player.playerImage, this.player.position.row, this.player.position.column, this.player.body.width, this.player.body.height);
  }


  
  _generatePlatforms(){
      for (let i = 0; i < this.platform.position.length; i++) {
        this.platform.position[i].row = Math.round(Math.random() * gameScreen.height); //generate platforms randomly
      }
    }
    
  _drawPlatforms(){
      this.platform.position.forEach(position => {
      this.ctx.drawImage(this.platform.platformImage, position.row, position.column, this.platform.body.width, this.platform.body.height)
    });
  }
  
    _printScore(){
      let score = document.getElementById('realScore');
      score.innerHTML = this.score;
    }


  _clean(){
    ctx.clearRect(0, 0, gameScreen.width, gameScreen.height);
  }

  _assignControlsToKeys() {
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 37: // arrow left
          this.player._moveLeft();
          break;
        case 39: // arrow right
          this.player._moveRight();
          break;
        case 80: // letter p
          this._stop();
          break;
      }
    });
  }

  _controlKeys(){
    window.addEventListener('keydown', function (e) {
      this.keys[e.keyCode] = true;
    }.bind(this));

    window.addEventListener('keyup', function (e) {
    this.keys[e.keyCode] = false;
    }.bind(this));
    
    if (this.keys[37]) {
      this.player._moveLeft();
    }
    if (this.keys[39]) {
      this.player._moveRight();
    }
  }

  _gameOver(){
    if(this.player.position.column > (gameScreen.height + 1)){
      clearInterval(this.interval);
      this._printGameOver();
      this.playGameOver += 1;
      
    }
    if(this.playGameOver === 1){
      this.musicGameOver.play();
    }
  }

  _printGameOver() {
    const gameOver = document.getElementById('gameOver');
    gameOver.classList.remove("disabled");
    const gameOverTitle = document.getElementById('gameOverTitle');
    gameOverTitle.classList.remove("disabled");
    const gameOverText = document.getElementById('gameOverText');
    gameOverText.classList.remove("disabled");
    const restartButton = document.getElementById('restart');
    restartButton.classList.remove("disabled");
  }

  _collidesPlayerWithPlatform() {
    for (let i = 0; i < this.platform.position.length; i++) {
      const element = this.platform.position[i];
      if (
        this.player.position.row < element.row + this.platform.body.width &&
        this.player.position.row + this.player.body.width > element.row &&
        this.player.position.column < element.column - this.platform.body.height &&
        this.player.position.column + this.player.body.height > element.column &&
        this.player.falling
      ) {
        this.player.positionBeforeJump = this.player.position.column;
        this.score += 10;
        this.player.falling = true;
        this.player.soundBounce.play();
        return true;
      }
    }
  }

  _moveMap(){
    if (this.score > 250) {
      this.platform.position.forEach(element => element.column += 1);
      this.player.position.column += 1;
    } else{
      this.platform.position.forEach(element => element.column += 0.6);
      this.player.position.column += 0.6;
    }
  }

  _erasePlatforms(){
    for (let i = 0; i < this.platform.position.length; i++) {
      const element = this.platform.position[i];
      if (element.column > 501){
        this.platform.position.splice(i, 1, {row: Math.round(Math.random() * gameScreen.height), column: 0});
      }
    }
    if(this.score > 250 && this.platform.position.length === 17 ){
      this.platform.position.pop();
    } else if (this.score > 500 && this.platform.position.length === 16){
      this.platform.position.pop();
    } else if (this.score > 700 && this.platform.position.length === 15) {
      this.platform.position.pop();
    }
  }

  _stop(){
    if(!this.stop){
      window.cancelAnimationFrame(this.interval);
      let pauseText = document.getElementById('pauseTitle');
      pauseText.classList.remove("disabled");
      clearInterval(this.player.intervalJump);
      this.stop = true;
    } else {
      let pauseText = document.getElementById('pauseTitle');
      pauseText.classList.add("disabled");
      this.interval = window.requestAnimationFrame(this._update.bind(this));
      this.player._jump();
      this.stop = false;
    }
  }

  _showPoints(){
    if(this.score % 100 === 0 && this.score != 0){
      const pointsText = document.getElementById('pointsText');
      pointsText.classList.remove("disabled");
    } else{
      const pointsText = document.getElementById('pointsText');
      pointsText.classList.add("disabled");
    }
  }

  _update(){
    this._clean(); // Clean all the Canvas
    this._drawBackground(); // Draw the background of the canvas
    this._collidesPlayerWithPlatform(); //Checks if player collides with any platform
    this._drawPlatforms(); //Draw the platforms
    this._drawPlayer(); // Draw again the Player
    this._gameOver(); //Checks if the player die
    this._moveMap(); //Move the platforms from the top to the bottom
    this._erasePlatforms(); //Checks if the platforms are in position column:501, erase them and create new in position column : 0
    this._controlKeys();// The control of the player
    this._printScore();//Prints the score
    this._showPoints();
    if (!!this.interval) {
      this.interval = window.requestAnimationFrame(this._update.bind(this));//Loop of _update() with a bind because this references to window
    }
  }


  start() {
    this._assignControlsToKeys();
    this._generatePlatforms();
    this._drawPlatforms(); //Draw the platforms
    this._drawPlayer();
    this.player._jump();
    this._controlKeys();
    this._drawBackground();
    this.interval = window.requestAnimationFrame(this._update.bind(this));
  }

  restart(){
    clearInterval(this.interval);
    this.start();
  }
}