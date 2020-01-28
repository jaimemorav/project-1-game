let ctx;
let game;
document.addEventListener('DOMContentLoaded', (event) => {
  
  const gameScreen = document.getElementById('gameScreen');
  ctx = gameScreen.getContext('2d');


  game = new Game({
    ctx: ctx,
    player: new Player(gameScreen.width, gameScreen.height),
    platform: new Platform(gameScreen.width, gameScreen.height),
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