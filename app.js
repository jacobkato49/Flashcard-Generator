//Ask Charlie or Tyler if I could change "var" to "const"
var inquirer = require("inquirer");
var colors = require("colors");
var FlashCard = require("./basic");
var ClozeCard = require("./cloze");
var fs = require("fs");

//maybe put in a json to store the flashcards
var library = require("./cardStorage.json");


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


function newCard (){
  inquirer.prompt([
    //Grabbed these things from the inquirer documentation on the npm website
    {
      type: "list",
      message: "Which flashcard will you create?",
      choices: ["Basic", "Cloze"],
      name: "cardType"
    }

  //now do the promise distinguishing which type of card
  ]).then(function(flashData){

    var cardType = flashData.cardType;
    //check with console.log
    console.log(flashData);


    //if the user chooses the basic card
    if(cardType === "Basic"){
      inquirer.prompt([
        {
          type: "input",
          message: "Fill the out the front of the card (Your Study Question),",
          name: "frontCard"
        },

        {
          type: "input",
          message: "Fill the out the back of the card (Answer),",
          name: "backCard"
        }

      ]).then(function (basicCardData){

        //make a object to store the info of the front and back of the card
        var userCard = {
          type: "Basic",
          front: basicCardData.frontCard,
          back: basicCardData.backCard
          //maybe shorten the paremeters and names passing in
        };

        //push the cards the user creates into an array
        library.push(userCard);

        //now write the user created cards to the json (in-class exercise)
        fs.writeFile("cardStorage.json", JSON.stringify(library, null, 2)); /**look at the documentation again**/


        //now lets check if the user would like to write another card
      })
    }
  });
}
