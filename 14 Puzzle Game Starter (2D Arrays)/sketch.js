// 2D Arrays (Puzzle Starter)
// Mr. Scott
// Nov 3, 2026

// grid sized 6 x 5
// 0 (black)     255 (white)

let grid = [
  [0,    255,  0,    255,   0,    255],
  [255,  0,    255,  0,     255,  0  ],
  [255,  255,  255,  255,   255,  255],
  [0,    0,    0,    0,     0,    0  ],
  [255,  255,  0,    255,   255,  0  ] 
];
let rows = grid.length;
let cols = grid[0].length;
const tileSize = 60;

async function setup() {
  createCanvas(cols*tileSize, rows*tileSize);
}

function draw() {
  background(220);
  renderGrid();
}

function renderGrid(){
  // interpret the data stored in 2D array
  // and draw a matrix to square to reflect
  // it.
  for(let y = 0; y < rows; y++){//y:01234
    for(let x = 0; x<cols; x++){//x:012345
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*tileSize, y*tileSize, tileSize);
    }
  } 
}
