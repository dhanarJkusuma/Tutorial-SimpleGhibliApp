import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../../models/film';
import { FilmsService  } from '../../services/films.service';

@Component({
  selector: 'card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.css'],
  providers: [
    FilmsService
  ]
})
export class CardFilmComponent implements OnInit {

  @Input() film : Film;

  imageLink = "assets/ghibli.png"

  constructor(
    private service: FilmsService
  ) { 
    
  }

  ngOnInit() {
  }

}
