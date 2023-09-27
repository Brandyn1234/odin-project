function createBoard(size) {
    let board = document.querySelector('.board');

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;

    for (let i = 0; i < amount; i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', function() {
            div.style.backgroundColor = 'black';
        });
        board.appendChild(div);
    };    
};

createBoard(16);


