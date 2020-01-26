class Player {
  constructor(maxRows, maxColumns) {
    this.body = {row: 2, column: 1};
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
        this.position.column = (this.position.column - 1) % this.maxColumns;
        break;
    }
  }

}