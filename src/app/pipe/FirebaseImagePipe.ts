import { Pipe, PipeTransform } from '@angular/core';

import { FilmsService } from '../services/films.service';

@Pipe({ name: "toFirebaseImage" }) 
export class FirebaseImagePipe implements PipeTransform{

    constructor(
        private service: FilmsService
    ){}

    transform(value: string): string {
        return this.service.getImage(value);
    }

}