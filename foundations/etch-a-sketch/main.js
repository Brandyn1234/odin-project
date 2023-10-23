const board = document.querySelector('.board');
const slider = document.getElementById('range');
const output = document.getElementById('value');
const randColor = document.getElementById('random-color');
const defaultColor = document.getElementById('default-color');
let DIV_BG_COLOR = '#000000';

function createBoard(size) {

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;

    for (let i = 0; i < amount; i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', function(event) {
            div.style.backgroundColor = DIV_BG_COLOR;
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

function getRandomColor() {
    const colors = ['yellow', 'red', 'blue', 'green', 'brown', 'pink', 'orange', 'purple'];

    randColor.addEventListener('click', function(event){
        let random = Math.floor(Math.random() * colors.length);

        while (DIV_BG_COLOR === colors[random]) {
            random = Math.floor(Math.random() * colors.length);
        };

        DIV_BG_COLOR = colors[random];
    });
};

function getDefaultColor() {
    defaultColor.addEventListener('click', function(event){
        DIV_BG_COLOR = '#000000'; 
    })
};

createBoard(slider.value);
getBoardSize();
getRandomColor();
getDefaultColor();





