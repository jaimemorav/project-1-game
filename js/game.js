class Game {
  constructor(options, callback) {
    this.ctx = options.ctx;
    this.player = options.player;
    this.rows = options.rows;
    this.columns = options.columns;
    this.platforms =[];
    this.interval = undefined;
    this.maxRows = options.maxRows;
    this.maxColumns = options.maxColumns;
    this.gameOver = callback;
  }

  _drawPlayer(){
    const positionColumnPlayer = this.player.position.column * this.maxColumns;
    const positionRowPlayer = this.player.position.row * this.maxRows;
    const bodyColumnPlayer = this.player.body.column * this.columns;
    const bodyRowPlayer = this.player.body.row * this.rows;

    ctx.fillRect(positionColumnPlayer, positionRowPlayer, bodyColumnPlayer, bodyRowPlayer);
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
    this._clean();
    this._drawPlayer();
    if (!!this.interval) {
      this.interval = window.requestAnimationFrame(this._update.bind(this));
    }
  }


  start() {
    this._assignControlsToKeys();
    this._drawPlayer();
    this.player._jump();
    this.interval = window.requestAnimationFrame(this._update.bind(this));
  }
}