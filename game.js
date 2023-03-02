function newGame() {
    GAME_GRID = [null, null, null, null, null, null, null, null, null];
    //playerTurn = GAME_PAWNS[Math.round(Math.random())];
    playerTurn = GAME_PAWNS[gameTurns % 2];
    changeTitle(playerTurn);
    gameEnded = false;
}

function changeTitle(playerTurn) {
    switch(playerTurn) {
        case "X":
            document.getElementById("player_x_title").style = "background-color: white; color: black; padding: 5px; width: 200px; text-align: center;";
            document.getElementById("player_o_title").style = "padding: 5px; width: 200px; text-align: center;";
            break;
        case "O":
            document.getElementById("player_o_title").style = "background-color: white; color: black; padding: 5px; width: 200px; text-align: center;";
            document.getElementById("player_x_title").style = "padding: 5px; width: 200px; text-align: center;";
            break;
    }
}


function makeMove(square) {
    if (isSquareLocked(square) || gameEnded) {
        return;
    }
    GAME_GRID[square] = playerTurn;
    document.getElementById("square_" + square).innerHTML = `<p>${playerTurn}</p>`;
    checkGameStatus(playerTurn);
    if (!gameEnded) {
        /*if (playerTurn == "X") {
            playerTurn = "O";
        } else {
            playerTurn = "X";
        }*/
        gameTurns++;
        playerTurn = GAME_PAWNS[gameTurns % 2];
        changeTitle(playerTurn);
    }
}

function resetGame() {
    for (let i = 0; i < GAME_GRID.length; i++) {
        GAME_GRID[i] = null;
        document.getElementById("square_" + i).innerHTML = "";
    }
    document.getElementById("grid").style = "";
    //playerTurn = GAME_PAWNS[Math.round(Math.random())];
    gameEnded = false;
    gameTurns = 0;
    playerTurn = GAME_PAWNS[gameTurns % 2];
    changeTitle(playerTurn);
}

function isSquareLocked(square) {
    if (GAME_GRID[square] != null) {
        return true;
    }
    return false;
}

function checkGameStatus(player){
    const WINNING_ROWS = [[0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8]];

    for (let i of WINNING_ROWS) {
        if (GAME_GRID[i[0]] == player && GAME_GRID[i[1]] == player && GAME_GRID[i[2]] == player) {
            gameEnded = true;
            //document.getElementById("otsikko").innerHTML = `${player} on voittanut pelin!`;
            document.getElementById("grid").style = "filter: blur(15px);";
            return;
        }
    }
    if (!GAME_GRID.includes(null)) {
        gameEnded = true;
        //document.getElementById("otsikko").innerHTML = "Tasapeli, kukaan ei voittanut!";
        document.getElementById("grid").style = "filter: blur(15px);";
    }
}

/*  GLOBAL VARIABLES  */
let playerTurn;
let gameEnded = true;
let gameTurns = 0;
let GAME_GRID;
const GAME_PAWNS = ["X", "O"];

export {newGame, makeMove, resetGame};