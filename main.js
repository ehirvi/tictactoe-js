import {newGame, makeMove, resetGame} from "./game.js";

/*  CREATE AND REMOVE HTML DOM ELEMENTS  */
function createMenu() {
    let menu = document.createElement("div");
    menu.id = "menu";
    document.body.appendChild(menu);
    menuTitle();
    menuButton();
}

function menuTitle() {
    let title = document.createElement("h1");
    title.innerHTML = "Tic Tac Toe";
    title.id = "new_game_title";
    //div1.setAttribute("style", "color: black;");
    document.getElementById("menu").appendChild(title);
}


function menuButton() {
    let button = document.createElement("button");
    button.innerHTML = "New Game";
    button.id = "new_game_btn";
    document.getElementById("menu").appendChild(button);
    button.addEventListener("click", startGame);
}


function startGame() {
    removeMenuElements();
    createGameElements();
    newGame();
}


function removeMenuElements() {
    document.getElementById("new_game_title").remove();
    document.getElementById("new_game_btn").remove();
    document.getElementById("menu").remove();
}


function createGameElements() {
    let game_page = document.createElement("div");
    let player_x = document.createElement("h2");
    let player_o = document.createElement("h2");

    player_x.innerHTML = "Player X's turn";
    player_o.innerHTML = "Player O's turn";

    game_page.id = "game_page";
    player_x.id = "player_x_title";
    player_o.id = "player_o_title";

    game_page.style = "display: flex; justify-content: center; align-items: center; flex-direction: column;";
    player_x.style = "padding: 5px; width: 200px; text-align: center;";
    player_o.style = "padding: 5px; width: 200px; text-align: center;";

    document.body.appendChild(game_page);
    document.getElementById("game_page").appendChild(player_x);
    document.getElementById("game_page").appendChild(player_o);

    createGameGrid();
}


function createGameGrid() {
    let grid = document.createElement("div");
    let row_0 = document.createElement("div");
    let row_1 = document.createElement("div");
    let row_2 = document.createElement("div");

    let rows = [row_0, row_1, row_2];

    grid.id = "grid";

    document.getElementById("game_page").appendChild(grid);


    for (let i = 0; i < rows.length; i++) {
        rows[i].id = `row_${i}`;
        rows[i].className = "row";
        document.getElementById("grid").appendChild(rows[i]);
    }

    let square_0 = document.createElement("div");
    let square_1 = document.createElement("div");
    let square_2 = document.createElement("div");
    let square_3 = document.createElement("div");
    let square_4 = document.createElement("div");
    let square_5 = document.createElement("div");
    let square_6 = document.createElement("div");
    let square_7 = document.createElement("div");
    let square_8 = document.createElement("div");

    let squares = [square_0, square_1, square_2, square_3, square_4, square_5, square_6, square_7, square_8];

    for (let i = 0; i < squares.length; i++) {
        squares[i].id = `square_${i}`;
        squares[i].className = "squares";
        squares[i].addEventListener("click", () => makeMove(i));
        if (i > 5) {
            document.getElementById("row_2").appendChild(squares[i]);
        } else if (i > 2) {
            document.getElementById("row_1").appendChild(squares[i]);
        } else {
            document.getElementById("row_0").appendChild(squares[i]);
        }
    }

    let button = document.createElement("button");
    button.innerHTML = "New Game";
    button.id = "reset_game_btn";
    document.getElementById("game_page").appendChild(button);
    button.addEventListener("click", resetGame)
}

/*  RENDERS PAGE  */
createMenu();

//TODO: mobiilinäkymä