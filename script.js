// Gameboard module: an object that has only one outward facing
// component, the "add mark" component.

const start = (() => {
    const gameBoard = {
        boardArray: ['','','','','','','','',''],
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
            this.clearBoard(this.board)
            this.boardArray.forEach(element => {
                const clone = this.cell.content.cloneNode(true);
                clone.querySelector('.piece').textContent = element;
                this.board.append(clone);
            });
            // Make array for each square in the grid to log when it's clicked
            this.boardPosition = [].slice.call(this.board.querySelectorAll('.square'), 0);
        },

        placePiece: function(e) {
            const index = this.boardPosition.indexOf(e.target)
            if (this.boardArray[index] === '') {
                this.boardArray[index] = 'x'
            } else {
                return;
            }
            this.render();
        },

        bindEvents: function() {            
            this.board.addEventListener('click', (e) => {
                this.placePiece(e);
            });
        },

        clearBoard: function(parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        },
    };
    gameBoard.init();
})();
