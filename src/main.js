const gridDimension = 8;

function ready(fn) {
    console.log("Do I run?");
    if (document.readyState !== 'loading') {
        fn();
        return;
    }
    document.addEventListener('DOMContentLoaded', fn);
}

function populateGridCells() {
    console.log('My function was callled.');

    let gridContainer = document.getElementById('game-grid');

    addFirstRow(gridContainer);
    for (let i = 0; i < gridDimension; i++) {
        addSubsequentRow(gridContainer);
    }
}

function addGameCell(gridContainer) {
    let newCell = document.createElement('div');
    newCell.classList.add('grid-item', 'game-cell');
    newCell.innerText = 's';

    gridContainer.appendChild(newCell)
}

function addNumberCell(gridContainer) {
    let newCell = document.createElement('div');
    newCell.classList.add('grid-item', 'number-cell');
    newCell.innerText = 'n';

    gridContainer.appendChild(newCell)
}

function addFirstRow(gridContainer) {
    // Add pretty pony cell
    let newCell = document.createElement('div');
    newCell.classList.add('grid-item', 'pretty-pony-cell');
    newCell.innerText = 'p';
    gridContainer.appendChild(newCell)

    for (let i = 0; i < gridDimension; i++) {
        addNumberCell(gridContainer);
    }
}

function addSubsequentRow(gridContainer) {
    addNumberCell(gridContainer);
    for (let i = 0; i < gridDimension ; i++) {
        addGameCell(gridContainer);
    }
}

// Without brackets: passing function into ready
// With brackets: passing function result into ready
ready(populateGridCells);