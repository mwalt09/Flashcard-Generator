var ClozeCard = require("./clozeCard.js");
var BasicCard = require("./basicCard.js");

var FlashCardAdmin = function() {
  this.basic = function(question, answer) {
    var basic = new BasicCard(question, answer);
    // console.log(basic.front);
  };
  this.cloze = function(question, answer) {
    var cloze = new ClozeCard(question, answer);
    cloze.partial();
  };
};

module.exports = FlashCardAdmin;
