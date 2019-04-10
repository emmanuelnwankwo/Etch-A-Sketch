// Var declaration to get doc id's
const container = document.getElementById("container");
const resetButton = document.getElementById("resetButton");
const randomButton = document.getElementById("randomButton");
const defaultButton = document.getElementById("defaultButton");
const eraseButton = document.getElementById("eraseButton");

// Draw a grid with gridSize number of rows and rolumns
const drawGrid = (gridSize, gridTotal) => {
    for (let index = 0; index < gridTotal; index++) {
        let div = document.createElement("div");
        div.setAttribute("class", "board");
        container.appendChild(div);
    }
    container.setAttribute("style", `grid: repeat(${gridSize}, auto) / repeat(${gridSize}, auto)`);
}

// Set grid colour on board to black on mouse hover
function defaultColour() {
    let gridBox = document.querySelectorAll(".board");
    gridBox.forEach((div) => {
        div.addEventListener("mouseover", function (e) {
            e.target.setAttribute("style", "background-color: black;");
        });
    });
}

// Random combination of RGB colour values
function randomColours() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return (`rgb( ${red}, ${green}, ${blue});`);
}

// Set the colour of the grid to random RGB value on mouse hover
function rgbColour() {
    let gridBox = document.querySelectorAll(".board");
    gridBox.forEach((div) => {
        div.addEventListener("mouseover", function (e) {
            e.target.setAttribute("style", `background-color: ${randomColours()};`);
        });
    });
}

// Set the colour of the grid to random RGB value on mouse hover
function eraser() {
    let gridBox = document.querySelectorAll(".board");
    gridBox.forEach((div) => {
        div.addEventListener("mouseover", function (e) {
            e.target.setAttribute("style", "background-color: white;");
        });
    });
}

// Removes grids on the board to reset board to a new grid
function removeGrid() {
    let gridBox = document.querySelectorAll(".board");
    gridBox.forEach((div) => {
        div.parentNode.removeChild(div);
    });
}

// Remove the grid and prompt the user for the new size of grid on the board
resetButton.addEventListener("click", function () {
    const gridPrompt = prompt(`How large would you like your new grid to be?
    Enter one side only e.g (16) for 16x16 grid
    `);
    const gridTotal = gridPrompt * gridPrompt;
    if (gridPrompt === null) {
         return;
    } else {
    removeGrid();
    drawGrid(gridPrompt, gridTotal);
    defaultColour();
    }
});

// On button press to implement titled actions on the grid board
randomButton.addEventListener('click', rgbColour);
defaultButton.addEventListener('click', defaultColour);
eraseButton.addEventListener('click', eraser);

// On DOM load to create 16x16 grid and activates the default colour function (button)
document.addEventListener("DOMContentLoaded", function () {
    drawGrid(16, 256);
    defaultColour();
});