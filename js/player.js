class Player {
  constructor(maxRows, maxColumns) {
    this.body = {row: 3, column: 1};
    this.position = {row: 8, column: 5};
    this.maxRows = maxRows;
    this.maxColumns = maxColumns;
    this.direction = 'left';
    this.intervalId = undefined;
  }

  _move() {
    switch (this.direction) {
      case 'right':
        this.position.column = (this.position.column + 1) % this.maxColumns;
        break;
      case 'left':
        this.position.column = ((this.position.column - 1) + this.maxColumns) % this.maxColumns;
        break;
    }
  }

  _moveRight(){
    this.direction = 'right';
    this._move();
  }

  _moveLeft(){
    this.direction = 'left';
    this._move();
  }

  _jump() {
    let intervalId = setInterval(()=>{
      this.position.row = this.position.row  - 3;
      setTimeout(function () {
        game.player.position.row = game.player.position.row + 3;
      }, 450);
    }, 1000)
  }

  _goDown(){
    this.position.row = this.position.row + 1;
  }


}