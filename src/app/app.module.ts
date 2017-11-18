import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FirebaseImagePipe } from './pipe/FirebaseImagePipe';

// Import Component
import { ListFilmComponent } from './components/list-film/list-film.component';
import { CardFilmComponent } from './components/card-film/card-film.component';

@NgModule({
  declarations: [
    AppComponent,
    CardFilmComponent,
    ListFilmComponent,
    FirebaseImagePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
