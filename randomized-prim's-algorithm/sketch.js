let cols, rows;
let w = 20;
let cells = [];
let current;

let maze = [];
let walls = [];

function setup() {
   createCanvas(600, 600);
   cols = floor(width / w);
   rows = floor(height / w);

   for (var y = 0; y < rows; y++) {
      cells[y] = [];
      for (var x = 0; x < cols; x++) {
         cells[y][x] = new Cell(x, y);
      }
   }

   for (var y = 0; y < rows; y++) {
      for (var x = 0; x < cols; x++) {
         cells[y][x].setupWalls();
      }
   }

   let randomX = floor(random(0, cols - 1));
   let randomY = floor(random(0, rows - 1));
   current = cells[randomY][randomX];
   current.visited = true;
   maze.push(current);
   addWalls(current);
}

function draw() {

   for (var y = 0; y < rows; y++) {
      for (var x = 0; x < cols; x++) {
         cells[y][x].show();
      }
   }
   showCurrent();

   if (walls.length > 0) {

      let wallIndex = floor(random(0, walls.length - 1));
      let wall = walls[wallIndex];
      if (wall && wall.parentCell.visited && !wall.otherCell.visited) {

         let parentX = wall.parentCell.x;
         let parentY = wall.parentCell.y;
         let otherX = wall.otherCell.x;
         let otherY = wall.otherCell.y;
         if (parentY - otherY === 1) {
            wall.parentCell.topWall.show = false;
            wall.otherCell.bottomWall.show = false;
         } else if (parentY - otherY === -1) {
            wall.parentCell.bottomWall.show = false;
            wall.otherCell.topWall.show = false;
         } else if (parentX - otherX === 1) {
            wall.parentCell.leftWall.show = false;
            wall.otherCell.rightWall.show = false;
         } else if (parentX - otherX === -1){
            wall.parentCell.rightWall.show = false;
            wall.otherCell.leftWall.show = false;
         }

         wall.otherCell.visited = true;
         maze.push(wall.otherCell);
         addWalls(wall.otherCell);
         current = wall.otherCell;
         // walls.splice(wallIndex, 1);
      }
      // else {
      //    walls.splice(wallIndex, 1);
      // }
      walls.splice(wallIndex, 1);


   }
}

function addWalls(cell) {
   if (cell.topWall && cell.topWall.show) walls.push(cell.topWall);
   if (cell.rightWall && cell.rightWall.show) walls.push(cell.rightWall);
   if (cell.bottomWall && cell.bottomWall.show) walls.push(cell.bottomWall);
   if (cell.leftWall && cell.leftWall.show) walls.push(cell.leftWall);
}

function showCurrent(){
   noStroke();
   fill(50, 100, 200);
   rect(current.x * w, current.y * w, w, w);
}
