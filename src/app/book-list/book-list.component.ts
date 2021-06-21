import { Component, OnInit } from '@angular/core';
import { Book } from '../books'
import { CATALOG } from '../catalog'


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  
  //somehow get the catalog array to replace this 
  books : Book = {
    id: 1,
    name: 'Ready Player One',
    description: 'A dystopia in 2045, on the search for an Easter egg in a worldwide virtual reality game.'
  }
  constructor() { }

  ngOnInit(): void {
  }

  updateBook()
  {
    alert("book updated!")
  }
  deleteBook()
  {
    alert("book deleted!")
  }

}
