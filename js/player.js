class Player {
  constructor() {
    this.body = {width: 40, height: 40};
    this.initialPosition = {row: 250, column: 250};
    this.position = {row: 250, column: 250};
    this.direction = 'left';
    this.falling = true;
    this.speed = 1;
    this.realSpeed = 0; 
    this.distanceJump = 75;
    this.positionBeforeJump = 400;
    this.invertalJump = undefined;
    this.positionStop = {row: 0, column: 0};
    this.playerImage = new Image();
    this.playerImage.src = './images/perry.png';
    this.playerImageJump = new Image();
    this.playerImageJump.src = './images/perry-jump.png';
    this.soundBounce = new Audio();
    this.soundBounce.src = './music/bounce.wav';
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
    this.intervalJump = setInterval(() => {
      if (game._collidesPlayerWithPlatform()) {
        this.falling = false;
        this.position.column -= this.speed;
      }
      if (!this.falling) {
        this._goUp();
      }
      if (this.position.column <= (this.positionBeforeJump - this.distanceJump) && !this.falling) {
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