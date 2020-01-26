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
    let positionColumnPlayer = this.player.position.column * this.maxColumns;
    let positionRowPlayer = this.player.position.row * this.maxRows;
    let bodyColumnPlayer = this.player.body.column * this.columns;
    let bodyRowPlayer = this.player.body.row * this.rows;

    ctx.fillRect(positionColumnPlayer, positionRowPlayer, bodyColumnPlayer, bodyRowPlayer);
    ctx.fillStyle = "#FF0000";
  }


  start() {
  }
}