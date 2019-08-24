import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Pet } from '../models/Pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  // local json file where data is currently stored
  petsUrl = 'assets/pets/pets.json';
  // url where the data will post
  url = 'http://localhost:3000/getPetSearch';

  constructor(private http: HttpClient) { }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petsUrl);
  }

  getPetSearch(pet: Pet) {
    return this.http.post<any>(this.url, pet);
  }
}
