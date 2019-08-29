import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Pet } from '../models/Pet';
import { ValidatorFn, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  // local json file where data is currently stored
  petsUrl = 'assets/pets/pets.json';
  // url where the data will post, start this fake API by entering \server directory and entering 'node server' in a terminal
  url = 'http://localhost:3000/getPetSearch';

  constructor(private http: HttpClient) { }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petsUrl);
  }

  getPetSearch(pet: Pet) {
    return this.http.post<any>(this.url, pet)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}


