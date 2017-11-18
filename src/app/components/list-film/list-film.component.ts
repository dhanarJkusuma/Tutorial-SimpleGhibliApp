import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film';
import { FilmResponse } from '../../models/film_response';


// Import Service
import { FilmsService } from '../../services/films.service';
@Component({
  selector: 'list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css'],
  providers: [
    FilmsService 
    // Untuk bisa menjalankan FilmService, 
    // kita harus memasukknya kedalam providers di component tempat kita menjalankan
  ]
})
export class ListFilmComponent implements OnInit {

  // Deklarasi variable films
  films: Film[];

  // Inisialisasi service di constructor
  constructor(private service: FilmsService) {
    
  }

  // Fungsi membuat fake data satu film
  createFilm(): Film{
    var film: Film = new Film
    film.title = "Judul";
    film.release_date = "2008";
    film.rt_score = 100;
    film.producer = "Dhanar-kun";
    film.director = "Miku-chan";
    film.description = "Ini Deskripsi";
    return film;
  }

  ngOnInit() {
    // Menjalankan service
    this.service.fetchDataFilms().subscribe((response: FilmResponse) => {
      // Mengisi variable films dengan data response film
      this.films = response.films;
    })
  }
  

}
