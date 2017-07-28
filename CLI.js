var FlashCardAdmin = require("./flashcardAdmin.js");
var inquirer = require("inquirer");

// var questionType = process.argv[2];
// var question = process.argv[3];
// var answer = process.argv[4];



var myFlashCardAdmin = new FlashCardAdmin();
//
// if (questionType === "cloze") {
//   myFlashCardAdmin.cloze(question, answer);
// }
// else {
//   myFlashCardAdmin.basic(question, answer);
// }
var choices = ["Cloze", "Basic"];
var clozeQuestionBank = [
  {
    question: "Cesar Chavez fought for the rights of migrant farm workers in the southwestern USA.",
    answer: "Cesar Chavez"
  },
  {
    question: "Lewis and Clark explored the American West with Sacajawea.",
    answer: "Lewis and Clark"
  },
  {
    question: "The Titanic hit an iceberg on its maiden voyage.",
    answer: "iceberg"
  },
  {
    question: "George Washington was the first President of the United States",
    answer: "George Washington"
  }
];
var basicQuestionBank = [
  {
    question: "In 1986 the prime minister of which European country was assassinated on his way home from the cinema with his wife?",
    answer: "Sweeden"
  },
  {
    question: "In 1816 which US state was admitted to the Union as the 20th state?",
    answer: "Mississippi"
  },
  {
    question: "In which year did the demolition of the Berlin Wall begin?",
    answer: "1989"
  },
  {
    question: "Who became president after the assassination of Abraham Lincoln?",
    answer: "Andrew Johnson"
  }
];

var choice = "";

var questionType = function() {
  inquirer.prompt([
    {
      name: "choice",
      type: "list",
      message: "Would you like to study with BASIC or CLOZE flashcards?",
      choices: choices
    }
  ]).then(function(answer) {
    if (answer.choice === "Cloze") {
      choice = "cloze";
      createQuestions();
    }
    else {
      choice = "basic";
      createQuestions();
    }
  });
};


var createQuestions = function() {

  inquirer.prompt([
    {
      name: "confirm",
      type: "confirm",
      message: "Would you like to add flashcards to the deck?"
    }
  ]).then(function(answer) {
    if (answer.confirm === true) {
      inquirer.prompt([
        {
          name: "question",
          message: "Enter Question"
        },
        {
          name: "answer",
          message: "Enter Answer"
        }
      ]).then(function(question) {

        var Question = new questionConstructor(question.question, question.answer);
        // console.log(clozeQuestion.question);
        // console.log(clozeQuestion.answer);

        if (choice === "cloze") {
          clozeQuestionBank.push(Question);

          console.log("\n=========================================================" + "\nQustion added to the deck\n" + "=========================================================\n\n");

          createQuestions();
        }
        else {
          basicQuestionBank.push(Question);

          console.log("Qustion added to the deck");

          createQuestions();
        }

      });
    }
    else {
      console.log("Proceed to game");
      if (choice === "cloze") {
        playGameCloze();
      }
      else {
        playGameBasic();
      }
    }
  });
};

var questionConstructor = function(question, answer) {
  this.question = question;
  this.answer = answer;
};

var correct = 0;
var incorrect = 0;
var counter = 0;

var playGameCloze = function() {
  if (clozeQuestionBank.length > 0) {
    if (counter < (clozeQuestionBank.length)) {
      myFlashCardAdmin.cloze(clozeQuestionBank[counter].question, clozeQuestionBank[counter].answer);
      inquirer.prompt([
        {
          name: "input",
          type: "input",
          message: "Input Guess"
        }
      ]).then(function(guess) {
        if (guess.input === clozeQuestionBank[counter].answer) {
          console.log("\nCorrect!");
          correct++;
          counter++;
          playGameCloze();
        }
        else {
          console.log("\nCorrect Answer: " + clozeQuestionBank[counter].answer + "\n");
          incorrect++;
          counter++;
          playGameCloze();
        }
      });
    }
    else {
      if (correct === clozeQuestionBank.length) {
        console.log("\n=======================================================\nPERFECT SCORE!!!\nResults: " + correct + " out of " + clozeQuestionBank.length);
        inquirer.prompt([
          {
            name: "confirm",
            type: "confirm",
            message: "Do you want to restart?"
          }
        ]).then(function(answer) {
          if (answer.confirm) {
            correct = 0;
            incorrect = 0;
            counter = 0;
            questionType();
          }
          else {
            console.log("\n=======================================================\nGoodbye");
          }
        });
      }
      else {
        console.log("\n=======================================================\nResults: " + correct + " out of " + clozeQuestionBank.length + "\n\nKeep trying until you get a perfect score!");
        inquirer.prompt([
          {
            name: "confirm",
            type: "confirm",
            message: "Do you want to restart?"
          }
        ]).then(function(answer) {
          if (answer.confirm) {
            correct = 0;
            incorrect = 0;
            counter = 0;
            questionType();
          }
          else {
            console.log("\n=======================================================\nGoodbye");
          }
        });
      }
    }
  }
};

var playGameBasic = function() {
  if (basicQuestionBank.length > 0) {
    if (counter < (basicQuestionBank.length)) {
      myFlashCardAdmin.basic(basicQuestionBank[counter].question, basicQuestionBank[counter].answer);
      inquirer.prompt([
        {
          name: "input",
          type: "input",
          message: "Input Guess"
        }
      ]).then(function(guess) {
        if (guess.input === basicQuestionBank[counter].answer) {
          console.log("\nCorrect!");
          correct++;
          counter++;
          playGameBasic();
        }
        else {
          console.log("\nCorrect Answer: " + basicQuestionBank[counter].answer + "\n");
          incorrect++;
          counter++;
          playGameBasic();
        }
      });
    }
    else {
      if (correct === basicQuestionBank.length) {
        console.log("\n=======================================================\nPERFECT SCORE!!!\nResults: " + correct + " out of " + basicQuestionBank.length);
        inquirer.prompt([
          {
            name: "confirm",
            type: "confirm",
            message: "Do you want to restart?"
          }
        ]).then(function(answer) {
          if (answer.confirm) {
            correct = 0;
            incorrect = 0;
            counter = 0;
            questionType();
          }
          else {
            console.log("\n=======================================================\nGoodbye");
          }
        });
      }
      else {
        console.log("\n=======================================================\nResults: " + correct + " out of " + basicQuestionBank.length + "\n\nKeep trying until you get a perfect score!");
        inquirer.prompt([
          {
            name: "confirm",
            type: "confirm",
            message: "Do you want to restart?"
          }
        ]).then(function(answer) {
          if (answer.confirm) {
            correct = 0;
            incorrect = 0;
            counter = 0;
            questionType();
          }
          else {
            console.log("\n=======================================================\nGoodbye");
          }
        });
      }
    }
  }
};



questionType();
