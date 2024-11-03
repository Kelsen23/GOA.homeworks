
class LibrarySystem {
  constructor(title, year, isAvailable) {
    this.title = title;
    this.year = year;
    this.isAvailable = isAvailable;
  }

  borrowItem() {
    !this.isAvailable ? console.log(`"${this.title}" Book is not available`): console.log(`You borrowed a book of "${this.title}"!`)
  }

  returnItem() {
    console.log('You returned an item');
  }
}

class Book extends LibrarySystem {
  constructor(title, year, isAvailable, author, genre) {
    super(title, year, isAvailable);
    this.author = author;
    this.genre = genre;
  }

  getSummary() {
    console.log(`Title: ${this.title}; Year: ${this.year}; Author: ${this.author}; Year: ${this.year}; Genre: ${this.genre}`);
  }
}

class Magazine extends LibrarySystem {
  constructor(title, year, isAvailable, author, issueNumber) {
    super(title, year, isAvailable);
    this.author = author;
    this.issueNumber = issueNumber;
  }

  getSummary() {
    console.log(`Title: ${this.title}; Year: ${this.year}; Author: ${this.author}; Year: ${this.year}; Issue Number: ${this.issueNumber}`);
  }
}

const book1 = new Book("To Kill a Mockingbird", 1960, false, "Harper Lee", "Fiction");
book1.getSummary();
book1.borrowItem();

const magazine1 = new Magazine("National Geographic", 2023, true, "Various Authors", 10);
magazine1.getSummary();
magazine1.borrowItem();