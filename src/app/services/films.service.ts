import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { FilmResponse } from '../models/film_response';

@Injectable()
export class FilmsService {

  imageServer = "https://firebasestorage.googleapis.com/v0/b/ghibli-angular-4.appspot.com/o/";
  tokenImage = "?alt=media&token=d0452e8a-6be1-41d0-87c0-afae5f618501";

  constructor(
    private http: Http
  ) { }

  fetchDataFilms(): Observable<FilmResponse> {
    return this.http.get('https://ghibliapi.herokuapp.com/films')
              .map((response:Response) => {
                var filmsRes = new FilmResponse;
                filmsRes.films = response.json();
                return filmsRes;
              })
  }

  getImage(filmId: string): string{
    return this.imageServer + filmId + ".jpg" + this.tokenImage;
  }


}
