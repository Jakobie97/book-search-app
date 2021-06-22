import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './books';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      { id: 1, name: 'Ready Player One ', description: 'A dystopia in 2045, on the search for an Easter egg in a worldwide virtual reality game' },
      { id: 2, name: 'Harry Potter and the Chanber of Sectrets', description: ' Harry receives a warning from a strange, impish creature named Dobby who says that if Harry Potter returns to Hogwarts'  },
      { id: 3, name: 'book3', description: 'something'  },
      { id: 4, name: 'book4', description: 'something'  },
      { id: 5, name: 'book5', description: 'something'  },
      { id: 6, name: 'book6', description: 'something'  },
      { id: 7, name: 'book7', description: 'something'  },
      { id: 8, name: 'Book8', description: 'something' },
      { id: 9, name: 'book9', description: 'something'  },
      { id: 10, name: 'book10', description: 'something'  },
      { id: 11, name: 'book11', description: 'something'  },
      { id: 12, name: 'book12', description: 'something'  },
      { id: 13, name: 'book13', description: 'something'  },
    ];
    return {books};
  }

  // Overrides the genId method to ensure that a book always has an id.
  // If the books array is empty,
  // the method below returns the initial number (11).
  // if the books array is not empty, the method below returns the highest
  // book id + 1.
  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map(books => books.id)) + 1 : 11;
  }
}