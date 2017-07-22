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
