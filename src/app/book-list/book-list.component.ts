import { Component, OnInit } from '@angular/core';
import { Book } from '../books'
import { BOOKS } from '../catalog'
import { BookService } from '../book.service';




@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  selectedBook?: Book;
  //bookService: any;

  constructor(private bookService: BookService) { }

  //--service call that gets the books-----------------------------
  getBooks(): void {
    this.bookService.getBooks()
        .subscribe(books => this.books = books);
  }
  ngOnInit(): void {
    this.getBooks();
  }
//------------ Action for display-----------------------------------
  onSelect(book: Book): void {
    this.selectedBook = book;
  }
  
  addButtonClicked = false;
  

  addNew(): void {
    this.addButtonClicked = true;
    /*
    name = name.trim();
    if (!name) { return; }
    this.bookService.addBook({ name } as Book)
      .subscribe((book: Book) => {
        this.books.push(book);
      });*/
      
  }
  //placeholder ---------------------------------------------------
  updateBook()
  {
    alert("book updated!")
  }
  deleteBook()
  {
    alert("book deleted!")
  }
  //-------------------------------------------------------------------
}
