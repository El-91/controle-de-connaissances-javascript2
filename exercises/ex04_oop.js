/*
Exercice 4 — POO : Gestion de bibliothèque

Énoncé résumé :
- Créer Book (title, author, #isBorrowed) + méthodes borrow/returnBook/isBorrowed
- Créer User (name, borrowedCount) + borrow(book)
- Créer Librarian extends User + forceReturn(book)
- Faire les tests obligatoires en bas
*/

class Book {
  #isBorrowed;

  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.#isBorrowed = false;
  }

  borrow() {
    // TODO : si déjà emprunté -> false
    // sinon marquer emprunté -> true
  }

  returnBook() {
    // TODO : remettre non emprunté et retourner true
  }

  isBorrowed() {
    // TODO : retourner true/false
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.borrowedCount = 0;
  }

  borrow(book) {
    // TODO :
    // - appeler book.borrow()
    // - si true : borrowedCount++ et return true
    // - sinon return false
  }
}

class Librarian extends User {
  forceReturn(book) {
    // TODO : forcer le retour du livre (book.returnBook())
    // retourner true si réussi
  }
}

// --------------------
// Tests obligatoires
// --------------------
const book1 = new Book("1984", "George Orwell");
const book2 = new Book("Le Petit Prince", "Antoine de Saint-Exupéry");

const user = new User("Sara");
const librarian = new Librarian("Mr. Smith");

console.log("User emprunte book1:", user.borrow(book1)); // attendu: true
console.log("Book1 emprunté ?", book1.isBorrowed()); // attendu: true

console.log("Librarian essaie d'emprunter book1:", librarian.borrow(book1)); // attendu: false

console.log("Force return book1:", librarian.forceReturn(book1)); // attendu: true
console.log("Book1 emprunté ?", book1.isBorrowed()); // attendu: false

console.log("User ré-emprunte book1:", user.borrow(book1)); // attendu: true
console.log("Borrowed count user:", user.borrowedCount); // attendu: 2 (si user a emprunté 2 fois)
