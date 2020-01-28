class Game {
  constructor(options, callback) {
    this.ctx = options.ctx;
    this.player = options.player;
    this.platform = options.platform;
    this.interval = undefined;
    this.gameOver = callback;
  }

  _drawPlayer(){
    const positionColumnPlayer = this.player.position.column;
    const positionRowPlayer = this.player.position.row;
    const bodyColumnPlayer = this.player.body.column ;
    const bodyRowPlayer = this.player.body.row;
    this.ctx.fillStyle = "black";
    ctx.fillRect(positionColumnPlayer, positionRowPlayer, bodyColumnPlayer, bodyRowPlayer);
  }

  _generatePlatforms(){
    for (let i = 0; i < this.platform.position.length; i++) {
      this.platform.position[i].column = Math.random() * gameScreen.height ; //generate platforms randomly
    }
  }

  _drawPlatforms(){
    this.ctx.fillStyle = "green";
    this.platform.position.forEach(position => {
      this.ctx.fillRect(position.column, position.row, this.platform.body.column, this.platform.body.row)
    });
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
      }
    });
  }

  _update(){
    this._clean(); // Clean all the Canvas
    this._drawPlatforms(); //Draw the platforms
    this._drawPlayer(); // Draw again the Player
    this.platform._collidesWithPlayer();
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

    this.interval = window.requestAnimationFrame(this._update.bind(this));
  }
}