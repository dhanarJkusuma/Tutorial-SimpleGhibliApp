import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../../models/film';

@Component({
  selector: 'card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.css'],
})
export class CardFilmComponent implements OnInit {

  @Input() film : Film;

  imagePath = "assets/ghibli.png"

  constructor() { 
    
  }

  ngOnInit() {
  }

}
