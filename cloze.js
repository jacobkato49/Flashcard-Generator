//Constructor function for Cloze Card
//Similar to the Flashcard
function Cloze (text,cloze){
  this.text = text.split(cloze);
  this.cloze = cloze

}

//Use a protoype here
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
