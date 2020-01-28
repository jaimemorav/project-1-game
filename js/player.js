class Player {
  constructor(maxRows, maxColumns) {
    this.body = {row: 20, column: 10};
    this.position = {row: 400, column: 250};
    this.maxRows = maxRows;
    this.maxColumns = maxColumns;
    this.direction = 'left';
    this.intervalId = undefined;
    this.falling = true;
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
      if(this.position.row == 450 ){
        this.falling = false;
        this.position.row -= 1;
      }
      if(this.position.row < 450 && !this.falling){
        console.log("sube")
        this._goUp();
      }
      if (this.position.row == 300){
        this.falling = true;
        this.position.row += 1;
      }
      if (this.position.row > 300 && this.falling) {
        console.log("baja")
        this._goDown();
      }
    }, 5)
  }



  _goDown(){
    this.falling = true;
    this.position.row += 1;
    console.log("baja")
  }


  _goUp(){
    this.falling = false; 
    this.position.row -= 1;
    console.log("sube")
  }


}