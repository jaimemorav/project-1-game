class Player {
  constructor() {
    this.body = {width: 10, height: 20};
    this.initialPosition = {row: 250, column: 100};
    this.position = {row: 250, column: 100};
    this.direction = 'left';
    this.intervalId = undefined;
    this.falling = true;
    this.speed = 1;
    this.realSpeed = 0; 
    this.distanceJump = 150;
    this.positionBeforeJump = 400;
    this.invertalJump = undefined;
  }

  _move() {
    switch (this.direction) {
      case 'right':
        this.position.row = (this.position.row + 10) % 500;
        break;
      case 'left':
        this.position.row = ((this.position.row - 10 ) + 500) % 500;
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
      if (game._collidesPlayerWithPlatform()) {
        this.falling = false;
        this.position.column -= this.speed;
      }
      if (this.position.column < this.positionBeforeJump && !this.falling) {
        this._goUp();
      }
      if (this.position.column === (this.positionBeforeJump - this.distanceJump)) {
        this.falling = true;
        this.position.column += this.speed;
      }
      if (this.position.column < this.initialPosition.column && this.falling) {
        this._goDown();
      }
      else {
        this.falling = true;
        this.position.column += this.speed;
      }
    }, 5)
  }

  _falling(){

  }


  _goDown(){
    this.falling = true;
    this.position.column += this.speed;
  }

  _goUp(){
    this.falling = false; 
    this.position.column -= this.speed;
  }

}