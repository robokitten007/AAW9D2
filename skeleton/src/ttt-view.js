const Board = require("../ttt_node/board");
const Game = require("../ttt_node/game");
class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    el.appendChild(this.setupBoard());
    this.bindEvents();
  }

  setupBoard() {
    let ul = document.createElement('UL');
    ul.className = "ttt-board";
    let children = [0,1,2,3,4,5,6,7,8];
    children.forEach(child => {
      let li = document.createElement('LI');
      li.id = `ttt${child}`;
      li.className = "ttt-square";
      // li.innerHTML = child;
      ul.appendChild(li);
    })
    return ul;
  }
  
  bindEvents() {
      // let squares = document.querySelectorAll('.ttt-square');
      // for(let i = 0; i < squares.length; i++){
      //   squares[i].addEventListener('click', this.handleClick.bind(this))
      // }
      let squares = document.querySelector('.ttt-board');
      squares.addEventListener('click', this.handleClick.bind(this))
  }

  handleClick(e) {
    // debugger;
    let element = e.target;
    if(element.tagName!=='LI'){
      return;
    }
    if(element.innerHTML === 'x' ||element.innerHTML === 'o' ){
      alert('this move is invalid');
      return;
    }
    let pos = Number(element.id.slice(3));
    let row = Math.floor(pos/3);
    let col = pos % 3;
    element.innerHTML = this.game.currentPlayer;


    if(element.innerHTML === 'x'){
      element.classList.add('x');
    }else{
      element.classList.add('o');
    }
    this.game.playMove([row,col]);
    this.displayWinner();
  
  }

  makeMove(square) {

  }

  displayWinner() {
    if(this.game.winner()){
     alert(`congradulations to ${this.game.winner()}`);
    }
  }

}

module.exports = View;
