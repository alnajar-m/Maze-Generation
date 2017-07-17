function Cell(x, y){
   this.x = x;
   this.y = y;
   this.visited = false;

   this.top = true;
   this.right = true;
   this.bottom = true;
   this.left = true;
}

Cell.prototype.show = function () {
   if (this.visited) {
      fill(100, 100, 100);
   } else {
      fill(0);
   }
   noStroke();
   rect(this.x * w, this.y * w, w, w);

   let scaledX = this.x * w;
   let scaledY = this.y * w;

   if (this.top) {
      stroke(0);
      line(scaledX, scaledY, scaledX + 40, scaledY);
   }
   if (this.right) {
      stroke(0);
      line(scaledX + 40, scaledY, scaledX + 40, scaledY + 40);
   }
   if (this.bottom) {
      stroke(0);
      line(scaledX, scaledY + 40, scaledX + 40, scaledY + 40);
   }
   if (this.left) {
      stroke(0);
      line(scaledX, scaledY, scaledX, scaledY + 40);
   }
};
