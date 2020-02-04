let ctx;
let game;
document.addEventListener('DOMContentLoaded', (event) => {
  
  const gameScreen = document.getElementById('gameScreen');
  ctx = gameScreen.getContext('2d');


  game = new Game({
    ctx: ctx,
    player: new Player(gameScreen.width, gameScreen.height),
    platform: new Platform(gameScreen.width, gameScreen.height),
  }, this._printGameOver);

  function start() {
    gameScreen.classList.remove("disabled");
    game.start();
    const startButton = document.getElementById('start');
    startButton.classList.add('disabled');
    const scoreSection = document.getElementById('score');
    scoreSection.classList.remove('disabled');
  }

  function restart(){
    window.location.reload();
  }

  const startButton = document.getElementById('start');
  startButton.addEventListener('click', start);

  const restartButton = document.getElementById('restart');
  restartButton.addEventListener('click', restart);


});