window.addEventListener("DOMContentLoaded", (event) => {
    let resetBut = document.querySelector("#resetBut");
    let cells = Array.from(document.querySelectorAll(".cell"));
    let boxes = Array(9).fill(null);

    const iconO = "O";
    const iconX = "X";
    let currentPlayer = iconX;

    function handleCellClick(event) {
        const idSelected = parseInt(event.target.id);

        console.log("idSelected:", idSelected);
        console.log("cells[idSelected]:", cells[idSelected]);

        if (!isNaN(idSelected) && !cells[idSelected].innerText) {
            cells[idSelected].innerText = currentPlayer;
            boxes[idSelected] = currentPlayer;
            currentPlayer = currentPlayer == iconX ? iconO : iconX;
        }


    }

    cells.forEach((cell) => cell.addEventListener("click", handleCellClick));

    resetBut.addEventListener("click", function () {
        boxes.fill(null);

        cells.forEach((e) => {
            e.innerText = "";
        });

        currentPlayer = iconX;
    });

    
});
