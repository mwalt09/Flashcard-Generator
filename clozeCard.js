var ClozeCard = function(text, cloze) {
  this.text = text;
  this.cloze = cloze;
  this.partial = function() {
    var firstChar = text.indexOf(cloze);
    if (firstChar !== -1) {
      console.log("\n==================================================================\n\n" + text.slice(0, firstChar) + "________" + text.slice(firstChar + cloze.length) + "\n" + "\n");
    }
    else {
      console.log("Houston, we have a problem. Please check your answer choice.");
    }
  };
};

// var firstPresident = new ClozeCard("George Washington was the first President of the United States of America.", "George Washington");
//
// console.log(firstPresident.text);
// console.log(firstPresident.cloze);
// firstPresident.partial();


module.exports = ClozeCard;
