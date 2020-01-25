let ctx;
let game;
document.addEventListener('DOMContentLoaded', (event) => {
  
  const gameScreen = document.getElementById('gameScreen');
  ctx = gameScreen.getContext('2d');
  const widthCell = 10;

  function start() {
    gameScreen.classList.remove("disabled");
    const startButton = document.getElementById('start');
    startButton.classList.add("disabled");
  }

  const startButton = document.getElementById('start');
  startButton.addEventListener('click', start);
})