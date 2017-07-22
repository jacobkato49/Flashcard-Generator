var inquirer = require("inquirer");
var colors = require("colors");
var FlashCard = require("./basic");
var ClozeCard = require("./cloze");
var fs = require("fs");
//maybe put in a json to store the flashcards


//Create open variables to be manipulated later in the functions
var drawFlashCard;
var playFlashCard;
var count= 0;


//Option to start with a new flashcard or look at existing ones
function lookAtMenu(){

  //have inquirer prompt the user
  inquirer.prompt([
    //Create an object for the prompt
    {
      type: "list",
      message: "\nPlease chooose the option below.",
      choices: ["Create New", "Use all", "Random", "Shuffle Please", "Show me the Card", "Exit"],
      name: "menuOptions"
    }

  ]).then(function(answer){
    //create a empty variable and use within the switch to do a setTimeout for each switch function
    var messageWait;

    //switch statement for the user choice
    switch(answer.menuOptions){

      case "Create New":
        console.log("New flashcard time!");
        messageWait = setTimeout(newCard, 2000);
        break;

      case "Use all":
        console.log("These are all the cards you have created");
        messageWait = setTimeout(quizTime, 1000);
        break;

      case "Random":
        console.log("Reading for a random one?");
        messageWait = setTimeout(randomTime, 2000);
        break;

      case "Shuffle":
        console.log("I am shuffling through the deck. One moment please.");
        messageWait = setTimeout(everdayImShuffling, 3000);
        break;

      case "Show me the card":
        console.log("Here you go!");
        messageWait = setTimeout(reveal, 1000);
        break;

      case "Exit":
        console.log("Good luck with your test :)");
        messageWait = setTimeout(byeBye, 1000);
        break;

      //Create a default if the user does not follow the directions
      default:
        console.log("............");
        console.log("Sorry I don't understand");
        console.log("\nPlease follow the directions.");
    }
  });
}

//call the function so you can intiate the switch statement
lookAtMenu();
