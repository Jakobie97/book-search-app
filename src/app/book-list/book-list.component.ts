import { Component, OnInit } from '@angular/core';
import { Book } from '../books'
import { BOOKS } from '../catalog'


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books = BOOKS;
  selectedBook?: Book;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
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
