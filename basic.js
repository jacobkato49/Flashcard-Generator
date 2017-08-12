//Constructor for the basic flashcard
function FlashCard (front, back){ /**pass in parameters of front and back**/
  this.front = front,
  this.back = back
}

//Now export the constructor function
// .exports ≠ export
module.exports = FlashCard;
