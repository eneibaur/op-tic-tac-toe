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
            this.board.innerHtml = "";
            this.boardArray.forEach(element => {
                const clone = this.cell.content.cloneNode(true);
                clone.querySelector('.piece').textContent = element;
                this.board.append(clone);
            });
            this.boardPosition = [].slice.call(this.board.querySelectorAll('.square'), 0);
            console.log(this.boardPosition)
        },

        placePiece: function(e) {
            const index = this.boardPosition.indexOf(e.target)
            console.log(index);
        },

        bindEvents: function() {            
            this.board.addEventListener('click', (e) => {
                this.placePiece(e);
            });
        },

    };
    gameBoard.init();
})();
