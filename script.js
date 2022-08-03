const container = document.getElementById("container");

function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeGrid(16, 16);
activate();

let currentColor = "black";
let currentSize = 16;

const blackBtn = document.getElementById("black");
const rainbowBtn = document.getElementById("rainbow");
const eraserBtn = document.getElementById("eraser");

blackBtn.addEventListener('click', () => {
    currentColor = "black";
    blackBtn.style.backgroundColor = 'black';
    blackBtn.style.color = 'white';
    rainbowBtn.style.backgroundColor = 'white';
    rainbowBtn.style.color = 'black';
    eraserBtn.style.backgroundColor = 'white';
    eraserBtn.style.color = 'black';
});
rainbowBtn.addEventListener('click', () => {
    currentColor = "rainbow";
    rainbowBtn.style.backgroundColor = 'black';
    rainbowBtn.style.color = 'white';
    blackBtn.style.backgroundColor = 'white';
    blackBtn.style.color = 'black';
    eraserBtn.style.backgroundColor = 'white';
    eraserBtn.style.color = 'black';
});
eraserBtn.addEventListener('click', () => {
    currentColor = "eraser";
    eraserBtn.style.backgroundColor = 'black';
    eraserBtn.style.color = 'white';
    blackBtn.style.backgroundColor = 'white';
    blackBtn.style.color = 'black';
    rainbowBtn.style.backgroundColor = 'white';
    rainbowBtn.style.color = 'black';
});

function clearGrid() {
    container.innerHTML = ''
  }

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', () => {
    clearGrid();
    makeGrid(currentSize, currentSize);
    activate();
});

const sixteen = document.getElementById("sixteen");
sixteen.addEventListener('click', () => {
    clearGrid();
    makeGrid(16, 16);
    currentSize = 16;
    activate();
    sixteen.style.backgroundColor = 'black';
    sixteen.style.color = 'white';
    fortyEight.style.backgroundColor = 'white';
    fortyEight.style.color = 'black';
    hundred.style.backgroundColor = 'white';
    hundred.style.color = 'black';
});

const fortyEight = document.getElementById("fortyEight")
fortyEight.addEventListener('click', () => {
    clearGrid();
    makeGrid(48, 48);
    currentSize = 48;
    activate();
    fortyEight.style.backgroundColor = 'black';
    fortyEight.style.color = 'white';
    sixteen.style.backgroundColor = 'white';
    sixteen.style.color = 'black';
    hundred.style.backgroundColor = 'white';
    hundred.style.color = 'black';
});

const hundred = document.getElementById("hundred");
hundred.addEventListener('click', () => {
    clearGrid();
    makeGrid(100, 100);
    currentSize = 100;
    activate();
    hundred.style.backgroundColor = 'black';
    hundred.style.color = 'white';
    fortyEight.style.backgroundColor = 'white';
    fortyEight.style.color = 'black';
    sixteen.style.backgroundColor = 'white';
    sixteen.style.color = 'black';
});


function activate() {
    const gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach((item) => {
        item.addEventListener('mouseenter', (e) => {
            if (currentColor == "black") {
                e.target.style.backgroundColor = 'black';
            }
            if (currentColor == "eraser") {
                e.target.style.backgroundColor = 'white';
            }
            if (currentColor == "rainbow") {
                const randomR = Math.floor(Math.random() * 256)
                const randomG = Math.floor(Math.random() * 256)
                const randomB = Math.floor(Math.random() * 256)
                e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
            }
        });
    });
};