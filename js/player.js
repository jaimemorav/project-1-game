class Player {
  constructor() {
    this.body = {width: 40, height: 40};
    this.initialPosition = {row: 250, column: 250};
    this.position = {row: 250, column: 250};
    this.direction = 'left';
    this.falling = true;
    this.speed = 1;
    this.realSpeed = 0; 
    this.distanceJump = 100;
    this.positionBeforeJump = 400;
    this.invertalJump = undefined;
    this.playerImage = undefined;
  }

  _move() {
    switch (this.direction) {
      case 'right':
        this.position.row = (this.position.row + 1.5) % 500;
        break;
      case 'left':
        this.position.row = ((this.position.row - 1.5) + 500) % 500;
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
    this.invertalJump = setInterval(() => {
      if (game._collidesPlayerWithPlatform()) {
        this.falling = false;
        this.position.column -= this.speed;
      }
      if (this.position.column < this.positionBeforeJump && !this.falling) {
        this.falling = false;
        this._goUp();
      }
      if (this.position.column === (this.positionBeforeJump - this.distanceJump)) {
        this.falling = true;
        this.position.column += this.speed;
      }
      if (this.falling) {
        this._goDown();
      }
    }, 6)
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