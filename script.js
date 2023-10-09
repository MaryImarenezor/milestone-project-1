window.addEventListener("DOMContentLoaded", (event) => {
    //let winnerText = document.querySelector("#winnerText")
    let resetBut = document.querySelector("#resetBut");
    let cells = Array.from(document.querySelectorAll(".cell"));
    let boxes = Array(9).fill(null);

    const iconO = "O";
    const iconX = "X";
    let currentPlayer = iconX;

    const resetButClicked = new Audio("assets/683098__florianreichelt__click.mp3")
    const cellClicked = new Audio("assets/703884__matrixxx__diamond-click.wav")
    const winnerDisplay = new Audio("assets/615100__mlaudio__magic_game_win_success_2.wav")


    function handleCellClick(event) {
        //MAIN FUNCTION
        const idSelected = parseInt(event.target.id);

        console.log("idSelected:", idSelected);
        console.log("cells[idSelected]:", cells[idSelected]);

        if (!isNaN(idSelected) && !cells[idSelected].innerText && !playerWins()) {
            cells[idSelected].innerText = currentPlayer;
            boxes[idSelected] = currentPlayer;
            currentPlayer = currentPlayer == iconX ? iconO : iconX;

            //SFX
            cellClicked.play()


            //WINNING CONDITION BOOLEANS
            if(playerWins() === true) {
                winnerDisplay.play()
                setTimeout(() => 
                {winnerText.innerText = currentPlayer + " wins the round!"}
                , 100)
                
            } else {
                setTimeout(() => 
                {winnerText.innerText = ""}
                , 10)
                
            }



            if (playerWins() === false) {
                winnerDisplay.play()
                setTimeout(() => 
                {winnerText.innerText = "It's a tie!"}
                , 100)
                
            } else {
                setTimeout(() => 
                {winnerText.innerText = ""}
                , 10)
                
            }

        }



    }

    //WINNING CONDITIONS/////////



    function playerWins() {
        function conditionCheck(cells) {
            return cells.every((index) => boxes[index] == currentPlayer)
        }
        const winningConditions = [
            //across
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],

            //up and down
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],

            //diagonal
            [0, 4, 8],
            [2, 4, 6]
        ]
        return winningConditions.some((cells) => conditionCheck(cells))
    }


    /////////////////////////////

    cells.forEach((cell) => cell.addEventListener("click", handleCellClick));

    resetBut.addEventListener("click", function () {
        //MAIN FUNCTION
        boxes.fill(null);

        cells.forEach((e) => {
            e.innerText = "";
        });

        currentPlayer = iconX;

        winnerText.innerText = ""

        //SFX
        resetButClicked.play()
    });

    
});
