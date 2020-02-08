class Platform {
  constructor() {
    this.body = { width: 50, height: 14};
    this.position = [
      { row: 8, column: 30 },
      { row: 8, column: 60 },
      { row: 8, column: 90 },
      { row: 8, column: 120 },
      { row: 8, column: 150 },
      { row: 8, column: 180 },
      { row: 8, column: 210 },
      { row: 8, column: 240 },
      { row: 8, column: 270 },
      { row: 8, column: 320 },
      { row: 8, column: 350 },
      { row: 8, column: 380 },
      { row: 8, column: 410 },
      { row: 8, column: 440 },
      { row: 8, column: 470 },
      { row: 8, column: 415 },
      { row: 8, column: 400 },
    ];
    this.platformImage = new Image();
    this.platformImage.src = './images/platform.png';
  }


}