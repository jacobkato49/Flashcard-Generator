//Constructor function for Cloze Card
//Similar to the Flashcard
function ClozeCard (text,cloze){
  this.text = text.split(cloze);
  this.cloze = cloze

}

// Constructor that creates a prototype of ClozeCard to return the question missing cloze
// Declare your methods directly on the prototype. Also, `new` applies to the constructor 
// itself. Not methods on the constructor
ClozeCard.prototype.partial = function() {
  this.clozeRemoved = function() {
    return `${this.text[0]} ... ${this.text[1]}`; //<--Might take this out (will test first)
    /**Template literal enclosed by the back-tick `
    allows embedded expressions wrapped with ${}**/
  };
};

/**DEF--> Returns a reference to the Object constructor function that created the instance object.
Note that the value of this property is a reference to the function itself,
not a string containing the function's name.
The value is only read-only for primitive values such as 1, true and "test".**/

//Example
// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
// }
// Person.prototype.name = function() {
//     return this.firstName + " " + this.lastName;
// };

//Export
// .exports ≠ export
module.exports = ClozeCard;
