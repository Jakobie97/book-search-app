import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';

import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    //HttpClientInMemoryWebApiModule.forRoot(
    //InMemoryDataService, { dataEncapsulation: false }

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
