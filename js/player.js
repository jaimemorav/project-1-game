class Player {
  constructor() {
    this.body = {width: 40, height: 40};
    this.initialPosition = {row: 250, column: 250};
    this.position = {row: 250, column: 250};
    this.direction = 'left';
    this.falling = true;
    this.speed = 1;
    this.realSpeed = 0; 
    this.distanceJump = 85;
    this.positionBeforeJump = 400;
    this.invertalJump = undefined;
    this.playerImage = new Image();
    this.playerImage.src = './images/perry.png';
    this.spriteWidth = 86;
    this.spriteHeight = 40;
    this.spriteColumn = 2;
    this.widthFrame = this.spriteWidth / this.spriteHeight;
    this.currentFrame = 0;
    this.frameCount = 2;
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
    this.invertalJump = setInterval(() => {
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