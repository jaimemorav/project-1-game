let ctx;
let game;
document.addEventListener('DOMContentLoaded', (event) => {
  
  const gameScreen = document.getElementById('gameScreen');
  ctx = gameScreen.getContext('2d');
  const widthCell = 50;
  const heightCell= 50;

  game = new Game({
    ctx,
    rows: gameScreen.width / widthCell,
    columns: gameScreen.height / heightCell,
    maxRows: widthCell,
    maxColumns: heightCell,
    player: new Player(gameScreen.width / widthCell, gameScreen.height / heightCell),
  }, printGameOver);

  function start() {
    gameScreen.classList.remove("disabled");
    game.start();
    const startButton = document.getElementById('start');
    startButton.classList.add("disabled");
  }

  function printGameOver(){
  }

  const startButton = document.getElementById('start');
  startButton.addEventListener('click', start);



});