// Gameboard module: an object that has only one outward facing
// component, the "add mark" component.

// (function() {
//     const gameBoard = {
//         startArray: ['x','x','x','x','x','x','x','x','x'],
//         init: function() {
//             this.cacheDom();
//             this.render();
//         }, 
//         cacheDom: function() {
//             this.board = document.querySelector('.board');
//         },
//         render: function() {
//             const data = {
//                 board: this.startArray,
//             };
//             this.board.html('div');
//         },
//     }
//     gameBoard.init()
// })()

const gameBoard = (() => {
    const board = document.querySelector('.board');
    const render = () => {
        board.appendChild('div');
    }
})();

