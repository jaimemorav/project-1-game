class Player {
  constructor(maxRows, maxColumns) {
    this.body = {row: 20, column: 10};
    this.initialPosition = {row: 400, column: 250};
    this.position = {row: 400, column: 250};
    this.direction = 'left';
    this.intervalId = undefined;
    this.falling = true;
    this.distanceJump = 150;
    this.positionBeforeJump = 400;
    this.invertalJump = undefined;
  }

  _move() {
    switch (this.direction) {
      case 'right':
        this.position.column = (this.position.column + 10) % 500;
        break;
      case 'left':
        this.position.column = ((this.position.column - 10  ) + 500) % 500;
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
    console.log("Jump?")
    this.invertalJump = setInterval(() => {
      if (this.position.row === 400) {
        this.falling = false;
        this.position.row -= 1;
      }
      if (this.position.row < this.initialPosition.row && !this.falling) {
        this._goUp();
      }
      if (this.position.row === (this.initialPosition.row - this.distanceJump)) {
        this.falling = true;
        this.position.row += 1;
      }
      if (this.position.row < this.initialPosition.row && this.falling) {
        this._goDown();
      }
    }, 5)
  }

  _goDown(){
    this.falling = true;
    this.position.row += 1;
  }

  _goUp(){
    this.falling = false; 
    this.position.row -= 1;
  }


  _collidesWithPlatform(platforms){
    for (let i = 0; i < platforms.position.length; i++) {
      const element = platforms.position[i];
      console.log(element)
      if (
        this.position.row < element.row + platforms.body.row &&
        this.position.row + this.body.row > element.row &&
        this.position.column < element.column + platforms.body.column && this.falling &&
        element.column + platforms.body.column > element.column
        ){
          console.log("choca");
        this.positionBeforeJump = this.position.row;
      }
    }
  }




}