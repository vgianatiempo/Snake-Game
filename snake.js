class Snake{
   constructor() {
    this.Position_ = 0;
    this.direction_= "up"
  }
  move () {
  console.log("The snake moves....");
    this.Position_ = this.Position_ + 2;
  }
  turn () {
    if (this.direction_ == "down") this.direction_= "up"
    else this.direction_="down"
  }
}
let bigSnake = new Snake("big")
bigSnake.move()
bigSnake.move();
console.log("Big snake moved a total of:", bigSnake.totalSquares_, "Squares");
