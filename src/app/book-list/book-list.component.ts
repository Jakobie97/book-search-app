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

    this.addButtonClicked = false;
  }

    addButtonClicked = false;
  addNew() {
    this.addButtonClicked = true;
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
