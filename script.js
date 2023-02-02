// Gameboard module: an object that has only one outward facing
// component, the "add mark" component.

const gameBoard = {
    boardArray: ['x','x','x','o','o','o','x','x','x'],
    init: function() {
        this.cacheDom();
        this.render();
    }, 
    cacheDom: function() {
        this.board = document.querySelector('.board');
        this.cell = document.querySelector('#gamecell');
    },
    render: function() {
        this.board.innerHtml = "";
        this.boardArray.forEach(element => {
            const clone = this.cell.content.cloneNode(true);
            clone.querySelector('.piece').textContent = element;
            this.board.append(clone);
        });
    },
};

gameBoard.init()

// const gameBoard = (() => {
//     const cacheDom = () => {
//         const board = document.querySelector('.board');
//         return {board};
//     }
//     const render = () => {
//         cacheDom.board.appendChild('div');
//     }
//     const init = () => {
//         cacheDom();
//         render();
//     }
//     init();
// })();

