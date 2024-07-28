const gridDimension = 8;
const gameCellOptions = ['empty', 'slime', 'chest'];
const gameCellSpritePathPrefix = 'sprites\\';
const gameCellSpriteePathSuffix = '-sprite.png';

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
        return;
    }
    document.addEventListener('DOMContentLoaded', fn);
}

function populateGridCells() {
    let gridContainer = document.getElementById('game-grid');

    addFirstRow(gridContainer);
    for (let i = 0; i < gridDimension; i++) {
        addSubsequentRow(gridContainer);
    }
}

function addGameCell(gridContainer) {
    let newCell = document.createElement('div');
    newCell.classList.add('grid-item', 'game-cell');
    newCell.appendChild(document.createElement("img"));
    newCell.setAttribute('data-options-index', -1);
    updateGameCellData(newCell, 0);
    newCell.addEventListener("click", () => {
        updateGameCell(newCell);

    });

    gridContainer.appendChild(newCell)
}

function updateGameCell(gameCellElement) {
    let currentIndex = gameCellElement.dataset.optionsIndex;
    let newIndex = (currentIndex + 1) % gameCellOptions.length;

    updateGameCellData(gameCellElement, newIndex);
}

function updateGameCellData(gameCellElement, newIndex) {
    let optionName = gameCellOptions[newIndex];
    gameCellElement.setAttribute('data-options-index', newIndex);

    let imageElement = gameCellElement.children[0];
    imageElement.src = gameCellSpritePathPrefix + gameCellOptions[newIndex] + gameCellSpriteePathSuffix;
}

function addNumberCell(gridContainer) {
    let newCell = document.createElement('div');
    newCell.classList.add('grid-item', 'number-cell');
    
    let inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'number');
    inputElement.setAttribute('min', 0);
    inputElement.setAttribute('max', gridDimension);
    inputElement.setAttribute('value', 0);

    newCell.appendChild(inputElement);
    gridContainer.appendChild(newCell);
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

function getBoardStateAsArray() {

}

// Without brackets: passing function into ready
// With brackets: passing function result into ready
ready(populateGridCells);