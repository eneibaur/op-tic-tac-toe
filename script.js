// Gameboard module: an object that has only one outward facing
// component, the "add mark" component.

const start = (() => {
    const gameBoard = {
        boardArray: ['x','x','x','o','o','o','x','x','x'],
        init: function() {
            this.cacheDom();
            this.render();
            this.bindEvents();
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
        bindEvents: function() {
            const squares = document.querySelectorAll('.square');
            squares.forEach(element => {
                element.addEventListener('click', () => {
                    this.placePiece();
                });
            });
        },
        placePiece: function() {
            alert("clicked!");
        }
    };
    gameBoard.init();
})();
