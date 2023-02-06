// Gameboard module: an object that has only one outward facing
// component, the "add mark" component.

const players = (() => {
    const playerScore = [0,0]

    let playerArea = document.querySelector('.players');
    let playerOne = document.querySelector('#player1');
    let playerTwo = document.querySelector('#player2');
    let activePlayer = "1"

    function changePlayer() {
        if (playerOne.classList.contains('active')) {
            playerOne.className = "inactive";
            playerTwo.className = "active";
            return activePlayer = "2";
        } else {
            playerOne.className = "active";
            playerTwo.className = "inactive";
            return activePlayer = "1";
        }
    }

    return {
        changePlayer: changePlayer,
    };

})();

const gameBoard = (() => {
    const boardArray = ['','','','','','','','',''];
    let currentPlayer = "1";
    let playerPiece = "X";
    // cache DOM
    let board = document.querySelector('.board');
    let cell = document.querySelector('#gamecell');
    let boardPosition = [].slice.call(board.querySelectorAll('.square'), 0);  
    
    function render() {
        clearBoard(board)
        boardArray.forEach(element => {
            const clone = cell.content.cloneNode(true);
            clone.querySelector('.piece').textContent = element;
            board.append(clone);
        });
        boardPosition = [].slice.call(board.querySelectorAll('.square'), 0);
    }

    // bind events
    board.addEventListener('click', (e) => {
        placePiece(e);
    });  
    
    function placePiece(e) {
        const index = boardPosition.indexOf(e.target)
        if (boardArray[index] === '') {
            boardArray[index] = playerPiece;
            currentPlayer = players.changePlayer();
            setPlayerPiece();
        } else {
            return;
        }
        render();
    };
    
    function setPlayerPiece() {
        if (currentPlayer == "1") {
            playerPiece = "X";
        } else {
            playerPiece = "O";
        }
    }
    
    function clearBoard(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    render()

    return {
        board: boardArray
    }

})();

