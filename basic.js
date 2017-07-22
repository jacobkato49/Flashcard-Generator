//Constructor for the basic flashcard
function Flashcard (front, back){ /**pass in parameters of front and back**/
  this.front = front,
  this.back = back
}

//Now export the constructor function
modules.export = Flashcard;
