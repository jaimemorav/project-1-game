class Platform {
  constructor(maxRows, maxColumns) {
    this.body = { row: 5, column: 40};
    this.position = [
      { row: 450, column: 8 },
      { row: 480, column: 8 },
      { row: 208, column: 8 },
      { row: 300, column: 8 },
      { row: 100, column: 8 },
      { row: 300, column: 8 },
      { row: 230, column: 8 },
      { row: 480, column: 8 },
      { row: 200, column: 8 },
      { row: 340, column: 8 },
      { row: 470, column: 8 },
    ];
    this.maxRows = maxRows;
    this.maxColumns = maxColumns;
  }

  _collidesWithPlayer(){
    return this.position.some(element => {
      return (
        element.row === game.player.position.row - 1 && element.column === game.player.position.column
      );
    });
  }

}