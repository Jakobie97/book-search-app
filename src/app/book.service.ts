import { Injectable } from '@angular/core';
import { BOOKS } from './catalog';
import { Book } from './books';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl = 'api/books';  // URL to web api

  constructor(
    private http: HttpClient) {}

    /** gets heroes from the server :D */
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
    .pipe(
      catchError(this.handleError<Book[]>('getBooks', []))
    );
  }

  httpOptions<T>(booksUrl: string, book: Book, httpOptions: any) {
    throw new Error('Method not implemented.');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  log(arg0: string) {
    throw new Error('Method not implemented.');
  }



}
