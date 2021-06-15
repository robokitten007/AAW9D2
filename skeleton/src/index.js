
const View = require('./ttt-view.js') // require appropriate file
const Game = require('../ttt_node/game.js')// require appropriate file

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  let el = document.querySelector('.ttt');
  const view = new View(game, el);
  // Your code here
});
