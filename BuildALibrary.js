class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedout(newIsCheckedOut) {
    this._isCheckedOut = newIsCheckedOut;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut ;   
  }
  getAverageRating() {
  let ratingSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
  const lengthOfArray = ratings.length;
  return ratingSum/lengthOfArray;
  }
  addRating(inputValue) {
    this._ratings.push(inputValue);
  }
}
class Book extends Media {
  constructor(title, author, pages ) {
  super(title);
  this._author = author; 
  this._pages = pages; 
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4, 5, 5);
console.log(historyOfEverything.getAverageRating);

class Movie extends Media {
  constructor(title, director, runtime) {
    super(title);
    this._director = director;
    this._runtime = runtime;
  }
  get director() {
    return this._director;
  }
  get runtime() {
    return this._runtime;
  }
}
const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1, 1, 5);
console.log(speed.getAverageRating);









