function Cell(x, y){
   this.x = x;
   this.y = y;
   this.visited = false;

}

Cell.prototype.setupWalls = function () {
   if (this.y > 0) {
      this.topWall = {
         show: true,
         parentCell: this,
         otherCell: cells[this.y - 1][this.x]
      }
   } else {
      this.topWall = undefined;
   }

   if (this.x < cols - 1) {
      this.rightWall = {
         show: true,
         parentCell: this,
         otherCell: cells[this.y][this.x + 1]
      }
   } else {
      this.rightWall = undefined;
   }

   if (this.y < rows - 1) {
      // console.log(this.y);
      // console.log(this.x);
      // console.log(cells);
      this.bottomWall = {
         show: true,
         parentCell: this,
         otherCell: cells[this.y + 1][this.x]
      }
   } else {

      this.bottomWall = undefined;
   }

   if (this.x > 0) {
      this.leftWall = {
         show: true,
         parentCell: this,
         otherCell: cells[this.y][this.x - 1]
      }
   } else {
      this.leftWall = undefined;
   }
};

Cell.prototype.show = function () {
   if (this.visited) {
      fill(100, 100, 100);
   } else {
      // fill(50);
      fill(0);
   }
   noStroke();
   rect(this.x * w, this.y * w, w, w);

   let scaledX = this.x * w;
   let scaledY = this.y * w;

   if (this.topWall && this.topWall.show) {
      stroke(0);
      line(scaledX, scaledY, scaledX + 40, scaledY);
   }
   if (this.rightWall && this.rightWall.show) {
      stroke(0);
      line(scaledX + 40, scaledY, scaledX + 40, scaledY + 40);
   }
   if (this.bottomWall && this.bottomWall.show) {
      stroke(0);
      line(scaledX, scaledY + 40, scaledX + 40, scaledY + 40);
   }
   if (this.leftWall && this.leftWall.show) {
      stroke(0);
      line(scaledX, scaledY, scaledX, scaledY + 40);
   }
};
