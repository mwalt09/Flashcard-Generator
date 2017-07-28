var BasicCard = function(front, back) {
  this.front = front;
  this.back = back;
  console.log("\n==========================================\n\n" + this.front + "\n\n");
};

// var firstPresident = new BasicCard("Who was the first President of the United States?", "George Washington");
//
// console.log(firstPresident.front);
// console.log(firstPresident.back);

module.exports = BasicCard;
