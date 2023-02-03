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
            // Make array for each square in the grid to log when it's clicked
            this.boardPosition = [].slice.call(this.board.querySelectorAll('.square'), 0);
        },

        render: function() {
            this.clearBoard(this.board)
            this.boardArray.forEach(element => {
                const clone = this.cell.content.cloneNode(true);
                clone.querySelector('.piece').textContent = element;
                this.board.append(clone);
            });
            // To capture the boardPosition array (which does not exist until board is rendered)
            // for future use
            this.cacheDom();
        },

        bindEvents: function() {            
            this.board.addEventListener('click', (e) => {
                this.placePiece(e);
            });
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
        
        clearBoard: function(parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }
        
    };
    gameBoard.init();
})();
