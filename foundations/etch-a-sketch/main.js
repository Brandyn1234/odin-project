const board = document.querySelector('.board');
const slider = document.getElementById("range");
const output = document.getElementById("value");
let size = slider.value;

function createBoard(size) {

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;

    for (let i = 0; i < amount; i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', function(event) {
            div.style.backgroundColor = '#000000';
        });
        board.appendChild(div);
    };    
};

function getBoardSize() {
    slider.addEventListener('input', function(event) {
        output.textContent = slider.value;
    });
    slider.addEventListener('change', function(event){
        resetBoard();
        createBoard(slider.value);
    })
};

function resetBoard() {
    while (board.firstChild) {
        board.removeChild(board.lastChild);
    }
};

createBoard(slider.value);
getBoardSize();





