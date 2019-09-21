import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Pet } from '../models/Pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  // URL WHERE HTTP REQUEST MUST BE MADE - local json file where data is currently stored
  private petsUrl = 'assets/pets/pets.json';
  // URL WHERE DATA WILL POST, start this fake API by entering \server directory and entering 'node server' in a terminal
  url = 'http://localhost:3000/getPetSearch';

  // Search Filters
  // setGroupFilter$ = new Subject<any>();
  // getGroupFilter = this.setGroupFilter$.asObservable();

  constructor(private http: HttpClient) { }

  // fetchPets(): Observable<any> {
  //   return of(PETS); // ToDo: 9/20/2019 Fix name 'of' and name //'PETS'
  // }

  // HTTP GET ALL PETS RETURNS AN OBSERVABLE COVERTED INTO Pet[] ARRAY. Pet[] RETURNED TO SUBSCRIBED COMPONENT
  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petsUrl);
  }

  getPetSearch(pet: Pet) {
    return this.http.post<any>(this.url, pet)
      .pipe(catchError(this.errorHandler));
  }

  // ERROR HANDLER
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
