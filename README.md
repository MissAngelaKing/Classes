# classes-lab

## Exercise: Building a Book Class

### Background:
Books are common objects with well-defined properties and behaviors. A Book class can encapsulate all the typical information and functionalities associated with a book.

### Task:
Create a Book class with the following specifications:

### Properties (Instance Variables):

#### title: the title of the book.
#### author: the name of the author.
#### year: the year the book was published.
#### borrowed: a boolean that indicates whether the book is borrowed or not (default should be false).

### Constructor:
Your constructor should take the title, author, and year as parameters and initialize the respective properties. The borrowed property should be initialized to false.

### Instance Methods:
#### borrow(): This method should change the borrowed status to true.
#### returnBook(): This method should set the borrowed status to false.
#### isBorrowed(): This method should return the current borrowed status.
#### getInfo(): This method should return a string containing information about the book (e.g., "Title: 1984, Author: George Orwell, Year: 1949, Borrowed: No").

### Static Method:
comparePublicationYear(book1, book2): This static method should take two instances of Book and return the book that was published earlier. If both books were published in the same year, return either.
