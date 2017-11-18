import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { Film } from '../../models/film';
import { FilmResponse } from '../../models/film_response';

@Component({
  selector: 'list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css'],
  providers: [
    FilmsService
  ]
})
export class ListFilmComponent implements OnInit {

  films: Film[];

  constructor(
    private service: FilmsService
  ) {
    
   }

  ngOnInit() {
    this.service.fetchDataFilms().subscribe((response: FilmResponse) => {
      this.films = response.films;
      console.log(this.films);
    })
  }

}
