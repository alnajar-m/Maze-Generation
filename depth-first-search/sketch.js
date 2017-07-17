let cols, rows;
let w = 20;
let cells = [];
let current;
let neighbors;
let up = 1;
let right = 2;
let down = 3;
let left = 4;
let visitedCells = [];

function setup() {
   createCanvas(601, 601);
   cols = floor(width / w);
   rows = floor(height / w);

   for (var y = 0; y < rows; y++) {
      cells[y] = [];
      for (var x = 0; x < cols; x++) {
         cells[y][x] = new Cell(x, y);
      }
   }

   current = cells[0][0];
   current.visited = true;
   visitedCells.push(current);

}

function draw() {
   background(50);
   for (var y = 0; y < rows; y++) {
      for (var x = 0; x < cols; x++) {
         cells[y][x].show();
      }
   }

   fill(0, 100, 255);
   rect(current.x * w, current.y * w, w, w);

   checkNeighbors(current);
   if (neighbors.length > 0) {
      next = neighbors[floor(random(neighbors.length))];
      next.cell.visited = true;

      if (next.dir == up) {
         current.top = false;
         next.cell.bottom = false;
      } else if (next.dir == right) {
         current.right = false;
         next.cell.left = false;
      } else if (next.dir == down) {
         current.bottom = false;
         next.cell.top = false;
      } else if (next.dir == left) {
         current.left = false;
         next.cell.right = false;
      }

      current = next.cell;
      visitedCells.push(current);
   } else {
      console.log('deadend');
      current = visitedCells.pop();
   }

}

function checkNeighbors(c) {
   neighbors = [];
   //cant read property 0 (([c.x])) of undefined (([c.y - 1]))
   if (cells[c.y - 1] && cells[c.y - 1][c.x] && !cells[c.y - 1][c.x].visited) {
      neighbors.push({cell: cells[c.y - 1][c.x], dir: up});
   }
   if (cells[c.y][c.x + 1] && !cells[c.y][c.x + 1].visited) {
      neighbors.push({cell: cells[c.y][c.x + 1], dir: right});
   }
   if (cells[c.y + 1] && cells[c.y + 1][c.x] && !cells[c.y + 1][c.x].visited) {
      neighbors.push({cell: cells[c.y + 1][c.x], dir: down});
   }
   if (cells[c.y][c.x - 1] && !cells[c.y][c.x - 1].visited) {
      neighbors.push({cell: cells[c.y][c.x - 1], dir: left});
   }

}
