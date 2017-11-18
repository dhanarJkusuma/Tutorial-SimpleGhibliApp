import { Injectable } from '@angular/core';
// Http & Response yang akan digunakan untuk request ke api
import { Http, Response } from '@angular/http';
// Operator untuk mapping yang disediakan oleh rxjs
import 'rxjs/add/operator/map'
// Observable class yang berisi sumber data yang nantinya akan di subscribe
import { Observable } from 'rxjs/Observable';
// Model response 
import { FilmResponse } from '../models/film_response';

@Injectable()
export class FilmsService {

  // Buat variable imageserver dan token image
  imageServer = "https://firebasestorage.googleapis.com/v0/b/ghibli-angular-4.appspot.com/o/";
  tokenImage = "?alt=media&token=d0452e8a-6be1-41d0-87c0-afae5f618501";


  // Inisialisasi http di constructor
  constructor(
    private http: Http
  ) { }

  // fungsi mengambil data film di api
  fetchDataFilms(): Observable<FilmResponse> {
    return this.http.get('https://ghibliapi.herokuapp.com/films')
              .map((response:Response) => {
                // mapping response yang nantinya akan mengembalikan FilmResponse
                var filmsRes = new FilmResponse;
                filmsRes.films = response.json();
                return filmsRes;
              })
  }

  // fungsi untuk mendapatkan link image
  getImage(filmId: string): string{
    return this.imageServer + filmId + ".jpg" + this.tokenImage;
  }
}
