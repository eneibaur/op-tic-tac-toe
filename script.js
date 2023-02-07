// Gameboard module: an object that has only one outward facing
// component, the "add mark" component.

const players = (() => {
    const playerScore = [0,0]

    let playerArea = document.querySelector('.players');
    let playerOne = document.querySelector('#player1');
    let playerTwo = document.querySelector('#player2');
    let oneScore = document.querySelector('.score1');
    let twoScore = document.querySelector('.score2');
    let activePlayer = "0"

    function changePlayer() {
        if (playerOne.classList.contains('active')) {
            playerOne.className = "inactive";
            playerTwo.className = "active";
            return activePlayer = "1";
        } else {
            playerOne.className = "active";
            playerTwo.className = "inactive";
            return activePlayer = "0";
        }
    }

    function addWin() {
        playerScore[activePlayer] += 1;
        render();
    }

    function render() {
        oneScore.innerText = playerScore[0];
        twoScore.innerText = playerScore[1];
    }

    return {
        changePlayer: changePlayer,
        addWin: addWin,
    };

})();

const gameTracker = ((array) => {
    let boardArray = array;

    let checkWin = (boardArray) => {
        // // check rows
        for (let i = 0; i < 8; i += 3){
            if (boardArray[i] != "" &&
                boardArray[i] === boardArray[i+1] &&
                boardArray[i+1] === boardArray[i+2]){
                    return true;
                }
        };
        // check columns
        for (let j = 0; j < 3; j++) {
            if (boardArray[j] != "" &&
                boardArray[j] === boardArray[j+3] &&
                boardArray[j+3] === boardArray[j+6]){
                    return true;
                }
        };
        // check diagonal
        if (boardArray[4] != ""){
            if ((boardArray[4] === boardArray[0] &&
                boardArray[4] === boardArray[8]) ||
                (boardArray[4] === boardArray[2] &&
                boardArray[4] === boardArray[6])) {
                    return true;
                };
        };
    }
    return {
        checkWin : checkWin
    }

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
            // Insert game check here!
            if (gameTracker.checkWin(boardArray)){
                alert(`${currentPlayer} wins!`)
            };
            currentPlayer = players.changePlayer();
            setPlayerPiece();
        } else {
            return;
        }
        render();
    };
    
    function setPlayerPiece() {
        if (currentPlayer == "0") {
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
