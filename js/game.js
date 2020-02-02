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
    if(this.player.position.column > 501){
      clearInterval(this.interval);
      this._printGameOver();
    }
  }

  _printGameOver() {
    const gameOver = document.getElementById('gameOver');
    gameOver.classList.remove("disabled");
    const gameOverTitle = document.getElementById('gameOverTitle');
    gameOverTitle.classList.remove("disabled");
    const gameOverText = document.getElementById('gameOverText');
    gameOverText.classList.remove("disabled");
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
        return true;
      }
    }
  }

  _moveMap(){
    if (this._collidesPlayerWithPlatform && this.player.position.column < 200 && this.player.falling) {
      this.platform.position.forEach(element => element.column += 1);
      this.player.position.column += 1;
    }
      this.platform.position.forEach(element => element.column += 0.5);
      this.player.position.column += 0.5;
  }

  _erasePlatforms(){
    for (let i = 0; i < this.platform.position.length; i++) {
      const element = this.platform.position[i];
      if (element.column > 501){
        this.platform.position.splice(i, 1, {row: Math.round(Math.random() * gameScreen.height), column: 0});
      }
    }
  }

  _stop(){
    if(!this.stop){
      window.cancelAnimationFrame(this.interval);
      let pauseText = document.getElementById('pauseTitle');
      pauseText.classList.remove("disabled");
      this.stop = true;
    } else{
      let pauseText = document.getElementById('pauseTitle');
      pauseText.classList.add("disabled");
      this.interval = window.requestAnimationFrame(this._update.bind(this));
      this.stop = false;
    }
    return stop;
  }

  _drawBackground(){
    // let posY = 0;
    // setInterval(() => {
    //   ctx.drawImage(this.background, 0, posY )
    //   posY += 1;
    // }, 300);
  }



  _update(){
    this._clean(); // Clean all the Canvas
    // this._drawBackground();
    this._collidesPlayerWithPlatform(); //Checks if player collides with any platform
    this._drawPlatforms(); //Draw the platforms
    this._drawPlayer(); // Draw again the Player
    this._gameOver();
    this._moveMap();
    this._erasePlatforms();
    this._controlKeys();
    this._printScore();
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

    this.interval = window.requestAnimationFrame(this._update.bind(this));
  }
}